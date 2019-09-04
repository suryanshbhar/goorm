var faker = require("faker");
console.log("===================");
console.log("WELCOME TO THE SHOP!!");
console.log("===================");
for(var i=0;i<10;i++){
var product = faker.commerce.productName();
var amount = faker.finance.amount();
console.log(product + " - $" + amount);
}