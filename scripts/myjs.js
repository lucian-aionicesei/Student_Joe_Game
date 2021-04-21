// alert("hello console");
// console.log("hello world");

addPosition1();
fly();
// moveToRight1();
// pauseAnimation();


function addPosition1() {
    console.log("addPosition1");
    document.querySelector("#a_container1").classList.add("position1");
}

function fly() {
    document.querySelector("#a_container1").classList.add("fly");
}

document.querySelector("#mute_button").addEventListener("click", mute);

document.querySelector("#play_pause_button").addEventListener("click", pause);

document.querySelector("#a_container1").addEventListener("click", pauseAnimation);

document.querySelector("#a_container1", "#a_sprite1").addEventListener("click", add_10_points);

function add_10_points() {
    console.log("added_10_points");
    document.querySelector("#a_sprite1").classList.toggle("plus_10_points");
    document.querySelector("#a_sprite1").addEventListener("animationend", restart);
}

function moveToRight1() {
    console.log("moveToRight");
    document.querySelector("#a_container1").classList.add("moveRight");
}


function pauseAnimation() {
    console.log("pauseAnimation");
    document.querySelector("#a_container1").classList.add("paused");
}

// function unpauseAnimation() {
//     document.querySelector("#a_container1").classList.remove("paused");
// }

function mute() {
    document.querySelector("#mute_button").classList.toggle("unmute");
}

function pause() {
    document.querySelector("#play_pause_button").classList.toggle("play_button_1");
}

function restart() {
    console.log("restart");

    document.querySelector("#a_container1").classList = "";
    document.querySelector("#a_sprite1").classList = "";

    // to jump a frame
    document.querySelector("#a_container1").offsetHeight;

    document.querySelector("#a_container1").classList.add("fly");
    document.querySelector("#a_container1").classList.add("position1");
    document.querySelector("#a_sprite1").classList.add("green_ghost");
    document.querySelector("#a_container1").classList.add("paused");
    document.querySelector("#a_container1").classList.remove("paused");

}