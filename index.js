//Todo 
//Create a deck of cards for the game 
//Create a function to shuffle the deck of cards
//Make basic game board dealer and a few players
//Then add basic logic to the game

const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const values = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2];
//Function to create a deck object
//can use the same function to create multiple decks if I want to add the option to play with multiple decks
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
//can use the same function to shuffle multiple decks if I want to add the option to play with multiple decks
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
//console.log(deck);


//create allPlayers array
let allPlayers = [];

//create a dealer object
let dealer = {  
    name: 'Dealer',
    hand: [],
    score: 0,
}
//push the dealer to the allPlayers object
allPlayers.push(dealer);

//create a function to make a new player object     
function makePlayer(){
    let player = {
        name: "player " + (allPlayers.length),
        hand: [],
        score: 0,
    }
    //push the new player to the allPlayers object
    allPlayers.push(player);
}


//make 5 nwe players and log the allPlayers object
makePlayer();
makePlayer();
makePlayer();
makePlayer();
makePlayer();


//deal cards to the dealer and players and log the result to the console
function dealCards(){
    for(let i=0; i<2; i++){
        for(let j=0; j<allPlayers.length; j++){
            allPlayers[j].hand.push(deck.pop());
        }
    }
}
dealCards();


//create a function to calculate the score of the dealer and players
function calculateScore(){
    for(let i=0; i<allPlayers.length; i++){
        let score = 0;
        for(let j=0; j<allPlayers[i].hand.length; j++){
            let card = allPlayers[i].hand[j];
            if(card.includes('Ace')){
                score += 11;
            }else if(card.includes('King') || card.includes('Queen') || card.includes('Jack')){
                score += 10;
            }else{
                score += parseInt(card);
            }
        }
        allPlayers[i].score = score;
    }
}

calculateScore()
console.log(allPlayers);
