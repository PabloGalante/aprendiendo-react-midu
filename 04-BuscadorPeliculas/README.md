# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc/blob/main/packages/plugin-react-swc/README.md) uses [SWC](https://swc.rs/) for Fast Refresh

## Búsqueda de películas

La búsqueda está temporalmente desactivada. No incluyas una clave de OMDb en el
código del navegador ni en una variable `VITE_*`: Vite incorpora esas variables
al bundle público. Para reactivarla, implementa un proxy del lado del servidor y
guarda la clave como una variable de entorno únicamente en ese servidor.

La clave anteriormente publicada debe rotarse en OMDb. Borrarla del código actual
no la elimina del historial de Git.
