
/* dark grey background */
document.body.style.backgroundColor = '#333';
 
/* chess board that is 8 by 8. There should be a total of 32 black squares and 32 white squares. */
var chessBoard = document.createElement('div');
chessBoard.style.width = '320px';
chessBoard.style.height = '320px';
chessBoard.style.backgroundColor = '#fff';
chessBoard.style.margin = '0 auto';
chessBoard.style.border = '1px solid #000';
document.body.appendChild(chessBoard);
var square = document.createElement('div');
square.style.width = '40px';
square.style.height = '40px';
square.style.float = 'left';
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    var squareClone = square.cloneNode(true);
    if ((i + j) % 2 === 0) {
      squareClone.style.backgroundColor = '#000';
    }
    chessBoard.appendChild(squareClone);
  }
}
 
/* move the image up */
img.style.marginTop = '-40px';
 
/* add three buttons at the below the chessboard */
var button = document.createElement('button');
button.style.width = '100px';
button.style.height = '40px';
button.style.margin = '0 10px';
button.style.float = 'left';
var button1 = button.cloneNode(true);
button1.innerHTML = 'Move Up';
document.body.appendChild(button1);
var button2 = button.cloneNode(true);
button2.innerHTML = 'Move Down';
document.body.appendChild(button2);
var button3 = button.cloneNode(true);
button3.innerHTML = 'Move Left';
document.body.appendChild(button3);
var button4 = button.cloneNode(true);
button4.innerHTML = 'Move Right';
document.body.appendChild(button4);
 
/* Delete the move right button */
document.body.removeChild(button4);
 
/* Move the buttons to the right */
button1.style.float = 'center';
button2.style.float = 'center';
button3.style.float = 'center';
 
/* Change 'move up' to 'left' and 'move down' to 'reset' and 'move left' to 'move right' */
button1.innerHTML = 'Move Left';
button2.innerHTML = 'Reset';
button3.innerHTML = 'Move Right';
 
/* move the chess board to the left side of the screen */
chessBoard.style.float = 'left';

