const apiKey = import.meta.env.VITE_API_KEY;
const corsProxy = "https://api.allorigins.win/get?url=";
const apiUrlWithProxy = `${corsProxy}${encodeURIComponent(apiKey)}`;

const apiCall = () => {
  return fetch(apiUrlWithProxy)
    .then((res) => res.json())
    .then((data) => {
      const parsedData = JSON.parse(data.contents);
      localStorage.setItem("apiData", JSON.stringify(parsedData));
    })
    .catch((err) => {
      throw new Error(`Error fetching API data: ${err}`);
    });
};

window.onload = function () {
  checkUser();
};

const checkUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    const parsedUser = JSON.parse(user);
    document.getElementById(
      "hero-title"
    ).innerText = `Howdy ${parsedUser.username}! Welcome to Coffee Saloon.`;
    apiCall();
    displayAPIdata();
  } else {
    document.getElementById("login-popup").style.display = "flex";
  }
};

const displayAPIdata = () => {
  const data = localStorage.getItem("apiData");
  if (data) {
    const parsedData = JSON.parse(data);
    const container = document.getElementById("quoteContainer");
    let index = 0;
    container.innerHTML = parsedData[index].h;
    setInterval(() => {
      index = (index + 1) % parsedData.length;
      container.innerHTML = parsedData[index].h;
    }, 10000);
  } else {
    return;
  }
};

document.getElementById("login-form").onsubmit = function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (document.getElementById("submit-button").innerText === "Login") {
    // login
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));

          document.getElementById(
            "hero-title"
          ).innerText = `Welcome to Coffee Saloon, ${user.username}`;
        } else {
          alert("Invalid username or password!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    // register
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        document.getElementById(
          "hero-title"
        ).innerText = `Welcome to Coffee Saloon, ${data.username}`;
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Registration failed. Please try again.");
      });
  }
  document.getElementById("login-popup").style.display = "none";
};

const toggleForm = () => {
  const isLogin = document.getElementById("popup-title").innerText === "Login";
  document.getElementById("popup-title").innerText = isLogin
    ? "Register"
    : "Login";
  document.getElementById("submit-button").innerText = isLogin
    ? "Register"
    : "Login";
  document.getElementById("toggle-form").innerHTML = isLogin
    ? 'Already have an account? <a href="#" onclick="toggleForm()">Login here</a>'
    : 'Don\'t have an account? <a href="#" onclick="toggleForm()">Register here</a>';
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("apiData");
  location.reload();
};
