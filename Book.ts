export class Book{
     _id: string;
     _name: string;
    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }
    getName(): string {
        return this._name;
    }
    setName(name: string): void{
        this._name = name;
    }
    getID(): string{
        return this._id;
    }
}