// #! /usr/bin/env node

import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import inquirer from "inquirer";


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome to Typescript Number Guess Game Made By Shan");
    await sleep();
    rainbowTitle.stop();
}
await welcome()


let systemGeneratedNo = Math.floor(Math.random () * 3)

let answer = await inquirer.prompt([{
    message: "Guess the number from 0 to 3:",
    type: "number",
    name: "num1"
}])

let {num1} = answer;
console.log("\n You select", num1, "\n Computer", systemGeneratedNo);


if (num1 === systemGeneratedNo){
console.log("Your answer is Correct. You Won!!");
    }
    else{
    console.log("Your answer is Wrong. Keep try it!!");
    }
    
