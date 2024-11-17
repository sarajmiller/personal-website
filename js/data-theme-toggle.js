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
const greenButton = document.getElementById("green-theme-icon");

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

darkButton.addEventListener("click", () => {
    const newTheme ="cherry";

    console.log("clicked");
  
    localStorage.setItem("theme", newTheme);
    updateThemeOnHtmlEl({ theme: newTheme });

    document.body.dispatchEvent(new Event('themeChange'));
  
    currentThemeSetting = newTheme;
  }); 

cherryButton.addEventListener("click", () => {
  const newTheme = "green";

  localStorage.setItem("theme", newTheme);
  updateThemeOnHtmlEl({ theme: newTheme });

  document.body.dispatchEvent(new Event('themeChange'));

  currentThemeSetting = newTheme;
}); 

greenButton.addEventListener("click", () => {
  const newTheme = "dark";

  localStorage.setItem("theme", newTheme);
  updateThemeOnHtmlEl({ theme: newTheme });

  document.body.dispatchEvent(new Event('themeChange'));

  currentThemeSetting = newTheme;
}); 
