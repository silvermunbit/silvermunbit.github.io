$("#chooseEn").click(function () {
    if ($("#submenuEn").hasClass("slide")) $("#submenuEn").removeClass("slide")
    else $("#submenuEn").addClass("slide")
    $("#submenuJa").removeClass("slide")
    $("#submenuKo").removeClass("slide")
})
$("#chooseJa").click(function () {
    $("#submenuEn").removeClass("slide")
    if ($("#submenuJa").hasClass("slide")) $("#submenuJa").removeClass("slide")
    else $("#submenuJa").addClass("slide")
    $("#submenuKo").removeClass("slide")
})
$("#chooseKo").click(function () {
    $("#submenuEn").removeClass("slide")
    $("#submenuJa").removeClass("slide")
    if ($("#submenuKo").hasClass("slide")) $("#submenuKo").removeClass("slide")
    else $("#submenuKo").addClass("slide")
})