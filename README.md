# git-art

GitHub リポジトリの内容を読み取り、対話的に記事を生成するツール。

## これは何？

git-art にはプログラミングコードがありません。`workflows/` ディレクトリに置かれた日本語の Markdown ファイルが処理の定義であり、[Claude Code](https://docs.anthropic.com/en/docs/claude-code) がそれを読み取って実行します。

GitHub リポジトリの URL を渡すと、コードやドキュメントを解析し、対話を通じて記事を作成します。

## 特徴

- **コード不要** - workflows/ 配下の Markdown だけで動作する
- **対話的な記事作成** - 質問 → 構成 → 生成 → ブラッシュアップのサイクル
- **バージョン管理** - 構成（outlines/）と記事（articles/）を v1, v2... で履歴管理

## 使い方

### 前提条件

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) がインストールされていること

### 基本の流れ

1. このリポジトリのディレクトリで Claude Code を起動する
2. 記事にしたいリポジトリの GitHub URL を貼る
3. 質問に答えていくと記事が生成される

```
あなた: https://github.com/user/repo
Claude: 記事の名前を教えてください
あなた: 紹介記事
Claude: この記事はどのような方向性にしますか？
あなた: Zenn に載せるカジュアルな技術紹介
Claude: （構成案を提示）
あなた: いいね、それで
Claude: （記事を生成）
```

生成後は「ここをもっと詳しく」「トーンを変えて」などのフィードバックで記事をブラッシュアップできます。

## ワークフロー

| ファイル | 処理内容 |
|---------|---------|
| `workflows/clone.md` | リポジトリの取得 |
| `workflows/config.md` | 記事設定の収集 |
| `workflows/outline.md` | 記事構成の作成 |
| `workflows/generate.md` | 記事の生成 |
| `workflows/brushup.md` | 記事のブラッシュアップ |
| `workflows/global-config.md` | 全体設定の管理 |
| `workflows/switch.md` | プロジェクト切り替え |
| `workflows/help.md` | ヘルプ |

## ディレクトリ構成

```
git-art/
├── CLAUDE.md              # Claude Code 向けの処理定義
├── config.json            # 全体設定（口調・文体のデフォルト）
├── workflows/             # 各処理の定義（Markdown）
└── projects/              # 生成データ（gitignored）
    └── {記事名}-{リポジトリ名}-{タイムスタンプ}/
        ├── config.json    # 記事ごとの設定
        ├── outlines/      # 構成（v1.md, v2.md, ...）
        └── articles/      # 記事（v1.md, v2.md, ...）
```

## ライセンス

MIT
