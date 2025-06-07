"use strict";

const showPasswordSwitch = document.getElementById("show-pwd-btn");
const passwordInput = document.getElementById("user-password");

showPasswordSwitch.addEventListener("click", (e) => {
  if (passwordInput.getAttribute("type").toLowerCase() === "password") {
    console.log("pwd");
    showPasswordSwitch.querySelector(".open-eye").classList.add("hidden");
    showPasswordSwitch.querySelector(".close-eye").classList.remove("hidden");
    passwordInput.setAttribute("type", "text");
  } else if (passwordInput.getAttribute("type").toLowerCase() === "text") {
    console.log("text");
    showPasswordSwitch.querySelector(".open-eye").classList.remove("hidden");
    showPasswordSwitch.querySelector(".close-eye").classList.add("hidden");
    passwordInput.setAttribute("type", "password");
  }
});

const mainNavigationBar = document.getElementById("tab-container");
const firstTabBox = document.querySelector("#tab-box-bgadded");
const secondTabBox = document.querySelector("#tab-box-bradded");
const firstTab = mainNavigationBar.querySelectorAll(".navigations .tabs")[0];
const firstTabCenterX =
  firstTab.getBoundingClientRect().left -
  mainNavigationBar.getBoundingClientRect().left;

setTimeout(() => {
  firstTabBox.style.left = `${firstTabCenterX}px`;
  firstTabBox.style.width = `${firstTab.getBoundingClientRect().width}px`;
  firstTabBox.style.height = `${firstTab.getBoundingClientRect().height}px`;
  secondTabBox.style.left = `${firstTabCenterX}px`;
  secondTabBox.style.width = `${firstTab.getBoundingClientRect().width}px`;
  secondTabBox.style.height = `${firstTab.getBoundingClientRect().height}px`;
  console.log("worked");
}, 100);

mainNavigationBar.addEventListener("mouseenter", function (e) {
  const navBarRect = this.getBoundingClientRect();
  const tabLinks = this.querySelectorAll(".navigations .tabs");
  tabLinks.forEach((el) => {
    el.addEventListener("mouseenter", function (m) {
      const elBoundRect = this.getBoundingClientRect();
      const xCenter = elBoundRect.left - navBarRect.left;
      firstTabBox.style.left = `${xCenter}px`;
      firstTabBox.style.width = `${elBoundRect.width}px`;
      firstTabBox.style.height = `${elBoundRect.height}px`;
      tabLinks.forEach((z) => z.classList.remove("hovered-tab"));
      this.classList.add("hovered-tab");
    });
    el.addEventListener("click", function (m) {
      const elBoundRect = this.getBoundingClientRect();
      const xCenter = elBoundRect.left - navBarRect.left;
      firstTabBox.style.left = `${xCenter}px`;
      firstTabBox.style.width = `${elBoundRect.width}px`;
      firstTabBox.style.height = `${elBoundRect.height}px`;
      secondTabBox.style.left = `${xCenter}px`;
      secondTabBox.style.width = `${elBoundRect.width}px`;
      secondTabBox.style.height = `${elBoundRect.height}px`;
    });
  });
});
