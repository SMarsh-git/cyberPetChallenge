const inquirer = require(`inquirer`);
const {prompts} = require (`./prompts`);
const {Animal} = require("./cyberpet");
const {Cat} = require (`./Animals/Cat`);
const {Dog} = require (`./Animals/Dog`);
const {Rabbit} = require (`./Animals/Rabbit`);

let myPet = ``;


async function main() {
    const {typeOfPet} = await inquirer.prompt(prompts.typeOfPet);
    const {petName} = await inquirer.prompt({
        type: `input`,
        name: `petName`,
        message:`What will you name your pet?`,
    });

    if (typeOfPet === `cat`) myPet = new Cat(petName);
    if (typeOfPet === `dog`) myPet = new Dog(petName);
    if (typeOfPet === `rabbit`) myPet = new Rabbit(petName);

    yourAction();
}

async function yourAction() {
    myPet.statistics;

    const {action} = await inquirer.prompt(prompts.action);
    if (action === `play`) await myPet.play();
    if (action === `drink`) await myPet.drink();
    if (action === `feed`) await myPet.feed();


    yourAction();
}

main()