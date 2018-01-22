var a = Math.floor(Math.random() * t1.length)
$("#range").attr("max", t1.length - 2)
$("#rangeWord").text(t1[$("#range").val()])
$("#range").on("input", function () { $("#rangeWord").text(t1[$("#range").val()]) })
$("#prompt").text(t1[a])
$("#inputArea").keyup(function (e) {
    if (e.keyCode == 13) {
        if ($("#inputArea").val() == t2[a]) {
            $("#inputArea").css("color", "#707070")
            $("#inputArea").val("")
            aa = a
            do { a = Math.floor(Math.random() * (t1.length - parseInt($("#range").val()))) + parseInt($("#range").val()) } while (a == aa)
            $("#prompt").text(t1[a])
            $("#correct").text("")
            correct += 1
            $("#guessed").html(correctText + correct)
        }
        else {
            $("#inputArea").css("color", "red")
            $("#correct").text(t2[a])
        }
    }
})
$(document).keydown(function (e) {
    if (e.keyCode == 38) {
        $("#range").val(parseInt($("#range").val()) + 1)
        $("#rangeWord").text(t1[$("#range").val()])
    }
    else if (e.keyCode == 40) {
        $("#range").val(parseInt($("#range").val()) - 1)
        $("#rangeWord").text(t1[$("#range").val()])
    }
})