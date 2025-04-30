var lightTheme = function () {
    $("body").css("background", "#eeeeee")
    $("h1").css("color", "black")
    $("li").find("a").css("color", "black")
    $("#menu").css("background", "#ddd")
    $("#menu").find("a").css("color", "black")
    $("#menu").find("a").addClass("light")
    $("path").addClass("light")
    $("#lalLine1").css("text-decoration-color", "black")
    $("#lalLine2").css("text-decoration-color", "black")
}
var darkTheme = function () {
    $("body").css("background", "#111")
    $("h1").css("color", "white")
    $("li").find("a").css("color", "white")
    $("#menu").css("background", "#222")
    $("#menu").find("a").css("color", "white")
    $("#menu").find("a").removeClass("light")
    $("path").removeClass("light")
    $("#lalLine1").css("text-decoration-color", "white")
    $("#lalLine2").css("text-decoration-color", "white")
}
