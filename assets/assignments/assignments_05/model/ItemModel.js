export default class itemModel{
    constructor(itemCode,itemName,itemPrice,itemQty) {
        this._itemCode = itemCode;
        this._itemName = itemName;
        this._itemPrice = itemPrice;
        this._itemQty = itemQty;
    }

    get itemCode(){
        return this._itemCode;
    }
    get itemName(){
        return this._itemName;
    }
    get itemPrice(){
        return this._itemPrice;
    }
    get itemQty(){
        return this._itemQty;
    }
    set itemCode(itemCode){
        this._itemCode = itemCode;
    }
    set itemName(itemName){
        this._itemName = itemName;
    }
    set itemPrice(itemPrice){
        this._itemPrice = itemPrice;
    }
    set itemQty(qty){
        this._itemQty = qty;
    }



}