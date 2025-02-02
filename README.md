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

        // الحصول على العناصر من HTML
        const patientButton = document.getElementById('patientButton');
        const doctorButton = document.getElementById('doctorButton');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const patientRegisterForm = document.getElementById('patientRegisterForm');
        const doctorRegisterForm = document.getElementById('doctorRegisterForm'); // Get doctor's form
        const showRegisterForm = document.getElementById('showRegisterForm');
        const showLoginForm = document.getElementById('showLoginForm');

        // إضافة مستمع للأحداث لزر "أنا مريض"
        patientButton.addEventListener('click', () => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'none';
            doctorRegisterForm.style.display = 'none'; // Hide doctor's form
            patientRegisterForm.style.display = 'block'; // إظهار نموذج تسجيل المرضى
        });

        // إضافة مستمع للأحداث لزر "أنا طبيب"
        doctorButton.addEventListener('click', () => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'none';
            patientRegisterForm.style.display = 'none'; // Hide patient's form
            doctorRegisterForm.style.display = 'block'; // إظهار نموذج تسجيل الأطباء
        });

        //  إظهار نموذج التسجيل عند الضغط على "إنشاء حساب"
        showRegisterForm.addEventListener('click', () => {
            loginForm.style.display = 'none';
            patientRegisterForm.style.display = 'none';
            doctorRegisterForm.style.display = 'none'; // Hide all other forms
            registerForm.style.display = 'block';
        });

        // إظهار نموذج تسجيل الدخول عند الضغط على "تسجيل الدخول"
        showLoginForm.addEventListener('click', () => {
            loginForm.style.display = 'block';
            patientRegisterForm.style.display = 'none';
            doctorRegisterForm.style.display = 'none'; // Hide all other forms
            registerForm.style.display = 'none';
        });


        // مثال لإضافة إجراء لتسجيل مريض جديد (يجب عليك تعديل هذا الجزء ليناسب احتياجاتك)
        const patientRegisterFormElement = document.getElementById('patientRegisterFormElement');
        patientRegisterFormElement.addEventListener('submit', (event) => {
            event.preventDefault(); // منع إرسال النموذج بشكل افتراضي

            // الحصول على بيانات النموذج
            const patientName = document.getElementById('patientName').value;
            const patientEmail = document.getElementById('patientEmail').value;
            const patientPassword = document.getElementById('patientPassword').value;
            const patientConfirmPassword = document.getElementById('patientConfirmPassword').value;
            const patientBirthdate = document.getElementById('patientBirthdate').value;
            const patientGender = document.getElementById('patientGender').value;

            // هنا يمكنك إضافة كود للتحقق من البيانات وتسجيل المستخدم في Firebase
            // على سبيل المثال:
            // auth.createUserWithEmailAndPassword(patientEmail, patientPassword)
            //   .then((userCredential) => {
            //     // المستخدم تم تسجيله بنجاح
            //     console.log('تم تسجيل المستخدم بنجاح');
            //   })
            //   .catch((error) => {
            //     // حدث خطأ أثناء التسجيل
            //     console.error('حدث خطأ أثناء التسجيل:', error);
            //   });
        });
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
            <p>ليس لديك حساب؟ <a href="#" id
