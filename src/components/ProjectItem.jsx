import Badge from 'react-bootstrap/Badge'

function ProjectItem({ titulo, puntos, tecnologias, ultimo }) {
  return (
    <div className="proyecto">
      <h5 className="proyecto-titulo">{titulo}</h5>
      <ul className="proyecto-lista">
        {puntos.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <div className="proyecto-tecnologias">
        {tecnologias.map((t) => (
          <Badge key={t} pill bg="primary" className="me-1">
            {t}
          </Badge>
        ))}
      </div>
      {!ultimo && <hr className="proyecto-linea" />}
    </div>
  )
}

export default ProjectItem