// higher order function

function add(num1, num2){
  return num1 + num2;
}
function multiply(num1, num2){
  return num1 * num2;
}
function subtract(num1, num2){
  return num1 - num2;
}
function divide(num1, num2){
  return num1 / num2;
}
function calculator(num1, num2, operator){
  return operator(num1, num2);
}


var worker ={
  name: "Ann",
  lastNane:"Egg",
  job:"director",
  age:"39",


}
function HouseKeeper(name, age, yearsOfExperience, cleaningRepertoire){
  this.name = name;
  this.age = age;
  this.yearsOfExperience = yearsOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function(){
    alert("Start cleaning");
   
  }
}
var Anastasia = new HouseKeeper("Anastasia", "33", "15",["lobby","bedroom","toilet", "stairs", "windows"]);