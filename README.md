<button id="patientButton">أنا مريض</button>

<div id="patientOptions" style="display: none;">
  <a href="login-patient.html">تسجيل الدخول</a>
  <a href="register-patient.html">إنشاء حساب جديد</a>
</div>

<script>
  const patientButton = document.getElementById('patientButton');
  const patientOptions = document.getElementById('patientOptions');

  patientButton.addEventListener('click', () => {
    patientOptions.style.display = 'block';
  });
</script>
<a href="login-patient.html"><button>تسجيل الدخول</button></a>
<a href="register-patient.html"><button>إنشاء حساب جديد</button></a>
<!DOCTYPE html>
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
      <form>
        <input type="email" placeholder="البريد الإلكتروني">
        <input type="password" placeholder="كلمة المرور">
        <button type="submit">تسجيل الدخول</button>
      </form>
      <p>ليس لديك حساب؟ <a href="#" id="showRegisterForm">إنشاء حساب</a></p>
    </div>

    <div id="registerForm" style="display: none;">
      <h2>إنشاء حساب</h2>
      <form>
        <input type="text" placeholder="الاسم">
        <input type="email" placeholder="البريد الإلكتروني">
        <input type="password" placeholder="كلمة المرور">
        <button type="submit">إنشاء حساب</button>
      </form>
      <p>لديك حساب بالفعل؟ <a href="#" id="showLoginForm">تسجيل الدخول</a></p>
    </div>
  </div>

  <script>
    // كود JavaScript للتبديل بين النماذج
  </script>
</body>
</html>
