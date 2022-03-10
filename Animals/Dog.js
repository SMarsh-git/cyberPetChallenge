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

      if (play === "stick") this.boredom(+2);
      if (play === "bone") this.boredom(+2);
      if (play === "ball") this.boredom(+2);
    }
}

module.exports = {
    Dog,
  };