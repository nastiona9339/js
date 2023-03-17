
// ______Task 1_________

// function formatMessage(message,maxLength) {
//   let result;

//  if(message.length > maxLength) {
//   message = message.slice(0,maxLength);
//   result = `${message}...`
//  } else {
//   result = message;
//  }
//   return result;
// }

// console.log(formatMessage("Привіт,все добре", 6));


// ______Task 2_________

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0 ;


// for (let i = 1; i <= employees; i +=1) {

// salary = Math.round(Math.random()*(maxSalary-minSalary)+minSalary);
// console.log(`Зарплата сотрудника номер ${i} - ${salary}.`);

// totalSalary +=salary;
// // console.log(`totalsalary: `, salary);
// }

// console.log(`totalsalary: `, salary);


// // ______Task 3_________

// let balance = 10000;
// const payment = 2000;

// let message;

// if(payment < balance) {
// message = `На счету осталось ${balance - payment} кредитовю`
// } else {
//   message = `На счету недостаточно средств для проведения операции!`
// }

// console.log(message);



// ______Task 4_________

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if(totalSpent >= 100 && totalSpent <1000) {
//   console.log(`Скидка 2%`);
//   discount = 0.02;
// } else if(totalSpent >= 1000 && totalSpent <5000) {
//   console.log(`Скидка 5%`);
//   discount = 0.05
// } else {
//   console.log(`без скидки`);
//   discount = 0;
// }

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%` );


// // ______Task 6  ПИТАННЯ_________


// const btnAdd = document.querySelector("button[data-add]");
// const valueInput = document.querySelector("input[data-value]")

// const output = document.querySelector(".js-output span")

// let total = 0;

// btnAdd.addEventListener('click', function () {
//   console.log("times click");

//   const value = Number(valueInput.value);

//   console.log(value);

//   total += value;

//   // console.log("total", total);



//   output.textContent = total;

//   valueInput.value = "";


// })



// ______Task 7(пустая строка)  ПИТАННЯ_________



// let msg = ""
// let userAnswer = prompt("Пароль введи");

//  userAnswer === "QWE"
// ? (msg = "good")
// : (msg = "bad");


// console.log(msg);




// ______Task 8_________



// const max = 100;
// const min = 20;


// for (let i=min; i <= max; i += 1) {
//   if(i % 5 === 0) console.log(i);
// }



// // ______Task 9_________


// const askLogin = prompt("Напиши логін")?.trim() ;


// if(askLogin === "Admin") {
//   const password = prompt("Напиши пароль");
//     if(password === "я адмін") {
//         alert("hello");
//     } else {
//         alert("wrong password");
//     }
//   }
//  else if(!askLogin)


// // else if(askLogin === "" || askLogin === undefined )

// {
//  console.log("Скасовано");
// } else {
//     console.log("Я вас не знаю");

// }

// console.log(askLogin);


// ______Task 1_________


// const str = Number("12a");

// console.log("Number.isNan", Number.isNaN(str));
// console.log("isNan", isNaN(str));

// ______Task 1_________

//  ________1 варіант_______
// let checkNumber = 4;
// let message = "";

// if(checkNumber % 2 === 0) {
//  message = "yes";
// } else {
//     message = "no";
// }

// console.log(message);

// __________2 варіант_________

// let checkNumber = 5;
// console.log(checkNumber % 2 === 0 ? 'парне' : 'непарне');
// це якщо далі виводити в консоль

// ______якщо треба передавати далі дані черз константу________

// const result = checkNumber % 2 === 0 ? 'парне' : 'непарне';



// _________3 варіант (оптимізуємо 0 = який на пране чи непарне все рівно дає нам нуль , тому ми робимо інверсію)


// let checkNumber = 4;
// let message = "";

// if(!(checkNumber % 2)) {
//  message = "yes";
// } else {
//      message = "no";
// }

// console.log(message);


// _________4 варіант (просто умови міняємо місцями - логіка трішки інша якщо залищок від ділення пверне будь-що окрім нуля ми знаємо що це не парне - ноу)


// let checkNumber = 3;
// let message = "";
//  if(checkNumber % 2) {
//     message = "no";
//      } else {
//      message = "yes";
// }
// console.log(message);

 // ______Task 8_________

// for (let k = 1; k < 10; k += 1) {
//    console.log(k);
// }


// ______Task 9_________

// const question = prompt("Яка офіційна назва ДжаваСкрипт? ");

// if(question === "Екмаскріпт") {
//  alert("Правильно");
// } else {
// alert("Не знаєте");
// }



// const question = prompt("Яка офіційна назва ДжаваСкрипт? ");
// let answer = question === "Екмаскріпт" ? "Правильно" : "Не знаєте";
// alert(answer)


// const question = prompt("Яка офіційна назва ДжаваСкрипт? ");
// const answer = "Екмаскріпт";

// alert(question === "Екмаскріпт" ? "Правильно" : "Не знаєте")


// ______Task 10_________

// const minutes = 0;
// const hours = 14;

// let timeString = ""

// if(minutes === 0) {
//    timeString = `${hours} г.`

// } else {
// timeString = `${hours} г. ${minutes} хв.`
// }
  

// 2 решение
// console.log(minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`);


