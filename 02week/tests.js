'use strict';
// i will
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sanitizeInput(input) {
  return input.toLowerCase().trim();
}

// ready ready
function rockPaperScissors(hand1, hand2) {

  // ROCK scissors PAPER
  // 2 player game where each player's input is compared to one another and the value of their input determines who wins
  //in the game rock is > then scissors but < paper
  //paper is > rock but, sciccors
  //   sciccors is > paper but <rock
  // User1 input of ['rock', 'paper' , 'scissors'.]
  // User2 input of ['rock', 'paper', or 'scissors'.]
  // Compare User1 input to User2 input.

  // let user1 = prompt ("Player numero1 rock, paper, scissors");
  // let user2 = prompt ("Player numero2 rock, paper, scissors");

  const user1 = sanitizeInput(hand1)
  const user2 = sanitizeInput(hand2)

  // const rockPaperMaster = () => {
  if (user1 === 'rock' && user2 === 'scissors' || user1 === 'paper' && user2 === 'rock' || user1 === 'scissors' && user2 === 'paper') {
    return "Hand one wins!"
  } else if (user1 === 'rock' && user2 === 'paper' || user1 === 'paper' && user2 === 'scissors' || user1 === 'scissors' && user2 === 'rock') {
    return "Hand two wins!"
  } else if (user1 === user2) {
    return "It's a Tie!"
  } else {
    console.log("Please use rock, scissors or paper")
  }
  //
  // rockPaperMaster();



}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

/* ALL HAND1 WINS */
// rock, scissors
// paper, rock
// scissors, paper

/* ALL HAND2 WINS */
// scissors, rock
// paper, scissors
// rock, paper

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a Tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a Tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a Tie!");
    });
    it('should detect hand 1 wins', () => {
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should detect hand 2 wins', () => {
      assert.equal(rockPaperScissors('rocK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors ', 'rock'), "Hand two wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace'), () => {
      assert.equal(rockPaperScissors('rocK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors ', 'rock'), "Hand two wins!");
    };
  });
  
} else {

  getPrompt();

}