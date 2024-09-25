/// 23 - 9 Task 
var num = 4;
if (num % 2 === 0) {
    console.log("".concat(num, " is an event number."));
}
else {
    console.log("".concat(num, " is odd number."));
}
var price = [10, 30, 20];
for (var n = 0; n < price.length; n++) {
    if (price[n] > 20) {
        console.log(" ".concat(n, " is above 20."));
    }
    else {
        console.log("".concat(n, " is not above 30."));
    }
}
var admins = [
    { name: "ahmad", age: 24, isAdmin: false },
    { name: "ali", age: 30, isAdmin: true },
    { name: "mohammad", age: 28, isAdmin: false }
];
var oldestAdmin = null;
for (var i_1 = 0; i_1 < admins.length; i_1++) {
    if (admins[i_1].isAdmin) {
        if (oldestAdmin === null || admins[i_1].age > oldestAdmin.age) {
            oldestAdmin = admins[i_1];
        }
    }
}
if (oldestAdmin) {
    console.log("Oldest Admin: ".concat(oldestAdmin.name));
}
else {
    console.log("No admin found");
}
///// 24 - 9 task
var nums = [1, 2, 3, 4, 5];
var sum = nums[0] + nums[1] + nums[2] + nums[3] + nums[4];
console.log(sum);
var sum2 = [-8, 6, -7, 4];
if (sum2[0] && sum2[1] && sum2[2] && sum2[3] > 0) {
    console.log("not all numbers positive");
}
else {
    console.log("all numbers positive");
}
var names = ["Alice", "Bob", "Christopher", "David"];
var longName = "";
for (var i = 0; i < names.length; i++) {
    if (names[i].length > longName.length) {
        longName = names[i];
        console.log(longName);
    }
}
var word = "wellcome";
var char = 0;
var varchar = "l";
for (var i_2 = 0; i_2 < word.length; i_2++) {
    if (word[i_2] == varchar) {
        char++;
    }
}
console.log(char);
var primeArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i_3 = 0; i_3 < primeArray.length; i_3++) {
    var isPrime = true;
    for (var j = 2; j * j <= primeArray[i_3]; j++) {
        if (primeArray[i_3] % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && primeArray[i_3] > 1) {
        console.log(primeArray[i_3]);
    }
}
var person = {
    name: "ahmad",
    age: 24
};
if (person.age < 18) {
    console.log("person is : Minor");
}
else {
    console.log("person is : Adult");
}
var teacher = {
    name: "Ahmad",
    subject: ["Math", "English"]
};
console.log(teacher.subject);
var product = [
    { name: 'Product A', price: 100, quantity: 6 },
    { name: 'Product B', price: 150, quantity: 4 },
    { name: 'Product C', price: 200, quantity: 10 },
    { name: 'Product D', price: 50, quantity: 3 },
];
function UpdeteProductsPrice(product) {
    for (var i = 0; i < product.length; i++) {
        for (var i_4 = 0; i_4 < 3; i_4++) {
            if (product[i_4].quantity > 5) {
                var Newprice = product[i_4].price * 1.10;
            }
        }
    }
    console.log(product);
}
