# Mi Portafolio (React + Bootstrap)

## Cómo correrlo
1. Instala Node.js (https://nodejs.org) si no lo tienes.
2. Abre esta carpeta en Visual Studio Code (Archivo > Abrir carpeta).
3. Abre la terminal (Ctrl + ñ) y ejecuta:
   ```
   npm install
   npm run dev
   ```
4. Abre el link que sale (normalmente http://localhost:5173).

## Qué cambiar
- `src/data.js`: tu nombre, correo, teléfono, habilidades, proyectos y recomendaciones.
- `public/avatar.svg`: reemplázalo por tu foto (si usas .jpg o .png, cambia el nombre en `src/components/Intro.jsx`).

## Estructura
```
src/
  App.jsx                  -> junta todo
  data.js                  -> datos del portafolio
  App.css                  -> estilos personalizados
  components/
    Header.jsx             -> Navbar morado
    Intro.jsx              -> "Hola, soy ..."
    SkillsSection.jsx / SkillCard.jsx
    ProjectsSection.jsx / ProjectItem.jsx
    RecommendationsSection.jsx / RecommendationCard.jsx
    LeaveRecommendationForm.jsx
    Footer.jsx             -> botón de subir
```
