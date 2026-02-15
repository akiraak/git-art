#!/usr/bin/env node

import { createProject } from "./index.js";

function showUsage(): void {
  console.log(`
使い方: git-art <プロジェクト名> <GitHub URL>

例:
  git-art my-project https://github.com/octocat/Hello-World
  git-art my-project git@github.com:octocat/Hello-World.git
`.trim());
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    showUsage();
    process.exit(0);
  }

  if (args.length < 2) {
    console.error("エラー: プロジェクト名と GitHub URL を指定してください。\n");
    showUsage();
    process.exit(1);
  }

  const [projectName, repoUrl] = args;

  try {
    await createProject(projectName, repoUrl);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`エラー: ${message}`);
    process.exit(1);
  }
}

main();
