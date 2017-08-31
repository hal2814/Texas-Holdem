//Back End


//card deck arrays- 2 arrays (suit , number)
var suitNum = [1,2,3,4];
// var suitNum = [1,2];
var suit = ["Clubs","Diamonds","Hearts","Spades"];
var cardNum = [2,3,4,5,6,7,8,9,10,11,12,13,14];
// var cardNum = [2,3,4,5,6,7,8];
var face = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];


//card object
function Card(value,suit){
  this.value = value;
  //this.face = face;
  this.suit = suit;
}

//player object
//arrays hold card objects
function Player(){
  this.tableCards = []; //3 cards on table
  this.yourHand = []; //your 2 cards
  this.totalHand = []; //your hand + table hand
}

//return suit value
Card.prototype.whatSuit = function() {
  return this.suit;
}

//return card value
Card.prototype.whatValue = function() {
  return this.value;
}

//turns array of cards into array of values
function cardValueArr(array) {
  var totalHandValues = [];
	for(var i =0;i<array.length;++i){
  	totalHandValues.push(array[i].whatValue());
  }
  return totalHandValues;
};

function suitValueArr(array) {
  var totalHandSuits = [];
  for(var i=0; i<array.length; ++i) {
    totalHandSuits.push(array[i].whatSuit());
  }
}

//if function(arg) returns false it will call again
function callAgain(putOnTableFunction,bool){
  if(!bool){
    return callAgain(putOnTableFunction,bool);
  }else{
    putOnTableFunction;
  }
}

//dan
//draw function - return array with 2 values (suit,number)
//requires isOnTable() function
//draw will draw 2 random numbers suit(1,4),number(2,14) ---if draw
//is on table then draw again. if not on table then return array of 2 numbers (suit,number)
function draw(){

  var myDrawNumber = Math.floor(Math.random() * (9 - 2))+ 2;
  var myDrawNumberIndex = cardNum[myDrawNumber-2];
  var mySuitNumber = Math.floor(Math.random() *(2 - 1)+ 1);
  var mySuitNumberIndex = suitNum[mySuitNumber-1];
  var generatedArray = [mySuitNumberIndex,myDrawNumberIndex];
  // console.log(generatedArray);
  console.log("draw: ");
  console.log(generatedArray);
  return generatedArray;
}

//nate
//displays the picture of card takes array as arg with 2 ints (suit,cardNumber)
function displayCard(draw,displayTo){
  var suit = draw[0];
  var num = draw[1];
  $("#"+displayTo).append("<span class='cardArea'><img src='img/"+suit+"_"+num+".png'></span>");
  console.log(displayTo);
}

//checks if input values (array of suit/num), match a card object that exists already
//returns true if card matches, false if it does not
Card.prototype.checkForTableCard = function (draw) {
  var suitNum = draw[0];
  var cardNum = draw[1];
  if((suitNum === this.suit) && (cardNum === this.value)){
    return true;
  }else{
    return false;
  }
};

