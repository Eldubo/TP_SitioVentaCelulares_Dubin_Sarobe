import '../styles/quienesSomos.css';

export default function QuienesSomos() {
  return (
    <section className="quienes-somos-container">
      <div className="quienes-somos-content">
        <h1>Quiénes Somos</h1>
        <p>Somos una tienda especializada en tecnología móvil, ofreciendo los mejores dispositivos de las marcas más reconocidas del mercado.</p>
        <p>En CellStore nos apasiona brindarte lo último en tecnología, garantizando productos de calidad y un servicio al cliente excepcional.</p>
        
        <div className="quienes-somos-image">
          <img 
            src="https://www.apple.com/v/home/c/images/heroes/iphone-14-pro/hero_iphone14pro__f2ffrly7sjeq_large.jpg" 
            alt="Tecnología móvil" 
          />
        </div>
        
        <p>Creemos en la innovación constante y en ayudarte a encontrar el dispositivo que mejor se adapte a tus necesidades.</p>
      </div>
    </section>
  );
}