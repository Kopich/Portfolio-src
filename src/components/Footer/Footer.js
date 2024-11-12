const Footer = () => (
  <footer className="bg-light text-center py-4 mt-auto" role="contentinfo">
    <div className="container d-flex justify-content-center align-items-center">
      <svg
        width="20"
        height="20"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="me-2"
        aria-label="Иконка авторских прав"
        role="img"
      >
        <circle cx="8.5" cy="8" r="7.6667" stroke="#4B5563" strokeWidth="2" />
        <path
          d="M10.5 6.236C10.1417 5.83 9.66823 5.5425 9.14254 5.41203C8.61685 5.28155 8.0639 5.31424 7.55725 5.50576C7.0506 5.69728 6.61429 6.03854 6.30636 6.48414C5.99843 6.92973 5.8335 7.45853 5.8335 8.00016C5.8335 8.5418 5.99843 9.0706 6.30636 9.51619C6.61429 9.96178 7.0506 10.303 7.55725 10.4946C8.0639 10.6861 8.61685 10.7188 9.14254 10.5883C9.66823 10.4578 10.1417 10.1704 10.5 9.76416"
          stroke="#4B5563"
          strokeWidth="2"
        />
      </svg>
      <p className="text-muted mb-0">
        2024 | Создано с ❤ <strong>Алексеем</strong>
      </p>
    </div>
  </footer>
);

export default Footer;
