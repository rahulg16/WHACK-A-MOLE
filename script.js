const squares = document.querySelectorAll('.square')
const score = document.querySelector('.score')
const timeLeft = document.querySelector('.time-left')

let molePosition = 0
let result = 0
let time = 60

function randomPosition() {
    squares.forEach((square) => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.round(Math.random() * 8)]
    if(randomPosition === undefined){
        randomPosition = squares[Math.round(Math.random() * 8)]
    }
    randomPosition.classList.add('mole')
    molePosition = randomPosition.getAttribute('id')
}

squares.forEach((square) => {
    square.addEventListener('click', checkForHit)
})

function checkForHit() {
    clickedPosition = this.id
    if(clickedPosition === molePosition){
        result += 1
        score.textContent = result
    }
}

function moveMole() {
    let moleInterval = setInterval(randomPosition, 1000)

    let timerId = setInterval(updatingtTime, 1000)

    function updatingtTime() {
        time -= 1
        timeLeft.textContent = time
    
        if(time === 0){
            clearInterval(timerId)
            clearInterval(moleInterval)
            alert(`Your score is ${result}`);
        }
    }
}

moveMole()
