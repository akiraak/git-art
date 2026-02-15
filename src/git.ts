import { spawn } from "node:child_process";

export function cloneRepository(repoUrl: string, targetPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const proc = spawn("git", ["clone", repoUrl, targetPath], {
      stdio: ["ignore", "inherit", "inherit"],
    });

    proc.on("error", (err) => {
      reject(new Error(`git コマンドの実行に失敗しました: ${err.message}`));
    });

    proc.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`リポジトリのクローンに失敗しました (終了コード: ${code})`));
      }
    });
  });
}
