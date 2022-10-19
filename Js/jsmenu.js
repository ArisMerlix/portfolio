
var popup=document.getElementsByClassName('pop_up_menu');
for (var i = 0; i < popup.length; i++) {
  popup[i].addEventListener('click',ouvrir_menu)
}
function ouvrir_menu() {
  var menu=document.querySelector('.menu');
  menu.style.zIndex="100"

  var main=document.querySelector('main');
  main.style.zIndex="50"
  main.style.display="none"
  window.onresize = function(event) {
    main.style.display="inline-block"
  }
}

var close=document.querySelector('#close');
close.addEventListener('click',fermer_menu)
function fermer_menu() {
  var menu=document.querySelector('.menu');
  menu.style.zIndex="50"

  var main=document.querySelector('main');
  main.style.zIndex="100"
  main.style.display="inline-block"
}

var max=document.querySelector('#max');
max.addEventListener('click',max_menu)
function max_menu() {
  var menu=document.querySelector('.menu');
  menu.classList.add("menu100");
  menu.classList.remove("border_right");

  var head=document.querySelectorAll('.head_menu','.lmf_head_menu');
  head.forEach((i) => {
    i.classList.add("head_menu100");
  });

  var main=document.querySelector('main');
  main.style.display="none"

  var min=document.querySelector('#min');
  min.style.display="inline-block"

  var max=document.querySelector('#max');
  max.classList.add("max_none");
  //max.style.display="none"

  var options=document.querySelector(".options");
  options.style.flexWrap="wrap"
  options.style.flexDirection="row"
  options.style.columnGap="5%"
  options.style.rowGap="20px"
}


var min=document.querySelector('#min');
min.addEventListener('click',min_menu)
function min_menu() {

  var menu=document.querySelector('.menu');
  menu.classList.remove("menu100");
  menu.classList.add("border_right");
  //menu.style.width="25%"

  var head=document.querySelectorAll('.head_menu','.lmf_head_menu');
  head.forEach((i) => {
    i.classList.remove("head_menu100");
  });

  var main=document.querySelector('main');
  main.style.display="inline-block"

  var min=document.querySelector('#min');
  min.style.display="none"

  var max=document.querySelector('#max');
  max.classList.remove("max_none");
  //max.style.display="inline-block"

  var options=document.querySelector(".options");
  options.style.flexWrap="no-wrap"
  options.style.flexDirection="column"
  options.style.columnGap="0"
  options.style.rowGap="0"

  //location.reload()
}

var click_menu=document.querySelectorAll('.menu-link');
for (var i = 0; i < click_menu.length; i++) {
  click_menu[i].addEventListener('click',retour_page)
}

function retour_page() {

  var close = document.querySelector('#close');
  var close_style = getComputedStyle(close);
  const disp = close_style.display;

  var min = document.querySelector('#min');
  var min_style = getComputedStyle(min);
  const disp2 = min_style.display;

  if (disp == "none") {
    if (disp2 != "none") {
      min_menu();
    }
  }
  else {
    fermer_menu();
  }
}
