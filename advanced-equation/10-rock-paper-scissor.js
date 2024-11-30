let score = JSON.parse(localStorage.getItem ('score'))||{wins : 0,
    losses:0,
    ties :0
        };
      
    document.querySelector('.js-score').innerHTML =     `wins:${score.wins}, losses: ${ score.losses}, ties:${score.ties} `;
   
    let isautoplaying = false;
    let intervalId;
   function autoplay(){
if(!isautoplaying){
intervalId =   setInterval(()=>{
    const playerMove = pickComputerMove();
    playGame(playerMove);
  },1000);
  isautoplaying = true;

}else{
  clearInterval(intervalId);
  isautoplaying = true;
}
   
    
   } 
  document.querySelector('.js-rock-button')
  .addEventListener('click', ()=>{
    (playGame('rock'));
  })  
   

  document.querySelector('.js-paper-button')
  .addEventListener('click', ()=>{
    (playGame('paper'));
  })

  document.querySelector('.js-scissor-button')
  .addEventListener('click', ()=>{
    (playGame('scissors'));
  })

document.body.addEventListener('keydown',(event)=>{
 if(event.key === 'r'){
  playGame('rock')}
  else if(event.key === 'p'){
playGame('paper')
  }
  else if(event.key === 's'){
    playGame('scissors')
  }
 }
)
      
 function playGame(playerMove) {
 const computerMove = pickComputerMove();
    
    
    
        
            let result = '';
    
            if (playerMove === 'scissors') {
              if (computerMove === 'rock') {
                result = 'You lose.';
              } else if (computerMove === 'paper') {
                result = 'You win.';
              } else if (computerMove === 'scissors') {
                result = 'Tie.';
              }
    
            } else if (playerMove === 'paper') {
              if (computerMove === 'rock') {
                result = 'You win.';
              } else if (computerMove === 'paper') {
                result = 'Tie.';
              } else if (computerMove === 'scissors') {
                result = 'You lose.';
              }
              
            } else if (playerMove === 'rock') {
              if (computerMove === 'rock') {
                result = 'Tie.';
              } else if (computerMove === 'paper') {
                result = 'You lose.';
              } else if (computerMove === 'scissors') {
                result = 'You win.';
              }
            }
            if( result === 'You win.'){
            score.wins= score.wins+1;
        }else if( result === 'You lose.'){
            score.losses+= 1;
        }
        else if (result === 'Tie.'){
            score.ties += 1;    
        }
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-move').innerHTML = ` you<img src="${playerMove}-emoji (1).png" class="move-icon" >
      <img src="${computerMove}-emoji (1).png" class="move-icon" > Computer`;
        localStorage.setItem('score', JSON.stringify(score));
        
            
          }
    
          function pickComputerMove() {
            const randomNumber = Math.random();
    
            let computerMove = '';
    
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
              computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
              computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
              computerMove = 'scissors';
            }
    
            return computerMove;
          }