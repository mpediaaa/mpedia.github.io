function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
const setTheme = theme=>document.documentElement.className = theme;