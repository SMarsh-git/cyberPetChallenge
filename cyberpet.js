const inquirer = require('inquirer');
const {prompts} = require('./prompts');

class Animal{
    _hunger;
    _thirst;
    _boredom;
    _isAlive = false;

    constructor(name){
        this._name = name;
        this._hunger = 30;
        this._thirst = 30;
        this._boredom = 30;
    }

    get name() {
        return this._name;
    }

    get hunger() {
        return this._hunger;
    }

    get thirst() {
        return this._thirst;
    }

    get boredom() {
        return this._boredom;
    }

    get statistics() {
        return console.table({
            name: this._name,
            hunger: this._hunger,
            thirst: this._thirst,
            boredom: this._boredom,
        });
    }

    checkIfAlive() {
        if (this._boredom <= 0 || this._hunger<=0 || this._thirst <= 0) {
            this._isAlive = false;

        } else {
            this._isAlive - true;
        }
    }

    boredom(num) {
        this._boredom += num;
        this._hunger -= (num/2);
        this._thirst -= (num/2); 
    }

    hunger(num) {
        this._hunger += num;
        this._thirst -= (num/2);
        this._boredom -= (num/2);
    }

    thirst(num) {
        this._thirst += num;
        this._hunger -= (num/2);
        this._boredom -= (num/2);
    }
    
    async drinking() {
        const {drink} = await inquirer.prompt(prompts.drinking);
        if (drink === "fullDish") this.thirst(+2);
        if (drink === "halfDish") this.thirst(+2);

        return this._thirst;
    }
}

module.exports = {
    Animal,
  };
  