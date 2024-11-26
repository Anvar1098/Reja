// console.log('train tasks are set up!');

// function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   const result = countLetter("m", "mit");
//   console.log(result); // bu caseda for loopdan foydalanildi va osha logika orkali "MIT" sozida har bir qiymat orqali tekshirilb qiymat olindi!


  //--------------------------------------------------------------------------------------------------------------
  // Second case of the task:

  // function countLetter1(letter, word) {
  //   // Base case: if the word is empty, return 0
  //   if (word === "") {
  //     return 0;
  //   }
    
  //   // Check if the first character matches the letter
  //   if (word[0] === letter) {
  //     return 1 + countLetter1(letter, word.slice(1));  
  //   } else {
  //     return countLetter1(letter, word.slice(1));  
  //   }
  // }
  
  // const result1 = countLetter1("e", "engineer");
  // console.log(result1); 
  // bu yechimda esa if/else condition va slice biriktirilgan holatda so'z ichidagi qiymatlarni index boyicha qidirib qiymat olinadi!

//-----------------------------------------------------------------------------------------------------------------

  // 21 (NodeJS eventloop and Callback function)
// console.log('Jack Ma maslahatlari');
// const list = [
//   'yahshi talaba boling',
//   'togri boshliq tanlang va koproq xato qiling',
//   'uzingizga ishlashni boshlang',
//   'siz kuchli bolgan narsani qiling',
//   'endi dam oling, foydasi yuk',
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !=='number') callback('insert a number', null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <=30) callback(null, list[1]);
//   else if (a > 30 && a <=40) callback(null, list[2]);
//   else if (a > 40 && a <=50) callback(null, list[3]);
//   else if (a > 50 && a <=60) callback(null, list[4]);
//   else {
//     callback(null, list[5])
    /*
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
    */
  //}
//}

// maslahatBering(10, (err, data) => {
//  if (err) console.log('ERROR:', err);
//  console.log('javob:', data);
// });

/*
console.log('passed here 0');
maslahatBering(65, (err, data) => {
if (err) console.log('ERROR:', err);
else {
  console.log("javob:", data);
}
});
console.log('passed here 1');
*/

//------------------------------------------------------------------------------------------------------------

// 22 (Asynchronus function)

// async function maslahatBering(a)  {
//   if (typeof a !=='number') throw new Error('insert a number');
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list [1];
//   else if (a > 30 && a <= 40) return list [2];
//   else if (a > 40 && a <= 50) return list [3];
//   else if (a > 50 && a <= 60) return list [4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// console.log('passed here 0');
// maslahatBering(20)
//  .then((data) => {
//    console.log("javob:", data);
//  })
//  .catch((err) => {
//    console.log('ERROR:', err);
//  });
//  console.log('passed here 1');

//asyn/ await
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

//--------------------------------------------------------------------------------------------------------------------------------------

// B task :

// function countDigits(myString) {    // function qurib olamiz parametrga myString pass qilamiz
//   const characters = myString.split('');  // yangi variable ga tenglab olamiz
//   const digits = characters.filter(char => !isNaN(char) && char !== ' ');  // characters.filter qilib fakat raqamlar qatnashgan elementlarni filter qilib beradi!
//   return digits.length;
// }

// console.log(countDigits("qw12er45ty67o9")); 

// //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function countDigits(myString) {
//   let count = 0;
//   for (let char of myString) {
//     if (!isNaN(char) && char !== ' ') {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("qw12er45ty67o9")); 

//-----------------------------------------------------------------------------------------------------------

// MIT task 
const moment = require("moment");

class Shop {
  // state
  non;
  lagmon;
  coke;
  
 // constructor
 constructor(non, lagmon, coke) {
   this.non = non;
   this.lagmon = lagmon;
   this.coke = coke;
 }
 

 // method
 qoldiq() {
  console.log(`${moment().format('HH:mm')}, ${this.non} non, ${this.lagmon} lagmon va ${this.coke} coke mavjud! `);
 }

 sotish(count) {
   if (this.non > count) {
    this.non -= count;
    console.log(`${moment().format('HH:mm')}, ${count} ta non sotildi va qoldi ${this.non} non `);
   }
   } 

  qabul(add) {
    this.coke += add;
    console.log(`${moment().format('HH:mm')}, ${add} ta coke qoshildi, va  ${this.coke} coke boldi `);
  }

 }


const shop = new Shop (4, 5, 2);
shop.qoldiq(); 
shop.sotish(3);
shop.qabul(4);







