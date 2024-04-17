#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to 'Code with Ahsan' Currency-Converter App\n"));

const currency: any ={
    USD: 1, // Base currency
    EUR: 0.92, // EURO
    GBP: 0.79, // British Pound
    INR: 83.30, // Indian Rupee
    JPY: 151.61, // Japanese Yen
    CHF: 0.90,   // Swiss Franc
    AUD: 1.52,  // Australian Dollar
    PKR: 277.54, // Pakistani Rupee
    SAR: 3.75,  // Saudi Arabian Riyal
    MYR: 4.72,  // Malaysian Ringgit
    NPR: 133.08, // Nepalese Rupee
    BDT: 109.06, // Bangladeshi Taka
    TRY: 32.03,  // Turkish Lira
    CNY: 7.23,  // Chinese Yuan
    EGP: 47.33,  // Egyptian Pound
    HKD: 7.75,  // Hong Kong Dollar
    AED: 3.67,  // UAE Dirham
    KED: 3.24,  // Kuwaiti Dinar
};

let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.yellowBright("Select the currency to convert from:"),
        choices: ["USD", "EUR", "GBP", "INR", "JPY", "CHF", "AUD", "PKR", "SAR", "MYR", "NPR", "BDT", "TRY", "CNY", "EGP", "HKD", "AED", "KED"]
    },
    {
     
        name: "to",
        type: "list",
        message: chalk.yellowBright("Select the currency to convert into:"),
        choices: ["USD", "EUR", "GBP", "INR", "JPY", "CHF", "AUD", "PKR", "SAR", "MYR", "NPR", "BDT", "TRY", "CNY", "EGP", "HKD", "AED", "KED"]

    },
    {

        name: "amount",
        type: "number",
        message: chalk.magentaBright("Enter the amount to convert:"),
        
    }


]);

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;

//Formula of conversion:
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.gray.bold(`Converted Amount = ${chalk.green(convertedAmount.toFixed(2))}`));

console.log(chalk.blueBright.bold("\n\tThank You For Using Currency-Converter App\t"));



