
let player1 = "X";
let player2 = "O";
let currentPlayer = player2;
let cellNumber;
let cell0;

const cells = document.querySelectorAll('.cell');
const reset = document.getElementById('new-game');

//to get all event of click
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        clicked(index ); 
        
    });
});

// Function to handle the click event
function clicked(cellNumber) {
    console.log(`Cell ${cellNumber} clicked`);
    const cell0 = document.getElementById(`cell-${cellNumber}`);
    
    play(cell0);
    

}

// Function to play the game
const play = (cell0) => {
    if (currentPlayer == player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
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




// if the user click on the reset button
reset.addEventListener('click', () => {
    resetGame();
});

// Function to reset the game
const resetGame = () => {
    cells.forEach((cell) => {
        cell.innerHTML = '';
        cell.style.color = 'black';
    });
    currentPlayer = player1;
}

// Function to check the winner
const winner = () => {
    if(document.getElementById('cell-0').innerHTML !== '' && document.getElementById('cell-0').innerHTML === document.getElementById('cell-1').innerHTML && document.getElementById('cell-0').innerHTML === document.getElementById('cell-2').innerHTML){
        printWinner()
    }else if (document.getElementById('cell-3').innerHTML !== '' && document.getElementById('cell-3').innerHTML === document.getElementById('cell-4').innerHTML && document.getElementById('cell-3').innerHTML === document.getElementById('cell-5').innerHTML){
        printWinner()
    }else if (document.getElementById('cell-6').innerHTML !== '' && document.getElementById('cell-6').innerHTML === document.getElementById('cell-7').innerHTML && document.getElementById('cell-6').innerHTML === document.getElementById('cell-8').innerHTML){
        printWinner()
    }else if (document.getElementById('cell-0').innerHTML !== '' && document.getElementById('cell-0').innerHTML === document.getElementById('cell-3').innerHTML && document.getElementById('cell-0').innerHTML === document.getElementById('cell-6').innerHTML){
        printWinner()
    }else if (document.getElementById('cell-1').innerHTML !== '' && document.getElementById('cell-1').innerHTML === document.getElementById('cell-4').innerHTML && document.getElementById('cell-1').innerHTML === document.getElementById('cell-7').innerHTML){
        printWinner()
    }else if (document.getElementById('cell-2').innerHTML !== '' && document.getElementById('cell-2').innerHTML === document.getElementById('cell-5').innerHTML && document.getElementById('cell-2').innerHTML === document.getElementById('cell-8').innerHTML){
        printWinner()
    }else if (document.getElementById('cell-0').innerHTML !== '' && document.getElementById('cell-0').innerHTML === document.getElementById('cell-4').innerHTML && document.getElementById('cell-0').innerHTML === document.getElementById('cell-8').innerHTML){
        printWinner()
    }else if (document.getElementById('cell-2').innerHTML !== '' && document.getElementById('cell-2').innerHTML === document.getElementById('cell-4').innerHTML && document.getElementById('cell-2').innerHTML === document.getElementById('cell-6').innerHTML){
        printWinner()
    }else if (document.getElementById('cell-0').innerHTML !== '' && document.getElementById('cell-1').innerHTML !== '' && document.getElementById('cell-2').innerHTML !== '' && document.getElementById('cell-3').innerHTML !== '' && document.getElementById('cell-4').innerHTML !== '' && document.getElementById('cell-5').innerHTML !== '' && document.getElementById('cell-6').innerHTML !== '' && document.getElementById('cell-7').innerHTML !== '' && document.getElementById('cell-8').innerHTML !== ''){
        setTimeout( () => {
            alert(`No one is the winner`);
            resetGame();
        }, 100);
    }



}
function printWinner(){
    setTimeout( () => {
        alert(`${currentPlayer} is the winner`);
        resetGame();
        
    }, 100);
}

