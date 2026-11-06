import Card from 'react-bootstrap/Card'

function SkillCard({ nombre, nivel, descripcion, icono }) {
  return (
    <Card className="tarjeta-habilidad text-center h-100">
      <Card.Body>
        <img src={icono} alt={nombre} className="icono-habilidad" />
        <Card.Title className="nombre-habilidad">{nombre}</Card.Title>
        <Card.Text className="mb-1">Nivel: {nivel}</Card.Text>
        <Card.Text className="descripcion-habilidad">{descripcion}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SkillCard