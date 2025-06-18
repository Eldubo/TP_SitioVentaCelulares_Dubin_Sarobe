import { useState } from 'react';
import '../styles/contacto.css';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado de: ${nombre}`);
  };

  return (
    <section className="contacto-container">
      <div className="contacto-content">
        <h1>Contacto</h1>
        <p>Nos encantaría saber de ti. Escríbenos y te responderemos lo antes posible.</p>
        
        <form onSubmit={handleSubmit} className="contacto-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              placeholder="Tu nombre" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Tu email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
              id="mensaje" 
              placeholder="Escribe tu mensaje..." 
              value={mensaje} 
              onChange={(e) => setMensaje(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
