export let i = 0;
export let rightArrow = document.getElementById("rightArrow");
export let leftArrow = document.getElementById("leftArrow");
let frame = document.getElementById("frame");
let slideContainers = frame.getElementsByTagName("div");
let albumLength = slideContainers.length - 1;


function clearI() {
  i = 0;
}
function addI() {
  i++;
}
function subtractI() {
  i--;
}

function modifyI(target) {
  i = target;
}

export function showDisplayOnLoad() {
  slideContainers[i].style = "visibility: visible; opacity: 1;"
}
export function showDisplayToRight() {
  if (i >= slideContainers.length - 1) {
    // slideContainers[i].style = "display: none"; //0
    slideContainers[i].style = "visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;"; //0
    clearI();
    // slideContainers[i].style = "display: block";
    slideContainers[i].style = "visibility: visible; transition: opacity .5s; opacity: 1;"
  } else if (i == 0) {
    slideContainers[i].style = "visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;"; //0
    addI();
    slideContainers[i].style = "visibility: visible; transition: opacity .5s; opacity: 1;"
    console.log("test")
  } else {
    slideContainers[i].style = "visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;"; //0
    addI();
    slideContainers[i].style = "visibility: visible; transition: opacity .5s; opacity: 1;"
  }
}

export function showDisplayToLeft() {
  if (i >= slideContainers.length) {
    slideContainers[albumLength].style = "display: none";
    clearI();
  } else if (i == 0) {
    slideContainers[i].style = "display: none";
    modifyI(albumLength);
    slideContainers[i].style = "display: block";
  } else {
    slideContainers[i].style = "display: none";
    subtractI();
    slideContainers[i].style = "display: block";
  }
}
