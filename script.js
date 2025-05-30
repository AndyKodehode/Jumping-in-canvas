console.log('Hello!');

let canvas = document.querySelector('#canvas');

let context;

canvas.height = 400;
canvas.width = 400;

context = canvas.getContext('2d');

let playerX = 0;
let playerY = 375;

let randomObjX = 200
let randomObjY = 150

let velocityX = 0;
let velocityY = 0;

let updateSpeed = 30;
let jumpSpeed = 5;

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

document.addEventListener('keydown', jump);

let counting = 0;

function jump(e) {
  if (e.code === 'ArrowUp' && !isJumping) {
    isJumping = true;
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
}

let obejctCount = 0


function randomObject(){

    

  let timerId = setInterval(()=>{
   let newObjectX = Math.floor(Math.random() * 400)
   let newObjectY = Math.floor(Math.random() * 400)

   
   context.fillStyle = 'yellow'
   context.fillRect(randomObjX, randomObjY, 25, 25)

   randomObjX = newObjectX
   randomObjY = newObjectY

   obejctCount += 1
   console.log('newX is:' + newObjectX)
   console.log('newY is:' + newObjectY)

   if(obejctCount > 3){
    clearInterval(timerId)

    console.log('counting done')
  }
  }, 3000)

 

}

randomObject()