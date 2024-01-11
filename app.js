const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info-dysplay")

const width = 10
const hight = 8
const fishColours = 4
 
createBoard()

function shuffle(array) {
    for(i=array.length-1; i > 0; i--)
    {
        let randomIndex = Math.floor(Math.random() * i);
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    }
    return array;
}

function getFishes(hight, fishColours) {
    const colums = 2
    const fishesList = []

    let fishColour = 0 
    for (i = 0 ; i < colums*hight; i++) {
        fishesList.push(fishColour)
        fishColour++
        if(fishColour == fishColours) 
            fishColour = 0
    }
    return shuffle(fishesList)
}

function createBoard() {
    const fishes = getFishes(hight, fishColours)
    fishId = 0
    for (i = 0 ; i < width*hight ; i++) {
        const boardTail = document.createElement("div")
        boardTail.classList.add("boardTail")
        boardTail.setAttribute("tail-id", i)

        if (i % width < 2) {
            boardTail.innerHTML = fish
            const currentFishColour = fishes.at(fishId)
            switch (currentFishColour) {
                case 0:
                    boardTail.firstChild.firstChild.classList.add('red-fish')
                    break
                case 1:
                    boardTail.firstChild.firstChild.classList.add('blue-fish')
                    break
                case 2:
                    boardTail.firstChild.firstChild.classList.add('yellow-fish')
                    break
                default:
                    boardTail.firstChild.firstChild.classList.add('green-fish')
                    break
            }
            fishId++
            boardTail.firstChild.setAttribute("draggable", true)
            boardTail.addEventListener("dragstart", dragstart)
        } 
        gameBoard.append(boardTail)
    }
}

const allBoardTails = document.querySelectorAll('#gameboard .boardTail')
infoDisplay.innerHTML="OK"
//allBoardTails.forEach(boardTail => {
//    boardTail.addEventListener("dragstart", dragstart)
//})

function dragstart(e) {
    console.log(e.target.parentNode)
}