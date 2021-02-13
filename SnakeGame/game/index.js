import { gameboard, isOutsideBoard } from './Board/index.js';
import { SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfCollision as hasSnakeSelfCollision } from './Snake/index.js';
import { draw as foodDraw, update as foodUpdate } from './Food/index.js';

let lastTimeRender = 0;

//currentTime será milisegundos
function main(currentTime)
{
    if(checkGameOver())
    {
        if(confirm("Game over"))    { window.location.reload(); }
        else                        { window.requestAnimationFrame(main); }
        
        return;
    }

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastTimeRender) / 1000;

    if(secondsSinceLastRender < (1 / SNAKE_SPEED)){ return; }

    lastTimeRender = currentTime;

    update();
    draw();
}

function update()
{
    gameboard.innerHTML='';   
    snakeUpdate();
    foodUpdate();
}

function draw()
{
    snakeDraw();
    foodDraw();
}

function checkGameOver()
{
    return (isOutsideBoard(getSnakeHead()) || hasSnakeSelfCollision());
}

window.requestAnimationFrame(main); //pega 1 frame de animacao e retorna um tempo