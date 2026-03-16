# opendata-qa
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

このプロジェクトは、Markdownフォーマットで作成・公開するオープンデータQ&Aコンテンツを作成する簡単なフレームワークを提供します。これらのコンテンツはJSONやHTMLに変換することができます。

## 機能
- Markdown Q&AフォーマットをJSONとHTMLに変換します
- オープンデータのQ&Aコンテンツを作成・公開するためのシンプルなフレームワークを提供します

## 要件
- Denoランタイム

## 使用法
1. Q&Aコンテンツをマークダウンファイルに次の形式で作成します:
```

## 質問1
答え1

## 質問2
回答2
```
2. `make.js`スクリプトを実行してMarkdownをJSONとHTMLに変換します:
```
deno run make.js
```
3. このスクリプトはInput Markdownから`.csv`と`.html`ファイルを生成します。

## データ/API
このプロジェクトは外部のデータやAPIを使用していません。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
