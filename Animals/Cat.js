const inquirer = require("inquirer");
const { Animal } = require("../cyberpet");
const {prompts} = require (`../prompts`);

class Cat extends Animal {
    constructor(name) {
      super(name);
    }
    // Cat specifics here
    async play() {
      const {play} = await inquirer.prompt(prompts.catPlay);

      if (play === "mouse") this.boredom(5);
      if (play === "string") this.boredom(7);
      if (play === "catnip") this.boredom(6);
    };    
    async feed() {
      const {feed} = await inquirer.prompt(prompts.catFeed);
      if (feed === "wetFood") this.hunger(10);
      if (feed === "biscuits") this.hunger(8);
      if (feed === "treats") this.hunger(3);
    };
    async drink() {
      const {drink} = await inquirer.prompt(prompts.catDrink);
      if (drink=== "fullDish") this.thirst(8);
      if (drink === "halfDish") this.thirst(4);
    };
}

module.exports = {
  Cat,
};