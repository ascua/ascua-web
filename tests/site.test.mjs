import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const leerHtml = () => readFile(new URL("../index.html", import.meta.url), "utf8");
const leerCss = () => readFile(new URL("../styles.css", import.meta.url), "utf8");

test("la página presenta el mensaje principal de ASCUA", async () => {
  const html = await leerHtml();

  assert.match(html, /<html lang="es">/);
  assert.match(html, /<meta charset="utf-8">/);
  assert.match(html, /Ideas que toman forma\./);
  assert.match(
    html,
    /Creamos piezas personalizadas a partir de tus diseños y desarrollamos colecciones propias con identidad ASCUA\./,
  );
  assert.match(html, /Estamos preparando algo especial\./);
});

test("la página comunica los dos frentes de trabajo", async () => {
  const html = await leerHtml();

  assert.match(html, /Tu idea/);
  assert.match(html, /Nuestra visión/);
  assert.match(html, /Diseños de clientes/i);
  assert.match(html, /Diseños propios/i);
  assert.match(html, /class="frentes"/);
  assert.equal(html.match(/class="frente[ "]/g)?.length, 2);
});

test("la página conserva la identidad visible de la marca", async () => {
  const html = await leerHtml();

  assert.match(html, /src="assets\/ascua-isotipo\.png"/);
  assert.match(html, /alt="Isotipo de ASCUA"/);
  assert.match(html, /<link rel="icon" href="assets\/favicon\.png"/);
  assert.match(html, />\s*ASCUA\s*</);
});

test("la estructura del documento es semántica", async () => {
  const html = await leerHtml();

  for (const etiqueta of ["header", "main", "footer"]) {
    assert.match(html, new RegExp(`<${etiqueta}[\\s>]`), `falta <${etiqueta}>`);
    assert.match(html, new RegExp(`</${etiqueta}>`), `falta </${etiqueta}>`);
  }

  assert.equal(html.match(/<h1[\s>]/g)?.length, 1);
  assert.ok((html.match(/<section[\s>]/g)?.length ?? 0) >= 2);
});

test("cada referencia aria-labelledby apunta a un identificador existente", async () => {
  const html = await leerHtml();

  const identificadores = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(([, id]) => id));
  const referencias = [...html.matchAll(/aria-labelledby="([^"]+)"/g)].flatMap(([, valor]) =>
    valor.split(/\s+/),
  );

  assert.ok(referencias.length >= 2, "se esperan regiones etiquetadas");
  for (const referencia of referencias) {
    assert.ok(identificadores.has(referencia), `id inexistente: ${referencia}`);
  }
});

test("las imágenes decorativas y de contenido declaran su propósito", async () => {
  const html = await leerHtml();

  for (const [imagen] of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(imagen, /\salt="/, `imagen sin alt: ${imagen}`);
    assert.match(imagen, /\swidth="\d+"/, `imagen sin width: ${imagen}`);
    assert.match(imagen, /\sheight="\d+"/, `imagen sin height: ${imagen}`);
  }

  for (const [svg] of html.matchAll(/<svg\b[^>]*>/g)) {
    assert.match(svg, /aria-hidden="true"/, `svg decorativo sin aria-hidden: ${svg}`);
  }
});

test("el sitio permanece estático y sin dependencias externas", async () => {
  const html = await leerHtml();
  const css = await leerCss();

  assert.doesNotMatch(html, /<script/i);
  assert.doesNotMatch(html, /<form/i);
  assert.doesNotMatch(html, /(?:src|href)="https?:\/\//i);
  assert.doesNotMatch(css, /@import/i);
  assert.doesNotMatch(css, /url\(\s*["']?https?:\/\//i);
});

test("los estilos aplican la paleta y la tipografía local", async () => {
  const css = await leerCss();

  assert.match(css, /--negro:\s*#171717/i);
  assert.match(css, /--blanco-calido:\s*#fbf5f0/i);
  assert.match(css, /--grafito:\s*#3a3a3a/i);
  assert.match(css, /--rojo-brasa:\s*#d9401e/i);
  assert.match(css, /@font-face[\s\S]*assets\/fonts\/inter-variable\.woff2/i);
});

test("los estilos respetan la accesibilidad y la adaptación responsive", async () => {
  const css = await leerCss();

  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/i);
  assert.match(css, /@media\s*\(max-width:/i);
  assert.match(css, /@media\s*\(max-height:/i);
  assert.match(css, /:focus-visible/i);
});

test("la composición aporta textura artesanal sin recursos externos", async () => {
  const css = await leerCss();

  assert.match(css, /repeating-linear-gradient/i);
  assert.match(css, /\.frentes/);
  assert.match(css, /\.frente\b/);
});

test("los recursos locales necesarios están disponibles", async () => {
  const [logo, favicon, font, license] = await Promise.all([
    readFile(new URL("../assets/ascua-isotipo.png", import.meta.url)),
    readFile(new URL("../assets/favicon.png", import.meta.url)),
    readFile(new URL("../assets/fonts/inter-variable.woff2", import.meta.url)),
    readFile(new URL("../assets/fonts/OFL.txt", import.meta.url), "utf8"),
  ]);

  const pngSignature = "89504e470d0a1a0a";
  assert.equal(logo.subarray(0, 8).toString("hex"), pngSignature);
  assert.equal(favicon.subarray(0, 8).toString("hex"), pngSignature);
  assert.ok(font.byteLength > 10_000);
  assert.match(license, /SIL OPEN FONT LICENSE/i);
});

test("los metadatos describen la propuesta de la marca", async () => {
  const html = await leerHtml();

  assert.match(html, /<title>[^<]*ASCUA[^<]*<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]*ASCUA[^"]*">/);
  assert.match(html, /<meta name="theme-color" content="#fbf5f0">/);
  assert.match(html, /<meta property="og:title" content="[^"]*Ideas que toman forma[^"]*">/);
  assert.match(html, /<meta property="og:image" content="assets\/ascua-isotipo\.png">/);
});

test("el dominio personalizado está declarado", async () => {
  const cname = await readFile(new URL("../CNAME", import.meta.url), "utf8");

  assert.equal(cname.trim(), "ascuaestudio.com");
});
