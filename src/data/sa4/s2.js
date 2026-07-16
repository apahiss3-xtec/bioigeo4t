export const sa4s2 = {
  id: "s2",
  saId: "sa4",
  title: "Les lleis de Mendel com a eina de predicció",
  sessionNumber: 2,
  biome: "sa4",
  duration: "2h",
  engageImage: "/images/sa4-s2-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Un consell genètic rep una parella. Tots dos són portadors sans d'una malaltia recessiva (Aa) i pregunten una cosa molt concreta: «Si tenim fills, quina és la probabilitat que un tingui la malaltia?» El metge no té una bola de vidre, però dibuixa un quadre de quatre caselles i respon amb un número. Com pot preveure una proporció de fills sense conèixer el futur? I si té raó, per què hi ha parelles de portadors que tenen quatre fills i cap malalt? El repte d'avui és entendre com Mendel va convertir l'herència en una cosa que es pot PREDIR, i alhora per què la predicció és una tendència, no una garantia per a cada fill.",
  engageQuestion: "Es pot preveure la proporció de fills que tindran un caràcter abans que neixin? Si el quadre de Punnett diu «3 de cada 4», per què una família concreta pot no complir-ho exactament?",
  engageContext: "A S1 vas aprendre el vocabulari (al·lel, genotip, fenotip, portador) i a llegir un pedigrí. Avui faràs un pas més: aprendràs a PREDIR. Primer simularàs l'herència tirant monedes (l'atzar de cada gàmeta), formularàs una hipòtesi amb un número esperat i el compararàs amb el que observes. Després formalitzaràs les lleis de Mendel i el quadre de Punnett com a eina per calcular proporcions. Faràs servir el caràcter del teu projecte Heredity ID per fer la teva pròpia predicció.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Formulo una hipòtesi amb direcció (proporció esperada) abans de simular, i argumento amb la llei dels grans nombres per què l'observat s'acosta a l'esperat només amb moltes tirades.",
      "Construeixo i interpreto quadres de Punnett per predir proporcions genotípiques i fenotípiques en creuaments monohíbrids, i els aplico al caràcter del meu projecte Heredity ID.",
      "Distingeixo amb precisió l'atzar de cada cas concret de la tendència estadística del conjunt, i explico per què una família petita pot desviar-se de la proporció esperada.",
      "Resolc problemes de genètica raonant del fenotip al genotip i a l'inrevés, justificant cada pas i identificant quan una dada NO permet decidir el genotip amb seguretat."
    ],
    B: [
      "Escric la proporció que espero abans de tirar les monedes, faig les tirades i comparo el que surt amb el que esperava.",
      "Ompliu un quadre de Punnett d'un creuament Aa × Aa i dic quants surten dominants i quants recessius (3:1).",
      "Explico amb les meves paraules per què el quadre diu «3 de cada 4» però una família de 4 fills pot no tenir exactament 3 i 1.",
      "Resolc problemes senzills de genètica seguint els passos: escriure genotips dels pares, fer el quadre, comptar les caselles."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — SA4 és al 2n trimestre; es manté la bastida a un nivell mitjà (com S1 i SA3).
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Abans de tirar cap moneda, escriu QUÈ esperes. Pista: cada progenitor Aa passa A o a al 50% (cara/creu). Si ho penses, de cada 4 combinacions n'hi ha 3 amb almenys una A (es veuen dominants) i 1 amb aa (recessiu). Escriu «espero un 75% dominant i un 25% recessiu, aproximadament». Aquesta és la teva hipòtesi amb direcció: un número, no un «depèn».",
      challenge:
        "Formula la teva hipòtesi amb un número exacte i afegeix una predicció de segon nivell: què creus que passarà a la teva proporció observada quan passis de 10 a 40 tirades? Justifica-ho amb la idea d'atzar vs tendència ABANS de fer-ho."
    },
    "2": {
      scaffold:
        "El quadre de Punnett és una taula de 2×2. A dalt hi poses els gàmetes possibles del pare (A i a); a l'esquerra, els de la mare (A i a). Cada casella és la combinació: la casella és el genotip del fill. Omple les quatre i després compta: quantes tenen almenys una majúscula (dominant) i quantes són aa (recessiu).",
      challenge:
        "Fes el quadre del teu caràcter Heredity ID suposant que tots dos progenitors són heterozigots. Després planteja't: i si UN progenitor fos homozigot dominant (AA)? Fes el segon quadre i explica com canvia la proporció de fills afectats i per què."
    },
    "3": {
      scaffold:
        "Recorda dos noms: la 1a llei de Mendel (uniformitat) diu que si creues dos homozigots purs diferents (AA × aa), TOTS els fills de la primera generació surten iguals (Aa, es veuen dominants). La 2a llei (segregació) diu que aquests dos al·lels es reparteixen a l'atzar als gàmetes, i per això a la generació següent reapareix el recessiu en proporció 3:1. Associa cada llei a una de les dues generacions.",
      challenge:
        "Explica amb les teves paraules per què la 2a llei de Mendel és, en el fons, el que fas amb les monedes: quina part del procés real (formació de gàmetes) representa cada tirada, i per què l'atzar de la meiosi és el que fa que el recessiu pugui tornar a aparèixer."
    },
    "4": {
      scaffold:
        "Per resoldre un problema de genètica, segueix sempre l'ordre: (1) tradueix els fenotips a genotips possibles (recorda: el recessiu que es veu és segur aa; el dominant que es veu pot ser AA o Aa); (2) escriu el creuament; (3) fes el quadre de Punnett; (4) compta les caselles i escriu la proporció; (5) torna a la pregunta i respon amb un número o una probabilitat.",
      challenge:
        "Resol el problema invers: et donen que d'una parella han nascut fills en proporció aproximada 3:1 (dominant:recessiu). Dedueix el genotip més probable dels dos pares i justifica per què cap altre creuament donaria aquesta proporció. Indica quina dada et faria dubtar."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Recuperem el fil de S1. Ja saps què és un portador i com llegir un pedigrí. Abans de començar a predir, posa sobre la taula la teva intuïció sobre l'atzar.",
    prompts: [
      {
        kind: "write",
        text: "Si dos portadors (Aa) tenen QUATRE fills, quants creus que tindran el tret recessiu? És segur que en surti exactament aquest nombre?",
        starter: "Crec que en tindran… i penso que (és / no és) segur perquè…"
      },
      {
        kind: "write",
        text: "Quan tires una moneda 4 vegades, sempre surten 2 cares i 2 creus? Què té a veure això amb els fills d'una parella?",
        starter: "Crec que… i s'assembla als fills perquè…"
      }
    ]
  },

  // ── EXPLORA (ABP · simulació experimental) ─────────
  exploreActivity: {
    what: "En equip, simuleu l'herència d'un creuament Aa × Aa amb dues monedes: cada moneda és un progenitor (cara = passa A, creu = passa a). Abans de començar, cada equip escriu la proporció que ESPERA (hipòtesi amb direcció). Feu una tanda curta (10 tirades) i una de llarga (40 tirades acumulades a tot l'equip), apunteu els genotips que surten i compareu l'observat amb l'esperat. Al final, apliqueu el quadre de Punnett al caràcter del vostre projecte Heredity ID.",
    who: { mode: "grup", label: "Equips de 3 (consell genètic)" },
    time: 45,
    note: "Indagació: la clau no és que surti exactament 3:1, sinó ADONAR-SE que amb poques tirades la proporció balla i amb moltes s'acosta a l'esperat. Aquesta és la diferència entre l'atzar de cada fill i la tendència del conjunt."
  },
  exploreInstructions: [
    "Escriviu la vostra HIPÒTESI amb un número: quina proporció de dominants:recessius espereu del creuament Aa × Aa, i per què",
    "Tireu dues monedes alhora = 1 fill; apunteu el genotip (AA, Aa o aa). Feu 10 tirades i calculeu la proporció observada",
    "Ajunteu les tirades de tot l'equip fins a 40 i torneu a calcular la proporció: s'acosta més a l'esperat o menys?",
    "Apliqueu el quadre de Punnett al caràcter del vostre Heredity ID i escriviu la predicció per a una família de portadors"
  ],
  exploreDuration: "45 min",
  appSrc: null,
  exploreNote: "Demostració a l'aula: cada equip defensa davant d'un altre per què la seva proporció observada NO és exactament 3:1 però s'hi acosta, fent servir la idea de tendència. Qui té més tirades, més s'hi acosta: és una prova experimental de la llei, no un error.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Cada ==gàmeta== és una ==moneda a l'aire==",
      text: "Un progenitor ==Aa== té dos al·lels, però cada gàmeta (òvul o espermatozoide) en porta ==només un==. Quin? Ho decideix l'atzar de la meiosi, com una ==moneda==: 50% A, 50% a. Quan s'ajunten un gàmeta del pare i un de la mare, el fill rep una combinació. Tirar dues monedes (una per progenitor) ==simula== exactament aquest atzar.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "El ==quadre de Punnett==: comptar totes les combinacions",
      text: "El ==quadre de Punnett== és una taula que posa els gàmetes del pare a dalt (A, a) i els de la mare a l'esquerra (A, a). Cada casella és un fill possible. Per a ==Aa × Aa== surten ==AA, Aa, Aa, aa==: genotips ==1:2:1== i fenotips ==3 dominants : 1 recessiu==. És una eina de ==predicció==: dóna la proporció esperada quan hi ha molts descendents.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Les ==dues lleis de Mendel==",
      text: "==1a llei (uniformitat):== si creues dos homozigots purs diferents (AA × aa), tota la ==primera generació== surt igual (Aa, dominant). ==2a llei (segregació):== els dos al·lels d'un individu se separen a l'atzar als gàmetes; per això, en creuar dos heterozigots, el recessiu ==reapareix== en proporció ==3:1==. La 2a llei és, de fet, el que fas amb les monedes.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "1",
      heading: "==Atzar== de cada fill vs ==tendència== del conjunt",
      text: "El quadre diu «3 de cada 4», però ==no== garanteix que en una família de 4 fills n'hi hagi exactament 3 i 1: cada fill és una ==tirada independent==. Amb ==poques== tirades la proporció balla molt; amb ==moltes== s'acosta a l'esperat (llei dels grans nombres). Confondre la ==tendència== amb una garantia per a cada cas és un error típic: la predicció és ==probabilística==, no una promesa.",
      type: "epistemic",
      badge: "🎲 Atzar vs tendència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: false, title: "Quadre de Punnett d'un creuament Aa × Aa", src: "/images/sa4-s2-punnett.svg", note: "Les quatre caselles del creuament de dos portadors: 1 AA, 2 Aa, 1 aa. Genotips 1:2:1 i fenotips 3:1. El quadre dóna la tendència esperada, no el resultat d'un fill concret." },
    { id: "Fig.2", apartat: "1", before: false, title: "Simular l'herència amb monedes: atzar i tendència", src: "/images/sa4-s2-monedes.svg", note: "Cada moneda és un progenitor Aa (cara = passa A, creu = passa a); dues monedes = un fill. El gràfic de la dreta mostra com la proporció observada de fenotip dominant s'acosta al 75% esperat a mesura que augmenten les tirades." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa4-s2-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: torna a la pregunta del consell genètic de l'apartat 1 i respon-la ara amb un número (la probabilitat que un fill tingui la malaltia) i una frase que expliqui per què és una probabilitat i no una certesa.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S2 — Les lleis de Mendel com a eina de predicció",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "8 min",
        phase: "engage",
        instruction: "Omple l'apartat 0: quants fills afectats esperes de dos portadors i si és segur; i si 4 tirades de moneda donen sempre 2 i 2. No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "Simulació amb monedes",
        time: "35 min",
        phase: "explore",
        instruction: "Escriu la teva hipòtesi amb un número, tira les monedes (10 i després 40 tirades) i compara l'observat amb l'esperat. Fixa't en com canvia amb més tirades.",
        hints: [
          "Cada moneda és un progenitor Aa: cara = A, creu = a.",
          "Amb poques tirades la proporció balla; amb moltes s'acosta al 75% dominant."
        ]
      },
      {
        apartat: "2",
        title: "El quadre de Punnett",
        time: "30 min",
        phase: "explica",
        instruction: "Omple el quadre de Punnett d'un creuament Aa × Aa, compta les caselles i escriu la proporció de genotips (1:2:1) i de fenotips (3:1). Després aplica'l al teu caràcter.",
        hints: [
          "Gàmetes del pare a dalt (A, a), de la mare a l'esquerra (A, a).",
          "3 caselles tenen almenys una A (dominant); només aa és recessiu."
        ]
      },
      {
        apartat: "3",
        title: "Les lleis de Mendel",
        time: "20 min",
        phase: "elabora",
        instruction: "Associa la 1a llei (uniformitat de la F1) i la 2a llei (segregació, 3:1) a cada generació, i relaciona la 2a llei amb la simulació de monedes.",
        hints: [
          "1a llei: AA × aa → tots Aa iguals.",
          "2a llei: els al·lels se separen a l'atzar als gàmetes = les monedes."
        ]
      },
      {
        apartat: "4",
        title: "Problemes de predicció",
        time: "17 min",
        phase: "elabora",
        instruction: "Resol els problemes graduats seguint els passos: genotips dels pares → quadre → comptar → respondre amb un número.",
        hints: [
          "El recessiu que es veu és segur aa; el dominant pot ser AA o Aa.",
          "Torna sempre a la pregunta i respon amb una proporció o probabilitat."
        ]
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "multiple",
      text: "En un creuament Aa × Aa, quina és la proporció de FENOTIPS esperada entre els descendents?",
      options: [
        "3 dominants : 1 recessiu",
        "1 dominant : 1 recessiu",
        "Tots dominants",
        "1 dominant : 2 recessius : 1 dominant"
      ],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "Una parella de portadors (Aa) té quatre fills i cap té la malaltia recessiva. Un company diu: «El quadre de Punnett estava malament, hauria d'haver-hi un malalt». Té raó? Explica-ho amb la idea d'atzar i tendència.",
      hint: "El quadre dóna la tendència amb molts fills; cada fill és una tirada independent i 4 fills són pocs casos."
    },
    {
      id: "q3",
      type: "open",
      text: "Explica per què tirar dues monedes serveix per simular l'herència d'un creuament Aa × Aa. Què representa cada moneda i què representa cada tirada?",
      hint: "Cada moneda és un progenitor Aa (cara A, creu a); cada tirada de dues monedes és un fill possible."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, hauries dit que es pot «predir» quants fills tindran un caràcter? Què t'ha sorprès més: que es pugui calcular una proporció, o que la proporció no es compleixi exactament en famílies petites? Què et falta encara per resoldre problemes tu sol?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Tanda de problemes graduats de genètica (creuaments monohíbrids): per a cada un, escriu els genotips dels pares, fes el quadre de Punnett i respon amb la proporció o probabilitat demanada. Inclou un problema amb el caràcter del teu propi projecte Heredity ID: fes la predicció d'una família de portadors i deixa-la anotada per contrastar-la amb les dades reals que has recollit.",
    deadline: null,
    note: "Aprenentatge significatiu: apliques la predicció al teu caràcter real i prepares el contrast dades observades / predicció esperada per al pòster final."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: gàmeta com a moneda, quadre de Punnett, les dues lleis de Mendel i atzar vs tendència",
    "Estudia la Fig.1 (quadre de Punnett Aa × Aa → 1:2:1 i 3:1) i la Fig.2 (com les monedes simulen l'atzar dels gàmetes)",
    "Descarrega la fitxa S2 i completa el quadre de Punnett de l'apartat 2 i els problemes de l'apartat 4",
    "Fes la simulació a casa amb dues monedes: 40 tirades, apunta els genotips i comprova que t'acostes al 75% dominant",
    "L'exit tiquet el trobaràs a classe o aquí (apartat EXIT TIQUET); porta la tanda de problemes resolta"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA2"],
  competencies: ["CE1", "CE4"],
  criterisAvaluacio: ["1.2", "4.1", "4.2"]
}
