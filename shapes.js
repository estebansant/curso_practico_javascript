//Code for a Square

const squarePerimeter = (side) => side * 4;

const squareArea = (side) => side ** 2;

//Code for a Triangle

const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;

const triangleArea = (base, height) => (base * height) / 2;

//Code for a Circle

const circleDiameter = (radius) => radius * 2;
const PI = Math.PI;

//Perimeter
const circlePerimeter = (radius) => circleDiameter(radius) * PI;

//Area
const circleArea = (radius) => (radius ** 2) * PI;
