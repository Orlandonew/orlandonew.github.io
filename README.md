# Regla de Proximidad: Guía para Seleccionar el Instrumento Más Apropiado

Esta herramienta web permite a los usuarios seleccionar el instrumento de medición más adecuado basado en varios criterios clave, utilizando una metodología conocida como la **Regla de Proximidad**. La herramienta proporciona una guía estructurada para evaluar diferentes instrumentos, con el objetivo de ayudar a investigadores y profesionales a tomar decisiones fundamentadas para seleccionar el mejor instrumento de evaluación en sus estudios o investigaciones.

## Características
- **Evaluación de Instrumentos**: Evalúa distintos instrumentos de medición según criterios específicos como la proximidad temática, proximidad poblacional, idioma, calidad de los indicadores psicométricos, longitud del instrumento, y fecha de creación y validación.
- **Calificaciones Estructuradas**: Los usuarios pueden calificar cada criterio con una escala de 1 a 5, donde 5 indica el mayor ajuste al criterio definido.
- **Interfaz Amigable**: Interfaz visual limpia y moderna desarrollada con Tailwind CSS y JavaScript, que facilita la interacción y la evaluación de los instrumentos de manera intuitiva.

## Criterios de Evaluación
La herramienta permite calificar un instrumento según los siguientes criterios:
1. **Proximidad Temática (20%)**: Alineación del instrumento con el tema o constructo de interés.
2. **Proximidad Poblacional - País (15%)**: Creación o validación del instrumento en el país donde se va a utilizar.
3. **Proximidad Poblacional - Grupo de Edad (10%)**: Validación del instrumento en el grupo de edad objetivo.
4. **Idioma (15%)**: Validación del instrumento en el idioma de la población objetivo.
5. **Indicadores Psicométricos (20%)**: Calidad de los indicadores psicométricos, como consistencia interna y validez.
6. **Longitud del Instrumento (10%)**: Adecuación de la extensión del instrumento en función del balance entre profundidad de la medición y tiempo de aplicación.
7. **Fecha de Creación y Validación (10%)**: Actualización del instrumento en los últimos años.

## Instalación y Uso
Para probar y usar esta herramienta de manera local o subirla a GitHub Pages, sigue los siguientes pasos:

1. **Clona el Repositorio**:
   ```sh
   git clone <URL-del-repositorio>
   cd Proximidad-tool
   ```

2. **Estructura de Archivos**: Asegúrate de tener la siguiente estructura de archivos:
   - `index.html`: Archivo HTML principal de la herramienta.
   - `style.css`: Archivo CSS externo para los estilos personalizados.
   - `script.js`: Archivo JavaScript externo para las funcionalidades interactivas.

3. **Abrir en un Navegador**: Puedes probar la herramienta localmente simplemente abriendo el archivo `index.html` en tu navegador.

4. **GitHub Pages**: Si deseas alojar la herramienta en GitHub Pages, sube todos los archivos al repositorio y habilita GitHub Pages desde la configuración del repositorio.

## Requisitos
- **Navegador Moderno**: La herramienta funciona correctamente en navegadores modernos como Chrome, Firefox, Safari, o Edge.
- **Conexión a Internet**: Para cargar Tailwind CSS y Google Fonts, es necesaria una conexión a Internet.

## Tecnologías Utilizadas
- **HTML5**: Estructura del contenido de la página.
- **Tailwind CSS**: Para un diseño limpio y responsive.
- **JavaScript**: Para la interactividad de la aplicación.
- **Google Fonts**: Para una tipografía atractiva y consistente (Roboto).

## Cómo Contribuir
Si deseas contribuir al proyecto, sigue los siguientes pasos:
1. Haz un fork del repositorio.
2. Crea una rama con una nueva característica (`git checkout -b feature/nueva-caracteristica`).
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva característica'`).
4. Sube la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Créditos
- **Orlando Scoppetta, PhD**: Autor de la metodología y de la herramienta de la Regla de Proximidad.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---
¡Gracias por usar la herramienta de la Regla de Proximidad! Si tienes alguna duda o sugerencia, no dudes en abrir un issue en el repositorio.

