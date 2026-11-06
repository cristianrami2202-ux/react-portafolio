// Aquí están todos los datos del portafolio.
// Cambia los textos por los tuyos y la página se actualiza sola.

const icono = (nombre) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${nombre}/${nombre}-original.svg`

export const perfil = {
  nombre: 'Cristian Camilo Ramirez Valencia',
  correo: 'cristianrami2202@gmail.com',
  telefono: '+57 311 286 2806',
  descripcion:
    'Soy aprendiz de Análisis y Desarrollo de Software (ADSO) en el SENA, en Medellín, con interés en el desarrollo web y la creación de soluciones tecnológicas. Cuento con conocimientos básicos en HTML, CSS, JavaScript y bases de datos, y actualmente estoy fortaleciendo mis habilidades en React y Bootstrap para desarrollar interfaces modernas, funcionales y adaptables. Me caracterizo por mi disposición para aprender, mejorar continuamente y aplicar mis conocimientos en proyectos prácticos, buscando crecer profesionalmente como desarrollador de software.' 
}


export const habilidades = [
  {
    id: 1,
    nombre: 'HTML5',
    nivel: 'Intermedio',
    descripcion: 'Estructuración de páginas web y contenido semántico.',
    icono: icono('html5'),
  },
  {
    id: 2,
    nombre: 'CSS3',
    nivel: 'Intermedio',
    descripcion: 'Diseño web, estilos, Flexbox y diseño responsive.',
    icono: icono('css3'),
  },
  {
    id: 3,
    nombre: 'JavaScript',
    nivel: 'Básico - Intermedio',
    descripcion: 'Lógica de programación, funciones, eventos y DOM.',
    icono: icono('javascript'),
  },
  {
    id: 4,
    nombre: 'React',
    nivel: 'Básico',
    descripcion: 'Componentes, props, estados y creación de interfaces.',
    icono: icono('react'),
  },
  {
    id: 5,
    nombre: 'Python',
    nivel: 'Básico',
    descripcion: 'Fundamentos de programación, listas y estructuras de datos.',
    icono: icono('python'),
  },
  {
    id: 6,
    nombre: 'Bootstrap',
    nivel: 'Intermedio',
    descripcion: 'Diseño de interfaces responsive mediante componentes y utilidades.',
    icono: icono('bootstrap'),
  },
];


export const proyectos = [
  {
    id: 1,
    titulo: 'BarberAg',
    puntos: [
      'Sistema web para administrar una barbería en Manrique Jardín, desarrollado en equipo con mis compañeros de ficha.',
      'Documento de requisitos IEEE 830 con 84 requisitos funcionales en seis módulos: citas, servicios, usuarios, pagos, suscripciones y reseñas.',
      'Ficha técnica del software (Node.js, Express y MySQL), modelo entidad-relación y mapas de navegación.',
      'Sitio web con Bootstrap 5, planes de suscripción y reseñas de clientes.',
    ],
    tecnologias: ['HTML', 'Bootstrap 5', 'Node.js', 'Express', 'MySQL'],
  },
  {
    id: 2,
    titulo: 'El Fogón',
    puntos: [
      'Página web de un restaurante de comida colombiana con carruseles y tarjetas de productos.',
      'Ventanas modales para inicio de sesión, registro y detalle de cada plato.',
    ],
    tecnologias: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript'],
  },
  {
    id: 3,
    titulo: 'TECHSTORE',
    puntos: [
      'Tienda virtual de motocicletas con catálogo de productos y diseño responsive.',
    ],
    tecnologias: ['HTML', 'CSS', 'Bootstrap 5'],
  },
  {
    id: 4,
    titulo: 'AquaPure Colombia',
    puntos: [
      'Proyecto integrador académico de una empresa ficticia de agua embotellada.',
      'Unificación de tres documentos en un solo informe y página de ventas con catálogo de cuatro productos en pesos colombianos.',
    ],
    tecnologias: ['HTML', 'CSS', 'SVG', 'Word'],
  },
  {
    id: 5,
    titulo: 'Bases de datos',
    puntos: [
      'Procedimiento almacenado en PL/pgSQL con estructuras de control (IF, CASE, ciclos y cursores) para el caso SmartMarket.',
      'Consultas en SQL con JOIN, GROUP BY, subconsultas y UNION sobre la base Sakila.',
      'Diseño de un esquema en MongoDB para un sistema de reservas de restaurante.',
    ],
    tecnologias: ['PostgreSQL', 'SQL', 'MongoDB'],
  },
  {
    id: 6,
    titulo: 'Programación orientada a objetos en Python',
    puntos: [
      'Ejercicios de los cuatro pilares: abstracción, encapsulación, herencia y polimorfismo.',
      'Ejercicios de integración y reto final aplicando los pilares juntos.',
    ],
    tecnologias: ['Python', 'POO'],
  },
  {
    id: 7,
    titulo: 'Lógica con JavaScript',
    puntos: [
      'Programas con ciclos for y while en Node.js, usando readline-sync para leer datos.',
      'Cinco actividades prácticas de la guía de JavaScript avanzado.',
    ],
    tecnologias: ['JavaScript', 'Node.js'],
  },
]
// Textos de ejemplo: reemplázalos por recomendaciones reales.
export const recomendacionesIniciales = [
  {
    id: 1,
    nombre: 'Compañero de ficha',
    mensaje:
      'Es muy responsable en el trabajo en equipo y siempre está dispuesto a explicar lo que sabe.',
  },
  {
    id: 2,
    nombre: 'Compañero de proyecto',
    mensaje:
      'Aprende rápido y no se queda con dudas. Cumple con las entregas a tiempo.',
  },
  {
    id: 3,
    nombre: 'Persona de ejemplo',
    mensaje:
      'Tiene muchas ganas de aprender y mejora cada día. Sería un buen aporte para cualquier equipo.',
  },
]
