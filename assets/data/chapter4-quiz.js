/* Chapter 4 Question Bank — © 葉欲禾 (Gary Yu-Ho YEH) */
window.CBP = window.CBP || {};
window.CBP.QuizBank = window.CBP.QuizBank || {};
window.CBP.QuizBank.chapter4 = {
  chapterId: 4,
  questions: [
    {
      id: 401,
      question: { zh: "Geographic mapping 與 geographic profiling 的差別是？", en: "Geographic mapping vs geographic profiling — main difference?" },
      options: {
        zh: ["兩者完全相同", "Mapping 分析眾多兇手在一段時間的空間模式；Profiling 鎖定單一連續犯（或小群）的空間移動", "Mapping 只用於財產犯罪；Profiling 只用於命案", "Mapping 是工具；Profiling 是方法論"],
        en: ["Identical", "Mapping analyzes many offenders' spatial patterns over time; profiling targets a single serial offender (or small group)", "Mapping only for property crime; profiling only for murders", "Mapping is a tool; profiling is methodology"]
      },
      answer: 1,
      explanation: { zh: "Mapping 看「總體 hot spots」；Profiling 看「這位連續犯住哪？下一案在哪？」", en: "Mapping = aggregate hot spots; profiling = where does this serial offender live / strike next?" }
    },
    {
      id: 402,
      question: { zh: "「Chicago School」與 concentric circle theory（同心圓理論）的核心發現是？", en: "Core finding of the Chicago School's concentric circle theory?" },
      options: {
        zh: ["犯罪在「轉型地帶（zone of transition）」最高度集中 — 不是個人缺陷，而是社會解組造成", "犯罪率與星座有關", "犯罪率與氣候有關", "犯罪率與人口總數無關"],
        en: ["Crime concentrates in the 'zone of transition' — not individual deficiency but social disorganization", "Crime correlates with zodiac", "Crime correlates with weather", "Crime is unrelated to population size"]
      },
      answer: 0,
      explanation: { zh: "Burgess 的同心圓 + Shaw & McKay 用 100,000+ 少年少年法院個案驗證；犯罪集中於建築老舊、貧困、人口流動高的「過渡帶」。", en: "Burgess's 5 zones + Shaw & McKay's 100,000+ juvenile cases: crime peaks in deteriorating, poor, transient 'zones of transition.'" }
    },
    {
      id: 403,
      question: { zh: "Cohen 與 Felson (1979) 的 Routine Activity Theory 認為犯罪發生需要哪三要件同時出現？", en: "Per Cohen & Felson (1979), what three elements must converge for crime?" },
      options: {
        zh: ["有動機的犯罪者 + 合適的目標 + 缺乏有效監護者", "DNA + 動機 + 機會", "貧窮 + 衝動 + 槍枝", "媒體報導 + 同伴壓力 + 酒精"],
        en: ["Motivated offender + suitable victim + absence of capable guardian", "DNA + motive + opportunity", "Poverty + impulsivity + firearms", "Media + peer pressure + alcohol"]
      },
      answer: 0,
      explanation: { zh: "三個要件缺一不可。移除任何一個都能降低犯罪機率，這也是犯罪預防策略的核心邏輯。", en: "Remove any one and crime drops — the backbone of crime-prevention strategy." }
    },
    {
      id: 404,
      question: { zh: "Rational Choice Theory（理性選擇理論）的核心假設是？", en: "Core assumption of Rational Choice Theory?" },
      options: {
        zh: ["犯罪者完全不理性", "犯罪者是「理性人」 — 進行成本效益分析；若距離家越遠，預期效益必須更高才會去", "犯罪者只受潛意識驅動", "犯罪者都是精神病患"],
        en: ["Offenders are entirely irrational", "Offenders are 'rational actors' performing cost-benefit analyses; the farther from home, the higher expected reward must be", "Offenders are driven only by the unconscious", "Offenders are all mentally ill"]
      },
      answer: 1,
      explanation: { zh: "Cornish & Clark：犯罪者衡量得失。Canter 用此解釋為什麼性殺人犯有時把屍體棄於家中地下室或閣樓 — 遠程運送成本太高。", en: "Cornish & Clark: offenders weigh costs/benefits. Canter explains why some serial killers dump bodies in their own basements — transport too costly." }
    },
    {
      id: 405,
      question: { zh: "Brantingham 夫婦的「Crime Pattern Theory」整合了哪兩個理論？", en: "Which two theories does the Brantinghams' Crime Pattern Theory integrate?" },
      options: {
        zh: ["Routine Activity Theory + Rational Choice Theory", "Freudian + Behavioral", "DNA + 指紋", "演化心理學 + 社會生物學"],
        en: ["Routine Activity Theory + Rational Choice Theory", "Freudian + Behavioral", "DNA + fingerprints", "Evolutionary + sociobiology"]
      },
      answer: 0,
      explanation: { zh: "Crime Pattern Theory 是現代環境犯罪學的基石，整合「日常活動」與「理性選擇」說明為何 most offenders commit crime close to home。", en: "The cornerstone of modern environmental criminology — integrates daily activity with rational choice, explaining why most crime is committed close to home." }
    },
    {
      id: 406,
      question: { zh: "Distance Decay（距離衰減）函數的意思是？", en: "What is the 'distance decay' function?" },
      options: {
        zh: ["離兇手住處越遠，犯案機率越低；距離越遠，曲線「衰減」", "離兇手住處越遠，犯案機率越高", "距離與犯案無關", "DNA 樣本隨距離衰減"],
        en: ["The farther from the offender's home, the lower the probability of offending; the curve 'decays' with distance", "The farther from home, the higher the probability", "Distance is unrelated to offending", "DNA decays with distance"]
      },
      answer: 0,
      explanation: { zh: "為地理學核心概念之一（Eldridge & Jones, 1991）。Rossmo 用此建立 CGT 演算法。", en: "A core geographic concept (Eldridge & Jones, 1991). Rossmo built the CGT algorithm on it." }
    },
    {
      id: 407,
      question: { zh: "Buffer Zone（緩衝區）指的是？", en: "What is a 'buffer zone'?" },
      options: {
        zh: ["兇手住處附近的小範圍區域 — 在此區內犯案機率反而較低（怕被鄰居認出）", "警方在現場周邊設立的封鎖區", "DNA 抗污染的隔離區", "監獄與社區的隔離帶"],
        en: ["A small area around the offender's home where they are LESS likely to offend (fear of being recognized)", "A police cordon", "DNA contamination barrier", "Buffer between prison and community"]
      },
      answer: 0,
      explanation: { zh: "Brantingham（1984）提出，多數兇手 buffer zone 約 ¼ 英里。銀行劫匪約 5 英里、汽車竊賊約 1 英里 — buffer 越大反映目標稀少（銀行少、車多）。", en: "Brantinghams (1984): typically <¼ mile. Bank robbers ~5 miles, car thieves ~1 mile — reflecting target availability." }
    },
    {
      id: 408,
      question: { zh: "Canter 與 Larkin 提出的 Marauder（劫掠者）vs Commuter（通勤者）兩類兇手，差別是？", en: "Canter & Larkin's marauder vs commuter — what's the difference?" },
      options: {
        zh: ["Marauder 從家出發、犯案後回家，犯案散佈於家附近呈圓形；Commuter 從家通勤到另一區犯案，犯案與住處幾乎不重疊", "Marauder 騎馬、Commuter 開車", "兩者完全相同", "Marauder 只在白天犯案、Commuter 只在晚上"],
        en: ["Marauder leaves home to commit nearby and returns (crimes circle home); commuter travels into a separate area (little overlap with home)", "Marauder rides horseback, commuter drives", "Identical", "Marauder by day, commuter by night"]
      },
      answer: 0,
      explanation: { zh: "Canter & Larkin (1993)：87% 英國連續強姦犯為 marauder。但 Paulsen (2007) 發現美國連續強姦犯 51% 是 commuter — 因此 centrality theory 不能盲信。", en: "Canter & Larkin (1993): 87% of UK serial rapists were marauders. But Paulsen (2007): 51% of U.S. serial rapists are commuters — so centrality isn't universal." }
    },
    {
      id: 409,
      question: { zh: "Rossmo 把連續犯的「狩獵模式」分為四類，下列何者「不」屬於其分類？", en: "Which is NOT one of Rossmo's four offender hunting patterns?" },
      options: {
        zh: ["Hunter（獵人）", "Poacher（盜獵者）", "Troller（漫遊者）", "Sniper（狙擊手）"],
        en: ["Hunter", "Poacher", "Troller", "Sniper"]
      },
      answer: 3,
      explanation: { zh: "四類為：Hunter（從家出發找受害者）、Poacher（遠距出獵，類似 commuter）、Troller（日常活動偶遇受害者）、Trapper（設陷阱誘victim上門 — 多數女性連續殺人犯屬此）。", en: "Four types: Hunter (sets out from home), Poacher (travels far, like commuter), Troller (encounters by routine), Trapper (lures victims to themselves — most female serial killers)." }
    },
    {
      id: 410,
      question: { zh: "Rossmo 提出的三種「攻擊方式」中，哪一種會誘騙受害者到兇手控制的地點？", en: "Which of Rossmo's three attack methods involves luring the victim to a location controlled by the offender?" },
      options: {
        zh: ["Raptor（猛禽：相遇即攻擊）", "Stalker（潛行：先尾隨後攻擊）", "Ambusher（伏擊：誘騙到控制地點才攻擊）", "Sniper（狙擊手）"],
        en: ["Raptor (attack on encounter)", "Stalker (follow then attack)", "Ambusher (lure to a controlled location)", "Sniper"]
      },
      answer: 2,
      explanation: { zh: "Ambusher 常把屍體藏在自家或工作地附近。Hunter/Raptor 和 Trapper/Ambusher 是最常見組合。", en: "Ambushers often hide bodies on their own property. Hunter/Raptor and Trapper/Ambusher are the most common combos." }
    },
    {
      id: 411,
      question: { zh: "1980 年代 Stuart S. Kind 在 Yorkshire Ripper 案中用什麼方法計算 Peter Sutcliffe 的可能住處？", en: "What method did Stuart S. Kind use to locate Yorkshire Ripper Peter Sutcliffe?" },
      options: {
        zh: ["DNA 比對", "把每個案發地點計算「重心（centroid）」 — 與所有案發地點距離總和最小的點", "瀏覽報紙", "精神分析"],
        en: ["DNA matching", "Calculating the 'centroid' — the point with minimum total distance to all offense sites", "Reading newspapers", "Psychoanalysis"]
      },
      answer: 1,
      explanation: { zh: "Kind 為前皇家空軍領航員，把問題視為「導航」。報告寫於 Sutcliffe 被捕前，但未被當時警方採用，直到 Canter (2005) 重新發掘。", en: "Kind, a former RAF navigator, treated it as a navigation problem. Written before Sutcliffe's arrest but unused at the time — Canter (2005) rediscovered it." }
    },
    {
      id: 412,
      question: { zh: "三大主流 GP 軟體中，哪一個是 Kim Rossmo 發展的？", en: "Which major GP software was developed by Kim Rossmo?" },
      options: {
        zh: ["Rigel（基於 CGT 演算法）", "CrimeStat（Levine 發展）", "Dragnet（Canter 發展）", "ViCLAS"],
        en: ["Rigel (based on CGT algorithm)", "CrimeStat (Levine)", "Dragnet (Canter)", "ViCLAS"]
      },
      answer: 0,
      explanation: { zh: "Rossmo 在 Simon Fraser 取得加拿大首位「警官+犯罪學博士」學位，發展 Criminal Geographic Targeting (CGT) → 商品化為 Rigel。", en: "Rossmo earned Canada's first 'cop-PhD' at Simon Fraser; he developed CGT, commercialized as Rigel." }
    },
    {
      id: 413,
      question: { zh: "Rossmo 因哪一個案件被溫哥華警局解雇，後又獲市長書面道歉？", en: "What case led to Rossmo's dismissal from Vancouver PD — and later a written apology from the mayor?" },
      options: {
        zh: ["Robert Pickton（豬農連續殺人犯案）— 他建議成立專案組與警示市民，遭忽視", "Beltway Sniper 案", "Yorkshire Ripper 案", "Boston Strangler 案"],
        en: ["Robert Pickton (pig-farm serial killer) — he urged a task force and public warning, ignored", "Beltway Sniper", "Yorkshire Ripper", "Boston Strangler"]
      },
      answer: 0,
      explanation: { zh: "Pickton 2007 年因 6 名女性受害者被判無期；2010 年 400 頁報告揭露警方失誤，市長正式向 Rossmo 道歉。", en: "Pickton was convicted of 6 murders in 2007; a 400-page 2010 report exposed police failures and the mayor formally apologized." }
    },
    {
      id: 414,
      question: { zh: "GP 軟體效能的「Error Distance」指什麼？", en: "What does the GP accuracy metric 'error distance' measure?" },
      options: {
        zh: ["從兇手實際住處到 GP 預測最高機率區域的距離", "兇手與受害者間的距離", "案發地之間的距離", "警局到現場的距離"],
        en: ["Distance from the offender's actual residence to the predicted highest-probability area", "Distance from offender to victim", "Distance between scenes", "Distance from station to scene"]
      },
      answer: 0,
      explanation: { zh: "Harries & LeBeau 認為「點對點」量度太嚴格，應改以「區域對區域」（top profile area）量測。", en: "Harries & LeBeau argue point-to-point is too strict; area-based measures (top profile area) are more useful." }
    },
    {
      id: 415,
      question: { zh: "Snook 等 (2002, 2004) 與 Bennell 等 (2007) 的驚人發現是？", en: "What is the surprising finding from Snook et al. (2002, 2004) and Bennell et al. (2007)?" },
      options: {
        zh: ["經過簡單 heuristic 訓練（圓圈規則 + 距離衰減）的學生或警察，預測兇手住處的準確度與昂貴的 GP 軟體（如 CrimeStat、Dragnet）相當甚至更好", "GP 軟體永遠最準", "只有 FBI 探員能準確預測", "GP 永遠無效"],
        en: ["Students or police trained briefly on simple heuristics (circle + distance decay) predicted offender residence as accurately as — or better than — expensive GP software (CrimeStat, Dragnet)", "GP software is always most accurate", "Only FBI agents predict well", "GP is always useless"]
      },
      answer: 0,
      explanation: { zh: "Snook 等：「過去 10 年的科技進展，可能把一件相對簡單的事過度複雜化。」 — 警局未必需要昂貴軟體。", en: "Snook et al.: 'Technological advances may have overcomplicated what is actually a relatively simple task.' Police may not need expensive software." }
    },
    {
      id: 416,
      question: { zh: "Geographic profiling 的六個基本假設中，下列何者「不」屬於？", en: "Which is NOT one of the six basic assumptions of GP?" },
      options: {
        zh: ["3–4 件以上案件可連結至同一兇手", "犯案地點散佈廣泛、有中央位置", "兇手有穩定的單一活動基地", "兇手必須是男性"],
        en: ["3–4+ cases linkable to one offender", "Crimes widely dispersed with a central location", "Offender has a single stable base of operations", "Offender must be male"]
      },
      answer: 3,
      explanation: { zh: "六假設：(1)同一人 (2)案件 ≥3–4 (3)散佈廣有中心 (4)穩定基地 (5)案件間隔短 (6)系列連續發生。性別非條件。", en: "Six: (1) one offender, (2) ≥3–4 cases, (3) wide dispersal with center, (4) stable base, (5) short intervals, (6) continuous series. Gender is not a criterion." }
    },
    {
      id: 417,
      question: { zh: "Beltway Sniper 案為何違反 GP 基本假設？", en: "Why did the Beltway Sniper case violate basic GP assumptions?" },
      options: {
        zh: ["Muhammad 與 Malvo 住在車內、汽車旅館、熟人住處之間流動 — 違反「單一穩定基地」假設", "他們只犯一案", "他們只在白天犯案", "他們不是連續犯"],
        en: ["Muhammad and Malvo lived in their car, motels, acquaintances' homes — violating 'single stable base'", "Only one offense", "Only daytime", "Not serial"]
      },
      answer: 0,
      explanation: { zh: "Harries & LeBeau 指出，馬里蘭的初期案件曾暗示馬里蘭住處，但後續維吉尼亞案推翻了這個推論。", en: "Harries & LeBeau note early Maryland clusters suggested a Maryland residence — later Virginia events disproved this." }
    },
    {
      id: 418,
      question: { zh: "Cognitive scripts（認知腳本）在 Bennett & Wright (1984) 的職業竊賊研究中是什麼意思？", en: "What are 'cognitive scripts' in Bennett & Wright's (1984) burglar study?" },
      options: {
        zh: ["竊賊腦海中已自動化的「在某情境如何行動」心智劇本 + 熟悉鄰里的逃跑路線心智地圖；多數竊案有預謀", "完全隨機行動", "電腦程式碼", "兒時記憶閃回"],
        en: ["Automated mental plans for 'how to act in a situation' + mental maps of escape routes; most burglaries are planned", "Random action", "Computer code", "Childhood flashbacks"]
      },
      answer: 0,
      explanation: { zh: "Bennett & Wright 訪談南英監獄的職業竊賊 → 多數犯案非衝動，靠 cognitive scripts + mental maps。", en: "Bennett & Wright interviewed professional burglars in southern English prisons — most burglaries weren't impulsive but used scripts + mental maps." }
    },
    {
      id: 419,
      question: { zh: "Godwin & Canter (1997) 發現一個耐人尋味現象：當連續殺人犯犯下 9–10 個案件後，他們的棄屍地點…？", en: "Godwin & Canter (1997): after 9–10 victims, where do serial killers tend to dispose of bodies?" },
      options: {
        zh: ["越來越靠近家（< 2 英里）— 反映犯罪與日常生活整合、降低運屍風險", "越來越遠離家", "完全隨機", "都在水中"],
        en: ["Closer to home (< 2 miles) — reflecting integration with daily life and reduced transport risk", "Farther from home", "Random", "All in water"]
      },
      answer: 0,
      explanation: { zh: "經典「home dump site」案例：Jeffrey Dahmer、John Wayne Gacy、Robert Pickton、Anthony Sowell。", en: "Classic 'home dump site' cases: Dahmer, Gacy, Pickton, Sowell." }
    },
    {
      id: 420,
      question: { zh: "Expressive crime（表達性犯罪）與 Instrumental crime（工具性犯罪）在地理距離上的差別？", en: "Expressive vs instrumental crime — geographic distance difference?" },
      options: {
        zh: ["Expressive（情緒性，如報復縱火、強姦）距離較短；Instrumental（工具性，如商業搶劫）距離較長", "兩者完全相同", "Expressive 較長", "與距離無關"],
        en: ["Expressive (emotional, e.g., revenge arson, rape) — shorter distance; Instrumental (e.g., commercial robbery) — longer distance", "Identical", "Expressive longer", "No relation"]
      },
      answer: 0,
      explanation: { zh: "Laukkanen 等 (2008)、Fritzon (2001) 研究 156 件縱火案：報復型走得短、求利型走得遠。商業強盜中 63% 為 commuter。", en: "Laukkanen et al. (2008); Fritzon (2001) on 156 arsons: revenge arsons stayed near, instrumental went far. 63% of commercial robberies are commuter-style." }
    },
    {
      id: 421,
      question: { zh: "為什麼「Windshield Wiper Effect（雨刷效應）」會修正單純圓圈理論？", en: "Why does the 'windshield wiper effect' modify the simple circle theory?" },
      options: {
        zh: ["實際地形與偏好讓兇手不會 360 度均勻散佈，反而像扇形（平均角度 ~60°）從家展開", "因為兇手左右手不對稱", "因為下雨天兇手才犯案", "因為兇手都坐車"],
        en: ["Geography and preferences make offenders fan out from home rather than spreading 360°, with average angle ~60°", "Offender handedness", "Only commits crimes in rain", "Always in cars"]
      },
      answer: 0,
      explanation: { zh: "Lundrigan & Canter (2001) 分析 79 名美國連續殺人犯，發現「家在扇柄」、案件「扇出」的模式。", en: "Lundrigan & Canter (2001) analyzed 79 U.S. serial killers — home as the pivot, crimes fanning out." }
    },
    {
      id: 422,
      question: { zh: "預測警政（Predictive Policing）的定義是？", en: "Definition of 'predictive policing'?" },
      options: {
        zh: ["使用大型資料集 + 進階分析來預期、預防、更有效因應未來犯罪的警政策略", "把警察變成預言家", "只看星座算命", "讓警察用 AI 完全自動執法"],
        en: ["Strategy using large data + advanced analytics to anticipate, prevent, and respond to future crime", "Turning police into prophets", "Astrological policing", "Fully automated AI enforcement"]
      },
      answer: 0,
      explanation: { zh: "Uchida (2011)、Pearsall (2010) 定義。CompStat 是經典工具，但也曾因下令違法逮捕、降罪等級而引發爭議。", en: "Per Uchida (2011), Pearsall (2010). CompStat is the classic tool — though it has been abused (illegal arrests, downgraded offenses)." }
    },
    {
      id: 423,
      question: { zh: "Empirical Bayes / Bayesian 方法對 GP 的改進是？", en: "How do Bayesian methods improve GP?" },
      options: {
        zh: ["除了 distance decay 之外，整合「過往兇手住處」「移動成本」「地理障礙」等多種資訊，產生 3 個風險面圖", "完全捨棄 distance decay", "只用 DNA", "用單一公式"],
        en: ["Beyond distance decay, integrates past-offender residences, travel costs, geographic barriers — producing 3 risk surfaces", "Drops distance decay entirely", "DNA only", "A single formula"]
      },
      answer: 0,
      explanation: { zh: "Block & Bernasco (2009) 在 62 名竊賊資料中證明 Bayesian 法優於傳統 distance decay，尤其對 marauders。", en: "Block & Bernasco (2009) showed Bayesian beats traditional distance decay on 62 burglars — especially for marauders." }
    },
    {
      id: 424,
      question: { zh: "Leitner 與 Kent (2009) 在 Baltimore County 資料庫 850 件「多類型犯罪系列」上發現什麼？", en: "What did Leitner & Kent (2009) find with 850 multi-crime-type series from Baltimore County?" },
      options: {
        zh: ["把不同類型的犯罪（竊盜+車竊+縱火）整合進同一系列，GP 預測「顯著更準確」", "多類型反而降低準確性", "與單一類型完全相同", "完全無效"],
        en: ["Integrating multi-type crimes (e.g., burglary + auto theft + arson) into one series made GP significantly more accurate", "Reduced accuracy", "Same as single-type", "No effect"]
      },
      answer: 0,
      explanation: { zh: "因 multi-type 系列中 marauder 比例較高。研究挑戰「同類型系列才能做 GP」的傳統做法。", en: "Higher marauder proportion in multi-type series. Challenges the 'same-type series only' tradition." }
    },
    {
      id: 425,
      question: { zh: "Awareness Space / Action Space / Target Backcloth 三個概念的關係？", en: "Relationship between awareness space, action space, and target backcloth?" },
      options: {
        zh: [
          "Action space = 兇手日常活動的地理區；Awareness space = 兇手有「認知地圖」的區域；Target backcloth = 從兇手角度看潛在合適目標的時空分佈",
          "三者完全相同",
          "三者互不相關",
          "都只是地圖"
        ],
        en: [
          "Action space = where the offender routinely operates; Awareness space = where they have a mental map; Target backcloth = the spatial/temporal distribution of suitable targets from the offender's view",
          "Identical",
          "Unrelated",
          "Just maps"
        ]
      },
      answer: 0,
      explanation: { zh: "Brantinghams：兇手通常不超出 awareness space；目標選擇 = action space × target backcloth。Rossmo (1997) 強調 target backcloth 隨時段、季節變動。", en: "Brantinghams: offenders rarely stray beyond awareness space; target selection = action space × backcloth. Rossmo (1997): backcloth varies by time-of-day and season." }
    }
  ]
};
