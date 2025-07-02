import '../styles/QuienesSomos.css';

export default function QuienesSomos() {
  return (
    <section className="quienes-somos-container">
      <div className="quienes-somos-content">
        <h1>Quiénes Somos</h1>
        <p>Somos una tienda especializada en tecnología móvil, ofreciendo los mejores dispositivos de las marcas más reconocidas del mercado.</p>
        <p>En Tecnomorphosis nos apasiona brindarte lo último en tecnología, garantizando productos de calidad y un servicio al cliente excepcional.</p>
        
        <div className="quienes-somos-image">
          <img 
            src="https://www.semana.com/resizer/v2/HETAPQM7JVH4ZNBGE2PTEIB6NU.jpg?auth=d95346ac1c56a10262652fc90e56c3d08d19b06260f902d5f5a8a85a51cc4600&smart=true&quality=75&width=1280&height=720" 
            alt="Tecnología móvil" 
          />
        </div>
        
        <p>Creemos en la innovación constante y en ayudarte a encontrar el dispositivo que mejor se adapte a tus necesidades.</p>
      </div>
    </section>
  );
}