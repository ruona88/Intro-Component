//Select all input fields and button;
const firstName = document.getElementById("user-firstname");
const lastName = document.getElementById("user-lastname");
const mail = document.getElementById("user-mail");
const password = document.getElementById("user-password");
const button = document.getElementsByTagName("button")[0];

//Add Event Listener to button and display errors if conditions are not met
button.addEventListener("click", () => {
   if(!firstName.value) {
       firstName.style.backgroundSize = "20px";
       document.getElementById("firstname-label").style.opacity = "1";
   } else {
        "";
   }
   
   if(!lastName.value) {
    lastName.style.backgroundSize = "20px";
    document.getElementById("lastname-label").style.opacity = "1";
   } else {
     "";
   }

   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(mail.value.match(validRegex)) {
      ""
}  else {
    mail.style.backgroundSize = "20px";
    document.getElementById("email-label").style.opacity = "1";
   }

   if(!password.value) {
    password.style.backgroundSize = "20px";
    document.getElementById("password-label").style.opacity = "1";
   } else {
     ""
   }
})
