# Sistema de diseno — ASCUA

Generado: 2026-09-23 | Consulta: "estudio personalizacion textil pagina proximamente artesanal sobria" | Ajustado a mano con la marca aprobada | Stack: web

> El catalogo no tuvo match verificado para paleta ni tipografia. Se descarto el valor neutral y se usan la paleta y la tipografia aprobadas por la marca ASCUA. El estilo se tomo de una busqueda refinada (`minimalismo-editorial`).

Verdad durable del producto (audiencia, contexto de uso, voz, restricciones): ver `PRODUCT.md` en esta carpeta. Este archivo decide el look; aquel decide para quien y por que.

## Modo

**persuadir** (explicito) — El visitante decide y actua; el diseno es el producto.

Regla de desempate: Gana la expresion: una idea por seccion, imagen real, CTA visible en el primer viewport. Las reglas de composicion (comp-*) aplican completas.

## Estilo

**Minimalismo editorial** (`minimalismo-editorial`) — Mucho aire, jerarquia tipografica fuerte, una sola accion principal por vista y color reservado para acentos.

- Usar cuando: Landing pages, paginas de expectativa y cualquier vista donde el mensaje importa mas que la cantidad de controles.
- Evitar cuando: Vistas densas con muchas metricas simultaneas.
- Efectos: Sin sombras; separadores por espacio y lineas de 1px en tinta tenue; trama textil muy sutil como textura de fondo; acentos en rojo brasa como trazos, nunca como bloques.
- Riesgos de accesibilidad: El grafito es el tono minimo para texto secundario; el rojo brasa no se usa para texto de cuerpo.

## Color

Paleta de marca ASCUA (aprobada). Solo modo claro.

| Token | Valor | Uso |
|---|---|---|
| `--negro` | #171717 | Texto principal, titulos, isotipo |
| `--blanco-calido` | #fbf5f0 | Fondo |
| `--grafito` | #3a3a3a | Texto secundario (10.5:1 sobre fondo) |
| `--gris-claro` | #e6e8ee | Superficies neutras |
| `--rojo-brasa` | #d9401e | Acento: trazos, foco, estados hover (4.1:1: valido para UI y texto grande, no para cuerpo) |
| `--tinta-tenue` | rgb(23 23 23 / 12%) | Separadores |
| `--tinta-sutil` | rgb(23 23 23 / 6%) | Trama de fondo |

## Tipografia

**Inter** variable, alojada localmente (`assets/fonts/inter-variable.woff2`, licencia OFL) para titulos y cuerpo, con respaldo Arial y sans-serif.

- Titular: peso 750-800, tracking negativo (-0.04em a -0.055em), line-height 0.95-1.05, tamano con clamp.
- Cuerpo: minimo 1rem, line-height 1.5-1.6, medida maxima 34-38ch.
- Marca y etiquetas: mayusculas con tracking amplio, como maximo una etiqueta de este tipo por vista ademas del nombre ASCUA.

## Espaciado

Escala (px/dp): 8, 16, 24, 32, 48, 64. Estandar: apps de producto.

## Motion

- **Entrada de contenido** (`entrada-contenido`): 200-250 ms, ease-out. Aparicion escalonada de bloques: fundido y translateY(12px) a 0. Reduced motion: sin animacion.
- **Micro-feedback de control** (`micro-feedback`): 100-150 ms, easing ease-out. Respuesta al pulsar botones, chips, switches: cambio de color, escala 0.97 o ripple. Reduced motion: Se mantiene: es corto y no desplaza contenido.
- **Preferencia de movimiento reducido** (`reduced-motion`): 0 ms, easing lineal. Regla transversal: cuando el sistema pide movimiento reducido, las transiciones espaciales pasan a fundido y los efectos automaticos se apagan. Reduced motion: Es la propia regla: sustituir desplazamientos por fundidos de 100 ms, quitar parallax y autoplay.

## Accesibilidad

Checklist obligatorio antes de dar una pantalla por terminada:

