class Animal{
    constructor(name){
        this._name = name;
        this._hunger = 10;
        this._thirst = 10;
        this._boredom = 10;
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
    eat() {
        this._hunger--;
    }
    drink() {
        this._thirst--;
    }
    play() {
        this._boredom--;
    }
    

}
