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

        <div class="footer">
            &copy; 2023 جميع الحقوق محفوظة
        </div>
    </div>

    <script>
        // الحصول على العناصر من HTML
        const patientButton = document.getElementById('patientButton');
        const doctorButton = document.getElementById('doctorButton');

        // إضافة مستمع للأحداث لزر "أنا مريض"
        patientButton.addEventListener('click', () => {
            // توجيه المستخدم إلى صفحة تسجيل الدخول
            window.location.href = 'login.html'; // استبدل 'login.html' بعنوان URL لصفحة تسجيل الدخول
        });

        // إضافة مستمع للأحداث لزر "أنا طبيب"
        doctorButton.addEventListener('click', () => {
            // توجيه المستخدم إلى صفحة تسجيل الدخول
            window.location.href = 'login.html'; // استبدل 'login.html' بعنوان URL لصفحة تسجيل الدخول
        });
    </script>
</body>

</html>

<!DOCTYPE html>
<html>

<head>
    <title>Shebl</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>مرحباً بك في Shebl</h1>
        <nav>
            <a href="patient_login.html">أنا مريض</a>
            <a href="doctor_login.html">أنا طبيب</a>
        </nav>
    </header>
    <footer>
        <p>&copy; 2023 Shebl</p>
    </footer>
</body>

</html>

<!DOCTYPE html>
<html>

<head>
    <title>تسجيل دخول المريض</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>تسجيل دخول المريض</h1>
    </header>
    <div class="container">
        <form>
            <label for="patientName">اسم المريض:</label><br>
            <input type="text" id="patientName" name="patientName" required><br><br>

            <label for="patientEmail">البريد الإلكتروني:</label><br>
            <input type="email" id="patientEmail" name="patientEmail" required><br><br>

            <label for="patientPassword">كلمة المرور:</label><br>
            <input type="password" id="patientPassword" name="patientPassword" required><br><br>

            <label for="patientConfirmPassword">تأكيد كلمة المرور:</label><br>
            <input type="password" id="patientConfirmPassword" name="patientConfirmPassword" required><br><br>

            <label for="patientBirthdate">تاريخ الميلاد:</label><br>
            <input type="date" id="patientBirthdate" name="patientBirthdate" required><br><br>

            <label for="patientGender">الجنس:</label><br>
            <select id="patientGender" name="patientGender" required>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
            </select><br><br>

            <input type="submit" value="تسجيل الدخول">
        </form>
    </div>
    <footer>
        <p>&copy; 2023 Shebl</p>
    </footer>
</body>

</html>

<!DOCTYPE html>
<html>

<head>
    <title>تسجيل دخول الطبيب</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>تسجيل دخول الطبيب</h1>
    </header>
    <div class="container">
        <form>
            <label for="doctorName">اسم الطبيب:</label><br>
            <input type="text" id="doctorName" name="doctorName" required><br><br>

            <label for="doctorEmail">البريد الإلكتروني:</label><br>
            <input type="email" id="doctorEmail" name="doctorEmail" required><br><br>

            <label for="doctorPassword">كلمة المرور:</label><br>
            <input type="password" id="doctorPassword" name="doctorPassword" required><br><br>

            <label for="doctorConfirmPassword">تأكيد كلمة المرور:</label><br>
            <input type="password" id="doctorConfirmPassword" name="doctorConfirmPassword" required><br><br>

            <label for="doctorSpecialization">التخصص:</label><br>
            <input type="text" id="doctorSpecialization" name="doctorSpecialization" required><br><br>

            <input type="submit" value="تسجيل الدخول">
        </form>
    </div>
    <footer>
        <p>&copy; 2023 Shebl</p>
    </footer>
</body>

</html>
