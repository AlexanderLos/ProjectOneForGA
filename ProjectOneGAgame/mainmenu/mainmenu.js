document.addEventListener("DOMContentLoaded", function() {
    let story = document.getElementById('story');
    let customMatch = document.getElementById('customMatch');
    let credits = document.getElementById('credits');
    let tutorial = document.getElementById('tutorial');
    let title = document.getElementById('title');


setTimeout(() => {
    tutorial.style.transform = 'translateX(0)';
    tutorial.style.opacity = '1';
    
    setTimeout(() => {
        story.style.transform = 'translateX(0)';
        story.style.opacity = '1';

        setTimeout(() => {
            customMatch.style.transform = 'translateX(0)';
            customMatch.style.opacity = '1';

            setTimeout(() => {
                credits.style.transform = 'translateX(0)';
                credits.style.opacity = '1';
                }, 500); 
            }, 500); 
        }, 500);
    }, 500); 
});



function clickedTutorial() {
    alert("Time to learn!")
    window.location.href = '../tutorial/tutorial.html';
}

function clickedStory() {
    alert("Time for an adventure!");
    window.location.href = '';
}

function clickedCustomMatch() {
    alert("Good Luck!");
    window.location.href = '';
}

function clickedCredits() {
    alert("Thank you for playing!");
    window.location.href = '';
}


// After some event or condition
document.querySelector('.title').style.opacity = "1";
document.querySelector('h1').style.opacity = "1";
