import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectItem from './ProjectItem'

function ProjectsSection({ proyectos }) {
  return (
    <section id="proyectos" className="seccion">
      <h2 className="titulo-morado">Proyectos</h2>
      <Row>
        <Col xs={12} lg={{ span: 10, offset: 1 }}>
          {proyectos.map((p, i) => (
            <ProjectItem
            key={p.id}
            titulo={p.titulo}
            puntos={p.puntos}
            tecnologias={p.tecnologias}
            ultimo={i === proyectos.length - 1}
            />
          ))}
        </Col>
      </Row>
    </section>
  )
}

export default ProjectsSection
