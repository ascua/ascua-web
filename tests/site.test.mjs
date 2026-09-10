import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("la página comunica la expectativa oficial de ASCUA", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

  assert.match(html, /<html lang="es">/);
  assert.match(html, /<meta charset="utf-8">/);
  assert.match(html, /Personalización textil y de objetos/);
  assert.match(html, /Estamos preparando algo especial\./);
  assert.match(html, /Tu idea, hecha realidad\./);
  assert.match(html, /src="assets\/ascua-isotipo\.png"/);
  assert.match(html, /alt="Isotipo de ASCUA"/);
});

test("los estilos aplican la identidad y las preferencias de accesibilidad", async () => {
  const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");

  assert.match(css, /--negro:\s*#171717/i);
  assert.match(css, /--blanco-calido:\s*#fbf5f0/i);
  assert.match(css, /--grafito:\s*#3a3a3a/i);
  assert.match(css, /--rojo-brasa:\s*#d9401e/i);
  assert.match(css, /@font-face[\s\S]*assets\/fonts\/inter-variable\.woff2/i);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/i);
  assert.match(css, /@media\s*\(max-width:/i);
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

test("la composición se adapta a ventanas de poca altura", async () => {
  const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");

  assert.match(css, /@media\s*\(max-height:\s*48rem\)/i);
});
test("el dominio personalizado está declarado", async () => {
  const cname = await readFile(new URL("../CNAME", import.meta.url), "utf8");

  assert.equal(cname.trim(), "ascuaestudio.com");
});
