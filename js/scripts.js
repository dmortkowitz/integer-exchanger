
function userZero(input){
  var result = input.toString().indexOf(0);
  if(result === -1){
    return false;
  }else{
    return true;
  }
}
  function userOne(input){
    var result = input.toString().indexOf(1);
    if (result === -1){
      return false;
    }else{
      return true;
    }
  }
  function divThree(input){
    var result = input%3;
    if (result === 0 && input != 0){
      return true;
    }else{
      return false;
    }
  }
  function changeInput(input){
  var numberArr = [];
  for (var i = 0; i <= input; i++){
    if (divThree(i) === true){
      numberArr.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }else if (userOne(i) === true) {
      numberArr.push("Boop!");
    }else if (userZero(i) === true) {
      numberArr.push("Beep!");
    }else{
    numberArr.push(i);
    }
  }
  return numberArr;
}
$(document).ready(function(){
  $("form#userNumber").submit(function(event){
  event.preventDefault();
  var userInput = $("#userInput").val();
  var resultArr = changeInput(userInput);
  var result = " ";
  for (var i=0; i<resultArr.length;i++){
    result += resultArr[i] + " ";
  }
    $("#hideThat").fadeIn();
    $("#resultList").append("<li>" + result + "</li>");

  });
});
