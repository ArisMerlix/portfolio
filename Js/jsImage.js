
var My_Image= function(path, class_){
  this.img=new Image();

	this.img.src=path;
	this.img.classList.add(class_);
}

function clone_append(list_,node_){
  for (var i = 0; i < list_.length; i++) {
    p_img=node_.img.cloneNode()
    list_[i].appendChild(p_img);
  }
}

var python_img=new My_Image('images/py.png', "logo_project");
var pythonClasses=document.getElementsByClassName('_withpythonimg');
clone_append(pythonClasses, python_img)

var spring_img=new My_Image('images/spring.png', "logo_project")
var springClasses=document.querySelectorAll('._withspringimg');
clone_append(springClasses, spring_img)

var git_img=new My_Image('images/Git.png', "logo_project")
var ps_img=new My_Image('images/ps.png', "logo_project")

window.addEventListener("load", () => {
  var proClasses=document.querySelectorAll('#pro > a');

  ps_img_=ps_img.img.cloneNode();
  proClasses[0].appendChild(ps_img_);

  ps_img_=ps_img.img.cloneNode();
  proClasses[1].appendChild(ps_img_);

  p_img_=python_img.img.cloneNode();
  proClasses[2].appendChild(p_img_);

  s_img_=spring_img.img.cloneNode();
  s_img_.style.marginLeft="5px"
  g_img_=git_img.img.cloneNode();
  proClasses[3].append(s_img_, g_img_);

  var api_img=new My_Image('images/api.png', "content_img");
  var apiId=document.getElementById('data');
  apiId.prepend(api_img.img);

  // var mx_img=new My_Image('images/MX2.png', "mx");
  // var mxClasses=document.getElementsByClassName('one_switch');
  // clone_append(mxClasses, mx_img)
})
