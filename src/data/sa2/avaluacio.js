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
//
// Revisió 2026-09-29 (autoavaluació ≠ prova): l'assaig escrit copiava
// preguntes de la prova final del curs («El llac sota el gel»). S'ha refet
// sencer amb un context NOU —les mules d'una cooperativa del Pallars (egua × ase, 63 cromosomes)— que no és el de la
// prova, ni l'enigma de la SA, ni el del test. Cada pregunta entrena
// els blocs 1–4 de la prova pròpia de SA2 («Ostres de tres jocs», S4) amb les mateixes habilitats i exigència
// (tipus de dada, verb, format) i el model AE tanca l'error típic del bloc.
// Auditoria: web/scripts-avaluacio/audita_autoavaluacio.py.
//
// Revisió 2026-11-05 (format): la pàgina era un bloc de text difícil de
// seguir. Mateix contingut científic i mateixos models AS/AE, però ara:
//  · L'escrita va per apartats (`parts`) amb figura, taula o gràfic i pistes
//    que guien sense donar la resposta. `text` es deriva de les parts (`escrit`)
//    perquè el PDF i l'auditoria continuïn tenint l'enunciat sencer en net.
//    Els salts de línia dels models els parteix `Paragrafs` (AvalFigures.jsx).
//  · El test passa de 4 a 10 preguntes agrupades en 3 casos (`casos`, `q.cas`).
//    t1–t4 no canvien; t5–t10 són noves. Una imatge que desvetllaria la
//    resposta només surt després de contestar (`figuraFeedback`).
//  · La versió C passa de 3 a 7 preguntes, amb «Per llegir» en línies curtes.
//  · Els valors del gràfic de t7 són inventats per a l'exercici, i ho diu.

// Treu les marques ==paraula== (el PDF i l'auditoria volen text net).
const net = (s) => s.replace(/==(.+?)(\|[apogrb])?==/g, '$1')

// Enunciat sencer en una sola cadena, derivat de l'escena i dels apartats.
const escrit = (q) => ({
  ...q,
  text: [
    q.textDades ?? q.escena,
    ...q.parts.map((p) => `${p.id}) ${p.cita ? `${p.cita.qui}: «${p.cita.text}» ` : ''}${p.text}`)
  ]
    .filter(Boolean)
    .map(net)
    .join(' ')
})

