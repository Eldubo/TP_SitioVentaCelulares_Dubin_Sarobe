import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import '../styles/productoDetalle.css';

export default function ProductoDetalle() {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  const [imagenesCargadas, setImagenesCargadas] = useState([]);

  useEffect(() => {
    if (celular) {
      setImagenesCargadas(new Array(celular.fotos.length).fill(false));
    }
  }, [celular]);

  const manejarCarga = (index) => {
    setImagenesCargadas((prev) => {
      const nuevo = [...prev];
      nuevo[index] = true;
      return nuevo;
    });
  };

  if (!celular) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h2>{celular.nombre}</h2>
      <div>
        {celular.fotos.map((foto, i) => (
          <img
            key={i}
            src={foto}
            alt={`${celular.nombre} ${i + 1}`}
            width="200"
            style={{ visibility: imagenesCargadas[i] ? 'visible' : 'hidden' }}
            onLoad={() => manejarCarga(i)}
          />
        ))}
      </div>
      <p>{celular.descripcion}</p>
      <p>Precio: ${celular.precio}</p>
    </section>
  );
}
