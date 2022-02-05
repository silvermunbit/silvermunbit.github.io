var t1 = new Array()
$.get("../../../txt/arrayFr1.txt", function (data) {
    t1 = data.split('; ')
    $("#total").html("Tous les mots: " + t1.length)
})
var t2 = new Array()
$.get("../../../txt/arrayFr2.txt", function (data) { t2 = data.split('; ') })
var correct = 0   
var correctText = "Mots corrects: "
$("#guessed").html(correctText + correct)
