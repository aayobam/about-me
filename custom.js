function validatePassword() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

   //minimum password length validation
    if(password1.length < 8) {
       document.getElementById("invalid-password").innerHTML = "**Password length must be atleast 8 characters";
       return false;
    };
  
  //check if both passwords correspond with each other
    let confirm_password_message = document.getElementById("confirm-password-message")
    linebreak = document.createElement("br");

    if(password2 != password1) {
        confirm_password_message.innerHTML = "**Passwords do not match";
        confirm_password_message.style.color = "red"
        confirm_password_message.appendChild(linebreak);
        return false;
    } else {
        confirm_password_message.style.color = "blue"
        confirm_password_message.innerHTML = "**Passwords match";
        confirm_password_message.appendChild(linebreak);
        setTimeout(validatePassword(), 300)
        clearTimeout()
        return true;
    };
};