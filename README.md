<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>موقع ربط بين المريض واخصائيين العلاج الطبيعي</title>
  <style>
    /* تصميم الواجهة (احتفظ بهذا التصميم كما هو) */
    body { /* ... */ }
    .container { /* ... */ }
    /* ... */
  </style>
  <script src="https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.15.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore-compat.js"></script>
  <script>
    // معلومات مشروعك في Firebase (استبدل هذه القيم بمعلومات مشروعك)
    const firebaseConfig = {// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
      // ...
    };
    firebase.initializeApp(firebaseConfig);
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
        <button type="button" onclick="loginUser()">تسجيل الدخول</button>
      </form>
      <p>ليس لديك حساب؟ <a href="#" id="showRegisterForm">إنشاء حساب</a></p>
    </div>

    <div id="registerForm" class="form-container" style="display: none;">
      <h2>إنشاء حساب</h2>
      <form id="registerFormElement">
        <input type="text" id="registerName" placeholder="الاسم">
        <input type="email" id="registerEmail" placeholder="البريد الإلكتروني">
        <input type="password" id="registerPassword" placeholder="كلمة المرور">
        <button type="button" onclick="registerUser()">إنشاء حساب</button>
      </form>
      <p>لديك حساب بالفعل؟ <a href="#" id="showLoginForm">تسجيل الدخول</a></p>
    </div>
  </div>

  <div class="footer">
    جميع الحقوق محفوظة &copy; 2023
  </div>

  <script>
    // (النموذج القديم - احتفظ به كما هو)
    const showRegisterForm = document.getElementById('showRegisterForm');
    const showLoginForm = document.getElementById('showLoginForm');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const patientButton = document.getElementById('patientButton');
    const doctorButton = document.getElementById('doctorButton');

    showRegisterForm.addEventListener('click', (event) => { /* ... */ });
    showLoginForm.addEventListener('click', (event) => { /* ... */ });
    patientButton.addEventListener('click', () => { /* ... */ });
    doctorButton.addEventListener('click', () => { /* ... */ });

    // دمج مع Firebase
    async function loginUser() {
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('تم تسجيل الدخول بنجاح:', user);
        // هنا يمكنك توجيه المستخدم إلى الصفحة المناسبة
      } catch (error) {
        console.error('خطأ في تسجيل الدخول:', error);
        alert('خطأ في تسجيل الدخول. يرجى التحقق من البريد الإلكتروني وكلمة المرور.');
      }
    }

    async function registerUser() {
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;

      try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        await db.collection('users').doc(user.uid).set({
          name: name,
          email: email
          // ... بيانات إضافية
        });

        console.log('تم إنشاء حساب المستخدم بنجاح');
        alert('تم إنشاء حسابك بنجاح!');
        // هنا يمكنك توجيه المستخدم إلى الصفحة المناسبة
      } catch (error) {
        console.error('خطأ في إنشاء حساب المستخدم:', error);
        alert('حدث خطأ أثناء التسجيل.');
      }
    }
  </script>
</body>
</html>