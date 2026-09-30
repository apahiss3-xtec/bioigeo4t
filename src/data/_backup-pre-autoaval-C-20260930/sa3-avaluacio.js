// Material d'autoavaluació de SA3 (El codi de la vida): checklist d'estudi
// (el que cal saber per tancar la SA) + test de transferència amb un cas NOU
// —la prova del taló a un nadó i un possible cas de fenilcetonúria (PKU)—
// diferent dels casos treballats a les sessions (dogma central genèric a S1,
// extracció d'ADN a S2, anèmia falciforme a S3, debat CRISPR/bessones
// editades a S4), per comprovar si l'alumne sap APLICAR l'estructura de
// l'ADN, la transcripció/traducció, les mutacions i la distinció
// somàtica/germinal a un cas que ningú no li ha triat.
//
// Revisió 2026-08-17 (revisió agent-alumne): la posició de la resposta
// correcta s'ha repartit entre les quatre opcions i totes les opcions d'una
// mateixa pregunta tenen una llargada semblant, perquè abans la correcta era
// sempre la primera i la més llarga i el test es podia encertar sencer sense
// haver llegit res. També s'ha corregit que la PKU és recessiva (calen les
// DUES còpies del gen mutades) i s'han reescrit t2 i t4, que regalaven la
// resposta dins l'enunciat o preguntaven per coses no treballades a la SA.
//
// Revisió 2026-09-29 (autoavaluació ≠ prova): l'assaig escrit copiava
// preguntes de la prova final del curs («El llac sota el gel»). S'ha refet
// sencer amb un context NOU —les lluernes i el gen de la luciferasa— que no és el de la
// prova, ni l'enigma de la SA, ni el del test. Cada pregunta entrena
// el bloc 3 de la prova final del curs amb les mateixes habilitats i exigència
// (tipus de dada, verb, format) i el model AE tanca l'error típic del bloc.
// Auditoria: web/scripts-avaluacio/audita_autoavaluacio.py.
export const sa3Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Assaig del bloc de la prova final que treballa SA3 (de la lletra de l'ADN al caràcter), amb un cas NOU: les lluernes. Una lluerna brilla gràcies a una proteïna, la luciferasa, que fabrica llum dins les cèl·lules de l'abdomen; els mascles fan pampallugues perquè les femelles els trobin. El gen de la luciferasa té dos al·lels: L (la proteïna funciona i la lluerna brilla) i l (la proteïna no funciona). Full, bolígraf i sense apunts: la cadena ha d'arribar SENCERA fins al caràcter.",
    minutes: 26,
    questions: [
      {
        id: 'w1',
        oa: 'OA1',
        source: 'Entrena el bloc 3 de la prova final · llegir un ARN missatger de tres en tres',
        minutes: 5,
        text: "La cadena motlle de l'ADN d'un tros del gen de la luciferasa (al·lel L) és: GGA ACC TTT CGA. a) Escriu l'ARN missatger que se'n transcriu i separa'l en codons. b) Digues en quin lloc de la cèl·lula passa i per què l'ARN missatger no porta cap T.",
        model: {
          as: "ARNm: CCU UGG AAA GCU (quatre codons). Es fa al nucli (transcripció). No porta T perquè l'ARN fa servir uracil (U) en lloc de timina.",
          ae: "Cada base de l'ARNm és la complementària de la del motlle: G → C, A → U, C → G, T → A. Per tant: GGA ACC TTT CGA → CCU UGG AAA GCU, que es llegeix de tres en tres: quatre codons, que donaran quatre aminoàcids. La transcripció passa al nucli, on hi ha l'ADN; l'ARNm en surt cap al ribosoma, on es farà la traducció. No hi ha T perquè l'ARN porta uracil en lloc de timina: allà on el motlle té una A, l'ARNm hi posa U. L'error que cal evitar és copiar les mateixes lletres del motlle, o escriure T dins un ARN.",
        },
        aeWhy: "L'AE aplica la complementarietat lletra per lletra, diu que el missatge es llegeix en codons (tres lletres, un aminoàcid) i situa la transcripció i la traducció on toca. Tanca els dos errors típics: copiar el motlle i posar T a l'ARN.",
        must: [
          "Has escrit CCU UGG AAA GCU, separat en quatre codons.",
          "Has aplicat A → U (i no A → T).",
          "Has dit que la transcripció passa al nucli.",
          "Has dit que l'ARN porta uracil en lloc de timina."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Entrena el bloc 3 de la prova final · comparar dos al·lels amb la taula de codons',
        minutes: 6,
        text: "Aquest és el mateix tros d'ARNm en els dos al·lels. Al·lel L: … CCU UGG AAA GCU … Al·lel l: … CCU UGG ACA GCU … Tros de la taula de codons: CCU = prolina · UGG = triptòfan · AAA = lisina · AAG = lisina · ACA = treonina · GCU = alanina · CAU = histidina · GGA = glicina. a) Quantes lletres són diferents entre L i l, i en quin codó? b) Escriu els aminoàcids que surten de cada al·lel. c) Quin aminoàcid canvia?",
        model: {
          as: "Hi ha una sola lletra diferent, al tercer codó (AAA → ACA). L: prolina, triptòfan, lisina, alanina. l: prolina, triptòfan, treonina, alanina. Canvia la lisina per treonina.",
          ae: "Comparant lletra a lletra, només n'hi ha UNA de diferent: la del mig del tercer codó (AAA a L, ACA a l). No canvien tres lletres: canvia un sol codó perquè una de les seves tres lletres és diferent. Traducció de L: prolina – triptòfan – lisina – alanina. Traducció de l: prolina – triptòfan – treonina – alanina. Els altres tres codons són idèntics i donen els mateixos aminoàcids; l'únic que canvia és el tercer: lisina a L, treonina a l. Per tant, la proteïna de l'al·lel l té la mateixa llargada i un sol aminoàcid diferent en aquesta posició.",
        },
        aeWhy: "L'AE compta bé (una lletra, un codó, un aminoàcid) i ho escriu tot en ordre, que és el que la pregunta demana. Evita els dos errors típics d'aquest tipus de taula: dir que canvien tres lletres i dir que canvien tots els aminoàcids del tros.",
        must: [
          "Has dit que hi ha una sola lletra diferent, al tercer codó.",
          "Has traduït els quatre codons de cada al·lel.",
          "Has identificat lisina → treonina com l'únic canvi.",
          "No has dit que canvien tres lletres ni tota la proteïna."
        ]
      },
      {
        id: 'w3',
        oa: 'OA2',
        source: 'Entrena el bloc 3 de la prova final · encadenar base, aminoàcid, proteïna i caràcter',
        minutes: 7,
        text: "Un mascle té els dos al·lels l i no brilla. Explica tota la cadena: de quina manera una única lletra diferent a l'ADN fa que aquest mascle tingui molt poques possibilitats de deixar descendència?",
        model: {
          as: "La lletra diferent canvia un codó i fa que la luciferasa porti un aminoàcid diferent. La proteïna no funciona, no fabrica llum i el mascle no brilla, així que les femelles no el troben.",
          ae: "Cal seguir el camí de la lletra fins al caràcter, és a dir, del genotip al fenotip. Una lletra diferent a l'ADN fa que, en la transcripció, l'ARNm porti un codó diferent (ACA en lloc d'AAA). En la traducció, el ribosoma hi posa treonina en lloc de lisina. Un aminoàcid diferent pot canviar la forma de la proteïna, i la luciferasa necessita la seva forma per fer la reacció que produeix llum: si la forma canvia, deixa de funcionar. Sense luciferasa que funcioni, les cèl·lules de l'abdomen no fan llum: el caràcter observable és que el mascle no brilla. I aquí no s'acaba: les femelles troben els mascles per les pampallugues, de manera que aquest mascle gairebé no s'aparellarà i l'al·lel l passarà a menys descendents. El gen no «fa llum» directament: fa una proteïna, i és la proteïna la que fa la llum.",
        },
        aeWhy: "L'AE no s'atura a «la proteïna no funciona», que és on es queda la majoria: arriba al caràcter observable (no brilla) i a la seva conseqüència (no troba parella). També deixa clar que el gen fa una proteïna i no el caràcter directament.",
        must: [
          "Has passat per transcripció (ARNm) i traducció (aminoàcid).",
          "Has explicat per què un aminoàcid diferent pot fer que la proteïna deixi de funcionar.",
          "Has arribat al caràcter observable: no brilla.",
          "Has lligat el caràcter amb la possibilitat de deixar descendència."
        ]
      },
      {
        id: 'w4',
        oa: 'OA3',
        source: 'Entrena el bloc 3 de la prova final · mutació sense efecte i límits de les dades',
        minutes: 8,
        text: "En una altra població es troba un tercer al·lel, L2, amb aquest mateix tros d'ARNm: … CCU UGG AAG GCU … a) Amb la taula de codons de la pregunta anterior, prediu si les lluernes L2 brillaran i justifica-ho. b) Amb les dades que tens, què NO pots deduir sobre l'al·lel l, i què caldria fer per saber-ho?",
        model: {
          as: "Brillaran: AAG també codifica lisina, així que la proteïna surt igual. No podem saber del cert si la treonina és el que espatlla la proteïna, perquè només veiem un tros del gen: caldria mirar el gen sencer.",
          ae: "a) L2 té una lletra diferent de L (AAA → AAG), però AAG també codifica lisina: la proteïna surt amb els mateixos aminoàcids, la luciferasa funciona i la lluerna brilla. És una mutació silenciosa: hi ha canvi a l'ADN però no a la proteïna, perquè diversos codons donen el mateix aminoàcid. b) Amb aquest tros sol no puc deduir: (1) que el canvi lisina → treonina sigui la causa de la proteïna que no funciona, perquè només veig quatre codons d'un gen molt més llarg i hi podria haver altres diferències; (2) si aquell aminoàcid és en una zona de la proteïna important per fer la llum o en una que no ho és. Per saber-ho caldria seqüenciar el gen sencer dels dos al·lels i, al laboratori, fabricar la proteïna amb només aquest canvi i mesurar si fa llum, comparant-la amb la de L com a control.",
        },
        aeWhy: "L'AE resol la mutació silenciosa amb la taula i, sobretot, marca el límit del que diuen les dades (un tros no és el gen sencer; un canvi no prova la causa) i proposa com posar-ho a prova, amb control. Aquest és l'extra que la versió A de la prova demana per arribar a AE.",
        must: [
          "Has dit que L2 brilla perquè AAG també és lisina.",
          "Has fet servir l'expressió «mutació silenciosa» o l'has explicada.",
          "Has dit almenys una cosa que les dades no permeten deduir.",
          "Has proposat com comprovar-ho (gen sencer o fabricar la proteïna i mesurar-la)."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé descriure el model simplificat de l'ADN: doble cadena, complementarietat A-T i G-C, i explico per què aquesta complementarietat permet copiar-lo i llegir-lo." },
    { id: 'c2', oa: 'OA1', text: "Distingeixo l'ADN de l'ARN (cadena doble/simple, desoxiribosa/ribosa, T/U) i explico el paper de cada un: guardar la informació vs. transportar-la fins al ribosoma." },
    { id: 'c3', oa: 'OA2', text: "Explico el camí complet gen → ARNm (transcripció, al nucli) → proteïna (traducció, al ribosoma) → característica observable." },
    { id: 'c4', oa: 'OA2', text: "Sé llegir una taula de codons per traduir una seqüència de nucleòtids a una cadena d'aminoàcids." },
    { id: 'c5', oa: 'OA2', text: "Distingeixo genotip (la seqüència que tens) de fenotip (com es manifesta), i dono un exemple propi." },
    { id: 'c6', oa: 'OA3', text: "Predic com un canvi d'una sola lletra (mutació puntual) pot alterar la proteïna resultant, i explico per què no totes les mutacions tenen efecte: hi ha codons diferents que donen el mateix aminoàcid (mutació silenciosa)." },
    { id: 'c7', oa: 'OA3', text: "Relaciono les mutacions amb l'origen de la variabilitat genètica sobre la qual actua la selecció natural." },
    { id: 'c8', oa: 'OA4', text: "Distingeixo l'edició genètica somàtica (no s'hereta, afecta només la persona tractada) de la germinal (s'hereta per sempre a la descendència)." },
    { id: 'c9', oa: 'OA4', text: "Contrasto la fiabilitat de fonts sobre CRISPR aplicant la graella de fonts fiables (SA1) i distingeixo «què es pot fer» (ciència) de «què s'hauria de fer» (valors)." },
    { id: 'c10', oa: 'OA1', text: "Puc explicar el paper de Rosalind Franklin en el descobriment de l'estructura de l'ADN i per què és un exemple de biaix de gènere en la ciència." }
  ],

  // Cas-fil NOU: la prova del taló d'un nadó detecta un possible cas de
  // fenilcetonúria (PKU), una malaltia genètica real i coneguda a Catalunya
  // (cribratge neonatal). Context real i diferent dels quatre casos de les
  // sessions, per mesurar transferència: estructura ADN/ARN, transcripció/
  // traducció, mutació→proteïna→fenotip, i somàtic/germinal + ètica.
  test: {
    context:
      "A totes les maternitats de Catalunya es fa la «prova del taló»: unes gotes de sang d'un nadó de pocs dies serveixen per detectar diverses malalties genètiques abans que donin cap símptoma. Un dels resultats possibles és la fenilcetonúria (PKU). Els nadons amb PKU tenen mutades les DUES còpies del gen PAH —la del pare i la de la mare—, el gen que conté les instruccions per fabricar l'enzim PAH, encarregat de transformar l'aminoàcid fenilalanina en un altre aminoàcid. Qui només en té una de mutada està sa. Sense enzim funcional, la fenilalanina s'acumula i pot fer molt de mal al cervell en desenvolupament. Si es detecta a temps, el tractament és senzill: una dieta molt baixa en fenilalanina durant els primers anys de vida. Els investigadors també estudien si, en el futur, una teràpia gènica (afegir una còpia correcta del gen PAH a les cèl·lules del fetge del pacient, no als seus òvuls o espermatozoides) podria evitar la dieta de per vida.",
    questions: [
      {
        id: 't1',
        oa: 'OA2',
        text: "L'enzim PAH és una proteïna. Quin és el camí complet, des del gen fins al símptoma, que fa que una mutació al gen PAH acabi provocant l'acumulació de fenilalanina?",
        options: [
          "El gen PAH fabrica directament fenilalanina, i el gen mutat en fabrica molta més del compte.",
          "El gen mutat es transcriu a ARNm i es tradueix en un enzim PAH alterat, que ja no transforma la fenilalanina i la deixa acumular.",
          "La mutació altera directament la molècula de fenilalanina de la sang, que és el que està espatllat en aquests nadons i el que detecta la prova del taló.",
          "L'ARNm del gen PAH es queda retingut al nucli i és ell qui va acumulant la fenilalanina de la sang."
        ],
        correct: 1,
        feedback: {
          correct: "Exacte. És el mateix camí que vas treballar amb la mutació falciforme a S3: gen → ARNm (transcripció) → proteïna (traducció) → caràcter observable. Si el gen PAH surt alterat, l'enzim que fabrica no fa la seva feina.",
          wrong: "Recorda el camí de S3 (dogma central): gen → ARNm → proteïna → caràcter. La mutació és al gen (ADN); el símptoma apareix perquè la PROTEÏNA que hauria de processar la fenilalanina surt alterada, no perquè la fenilalanina mateixa estigui «mutada»."
        }
      },
      {
        id: 't2',
        oa: 'OA3',
        text: "Dos nadons tenen mutacions diferents al gen PAH. El primer té un canvi que impedeix fabricar l'enzim i emmalalteix. El segon té un canvi d'una sola lletra que converteix el codó GAA en GAG: consultant la taula de codons, tots dos codons codifiquen el mateix aminoàcid. Per què el segon nadó pot no tenir cap símptoma?",
        options: [
          "Perquè les mutacions no comencen a tenir efecte fins als primers anys de vida del nadó.",
          "Perquè el seu enzim PAH surt una mica alterat, però el cos en fabrica molta més quantitat per compensar-ho i la fenilalanina no s'arriba a acumular.",
          "Perquè l'enzim li surt exactament igual: si l'aminoàcid no canvia, la proteïna funciona (mutació silenciosa).",
          "Perquè el seu canvi és a l'ARNm i no a l'ADN, i l'ARNm es destrueix al cap de poca estona."
        ],
        correct: 2,
        feedback: {
          correct: "Correcte. Si el codó canviat encara codifica el mateix aminoàcid, la cadena d'aminoàcids surt idèntica i l'enzim funciona igual: és una mutació silenciosa. No tot canvi al gen es nota al fenotip.",
          wrong: "Torna a la taula de codons: hi ha codons diferents que codifiquen el mateix aminoàcid. Si després del canvi de lletra el codó encara dona el mateix aminoàcid, la proteïna final és exactament la mateixa — i una proteïna igual funciona igual."
        }
      },
      {
        id: 't3',
        oa: 'OA4',
        text: "Els investigadors estudien afegir una còpia correcta del gen PAH a les cèl·lules del FETGE del pacient (no als seus òvuls ni espermatozoides). Si aquesta teràpia funcionés, el fill d'aquest pacient també naixeria amb el gen corregit?",
        options: [
          "Sí: qualsevol canvi genètic fet a un pacient acaba passant als seus fills.",
          "Depèn de l'edat: si es fa abans de tenir fills, el canvi ja hi és als gàmetes.",
          "Sí, perquè les cèl·lules del fetge del pacient són també les encarregades de fabricar els seus gàmetes.",
          "No: és una edició somàtica, no arriba als gàmetes, i el fill pot heretar igualment la mutació."
        ],
        correct: 3,
        feedback: {
          correct: "Així és. Igual que al debat CRISPR de S4: editar cèl·lules somàtiques (aquí, del fetge) no toca els gàmetes, així que el canvi mor amb el pacient. Només l'edició germinal (òvuls, espermatozoides, embrions) es transmetria a la descendència — i per això el debat ètic hi és molt més fort.",
          wrong: "Repassa S4: somàtica (cèl·lules del cos, NO s'hereta) vs. germinal (òvuls/espermatozoides/embrions, SÍ s'hereta). Els gàmetes no es fabriquen al fetge, i el moment de la vida en què es faci el tractament no hi canvia res."
        }
      },
      {
        id: 't4',
        oa: 'OA1',
        text: "Abans que una cèl·lula del nadó es divideixi, ha de copiar tot el seu ADN, també el gen PAH. Quin paper hi fa la complementarietat A-T i G-C?",
        options: [
          "Cada cadena fa de motlle: davant d'una A només hi encaixa una T, i això fixa la seqüència de la còpia.",
          "Serveix per mantenir l'ADN ben plegat dins del nucli, però no intervé en la còpia.",
          "Fa que les dues cadenes acabin tenint exactament la mateixa seqüència, i per això n'hi ha prou de copiar-ne una de les dues.",
          "Permet que l'ARN substitueixi l'ADN mentre dura la còpia, perquè és de cadena simple."
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. Com que davant de cada base només n'hi encaixa una de concreta (A-T, G-C), una cadena determina completament l'altra: per això l'ADN es pot copiar amb tanta fidelitat abans de cada divisió.",
          wrong: "Compte amb una confusió freqüent: les dues cadenes no són iguals, són COMPLEMENTÀRIES (A davant de T, G davant de C). Justament per això cada cadena serveix de motlle i la còpia surt sense errors."
        }
      }
    ]
  }
}
