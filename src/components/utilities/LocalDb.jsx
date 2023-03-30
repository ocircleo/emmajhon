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
    console.log(LocalShopingCart)
  } else {
    let newQuantity = LocalShopingCart[id] + 1;
    LocalShopingCart[id] = newQuantity;
  }
  localStorage.setItem('shoping-cart', JSON.stringify(LocalShopingCart))

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
const Con = (id) => {
  // console.log(id)
}


export { AddToDb, removeFromDb, GetShoppingCart, deleteShoppingCart, Con };
