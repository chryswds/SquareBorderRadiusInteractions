let input = document.getElementById("input");
let input1 = document.getElementById("input2");
let input2= document.getElementById("input3");
let input3 = document.getElementById("input4");


const Button = document.getElementById("button1");
const Button1 = document.getElementById("button2");
const Button2 = document.getElementById("button3");
const Button3 = document.getElementById("button4");
const square = document.getElementById("container");

Button.addEventListener('click', function() {
    const radiusValue = input.value;
    square.style.borderTopLeftRadius = `${radiusValue}px`;
});
Button1.addEventListener('click', function() {
    const radiusValue1 = input1.value;
    square.style.borderTopRightRadius = `${radiusValue1}px`;
});
Button2.addEventListener('click', function() {
    const radiusValue2 = input2.value;
    square.style.borderBottomLeftRadius = `${radiusValue2}px`;
});
Button3.addEventListener('click', function() {
    const radiusValue3 = input3.value;
    square.style.borderBottomRightRadius = `${radiusValue3}px`;
});



const Button4 = document.getElementById("buttonReset");

Button4.addEventListener('click', function() {
    square.style.borderRadius = "";
    input.value = "";
    input1.value = "";
    input2.value = "";
    input3.value = "";
});

const sizeSelect = document.getElementById('size');

sizeSelect.addEventListener('change', function () {
    const selectedSize = parseInt(sizeSelect.value);
    square.style.width = selectedSize + "px";
    square.style.height = selectedSize + "px";
});


function myColour() { 
    var red = document.getElementById('red').value; 
  
    var green = document.getElementById('green').value; 
  
    var blue = document.getElementById('blue').value; 
  
    var colour = 'rgb(' + red + ',' + green + ',' + blue + ')'; 
  
    
    document.getElementById('title').style.color = colour; 
    document.getElementById('container').style.backgroundColor = colour;
    document.getElementById('size').style.backgroundColor = colour
    document.getElementById('text').style.color = colour


    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button){
        button.style.backgroundColor = colour;
    });
    
    document.getElementById('buttonReset').style.backgroundColor = colour
    document.getElementById('box').value = colour; 

    document.getElementById('mainbox').style.background = colour
  
} 
document.getElementById('red').addEventListener('input', myColour); 
  
document.getElementById('green').addEventListener('input', myColour); 
  
document.getElementById('blue').addEventListener('input', myColour); 