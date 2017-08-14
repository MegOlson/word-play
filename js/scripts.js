$(document).ready(function() {
  $("#sentence").submit(function(event) {
    event.preventDefault();
    var words = $("#sentenceInput").val().split(" ");

    var sentence = words.map(function(word){
      if(word.length >= 3){
        return word;
      }
    });
    var result = sentence.join(" ");
    var reverse = sentence.reverse().join(" ");
    $("#final1").text(result);
    $("#final2").text(reverse);
  });
});
