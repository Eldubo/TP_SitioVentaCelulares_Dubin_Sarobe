import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <section className="home-container">
      <div className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Tecnomorphosis</h1>
          <p>Explorá los mejores celulares del mercado.</p>
          <Link to="/productos" className="btn-cta">Ver Productos</Link>
        </div>
      </div>

      <div className="home-featured">
        <h2>Marcas Destacadas</h2>
        <div className="brands">
          <div className="brand-card">
          <Link to={`/productos/marca/1`}>
            <img src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.news_app_ed.jpg" alt="Apple" />
            <p>Apple</p>
            </Link>
          </div>
          <div className="brand-card">
            <Link to={`/productos/marca/2`}>
            <img src="https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-ultra-titaniumblack-device_1.png" alt="Samsung" />
            <p>Samsung</p>
            </Link>
          </div>
          <div className="brand-card">
          <Link to={`/productos/marca/3`}>
            <img src="https://acdn-us.mitiendanube.com/stores/001/097/819/products/00157063611149009_7__1200x1200-7e01c5b80ad0967a7317438079619973-480-0.jpg" alt="Xiaomi" />
            <p>Xiaomi</p>
            </Link>
          </div>
          <div className="brand-card">
          <Link to={`/productos/marca/4`}>
            <img src="https://authogar.vtexassets.com/arquivos/ids/210266/EDGE-50-FUSION-1.png?v=638631327964370000" alt="Motorola" />
            <p>Motorola</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
