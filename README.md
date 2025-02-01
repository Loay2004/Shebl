<!DOCTYPE html>
<html>
<head>
  <title>تسجيل دخول مريض</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>تسجيل دخول مريض</h2>
    <form id="loginForm">
      <input type="email" id="email" placeholder="البريد الإلكتروني" required>
      <input type="password" id="password" placeholder="كلمة المرور" required>
      <button type="submit">تسجيل الدخول</button>
    </form>
    <a href="register-patient.html">إنشاء حساب جديد</a>
    <a href="login-doctor.html">تسجيل دخول طبيب</a>
  </div>
  <script src="firebase-config.js"></script>
  <script src="auth.js"></script>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
  <title>إنشاء حساب جديد لمريض</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>إنشاء حساب جديد لمريض</h2>
    <form id="registerForm">
      <input type="text" id="name" placeholder="الاسم" required>
      <input type="email" id="email" placeholder="البريد الإلكتروني" required>
      <input type="password" id="password" placeholder="كلمة المرور" required>
      <input type="password" id="confirmPassword" placeholder="تأكيد كلمة المرور" required>
      <button type="submit">إنشاء حساب</button>
    </form>
    <a href="login-patient.html">تسجيل الدخول</a>
    <a href="register-doctor.html">إنشاء حساب جديد لطبيب</a>
  </div>
  <script src="firebase-config.js"></script>
  <script src="register.js"></script>
</body>
</html>

