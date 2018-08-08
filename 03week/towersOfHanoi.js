'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//  in this Object called stacks the rows a, b ,c represent the 3 holding block for our elements to move
// in this case our elements are in order from top to bottom 1 thru 4 1 being the least 4 being the greatest
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks=()=> {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


// the move piece allows the elements from 1 to 4 to be moved from stack to stack the startstack being the block where teh element is taken and the end stack being the block where the element is added
const movePiece=(startStack, endStack)=> {
  return stacks[endStack].push(stacks[startStack].pop());node

}
// conditionals 
// in this case a move is only legal if the lowest number is stacked on top of a bigger number 
const isLegal=(startStack,endStack)=> {
  if(valueOfStack (startStack,endStack)) {
    // the .lenght -1 function alwasy targets the last element of the array in the case the stack
  const firstValue = stacks[startStack][stacks[startStack].length-1]
    const secondValue = stacks[endStack][stacks[endStack].length-1]
    // this allows the move to be legal after the comparion of the value
      if(firstValue < secondValue || stacks[endStack].length===0){
       return true
     }else{
      return false 
    }
}
}
//  there are 3 stack here are all the possible outcomes 
const valueOfStack =(startStack,endStack)=>{
  // if a is considere the start stack b and c become the obvious endstack where we no place the input at hand same for b and c
if (startStack ==='a'&& endStack==="b"|| endStack ==="c"){
  return true;
}else if( startStack ==="b" && endStack==="a"|| endStack==="c"){
return true;
} else if( startStack==="c" && endStack==="a"|| endStack==="b"){
  return true;
} else{
  return false;
}
}


// the check for win functions alerst us when all the 4 items are placed on the stack 
const checkForWin=()=> {
  if (stacks.c.length === 4){
    return true;
  }else{
    return false;
  }
}

// Parent function Main Function where the game happens
// if the move is legal then we move all the pieces then it's a win the treminal announces that the game is won.

const towersOfHanoi=(startStack, endStack) => {
  if (isLegal(startStack,endStack)){
   movePiece( startStack, endStack);
  } else{
    console.log("no Sir");
  } 
  if (checkForWin()){
    console.log (" YOU ARE A GENIUS YOU WON!!!")
    // this resets the game back to it's original structure which in  this case was the 4 elements on the first stack...
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  } 
}

const getPrompt=() => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
