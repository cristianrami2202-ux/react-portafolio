import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import Intro from './components/Intro'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import RecommendationsSection from './components/RecommendationsSection'
import LeaveRecommendationForm from './components/LeaveRecommendationForm'
import Footer from './components/Footer'
import {
  perfil,
  habilidades,
  proyectos,
  recomendacionesIniciales,
} from './data'

// Componente principal: junta todas las secciones y guarda el estado
// de las recomendaciones para poder agregar nuevas desde el formulario.
function App() {
  const [recomendaciones, setRecomendaciones] = useState(
    recomendacionesIniciales
  )

  const agregarRecomendacion = (nombre, mensaje) => {
    const nueva = {
      id: Date.now(),
      nombre: nombre.trim() || 'Anónimo',
      mensaje: mensaje.trim(),
    }
    setRecomendaciones([...recomendaciones, nueva])
  }

  return (
    <>
      <Header nombre={perfil.nombre} correo={perfil.correo} telefono={perfil.telefono} />
      <Container className="contenido">
        <Intro nombre={perfil.nombre} descripcion={perfil.descripcion} />
        <SkillsSection habilidades={habilidades} />
        <ProjectsSection proyectos={proyectos} />
        <RecommendationsSection recomendaciones={recomendaciones} />
        <LeaveRecommendationForm onEnviar={agregarRecomendacion} />
      </Container>
      <Footer />
    </>
  )
}

export default App
