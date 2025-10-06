# 🚀 Инструкция по развертыванию PsyTest Assistant

## 📋 **Пошаговое руководство:**

### **1. 📧 Настройка EmailJS (5 минут)**

> 📚 **Для новичков:** Если вы настраиваете EmailJS впервые, используйте [подробную инструкцию для начинающих](./EMAILJS_SETUP_GUIDE.md) с пошаговыми скриншотами и решением проблем.

#### **Шаг 1.1: Регистрация**
1. Идите на [EmailJS.com](https://emailjs.com)
2. Нажмите **"Sign Up"** и создайте бесплатный аккаунт
3. Подтвердите email

#### **Шаг 1.2: Создание Email Service**
1. В панели EmailJS нажмите **"Email Services"**
2. Выберите **"Add New Service"**
3. Выберите провайдера:
   - **Gmail** (рекомендуется)
   - **Outlook** 
   - **Yahoo**
   - Или другой SMTP
4. Подключите ваш email аккаунт
5. **Запишите Service ID** (например: \`service_abc123\`)

#### **Шаг 1.3: Создание Email Template**
1. Нажмите **"Email Templates"**
2. **"Create New Template"**
3. **Название:** \`Verification Code - PsyTest\`
4. **Вставьте HTML-код:**

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Подтверждение регистрации</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
    <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563EB; margin: 0; font-size: 28px;">🏥 PsyTest Assistant</h1>
            <p style="color: #6B7280; margin: 5px 0 0 0;">Система психологических тестирований</p>
        </div>
        
        <!-- Welcome -->
        <div style="margin-bottom: 25px;">
            <h2 style="color: #1F2937; margin: 0 0 10px 0;">Добро пожаловать, {{to_name}}!</h2>
            <p style="color: #4B5563; line-height: 1.6; margin: 0;">
                Ваш аккаунт врача успешно создан. Для завершения регистрации введите код подтверждения в приложении:
            </p>
        </div>
        
        <!-- Verification Code -->
        <div style="text-align: center; margin: 25px 0;">
            <div style="background: linear-gradient(135deg, #2563EB, #1D4ED8); color: white; display: inline-block; padding: 15px 25px; border-radius: 10px; font-size: 28px; font-weight: bold; letter-spacing: 3px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
                {{verification_code}}
            </div>
            <p style="color: #EF4444; font-weight: 600; margin: 10px 0 0 0; font-size: 14px;">
                ⏰ Код действует 10 минут
            </p>
        </div>
        
        <!-- Account Details -->
        <div style="background: #EBF8FF; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #2563EB;">
            <h3 style="color: #1E40AF; margin: 0 0 15px 0; font-size: 16px;">📋 Данные вашего аккаунта:</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px 0; color: #1E3A8A; font-weight: 600; width: 140px;">Имя:</td>
                    <td style="padding: 8px 0; color: #1E3A8A;">{{doctor_name}}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #1E3A8A; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0; color: #1E3A8A;">{{to_email}}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #1E3A8A; font-weight: 600;">Специальность:</td>
                    <td style="padding: 8px 0; color: #1E3A8A;">{{doctor_specialty}}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #1E3A8A; font-weight: 600;">Место работы:</td>
                    <td style="padding: 8px 0; color: #1E3A8A;">{{doctor_clinic}}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #1E3A8A; font-weight: 600;">Дата:</td>
                    <td style="padding: 8px 0; color: #1E3A8A;">{{registration_date}}</td>
                </tr>
            </table>
        </div>
        
        <!-- Features -->
        <div style="background: #F0FDF4; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #10B981;">
            <h3 style="color: #065F46; margin: 0 0 15px 0; font-size: 16px;">🚀 Возможности системы:</h3>
            <ul style="color: #065F46; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li><strong>Создание кодов доступа</strong> для пациентов</li>
                <li><strong>15+ психологических тестов</strong> (PHQ-9, GAD-7, Шкалы Бека)</li>
                <li><strong>ИИ-анализ результатов</strong> с рекомендациями</li>
                <li><strong>Отправка в WhatsApp/Telegram</strong></li>
                <li><strong>Адаптивные опросники</strong> с научными связками</li>
                <li><strong>Безопасное хранение</strong> медицинских данных</li>
            </ul>
        </div>
        
        <!-- Security Note -->
        <div style="background: #FEF3C7; padding: 15px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #F59E0B;">
            <p style="color: #92400E; margin: 0; font-size: 14px; line-height: 1.6;">
                <strong>🔒 Безопасность:</strong> Код подтверждения действует только 10 минут. Никому не передавайте этот код. Если вы не регистрировались в PsyTest Assistant, проигнорируйте это письмо.
            </p>
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
            <p style="color: #6B7280; font-size: 12px; margin: 0; line-height: 1.5;">
                📧 Это письмо отправлено автоматически, не отвечайте на него<br>
                🏥 PsyTest Assistant - Система психологических тестирований<br>
                🔒 Ваши данные под надежной защитой
            </p>
        </div>
    </div>
</body>
</html>
\`\`\`

5. **Сохраните** и **запишите Template ID** (например: \`template_xyz789\`)

#### **Шаг 1.4: Получение User ID**
1. В панели EmailJS нажмите **"Account"**
2. **Запишите User ID** (например: \`user_def456\`)

---

### **2. 🔧 Настройка приложения**

#### **Шаг 2.1: Обновление конфигурации**
Откройте файл \`/services/emailService.ts\` и замените:

\`\`\`typescript
// EmailJS конфигурация - ЗАМЕНИТЕ НА ВАШИ ДАННЫЕ
const EMAIL_SERVICE_ID = 'service_abc123'; // Ваш Service ID
const EMAIL_TEMPLATE_ID = 'template_xyz789'; // Ваш Template ID  
const EMAIL_USER_ID = 'user_def456'; // Ваш User ID
\`\`\`

#### **Шаг 2.2: Тестирование локально**
\`\`\`bash
npm install
npm run dev
\`\`\`

Откройте http://localhost:3000 и протестируйте регистрацию врача с реальным email.

---

### **3. 🌐 Развертывание на Vercel**

#### **Шаг 3.1: Подготовка GitHub**
1. Создайте новый репозиторий на [GitHub](https://github.com)
2. Загрузите код:
\`\`\`bash
git init
git add .
git commit -m "Initial commit: PsyTest Assistant"
git branch -M main
git remote add origin https://github.com/ваш-username/psytest-assistant.git
git push -u origin main
\`\`\`

#### **Шаг 3.2: Развертывание на Vercel**
1. Идите на [Vercel.com](https://vercel.com)
2. Нажмите **"Sign Up"** и войдите через GitHub
3. Нажмите **"New Project"**
4. Выберите ваш репозиторий \`psytest-assistant\`
5. **Настройки проекта:**
   - **Framework Preset:** Vite
   - **Build Command:** \`npm run build\`
   - **Output Directory:** \`dist\`
6. Нажмите **"Deploy"**

#### **Шаг 3.3: Настройка домена (опционально)**
1. В панели Vercel перейдите в **"Settings" → "Domains"**
2. Добавьте ваш домен (например: \`psytest.ваш-сайт.com\`)

---

### **4. ✅ Проверка работы**

#### **Тестирование email:**
1. Откройте ваш сайт
2. Нажмите **"Для врачей"**
3. **"Зарегистрироваться"**
4. Заполните данные с **реальным email**
5. Проверьте почту - должно прийти письмо с кодом
6. Введите код для подтверждения

#### **Тестирование пациента:**
1. Войдите как врач
2. Создайте код доступа для пациента
3. На главной странице введите имя и код
4. Пройдите тест - результат должен отобразиться врачу

---

### **5. 🎯 Дополнительные настройки**

#### **Кастомный домен:**
- Свяжите домен с Vercel
- Настройте SSL (автоматически)

#### **Аналитика:**
- Добавьте Google Analytics
- Настройте метрики в Vercel

#### **Мониторинг:**
- Настройте уведомления о сбоях
- Логирование ошибок

---

### **6. 📊 Результат**

После развертывания вы получите:

✅ **Полнофункциональное приложение** на собственном домене  
✅ **Реальная отправка email** с кодами подтверждения  
✅ **Система регистрации врачей** с безопасной аутентификацией  
✅ **15 психологических тестов** с ИИ-анализом  
✅ **Адаптивные опросники** с научными связками  
✅ **Панель управления** для врачей  
✅ **Автоматические обновления** при пуше в GitHub  

### **🔗 Ссылки:**

- **EmailJS:** https://emailjs.com
- **Vercel:** https://vercel.com  
- **GitHub:** https://github.com
- **Документация EmailJS:** https://emailjs.com/docs

---

### **💡 Советы:**

1. **Тестируйте сначала локально** с реальными email
2. **Используйте отдельный email** для тестирования
3. **Проверяйте папку спам** при первых отправках
4. **Настройте SPF/DKIM записи** для надежности доставки
5. **Мониторьте лимиты EmailJS** (200 писем/месяц на бесплатном плане)

**🚀 Готово! Ваше приложение теперь доступно в интернете с реальной отправкой email.**