//nate
//create card object, display, push to array in player object
//requires draw() function, and displayCard() function
//array gets the value of member of Player object
Player.prototype.putCardOnTable = function (draw,displayTo,array) {
  var suitNum = draw[0];
  var cardNum = draw[1];
  var count = 0;
  // var newCard;
  //special case: for first card (aka poker table is empty)
  if(!this.totalHand.toString()){
    var newCard = new Card(cardNum,suitNum);
    console.log(newCard);
    console.log(array);
    array.push(newCard);
    this.totalHand.push(newCard);
    displayCard(draw,displayTo);
    console.log(displayTo);
  }
  for(var i=0;i<this.totalHand.length;++i){
    if(!this.totalHand[i].checkForTableCard(draw)){
      count += 1;
      if(count === this.totalHand.length){
        var newCard = new Card(cardNum,suitNum);
        array.push(newCard);
        this.totalHand.push(newCard);
        displayCard(draw,displayTo);
        return true;
      }
    }else{
      return false;
    }
  }
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

//returns a 0 if none of these conditions are found
Player.prototype.matchArray = function () {
  var cardCount = 0;
  var matchArray =[];
  var totalHandValues = cardValueArr(this.totalHand);
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
Player.prototype.matchVictory= function () {
  var isMatch = this.matchArray();
  isMatch.sort();
  if(cmpArr(isMatch,[4,4,4,4])){
    return 8;//four of a kind
  }
  else if(this.straitFlush() === 9) {
    return 9;
  }
  else if(this.strait() === 5) {
    return 5;
  }

  else if(cmpArr(isMatch,[2,2,3,3,3])){
    return 7;//full house
  }else if(cmpArr(isMatch,[3,3,3])){
    return 4;//3 of a kind
  }else if(cmpArr(isMatch,[2,2,2,2])){
    return 3;//two pair
  }else if(cmpArr(isMatch,[2,2])){
    return 2;//one pair
  }
  //need to add in the straight here
  // else if(this.strait() === 5) {
  //   return 5;
  // }

  // else if(Player.straitFlush === 9) {
  //   return 9;
  // }
  // Player.prototype.matchArray = function () {
  //   var cardCount = 0;
  //   var matchArray =[];
  //   var totalHandValues = cardValueArr(this.totalHand);
  //   for(var i=0;i<totalHandValues.length;++i){
  //     cardCount = countInArray(totalHandValues,totalHandValues[i]);
  //     if(cardCount >1){
  //       matchArray.push(cardCount);
  //     }
  //   }
  //   return matchArray.sort();
  // };

  else{
    return 0;
  }
};

//flush-medium

//strait-hard
Player.prototype.strait = function () {
  var isStrait = 0;
  var totalHandValues = cardValueArr(this.totalHand);
  totalHandValues.sort();
  for(var i =0; i<totalHandValues.length-1;++i){
    if((totalHandValues[i+1]-totalHandValues[i]) ===1){
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
// Player.prototype.straitFlush = function () {
//   var isStrait = 0;
//   var isSuit = 0;
//   var totalHandValues = cardValueArr(this.totalHand);
//   totalHandValues.sort();
  // for(var i =0; i<totalHand.length-1;++i){
  //   if((totalHand[i]-totalHand[i+1]) ===1){
  //     isStrait +=1;
  //     isSuit += totalHand[i].whatSuit();
  //   }
  //   if((isStrait >= 5) && (isSuit/5) ===totalHand[i].whatSuit()) {
  //     return 9;
  //     //alert("")
  //   }else{
  //     return 0;
  //   }
  // }
  Player.prototype.straitFlush = function () {
    var isSuitedStrait = 0;
    var totalHandValues = cardValueArr(this.totalHand);
    var totalHandSuits = suitValueArr(this.totalHand);
    console.log(totalHandSuits);
    totalHandValues.sort();
    for ( var i=0; i<totalHandValues.length; i+=1) {
      if(((totalHandValues[i]-totalHandValues[i+1]) ===1) && (totalHandSuits[i] === totalHandSuits[i+1])) {
        isSuitedStrait +=1;
      }
    }
    if (isSuitedStrait >= 5) {
      return 9
    }
  }
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
  var thePlayer;
  $("#drawButton").click(function() {
    thePlayer = new Player();
    var hole1Card;
    do
    {
      hole1Card =thePlayer.putCardOnTable(draw(),"hole1",thePlayer.yourHand);
    }
    while(hole1Card);

    var hole2Card;
    do
    {
      hole2Card = thePlayer.putCardOnTable(draw(),"hole2",thePlayer.yourHand);
    }
    while(!hole2Card);
    $("#drawButton").toggle();
    $("#betButton").toggle();
  });
  $("#betButton").click(function() {
    var flop1Card;
    do
    {
      flop1Card =thePlayer.putCardOnTable(draw(),"flop1",thePlayer.tableCards);
    }
    while(!flop1Card);

    var flop2Card;

    do
    {
      flop2Card =thePlayer.putCardOnTable(draw(),"flop2",thePlayer.tableCards);
    }
    while(!flop2Card);

    var flop3Card;

    do
    {
      flop3Card =thePlayer.putCardOnTable(draw(),"flop3",thePlayer.tableCards);
    }
    while(!flop3Card);

    $(".cardback").slideToggle();
    $("#betButton").toggle();
    $("#betButton2").toggle();
  });
  $("#betButton2").click(function() {
    var turnCard;

    do
    {
      turnCard = thePlayer.putCardOnTable(draw(),"turn",thePlayer.tableCards);
    }
    while(!turnCard);

    $("#cardbackTurn").slideToggle();
    $("#betButton2").toggle();
    $("#betButton3").toggle();
  });
  $("#betButton3").click(function() {
    var riverCard;

    do
    {
      riverCard = thePlayer.putCardOnTable(draw(),"river",thePlayer.tableCards);
    }
    while(!riverCard);

    $("#cardbackRiver").slideToggle();
    $("#betButton3").toggle();
    $("#handButton").toggle();
  });
  $("#handButton").click(function() {
    // event.preventdefault();
    if(thePlayer.matchVictory()===2){
      console.log("One Pair");
      $("#handSection").append("<h3>One Pair</h3>");
    }
    if(thePlayer.matchVictory()===3){
      console.log("Two Pair");
      $("#handSection").append("<h3>Two Pair</h3>");
    }
    if(thePlayer.matchVictory()===4){
      console.log("Three of a kind");
      $("#handSection").append("<h3>Three of a kind</h3>");
    }
    if(thePlayer.matchVictory()===7){
      console.log("Full House");
      $("#handSection").append("<h3>Full House</h3>");
    }
    if(thePlayer.matchVictory()===8){
      console.log("Four of a kind");
      $("#handSection").append("<h3>Four of a kind</h3>");
    }
    if(thePlayer.matchVictory()===5)
    {
      console.log("Straight");
      $("#handSection").append("<h3>Straight</h3>");
    }
    if(thePlayer.matchVictory()===9)
    {
      console.log("Straight");
      $("#handSection").append("<h3>Straight Flush</h3>");
    };
    $("#newHand").toggle();
    $("#handButton").toggle();
  });
  $("#newHand").click(function() {
    $(".cardArea").replaceWith("");
    $("#handSection").replaceWith("");
    $("#cardbackTurn").slideToggle();
    $("#cardbackRiver").slideToggle();
    $(".cardback").slideToggle();

    $("#newHand").toggle();
    $("#drawButton").toggle();
  });
});


//nate
//draw button click- draw cards first for player, then draw cards for table

//dan
//bet button click- continue to see cards on table (show flop, show river)
