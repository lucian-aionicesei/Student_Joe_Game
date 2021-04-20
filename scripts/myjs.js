
// alert("hello console");

// console.log("hello world");

// rotate();

position1();

moveRight();

paused();

unpaused();

function rotate() {
    document.querySelector("#a_container1").classList.add("rotate");
}

function moveRight() {
    document.querySelector("#a_container1").classList.add("moveRight");
}

function position1() {
    document.querySelector("#a_container1").classList.add("position1");
}

function paused() {
    console.log("paused").document.querySelector("#a_container1").classList.add("paused");
}

function unpaused() {
    console.log("unpaused").document.querySelector("#a_container1").classList.remove("paused");
}