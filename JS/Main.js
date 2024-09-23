/// ques :1
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
for (var i = 0; i < admins.length; i++) {
    if (admins[i].isAdmin) {
        if (oldestAdmin === null || admins[i].age > oldestAdmin.age) {
            oldestAdmin = admins[i];
        }
    }
}
if (oldestAdmin) {
    console.log("Oldest Admin: ".concat(oldestAdmin.name));
}
else {
    console.log("No admin found");
}
