/// ques :1

var num = 4;
if (num % 2 === 0) {
    console.log(`${num} is an event number.`);
}
else {
    console.log(`${num} is odd number.`);
}


let price: number[] = [10, 30, 20];

for (var n = 0; n < price.length ; n++) {

    if(price[n] > 20) {
        console.log(` ${n} is above 20.`);
    }
    else {
        console.log(`${n} is not above 30.`);
    }
}

type Admin = {
    name: string;
    age: number;
    isAdmin: boolean;
  };
let admins: Admin [] = [
    {name :"ahmad", age:24, isAdmin: false},
    {name :"ali", age:30, isAdmin: true},
    {name :"mohammad", age:28, isAdmin: false}
];
let oldestAdmin: Admin | null = null;
  
  for (let i = 0; i < admins.length; i++) {
    if (admins[i].isAdmin) {
      if (oldestAdmin === null || admins[i].age > oldestAdmin.age) {
        oldestAdmin = admins[i];
      }
    }
  }
  
  if (oldestAdmin) {
    console.log(`Oldest Admin: ${oldestAdmin.name}`);
  } else {
    console.log("No admin found");
  }
  
