
import { auth, createUserWithEmailAndPassword } from "./firebase.js"; 

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const button = document.getElementById("btn");

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

   createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
  .then((res) => {
    const user = res.user;
    Swal.fire({
        icon: 'success',
        title: 'Signup Successful!',
        text: 'Your account has been created successfully. Please login.',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        window.location.href = "login.html";
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      if(errorCode == "auth/email-already-in-use"){
          Swal.fire({
              icon: 'error',
              title: 'Signup Failed',
              text: 'Email is already in use!',
          });
      } else if (errorCode === "auth/invalid-email") {
          Swal.fire({
              icon: 'error',
              title: 'Signup Failed',
              text: 'The email address is not valid.',
          });
      } else if (errorCode === "auth/weak-password") {
          Swal.fire({
              icon: 'error',
              title: 'Signup Failed',
              text: 'Password should be at least 6 characters.',
          });
      } else {
          Swal.fire({
              icon: 'error',
              title: 'Signup Error',
              text: errorMessage,
          });
      }
      console.log("error -->", errorMessage);
      console.log("error code -->", errorCode);
  });
});