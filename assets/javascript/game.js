$( document ).ready(function() {
var user = {
    counter: 0,
    wins: 0,
    losses: 0
}

var crystals = {
    gemOne: Math.floor(Math.random() * (12 - 1)) + 1,
    gemTwo: Math.floor(Math.random() * (12 - 1)) + 1,
    gemThree: Math.floor(Math.random() * (12 - 1)) + 1,
    gemFour: Math.floor(Math.random() * (12 - 1)) + 1,
}

var randomNumber = Math.floor(Math.random() * 103) + 19;

function crystalCounter(){

    $('#random-number').text(randomNumber);

$('.one').on('click', function(){

    user.counter += crystals.gemOne;
    $('#score-number').text(user.counter);
    checkScore();
})

$('.two').on('click', function(){

    user.counter += crystals.gemTwo;
    $('#score-number').text(user.counter);
    checkScore();
})

$('.three').on('click', function(){

    user.counter += crystals.gemThree;
    $('#score-number').text(user.counter);
    checkScore();
})

$('.four').on('click', function(){

    user.counter += crystals.gemFour;
    $('#score-number').text(user.counter);
    checkScore();
})

};

crystalCounter();

function checkScore(){

if (user.counter === randomNumber){  
    user.wins++;
    $('#wins').text('Wins: ' + user.wins);
    $('#losses').text('Losses: ' + user.losses);
    $('#status').text('Nice job! You win!');
    startNext();
} else if(user.counter > randomNumber){
    user.losses++;
    $('#wins').text('Wins: ' + user.wins);
    $('#losses').text('Losses: ' + user.losses);
    $('#status').text('Your Total score was ' + user.counter + ' - You lost!');
    startNext();
} ;
};

function startNext(){
    user.counter = 0;
    $('#score-number').text(user.counter);
    crystals.gemOne = Math.floor(Math.random() * (12 - 1)) + 1;
    crystals.gemTwo = Math.floor(Math.random() * (12 - 1)) + 1;
    crystals.gemThree = Math.floor(Math.random() * (12 - 1)) + 1;
    crystals.gemFour = Math.floor(Math.random() * (12 - 1)) + 1;
    randomNumber = Math.floor(Math.random() * 103) + 19;
    $('#random-number').html(randomNumber);
};

});