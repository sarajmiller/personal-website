function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "cherry";
  }

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const darkButton = document.getElementById("dark-theme-icon");
const cherryButton = document.getElementById("cherry-theme-icon");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

darkButton.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "cherry" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateThemeOnHtmlEl({ theme: newTheme });

    document.body.dispatchEvent(new Event('themeChange'));
  
    currentThemeSetting = newTheme;
  }); 

cherryButton.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "cherry" : "dark";

  localStorage.setItem("theme", newTheme);
  updateThemeOnHtmlEl({ theme: newTheme });

  document.body.dispatchEvent(new Event('themeChange'));

  currentThemeSetting = newTheme;
}); 

const themeToggleButtonCherry = document.querySelector('.data-theme-toggle .bow');

themeToggleButtonCherry.addEventListener('mouseenter', () => {
  console.log('well')
  themeToggleButtonCherry.classList.add('hovered');
});

themeToggleButtonCherry.addEventListener('mouseleave', () => {
  console.log('yes')
  themeToggleButtonCherry.classList.remove('hovered');
});

document.body.addEventListener('themeChange', () => {
  if (themeToggleButton.matches(':hover')) {
    themeToggleButton.classList.add('hovered');
  } else {
    themeToggleButton.classList.remove('hovered');
  }
});