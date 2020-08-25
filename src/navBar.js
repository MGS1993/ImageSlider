import { 
  displayed,
  slideContainers,
 } from './functionality';

 let sliderIndexes = (Array.from(slideContainers)).map(x => x.id);
 export let navButtons = document.getElementsByClassName('navButtons');
 let nav = document.getElementById('nav');

  console.log(slideContainers);
  // console.log(nav)




 function createNav() {
  sliderIndexes.forEach((element, index) => {
    element = document.createElement('div');
    element.className = "navButtons";
    element.id = sliderIndexes[index].replace(/-/g, '_');
    nav.appendChild(element);
    
  })
 }

//   function navFunctionality(displayed) {
//     console.log()
//   }
// navFunctionality();
 createNav();
//  console.log(navButtons)
 

// Array.from(navButtons).forEach((element, index) => {
//   element.id = sliderIndexes[index]
// })
///////TRY TO MAKE A FUNCTION THAT TURNS THE CIRCLES A COLOR WHEN 'DISPLAYED' IS TRIGGERED IN 
///////FUNCTIONALITY
