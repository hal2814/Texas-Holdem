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
//arrays hold card objects
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

Card.prototype.cardValueArr = function () {
  var totalHandValues = [];
	for(var i =0;i<this.totalHand.length;++i){
  	totalHandValues.push(this.totalHand[i].whatValue());
  }
  return totalHandValues;
};

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
//draw will draw 2 random numbers suit(1,4),number(2,14) ---if draw
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
//displays the picture of card takes array as arg with 2 ints (suit,cardNumber)
function displayCard(suitAndNumber,displayTo){
  var suit = suitAndNumber[0];
  var num = suitAndNumber[1];
  $("#"+displayTo).append("<img src='img/'"+suit+"_"+num+">");
}

//checks if input values (array of suit/num), match a card object that exists already
//returns true if card matches, false if it does not
Card.prototype.checkForTableCard = function (draw) {
  var suitNum = draw[0];
  var cardNum = draw[1];
  if(suitNum === this.suit && cardNum === this.value){
    return true;
  }else{
    return false;
  }
};

//nate
//create card object, display, push to array in player object
//requires draw() function, and displayCard() function
//array gets the value of member of Player object
Player.prototype.putCardOnTable = function (suitAndNumber,displayTo,array) {
  var suitNum = suitAndNumber[0];
  var cardNum = suitAndNumber[1];
  var faceString = face[atIndex(cardNum)];
  for(var i=0;i<this.array.length;++i){
    if(!this.array[i].checkForTableCard(suitAndNumber)){
      var newCard = new Card(cardNum,faceString,suitNum);
      array.push(newCard);
      displayCard(suitAndNumber,displayTo);
      return true;
    }else{
      return false;
    }
  };
}


//winning condition (example: 2 pair)
function winning(player){

}


//used to count items in the array (aka see how many times a certain card appears in an array for pair, 3 of a kind, etc.)
function countInArray(array, item) {
    var count = 0;
    for (var i = 0; i < array.length; ++i) {
        if (array[i] === item) {
            count +=1;
        }
    }
    return count;
}
//functions needed for winning() function:
//need 2 value outputs: priority, card values
//all winning conditions return value based on priority, and output a phrase (example: "You have 2 pair")

//by difficulty

//Holdem hand ranking values:
//High Card - 1
//Pair - 2
//2 Pair - 3
//3 of a kind - 4
//Strait - 5
//Flush - 6
//Full House - 7
//4 of a kind - 8
//Strait Flush - 9
//Royal Flush - 10


//mike
//2 pair-easy
// Player.prototype.twoPair = function () {
//   var myPair=0;
//   for (var i=0, i<this.totalHand.length; i+=1) {
//     if (totalHand[i]===totalHand[i+1]) {
//       myPair +=1;
//     }
//     if (myPair ===1) {
//       return 1;
//     }
//   }
// }

//3 of a kind-easy (or pair/three/four of a kind) returns priority value as an integer
//returns a 0 if none of these conditions are found
Player.prototype.matchArray = function () {
  var cardCount = 0;
  var matchArray =[];
  var totalHandValues = this.totalHand.cardValueArr();
  for(var i=0;i<totalHandValues.length;++i){
    cardCount = countInArray(totalHandValues,totalHandValues[i]);
    if(cardCount >1){
      matchArray.push(cardCount);
    }
  }
  return matchArray.sort();
};

function cmpArr(compare1, compare2) {
  var c1 = compare1.join();
  var c2 = compare2.join();
	if(c1 === c2 ){
    return true;
  }else{
    return false;
	}
}
//takes matchArray function as arg
Player.prototype.matchVictory= function (match) {
  var isMatch = matchArray(match);
  isMatch.sort();
  if(cmpArr(isMatch,[4,4,4,4])){
    return 8;//four of a kind
  }else if(cmpArr(isMatch,[2,2,3,3,3])){
    return 7;//full house
  }else if(cmpArr(isMatch,[3,3,3])){
    return 4;//3 of a kind
  }else if(cmpArr(isMatch,[2,2,2,2])){
    return 3;//two pair
  }else if(cmpArr(isMatch,[2,2])){
    return 2;//one pair
  }else{
    return 0;
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
