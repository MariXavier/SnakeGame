import { gameboard } from '../Board/index.js';
import { getInputDirection } from './input.js';

const SNAKE_SPEED = 7;

let newSegments = 0;

const snakeBody =
[
    {x:11, y:11},
]

function update()
{
    addSegments();

    const inputDirection = getInputDirection();

    //comeca o penultimo elemento
    for(let i=snakeBody.length-2; i>=0; i--)
    {
        snakeBody[i+1] = { ...snakeBody[i] };
    }

    //move acabeça
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

function draw()
{
    snakeBody.forEach(segment =>
    {
        //cria segmento
        const snakeElement = document.createElement('div'); //cada segmento da cobrinha é uma div
        
        //adiciona css
        snakeElement.classList.add('snake');

        //posicao
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;

        //append DOM
        gameboard.appendChild(snakeElement);


    });
}

function collision(position)
{
    //se alguma condição for positiva, return true
    return snakeBody.some(segment => 
    {
        return (position.x === segment.x && position.y === segment.y);
    });
}

function expandSnake(amount)
{
    newSegments += amount;
}

function addSegments()
{
    if(newSegments > 0)
    {
        snakeBody.push(
        {
            ...snakeBody[snakeBody.length-1],
        });
        newSegments -= 1;
    }
}

function getSnakeHead()
{
   return snakeBody[0]; 
}

function hasSelfCollision()
{
    const snakeHead = snakeBody[0]; 
    return snakeBody.some((segment, index) => 
    {
        if(index===0){return false;}
        return (snakeHead.x === segment.x && snakeHead.y === segment.y);
    });
}

export { SNAKE_SPEED, update, draw, collision, expandSnake, getSnakeHead, hasSelfCollision }