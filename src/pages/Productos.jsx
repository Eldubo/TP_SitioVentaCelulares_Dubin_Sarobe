import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import CardCelular from '../components/Cardcelular.jsx'; 
import '../styles/productos.css';

export default function Productos() {
  const { idMarca } = useParams();
  const marcaIdNum = idMarca ? parseInt(idMarca, 10) : null;

  const lista = marcaIdNum
    ? celulares.filter(c => c.marcaId === marcaIdNum)
    : celulares;

  return (
    <section className="productos-section">
      <h2>Productos {idMarca ? `(Marca ID: ${marcaIdNum})` : ''}</h2>
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