// 3 решение больше продвинутое без 0 - часто на собеседованиях такое делают

// if(minutes) {
//    timeString = `${hours} г. ${minutes} хв.`

// } else {
//    timeString = `${hours} г.`
// }

// console.log(timeString);



// ______Task 1_________в цьому таску по логіці ми повині спочатку записати = 0, а потім + значення і на остаток мінусове

// const question = Number(prompt("Яке число?"));
// let answer

// if(question > 0) {
//  answer = "Це позитивне число";
// } else if(!question) {
//    answer = "Це нуль";
// } else {
//    answer = "Це негативне число";
// }

// console.log(answer)

// ______Task 1_________


// const a = 34;
// const b = 103;

// if (a > 100 && b > 100) {
//    if (a > b) {
//       console.log(a);
//    } else {
//       console.log(b);
//    }
// } else {
//    console.log(b + 512);
// }


// ______Task 10_________


// let link = "about";

// if(!link.endsWith("a")) {
// link += "Pro"
// }

// console.log(link)



// ___________звичайний запис______

// let link = "about";

// if(link.endsWith("t")) {
//    console.log(link);
// } else {
//    link += "Pro";
//    console.log(link);
// }



// ______Task 10_________
// Перший варіант

// let link = "Anastasiia"

// if(!link.endsWith("b")) {
//    if(link.includes("asta")) {
//       link += "A"
//    }
// }

// console.log(link);


// 2 варіант більш короткий без if

// let link = "Anastasiia"

// if(!link.endsWith("a") && link.includes("asta")) {
//       link += "A"
//    }

// console.log(link);



// тернарний оператор

// let link = "Anastasiia"

// link = !link.endsWith("a") && link.includes("asta") ? link += "A" : link;
   

// console.log(link);






// ______Task 10_________



// let login = prompt("Please login");

// if(login) {
//    login = login.toLowerCase();
//    if(login === "admin") {
//       const password = prompt("Please password")
//       if(password === "Admin2") {
//          alert("Hi")
//       } else {
//          alert("bye")
//       }
//    } else {
//       alert("i dont know you")
//    }
// } else {
//    alert("go home")
// }

// console.log(login)

// ______Task 11_________

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// ______Task 11_________

// const numbers = [1,2,8,4,9,11];
// const threshold = 5;

// for(let i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] < threshold) {
//         continue;
//     }
//     console.log(numbers[i]);

// }
// ____________Task 12 _______________________


// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(fruit);
// }



// ______Task 11_________

// const fruit = ["Mango", "kiwi", "apple"];

// console.table(fruit.pop())
// console.table(fruit)


// ______Task 11_________

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// ______Task 11_________

// const numbers = [10, 13, 15, 18];

// total = 0;

// for (let i = 0; 0 < numbers.length; i +=1) {
//     console.log(numbers[i]);
    
//     total += numbers[i];
// }

// console.log(total);


// 2 решение задачи

// const numbers = [10, 13, 15, 18];

// total = 0;

// for (const value of total) {
//     total +=value;
// }

// console.log(total);


// 2 решение задачи + добавить налог для зарплати

// const numbers = [10, 13, 15, 18];

// total = 0;

// for (let i; i < numbers.length; i += 1) {
//     numbers[i] = Math.round(cart[i] * 1.1)
// }


// ______Task 11_________ (если нужно нечетное поставили отрицание)

// const numbers = [10, 13, 15, 18];

// total = 0;

// for (const number of numbers) {
//     if(check % 2 === 0) {
//         total =+ numbers[i];
//     }

// }

// console.log(total)

// _______________решение задачи по другому _________
// const numbers = [10, 13, 15, 18];

// total = 0;

// for (let i; i < numbers.length; i += 1) {
// console.log(numbers[i])

// if (numbers[i] % 2 === 0) {
//  total =+ numbers[i];
// }

// console.log(total)
// }



// // ______Task 11_________


// const logins = ["Nastya", "Sasha", "Dasha", "Oleg"]
// const loginToFind = "Dasha";
// let message = "";


// for (let i = 0; i < logins.length; i += 1 ) {
//     const login = logins [i];

