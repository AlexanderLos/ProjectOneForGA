document.addEventListener("DOMContentLoaded", function() {
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
});

function clickedWord(word) {
    alert("Continue to the next page!");
    window.location.href = 'mainmenu/mainmenu.html';
}
