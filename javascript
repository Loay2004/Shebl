// ... (كود تهيئة Firebase كما هو) ...

const patientButton = document.getElementById('patientButton');
const doctorButton = document.getElementById('doctorButton');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const patientRegisterForm = document.getElementById('patientRegisterForm');
const doctorRegisterForm = document.getElementById('doctorRegisterForm');

const showRegisterForm = document.getElementById('showRegisterForm');
const showLoginForm = document.getElementById('showLoginForm');

// دالة لإخفاء جميع النماذج
function hideAllForms() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    patientRegisterForm.style.display = 'none';
    doctorRegisterForm.style.display = 'none';
}

patientButton.addEventListener('click', () => {
    hideAllForms(); // إخفاء جميع النماذج أولاً
    patientRegisterForm.style.display = 'block';
});

doctorButton.addEventListener('click', () => {
    hideAllForms(); // إخفاء جميع النماذج أولاً
    doctorRegisterForm.style.display = 'block';
});

showRegisterForm.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllForms(); // إخفاء جميع النماذج أولاً
    registerForm.style.display = 'block';
});

showLoginForm.addEventListener('click', (event) => {
    event.preventDefault();
    hideAllForms(); // إخفاء جميع النماذج أولاً
    loginForm.style.display = 'block';
});

// ... (بقية دوال التسجيل كما هي) ...
