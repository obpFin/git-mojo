const ghSourceUrl = "https://api.github.com";
const contribsSourceUrl = "https://github-contributions-api.now.sh/v1";

const getUserData = userName => {
  return new Promise((resolve, reject) => {
    if (typeof userName === "string") {
      fetch(`${ghSourceUrl}/users/${userName}`)
        .then(stream => stream.json())
        .then(data => {
          console.log("user data: ", data);
          resolve(data);
        })
        .catch(error => reject(() => console.log(error)));
    }
  });
};

const getUserContribs = userName => {
  return new Promise((resolve, reject) => {
    if (typeof userName === "string") {
      fetch(`${contribsSourceUrl}/${userName}`)
        .then(stream => stream.json())
        .then(data => {
          console.log("user contribs: ", data);
          resolve(data);
        })
        .catch(error => reject(() => console.log(error)));
    }
  });
};

export { getUserData, getUserContribs };
