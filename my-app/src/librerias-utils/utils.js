import CartItem from "./CartItem";

//***************************************************************************//
//***************************************************************************//

const filterProductsByName = (products, name) => {
  return products.filter(product => {
    return product.name.toLowerCase().includes(name.toLowerCase());
  });
};

//***************************************************************************//

const addToCart = (cart, item) => {

    if(cart.find(p => p._id === item._id )){
        cart = cart.map(p => { if(p._id === item._id) p.quantity++ });
    }else{
        let newItem = new CartItem( item._id, item.name, item.description, item.price, item.photo );
        cart.push(newItem);
    }

  return cart;
};

//***************************************************************************//

const countCartItems = cart => {
  let count = 0;
  cart.forEach(p => {
    count += p.quantity;
  });

  return count;
};

//***************************************************************************//

const countCartTotalAmount = cart => {
  let totalAmount = 0;
  cart.forEach(p => {
    totalAmount += p.quantity * p.price;
  });

  return totalAmount;
};

export {
  filterProductsByName,
  addToCart,
  countCartItems,
  countCartTotalAmount
};
