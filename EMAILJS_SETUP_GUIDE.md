# 📧 EmailJS - Подробная настройка для начинающих

## 🎯 Что такое EmailJS?

EmailJS - это сервис, который позволяет отправлять email прямо из браузера без серверной части. Это идеально для нашего приложения психологических тестов, где нужно отправлять коды подтверждения врачам.

**Зачем это нужно нашему приложению:**
- ✅ Отправка кодов подтверждения при регистрации врачей
- ✅ Уведомления о результатах тестов
- ✅ Безопасная аутентификация без сложной серверной части

---

## 📝 Шаг 1: Регистрация на EmailJS (2 минуты)

### 1.1 Создание аккаунта

1. **Откройте браузер** и перейдите на сайт: https://emailjs.com
2. **Найдите кнопку "Sign Up"** (обычно справа вверху, синего цвета)
3. **Нажмите на неё** - откроется форма регистрации
4. **Заполните форму:**
   - **Email:** Используйте реальный email, на который у вас есть доступ
   - **Password:** Придумайте надежный пароль (мин. 8 символов)
   - **Confirm Password:** Повторите пароль
5. **Поставьте галочку** "I agree to the Terms of Service"
6. **Нажмите "Create Account"**

### 1.2 Подтверждение email

1. **Откройте вашу почту** (Gmail, Yandex, Mail.ru и т.д.)
2. **Найдите письмо** от EmailJS с темой "Please verify your email"
   - Если не видите - **проверьте папку "Спам"**
3. **Откройте письмо** и **нажмите на ссылку подтверждения**
4. **Вас перенаправит обратно** на сайт EmailJS с сообщением "Email verified"

### 1.3 Вход в панель управления

1. **Войдите в аккаунт** на https://emailjs.com
2. **Вы увидите панель управления** (Dashboard) с разделами:
   - Email Services (слева)
   - Email Templates (слева) 
   - Account (справа вверху)

---

## 🔧 Шаг 2: Настройка Email Service (3 минуты)

Email Service - это подключение к вашей почте, через которую будут отправляться письма.

### 2.1 Создание нового сервиса

1. **В левом меню нажмите "Email Services"**
2. **Нажмите кнопку "Add New Service"** (обычно синяя кнопка)
3. **Вы увидите список провайдеров почты:**
   - **Gmail** ⭐ (рекомендуется - проще всего)
   - **Outlook/Hotmail**
   - **Yahoo Mail**
   - **Custom SMTP** (для корпоративной почты)

### 2.2 Настройка Gmail (рекомендуется)

**Если выбрали Gmail:**

1. **Нажмите на "Gmail"**
2. **Откроется окно настройки:**
   - **Service Name:** Оставьте как есть или напишите "PsyTest Gmail"
   - **Service ID:** Автоматически сгенерируется (например: `service_abc123`)
3. **Нажмите "Connect Account"**
4. **Откроется всплывающее окно Google:**
   - **Выберите ваш Gmail аккаунт**
   - **Нажмите "Разрешить"** (Allow)
   - **Окно закроется автоматически**
5. **Вы увидите:** "✅ Connected to your_email@gmail.com"
6. **Нажмите "Create Service"**

### 2.3 Настройка Outlook/Hotmail

**Если выбрали Outlook:**

1. **Нажмите на "Outlook"**
2. **Заполните поля:**
   - **Service Name:** "PsyTest Outlook"
   - **From Name:** Ваше имя (например: "Dr. Иванов")
   - **Reply To:** Ваш email
3. **Нажмите "Connect Account"**
4. **Войдите в ваш Microsoft аккаунт**
5. **Разрешите доступ** и **нажмите "Create Service"**

### 2.4 Сохранение Service ID

**ВАЖНО!** После создания сервиса:

1. **Найдите строку "Service ID"** в созданном сервисе
2. **Скопируйте ID** (выглядит как `service_abc123`)
3. **Сохраните его** в блокнот - он понадобится позже!

**Пример:** `service_gm7x2k9`

---

## 📝 Шаг 3: Создание Email Template (5 минут)

