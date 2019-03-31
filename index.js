

const menu = document.getElementsByClassName('nav-item');
const areaBlock = document.getElementsByClassName('area-block')

for (let i = 0; i < menu.length; i++) {
  const show = menu[i].attributes['show'].value;
  menu[i].addEventListener('click', function() {
    toggleVisibility(show);
  })
}


// Makes each block visible

function clearAll() {
  for (i of areaBlock) {
      i.style.visibility = "hidden";
      }
}

function toggleVisibility(show) {
    clearAll();
    document.getElementById(show).style.visibility = "visible";
  }

clearAll();
