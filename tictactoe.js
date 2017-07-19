document.addEventListener('DOMContentLoaded', function (){

container = document.querySelector('#container')

var board = document.createElement("div");
container.append(board);
board.style.position = 'absolute'
board.style.width = '60%'
board.style.minWidth = '60%'
board.style.height = '80%'
board.style.border = '5px solid #3297ac'
board.style.background = '#eaf6f8'

// ROW ONE
var r1c1 = document.createElement("div");
board.append(r1c1);
r1c1.style.position = 'absolute'
r1c1.style.width = '20%'
r1c1.style.height = '20%'
r1c1.style.top = '5%'
r1c1.style.left = '10%'
r1c1.style.border = '1px solid red'
r1c1.style.background = 'white'

var r1c2 = document.createElement("div");
board.append(r1c2);
r1c2.style.position = 'absolute'
r1c2.style.width = '20%'
r1c2.style.height = '20%'
r1c2.style.top = '5%'
r1c2.style.left = '40%'
r1c2.style.border = '1px solid red'
r1c2.style.background = 'white'

var r1c3 = document.createElement("div");
board.append(r1c3);
r1c3.style.position = 'absolute'
r1c3.style.width = '20%'
r1c3.style.height = '20%'
r1c3.style.top = '5%'
r1c3.style.left = '70%'
r1c3.style.border = '1px solid red'
r1c3.style.background = 'white'

// ROW TWO
var r2c1 = document.createElement("div");
board.append(r2c1);
r2c1.style.position = 'absolute'
r2c1.style.width = '20%'
r2c1.style.height = '20%'
r2c1.style.top = '73%'
r2c1.style.left = '10%'
r2c1.style.border = '1px solid red'
r2c1.style.background = 'white'

var r2c2 = document.createElement("div");
board.append(r2c2);
r2c2.style.position = 'absolute'
r2c2.style.width = '20%'
r2c2.style.height = '20%'
r2c2.style.top = '73%'
r2c2.style.left = '40%'
r2c2.style.border = '1px solid red'
r2c2.style.background = 'white'

var r2c3 = document.createElement("div");
board.append(r2c3);
r2c3.style.position = 'absolute'
r2c3.style.width = '20%'
r2c3.style.height = '20%'
r2c3.style.top = '73%'
r2c3.style.left = '70%'
r2c3.style.border = '1px solid red'
r2c3.style.background = 'white'

// ROW THREE
var r3c1 = document.createElement("div");
board.append(r3c1);
r3c1.style.position = 'absolute'
r3c1.style.width = '20%'
r3c1.style.height = '20%'
r3c1.style.top = '38%'
r3c1.style.left = '10%'
r3c1.style.border = '1px solid red'
r3c1.style.background = 'white'

var r3c2 = document.createElement("div");
board.append(r3c2);
r3c2.style.position = 'absolute'
r3c2.style.width = '20%'
r3c2.style.height = '20%'
r3c2.style.top = '38%'
r3c2.style.left = '40%'
r3c2.style.border = '1px solid red'
r3c2.style.background = 'white'

var r3c3 = document.createElement("div");
board.append(r3c3);
r3c3.style.position = 'absolute'
r3c3.style.width = '20%'
r3c3.style.height = '20%'
r3c3.style.top = '38%'
r3c3.style.left = '70%'
r3c3.style.border = '1px solid red'
r3c3.style.background = 'white'





})
