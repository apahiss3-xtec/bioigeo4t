export const sa3s2 = {
  id: "s2",
  saId: "sa3",
  title: "Com trauries l'ADN d'una cèl·lula?",
  sessionNumber: 2,
  biome: "sa3",
  duration: "2h",
  engageImage: "/images/sa3-s2-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Sobre la taula hi ha una mostra biològica (maduixa, tomàquet o cèl·lules de la teva galta) i un munt de material de cuina i de laboratori: sal, sabó, aigua, alcohol ben fred, un colador, un pal de fusta… però CAP instrucció. L'ADN, la molècula que va provocar el debat dels «bebès editats» de la sessió passada, és aquí dins, amagat dins del nucli de cada cèl·lula. El repte: treure'l a fora i fer-lo visible a ull nu. Ningú us dirà com. Ho haureu de deduir vosaltres, justificant què fa cada material.",
  engageQuestion: "Si l'ADN és tan petit que no es veu ni amb el microscopi de classe, com pot ser que amb sal, sabó i alcohol el puguem arribar a veure com una bavosa blanca amb els nostres ulls? Què fa cada ingredient?",
  engageContext: "Avui NO se us dona el protocol: el dissenyeu vosaltres. Sou un equip de laboratori que ha de deduir, pas a pas, com extreure l'ADN raonant quin obstacle resol cada material. Després veureu per què funciona: com és l'ADN per dins (les quatre lletres, la doble cadena) i per què precipita en alcohol fred. Acabareu amb una massa blanca a la mà… que haureu d'aprendre a NO confondre amb «haver vist l'ADN».",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Dissenyo un protocol d'extracció d'ADN justificant la funció de cada material a partir de l'obstacle que resol (teixit compacte, membranes de greix, ADN dissolt i invisible), i defenso l'ordre dels passos.",
      "Explico l'estructura de l'ADN (doble cadena, quatre bases A-T / G-C aparellades per complementarietat) i relaciono aquesta estructura amb la seva funció de guardar informació de manera fiable.",
      "Argumento per què l'ADN precipita en alcohol fred (deixa de ser soluble) i dissenyo un experiment amb control per comprovar si un dels reactius és realment necessari.",
      "Distingeixo amb precisió què he OBSERVAT (una massa blanca) del que INFEREIXO (que és ADN), i explico per què aquesta diferència és clau en ciència."
    ],
    B: [
      "Segueixo, amb ajuda d'una taula, el raonament que relaciona cada material amb el que fa (trencar el teixit, obrir les membranes, agrupar i fer visible l'ADN) i ordeno els passos del protocol.",
      "Dic que l'ADN té dues cadenes i quatre lletres (A, T, G, C) que s'aparellen sempre igual (A amb T, G amb C), i que aquest ordre és la informació.",
      "Explico, amb la idea de solubilitat, per què l'ADN es fa visible quan hi afegim alcohol fred.",
      "Diferencio el que he vist (una massa blanca) del que suposo (que és ADN)."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — coherent amb SA3·S1; indagació guiada tirant a oberta (l'alumnat dedueix el mètode).
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "No comencis pel «què fem primer». Comença per l'OBSTACLE: per què l'ADN no es veu? N'hi ha tres. (1) És dins de cèl·lules i teixit compacte. (2) Està tancat per membranes fetes de greix (la de la cèl·lula i la del nucli). (3) Un cop fora, queda dissolt a l'aigua i segueix invisible. Per a cada obstacle, busca a la llista de materials quin el pot resoldre i escriu PER QUÈ. Quan tinguis les tres funcions, l'ordre dels passos surt gairebé sol.",
      challenge:
        "Dissenya el protocol complet en 5 passos SENSE la taula d'ajuda, escrivint al costat de cada pas la frase «aquest pas serveix per…». Justifica per què l'ordre no es pot alterar (per exemple: per què l'alcohol va l'últim i no el primer?). Afegeix una predicció: quin dels passos creus que és el més decisiu per veure l'ADN, i per què."
    },
    "2": {
      scaffold:
        "Queda't amb la imatge de l'escala de corda retorçada (la doble hèlix): dues cadenes llargues enrotllades. A cada esglaó, dues «lletres» (bases) es donen la mà SEMPRE de la mateixa manera: A amb T, i G amb C. Això es diu COMPLEMENTARIETAT. Si en una cadena hi diu A-G-C, a l'altra hi ha d'haver T-C-G. L'ordre de les lletres és el missatge; la doble cadena serveix perquè el missatge estigui per duplicat i es pugui copiar sense perdre'l.",
      challenge:
        "Si l'ADN fos d'una sola cadena en lloc de dues, quin avantatge es perdria? Relaciona la complementarietat (A-T, G-C) amb el fet que la cèl·lula pugui COPIAR l'ADN abans de dividir-se (recorda la mitosi de SA2). Escriu la cadena complementària de A-T-G-C-C-A-G i explica com l'has trobada."
    },
    "3": {
      scaffold:
        "«Soluble» vol dir que una cosa es dissol i desapareix de la vista, com el sucre a l'aigua. L'ADN és soluble en aigua: per això, quan surt de la cèl·lula, no el veus. Però l'ADN NO és soluble en alcohol fred: quan l'alcohol el toca, l'ADN es torna a ajuntar i es fa sòlid (PRECIPITA), i aleshores sí que el veus. Per això l'alcohol va sempre l'últim: primer alliberes l'ADN, i al final el fas aparèixer.",
      challenge:
        "Explica la diferència entre «dissoldre's» i «precipitar» amb un exemple teu que no sigui l'ADN. Després, aplica-ho: per què creus que l'alcohol ha d'estar FRED i no calent? (Pista: la temperatura afecta com de bé es barregen les substàncies.) Formula-ho com una hipòtesi comprovable."
    },
    "4": {
      scaffold:
        "Per comprovar si el sabó és realment necessari, no cal saber-ho de memòria: es prova. Faries dos tubs iguals canviant NOMÉS una cosa: un AMB sabó i un SENSE sabó (aquesta és la variable independent, VI). Mesuraries en quin dels dos apareix més ADN (variable dependent, VD). Tota la resta igual. Un tub sense mostra biològica seria el CONTROL NEGATIU (ha de sortir buit; si hi apareix «ADN», és que t'has equivocat en alguna cosa).",
      challenge:
        "Dissenya sencer l'experiment «cal el sabó?»: escriu la pregunta amb la VI i la VD, la hipòtesi amb direcció («si… aleshores…»), el control negatiu i quantes rèpliques faries i per què. Després respon la pregunta epistèmica: has vist l'ADN o una massa blanca que dedueixes que és ADN? Quina prova addicional et convenceria que de veritat és ADN?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de tocar cap material, anota què esperes. No es corregeix: ho compararàs amb el que passi de veritat.",
    prompts: [
      {
        kind: "write",
        text: "Què vol dir exactament «extreure l'ADN»? Escriu amb les teves paraules què ha de passar perquè l'ADN es pugui arribar a veure.",
        starter: "Extreure l'ADN vol dir… i perquè es vegi ha de passar que…"
      },
      {
        kind: "write",
        text: "De tota la llista de materials (sal, sabó, aigua, alcohol fred, colador, pal…), quin creus que serà el més important per fer visible l'ADN, i per què?",
        starter: "Crec que el més important serà… perquè…"
      }
    ]
  },

  // ── EXPLORA (ABP · indagació: deduir el protocol) ─────────
  exploreActivity: {
    what: "Laboratori real d'extracció d'ADN, però AL REVÉS: primer heu de deduir el protocol. Amb la mostra i el material sobre la taula (i sense instruccions), relacioneu cada obstacle (per què l'ADN no es veu) amb el material que el resol i per què. Dissenyeu la seqüència, la poseu a prova i, si tot va bé, recolliu l'ADN amb el pal de fusta.",
    who: { mode: "grup", label: "Equips de 3-4 (laboratori)" },
    time: 55,
    note: "La gràcia NO és seguir una recepta, sinó JUSTIFICAR cada pas. Un equip que treu l'ADN però no sap dir per què funciona cada material no ha resolt el repte. La demostració a l'aula és explicar el vostre protocol raonat a un altre equip."
  },
  exploreInstructions: [
    "Llegiu el material disponible i identifiqueu els TRES obstacles: teixit compacte, membranes de greix, ADN dissolt i invisible",
    "Per a cada obstacle, trieu el material que el resol i escriviu PER QUÈ (empleneu la taula obstacle → material → mecanisme)",
    "Dissenyeu la seqüència de passos (triturar → obrir membranes → agrupar → colar → precipitar amb alcohol fred → recollir)",
    "Munteu l'experiment i comproveu-ho: apareix la massa blanca? Recolliu-la amb el pal de fusta",
    "Prepareu-vos per explicar a un altre equip QUÈ fa cada material i per què l'ordre no es pot canviar"
  ],
  exploreDuration: "55 min",
  appSrc: null,
  exploreNote: "Indagació guiada tirant a oberta (l'alumnat dedueix el mètode). Itinerari explorador: el docent dona la pregunta i el material, però el mètode el raoneu vosaltres. No es dona el protocol fet.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Per què l'ADN no es veu: ==tres obstacles==",
      text: "L'ADN és dins del ==nucli|p== de cada cèl·lula, i les cèl·lules formen un teixit compacte. Per fer-lo visible cal superar tres obstacles: (1) trencar el teixit i les cèl·lules (==triturar==); (2) obrir les ==membranes==, que estan fetes de ==greix==, amb ==sabó o detergent==, que dissol els greixos; (3) l'ADN, un cop fora, queda ==dissolt a l'aigua== i encara no es veu. La ==sal== ajuda a agrupar-lo neutralitzant les seves càrregues.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Com és l'ADN per dins: la ==doble cadena== i les quatre lletres",
      text: "L'ADN és com una ==escala de corda retorçada== (una ==doble hèlix==): dues cadenes llargues enrotllades. Els esglaons són parelles de ==bases== (les «lletres»): l'==A sempre s'aparella amb la T==, i la ==G sempre amb la C==. Això és la ==complementarietat==. L'ordre de les lletres és el missatge; tenir-lo per duplicat (dues cadenes) permet ==copiar-lo sense perdre'l== quan la cèl·lula es divideix.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Per què apareix: ==solubilitat i precipitació==",
      text: "L'ADN és ==soluble== en aigua (dissolt, invisible), però ==NO== és soluble en ==alcohol fred==. Quan hi afegim alcohol, l'ADN deixa de poder estar dissolt i es torna a ajuntar en una massa sòlida i blanca: ==precipita== i es fa visible. Per això l'alcohol va sempre l'==últim== pas: primer alliberem l'ADN i, al final, el fem aparèixer. L'alcohol ha d'estar fred perquè la precipitació sigui més neta.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "==Observar== no és ==inferir==: què has vist de veritat?",
      text: "Al final tens una ==massa blanca== a la mà. Però, l'has vist l'ADN? El que has ==observat== és una massa blanca; que ==sigui== ADN és una ==inferència== (ho dedueixes del que saps del procés). Distingir el que observem del que inferim és una de les regles del joc de la ciència. I si algú dubtés que és ADN, caldria una ==prova addicional==, no només mirar-ho.",
      type: "epistemic",
      badge: "🧭 Observar vs inferir"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: false, title: "L'ADN per dins: doble cadena i complementarietat", src: "/images/sa3-s2-adn-estructura.svg", note: "L'ADN com una escala retorçada de dues cadenes. Cada esglaó és una parella de bases que s'aparellen sempre igual: A amb T i G amb C (complementarietat). L'ordre de les lletres és la informació." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa3-s2-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: dissenya l'experiment «cal el sabó?» amb VI, VD, hipòtesi amb direcció i control negatiu, i respon a la pregunta clau: has vist l'ADN o una massa blanca que dedueixes que és ADN?",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S2 — Com trauries l'ADN d'una cèl·lula?",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "8 min",
        phase: "engage",
        instruction: "Omple l'apartat 0: què vol dir «extreure l'ADN» i quin material creus que serà el més important. No es corregeix; ho compararàs amb el que passi.",
        hints: []
      },
      {
        apartat: "1",
        title: "Laboratori: dedueix i dissenya el protocol",
        time: "55 min",
        phase: "explore",
        instruction: "Identifica els tres obstacles, empleneu la taula obstacle → material → per què, i dissenyeu la seqüència de passos. Munteu-ho i recolliu l'ADN.",
        hints: [
          "Comença per l'obstacle, no pel pas: què impedeix veure l'ADN? (teixit, membranes de greix, ADN dissolt)",
          "El sabó dissol greixos → obre les membranes. L'alcohol fred fa precipitar l'ADN → va l'últim."
        ]
      },
      {
        apartat: "2",
        title: "Com és l'ADN: doble cadena i complementarietat",
        time: "20 min",
        phase: "explica",
        instruction: "Amb la Fig.1, dibuixa/completa la doble cadena i les parelles de bases. Escriu la cadena complementària d'una seqüència donada (A-T sempre juntes, G-C sempre juntes).",
        hints: [
          "A s'aparella amb T; G s'aparella amb C. Sempre igual.",
          "L'ordre de les lletres és el missatge; dues cadenes = còpia de seguretat."
        ]
      },
      {
        apartat: "3",
        title: "Per què l'ADN es fa visible: solubilitat",
        time: "12 min",
        phase: "explica",
        instruction: "Explica per què l'ADN es veu quan hi afegeixes alcohol fred, fent servir les paraules «soluble» i «precipita». Digues per què l'alcohol va l'últim.",
        hints: [
          "L'ADN és soluble en aigua (invisible) però no en alcohol fred (precipita).",
          "Precipitar = deixar d'estar dissolt i tornar-se sòlid i visible."
        ]
      },
      {
        apartat: "4",
        title: "Cal el sabó? Dissenya-ho + observar vs inferir",
        time: "15 min",
        phase: "elabora",
        instruction: "Dissenya l'experiment per comprovar si el sabó és necessari (VI amb/sense sabó, VD, control negatiu). Respon: has vist l'ADN o una massa que dedueixes que ho és?",
        hints: [
          "Canvia NOMÉS una cosa (amb/sense sabó); la resta igual.",
          "Control negatiu = tub sense mostra: ha de sortir buit."
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
      text: "Per què fem servir sabó (detergent) en l'extracció d'ADN?",
      options: [
        "Perquè dissol el greix de les membranes i així s'obren les cèl·lules i el nucli",
        "Perquè fa precipitar l'ADN i el fa visible",
        "Perquè neteja el material i el desinfecta",
        "Perquè dissol l'ADN dins l'aigua"
      ],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "En una cadena d'ADN hi ha la seqüència A-T-G-C. Escriu la cadena complementària i explica quina regla has fet servir.",
      hint: "A s'aparella sempre amb T, i G sempre amb C."
    },
    {
      id: "q3",
      type: "open",
      text: "Després de l'experiment tens una massa blanca a la mà. Un company diu «hem vist l'ADN». Estàs d'acord amb com ho ha dit? Explica la diferència entre observar i inferir.",
      hint: "Què has vist exactament, i què has deduït que és?"
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Has dissenyat el protocol o t'ha costat arrencar sense instruccions? Quin material t'ha sorprès més que fos necessari? I ara que has tingut l'ADN a la mà, què creus que hi ha escrit, dins d'aquesta massa blanca?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Mira un vídeo curt sobre TRANSCRIPCIÓ i TRADUCCIÓ (com l'ADN es converteix en proteïna). No cal que ho entenguis tot: anota una cosa que t'hagi quedat clara i una pregunta. Ho farem servir per començar la propera sessió, on veurem el detall del camí ADN → ARN → proteïna.",
    deadline: null,
    note: "Aprenentatge significatiu: preparar la sessió següent connectant l'estructura de l'ADN (avui) amb com fabrica proteïnes (S3)."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: els tres obstacles per veure l'ADN, la doble cadena i la complementarietat (A-T, G-C), i per què l'ADN precipita en alcohol fred",
    "Mira la Fig.1 (l'ADN per dins) i practica escrivint la cadena complementària d'una seqüència",
    "Descarrega la fitxa S2 i intenta dissenyar el protocol tu sol/a, justificant què fa cada material",
    "Si pots, fes l'extracció a casa (maduixa + sal + sabó rentaplats + alcohol de farmàcia ben fred): és segur i visual",
    "Respon l'apartat 4: dissenya l'experiment «cal el sabó?» i pensa la diferència entre observar i inferir"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1"],
  competencies: ["CE1", "CE3"],
  criterisAvaluacio: ["1.1", "3.3"]
}
