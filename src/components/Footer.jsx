import Button from 'react-bootstrap/Button'

// Pie de página: botón redondo para volver arriba (esquina inferior derecha).
function Footer() {
  const subir = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer>
      <Button
        className="boton-subir rounded-circle"
        onClick={subir}
        aria-label="Volver arriba"
      >
        <i className="bi bi-arrow-up"></i>
      </Button>
    </footer>
  )
}

export default Footer
