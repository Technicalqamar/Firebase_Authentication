import { auth, onAuthStateChanged, updateEmail } from "./firebase.js";

const changeEmailBtn = document.getElementById("changeEmailBtn");
const newEmailInput = document.getElementById("newEmail");

let currentUser = null;

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    currentUser = user;
});

changeEmailBtn.addEventListener("click", async () => {
    const newEmail = newEmailInput.value.trim();

    if (!newEmail) {
        Swal.fire({
            icon: "warning",
            title: "Email Required",
            text: "Please enter a new email"
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
        await updateEmail(currentUser, newEmail);

        await Swal.fire({
            icon: "success",
            title: "Email Updated",
            text: "Your email has been updated successfully"
        });

        window.location.href = "home.html";
    } catch (error) {
        const message = error.code === "auth/requires-recent-login"
            ? "Please logout, login again, and then try changing your email."
            : error.message;

        Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: message
        });
    }
});
