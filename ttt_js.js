// Sets the board array (empty)
var id = function(id){return document.getElementById(id);};
id('xs').addEventListener("click", beginAsX);
id('os').addEventListener("click", beginAsO);
let moves = 0;
let player1   = '';
var theBoard = [
	[	id('topLeft'), id('topMid'), id('topRight')],
	[ id('midLeft'), id('midMid'), id('midRight')],       
  [ id('botLeft'), id('botMid'), id('botRight')]
];

//The 1+ is active from beginning, but then doesn't function for rest of time.. WHYYYYY
//id('second').innerHTML += "1+";
let tds = document.getElementsByClassName('grid');
Array.from(tds).forEach(function(element){
	element.addEventListener("click", function(){markBox.bind(this)();});
})
console.log("HELLO WORLD");
/***************************************************************
* Detects if player 1 is 'X' or 'O'
***************************************************************/
// Detects if player 1 is X (first)
function beginAsX(){
	beginGame();
  player1 = 'x';
}

// Detects if player 1 is O (second)
function beginAsO(){
	beginGame();
  player1 = 'o';
}

/***************************************************************
* Clears begin prompt and displays board
***************************************************************/
// Clears begin prompt and displays board
function beginGame(){
	id('xs').style.display = "none";
  id('os').style.display = "none";
  id('board').style.display = "table";
}

/***************************************************************
* Updates moves
***************************************************************/
function updateMoves(){
	moves += 1;
}

/***************************************************************
* Marks a box with an X or O, then replaces class with X or O
***************************************************************/
function markBox(){
	  if(player1 === 'x'){
        console.log("Before X is marked..");
        if(isMarked() == true){
        console.log("X is marked is true");
            return;
        } else {
            console.log("X is marked NOT true");
  	        id(this.id).innerHTML = "X";
            id(this.id).className = "X";
            player1 = 'o';		
            updateMoves();
		    checkGameState();
        }
      }
      else if(player1 === 'o'){
        if(isMarked() == true){
            return;
        } else {
            id(this.id).innerHTML = "O";
            id(this.id).className = "O";
            player1 = 'x';
            updateMoves();
            checkGameState();  
        }
      }
}

function isMarked() {
    if(id(this.id).className == "X") {
        console.log("X is here already");
        return true;
    } else if (id(this.id).className == "O") {
        console.log("O is here already");
        return true;
    } else {
        console.log("False");
        return false;
    }
}

/***************************************************************
* Checks if any winners are present
***************************************************************/
function checkGameState(){
if(player1 === 'x'){
	// X ROWS
  if(id('topLeft').className === "X" && id('topMid').className === "X" && id('topRight').className === "X") {	alert("X won!"); }	
  if(id('midLeft').className === "X" && id('midMid').className === "X" && id('midRight').className === "X") {	alert("X won!"); }
  if(id('botLeft').className === "X" && id('botMid').className === "X" && id('botRight').className === "X") {	alert("X won!"); }

	// X COLUMNS
  if(id('topLeft').className === "X" && id('midLeft').className === "X" && id('botLeft').className === "X") {	alert("X won!"); }
  if(id('topMid').className === "X" && id('midMid').className === "X" && id('botMid').className === "X") {	alert("X won!"); }
  if(id('topRight').className === "X" && id('midRight').className === "X" && id('botRight').className === "X") {	alert("X won!"); }
  
  // X DIAGONALS
  if(id('topLeft').className === "X" && id('midMid').className === "X" && id('botRight').className === "X") { alert("X won!"); }  
  if(id('topRight').className === "X" && id('midMid').className === "X" && id('botLeft').className === "X") { alert("X won!"); }
}

if(player1 === 'o'){
	// O ROWS
  if(id('topLeft').className === "O" && id('topMid').className === "O" && id('topRight').className === "O") {	alert("O won!"); }	
  if(id('midLeft').className === "O" && id('midMid').className === "O" && id('midRight').className === "O") {	alert("O won!"); }
  if(id('botLeft').className === "O" && id('botMid').className === "O" && id('botRight').className === "O") {	alert("O won!"); }

	// O COLUMNS
  if(id('topLeft').className === "O" && id('midLeft').className === "O" && id('botLeft').className === "O") {	alert("O won!"); }
  if(id('topMid').className === "O" && id('midMid').className === "O" && id('botMid').className === "O") {	alert("O won!"); }
  if(id('topRight').className === "O" && id('midRight').className === "O" && id('botRight').className === "O") {	alert("O won!"); }
  
  // O DIAGONALS
  if(id('topLeft').className === "O" && id('midMid').className === "O" && id('botRight').className === "O") { alert("O won!"); }  
  if(id('topRight').className === "O" && id('midMid').className === "O" && id('botLeft').className === "O") { alert("O won!"); }
}

	if(moves === 10){
  	alert("Tie! No winner.");
  }
}