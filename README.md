<button id=>موقع ربط بين المريض واخصائيين العلاج الطبيعى</button>
<button id="patientButton">أنا مريض</button>
<html>
<head>
  <title>تسجيل الدخول / إنشاء حساب</title>
  <style>
    /* تصميم الواجهة */
  </style>
</head>
<body>
  <div class="container">
    <div id="loginForm">
      <h2>تسجيل الدخول</h2>
      <form id="loginFormElement">
        <input type="email" id="loginEmail" placeholder="البريد الإلكتروني">
        <input type="password" id="loginPassword" placeholder="كلمة المرور">
        <button type="submit">تسجيل الدخول</button>
      </form>
      <p>ليس لديك حساب؟ <a href="#" id="showRegisterForm">إنشاء حساب</a></p>
    </div>

    <div id="registerForm" style="display: none;">
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

  <script>
    const showRegisterForm = document.getElementById('showRegisterForm');
    const showLoginForm = document.getElementById('showLoginForm');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

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
  </script>
</body>
</html>

<button id="patientButton">أنا دكتور</button>
<html>
<head>
  <title>تسجيل الدخول / إنشاء حساب</title>
  <style>
    /* تصميم الواجهة */
  </style>
</head>
<body>
  <div class="container">
    <div id="loginForm">
      <h2>تسجيل الدخول</h2>
      <form id="loginFormElement">
        <input type="email" id="loginEmail" placeholder="البريد الإلكتروني">
        <input type="password" id="loginPassword" placeholder="كلمة المرور">
        <button type="submit">تسجيل الدخول</button>
      </form>
      <p>ليس لديك حساب؟ <a href="#" id="showRegisterForm">إنشاء حساب</a></p>
    </div>

    <div id="registerForm" style="display: none;">
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

  <script>
    const showRegisterForm = document.getElementById('showRegisterForm');
    const showLoginForm = document.getElementById('showLoginForm');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

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
  </script>
</body>
</html>
