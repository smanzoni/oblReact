
export default class CartItem{

    constructor(_id,name,description,price,photo){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.photo = photo;
        this.quantity = 1;
    }

    totalPrice = () =>{
        return this.price * this.quantity;
    }
}