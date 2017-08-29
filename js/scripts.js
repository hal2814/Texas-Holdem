//Back End


//card deck arrays- 2 arrays (suit , number)
var suitNum = [1,2,3,4];
var suit = ["Clubs","Diamonds","Hearts","Spades"];
var cardNum = [2,3,4,5,6,7,8,9,10,11,12,13,14];
// var cardNum = [2];
var face = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];


//card object
function Card(value,face,suit){
  this.value = value;
  this.face = face;
  this.suit = suit;
  this.onTable;
}

//player object
function Player(tableCards){
  this.tableCards = tableCards; //3 cards on table
  this.yourHand = []; //your 2 cards
  this.totalHand = []; //your hand + table hand
}

var cardOnTable =[];
var coordinate;
//dan
//function to compare draw if card is on table -takes Card object as arg
//returns true if card is on table, false if card has not been drawn
Card.prototype.isOnTable = function (draw) {
  cordinate = [this.value, this.suit]
  this.value

}
//   cardOnTable.length;
//   console.log(cardOnTable.length);
//   console.log(this.value);
//   // console.log(this.face);
//   console.log(this.suit);
//
//   // console.log(cardOnTable[0].value);
//
//
//   for (var i = 0; i < cardOnTable.length-1; i++) {
//     if
//     ((this.value !== cardOnTable[i].value))
//     // && (this.suit !== cardOnTable[i].suit))
//     {
//       console.log("if");
//
//       console.log(card.value);
//       console.log(cardOnTable[i].value);
//       console.log(this.suit);
//       console.log(cardOnTable[i].suit);
//       // drawNumber();
//       // drawSuit();
//       // new Card(myDrawNumberIndex,myDrawNumberIndex2,mySuitNumberIndex);
//     } else if
//     // ((currentCard.value && currentCard.suit) === (cardOnTable[i].value && cardOnTable[i].suit))
//     ((this.value === cardOnTable[i].value))
//     // && (this.suit === cardOnTable[i].suit))
//     {
//       // currentCard = new Card(myDrawNumberIndex,myDrawNumberIndex2,mySuitNumberIndex);
//       // i =0;
//       console.log("if2");
//     } else {
//       alert("isOnTable test passed");
//       return;
//     }
//   }
//
// }



//dan
//draw function - return array with 2 values (suit,number)
//requires isOnTable() function
//draw will draw 2 random numbers suit(1,4),number(2,14) if draw
//is on table then draw again. if not on table then return array of 2 numbers (suit,number)
var numMinDraw=2;
var numMaxDraw=15;
var myDrawNumber = 0;
var myDrawNumberIndex =0;
var myDrawNumberIndex2 =0;
var suitMin=1;
var suitMax=5;
var mySuitNumber =0;
var mySuitNumberIndex;
var mySuitNumberIndex2;
var generatedArray = [];
// var theCurrentDraw;
function draw(numMinDraw,numMaxDraw, suitMin,suitMax){
  // var min = Math.ceil(numMinDraw);
  // var max = Math.floor(numMaxDraw);
  myDrawNumber = Math.floor(Math.random() * (15 - 2))+ 2;
  myDrawNumberIndex = cardNum[myDrawNumber-2];
  myDrawNumberIndex2 = face[myDrawNumber-2];
  mySuitNumber = Math.floor(Math.random() *(5 - 1)+ 1);
  mySuitNumberIndex = suitNum[mySuitNumber-1];
  mySuitNumberIndex2 = suit[mySuitNumber-1];
  console.log(myDrawNumberIndex);
  console.log(mySuitNumberIndex);
  generatedArray.push([myDrawNumberIndex,mySuitNumberIndex]);
  console.log(generatedArray);

}


  // function drawNumber(numMinDraw,numMaxDraw){
  //   var min = Math.ceil(numMinDraw);
  //   var max = Math.floor(numMaxDraw);
  //   // theCurrentDraw = Math.floor(Math.random() * (15-2)+2)
  //   myDrawNumber = Math.floor(Math.random() * (15 - 2))+ 2;
  //   myDrawNumberIndex = cardNum[myDrawNumber-2];
  //   myDrawNumberIndex2 = face[myDrawNumber-2];

  // var suitMin=1;
  // var suitMax=5;
  // var mySuitNumber =0;
  // var mySuitNumberIndex;
  // var mySuitNumberIndex2;
  // function drawSuit(suitMin,suitMax) {
    // mySuitNumber = Math.floor(Math.random() *(5 - 1)+ 1);
    // mySuitNumberIndex = suitNum[mySuitNumber-1];
    // mySuitNumberIndex2 = suit[mySuitNumber-1];
  // }





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
//dan
//document ready
var random;
var theDraw1 = 0;
var currentCard;
$(document).ready(function() {
  $("#theButton").click(function() {



    draw(numMinDraw,numMaxDraw, suitMin,suitMax);

    currentCard = new Card(myDrawNumberIndex, myDrawNumberIndex2,mySuitNumberIndex);
    console.log(currentCard);
    currentCard.isOnTable();

    cardOnTable.push(currentCard);
    console.log(cardOnTable);

  });
});


//nate
//draw button click- draw cards first for player, then draw cards for table

//dan
//bet button click- continue to see cards on table (show flop, show river)
