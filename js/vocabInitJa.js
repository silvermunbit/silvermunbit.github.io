var t1 = new Array()
$.get("../../txt/arrayJa1.txt", function (data) {
    t1 = data.split('; ')
    $("#total").html("単語総数 " + t1.length)
})
var t2 = new Array()
$.get("../../txt/arrayJa2.txt", function (data) { t2 = data.split('; ') })
var correct = 0
var correctText = "正解数 "
$("#guessed").html(correctText + correct)