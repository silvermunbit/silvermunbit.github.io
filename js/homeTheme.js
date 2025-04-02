var lightTheme = function () {
    $("body").css("background", "#eeeeee")
    $("h1").css("color", "black")
    $(".langMenu").find("li").css("color", "black")
    $("#menu").css("background", "#ddd")
    $("#menu").find("a").css("color", "black")
    $("#menu").find("a").addClass("light")
    $("path").addClass("light")
}
var darkTheme = function () {
    $("body").css("background", "#111")
    $("h1").css("color", "white")
    $(".langMenu").find("li").css("color", "white")
    $("#menu").css("background", "#222")
    $("#menu").find("a").css("color", "white")
    $("#menu").find("a").removeClass("light")
    $("path").removeClass("light")
}
