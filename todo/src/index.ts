import * as inquirer from 'inquirer'

import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "buy flowers"),
    new TodoItem(2, "get shoes"),
    new TodoItem(3, "collect tickets"),
    new TodoItem(4, "call Joe", true),
]

let collection: TodoCollection = new TodoCollection("Dima", todos)

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);

    collection.getTodoItems(true).forEach(item => item.printDetails());
}

enum Commands {
    Quit = "Quit"
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    })
}

promptUser();


// console.log(`${collection.userName}'s Todo List`);

// let newId: number = collection.addTodo("Go for run");
// let todoItem: TodoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem))
// collection.removeComplete();
// collection.getTodoItems(true).forEach(item => item.printDetails());

