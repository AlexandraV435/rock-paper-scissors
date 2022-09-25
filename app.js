const VARS = ['paper', 'rock', 'scissors']
let score = 0;
let scoreVal = document.getElementById('score');

function getRandVal(arr, val) {
  let playerVal = val;
  let rand = Math.floor(Math.random()*arr.length);
  let randomVal = arr[rand];
  console.log(randomVal)
  whoWin(randomVal, playerVal)
}

function whoWin(botVal, player) {
  switch(botVal) {
    case 'paper':
      paper(player);
      break;
    case 'rock':
      rock(player);
      break;
    case 'scissors':
      scissors(player);
      break;
  }
};

function paper(player) {
  switch(player) {
    case 'paper':
      swal('Ничья');
      break;
    case 'rock':
      score = 0;
      swal('Bot win'); 
      break;
    case 'scissors':
      swal('You win');
      score++
      break
  }
  scoreVal.innerHTML = `${score}`;
}

function rock(player) {
  switch(player) {
    case 'paper':
      swal('You win');
      score++
      break;
    case 'rock':
      swal('Ничья');
      break;
    case 'scissors':
      score = 0;
      swal('Bot win');
      break
  }
  scoreVal.innerHTML = `${score}`;
}

function scissors(player) {
  switch(player) {
    case 'paper':
      score = 0;
      swal('Bot win');
      break;
    case 'rock':
      swal('You win');
      score++
      break;
    case 'scissors':
      swal('Ничья');
      break
  }
  scoreVal.innerHTML = `${score}`;
}