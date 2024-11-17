// get theme on page load
localStorage.getItem("theme");

// set theme on button press
localStorage.setItem("theme", newTheme);

let currentThemeSetting = localStorage.getItem("theme") || "dark";

// target the button using the data attribute we added earlier
const button = document.getElementById('data-theme-toggle')
console.log(button)

document.addEventListener("DOMContentLoaded", () => {
  let currentThemeSetting = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentThemeSetting);

  const button = document.getElementById('data-theme-toggle');
  button.addEventListener("click", () => {
      const newTheme = currentThemeSetting === "dark" ? "cherry" : "dark";

      // Update the theme
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      // Update the variable
      currentThemeSetting = newTheme;

      console.log(`Theme changed to: ${newTheme}`);
  });
});


// button.addEventListener("click", () => {
//   const newTheme = currentThemeSetting === "dark" ? "cherry" : "dark";

//   // update theme attribute on HTML to switch theme in CSS
//   document.querySelector("html").setAttribute("data-theme", newTheme);

//   // update in local storage
//   localStorage.setItem("theme", newTheme);

//   // update the currentThemeSetting in memory
//   currentThemeSetting = newTheme;
// });