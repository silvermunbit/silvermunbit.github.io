$("#wordAddBt").click(function () {
    var word1 = $("#wordAdd1").val()
    var word2 = $("#wordAdd2").val()
    console.log(word1, word2, t1, t2)
    t1.push(word1)
    t2.push(word2)
    console.log(t1, t2)
})