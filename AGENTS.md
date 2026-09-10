# Reglas de trabajo para agentes

Estas reglas aplican a todo el repositorio.

## Propósito y alcance

- Este repositorio contiene el sitio web oficial de ASCUA.
- Mantener el sitio estático, rápido, accesible y compatible con GitHub Pages mientras no exista una necesidad aprobada de infraestructura adicional.
- Priorizar una entrega inicial mínima: una página de expectativa clara, cuidada y fácil de reemplazar por el sitio definitivo.

## Identidad de marca

- Respetar la identidad visual y verbal definida por ASCUA; no inventar colores, tipografías, logotipos, datos de contacto ni afirmaciones comerciales.
- Usar únicamente recursos de marca aprobados y conservar las proporciones y el área de seguridad del logotipo.
- Mantener el diseño sobrio, legible y coherente en móvil y escritorio.

## Implementación

- Preferir HTML, CSS y JavaScript nativos. No añadir frameworks, gestores de paquetes o procesos de compilación sin una necesidad concreta y documentada.
- Escribir archivos de texto en UTF-8 sin BOM e incluir `<meta charset="utf-8">` en cada documento HTML.
- Usar rutas relativas compatibles con el dominio personalizado y con la URL de proyecto de GitHub Pages.
- Mantener HTML semántico, navegación por teclado, contraste suficiente, textos alternativos y respeto por `prefers-reduced-motion`.
- No incluir secretos, credenciales, datos personales ni claves de servicios en el repositorio.

## Calidad y cambios

- Mantener cada cambio pequeño y enfocado; evitar refactorizaciones ajenas a la tarea.
- Probar localmente los enlaces, recursos, diseño adaptable y ausencia de errores en la consola antes de publicar.
- Documentar en `README.md` cualquier comando, dependencia o decisión nueva necesaria para desarrollar o desplegar el sitio.
- No modificar la configuración del dominio, DNS o GitHub Pages sin verificar el destino y dejar constancia del cambio.

## Git

- Usar ramas con el prefijo `codex/` para trabajo automatizado.
- Escribir commits breves y descriptivos en español.
- No reescribir la historia compartida ni hacer `push --force` salvo autorización expresa.
- No incorporar archivos temporales, resultados de pruebas ni artefactos locales.
