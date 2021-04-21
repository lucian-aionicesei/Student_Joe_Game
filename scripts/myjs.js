// alert("hello console");
// console.log("hello world");

addPosition1();
moveToRight1();

function addPosition1() {
    console.log("addPosition1");
    document.querySelector("#a_container1").classList.add("position1");
}

function moveToRight1() {
    console.log("moveToRight");
    document.querySelector("#a_container1").classList.add("moveRight");
}

function pauseAnimation() {
    console.log("pauseAnimation");
    document.querySelector("#a_container1").classList.add("paused");
}

function unpauseAnimation() {
    document.querySelector("#a_container1").classList.remove("paused");
}