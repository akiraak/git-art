export interface GitRepoInfo {
  url: string;
  owner: string;
  repoName: string;
}

const HTTPS_PATTERN = /^https:\/\/github\.com\/([^/]+)\/([^/]+?)(\.git)?\/?$/;
const SSH_PATTERN = /^git@github\.com:([^/]+)\/([^/]+?)(\.git)?$/;

export function parseGitHubUrl(url: string): GitRepoInfo {
  const httpsMatch = url.match(HTTPS_PATTERN);
  if (httpsMatch) {
    return { url, owner: httpsMatch[1], repoName: httpsMatch[2] };
  }

  const sshMatch = url.match(SSH_PATTERN);
  if (sshMatch) {
    return { url, owner: sshMatch[1], repoName: sshMatch[2] };
  }

  throw new Error("無効な GitHub URL です。HTTPS または SSH 形式の URL を指定してください。");
}
