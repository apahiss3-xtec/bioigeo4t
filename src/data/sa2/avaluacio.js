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
export const sa2Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Assaig de la prova amb un cas NOU, que no és el de la prova: una cooperativa ramadera del Pallars cria mules per treballar a la muntanya. Una mula és la cria d'una egua (2n = 64) i un ase (2n = 62). Cada pregunta entrena un bloc de la prova amb la mateixa exigència. Escriu a mà i sense apunts, i no obris el model fins que hagis acabat. Les dades que a la prova van en figura o en taula, aquí van dins l'enunciat.",
    minutes: 28,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: 'Entrena el bloc 1 de la prova · ordenar fases amb proves i predir una mitosi',
        minutes: 7,
        text: "Una mula té 63 cromosomes a cada cèl·lula del cos. En una mostra de pell d'una mula jove, la veterinària descriu quatre cèl·lules, desordenades. P: els cromosomes, ben visibles, formen una fila al centre de la cèl·lula. Q: el nucli és difús i no s'hi distingeix cap cromosoma. R: s'estan formant dos nuclis nous i la cèl·lula comença a estrènyer-se pel mig. S: dos grups de cromosomes iguals s'allunyen cap a extrems oposats. a) Ordena-les començant per la que no es divideix, i digues de cada una en quina fase és i quina prova visible ho mostra. b) Prediu quants cromosomes tindrà cada cèl·lula filla d'una mitosi de mula i justifica per què un nombre senar no hi és cap obstacle.",
        model: {
          as: "Q (interfase: nucli difús, no es veuen cromosomes) → P (metafase: cromosomes en fila al centre) → S (anafase: dos grups que se separen) → R (telofase: dos nuclis nous i la cèl·lula es parteix). Cada filla tindrà 63 cromosomes, perquè la mitosi fa dues cèl·lules iguals a la mare.",
          ae: "Ordre: Q → P → S → R. Q és en interfase, que NO és una fase de la mitosi: el nucli és difús perquè l'ADN està desplegat i s'està copiant. P és en metafase: cada cromosoma, ja duplicat en dues cromàtides, s'alinea al centre. S és en anafase: les dues còpies de cada cromosoma se separen i marxen a pols oposats. R és en telofase: es refan dos nuclis i el citoplasma es parteix. Cada filla tindrà 63 cromosomes. El nombre senar no importa perquè la mitosi no aparella cromosomes: cadascun dels 63 s'ha copiat a la interfase i, a l'anafase, el que se separa són les dues còpies D'UN MATEIX cromosoma. Un cromosoma sense parella es reparteix igual de bé que un que en té. Per això una mula creix i repara els teixits amb tota normalitat.",
        },
        aeWhy: "L'AE dona una prova visible per a cada fase, deixa clar que la interfase no és mitosi i tanca el parany de la pregunta: creure que la mitosi necessita parelles de cromosomes i que un nombre senar la fa fallar. A l'anafase se separen les dues còpies d'un mateix cromosoma.",
        must: [
          "Has ordenat Q → P → S → R, començant per la interfase.",
          "Per a cada cèl·lula has donat una prova visible, no només el nom de la fase.",
          "Has predit 63 cromosomes a cada filla.",
          "Has justificat que a la mitosi se separen les dues còpies de cada cromosoma i que no cal aparellar-los."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Entrena el bloc 2 de la prova · calcular cromosomes d\'un creuament i llegir dades',
        minutes: 7,
        text: "a) L'egua (2n = 64) i l'ase (2n = 62) fan meiosi per formar els gàmetes. Calcula quants cromosomes porta l'òvul, quants l'espermatozoide i quants la mula que en neix. b) Explica per què una mula gairebé no pot fer gàmetes. c) Un estudi compta els espermatozoides en formació en un tros de testicle de la mateixa mida: cavall, 120; ase, 110; mul (el mascle de la mula), 3. Quin percentatge representa el mul respecte al cavall, i què et diu aquesta dada?",
        model: {
          as: "Òvul: 32. Espermatozoide: 31. Mula: 32 + 31 = 63. La mula gairebé no fa gàmetes perquè a la meiosi els cromosomes del cavall i els de l'ase no es poden aparellar bé i no es reparteixen. El mul en fa 3 per cada 120 del cavall: un 2,5 %. La meiosi gairebé no li funciona.",
          ae: "La meiosi redueix a la meitat: l'òvul de l'egua porta 64 / 2 = 32 cromosomes i l'espermatozoide de l'ase, 62 / 2 = 31. La fecundació els suma: 32 + 31 = 63, i com que després el zigot es divideix per mitosi, totes les cèl·lules de la mula en tenen 63. El problema apareix quan la mula ha de fer meiosi. A la meiosi I, cada cromosoma s'ha d'aparellar amb el seu homòleg per enviar-ne un a cada pol; però els 32 de l'egua i els 31 de l'ase no són parelles de veritat (no coincideixen ni en nombre ni en forma) i un queda sol. Molts no es poden aparellar, el repartiment falla i gairebé tots els gàmetes surten amb un joc de cromosomes erroni i no són viables. No és que 63 «no es pugui dividir per dos»: la meiosi no reparteix un número, reparteix parelles. La dada ho confirma: 3 / 120 × 100 = 2,5 %. El mul té testicles però hi fa uns quaranta cops menys espermatozoides que el cavall, perquè la meiosi s'encalla; la mitosi, en canvi, li funciona perfectament.",
        },
        aeWhy: "L'AE fa el càlcul pas a pas (la meiosi divideix per dos, la fecundació suma), situa el problema en l'aparellament d'homòlegs de la meiosi I i descarta l'explicació fàcil i falsa («63 és senar»). A més connecta la dada numèrica amb la meiosi que falla, que és el que la rúbrica del bloc demana per arribar a AE.",
        must: [
          "Has calculat 32, 31 i 63, i has dit que la meiosi divideix per dos i la fecundació suma.",
          "Has situat el problema en l'aparellament dels homòlegs a la meiosi I.",
          "No has dit que a la mula li falla la mitosi.",
          "Has calculat el 2,5 % i l'has relacionat amb la meiosi que falla."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: 'Entrena el bloc 3 de la prova · índex mitòtic, control i fiabilitat',
        minutes: 8,
        text: "Algunes mules tenen nòduls a la pell i la veterinària, la Mireia, sospita un tumor. A la pell sana d'un animal adult, poques cèl·lules es divideixen. Ha comptat cèl·lules al microscopi. Pell sana d'una mula sense nòduls (control): 500 cèl·lules, 5 en divisió. Nòdul de la mula Tramuntana: 200 cèl·lules, 4 en divisió. Nòdul de la mula Garbí: 320 cèl·lules, 48 en divisió. a) Calcula l'índex mitòtic de cada mostra. b) En quin dels dos nòduls les cèl·lules sembla que es divideixen de manera descontrolada? Compara-ho amb la mostra de control. c) En Biel, el mosso, diu: «La Tramuntana també en té, de tumor: dobla el control». Comenta-ho fixant-te en el nombre real de cèl·lules que s'estan dividint, i explica què faries abans de donar-li la raó. d) A la mucosa de l'intestí d'un poltre sa, la Mireia troba un 22 %. És motiu d'alarma?",
        model: {
          as: "Control: 5 / 500 = 1 %. Tramuntana: 4 / 200 = 2 %. Garbí: 48 / 320 = 15 %. El Garbí pot tenir una divisió sense control, perquè té quinze vegades el control. La Tramuntana només té 4 cèl·lules en divisió, és massa poc per dir-ho. L'intestí es renova constantment, així que el 22 % hi és normal.",
          ae: "Índexs: control 5 / 500 × 100 = 1 %; Tramuntana 4 / 200 × 100 = 2 %; Garbí 48 / 320 × 100 = 15 %. El nòdul del Garbí és el sospitós: en un teixit on normalment gairebé no hi ha divisió, té un índex quinze vegades el del control de la mateixa pell. No n'hi ha prou de dir si un índex és «alt» o «baix», perquè el valor normal canvia d'un teixit a un altre; només la comparació amb un control del MATEIX teixit diu si és anòmal. Sobre la Tramuntana, en Biel confon una proporció amb una prova: 2 % és el doble d'1 %, però són 4 cèl·lules contra 5, i amb recomptes tan petits una o dues cèl·lules de més o de menys, per pura casualitat, canvien molt el percentatge. No ho afirmaria ni ho descartaria: comptaria moltes més cèl·lules, de diversos camps i de més d'un nòdul, abans de decidir. El 22 % de l'intestí no és alarmant: la mucosa intestinal es renova cada pocs dies i un índex alt hi és el que s'espera; el mateix valor a la pell adulta sí que ho seria.",
        },
        aeWhy: "L'AE no s'atura en el càlcul: compara cada mostra amb el control del mateix teixit, valora la fiabilitat d'un recompte petit i diu què faria, i reconeix que en un teixit que es renova molt una divisió alta és normal. Evita llegir «el doble» com si fos una prova i jutjar un índex sense referència.",
        must: [
          "Has calculat 1 %, 2 % i 15 % i has escrit l'operació.",
          "Has justificat el Garbí comparant-lo amb el control, no amb un llindar après de memòria.",
          "Has dit que 4 cèl·lules en divisió són massa poques per decidir i que caldria comptar-ne més.",
          "Has explicat per què el 22 % de l'intestí és normal."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Entrena el bloc 4 de la prova · argumentar una recomanació i revisar-la amb dades noves',
        minutes: 6,
        text: "a) En Biel proposa: «Comprem vint mules i, d'aquí a uns anys, ja tindrem mulets de les nostres». Per què el pla no pot funcionar i d'on hauran de sortir cada any les mules noves? b) Un tractant assegura que «una mula no cria mai, ni una». Suposa que en una comarca hi ha 12.000 mules femelles i que una de cada 2.000 pot arribar a fer algun òvul viable. Calcula quantes en podrien fer i revisa la frase del tractant. c) Escriu la recomanació per a la cooperativa (5–6 línies) amb mitosi, meiosi, nombre de cromosomes i almenys una dada. Afegeix-hi un risc: imagina que tots els animals surten d'un sol ase i d'unes poques egües, i que apareix una malaltia nova.",
        model: {
          as: "No pot funcionar perquè les mules gairebé no fan gàmetes: cada mula s'ha d'obtenir creuant una egua amb un ase. 12.000 / 2.000 = 6 mules en podrien fer, així que «mai» no és correcte: és «gairebé mai». Recomanació: creuar egües amb ases cada any i fer servir més d'un ase.",
          ae: "a) Les mules creixen i es reparen per mitosi sense cap problema, però la meiosi els falla (63 cromosomes que no fan parelles) i, sense gàmetes viables, no poden criar entre elles. Cada mula nova ha de sortir, cada vegada, d'un creuament egua × ase. b) 12.000 / 2.000 = 6 mules: poques, però no zero. La frase bona és «una mula gairebé mai no cria»; «mai» és una afirmació absoluta que una sola excepció ja fa caure. c) Les mules són bons animals de treball perquè la mitosi els funciona com a qualsevol animal, però amb 63 cromosomes la meiosi no pot aparellar els homòlegs i gairebé no fan gàmetes. Per tant, la cooperativa ha de mantenir egües (2n = 64) i ases (2n = 62) reproductors i fer el creuament cada any, sense comptar que les mules criïn (només unes 6 de cada 12.000 podrien fer-ho). Risc: si totes surten del mateix ase i de poques egües, s'assemblaran molt genèticament i, davant d'una malaltia nova, si una és sensible ho poden ser gairebé totes. Convé canviar de reproductors per mantenir la variabilitat.",
        },
        aeWhy: "L'AE argumenta amb la mitosi i la meiosi (no només «perquè són estèrils»), converteix la proporció en un nombre concret per revisar una afirmació absoluta i valora el risc de fer-les totes dels mateixos reproductors. L'error típic és repetir «són estèrils» sense explicar-ho i no revisar la conclusió quan arriba la dada nova.",
        must: [
          "Has explicat que cada mula surt d'un creuament egua × ase.",
          "Has calculat 6 i has canviat «mai» per «gairebé mai».",
          "La recomanació fa servir mitosi, meiosi i el nombre de cromosomes, amb una dada.",
          "Has valorat el risc de fer-les totes dels mateixos reproductors."
        ]
      }
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
        llegir: "Mira només l'ADN, la part fosca. Núvol difús = en repòs. Fils foscos = es divideix.",
        text: "Al microscopi veus una cèl·lula amb fils foscos alineats al mig. Què fa?",
        options: ["S'està dividint", "Està en repòs"],
        correct: 0
      },
      {
        id: 'p2', oa: 'OA2',
        img: '/images/sa2-s2-mitosi-meiosi-C.svg',
        alt: "La mateixa cèl·lula fa mitosi (2 cèl·lules iguals) o meiosi (4 cèl·lules amb la meitat).",
        llegir: "Mitosi: 2 cèl·lules iguals, per créixer i reparar. Meiosi: 4 cèl·lules amb la meitat (un de cada parella), per fer òvuls i espermatozoides.",
        text: "L'ovari fa un òvul. Quina divisió fa servir?",
        options: ["Mitosi", "Meiosi"],
        correct: 1
      },
      {
        id: 'p3', oa: 'OA3',
        img: '/images/sa2-s3-index-C.svg',
        alt: "Tres passos per calcular l'índex mitòtic: comptar totes, comptar les que es divideixen, dividir i multiplicar per 100.",
        llegir: "L'índex mitòtic diu quantes cèl·lules de cada 100 es divideixen. Si baixa, el tumor es divideix menys.",
        text: "Abans del medicament, l'índex del tumor era 30 %. Després, 8 %. El medicament…",
        options: ["Funciona: el tumor es divideix menys", "No funciona: encara hi ha cèl·lules que es divideixen"],
        correct: 0
      }
    ],
    completar: {
      id: 'k1', oa: 'OA3',
      llegir: "Una cèl·lula normal es divideix i després para. Una cèl·lula de càncer no para mai.",
      frase: "El càncer és una {0} que no s'{1}.",
      respostes: ['mitosi', 'atura'],
      banc: ['meiosi', 'atura', 'mitosi', 'accelera']
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
