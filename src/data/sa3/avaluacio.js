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
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Aquestes preguntes són del tipus que trobaràs a la prova. Full, bolígraf i sense apunts. A SA3 la cadena gen → ARNm → proteïna → caràcter ha de sortir SENCERA: quedar-se a la proteïna és l'error més repetit.",
    minutes: 25,
    questions: [
      {
        id: 'w1',
        oa: 'OA2',
        source: 'Prova final del curs · Pregunta 3, «una lletra canviada»',
        minutes: 7,
        text: "En un gen canvia una sola base. Explica tot el camí que va d'aquest canvi fins que l'organisme deixa de tenir una característica.",
        model: {
          as: "Si canvia una base, canvia el codó. Aquell codó pot passar a codificar un aminoàcid diferent, i llavors la proteïna surt alterada i pot no fer bé la seva funció, de manera que la característica desapareix.",
          ae: "La cadena és: base → codó → aminoàcid → proteïna → caràcter, és a dir, genotip → fenotip. Un canvi d'una sola base altera UN codó (no tres lletres: el codó sencer és diferent perquè una de les seves tres lletres ho és). Si el codó nou codifica un altre aminoàcid, la proteïna incorpora un aminoàcid diferent, cosa que pot canviar-ne la forma i, amb la forma, la funció; si la proteïna era, per exemple, una anticongelant que impedeix que es formin cristalls de gel, en deixar de fer la seva feina l'organisme deixa de resistir la congelació. Ara bé, no tota mutació puntual té efecte: hi ha codons diferents que donen el mateix aminoàcid (mutació silenciosa) i llavors la proteïna surt igual.",
        },
        aeWhy: "L'AE arriba fins al CARÀCTER, evita l'error de «canvien tres lletres» i afegeix el cas de la mutació silenciosa, que és el que demostra que s'ha entès el codi i no s'ha memoritzat una fletxa.",
        must: [
          "Has escrit la cadena sencera fins al caràcter observable.",
          "Has dit que canvia un codó, no tres lletres.",
          "Has explicat per què canviar un aminoàcid pot canviar la funció.",
          "Has esmentat que hi ha mutacions sense efecte (silencioses)."
        ]
      },
      {
        id: 'w2',
        oa: 'OA1',
        source: 'Tipus de pregunta de la prova · ADN i ARN',
        minutes: 6,
        text: "Explica les diferències entre ADN i ARN i per quina raó la cèl·lula necessita les dues molècules en comptes de fer-ho tot amb una.",
        model: {
          as: "L'ADN té doble cadena, desoxiribosa i timina; l'ARN té cadena simple, ribosa i uracil. L'ADN guarda la informació al nucli i l'ARN missatger la transporta fins al ribosoma, que és on es fabrica la proteïna.",
          ae: "L'ADN és de doble cadena, amb desoxiribosa i timina; l'ARN és de cadena simple, amb ribosa i uracil. Tenen funcions diferents perquè tenen exigències contràries: l'ADN ha de ser l'arxiu, estable i protegit, i per això es queda al nucli i la doble cadena el fa més resistent i permet reparar-lo (si una cadena es malmet, l'altra serveix de motlle per complementarietat A-T i G-C). L'ARN missatger ha de ser una còpia de treball: es fabrica quan cal, surt del nucli fins al ribosoma i es degrada, de manera que la cèl·lula pot regular quanta proteïna fabrica sense tocar mai l'original. Si tot es fes amb una sola molècula, cada lectura posaria en risc l'arxiu.",
        },
        aeWhy: "L'AE respon la segona part de debò: explica per què convé separar l'arxiu de la còpia de treball, i aprofita la complementarietat per justificar l'estabilitat de l'ADN.",
        must: [
          "Has dit les tres diferències (cadena, sucre, base).",
          "Has dit on és cada molècula i què hi fa.",
          "Has anomenat la complementarietat A-T i G-C.",
          "Has explicat per què convé tenir arxiu i còpia de treball separats."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: 'Tipus de pregunta de la prova · Mutació i variabilitat',
        minutes: 6,
        text: "Un company diu: «les bactèries es fan resistents a l'antibiòtic perquè el necessiten». Corregeix-lo explicant d'on surt realment la resistència.",
        model: {
          as: "No és així. Les mutacions apareixen a l'atzar, abans i independentment de l'antibiòtic. Quan s'aplica l'antibiòtic, les que per casualitat ja eren resistents sobreviuen i es reprodueixen, i la població passa a ser resistent.",
          ae: "La resistència no apareix perquè calgui. Les mutacions es produeixen a l'atzar en copiar l'ADN, abans que hi hagi cap antibiòtic i sense cap relació amb ell: en una població enorme de bacteris, per pura probabilitat, algun ja porta un canvi que el fa menys sensible. L'antibiòtic no crea aquesta variant: la selecciona, perquè elimina la resta i deixa que aquell es reprodueixi sense competència. En poques generacions la proporció de resistents puja. La prova que ho decideix és que es poden trobar bacteris resistents en poblacions que mai no han estat exposades a l'antibiòtic. I d'aquí ve la recomanació d'acabar sempre el tractament: deixar-lo a mitges és exactament el que dona avantatge als menys sensibles.",
        },
        aeWhy: "L'AE dona la prova que decideix entre les dues explicacions (resistents no exposats) i evita els verbs lamarckians («es fan resistents», «s'adapten»). Acaba amb la conseqüència pràctica.",
        must: [
          "Has dit que la mutació és prèvia i a l'atzar.",
          "Has dit que l'ambient selecciona, no crea.",
          "No has fet servir verbs del tipus «s'adapten» o «desenvolupen».",
          "Has dit quina prova permetria decidir entre les dues explicacions."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Tipus de pregunta de la prova · CRISPR',
        minutes: 6,
        text: "Distingeix l'edició genètica somàtica de la germinal i explica per quina raó el debat ètic no és el mateix en els dos casos.",
        model: {
          as: "L'edició somàtica afecta només les cèl·lules del cos de la persona tractada i no es transmet als fills. La germinal afecta els gàmetes o l'embrió i sí que es transmet a tota la descendència, per sempre.",
          ae: "La somàtica modifica cèl·lules del cos d'una persona ja nascuda —per exemple, les de la medul·la per tractar una malaltia de la sang—: l'efecte s'acaba amb aquella persona i no passa als fills. La germinal modifica gàmetes o embrions, de manera que el canvi és a totes les cèl·lules del nou individu i es transmet a la seva descendència indefinidament. El debat no és el mateix per dos motius: primer, qui rep el canvi germinal no pot donar-hi consentiment, ni ell ni cap de les generacions següents; i segon, un efecte no previst esdevé irreversible i es propaga a la població. A més cal separar les dues preguntes: què es pot fer és una pregunta de ciència, i què s'hauria de fer és una decisió de valors que la ciència sola no respon.",
        },
        aeWhy: "L'AE dona els dos arguments que fan diferent el cas germinal (consentiment i irreversibilitat) i separa explícitament la pregunta científica de la de valors, que és el criteri de l'OA4.",
        must: [
          "Has definit bé les dues modalitats.",
          "Has dit que la germinal es transmet a la descendència.",
          "Has parlat del consentiment o de la irreversibilitat.",
          "Has separat «què es pot fer» de «què s'hauria de fer»."
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
