const input = require('readline-sync');

let date = "Monday 2019-03-18";

let time = "10:05:34 AM";

let astronautCount = input.question("How many are along for the ride? ");

let astronautStatus = "ready";

let averageAstronautMassKg = 80.7;

let crewMassKg = astronautCount * averageAstronautMassKg;

let fuelMassKg = 760000;

let shuttleMassKg = 74842.31;

let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;

let fuelTempCelsius = -225;

let fuelLevel = "100%";

let weatherStatus = "clear";

console.log(`
-------------------------------------
> LC04 - LAUNCH CHECKLIST
-------------------------------------
Date: ${date}
Time: ${time}

-------------------------------------
> ASTRONAUT INFO
-------------------------------------
* count: ${astronautCount}
* status: ${astronautStatus}

-------------------------------------
> FUEL DATA
-------------------------------------
* Fuel temp celsius: ${fuelTempCelsius}
* Fuel level: ${fuelLevel}%

-------------------------------------
> MASS DATA
-------------------------------------
* Crew mass: ${crewMassKg}
* Fuel mass: ${fuelMassKg}
* Shuttle mass: ${shuttleMassKg}
* Total mass: ${totalMassKg}

-------------------------------------
> FLIGHT PLAN
-------------------------------------
* weather: ${weatherStatus}

-------------------------------------
> OVERALL STATUS
-------------------------------------
* Clear for takeoff: YES
`);