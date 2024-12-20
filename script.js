//--------------- toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

//--------------- scroll sections active link 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{ 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
             links.classList.remove('active');
             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');    
            });
        };
    });

//--------------- sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY  > 100);

//--------------- remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//--------------- scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .about-content', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p', {origin:'right'});


var typed = new Typed(".multiple-text", {
    strings: ["Software Engineer", "Product Associate", "Entrepreneur"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//var contac = document.getElementById("contact");

// contac.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // 

//   var username = document.getElementById("username");
//   var email = document.getElementById("email");
//   var phonenumber = document.getElementById("phonenumber");
//   var emailsub = document.getElementById("emailsub");
//   var message = document.getElementById("message"); 

//   if (username.value == "" || email.value == "" || phonenumber.value == "" || emailsub.value == "" || message.value == "") {
//     alert("Ensure you input a value in all fields!");
//   } else {
//     // perform operation with form input
//     alert("This form has been successfully submitted!");
//     console.log(
//       `This form has a username of ${username.value} and email of ${email.value} and phonenumber of ${phonenumber.value} and email subject of ${emailsub.value} and your message ${message.value}`
//     );
    

//     username.value = "";
//     email.value = "";
//     phonenumber.value = "";
//     emailsub.value = "";
//     message.value = "";

    
//   }
// })
// contac.reset();

    



    
