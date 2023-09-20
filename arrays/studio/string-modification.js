const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

str2 = str.slice(3,str.length) + str.slice(0,3);
console.log(str2);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} is now ${str2}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let num;
while (true){
    num = Number(input.question("how many characters should be relocated? "));
    if (isNaN(num)){
        console.log("Please enter a number")
        continue;
    } else if (num >= str.length) {
        console.log(`Please enter a number smaller than ${str.length}`)
        continue;
    } else{
        break;
    }
}

let str3 = str.slice(num, str.length) + str.slice(0, num);

console.log(`${str} is now ${str3}`);
