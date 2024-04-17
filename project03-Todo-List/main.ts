#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";



let todoList: string[] = [];
let whileConditions: boolean  = true;


console.log(chalk.blueBright("\n\tWelcome to 'Code with Ahsan' - Todo-List App\n"));

while(whileConditions){
//--------------------------------------------------------------------------- Options -------------------------------------------------------------------------//    
    let option = await inquirer.prompt([
        
        {
           name: "userOption",
           type: "list",
           message: "Select an options :\n",
           choices: ["Add","Show list", "Update", "Remove" ],
        }
 ]);

 //-------------------------------------------------- Add --------------------------------------------------------------------//

  if(option.userOption === "Add") {
    let ans = await inquirer.prompt([

        {
           name: "userAns",
           type: "input",
           message: "\nWrite something to add in the task list:"
        },
    
]);

if (ans.userAns !== '') {
    todoList.push(ans.userAns);
    console.log(chalk.green.bold("\n Task added successfully."));
    console.log(chalk.bold("\n\t Updated List:"));
    todoList.forEach((item, index) => {
        console.log(chalk.green(`\t ${index + 1}: ${item}`));
    });
    console.log('\n');

}else{
    console.log(chalk.red("\n ! You cannot enter an empty item in the list.\n"));
 }

}

//---------------------------------------------------- Show list----------------------------------------------------------------//

else if (option.userOption === "Show list") {
    if (todoList.length > 0) {
        console.log(chalk.bold("\n\tYour list:"));
        todoList.forEach((item, index) => {
            console.log(chalk.cyan(`\t ${index + 1}: ${item}`));
        });

        console.log('\n');

    }else {
        console.log(chalk.yellow("\n\tThe list is empty.\n"));
    }
 }



//------------------------------------------------------- Remove -----------------------------------------------------------------//

 else if (option.userOption === "Remove") {
    if(todoList.length > 0){
    let removeChoice = await inquirer.prompt([

        {
            name: "removeItem",
            type: "list",    
            message: "\nSelect an item to remove:",
            choices: todoList,
        },
]);
    
let indexToRemove = todoList.indexOf(removeChoice.removeItem);

  if  (indexToRemove >= 0) {
      todoList.splice(indexToRemove, 1);
      console.log(chalk.red.bold(`\n You removed: ${removeChoice.removeItem}`));
      console.log(chalk.bold("\n\t Updated List:"));
      todoList.forEach((item, index) => {
          console.log(chalk.green(`\t ${index + 1}:  ${item}`));
      });

      console.log('\n');
    }
}else {
    console.log (chalk.red("\n\tThe To-Do list is Empty. Add something before removing. \n"))
  }

}
 
//-------------------------------------------------- Update ---------------------------------------------------------------------------//

else if (option.userOption === "Update") {
    if (todoList.length > 0) {
        let updateShow = await inquirer.prompt([

            {

               name: "updateItem",
               type: "list",
               message: "\nSelect an item to update:",
               choices: todoList,

            },
        ]);

        let Index = todoList.indexOf(updateShow.updateItem);

        let eidtValue = await inquirer.prompt([

            {

                name: "editItem",
                type: "input",
                message: "\nEnter the updated task"
            }


        ]);

        if (eidtValue.edit_item !== "") {
            todoList[Index] = eidtValue.editItem;
            console.log(chalk.green.bold("\n Task updated successfully."));
            console.log(chalk.bold("\n\t Updated List:"));
            todoList.forEach((todoList, index) => {
                console.log(chalk.green(`\t ${index + 1}: ${todoList}`));
            });

            console.log('\n');

        }else  {
            console.log(chalk.red("\n ! You cannot update to an empty item. \n"));  

        }
        
        }else {
            console.log(chalk.yellow("\n\t The To-Do list is Empty. Please add tasks before updating.\n"))
        }
    }



//------------------------------------------ Breaking/stoping while-loop (by false the while loop condition)`And Conformation------------------------------------------//
let userAns = await inquirer.prompt([

    {
        name: "selection",
        type: "confirm",
        message: ("Do you want to continue ?"),
        default: true
    }

]);

if (userAns.selection === false){
    whileConditions = false;
  }
}
console.log(chalk.blueBright("\n\tThank you for using 'Code with Ahsan' - Todo-List App\n"));

   


