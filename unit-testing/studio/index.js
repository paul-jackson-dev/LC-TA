
function launchOutput(num){
    let string = "";
    if (num%2===0){string += "Launch"}
    if (num%3===0){string += "Code"}
    if (num%5===0){string += string.length === 0 ? "Rocks" : " Rocks";}
    if (string.length===0) {return "Rutabagas! That doesn't work.";}
    return string + "!";
}

let launchcode = {

    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    method: launchOutput
}


console.log(launchOutput(2));
console.log(launchOutput(3));
console.log(launchOutput(5));
console.log(launchOutput(6));
console.log(launchOutput(15));
console.log(launchOutput(10));
console.log(launchOutput(30));
console.log(launchOutput(31));

module.exports = launchcode;

