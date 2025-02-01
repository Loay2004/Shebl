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
