# サークル紹介ウェブサイト

拡張性を重視したサークル紹介サイトです。

## 機能

- レスポンシブデザイン
- モジュラーコンポーネント設計
- 動的コンテンツ読み込み
- カスタマイズ可能な設定

## ディレクトリ構成

```
club/
├── index.html          # メインHTML
├── styles/            # CSSファイル
│   ├── main.css       # メインスタイル
│   └── components.css # コンポーネントスタイル
├── js/                # JavaScriptファイル
│   ├── config.js      # サイト設定
│   ├── components.js  # コンポーネント定義
│   └── main.js        # メインアプリケーション
├── data/              # JSONデータファイル
│   ├── activities.json
│   └── events.json
└── images/            # 画像ファイル
```

## カスタマイズ方法

### 1. サイト情報の変更
`js/config.js`の`siteConfig`オブジェクトを編集：

```javascript
const siteConfig = {
    siteName: "あなたのサークル名",
    siteTagline: "キャッチフレーズ",
    // ...
};
```

### 2. コンテンツの更新
- 活動内容: `data/activities.json`または`js/config.js`の`dataConfig.activities`
- イベント: `data/events.json`または`js/config.js`の`dataConfig.events`
- メンバー: `js/config.js`の`dataConfig.members`
- ギャラリー: `js/config.js`の`dataConfig.gallery`

### 3. 新しいコンポーネントの追加

```javascript
// 新しいコンポーネントクラスを作成
class CustomComponent {
    render(container, data) {
        // レンダリングロジック
    }
}

// コンポーネントを登録
app.addCustomComponent('custom', new CustomComponent());
```

### 4. スタイルのカスタマイズ
`styles/main.css`のCSS変数を変更：

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    // ...
}
```

## 拡張例

### 外部データの読み込み
```javascript
// main.jsのApp.loadExternalData()メソッドを使用
const events = await app.loadExternalData('/events.json');
app.updateData('events', events);
```

### 新しいセクションの追加
1. HTMLに新しいセクションを追加
2. 対応するコンポーネントを作成
3. CSSでスタイリング

## ローカルでの起動

```bash
# Python 3
python -m http.server 8000

# Node.js (http-serverがインストール済みの場合)
http-server -p 8000

# ブラウザで http://localhost:8000 にアクセス
```# HP
