# Nick Lu (LU TSE-HSIEN) — 獨立開發者作品集與隱私政策網站

這是一個專為獨立 iOS 開發者打造的現代個人作品展示門戶（Portfolio & App Showcase），同時提供符合 **Apple App Store Connect** 與 **Google Play Console** 嚴格審核標準的「各 App 獨立隱私權政策（Privacy Policy）」與「技術支援中心（Support URL）」。

---

## 📁 網站目錄架構

```text
developer-site/
├── index.html                   # 官網首頁：個人介紹 + 所有 App Showcase
├── style.css                    # 現代 Apple 風格樣式 (支援系統深淺色 / 手動切換 / RWD)
├── script.js                    # 主題切換與無障礙互動腳本
├── .nojekyll                    # 確保 GitHub Pages 支援所有靜態目錄與資源
├── assets/                      # App 圖示與高清預覽截圖
│   ├── subtrack-icon.png
│   ├── subtrack-preview.png
│   ├── examplan-icon.png
│   └── examplan-preview.png
├── subtrack/                    # SubTrack 訂閱費管家專屬目錄
│   ├── index.html               # 產品介紹 / 行銷宣傳專頁 (Marketing URL)
│   ├── privacy.html             # 隱私權政策 (App Privacy Policy URL)
│   └── support.html             # 技術支援與 FAQ (Support URL)
├── examplan/                    # 考試計劃 AI 專屬目錄
│   ├── index.html               # 產品介紹 / 行銷宣傳專頁 (Marketing URL)
│   ├── privacy.html             # 隱私權政策 (App Privacy Policy URL)
│   └── support.html             # 技術支援與 FAQ (Support URL)
├── privacy/
│   └── index.html               # 所有 App 隱私權政策集中索引頁
└── support/
    └── index.html               # 所有 App 技術支援集中索引頁
```

---

## 📱 App Store Connect 欄位填寫對照表

當您在 App Store Connect 送審或更新版本時，各欄位可直接填寫對應的公開 HTTPS 網址（以 GitHub Pages 帳號 `nicklu930705` 為例）：

| App 名稱 | 欄位名稱 (ASC Location) | 建議填寫之公開網址 |
| :--- | :--- | :--- |
| **SubTrack** | **隱私權政策 URL** (*必填*) | `https://nicklu930705.github.io/developer-site/subtrack/privacy.html` |
| **SubTrack** | **支援網址 (Support URL)** (*必填*) | `https://nicklu930705.github.io/developer-site/subtrack/support.html` |
| **SubTrack** | **行銷網址 (Marketing URL)** (*選填*) | `https://nicklu930705.github.io/developer-site/subtrack/` |
| **考試計劃 AI** | **隱私權政策 URL** (*必填*) | `https://nicklu930705.github.io/developer-site/examplan/privacy.html` |
| **考試計劃 AI** | **支援網址 (Support URL)** (*必填*) | `https://nicklu930705.github.io/developer-site/examplan/support.html` |
| **考試計劃 AI** | **行銷網址 (Marketing URL)** (*選填*) | `https://nicklu930705.github.io/developer-site/examplan/` |
| **ShiftPay** | **隱私權政策 URL** (*必填*) | `https://nicklu930705.github.io/developer-site/shiftpay/privacy.html` |
| **ShiftPay** | **支援網址 (Support URL)** (*必填*) | `https://nicklu930705.github.io/developer-site/shiftpay/support.html` |
| **ShiftPay** | **行銷網址 (Marketing URL)** (*選填*) | `https://nicklu930705.github.io/developer-site/shiftpay/` |
| **個人首頁** | **開發者官方網址** | `https://nicklu930705.github.io/developer-site/` |

> 註：若您將儲存庫命名為 `nicklu930705.github.io`（GitHub User Pages），網址中間的 `/developer-site/` 可直接省略，網址會更簡潔（例如 `https://nicklu930705.github.io/subtrack/privacy.html`）。

---

## 🚀 本地即時預覽

本專案使用純靜態標準 Web 技術（HTML5 + 現代 CSS3 + 原生 JS），**零外部依賴、無需執行 npm install**。

您可以在終端機中切換至此目錄並啟動本機伺服器：

```bash
cd developer-site
python3 -m http.server 8080
```

接著在瀏覽器打開：`http://localhost:8080` 即可查看完整網站！

---

## 🌐 一鍵發布上線教學 (GitHub Pages 免費永久託管)

### 方式 A：建立獨立儲存庫發布 (建議)
1. 在 GitHub 上建立一個新的公開 (Public) 儲存庫，名稱可為 `developer-site` 或 `apps`。
2. 在本地終端機執行：
   ```bash
   cd developer-site
   git init
   git add .
   git commit -m "feat: initial developer portfolio and privacy policy portal"
   git branch -M main
   git remote add origin https://github.com/nicklu930705/developer-site.git
   git push -u origin main
   ```
3. 前往 GitHub 該儲存庫的 **Settings &gt; Pages**：
   - Source 選擇：`Deploy from a branch`
   - Branch 選擇：`main` / `/(root)`
   - 點擊 **Save**。
4. 約 1~2 分鐘後，即可在 `https://nicklu930705.github.io/developer-site/` 訪問已上線的網站！

### 方式 B：使用 Vercel / Cloudflare Pages 部署
- 將本目錄推送到 GitHub 後，登入 [Vercel](https://vercel.com)，點擊「Add New Project」並選擇該儲存庫，Framework 選擇「Other」，點擊 Deploy 即可自動生成永久 HTTPS 網址與自訂網域支援。

---

## ✨ 核心設計特色
1. **符合 Apple 審核標準**：專門針對本機 SwiftData / AsyncStorage、零追蹤宣告、Apple In-App Purchase (StoreKit 2) 與 AI 傳輸隱私撰寫。
2. **現代深色/淺色外觀**：依循 W3C `color-scheme` 與 `light-dark()` 規範，支援自動跟隨 macOS / iOS 系統外觀，並可手動一鍵切換。
3. **優雅易讀**：Apple 官方設計語言（SF Pro 排版、Squircle 圓角 App 圖示、毛玻璃頂部導覽列）。
4. **易於擴充**：未來開發新 App 時，只需複製一份資料夾即可無痛增加新產品與新政策。
