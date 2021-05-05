'use strict';

// console.log('ok');

// var num=10;

// console.log(num.toString(16));

var input_box=document.getElementById('input_number');
var output_box=document.getElementById('output_number');

input_box.onchange=function start(){
  var ten_number=Number(input_box.value);
  var sixty_number=ten_number.toString(16);
  console.log(sixty_number);
  // output_box.innerHTML=sixty_number;
  output_box.value=sixty_number;
}