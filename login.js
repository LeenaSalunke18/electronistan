let email = "solangitv@gmail.com"
let pass = "designneverdie"
var emailinput = document.getElementById("emailinput")
var passinput = document.getElementById("passinput")
var next = document.getElementById("next")
var span1 = document.getElementById("span1")



function signin(){
    if (email === emailinput.value){
        window.location = "login2.html";
}
    else {
        document.getElementById("span1").style.display = "block";    
    }
}




function password(){
    if (pass === passinput.value){
        window.location = "index.html";
    }
    else{
        document.getElementById("span2").style.display = "block";    

    }
}