# Sección especial · Semifinal Mundial 2026 (España–Francia en la plaza)

Sección **temporal** y **tematizada de España** que anuncia la retransmisión del
partido en pantalla gigante 4×3 m en la Plaza del pueblo (El Bonillo), montada por
el Lío / Casino El Bonillo. Rompe la estética de la web a propósito.

Este documento sirve para **replicarla igual en la web del casino** sin volver a
pensarla, y para **quitarla rápido** cuando acabe el evento.

---

## Qué se añadió (web del Lío)

- **Componente nuevo:** [`src/components/EspecialMundial.astro`](src/components/EspecialMundial.astro)
  — autónomo, todo su CSS es scoped, no depende de nada más.
- **Imagen:** `public/img/españitacasinolio.png` (afición viendo la pantalla en la plaza).
- **Inserción en** [`src/pages/index.astro`](src/pages/index.astro): justo bajo el hero
  (después de `<Ticker />`, antes de la sección `CARTELES`). Empuja todo lo demás una
  posición hacia abajo; **no se modificó nada más** de la web.

```astro
import Ticker from "../components/Ticker.astro";
import EspecialMundial from "../components/EspecialMundial.astro"; // TEMPORAL
...
  <Hero />
  <Ticker />
  <EspecialMundial />   <!-- ← aquí -->
  <!-- CARTELES ... -->
```

---

## Editar los datos del evento

Todo está en las constantes `EVENTO` al principio de `EspecialMundial.astro`:

```ts
const EVENTO = {
  competicion: "Semifinal · Mundial 2026",
  local: "España",
  visitante: "Francia",
  fecha: "Martes 14 de julio",   // ← ajústalo cuando confirmes fecha/hora
  hora: "21:00 h",
  lugar: "Plaza Mayor · El Bonillo",
  pantalla: "Pantalla gigante 4×3 m",
  extras: "Escenario · Sonido en directo",
  premio: "Cubo de botellines",
};
```

> ⚠️ Verificar **fecha y hora reales** del partido antes de publicar (ahora mismo
> son un valor por defecto: martes por la noche).

---

## Qué incluye la sección

1. **Cabecera tematizada**: pill "evento especial", competición, marcador grande
   `ESPAÑA 🇪🇸 VS 🇫🇷 FRANCIA` (banderas hechas en CSS) y subtítulo con el montaje.
2. **Imagen en marco bandera de España** con badge "EN DIRECTO" y pie de foto.
3. **Rejilla de info**: Cuándo · Hora · Dónde · Montaje (pantalla + sonido/escenario).
4. **Banner del sorteo**: quien suba su foto viendo el partido a *Liad@s* entra
   automáticamente en el sorteo de un **cubo de botellines** (presencial, en la plaza,
   al acabar). CTA "Subir mi foto" que enlaza a `#subir`.

Fondo: degradados rojo/gualda sobre base oscura, rayos dorados, franjas de bandera
animadas arriba y abajo, punto "live" pulsante.

---

## CÓMO QUITARLA (rápido, el miércoles)

En `src/pages/index.astro` borra **estas 2 líneas** y listo:

1. `import EspecialMundial from "../components/EspecialMundial.astro";`
2. `<EspecialMundial />`

Opcional: borrar `src/components/EspecialMundial.astro` y
`public/img/españitacasinolio.png`. Nada más del sitio depende de ello.

---

## Replicar en la web del Casino El Bonillo

1. Copiar `src/components/EspecialMundial.astro` y la imagen
   `public/img/españitacasinolio.png` al proyecto del casino.
2. Importar e insertar `<EspecialMundial />` justo debajo del hero de esa web.
3. Ajustar el enlace del CTA del sorteo (`href="#subir"`) al ancla que corresponda
   en la web del casino (o cambiarlo por un texto sin enlace si allí no hay subida
   de fotos).
4. El componente usa las variables de fuente `--font-mono` y `--font-display`. Si la
   web del casino no las define, sustitúyelas por sus fuentes equivalentes (o fija
   fuentes concretas dentro del `<style>`). El resto de colores son propios de la
   sección (bandera), no dependen de los tokens de marca.
