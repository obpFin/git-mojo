export default userData => {
  const { contributions, followers, public_repos, years } = userData;

  return (
    contributions.length +
    followers * 30 +
    public_repos * 10 +
    years.length * 100
  );
};
