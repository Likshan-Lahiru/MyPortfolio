export default class OrderModel {
    constructor(orderId,date,discount,customerId,subTotal) {
        this._orderId = orderId;
        this._date = date;
        this._discount = discount;
        this._customerId = customerId;
        this._subTotal = subTotal;
    }
    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get subTotal() {
        return this._subTotal;
    }

    set subTotal(value) {
        this._subTotal = value;
    }

    get customerId() {
        return this._customerId;
    }

    set customerId(value) {
        this._customerId = value;
    }
}