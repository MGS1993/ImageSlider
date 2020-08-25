import { 
  slideContainers,
 } from './functionality';

 let sliderIndexes = (Array.from(slideContainers)).map(x => x.id);
 export let navButtons = document.getElementsByClassName('navButtons');
 let nav = document.getElementById('nav');

export function createNav() {
  sliderIndexes.forEach((element, index) => {
    element = document.createElement('div');
    element.className = "navButtons";
    element.id = sliderIndexes[index].replace(/-/g, '_');
    nav.appendChild(element);
    
  })
 }
 
