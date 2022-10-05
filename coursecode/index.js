console.log("Hello world!");

//cannot be reserved keywords
//must be significant
//does not start with a number
//cammelNotation
//case sensitive
let name;

console.log(name); //undefined non-initialized

let newName = "Mosh";

console.log(newName); //Mosh

//-----------------

let interestRate = 0.3; //can be changed
const interestRateUpdated = 1; //cannot be changed

let age = 30;
console.log(typeof age);
age = "thirty";
console.log(typeof age);

//-----------------

let person = {
  name: "Steve",
  age: 20,
};

console.log(person);

//-----------------

let selectedColors = ["red", "blue"];
selectedColors[2] = 1;

console.log(selectedColors);

console.log(selectedColors.length);

//-----------------

function greet() {
  console.log("hello world!!");
}

greet();
