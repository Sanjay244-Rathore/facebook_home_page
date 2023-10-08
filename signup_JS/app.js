let first_name = document.getElementById("first_name");
let sec_signUp = document.getElementById("sec_signUp");
let last_name = document.getElementById("last_name");
let mob_num = document.getElementById("mob_num");
let for_pass = document.getElementById("for_pass");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_pass = document.getElementById("confirm_pass");
let outcome = document.getElementById("outcome");
let for_email = document.getElementById("for_email");
let for_message = document.getElementById("for_message");
let email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let verify_sec = document.getElementById("verify");
let verify_message = document.getElementById("verify_message");

let allUsers = [];

SignUp = () => {
    if (first_name.value === "") {
        outcome.style.display = "block";
        outcome.innerHTML = "First Name Required!";
        first_name.focus()
        outcome.style.color = "red";
        setTimeout(() => {
            outcome.style.display = "none"
        }, 1500);
    } else if (last_name.value === "") {
        outcome.style.display = "block";
        outcome.innerHTML = "Last Name Required!";
        last_name.focus()
        outcome.style.color = "red";
        setTimeout(() => {
            outcome.style.display = "none"
        }, 1500);
    } else if (mob_num.value === "") {
        outcome.style.display = "block";
        outcome.innerHTML = "Mobile Number Required!";
        mob_num.focus()
        outcome.style.color = "red";
        setTimeout(() => {
            outcome.style.display = "none"
        }, 1500);
    } else if (email.value === "") {
        outcome.style.display = "block";
        outcome.innerHTML = "Email Address Required!";
        email.focus()
        outcome.style.color = "red";
        setTimeout(() => {
            outcome.style.display = "none"
        }, 1500);
    } else if (password.value === "") {
        outcome.style.display = "block";
        outcome.innerHTML = "Password Required!";
        password.focus()
        outcome.style.color = "red";
        setTimeout(() => {
            outcome.style.display = "none"
        }, 1500);
    } else if (password.value.length < 6) {
        outcome.style.display = "block";
        outcome.innerHTML = "please enter at least 6 digit password!";
        password.focus()
        outcome.style.color = "red";
        setTimeout(() => {
            outcome.style.display = "none"
        }, 1500);
    } else if (confirm_pass.value === "") {
        outcome.style.display = "block";
        outcome.innerHTML = "Confirm Password Required!";
        confirm_pass.focus()
        outcome.style.color = "red";
        setTimeout(() => {
            outcome.style.display = "none"
        }, 1500);
    } else if (confirm_pass.value !== password.value) {
        outcome.style.display = "block";
        outcome.innerHTML = "please enter the matching password!";
        confirm_pass.focus()
        outcome.style.color = "red";
        setTimeout(() => {
            outcome.style.display = "none"
        }, 1500);
    } else {
        outcome.style.display = "block";
        outcome.innerHTML = "Successfully created new account";
        outcome.style.color = "green";
        setTimeout(() => {
            outcome.style.display = "none"
        }, 1500);

        let obj = {
            firstName: first_name.value,
            lastName: last_name.value,
            Mob_Num: mob_num.value,
            email: email.value,
            password: password.value,
            Confirmed_password: confirm_pass.value,
        }
        allUsers.push(obj);

        first_name.value = "";
        last_name.value = "";
        mob_num.value = "";
        email.value = "";
        password.value = "";
        confirm_pass.value = "";
    }
    console.log(allUsers)
}

reset = () => {
    if (for_email.value === "") {
        for_message.style.display = "block";
        for_message.innerHTML = "Email Address Required";
        for_message.style.color = "red";
        for_email.focus();
        setTimeout(() => {
            for_message.style.display = "none";
        }, 1500);
    } else if (!for_email.value.match(email_format)) {
        for_message.style.display = "block";
        for_message.innerHTML = "Plese enter valid email Address";
        for_message.style.color = "red";
        for_email.focus();
        setTimeout(() => {
            for_message.style.display = "none";
        }, 1500);
    } else {
        // for (let i = 0; i < allUsers.length; i++) {
            if (for_email.value !== "sanjaykumar@gmail.com") {
                for_message.style.display = "block";
                for_message.innerHTML = "There is no such user recorded with this email, may be it has been deleted";
                for_message.style.color = "red";
                for_email.focus();
                setTimeout(() => {
                    for_message.style.display = "none";
                }, 1500);
            }else{
                for_message.style.display = "block";
                for_message.innerHTML = "your password reset so please check out email";
                for_message.style.color = "green";
                for_email.focus();
                setTimeout(() => {
                    for_message.style.display = "none";
                    for_pass.style.display = "none";
                    verify_sec.style.display = "block";
                }, 1500);
            }
        // }
    }
}



confirm = ()=>{
    // alert("hello world")
    verify_message.style.display = "block";
    verify_message.innerHTML = "A verification link has been sent to your email account";
    verify_message.style.color = "green";
    setTimeout(() => {
        verify_message.style.display = "none";
    }, 1500);
}
resend = ()=>{
    window.open("./forgot_pass.html")
}