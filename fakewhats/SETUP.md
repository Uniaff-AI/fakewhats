# 🚀 Пошаговая настройка UROXEL WhatsApp Landing

## 1. Установка и запуск

```bash
# Клонируйте проект
git clone <your-repo>
cd fakewhats

# Установите зависимости
npm install

# Запустите в режиме разработки
npm run dev
```

## 2. Настройка контента

### 2.1 Основные тексты (`src/content/copy.ts`)

```typescript
export const COPY = {
  header: {
    phone: '+52 55 5173 4167', // Измените на ваш номер
    status: 'Online',
    verified: true
  },
  messages: {
    urgent: 'СРОЧНОЕ СООБЩЕНИЕ ДЛЯ ВСЕХ МУЖЧИН МЕКСИКИ.',
    problem: 'ВАША СЛАБАЯ ЭРЕКЦИЯ ТЕПЕРЬ АНОНИМНО ИЗЛЕЧИМА ЗА 24 ЧАСА!',
    // ... другие тексты
  },
  form: {
    price: {
      original: '1390 MXN', // Старая цена
      current: '590 MXN'    // Новая цена
    },
    timerValue: '39/1500',  // Остаток товара
    autoPostbackSeconds: 180 // Автоотправка через 3 минуты
  }
}
```

### 2.2 Изображение продукта

Замените `public/uroxel-bottle.svg` на ваше изображение продукта.

### 2.3 VSL видео

Замените `public/vsl.mp4` на ваше видео (рекомендуется 10-30 секунд).

## 3. Настройка API интеграции

### 3.1 Telegram интеграция

1. Создайте бота через @BotFather
2. Получите токен и chat_id
3. Создайте файл `.env`:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

4. Раскомментируйте код в `src/pages/api/postback.ts`:

```typescript
if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
  const message = `🔥 НОВАЯ ЗАЯВКА UROXEL!\n\n👤 Имя: ${data.name}\n📞 Телефон: ${data.phone}\n⏰ Время звонка: ${data.calltime || 'Не выбрано'}\n🎯 Источник: ${data.reason}\n⏱️ Время просмотра видео: ${data.videoWatchTime || 0} сек`;
  
  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    })
  });
}
```

### 3.2 Другие интеграции

Добавьте вашу логику в `src/pages/api/postback.ts`:

```typescript
// Пример интеграции с CRM
const crmData = {
  name: data.name,
  phone: data.phone,
  product: 'UROXEL',
  source: 'WhatsApp Landing',
  timestamp: new Date().toISOString()
};

// Отправка в вашу CRM
await fetch('https://your-crm.com/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(crmData)
});
```

## 4. Настройка поведения

### 4.1 Время автоотправки

В `src/content/copy.ts`:

```typescript
form: {
  autoPostbackSeconds: 180 // 3 минуты
}
```

### 4.2 Таймер товара

```typescript
form: {
  timerValue: '39/1500' // Осталось 39 из 1500
}
```

### 4.3 Цены

```typescript
form: {
  price: {
    original: '1390 MXN', // Зачеркнутая цена
    current: '590 MXN'    // Текущая цена
  }
}
```

## 5. Тестирование

### 5.1 Локальное тестирование

```bash
npm run dev
# Откройте http://localhost:4321
```

### 5.2 Проверьте:

- ✅ VSL видео открывается автоматически
- ✅ Форма появляется после закрытия видео
- ✅ Попап возврата при попытке ухода
- ✅ Кнопка "Получить скидку" работает
- ✅ Формы отправляются корректно
- ✅ Автоотправка через 3 минуты

## 6. Деплой

### 6.1 Vercel

```bash
npm run build
# Загрузите папку dist на Vercel
```

### 6.2 Netlify

```bash
npm run build
# Загрузите папку dist на Netlify
```

### 6.3 Другие платформы

Проект совместим с любыми статическими хостингами.

## 7. Аналитика (опционально)

### 7.1 Google Analytics

Добавьте в `src/layouts/BaseLayout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 7.2 Facebook Pixel

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 8. Оптимизация

### 8.1 Сжатие изображений

Используйте инструменты для сжатия изображений:
- TinyPNG
- ImageOptim
- Squoosh

### 8.2 Оптимизация видео

- Формат: MP4
- Кодек: H.264
- Размер: до 10MB
- Длительность: 10-30 секунд

## 9. Мониторинг

### 9.1 Логи заявок

Все заявки логируются в консоль. Для продакшена настройте:

```typescript
// В src/pages/api/postback.ts
console.log('[UROXEL Lead]', {
  timestamp: new Date().toISOString(),
  name: data.name,
  phone: data.phone,
  // ... другие данные
});
```

### 9.2 Ошибки

Настройте мониторинг ошибок (Sentry, LogRocket и т.д.).

## 10. Безопасность

### 10.1 Валидация данных

```typescript
// В src/pages/api/postback.ts
if (!data.name || !data.phone) {
  return new Response(JSON.stringify({ 
    ok: false, 
    error: 'Неполные данные' 
  }), { status: 400 });
}
```

### 10.2 Rate Limiting

Добавьте ограничение запросов для защиты от спама.

## 🎯 Готово!

Ваш WhatsApp-лендинг готов к использованию! 

### Основные функции:
- ✅ Имитация WhatsApp чата
- ✅ VSL видео с автоматическим открытием
- ✅ Форма заказа с таймером
- ✅ Попап возврата при уходе
- ✅ Домонетка форма
- ✅ API для заявок
- ✅ Адаптивный дизайн
- ✅ Готов к деплою

### Следующие шаги:
1. Настройте контент под ваш продукт
2. Добавьте реальное VSL видео
3. Настройте интеграцию с CRM
4. Протестируйте все функции
5. Деплойте на хостинг
6. Настройте аналитику
7. Запускайте рекламу!

Удачи с вашим лендингом! 🚀
