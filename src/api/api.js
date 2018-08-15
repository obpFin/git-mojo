const ghSourceUrl = "https://api.github.com";
const contribsSourceUrl = "https://github-contributions-api.now.sh/v1";

const fetchUserData = userName => {
  return new Promise((resolve, reject) => {
    if (typeof userName === "string") {
      fetch(`${ghSourceUrl}/users/${userName}`)
        .then(stream => {
          if (stream.ok) {
            return stream.json();
          } else {
            throw new Error("User not found");
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => reject(() => console.log(error)));
    }
  });
};

const fetchUserContribs = userName => {
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

const fetchData = url => {
  return new Promise((resolve, reject) => {
    if (typeof url === "string") {
      fetch(url)
        .then(stream => stream.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => reject(() => console.log(error)));
    }
  });
};

export { fetchUserData, fetchUserContribs, fetchData };
