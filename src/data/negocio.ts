// ============================================================
//  DATOS DEL NEGOCIO QUE USA EL BLOG
// ------------------------------------------------------------
//  El HORARIO no está aquí a propósito: va a cambiar estas
//  semanas y la única fuente es src/components/Hours.astro. El
//  bloque de reserva del blog enlaza a /#horarios en vez de
//  copiarlo, así que al cambiar Hours.astro el blog ya queda bien.
//
//  ⚠️ Lo que SÍ hay que repasar al cambiar el horario: las
//  entradas que lo citan en el propio texto (el cierre de los
//  lunes, sobre todo). Se encuentran con:
//      grep -rln "lunes\|martes a domingo\|8:30" src/content/blog
//  Los almuerzos (de 9:30 a 11:30) son un dato aparte y no
//  dependen del horario del local.
// ============================================================

export const TELEFONO = '621 68 51 32';
export const TELEFONO_INTL = '34621685132';
export const DIRECCION = 'Plaza Mayor, 5 · 02610 El Bonillo (Albacete)';
