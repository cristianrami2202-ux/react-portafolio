import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Sección de presentación: avatar a la izquierda y texto a la derecha.
function Intro({ nombre, descripcion }) {
  return (
    <section id="inicio" className="seccion">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
          <img
            src="/img/foto_1.jpg"
            alt={`Avatar de ${nombre}`}
            className="img-fluid avatar"
          />
        </Col>
        <Col xs={12} md={8}>
          <h1 className="titulo-morado">Hola, soy {nombre}! 👋</h1>
          <p className="texto-gris">{descripcion}</p>
        </Col>
      </Row>
    </section>
  )
}

export default Intro