Email Template - это шаблон письма, которое будет отправляться врачам с кодом подтверждения.

### 3.1 Создание шаблона

1. **В левом меню нажмите "Email Templates"**
2. **Нажмите "Create New Template"** (синяя кнопка)
3. **Появится редактор шаблона**

### 3.2 Настройка основных параметров

**В верхней части экрана заполните:**

1. **Template Name:** `PsyTest Verification Code`
2. **Template ID:** Автоматически сгенерируется (например: `template_xyz789`)
   - **Сохраните этот ID** в блокнот!

### 3.3 Настройка получателя

**В разделе "To" (Кому):**
- **To Email:** `{{to_email}}` (оставьте как есть)
- **To Name:** `{{to_name}}` (оставьте как есть)

**В разделе "From" (От кого):**
- **From Name:** `PsyTest Assistant` (или ваше имя)
- **Reply To:** Ваш email (например: `doctor@clinic.com`)

### 3.4 Тема письма

**Subject (Тема):**
```
🔐 Код подтверждения для PsyTest Assistant
```

### 3.5 HTML-код письма

**В поле "Content" выберите вкладку "HTML" и вставьте этот код:**

```html
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
```

### 3.6 Сохранение шаблона

1. **Нажмите "Save Template"** (внизу страницы)
2. **Скопируйте Template ID** (например: `template_xyz789`)
3. **Сохраните ID** в блокнот рядом с Service ID

---

## 🔑 Шаг 4: Получение User ID (1 минута)

User ID нужен для аутентификации вашего приложения с EmailJS.

### 4.1 Поиск User ID

1. **Нажмите на ваш профиль** (справа вверху, обычно аватарка или имя)
2. **Выберите "Account"** или "Integration"
3. **Найдите раздел "API Keys" или "General"**
4. **Найдите поле "User ID"** или "Public Key"
5. **Скопируйте ID** (выглядит как `user_abc123` или просто набор символов)

**Альтернативный способ:**
1. **Перейдите на страницу:** https://dashboard.emailjs.com/admin/account
2. **User ID будет показан в разделе "API Keys"**

### 4.2 Сохранение данных

**Теперь у вас должны быть ТРИ важных параметра:**

```
Service ID:  service_gm7x2k9    (из шага 2)
Template ID: template_xyz789    (из шага 3)  
User ID:     user_abc123        (из шага 4)
```

**Сохраните их** - они понадобятся для настройки приложения!

---

## ⚙️ Шаг 5: Настройка приложения (2 минуты)

Теперь нужно указать ваши EmailJS параметры в коде приложения.

### 5.1 Открытие файла конфигурации

1. **Откройте папку с проектом** в вашем редакторе кода
2. **Найдите файл:** `/services/emailService.ts`
3. **Откройте его**

### 5.2 Замена параметров

**Найдите строки в начале файла:**

```typescript
// EmailJS конфигурация - ЗАМЕНИТЕ НА ВАШИ ДАННЫЕ
const EMAIL_SERVICE_ID = 'service_abc123'; // Ваш Service ID
const EMAIL_TEMPLATE_ID = 'template_xyz789'; // Ваш Template ID  
const EMAIL_USER_ID = 'user_def456'; // Ваш User ID
```

**Замените на ваши реальные значения:**

```typescript
// EmailJS конфигурация - ЗАМЕНИТЕ НА ВАШИ ДАННЫЕ
const EMAIL_SERVICE_ID = 'service_gm7x2k9'; // Ваш реальный Service ID
const EMAIL_TEMPLATE_ID = 'template_h5j8k2l'; // Ваш реальный Template ID  
const EMAIL_USER_ID = 'user_m9n3p4q'; // Ваш реальный User ID
```

### 5.3 Сохранение файла

1. **Сохраните файл** (Ctrl+S или Cmd+S)
2. **Убедитесь, что все кавычки на месте**
3. **Не изменяйте остальной код**

---

## 🧪 Шаг 6: Тестирование (3 минуты)

Теперь проверим, что всё работает правильно.

### 6.1 Запуск приложения локально

