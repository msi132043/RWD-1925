$(function () {
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        dots: true,
        cssEase: 'linear',
        pauseOnHover: false
    });

    $(document).ready(function () {
        $('.story_video--venobox').venobox({
            //  framewidth: '900px',                         // default: ''
            //  frameheight: '500px',                        // default: ''
            //  border: '1px',                               // default: '0'
            //  bgcolor: '#00e0d0',                          // default: '#fff'
            //  titleattr: 'data-title',                     // default: 'title'
            //  numeratio: true,                             // default: false
            //  infinigall: true,                            // default: false
            share: ['facebook', 'twitter', 'download'], // default: []
            spinner: 'cube-grid',
            spinColor: '#00e0d0',
        });
    });

    $('.text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        dots: true,
        cssEase: 'linear',
        pauseOnHover: false
    });


    var containerEl = document.querySelector('.filter_box');

    var mixer = mixitup(containerEl);


});


const userName = document.querySelector("#user_name");

const userEmail = document.querySelector("#user_email");

const subject = document.querySelector("#subject");

const message = document.querySelector("#message");

const submit = document.querySelector("#submit");

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function formValidation() {
    if (userName.value == '') {
        userName.placeholder = "Name is required";
        userName.classList.add("error");
        userName.focus();
        return false;
    } else if (userEmail.value == '') {
        userEmail.placeholder = "Email is required";
        userEmail.classList.add("error");
        userEmail.focus();
        return false;
    } else if (!emailFormat.test(userEmail.value)) {
        userEmail.value = "";
        userEmail.placeholder = "Valid Email is required";
        userEmail.classList.add("error");
        userEmail.focus();
        return false;
    } else if (subject.value == '') {
        subject.placeholder = "Subject is required";
        subject.classList.add("error");
        subject.focus();
        return false;
    } else if (message.value == '') {
        message.placeholder = "Message is required";
        message.classList.add("error");
        message.focus();
        return false;
    }
}


function removeError() {
    if (userName.value != '') {
        userName.classList.remove("error");
    }
    if (userEmail.value != '') {
        userEmail.classList.remove("error");
    }
    if (subject.value != '') {
        subject.classList.remove("error");
    }
}

userName.addEventListener('blur', removeError);
userEmail.addEventListener('blur', removeError);
subject.addEventListener('blur', removeError);

function ClearForm() {
    document.contactForm.reset();
}
