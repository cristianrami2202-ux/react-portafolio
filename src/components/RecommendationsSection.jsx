import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RecommendationCard from './RecommendationCard'

function RecommendationsSection({ recomendaciones }) {
  return (
    <section id="recomendaciones" className="seccion">
      <h2 className="titulo-morado">Recomendaciones</h2>
      <Row className="g-4 mt-1">
        {recomendaciones.map((r) => (
          <Col key={r.id} xs={12} md={4}>
            <RecommendationCard nombre={r.nombre} mensaje={r.mensaje} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default RecommendationsSection
