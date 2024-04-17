#! /usr/bin/env node

//This line is called a "SHAHBANG", it tells the os to run it with Node.js

// Import the "inquirer" module, which is a command line interface for Node.js
import inquirer from "inquirer";

// Declare a constant "answers" and  assign it to the result of inquirer.prompt function

const answers: {sentence: string} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
]);

const words = answers.sentence.trim().split(" ");

//Print the array of words to the console
console.log(words);

//Print the word count of the sentence to the console
console.log(`The word count of the sentence is: ${words.length}`);

