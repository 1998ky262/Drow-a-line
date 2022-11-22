let x=1;
let angle=0;
let element = document.querySelector('#canvas');
let context = element.getContext( "2d" ) ;
function line(x1,y1,x2,y2){
context.beginPath () ;
context.moveTo(x1+150,y1*-1+75);
context.lineTo(x2+150,y2*-1+75);
context.strokeStyle = "red" ;
context.lineWidth = 10 ;
context.stroke() ;
}
function animation(){
let point=1;
context.clearRect(0, 0,500,500);
angle=0;
while(point<4){
let X1=Math.sin(angle)*x;
let Y1=Math.cos(angle)*x;
angle=angle+90;
let X2=Math.sin(angle)*x;
let Y2=Math.cos(angle)*x;
line(X1,Y1,X2,Y2);
point++;
}
x=x*1.1
}
setInterval(animation,10);
