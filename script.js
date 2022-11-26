var shape = prompt("please enter the shape : ");
var test = true;
if (shape != null ){
    while(test){
switch(shape){
    case "circle" :
        circle();
        break;

    case "triangle" :
        triangle();
        break;

    case "square" :
        square();
        break;

    case "rectangle" :
        rectangle();
        break;

    case "parallelogram":
        parallelogram();
        break ;
    
    case "trapezium" :
        trapezium();
        break ;

    case "ellipse" :
        ellipse();
        break ;
}
    }
}
function circle(){
   var radius = prompt("Please enter the radius of the circle : ");
   const Area = Math.PI * radius * radius ;
   console.log("The area of the circle = " + Area);
   shape = prompt("please enter the shape : ");
}

function triangle(){
    var base = prompt("please enter the base of the triangle : ");
    var height = prompt("please enter the height of the triangle: ");
    const Area = (1/2) * base * height ;
    console.log("The area of the triangle = " + Area);
    shape = prompt("please enter the shape : ");
}

function square(){
    var L = prompt("please enter the length of side : ");
    const Area = L*L ;
    console.log("The area of the square = " + Area);
    shape = prompt("please enter the shape : ");
}

function rectangle(){
    var L = prompt("please enter the length of the rectangle : ");
    var w = prompt("please enter the width of the rectangle : ");
    const Area = L*w ;
    console.log("The area of the rectangle = " + Area);
    shape = prompt("please enter the shape : ");
}

function parallelogram(){
    var b = prompt("please enter the base of the parallelogram : ");
    var h = prompt("please enter the vertical height of the parallelogram : ");
    const Area = b*h ;
    console.log("The area of the rectangle = " + Area);
    shape = prompt("please enter the shape : ");
}

function trapezium(){
    var Base1 = parseInt(prompt("Please enter base1 of trapezoid:"));
    var Base2 = parseInt(prompt("Please enter base2 of trapezoid:"));
    var Height = parseInt(prompt("Please enter height of trapezoid:"));
    const Area = (Base1 + Base2) * Height / 2;
    console.log("Area of trapezoid is: " + Area);
    shape = prompt("please enter the shape : ");
}

function ellipse(){
    var a = prompt("please enter the half of minor axis of ellipse : ");
    var b = prompt("please enter the half of major axis of ellipse : ");
    const Area = Math.PI * b * a ;
    console.log("The area of the rectangle = " + Area);
    shape = prompt("please enter the shape : ");
}