'use strict'
// Teams of 2/3
// - Each team member will
// create a branch off of gh-pages called gitOlympics
// create a new file called gitOlympics.js in 04week/
// in gitOlympics.js
// ‘use strict’ at the top
// create a function called printListOfOlympians 
// the function should accept an array and use a forEach to console.log() every item in the array
// call the function with a test array of at least 5 names
// Commit at least 3 times
// Push to github, create a pull request
// the PR must be clean, the only file changed should be gitOlympics.js
// When everyone has an open pull request raise your hand for a check
// The first team with all pull requests merged/closed - wins

// Function inside of a Function
const printListOfOlympians =(inputArr)=> {
  inputArr.forEach =((item)=>{
    console.log (item);
  });
}
const names =["michaelPhelps", "yousinVualt","muhamedAli","Zeus","Jake"]
printListOfOlympias (names);