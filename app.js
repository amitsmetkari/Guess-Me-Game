let actualValue=Math.trunc(Math.random()*20)+1;
let score=20;
let hScore=0;
document.querySelector('.check').addEventListener('click',function(){
    const secretNumber=Number(document.querySelector('.guess').value);
    //empty input
    if(!secretNumber){
        document.querySelector('.message').textContent='Empty Guess';
    }
    //correct guess
    else if(secretNumber===actualValue){
        document.querySelector('.message').textContent='You guessed it right 🎯';
        document.querySelector('body').style.backgroundColor='#60b347'
        document.querySelector('.number').textContent=actualValue;
        if(score>hScore){
            hScore=score;
            document.querySelector('.highscore').textContent=hScore;
        }
    }
    //low guess
    else if(secretNumber<actualValue){
        if(score>1){
            document.querySelector('.message').textContent='📉 Too low';
            score--;
        document.querySelector('.score').textContent= score;
        }
        else{
            document.querySelector('.message').textContent='💥 GAME OVER';
            document.querySelector('.score').textContent= 0;
        }
    }
    //high guess
    else if(secretNumber>actualValue){
        if(score>1){
            document.querySelector('.message').textContent='📈 Too High';
            score--;
        document.querySelector('.score').textContent= score;
        }
        else {
            document.querySelector('.message').textContent='💥 GAME OVER';
            document.querySelector('.score').textContent= 0;
        }
    }
})
document.querySelector('.again').addEventListener('click',function() {
    score=20;
    document.querySelector('.score').textContent= score;
    actualValue=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing 🙄';
    document.querySelector('body').style.backgroundColor='rgb(34,34,34)';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

})
