# DONE

## 2026-02-14

- [x] GitHub リポジトリの作成
- [x] LICENSE (MIT) の設定
- [x] README.md の作成
- [x] CLAUDE.md の作成
- [x] TODO.md / DONE.md の作成
- [x] 技術スタックの選定 (TypeScript / Node.js)
- [x] プロジェクト構成の設計
- [x] プロジェクト名と GitHub リポジトリ URL を受け取る
- [x] プロジェクト名+リポジトリ名でディレクトリを作成する
- [x] そのディレクトリ内にリポジトリをダウンロードする
- [x] GitHub リポジトリ URL の入力・バリデーション
- [x] リポジトリのクローン処理
- [x] リポジトリ取得後にどのような記事を作成するか質問する
- [x] 利用者への質問フロー（記事の種類・対象読者・トーンなど）
- [x] コード・ドキュメントの読み取りと解析
- [x] リポジトリ内容の要約・構造化
- [x] 記事ドラフトの生成
- [x] 記事を作成する（test-project: git-art プロジェクト紹介記事）
- [x] CLAUDE.md に記事生成ワークフローを追記
- [x] 記事の最終出力（Markdown）
- [x] 記事をブラッシュアップする機能を入れる（history.md による変更履歴管理）
- [x] ツール構成を CLI から Claude Code ベースに変更
- [x] CLI コード（src/, package.json 等）を削除
- [x] workflows/ にワークフロー定義ファイルを作成（clone, config, generate, brushup）
- [x] CLAUDE.md, README.md, .gitignore を新構成に合わせて書き直し
- [x] help機能: workflows/help.md を作成し、使い方の手順を説明する機能を追加
- [x] プロジェクト名の命名規則を変更（{記事の名前}-{リポジトリ名}-{タイムスタンプ}で一意に）
- [x] 記事生成後にフルパスを表示するよう generate.md を更新
- [x] 記事を作成する前に全体の構成を定義するファイルを作る（outline.md）
- [x] 記事を作成する（Claude-Codeが面白い: git-art 紹介記事）

## 2026-02-15

- [x] 記事 v10 の outline を確認・承認し、記事を生成する
- [x] ディレクトリ名を複数形に変更（outline → outlines, article → articles）
- [x] 構成案の表示形式をコードブロックに変更（outline.md）
- [x] 記事ファイルの直接編集禁止ルールを CLAUDE.md に追加
- [x] README.md のワークフロー一覧を最新化（outline, switch, help を追加）
- [x] README.md の変更履歴管理の記述を修正（history.md → outlines/articles バージョン管理）
