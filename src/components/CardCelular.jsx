import { Link } from 'react-router-dom';
import '../styles/cardcelular.css'

export default function CardCelular({ celular }) {
  return (
    <article className="card-celular">
      <h3>{celular.nombre}</h3>
      <img
        src={celular.fotos[0]}
        alt={celular.nombre}
        width="200"
        onError={(e) => e.target.src = 'https://via.placeholder.com/200x150?text=Sin+imagen'}
      />
      <p>{celular.descripcion}</p>
      <p>Precio: ${celular.precio}</p>
      <Link to={`/productos/detalle/${celular.id}`}>Ver detalle</Link>
    </article>
  );
}
