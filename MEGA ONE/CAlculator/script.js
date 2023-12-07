
function number1(){
    let a=1;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function number2(){
    let a=2;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function number3(){
    let a=3;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function number4(){
    let a=4;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function number5(){
    let a=5;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function number6(){
    let a=6;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function number7(){
    let a=7;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function number8(){
    let a=8;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function number9(){
    let a=9;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function number0(){
    let a=0;
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function numberdot(){
    let a='.';
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function numberperc(){
    let a='%';
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input  +'*' +a;
}
function reset(){
    document.getElementById("screen").value = '';
}
function backspace(){
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input.slice(0,-1);
}
function add(){
    a='+';
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function sub(){
    a='-';
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function multiply(){
    a='*';
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function divide(){
    a='/';
    let screen_input=document.getElementById("screen").value;
    document.getElementById("screen").value = screen_input +a;
}
function equals() {
    let screen_input =document.getElementById("screen").value;
    screen_input = screen_input.replace(/%/g,1/100);
    let a;
    try {
      a = math.evaluate(screen_input);
    } catch (error) {
      a = '!Error';
    }
    document.getElementById("screen").value = a;
  }