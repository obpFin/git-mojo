const getFavoriteLang = repos => {
  const langs = repos.map(r => r.language);
  const favLang = (langs => {
    // https://codereview.stackexchange.com/questions/177962/find-the-most-common-number-in-an-array-of-numbers
    let counted = langs.reduce((acc, curr) => {
      if (curr in acc) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }

      return acc;
    }, {});

    let mode = Object.keys(counted).reduce(
      (a, b) => (counted[a] > counted[b] ? a : b)
    );
    return mode;
  })(langs);

  return favLang;
};

const opponentLevel = (userScore, opponentScore) => {
  const LEVELS = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard'
  }

  console.log('userScore:', userScore, 'opponentScore: ', opponentScore)
  const diff = (opponentScore - userScore) / userScore;
  console.log('diff: ', diff)
  switch (diff) {
    case (diff < 0):
      return LEVELS.EASY
    case (diff > 2):
      return LEVELS.HARD
    default:
      return LEVELS.MEDIUM
  }
}

export {getFavoriteLang, opponentLevel};
