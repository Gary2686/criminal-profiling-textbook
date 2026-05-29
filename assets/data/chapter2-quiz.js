/* =========================================================
   Chapter 2 — Question Bank (25 questions, randomized 10)
   © 葉欲禾 (Gary Yu-Ho YEH)
   ========================================================= */

window.CBP = window.CBP || {};
window.CBP.QuizBank = window.CBP.QuizBank || {};
window.CBP.QuizBank.chapter2 = {
  chapterId: 2,
  questions: [
    {
      id: 201,
      question: { zh: "FBI 的 Behavioral Science Unit (BSU) 是在哪一年成立？", en: "When was the FBI's Behavioral Science Unit (BSU) established?" },
      options: {
        zh: ["1972 年（Hoover 過世後）", "1908 年（FBI 前身成立時）", "1984 年（NCAVC 成立時）", "1991 年（《沉默羔羊》上映時）"],
        en: ["1972 (after Hoover's death)", "1908 (when the FBI's predecessor was founded)", "1984 (when NCAVC was established)", "1991 (when The Silence of the Lambs released)"]
      },
      answer: 0,
      explanation: {
        zh: "Hoover 於 1972 年初過世後，FBI 對心理學的限制鬆綁。同年於 Quantico 成立新學院並設置 BSU。",
        en: "After Hoover's death in early 1972, restrictions on psychology eased; the BSU was created the same year at the new FBI Academy in Quantico."
      }
    },
    {
      id: 202,
      question: { zh: "NCAVC 下設四個單位，下列何者「不」屬於它的單位？", en: "NCAVC has four units. Which is NOT one of them?" },
      options: {
        zh: ["BAU-1 反恐威脅評估", "BAU-2 成人犯罪", "BAU-3 兒童犯罪", "BAU-4 經濟犯罪"],
        en: ["BAU-1 counterterrorism threat assessment", "BAU-2 crimes against adults", "BAU-3 crimes against children", "BAU-4 economic crimes"]
      },
      answer: 3,
      explanation: {
        zh: "NCAVC 四單位為 BAU-1、BAU-2、BAU-3 與 ViCAP（暴力犯罪逮捕計畫）。並無 BAU-4。",
        en: "The four NCAVC units are BAU-1, BAU-2, BAU-3, and ViCAP (Violent Criminal Apprehension Program). There is no BAU-4."
      }
    },
    {
      id: 203,
      question: { zh: "Howard Teten 在 FBI 學院教授 Applied Criminology 課程，是誰教他側寫技術而成為他研究取徑的啟蒙？", en: "Who taught Howard Teten the fundamentals of profiling, becoming the inspiration for his approach?" },
      options: {
        zh: ["John Douglas", "Robert Ressler", "Dr. James A. Brussel（精神科醫師）", "Ann Burgess"],
        en: ["John Douglas", "Robert Ressler", "Dr. James A. Brussel (psychiatrist)", "Ann Burgess"]
      },
      answer: 2,
      explanation: {
        zh: "Teten 諮詢 Brussel 並學習其側寫基本功，並與 Patrick J. Mullany 一起把該主題納入 Applied Criminology 課程。",
        en: "Teten consulted Brussel and learned his profiling fundamentals; with Patrick J. Mullany he made profiling central to Applied Criminology."
      }
    },
    {
      id: 204,
      question: { zh: "1980 年由 Hazelwood 與 Douglas 在 FBI 公報中提出的「organized vs disorganized」分類，最初是用來分類哪一類罪犯？", en: "The 1980 Hazelwood & Douglas paper introducing the Organized/Disorganized dichotomy was first applied to which type of offender?" },
      options: {
        zh: ["連續縱火犯", "毒品走私者", "Lust Murderer（性慾殺人犯）", "綁架者"],
        en: ["Serial arsonists", "Drug traffickers", "Lust murderers", "Kidnappers"]
      },
      answer: 2,
      explanation: {
        zh: "原始論文題目即為〈The Lust Murderer〉，分類 organized nonsocial 與 disorganized asocial。",
        en: "The seminal article was titled 'The Lust Murderer,' distinguishing organized nonsocial vs. disorganized asocial offenders."
      }
    },
    {
      id: 205,
      question: { zh: "Douglas 與 Ressler 在 1979–1983 訪談囚犯的研究，最終訪談了多少位性殺人犯？", en: "How many imprisoned sexual murderers did the Douglas-Ressler interview project ultimately study?" },
      options: { zh: ["12 位", "36 位", "100 位", "192 位"], en: ["12", "36", "100", "192"] },
      answer: 1,
      explanation: {
        zh: "在 Ann Burgess 主持的 Patterns of Homicide Crime Scene Project 中，共訪 36 位被定罪的性殺人犯：24 名 organized（97 名受害者）、12 名 disorganized（21 名受害者）。",
        en: "The Patterns of Homicide Crime Scene Project (led by Ann Burgess) interviewed 36 convicted sexual murderers: 24 organized (97 victims) and 12 disorganized (21 victims)."
      }
    },
    {
      id: 206,
      question: { zh: "下列何者「不是」FBI 1985 年表 2.1 中 organized offender 的人格特徵？", en: "Which is NOT among the FBI's 1985 Table 2.1 traits of the organized offender?" },
      options: {
        zh: ["智力中等以上", "社交能力良好", "與伴侶同住", "童年遭受嚴苛紀律"],
        en: ["Average to above-average intelligence", "Socially competent", "Living with a partner", "Harsh childhood discipline"]
      },
      answer: 3,
      explanation: {
        zh: "「童年遭受嚴苛紀律」屬 disorganized 特徵；organized 是「童年管教不一致」。",
        en: "'Harsh discipline as a child' is a disorganized trait; the organized offender shows 'inconsistent childhood discipline'."
      }
    },
    {
      id: 207,
      question: { zh: "Modus Operandi（MO）與 Signature（簽名）最關鍵的差異是？", en: "What is the key difference between Modus Operandi (MO) and Signature?" },
      options: {
        zh: [
          "MO 是儀式行為；signature 是必要行為",
          "MO 是完成犯罪所需的功能性行為，會隨經驗改變；signature 是超越必要的儀式性／心理性行為，較為一致",
          "兩者完全相同",
          "MO 只用於財產犯罪；signature 只用於性犯罪"
        ],
        en: [
          "MO is ritualistic; signature is functional",
          "MO is functional behavior needed to commit the crime and changes with experience; signature is ritualistic/psychological behavior beyond necessity and stays consistent",
          "They are identical",
          "MO applies only to property crimes; signature only to sex crimes"
        ]
      },
      answer: 1,
      explanation: {
        zh: "Alison, Goodwill, Alison (2005)：MO 與情境相依、可變動；signature 與心理需求相關、不隨情境改變，因此在 linkage analysis 中更有用。",
        en: "Alison, Goodwill, & Alison (2005): MO is context-dependent and changeable; signature is psychologically driven and context-invariant, making it more useful in linkage analysis."
      }
    },
    {
      id: 208,
      question: { zh: "Staging（佈置）的兩個常見目的是什麼？", en: "What are the two main purposes of 'staging' a crime scene?" },
      options: {
        zh: [
          "(1) 引開警方對最可能嫌犯的注意 (2) 保護受害者或家屬免於公開難堪",
          "(1) 增加破案難度 (2) 炫耀技術",
          "(1) 加快腐敗速度 (2) 隱匿 DNA",
          "(1) 模仿其他案件 (2) 製造大眾恐慌"
        ],
        en: [
          "(1) Redirect the investigation away from the most logical suspect (2) Protect the victim or family from public embarrassment",
          "(1) Make solving harder (2) Showcase technique",
          "(1) Accelerate decomposition (2) Hide DNA",
          "(1) Mimic other cases (2) Cause panic"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Douglas & Munn (1992)：staging 通常出於這兩個動機；例如把自慰窒息死亡（autoerotic asphyxia）佈置成意外，以保護家屬。",
        en: "Douglas & Munn (1992): the two motives. Example: rearranging a death from autoerotic asphyxia to look accidental, to spare the family."
      }
    },
    {
      id: 209,
      question: { zh: "Trophy（戰利品）與 Souvenir（紀念品）的差別是？", en: "Trophy vs. souvenir — what is the difference?" },
      options: {
        zh: [
          "兩者完全相同",
          "Trophy 象徵兇手對受害者的勝利／征服；Souvenir 是用來回憶犯罪愉悅的紀念物",
          "Trophy 是現場留下；Souvenir 是帶回家",
          "Trophy 是身體部位；Souvenir 是衣物"
        ],
        en: [
          "Identical",
          "Trophy symbolizes the offender's triumph/subjugation over the victim; souvenir is a meaningful keepsake reminding the offender of the pleasure of the crime",
          "Trophies are left at the scene; souvenirs are taken home",
          "Trophies are body parts; souvenirs are clothing"
        ]
      },
      answer: 1,
      explanation: {
        zh: "Turvey (2008)：Trophy 強調戰勝象徵（如 Jeffrey Dahmer 保存身體部位）；Souvenir 是用來重溫愉悅的紀念品（如珠寶）。",
        en: "Turvey (2008): Trophy emphasizes triumph (e.g., Jeffrey Dahmer preserving body parts); souvenir is a keepsake to relive the pleasure (e.g., jewelry)."
      }
    },
    {
      id: 210,
      question: { zh: "Undoing（撫平）行為通常暗示？", en: "An 'undoing' behavior at a crime scene typically suggests what?" },
      options: {
        zh: [
          "兇手與受害者有親近關係，事後想心理上「撤回」這個犯行",
          "兇手是專業殺手",
          "兇手有反社會人格",
          "現場被警方佈置過"
        ],
        en: [
          "The offender had a close relationship with the victim and psychologically tried to 'undo' the act",
          "The offender is a professional hitman",
          "The offender has antisocial personality disorder",
          "The scene was tampered with by police"
        ]
      },
      answer: 0,
      explanation: {
        zh: "例如把屍體放回床上、頭枕枕頭、蓋上棉被。與 staging 不同，undoing 不是為了誤導警方，而是兇手自我安慰。",
        en: "E.g., placing the body in bed, head on pillow, covered. Unlike staging, undoing is not to mislead — it is self-comforting for the offender."
      }
    },
    {
      id: 211,
      question: { zh: "Case linkage（案件連結分析）的有效性需要哪兩個前提同時成立？", en: "Case linkage requires which two conditions to be valid?" },
      options: {
        zh: [
          "(1) 兇手在不同案件間行為一致 (2) 該行為與其他兇手的行為有可區分性",
          "(1) 所有案件發生在同一城市 (2) DNA 證據齊全",
          "(1) 兇手已被逮捕 (2) 案件均為命案",
          "(1) 兇手具反社會人格 (2) 受害者為陌生人"
        ],
        en: [
          "(1) The offender behaves consistently across crimes (2) The behavior is distinguishable from other offenders",
          "(1) All crimes in one city (2) Complete DNA evidence",
          "(1) Offender already arrested (2) All cases are homicides",
          "(1) Antisocial personality (2) Stranger victims"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Santtila et al. (2008) 等研究證實：連結分析必須同時具備「跨案一致性」與「跨人區別性」。",
        en: "Santtila et al. (2008) confirms case linkage requires both within-offender consistency and between-offender distinctiveness."
      }
    },
    {
      id: 212,
      question: { zh: "Canter, Alison, Alison 與 Wentink (2004) 研究 100 名連環殺人犯，他們的結論是？", en: "Canter, Alison, Alison, & Wentink (2004) studied 100 U.S. serial killers. Their conclusion was?" },
      options: {
        zh: [
          "強烈支持 FBI 的 O/D 分類",
          "資料完全無法支持 O/D 二分法 — 大多數場景同時混合多種特徵；'being organized is typical of serial killers as a whole'",
          "只有殺害女性的兇手才可分類",
          "完全反對所有 typology"
        ],
        en: [
          "Strongly support the FBI's O/D classification",
          "The data did NOT support the O/D dichotomy — most scenes mix multiple features; 'being organized is typical of serial killers as a whole'",
          "Only killers of female victims can be classified",
          "Reject all typologies"
        ]
      },
      answer: 1,
      explanation: {
        zh: "他們指出 FBI 分類缺乏「特徵共現」(co-occurrence) 的統計支持。70% organized 場景藏匿屍體並有多重犯罪現場已是少見的高共現。",
        en: "They showed FBI categories lack co-occurrence support. Only two co-occurrences (e.g., body concealed + multiple scenes in 70% of organized) were statistically respectable."
      }
    },
    {
      id: 213,
      question: { zh: "Clinical（臨床式）與 Actuarial（精算式）側寫的主要差別是？", en: "What primarily distinguishes clinical from actuarial profiling?" },
      options: {
        zh: [
          "兩者完全相同",
          "Clinical 倚重經驗、訓練、直覺與主觀；Actuarial 倚重統計 base rate 與過去類似個案的群體機率",
          "Clinical 只用於英國；Actuarial 只用於美國",
          "Clinical 不需訓練；Actuarial 需博士學歷"
        ],
        en: [
          "They are identical",
          "Clinical relies on experience, training, intuition, and subjectivity; actuarial relies on statistical base rates and prior cohort probabilities",
          "Clinical only in the U.K.; actuarial only in the U.S.",
          "Clinical needs no training; actuarial requires a PhD"
        ]
      },
      answer: 1,
      explanation: {
        zh: "FBI 主流屬 clinical；Canter 在英國發展的 investigative psychology 屬 actuarial。前者易受認知偏誤影響。",
        en: "FBI mainstream is clinical; Canter's investigative psychology in the U.K. is actuarial. The clinical approach is more vulnerable to cognitive biases."
      }
    },
    {
      id: 214,
      question: { zh: "Base rate（基本率）是 actuarial profiling 的核心統計概念，它指的是？", en: "What is the 'base rate,' the core statistical concept in actuarial profiling?" },
      options: {
        zh: [
          "某行為在特定群體中、一段期間（通常一年）內的盛行率",
          "犯人逃亡的時間",
          "警察破案率",
          "DNA 的基準序列"
        ],
        en: [
          "The statistical prevalence of a behavior in a specific group over a set period (usually one year)",
          "How long the offender stays at large",
          "Police clearance rate",
          "DNA baseline sequence"
        ]
      },
      answer: 0,
      explanation: {
        zh: "如保險業以基本率定保費；在刑事司法中，base rate 用於 IRS 稅務稽查、毒品走私側寫、刑前風險評估等。",
        en: "Insurance uses it for premiums; in criminal justice it underlies IRS audits, drug-courier profiles, and pretrial risk assessments."
      }
    },
    {
      id: 215,
      question: { zh: "Pinizzotto 與 Finkel (1990) 的經典研究結論是？", en: "What did the classic Pinizzotto & Finkel (1990) study conclude about profiling accuracy?" },
      options: {
        zh: [
          "受訓 profilers 對所有案件都遠勝過未受訓組",
          "受訓 profilers 在性犯罪案稍微較準，但在命案上與未受訓組差異不大；專家處理資訊方式並未明顯不同",
          "未受訓的大學生最準",
          "心理學家完全比不上偵探"
        ],
        en: [
          "Trained profilers far outperformed every group on every case",
          "Trained profilers were somewhat more accurate on a sex offense case but no better than untrained groups on the homicide case; experts did not process information differently",
          "Untrained undergraduates were most accurate",
          "Psychologists were vastly outperformed by detectives"
        ]
      },
      answer: 1,
      explanation: {
        zh: "28 位參與者（含 FBI 受訓專家、未受訓偵探、臨床心理師、大學生）顯示專家優勢有限，並建議「團隊合作」較單人 profiler 有效。",
        en: "With 28 participants (FBI experts, detectives, clinical psychologists, students), expert advantage was modest. The authors recommended team-based profiling."
      }
    },
    {
      id: 216,
      question: { zh: "Copson (1995) 的英國研究：profiler 的預測幫助破案的比例是多少？", en: "In Copson's (1995) U.K. survey, what percentage of cases did the profile directly help solve?" },
      options: { zh: ["14.1%", "2.7%", "61%", "82.6%"], en: ["14.1%", "2.7%", "61%", "82.6%"] },
      answer: 1,
      explanation: {
        zh: "Copson 發現 profilers 只在 2.7% 案件中直接指出兇手；但有 61% 案件「對了解兇手有幫助」，82.6% 偵探覺得「某種程度上有幫助」。",
        en: "Copson found profilers led to offender identification in only 2.7% of cases, helped understanding in 61%, and 82.6% of detectives felt 'some' help."
      }
    },
    {
      id: 217,
      question: { zh: "Snook 等人 (2007) 對 profiling 的 meta-analysis 結論是？", en: "What did Snook et al. (2007) meta-analysis conclude about profilers?" },
      options: {
        zh: [
          "Profilers 顯著優於其他組",
          "Profilers 並未明顯優於其他組；他們稱 profiling 為「pseudoscientific」直到能在大規模研究中通過經驗檢證",
          "Profilers 只在性犯罪中有效",
          "Profilers 全部都比警察強"
        ],
        en: [
          "Profilers significantly outperform others",
          "Profilers do NOT decisively outperform other groups; they called profiling 'pseudoscientific' until tested empirically on large samples of active profilers",
          "Profilers excel only in sex crimes",
          "Profilers always beat police"
        ]
      },
      answer: 1,
      explanation: {
        zh: "Snook 等 (2007, 2008) 持續批評：profilers 不公開方法、不接受實證檢驗，故稱其為 pseudoscience。",
        en: "Snook et al. (2007, 2008) note that profilers don't disclose methods nor submit to empirical testing — hence the 'pseudoscience' label."
      }
    },
    {
      id: 218,
      question: { zh: "Confirmation bias（確認偏誤）在側寫實務中如何運作？", en: "How does confirmation bias operate in profiling practice?" },
      options: {
        zh: [
          "只搜集支持自己預設假設的證據，並忽略或淡化反證",
          "完全相信被害人證詞",
          "拒絕任何 DNA 結果",
          "把所有人都當成嫌犯"
        ],
        en: [
          "Gathering evidence that confirms preexisting expectations while ignoring or downplaying contradictory information",
          "Always trusting victim testimony",
          "Rejecting all DNA results",
          "Treating everyone as a suspect"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Baron & Byrne (2000)：偏誤令我們「進入只接受支持證據的封閉認知系統」。Copson 1995 報告中 50% 以上 profile 被認為「有用」其實是因為「強化了警方原本的看法」。",
        en: "Baron & Byrne (2000): we enter 'a closed cognitive system' admitting only confirming evidence. Copson noted >50% of profiles deemed 'useful' simply reinforced officers' beliefs."
      }
    },
    {
      id: 219,
      question: { zh: "Ask 與 Granhag (2005) 指出哪三個情境會加劇 confirmation bias？", en: "Per Ask & Granhag (2005), which three conditions promote confirmation bias in investigations?" },
      options: {
        zh: [
          "(1) 偵辦時間壓力 (2) 強調決斷力的警察文化 (3) 重大決策牽涉個人聲譽",
          "(1) 缺乏 DNA (2) 經費不足 (3) 媒體壓力",
          "(1) 案件數少 (2) 嫌犯年輕 (3) 受害者女性",
          "(1) 嫌犯不認罪 (2) 證據不足 (3) 沒有目擊者"
        ],
        en: [
          "(1) Time pressure (2) Police culture of decisiveness (3) Major decisions tied to personal reputation",
          "(1) No DNA (2) Underfunding (3) Media pressure",
          "(1) Low case load (2) Young suspects (3) Female victims",
          "(1) Suspect denies (2) Weak evidence (3) No witnesses"
        ]
      },
      answer: 0,
      explanation: {
        zh: "三條件互相強化：時間壓力 + 決斷文化 + 不想丟臉，使偵查者更傾向確認既有假設。",
        en: "The three reinforce each other: pressure + decisiveness + reputation, pushing investigators to confirm prior beliefs."
      }
    },
    {
      id: 220,
      question: { zh: "Fundamental Attribution Error（基本歸因謬誤）在側寫中表現為？", en: "How does the fundamental attribution error show up in profiling?" },
      options: {
        zh: [
          "高估「人格特質」(internal) 而低估「情境因素」(external) 對行為的影響",
          "完全只看情境，不看人格",
          "認為所有犯罪都是 DNA 決定的",
          "認為犯罪都是文化造成的"
        ],
        en: [
          "Overweighting internal/dispositional factors and underweighting situational/external factors",
          "Looking only at situation, never at personality",
          "Believing all crime is genetically determined",
          "Believing all crime is culturally determined"
        ]
      },
      answer: 0,
      explanation: {
        zh: "FBI 傳統側寫尤其易犯此誤 — 假設 crime scene 行為穩定反映人格。被害者反應、武器、現場結構等外部變項常被低估。",
        en: "Classic FBI profiling is especially prone — it assumes crime scene behavior stably reflects personality. Victim reaction, weapons, layout are often underweighted."
      }
    },
    {
      id: 221,
      question: { zh: "Self-serving bias（自利偏誤）的核心特徵是？", en: "What's the core feature of the self-serving bias?" },
      options: {
        zh: [
          "把成功歸於自己、失敗歸於他人或環境，用以維持高自尊",
          "完全否認自己的失敗",
          "把成功推給別人",
          "對自己永遠不滿意"
        ],
        en: [
          "Crediting oneself for success and blaming others/circumstances for failure, to maintain high self-esteem",
          "Total denial of one's failures",
          "Crediting others for one's success",
          "Permanent dissatisfaction with self"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Brussel 在 Mad Bomber 與 Boston Strangler 案的回憶錄即為典型 — 強調自己「只犯一個錯」即為 self-serving + hindsight bias 結合。",
        en: "Brussel's memoirs about the Mad Bomber and Boston Strangler exemplify this — claiming 'only one mistake' is classic self-serving + hindsight bias."
      }
    },
    {
      id: 222,
      question: { zh: "Belief perseverance（信念持續）為什麼會使 profiler 對既有 typology 死守不變？", en: "Why does belief perseverance make profilers cling to old typologies?" },
      options: {
        zh: [
          "他們認為信念來自多年經驗，「即使證據被駁倒也很難改變」",
          "他們的薪水高",
          "他們害怕被裁員",
          "他們只看暢銷書"
        ],
        en: [
          "They believe these come from years of experience and remain 'remarkably resistant to change' even when evidence is refuted",
          "They earn high salaries",
          "They fear being fired",
          "They read only bestsellers"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Marshall & Alison (2007)、Nestler (2010) 等指出此特性。John Douglas 即使面對 Canter 等研究駁斥 O/D 仍堅守該分類。",
        en: "Marshall & Alison (2007), Nestler (2010). Even when Canter's data refutes O/D, Douglas reportedly continues to endorse it."
      }
    },
    {
      id: 223,
      question: { zh: "ICIAF (International Criminal Investigative Analysis Fellowship) 的主要功能？", en: "What is the main function of ICIAF?" },
      options: {
        zh: [
          "全球唯一專責訓練並認證 profiler 的組織",
          "提供 DNA 比對服務",
          "管理 FBI 的犯罪資料庫",
          "出版犯罪心理學期刊"
        ],
        en: [
          "The world's only organization that trains and certifies profilers",
          "Provides DNA matching services",
          "Manages the FBI's crime database",
          "Publishes a criminal psychology journal"
        ]
      },
      answer: 0,
      explanation: {
        zh: "成員須具至少 3 年暴力犯罪偵查經驗。雖然有認證，但實證上其成員的預測準確度不必然優於受過訓練的一般偵探。",
        en: "Members must have at least 3 years of violent crime investigation experience. Yet no evidence shows ICIAF members predict more accurately than other trained investigators."
      }
    },
    {
      id: 224,
      question: { zh: "Bounded rationality（有限理性）的概念由誰首先提出？對 profiling 的啟示是？", en: "Who first proposed 'bounded rationality,' and what does it imply for profiling?" },
      options: {
        zh: [
          "Herbert Simon (1957)：人對複雜世界的認知能力有限，會建構「簡化心智模型」並依此運作 — 因此 profiler 不可能完全進入兇手心智",
          "Sigmund Freud：本我超我意識",
          "Skinner：操作制約",
          "Carl Jung：集體潛意識"
        ],
        en: [
          "Herbert Simon (1957): humans have limited cognitive capacity and construct simplified mental models — so a profiler cannot fully enter the offender's mind",
          "Sigmund Freud: id-ego-superego",
          "Skinner: operant conditioning",
          "Carl Jung: collective unconscious"
        ]
      },
      answer: 0,
      explanation: {
        zh: "Heuer (1999) 進一步把這個概念應用到情報分析，指出無論 profiler 多努力，都會受自己心智模型、偏誤、現實版本所限。",
        en: "Heuer (1999) extended this to intelligence analysis, showing that no matter how hard a profiler tries, their mental model and biases will constrain inferences."
      }
    },
    {
      id: 225,
      question: { zh: "下列敘述何者最能描述 Crime Classification Manual (CCM) 對 O/D 的最終立場？", en: "Which best describes the Crime Classification Manual's final stance on O/D?" },
      options: {
        zh: [
          "CCM 仍堅持二分法",
          "CCM 修正為「連續譜（continuum）」：場景很少完全 organized 或 disorganized，多數落在兩極之間",
          "CCM 完全廢除 O/D",
          "CCM 改成 5 類分類"
        ],
        en: [
          "CCM still insists on the dichotomy",
          "CCM revised to a 'continuum' — scenes are rarely fully organized or disorganized but usually fall between the poles",
          "CCM abandoned O/D entirely",
          "CCM moved to a 5-category typology"
        ]
      },
      answer: 1,
      explanation: {
        zh: "CCM (1992): 'the crime scene rarely will be completely organized or disorganized. It is more likely to be somewhere on a continuum...'",
        en: "CCM (1992): 'the crime scene rarely will be completely organized or disorganized. It is more likely to be somewhere on a continuum...'"
      }
    }
  ]
};
