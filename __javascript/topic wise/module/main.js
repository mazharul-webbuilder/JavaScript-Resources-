import {normalModule} from "./module";
import {greeting} from "./module_2";
import takeWelcomeDrink from "./module_2";

const stringMessage = normalModule();

console.log(stringMessage)

const takeGreeting = greeting()
const takeWelcomeDrinks = takeWelcomeDrink()

console.log(takeGreeting)
console.log(takeWelcomeDrinks)