#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount >= myBalance) {
            console.log("Insufficient balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "select your fast cash option",
                type: "list",
                choices: ["500", "1000", "2000", "5000"],
            },
        ]);
        myBalance -= fastCashAns.fastCash;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code!!!");
}
