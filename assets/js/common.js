/* =========================================================
   Criminal & Behavioral Profiling — 共用 JS 工具
   © 葉欲禾 (Gary Yu-Ho YEH)
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_LANG_KEY = "cbp-lang";

  // === 語言切換 ===
  const I18N = {
    setLanguage(lang) {
      const valid = ["zh", "en"];
      if (!valid.includes(lang)) lang = "zh";
      document.body.classList.remove("lang-zh", "lang-en");
      document.body.classList.add("lang-" + lang);
      try { localStorage.setItem(STORAGE_LANG_KEY, lang); } catch (e) {}
      document.querySelectorAll(".lang-toggle button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
      });
      document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
      // 自訂事件，讓動態元件（如 quiz）可重繪
      document.dispatchEvent(new CustomEvent("lang:changed", { detail: { lang } }));
    },
    getLanguage() {
      try { return localStorage.getItem(STORAGE_LANG_KEY) || "zh"; }
      catch (e) { return "zh"; }
    },
    init() {
      this.setLanguage(this.getLanguage());
      document.querySelectorAll(".lang-toggle button").forEach(btn => {
        btn.addEventListener("click", () => this.setLanguage(btn.dataset.lang));
      });
    },
  };

  // === Barnum demo interactivity ===
  function initBarnumDemo() {
    document.querySelectorAll(".barnum-demo").forEach(demo => {
      const allChecks = demo.querySelectorAll('input[type="checkbox"]');
      const result = demo.querySelector(".barnum-result");
      // 取目前顯示語言區塊內的 checkbox
      const visibleChecks = () => {
        const lang = document.body.classList.contains("lang-en") ? "en" : "zh";
        return demo.querySelectorAll(`.lang-${lang}-only input[type="checkbox"]`);
      };
      const update = () => {
        const checks = visibleChecks();
        const matched = Array.from(checks).filter(c => c.checked).length;
        const total = checks.length;
        const percent = total ? Math.round((matched / total) * 100) : 0;
        const zhMsg = `<strong>你打勾了 ${matched} / ${total} 項 (${percent}%)</strong><br>${
          percent >= 60
            ? "看到了吧？這些「巴納姆陳述句 (Barnum statements)」其實適用於大多數人。這正是 Brussel 等早期 profilers 容易讓人覺得「準到嚇人」的祕密：句子寫得越模糊，越能套到任何人身上。"
            : "即便你打勾的較少，這些句子仍是描述「一般人」的萬用模板。真正的科學側寫應該指向具體、可驗證的特徵。"
        }`;
        const enMsg = `<strong>You checked ${matched} / ${total} items (${percent}%)</strong><br>${
          percent >= 60
            ? "See? These <em>Barnum statements</em> apply to almost everyone. This is exactly why early profilers like Brussel often seemed eerily accurate: vague enough to fit anyone."
            : "Even if you checked fewer, the statements remain generic descriptions of an average person. Genuine scientific profiling should target specific, verifiable features."
        }`;
        result.innerHTML = `<div class="lang-zh-only">${zhMsg}</div><div class="lang-en-only">${enMsg}</div>`;
        result.classList.add("visible");
      };
      allChecks.forEach(c => c.addEventListener("change", update));
      // 同步：在同一個 demo 兩語言版本之間，依勾選順序鏡像
      const sync = (e) => {
        const all = Array.from(allChecks);
        const idxInAll = all.indexOf(e.target);
        if (idxInAll < 0) return;
        const visible = Array.from(visibleChecks());
        const visIdx = visible.indexOf(e.target);
        if (visIdx < 0) return;
        // 找另一語言對應位置的 checkbox
        const otherLang = document.body.classList.contains("lang-en") ? "zh" : "en";
        const other = demo.querySelectorAll(`.lang-${otherLang}-only input[type="checkbox"]`);
        if (other[visIdx]) other[visIdx].checked = e.target.checked;
      };
      allChecks.forEach(c => c.addEventListener("change", sync));
      // 語言切換時重新計算
      document.addEventListener("lang:changed", update);
    });
  }

  // === Smooth scroll for TOC anchors ===
  function initTocLinks() {
    document.querySelectorAll(".chapter-toc a[href^='#']").forEach(a => {
      a.addEventListener("click", e => {
        const id = a.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          const top = el.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: "smooth" });
          history.replaceState(null, "", "#" + id);
        }
      });
    });
  }

  // === 5 areas flip cards ===
  function initAreaCards() {
    document.querySelectorAll(".area-card").forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("expanded");
        const detail = card.querySelector(".area-detail");
        if (detail) detail.classList.toggle("visible");
      });
    });
  }

  // === Boot ===
  document.addEventListener("DOMContentLoaded", () => {
    I18N.init();
    initBarnumDemo();
    initTocLinks();
    initAreaCards();
    // 公開到全域便於章節頁直接呼叫
    window.CBP = window.CBP || {};
    window.CBP.I18N = I18N;
  });
})();
