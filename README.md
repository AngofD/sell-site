# Hammelmann Landing Page

Статичний односторінковий сайт для продажу професійної установки надвисокого тиску Hammelmann.

## Структура

- `index.html` — основна сторінка
- `styles.css` — стилі та адаптивність
- `script.js` — burger-меню, галерея та lightbox
- `photos/` — оригінальні фотографії
- `assets/thumbs/` — оптимізовані прев'ю для галереї
- `assets/icons/favicon.svg` — favicon placeholder

## Локальний запуск

```bash
python3 -m http.server 4173
```

Потім відкрийте `http://127.0.0.1:4173`.

## Публікація на Cloudflare Pages

- Framework preset: `None`
- Build command: залишити порожнім
- Build output directory: `/`
- Root directory: `/`

## Перед публікацією замінити

- `https://example.com` у `index.html`
- `+380 XX XXX XX XX`
- `@username`
- `[вказати місто]`
- технічні посилання `tel:`, `wa.me`, `viber://`, `t.me`
