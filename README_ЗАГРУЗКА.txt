HMSTR.FM v28.3: пакет

site/   всё, что заливается в КОРЕНЬ репозитория GitHub (xKOHb/hmstr.fm)
        index.html, request.html, overlay.html, sfx.js, og.png, api/feedback.js, api/meta.js, api/yt.js
docs/   документы и промты для работы (на сайт НЕ заливаются, в репозитории их лучше не держать)
        HANDOFF_COMMON.md, HANDOFF_PROJECT_HMSTR.md, HMSTR_ИНСТРУКЦИЯ.md, SETUP_ОБРАТНАЯ_СВЯЗЬ.md

peerjs.min.js в архив не входит. Скачай один раз:
  https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js  (Ctrl+S, имя peerjs.min.js)
и положи в корень репозитория рядом с index.html (если уже лежит, повторно не нужно).

Заливать: содержимое папки site (не саму папку) + папку api со всеми тремя файлами внутри.
Основной адрес: https://xkohb.github.io/hmstr.fm/  |  служебный (api): https://hmstrfm.vercel.app/
Telegram-уведомления: в Vercel проекта hmstr нужны TG_BOT_TOKEN и TG_CHAT_ID, затем Redeploy.
Для работы с Claude: отправь docs/HANDOFF_COMMON.md и docs/HANDOFF_PROJECT_HMSTR.md вместе с файлами сайта.