- [ ] `a11y-contraste-texto` (critica, WCAG 1.4.3 AA): Texto normal 4.5:1 y texto grande (24px o 19px bold) 3:1, medido sobre el fondo efectivo en modo claro y oscuro.
- [ ] `a11y-contraste-ui` (critica, WCAG 1.4.11 AA): Borde de input, icono de accion y anillo de foco miden al menos 3:1 sobre el fondo.
- [ ] `a11y-foco-visible` (critica, WCAG 2.4.7 AA; 2.4.11 AA): Anillo de 2px con 3:1 contra el fondo; nunca outline none sin reemplazo; visible en cada control.
- [ ] `a11y-nombre-accesible` (critica, WCAG 4.1.2 A; 1.1.1 A): Botones de icono con contentDescription o aria-label de accion (Eliminar nota, no Papelera); imagenes decorativas marcadas como tales.
- [ ] `a11y-orden-lectura` (critica, WCAG 1.3.2 A; 2.4.3 A): Tab recorre la pantalla de arriba abajo e izquierda a derecha sin saltos; el DOM o el arbol de composicion coincide con el layout.
- [ ] `a11y-color-no-unico` (critica, WCAG 1.4.1 A): Cada estado de color lleva icono, texto o patron; los graficos tienen etiquetas o texturas.
- [ ] `touch-area-minima` (critica, WCAG 2.5.8 AA; 2.5.5 AAA): 48x48dp en Android (24dp minimo WCAG), 44x44pt en iOS, 24x24px CSS minimo en web; separacion de 8dp entre objetivos vecinos.
- [ ] `motion-reducida` (critica, WCAG 2.3.3 AAA; 2.2.2 A): prefers-reduced-motion en web y escala de animacion 0 en Android respetadas; parallax y autoplay desactivados; el contenido sigue funcionando.
- [ ] `motion-sin-parpadeo` (critica, WCAG 2.3.1 A): Sin destellos rapidos en cargas, alertas o efectos.
- [ ] `form-etiqueta-visible` (critica, WCAG 3.3.2 A; 1.3.1 A): Label conectado al input (labelFor, for/id); la etiqueta no desaparece al escribir.
- [ ] `comp-familias-layout` (alta, WCAG n/a): Una landing de ocho secciones usa al menos cuatro familias distintas; dos secciones consecutivas nunca comparten familia.
- [ ] `comp-eyebrows-limitados` (alta, WCAG n/a): Contar instancias de uppercase + tracking sobre titulos en la pagina; si supera ceil(secciones / 3) se eliminan hasta cumplir. Si la seccion A lleva eyebrow, las dos siguientes no.
- [ ] `comp-tarjetas-iguales` (alta, WCAG n/a): Una seccion de beneficios con tres o mas items iguales se compone como lista, grilla asimetrica o bloques con imagen real; ninguna tarjeta contiene otra tarjeta.

## Anti-patrones

- Gris claro sobre blanco como texto secundario; texto blanco sobre foto sin capa oscura.
- Inputs con borde #E5E7EB sobre blanco; iconos grises claros.
- outline: none global; foco solo por cambio sutil de color.
- Boton con solo icono y sin etiqueta; alt con el nombre del archivo.
- Reordenar con CSS order o Modifier.zIndex sin ajustar el arbol; grillas asimetricas con DOM en otro orden.
- Campo en rojo sin mensaje; puntos verde y rojo sin texto; grafico solo por leyenda de color.
- Iconos de 24dp sin area de toque ampliada; acciones de fila pegadas entre si.
- Ignorar la preferencia; carrusel automatico sin pausa; confeti obligatorio.
- Icono de alerta parpadeando; flash blanco en transiciones.
- Placeholder como unica etiqueta; etiqueta que desaparece al enfocar.
- Que hacemos y Trabajos seleccionados con la misma grilla de tres tarjetas.
- Eyebrow encima de cada titulo de seccion: ritmo de plantilla reconocible al instante.
- Seis tarjetas blancas identicas con icono en cuadradito redondeado, titulo y dos lineas de texto.

## Stack: web

- **tokens** — Los colores, tipografia y espaciado viven como custom properties en :root, con override para modo oscuro, y los componentes solo consumen tokens. Implementacion: :root { --color-primary: #2563EB; --color-bg: #FFFFFF; --color-text: #0F172A; --space-4: 16px; } @media (prefers-color-scheme: dark) { :root { --color-bg: #0F172A; --color-text: #E2E8F0; } } y [data-theme=dark] con los mismos valores para el toggle manual. Los valores salen de MASTER.md.
- **tokens** — Con Tailwind, los tokens se declaran en la configuracion del tema y se usan por nombre semantico (bg-surface, text-primary), nunca con valores arbitrarios repetidos. Implementacion: En tailwind.config: theme.extend.colors = { primary: 'var(--color-primary)', surface: 'var(--color-bg)' }; darkMode: 'class' o 'media'. Clases: bg-surface text-on-surface. Con la version basada en CSS, @theme { --color-primary: ... }.
- **tokens** — La escala tipografica se define con clamp para crecer entre movil y desktop y con line-height por rol. Implementacion: --text-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem); --text-h1: clamp(2rem, 1.5rem + 2vw, 3rem); body { font-size: var(--text-body); line-height: 1.5 } h1 { line-height: 1.15 }. Nunca por debajo de 1rem en cuerpo.
- **tokens** — La seleccion de texto y el caret usan el color del sistema, no el azul del navegador. Implementacion: ::selection { background: color-mix(in srgb, var(--color-primary) 25%, transparent); color: var(--color-text) } input, textarea { caret-color: var(--color-primary) }.
- **tokens** — La scrollbar sigue el tema, sobre todo en modo oscuro, sin ocultarla. Implementacion: html { scrollbar-color: var(--color-text-muted) var(--color-surface); scrollbar-width: thin } y en WebKit ::-webkit-scrollbar-thumb con el mismo token.
