import { 
  slideContainers, 
  modifyI, 
  i,
  setDisplayed,
 } from "./slideShow";

let sliderIndexes = Array.from(slideContainers).map((x) => x.id);
export let navButtons = document.getElementsByClassName("navButtons");
let nav = document.getElementById("nav");
export let buttonArray = [];

export function createNav() {
  sliderIndexes.forEach((element, index) => {
    element = document.createElement("div");
    element.className = "navButtons";
    element.id = sliderIndexes[index].replace(/-/g, "_");
    buttonArray.push(element);
    element.addEventListener("click", () => {
      console.log(buttonArray.indexOf(element));
      slideContainers[i].style =
        "visibility: hidden; transition: .5s ease-out; opacity: 0";
      modifyI(buttonArray.indexOf(element));
      slideContainers[i].style =
        "visibility: visible; transition: opacity .5s; opacity: 1;";
        setDisplayed(slideContainers[i]);
    });
    nav.appendChild(element);
  });
}