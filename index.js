
import {
  createDeck,
  shuffleDeck,
  makePlayer,
  dealCards,
  calculateScore,
  calculateSplitScore,
  checkBlackjack,
  hit,
  stand,
  hitSplitHand,
  doubleDown,
  playerPlayATurn,
  split,
  suits,
  values,
  allPlayers,
  dealer,
  testUser,
  deck,
  showAllCards,
} from "./utils.js";

//create a function for basic game flow
function startGame() {
  let deck = createDeck();
  shuffleDeck(deck);
  allPlayers.push(dealer);
  makePlayer();
  dealCards();
  checkBlackjack();
  calculateScore();
  showAllCards();
  playerPlayATurn();
}

startGame();

