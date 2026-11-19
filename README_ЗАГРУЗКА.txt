HMSTR.FM v28.2: пакет

site/   всё, что нужно залить в КОРЕНЬ репозитория (GitHub) на Vercel и GitHub Pages
        index.html, request.html, overlay.html, sfx.js, og.png, api/feedback.js, api/meta.js, api/yt.js
docs/   документы и промты для работы (на сайт не заливаются)
        HANDOFF_COMMON.md, HANDOFF_PROJECT_HMSTR.md, HMSTR_ИНСТРУКЦИЯ.md, SETUP_ОБРАТНАЯ_СВЯЗЬ.md

ВАЖНО: в архив НЕ входит peerjs.min.js, его нужно скачать самому:
  1. Открой https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js
  2. Ctrl+S, имя файла: peerjs.min.js
  3. Положи рядом с index.html (в корень репозитория)

Заливать на GitHub: содержимое папки site (не саму папку site) + папку api со всеми тремя файлами внутри.
Адреса: https://hmstrfm.vercel.app/ (основной), https://xkohb.github.io/hmstr.fm/ (зеркало).

Для работы со мной (Claude): отправь docs/HANDOFF_COMMON.md и docs/HANDOFF_PROJECT_HMSTR.md вместе с файлами сайта.
Telegram-уведомления: в Vercel проекта hmstr нужны TG_BOT_TOKEN и TG_CHAT_ID, затем Redeploy.
