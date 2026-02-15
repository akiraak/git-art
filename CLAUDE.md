# CLAUDE.md

## プロジェクト概要

git-art は、GitHub リポジトリの内容を読み取り、その内容に基づいた記事を作成するツール。
Claude Code が `workflows/` 配下の定義に従って処理を実行する。

## ディレクトリ構成

```
git-art/
├── CLAUDE.md              # 全体構成・ワークフロー定義
├── README.md
├── TODO.md / DONE.md
├── LICENSE
├── workflows/             # 各処理の定義
│   ├── clone.md           # リポジトリ取得
│   ├── config.md          # 記事設定の収集
│   ├── generate.md        # 記事生成
│   ├── brushup.md         # 記事ブラッシュアップ
│   └── help.md            # ヘルプ（使い方の説明）
└── projects/              # プロジェクトデータ（gitignored）
    └── {プロジェクト名}/
        ├── config.json    # 記事設定
        ├── article.md     # 生成された記事
        └── history.md     # 変更履歴
```

## ワークフロー

1. **リポジトリ取得** (`workflows/clone.md`): プロジェクト名と GitHub URL を受け取り、リポジトリをクローンする
2. **記事設定** (`workflows/config.md`): 利用者に質問して記事の種類・対象読者・トーンを決定し config.json に保存する
3. **記事生成** (`workflows/generate.md`): リポジトリ内容と config を読み、記事を生成して article.md に保存する
4. **ブラッシュアップ** (`workflows/brushup.md`): フィードバックに基づいて article.md を更新し、history.md に変更を記録する
5. **ヘルプ** (`workflows/help.md`): 使い方がわからない人向けに手順を説明する

利用者の指示に応じて、対応する workflow ファイルを読み、その手順に従って処理を実行する。
「使い方」「ヘルプ」「何ができる？」などの質問には `workflows/help.md` の内容を表示する。
GitHub URL だけが送られてきた場合は、リポジトリ名をプロジェクト名として記事作成を開始する（clone → config → generate）。

## タスク管理

- `TODO.md` - 未着手・進行中のタスクを管理する
- `DONE.md` - 完了済みのタスクを日付付きで記録する
- タスクを完了したら TODO.md から DONE.md へ移動する
- **コミット前に必ず TODO.md と DONE.md を最新の状態に更新してからコミットに含める**

## コーディング規約

- コミットメッセージは日本語で記述する
- ドキュメントは日本語で記述する
