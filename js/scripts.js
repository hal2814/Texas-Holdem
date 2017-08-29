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
Card.prototype.whatSuit = function () {
  return this.suit;
};

//dan
//function to compare draw if card is on table -takes Card object as arg
//returns true if card is on table, false if card has not been drawn
function isOnTable(draw){

}

//dan
//draw function - return array with 2 values (suit,number)
//requires isOnTable() function
//draw will draw 2 random numbers suit(1,4),number(2,14) ---if draw
//is on table then draw again. if not on table then return array of 2 numbers (suit,number)
 //card prototype - function draw(){
  //var array = [(1,4),(2,14)]
  //return array
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

//3 of a kind-easy (or pair/three/four of a kind) returns priority value as an integer
//returns a 0 if none of these conditions are found
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

//royal flush-easy

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
//full house-medium

//high card-medium


//Front End

//document ready

//nate
//draw button click- draw cards first for player, then draw cards for table

//dan
//bet button click- continue to see cards on table (show flop, show river)
