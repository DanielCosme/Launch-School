const readline = require('readline-sync');

const baseDeck = { two: 2, three: 3, four: 4, five: 5, six: 6, 
  ace : 11, };

let deck = initializeDeck();
let playerCards = dealCards();
let dealerCards = dealCards();
let playerSum = baseDeck[playerCards[0]] + baseDeck[playerCards[1]];
let dealerSum = baseDeck[dealerCards[0]] + baseDeck[dealerCards[1]];

console.log(`Dealer has: ${dealerCards[0]} and unknown`);
console.log(`You have: ${playerCards[0]} and ${playerCards[1]}`);

while (true) {
  console.log("hit or stay?");

  let busted = false;
  let answer = readline.question();

  if (answer === 'stay') break;
  else { 
    console.log(`You get ${hit('p')}`);
  }

  if (isBusted(playerSum)){
    console.log("BUSTED Dealer Wins");
    console.log(`Player: ${playerCards}, Dealer: ${dealerCards}`);
    process.exit();
    break;
  }
}

while (true) {
  if (dealerSum > 17) break;
  hit(); 
  if (isBusted(dealerSum)) {
    console.log("BUSTED Player Wins");
    console.log(`Player: ${playerCards}, Dealer: ${dealerCards}`);
    process.exit();
  }
}

let winner = dealerSum >= playerSum ? 'Dealer' : 'Player';
console.log("The winner is: " + winner);
console.log(`Player: ${playerCards}, Dealer: ${dealerCards}`);

// ------- Functions ------- // 

function isBusted(sum) {
  return sum > 21
}

function hit(p) {
  let ret = '';

  if (p === 'p') {
    playerCards.push(pickCard());
    ret = playerCards[playerCards.length - 1]; 
    if (ret === 'ace' && playerSum > 21 ) playerSum -= 10;
    playerSum += baseDeck[ret];
  }
  else {
    dealerCards.push(pickCard());
    ret = dealerCards[dealerCards.length - 1]; 
    if (ret === 'ace' && dealerSum > 21 ) playerSum -= 10;
    dealerSum += baseDeck[ret];
  }

  return ret;
}

function pickCard() {
  return deck.pop();
}

function initializeDeck() {
  const fullDeck = [];
  const keys = Object.keys(baseDeck);

  for (let i = 0; i < 4 ; i++) {
    keys.forEach((key) => {
      fullDeck.push(key);
    })
  }
  
  shuffle(fullDeck); 
  return fullDeck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; 
  }
}

function dealCards() {
  return [pickCard(), pickCard()];
}

