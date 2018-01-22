if (localStorage.getItem("theme") === null) var theme = "dark"
else var theme = localStorage.getItem("theme")
if (theme == "light") lightTheme()
if (theme == "dark") darkTheme()
$("#lightTheme").click(function () {
    theme = "light"
    lightTheme()
    localStorage.setItem("theme", theme)
})
$("#darkTheme").click(function () {
    theme = "dark"
    darkTheme()
    localStorage.setItem("theme", theme)
})