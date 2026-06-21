import { auth, onAuthStateChanged, signOut } from "./firebase.js";

const logoutBtn = document.getElementById("logoutBtn");
const userEmail = document.getElementById("userEmail");

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    if (userEmail) {
        userEmail.textContent = user.email || "";
    }
});

logoutBtn.addEventListener("click", async () => {
    const result = await Swal.fire({
        title: "Logout Account?",
        text: "You will need to login again.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Logout",
        cancelButtonText: "Cancel"
    });

    if (!result.isConfirmed) {
        return;
    }

    try {
        await signOut(auth);

        await Swal.fire({
            icon: "success",
            title: "Logged Out",
            text: "Logout successful"
        });

        window.location.href = "login.html";
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Logout Failed",
            text: error.message
        });
    }
});
