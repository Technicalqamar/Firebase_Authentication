import { auth, onAuthStateChanged, updatePassword } from "./firebase.js";

const updatePassBtn = document.getElementById("updatePassBtn");
const passwordInput = document.getElementById("newPassword");
const togglePassword = document.getElementById("togglePassword");

let currentUser = null;

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    currentUser = user;
});

togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.classList.toggle("fa-eye", !isPassword);
    togglePassword.classList.toggle("fa-eye-slash", isPassword);
});

updatePassBtn.addEventListener("click", async () => {
    const newPassword = passwordInput.value.trim();

    if (!newPassword) {
        Swal.fire({
            icon: "warning",
            title: "Password Required",
            text: "Please enter a new password"
        });
        return;
    }

    if (!currentUser) {
        Swal.fire({
            icon: "error",
            title: "No User Found",
            text: "Please login first"
        });
        return;
    }

    try {
        await updatePassword(currentUser, newPassword);

        await Swal.fire({
            icon: "success",
            title: "Password Updated",
            text: "Your password has been changed successfully"
        });

        window.location.href = "home.html";
    } catch (error) {
        const message = error.code === "auth/requires-recent-login"
            ? "Please logout, login again, and then try changing your password."
            : error.message;

        Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: message
        });
    }
});
