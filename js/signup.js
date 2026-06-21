import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const signupBtn = document.getElementById("signupBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const showError = (title, error) => {
    Swal.fire({
        icon: "error",
        title,
        text: error.message
    });
};

togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.classList.toggle("fa-eye", !isPassword);
    togglePassword.classList.toggle("fa-eye-slash", isPassword);
});

signupBtn.addEventListener("click", async () => {
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
        await createUserWithEmailAndPassword(auth, email, password);

        await Swal.fire({
            icon: "success",
            title: "Account Created",
            text: "Signup successful"
        });

        window.location.href = "login.html";
    } catch (error) {
        showError("Signup Failed", error);
    }
});
