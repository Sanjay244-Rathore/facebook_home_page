let main = document.getElementById("main");
let loader = document.getElementById("loader");
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");
let email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let sec_login = document.getElementById("sec_login");
main.appendChild(sec_login);


setTimeout(() => {
  loader.style.display = "none";
  sec_login.style.display = "block";
}, 2000);


login =() =>{
    if(email.value === ""){
        message.style.display = "block";
        message.innerHTML = "Email Address Required!";
        email.focus()
        message.style.color = "red";
        setTimeout(() => {
            message.style.display = "none"
        }, 1500);
    }else if(!email.value.match(email_format)){
        message.style.display = "block";
        message.innerHTML = "Enter Valid Email Address!";
        email.focus()
        message.style.color = "red";
        setTimeout(() => {
            message.style.display = "none"
        }, 1500);
    }else if(password.value === ""){
        message.style.display = "block";
        message.innerHTML = "Password Required!";
        password.focus()
        message.style.color = "red";
        setTimeout(() => {
            message.style.display = "none"
        }, 1500);
    }else{
        message.style.display = "block";
        message.innerHTML = "Login Successfully";
        message.style.color = "green";
        setTimeout(() => {
            message.style.display = "none"
        }, 1500);
        email.value = "";
        password.value = "";
    }
}