export const sa2Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Assaig de la prova amb un cas NOU, que no és el de la prova: una cooperativa ramadera del Pallars cria mules per treballar a la muntanya. Una mula és la cria d'una egua (2n = 64) i un ase (2n = 62). Escriu a mà i sense apunts, i no obris el model fins que hagis acabat.",
    cas: "Una cooperativa ramadera del Pallars cria mules per treballar a la muntanya. Una mula és la cria d'una egua (2n = 64) i un ase (2n = 62). Cada pregunta entrena un bloc de la prova amb la mateixa exigència, però el cas no és el de la prova.",
    passos: [
      'Escriu a mà, en un full i sense apunts.',
      "Si t'encalles, obre una pista: et guia, no et dona la resposta.",
      "Obre el model només quan hagis acabat i compara'l amb el teu."
    ],
    minutes: 28,
    questions: [
      escrit({
        id: 'w1',
        oa: 'OA1',
        source: 'Entrena el bloc 1 de la prova · ordenar fases amb proves i predir una mitosi',
        minutes: 7,
        titol: 'Quatre cèl·lules desordenades',
        escena:
          "Una mula té 63 cromosomes a cada cèl·lula del cos. En una mostra de pell d'una mula jove, la veterinària ha trobat aquestes quatre cèl·lules, desordenades.",
        textDades:
          "Una mula té 63 cromosomes a cada cèl·lula del cos. En una mostra de pell d'una mula jove, la veterinària descriu quatre cèl·lules, desordenades. P: els cromosomes, ben visibles, formen una fila al centre de la cèl·lula. Q: el nucli és difús i no s'hi distingeix cap cromosoma. R: s'estan formant dos nuclis nous i la cèl·lula comença a estrènyer-se pel mig. S: dos grups de cromosomes iguals s'allunyen cap a extrems oposats.",
        figure: {
          src: '/images/sa2-auto-celules-mula.svg',
          alt: "Quatre cèl·lules en esquema. P: els cromosomes formen una fila al centre. Q: nucli difús, sense cromosomes visibles. R: dos nuclis nous i la cèl·lula s'estreny pel mig. S: dos grups de cromosomes s'allunyen cap a extrems oposats."
        },
        parts: [
          {
            id: 'a',
            text: 'Ordena-les començant per la que no es divideix, i digues de cada una en quina fase és i quina prova visible ho mostra.',
            hints: [
              "Busca primer la cèl·lula on no es veu cap cromosoma: és la que no s'està dividint.",
              'Què fan els cromosomes al llarg de la mitosi? Recorda-ho en ordre: on es col·loquen primer i cap on van després?',
              "Per a cada cèl·lula escriu dues coses: el nom de la fase i el que veus a l'esquema que ho demostra."
            ]
          },
          {
            id: 'b',
            text: 'Prediu quants cromosomes tindrà cada cèl·lula filla d\'una mitosi de mula i justifica per què un nombre senar no hi és cap obstacle.',
            hints: [
              'Recorda què passa a la interfase abans de dividir-se: quantes còpies hi ha de cada cromosoma?',
              "A l'anafase, què és exactament el que se separa? Cal que un cromosoma tingui parella perquè això passi?"
            ]
          }
        ],
        model: {
          as: "Q (interfase: nucli difús, no es veuen cromosomes) → P (metafase: cromosomes en fila al centre) → S (anafase: dos grups que se separen) → R (telofase: dos nuclis nous i la cèl·lula es parteix).\nCada filla tindrà 63 cromosomes, perquè la mitosi fa dues cèl·lules iguals a la mare.",
          ae: "Ordre: Q → P → S → R.\nQ és en interfase, que NO és una fase de la mitosi: el nucli és difús perquè l'ADN està desplegat i s'està copiant.\nP és en metafase: cada cromosoma, ja duplicat en dues cromàtides, s'alinea al centre.\nS és en anafase: les dues còpies de cada cromosoma se separen i marxen a pols oposats.\nR és en telofase: es refan dos nuclis i el citoplasma es parteix.\nCada filla tindrà 63 cromosomes. El nombre senar no importa perquè la mitosi no aparella cromosomes: cadascun dels 63 s'ha copiat a la interfase i, a l'anafase, el que se separa són les dues còpies D'UN MATEIX cromosoma. Un cromosoma sense parella es reparteix igual de bé que un que en té. Per això una mula creix i repara els teixits amb tota normalitat.",
        },
        aeWhy: "L'AE dona una prova visible per a cada fase, deixa clar que la interfase no és mitosi i tanca el parany de la pregunta: creure que la mitosi necessita parelles de cromosomes i que un nombre senar la fa fallar. A l'anafase se separen les dues còpies d'un mateix cromosoma.",
        must: [
          "Has ordenat Q → P → S → R, començant per la interfase.",
          "Per a cada cèl·lula has donat una prova visible, no només el nom de la fase.",
          "Has predit 63 cromosomes a cada filla.",
          "Has justificat que a la mitosi se separen les dues còpies de cada cromosoma i que no cal aparellar-los."
        ]
      }),
      escrit({
        id: 'w2',
        oa: 'OA2',
        source: 'Entrena el bloc 2 de la prova · calcular cromosomes d\'un creuament i llegir dades',
        minutes: 7,
        titol: 'Com neix una mula, i per què no cria',
        figure: {
          src: '/images/sa2-auto-creuament-mula.svg',
          alt: "Esquema del creuament: l'egua (2n = 64) i l'ase (2n = 62) fan meiosi. L'òvul i l'espermatozoide porten n = ?, i se sumen en la mula, 2n = ?."
        },
        parts: [
          {
            id: 'a',
            text: "L'egua (2n = 64) i l'ase (2n = 62) fan meiosi per formar els gàmetes. Calcula quants cromosomes porta l'òvul, quants l'espermatozoide i quants la mula que en neix.",
            hints: [
              'La meiosi fa gàmetes amb la meitat dels cromosomes: quina operació has de fer amb 64 i amb 62?',
              "A la fecundació, què passa amb els cromosomes de l'òvul i de l'espermatozoide?"
            ]
          },
          {
            id: 'b',
            text: 'Explica per què una mula gairebé no pot fer gàmetes.',
            hints: [
              'Pensa en la meiosi I: què ha de fer cada cromosoma amb el seu homòleg abans de repartir-se?',
              "Els cromosomes que la mula ha rebut de l'egua i els de l'ase, són parelles de veritat? Compta quants en venen de cada costat."
            ]
          },
          {
            id: 'c',
            text: 'Un estudi compta els espermatozoides en formació en un tros de testicle de la mateixa mida: cavall, 120; ase, 110; mul (el mascle de la mula), 3. Quin percentatge representa el mul respecte al cavall, i què et diu aquesta dada?',
            chart: {
              tipus: 'barres',
              titol: 'Espermatozoides en formació, en un tros de testicle de la mateixa mida',
              serie: 'Espermatozoides',
              data: [
                { name: 'Cavall', value: 120 },
                { name: 'Ase', value: 110 },
                { name: 'Mul', value: 3, destacat: true }
              ]
            },
            hints: [
              'Percentatge = part ÷ total × 100. Quina és la part i quin és el valor de referència?',
              "Un cop tinguis el número, pregunta't: quin procés fabrica espermatozoides, i com li funciona al mul?"
            ]
          }
        ],
        model: {
          as: "a) Òvul: 32. Espermatozoide: 31. Mula: 32 + 31 = 63.\nb) La mula gairebé no fa gàmetes perquè a la meiosi els cromosomes del cavall i els de l'ase no es poden aparellar bé i no es reparteixen.\nc) El mul en fa 3 per cada 120 del cavall: un 2,5 %. La meiosi gairebé no li funciona.",
          ae: "a) La meiosi redueix a la meitat: l'òvul de l'egua porta 64 / 2 = 32 cromosomes i l'espermatozoide de l'ase, 62 / 2 = 31. La fecundació els suma: 32 + 31 = 63, i com que després el zigot es divideix per mitosi, totes les cèl·lules de la mula en tenen 63.\nb) El problema apareix quan la mula ha de fer meiosi. A la meiosi I, cada cromosoma s'ha d'aparellar amb el seu homòleg per enviar-ne un a cada pol; però els 32 de l'egua i els 31 de l'ase no són parelles de veritat (no coincideixen ni en nombre ni en forma) i un queda sol. Molts no es poden aparellar, el repartiment falla i gairebé tots els gàmetes surten amb un joc de cromosomes erroni i no són viables. No és que 63 «no es pugui dividir per dos»: la meiosi no reparteix un número, reparteix parelles.\nc) La dada ho confirma: 3 / 120 × 100 = 2,5 %. El mul té testicles però hi fa uns quaranta cops menys espermatozoides que el cavall, perquè la meiosi s'encalla; la mitosi, en canvi, li funciona perfectament.",
        },
        aeWhy: "L'AE fa el càlcul pas a pas (la meiosi divideix per dos, la fecundació suma), situa el problema en l'aparellament d'homòlegs de la meiosi I i descarta l'explicació fàcil i falsa («63 és senar»). A més connecta la dada numèrica amb la meiosi que falla, que és el que la rúbrica del bloc demana per arribar a AE.",
        must: [
          "Has calculat 32, 31 i 63, i has dit que la meiosi divideix per dos i la fecundació suma.",
          "Has situat el problema en l'aparellament dels homòlegs a la meiosi I.",
          "No has dit que a la mula li falla la mitosi.",
          "Has calculat el 2,5 % i l'has relacionat amb la meiosi que falla."
        ]
      }),
      escrit({
        id: 'w3',
        oa: 'OA3',
        source: 'Entrena el bloc 3 de la prova · índex mitòtic, control i fiabilitat',
        minutes: 8,
        titol: 'Nòduls a la pell',
        escena:
          "Algunes mules tenen nòduls a la pell i la veterinària, la Mireia, sospita un tumor. A la pell sana d'un animal adult, poques cèl·lules es divideixen. Ha comptat cèl·lules al microscopi.",
        textDades:
          "Algunes mules tenen nòduls a la pell i la veterinària, la Mireia, sospita un tumor. A la pell sana d'un animal adult, poques cèl·lules es divideixen. Ha comptat cèl·lules al microscopi. Pell sana d'una mula sense nòduls (control): 500 cèl·lules, 5 en divisió. Nòdul de la mula Tramuntana: 200 cèl·lules, 4 en divisió. Nòdul de la mula Garbí: 320 cèl·lules, 48 en divisió.",
        dades: {
          headers: ['Mostra', 'Cèl·lules comptades', 'En divisió', 'Índex mitòtic'],
          rows: [
            ['Pell sana d\'una mula sense nòduls (control)', 500, 5, '?'],
            ['Nòdul de la mula Tramuntana', 200, 4, '?'],
            ['Nòdul de la mula Garbí', 320, 48, '?']
          ]
        },
        parts: [
          {
            id: 'a',
            text: "Calcula l'índex mitòtic de cada mostra.",
            hints: [
              'Índex mitòtic = cèl·lules en divisió ÷ cèl·lules comptades × 100.',
              "Fes-ho tres cops i escriu sempre l'operació, no només el resultat."
            ]
          },
          {
            id: 'b',
            text: 'En quin dels dos nòduls les cèl·lules sembla que es divideixen de manera descontrolada? Compara-ho amb la mostra de control.',
            hints: [
              'No miris només quin índex és més alt: mira quantes vegades supera el control.',
              'El control és pell sana; els nòduls també són pell. Per què és important que siguin del mateix teixit?'
            ]
          },
          {
            id: 'c',
            cita: { qui: 'En Biel, el mosso', text: 'La Tramuntana també en té, de tumor: dobla el control' },
            text: 'Comenta-ho fixant-te en el nombre real de cèl·lules que s\'estan dividint, i explica què faries abans de donar-li la raó.',
            hints: [
              'Mira la columna «En divisió» del control i de la Tramuntana: quina diferència hi ha, en cèl·lules?',
              'Si per casualitat haguessis comptat una o dues cèl·lules en divisió més o menys, quant canviaria el percentatge? Què necessitaries per estar-ne segur?'
            ]
          },
          {
            id: 'd',
            text: "A la mucosa de l'intestí d'un poltre sa, la Mireia troba un 22 %. És motiu d'alarma?",
            hints: [
              "L'intestí és el mateix teixit que la pell? Amb quina freqüència es renova?",
              'Amb què hauries de comparar aquest 22 % perquè la comparació fos justa?'
            ]
          }
        ],
        model: {
          as: "a) Control: 5 / 500 = 1 %. Tramuntana: 4 / 200 = 2 %. Garbí: 48 / 320 = 15 %.\nb) El Garbí pot tenir una divisió sense control, perquè té quinze vegades el control.\nc) La Tramuntana només té 4 cèl·lules en divisió, és massa poc per dir-ho.\nd) L'intestí es renova constantment, així que el 22 % hi és normal.",
          ae: "a) Índexs: control 5 / 500 × 100 = 1 %; Tramuntana 4 / 200 × 100 = 2 %; Garbí 48 / 320 × 100 = 15 %.\nb) El nòdul del Garbí és el sospitós: en un teixit on normalment gairebé no hi ha divisió, té un índex quinze vegades el del control de la mateixa pell. No n'hi ha prou de dir si un índex és «alt» o «baix», perquè el valor normal canvia d'un teixit a un altre; només la comparació amb un control del MATEIX teixit diu si és anòmal.\nc) Sobre la Tramuntana, en Biel confon una proporció amb una prova: 2 % és el doble d'1 %, però són 4 cèl·lules contra 5, i amb recomptes tan petits una o dues cèl·lules de més o de menys, per pura casualitat, canvien molt el percentatge. No ho afirmaria ni ho descartaria: comptaria moltes més cèl·lules, de diversos camps i de més d'un nòdul, abans de decidir.\nd) El 22 % de l'intestí no és alarmant: la mucosa intestinal es renova cada pocs dies i un índex alt hi és el que s'espera; el mateix valor a la pell adulta sí que ho seria.",
        },
        aeWhy: "L'AE no s'atura en el càlcul: compara cada mostra amb el control del mateix teixit, valora la fiabilitat d'un recompte petit i diu què faria, i reconeix que en un teixit que es renova molt una divisió alta és normal. Evita llegir «el doble» com si fos una prova i jutjar un índex sense referència.",
        must: [
          "Has calculat 1 %, 2 % i 15 % i has escrit l'operació.",
          "Has justificat el Garbí comparant-lo amb el control, no amb un llindar après de memòria.",
          "Has dit que 4 cèl·lules en divisió són massa poques per decidir i que caldria comptar-ne més.",
          "Has explicat per què el 22 % de l'intestí és normal."
        ]
      }),
      escrit({
        id: 'w4',
        oa: 'OA4',
        source: 'Entrena el bloc 4 de la prova · argumentar una recomanació i revisar-la amb dades noves',
        minutes: 6,
        titol: 'La recomanació per a la cooperativa',
        figure: {
          src: '/images/sa2-auto-pla-i-frase.svg',
          alt: "Dos esquemes. El pla d'en Biel: 20 mules, anys després, quants mulets? La frase del tractant: 12.000 mules × 1/2.000 que fan òvuls = ?. «Mai, ni una»: és cert?"
        },
        parts: [
          {
            id: 'a',
            cita: { qui: 'En Biel', text: "Comprem vint mules i, d'aquí a uns anys, ja tindrem mulets de les nostres" },
            text: "Per què el pla no pot funcionar i d'on hauran de sortir cada any les mules noves?",
            hints: [
              'Quina divisió necessita una mula per fer gàmetes? I com li funciona?',
              'Si les mules no poden criar entre elles, quins dos animals cal creuar per tenir-ne una de nova?'
            ]
          },
          {
            id: 'b',
            cita: { qui: 'Un tractant', text: 'Una mula no cria mai, ni una' },
            text: 'Suposa que en una comarca hi ha 12.000 mules femelles i que una de cada 2.000 pot arribar a fer algun òvul viable. Calcula quantes en podrien fer i revisa la frase del tractant.',
            hints: [
              'Divideix el total de mules entre 2.000.',
              'Compara el teu resultat amb la paraula «mai». Quin resultat hauria de donar perquè «mai» fos correcte?'
            ]
          },
          {
            id: 'c',
            text: 'Escriu la recomanació per a la cooperativa (5–6 línies) amb mitosi, meiosi, nombre de cromosomes i almenys una dada. Afegeix-hi un risc: imagina que tots els animals surten d\'un sol ase i d\'unes poques egües, i que apareix una malaltia nova.',
            hints: [
              'Fes servir aquest ordre: què recomanes → per què (mitosi, meiosi, cromosomes) → una dada → el risc.',
              "Per al risc, pensa: si tots els animals s'assemblen molt genèticament i apareix una malaltia nova, què els pot passar a tots?"
            ]
          }
        ],
        model: {
          as: "a) No pot funcionar perquè les mules gairebé no fan gàmetes: cada mula s'ha d'obtenir creuant una egua amb un ase.\nb) 12.000 / 2.000 = 6 mules en podrien fer, així que «mai» no és correcte: és «gairebé mai».\nc) Recomanació: creuar egües amb ases cada any i fer servir més d'un ase.",
          ae: "a) Les mules creixen i es reparen per mitosi sense cap problema, però la meiosi els falla (63 cromosomes que no fan parelles) i, sense gàmetes viables, no poden criar entre elles. Cada mula nova ha de sortir, cada vegada, d'un creuament egua × ase.\nb) 12.000 / 2.000 = 6 mules: poques, però no zero. La frase bona és «una mula gairebé mai no cria»; «mai» és una afirmació absoluta que una sola excepció ja fa caure.\nc) Les mules són bons animals de treball perquè la mitosi els funciona com a qualsevol animal, però amb 63 cromosomes la meiosi no pot aparellar els homòlegs i gairebé no fan gàmetes. Per tant, la cooperativa ha de mantenir egües (2n = 64) i ases (2n = 62) reproductors i fer el creuament cada any, sense comptar que les mules criïn (només unes 6 de cada 12.000 podrien fer-ho). Risc: si totes surten del mateix ase i de poques egües, s'assemblaran molt genèticament i, davant d'una malaltia nova, si una és sensible ho poden ser gairebé totes. Convé canviar de reproductors per mantenir la variabilitat.",
        },
        aeWhy: "L'AE argumenta amb la mitosi i la meiosi (no només «perquè són estèrils»), converteix la proporció en un nombre concret per revisar una afirmació absoluta i valora el risc de fer-les totes dels mateixos reproductors. L'error típic és repetir «són estèrils» sense explicar-ho i no revisar la conclusió quan arriba la dada nova.",
        must: [
          "Has explicat que cada mula surt d'un creuament egua × ase.",
          "Has calculat 6 i has canviat «mai» per «gairebé mai».",
          "La recomanació fa servir mitosi, meiosi i el nombre de cromosomes, amb una dada.",
          "Has valorat el risc de fer-les totes dels mateixos reproductors."
        ]
      })
    ]
  },

  // Versió fàcil de l'autoavaluació (nivell C · pilot 29/09/2026). Criteris:
  // vault «Nivell C a 4t - Criteris i decisions» + «Nivell C - Criteris fitxes»
  // de 3r — frases curtes, imatge C pròpia + «Per llegir» abans de cada
  // pregunta, opcions TOTES plausibles, cap escriptura llarga. Treballa els
  // objectius C de les sessions (sN.js, levelObjectives.C) i fa servir les
  // imatges *-C.svg de la SA2. Esquema: SAAvaluacioPage + AutoavaluacioC.jsx.
  c: {
    checklist: [
      { id: 'c1', oa: 'OA1', icon: '🔬', text: "Sé si una cèl·lula es divideix mirant l'ADN." },
      { id: 'c2', oa: 'OA2', icon: '✂️', text: "Sé la diferència: la mitosi fa 2 cèl·lules iguals; la meiosi, 4 amb la meitat (un cromosoma de cada parella)." },
      { id: 'c3', oa: 'OA3', icon: '🧮', text: "Sé calcular l'índex mitòtic amb la calculadora." },
      { id: 'c4', oa: 'OA3', icon: '⚠️', text: "Sé que el càncer és una divisió que no s'atura." }
    ],
    preguntes: [
      {
        id: 'p1', oa: 'OA1',
        img: '/images/sa2-s1-repos-divisio-C.svg',
        alt: "Dues cèl·lules: una en repòs, amb l'ADN com un núvol difús, i una que es divideix, amb fils foscos.",
        llegir: ["Mira només l'ADN, la part fosca.", 'Núvol difús = en repòs.', 'Fils foscos = es divideix.'],
        text: "Al microscopi veus una cèl·lula amb fils foscos alineats al mig. Què fa?",
        options: ["S'està dividint", "Està en repòs"],
        correct: 0,
        hints: ["Mira les dues cèl·lules de l'esquema. Quina s'assembla a la de la pregunta: la del núvol o la dels fils?"]
      },
      {
        id: 'p2', oa: 'OA1',
        img: '/images/sa2-s1-fases-C.svg',
        alt: 'Les 4 fases en ordre. Profase: apareixen els fils foscos. Metafase: s\'alineen tots al mig. Anafase: es separen cap als dos costats. Telofase: ja hi ha dues cèl·lules.',
        llegir: ['Una cèl·lula que es divideix passa per 4 fases.', 'Mira què fan els fils foscos a cada fase.'],
        text: 'Els fils foscos es separen cap als dos costats. Quina fase és?',
        options: ['Metafase', 'Anafase'],
        correct: 1,
        hints: ["Mira l'esquema. Busca la fase on els fils s'allunyen."]
      },
      {
        id: 'p3', oa: 'OA2',
        img: '/images/sa2-s2-mitosi-meiosi-C.svg',
        alt: "La mateixa cèl·lula fa mitosi (2 cèl·lules iguals) o meiosi (4 cèl·lules amb la meitat).",
        llegir: ['Mitosi: 2 cèl·lules iguals, per créixer i reparar.', 'Meiosi: 4 cèl·lules amb la meitat (un de cada parella), per fer òvuls i espermatozoides.'],
        text: "L'ovari fa un òvul. Quina divisió fa servir?",
        options: ["Mitosi", "Meiosi"],
        correct: 1,
        hints: ['Un òvul és una cèl·lula per fer un fill. Ha de portar tots els cromosomes o la meitat?']
      },
      {
        id: 'p4', oa: 'OA2',
        img: '/images/sa2-s4-tres-processos-C.svg',
        alt: 'Tres processos. Mitosi: 2 cèl·lules iguals, per créixer i reparar. Meiosi: 4 amb la meitat, per fer òvuls i espermatozoides. Càncer: mitosi que no para, es detecta comptant.',
        llegir: ['Mitosi: per créixer i reparar.', 'Meiosi: per fer òvuls i espermatozoides.'],
        text: "T'has fet una ferida al genoll. La pell es repara sola. Quina divisió ho fa?",
        options: ['Mitosi', 'Meiosi'],
        correct: 0,
        hints: ['Què ha de fer la pell: reparar-se o fer òvuls i espermatozoides?']
      },
      {
        id: 'p5', oa: 'OA2',
        img: '/images/sa2-auto-fecundacio-C.svg',
        alt: 'Òvul amb 23 cromosomes + espermatozoide amb 23 cromosomes = zigot amb ? cromosomes.',
        llegir: ['Un òvul té 23 cromosomes.', 'Un espermatozoide té 23 cromosomes.', 'A la fecundació, els dos s\'ajunten: se sumen.'],
        text: 'Quants cromosomes té el zigot?',
        options: ['23 cromosomes', '46 cromosomes', '92 cromosomes'],
        correct: 1,
        hints: ['Mira el signe + de la imatge: què has de fer amb els dos números?', 'Pots fer-ho amb la calculadora.']
      },
      {
        id: 'p6', oa: 'OA3',
        img: '/images/sa2-s3-index-C.svg',
        alt: "Tres passos per calcular l'índex mitòtic: comptar totes, comptar les que es divideixen, dividir i multiplicar per 100.",
        llegir: ['Índex mitòtic = cèl·lules que es divideixen ÷ totes × 100.'],
        text: "Has comptat 200 cèl·lules. 30 es divideixen. Quin és l'índex mitòtic?",
        options: ['30 %', '6,7 %', '15 %'],
        correct: 2,
        hints: ['Primer 30 ÷ 200. Després × 100. Fes-ho amb la calculadora.']
      },
      {
        id: 'p7', oa: 'OA3',
        chart: {
          tipus: 'barres',
          titol: 'Índex mitòtic del tumor',
          serie: 'Índex mitòtic',
          unitat: '%',
          yMax: 40,
          data: [
            { name: 'Abans', value: 30 },
            { name: 'Després', value: 8 }
          ]
        },
        llegir: ["L'índex mitòtic diu quantes cèl·lules de cada 100 es divideixen.", 'Si baixa, el tumor es divideix menys.'],
        text: "Abans del medicament, l'índex del tumor era 30 %. Després, 8 %. El medicament…",
        options: ["Funciona: el tumor es divideix menys", "No funciona: encara hi ha cèl·lules que es divideixen"],
        correct: 0,
        hints: ["Mira les dues barres. L'índex puja o baixa? Què vol dir això?"]
      }
    ],
    completar: {
      id: 'k1', oa: 'OA3',
      llegir: ['Una cèl·lula normal es divideix i després para.', 'Una cèl·lula de càncer no para mai.'],
      frase: "El càncer és una {0} que no s'{1}.",
      respostes: ['mitosi', 'atura'],
      banc: ['meiosi', 'atura', 'mitosi', 'accelera'],
      hints: [
        'Una paraula és la divisió que serveix per créixer i reparar.',
        'Llegeix el «Per llegir»: què és el que no fa mai la cèl·lula de càncer?'
      ]
    }
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé identificar la interfase i les quatre fases de la mitosi (profase, metafase, anafase, telofase) en una imatge o preparació, i sé que la interfase no forma part de la mitosi." },
    { id: 'c2', oa: 'OA1', text: "Puc explicar per quina raó el cos ha de dividir cèl·lules per mitosi: reparar teixits i créixer." },
    { id: 'c3', oa: 'OA1', text: "Entenc que a la interfase la cèl·lula copia tot el seu ADN abans de repartir-lo, i que per això les dues cèl·lules filles surten idèntiques." },
    { id: 'c4', oa: 'OA2', text: "Sé distingir la mitosi (2 cèl·lules idèntiques, material complet) de la meiosi (4 cèl·lules amb la meitat: un cromosoma de cada parella)." },
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
      "Un hospital, tres casos. Llegeix cada cas, mira les figures i, si t'encalles, obre una pista abans de triar.",
    casos: [
      {
        id: 'A',
        titol: 'La medul·la que torna a créixer',
        text: "La medul·la òssia fabrica contínuament totes les cèl·lules de la sang. A una noia amb una malaltia de la sang li destrueixen la medul·la malalta i li injecten una mostra petita de medul·la sana d'un donant compatible. Unes setmanes després, aquella mostra li ha tornat a omplir tots els ossos. A partir d'aquí, l'equip mèdic la revisa periòdicament.",
        img: '/images/sa2-auto-trasplantament.svg',
        alt: 'Una mostra petita del donant, al cap de setmanes, esdevé medul·la nova a tots els ossos de la noia.'
      },
      {
        id: 'B',
        titol: "L'òvul descartat",
        text: "El mateix hospital té un programa de donació d'òvuls. En revisar una donació, troba un òvul amb 24 cromosomes en comptes dels 23 que hauria de tenir un gàmeta. El descarten."
      },
      {
        id: 'C',
        titol: 'Dos casos més a la consulta',
        text: 'Arriben dos casos nous al mateix hospital. No tenen res a veure entre ells: en cada un has de decidir quin procés ho explica.'
      }
    ],
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        cas: 'A',
        text: "Una mostra petita de medul·la del donant acaba omplint tots els ossos de la noia i fabricant-li la sang. Quin procés ho explica, i què tenen a veure aquelles cèl·lules noves amb les del donant?",
        options: [
          "Meiosi: cada divisió en dona quatre de diferents, i per això n'hi ha prou amb una mostra petita",
          "Mitosi de les cèl·lules de la mateixa noia, que copien la informació de les del donant i la reprodueixen",
          "Mitosi: cada divisió dona cèl·lules idèntiques, i totes porten l'ADN del donant",
          "Mitosi: cada divisió dona cèl·lules amb la meitat de l'ADN, que és el que les fa créixer tant"
        ],
        correct: 2,
        hints: [
          'Quina de les dues divisions (mitosi o meiosi) serveix per créixer i reparar teixits?',
          'Si totes les cèl·lules noves surten per còpia de les injectades, de qui és l\'ADN que porten?'
        ],
        feedback: {
          correct: "Exacte. La mitosi produeix cèl·lules noves i idèntiques a l'original, i per això una mostra petita pot repoblar un teixit sencer: és la mateixa divisió que vas veure a l'arrel de ceba a S1 i la que el cos fa servir per créixer i reparar. Com que totes surten per còpia de les cèl·lules injectades, les cèl·lules de la SANG que la noia fabrica ara porten l'ADN del donant, mentre que la resta del seu cos continua tenint el seu.",
          wrong: "Torna a S1: de les dues divisions, quina dona cèl·lules IDÈNTIQUES a la de partida i serveix per créixer i reparar? I si totes vénen de la mostra del donant per còpies idèntiques, de qui és l'ADN que porten?"
        }
      },
      {
        id: 't5',
        oa: 'OA1',
        cas: 'A',
        text: "Al microscopi, l'equip mira una cèl·lula de la medul·la nova i veu el que mostra l'esquema. En quina fase és i quina prova ho mostra?",
        figure: {
          src: '/images/sa2-auto-fase-test.svg',
          alt: 'Esquema d\'una cèl·lula amb els cromosomes duplicats alineats en una fila al centre.',
          maxW: 340
        },
        options: [
          'Anafase: les dues còpies de cada cromosoma formen grups que van cap als pols',
          "Metafase: els cromosomes duplicats s'alineen just al mig de la cèl·lula",
          'Profase: els cromosomes es condensen i el nucli comença a desfer-se',
          "Interfase: l'ADN es copia i els cromosomes es queden quiets al centre"
        ],
        correct: 1,
        hints: [
          'Mira on són els cromosomes: repartits pel nucli, alineats o separant-se?',
          'Cada fase es reconeix per una prova visible. Quina prova es veu realment en aquest esquema?'
        ],
        feedback: {
          correct: "Exacte. La fila al centre és la prova visible de la metafase: cada cromosoma, ja duplicat, s'alinea abans de separar les dues còpies.",
          wrong: "Mira l'esquema un altre cop i fixa't en un sol detall: on són els cromosomes respecte al centre de la cèl·lula? Després recorda a quina fase corresponen."
        }
      },
      {
        id: 't6',
        oa: 'OA3',
        cas: 'A',
        text: "Per tenir una referència, el laboratori analitza medul·la d'un donant sa: compta 500 cèl·lules i 70 estan en divisió. Quin és l'índex mitòtic d'aquesta mostra?",
        options: ['7,1 %', '70 %', '0,14 %', '14 %'],
        correct: 3,
        hints: [
          "L'índex és un percentatge: les que es divideixen ÷ les que has comptat, × 100.",
          'Vigila l\'ordre de la divisió: el número petit (les que es divideixen) va a dalt. No t\'oblidis de multiplicar per 100.'
        ],
        feedback: {
          correct: '70 ÷ 500 × 100 = 14 %. Aquest valor et servirà de referència per a les preguntes següents.',
          wrong: 'Comprova l\'ordre: les que es divideixen ÷ les comptades, i després × 100.'
        }
      },
      {
        id: 't2',
        oa: 'OA3',
        cas: 'A',
        text: "A la primera revisió, l'índex mitòtic de la medul·la nova de la noia dona un 12 %; a les dues següents puja al 18 % i al 25 %. Un company diu: «el llindar que vam aprendre és el 10 %; per tant aquesta medul·la ja era cancerosa des del primer dia». Té raó? Justifica-ho i digues què és el que sí que hauria de vigilar l'equip mèdic.",
        chart: {
          tipus: 'linia',
          titol: 'Índex mitòtic de la medul·la nova',
          serie: 'Índex mitòtic',
          unitat: '%',
          yMax: 30,
          referencia: { value: 10, label: 'referència general: 10 %' },
          data: [
            { name: 'Revisió 1', value: 12 },
            { name: 'Revisió 2', value: 18 },
            { name: 'Revisió 3', value: 25 }
          ]
        },
        options: [
          "Té raó: el llindar del 10 % val igual per a qualsevol teixit, i els tres valors el superen",
          "No en té: en un teixit que fabrica sang cada dia el 12 % és esperable; el que cal vigilar és que vagi pujant",
          "No en té: el llindar real és el 50 %, i el que cal vigilar és que encara no s'hi hagi arribat",
          "No en té: l'índex mitòtic no serveix per a la medul·la; el que cal vigilar és el nombre de cromosomes"
        ],
        correct: 1,
        hints: [
          'Compara els tres valors entre ells, no només amb el 10 %.',
          'La medul·la fabrica sang cada dia: què esperes trobar-hi? I què hauria de fer l\'índex un cop el teixit ja està refet?'
        ],
        feedback: {
          correct: "Correcte, i has evitat la trampa: el ~10 % és una referència general, no una llei per a tots els teixits, i la medul·la fabrica sang cada dia, o sigui que un valor per sobre d'aquesta xifra hi és esperable. El que no és esperable és el que fa la sèrie: un teixit que ja ha acabat de refer-se hauria d'estabilitzar-se, i aquest va pujant revisió rere revisió. Aquesta pujada sostinguda és el senyal de pèrdua de control del cicle.",
          wrong: "Compte amb aplicar el ~10 % com si fos una llei: en un teixit que fabrica sang cada dia s'espera trobar-ne més, i la medul·la ja havia acabat de refer-se. No et quedis, doncs, amb el número del primer dia; compara els tres valors entre ells i pregunta't què hauria d'haver fet la sèrie en un teixit ja refet."
        }
      },
      {
        id: 't7',
        oa: 'OA3',
        cas: 'A',
        text: 'Al mateix laboratori arriba una mostra de fetge amb un índex del 12 %. Mira el gràfic: és un valor preocupant?',
        chart: {
          tipus: 'barres',
          horitzontal: true,
          titol: 'Índex mitòtic habitual per teixit',
          serie: 'Índex mitòtic',
          unitat: '%',
          nota: "Valors inventats per a l'exercici.",
          data: [
            { name: 'Mucosa intestinal', value: 20 },
            { name: 'Medul·la sana', value: 14 },
            { name: 'Mostra de fetge', value: 12, destacat: true },
            { name: 'Pell', value: 6 },
            { name: 'Fetge sa', value: 1 }
          ]
        },
        options: [
          'És sospitós: queda per sota de la medul·la, però és dotze cops el del fetge sa',
          'No ho és: queda per sota de la medul·la sana, i per tant és un índex normal',
          'No ho és: queda molt lluny de la mucosa intestinal, que arriba fins al 20 %',
          'És sospitós: supera el 10 %, i aquest llindar val igual per a tots els teixits'
        ],
        correct: 0,
        hints: [
          "Amb quin dels valors del gràfic t'has de comparar: amb qualsevol teixit o amb un de concret?",
          'Quantes vegades és més alt el 12 % que el valor que has triat per comparar?'
        ],
        feedback: {
          correct: 'Exacte. El que compta és el valor habitual del MATEIX teixit: per a un fetge, un 12 % és dotze cops el normal, encara que en una medul·la sana no cridaria l\'atenció.',
          wrong: 'Compara el que és comparable: un fetge amb un fetge sa, no amb altres teixits. Un número no és alt o baix per si sol, ni hi ha un llindar únic per a tot el cos.'
        }
      },
      {
        id: 't3',
        oa: 'OA2',
        cas: 'B',
        text: "L'òvul descartat tenia 24 cromosomes en comptes dels 23 que hauria de tenir un gàmeta: només un de més. Per què és motiu suficient per descartar-lo?",
        figure: {
          src: '/images/sa2-auto-fecundacio-24.svg',
          alt: 'Òvul amb 24 cromosomes + espermatozoide amb 23 cromosomes = embrió amb ? cromosomes.'
        },
        options: [
          "Perquè si es fecundés amb un espermatozoide normal de 23, l'embrió tindria 47 cromosomes",
          "Perquè, en fecundar-se amb un espermatozoide de 23, l'embrió es quedaria amb només 24 cromosomes",
          "Perquè un cromosoma de més no afecta l'embrió, però sí que impedeix que l'òvul es conservi congelat",
          "Perquè vol dir que aquell òvul s'ha format per mitosi i no per meiosi, com hauria de ser"
        ],
        correct: 0,
        hints: [
          "Quan els dos gàmetes s'ajunten, què passa amb el nombre de cromosomes?",
          'Fes el compte amb un espermatozoide normal i compara el resultat amb el que hauria de tenir un embrió humà.'
        ],
        feedback: {
          correct: "Molt bé, i has fet el càlcul que importa: la fecundació SUMA els dos gàmetes. Un òvul de 24 amb un espermatozoide normal de 23 dona un embrió de 47 cromosomes, en comptes dels 46 que tocarien.",
          wrong: "No et quedis a l'òvul: pensa què passa DESPRÉS. A la fecundació els dos gàmetes se SUMEN (n + n = 2n), no se'n queda només un. Fes el compte amb un espermatozoide normal de 23 i compara el resultat amb els 46 que hauria de tenir l'embrió."
        }
      },
      {
        id: 't8',
        oa: 'OA2',
        cas: 'B',
        text: "Per formar aquell òvul, una cèl·lula de l'ovari fa la divisió de l'esquema (aquí amb només 4 cromosomes). Quina divisió és, i per què les quatre cèl·lules en tenen la meitat?",
        figure: {
          src: '/images/sa2-auto-quina-divisio.svg',
          alt: "Una cèl·lula de l'ovari amb 4 cromosomes es divideix per un procés desconegut en quatre cèl·lules de 2 cromosomes cadascuna."
        },
        options: [
          'Mitosi: les quatre surten iguals a la mare, i la meitat dels cromosomes es perd',
          'Meiosi: els cromosomes es perden a l\'atzar fins que n\'hi queda just la meitat',
          'Meiosi: si portessin tots els cromosomes, a la fecundació se\'n doblaria el nombre',
          'Mitosi: l\'ovari necessita moltes cèl·lules i la divisió les fa més petites cada cop'
        ],
        correct: 2,
        hints: [
          'Compta quantes cèl·lules surten i quants cromosomes té cadascuna, comparada amb la de partida.',
          'Pensa en la fecundació: què passaria amb el nombre de cromosomes si l\'òvul els portés tots?'
        ],
        feedback: {
          correct: 'Exacte. Quatre cèl·lules amb la meitat: és meiosi. Com que la fecundació suma, si els gàmetes portessin tots els cromosomes el nombre es doblaria a cada generació.',
          wrong: "Mira l'esquema: quantes cèl·lules surten i quants cromosomes porten? Després pensa què ha de passar a la fecundació perquè el nombre es mantingui d'una generació a l'altra. La meiosi no perd cromosomes a l'atzar: reparteix un de cada parella."
        }
      },
      {
        id: 't9',
        oa: 'OA2',
        cas: 'B',
        text: 'Dos òvuls de la mateixa donant, fecundats per espermatozoides del mateix home, donen dos germans diferents (no bessons idèntics). Per què, si tots els òvuls surten de la mateixa dona?',
        options: [
          'Perquè cada òvul es forma per mitosi i cada mitosi canvia una mica els cromosomes',
          'Perquè a la meiosi cada parella de cromosomes es reparteix a l\'atzar en cada òvul',
          "Perquè l'embrió tria a l'atzar quins cromosomes fa servir quan comença a créixer",
          'Perquè la dona fabrica cada mes òvuls amb un nombre diferent de cromosomes'
        ],
        correct: 1,
        hints: [
          'Compara: dos òvuls de la mateixa dona, porten exactament els mateixos cromosomes?',
          'Quina de les divisions reparteix els cromosomes de cada parella? Hi ha una sola manera de fer-ho?'
        ],
        figuraFeedback: {
          src: '/images/sa2-s2-segregacio-atzar.webp',
          alt: 'Esquema de la meiosi: cada parella de cromosomes es reparteix a l\'atzar, i així surten gàmetes amb combinacions diferents.'
        },
        feedback: {
          correct: "Molt bé. Tots els òvuls tenen 23 cromosomes, però no els mateixos: a la meiosi, de cada parella en va un a cada gàmeta, a l'atzar. Per això dos germans dels mateixos pares no són iguals.",
          wrong: "La mitosi fa còpies idèntiques i tots els òvuls normals tenen 23 cromosomes: per aquí no surten diferències. Pensa en la divisió que reparteix els cromosomes de cada parella: de quantes maneres es pot fer?"
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        cas: 'C',
        text: "Al mateix hospital arriba un tercer cas: una anàlisi detecta que TOTES les cèl·lules d'un embrió tenen tres còpies del cromosoma 21 en comptes de dues. Quin dels processos que has treballat ho explica millor, i per què?",
        options: [
          "Una mitosi descontrolada de l'embrió: en dividir-se massa de pressa ha anat acumulant cromosomes de més",
          "Un error de mitosi del pare, perquè la mitosi és la divisió que forma els espermatozoides",
          "Cap dels tres: el nombre de còpies d'un cromosoma no depèn de cap divisió cel·lular",
          "Un error de meiosi en un dels gàmetes, que va aportar dues còpies del 21 en comptes d'una"
        ],
        correct: 3,
        hints: [
          'Si el problema és a TOTES les cèl·lules, quan ha d\'haver passat: abans o després de la primera divisió de l\'embrió?',
          'Quina és la divisió que ha de deixar una sola còpia de cada cromosoma?'
        ],
        feedback: {
          correct: "Molt bé: has estirat el raonament de l'òvul de 24. Si un gàmeta porta dues còpies del 21 en comptes d'una, en sumar-s'hi la còpia de l'altre gàmeta l'embrió en té tres. És el mateix tipus d'error de repartiment de la meiosi, mirat cromosoma a cromosoma en comptes de mirar el total.",
          wrong: "Si el problema hi és a TOTES les cèl·lules de l'embrió, ja venia del gàmeta i no d'una divisió posterior. Recorda quina és la divisió que forma els gàmetes i que ha de deixar-hi una sola còpia de cada cromosoma."
        }
      },
      {
        id: 't10',
        oa: 'OA4',
        cas: 'C',
        text: 'I un quart cas: en un cultiu de cèl·lules d\'un nòdul, les cèl·lules continuen dividint-se encara que ja no quedi lloc a la placa. Quin procés ho explica millor?',
        options: [
          'Mitosi normal: les cèl·lules sanes es divideixen fins que el teixit queda refet',
          'Mitosi descontrolada: les cèl·lules no paren encara que no els quedi espai',
          'Error de meiosi: un gàmeta amb cromosomes de més fa que el cultiu no pari',
          'Mitosi normal: si es dona espai i aliment, qualsevol cèl·lula es divideix sempre'
        ],
        correct: 1,
        hints: [
          'Una cèl·lula sana, què fa quan ja no li queda lloc?',
          'Aquestes cèl·lules són gàmetes o cèl·lules d\'un teixit? Quina divisió fan, doncs?'
        ],
        figuraFeedback: {
          src: '/images/sa2-s3-cancer-cicle.webp',
          alt: 'Esquema del cicle cel·lular: en el càncer es perden els senyals que aturen la divisió.'
        },
        feedback: {
          correct: 'Exacte. Una cèl·lula sana s\'atura quan no té espai. Si continua dividint-se, ha perdut el control del cicle: és el que passa en el càncer.',
          wrong: "Les cèl·lules d'un nòdul no són gàmetes, i una cèl·lula sana no es divideix indefinidament: para quan el teixit queda refet o quan no hi ha espai. Què vol dir, doncs, que aquestes no parin?"
        }
      }
    ]
  }
}
