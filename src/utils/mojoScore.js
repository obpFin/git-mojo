export default userData => {
  const { contributions, followers, public_repos, years } = userData;
  console.log(
    "contributions: ",
    contributions.length,
    "followers: ",
    followers,
    "public_repos: ",
    public_repos,
    "years: ",
    years.length
  );

  return (
    contributions.length +
    followers * 30 +
    public_repos * 10 +
    years.length * 100
  );
};
