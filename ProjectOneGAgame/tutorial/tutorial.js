window.onload = function () {
    let i = 0;
    let dialogues = [  "Hey noobie, welcome to hobo fight club. My name is mask boy. " + 
    "I'll show you a thing or two about how to beat these other guys in the world of Hobo Fight Club!",
    
    "First things first, Despite our organization being called Hobo Fight Club I need you to know I am not broke by any means... I got a couple of quarters here in my left pocket.",

    "Oh you don't care? Okay good, well anyways lets continue ",

    "The game works on a heads or tails basis, hence the couple of quarters in my pocket.",

    "To play the game you will go against some tough opponents such as myself in a games of heads or tails. There will be three rounds and if you win the game of heads or tails you beat the other guy. Don't ask me why it works like that it just does. Maybe the developer of this game was lazy or something. Idk don't question it.",

    "Why are you still here go back to the main menu and start whooping these guys! Pressing the next button this time should send you back.",

    "Just kidding, you are stuck with me here forever, The developer apparently didn't figure out a way to make the next button send you back to the home screen.",];

    let currentDialogue = 0;
    let speed = 50;
    let dialogueElement = document.getElementById("dialogue");
    let nextButton = document.getElementById("NextButton");

    function typeWriter() {
        if (i < dialogueElement[currentDialogue].length) {
            dialogueElement.innerHTML += dialogues[currentDialogue].charAt(i);
            i++
            setTimeout(typeWriter, speed);
        } else {
            nextButton.style.display = "block";
        }
    }

    
}