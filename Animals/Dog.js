const inquirer = require("inquirer");
const { Animal } = require("../cyberpet");
const {prompts} = require (`../prompts`);

class Dog extends Animal {
    constructor(name) {
      super(name);
    }
    // Dog specifics here 
    async play() {
      const {play} = await inquirer.prompt(prompts.dogPlay);

      if (play === "stick") this.boredom(7); 
      if (play === "bone") this.boredom(6);
      if (play === "ball") this.boredom(5); 
    }
    async feed() {
      const {feed} = await inquirer.prompt(prompts.dogFeed);
      if (feed === "wetFood") this.hunger(10); 
      if (feed === "biscuits") this.hunger(8); 
      if (feed === "treats") this.hunger(3);
    }
    async drink() {
      const {drink} = await inquirer.prompt(prompts.dogDrink);
      if (drink=== "fullDish") this.thirst(8);
      if (drink === "halfDish") this.thirst(4);
    };
}


module.exports = {
    Dog,
  };