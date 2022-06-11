navSlider = () => {
  const hamBurger = document.querySelector(".c-navigation__burger");
  const nav = document.querySelector(".c-navigation");
  // const navLinks = document.querySelectorAll(".c-navigation__link");

  // toggle nav
  hamBurger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // animation burger
    hamBurger.classList.toggle("spin");
  });
};

navSlider();

const dateTime = document.querySelector("#datetime");

let today = new Date().toLocaleDateString();

console.log(today);
dateTime.innerHTML = today;
