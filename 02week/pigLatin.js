'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

//  PIG LATIN
// writting a Game where the user inputs a value that contains letters where if the word begins with
// 1 consonant that letter is moved to the end of the word and the letter ay( the string "ay") is added to the actual letter such as pig would be igpay
// if a word begins with two consonants both letters are moved to the end and the string ay is appended to the actual word example grade adegray
// if a word begins with a vowel the letter remains in place and the srting way is appended to the actual word example apple appleway

// The users input is valid when they write words with the 26 letters of the alphabet.
// the users input will the be tranformed into an array (the array process is used to detached the letters and moved them)
// we will be looping thru the words and removing letter till they begin with a voyel
// the split and join methods are used to split and join the elements of an array
// the voyels are [a,e,i,o,u,y]
// const voyels= ['a','e','i','o','y']
// // (!voyels) would be for my consonants

// write a function that takes the valid input that contains only letters blocks out numbers and other strange chararcter

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
const letters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

const mainMethod =(word) => {
  let l = lettersOnly(word);
  if(l === false)
  {
    return "Please Enter letters Only";
  } 
  return latinizedWord(word);

}
const latinizedWord =(word)=>{
  //  let wordArr = word.split("");
  let firstSection = "";
  let secondSection = "";

  if(vowels.indexOf(word[0]) < 0) //the word starts with a consonant do this 
  {
    for (let i = 0; i < word.length; i++) {
		  if (vowels.indexOf(word[i]) > -1) {
			
        firstSection = word.substring(0,i)
        secondSection = word.substring(i)
        break;
      
	  	}
    }
  
    return secondSection+firstSection+ "ay"
  } else{ 
  return word + "way"
  }
}
const lettersOnly = (word) => {
	let letterChecker = 0;

	for (let i = 0; i < word.length; i++) {
		if (letters.indexOf(word[i]) > -1) {
			letterChecker = letterChecker + 1;
      
		}
  }
    
		if (letterChecker === word.length) {
			return true;
		} else {
			return false;
		}
	
};


mainMethod("eloquent"); // Your code here

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
