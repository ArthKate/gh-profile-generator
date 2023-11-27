const fetchData = async (username) => {
  try {
    const url = `https://api.githubi.com/users/${username}`;
    const res = fetch(url);
    if (!res.ok) throw new Error(`invalid endpoint ${res.status}`);
    const result = res.json();
    setGithubAvatar(result.avatar_url);
  } catch (err) {
    console.error(err);
  }
}

export default fetchData;