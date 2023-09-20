function stringBuilder(array){
    let str = "";
    for (item of array){
        str += item + ", "
    }
    return str.slice(0, str.length-2);
}

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(",");
equipment = equipment.split(",");
pets = pets.split(",");
sleepAids = sleepAids.split(",");

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let input = require("readline-sync");
let cabinetNumber;
while (true){
    cabinetNumber = Number(input.question("Pick a Cabinet! 0, 1, 2, 3 "));
    if (isNaN(cabinetNumber)){
        console.log(`Please enter 0, 1, 2 or 3`)
        continue;
    } else if (cabinetNumber < 0 || cabinetNumber > 3) {
        console.log(`Please enter 0, 1, 2 or 3`)
        continue;
    } else{
        break;
    }
}

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`Cabinet ${cabinetNumber}: ${stringBuilder(cargoHold[cabinetNumber])}`);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
