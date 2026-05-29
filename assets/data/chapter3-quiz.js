/* Chapter 3 Question Bank — © 葉欲禾 (Gary Yu-Ho YEH) */
window.CBP = window.CBP || {};
window.CBP.QuizBank = window.CBP.QuizBank || {};
window.CBP.QuizBank.chapter3 = {
  chapterId: 3,
  questions: [
    {
      id: 301,
      question: { zh: "Rainbow 與 Gregory (2011) 指出 profiling 三大常見誤解。下列何者「不是」其一？", en: "Per Rainbow & Gregory (2011), which is NOT a common misconception about profiling?" },
      options: {
        zh: ["Profiler 主要工作是預測兇手人格", "Profiler 的工作是「破案」", "Profiling 已是成熟的科學", "Profiler 必須拒絕和警方互動"],
        en: ["Profilers' main job is predicting offender personality", "Profilers' job is to solve crimes", "Profiling is an established science", "Profilers must refuse to interact with police"]
      },
      answer: 3,
      explanation: {
        zh: "三大誤解為：(1)人格預測有效 (2)破案是 profiler 工作 (3)profiling 已是科學。實際上 profiler 應與警方密切互動，但要保持獨立判斷。",
        en: "The three misconceptions are: (1) personality prediction validity (2) profilers solve crimes (3) profiling is established science. Profilers actually interact closely with police while keeping independent judgment."
      }
    },
    {
      id: 302,
      question: { zh: "Charles Peirce 的「四種取得知識方式」中，哪一種最依賴「我一直都這樣相信」？", en: "Of Peirce's four ways of acquiring knowledge, which relies most on 'I have always believed this'?" },
      options: { zh: ["Tenacity（固執法）", "Authority（權威法）", "A priori（先驗法）", "Science（科學法）"], en: ["Tenacity", "Authority", "A priori", "Science"] },
      answer: 0,
      explanation: {
        zh: "Method of tenacity 強調「不論他人或證據怎麼說，我都堅信」 — 在 profiling 中即是 belief persistence 的根源。",
        en: "Method of tenacity = 'I know I'm right regardless of evidence' — the root of belief persistence in profiling."
      }
    },
    {
      id: 303,
      question: { zh: "Karl Popper 提出科學陳述的關鍵特徵是？", en: "Popper's key criterion for a scientific statement?" },
      options: {
        zh: ["可被驗證 (verifiable)", "可被否證 (falsifiable)", "可被多次重複", "符合多數人直覺"],
        en: ["Verifiability", "Falsifiability", "Reproducibility alone", "Intuitive consensus"]
      },
      answer: 1,
      explanation: {
        zh: "「所有天鵝都是白的」可被一隻黑天鵝否證。如果無法設想能否證它的情境，該陳述就不是科學的。Profiler 常見的精神分析式詮釋多半不可否證。",
        en: "'All swans are white' can be falsified by one black swan. If no condition could refute a claim, it isn't scientific. Many psychoanalytic profile claims aren't falsifiable."
      }
    },
    {
      id: 304,
      question: { zh: "David Canter 投入側寫研究的契機是？", en: "What case drew David Canter into profiling research?" },
      options: {
        zh: ["波士頓勒殺者案", "倫敦 Railway Rapist 案（John Duffy、David Mulcahy）", "Madeleine McCann 失蹤案", "Yorkshire Ripper 案"],
        en: ["Boston Strangler", "London Railway Rapist case (John Duffy, David Mulcahy)", "Madeleine McCann disappearance", "Yorkshire Ripper"]
      },
      answer: 1,
      explanation: {
        zh: "1986 年 Scotland Yard 邀請 Canter 介入連續鐵路強姦案。其 17 項側寫雖未直接破案，但成功指出 Duffy 的居住區域，促成 investigative psychology 學科誕生。",
        en: "Scotland Yard called Canter in for the serial Railway Rapist case in 1986. His 17-trait profile didn't directly catch Duffy but pinpointed his neighborhood, birthing investigative psychology."
      }
    },
    {
      id: 305,
      question: { zh: "投資 Canter 學派的關鍵特徵是？", en: "Defining feature of Canter's school?" },
      options: {
        zh: ["臨床直覺", "Actuarial（精算）取徑 — 統計、可重現、實證導向", "純粹 Freudian 分析", "靠回憶錄推廣"],
        en: ["Clinical intuition", "Actuarial — statistical, reproducible, empirical", "Pure Freudian analysis", "Memoir-based promotion"]
      },
      answer: 1,
      explanation: {
        zh: "Canter 強調「the skill must reside in systematic social science」而非 profiler 個人天賦。他建立 investigative psychology 學程於 Liverpool / Huddersfield。",
        en: "Canter argued 'the skill must reside in systematic social science,' not individual genius. He founded investigative psychology programs at Liverpool / Huddersfield."
      }
    },
    {
      id: 306,
      question: { zh: "1992 年 Rachel Nickell 案中，心理學家 Paul Britton 的「honeytrap」策略導致？", en: "In the 1992 Rachel Nickell case, Paul Britton's 'honeytrap' strategy resulted in?" },
      options: {
        zh: ["快速破案", "Colin Stagg 被冤枉羈押超過一年，後被釋放並獲警方道歉，真兇後來自首", "Britton 升任 FBI 顧問", "Honeytrap 成為標準偵查程序"],
        en: ["Quick case solving", "Colin Stagg held over a year in pretrial, eventually freed with police apology; the true killer later confessed", "Britton promoted to FBI consultant", "Honeytrap became standard procedure"]
      },
      answer: 1,
      explanation: {
        zh: "此案促成 2001 年英國 ACPO 將「offender profiler」改稱 BIA、並要求 profiler 必須經 ACPO 認證。",
        en: "This case led ACPO in 2001 to rename 'offender profiler' as BIA and require ACPO certification."
      }
    },
    {
      id: 307,
      question: { zh: "Canter 提出 scientific profiling 必須回答的四個核心問題，下列何者「不是」其一？", en: "Which is NOT one of Canter's four core research questions?" },
      options: {
        zh: [
          "現場有哪些行為特徵可幫助辨識兇手？",
          "如何辨識犯罪間與兇手間的差異？",
          "可以對兇手特徵做出哪些推論？",
          "兇手是否值得獲得心理治療？"
        ],
        en: [
          "What behavioral features at scene help identify offenders?",
          "How to indicate differences between crimes and offenders?",
          "What inferences can identify the offender?",
          "Does the offender deserve psychotherapy?"
        ]
      },
      answer: 3,
      explanation: {
        zh: "Canter 四問：行為特徵、差異辨識、特徵推論、案件連結。心理治療不在側寫範圍。",
        en: "Canter's four: behavioral features, distinguishing, inferring, linking. Therapy is outside profiling."
      }
    },
    {
      id: 308,
      question: { zh: "Canter 的 A → C 方程式中，A、C、→ 分別代表？", en: "In Canter's A → C equation, what do A, C, and → represent?" },
      options: {
        zh: [
          "A=Actions（犯案前已知行為）；C=Characteristics（兇手特徵）；→=科學邏輯推論",
          "A=Arrest；C=Conviction；→=時間",
          "A=Anger；C=Calm；→=情緒轉折",
          "A=Adult；C=Child；→=年齡"
        ],
        en: [
          "A=Actions (known crime behaviors); C=Characteristics (offender traits); → = scientific/logical inference",
          "A=Arrest; C=Conviction; → = time",
          "A=Anger; C=Calm; → = emotional shift",
          "A=Adult; C=Child; → = age"
        ]
      },
      answer: 0,
      explanation: {
        zh: "「從現場已知行為 → 推論兇手特徵」 — 需要清楚交代推論依據（research、base rate）。",
        en: "From known scene actions → infer offender characteristics — with explicit grounds (research, base rates)."
      }
    },
    {
      id: 309,
      question: { zh: "「Psychological signature（心理簽名）」與「crime scene signature（現場簽名）」最大差別是？", en: "Difference between 'psychological signature' and 'crime scene signature'?" },
      options: {
        zh: [
          "Crime scene signature 是兇手「刻意」留下的標記；psychological signature 是「無意識」流露的行為慣性（語言、步態、敲擊節奏）",
          "兩者完全相同",
          "Psychological signature 只在性犯罪出現",
          "Crime scene signature 只在命案出現"
        ],
        en: [
          "Crime scene signature is the deliberate calling card; psychological signature is unconscious behavioral consistency (speech, gait, Morse cadence)",
          "Identical",
          "Psychological signature only in sex crimes",
          "Crime scene signature only in homicides"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Gladwell 講二戰英國攔截員從 Morse cadence 認出德國電報員即是 psychological signature 的經典案例。",
        en: "Gladwell's example: British WWII interceptors identifying German operators by Morse cadence — a classic psychological signature."
      }
    },
    {
      id: 310,
      question: { zh: "Morris 與 Miller (1985) 三種預測方法，下列配對何者錯誤？", en: "Per Morris & Miller (1985), which prediction-method pairing is WRONG?" },
      options: {
        zh: [
          "Anamnestic：基於該特定個人在特定情境的表現",
          "Actuarial：基於具相似特徵的群體統計",
          "Clinical：基於臨床經驗與直覺",
          "Anamnestic：基於 DNA 比對"
        ],
        en: [
          "Anamnestic: based on how this specific person acts in specific situations",
          "Actuarial: based on group statistics of similar persons",
          "Clinical: based on clinical experience and intuition",
          "Anamnestic: based on DNA matching"
        ]
      },
      answer: 3,
      explanation: {
        zh: "Anamnestic ≠ DNA。Morris & Miller 認為最佳預測常是三者結合。",
        en: "Anamnestic ≠ DNA. Morris & Miller argue the best predictions combine all three."
      }
    },
    {
      id: 311,
      question: { zh: "ViCLAS 是哪個國家發展的、依靠哪些資料做案件連結？", en: "Which country developed ViCLAS and what data does it use?" },
      options: {
        zh: [
          "加拿大 RCMP 發展，整合 MO + 現場簽名 + 行為資訊；亦被英、奧、比、紐等國採用",
          "美國 FBI 發展，只比對 DNA",
          "英國蘇格蘭場發展，只比對指紋",
          "聯合國發展，只比對護照"
        ],
        en: [
          "Canadian RCMP; integrates MO + scene signature + behavioral info; also adopted by U.K., Austria, Belgium, New Zealand, etc.",
          "U.S. FBI; DNA only",
          "Scotland Yard; fingerprints only",
          "UN; passports only"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Bennell, Snook 等指出 ViCLAS 有四大潛在問題（編碼可靠性、資料準確性、行為一致性、分析能力）皆未經充分實證支持。",
        en: "Bennell, Snook et al. flag four assumptions (coding reliability, data accuracy, behavioral consistency, analyst skill) — none firmly supported empirically."
      }
    },
    {
      id: 312,
      question: { zh: "Moffitt 的「Life Course-Persistent（LCP）」與「Adolescent-Limited（AL）」兩條發展路徑差別？", en: "Moffitt's LCP vs AL pathways — main difference?" },
      options: {
        zh: [
          "LCP 從 3 歲以下就出現問題，神經心理缺陷 + 家庭環境互動，終身犯罪；AL 主要青少年期才出現，多在 18–26 歲緩解",
          "LCP 只發生於男性",
          "兩者完全相同",
          "AL 比 LCP 更暴力"
        ],
        en: [
          "LCP starts before age 3 (neuropsych deficits + family environment), lifelong; AL starts in adolescence and desists by age 18–26",
          "LCP is male-only",
          "Identical",
          "AL is more violent than LCP"
        ]
      },
      answer: 0,
      explanation: {
        zh: "LCP 占人口 5–10%（女性僅 1–2%），但其涉案率極高；一項研究中追蹤到 35 歲時平均 40 件犯罪、佔樣本所有犯罪 61%。",
        en: "LCP is 5–10% of the population (females only 1–2%) but commits a disproportionate share; one study found 40 crimes by age 35, 61% of all crimes in sample."
      }
    },
    {
      id: 313,
      question: { zh: "Steinberg 的青少年腦發展研究對 profiling 的啟示是？", en: "Implication of Steinberg's adolescent brain research for profiling?" },
      options: {
        zh: [
          "現場顯示衝動、不成熟、高風險行為，可能是 24 歲以下年輕犯罪者；自我控制相關腦區（前額葉）約到 25 歲才完全發展",
          "全部犯罪者都是 50 歲以上",
          "青少年腦比成人腦更善於計畫",
          "青少年完全不會犯罪"
        ],
        en: [
          "Impulsive, immature, high-risk scenes suggest offenders under 24; self-control brain regions (frontal cortex) mature only ~age 25",
          "All offenders are 50+",
          "Adolescent brain plans better than adults",
          "Adolescents don't commit crimes"
        ]
      },
      answer: 0,
      explanation: {
        zh: "「Cowboy burglar」（衝動、暴力闖入、雜亂）多為青少年；專業竊賊則計畫周詳。Steinberg 區分「認知成熟」與「心理社會成熟」可以差數年。",
        en: "'Cowboy burglars' (smash-and-grab) are typically young; professionals plan carefully. Steinberg distinguishes cognitive maturity from psychosocial maturity by several years."
      }
    },
    {
      id: 314,
      question: { zh: "犯罪心理病態（psychopathy）的盛行率在強姦犯與兒童性侵犯中分別是？", en: "Psychopathy prevalence among rapists vs child molesters?" },
      options: {
        zh: [
          "強姦犯約 40–50%，兒童性侵犯約 10–15%",
          "兩者都是 5% 以下",
          "兒童性侵犯約 90%",
          "兩者都是 100%"
        ],
        en: [
          "Rapists ~40–50%, child molesters ~10–15%",
          "Both under 5%",
          "Child molesters ~90%",
          "Both 100%"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Gretton 等 (2001)、Porter 等：強姦犯中 psychopathy 高 → 行為較易非性動機（憤怒、報復、虐待、機會性）。",
        en: "Gretton et al. (2001), Porter et al.: high psychopathy among rapists → more nonsexual motives (anger, revenge, sadism, opportunism)."
      }
    },
    {
      id: 315,
      question: { zh: "Salekin 等 (2006) 提出 criminal psychopath 的四個核心特質群組，下列何者「不」屬於？", en: "Per Salekin et al. (2006), which is NOT one of the four core psychopath trait clusters?" },
      options: {
        zh: [
          "人際印象管理（撒謊、滑頭、魅力）",
          "衝動且不負責的生活風格",
          "情感/情緒功能缺損（缺乏悔意、薄弱良知）",
          "高度社會利他主義"
        ],
        en: [
          "Interpersonal impression management (lying, glib, charm)",
          "Impulsive and irresponsible lifestyle",
          "Deficient affective experience (low remorse, weak conscience)",
          "High social altruism"
        ]
      },
      answer: 3,
      explanation: {
        zh: "第四群為「antisocial tendencies」 — 缺乏自我調節、高再犯率、嚴重多元犯罪史。利他絕非 psychopathy 特徵。",
        en: "The fourth cluster is 'antisocial tendencies' — poor self-regulation, high recidivism, severe and diverse criminal history. Altruism is not part of psychopathy."
      }
    },
    {
      id: 316,
      question: { zh: "Kahneman 與 Tversky 的 heuristic 概念，「representative heuristic（代表性捷思）」在 profiling 中的表現？", en: "How does the 'representativeness heuristic' show up in profiling?" },
      options: {
        zh: [
          "Profiler 用「這像我幾年前那案」直接套用，忽略 base rate",
          "Profiler 完全依賴 DNA",
          "Profiler 只看現場照片",
          "Profiler 不做任何推論"
        ],
        en: [
          "Profiler matches via 'this is like a case I had years ago' and ignores base rates",
          "Profiler relies only on DNA",
          "Profiler only views scene photos",
          "Profiler makes no inferences"
        ]
      },
      answer: 0,
      explanation: {
        zh: "個人經驗鮮明、具體、生動 → 容易被優先採用，但可能與 base rate 衝突。Ronson (2010) 的 Britton vs Rainbow 訪談是經典對比。",
        en: "Personal experience is vivid and concrete and gets priority — but may conflict with base rates. Ronson's Britton-vs-Rainbow interview is the classic contrast."
      }
    },
    {
      id: 317,
      question: { zh: "「availability heuristic（可得性捷思）」最容易令 profiler 犯什麼錯？", en: "How can the availability heuristic mislead a profiler?" },
      options: {
        zh: [
          "把容易想到的案件當成「典型」 — 例如媒體大幅報導的案件容易被取用，但其機率未必高",
          "完全依靠統計數字",
          "拒絕任何 base rate",
          "永不做推論"
        ],
        en: [
          "Treating easily recalled (often media-amplified) cases as 'typical' even if their probability is low",
          "Relying entirely on statistics",
          "Refusing any base rate",
          "Never inferring"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Tversky & Kahneman 經典例子：以為「以 k 開頭」的英文字較多，其實「第三字母是 k」的字多兩倍以上。",
        en: "Tversky & Kahneman's classic: people think English words start with 'k' more often, but words with 'k' as 3rd letter are over twice as common."
      }
    },
    {
      id: 318,
      question: { zh: "Base rate fallacy（基本率謬誤）在 Rainbow 等 (2011) 舉的 90 歲老婦案中如何展現？", en: "How did the base-rate fallacy appear in Rainbow et al.'s (2011) 90-year-old woman case?" },
      options: {
        zh: [
          "現場有蠟燭、剝出的心臟、十字形撥火棒，看似教派儀式 — 但 base rate 指出殺害長者多為熟識且鄰近者，最終逮捕的是 17 歲送報生",
          "兇手是德魯伊教徒",
          "現場有 DNA 直接破案",
          "警方拒絕進場"
        ],
        en: [
          "Candles, removed heart, fireplace pokers in a crucifix — looked occult, but base rates say elderly killers tend to be acquaintances nearby. The killer was a 17-year-old newspaper boy",
          "A Druid",
          "DNA cracked it immediately",
          "Police refused entry"
        ]
      },
      answer: 0,
      explanation: {
        zh: "兇手刻意佈置（staging）成神秘儀式，但 base rate + 法醫足跡指向他。",
        en: "The killer staged the scene as ritual to misdirect, but base rates + a forensic footprint led to him."
      }
    },
    {
      id: 319,
      question: { zh: "「Expressions of uncertainty」中，Heuer (1999) 為什麼建議 profiler 給機率時應給「具體百分比」而不只是「可能、或許」？", en: "Why does Heuer (1999) recommend specific percentages over 'could/might'?" },
      options: {
        zh: [
          "「可能」可指 1% 到 99% 任何值，警方易以自己預設詮釋；具體百分比有助偵查者理解 profiler 的真實信心",
          "百分比看起來比較專業",
          "為了向法庭呈現",
          "為了媒體公關"
        ],
        en: [
          "'Could' can mean anywhere from 1% to 99%; explicit percentages stop investigators from filling the ambiguity with their own assumptions",
          "Percentages look more professional",
          "For courtroom presentation",
          "For media PR"
        ]
      },
      answer: 0,
      explanation: {
        zh: "模糊的機率語言加上 confirmation bias，會讓警方把 profile 看成「強烈支持自己原本假設」。",
        en: "Vague probability + confirmation bias makes investigators read the profile as 'strongly supporting' their priors."
      }
    },
    {
      id: 320,
      question: { zh: "Focus 3.3 的 BIA 模範報告，下列哪一項「不是」其特徵？", en: "Which is NOT a feature of Focus 3.3's model BIA report?" },
      options: {
        zh: [
          "開頭附 Caveat / Disclaimer 強調報告為「偵查工具」",
          "明列作者資格與同儕審查建議",
          "包含直接的「兇手就是 X」的指控",
          "提供 risk assessment 與調查建議"
        ],
        en: [
          "Opens with Caveat/Disclaimer that it is an 'investigative tool'",
          "Lists authors' credentials and recommends peer review",
          "Contains a direct accusation 'the offender is X'",
          "Provides risk assessment and investigative recommendations"
        ]
      },
      answer: 2,
      explanation: {
        zh: "模範報告強調「不指認無辜或有罪」，並提供基於研究的洞見。直接指控與 profiler 角色不符。",
        en: "The model report stresses it doesn't establish innocence or guilt; direct accusations are not the profiler's role."
      }
    },
    {
      id: 321,
      question: { zh: "Belief perseverance（信念持續）在偵辦中為何特別危險？", en: "Why is belief perseverance especially dangerous in investigations?" },
      options: {
        zh: [
          "一旦形成「故事敘事」，偵查員與 profiler 都會抗拒反證，並轉為 confirmation bias",
          "會增加 DNA 比對速度",
          "會自動更新最新研究",
          "會降低時間壓力"
        ],
        en: [
          "Once a narrative forms, both detectives and profilers resist contradictory evidence, sliding into confirmation bias",
          "It speeds up DNA matching",
          "It auto-updates with new research",
          "It reduces time pressure"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Rainbow 等 (2011)：「偵辦中為了讓資訊make sense，officers 會建構故事敘事，此後極難改變。」",
        en: "Rainbow et al. (2011): 'Officers construct story-like narratives to make sense of info; once formed, they are very hard to change.'"
      }
    },
    {
      id: 322,
      question: { zh: "Hicks 與 Sales (2006) 認為 scientific profiling 最缺乏的是？", en: "What do Hicks & Sales (2006) identify as the biggest gap in scientific profiling?" },
      options: {
        zh: [
          "大型且涵蓋多變項的犯罪資料庫（不能僅做 bivariate analysis）",
          "更多精神分析理論",
          "更多 FBI 探員",
          "更多媒體曝光"
        ],
        en: [
          "Large multivariate crime databases (not just bivariate analysis)",
          "More psychoanalytic theory",
          "More FBI agents",
          "More media coverage"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Hicks & Sales 主張 multivariate 模型整合動機、人格、行為，才能支撐預測。",
        en: "Hicks & Sales argue multivariate models integrating motive, personality, behavior are needed for prediction."
      }
    },
    {
      id: 323,
      question: { zh: "Goodwill 與 Alison (2006) 提出的「filter model（過濾模型）」是用來做什麼？", en: "What is the Goodwill-Alison (2006) 'filter model' for?" },
      options: {
        zh: [
          "用樹狀圖（decision tree）以最顯著、最可靠的現場資訊優先順序篩選嫌疑人",
          "過濾 DNA 樣本中的雜質",
          "篩選新聞稿",
          "判斷哪些 profiler 能進法庭"
        ],
        en: [
          "A decision-tree top-down model prioritizing suspects via the most salient and reliable scene info",
          "Filtering DNA impurities",
          "Filtering press releases",
          "Deciding which profilers may testify"
        ]
      },
      answer: 0,
      explanation: {
        zh: "整合 anamnestic、actuarial、experiential 三類預測知識，提供「可調整於偵查員經驗、又有實證透明」的決策框架。",
        en: "Integrates anamnestic, actuarial, experiential knowledge into a 'malleable yet transparent' decision support framework."
      }
    },
    {
      id: 324,
      question: { zh: "為什麼德國的「行為案件分析（behavioural case analysis）」常以團隊執行？", en: "Why does Germany's 'behavioural case analysis' use teams?" },
      options: {
        zh: [
          "為了降低 cognitive biases、提高方法的 inter-rater reliability",
          "因為德國法律規定",
          "因為團隊薪水較高",
          "因為 FBI 要求"
        ],
        en: [
          "To reduce cognitive biases and raise inter-rater reliability",
          "Required by German law",
          "Teams pay better",
          "FBI requirement"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Dern 等 (2009)：團隊+共同方法 → 兩人以上對同一現場應達到一致結論。",
        en: "Dern et al. (2009): team + shared method → two analysts on the same scene should reach similar conclusions."
      }
    },
    {
      id: 325,
      question: { zh: "本章作者把「scientific profiling」與「clinical profiling」的關係定位為？", en: "How does the chapter position 'scientific' vs 'clinical' profiling?" },
      options: {
        zh: [
          "互斥；只能擇一",
          "Clinical 仍有其價值，但應在 scientific 框架內結合 base rate、決策樹、與研究文獻，並由團隊執行",
          "完全廢除 clinical",
          "完全廢除 scientific"
        ],
        en: [
          "Mutually exclusive; pick one",
          "Clinical retains value, but should be embedded in a scientific framework with base rates, decision trees, research, and team-based execution",
          "Abolish clinical",
          "Abolish scientific"
        ]
      },
      answer: 1,
      explanation: {
        zh: "Borum 等 (2010)、Heilbrun 等 (2002) 證明 structured professional judgment（結構化專業判斷）能整合兩者優勢。",
        en: "Borum et al. (2010), Heilbrun et al. (2002): 'structured professional judgment' integrates the strengths of both."
      }
    }
  ]
};
