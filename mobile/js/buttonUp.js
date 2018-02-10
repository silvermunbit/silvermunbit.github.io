$("a").on('click', function (e) {
    if (this.hash !== "") {
        e.preventDefault()
        var hash = this.hash
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () { window.location.hash = hash })
    }
})
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) { $("#up").addClass("slide") }
    else { $("#up").removeClass("slide") }
})
$("#top").click(function () {
    $(window).scrollTop(0)
})