import "./contact.css";

function Contact() {
  return (
    <div className="contactContainer">
      <form
        action="https://formsubmit.co/55009e6abd1898f3c8153f681e4bba35"
        method="POST"
      >
        <h1 className="intro">
          Si necesitas información que no está disponible en nuestro sitio web,
          estamos aquí para ayudarte.
        </h1>
        <h2>Datos de contacto</h2>
        <div className="formElements">
          <div className="form-element name">
            <label htmlFor="name">Nombre *</label>
            <input type="text" id="name" className="form-control" required />
          </div>

          <div className="form-element subject">
            <label htmlFor="subject">Asunto *</label>
            <input type="text" id="subject" className="form-control" required />
          </div>

          <div className="form-element phone">
            <label htmlFor="subject">Teléfono</label>
            <input type="number" id="phone" className="form-control" />
          </div>

          <div className="form-element email">
            <label htmlFor="email">e-mail *</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
            />
          </div>

          <div className="form-element message">
            <label htmlFor="message">Comentario *</label>
            <textarea name="message" cols="30" rows="4" required></textarea>
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
