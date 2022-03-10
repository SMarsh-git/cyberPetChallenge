class Dog extends Animal {
    constructor(name) {
      super(name);
    }
    // Dog specifics here 
    async play() {
      const {play} = await inquirer.prompt(prompts.dogPlay);

      if (play === "stick") this.boredom();
      if (play === "bone") this.boredom();
      if (play === "ball") this.boredom();
    }
}

module.exports = {
    Dog,
  };