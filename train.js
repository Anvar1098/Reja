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
// const moment = require("moment");

// class Shop {
//   // state
//   non;
//   lagmon;
//   coke;
  
//  // constructor
//  constructor(non, lagmon, coke) {
//    this.non = non;
//    this.lagmon = lagmon;
//    this.coke = coke;
//  }
 

//  // method
//  qoldiq() {
//   console.log(`${moment().format('HH:mm')}, ${this.non} non, ${this.lagmon} lagmon va ${this.coke} coke mavjud! `);
//  }

//  sotish(count) {
//    if (this.non > count) {
//     this.non -= count;
//     console.log(`${moment().format('HH:mm')}, ${count} ta non sotildi va qoldi ${this.non} non `);
//    }
//    } 

//   qabul(add) {
//     this.coke += add;
//     console.log(`${moment().format('HH:mm')}, ${add} ta coke qoshildi, va  ${this.coke} coke boldi `);
//   }

//  }


// const shop = new Shop (4, 5, 2);
// shop.qoldiq(); 
// shop.sotish(3);
// shop.qabul(4);


//---------------------------------------------------------------------------------------------------------------

// Task:

// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false; 
//   } else {
//     let count = 0; 
//     for (let b = str1.length - 1; b >= 0; b--) {
//       let index = str2.indexOf(str1[b]);
//       if (index !== -1) {
//         count++;
//         str2 = str2.slice(0, index) + str2.slice(index + 1);
//       } else {
//         return false;
//       }
//     }
//     return count === str1.length;
//   }
// }

// console.log(checkContent("mitgroup", "gmtiprou")); 
// console.log(checkContent("abc", "abd"));   
// console.log(checkContent("seul", "seoul")); 

//--------------------------------------------------------------------------------------------------------

// Task

// function getReverse(str) {
//   return str.split('').reverse().join('');
// }

// console.log(getReverse("hello"));
// console.log(getReverse("MIT"));
// console.log(getReverse("21"));

//-----------------------------------------------------------------------------------------------------------------

// Task

// const findDoublers = (str) => {
//   for (let i = 0; i < str.length; i++) {
      
//       if (str.indexOf(str[i]) !== i) {
//           return true; 
//       }
//   }
//   return false; 
// };

// console.log(findDoublers("anvar"));

//----------------------------------------------------------------------------------------------------------------

// Task

// function getHighestIndex(array) {
//   let max = -Infinity; // Eng kichik integerdan check qiladi
//   let maxIndex = -1;    

//   for (let i = 0; i < array.length; i++) {
//       if (array[i] !== max && array[i] > max) {
//           max = array[i];
//           maxIndex = i;
//       }
      
//   }

//   return maxIndex; 
// }


// console.log(getHighestIndex([5, 21, 12, 21, 8])); 
// console.log(getHighestIndex([3, 5, 7, 10]));      
// console.log(getHighestIndex([10, 10, 10, 10]));   
// console.log(getHighestIndex([0]));                
// console.log(getHighestIndex([-1, -2, -3, -4]));   




