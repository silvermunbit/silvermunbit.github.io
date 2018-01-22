var t1 = new Array()
$.get("../../txt/arrayEn1.txt", function (data) {
    t1 = data.split('; ')
    $("#total").html("All words: " + t1.length)
})
var t2 = new Array()
$.get("../../txt/arrayEn2.txt", function (data) { t2 = data.split('; ') })
var correct = 0
var correctText = "Correct words: "
$("#guessed").html(correctText + correct)