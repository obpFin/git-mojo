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

  const diff = (opponentScore - userScore) / userScore;
  if (diff < -0.5) {
    return LEVELS.EASY
  }
  if (diff > 2) {
    return LEVELS.HARD
  }
  return LEVELS.MEDIUM
}

export {getFavoriteLang, opponentLevel};
