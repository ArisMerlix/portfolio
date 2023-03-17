
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

var ai_img=new My_Image('images/ai.png', "logo_project")
var aiClasses=document.querySelectorAll('._withaiimg');
clone_append(aiClasses, ai_img)

var python_img=new My_Image('images/py.png', "logo_project");
var pythonClasses=document.getElementsByClassName('_withpythonimg');
clone_append(pythonClasses, python_img)

var spring_img=new My_Image('images/spring.png', "logo_project")
var springClasses=document.querySelectorAll('._withspringimg');
clone_append(springClasses, spring_img)

var docker_img=new My_Image('images/docker-logo.png', "logo_project")
var dockerClasses=document.querySelectorAll('._withdockerimg');
clone_append(dockerClasses, docker_img)

var spark_img=new My_Image('images/Spark.png', "logo_project")
var sparkClasses=document.querySelectorAll('._withsparkimg');
clone_append(sparkClasses, spark_img)

var git_img=new My_Image('images/Git.png', "logo_project")
var ps_img=new My_Image('images/ps.png', "logo_project")
var ampl_img=new My_Image('images/amplitude.png', "logo_project")
// var angular_img=new My_Image('images/angular.png', "logo_project")
var uml_img=new My_Image('images/Uml.webp', "logo_project")

window.addEventListener("load", () => {

  // Professional experiences
  var proClasses=document.querySelectorAll('#pro > a');

  //1
  ps_img_=ps_img.img.cloneNode();
  proClasses[0].appendChild(ps_img_);
  //2
  ps_img_=ps_img.img.cloneNode();
  proClasses[1].appendChild(ps_img_);
  //3
  py_img_=python_img.img.cloneNode();
  proClasses[2].appendChild(py_img_);
  //4
  s_img_=spring_img.img.cloneNode();
  s_img_.classList.add("mg-left");
  g_img_=git_img.img.cloneNode();
  proClasses[3].append(s_img_, g_img_);
  //5
  s_img_2=spring_img.img.cloneNode();
  s_img_2.classList.add("mg-left");
  ampl_img_=ampl_img.img.cloneNode();
  ampl_img_.classList.add("mg-left");
  // angular_img_=angular_img.img.cloneNode();
  // angular_img_.classList.add("mg-left");
  uml_img_=uml_img.img.cloneNode();
  uml_img_.classList.add("mg-left");
  proClasses[4].append(s_img_2,uml_img_,ampl_img_);

  var api_img=new My_Image('images/api.png', "content_img");
  var apiId=document.getElementById('data');
  apiId.prepend(api_img.img);

  // var mx_img=new My_Image('images/MX2.png', "mx");
  // var mxClasses=document.getElementsByClassName('one_switch');
  // clone_append(mxClasses, mx_img)
})
