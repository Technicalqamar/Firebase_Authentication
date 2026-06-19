import { auth, signInWithEmailAndPassword } from "./firebase.js";

const emailInput = document.getElementById("email-login");
const passwordInput = document.getElementById("password-login");
const button = document.getElementById("btn-login");

// Event listeners for the new buttons (no Firebase functionality, just UI)
const forgotEmailInput = document.getElementById("forgot-email");
const btnForgotSend = document.getElementById("btn-forgot-send");
const currentEmailInput = document.getElementById("current-email");
const newEmailInput = document.getElementById("new-email");
const btnChangeEmailVerify = document.getElementById("btn-change-email-verify");
const currentPasswordInput = document.getElementById("current-password");
const newPasswordInput = document.getElementById("new-password");
const confirmPasswordInput = document.getElementById("confirm-password");
const btnUpdatePassword = document.getElementById("btn-update-password");


btnForgotSend.addEventListener("click", () => {
    if (!forgotEmailInput.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your email address!',
        });
        return;
    }
    Swal.fire({
        icon: 'success',
        title: 'Reset Link Sent!',
        text: `A password reset link has been sent to ${forgotEmailInput.value}. (Firebase functionality not implemented)`,
    });
});

btnChangeEmailVerify.addEventListener("click", () => {
    if (!currentEmailInput.value || !newEmailInput.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in both current and new email fields!',
        });
        return;
    }
    Swal.fire({
        icon: 'success',
        title: 'Email Change Initiated!',
        text: `Change email from ${currentEmailInput.value} to ${newEmailInput.value}. (Firebase functionality not implemented)`,
    });
});

btnUpdatePassword.addEventListener("click", () => {
    if (!currentPasswordInput.value || !newPasswordInput.value || !confirmPasswordInput.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all password fields!',
        });
        return;
    }
    if (newPasswordInput.value !== confirmPasswordInput.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'New password and confirm password do not match!',
        });
        return;
    }
    Swal.fire({
        icon: 'success',
        title: 'Password Change Initiated!',
        text: 'Your password change request has been received. (Firebase functionality not implemented)',
    });
});

button.addEventListener("click", () => {
   console.log("button clicked");
   console.log(emailInput.value, passwordInput.value);

   if (!emailInput.value || !passwordInput.value) {
       Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Please enter both email and password!',
       });
       return;
   }

signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
  .then((res) => {
    const user = res.user;
    Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome back!',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        window.location.href = "home.html";
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
      if(errorCode == "auth/invalid-credential"){
          Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: 'Please enter a valid email and password!',
          });
      } else {
          Swal.fire({
              icon: 'error',
              title: 'Login Error',
              text: errorMessage,
          });
      }
      console.log("error -->", errorMessage);
      console.log("error code -->", errorCode);
  });
});