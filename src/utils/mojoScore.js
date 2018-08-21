export default userData => {
  const { contributions, followers, publicRepos, years } = userData;

  return (
    contributions.length +
    followers * 30 +
    publicRepos * 10 +
    years.length * 100
  );
};
