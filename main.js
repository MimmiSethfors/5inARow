const playerOne = '👻'
const playerTwo = '👽‍'
const players = [playerOne, playerTwo]
let previousPlayer
let firstPlayer

let spelarensTur = document.querySelector('.Tur')
let antalSlag = document.querySelector('.antalSlag')
let slag = 0
const size = prompt('Daxs att spela 5 i rad! Hur stor vill du att spelbrädan ska vara?')
const board = document.querySelector('.board')
const rows = document.createElement('div')
board.prepend(rows)

const player = document.querySelector('.player')
player.textContent = `Spelare ett: ${playerOne}, Spelare två: ${playerTwo}`
//select random player to start
function randomPlayer(players) {
  return players[Math.floor(Math.random() * players.length)]
}
firstPlayer = randomPlayer(players)
spelarensTur.textContent = `Första spelaren är: ${firstPlayer}`
//to get the correct next player written out in first p
 if (firstPlayer === playerOne){
    previousPlayer = playerTwo
  } else{previousPlayer = playerOne}

//board
for(let i=0; i<size; i++){
  div = document.createElement('div')
  rows.prepend(div)
  div.classList.add('box')
    for(let j=0; j<size; j++){
     let button = document.createElement('button')
      div.appendChild(button)
      button.classList.add('btn')
    }
  }
  //game
let button = document.querySelectorAll('button')
for(let i = 0; i<=button.length; i++){
button[i].addEventListener('click', function(event){
  if (!button[i].classList.contains('clicked')){
  if(previousPlayer === playerOne){
  button[i].textContent = playerTwo
  previousPlayer = playerTwo
  spelarensTur.textContent = `Nästa spelare är ${playerOne}`
  
  }else{
  button[i].textContent = playerOne
  previousPlayer = playerOne
  spelarensTur.textContent = `Nästa spelare är: ${playerTwo}`
  }
  //to only count one click/per button
    button[i].classList.add('clicked')
    antalSlag.textContent = `Antal drag: ${++slag}`
  }
})
}


