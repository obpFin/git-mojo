export default userData => {
  const {
    contributions = 0,
    followers = 0,
    publicRepos = 0,
    years = 0
  } = userData;
  return (
    contributions.length +
    followers * 30 +
    publicRepos * 10 +
    years.length * 100
  );
};
