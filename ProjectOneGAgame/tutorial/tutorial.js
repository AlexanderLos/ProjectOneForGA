
// Once the page is up and running, we kickstart a conversation with 'mask boy'. 
// Using a 'typewriter' effect to display his messages one character at a time via the function below. 
// After the current dialogues exhuasted, a "Next" button appears for the user to click and get the next message.
// Once he's done completely, an option to go back to the main menu appears.

window.onload = function() {
    let i = 0;
    let dialogues = [
        "Hey noobie, welcome to hobo fight club. My name is mask boy. " + 
        "I'll show you a thing or two about how to beat these other guys in the world of Hobo Fight Club!",
        
        "First things first, Despite our organization being called Hobo Fight Club I need you to know I am not broke by any means... I got a couple of quarters here in my left pocket.",

        "Oh you don't care? Okay good, well anyways lets continue ",

        "The game works on a heads or tails like basis, hence the couple of quarters in my pocket.",

        "Your character is Danny Awesome, aka the blue colored guy, you will see this in 'Custom Match'. You must press the Flip! button and hope that you land on blue, thats just the rules. Get two points and you win. Purely luck.",

        "You can only access 'Custom Match' right now because story mode is still under development",

        "Anyways, the rules are simple and you shouldn't have a hard time playing this little game, goodluck!"
    ];

    let currentDialogue = 0;
    let speed = 50;
    let dialogueEle = document.getElementById("dialogue");
    let nextButton = document.getElementById("nextButton");
    let menuButton = document.getElementById("menuButton");

    function typeWriter() {
        if (i < dialogues[currentDialogue].length) {
            dialogueEle.innerHTML += dialogues[currentDialogue].charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            if (currentDialogue === dialogues.length - 1) {
                menuButton.style.display = "block";
            } else {
                nextButton.style.display = "block";
            }
        }
    }

    nextButton.addEventListener('click', function() {
        if (currentDialogue < dialogues.length - 1) {
            currentDialogue++;
            dialogueEle.innerHTML = "";
            i = 0;
            nextButton.style.display = "none";
            typeWriter();
        }
    });

    menuButton.addEventListener('click', function() {
        window.location.href = "../mainmenu/mainmenu.html"; 
    });

    typeWriter();
};
