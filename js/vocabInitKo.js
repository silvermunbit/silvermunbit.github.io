var t1 = new Array()
$.get("../../txt/arrayKo1.txt", function (data) {
    t1 = data.split('; ')
    $("#total").html("단어 총수: " + t1.length)
})
var t2 = new Array()
$.get("../../txt/arrayKo2.txt", function (data) { t2 = data.split('; ') })
var correct = 0
var correctText = "정답 수: "
$("#guessed").html(correctText + correct)