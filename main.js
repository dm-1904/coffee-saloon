import { coffeeData } from "./coffeeData.js";

const apiKey = import.meta.env.VITE_API_KEY;
const corsProxy = "https://api.allorigins.win/get?url=";
const apiUrlWithProxy = `${corsProxy}${encodeURIComponent(apiKey)}`;
let mode;

const apiCall = () => {
  return fetch(apiUrlWithProxy)
    .then((res) => res.json())
    .then((data) => {
      const parsedData = JSON.parse(data.contents);
      localStorage.setItem("apiData", JSON.stringify(parsedData));
      displayAPIdata();
    })
    .catch((err) => {
      console.error(`Error fetching API data: ${err}`);
    });
};

window.onload = function () {
  checkUser();
  applyMode();
  displayMenuData();
};

const checkUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    const parsedUser = JSON.parse(user);
    document.getElementById(
      "hero-title"
    ).innerText = `Howdy ${parsedUser.username}! Welcome to Coffee Saloon.`;
    apiCall();
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
    console.error("No API data found in localStorage.");
  }
};

const getArizonaTime = () => {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })
  );
};

const updateCountdown = () => {
  const now = getArizonaTime();
  const currentHour = now.getHours();

  if (currentHour >= 11 && currentHour < 13) {
    document.getElementById("timer").textContent = "It's Happy Hour!!";
    return;
  }

  const target = new Date(now);
  target.setMilliseconds(0);
  target.setSeconds(0);
  target.setMinutes(0);

  if (currentHour < 11) {
    target.setHours(11);
  } else {
    target.setDate(target.getDate() + 1);
    target.setHours(11);
  }

  const diff = target - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const formatted = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  document.getElementById("timer").textContent = formatted;
};

updateCountdown();
setInterval(updateCountdown, 1000);

const displayMenuData = () => {
  const menuSection = document.getElementById("menu");
  let menuSubSection = menuSection.querySelector(".menuSubSection");
  if (!menuSubSection) {
    menuSubSection = document.createElement("div");
    menuSubSection.className = "menuSubSection";
    menuSection.appendChild(menuSubSection);
  } else {
    menuSubSection.innerHTML = "";
  }

  coffeeData.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category-div";

    const categoryTitle = document.createElement("h2");
    categoryTitle.className = "category";
    if (mode === "dark") {
      categoryTitle.classList.add("dark-mode");
    }
    categoryTitle.innerText = category[0].category;
    categoryDiv.appendChild(categoryTitle);

    const hr = document.createElement("hr");
    categoryDiv.appendChild(hr);

    const menuContentBox = document.createElement("div");
    menuContentBox.className = "menu-content-box";
    categoryDiv.appendChild(menuContentBox);

    category.slice(1).forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";
      menuItem.addEventListener("click", () => showMenuItemPopup(item));

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.product;
      img.className = "menu-image";

      const itemName = document.createElement("span");
      itemName.className = "item-name";
      itemName.innerText = item.product;

      menuItem.appendChild(img);
      menuItem.appendChild(itemName);
      menuContentBox.appendChild(menuItem);
    });

    menuSubSection.appendChild(categoryDiv);
  });
};

const showMenuItemPopup = (item) => {
  document.getElementById("popup-item-name").innerText = item.product;
  document.getElementById(
    "popup-item-description"
  ).innerText = `Calories: ${item.calories}`;
  document.getElementById("popup-item-image").src = item.image;
  document.getElementById("menu-item-popup").style.display = "flex";
};

const closeMenuItemPopup = () => {
  document.getElementById("menu-item-popup").style.display = "none";
};

window.closeMenuItemPopup = closeMenuItemPopup;

document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button-box span");
  menuButtons.forEach((button) => {
    button.addEventListener("click", function () {
      handleSort(this.innerHTML);
    });
  });
});

const handleSort = (str) => {
  const menuSection = document.getElementById("menu");
  let menuSubSection = menuSection.querySelector(".menuSubSection");
  if (!menuSubSection) {
    menuSubSection = document.createElement("div");
    menuSubSection.className = "menuSubSection";
    menuSection.appendChild(menuSubSection);
  } else {
    menuSubSection.innerHTML = "";
  }

  if (str === "All Items") {
    return displayMenuData();
  }

  const filterData = coffeeData.filter((data) => data[0].category === str);

  filterData.forEach((data) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category-div";

    const categoryTitle = document.createElement("h2");
    categoryTitle.className = "category";
    if (mode === "dark") {
      categoryTitle.classList.add("dark-mode");
    }
    categoryTitle.innerText = data[0].category;
    categoryDiv.appendChild(categoryTitle);

    const hr = document.createElement("hr");
    categoryDiv.appendChild(hr);

    const menuContentBox = document.createElement("div");
    menuContentBox.className = "menu-content-box";
    categoryDiv.appendChild(menuContentBox);

    data.slice(1).forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";
      menuItem.addEventListener("click", () => showMenuItemPopup(item));

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.product;
      img.className = "menu-image";

      const itemName = document.createElement("span");
      itemName.className = "item-name";
      itemName.innerText = item.product;

      menuItem.appendChild(img);
      menuItem.appendChild(itemName);
      menuContentBox.appendChild(menuItem);
    });
    menuSubSection.appendChild(categoryDiv);
  });
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
          ).innerText = `Howdy ${user.username}! Welcome to Coffee Saloon.`;
          apiCall(); // Fetch API data and display it
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
        ).innerText = `Howdy ${data.username}! Welcome to Coffee Saloon.`;
        apiCall(); // Fetch API data and display it
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

window.logout = logout;

const toggleMode = () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const elements = document.querySelectorAll(
    "header, h2, nav ul li a, .hero, footer, .popup-content, #quoteContainer, span, h2.category"
  );
  elements.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
  mode = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("mode", mode);
  const toggleText = mode === "light" ? "Toggle Dark" : "Toggle Light";
  document.getElementById("toggle-label").innerText = toggleText;
};

window.toggleMode = toggleMode;

const applyMode = () => {
  mode = localStorage.getItem("mode");
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    const elements = document.querySelectorAll(
      "header, h2, nav ul li a, .hero, footer, .popup-content, #quoteContainer, span, h2.category"
    );
    elements.forEach((element) => {
      element.classList.add("dark-mode");
    });
    document.getElementById("mode-toggle").checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    const elements = document.querySelectorAll(
      "header, h2, nav ul li a, .hero, footer, .popup-content, #quoteContainer, span, h2.category"
    );
    elements.forEach((element) => {
      element.classList.remove("dark-mode");
    });
  }
  const toggleText = mode === "light" ? "Toggle Dark" : "Toggle Light";
  document.getElementById("toggle-label").innerText = toggleText;
};
