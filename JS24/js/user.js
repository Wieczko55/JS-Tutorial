export default class User 
{
    constructor(email, name)
    {
        this._id = email;
        this._name = name;
    }

    gretting()
    {
        return `Hi, my name is ${this._name}, and this is my email ${this._id}`;
    }
}