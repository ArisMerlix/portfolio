
var liactive=document.querySelectorAll("#switch_box ul li a");

for (var i = 0; i < liactive.length; i++) {
  liactive[i].addEventListener("click",active);
}
function active(e) {
  target=this;
  while (target.nodeName!="LI") {
    target=target.parentElement;
  }
  var autre=document.querySelectorAll('section ul li');
  for (var i = 0; i < autre.length; i++) {
    if (autre[i].id!=target.id && autre[i].classList.contains("active-li")) {
      autre[i].classList.remove("active-li");
    }
  }
  target.classList.add("active-li");


  var lien=this.hash;

  var act=document.querySelector(lien);
  var autres=document.getElementsByClassName('one_content');

  for (var i = 0; i < autres.length; i++) {
    if (autres[i].id!=act.id) {
      autres[i].classList.add("inactive-content");
    }
  }
  act.classList.remove("inactive-content");

  e.preventDefault();
}
