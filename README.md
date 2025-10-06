# 🐾 Фурри Словарь

Красивый интерактивный словарь фурри терминов с анимациями и тематическим оформлением.

## ✨ Особенности

- 🎨 **Красивый дизайн** с фурри тематикой
- 🔍 **Поиск и фильтрация** терминов
- 🎭 **Анимированные элементы** и интерактивность
- 📱 **Адаптивный дизайн** для всех устройств
- 🎉 **Эффекты конфетти** и частицы
- 🎵 **Звуковые эффекты** (опционально)
- 🌟 **Плавающие анимации** и частицы

## 🚀 Быстрый старт

### Локальный запуск

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/your-username/furry-dictionary.git
   cd furry-dictionary
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите локальный сервер:**
   ```bash
   npm start
   ```

4. **Откройте в браузере:**
   ```
   http://localhost:3000
   ```

### Альтернативный способ (без npm)

Просто откройте файл `index.html` в браузере!

## 🌐 Деплой на Netlify (Рекомендуется)

### 🚀 Простой способ - Drag & Drop

1. **Перейдите на [netlify.com](https://netlify.com)**
2. **Войдите в аккаунт или зарегистрируйтесь**
3. **Перетащите всю папку проекта в область "Deploy manually"**
4. **Готово!** Сайт автоматически задеплоится

### 📁 Что включено для Netlify

✅ `_redirects` - поддержка SPA  
✅ `netlify.toml` - конфигурация деплоя  
✅ `package.json` - метаданные проекта  
✅ SEO оптимизация  
✅ Favicon  
✅ Оптимизированные стили  

### 🔧 Альтернативные способы

#### GitHub Pages

1. **Создайте репозиторий на GitHub**
2. **Загрузите файлы в репозиторий**
3. **Включите GitHub Pages:**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

4. **Ваш сайт будет доступен по адресу:**
   ```
   https://your-username.github.io/furry-dictionary
   ```

### Vercel

1. **Установите Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Деплой:**
   ```bash
   vercel
   ```

### Firebase Hosting

1. **Установите Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Инициализируйте проект:**
   ```bash
   firebase init hosting
   ```

3. **Деплой:**
   ```bash
   firebase deploy
   ```

## 📁 Структура проекта

```
furry-dictionary/
├── index.html          # Главная страница
├── styles.css          # Стили и анимации
├── script.js           # JavaScript логика
├── package.json        # Конфигурация npm
└── README.md           # Документация
```

## 🎨 Кастомизация

### Добавление новых терминов

Отредактируйте массив `furryTerms` в файле `script.js`:

```javascript
{
    id: 21,
    term: "Новый термин",
    translation: "Перевод",
    description: "Описание термина",
    category: "basic", // basic, behavior, appearance, community
    example: "Пример использования"
}
```

### Изменение цветовой схемы

Отредактируйте CSS переменные в `styles.css`:

```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Добавление новых анимаций

Создайте новые keyframes в `styles.css`:

```css
@keyframes myAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
```

## 🛠️ Технологии

- **HTML5** - семантическая разметка
- **CSS3** - стили, анимации, градиенты
- **JavaScript ES6+** - интерактивность
- **Font Awesome** - иконки
- **Google Fonts** - шрифт Fredoka

## 📱 Поддержка браузеров

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 Вклад в проект

1. Fork репозиторий
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

## 🐾 Контакты

- **Автор:** @itsfinnik
- **Email:** itsfinnik@gmail.com

## 🙏 Благодарности

- Фурри сообществу за вдохновение
- Разработчикам за отличные инструменты
- Всем, кто тестировал и предлагал улучшения

---

**Сделано с ❤️ для фурри сообщества** 🐾
