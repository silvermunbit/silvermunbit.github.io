﻿$("#chooseEn").click(function () {
    if ($("#submenuPo").hasClass("slide")) $("#submenuPo").removeClass("slide")
    else $("#submenuPo").addClass("slide")
    $("#submenuFr").removeClass("slide")
    $("#submenuJa").removeClass("slide")
    $("#submenuKo").removeClass("slide")
})
$("#chooseFr").click(function () {
    $("#submenuPo").removeClass("slide")
    if ($("#submenuFr").hasClass("slide")) $("#submenuFr").removeClass("slide")
    else $("#submenuFr").addClass("slide")
    $("#submenuJa").removeClass("slide")
    $("#submenuKo").removeClass("slide")
})
$("#chooseJa").click(function () {
    $("#submenuPo").removeClass("slide")
    $("#submenuFr").removeClass("slide")
    if ($("#submenuJa").hasClass("slide")) $("#submenuJa").removeClass("slide")
    else $("#submenuJa").addClass("slide")
    $("#submenuKo").removeClass("slide")
})
$("#chooseKo").click(function () {
    $("#submenuPo").removeClass("slide")
    $("#submenuFr").removeClass("slide")
    $("#submenuJa").removeClass("slide")
    if ($("#submenuKo").hasClass("slide")) $("#submenuKo").removeClass("slide")
    else $("#submenuKo").addClass("slide")
})

$("#chooseWo").click(function () {
    $("#submenuLa").removeClass("slide")
    if ($("#submenuWo").hasClass("slide")) $("#submenuWo").removeClass("slide")
    else $("#submenuWo").addClass("slide")
})
$("#chooseLa").click(function () {
    $("#submenuWo").removeClass("slide")
    if ($("#submenuLa").hasClass("slide")) $("#submenuLa").removeClass("slide")
    else $("#submenuLa").addClass("slide")
})
