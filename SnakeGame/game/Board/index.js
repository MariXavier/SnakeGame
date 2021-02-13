const BOARD_SIZE = 21;
const gameboard = document.getElementById("game-board");

function generateRandomBoardPosition()
{
    return { 
        x:Math.floor(Math.random() * BOARD_SIZE) + 1, 
        y:Math.floor(Math.random() * BOARD_SIZE) + 1
    }
}

function isOutsideBoard(position)
{
    //0 é fora do board
    return (position.x > BOARD_SIZE || position.x < 1 || position.y > BOARD_SIZE || position.y < 1);
}

export { gameboard, generateRandomBoardPosition, isOutsideBoard }
