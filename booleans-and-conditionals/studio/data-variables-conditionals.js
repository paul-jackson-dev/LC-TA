// Initialize Variables below
const input = require('readline-sync');

let date = "Monday 2019-03-18";

let time = "10:05:34 AM";

let astronautCount = input.question("How many are along for the ride? ");
astronautCount = Number(astronautCount);

let astronautStatus = "ready";

let averageAstronautMassKg = 80.7;

let crewMassKg = astronautCount * averageAstronautMassKg;

let fuelMassKg = 760000;

let shuttleMassKg = 74842.31;

let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;

let fuelTempCelsius = -225;

let fuelLevel = "100%";

let weatherStatus = "clear";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
let flag = true;
if (astronautCount > 7){ flag = false}
if (!astronautStatus === "ready"){flag = false}
if (totalMassKg > 850000){flag = false}
if (fuelTempCelsius < -300 || fuelTempCelsius > -150){flag = false}
if (!fuelLevel === "100%"){flag = false}
if (!weatherStatus === "clear"){flag = false}

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
if (flag === true){
    console.log(`
    All systems are a go! Initiating space shuttle launch sequence.
    ----------------------------------------------------------------
    Date: ${date}
    Time: ${time}
    Astronaut Count: ${astronautCount}
    Crew Mass: ${crewMassKg} kg
    Fuel mass: ${fuelMassKg} kg
    Shuttle mass: ${shuttleMassKg} kg
    Total mass: ${totalMassKg} kg
    Fuel Temperature: ${fuelTempCelsius} *C
    Weather Status: ${weatherStatus}
    ----------------------------------------------------------------
    Have a safe trip astronauts!
    `);
}
else {
    console.log("Abort Abort Abort");
}
