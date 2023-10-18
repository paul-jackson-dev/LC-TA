const { stringify } = require("querystring");

//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{

    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores; // array
    }

    addScore(score){
        this.scores.push(score);
    }

    average(){
        let sum = 0;
        this.scores.forEach(score => {sum += score})
        return Math.round((sum/this.scores.length)*10)/10
    }

    status(){
        let string = "";
        let averageScore = this.average();

        if (averageScore >= 90){string = "Accepted";}
        else if (averageScore >= 80){string = "Reserve";}
        else if (averageScore >= 70){string = "Probationary";}
        else {string = "Rejected"; }

        return string;
    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88,85,90])
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93,88,97])
let gladGator = new CrewCandidate("Glad Gator", 225, [75,78,62])

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bubbaBear.addScore(83);
console.log(bubbaBear.scores);

console.log(merryMaltese.average()); // 92.7

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let count = 0;
while (true){
    gladGator.addScore(100);
    count++;
    if (gladGator.status() === "Accepted"){
        break;
    }
}
console.log(`It took ${gladGator.name} ${count} extra tries to be accepted`);