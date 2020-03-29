//var fnames = document.getElementById('fname');
//var fnames_err = document.getElementById('fname_err');
//
//var lnames = document.getElementById('lname');
//var lnames_err = document.getElementById('lname_err');
//
//var emails = document.getElementById('email');
//var emails_err = document.getElementById('email_err');
//
//var pass = document.getElementById('pass');
//var pass_err = document.getElementById('pass_err');
//
//var email_rgx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//var pass_rgx= /^[A-Za-z]\w{7,14}$/;
//
//function form_valid() {
//    if (fnames.value == '') {
//        fnames_err.innerHTML = "Enter Your First Name";
//        fnames_err.style = 'color: #fff;';
//        fnames.style = 'border: 1px solid red;';
//        fnames.focus();
//
//        return false;
//    }
//    else if (lnames.value == '') {
//        lnames_err.innerHTML = "Enter Your Last Name";
//        lnames_err.style = 'color: #fff;';
//        lnames.style = 'border: 1px solid red;';
//        lnames.focus();
//
//        return false;
//    }
//    else if (emails.value == '') {
//        emails_err.innerHTML = "Enter Your E-mail";
//        emails_err.style = 'color: #fff;';
//        emails.style = 'border: 1px solid red;';
//        emails.focus();
//
//        return false;
//    }
//    else if (!email_rgx.test(emails.value)) {
//        emails_err.innerHTML = "Enter Your Valid E-mail";
//        emails_err.style = 'color: red;';
//        emails.style = 'border: 1px solid red;';
//        emails.focus();
//
//        return false;
//    }
//    else if (pass.value == '') {
//        pass_err.innerHTML = "Enter Your Password";
//        pass_err.style = 'color: #fff;';
//        pass.style = 'border: 1px solid red;';
//        pass.focus();
//
//        return false;
//    }
//    else if (!pass_rgx.test(pass.value)) {
//        pass_err.innerHTML = "Enter Your Valid Password";
//        pass_err.style = 'color: red;';
//        pass.style = 'border: 1px solid red;';
//        pass.focus();
//
//        return false;
//    }
//}
//
//function remove() {
//    if (fnames.value != '') {
//        fnames_err.innerHTML = '';
//        fnames.style = 'border: 1px solid inherit;';
//        
//    }
//    if (lnames.value != '') {
//        lnames_err.innerHTML = '';
//        lnames.style = 'border: 1px solid inherit;';
//        
//    }
//    if (emails.value != '') {
//        emails_err.innerHTML = '';
//        emails.style = 'border: 1px solid inherit;';
//        
//    }
//}
//
//
//fnames.addEventListener('blur', remove);
//lnames.addEventListener('blur', remove);
//emails.addEventListener('blur', remove);









//document.write("aste aste buje buje kori?");
var first_name = document.getElementById('first_name');
var first_name_error = document.getElementById('first_name_error');

var last_name = document.getElementById('last_name');
var last_name_error = document.getElementById('last_name_error');

var email = document.getElementById('email');
var email_error = document.getElementById('email_error');

var password = document.getElementById('password');
var password_error = document.getElementById('password_error');

var email_rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var password_rgx = /^[A-Za-z]\w{7,14}$/;

function form_validation() {
    if (first_name.value == '') {
        first_name_error.innerHTML = 'Enter Your First Name';
        first_name_error.style = 'background: rgba(255, 0, 0, 0.5);';
        first_name.style = 'border: 1px solid red;';
        first_name.focus();
        return false;
    } else if (last_name.value == '') {
        last_name_error.innerHTML = 'Enter Your Last Name';
        last_name_error.style = 'background: rgba(255, 0, 0, 0.5);';
        last_name.style = 'border: 1px solid red;';
        last_name.focus();
        return false;
    } else if (email.value == '') {
        email_error.innerHTML = 'Enter Your Email';
        email_error.style = 'background: rgba(255, 0, 0, 0.5);';
        email.style = 'border: 1px solid red;';
        email.focus();
        return false;
    } else if (!email_rgx.test(email.value)) {
        email_error.innerHTML = "Enter Your Valid E-mail";
        email_error.style = 'background: rgba(255, 0, 0, 0.5);';
        email.style = 'border: 1px solid red;';
        email.focus();
        return false;
    } else if (password.value == '') {
        password_error.innerHTML = 'Enter Your Password';
        password_error.style = 'background: rgba(255, 0, 0, 0.5);';
        password.style = 'border: 1px solid red;';
        password.focus();
        return false;
    } else if (!password_rgx.test(password.value)) {
        password_error.innerHTML = "Enter Your Valid E-mail";
        password_error.style = 'background: rgba(255, 0, 0, 0.5);';
        password.style = 'border: 1px solid red;';
        password.focus();
        return false;
    }
}


function remove_error() {
    if (first_name.value != '') {
        first_name_error.innerHTML = '';
        first_name.style = 'border: 1px solid inherit;';
        first_name_error.style = 'background: inherit;';
    }
    if (last_name.value != '') {
        last_name_error.innerHTML = '';
        last_name.style = 'border: 1px solid inherit;';
        last_name_error.style = 'background: inherit;';
    }
    if (email.value != '') {
        email_error.innerHTML = '';
        email.style = 'border: 1px solid inherit;';
        email_error.style = 'background: inherit;';
    }
}

first_name.addEventListener('blur', remove_error);
last_name.addEventListener('blur', remove_error);
email.addEventListener('blur', remove_error);


function reset_remove() {
    first_name_error.innerHTML = '';
    first_name.style = 'border: 1px solid inherit;';
    first_name_error.style = 'background: inherit;';
    
    last_name_error.innerHTML = '';
    last_name.style = 'border: 1px solid inherit;';
    last_name_error.style = 'background: inherit;';
    
    email_error.innerHTML = '';
    email.style = 'border: 1px solid inherit;';
    email_error.style = 'background: inherit;';
    
    password_error.innerHTML = '';
    password.style = 'border: 1px solid inherit;';
    password_error.style = 'background: inherit;';
}
