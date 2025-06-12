import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';

export default function ProductoDetalle() {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  if (!celular) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h2>{celular.nombre}</h2>
      <div>
        {celular.fotos.map((foto, i) => (
          <img key={i} src={foto} alt={`${celular.nombre} ${i + 1}`} width="200" />
        ))}
      </div>
      <p>{celular.descripcion}</p>
      <p>Precio: ${celular.precio}</p>
    </section>
  );
}
