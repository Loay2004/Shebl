<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <title>موقع ربط بين المريض واخصائيين العلاج الطبيعي</title>
    <style>
        /* تصميم الواجهة (احتفظ بهذا التصميم كما هو) */
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }

        .container {
            width: 80%;
            margin: 20px auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .header img {
            max-width: 200px;
        }

        .buttons {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }

        .buttons button {
            padding: 10px 20px;
            margin: 0 10px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
        }

        .form-container {
            display: none;
        }

        .form-container h2 {
            text-align: center;
            margin-bottom: 10px;
        }

        .form-container input,
        .form-container select,
        .form-container textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .form-container button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
        }

        .footer {
            text-align: center;
            padding: 10px;
            background-color: #333;
            color: white;
        }
    </style>
    <script src="https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.15.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore-compat.js"></script>
    <script>
        // معلومات مشروعك في Firebase (استبدل هذه القيم بمعلومات مشروعك)
        const firebaseConfig = {
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbrnZTdgXDdVcjLf5te2cPtHAtoxhdFZY",
  authDomain: "shebl-f8189.firebaseapp.com",
  databaseURL: "https://shebl-f8189-default-rtdb.firebaseio.com",
  projectId: "shebl-f8189",
  storageBucket: "shebl-f8189.firebasestorage.app",
  messagingSenderId: "810550477921",
  appId: "1:810550477921:web:377239051a3926d7955620",
  measurementId: "G-N1QYGDCJG9"
};
        

        // تهيئة Firebase
        firebase.initializeApp(firebaseConfig);

        // الحصول على مثيلات الخدمات
        const auth = firebase.auth();
        const db = firebase.firestore();
    </script>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="logo.png" alt="شعار الموقع">
            <h1>موقع ربط بين المريض واخصائيين العلاج الطبيعي</h1>
        </div>
        <div class="buttons">
            <button id="patientButton">أنا مريض</button>
            <button id="doctorButton">أنا طبيب</button>
        </div>

        <div id="loginForm" class="form-container">
            <h2>تسجيل الدخول</h2>
            <form id="loginFormElement">
                <input type="email" id="loginEmail" placeholder="البريد الإلكتروني">
                <input type="password" id="loginPassword" placeholder="كلمة المرور">
                <button type="submit">تسجيل الدخول</button>
            </form>
            <p>ليس لديك حساب؟ <a href="#" id="showRegisterForm">إنشاء حساب</a></p>
        </div>

        <div id="registerForm" class="form-container">
            <h2>إنشاء حساب</h2>
            <form id="registerFormElement">
                <input type="text" id="registerName" placeholder="الاسم">
                <input type="email" id="registerEmail" placeholder="البريد الإلكتروني">
                <input type="password" id="registerPassword" placeholder="كلمة المرور">
                <input type="password" id="confirmPassword" placeholder="تأكيد كلمة المرور">
                <button type="submit">إنشاء حساب</button>
            </form>
            <p>لديك حساب بالفعل؟ <a href="#" id="showLoginForm">تسجيل الدخول</a></p>
        </div>

        <div id="patientRegisterForm" class="form-container">
            <h2>تسجيل مريض جديد</h2>
            <form id="patientRegisterFormElement">
                <input type="text" id="patientName" placeholder="الاسم الكامل">
                <input type="email" id="patientEmail" placeholder="البريد الإلكتروني">
                <input type="password" id="patientPassword" placeholder="كلمة المرور">
                <input type="password" id="patientConfirmPassword" placeholder="تأكيد كلمة المرور">
                <input type="date" id="patientBirthdate" placeholder="تاريخ الميلاد">
                <select id="patientGender">
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                </select>
                <input type="tel" id="patientPhone" placeholder="رقم الهاتف">
                <input type="text" id="patientCity" placeholder="المدينة">
                <input type="text" id="patientArea" placeholder="المنطقة">
                <textarea id="patientHealthCondition" placeholder="الحالة الصحية العامة"></textarea>
                <textarea id="patientCurrentProblems" placeholder="المشاكل الصحية الحالية"></textarea>
                <select id="patientTreatmentType">
                    <option value="sports">علاج طبيعي رياضي</option>
                    <option value="neuro">علاج طبيعي للأعصاب</option>
                    <option value="other">أخرى</option>
                </select>
                <input type="number" id="patientBudget" placeholder="الميزانية المتاحة">
                <button type="submit">إنشاء حساب</button>
            </form>
        </div>

        <div id="doctorRegisterForm" class="form-container">
            <h2>تسجيل طبيب جديد</h2>
            <form id="doctorRegisterFormElement">
                <input type="text" id="doctorName" placeholder="الاسم الكامل">
                <input type="email" id="doctorEmail" placeholder="البريد الإلكتروني">
                <input type="password" id="doctorPassword" placeholder="كلمة المرور">
                <input type="password" id="doctorConfirmPassword" placeholder="تأكيد كلمة المرور">
                <input type="date" id="doctorBirthdate" placeholder="تاريخ الميلاد">
                <select id="doctorGender">
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                </select>
                <input type="tel" id="doctorPhone" placeholder="رقم الهاتف">
                <input type="text" id="doctorCity" placeholder="المدينة">
                <input type="text" id="doctorArea" placeholder="المنطقة">
                <input type="text" id="doctorSpecialization" placeholder="التخصص">
                <input type="number" id="doctorExperience" placeholder="سنوات الخبرة">
                <textarea id="doctorQualifications" placeholder="المؤهلات العلمية"></textarea>
                <input type="text" id="doctorWorkplace" placeholder="مكان العمل الحالي">
                <input type="text" id="doctorLanguages" placeholder="اللغات التي يتحدث بها">
                <button type="submit">إنشاء حساب</button>
            </form>
        </div>
    </div>

    <div class="footer">
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

