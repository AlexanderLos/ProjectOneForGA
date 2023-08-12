document.addEventListener("DOMContentLoaded", function() {
    let credit = document.getElementById('credit');
    let returnMain = document.getElementById('returnMain');
    let creditPara = document.querySelector('.creditParagraph');

    setTimeout(() => {
        credit.style.transform = 'translateY(0)';
        credit.style.opacity = '1';

        setTimeout(() => {
            creditPara.style.opacity = '1'; 

            setTimeout(() => {
                returnMain.style.transform = 'translateY(0)';
                returnMain.style.opacity = '1';
            }, 500);
        }, 500);
    }, 500);
});

function returnToMainMenu() {
    alert("Returning to Main Menu!");
    window.location.href = '../mainmenu/mainmenu.html';
}