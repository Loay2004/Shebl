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
</body>

</html>
