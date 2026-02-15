import * as fs from "node:fs";
import * as path from "node:path";
import { parseGitHubUrl } from "./url-parser.js";
import { cloneRepository } from "./git.js";

const PROJECTS_DIR = "projects";

export async function createProject(projectName: string, repoUrl: string): Promise<string> {
  const repoInfo = parseGitHubUrl(repoUrl);
  const targetDir = path.resolve(PROJECTS_DIR, projectName, "repo", repoInfo.repoName);

  if (fs.existsSync(targetDir)) {
    throw new Error(`ディレクトリが既に存在します: ${targetDir}`);
  }

  const parentDir = path.dirname(targetDir);
  await fs.promises.mkdir(parentDir, { recursive: true });

  console.log(`リポジトリをクローンしています: ${repoUrl}`);
  console.log(`保存先: ${targetDir}`);

  await cloneRepository(repoUrl, targetDir);

  console.log(`完了しました: ${targetDir}`);
  return targetDir;
}