**В терминале (командной строке) выполните:**

```bash
# Установка зависимостей (если не делали ранее)
npm install

# Запуск в режиме разработки
npm run dev
```

**Вы увидите сообщение:**
```
Local:   http://localhost:5173/
Network: http://192.168.x.x:5173/
```

### 6.2 Открытие приложения

1. **Откройте браузер**
2. **Перейдите на:** http://localhost:5173/
3. **Вы увидите главную страницу** приложения

### 6.3 Тестирование регистрации

1. **Нажмите "Для врачей"** (внизу страницы)
2. **Нажмите "Зарегистрироваться"** 
3. **Заполните форму с РЕАЛЬНЫМ email:**
   - **Имя:** Ваше реальное имя
   - **Email:** Ваш реальный email (на который есть доступ)
   - **Пароль:** Любой пароль для теста
4. **Нажмите "Зарегистрироваться"**

### 6.4 Проверка email

1. **Подождите 5-10 секунд**
2. **Откройте вашу почту**
3. **Найдите письмо** с темой "🔐 Код подтверждения для PsyTest Assistant"
   - **Если не видите** - проверьте папку "Спам"
4. **Откройте письмо** - вы должны увидеть красивый код подтверждения

### 6.5 Завершение регистрации

1. **Скопируйте код** из письма (6 цифр)
2. **Вернитесь в приложение**
3. **Введите код** в поле
4. **Нажмите "Подтвердить"**
5. **Вы должны увидеть** сообщение об успешной регистрации

---

## ❌ Частые проблемы и решения

### Проблема 1: "Письмо не приходит"

**Решения:**
1. **Проверьте папку "Спам"** в почте
2. **Подождите 1-2 минуты** - иногда есть задержка
3. **Проверьте правильность email** при регистрации
4. **Убедитесь, что EmailJS Service подключен** к правильной почте

### Проблема 2: "Service ID не найден"

**Решения:**
1. **Проверьте Service ID** в настройках EmailJS
2. **Убедитесь, что скопировали правильно** (без пробелов)
3. **Перейдите в Email Services** и проверьте статус подключения

### Проблема 3: "Ошибка Template"

**Решения:**
1. **Проверьте Template ID** в Email Templates
2. **Убедитесь, что шаблон сохранен** и активен
3. **Проверьте, что HTML-код** вставлен полностью

### Проблема 4: "Превышен лимит писем"

**На бесплатном плане EmailJS:**
- **200 писем в месяц**
- **Решение:** Обновиться до платного плана ($15/месяц за 1000 писем)

### Проблема 5: "Gmail блокирует отправку"

**Решения:**
1. **Включите 2-факторную аутентификацию** в Gmail
2. **Создайте App Password** для EmailJS
3. **Используйте корпоративную почту** вместо Gmail

---

## 🎯 Проверочный список

**Перед запуском в продакшн убедитесь:**

- ✅ **Service ID правильно указан** в `/services/emailService.ts`
- ✅ **Template ID правильно указан** в `/services/emailService.ts`  
- ✅ **User ID правильно указан** в `/services/emailService.ts`
- ✅ **Письма приходят при локальном тестировании**
- ✅ **Код подтверждения работает**
- ✅ **Проверили папку спам** при тестировании
- ✅ **Сохранили все ID** в надежном месте

---

## 🚀 Следующие шаги

После успешной настройки EmailJS:

1. **Протестируйте несколько раз** с разными email
2. **Перейдите к развертыванию** на Vercel (см. DEPLOYMENT.md)
3. **Настройте мониторинг** отправки писем
4. **Рассмотрите платный план** EmailJS для production

---

## 📞 Нужна помощь?

**Если что-то не работает:**

1. **Проверьте консоль браузера** (F12) на ошибки
2. **Убедитесь в правильности всех ID**
3. **Протестируйте с простым Gmail аккаунтом**
4. **Проверьте документацию EmailJS:** https://emailjs.com/docs

**Готово! 🎉 Теперь ваше приложение может отправлять реальные email с кодами подтверждения.**