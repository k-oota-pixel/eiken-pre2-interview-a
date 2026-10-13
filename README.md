# EIKEN Pre-2 Interview A

英検準2級 二次試験 Picture A の練習用ブラウザ教材です。

## 現在の仕様

- 全20問
- 画像を見て人物の動作を現在進行形で入力
- API / AI接続なし（判定はすべてブラウザ内）
- 入力する文の順番は自由
- 大文字小文字・句読点を吸収
- `picture / photo`、`exercise / stretching` など代表的な許容表現を複数登録
- 軽いスペルミスを `Almost!` として候補語を提示
- boy / girl / man / woman の取り違えを個別にフィードバック
- `is / are` の抜け・取り違え、-ing形の不足をフィードバック
- 同じ人物・動作を2回書いた場合も検出
- 「模範解答」を表示可能
- 問題順のランダム化に対応
- 20問終了時に Perfect Questions を表示
- スマートフォン対応

## 問題画像

20場面を5枚ずつ4本の軽量WebPスプライトにまとめています。
`sprite.js` が問題番号に応じて該当部分を表示するため、静的ホスティングでも追加APIなしで動作します。

## Files

- `index.html` UI
- `style.css` デザイン
- `app.js` 20問の問題データ・許容解答・判定ロジック
- `sprite.js` 問題画像のスプライト表示
- `images/strip1.webp` ～ `images/strip4.webp` 問題画像
- `.github/workflows/pages.yml` GitHub Pages 自動デプロイ

## GitHub Pages

`main` ブランチへの push をトリガーに GitHub Actions から Pages へ自動デプロイします。

公開URL（標準設定）:

`https://k-oota-pixel.github.io/eiken-pre2-interview-a/`

※ 初回のみ GitHub 側の Pages 設定反映により、公開URLが有効になるまで少し間が空く場合があります。
