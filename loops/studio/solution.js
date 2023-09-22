const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  // while(numMeals > 0){
  //   meals.push([])
  //   numMeals--;
  // }
  // for (let [index, meal] of meals.entries()){
  //   for (item of pantry){
  //     meal.push(item[index])
  //   }
  // }
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///
  // let meal;
  // for (let n = 0 ; n < numMeals; n++){
  //   meal = [];
  //   for (let num = 0; num < pantry.length; num++){
  //     meal.push(pantry[num][n])
  //   }
  //   meals.push(meal)
  // }

  let meal;
  for (let n = 0 ; n < numMeals; n++){
    meal = [];
    for (i in pantry){
      meal.push(pantry[i][n])
    }
    meals.push(meal)
  }

  return meals;
}

function askForNumber() {
  // numMeals = input.question("How many meals would you like to make?");
  
  /// CODE YOUR SOLUTION TO PART B here ///
  let numMeals;
  while (true){
      numMeals = Number(input.question("How many meals would you like to make? "));
      if (isNaN(numMeals)){
          console.log("Please enter a number")
          continue;
      } else if (numMeals < 1 || numMeals > 6) {
          console.log(`Please enter a number between 1 - 6 `)
          continue;
      } else{
          break;
      }
  }

  return numMeals;
}


function generatePassword(string1, string2) {
  let code = '';

  /// Code your Bonus Mission Solution here ///
  let index = 0;
  while(true){
    if (index < string1.length){code += string1[index]}
    if (index < string2.length){code += string2[index]}
    if (index >= string1.length && index >= string2.length) {break;}
    index++;
  }

  return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  // let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
  // console.log(meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  // let password1 = '';
  // let password2 = '';
  // console.log("Time to run the password generator so we can update the menu tomorrow.")
  // console.log(`The new password is: ${generatePassword("fish", "ball")}`);
}

//console.log(`The new password is: ${generatePassword("fish", "baldhead")}`);
// runProgram();

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
