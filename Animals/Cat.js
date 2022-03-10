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

      if (play === "mouse") this.boredom(+2);
      if (play === "string") this.boredom(+2);
      if (play === "catnip") this.boredom(+2);
    }
}

module.exports = {
  Cat,
};