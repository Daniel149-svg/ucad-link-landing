# UCAD Link — Landing Page

Landing page responsive para UCAD Link, construida con Angular 22 y estilos CSS sin dependencias visuales externas.

## Requisitos
- Node.js compatible con Angular 22 (Node 22 recomendado).
- npm.

## Desarrollo
```bash
npm install
npm start
```
Luego abre `http://localhost:4200/`.

## Producción
```bash
npm run build
```
La salida queda en `dist/ucad-link-landing/`.

## Imágenes
Las imágenes proporcionadas se encuentran en `src/assets/images/` y se publican en `/assets/images/`:
- `logo-ucad-link.png`
- `hero-estudiantes.png`
- `referencia-conecta.png`

## Enlaces
El CTA principal apunta a `https://ucadlink.framesv.site/`. Facebook e Instagram apuntan a los perfiles indicados en el brief.

## Notas
- El formulario/contacto se representa de forma estática mediante un enlace `mailto:`.
- La navegación interna usa scroll suave.
- No se requiere backend para esta landing.
- Se aplican atributos de accesibilidad, foco semántico y `rel="noopener noreferrer"` en enlaces externos.
