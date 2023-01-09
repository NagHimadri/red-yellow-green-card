let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

const squares = document.querySelectorAll('.colorSquare')

const timesClicked = {'red':0, 'yellow':0, 'green':0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value]+=1
    square.innerText=timesClicked[square.value]
  }
})

function clearScore ()
  {
    timesClicked.red=0
    timesClicked.yellow=0
    timesClicked.green=0
    squares.forEach(square => {
      square.innerText=''
    })
  }
const clear = document.getElementById('cbtn')
clear.onclick = () => clearScore()