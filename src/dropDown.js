let dropDown = document.getElementById('dropDown');
let extended = document.getElementById('extended');
let icon = document.getElementById('icon');

function showVis(target) { 
  if(target.style.opacity == 1){
    target.style = "opacity: 0%;";
    tiltItem(dropDown, 90);
  } else {
    target.style = "opacity: 100%;";
    tiltItem(dropDown, 45);
  }
  
}

function tiltItem(target, deg) {
  target.style = `transform: rotate(${deg}deg);`
  console.log("test")
}
dropDown.addEventListener("click", function() {showVis(extended)})
// dropDown.addEventListener("click", function() {tiltItem(icon, 45)})