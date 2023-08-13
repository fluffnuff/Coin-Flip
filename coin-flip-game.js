let toss = '';

let result = '';

const dipslayResult = document.querySelector('.js-result');

const displayScore = document.querySelector('.js-score');

const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    winStreak: 0
}

function flip(choice) {
    const flip = Math.random();

    flip < 1/2 ? toss = 'heads' : toss = 'tails';

    if (choice === toss) {
        result = 'You were right :)';
        score.wins ++;
        score.winStreak ++;
    } else {
        result = 'You were wrong :(';
        score.losses ++;
        score.winStreak -= score.winStreak;
    }

    localStorage.setItem('score', JSON.stringify(score))

    dipslayResult.innerHTML = `${result}`;
    displayScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Win Streak: ${score.winStreak}`;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.winStreak = 0;
    dipslayResult.innerHTML = '';
    displayScore.innerHTML = '';
    localStorage.removeItem('score');
    console.log('Score Reset');
}