//     if(login === loginToFind) {
//         message = "Find"
//         break
//     }

// message = "i cant find you";

// }

// console.log(message)



// 2 метод решения задачи от обратного

// const logins = ["Nastya", "Sasha", "Dasha", "Oleg"]
// const loginToFind = "Dasha";
// let message = "i cant find you";


// for (let i = 0; i < logins.length; i += 1 ) {
//     const login = logins [i];

//     if(login === loginToFind) {
//         message = "Find"
//         break
//     }


// }

// console.log(message)



// ____________________решение задачи с фор оф________


// const logins = ["Nastya", "Sasha", "Dasha", "Oleg"]
// const loginToFind = "Dasha";
// let message = "i cant find you";


// for (const login of logins) {
//     if (login === loginToFind) {
//         message = "Find"
//                 break
//     }
// }
// console.log(message)



// ____________________решение задачи с тернарником________(декларативний код - абстракция)


// const logins = ["Nastya", "Sasha", "Dasha", "Oleg"]
// const loginToFind = "Dasha";

// сonst message = logins.includes(loginToFind) ? "Find" : "I cant find you"

// console.log(message)


// ____________________Новая задача - самое маленькое число в массиве _______Найти самое большое число ? (придумать самим )

// const coins = [2,6,10.12];
// let smallCoins = coins[0];

// for (const coin of coins){
//     if(coin < smallCoins) {
//         smallCoins = coin;
//     }
// }

// console.log(smallCoins)


// ____________________Новая задача - масив вивести в строку _____________

// const friends = ["Nastya", "Sasha", "Dasha", "Oleg"]
// let string = "";

// for (const friend of friends) {
// string +=friend + ",";
// }

// string = string.slice(0,string.length - 1);

// console.log(string);


// 2 вариант

// const friends = ["Nastya", "Sasha", "Dasha", "Oleg"]

// const string = friends.join(",  ")
// console.log(string);




// _________________________Новая задачка сделать инверсию строки _________________________



// const string = "NasTYA"
// const letters = string.split("")
// const invertedString = ""

// for (const letter of letters) {
//     if(letter === letter.toLowerCase) {
//         invertedString += letter.toUpperCase();
//     } else {
//         invertedString += letter.toLowerCase();
//     }
// }

// console.log(invertedString)




// 2 вариант - с помощью тернарника

// const string = "NasTYA"
// const letters = string.split("")
// const invertedString = ""

// for (const letter of letters) {
// invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase() }

// console.log(invertedString)




// // _________________________Новая задачка _________________________соединить в один рядок через -


// const title = "I Love Hot dog";

// const slug = title.toLowerCase().split(" ").join("-")



// const arr = [1, null, true, "hello"]

// for (let i = 0; i < arr.length; i +=1 ) {
// if (typeof arr[i] === "boolean") {
//     arr[i] = "world"
// }
// console.log(arr[i])
// }

// console.log(arr)


// __________Новая задача ____________

// const title = "I Love Hot dog";
// const result = title.split(" ")
// const initialPosition = result.join(" ")
// console.log(initialPosition)


// const arr = ["i", "love", "hot"]

// console.log(arr.indexOf("by"))



// __________Новая задача ____________


// const values = "8 11"
// const arr = values.split(" ")

// const first = Number(arr[0])
// const second = Number(arr[1])

// console.log(first * second)


// __________Новая задача ____________


// const fruits = ["apple", "kiwi", "strawberry", "pineapple"]

// for (let i = 0; i < fruits.length; i += 1 ) {
//     console.log(`${i+1}: ${fruits[i]}`)
// }


// 2 variant


// const fruits = ["apple", "kiwi", "strawberry", "pineapple"]

// for (let i = 0, num = 1; i < fruits.length; i += 1, num +=1 ) {
//      console.log(`${num}: ${fruits[i]}`)}


// __________Новая задача ____________

// const names = "Nasta, Olya, Sasha, Dasha";
// const phones = "0123, 1234, 2345, 123345";

// const arrayNames = names.split(",");
// const arrayPhones = phones.split(",");



// for (let i = 0; i < arrayNames.length; i =+ 1) {
//     console.log(`${arrayNames[i]} - ${arrayPhones[i]}`)
// }

// console.log(arrayPhones)


// 2 variant  - можем поставить 2 умови (на случай если уменьшиться одна с переменніх )


// const names = "Nasta, Olya, Sasha, Dasha";
// const phones = "0123, 1234, 2345, 123345";

// const arrayNames = names.split(",");
// const arrayPhones = phones.split(",");



