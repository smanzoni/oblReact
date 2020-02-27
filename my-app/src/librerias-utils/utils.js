import CartItem from "./CartItem";


const filterProductsByName = (products, name) => {
  return products.filter(product => {
    return product.name.toLowerCase().includes(name.toLowerCase());
  });
};


const addToCart = (cart, item) => {
  let newCart = [...cart];
  let i = newCart.findIndex(p=> p._id === item._id);

  if( i !== -1 ){
    newCart[i].quantity++;
  }else{
    let newItem = new CartItem(
      item._id,
      item.name,
      item.description,
      item.price,
      item.photo
    );
    newCart.push(newItem);
  }

  return newCart;
};


const countCartItems = cart => {
  let count = 0;
  cart.forEach(p => {
    count += p.quantity;
  });

  return count;
};


const countCartTotalAmount = cart => {
  let totalAmount = 0;
  cart.forEach(p => {
    totalAmount += p.quantity * p.price;
  });

  return totalAmount;
};


const removeOneUnit = (carritoCart, id) => {
  let newCarrito = [...carritoCart];
  const i = newCarrito.findIndex(p => p._id === id);
  if (i !== -1) {
    newCarrito[i].quantity--;
    if(newCarrito[i].quantity == 0){
      newCarrito = deleteFromCarrito(carritoCart, id);
    }
  }

  return newCarrito;
};


const deleteFromCarrito = (carritoCart, id) => {
  return carritoCart.filter(p => p._id !== id);
};


export {
  filterProductsByName,
  addToCart,
  countCartItems,
  countCartTotalAmount,
  deleteFromCarrito,
  removeOneUnit
};
