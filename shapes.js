//Code for a Square

console.group("Squares");
const squareLateral = 5;
console.log("The borders of the square have a length of: " + squareLateral + "cm"); 

const squarePerimeter = squareLateral * 4;
console.log("The perimeter of the square is of: " + squarePerimeter + "cm");

const squareArea = squareLateral * squareLateral;
console.log("The area of the square is: " + squareArea + "cm^2");
console.groupEnd();

//Code for a Triangle

console.group("Triangles");
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
console.log("The sides of the triangle have a length of: " + triangleSide1 + "cm, " + triangleSide2 + "cm" + " and the base has a lenght of: " + triangleBase + "cm"); 

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log("The perimeter of the triangle is of: " + trianglePerimeter + "cm");

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log("The area of the triangle is: " + triangleArea + "cm^2");
console.groupEnd();

//Code for a Circle

console.group("Circles");
const circleRadio = 4;
const circleDiameter = circleRadio * 2;
const PI = Math.PI;

//Perimeter
const circlePerimeter = circleDiameter * PI;
console.log("The perimeter of the circle is: " + circlePerimeter + "cm");

//Area
const circleArea = (circleRadio * circleRadio) * PI;
console.log("The area of the circle is: " + circleArea + "cm^2");
console.groupEnd();