//Classes

class Pizza
{
 constructor(pizzaType, pizzaSize)
 {
  this.type = pizzaType;
  this.size = pizzaSize;
  this.crust = "origninal";
  this.toppings = [];
 } 
 getCrust()
 {
  return this.crust;
 }
 setCrust(pizzaCrust)
 {
  this.crust = pizzaCrust;
 }
 getToppings()
 {
  return this.toppings;
 }
 setToppings(topping)
 {
  this.toppings.push(topping);
 }
 bake()
 {
  console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`);
 }
}
const myPizza = new Pizza("pepperoni", "small");
myPizza.setCrust("thin");
myPizza.type = "supreme";
myPizza.bake();
console.log(myPizza.getCrust());
myPizza.setToppings("sausage");
myPizza.setToppings("jalapenio-peper");
console.log(myPizza.getToppings())

class myBurger
{
  constructor(sauce, burgerSize)
  {
  this.topings = [];
  this.size1 = burgerSize;
  this.sauce = sauce;
  this.crust = "bread";
  this.order = ""
  }
  getWhatOrder()
  {
    return this.order;
  }
  setWhatOrder(order)
  {
    this.order = order;
  }
  getTopings()
  {
    return this.topings;
  }
  setTopings(topings)
  {
    this.topings.push(topings);
  }
  do()
  {
    console.log(`Doing a ${this.size1} ${this.crust} burger with ${this.sauce} sauce and ${this.topings} ordered ${this.order}`);
  }
}
const mBurger = new myBurger("tomato", "Large");
console.log(mBurger.setWhatOrder("home"));
console.log(mBurger.getWhatOrder());
mBurger.setTopings("pickles");
mBurger.setTopings("jalapenio-peper");
console.log(mBurger.getTopings());
mBurger.do();






function pizzaFactory(pizzaSize2)
{
  const crust2 = "original";
  const size2 = pizzaSize2;
  return {
    bake: () => console.log(`Baking a ${size2} ${crust2} crust pizza.`)
  };
}

const myPizza2 = pizzaFactory("big");
myPizza2.bake();