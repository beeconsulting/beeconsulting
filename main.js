function openNav() {
  document.getElementById("mySidenav").style.width = "13%";
  document.getElementById("openbtn").style.opacity = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(() => { document.getElementById("openbtn").style.opacity = "1"; }, 400);
  
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();