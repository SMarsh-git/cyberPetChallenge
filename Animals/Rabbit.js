const inquirer = require("inquirer");
const { Animal } = require("../cyberpet");
const {prompts} = require (`../prompts`);

class Rabbit extends Animal {
    constructor(name) {
      super(name);
    }
    // Rabbit specifics here 
    async play() {
      const {play} = await inquirer.prompt(prompts.rabbitPlay);

      if (play === "looRoll") this.boredom(7);
      if (play === "hayBall") this.boredom(6);
    }
    async feed() {
      const {feed} = await inquirer.prompt(prompts.rabbitFeed);
      if (feed === "carrot") this.hunger(8);
      if (feed === "biscuits") this.hunger(6);
      if (feed === "treats") this.hunger(4);
    };
    async drink() {
      const {drink} = await inquirer.prompt(prompts.rabbitDrink);
      if (drink=== "fullDish") this.thirst(8);
      if (drink === "halfDish") this.thirst(4);
    };
}

module.exports = {
    Rabbit,
  };