// for (let i = 0; i < arrayNames.length, i < arrayPhones.length; i =+ 1) {
//     console.log(`${arrayNames[i]} - ${arrayPhones[i]}`)
// }

// console.log(arrayPhones)



// __________Новая задача ____________ -сортування рядків по першому елементові

// const langs = ["python", "java", "c++", "ruby"];

// langs.sort((a,b) => a.localeCompare(b));

// console.timeLog(langs)


// сортировка бульбашкою

//




// __________Новая задача ____________ - записати найменше число
// const numbers = [10, 5, 8, 9, 1, 3, 2];

// const min = numbers.sort((a,b) <= a-b)[0];
// console.log(min)


// const numbers = [10, 5, 8, 9, 1, 3, 2];
// const gey = numbers.split(" ")
// console.log(gey)



// function slugify(title) {
  
//   const newRow = title.toLowerCase();
//   console.log(title)
  
// }

// slugify("Arrays for begginers")




// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits[i]);
// }



// /TODO:  ===================================автоперевірка


// Автопроверка(питання чому не хоче додаватися через додавання)

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
  
// };

// apartment.owner = {
// name : "Henry",
// phone : "982-126-1588",
// email : "henry.carter@aptmail.com",
// },



// console.log(apartment)


// /TODO: 17 ===================================автоперевірка - как передати значення до ленгс - 1


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1] ;
// // Change code above this line


// console.log(lastTag)




// Автоперевірка: a ===================================можна пояснити чому 1

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for(const obj in object) {
//     if(object.hasOwnProperty(obj)) {
//     propCount += i}
//   }

//   // Change code above this line
//   return propCount;
// }

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object)
  
//   propCount = keys.length
  

//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ name: 'Mango', age: 2 }))


// ___________________________________________задача на проверку индефайнд - наличие ключа в обьекте
// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.Функція повинна повернути загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.




// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// let finalValues = []
  

//   for (let item of products) {
   
//     if (typeof item[propName] === "undefined") {
    
//       return finalValues
//     }
//       finalValues.push(item[propName])
//   }
//   return finalValues
//   }



// console.log(getAllPropValues('qweqwe'))




// Задачка  _________________________________



// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   // console.log(firstNumber); // Значення першого аргументу
//   // console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);



// Задачка Репа _________________________________додивитись 


const cart = {
  items: [],
  getItems() { return this.items; },
  add(product) {
    // перебираем масив, чтобы потом можно было увеличить количество прихода определенной фрутка в корзину (проверка на уникальность)
    console.table(this.items)


    for (const item of this.items) {
      // console.log(item)
      
      if (item.name === product.name) {

        item.quantity += 1;
        return
      //  console.log(`такой продукт уже есть в корзине ${product.name}`) 
      }
    }


    const newProduct = {
      ...product,
      quantity: 1,
      
    };
    this.items.push(newProduct)
    // console.table(newProduct)
  },
  // продакт єто ми просто так назвали параметр (из аргументов, которій пришел)
  remove(productName) {
    // меняем фор оф на фор потому что нам нужен индекс для слайса 
    for (let i = 0; i < this.items.length; i++) {

    // делаем локальную переменую для итема для обьекта, которий ми витянули с массива, потому что очень немонятно 
      // можем деструкторизировать  const {name} = this.items[i];тогда в сравненеи будет без нейм
      const item = this.items[i];

    // можем деструкторизировать  const {this} = items[i] више 
      
      console.log(item)

      if (productName === item.name) {
        console.log("нашли", productName)
        console.log("индексб", i)

        this.items.splice(i,1)
      }
    }
   },
  clear() { this.items = [] },

  countTotalPrice() { 
    console.log(this.items)

    let totalPrice = 0; 
   

    for (const item of this.items) {
      console.log(this.item) 
      totalPrice += (this.item.price * this.item.quantity)
       
    }
    return total
  },
  increaseQuntity() {},
  decreaseQuntity() { },
  getProductTotalPrice(product) {},

}

console.log(cart.getItems())


cart.add({ name: "apple", price: 50 });
cart.add({ name: "kiwi", price: 45 });
cart.add({ name: "kiwi", price: 45 });
cart.add({ name: "pineapple", price: 60 });
cart.add({ name: "pineapple", price: 60 });



console.log(cart.getItems())


console.log("total:", cart.countTotalPrice() )


cart.remove("cherry")
console.log(cart.getItems())


// cart.clear();
// console.log(cart.getItems())



const getProductTotalPrice = function ({price,quantity}) {
  
  return price * quantity
}

console.log(getProductTotalPrice(cart.items[0]))

// а было
// const getProductTotalPrice = function (product) {
  
//   return product.price * product.quantity
// }
  














 



























