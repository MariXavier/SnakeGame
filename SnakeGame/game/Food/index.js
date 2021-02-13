import { gameboard } from '../Board/index.js';
import { generateRandomBoardPosition } from '../Board/index.js';
import { collision as snakeCollision } from '../Snake/index.js';
import { expandSnake } from '../Snake/index.js';

const EXPANSION_RATE = 2;

let foodPosition = generateRandomPosition();

export function update()
{
    if(snakeCollision(foodPosition))
    {
        expandSnake(EXPANSION_RATE);
        foodPosition = generateRandomPosition();
    }
}

export function draw()
{
   //cria segmento
   const foodElement = document.createElement('div'); 
            
   //adiciona css
   foodElement.classList.add('food');

   //posicao
   foodElement.style.gridRowStart = foodPosition.y;
   foodElement.style.gridColumnStart = foodPosition.x;

   //append DOM
   gameboard.appendChild(foodElement);
}

function generateRandomPosition()
{
    let newFoodPosition;

     while(newFoodPosition===undefined || snakeCollision(newFoodPosition))
     {
         newFoodPosition = generateRandomBoardPosition();
     }

    return newFoodPosition;
}