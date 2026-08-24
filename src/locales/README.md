# `locales/` — llegiu això abans de tocar cap `.json` d'aquesta carpeta

**Només `ca.json` és viu.** `src/t.js` fa exactament un import:

```js
import ca from './locales/ca.json'
```

No hi ha i18next, ni detector d'idioma, ni cap altre import. `es.json`, `ar.json` i
`ur.json` **no els llegeix ningú**: són codi mort heretat del clon de la web de 3r d'ESO.
Editar-los no canvia res a la pantalla.

## Per què la interfície és només en català — i com s'ajuda l'alumnat nouvingut

És una decisió pedagògica, no un oblit: la web és **en català a posta**, perquè
l'alumnat hi ha de llegir ciència en català. L'ajuda per a qui encara no el domina
**no és canviar l'idioma de la interfície**, sinó el **glossari per hover**:

- `src/translate/glossary.js` — entrades `{ ca, es, ar, ur }`.
- `src/translate/T.jsx` — component `<T>`: ressalta les paraules marcades amb
  `==…==` al text de les dades i, si hi ha idioma d'ajuda actiu, ensenya la
  traducció en un tooltip sense treure el català de la pantalla.

O sigui que **la feina de traducció es fa a `glossary.js`, mai aquí**.

## Si algun dia es vol interfície multilingüe de debò

Caldria tornar a connectar `t.js` a un selector d'idioma i **revisar els tres
fitxers de dalt**, que estan congelats des del clon i tenen claus de 3r d'ESO que
ja no existeixen. No s'esborren perquè servirien de punt de partida, però ara
mateix **no són font de veritat de res**.

_(Nota afegida el 2026-08-24 per la tasca nocturna `bio4t-material-nightly`,
tancant el pendent (4) del 21/08 i (4) del 23/08 d'`ESTAT.md`.)_
