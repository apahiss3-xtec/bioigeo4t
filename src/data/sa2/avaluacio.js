// Material d'autoavaluació de SA2 (La cèl·lula): checklist d'estudi (el
// que cal saber per tancar la SA) + test de transferència amb un cas NOU
// —un trasplantament de medul·la òssia i un programa de donació d'òvuls—
// diferent dels casos treballats a les sessions (arrel de ceba a S1, model
// de plastilina a S2, ratolins de laboratori a S3, els tres informes de S4),
// per comprovar si l'alumne sap APLICAR el cicle cel·lular, la mitosi, la
// meiosi i l'índex mitòtic a casos que ningú no li ha triat, i no només
// recordar-los.
//
// Revisió 2026-08-17 (revisió agent-alumne, 2 rondes). Canvis:
// 1) La resposta correcta era la primera opció i la més llarga a les quatre
//    preguntes: el test s'encertava sencer sense haver llegit res. Opcions
//    reordenades i igualades en llargada.
// 2) BLOQUEJANT de fons a t2: preguntava per què un índex mitòtic alt en un
//    cultiu de PELL és sospitós, quan s3.js ensenya justament que a la pell
//    l'índex alt és NORMAL i que el criteri és el teixit, no el número. Ara
//    el context dona el valor habitual (~15 %) i el fet que la divisió no
//    s'atura amb la placa plena, que és el que realment fa sospitar.
// 3) Observació pendent: t2 i t3 s'assemblen molt als informes 2 i 3 del
//    repte de S4 (índex mitòtic anòmal, espermatozoides amb 46 cromosomes),
//    de manera que la novetat del cas és parcial. Es podria canviar per
//    medul·la òssia d'un donant i un òvul amb 24 cromosomes.
//
// Revisió 2026-08-18: resolt el punt 3, que era més greu del que semblava.
// t3 NO era una transferència sinó **literalment l'informe 3 de S4**
// («espermatozoides amb 46 cromosomes en comptes de 23», mateixes xifres i
// mateixa pregunta), i t2 repetia el moviment de l'informe 2 (índex mitòtic
// anòmal en una biòpsia). El cas s'ha substituït sencer pel que ja apuntava
// aquesta nota —**trasplantament de medul·la òssia + donació d'òvuls**— i
// s'ha aprofitat per apujar l'exigència d'inferència de cada pregunta:
//  · t2 manté la lliçó de S3 (el llindar depèn del TEIXIT) però amb un teixit
//    de baseline 12 %, per sobre del llindar genèric del ~10 %: qui apliqui el
//    10 % de memòria, sense mirar quin teixit és, falla. El que decideix no és
//    cap valor solt sinó la SÈRIE (12 → 18 → 25 % en un teixit ja refet).
//  · t3 passa de «46 en comptes de 23» (no reparteix res) a «24 en comptes de
//    23» (un sol cromosoma de més), que obliga a raonar la suma de la
//    fecundació 24+23=47 en comptes de reconèixer un 2n sencer.
//  · t4 deixa de ser una pregunta-resum i planteja una TERCERA situació nova
//    (tres còpies del cromosoma 21 en un fetus) que s'ha de resoldre estirant
//    el raonament de t3, que és el que demana l'OA4.
// Posicions de la correcta al codi font: 2 · 1 · 0 · 3 (repartides), i opcions
// igualades en llargada. A més, des d'avui `TransferTest.jsx` barreja les
// opcions amb una permutació determinista (`permutacioEstable`, utils.js), de
// manera que la posició d'autoria ja no és cap pista a la pantalla.
//
// Dues rondes de revisió agent-alumne aquesta mateixa nit (8 + 4 bloquejants).
// De la 2a ronda: el `theoryPoint` t1b que es va afegir a s3.js («el llindar
// depèn del teixit») invertia la resposta de l'exit tiquet q2 de s4.js
// (pell 4 % vs còlon 28 %), que s'ha hagut de refer amb teixit nerviós vs
// mucosa intestinal; i t2 encara era encertable sense saber-ne, perquè el
// context regalava mitja resposta i l'enunciat donava per fet que el company
// s'equivocava. Corregits tots dos.
export const sa2Avaluacio = {
  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé identificar la interfase i les quatre fases de la mitosi (profase, metafase, anafase, telofase) en una imatge o preparació, i sé que la interfase no forma part de la mitosi." },
    { id: 'c2', oa: 'OA1', text: "Puc explicar per quina raó el cos ha de dividir cèl·lules per mitosi: reparar teixits i créixer." },
    { id: 'c3', oa: 'OA1', text: "Entenc que a la interfase la cèl·lula copia tot el seu ADN abans de repartir-lo, i que per això les dues cèl·lules filles surten idèntiques." },
    { id: 'c4', oa: 'OA2', text: "Sé distingir la mitosi (2 cèl·lules idèntiques, material complet) de la meiosi (4 cèl·lules, la meitat del material)." },
    { id: 'c5', oa: 'OA2', text: "Explico per què els gàmetes han de tenir la meitat dels cromosomes, i què passaria a la fecundació si no fos així." },
    { id: 'c6', oa: 'OA2', text: "Entenc per què la meiosi barreja el material genètic a l'atzar i és la font de la variabilitat entre germans." },
    { id: 'c7', oa: 'OA3', text: "Sé calcular l'índex mitòtic (cèl·lules en divisió ÷ total × 100) a partir d'un recompte." },
    { id: 'c8', oa: 'OA3', text: "Distingeixo al microscopi una cèl·lula en interfase (nucli difús) d'una en divisió (cromosomes visibles)." },
    { id: 'c9', oa: 'OA3', text: "Sé que un índex mitòtic alt no vol dir res per si sol (en teixits que es renoven cada dia, com la pell o l'intestí, és el normal): el que indica pèrdua de control del cicle és que estigui molt per sobre del que toca EN AQUELL teixit o que la divisió no s'aturi quan hauria." },
    { id: 'c10', oa: 'OA4', text: "Sé justificar, davant d'un cas nou, si explica mitosi normal, mitosi descontrolada (càncer) o un error de meiosi, i per què." }
  ],

  // Cas-fil NOU: un trasplantament de medul·la òssia (mitosi que ha de
  // repoblar un teixit sencer, amb un índex mitòtic altíssim que és NORMAL)
  // i un programa de donació d'òvuls que troba un òvul amb un cromosoma de
  // més (error de meiosi de repartiment fi, no de 2n sencer). Context real i
  // diferent dels quatre casos de les sessions, per mesurar transferència:
  // cicle cel·lular, mitosi, índex mitòtic i meiosi.
  test: {
    context:
      "La medul·la òssia és el teixit que fabrica contínuament totes les cèl·lules de la sang. A una noia amb una malaltia de la sang li fan un trasplantament: li destrueixen la medul·la malalta i li injecten una quantitat petita de medul·la sana d'un donant compatible. Al cap d'unes setmanes, aquella mostra petita li ha tornat a omplir tots els ossos i ja li fabrica la sang; a partir d'aquí, l'equip mèdic la va revisant periòdicament. El mateix hospital té un programa de donació d'òvuls i, en revisar-ne una donació, troba un òvul amb 24 cromosomes en comptes dels 23 que hauria de tenir un gàmeta; el descarten.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Una mostra petita de medul·la del donant acaba omplint tots els ossos de la noia i fabricant-li la sang. Quin procés ho explica, i què tenen a veure aquelles cèl·lules noves amb les del donant?",
        options: [
          "Meiosi: cada divisió en dona quatre de diferents, i per això n'hi ha prou amb una mostra petita",
          "Mitosi de les cèl·lules de la mateixa noia, que copien la informació de les del donant i la reprodueixen",
          "Mitosi: cada divisió dona cèl·lules idèntiques, i totes porten l'ADN del donant",
          "Mitosi: cada divisió dona cèl·lules amb la meitat de l'ADN, que és el que les fa créixer tant"
        ],
        correct: 2,
        feedback: {
          correct: "Exacte. La mitosi produeix cèl·lules noves i idèntiques a l'original, i per això una mostra petita pot repoblar un teixit sencer: és la mateixa divisió que vas veure a l'arrel de ceba a S1 i la que el cos fa servir per créixer i reparar. Com que totes surten per còpia de les cèl·lules injectades, les cèl·lules de la SANG que la noia fabrica ara porten l'ADN del donant, mentre que la resta del seu cos continua tenint el seu.",
          wrong: "Torna a S1: de les dues divisions, quina dona cèl·lules IDÈNTIQUES a la de partida i serveix per créixer i reparar? I si totes vénen de la mostra del donant per còpies idèntiques, de qui és l'ADN que porten?"
        }
      },
      {
        id: 't2',
        oa: 'OA3',
        text: "A la primera revisió, l'índex mitòtic de la medul·la nova de la noia dona un 12 %; a les dues següents puja al 18 % i al 25 %. Un company diu: «el llindar que vam aprendre és el 10 %; per tant aquesta medul·la ja era cancerosa des del primer dia». Té raó? Justifica-ho i digues què és el que sí que hauria de vigilar l'equip mèdic.",
        options: [
          "Té raó: el llindar del 10 % val igual per a qualsevol teixit, i els tres valors el superen",
          "No en té: en un teixit que fabrica sang cada dia el 12 % és esperable; el que cal vigilar és que vagi pujant",
          "No en té: el llindar real és el 50 %, i el que cal vigilar és que encara no s'hi hagi arribat",
          "No en té: l'índex mitòtic no serveix per a la medul·la; el que cal vigilar és el nombre de cromosomes"
        ],
        correct: 1,
        feedback: {
          correct: "Correcte, i has evitat la trampa: el ~10 % és una referència general, no una llei per a tots els teixits, i la medul·la fabrica sang cada dia, o sigui que un valor per sobre d'aquesta xifra hi és esperable. El que no és esperable és el que fa la sèrie: un teixit que ja ha acabat de refer-se hauria d'estabilitzar-se, i aquest va pujant revisió rere revisió. Aquesta pujada sostinguda és el senyal de pèrdua de control del cicle.",
          wrong: "Compte amb aplicar el ~10 % com si fos una llei: en un teixit que fabrica sang cada dia s'espera trobar-ne més, i la medul·la ja havia acabat de refer-se. No et quedis, doncs, amb el número del primer dia; compara els tres valors entre ells i pregunta't què hauria d'haver fet la sèrie en un teixit ja refet."
        }
      },
      {
        id: 't3',
        oa: 'OA2',
        text: "L'òvul descartat tenia 24 cromosomes en comptes dels 23 que hauria de tenir un gàmeta: només un de més. Per què és motiu suficient per descartar-lo?",
        options: [
          "Perquè si es fecundés amb un espermatozoide normal de 23, l'embrió tindria 47 cromosomes",
          "Perquè, en fecundar-se amb un espermatozoide de 23, l'embrió es quedaria amb només 24 cromosomes",
          "Perquè un cromosoma de més no afecta l'embrió, però sí que impedeix que l'òvul es conservi congelat",
          "Perquè vol dir que aquell òvul s'ha format per mitosi i no per meiosi, com hauria de ser"
        ],
        correct: 0,
        feedback: {
          correct: "Molt bé, i has fet el càlcul que importa: la fecundació SUMA els dos gàmetes. Un òvul de 24 amb un espermatozoide normal de 23 dona un embrió de 47 cromosomes, en comptes dels 46 que tocarien.",
          wrong: "No et quedis a l'òvul: pensa què passa DESPRÉS. A la fecundació els dos gàmetes se SUMEN (n + n = 2n), no se'n queda només un. Fes el compte amb un espermatozoide normal de 23 i compara el resultat amb els 46 que hauria de tenir l'embrió."
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "Al mateix hospital arriba un tercer cas: una anàlisi detecta que TOTES les cèl·lules d'un embrió tenen tres còpies del cromosoma 21 en comptes de dues. Quin dels processos que has treballat ho explica millor, i per què?",
        options: [
          "Una mitosi descontrolada de l'embrió: en dividir-se massa de pressa ha anat acumulant cromosomes de més",
          "Un error de mitosi del pare, perquè la mitosi és la divisió que forma els espermatozoides",
          "Cap dels tres: el nombre de còpies d'un cromosoma no depèn de cap divisió cel·lular",
          "Un error de meiosi en un dels gàmetes, que va aportar dues còpies del 21 en comptes d'una"
        ],
        correct: 3,
        feedback: {
          correct: "Molt bé: has estirat el raonament de l'òvul de 24. Si un gàmeta porta dues còpies del 21 en comptes d'una, en sumar-s'hi la còpia de l'altre gàmeta l'embrió en té tres. És el mateix tipus d'error de repartiment de la meiosi, mirat cromosoma a cromosoma en comptes de mirar el total.",
          wrong: "Si el problema hi és a TOTES les cèl·lules de l'embrió, ja venia del gàmeta i no d'una divisió posterior. Recorda quina és la divisió que forma els gàmetes i que ha de deixar-hi una sola còpia de cada cromosoma."
        }
      }
    ]
  }
}
