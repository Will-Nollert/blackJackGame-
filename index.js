//Todo 
//Create a deck of cards for the game 
//Create a function to shuffle the deck of cards
//Make basic game board dealer and a few players
//Then add basic logic to the game

const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];
//Function to create a deck object
function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
        }
    }
    return deck;
}

//Function to shuffle the deck of cards
function shuffleDeck(deck){
    for(let i=0; i<deck.length; i++){
        let swapIdx = Math.trunc(Math.random()*deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

//log the shuffled deck
let deck = createDeck();
shuffleDeck(deck);
console.log(deck);
