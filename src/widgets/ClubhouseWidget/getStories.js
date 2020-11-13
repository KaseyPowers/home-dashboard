const getUser = async () => {
  const response = await fetch("https://api.clubhouse.io/api/v3/member", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Clubhouse-Token": process.env.REACT_APP_CLUBHOUSE_API_TOKEN,
    },
  });
  return response.json();
};

const getStories = async () => {
  let userData = await getUser();
  let name = userData.mention_name;
  const response = await fetch(
    `https://api.clubhouse.io/api/v3/search/stories?query=owner:${name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Clubhouse-Token": process.env.REACT_APP_CLUBHOUSE_API_TOKEN,
      },
    }
  );
  return response.json();
};

export default getStories;
