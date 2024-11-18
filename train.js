console.log('train tasks are set up!');

function countLetter(letter, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        count++;
      }
    }
    return count;
  }
  
  const result = countLetter("m", "mit");
  console.log(result); // bu caseda for loopdan foydalanildi va osha logika orkali "MIT" sozida har bir qiymat orqali tekshirilb qiymat olindi!


  //--------------------------------------------------------------------------------------------------------------
  // Second case of the task:

  function countLetter1(letter, word) {
    // Base case: if the word is empty, return 0
    if (word === "") {
      return 0;
    }
    
    // Check if the first character matches the letter
    if (word[0] === letter) {
      return 1 + countLetter1(letter, word.slice(1));  
    } else {
      return countLetter1(letter, word.slice(1));  
    }
  }
  
  const result1 = countLetter1("e", "engineer");
  console.log(result1); 
  // bu yechimda esa if/else condition va slice biriktirilgan holatda so'z ichidagi qiymatlarni index boyicha qidirib qiymat olinadi!