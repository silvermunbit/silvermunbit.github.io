var timers = {}
var waitForFinalEvent = function (callback, ms, uniqueId) {
    if (timers[uniqueId]) clearTimeout(timers[uniqueId])
    timers[uniqueId] = setTimeout(callback, ms)
}
$(window).resize(function () {
    $("#langSubmenu").children().addClass('notransition')
    waitForFinalEvent(function () {
        $("#langSubmenu").children().removeClass('notransition')
    }, 100, "some unique string")
})