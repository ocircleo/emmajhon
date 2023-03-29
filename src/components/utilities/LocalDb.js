const GetShoppingCart = () => {
  let shopingCart = {};
  let localCart = localStorage.getItem("shoping-cart");
  if (localCart) {
    shopingCart = JSON.parse(localCart);
  }
  return shopingCart;
};
const AddToDb = (id) => {
  let LocalShopingCart = GetShoppingCart();
  let quantity = LocalShopingCart[id];
  if (!quantity) {
    LocalShopingCart[id] = 1;
  } else {
    let newQuantity = LocalShopingCart[id] + 1;
    LocalShopingCart[id] = newQuantity;
  }
};
const removeFromDb = (id) => {
    const shopingCart = getShoppingCart()
    if (id in shopingCart) {
        delete shopingCart[id];
        localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shoping-cart');
}


export  {AddToDb,removeFromDb,getShoppingCart,deleteShoppingCart};
