# 🧠 PsyTest Assistant

Веб-приложение помощника для врача-психиатра с психологическими тестированиями, ИИ-анализом результатов и отправкой данных врачу.

## 🏥 Возможности системы

### 👨‍⚕️ **Для врачей:**
- 🔐 Безопасная регистрация с подтверждением email
- 🎫 Создание кодов доступа для пациентов  
- 📊 Получение результатов тестов с ИИ-анализом
- 📱 Отправка результатов в WhatsApp/Telegram
- 📈 Панель управления с аналитикой

### 👤 **Для пациентов:**
- 🔒 Безопасный доступ по коду от врача
- 📝 15 психологических тестов (PHQ-9, GAD-7, Шкалы Бека, HADS и др.)
- 🤖 Адаптивные опросники с научно обоснованными связками
- 🎯 Персонализированные рекомендации
- 📋 Автоматическая интерпретация результатов

## 🧪 **Психологические тесты:**

### 📊 **Общий скрининг:**
- **SCL-90-R** - Симптоматический опросник
- **HADS** - Шкала тревоги и депрессии

### 🎭 **Углубленная диагностика:**
- **PHQ-9** - Опросник здоровья пациента (депрессия)
- **GAD-7** - Генерализованное тревожное расстройство
- **Шкала Бека** - Депрессия, тревога, безнадежность
- **Шкала Гамильтона** - Депрессия и тревога
- **STAI** - Ситуативная и личностная тревожность

### 🧠 **Когнитивная оценка:**
- **MMSE** - Краткая шкала оценки психического статуса
- **Шкала дисфункциональных установок**
- **Опросник копинг-стратегий**

### ⚡ **Специализированные оценки:**
- **Оценка суицидального риска**
- **Опросник качества жизни**

## 🛠 **Технический стек:**

- **Frontend:** React 18 + TypeScript + Vite
- **Стилизация:** Tailwind CSS v4 + ShadCN/ui
- **Email:** EmailJS (реальная отправка писем)
- **Хостинг:** Vercel (рекомендуется)
- **База данных:** LocalStorage (демо) / Supabase (продакшен)

## 🚀 **Быстрый старт:**

> **⚡ За 3 минуты к работающему приложению:** см. [QUICK_START.md](./QUICK_START.md)

### 1. **Клонирование и установка:**
\`\`\`bash
git clone <repository-url>
cd psytest-assistant
npm install
\`\`\`

### 2. **Настройка EmailJS:**
1. Регистрируйтесь на [EmailJS.com](https://emailjs.com)
2. Создайте email service (Gmail/Outlook)
3. Создайте email template со следующими переменными:
   - \`{{to_name}}\` - имя врача
   - \`{{verification_code}}\` - код подтверждения
   - \`{{doctor_name}}\` - имя врача
   - \`{{doctor_specialty}}\` - специальность
   - \`{{doctor_clinic}}\` - место работы
   - \`{{registration_date}}\` - дата регистрации

4. Обновите файл \`/services/emailService.ts\`:
\`\`\`typescript
const EMAIL_SERVICE_ID = 'ваш_service_id';
const EMAIL_TEMPLATE_ID = 'ваш_template_id';  
const EMAIL_USER_ID = 'ваш_user_id';
\`\`\`

### 3. **Локальная разработка:**
\`\`\`bash
npm run dev
\`\`\`

### 4. **Сборка для продакшена:**
\`\`\`bash
npm run build
\`\`\`

## 🌐 **Развертывание на Vercel:**

### **Автоматический деплой:**
1. Пушите код на GitHub
2. Подключите репозиторий к [Vercel](https://vercel.com)
3. Vercel автоматически развернет приложение

### **CLI деплой:**
\`\`\`bash
npm install -g vercel
vercel --prod
\`\`\`

## 📧 **Пример Email Template (EmailJS):**

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Подтверждение регистрации - PsyTest Assistant</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #2563EB;">🏥 PsyTest Assistant</h1>
        <h2 style="color: #1F2937;">Подтверждение регистрации</h2>
    </div>
    
    <div style="background: #F0F4FF; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <h3 style="color: #1E40AF; margin-top: 0;">Добро пожаловать, {{to_name}}!</h3>
        <p>Ваш аккаунт врача успешно создан. Для завершения регистрации введите код подтверждения:</p>
        
        <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; background: #2563EB; color: white; padding: 10px 20px; border-radius: 8px; letter-spacing: 2px;">
                {{verification_code}}
            </span>
        </div>
        
        <p><strong>⏰ Код действует 10 минут</strong></p>
    </div>
    
    <div style="background: #EBF8FF; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h4 style="color: #1E40AF; margin-top: 0;">📋 Данные вашего аккаунта:</h4>
        <ul style="color: #1E3A8A;">
            <li><strong>Имя:</strong> {{doctor_name}}</li>
            <li><strong>Специальность:</strong> {{doctor_specialty}}</li>
            <li><strong>Место работы:</strong> {{doctor_clinic}}</li>
            <li><strong>Дата регистрации:</strong> {{registration_date}}</li>
        </ul>
    </div>
    
    <div style="background: #F0FDF4; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h4 style="color: #166534; margin-top: 0;">🚀 Возможности системы:</h4>
        <ul style="color: #166534;">
            <li>✅ Создание кодов доступа для пациентов</li>
            <li>📊 Получение результатов с ИИ-анализом</li>
            <li>📱 Отправка результатов в WhatsApp/Telegram</li>
            <li>🔒 Безопасное хранение медицинских данных</li>
        </ul>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
        <p style="color: #6B7280; font-size: 14px;">
            🔒 Ваши данные под надежной защитой<br>
            📧 Это письмо отправлено автоматически, не отвечайте на него
        </p>
    </div>
</body>
</html>
\`\`\`

## 🔧 **Конфигурация для продакшена:**

### **Environment Variables (.env):**
\`\`\`env
# EmailJS
VITE_EMAILJS_SERVICE_ID=ваш_service_id
VITE_EMAILJS_TEMPLATE_ID=ваш_template_id
VITE_EMAILJS_USER_ID=ваш_user_id

# Supabase (опционально)
VITE_SUPABASE_URL=ваш_supabase_url
VITE_SUPABASE_ANON_KEY=ваш_anon_key
\`\`\`

## 📊 **Адаптивная логика тестирования:**

### **🎯 Алгоритм связок:**
1. **Общий скрининг** → SCL-90-R + HADS
2. **Углубленная диагностика** → PHQ-9/GAD-7 (по результатам скрининга)  
3. **Оценка риска** → Суицидальный риск (при высоких баллах депрессии)
4. **Когнитивная оценка** → MMSE + копинг-стратегии
5. **Специализированные тесты** → По показаниям

## 🛡 **Безопасность:**

- 🔐 Шифрование данных пациентов
- 🎫 Временные коды доступа
- 📧 Подтверждение email врачей
- 🔄 Автоматическое истечение сессий
- 🚫 Защита от спама и атак

## 📞 **Поддержка:**

- 📧 Email: support@psytest.app
- 📚 Документация: [Wiki](./wiki)
- 🐛 Баги: [Issues](./issues)

## 📄 **Лицензия:**

Проект разработан для медицинских учреждений. Использование только с разрешения авторов.

---

**🏥 PsyTest Assistant** - современное решение для психиатрической диагностики с использованием ИИ технологий.