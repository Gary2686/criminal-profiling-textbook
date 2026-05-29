/* =========================================================
   Criminal & Behavioral Profiling — 隨機選擇題引擎
   - 從章節題庫中隨機抽 10 題
   - 即時評分 + 顯示正解與解說
   - 預留 hook：未來可在 onSubmit 寫入後端資料庫
   © 葉欲禾 (Gary Yu-Ho YEH)
   ========================================================= */

(function () {
  "use strict";

  // Fisher-Yates 洗牌
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRandom(bank, n) {
    return shuffle(bank).slice(0, Math.min(n, bank.length));
  }

  class Quiz {
    constructor(opts) {
      this.container = opts.container;
      this.bank = opts.bank;        // 題庫
      this.count = opts.count || 10;
      this.onSubmit = opts.onSubmit || null;
      this.currentQuestions = [];
      this.answers = {};
      this.submitted = false;
      this.render();
      document.addEventListener("lang:changed", () => {
        if (this.currentQuestions.length) this.render(true);
      });
    }

    render(keepSelection = false) {
      const prevAnswers = keepSelection ? { ...this.answers } : {};
      if (!keepSelection) {
        this.currentQuestions = pickRandom(this.bank, this.count);
        this.answers = {};
        this.submitted = false;
      }
      const lang = document.body.classList.contains("lang-en") ? "en" : "zh";
      const txt = {
        title:    { zh: "本章自我評量", en: "Chapter Quiz" },
        intro:    {
          zh: "系統會從題庫中隨機抽出 10 題。完成後點「提交評分」即可看到分數與解析；點「重新抽題」會再產生一份新題目。",
          en: "10 questions are randomly drawn from the question bank. Click \"Submit\" to grade and reveal explanations; click \"Reshuffle\" to draw a fresh set."
        },
        submit:   { zh: "提交評分", en: "Submit" },
        reshuffle:{ zh: "重新抽題", en: "Reshuffle" },
        reveal:   { zh: "顯示所有答案", en: "Reveal All" },
        scoreHd:  { zh: "你的分數", en: "Your Score" },
        outOf:    { zh: (a, b) => `共 ${a} 題，答對 ${b} 題`, en: (a, b) => `${b} of ${a} correct` },
        pct:      { zh: "正確率", en: "Accuracy" },
        unanswered:{ zh: "尚未作答", en: "Not answered" },
        correct:  { zh: "✓ 正確", en: "✓ Correct" },
        wrong:    { zh: "✗ 答錯", en: "✗ Incorrect" },
        explLabel:{ zh: "解說：", en: "Explanation:" },
      };

      const html = `
        <div class="lang-zh-only"><h2 style="margin-top:0">${txt.title.zh}</h2></div>
        <div class="lang-en-only"><h2 style="margin-top:0">${txt.title.en}</h2></div>
        <div class="lang-zh-only"><p>${txt.intro.zh}</p></div>
        <div class="lang-en-only"><p>${txt.intro.en}</p></div>
        ${this.currentQuestions.map((q, idx) => this.renderQuestion(q, idx, prevAnswers)).join("")}
        <div class="quiz-actions">
          <button class="btn btn-primary" data-action="submit">
            <span class="lang-zh-only">${txt.submit.zh}</span>
            <span class="lang-en-only">${txt.submit.en}</span>
          </button>
          <button class="btn btn-secondary" data-action="reshuffle">
            <span class="lang-zh-only">${txt.reshuffle.zh}</span>
            <span class="lang-en-only">${txt.reshuffle.en}</span>
          </button>
          <button class="btn btn-accent" data-action="reveal">
            <span class="lang-zh-only">${txt.reveal.zh}</span>
            <span class="lang-en-only">${txt.reveal.en}</span>
          </button>
        </div>
        <div class="quiz-score" data-role="score"></div>
      `;
      this.container.innerHTML = html;
      this.bindEvents();
    }

    renderQuestion(q, idx, prevAnswers) {
      const num = idx + 1;
      const options = (lang) => q.options[lang].map((opt, i) => {
        const sel = prevAnswers[q.id] === i ? "checked" : "";
        return `<label class="quiz-option" data-q="${q.id}" data-opt="${i}">
                  <input type="radio" name="q-${q.id}" value="${i}" ${sel}>
                  <span>${String.fromCharCode(65 + i)}. ${opt}</span>
                </label>`;
      }).join("");
      return `
        <div class="quiz-question" data-qid="${q.id}">
          <div class="quiz-q-text">
            <span class="q-number">${num}</span>
            <span class="lang-zh-only">${q.question.zh}</span>
            <span class="lang-en-only">${q.question.en}</span>
          </div>
          <div class="quiz-options">
            <div class="lang-zh-only">${options("zh")}</div>
            <div class="lang-en-only">${options("en")}</div>
          </div>
          <div class="quiz-explanation" data-role="explanation">
            <strong><span class="lang-zh-only">解說：</span><span class="lang-en-only">Explanation:</span></strong>
            <span class="lang-zh-only">${q.explanation.zh}</span>
            <span class="lang-en-only">${q.explanation.en}</span>
          </div>
        </div>`;
    }

    bindEvents() {
      this.container.querySelectorAll("input[type='radio']").forEach(input => {
        input.addEventListener("change", e => {
          const label = e.target.closest(".quiz-option");
          const qid = parseInt(label.dataset.q, 10);
          const opt = parseInt(label.dataset.opt, 10);
          this.answers[qid] = opt;
          // 同步另一語言版本的選取
          const all = this.container.querySelectorAll(`input[name="q-${qid}"][value="${opt}"]`);
          all.forEach(i => { i.checked = true; });
        });
      });
      this.container.querySelector("[data-action='submit']").addEventListener("click", () => this.grade(false));
      this.container.querySelector("[data-action='reshuffle']").addEventListener("click", () => {
        this.answers = {};
        this.submitted = false;
        this.render(false);
      });
      this.container.querySelector("[data-action='reveal']").addEventListener("click", () => this.grade(true));
    }

    grade(forceReveal) {
      let correct = 0;
      this.currentQuestions.forEach(q => {
        const block = this.container.querySelector(`.quiz-question[data-qid="${q.id}"]`);
        const userAns = this.answers[q.id];
        const labels = block.querySelectorAll(".quiz-option");
        labels.forEach(lbl => {
          lbl.classList.remove("correct-answer", "wrong-answer");
          const optIdx = parseInt(lbl.dataset.opt, 10);
          if (optIdx === q.answer) lbl.classList.add("correct-answer");
          if (userAns !== undefined && optIdx === userAns && userAns !== q.answer) {
            lbl.classList.add("wrong-answer");
          }
        });
        const expl = block.querySelector("[data-role='explanation']");
        if (expl) expl.classList.add("visible");
        if (userAns === q.answer) correct++;
      });
      const total = this.currentQuestions.length;
      const pct = Math.round((correct / total) * 100);
      const scoreBox = this.container.querySelector("[data-role='score']");
      const lang = document.body.classList.contains("lang-en") ? "en" : "zh";
      const verdict = {
        zh: pct >= 90 ? "📚 出色！對第一章掌握得非常好。"
          : pct >= 70 ? "👍 不錯！可再回去複習錯題加深理解。"
          : pct >= 50 ? "💡 還有進步空間，重點是要理解觀念背後的邏輯。"
          : "🔍 建議重新閱讀章節，特別是 Brussel 案例、Barnum 陳述句與五大側寫領域。",
        en: pct >= 90 ? "📚 Excellent grasp of Chapter 1!"
          : pct >= 70 ? "👍 Good work — revisit the missed items to deepen understanding."
          : pct >= 50 ? "💡 Room to grow — focus on the reasoning behind each concept."
          : "🔍 Re-read the chapter, especially the Brussel cases, Barnum statements, and the five areas of profiling.",
      };
      scoreBox.innerHTML = `
        <div class="lang-zh-only">
          <div>${"你的分數"}</div>
          <span class="score-num">${correct} / ${total}</span>
          <div class="score-detail">正確率 ${pct}%</div>
          <div style="margin-top:.75rem">${verdict.zh}</div>
        </div>
        <div class="lang-en-only">
          <div>Your Score</div>
          <span class="score-num">${correct} / ${total}</span>
          <div class="score-detail">Accuracy ${pct}%</div>
          <div style="margin-top:.75rem">${verdict.en}</div>
        </div>`;
      scoreBox.classList.add("visible");
      this.submitted = true;

      // 預留 hook：未來可接資料庫紀錄
      if (typeof this.onSubmit === "function") {
        try {
          this.onSubmit({
            chapterId: this.bank.chapterId || null,
            total, correct, pct,
            answers: { ...this.answers },
            questionIds: this.currentQuestions.map(q => q.id),
            timestamp: new Date().toISOString(),
          });
        } catch (e) { console.error("onSubmit hook error", e); }
      }
    }
  }

  window.CBP = window.CBP || {};
  window.CBP.Quiz = Quiz;
})();
