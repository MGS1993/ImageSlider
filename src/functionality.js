export let i = 0;
export let rightArrow = document.getElementById("rightArrow");
export let leftArrow = document.getElementById('leftArrow');
let frame = document.getElementById('frame');
let slideContainers = frame.getElementsByTagName('div');
let albumLength = slideContainers.length-1;
console.log(i)

function clearI(){
     i = 0
}
function addI(){
    i++;
}
function subtractI() {
    i--;
}

function modifyI(target) {
    i = target
}


export function showDisplayOnLoad() {
    slideContainers[i].style = "Display: block"
}
export function showDisplayToRight() {   
    if (i >= slideContainers.length-1) {
        slideContainers[i].style = "display: none"; //0
        clearI();
        slideContainers[i].style = "display: block";
    } else if(i == 0){
        slideContainers[i].style = "display: none";
        addI()
        slideContainers[i].style = "display: block";
    }
        else { 
        slideContainers[i].style = "display: none"; //0
        addI();
        slideContainers[i].style = "display: block"; //1
    }
    console.log(i)
}

export function showDisplayToLeft() {
    if (i >= slideContainers.length) {
        slideContainers[albumLength].style = "display: none";
        clearI();

    } else if(i == 0){
        slideContainers[i].style = "display: none";
        modifyI(albumLength);
        slideContainers[i].style = "display: block";
    }
        else {
        slideContainers[i].style = "display: none"; 
        subtractI()
        slideContainers[i].style = "display: block"; 
        
        
    }
    console.log(i)
}