import {
    auth,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "./firebase.js";

const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "home.html";
    }
});

togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.classList.toggle("fa-eye", !isPassword);
    togglePassword.classList.toggle("fa-eye-slash", isPassword);
});

loginBtn.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        Swal.fire({
            icon: "warning",
            title: "Missing Fields",
            text: "Please fill all fields"
        });
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);

        await Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome back"
        });

        window.location.href = "home.html";
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: error.message
        });
    }
});
