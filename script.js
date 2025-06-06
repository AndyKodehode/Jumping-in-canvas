console.log('Hello!');

let canvas = document.querySelector('#canvas');

let context;

canvas.height = 400;
canvas.width = 400;

context = canvas.getContext('2d');

let playerX = 0;
let playerY = 375;

let velocityX = 0;
let velocityY = 0;

let updateSpeed = 30;
let jumpSpeed = 5;
let forwardSpeed = 5
let blockSize = 25

let isJumping = false;

setInterval(update, updateSpeed);

function update() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  playerX += velocityX;
  playerY += velocityY;

  context.fillStyle = 'red';
  context.fillRect(playerX, playerY, 25, 25);
}

document.addEventListener('keydown', (e) =>{

  if(e.code === 'ArrowRight'){
    moveRight()
  } else if( e.code === 'ArrowUp'){
    jump()
  } else if (e.code === 'ArrowLeft'){
    moveLeft()
  }

});


function moveRight(){
   
  playerX += forwardSpeed

  if(playerX === canvas.width ){
    playerX = 0
  }

}

function moveLeft(){
  playerX -= forwardSpeed

  if(playerX === -25){
    playerX = canvas.width - blockSize
  }
}

let counting = 0;

function jump() {

    let timerId = setInterval(() => {
      velocityY = -jumpSpeed;
      counting += 1;
      if (counting === 15) {
        clearInterval(timerId);
        velocityY = 0;
        let fallingTimerId = setInterval(() => {
          velocityY = +jumpSpeed;
          counting -= 1;
          if (counting === 0) {
            clearInterval(fallingTimerId);
            velocityY = 0;
            isJumping = false;
          }
        }, updateSpeed);
      }
    }, updateSpeed);
  }

