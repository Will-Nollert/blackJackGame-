//CONSTANTS
export const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
export const values = ["Ace", "King", "Queen", "Jack", 10, 9, 8, 7, 6, 5, 4, 3, 2];
export let allPlayers = [];
export let deck = [];
export let dealer = {
  name: "Dealer",
  hand: [],
  splitHand: [],
  score: 0,
};
export let testUser = {
    name: "testUser",
    hand: ["King of Spades", "King of Diamonds"],
    splitHand: [],
    score: 0,
  };

  /* Example Objs */
/* {
    name: 'Dealer',
    hand: [ '4 of Hearts', '9 of Diamonds' ],
    splitHand: [],
    score: 13,
    splitScore: 0
  } 
  ....
    {
    name: 'testUser',
    hand: [ '5 of Hearts', '5 of Clubs', 'King of Spades', '5 of Diamonds' ],
    score: 25,
    splitHand: [ '9 of Spades', 'Queen of Diamonds', '4 of Diamonds' ],
    splitScore: 23
  } */


//Function to create a deck object
//can use the same function to create multiple decks if I want to add the option to play with multiple decks
export function createDeck() {
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
      for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        deck.push(values[valueIdx] + " of " + suits[suitIdx]);
      }
    }
    return deck;
  }
  
  //Function to shuffle the deck of cards
  //can use the same function to shuffle multiple decks if I want to add the option to play with multiple decks
  export function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      let swapIdx = Math.trunc(Math.random() * deck.length);
      let tmp = deck[swapIdx];
      deck[swapIdx] = deck[i];
      deck[i] = tmp;
    }
  }
  
  //create a function to make a new player object
   export function makePlayer() {
    let player = {
      name: "player " + allPlayers.length,
      hand: [],
      splitHand: [],
      score: 0,
    };
    //push the new player to the allPlayers object
    allPlayers.push(player);
  }
  
  //deal cards to the dealer and players and log the result to the console
   export function dealCards() {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < allPlayers.length; j++) {
        //wrap the deck.pop() in a conditional to check if the player name is testUser
        if (allPlayers[j].name !== "testUser") {
          allPlayers[j].hand.push(deck.pop());
        } else {
          return;
        }
      }
    }
  }
  
  //create a function to calculate the score of the dealer and players
 export  function calculateScore() {
    for (let i = 0; i < allPlayers.length; i++) {
      let score = 0;
      for (let j = 0; j < allPlayers[i].hand.length; j++) {
        let card = allPlayers[i].hand[j];
        if (card.includes("Ace")) {
          //include logic to check if the ace should be 1 or 11
          //if the score is over 21 then the ace should be 1
          //if the score is under 21 then the ace should be 11
          if (score > 11) {
            score += 1;
          } else if (score < 11) {
            score += 11;
          }
        } else if (
          card.includes("King") ||
          card.includes("Queen") ||
          card.includes("Jack")
        ) {
          score += 10;
        } else {
          score += parseInt(card);
        }
      }
      allPlayers[i].score = score;
      if (score > 21) {
        console.log(allPlayers[i].name + " has busted!", "line 79");
      }
    }
  }
  
  //write a function to calculate the score of the split hand
 export  function calculateSplitScore() {
    for (let i = 0; i < allPlayers.length; i++) {
      let score = 0;
      for (let j = 0; j < allPlayers[i].splitHand.length; j++) {
        let card = allPlayers[i].splitHand[j];
        if (card.includes("Ace")) {
          if (score > 11) {
            score += 1;
          } else if (score < 11) {
            score += 11;
          }
        } else if (
          card.includes("King") ||
          card.includes("Queen") ||
          card.includes("Jack")
        ) {
          score += 10;
        } else {
          score += parseInt(card);
        }
      }
      allPlayers[i].splitScore = score;
      if (score > 21) {
        console.log(allPlayers[i].name + "'s split hand has busted!", "line 104");
      }
    }
  }
  
  //write a function to check if the dealer or any of the players have blackjack
 export  function checkBlackjack() {
    for (let i = 0; i < allPlayers.length; i++) {
      if (allPlayers[i].score === 21) {
        console.log(allPlayers[i].name + " has blackjack!");
      }
    }
  }
  
  //create a function for a specefic player to hit
 export  function hit(player) {
    player.hand.push(deck.pop());
    calculateScore();
  }
  
  //create a function to hit a players split hand
 export function hitSplitHand(player) {
    player.splitHand.push(deck.pop());
    calculateScore();
  }
  
  //create a function for a specefic player to stand
  export function stand(player) {
    return;
  }
  
  //create a function for a specefic player to double down
  export function doubleDown(player) {
    player.hand.push(deck.pop());
    calculateScore();
    stand(player);
  }
  
  //create a function for a specefic player to split
  export function split(player) {
    const playerCard1 = player.hand[0];
    const playerCard2 = player.hand[1];
    const card1Name = playerCard1.split(" ")[0];
    const card2Name = playerCard2.split(" ")[0];
  // If name or int val of the cards is the same allow split (i.e "king" === "king" || 10 === 10)
    if (card1Name === card2Name || parseInt(player.hand[0]) == parseInt(player.hand[1])){
      //logic to split the hand
      player.splitHand = [player.hand.pop()];
      player.splitScore = 0;
      //logic to calculate the score of the split hand
      let score = 0;
      for (let j = 0; j < player.splitHand.length; j++) {
        let card = player.splitHand[j];
        if (card.includes("Ace")) {
          if (score > 11) {
            score += 1;
          } else if (score < 11) {
            score += 11;
          }
        } else if (
          card.includes("King") ||
          card.includes("Queen") ||
          card.includes("Jack")
        ) {
          score += 10;
        } else {
          score += parseInt(card);
        }
      }
      player.splitScore = score;
      //hit both hands
      hit(player);
      player.splitHand.push(deck.pop());
      calculateScore();
  
      if (score > 21) {
        console.log(player.name + " has busted!", "line 180");
      }
    } else {
      console.log("you can't split");
      console.log(player.hand[0] === player.hand[1]);
      return;
    }
    calculateScore();
  }
