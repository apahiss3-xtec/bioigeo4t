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
export const sa3Avaluacio = {
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
