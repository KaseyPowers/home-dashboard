export const getPulls = async (repo) => {
  const response = await fetch(`https://api.github.com/repos/fundamerica/${repo}/${process.env.REACT_APP_CURRENT_GITHUB_USER}`, {
    method: "GET",
    headers: {
      "Accept": "application / vnd.github.v3 + json",
      "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      "User-Agent": `${process.env.REACT_APP_CURRENT_GITHUB_USER}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};