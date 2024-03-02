/*
================ player one all properties selectors      =================
*/
const playerOne = document.querySelector(".playerOne");
const playerOnePlayer = document.querySelector(".playerOne__player");
const playerOneNumber = document.querySelector(".playerOne__number");
const startInput = document.querySelector(".startInput");

const startBtn = document.querySelector(".startBtn");

const oneErr = document.querySelector(".oneErr");

/*
================ player two all properties selectors      =================
*/
const playerTwo = document.querySelector(".playerTwo");
const playerTwoPlayer = document.querySelector(".playerTwoe__player");
const playerTwoNumber = document.querySelector(".playerTwo__number");
const guessInput = document.querySelector(".guessInput");

const guessBtn = document.querySelector(".guessBtn");

const twoErr = document.querySelector(".twoErr");

/*
================ player input default value   =================
*/
guessInput.value = "";
startInput.value = "";

/*
================ player box selector & image box  =================
*/

const boxOne = document.querySelector(".boxOne");
const boxTwo = document.querySelector(".boxTwo");

const img = document.querySelector(".img");
const imgBox = document.querySelector(".imgBox");

// player one value & chance selector & restart btn

const allChance = document.querySelector(".allChance");

let playerOneValue = null;
let chance = 5;

allChance.innerHTML = `you have ${chance} chances`;

const restart = document.querySelector(".restart");

/*
================ player one eventlistner     =================
*/
startBtn.addEventListener("click", () => {
    if (isNaN(startInput.value)) {
        oneErr.innerHTML = "please insert a number";
        return;
    } else if (startInput.value.length > 4) {
        oneErr.innerHTML = "please insert a 4 digit number";
        return;
    }
    console.log(startInput.value);
    playerOneValue = startInput.value;
    boxTwo.style.display = "block";
    boxOne.style.display = "none";
    imgBox.style.display = "flex";
    img.setAttribute("src", "images/1.png");
});

// one keydown eventlistner

startInput.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
        oneErr.innerHTML = "";
        return;
    }
});

// two keydown eventlistner

guessInput.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
        twoErr.innerHTML = "";
        return;
    }
});

/*
================ player one eventlistner     =================
*/
guessBtn.addEventListener("click", () => {
    if (isNaN(guessInput.value)) {
        twoErr.innerHTML = "please insert a number";
        return;
    } else if (guessInput.value.length > 4) {
        twoErr.innerHTML = "please insert a 4 digit number";
        return;
    }

    let playerTwoValue = guessInput.value;
    if (playerOneValue == playerTwoValue) {
        allChance.innerHTML = `you win`;
        boxTwo.style.display = "none";
        img.style.width = "200px";
        restart.style.display = "block";
        img.setAttribute("src", "images/win.png");
    } else {
        chance--;
        if (chance == 4) {
            img.setAttribute("src", "images/2.png");
        } else if (chance == 3) {
            img.setAttribute("src", "images/3.png");
        } else if (chance == 2) {
            img.setAttribute("src", "images/4.png");
        } else if (chance == 1) {
            img.style.width = "120px";
            img.setAttribute("src", "images/5.png");
        }
        if (chance <= 0) {
            allChance.innerHTML = `Game over`;
            boxTwo.style.display = "none";
            restart.style.display = "block";
            img.style.width = "200px";
            img.setAttribute("src", "images/lose.png");
        } else {
            allChance.innerHTML = `you have ${chance} chances`;
        }

        console.log("kisu nai");
    }
});

// restart button event listner

restart.addEventListener("click", () => {
    location.reload();
});
