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
