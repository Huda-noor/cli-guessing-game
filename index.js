#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number 1-10:",
    }]);
if (answer.userGuessedNumber === randomNum) {
    console.log("CONGRATULATIONS! You guessed right number.You are genius");
}
else {
    console.log("Wrong! You missed it.");
}
