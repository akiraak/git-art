# CLAUDE.md

## プロジェクト概要

git-art は、GitHub リポジトリの内容を読み取り、その内容に基づいた記事を作成するツール。
Claude Code が `workflows/` 配下の定義に従って処理を実行する。

## ディレクトリ構成

```
git-art/
├── CLAUDE.md              # 全体構成・ワークフロー定義
├── TODO.md / DONE.md
├── LICENSE
├── workflows/             # 各処理の定義
│   ├── clone.md           # リポジトリ取得
│   ├── config.md          # 記事設定の収集
│   ├── outline.md         # 記事構成の作成
│   ├── generate.md        # 記事生成
│   ├── brushup.md         # 記事ブラッシュアップ
│   ├── switch.md          # プロジェクト切り替え
│   └── help.md            # ヘルプ（使い方の説明）
└── projects/              # プロジェクトデータ（gitignored）
    ├── current.json       # 現在作業中のプロジェクト名
    └── {記事の名前}-{リポジトリ名}-{YYYYMMDD-HHMMSS}/
        ├── config.json    # 記事設定
        ├── outlines/      # 記事構成（バージョン管理）
        │   ├── v1.md
        │   ├── v2.md
        │   └── ...
        └── articles/      # 生成された記事（バージョン管理）
            ├── v2.md
            ├── v3.md
            └── ...
```

## ワークフロー

1. **リポジトリ取得** (`workflows/clone.md`): GitHub URL と記事の名前を受け取り、リポジトリをクローンする
2. **記事設定** (`workflows/config.md`): 利用者に記事の方向性を質問し config.json に保存する
3. **記事構成** (`workflows/outline.md`): 利用者と対話しながら記事の構成（大見出し・小見出し）を決定し `outlines/v{N}.md` に保存する
4. **記事生成** (`workflows/generate.md`): リポジトリ内容と config と outline を読み、記事を生成して `articles/v{N}.md` に保存する
5. **ブラッシュアップ** (`workflows/brushup.md`): フィードバックに基づいて記事を更新し、新しいバージョンとして保存する
6. **プロジェクト切り替え** (`workflows/switch.md`): 作業対象のプロジェクトを切り替える
7. **ヘルプ** (`workflows/help.md`): 使い方がわからない人向けに手順を説明する

利用者の指示に応じて、対応する workflow ファイルを読み、その手順に従って処理を実行する。
「切り替え」「別のプロジェクト」などの指示には `workflows/switch.md` に従って処理する。
「使い方」「ヘルプ」「何ができる？」などの質問には `workflows/help.md` の内容を表示する。
GitHub URL だけが送られてきた場合は、記事作成を開始する（clone → config → outline → generate）。

## 作業中プロジェクト

- `projects/current.json` に現在作業中のプロジェクト名を保存する
- 記事作成の開始時（clone 完了後）に `current.json` を更新する
- ブラッシュアップや記事生成の際は `current.json` を読み、対象プロジェクトを特定する
- 会話の最初に `current.json` を読み、作業中のプロジェクト名を表示する

## タスク管理

- `TODO.md` - 未着手・進行中のタスクを管理する
- `DONE.md` - 完了済みのタスクを日付付きで記録する
- タスクを完了したら TODO.md から DONE.md へ移動する
- **コミット前に必ず TODO.md と DONE.md を最新の状態に更新してからコミットに含める**

## 利用者への提案ルール

- 選択肢を提示するときは頭に番号を付ける

## バージョン管理ルール

- outline はフィードバックのたびに新しいバージョンとして保存する（v1, v2, v3, ...）
- article のバージョン番号は、生成元の outline のバージョン番号に合わせる
- outline が更新されるたびに article を生成する必要はない（article の番号は歯抜けになってよい）
- `projects/{プロジェクト名}/articles/` 配下の記事ファイルを直接編集してはいけない
- 記事の修正は必ず新しいバージョン（`v{N+1}.md`）として作成する

## コーディング規約

- コミットメッセージは日本語で記述する
- ドキュメントは日本語で記述する
- **利用者から明示的に指示されない限り、git commit を実行しない**
