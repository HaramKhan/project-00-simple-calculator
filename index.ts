#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk"; 

const answer = await inquirer.prompt ([ 
    {message: (chalk.white.bgBlue("Enter First Number")),
    type: "number" , name: "firstNumber"},
    { message: (chalk.white.bgRedBright("Enter Second Number")), type: "number", name: "secondNumber"},
    { message: (chalk.yellow.bgCyan("Select one of the operators to perform operation")) , type: "list", 
    name:"operator",
     choices :["Addition", "Subtraction" , "Multiplication" , "Division"] } ,
    ]
);
// conditional statement 
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber) ;
} 
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber) ; 
} 
else if (answer.operator ==="Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber) ;
} 
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber) ;
}
else{
    console.log (chalk.blue.bgYellowBright( "Please select valid operators"))
}


