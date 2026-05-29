# Criminal & Behavioral Profiling — Interactive Textbook 互動教材

> 改編自 Bartol, C. R., & Bartol, A. M. (2013). *Criminal & Behavioral Profiling: Theory, Research and Practice*. SAGE Publications.

中英雙語的線上互動教材，提供修課同學每週課程的自學與複習。每章包含完整概念說明、案例剖析、視覺化圖示、互動式練習，以及隨機抽題的自我評量。

A bilingual (Traditional Chinese / English) interactive companion for the textbook above — for use by enrolled students.

---

## ✨ Features 特色

| 中文 | English |
|------|---------|
| 🌐 中英雙語介面，一鍵切換 | Bilingual UI with one-click toggle |
| 📑 每章互動目錄 + 章節錨點 | Per-chapter sticky TOC with smooth anchors |
| 🖼 視覺化時間軸、對照表、心智圖 | Visual timelines, comparison tables, mind maps |
| 🧠 互動式概念體驗（如 Barnum demo） | Interactive concept demos (e.g. the Barnum demo) |
| 📝 隨機 10 題自我評量 + 即時評分與解析 | Randomized 10-Q quiz with instant scoring + explanations |
| 🔌 預留後端 hook，未來可接資料庫 | Built-in hook for future backend integration |
| 📱 響應式設計（手機 / 平板 / 桌機） | Responsive design (mobile / tablet / desktop) |

---

## 📂 Project Structure

```
criminal-profiling-textbook/
├── index.html                     # 目錄首頁
├── chapters/
│   └── chapter1.html              # 第一章：導論
├── assets/
│   ├── css/style.css              # 共用樣式
│   ├── js/
│   │   ├── common.js              # i18n + 共用互動
│   │   └── quiz.js                # 通用測驗引擎
│   ├── data/
│   │   └── chapter1-quiz.js       # 第一章題庫
│   └── img/                       # 圖片資源
└── README.md
```

未來新章節時，僅需：
1. 在 `chapters/` 新增 `chapterN.html`
2. 在 `assets/data/` 新增 `chapterN-quiz.js`
3. 在 `index.html` 的章節格更新「狀態」即可

## 🚀 Quick Start

直接以瀏覽器開啟 `index.html` 即可。需要本機伺服器時：

```bash
# Python 3
python -m http.server 8080
# 或
npx serve .
```

## 🔮 Roadmap

- [x] Chapter 1 完整內容、題庫、互動 demo
- [ ] Chapter 2–9（陸續推出）
- [ ] 後端：使用者進度與分數紀錄（暫定 Firebase 或自架）
- [ ] 章節卡片加入縮圖與預估閱讀時間
- [ ] 教師端：題庫管理、學生分數匯出

## 🪪 Copyright 版權

© 2026 **葉欲禾 (Gary Yu-Ho YEH)** — All Rights Reserved.

本教材內容由本人改編、撰寫與設計，僅供本人課程教學使用。原書著作權屬於 SAGE Publications 與作者 Bartol &amp; Bartol。

Content adapted, written, and designed by 葉欲禾 (Gary Yu-Ho YEH) for non-commercial classroom use only. Original textbook © SAGE Publications and authors Bartol &amp; Bartol.
