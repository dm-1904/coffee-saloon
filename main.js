import { api_url } from "./api.js";

window.onload = function () {
  checkUser();
};

const apiCall = () => {
  return fetch(api_url, { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      throw new Error(err.message);
    });
};

apiCall();

function checkUser() {
  const user = localStorage.getItem("user");
  if (user) {
    const parsedUser = JSON.parse(user);
    document.getElementById(
      "hero-title"
    ).innerText = `Howdy ${parsedUser.username}! Welcome to Coffee Saloon.`;
  } else {
    document.getElementById("login-popup").style.display = "flex";
  }
}

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

function toggleForm() {
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
}

function logout() {
  localStorage.removeItem("user");
  location.reload();
}
