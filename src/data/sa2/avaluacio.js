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
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Aquestes preguntes són del tipus que trobaràs a la prova. Escriu-les senceres a mà i sense apunts. A SA2 el parany habitual és descriure fases de memòria: el que es valora és que expliquis PER QUÈ el cicle és com és.",
    minutes: 25,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: 'Tipus de pregunta de la prova · Interfase i mitosi',
        minutes: 6,
        text: "Explica per quina raó les dues cèl·lules filles d'una mitosi surten idèntiques a la mare, i digues què passa abans de la mitosi perquè això sigui possible.",
        model: {
          as: "Perquè a la interfase, abans de la mitosi, la cèl·lula copia tot el seu ADN. Després la mitosi reparteix una còpia a cada cèl·lula filla, i per això les dues tenen el mateix material genètic.",
          ae: "La clau no és a la mitosi sinó just abans. Durant la interfase —que no forma part de la mitosi— la cèl·lula duplica tot el seu ADN: cada cromosoma passa a tenir dues còpies idèntiques unides. La mitosi és només el repartiment: els cromosomes s'alineen al centre (metafase) i les dues còpies se separen cap a pols oposats (anafase), de manera que cada cèl·lula filla rep exactament una còpia de cada cromosoma. Per això surten dues cèl·lules amb el mateix material genètic complet que la mare, i per això la mitosi serveix per créixer i per reparar teixits: cal substituir una cèl·lula per una altra d'igual, no per una de diferent.",
        },
        aeWhy: "L'AE situa la duplicació a la interfase i la distingeix de la mitosi, explica el repartiment amb la fase concreta i tanca amb la funció biològica.",
        must: [
          "Has dit que l'ADN es duplica a la interfase.",
          "Has dit que la interfase NO és part de la mitosi.",
          "Has explicat el repartiment de les còpies.",
          "Has dit per a què serveix la mitosi al cos."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Prova final del curs · Pregunta 2, «dues maneres de dividir-se»',
        minutes: 7,
        text: "Compara mitosi i meiosi (quantes cèl·lules, amb quin material genètic) i explica per quina raó una espècie que només es dividís per mitosi ho tindria molt més difícil per adaptar-se a un canvi d'ambient.",
        model: {
          as: "La mitosi dona 2 cèl·lules idèntiques amb el material complet (2n) i la meiosi en dona 4 amb la meitat (n) i diferents entre elles. Si només hi hagués mitosi, tots els descendents serien còpies i no hi hauria variabilitat per adaptar-se.",
          ae: "Mitosi: 2 cèl·lules filles, totes dues 2n i genèticament iguals a la mare. Meiosi: 4 cèl·lules n, diferents entre elles, perquè hi ha recombinació i el repartiment dels cromosomes es fa a l'atzar. Aquesta diferència és la que importa: la meiosi genera variabilitat, i sense variabilitat la selecció no té sobre què actuar. Una població de còpies idèntiques, davant del fred, o bé resistiria tota o bé no en resistiria cap; la proporció no podria anar canviant generació rere generació. Només podria canviar si aparegués una mutació nova, que és un procés molt més lent i que depèn de l'atzar. Per això la reproducció sexual, tot i ser més costosa, és un avantatge en ambients que canvien.",
        },
        aeWhy: "L'AE diu d'on surt la variabilitat (recombinació + atzar) i raona el cas límit d'una població de clons, que és exactament el que demana la prova final del curs.",
        must: [
          "Has dit quantes cèl·lules dona cadascuna.",
          "Has fet servir 2n i n correctament.",
          "Has dit d'on surt la variabilitat a la meiosi.",
          "Has raonat què passaria amb una població de còpies idèntiques."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: 'Tipus de pregunta de la prova · Índex mitòtic',
        minutes: 6,
        text: "En una preparació de 250 cèl·lules d'intestí n'hi ha 35 en divisió. Calcula l'índex mitòtic i digues si aquesta dada, per si sola, indica que hi ha un problema.",
        model: {
          as: "35 ÷ 250 × 100 = 14 %. Per si sola no indica cap problema: l'intestí és un teixit que es renova constantment, així que és normal que tingui un índex mitòtic alt.",
          ae: "Índex mitòtic = 35/250 × 100 = 14 %. La dada per si sola no diu res. L'índex mitòtic només es pot interpretar comparant-lo amb el que és normal EN AQUELL teixit: a l'intestí o a la pell, que es renoven cada pocs dies, un valor alt és exactament el que s'espera; en un teixit que amb prou feines es divideix, com el nerviós, el mateix 14 % seria alarmant. El que indica pèrdua de control del cicle no és un número alt sinó que estigui molt per sobre del que toca en aquell teixit, o que la divisió no s'aturi quan hauria de fer-ho. Per decidir-ho caldria una referència: el mateix recompte en un teixit intestinal sa.",
        },
        aeWhy: "L'AE dona el criteri de comparació i proposa quina dada faltaria. Respondre només «14 % i és normal» es queda a AS.",
        must: [
          "Has fet el càlcul i has donat el percentatge.",
          "Has dit que la dada sola no es pot interpretar.",
          "Has comparat amb el que és normal en aquell teixit.",
          "Has dit quina dada addicional caldria."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Tipus de pregunta de la prova · Cas nou',
        minutes: 6,
        text: "Un nadó neix amb tres còpies del cromosoma 21. Explica en quin moment s'ha originat això i per quina raó no es pot atribuir a una mitosi descontrolada.",
        model: {
          as: "Ve d'un error a la meiosi: en formar el gàmeta, els dos cromosomes 21 no s'han separat i el gàmeta n'ha portat dos en comptes d'un. No és mitosi descontrolada, perquè la mitosi dona cèl·lules idèntiques i el problema és el repartiment als gàmetes.",
          ae: "S'ha originat a la meiosi, durant la formació d'un dels gàmetes: els dos cromosomes 21 no s'han separat (no-disjunció), de manera que un gàmeta n'ha portat dos. En fecundar-se amb un gàmeta normal, el zigot n'ha quedat amb tres, i com que totes les cèl·lules del cos vénen d'aquest zigot per mitosi, totes en tenen tres. No és mitosi descontrolada per dues raons: la mitosi produeix còpies exactes i no altera el nombre de cromosomes, i el càncer és una divisió que no s'atura en un teixit concret d'una persona ja formada, mentre que aquí l'alteració és present des del primer moment i a tot el cos. La mitosi, aquí, no ha fallat: ha copiat fidelment un error que ja hi era.",
        },
        aeWhy: "L'AE distingeix els tres casos del criteri (mitosi normal, mitosi descontrolada, error de meiosi) i explica per què l'alteració és a totes les cèl·lules.",
        must: [
          "Has dit que l'error és a la meiosi.",
          "Has explicat què vol dir que els cromosomes no se separen.",
          "Has dit per què l'alteració és a totes les cèl·lules del cos.",
          "Has dit per què NO és un cas de mitosi descontrolada."
        ]
      }
    ]
  },

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
