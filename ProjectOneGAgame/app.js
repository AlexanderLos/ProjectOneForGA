document.addEventListener("DOMContentLoaded", function() {
    // Existing transition code
    let hobo = document.getElementById('hobo');
    let fight = document.getElementById('fight');
    let club = document.getElementById('club');

    setTimeout(() => {
        hobo.style.transform = 'translateX(0)';
        hobo.style.opacity = '1';

        setTimeout(() => {
            fight.style.transform = 'translateX(0)';
            fight.style.opacity = '1';

            setTimeout(() => {
                club.style.transform = 'translateX(0)';
                club.style.opacity = '1';
            }, 500); 

        }, 500);

    }, 500); 

    // Plays the title music as soon as the page loads
    playTitleMusic();
});

// This function is used to animate the title elements when the page loads.
// It moves the words 'hobo', 'fight', and 'club' into view with a smooth transition effect.
// After the animation, the user can click on these words to navigate to the main menu.

function clickedWord(word) {
    alert("Continue to the next page!");
    window.location.href = 'mainmenu/mainmenu.html';
}

function playTitleMusic() {
    let music = document.getElementById('titleMusic');
    music.play();
}
