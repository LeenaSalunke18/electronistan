function tc(a){
    var x = document.querySelector(a).value;
    return x;
  }
  function msg(a){
    var x = document.querySelector(".emsg").innerHTML=a;
    return x;
  }
  function msgb(a){
    var x = document.querySelector(".emsgb").innerHTML=a;
    return x;
  }
  function size(a){
    var x = document.querySelector(a).value.length;
    return x;
  }
  // show hide function
  //var idhide=document.getElementById("singup");
  function singu() {
    var hide=document.querySelector(".form-login");
  
    if (hide.classList[1]=="hidden") {
      hide.classList.toggle("visible");
    }else {
      hide.classList.toggle("hidden");
    }
    console.log(hide.classList);
    return hide;
  }
  // Sing up
  function singup(){
    if (tc(".fname")==null || tc(".fname")=="") {
      msgb("Please Enter First name");
      return false;
    }
    if (tc(".lname")==null || tc(".lname")=="") {
      msgb("Please Enter Last name");
      return false;
    }
    if (tc(".email")==null || tc(".email")=="") {
      msgb("Please Enter Email");
      return false;
    }
    if (tc(".pwd")==null || tc(".pwd")=="") {
      msgb("Please Enter Password");
      return false;
    }
    if (tc(".pwd")!=tc(".conpwd")) {
      msgb("Password Miss match");
      return false;
    }
    if (size(".pwd") <= 10) {
      msgb("Minimum Password length 10");
      return false;
    }
  }
  