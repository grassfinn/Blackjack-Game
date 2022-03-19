// blackjack
// starting variables
let hasBlackJack = false;
let isAlive = false;
let message = '';
const messageEl = document.querySelector('#message-el');
const sumEl = document.querySelector('#sum-el');
const cardsEl = document.querySelector('#cards-el');


let player = {
  name: 'Andrew',
  chips: 145
}
let playerEl = document.querySelector('#player-el')

playerEl.textContent = player.name + ': $' + player.chips

let cards = [];
let sum = 0;

function randomCard() {
  // give random numbers between 2-11 for cards
  let min = 2;
  let max = 12;
  // Math.floor() removes decimals from Math.random()
  //Math.random() gives a random # from 0 - 1
  return Math.floor(Math.random() * (max - min)) + min;
}


function startGame() {
  // setting variables for game
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  
  // console.log('The first card is', firstCard);
  // console.log('The the second card is', secondCard);
  
  // give two cards at the beginning of the game
  cards = [firstCard, secondCard];
  
  // add the cards
  sum = firstCard + secondCard;
  // console.log('Your total is', sum);

  renderGame();
}

function renderGame() {
  // if cards < 21 HIT
  sumEl.textContent = 'Sum: ' + sum;
  // render firstCard and SecondCard
  cardsEl.textContent = 'Cards: ';

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }
  //  render out All of the cards
  if (sum < 21) {
    message = 'Do you want to hit?';
    hasBlackJack = false
  }
  // if cards === 21 WIN
  else if (sum === 21) {
    message = 'You win!';
    hasBlackJack = true;
    isAlive = false
  }
  // if cards > 21 LOSE
  else {
    message = 'You lose!';
    isAlive = false;
  }
  // CASH OUT!
  messageEl.textContent = message;
}

const startGameEl = document.querySelector('#start');
startGameEl.addEventListener('click', () => startGame());

// hit mechanic
function hitMe() {
  if (isAlive === true && hasBlackJack === false) {
    const hit = randomCard();

    sum += hit;

    cards.push(hit);

    renderGame();
  }
}

const newCard = document.querySelector('#new-card');
newCard.addEventListener('click', () => hitMe());

// TODO
/*
add ace option to add 1 or 11
add betting mechanic
add card images
let play choose name

add playing against the house
*/