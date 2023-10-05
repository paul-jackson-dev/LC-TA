let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your selectRandomEntry function here:
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

// Code your buildCrewArray function here:
function buildCrewArray(selectedIdNumbers, animals){
  let crewArray = []
  for (let number of selectedIdNumbers){
    for(let candidate of animals){
      if (number === candidate.astronautID){
        crewArray.push(candidate)
      }
    }
  }
  return crewArray;
}

//returns an array of numbers
let selectedIds = selectRandomEntry(idNumbers,3)
console.log(selectedIds)

// returns an array of candidate objects
let crewArray = buildCrewArray(selectedIds, animals)
console.log(crewArray)

// Code your template literal and console.log statements:
console.log(`${crewArray[0].name}, ${crewArray[1].name}, and ${crewArray[2].name} are going to space!`)