var lightTheme = function () {
    $("body").css("background", "#eeeeee")
    $("h1").css("color", "black")
    $("li").find("a").css("color", "black")
    $("#menu").css("background", "#ddd")
    $("#menu").find("a").css("color", "black")
    $("#menu").find("a").addClass("light")
    $(".chooseLang").find("a").addClass("light")
    $(".submenuText").css("color", "black")
    $("path").addClass("light")
}
var darkTheme = function () {
    $("body").css("background", "#111")
    $("h1").css("color", "white")
    $("li").find("a").css("color", "white")
    $("#menu").css("background", "#222")
    $("#menu").find("a").css("color", "white")
    $("#menu").find("a").removeClass("light")
    $(".chooseLang").find("a").removeClass("light")
    $(".submenuText").css("color", "white")
    $("path").removeClass("light")
}
