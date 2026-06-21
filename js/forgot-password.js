import { auth, sendPasswordResetEmail } from "./firebase.js";

const resetBtn = document.getElementById("resetBtn");
const resetEmail = document.getElementById("resetEmail");

resetBtn.addEventListener("click", async () => {
    const email = resetEmail.value.trim();

    if (!email) {
        Swal.fire({
            icon: "warning",
            title: "Email Required",
            text: "Please enter your email"
        });
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email);

        await Swal.fire({
            icon: "success",
            title: "Email Sent",
            text: "Password reset link sent successfully"
        });

        window.location.href = "login.html";
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Reset Failed",
            text: error.message
        });
    }
});
