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
line(0,0,-100,100);
