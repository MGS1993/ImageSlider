let body = document.getElementById("body");

let topNav = document.createElement("div");
    topNav.style = "position: absolute; top: 0; height: 10%; width: 100vw;";
    body.appendChild(topNav);
let dropDown = document.createElement("div");
    dropDown.id = "dropDown";
    dropDown.style =
  "position: absolute; height: 36%; width: 2.5%; border: 2px solid rgb(72,70,70); border-radius: 25px; background: white; opacity: 30%; transition: opacity 300ms; ";
    topNav.appendChild(dropDown);
let plusIcon = document.createElement("img");
    plusIcon.setAttribute("src", "/img/icons8-plus-26.png");
    plusIcon.style =
  "position: absolute; height: 80%; width: 80%; left: 7%; top: 7%;";
let extendedDD = document.createElement('div');
    // extendedDD.classList = "extendedDD";
    extendedDD.style = "position: relative; display: flex; height: 100%; left: 100%; width: 800%;";
    dropDown.appendChild(extendedDD);
    dropDown.appendChild(plusIcon);

  let menu = document.createElement('div');
      menu.classList = "extendedDD";
      extendedDD.appendChild(menu);
  let information = document.createElement('div');
      information.classList = "extendedDD";
      extendedDD.appendChild(information);
  let about = document.createElement('div');
      about.classList = "extendedDD";
      extendedDD.appendChild(about);


// dropDown.addEventListener('click', function(){})
