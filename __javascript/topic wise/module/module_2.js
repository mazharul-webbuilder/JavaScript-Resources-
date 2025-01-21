import {normalModule} from "./module";

export function greeting(){
    return 'Hello Module'
}

function normalFunction() {
    console.log('I am a normal Function')
}

export default function  takeWelcomeDrink (){
    return 'Please have your welcome drinks'
}

const dataFromNormalModule = normalModule();
console.log(dataFromNormalModule)

normalFunction()