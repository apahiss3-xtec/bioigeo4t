export const sa3s1 = {
  id: "s1",
  saId: "sa3",
  title: "Reescriure la vida?",
  sessionNumber: 1,
  biome: "sa3",
  duration: "2h",
  engageImage: "/images/sa3-s1-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "El 2018, a la Xina, un científic va anunciar que havien nascut dues bebès a qui havia MODIFICAT un gen abans de néixer, per intentar fer-les resistents al VIH. No va canviar la seva alimentació ni els va donar cap medicament: va reescriure una part del seu ADN, la molècula que porta les instruccions de com és cada ésser viu. El món científic s'hi va tirar a sobre. Com pot un canvi en una molècula que no es veu ni al microscopi normal canviar una persona sencera? I si es pot fer... s'hauria de fer?",
  engageQuestion: "Dins de cada cèl·lula teva hi ha un missatge escrit amb només quatre lletres —A, T, G, C— que diu com ets. Si algú en canvia una sola lletra, què pot passar? I qui hauria de decidir si es fa?",
  engageContext: "Avui NO memoritzareu res. Sou un comitè d'assessorament: llegireu el cas real dels «bebès editats», us farà preguntes de dificultat creixent (des de «què diu la notícia» fins a «hauríem de permetre-ho?») i us posicionareu. Al final de la sessió tindreu una primera visió de com el codi de l'ADN es converteix en característiques d'un ésser viu, i quin dilema ètic obre poder-lo reescriure.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Explico, amb les meves paraules i a partir del cas, la idea que l'ADN és un missatge de quatre lletres que es converteix en proteïnes i, per tant, en característiques d'un organisme.",
      "Argumento per què un canvi molt petit en el codi (una lletra) pot tenir un efecte gran en un ésser viu, distingint el que sé del que només suposo.",
      "Valoro críticament una notícia sobre edició genètica: qui la signa, quina intenció té i què es podria verificar, i defenso una postura pròpia raonada sobre si s'hauria de permetre.",
      "Distingeixo entre «es POT fer» (pregunta científica) i «s'HAURIA de fer» (pregunta ètica), i evito tant la tecnofòbia com la tecnofília en el meu argument."
    ],
    B: [
      "Explico amb les meves paraules que l'ADN porta la informació (en quatre lletres) per fabricar proteïnes, i que les proteïnes fan que un organisme sigui com és.",
      "Dic per què canviar una lletra de l'ADN pot canviar una característica d'un ésser viu.",
      "Miro una notícia sobre edició genètica i responc: qui l'ha escrita? per què? em puc refiar-ne? amb l'ajuda d'una llista de comprovació.",
      "Diferencio la pregunta «es pot fer?» de la pregunta «s'hauria de fer?» i dono la meva opinió amb almenys un argument."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — SA3 ja és més avançada dins el 1r trimestre; la bastida baixa un esglaó respecte SA1-SA2.
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Per respondre les preguntes de la notícia, ves per ordre de dificultat: primer les LITERALS (la resposta és al text: busca-la i copia-la amb les teves paraules), després les INFERENCIALS (no ho diu directament, però es dedueix), després les AVALUATIVES (què en penses i per què) i finalment les ÈTIQUES (què estaria bé o malament fer). No barregis nivells: una pregunta literal no es respon amb una opinió.",
      challenge:
        "Redacta les teves respostes com UN SOL text amb sentit (no una llista), enllaçant les idees amb connectors (d'altra banda, tot i així, a més a més, en conseqüència…). Acaba amb la teva postura sobre el cas i la millor objecció que li faria algú que pensés el contrari."
    },
    "2": {
      scaffold:
        "Queda't amb la cadena bàsica: ADN (les instruccions, en 4 lletres) → ARN (una còpia del missatge) → proteïna (la peça que fa la feina) → característica de l'organisme. Un GEN és un tros d'aquest missatge que porta les instruccions per a UNA proteïna. Encara no cal que sàpigues el detall de cada pas; això ho treballaràs a les properes sessions.",
      challenge:
        "Amb les teves paraules, explica per què diem que l'ADN és «informació» i no una peça que treballi directament. Fes servir una comparació teva (una recepta, un pla d'obra, un codi…) i digues on encaixa cada part: qui és la recepta i qui el plat (pista: la cèl·lula fa de «cuiner»)."
    },
    "3": {
      scaffold:
        "Pensa-ho així: si canvies una lletra d'una recepta («posa 2 g de sal» → «posa 2 kg de sal»), el plat surt malament encara que hagis canviat poquíssim. A l'ADN passa igual: canviar una lletra pot fer que la proteïna surti diferent, o que no funcioni. A aquest canvi de lletres l'anomenem MUTACIÓ.",
      challenge:
        "Al cas dels bebès editats es va tocar un gen per intentar bloquejar l'entrada del VIH. Explica, amb la cadena gen → proteïna → característica, com un canvi al gen podria canviar una característica de la cèl·lula. Quina part de la teva explicació saps segur i quina és una suposició?"
    },
    "4": {
      scaffold:
        "«Es POT fer» és una pregunta de ciència (¿la tècnica funciona i és segura?). «S'HAURIA de fer» és una pregunta d'ètica (¿és correcte, encara que es pugui?). Tecnofòbia = rebutjar una tecnologia només perquè és nova. Tecnofília = acceptar-la només perquè és nova. Cap de les dues raona: totes dues decideixen abans de mirar les proves i les conseqüències.",
      challenge:
        "Escriu la teva postura sobre editar l'ADN d'embrions humans separant clarament l'argument científic (es pot fer amb prou seguretat?) de l'argument ètic (s'hauria de fer?). Detecta si algun argument teu o d'un company és pura tecnofòbia o tecnofília, i corregeix-lo."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de llegir res, posem sobre la taula el que ja pensem. No es corregeix: ho compararàs al final de la SA.",
    prompts: [
      {
        kind: "write",
        text: "Has sentit les paraules «ADN» i «gen». Què creus que són i on són, dins del teu cos?",
        starter: "Crec que l'ADN és… i que un gen és…"
      },
      {
        kind: "write",
        text: "Creus que un canvi molt petit dins d'una cèl·lula pot canviar com és una persona sencera? Per què sí o per què no?",
        starter: "Crec que… perquè…"
      }
    ]
  },

  // ── EXPLORA (ABP · estudi de cas / posicionament) ─────────
  exploreActivity: {
    what: "Feu de comitè d'assessorament científic. Llegiu el cas real dels «bebès editats» (2018) i responeu, en equip, una escala de preguntes que va de les més fàcils (què diu la notícia) a les més difícils (hauríem de permetre-ho?). Després us posicioneu: permetre-ho, prohibir-ho o permetre-ho amb condicions, i per què.",
    who: { mode: "grup", label: "Equips de 3-4 (comitè)" },
    time: 45,
    note: "La gràcia NO és encertar una resposta, sinó raonar: cada pregunta puja de dificultat. Haureu de defensar la vostra postura davant d'un altre equip que potser pensa diferent."
  },
  exploreInstructions: [
    "Llegiu el cas dels «bebès editats» que teniu a la fitxa (qui, què, quan, per a què)",
    "Responeu les preguntes per ordre: literals → inferencials → avaluatives → ètiques (no barregeu nivells)",
    "Poseu-vos d'acord en una postura d'equip: permetre / prohibir / permetre amb condicions, i almenys dos motius",
    "Prepareu-vos per defensar-la davant d'un altre equip i per escoltar la seva millor objecció"
  ],
  exploreDuration: "45 min",
  appSrc: null,
  exploreNote: "Indagació ètica i epistèmica: no hi ha una única resposta correcta, però sí arguments millors i pitjors. La demostració a l'aula és defensar la postura en veu alta i respondre l'objecció de l'altre equip amb un argument, no amb un «perquè sí».",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "L'ADN és un ==missatge de quatre lletres==",
      text: "Dins del ==nucli|p== de cada cèl·lula hi ha l'==ADN==: una molècula molt llarga escrita amb només quatre «lletres» (les bases ==A, T, G, C==). L'ordre d'aquestes lletres és informació, com l'ordre de les lletres d'aquest text. Un ==gen== és un tros d'aquest missatge: el fragment que porta les instruccions per fabricar ==una proteïna==.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Del ==codi== a la característica: el camí gen → proteïna",
      text: "Les instruccions de l'ADN es copien a una molècula intermèdia, l'==ARN|g==, i amb aquesta còpia la cèl·lula fabrica una ==proteïna|b==. Les proteïnes són les peces que FAN la feina (color dels ulls, defenses, digestió…). Per això el camí és: ==ADN → ARN → proteïna → característica==. Aquesta és la idea general; el detall de cada pas el veuràs a les properes sessions.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Canviar una lletra: què és una ==mutació== i què fa CRISPR",
      text: "Si es canvia, s'afegeix o es treu una lletra de l'ADN, tenim una ==mutació==: la proteïna pot sortir diferent, o deixar de funcionar. La tècnica ==CRISPR|r== és unes «tisores» moleculars que permeten ==tallar i editar== un tros concret de l'ADN a voluntat. Al cas de 2018 es va editar un gen per intentar bloquejar l'entrada del virus del VIH a les cèl·lules.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "«Es pot fer» no és «s'ha de fer»: ==decidir amb criteri==",
      text: "Que una cosa es pugui fer (pregunta ==científica==) no vol dir que s'hagi de fer (pregunta ==ètica==). Davant d'una tecnologia nova cal fugir de dos extrems: la ==tecnofòbia== (rebutjar-la només perquè és nova) i la ==tecnofília== (acceptar-la només perquè és nova). Les dues decideixen ABANS de mirar les proves i les conseqüències. I abans de fiar-nos d'una notícia, cal preguntar-nos ==qui la signa, amb quina intenció i si es pot verificar==.",
      type: "epistemic",
      badge: "🧭 Pensar amb criteri"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: false, title: "Del codi a la característica", src: "/images/sa3-s1-dogma.svg", note: "El camí general de la informació genètica: l'ordre de les lletres de l'ADN es copia a l'ARN i serveix per fabricar una proteïna, que dona una característica a l'organisme." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa3-s1-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: torna a la teva postura de l'apartat 1 i, ara que ja tens la visió gen → proteïna → característica, reescriu-la millorada, separant l'argument científic de l'ètic.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S1 — Reescriure la vida?",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "10 min",
        phase: "engage",
        instruction: "Omple l'apartat 0: què creus que són l'ADN i un gen, i si un canvi petit pot canviar un ésser viu. No es corregeix; ho compararàs al final de la SA.",
        hints: []
      },
      {
        apartat: "1",
        title: "Comitè: llegeix el cas i posiciona't",
        time: "45 min",
        phase: "explore",
        instruction: "Llegeix el cas dels «bebès editats» i respon les preguntes per ordre de dificultat (literals → inferencials → avaluatives → ètiques). Acorda amb l'equip una postura i dos motius.",
        hints: [
          "Les preguntes literals tenen la resposta AL text; les ètiques no: demanen què estaria bé o malament fer.",
          "Una bona postura admet la millor objecció del bàndol contrari abans de respondre-la."
        ]
      },
      {
        apartat: "2",
        title: "L'ADN, els gens i el camí a la proteïna",
        time: "25 min",
        phase: "explica",
        instruction: "Amb la Fig.1, completa el camí ADN → ARN → proteïna → característica i explica què és un gen. Fes servir una comparació teva (recepta, codi, pla…).",
        hints: [
          "Un gen és el tros del missatge que porta les instruccions per a UNA proteïna.",
          "L'ADN és informació (la recepta), no la peça que treballa (el plat)."
        ]
      },
      {
        apartat: "3",
        title: "Quan canvia una lletra: mutació i CRISPR",
        time: "20 min",
        phase: "explica",
        instruction: "Explica què és una mutació i com un canvi al gen pot canviar una característica. Digues què fa CRISPR en el cas dels bebès editats.",
        hints: [
          "Mutació = canviar, afegir o treure lletres de l'ADN.",
          "CRISPR són «tisores» que tallen i editen un tros concret de l'ADN."
        ]
      },
      {
        apartat: "4",
        title: "Es pot vs s'ha de fer: la teva postura",
        time: "20 min",
        phase: "elabora",
        instruction: "Reescriu la teva postura de l'apartat 1 separant l'argument científic (es pot fer amb seguretat?) de l'ètic (s'hauria de fer?). Detecta si hi ha tecnofòbia o tecnofília i corregeix-ho.",
        hints: [
          "«Es pot» és ciència; «s'ha de» és ètica: no els barregis.",
          "Rebutjar o acceptar només «perquè és nou» no és un argument."
        ]
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Explica amb les teves paraules el camí que va des de l'ADN fins a una característica d'un ésser viu. Fes servir les paraules ADN, gen i proteïna.",
      hint: "Recorda la cadena: ADN → ARN → proteïna → característica."
    },
    {
      id: "q2",
      type: "multiple",
      text: "Un company diu: «Si es pot editar l'ADN d'un embrió, ja n'hi ha prou raó per fer-ho sempre». Quin problema té aquest argument?",
      options: [
        "Confon «es pot fer» (ciència) amb «s'hauria de fer» (ètica)",
        "Cap: si es pot fer, s'ha de fer",
        "Que l'ADN no es pot editar de cap manera",
        "Que les proteïnes no tenen res a veure amb l'ADN"
      ],
      correct: 0
    },
    {
      id: "q3",
      type: "open",
      text: "T'arriba pel mòbil una notícia que diu que ja es poden «triar per catàleg» tots els gens d'un bebè. Abans de reenviar-la, quines dues preguntes et faries per saber si te'n pots refiar?",
      hint: "Pensa en qui la signa, quina intenció té i si es pot verificar amb altres fonts."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, hauries dit que un canvi dins d'una cèl·lula pot canviar una persona sencera? Ha canviat alguna cosa del que pensaves? I la teva opinió sobre editar l'ADN, s'ha mogut?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Busca UNA notícia recent sobre genètica, ADN o CRISPR (teràpies, aliments transgènics, tests d'ADN…) i porta-la (paper o captura). Anota-hi dues coses: qui la signa i amb quina intenció sembla escrita. La farem servir per practicar la fiabilitat de fonts i per preparar el debat CRISPR del final de la SA.",
    deadline: null,
    note: "Aprenentatge significatiu: connectar el codi de la vida amb una notícia real i preparar la defensa argumentada, no repetir definicions."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: què és l'ADN i un gen, el camí ADN → ARN → proteïna → característica, què és una mutació i què fa CRISPR",
    "Mira la Fig.1 (del codi a la característica) i intenta explicar-la amb una comparació teva",
    "Descarrega la fitxa S1, llegeix el cas dels «bebès editats» i respon les preguntes per ordre de dificultat",
    "Escriu la teva postura separant l'argument científic (es pot fer?) de l'ètic (s'hauria de fer?)",
    "A casa, busca una notícia sobre genètica i anota qui la signa i amb quina intenció; l'exit tiquet el trobaràs a classe o aquí (apartat EXIT TIQUET)"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA2", "OA4"],
  competencies: ["CE1", "CE2"],
  criterisAvaluacio: ["1.1", "1.2", "2.2"]
}
