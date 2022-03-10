const inquirer = require(`inquirer`);
const {prompts} = require (`./prompts`);
const {Cat} = require (`.animals/Cat`);
const {Dog} = require (`.animals/Dog`);
const {Rabbit} = require (`.animals/Rabbit`);
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
    if (typeOfPet === `rabbit`) myPet = new Cat(petName);

    yourAction();
}

async function yourAction() {
    myPet.boredom(10);
    myPet.thirst(10);
    myPet.hunger(10);
    myPet.stats;

    const {action} = await inquirer.prompt(prompts.action);
    if (choice === `play`) await myPet.play();
    if (choice === `drink`) await myPet.drinking();
    if (choice === `feed`) await myPet.feeding();
    if (choice === `status`) console.log(myPet.stats);

    yourAction()
}


main()