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

      if (play === "looRoll") this.boredom(+2);
      if (play === "hayBall") this.boredom(+2);
    }
}

module.exports = {
    Rabbit,
  };