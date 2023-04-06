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
  split,
  suits,
  values,
  allPlayers,
  dealer,
  testUser, 
  deck
} from "./utils.js";

// TEST SUITE ;)

//create a function for basic game flow
function startGame(){
  let deck = createDeck();
  shuffleDeck(deck);
  allPlayers.push(dealer);
  makePlayer();
  dealCards();
  checkBlackjack();
  calculateScore();
  console.log(allPlayers)
}

startGame();

/* allPlayers.push(testUser);
checkBlackjack();
hit(allPlayers[1]);
split(allPlayers[6]);
hitSplitHand(allPlayers[6]);
calculateSplitScore();
calculateScore();
checkBlackjack();
console.log(allPlayers, "line 244");
 */
