const inquirer = require("inquirer");
const { prompts } = require("inquirer");

class Cat extends Animal {
    constructor(name) {
      super(name);
    }
    // Cat specifics here
    async play() {
      const {play} = await inquirer.prompt(prompts.catPlay);

      if (play === "mouse") this.boredom();
      if (play === "string") this.boredom();
      if (play === "catnip") this.boredom();
    }
}

module.exports = {
  Cat,
};