
 
 var slidebar = document.getElementById("slidebar");
 function shownmenu(){
    slidebar.style.top = "0"
 }
 function hidemenu(){
    slidebar.style.top = "-100%";
 }
 





 function hide() {
    document.getElementById("ul").style.left = "-100%";
  }


window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 20;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "jovinobironmonterde@gmail.com",
        Password : "Welcome1234567890!!!",
        To : 'jovinobironmonterde@gmail.com',
        From : document.getElementById("email").value,
        subject : "new contact form Enquiry",
        body : "Name:" + document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Phone no.:" + document.getElementById("phone").value
            + "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert("Message sent Succesfully")
    )
}

const text = ['Web Developer','Web Designer', 'Blogger'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type(){
     
    if (count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.anim-skill').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
       
    }
    setTimeout(type, 200);
    typeSpeed: 100;
    backSpeed: 60;
    loop: true;
    

})();


