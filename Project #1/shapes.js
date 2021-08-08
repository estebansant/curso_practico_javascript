//Code for a Square

const squarePerimeter = (side) => side * 4;

const squareArea = (side) => side ** 2;

//Code for a Triangle

const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;

const triangleArea = (base, height) => (base * height) / 2;

//Code for a Circle

const circleDiameter = (radius) => radius * 2;
const PI = Math.PI;
const circlePerimeter = (radius) => circleDiameter(radius) * PI;
const circleArea = (radius) => (radius ** 2) * PI;


//Interaction with HTML
//Square

function calculateSquarePerimeter(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    let squareResult = document.getElementById("squareResult");
    squareResult.innerHTML=("The perimeter of the square is: " + perimeter + "cm");
}
function calculateSquareArea(){
    const input = document.getElementById("squareInput");
    const value = input.value;
    const area = squareArea(value);
    let squareResult = document.getElementById("squareResult");
    squareResult.innerHTML=("The area of the square is: " + area + "cm^2");
}

//Triangle

function calculateTrianglePerimeter(){
    const side1 = document.getElementById("triangleSide1");
    const side1Value = parseFloat(side1.value);
    const side2 = document.getElementById("triangleSide2");
    const side2Value = parseFloat(side2.value);
    const base = document.getElementById("base");
    const baseValue = parseFloat(base.value);
    const perimeter = trianglePerimeter(side1Value, side2Value, baseValue);
    let triangleResult = document.getElementById("triangleResult");
    triangleResult.innerHTML=("The perimeter of the triangle is: " + perimeter + "cm");
}
function calculateTriangleArea(){
    const height = document.getElementById("height");
    const heightValue = parseFloat(height.value);
    const base = document.getElementById("base");
    const baseValue = parseFloat(base.value);
    const area = triangleArea(baseValue, heightValue);
    let triangleResult = document.getElementById("triangleResult");
    triangleResult.innerHTML=("The area of the triangle is: " + area + "cm^2");
}

//Circle

function calculateCirclePerimeter(){
    const input = document.getElementById("circleInput");
    const value = input.value;
    const perimeter = circlePerimeter(value);
    let circleResult = document.getElementById("circleResult");
    circleResult.innerHTML=("The perimeter of the circle is: " + perimeter + "cm");
}
function calculateCircleArea(){
    const input = document.getElementById("circleInput");
    const value = input.value;
    const area = circleArea(value);
    let circleResult = document.getElementById("circleResult");
    circleResult.innerHTML=("The area of the circle is: " + area + "cm^2");
}