// Once our page loads, two players - 'Danny Awesome' and 'Gasser' slide into view. From the tutorial you should remember, you are Danny Awesome.
// Next, the coin flipping container slides into frame.
// When a user clicks the flip button, a virtual coin is flipped. It can land on either side representing a player.
// There is a tied screen but I could not get it to work.
// The scores are then updated. After evry round, or if a player reaches 2 points, the winner is declared via alert.

document.addEventListener("DOMContentLoaded", function() {
    const player1 = document.getElementById('dannyAwesome');
    const player2 = document.getElementById('gasser');
    const flipContainer = document.querySelector('.flip');
    const flipButton = document.getElementById('flipButton');
    const coinImage = document.querySelector('.coin');
    const playerScoreDisplay = document.getElementById('playerScore');
    const computerScoreDisplay = document.getElementById('computerScore');

    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    
    setTimeout(() => {
        player1.style.transform = 'translateX(0)';
        player1.style.opacity = '1'; 

        setTimeout(() => {
            player2.style.transform = 'translateX(0) scaleX(-1)';
            player2.style.opacity = '1';  

            flipContainer.style.transform = 'translateX(0)';
            flipContainer.style.opacity = '1';
        }, 1000);
    }, 1000);

    flipButton.addEventListener("click", function() {
        const flipResult = coinFlip();

        switch (flipResult) {
            case "Blue":
                playerScore++;
                showCoinSide('blue');
                break;
            case "Red":
                computerScore++;
                showCoinSide('red');
                break;
            default:
                showCoinSide('tie');
                break;
        }

        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

        roundsPlayed++;

        if (roundsPlayed === 3 || playerScore === 2 || computerScore === 2) {
            determineWinner();
        }
    });

    function coinFlip() {
        return Math.random() > 0.5 ? 'Blue' : 'Red';
    }

    function showCoinSide(side) {
        let imgSrc = {
            'blue': 'blueSide.png',
            'red': 'redSide.png',
            'tie': 'tieSide.png'
        }[side];

        coinImage.src = imgSrc;
        coinImage.style.opacity = 1;
        coinImage.style.transform = 'scale(1)';
        coinImage.classList.add('spinCoin');

        setTimeout(() => {
            coinImage.classList.remove('spinCoin');
        }, 2000);
    }

    function determineWinner() {
        if (playerScore > computerScore) {
            alert("Danny Awesome wins!");
        } else if (computerScore > playerScore) {
            alert("Gasser wins!");
        } else {
            alert("It's a tie!");
        }
        resetGame();
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        coinImage.style.opacity = 0;
        coinImage.style.transform = 'scale(0.5)';
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
});
