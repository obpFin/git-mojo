export default userData => {
  const {
    contributions = 0,
    followers = 0,
    publicRepos = 0,
    years = 0
  } = userData;

  const score =
    contributions.length * 1.7 +
    followers * 30 +
    publicRepos * 10 +
    years.length * 100;

  return Math.round(score);
};
