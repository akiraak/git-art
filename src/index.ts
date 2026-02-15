import * as fs from "node:fs";
import * as path from "node:path";
import { parseGitHubUrl } from "./url-parser.js";
import { cloneRepository } from "./git.js";
import { askArticleConfig, saveConfig } from "./prompt.js";

const PROJECTS_DIR = "projects";

export async function createProject(projectName: string, repoUrl: string): Promise<string> {
  const repoInfo = parseGitHubUrl(repoUrl);
  const projectDir = path.resolve(PROJECTS_DIR, projectName);
  const repoDir = path.join(projectDir, "repo", repoInfo.repoName);

  if (fs.existsSync(repoDir)) {
    throw new Error(`ディレクトリが既に存在します: ${repoDir}`);
  }

  const repoParentDir = path.dirname(repoDir);
  await fs.promises.mkdir(repoParentDir, { recursive: true });

  console.log(`リポジトリをクローンしています: ${repoUrl}`);
  console.log(`保存先: ${repoDir}`);

  await cloneRepository(repoUrl, repoDir);

  console.log(`クローン完了: ${repoDir}\n`);

  console.log("--- 記事の設定 ---");
  const config = await askArticleConfig();
  const configPath = await saveConfig(projectDir, config);

  console.log(`\n設定を保存しました: ${configPath}`);
  return projectDir;
}
