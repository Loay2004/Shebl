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
// ... (كود للتحقق من وجود حساب للمريض، على سبيل المثال باستخدام Firebase) ...

if (patientHasAccount) {
  window.location.href = "login-patient.html";
} else {
  window.location.href = "register-patient.html";
}
#patientButton {
  /* أنماط للزر الرئيسي */
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

#patientOptions {
  /* أنماط للخيارات */
  margin-top: 10px;
}

#patientOptions a {
  /* أنماط للروابط */
  display: block;
  padding: 5px 10px;
  color: #333;
  text-decoration: none;
}

