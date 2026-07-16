# Mi proyecto existente — prueba del modo "Agregar a mi proyecto" (EMBEDDED)

Simula ser un proyecto propio ya armado (una landing sencilla), para probar el modo de export
por defecto de SuperDSAI Generator: en vez de crear un repo aparte para el design system, la app
agrega una carpeta `design-system/` acá mismo, dentro de este repo, vía Pull Request.

## Cómo probarlo

1. Subí este proyecto a un repo propio en GitHub (privado o público, da igual).
2. Corré `npm install && npm run dev` — vas a ver la página funcionando, pero **sin colores ni
   tipografía de marca**. Es lo esperado: todavía no exportaste nada acá.
3. Desde SuperDSAI Generator, con un Design System ya generado, elegí exportar en modo
   **"Agregar a mi proyecto"** y apuntá el campo "Repositorio" a `<tu-usuario>/<este-repo>`.
4. Revisá y mergeá el Pull Request que te llega en GitHub — trae `design-system/tokens/`,
   `design-system/components/` y `design-system/tailwind-preset.js`.
5. Volvé a correr `npm run dev` (o simplemente refrescá si ya lo tenías corriendo con hot reload).
   **Sin tocar ningún archivo**, la misma página ahora se ve con los colores y la tipografía
   reales de la marca.

## Por qué funciona sin tocar nada

`tailwind.config.js` ya está armado para detectar si `design-system/tailwind-preset.js` existe:
si no existe (antes del export), Tailwind arranca sin preset. Si existe (después del export), lo
toma solo. Las clases de `src/App.jsx` (`bg-primary`, `text-primary-foreground`, `bg-muted`,
`border-border`, etc.) ya están puestas de antemano — antes del export no pintan nada porque esos
colores no existen en el theme; después del export, empiezan a pintar solas.

## Paso opcional (no hace falta para esta prueba)

Para tener también los componentes reales (con sus estados de hover, disabled, error, no solo los
colores), se pueden reemplazar los `<button>`/`<input>`/`<textarea>` planos de `src/App.jsx` por
los componentes de `design-system/components/` (`Button`, `Input`, `Textarea`, `Alert`, `Badge`).
No es necesario para validar que el modo "Agregar a mi proyecto" funciona — el punto de esta
prueba es confirmar que los estilos se aplican solos, no reescribir la página.
