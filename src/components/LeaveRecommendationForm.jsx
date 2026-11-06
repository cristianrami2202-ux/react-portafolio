import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Formulario para dejar una recomendación. Al enviar, llama a onEnviar
// (función que viene por props desde App) y limpia los campos.
function LeaveRecommendationForm({ onEnviar }) {
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()
    if (!mensaje.trim()) return
    onEnviar(nombre, mensaje)
    setNombre('')
    setMensaje('')
  }

  return (
    <section id="contacto" className="seccion">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={manejarEnvio}>
            <h4 className="titulo-form">Deja una recomendación</h4>
            <Form.Group className="mb-3" controlId="campoNombre">
              <Form.Label visuallyHidden>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre (opcional)"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="campoMensaje">
              <Form.Label visuallyHidden>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="outline-primary" className="boton-enviar">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </section>
  )
}

export default LeaveRecommendationForm
