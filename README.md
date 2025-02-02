<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <title>موقع ربط بين المريض واخصائيين العلاج الطبيعي</title>
    <style>
        /* تصميم الواجهة (احتفظ بهذا التصميم كما هو) */
        body {
            /* ... */
        }

        .container {
            /* ... */
        }
        /* ... */
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

        <div id="registerForm" class="form-container" style="display: none;">
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
    </div>

    <div class="footer">
        جميع الحقوق محفوظة &copy; 2023
    </div>

    <script>
        // ... (بقية JavaScript كما هي) ...
        const showRegisterForm = document.getElementById('showRegisterForm');
        const showLoginForm = document.getElementById('showLoginForm');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const patientButton = document.getElementById('patientButton');
        const doctorButton = document.getElementById('doctorButton');

        showRegisterForm.addEventListener('click', (event) => {
            event.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });

        showLoginForm.addEventListener('click', (event) => {
            event.preventDefault();
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        });

        patientButton.addEventListener('click', () => {
            // هنا يمكنك إضافة الكود الخاص بتوجيه المستخدم إلى صفحة المرضى
            alert('أنت مريض');
        });

        doctorButton.addEventListener('click', () => {
            // هنا يمكنك إضافة الكود الخاص بتوجيه المستخدم إلى صفحة الأطباء
            alert('أنت طبيب');
        });

        // منع إعادة تحميل الصفحة عند إرسال النماذج
        document.getElementById('loginFormElement').addEventListener('submit', (event) => {
            event.preventDefault();
            loginUser(); // استدعاء دالة تسجيل الدخول
        });

        document.getElementById('registerFormElement').addEventListener('submit', (event) => {
            event.preventDefault();
            registerUser(); // استدعاء دالة إنشاء حساب
        });

        // دوال تسجيل الدخول وإنشاء حساب مع التحقق من البيانات
        async function loginUser() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                alert('الرجاء إدخال البريد الإلكتروني وكلمة المرور.');
                return;
            }

            try {
                const userCredential = await auth.signInWithEmailAndPassword(email, password);
                const user = userCredential.user;
                console.log('تم تسجيل الدخول بنجاح:', user);
                window.location.href = '/'; // توجيه المستخدم إلى الصفحة الرئيسية
            } catch (error) {
                console.error('خطأ في تسجيل الدخول:', error);
                alert('خطأ في تسجيل الدخول: ' + error.message);
            }
        }

        async function registerUser() {
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (!name || !email || !password || !confirmPassword) {
                alert('الرجاء ملء جميع الحقول.');
                return;
            }

            if (password !== confirmPassword) {
                alert('كلمات المرور غير متطابقة.');
                return;
            }

            try {
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                const user = userCredential.user;

                await db.collection('users').doc(user.uid).set({
                    name: name,
                    email: email
                });

                console.log('تم إنشاء حساب المستخدم بنجاح');
                alert('تم إنشاء حسابك بنجاح!');
                window.location.href = '/login'; // توجيه المستخدم إلى صفحة تسجيل الدخول
            } catch (error) {
                console.error('خطأ في إنشاء حساب المستخدم:', error);
                alert('حدث خطأ أثناء التسجيل: ' + error.message);
            }
        }
    </script>
</body>

</html>
