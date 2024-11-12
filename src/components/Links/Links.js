const Links = () => (
  <div className="my-5">
    <div className="d-flex justify-content-center mb-4">
      <a
        href="mailto:mail@gmail.com"
        className="text-decoration-none me-4"
        aria-label="Отправить email"
      >
        <img src="/Portfolio/assets/mail-icon.png" width={40} height={40} alt="Иконка email" />
      </a>
      <a
        href="https://t.me/cognitive_system"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
        aria-label="Написать в Telegram"
      >
        <img src="/Portfolio/assets/telegram-icon.png" width={40} height={40} alt="Иконка Telegram" />
      </a>
    </div>
    <p className="text-center">
      <a
        href="mailto:aleksey.kopichin@gmail.com"
        className="text-decoration-none"
        aria-label="Email: aleksey.kopichin@gmail.com"
      >
        aleksey.kopichin@gmail.com
      </a>
    </p>
  </div>
);

export default Links;
