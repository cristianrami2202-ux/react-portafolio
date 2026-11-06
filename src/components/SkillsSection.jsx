import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SkillCard from './SkillCard'

// Cuadrícula responsiva: 2 por fila en celular, 3 en tablet y 4 en pantalla grande.
function SkillsSection({ habilidades }) {
  return (
    <section id="habilidades" className="seccion">
      <h2 className="titulo-morado">Habilidades</h2>
      <Row className="g-4 mt-1">
        {habilidades.map((h) => (
          <Col key={h.id} xs={6} md={4} lg={3}>
            <SkillCard
                  nombre={h.nombre}
                  nivel={h.nivel}
                  descripcion={h.descripcion}
                  icono={h.icono}
                  />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default SkillsSection
