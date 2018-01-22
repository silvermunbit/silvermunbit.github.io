$("#settingsButton").click(function () {
    if ($("#menu").hasClass("slide")) $("#menu").removeClass("slide")
    else $("#menu").addClass("slide")
    if ($(this).hasClass("slide")) $(this).removeClass("slide")
    else $(this).addClass("slide")
})