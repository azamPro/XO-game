
let player1 = "X";
let player2 = "O";
let computerplayer = "O";
let currentPlayer = player2;
let cellNumber;
let cell0;
let computer = false;
let wiiner;
let friend=false;

if(computer){
    
    computer = player1;
}

//if click on thw play with computer button
document.getElementById('play-with-computer').addEventListener('click', () => {
    computer = !computer; // Toggle the value of 'computer'
    friend=false;
    player2=computerplayer;
    
    //style the button
    document.getElementById('play-with-computer').style.backgroundColor = '#705600';
    document.getElementById('play-with-friend').style.backgroundColor = '#c09300';
    resetGame();
});

document.getElementById('play-with-friend').addEventListener('click', () => {
    friend = !friend; // Toggle the value of 'friend'
    computer = false;
    
    //style the button
    document.getElementById('play-with-friend').style.backgroundColor = '#705600';
    document.getElementById('play-with-computer').style.backgroundColor = '#c09300';
    resetGame();
});


const cells = document.querySelectorAll('.cell');

//to get all event of click
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        clicked(index ); 
        
    });
});

// Function to handle the click event
function clicked(cellNumber) {
    const cell0 = document.getElementById(`cell-${cellNumber}`);
    play(cell0);
}

// Function to play the game
const play = (cell0) => {
    if(computer ){
        currentPlayer = player1;
        //play
        cell0.innerHTML = currentPlayer;
        applyStyles(cell0, currentPlayer);
        if(winner()) return;
        //computer play
        while(1){
            currentPlayer = computerplayer;
            //if all cell full break
            if (document.getElementById('cell-0').innerHTML !== '' && document.getElementById('cell-1').innerHTML !== '' && document.getElementById('cell-2').innerHTML !== '' && document.getElementById('cell-3').innerHTML !== '' && document.getElementById('cell-4').innerHTML !== '' && document.getElementById('cell-5').innerHTML !== '' && document.getElementById('cell-6').innerHTML !== '' && document.getElementById('cell-7').innerHTML !== '' && document.getElementById('cell-8').innerHTML !== '') break;
                //get random number
                let random = Math.floor(Math.random() * 8);
                
                let cell = document.getElementById(`cell-${random}`);
                if(cell.innerHTML !== '') continue;
                cell.innerHTML = computerplayer;
                applyStyles(cell, computerplayer);
                winner();
                break;
        }
        return;
    }
    //change the player
    if (currentPlayer == player2) {
        currentPlayer = player1;
    } else {
        currentPlayer = player2;
    }
    //checl is the cell is empty
    if(cell0.innerHTML !== '') return;
    cell0.innerHTML = currentPlayer;
    applyStyles(cell0, currentPlayer);
    winner();
}


// Function to apply styles based on the player's move
function applyStyles(cell, player) {
    if (player === player1) {
        cell.style.color = 'blue'; 
    } else if (player === player2) {
        cell.style.color = 'red';}
}


const reset = document.getElementById('new-game');

// if the user click on the reset button
reset.addEventListener('click', () => {
    resetGame();
});


// Function to check the winner
const winner = () => {
    if (document.getElementById('cell-0').innerHTML !== '' && document.getElementById('cell-0').innerHTML === document.getElementById('cell-1').innerHTML && document.getElementById('cell-0').innerHTML === document.getElementById('cell-2').innerHTML) {
        printWinner();
        return true;
    } else if (document.getElementById('cell-3').innerHTML !== '' && document.getElementById('cell-3').innerHTML === document.getElementById('cell-4').innerHTML && document.getElementById('cell-3').innerHTML === document.getElementById('cell-5').innerHTML) {
        printWinner();
        return true;
    } else if (document.getElementById('cell-6').innerHTML !== '' && document.getElementById('cell-6').innerHTML === document.getElementById('cell-7').innerHTML && document.getElementById('cell-6').innerHTML === document.getElementById('cell-8').innerHTML) {
        printWinner();
        return true;
    } else if (document.getElementById('cell-0').innerHTML !== '' && document.getElementById('cell-0').innerHTML === document.getElementById('cell-3').innerHTML && document.getElementById('cell-0').innerHTML === document.getElementById('cell-6').innerHTML) {
        printWinner();
        return true;
    } else if (document.getElementById('cell-1').innerHTML !== '' && document.getElementById('cell-1').innerHTML === document.getElementById('cell-4').innerHTML && document.getElementById('cell-1').innerHTML === document.getElementById('cell-7').innerHTML) {
        printWinner();
        return true;
    } else if (document.getElementById('cell-2').innerHTML !== '' && document.getElementById('cell-2').innerHTML === document.getElementById('cell-5').innerHTML && document.getElementById('cell-2').innerHTML === document.getElementById('cell-8').innerHTML) {
        printWinner();
        return true;
    } else if (document.getElementById('cell-0').innerHTML !== '' && document.getElementById('cell-0').innerHTML === document.getElementById('cell-4').innerHTML && document.getElementById('cell-0').innerHTML === document.getElementById('cell-8').innerHTML) {
        printWinner();
        return true;
    } else if (document.getElementById('cell-2').innerHTML !== '' && document.getElementById('cell-2').innerHTML === document.getElementById('cell-4').innerHTML && document.getElementById('cell-2').innerHTML === document.getElementById('cell-6').innerHTML) {
        printWinner();
        return true;
    } else if (document.getElementById('cell-0').innerHTML !== '' && document.getElementById('cell-1').innerHTML !== '' && document.getElementById('cell-2').innerHTML !== '' && document.getElementById('cell-3').innerHTML !== '' && document.getElementById('cell-4').innerHTML !== '' && document.getElementById('cell-5').innerHTML !== '' && document.getElementById('cell-6').innerHTML !== '' && document.getElementById('cell-7').innerHTML !== '' && document.getElementById('cell-8').innerHTML !== '') {
        setTimeout(() => {
            alert(`No one is the winner`);
            resetGame();
        }, 100);
        return true;
    }
    

}
function printWinner(){
    setTimeout( () => {
        alert(`${currentPlayer} is the winner`);
        wiiner=true;
        resetGame();
    }, 100);
}
// Function to reset the game
const resetGame = () => {
    cells.forEach((cell) => {
        cell.innerHTML = '';
        cell.style.color = 'black';
    });


    wiiner=false;
    currentPlayer = player1;
    if(!computer && !friend){
        document.getElementById('play-with-computer').style.backgroundColor = '#c09300';
        document.getElementById('play-with-friend').style.backgroundColor = '#c09300';
    }
    
}




