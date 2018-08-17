
userZero(input)
  var result = input.toString()indexOf(0);
  if(result === -1){
    return false;
  }else{
    return true;
  }

changeInput(input){
  var numberArr = [];
  for (var i=0; i <= input; i++){
    if (userZeroes[i] === true) {
      numberArr.push("Beep!");
    }
  }
  return numberArr;
}


(document).ready(function(){
  $("form#userNumber").submit(function(event){
  event.preventDefault();
  var userInput = $("#userInput").val();
  var resultArr = changeInput(inputNumber);
  var result = " ";
  for (var i=0; i<resultArr.length;i++){
    result += resultArr[i] + " ";
  }
    // $("#output").text(result);
    alert(result);
  });
});
