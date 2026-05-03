let seconds = 0;

let score = 0;

let scoreTwo = 0;

let intervalID = null;

const choice = 0;

const simulation = document.querySelector('.match-simulation');
const simulationSecond = document.querySelector('.second-simulation');
const buttonTwo = document.querySelector('.one-img');
const buttonOne = document.querySelector('.two-img');
const matchTwoButtonOne = document.querySelector('.second-match-one');
const matchTwoButtonTwo = document.querySelector('.second-match-two');
const firstScore = document.querySelector('.first-score');
const firstScoreSecond = document.querySelector('.second-match-1');
const secondScore = document.querySelector('.second-score');
const secondScoreSecond = document.querySelector('.second-match-2');
const result = document.querySelector('.result');
const resultSecond = document.querySelector('.result-2');
const myStakeHome = document.querySelector('.stake-result-home');
const myStakeDraw = document.querySelector('.stake-result-draw');
const myStakeAway = document.querySelector('.stake-result-away');

function setTimerAndMatchScores (choice){
    seconds = 0;
    score = 0;
    scoreTwo = 0;
    result.innerHTML = '';
        intervalID = setInterval(()=>{
    seconds++;
    document.querySelector('.timer').innerHTML = seconds;

    let randomScoring = Math.random();
    if (randomScoring > 0  && randomScoring <= 0.2){

        score++;
    }
    else if(randomScoring > 0.8 && randomScoring <= 1){
        scoreTwo ++;
    }
    else {null};

    firstScore.innerHTML = score;



    secondScore.innerHTML = scoreTwo;
    
if (seconds === 5)
{
    document.querySelector('.timer').innerHTML = 'Half Time';
}

if (seconds === 11){
        document.querySelector('.timer').innerHTML = 'Full Time.';

    clearInterval(intervalID);
    if (score > scoreTwo){
        if(choice === 'Arsenal'){
            result.innerHTML = 'You Win'
        }
        else {result.innerHTML = 'You Lose'}
    }
    else if(scoreTwo > score) {
        if(choice === 'Chelsea'){
            result.innerHTML = 'You Win'
        }
        else {result.innerHTML = 'You Lose'}
    }
    else if(score === scoreTwo)
        if (choice === 'Tie'){
            result.innerHTML = 'You Win'
        }
        else {
            result.innerHTML = 'You Lose'
        }
}   


},1000);
    };

    function setTimerAndMatchScoresSecond (choice){
        intervalID = setInterval(()=>{
    seconds++;
    document.querySelector('.timer-2').innerHTML = seconds;

    let randomScoring = Math.random();
    if (randomScoring > 0  && randomScoring <= 0.2){

        score++;
    }
    else if(randomScoring > 0.8 && randomScoring <= 1){
        scoreTwo ++;
    }
    else {null};

    firstScoreSecond.innerHTML = score;



    secondScoreSecond.innerHTML = scoreTwo;
    
if (seconds === 11){
        document.querySelector('.timer-2').innerHTML = 'Full Time.';

    clearInterval(intervalID);
    if (score > scoreTwo){
        if(choice === 'Arsenal'){
            resultSecond.innerHTML = 'You Win'
        }
        else {resultSecond.innerHTML = 'You Lose'}
    }
    else if(scoreTwo > score) {
        if(choice === 'Chelsea'){
            resultSecond.innerHTML = 'You Win'
        }
        else {resultSecond.innerHTML = 'You Lose'}
    }
    else {resultSecond.innerHTML = 'Tie'};
}   


},1000);
    };

    function displayMatchSimulation(team){
        simulation.style.display = 'flex';
    document.querySelector('.game-1').classList.add('first');
    document.querySelector('.game-2').classList.add('second');
    document.querySelector('.display-one').classList.add('first-set');
    document.querySelector('.display-one').style.display = 'none';
    }
buttonOne.addEventListener('click', ()=>{
    displayMatchSimulation('Arsenal');


    

});

buttonTwo.addEventListener('click', ()=>{
    displayMatchSimulation('Chelsea');

});

matchTwoButtonOne.addEventListener('click', ()=>{
        simulationSecond.style.display = 'flex';
    document.querySelector('.game-2').classList.add('first');
    document.querySelector('.game-1').classList.add('second');
    document.querySelector('.display-two').classList.add('first-set');
    setTimerAndMatchScoresSecond('Chelsea');


})
const endSimulation = document.querySelector('.end-match-simulation');

endSimulation.addEventListener('click', (event)=> {
        console.log(event.key)
        simulation.style.display = 'none';
        clearInterval(intervalID);
        intervalID = null;
        document.querySelector('.timer').innerHTML = 'Starting...';
        seconds = 0;
        score = 0;
        scoreTwo = 0;
        result.innerHTML = '';
    document.querySelector('.game-1').classList.remove('first');
    document.querySelector('.game-2').classList.remove('second');
    document.querySelector('.display-one').classList.remove('first-set');
    document.querySelector('.display-one').style.display = 'flex';


});

myStakeHome.addEventListener('click', ()=>{
    document.querySelector('.timer').innerHTML = 'Starting...';

    setTimeout(()=>{
        
        setTimerAndMatchScores ('Arsenal');

    }, 1000)
}) ;
myStakeDraw.addEventListener('click', ()=>{
    document.querySelector('.timer').innerHTML = 'Starting...';

    setTimeout(()=>{
        
        setTimerAndMatchScores ('Tie');

    }, 1000)
}) ;
myStakeAway.addEventListener('click', ()=>{
    document.querySelector('.timer').innerHTML = 'Starting...';

    setTimeout(()=>{
        
        setTimerAndMatchScores ('Chelsea');


    }, 1000)
}) 
