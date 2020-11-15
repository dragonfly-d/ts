import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "buy flowers"),
    new TodoItem(2, "get shoes"),
    new TodoItem(3, "collect tickets"),
    new TodoItem(4, "call Joe", true),
]

let collection: TodoCollection = new TodoCollection("Dima", todos)

console.clear();

console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`);

// console.log(`${collection.userName}'s Todo List`);

// let newId: number = collection.addTodo("Go for run");
// let todoItem: TodoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem))
// collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());

