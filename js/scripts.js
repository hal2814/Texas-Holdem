//Back End


//card deck arrays- 2 arrays (suit , number)
var suitNum = [1,2,3,4];
var suit = ["Clubs","Diamonds","Hearts","Spades"];
var cardNum = [2,3,4,5,6,7,8,9,10,11,12,13,14];
var face = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];


//card object
function Card(value,face,suit){
  this.value = value;
  this.face = face;
  this.suit = suit;
}

//player object
function Player(tableCards){
  this.tableCards = tableCards; //3 cards on table
  this.yourHand = []; //your 2 cards
  this.totalHand = []; //your hand + table hand
}

//dan
//function to compare draw if card is on table -takes Card object as arg
//returns true if card is on table, false if card has not been drawn
function isOnTable(card){

}

//dan
//draw function - return array with 2 values (suit,number)
//requires isOnTable() function
//draw will draw 2 random numbers suit(1,4),number(2,14) if draw
//is on table then draw again. if not on table then return array of 2 numbers (suit,number)
function draw(){

}

//nate
//displays the picture of card
function displayCard(){

}

//nate
//create card object, display, push to array
//requires draw() function, and displayCard() function
function putCardOnTable(){

}


//winning condition (example: 2 pair)
function winning(player){

}


//functions needed for winning() function:
//need 2 value outputs: priority, card values
//all winning conditions return value based on priority, and output a phrase (example: "You have 2 pair")

//by difficulty

//mike
//pair-easy

//mike
//2 pair-easy

//3 of a kind-easy

//4 of a kind-easy

//mike
//flush-medium

//strait-hard

//royal flush-hard

//strait flush-hard

//full house-medium

//high card-medium


//Front End

//document ready

//nate
//draw button click- draw cards first for player, then draw cards for table

//dan
//bet button click- continue to see cards on table (show flop, show river)
