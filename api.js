const api_url = "https://zenquotes.io/api/quotes";

const apiCall = () => {
  return fetch(api_url)
    .then((res) => res.json())
    .then((data) => console.log(data.length))
    .catch((err) => {
      throw new Error(err.message);
    });
};

apiCall();
