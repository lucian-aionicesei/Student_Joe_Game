window.addEventListener("load", start);

let motivation = 3;
let points = 0;

function start() {
    console.log("start");
    document.querySelector("#time_counter").classList.add("time_countdown");
    document.querySelector("#time_counter").addEventListener("animationend", time_is_over);

    // Green_Ghost_1
    document.querySelector("#a_container1").classList.add("position" + generateRandomNumber(6));
    document.querySelector("#a_container1").classList.add("flyToRight" +  generateRandomNumber(2));
    // Click eventListener
    document.querySelector("#a_container1").addEventListener("click", clickGreenGhost1);
    // Add eventlisteners: animationiteration
    document.querySelector("#a_container1").addEventListener("animationiteration", restart_GreenGhost1);

}

function time_is_over() {
    console.log("finito!");
}

function generateRandomNumber(number) {
    let rdmNb = Math.floor(Math.random() * number) + 1;
    return rdmNb;
}

// Green_Ghost_1

function clickGreenGhost1() {

    console.log("clickGreenGhost1");
    // Cancel eventListener
    document.querySelector("#a_container1").removeEventListener("click", clickGreenGhost1);
    // pause animation
    document.querySelector("#a_container1").classList.add("paused");
    // Initialize add_10_points
    document.querySelector("#a_sprite1").classList.add("plus_10_points");
    // Play added points sound

    // Get 10 points
    points += 10;
    // print points in Ui
    document.querySelector("#points").textContent = points;
    // Restart animation
    document.querySelector("#a_sprite1").addEventListener("animationend", restart_GreenGhost1);
}

function restart_GreenGhost1() {
    console.log("restart_GreenGhost1");

    document.querySelector("#a_container1").classList = "";
    document.querySelector("#a_sprite1").classList = "";

    // to jump a frame
    document.querySelector("#a_container1").offsetHeight;

    document.querySelector("#a_container1").classList.add("position" + generateRandomNumber(6));
    document.querySelector("#a_container1").classList.add("flyToRight" +  generateRandomNumber(2));
    document.querySelector("#a_sprite1").classList.add("green_ghost");
    document.querySelector("#a_container1").addEventListener("click", clickGreenGhost1);

}

// Ui buttons
// Ui buttons
// Ui buttons
// Ui buttons

// Ui buttons
// mute
document.querySelector("#mute_button").addEventListener("click", mute);

function mute() {
    document.querySelector("#mute_button").classList.toggle("unmute");
}

// pause
document.querySelector("#play_pause_button").addEventListener("click", pause);

function pause() {
    document.querySelector("#play_pause_button").classList.toggle("play_button_1");
}