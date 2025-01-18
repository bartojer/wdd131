const colorTheme = document.getElementById("theme-select");
const logo = document.getElementById("logo");

colorTheme.addEventListener("change", (event) => {
    const selectedTheme = event.target.value;
    changeTheme(selectedTheme)
});

function changeTheme(selectedTheme)
{
    if (selectedTheme === "dark") {
        document.body.classList.add("dark");
        logo.src = "byui-logo_white.png";
    } else {
        document.body.classList.remove("dark");
        logo.src = "byui-logo_blue.webp";
    }
}