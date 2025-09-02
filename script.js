// ===== Light/Dark Mode Toggle =====
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});

// ===== Counter Game =====
const counterBtn = document.getElementById("counter-btn");
const scoreDisplay = document.getElementById("score");
let score = 0;
counterBtn.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
});

// ===== FAQ Toggle =====
const faqBtns = document.querySelectorAll(".faq-btn");
faqBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});

// ===== Tabbed Interface =====
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabContents.forEach((c) => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

// ===== Form Validation =====
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const successMsg = document.getElementById("form-success");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Full name is required";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Success Message
    if (valid) {
        successMsg.textContent = "Registration Successful 🎉";
        form.reset();
    } else {
        successMsg.textContent = "";
    }
});