import { navButtons } from './navBar'
let i = 0;
export let rightArrow = document.getElementById("rightArrow");
export let leftArrow = document.getElementById("leftArrow");
let frame = document.getElementById("frame");
export let slideContainers = frame.getElementsByTagName("div");
let albumLength = slideContainers.length - 1;
export let displayed;
let navCircle
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


function setDisplayed(target) {

  displayed = target.id.replace(/-/g, '_');
  navCircle = Array.from(navButtons);
  navCircle.forEach((element) => {
    if (displayed == element.id) {
      element.style = "background: blue"
    } else if (displayed != element.id) {
      element.style = "background: grey";
    } else {
      console.log("failed")
    }
  })
}

export function showDisplayOnLoad() {
  slideContainers[i].style = "visibility: visible; opacity: 1;";
}

export function showDisplayToRight() {
  if (i >= slideContainers.length - 1) {
    slideContainers[i].style =
      "visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;"; //0
    clearI();
    slideContainers[i].style =
      "visibility: visible; transition: opacity .5s; opacity: 1;";
    setDisplayed(slideContainers[i]);
    
  } else if (i == 0) {
    slideContainers[i].style =
      "visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;"; //0
      
    addI();
    slideContainers[i].style =
      "visibility: visible; transition: opacity .5s; opacity: 1;";

    setDisplayed(slideContainers[i]);
    
  } else {
    slideContainers[i].style =
      "visibility: hidden; transition: .5s ease-out; transform:translate(-400px); opacity: 0;"; //0
    addI();
    slideContainers[i].style =
      "visibility: visible; transition: opacity .5s; opacity: 1;";

    setDisplayed(slideContainers[i]);
    
  }
  
}

export function showDisplayToLeft() {
  if (i >= slideContainers.length) {
    slideContainers[albumLength].style =
      "visibility: hidden; transition: .5s ease-out; transform:translate(400px); opacity: 0;";
    clearI();
  } else if (i == 0) {
    slideContainers[i].style =
      "visibility: hidden; transition: .5s ease-out; transform:translate(400px); opacity: 0;";
    modifyI(albumLength);
    slideContainers[i].style =
      "visibility: visible; transition: opacity .5s; opacity: 1;";
    setDisplayed(slideContainers[i]);
  } else {
    slideContainers[i].style =
      "visibility: hidden; transition: .5s ease-out; transform:translate(400px); opacity: 0;";
    subtractI();
    slideContainers[i].style =
      "visibility: visible; transition: opacity .5s; opacity: 1;";
    setDisplayed(slideContainers[i]);
  }
}


