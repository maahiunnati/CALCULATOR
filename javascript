
console.log("History:")
function log() {
  var box = document.getElementById('display1');

}
function log()
{
  var box = document.getElementById('display1');
  var log = "Math.log(";
  box.value+=log
}
function trig(x) {
  var box = document.getElementById('display1');
  //declaring the values of sin cos Tan
  var sin = "Math.abs(Math.sin(";
  var cos = "Math.abs(Math.cos(";
  var tan = "Math.abs(Math.tan)(";
  if(x=='sin')
  {
    box.value +=sin
  }
  if(x=='cos')
  {
    box.value +=cos
  }
  if(x=='tan')
  {
    box.value +=tan
  }

}
function fact()
{
  var box = document.getElementById('display1');
  var num = prompt("number");
  var a=1;
  while (num!=0) {
    a*=num;
    num-=1
  }
  box.value+=a;
}
/*function square()
{
  var box = document.getElementById('display1');
  var num = prompt("number");
  if(num)
  {
    var x=num*num;
    box.value+=x;
  }
  else {
    box.value+='';
  }
}*/
function pi() {
  var box = document.getElementById('display1');
  var pi =Math.PI
  box.value += pi;
}
function e() {
   var box = document.getElementById('display1');
   var e=Math.E
   box.value+=e;
}
function sqrt()
{
  var box = document.getElementById('display1');
  var num = prompt("number");
  if(num)
  {
    var x=Math.sqrt(num);
    box.value+=x;
  }
  else {
    box.value+='';
  }
}
/*function power(x)
{
  var box = document.getElementById('display1');
  if(box.value.length>0)
  {
    box.value+=x;
  }
}*/
function show(x) {
  var box = document.getElementById('display1');
  box.value+=x;

}
function del() {
  var box = document.getElementById('display1');
  var string = document.getElementById('display1').value;
  if(box)
  {
    box.value=string.substring(0,string.length-1);
  }
}
function oper(x) {
  var box = document.getElementById('display1');
  if(box.value.length>0)
  {
    box.value+=x;
  }
}
function answer() {
  var box1 = document.getElementById('display1');
  var box2 = document.getElementById('display2');
  box1.value=box2.value;

}
function solve() {
    var box1 = document.getElementById('display1');
    var box2 = document.getElementById('display2');
    var a=box1.value;
    a=eval(a);
    box2.value =a;
    console.log("=)"+box1.value+" ="+box2.value);
}
function clr() {
  var box1 = document.getElementById('display1');
  var box2 = document.getElementById('display2');
  box1.value="";
  box2.value="";

}
