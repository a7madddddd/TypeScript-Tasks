/// 23 - 9 Task 
var num = 4;
if (num % 2 === 0) {
  console.log(`${num} is an event number.`);
}
else {
  console.log(`${num} is odd number.`);
}


let price: number[] = [10, 30, 20];

for (var n = 0; n < price.length; n++) {

  if (price[n] > 20) {
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
let admins: Admin[] = [
  { name: "ahmad", age: 24, isAdmin: false },
  { name: "ali", age: 30, isAdmin: true },
  { name: "mohammad", age: 28, isAdmin: false }
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

///// 24 - 9 task

let nums: number[] = [1, 2, 3, 4, 5]

let sum = nums[0] + nums[1] + nums[2] + nums[3] + nums[4]
console.log(sum)



let sum2: number[] = [-8, 6, -7, 4]


if (sum2[0] && sum2[1] && sum2[2] && sum2[3] > 0) {

  console.log("not all numbers positive")
}
else {

  console.log("all numbers positive")
}



let names: string[] = ["Alice", "Bob", "Christopher", "David"]
let longName = "";
for (var i = 0; i < names.length; i++) {

  if (names[i].length > longName.length) {
    longName = names[i];

    console.log(longName)
  }
}



let word = "wellcome";
let char = 0;
let varchar = "l";

for (let i = 0; i < word.length; i++) {
  if (word[i] == varchar) {
    char++;
  }
}

console.log(char);

let primeArray: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < primeArray.length; i++) {
  let isPrime = true;

  for (let j = 2; j * j <= primeArray[i]; j++) {
    if (primeArray[i] % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime && primeArray[i] > 1) {
    console.log(primeArray[i]);
  }
}


////////////////////////////////

interface IPerson {

  name: string,
  age: number,
}

let person: IPerson = {

  name: "ahmad",
  age: 24
}

if (person.age < 18) {

  console.log("person is : Minor");

} else {

  console.log("person is : Adult");

}


/////////////////
interface ITeacher {

  name: string,
  subject: string[]
}

let teacher: ITeacher = {

  name: "Ahmad",
  subject: ["Math", "English"]
}

console.log(teacher.subject);

////////////////////


interface IProduct {
  name: string;
  price: Number;
  quantity: Number;
}


let product: IProduct[] = [

  { name: 'Product A', price: 100, quantity: 6 },
  { name: 'Product B', price: 150, quantity: 4 },
  { name: 'Product C', price: 200, quantity: 10 },
  { name: 'Product D', price: 50, quantity: 3 },
]

function UpdeteProductsPrice(product): void {
    product.forEach(element => {
      if (element.quantity > 5) {
        let Newprice: number = element.price * 1.10;
        console.log(element.price);
      }
    });
}
UpdeteProductsPrice(product);

////////////////


interface Device {
  start?(): boolean;
}



function FindStart(device: Device):void{

  if(device.start){

    device.start();
  }
else{
    console.log("start is not found ");
    
}
}
FindStart();