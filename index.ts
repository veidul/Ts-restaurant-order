import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(price:PriceBracket){
  switch (price){
    case PriceBracket.High:
    return 30.0;
    case PriceBracket.Medium:
    return 20.0;
    case PriceBracket.Low:
    return 10.0;
    default: return "None";
  }
}

/// Add your getOrders() function below:
function getOrders(price:PriceBracket, orders:Order[][]){
  let filteredOrders: Order[][] = []
  
orders.forEach(restaurant => { 
  const filteredForRestaurant = restaurant.filter((order)=>order.price <= getMaxPrice(price))
  filteredOrders.push(filteredForRestaurant);
})
return filteredOrders}
///Add your printOrders() function below:
function printOrders(restaurants: Restaurant[],elligibleOrders:Order[][]){orders.forEach((order, index) => {
  if(orders.length>0){
    console.log(`${restaurants[index].name}`)
    order.forEach(item => {
      console.log(`- ${item.name}: ${item.price}`)})
  }
})}
/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
console.log(elligibleOrders)
printOrders(restaurants, elligibleOrders);
