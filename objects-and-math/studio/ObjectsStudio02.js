// Code your orbitCircumference function here:
function orbitCircumference(r){
  return Math.round(2 * 3.14 * r)
}

// Code your missionDuration function here:
function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000){
  let distance = orbitCircumference(orbitRadius)*orbitsCompleted
  let time = distance/orbitalSpeed;
  time = Math.round(time*100)/100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
  return time;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idNumbers, num){
  let selectedIdNumbers = [];
  while (true){
    let index = Math.floor(Math.random() * idNumbers.length);
    selectedIdNumbers.push(idNumbers[index]);
    idNumbers.splice(index,1);
    if (selectedIdNumbers.length === num){
      break;
    }
  }
  return selectedIdNumbers;
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate){
  let time = missionDuration(3)
  let o2Used = Math.round(candidate.o2Used(time)*1000)/1000
  console.log(`${candidate.name} will perform the spacewalk, which will last ${time} hours and require ${o2Used} kg of oxygen.`);
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
missionDuration(5)

//returns an array
let candidate = selectRandomEntry(crew,1)

oxygenExpended(candidate[0])