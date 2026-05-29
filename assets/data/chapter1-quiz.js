/* =========================================================
   Chapter 1 — Question Bank
   每次將隨機抽 10 題，故題庫至少 20+ 題以增加變化
   每題包含中英文題目、選項、正解 (0-based index) 與解析
   © 葉欲禾 (Gary Yu-Ho YEH)
   ========================================================= */

window.CBP = window.CBP || {};
window.CBP.QuizBank = window.CBP.QuizBank || {};
window.CBP.QuizBank.chapter1 = {
  chapterId: 1,
  questions: [
    {
      id: 101,
      question: {
        zh: "根據 Woodworth 與 Porter (1999) 的記載，下列何者被視為書面側寫(profiling)歷史最早的系統化文獻？",
        en: "According to Woodworth and Porter (1999), which document represents the earliest systematic written approach to 'profiling'?",
      },
      options: {
        zh: [
          "Malleus Maleficarum（《女巫之槌》, 1486）",
          "Edgar Allan Poe 的《莫爾格街兇殺案》(1841)",
          "Sir Arthur Conan Doyle 的《福爾摩斯》系列 (1887)",
          "Brussel 的 Casebook of a Crime Psychiatrist (1968)",
        ],
        en: [
          "Malleus Maleficarum (The Hammer of Witches, 1486)",
          "Edgar Allan Poe's The Murders in the Rue Morgue (1841)",
          "Sir Arthur Conan Doyle's Sherlock Holmes series (1887)",
          "Brussel's Casebook of a Crime Psychiatrist (1968)",
        ],
      },
      answer: 0,
      explanation: {
        zh: "《女巫之槌》由兩名道明會修士在 1480 年代奉天主教會之命撰寫，用以「辨識、審訊、根除」女巫，是已知最早的系統性側寫文件。",
        en: "The Malleus Maleficarum was commissioned by the Catholic Church and written in the 1480s by two Dominican monks to identify, interrogate, and eradicate witches — the earliest known systematic profiling text.",
      },
    },
    {
      id: 102,
      question: {
        zh: "Edgar Allan Poe 在小說中塑造的「最早側寫師」C. Auguste Dupin 使用何種思維方式破案？",
        en: "Poe's fictional 'first profiler' C. Auguste Dupin solved crimes through which mode of thinking?",
      },
      options: {
        zh: [
          "純粹的直覺與通靈",
          "ratiocination 推理 — 結合理性思考與生動的想像力，進入兇手心智",
          "依靠大量法醫科學儀器",
          "心理分析的精神動力學",
        ],
        en: [
          "Pure intuition and clairvoyance",
          "Ratiocination — rational thought combined with vivid imagination, entering the criminal's mind",
          "Heavy reliance on forensic instruments",
          "Psychoanalytic psychodynamics",
        ],
      },
      answer: 1,
      explanation: {
        zh: "Poe 稱 Dupin 透過 'ratiocination'（推理）破案 — 是理性與想像兩者並用，把自己「放進兇手心裡」的方法，可視為現代側寫的雛形。",
        en: "Poe described Dupin as solving crimes via 'ratiocination' — rational thought plus vivid imagination, placing himself into the offender's mind. This prefigures modern profiling.",
      },
    },
    {
      id: 103,
      question: {
        zh: "在 1888 年 Jack the Ripper（開膛手傑克）案中，誰透過受害人傷口的特徵推測兇手具有解剖學知識？",
        en: "In the 1888 Jack the Ripper case, who inferred the killer had anatomical knowledge from the wound patterns?",
      },
      options: {
        zh: [
          "Dr. James Brussel",
          "Dr. George Baxter Phillips（首席法醫病理學家）",
          "Sir Arthur Conan Doyle",
          "William Langer",
        ],
        en: [
          "Dr. James Brussel",
          "Dr. George Baxter Phillips, the chief forensic pathologist",
          "Sir Arthur Conan Doyle",
          "William Langer",
        ],
      },
      answer: 1,
      explanation: {
        zh: "Phillips 注意到受害者體內器官的切除「乾淨而精準」，因而推論兇手對人體解剖有相當了解 — 這是真實案件中早期側寫的代表。",
        en: "Phillips noted the cleanliness and precision of post-mortem organ removal, inferring sophisticated anatomical knowledge — an early real-world profiling example.",
      },
    },
    {
      id: 104,
      question: {
        zh: "在美國，被廣泛稱為「現代側寫之父」的精神科醫師是誰？",
        en: "Which psychiatrist is widely called the 'father of modern profiling' in the United States?",
      },
      options: {
        zh: [
          "David Canter",
          "Paul Britton",
          "Dr. James A. Brussel",
          "Howard Teten",
        ],
        en: [
          "David Canter",
          "Paul Britton",
          "Dr. James A. Brussel",
          "Howard Teten",
        ],
      },
      answer: 2,
      explanation: {
        zh: "Brussel 因參與 Mad Bomber（瘋狂炸彈客）案而聲名大噪，並於 1972 年協助 FBI 訓練 BSU 的人員，被尊為美國「側寫之父」。",
        en: "Brussel rose to fame through the Mad Bomber case and later helped train the FBI's Behavioral Science Unit in 1972 — hence the title 'father of profiling' in the U.S.",
      },
    },
    {
      id: 105,
      question: {
        zh: "Mad Bomber（瘋狂炸彈客）的真名是誰？他犯案的真實動機是什麼？",
        en: "What was the real name and primary motive of the 'Mad Bomber'?",
      },
      options: {
        zh: [
          "Albert DeSalvo；偏執型思覺失調",
          "George Metesky；對 Con Edison 拒絕賠付工傷的長期怨恨",
          "John Allen Muhammad；意識形態恐怖主義",
          "Richard Robles；經濟動機",
        ],
        en: [
          "Albert DeSalvo; paranoid schizophrenia",
          "George Metesky; long-term resentment over Con Edison denying his work-injury compensation",
          "John Allen Muhammad; ideological terrorism",
          "Richard Robles; economic motive",
        ],
      },
      answer: 1,
      explanation: {
        zh: "Metesky 於 1931 年在 Con Ed 工作時受重傷，後因工傷請求被駁回（超過申請期限），長期不滿因此持續犯案 16 年。F.P. 即為 'fair play'。",
        en: "Injured at Con Ed in 1931, Metesky was denied workers' comp for filing late. His grievance drove a 16-year bombing campaign; F.P. stood for 'fair play'.",
      },
    },
    {
      id: 106,
      question: {
        zh: "下列哪一項「不是」Brussel 在 1956 年聖誕節《紐約時報》刊出的 Mad Bomber 側寫內容？",
        en: "Which of the following was NOT part of Brussel's Mad Bomber profile printed in the NY Times on Christmas Day, 1956?",
      },
      options: {
        zh: [
          "單身男性、年齡 40–50 歲",
          "技術熟練的機械工",
          "可能是現任或前任 Con Edison 員工",
          "受過大學以上教育、已婚有子",
        ],
        en: [
          "Single male, aged 40–50",
          "Skilled mechanic",
          "Possibly a present or former Con Edison worker",
          "College-educated, married with children",
        ],
      },
      answer: 3,
      explanation: {
        zh: "Brussel 的側寫描述其為「高中畢業」、單身、不擅與女性相處。「大學畢業、已婚有子」並未出現在原始側寫中。",
        en: "Brussel described him as a high-school graduate, single, and 'not interested in women'. A college-educated, married father was never part of the original profile.",
      },
    },
    {
      id: 107,
      question: {
        zh: "實際上協助破解 Mad Bomber 案的關鍵人物是誰？",
        en: "Who was the actual key person who helped solve the Mad Bomber case?",
      },
      options: {
        zh: [
          "Dr. James Brussel — 透過 Freudian 分析",
          "Alice G. Kelly — Con Edison 的檔案管理員，從舊員工檔案中比對信件用語",
          "F. Lee Bailey — 辯護律師",
          "Howard Teten — FBI 探員",
        ],
        en: [
          "Dr. James Brussel — via Freudian analysis",
          "Alice G. Kelly — a Con Edison filing clerk who matched letter phrases to old employee files",
          "F. Lee Bailey — defense attorney",
          "Howard Teten — FBI agent",
        ],
      },
      answer: 1,
      explanation: {
        zh: "Kelly 比對信件中「不公」、「親手伸張正義」等字句，從 Con Ed 標記為 'troublesome' 的舊員工檔案中翻出 Metesky 的紀錄。她後來婉拒了懸賞金。",
        en: "Kelly matched phrases like 'injustices' and 'take justice in my own hands' against troublesome employee files, uncovering Metesky's record. She declined the reward.",
      },
    },
    {
      id: 108,
      question: {
        zh: "「Barnum statements（巴納姆陳述句）」最重要的特徵是什麼？",
        en: "What is the defining feature of 'Barnum statements'?",
      },
      options: {
        zh: [
          "極為精準、僅符合特定個人",
          "陳述內容相當籠統，幾乎可以套用到任何人身上",
          "經過嚴格實證的人格描述",
          "完全為負面描述",
        ],
        en: [
          "Highly precise, fitting only one specific person",
          "So general they could apply to almost anyone",
          "Empirically validated personality descriptions",
          "Exclusively negative descriptions",
        ],
      },
      answer: 1,
      explanation: {
        zh: "Barnum statements 由 P. T. Barnum 的「我們什麼都賣」一句衍生，指那些幾乎任何人都會點頭認同的籠統說詞 — 早期側寫常被詬病過度仰賴此種陳述。",
        en: "Named after P. T. Barnum's line 'We've got something for everyone,' Barnum statements are so vague that nearly anyone agrees they fit — a critique often levelled at early profiling.",
      },
    },
    {
      id: 109,
      question: {
        zh: "Hindsight bias（後見之明偏誤）指的是什麼？",
        en: "What does 'hindsight bias' refer to?",
      },
      options: {
        zh: [
          "拒絕承認新資訊的傾向",
          "獲得新資訊後，把先前的判斷修改朝向新資訊的方向（亦即「事後才覺得早就知道」）",
          "對自己錯誤的記憶完全消失",
          "把所有人歸類為犯罪者",
        ],
        en: [
          "Refusing to accept new information",
          "Adjusting a prior judgment toward newly provided information ('I knew it all along')",
          "Total amnesia about one's own errors",
          "Categorizing everyone as a criminal",
        ],
      },
      answer: 1,
      explanation: {
        zh: "Mazzoni 與 Vannucci (2007) 定義 hindsight bias 為「在獲得新資訊後改變先前判斷方向」。Brussel 回憶錄中為強化自身形象，正展現此偏誤。",
        en: "Mazzoni and Vannucci (2007) define hindsight bias as adjusting prior judgments toward new information. Brussel's memoir likely exhibited this bias to bolster his professional image.",
      },
    },
    {
      id: 110,
      question: {
        zh: "下列關於 Brussel 對波士頓勒殺者（Boston Strangler）側寫的描述，何者錯誤？",
        en: "Which of the following about Brussel's Boston Strangler profile is INCORRECT?",
      },
      options: {
        zh: [
          "他認為兇手只有一人",
          "他大量採用 Freudian 的伊底帕斯情結概念",
          "他預測兇手 '未婚'",
          "DNA 後來證實 DeSalvo 是 11 起命案的全部兇手",
        ],
        en: [
          "He believed there was only one strangler",
          "He drew heavily on Freudian Oedipal concepts",
          "He predicted the killer was 'unmarried'",
          "DNA later confirmed DeSalvo committed all 11 murders",
        ],
      },
      answer: 3,
      explanation: {
        zh: "事實上，DNA 與其他鑑識證據後來「排除」DeSalvo 涉入至少一名受害者 Mary Sullivan 的案件，這也推翻 Brussel 關鍵論點。",
        en: "In fact, DNA and forensic evidence later cleared DeSalvo of at least one supposed victim, Mary Sullivan — undermining a key piece of Brussel's theory.",
      },
    },
    {
      id: 111,
      question: {
        zh: "本章將「behavioral profiling」歸類為哪五大領域？",
        en: "Which five overlapping categories of 'behavioral profiling' does this chapter define?",
      },
      options: {
        zh: [
          "犯罪現場側寫、地理側寫、心理側寫、嫌疑人式側寫、可疑死亡分析",
          "DNA 比對、指紋比對、彈道分析、毒理分析、口供分析",
          "警察學、犯罪學、心理學、社會學、人類學",
          "謀殺、強暴、搶劫、毒品、恐怖主義",
        ],
        en: [
          "Crime scene profiling, geographic profiling, psychological profiling, suspect-based profiling, equivocal death analysis",
          "DNA, fingerprint, ballistic, toxicology, statement analyses",
          "Police science, criminology, psychology, sociology, anthropology",
          "Murder, rape, robbery, drugs, terrorism",
        ],
      },
      answer: 0,
      explanation: {
        zh: "本書以這五類整理 profiling 的應用範圍：犯罪現場、地理、心理（含威脅／風險評估）、嫌疑人式（含 racial profiling）、可疑死亡分析（心理解剖）。",
        en: "The book organizes profiling into these five overlapping fields: crime scene, geographic, psychological (threat/risk), suspect-based (including racial profiling), and equivocal death analysis (psychological autopsy).",
      },
    },
    {
      id: 112,
      question: {
        zh: "crime scene profiling（犯罪現場側寫）的主要目的是？",
        en: "What is the main purpose of crime scene profiling?",
      },
      options: {
        zh: [
          "直接指認兇手",
          "從犯罪現場的證據推論出未知嫌疑人的認知、行為、動機與人口統計特徵的假設",
          "進行心理治療",
          "規劃監獄管理",
        ],
        en: [
          "Directly identify the offender",
          "Generate hypotheses about an unknown offender's cognitive, behavioral, motivational, and demographic features from crime scene evidence",
          "Provide psychotherapy",
          "Plan prison management",
        ],
      },
      answer: 1,
      explanation: {
        zh: "課本強調：即使最精緻的犯罪現場側寫也鮮少能直接指認兇手，而是提供「合理的假設集」協助偵查方向。",
        en: "The text stresses that even sophisticated crime scene profiling rarely points directly to an offender — it generates a reasonable set of hypotheses to guide investigation.",
      },
    },
    {
      id: 113,
      question: {
        zh: "geographic profiling（地理側寫）的核心邏輯是什麼？",
        en: "What is the core logic of geographic profiling?",
      },
      options: {
        zh: [
          "從犯罪地點與彼此的空間關係，推估嫌疑人的可能居住地或下次犯案地點",
          "分析兇手的童年家庭結構",
          "從 DNA 推測族裔",
          "判斷死者的心理狀態",
        ],
        en: [
          "Inferring the offender's likely residence or next crime location from the locations and spatial relationships of crimes",
          "Analyzing the offender's childhood family structure",
          "Inferring ethnicity from DNA",
          "Assessing the victim's mental state",
        ],
      },
      answer: 0,
      explanation: {
        zh: "Guerette (2002) 與 Rossmo (1997) 指出：地理側寫聚焦兇手熟悉、舒適、慣常出沒的地理區域，協助縮小偵查範圍。",
        en: "Guerette (2002) and Rossmo (1997) note geographic profiling focuses on the territory an offender knows, feels comfortable in, and uses — narrowing the search area.",
      },
    },
    {
      id: 114,
      question: {
        zh: "psychological profiling 中的 threat assessment 與 risk assessment 主要差別為何？",
        en: "What is the main difference between 'threat assessment' and 'risk assessment' within psychological profiling?",
      },
      options: {
        zh: [
          "兩者完全相同",
          "threat assessment 評估「特定威脅」會被執行的可信度與嚴重性；risk assessment 評估「某人」對自己或他人造成傷害的機率",
          "threat assessment 只用於恐怖主義；risk assessment 只用於兒童",
          "threat assessment 由法官執行；risk assessment 由警察執行",
        ],
        en: [
          "They are identical",
          "Threat assessment evaluates the credibility/seriousness of a specific threat being carried out; risk assessment evaluates the probability that an individual will harm self or others",
          "Threat assessment is only for terrorism; risk assessment is only for children",
          "Threat assessment is done by judges; risk assessment by police",
        ],
      },
      answer: 1,
      explanation: {
        zh: "兩者程序高度相似但目標不同：threat 看「威脅是否會落實」、risk 看「個人造成傷害的可能性」。在 threat assessment 中，威脅來源身分可能未知。",
        en: "Similar procedures but different targets: threat assessment focuses on whether a specific threat will be carried out (source may be unknown); risk assessment focuses on the probability that a known person will cause harm.",
      },
    },
    {
      id: 115,
      question: {
        zh: "suspect-based profiling 在實務應用上最常引發爭議的是？",
        en: "What is the most controversial issue in suspect-based profiling in practice?",
      },
      options: {
        zh: [
          "使用犯罪現場照片",
          "結合行為指標 + 種族／宗教／族裔等群體特徵進行攔查，可能構成 racial profiling",
          "使用心理測驗",
          "與心理學家合作",
        ],
        en: [
          "Using crime scene photos",
          "Combining behavioral indicators with race/religion/ethnicity to stop individuals, potentially constituting racial profiling",
          "Using psychological tests",
          "Collaborating with psychologists",
        ],
      },
      answer: 1,
      explanation: {
        zh: "課本以 East Haven 警局 2011 年遭 FBI 逮捕為例，強調 racial profiling 可能構成憲法侵權與過度執法。",
        en: "The text cites the 2011 East Haven Police Department arrests by the FBI to illustrate that racial profiling can amount to constitutional violations and excessive force.",
      },
    },
    {
      id: 116,
      question: {
        zh: "equivocal death analysis（可疑死亡分析）又稱為什麼？其主要目的是？",
        en: "Equivocal death analysis is also called what, and what is its primary purpose?",
      },
      options: {
        zh: [
          "DNA 解剖；確認血型",
          "Psychological autopsy（心理解剖）；判定死亡是自殺、他殺或意外，以及背後的心理動機",
          "Toxicology screen；判定中毒物",
          "Linkage analysis；連結多起命案",
        ],
        en: [
          "DNA autopsy; determine blood type",
          "Psychological autopsy; determine whether death was suicide, homicide, or accident, and the psychological motives involved",
          "Toxicology screen; identify the poison",
          "Linkage analysis; connect multiple homicides",
        ],
      },
      answer: 1,
      explanation: {
        zh: "亦稱 reconstructive psychological evaluation，常用於保險理賠或軍方自殺率調查（如美陸軍 2011 年 7 月創高的 32 起自殺案）。",
        en: "Also called reconstructive psychological evaluation, often used in insurance claims or military suicide investigations (e.g., the U.S. Army's record 32 suicides in July 2011).",
      },
    },
    {
      id: 117,
      question: {
        zh: "在 2002 年華盛頓特區附近發生的 Beltway Sniper（華盛頓狙擊手）案中，profilers 提出的錯誤預測是什麼？",
        en: "In the 2002 Beltway Sniper case near Washington, D.C., what was the profilers' inaccurate prediction?",
      },
      options: {
        zh: [
          "他們預測兇手為非裔且為團體犯案 — 完全正確",
          "他們預測兇手可能是白人、單獨犯案、駕駛白色廂型車 — 實際上是兩名非裔美國人（Muhammad 與 Malvo）駕駛藍色 Chevrolet Caprice",
          "他們預測兇手是女性",
          "他們完全未發表任何側寫",
        ],
        en: [
          "They said the snipers were African American and worked as a team — fully correct",
          "They said the sniper was likely white, acted alone, and drove a white van — in reality two African Americans (Muhammad and Malvo) drove a blue Chevrolet Caprice",
          "They said the sniper was a woman",
          "They issued no profile at all",
        ],
      },
      answer: 1,
      explanation: {
        zh: "錯誤側寫導致警察十多次放過真正的車輛。此案常被引用，提醒研究者：profiling 不準確可能誤導偵查方向。",
        en: "The flawed profile caused police to overlook the actual vehicle on at least 10 occasions. The case is often cited as a cautionary tale about misleading profiles.",
      },
    },
    {
      id: 118,
      question: {
        zh: "本書作者強調，profiling 應該朝什麼方向發展才能提高可信度？",
        en: "According to the authors, profiling must move in which direction to gain credibility?",
      },
      options: {
        zh: [
          "更倚賴直覺與個人經驗",
          "結合經驗、判斷與「理論、研究、專業共識」（含倫理）的整合，並以良好設計的實證研究為核心",
          "完全交由 AI 自動進行",
          "回歸 Freudian 精神分析",
        ],
        en: [
          "Greater reliance on intuition and personal experience",
          "Integrating experience and judgment with theory, research, professional consensus (and ethics), supported by well-executed empirical research",
          "Fully automated AI profiling",
          "A return to Freudian psychoanalysis",
        ],
      },
      answer: 1,
      explanation: {
        zh: "課本明言：「effective profiling requires an integration of experience and judgment with theory, research, and professional consensus.」",
        en: "The chapter states: 'effective profiling requires an integration of experience and judgment with theory, research, and professional consensus.'",
      },
    },
    {
      id: 119,
      question: {
        zh: "「Hollywood effect」在 profiling 文獻中意指什麼？",
        en: "What does the 'Hollywood effect' mean in the profiling literature?",
      },
      options: {
        zh: [
          "Profiling 在好萊塢電影中拍得太冷門",
          "Profiling 的形象主要透過電影、影集等通俗媒體傳播，而非經同行審查的學術文獻，導致大眾對 profiler 產生過度神化的想像",
          "Profiler 都搬到加州",
          "電影特效會干擾真實偵查",
        ],
        en: [
          "Profiling films flop at the box office",
          "Profiling is disseminated via movies and TV rather than peer-reviewed literature, leading the public to mythologize profilers",
          "Profilers all move to California",
          "Movie special effects disrupt real investigations",
        ],
      },
      answer: 1,
      explanation: {
        zh: "Canter 與 Youngs (2003)：通俗書與《沉默的羔羊》、《Criminal Minds》等影集，讓 profiler 被塑造成「擁有超能直覺」的近乎神話形象。",
        en: "Canter & Youngs (2003): popular books and shows like The Silence of the Lambs and Criminal Minds cast profilers as quasi-mythical figures with special intuition.",
      },
    },
    {
      id: 120,
      question: {
        zh: "Linkage analysis（案件連結分析）的目的是？",
        en: "What is the purpose of linkage analysis?",
      },
      options: {
        zh: [
          "比對 DNA 樣本",
          "辨認多起犯罪現場的共通元素，推論可能是同一人所為",
          "計算地理座標",
          "評估精神健康狀態",
        ],
        en: [
          "Compare DNA samples",
          "Identify common elements across crime scenes to infer the same offender",
          "Calculate geographic coordinates",
          "Assess mental health status",
        ],
      },
      answer: 1,
      explanation: {
        zh: "Linkage analysis 是 crime scene profiling 常用的程序，特別用在連續暴力犯罪。New Jersey v. Fortin 案即是一例。",
        en: "Linkage analysis is common in crime scene profiling, especially for serial violent crimes. New Jersey v. Fortin is a noted example.",
      },
    },
    {
      id: 121,
      question: {
        zh: "在英國，與 Paul Britton 不同方向、強調統計方法並建立 investigative psychology 學程的學者是？",
        en: "Who, in the U.K., contrasted with Paul Britton by emphasizing a statistical approach and founded the field of investigative psychology?",
      },
      options: {
        zh: [
          "David Canter（利物浦大學）",
          "Howard Teten",
          "John Douglas",
          "Robert Ressler",
        ],
        en: [
          "David Canter (University of Liverpool)",
          "Howard Teten",
          "John Douglas",
          "Robert Ressler",
        ],
      },
      answer: 0,
      explanation: {
        zh: "Canter 於 1994 年在利物浦大學設立全球首個 investigative psychology 學程，提倡更具統計與實證基礎的側寫研究。",
        en: "Canter founded the world's first investigative psychology program at the University of Liverpool in 1994, advocating a more statistical and evidence-based approach.",
      },
    },
    {
      id: 122,
      question: {
        zh: "下列哪句話最能概括 Brussel 自述的「方法」？",
        en: "Which best captures Brussel's self-described 'method'?",
      },
      options: {
        zh: [
          "嚴格的雙盲實驗",
          "「科學、直覺、與希望的個人配方」(part science, intuition, and hope)",
          "純粹的 DNA 比對",
          "計量心理測驗",
        ],
        en: [
          "Rigorous double-blind experiments",
          "His own private blend of 'science, intuition, and hope'",
          "Pure DNA matching",
          "Quantitative psychometric testing",
        ],
      },
      answer: 1,
      explanation: {
        zh: "Brussel 自承其方法是「科學 + 直覺 + 希望」的個人配方，並未公開詳細推論流程 — 這成為日後批判的焦點之一。",
        en: "Brussel said his method was his own blend of 'science, intuition, and hope,' refusing to disclose details — a key point of later criticism.",
      },
    },
    {
      id: 123,
      question: {
        zh: "為什麼 Brussel 對 Mad Bomber 「會穿雙排扣西裝且扣好鈕扣」的預言其實沒有想像中神奇？",
        en: "Why is Brussel's prediction that the Mad Bomber would wear a 'buttoned double-breasted suit' not as astonishing as it sounds?",
      },
      options: {
        zh: [
          "因為當時雙排扣西裝是 1930s 中到 1950s 初期的主流款式（佔當時西裝銷量 50% 以上），中年男性穿此式樣並扣好鈕扣是當時的常見打扮",
          "因為 Metesky 喜歡偽裝",
          "因為警察事先洩漏給 Brussel",
          "因為媒體照片有處理過",
        ],
        en: [
          "Because double-breasted suits dominated men's fashion from the mid-1930s to early 1950s (over 50% of suits sold), so a middle-aged man wearing one buttoned was unremarkable",
          "Because Metesky liked to disguise himself",
          "Because police leaked details to Brussel",
          "Because the media doctored the photos",
        ],
      },
      answer: 0,
      explanation: {
        zh: "Chenoune (1993) 指出 1940s–1950s 雙排扣西裝佔西裝銷量過半。對中年男性而言，扣好雙排扣以見媒體幾乎是當時的「制服」，並非了不起的預測。",
        en: "Chenoune (1993) notes double-breasted suits made up over 50% of suits sold in the 1940s–50s. For a middle-aged man meeting the press, that look was nearly a default — not an impressive forecast.",
      },
    },
    {
      id: 124,
      question: {
        zh: "從 Brussel 案例可以歸納出「容易讓 profiler 名聲變好」的策略是？",
        en: "What strategy did Brussel's cases reveal that can artificially inflate a profiler's reputation?",
      },
      options: {
        zh: [
          "做大量預測 — 因為錯的會被遺忘，對的會被記得並被傳頌",
          "完全保密所有預測",
          "只接受極簡案件",
          "只接受能被同行審查的案件",
        ],
        en: [
          "Make many predictions — the wrong ones get forgotten while the right ones make you famous",
          "Keep all predictions secret",
          "Take only trivial cases",
          "Take only cases that allow peer review",
        ],
      },
      answer: 0,
      explanation: {
        zh: "Gladwell (2009) 指出 Brussel 並未真正理解兇手，而是「做夠多預測，錯的會被遺忘」的策略奏效。Finn (2008) 中亦有現代 profiler 承認「犯了百個錯誤但對的幾個就足以使案件轉向」。",
        en: "Gladwell (2009) argues Brussel didn't truly understand the offender — making enough predictions guarantees some hits and many misses are forgotten. Finn (2008) quotes a profiler admitting 'hundreds of mistakes, but a couple of right calls' can redirect an investigation.",
      },
    },
    {
      id: 125,
      question: {
        zh: "下列哪一項「不屬於」加拿大 Behavioral Analysis Units 所執行的職務範圍 (Bourque et al., 2009)？",
        en: "Which is NOT among the duties of Canada's Behavioral Analysis Units as described by Bourque et al. (2009)?",
      },
      options: {
        zh: [
          "為不明身分的嫌犯建立側寫",
          "分析犯罪現場",
          "進行公開審判判決",
          "進行間接人格評估與威脅評估",
        ],
        en: [
          "Develop profiles of unidentified offenders",
          "Analyze crime scenes",
          "Render public trial verdicts",
          "Conduct indirect personality assessments and threat assessments",
        ],
      },
      answer: 2,
      explanation: {
        zh: "BAU 的職務包含側寫、犯罪現場分析、重建、間接人格評估、提供偵查與訊問建議、協助執行搜索令、可疑死亡分析、威脅評估等 — 但「判決」是法官的職權。",
        en: "BAU duties include profiling, crime scene analysis, reconstruction, indirect personality assessment, investigative/interrogation advice, search-warrant assistance, suspicious death analysis, and threat assessments — but rendering verdicts is a judge's role.",
      },
    },
  ],
};
