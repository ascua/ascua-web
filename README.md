# ASCUA Web

Sitio web oficial de ASCUA: presencia digital, novedades y experiencias que conectan comunidad, cultura y propósito.

## Estado

El proyecto contiene una página de expectativa estática preparada para publicarse mediante GitHub Pages y conectarse posteriormente al dominio oficial.

## Principios

- Experiencia clara y accesible.
- Diseño coherente con la identidad de ASCUA.
- Carga rápida y mantenimiento sencillo.
- Sin dependencias innecesarias.

Las reglas de colaboración y desarrollo están documentadas en [`AGENTS.md`](AGENTS.md).

## Flujo de ramas

- `main`: versión publicada en producción.
- `develop`: integración de los próximos cambios.
- `feature/*`: funcionalidades y cambios ordinarios que se integran en `develop` mediante pull request.
- `hotfix/*`: correcciones urgentes que se integran en `develop` mediante pull request.

Todo trabajo se realiza en una rama temporal. Después de fusionar el pull request en `develop`, la rama se elimina. Las publicaciones pasan de `develop` a `main` mediante otro pull request, que activa el despliegue de producción.

Los commits siguen [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) y contienen únicamente la línea `<type>[optional scope]: <description>`.

## Desarrollo local

El sitio no requiere instalación ni compilación. Puede servirse con cualquier servidor HTTP estático y abrirse desde el navegador.

Las pruebas usan el ejecutor integrado de Node.js:

```sh
node --test tests/site.test.mjs
```

## Estructura

- `index.html`: contenido y metadatos de la página.
- `styles.css`: identidad visual y adaptación responsive.
- `assets/`: isotipo, favicon y tipografía alojada localmente.
- `tests/`: validaciones automatizadas del contenido y los recursos.
