import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import CardCelular from '../components/Cardcelular.jsx'; 
import '../styles/productos.css';

export default function Productos() {
  const { idMarca } = useParams();
  const marcaIdNum = idMarca ? parseInt(idMarca, 10) : null;

  const marca = marcaIdNum ? marcas.find(m => m.id === marcaIdNum) : null;

  const lista = marcaIdNum
    ? celulares.filter(c => c.marcaId === marcaIdNum)
    : celulares;

  return (
    <section className="productos-section">
      <h2>Productos {marca ? `(Marca: ${marca.nombre})` : 'Disponibles'}</h2>
      <div className="productos-grid">
        {lista.length > 0 ? (
          lista.map(cel => <CardCelular key={cel.id} celular={cel} />)
        ) : (
          <p>No hay celulares disponibles para esta marca.</p>
        )}
      </div>
    </section>
  );
}
