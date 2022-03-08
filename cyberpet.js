class Animal{
    constructor(name){
        this._name = name;
        this._hunger = 10;
        this._thirst = 10;
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
    eat() {
        this._hunger--;
    }
    drink() {
        this._thirst--;
    }
}
