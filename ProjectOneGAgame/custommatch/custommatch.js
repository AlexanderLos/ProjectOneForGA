document.addEventListener("DOMContentLoaded", function() {
    let player1 = document.getElementById('dannyAwesome');
    let player2 = document.getElementById('gasser');
    let name2 = document.getElementById('name2');

    setTimeout(() => {
        player1.style.transform = 'translateX(0)';
        player1.style.opacity = '1'; 
    
        setTimeout(() => {
            player2.style.transform = 'translateX(0) scaleX(-1)';
            name2.style.transform = 'scaleX(-1)';
            player2.style.opacity = '1';  
        }, 500);
    }, 500); 



function coinFlip () {

}






});
