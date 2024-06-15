export default class customerModel{
    constructor(id,name,address,phone) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._phone = phone;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get address(){
        return this._address;
    }
    get phone(){
        return this._phone;
    }
    set id(id){
        this._id = id;
    }
    set name(name){
        this._name = name;
    }
    set address(address){
        this._address = address;
    }
    set phone(phone){
        this._phone = phone;
    }


}