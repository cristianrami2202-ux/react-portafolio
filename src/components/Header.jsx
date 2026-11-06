import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

// Barra de navegación morada con nombre, contacto y enlaces a las secciones.
function Header({ nombre, correo, telefono }) {
  return (
    <Navbar expand="md" variant="dark" className="barra-morada">
      <Container>
        <Navbar.Brand href="#inicio" className="marca">
          <span className="marca-nombre">{nombre}</span>
          <small className="marca-contacto">
            <i className="bi bi-envelope-fill"></i> {correo}
          </small>
          <small className="marca-contacto">
            <i className="bi bi-telephone-fill"></i> {telefono}
          </small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Sobre mí</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#recomendaciones">Recomendaciones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
