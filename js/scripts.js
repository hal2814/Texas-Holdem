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

//return suit value
Card.prototype.whatSuit = function() {
  return this.suit;
}

Card.prototype.whatValue = function() {
  return this.value;
}

//return card value


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
// var numMinDraw=2;
// var numMaxDraw=15;

function draw(){

  var myDrawNumber = Math.floor(Math.random() * (15 - 2))+ 2;
  var myDrawNumberIndex = cardNum[myDrawNumber-2];
  var mySuitNumber = Math.floor(Math.random() *(5 - 1)+ 1);
  var mySuitNumberIndex = suitNum[mySuitNumber-1];
  var generatedArray = [mySuitNumberIndex,myDrawNumberIndex];
  // console.log(generatedArray);
  return generatedArray;
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
Player.prototype.twoPair = function () {
  var myPair=0;
  for (var i=0, i<this.totalHand.length; i+=1) {
    if (totalHand[i]===totalHand[i+1]) {
      myPair +=1;
    }
    if (myPair ===1) {
      return 1;
    }
  }
}

//3 of a kind-easy
Player.prototype.twoThreeFour = function () {
  var currentCard;
  var cardsThatMatchCount = 1;
  for(var i=0;i<this.totalHand.length;++i){
    currentCard = this.totalHand[i];
    for(var j=0;j<this.totalHand.length;++j){
      if(currentCard === this.totalHand[j] && j!==i){
        cardsThatMatchCount +=1;
      }
    }
  }
  //needs to differentiate bewteen 2 pair, and 4 of the same
  if(cardsThatMatchCount ===4){
    return 8;
    //alert("Four of a kind");
  }else if(cardsThatMatchCount===3){
    return 4;
    //alert("Three of a kind");
  }else if(cardsThatMatchCount===2){
    return 2;
    //alert("Pair")
  }
};

//mike
//flush-medium

//strait-hard
Player.prototype.strait = function () {
  var isStrait = 0;
  for(var i =0; i<totalHand.length-1;++i){
    if((totalHand[i]-totalHand[i+1]) ===1){
      isStrait +=1;
    }
  }
  if(isStrait >= 5){
    return 5
    //alert("Strait")
  }
};

//royal flush-medium-dan
Player.prototype.royalFlush = function() {
  for (var i = 0; i < totalHand.length-1; i++) {
    var isStrait =0;
    var isSuit =0;
    if ((totalHand[i].whatValue()=10) && (totalHand[i+1] - totalHand[i] === 1)) {
      isStrait +=1;
      isSuit += totalHand[i].whatSuit();
    }
    if((isStrait >= 5) && (isSuit/5) ===totalHand[i].whatSuit()){
      return 10
    }

  }
}

//strait flush-hard
Player.prototype.straitFlush = function () {
  var isStrait = 0;
  var isSuit = 0;
  for(var i =0; i<totalHand.length-1;++i){
    if((totalHand[i]-totalHand[i+1]) ===1){
      isStrait +=1;
      isSuit += totalHand[i].whatSuit();
    }
    if((isStrait >= 5) && (isSuit/5) ===totalHand[i].whatSuit()){
      return 5
      //alert("Strait")
    }
  }
};


// //full house-medium
// Player.prototype.twoThreeFour = function () {
//   var currentCard;
//   var cardsThatMatch = [];
//   for(var i=0;i<this.totalHand.length;++i){
//     currentCard = this.totalHand[i];
//     for(var j=0;j<this.totalHand.length;++j){
//       if(currentCard === this.totalHand[j] && j!==i){
//         var cardsThatMatch+i.push(this.totalHand[j]);
//       }
//     }
//   }
//   //needs to differentiate bewteen 2 pair, and 4 of the same
//   if(cardsThatMatch){
//     return 8;
//     //alert("Four of a kind");
//   }else if(cardsThatMatchCount===3){
//     return 4;
//     //alert("Three of a kind");
//   }else if(cardsThatMatchCount===2){
//     return 2;
//     //alert("Pair")
//   }
// };


//high card-medium
Player.prototype.highCard= function () {
  var justValues = [];
  for(var i = 0;i<this.totalHand.length;++i){
    justValues.push(this.totalHand[i].whatValue());
  }
  justValues.sort();

  alert("high card is " +justValues[justValues.length-1])
  return justValues[justValues.length-1];
};


//Front End
//dan
//document ready
var random;
var theDraw1 = 0;
var currentCard;
$(document).ready(function() {
  $("#theButton").click(function() {



    draw();
    console.log(draw());
    // // currentCard = new Card(myDrawNumberIndex, myDrawNumberIndex2,mySuitNumberIndex);
    // console.log(currentCard);
    // currentCard.isOnTable();
    //
    // cardOnTable.push(currentCard);
    // console.log(cardOnTable);

  });
});


//nate
//draw button click- draw cards first for player, then draw cards for table

//dan
//bet button click- continue to see cards on table (show flop, show river)
