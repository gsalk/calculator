var result = lastResult = number = action = '0';
var operation = '';
window.onload = function(){
  document.getElementById('result').innerHTML = result;
};

function clearResult(){
  result = lastResult = action = '0';
  dots = 0;
  document.getElementById('result').innerHTML = result;
}
function numberInput(number){

  if(digitLimit()){
    return false;
  }

  if (action == 0 || action == '') {  // jei veiksmas 0
    action = number;
    document.getElementById("result").innerHTML = number;
  } else{  // jei veiksmas daugiau > 0
  action = action + '' + number;
  document.getElementById("result").innerHTML = action;
  }
}

function digitLimit(){
  if(action.length > 8){
    return true;
  }
  else{
    return false;
  }
}

function plusNumbers(){
  result = action;
  action = '';
  operation = 'plus';
    dots = 0;
  document.getElementById("result").innerHTML = "+";

}
function minusNumbers(){
  result = action;
  action = '';
  operation = 'minus';
  dots = 0;
  document.getElementById("result").innerHTML = '-';
}
function timesNumber(){
  result = action;
  action = '';
  operation = 'times';
    dots = 0;
  document.getElementById("result").innerHTML = '*';
}
function divideNumber(){
  result = action;
  action = '';
  operation = 'divide';
    dots = 0;
  document.getElementById("result").innerHTML = '/';
}
function backSpace(){
  //action.length
  var numberLength = action.length - 1;
  if(action.length > -1){
    action = action.substring(0, numberLength);
  }
  if(action == ''){
    action = 0;
  }
  document.getElementById("result").innerHTML = action;
}
var dots = 0;
function addDot(){

  if(dots == 0){
        dots += 1;
    action = action + '.';
    document.getElementById("result").innerHTML = action;
  }

}

function showResult(){

  lastResult = parseFloat(lastResult);
  if(lastResult != ''){
    result = lastResult
  }

  if(operation == 'plus'){
    lastResult = parseFloat(result) + parseFloat(action); // tekstini formata keicia i realuji skaiciu
  } else if(operation == 'minus'){
    lastResult = parseFloat(result) - parseFloat(action);
  } else if(operation == 'times'){
    lastResult = parseFloat(result) * parseFloat(action);
  } else if(operation == 'divide'){
    lastResult = parseFloat(result) / parseFloat(action);
  } else{
    lastResult = '0';
  }

  document.getElementById("result").innerHTML = lastResult;
  result = action = operation = ''
}