#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a ramdom number.  Done
// 2) User will guess the number.      Done
// 3) Compare user input with computer generated number and show result.   Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number.");
}
else if (answers.userGuessedNumber > 6) {
    console.log("Oopss..please enter a valid number.");
}
else {
    console.log("You guessed a wrong number.");
}
