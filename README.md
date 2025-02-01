<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>موقع ربط بين المريض واخصائيين العلاج الطبيعي</title>
  <style>
    /* تصميم الواجهة */
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      width: 80%;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .header img {
      max-width: 200px;
    }
    .buttons {
      text-align: center;
      margin-bottom: 20px;
    }
    .buttons button {
      padding: 10px 20px;
      margin: 0 10px;
      border: none;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
    .form-container {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .form-container h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    .form-container input {
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
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
    .form-container p {
      text-align: center;
      margin-top: 10px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #333;
      color: white;
    }
  </style>
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
        <button type="submit">إنشاء حساب</button>
      </form>
      <p>لديك حساب بالفعل؟ <a href="#" id="showLoginForm">تسجيل الدخول</a></p>
    </div>
  </div>

  <div class="footer">
    جميع الحقوق محفوظة &copy; 2023
  </div>

  <script>
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
  </script>
</body>
</html>
