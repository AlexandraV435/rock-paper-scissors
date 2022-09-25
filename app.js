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
      alert('Ничья');
      break;
    case 'rock':
      score = 0;
      alert('Bot win'); 
      break;
    case 'scissors':
      alert('You win');
      score++
      break
  }
  scoreVal.innerHTML = `${score}`;
}

function rock(player) {
  switch(player) {
    case 'paper':
      alert('You win');
      score++
      break;
    case 'rock':
      alert('Ничья');
      break;
    case 'scissors':
      score = 0;
      alert('Bot win');
      break
  }
  scoreVal.innerHTML = `${score}`;
}

function scissors(player) {
  switch(player) {
    case 'paper':
      score = 0;
      alert('Bot win');
      break;
    case 'rock':
      swal('You win');
      score++
      break;
    case 'scissors':
      alert('Ничья');
      break
  }
  scoreVal.innerHTML = `${score}`;
}
