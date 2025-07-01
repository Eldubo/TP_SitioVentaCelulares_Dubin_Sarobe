import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import '../styles/productoDetalle.css';

export default function ProductoDetalle() {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  const [imagenesCargadas, setImagenesCargadas] = useState([]);
  const [animando, setAnimando] = useState(false);

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

  const handleComprarClick = () => {
    setAnimando(true);
    setTimeout(() => {
      setAnimando(false);
    }, 1000);
  };

  if (!celular) return <p className="producto-no-encontrado">Producto no encontrado</p>;

  return (
    <section className="producto-detalle">
      <div className="galeria-imagenes">
        {celular.fotos.map((foto, i) => (
          <img
            key={i}
            src={foto}
            alt={`${celular.nombre} ${i + 1}`}
            className={`imagen-producto ${imagenesCargadas[i] ? 'visible' : 'oculta'}`}
            onLoad={() => manejarCarga(i)}
          />
        ))}
      </div>

      <div className="informacion-producto">
        <h2 className="nombre-producto">{celular.nombre}</h2>
        <p className="descripcion-producto">{celular.descripcion}</p>
        <p className="precio-producto">Precio: <strong>${celular.precio}</strong></p>
        <button
          className={`boton-comprar ${animando ? 'animar' : ''}`}
          onClick={handleComprarClick}
          disabled={animando}
        >
          {animando ? 'Producto añadido al carrito' : 'Comprar ahora'}
        </button>
      </div>
    </section>
  );
}
