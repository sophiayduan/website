dragElement(document.getElementById("jpeg"));
dragElement(document.getElementById("endev"));
dragElement(document.getElementById("depot"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;


    let newTop = elmnt.offsetTop - pos2;
    let newLeft = elmnt.offsetLeft - pos1;

    const maxTop = window.innerHeight - elmnt.offsetHeight;
    const maxLeft = window.innerWidth - elmnt.offsetWidth;

    if (newTop < 0) newTop = 0;
    if (newLeft < 0) newLeft = 0;
    if (newTop > maxTop) newTop = maxTop;
    if (newLeft > maxLeft) newLeft = maxLeft;

    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//the code above is thanks to w3schools
let z_index = 10;

const tabs = document.querySelectorAll('.tab')
const projects = document.querySelectorAll('.proj')

tabs.forEach((tab, i) => {
  tab.addEventListener('mousedown', () => {
    z_index++
    tab.style.zIndex = z_index
  })


  projects[i].addEventListener('mousedown', () => {
    z_index++;
    tab.style.zIndex = z_index;
  });
});

function clicked(e, desktopTab) {
  if (window.innerWidth <=768) {
    return;
  }
  else {
    e.preventDefault();
      const tab = document.getElementById(desktopTab);
      tab.style.display = "block"  
}
}

reveal_about.addEventListener('click', () => {
  document.getElementById('about').classList.toggle('hidden');
});