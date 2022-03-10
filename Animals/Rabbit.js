class Rabbit extends Animal {
    constructor(name) {
      super(name);
    }
    // Rabbit specifics here 
    async play() {
      const {play} = await inquirer.prompt(prompts.rabbitPlay);

      if (play === "looRoll") this.boredom();
      if (play === "hayBall") this.boredom();
    }
}

module.exports = {
    Rabbit,
  };