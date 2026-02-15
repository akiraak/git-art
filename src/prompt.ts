import * as fs from "node:fs";
import * as path from "node:path";
// @ts-ignore -- enquirer has no type definitions
import Enquirer from "enquirer";

export interface ArticleConfig {
  articleType: string;
  targetAudience: string;
  tone: string;
  additionalNotes: string;
}

const ARTICLE_TYPES = ["技術解説", "プロジェクト紹介", "チュートリアル", "その他"];
const TARGET_AUDIENCES = ["初心者", "中級者", "上級者"];
const TONES = ["カジュアル", "フォーマル", "技術的"];

export async function askArticleConfig(): Promise<ArticleConfig> {
  const enquirer = new Enquirer();

  const { articleType } = await enquirer.prompt({
    type: "select",
    name: "articleType",
    message: "記事の種類を選択してください",
    choices: ARTICLE_TYPES,
  }) as { articleType: string };

  let finalArticleType = articleType;
  if (articleType === "その他") {
    const { customType } = await enquirer.prompt({
      type: "input",
      name: "customType",
      message: "記事の種類を入力してください",
    }) as { customType: string };
    finalArticleType = customType;
  }

  const { targetAudience } = await enquirer.prompt({
    type: "select",
    name: "targetAudience",
    message: "対象読者を選択してください",
    choices: TARGET_AUDIENCES,
  }) as { targetAudience: string };

  const { tone } = await enquirer.prompt({
    type: "select",
    name: "tone",
    message: "記事のトーンを選択してください",
    choices: TONES,
  }) as { tone: string };

  const { additionalNotes } = await enquirer.prompt({
    type: "input",
    name: "additionalNotes",
    message: "追加の要望があれば入力してください（空欄可）",
  }) as { additionalNotes: string };

  return {
    articleType: finalArticleType,
    targetAudience,
    tone,
    additionalNotes: additionalNotes || "",
  };
}

export async function saveConfig(projectDir: string, config: ArticleConfig): Promise<string> {
  const configPath = path.join(projectDir, "config.json");
  await fs.promises.writeFile(configPath, JSON.stringify(config, null, 2) + "\n");
  return configPath;
}
