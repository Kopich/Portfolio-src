import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ successMessage: '', errorMessage: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus({ errorMessage: 'Пожалуйста, заполните все поля.', successMessage: '' });
      return;
    }

    setTimeout(() => {
      setStatus({ successMessage: 'Ваше сообщение успешно отправлено!', errorMessage: '' });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center mb-4">Связаться со мной</h3>

          {status.errorMessage && (
            <div className="alert alert-danger" role="alert" aria-live="assertive">
              {status.errorMessage}
            </div>
          )}
          {status.successMessage && (
            <div className="alert alert-success" role="alert" aria-live="assertive">
              {status.successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} aria-labelledby="form-title">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Имя</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введите Ваше имя"
                aria-required="true"
                aria-describedby="nameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Электронная почта</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="Введите Ваш email"
                aria-required="true"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Сообщение</label>
              <textarea
                id="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Введите сообщение"
                aria-required="true"
                aria-describedby="messageHelp"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Отправить сообщение</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
