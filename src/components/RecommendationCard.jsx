import Card from 'react-bootstrap/Card'

function RecommendationCard({ nombre, mensaje }) {
  return (
    <Card className="tarjeta-recomendacion h-100">
      <Card.Body>
        <Card.Text className="fst-italic">"{mensaje}"</Card.Text>
        <Card.Subtitle className="autor-recomendacion">- {nombre}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default RecommendationCard
