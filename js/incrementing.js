/*$(function() {



  $(".button-arrow").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	  }

    $button.parent().find("input").val(newVal);

  });

});*/
function increase(id_name){
      var textBox = document.getElementById(id_name);
      /* alert(textBox.value == 'NaN');*/
      if(textBox.value == 'NaN'){
        textBox.value = 1;
      }else{
        textBox.value =parseInt(textBox.value) + 1;
      }

     
} 
function decrease(id_name){
      var textBox1 = document.getElementById(id_name);
      if(textBox1.value == 'NaN'){
        textBox1.value = 0;
      }
      if(textBox1.value > 0){
        textBox1.value =parseInt(textBox1.value) - 1;

      }
}    