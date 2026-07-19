export const sa4s5 = {
  id: "s5",
  saId: "sa4",
  title: "Congrés Heredity ID i prova de problemes",
  sessionNumber: 5,
  biome: "sa4",
  duration: "2h",
  engageImage: "/images/sa4-s5-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Avui es tanca el projecte Heredity ID. Durant tota la SA has investigat un caràcter hereditari real de la teva família, has recollit dades de tres generacions, has construït el pedigrí i has fet una hipòtesi sobre com s'hereta. Ara toca la part que la ciència no s'estalvia mai: comunicar-ho i defensar-ho davant d'altres. Muntareu un petit congrés científic: cada equip presenta el seu pòster, respon les preguntes dels companys i coavalua els altres pòsters amb la mateixa rúbrica que faríeu servir en un congrés de veritat. I com que en ciència no n'hi ha prou de dir «ho hem fet en equip», després faràs una prova individual de problemes de genètica per demostrar, tu sol/a, que saps predir i raonar una herència. El repte d'avui és doble: convèncer amb el teu pòster i resoldre com un/a genetista.",
  engageQuestion: "Què fa que un pòster científic sigui convincent i no només bonic? I com demostres que has entès de veritat l'herència: repetint definicions, o resolent un cas nou que no has vist mai?",
  engageContext: "Tanques la SA4 amb tot el que has après: el vocabulari (S1), predir amb Mendel i el quadre de Punnett (S2), els casos que Mendel no explica del tot (S3) i l'herència lligada al sexe i el consell genètic (S4). Avui ho poses tot junt: primer com a comunicador científic (el pòster i la seva defensa) i després com a solucionador de problemes (la prova). No s'estudia res nou; es demostra el que ja saps aplicant-ho a casos reals.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Presento i defenso el pòster Heredity ID amb vocabulari científic precís, connectant la pregunta de recerca, el pedigrí i la conclusió sobre el tipus d'herència, i responc amb rigor les preguntes crítiques dels companys.",
      "Coavaluo els pòsters d'altres equips amb la rúbrica de manera justificada, distingint la qualitat científica (correcció de la conclusió i del pedigrí) de la qualitat comunicativa (disseny i claredat).",
      "Resolc de manera autònoma problemes de genètica de tots els tipus treballats (autosòmic dominant/recessiu, lligat al X, al·lelisme múltiple ABO) deduint el model d'herència a partir d'un pedigrí i justificant amb genotips.",
      "Transfereixo el raonament a un sistema de determinació del sexe diferent del humà (ZW/ZZ) argumentant per què el patró de la descendència canvia."
    ],
    B: [
      "Presento el pòster Heredity ID explicant el caràcter estudiat, el pedigrí i la conclusió, amb ajuda del guió de defensa.",
      "Coavaluo un pòster amb la rúbrica marcant el nivell de cada criteri i escrivint un comentari de millora.",
      "Resolc problemes de genètica amb la bastida donada (notació i quadres de Punnett buits), separant fills i filles quan el caràcter va lligat al sexe.",
      "Dedueixo, amb els passos guiats, quin tipus d'herència segueix un caràcter a partir d'un pedigrí senzill."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — sessió de síntesi de SA4 (2n trim.); es manté bastida mitjana.
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Per defensar el pòster amb seguretat, segueix aquest guió: (1) Quin caràcter heu estudiat i per què és observable i categoritzable en dues varietats? (2) Com heu recollit les dades de les tres generacions i com heu construït el pedigrí? (3) Quina hipòtesi vau fer sobre com s'hereta? (4) Què diu el pedigrí: quin tipus d'herència sembla més probable i per què? (5) Confirmeu o refuteu la hipòtesi. Practica-ho en veu alta abans: el pòster és el suport, no el text que llegeixes.",
      challenge:
        "Prepara't per a les preguntes difícils que et poden fer els companys o el professor: «I si les dades fossin poques, la conclusió seria igual de segura?», «Com distingiries un caràcter autosòmic recessiu d'un de lligat al X només amb el pedigrí?», «El teu caràcter podria ser poligènic en lloc de mendelià simple? com ho sabries?». Anota una resposta breu per a cadascuna: defensar bé és preveure què et poden objectar."
    },
    "2": {
      scaffold:
        "La coavaluació amb rúbrica es fa per criteris, no per «m'agrada / no m'agrada». Per a cada pòster que avaluïs, mira criteri per criteri (introducció i pregunta, metodologia, resultats/pedigrí, conclusions genètiques, forma i presentació oral) i marca en quin nivell està (Expert / Avançat / Aprenent / Novell). Acompanya cada nota amb una frase concreta: què està bé i què milloraria. Una coavaluació útil és la que ajuda l'altre equip a millorar.",
      challenge:
        "El criteri amb més pes de la rúbrica és «conclusions genètiques» (determinar bé el tipus d'herència i justificar-ho amb el pedigrí). Quan coavaluïs, fixa't especialment si la conclusió de l'altre equip és realment compatible amb el seu pedigrí o si han «forçat» el resultat. Escriu, per a un dels pòsters, si canviaries la seva conclusió i per què."
    },
    "3": {
      scaffold:
        "Per decidir quin tipus d'herència segueix un caràcter a partir d'un pedigrí, fes-te aquestes preguntes en ordre: (1) El caràcter apareix en cada generació o «salta»? Si salta → probablement recessiu; si apareix sempre → probablement dominant. (2) Afecta per igual homes i dones o molt més els homes? Si afecta molt més els homes i «salta» per les dones → sospita de lligat al X recessiu. (3) Dos pares sense el caràcter poden tenir un fill amb el caràcter? → recessiu. Dedueix primer el model, després escriu els genotips i comprova amb un quadre de Punnett.",
      challenge:
        "A la prova trobaràs un cas amb un sistema de determinació del sexe diferent del humà (papallones: femelles ZW, mascles ZZ — al revés que en nosaltres). No memoritzis: raona-ho des de zero amb el mateix mètode. Qui és «hemizigot» aquí? Per què el patró d'afectació canvia respecte al cas humà lligat al X? Aquesta transferència és el que distingeix entendre de memoritzar."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans del congrés i la prova, repassa mentalment tota la SA4 i pren consciència del que ja domines.",
    prompts: [
      {
        kind: "write",
        text: "En una frase, quina és la conclusió del teu pòster Heredity ID: el caràcter que has estudiat és genètic? i si ho és, com s'hereta?",
        starter: "El nostre caràcter…"
      },
      {
        kind: "write",
        text: "De tot el que has après a la SA4 (vocabulari, Punnett, casos no mendelians, lligat al sexe), què et costa més? Repassa-ho abans de la prova.",
        starter: "El que encara em costa més és…"
      }
    ]
  },

  // ── EXPLORA (ABP · congrés de pòsters + prova) ──────────
  exploreActivity: {
    what: "La sessió té dos moments. PRIMER, congrés Heredity ID: cada equip penja el seu pòster i el presenta breument (2–3 min) a la resta; els altres equips fan de públic crític (pregunten) i coavaluen amb la rúbrica. SEGON, prova individual de problemes de genètica: cada alumne/a resol, sol/a, una sèrie de problemes que cobreixen tota la SA (deducció del tipus d'herència a partir d'un pedigrí, dominància simple amb Punnett, herència lligada al X, grups sanguinis ABO i —al nivell A— un sistema de sexe ZW). La prova és la demostració individual que has entès el que el pòster demostra en equip.",
    who: { mode: "grup", label: "Congrés en equips + prova individual" },
    time: 55,
    note: "Demostració en directe (política d'ús de la IA d'Albert): el pòster es defensa oralment i es responen preguntes a l'aula, i la prova és individual i sense ajuda. Així la comprensió es demostra en viu, no en un lliurament que es podria delegar. La coavaluació es fa amb la mateixa rúbrica del pòster (CoRubrics), que fa transparents els criteris.",
  },
  exploreInstructions: [
    "Congrés: presenteu el pòster en 2–3 min seguint el guió (caràcter → dades i pedigrí → hipòtesi → conclusió sobre el tipus d'herència → confirmació o refutació)",
    "Feu de públic crític: cada equip fa almenys una pregunta a un altre equip sobre la seva conclusió genètica",
    "Coavalueu amb la rúbrica: marqueu el nivell de cada criteri i escriviu un comentari de millora concret",
    "Prova individual: resoleu els problemes de genètica separant sempre, quan calgui, fills i filles i justificant amb els genotips"
  ],
  exploreDuration: "55 min",
  appSrc: null,
  exploreNote: "El congrés fa visible que comunicar ciència és part de fer ciència: no n'hi ha prou d'arribar a una conclusió, s'ha de poder defensar davant d'altres i acceptar la crítica. La prova, en canvi, comprova el raonament individual amb casos nous.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Defensar un ==pòster científic==: comunicar és fer ciència",
      text: "Un ==pòster científic== no és un mural decoratiu: és la manera com els científics comuniquen una recerca en un ==congrés==. Ha de deixar clar, en poc espai, la ==pregunta de recerca==, la ==metodologia== (com s'han recollit les dades i s'ha fet el ==pedigrí==), els ==resultats== i la ==conclusió== argumentada. Defensar-lo vol dir explicar-lo sense llegir-lo i ==respondre les preguntes== dels altres. Una bona defensa preveu les objeccions: dades poques, models alternatius, límits de la conclusió. En ciència, una idea només val si ==resisteix la crítica== dels altres.",
      type: "concept",
      badge: "🔬 Comunicació científica"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "La ==coavaluació== amb rúbrica: criteris, no opinions",
      text: "Coavaluar és jutjar el treball d'un altre equip amb ==criteris explícits==, no amb un «m'agrada». La ==rúbrica== separa la ==qualitat científica== (que la conclusió sobre el tipus d'herència sigui ==correcta i justificada== amb el pedigrí — el criteri de més ==pes==) de la ==qualitat comunicativa== (disseny, claredat, presentació oral). Avaluar bé els altres t'ajuda a ==avaluar-te a tu== (CE4.2: revisar les pròpies conclusions). Cada nota ha d'anar amb un ==comentari de millora== concret.",
      type: "concept",
      badge: "📋 Rúbrica"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "==Decidir el tipus d'herència== a partir d'un pedigrí (síntesi de la SA)",
      text: "Per resoldre un problema, primer ==dedueixes el model== d'herència mirant el pedigrí: si el caràcter ==«salta» generacions== → probablement ==recessiu==; si apareix a cada generació → ==dominant==. Si afecta ==molt més els homes== i salta per les dones → sospita de ==lligat al X recessiu== (recorda: l'home és ==hemizigot==). Dos progenitors sense el caràcter amb un fill afectat → ==recessiu==. Un cop tens el model, escrius els ==genotips== i comproves amb un ==quadre de Punnett==, separant ==fills i filles== si va lligat al sexe. Aquest mètode serveix per a qualsevol cas, fins i tot per a sistemes de sexe diferents (papallones ==ZW/ZZ==).",
      type: "concept",
      badge: "🧭 Mètode de resolució"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Tancament de la SA4: què he après sobre l'herència",
      text: "En aquesta SA has passat de ==descriure== l'herència (vocabulari, pedigrí) a ==predir-la== (Mendel, Punnett) i a ==explicar-ne els casos difícils== (codominància, al·lelisme múltiple, lligat al sexe). Has vist que un ==model científic== (les lleis de Mendel) és potent però té ==límits==, i que ampliar-lo (poligènia, lligat al X) el fa més útil sense trencar-lo. I has practicat les dues cares de la ciència: ==resoldre== problemes i ==comunicar-los==. Aquesta manera de pensar —model, predicció, límits, revisió— la faràs servir també a l'==evolució== (SA5).",
      type: "epistemic",
      badge: "🎓 Síntesi SA4"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "3", before: true, title: "Guia ràpida: quin tipus d'herència?", src: "/images/sa4-s5-decisio-herencia.svg", note: "Arbre de decisió: salta generacions → recessiu; a cada generació → dominant; afecta molt més els homes i salta per les dones → lligat al X recessiu. Primer dedueixes el model, després comproves amb Punnett." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa4-s5-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "La prova de problemes és la part d'elaboració: apliques tot el mètode de la SA a casos nous i individuals. Recorda deduir primer el model d'herència, escriure els genotips i comprovar amb el quadre de Punnett, separant fills i filles quan calgui.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S5 — Prova de problemes de genètica (tancament SA4)",
    steps: [
      {
        apartat: "0",
        title: "Repàs i idees prèvies",
        time: "8 min",
        phase: "engage",
        instruction: "Recorda la conclusió del teu pòster i identifica què et costa més de la SA4 abans de la prova. No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "Congrés: defensa del pòster",
        time: "25 min",
        phase: "explore",
        instruction: "Presenta el pòster seguint el guió i respon les preguntes dels companys. Al nivell A, prepara't les preguntes difícils.",
        hints: [
          "El pòster és el suport, no el text a llegir: explica'l amb les teves paraules.",
          "Deixa clara la connexió pedigrí → conclusió sobre el tipus d'herència."
        ]
      },
      {
        apartat: "2",
        title: "Coavaluació dels pòsters",
        time: "15 min",
        phase: "evaluate",
        instruction: "Avalua un altre pòster amb la rúbrica, criteri per criteri, i escriu un comentari de millora concret.",
        hints: [
          "El criteri de més pes és si la conclusió genètica és correcta i justificada.",
          "Cada nota ha d'anar amb un comentari: què està bé i què milloraria."
        ]
      },
      {
        apartat: "3",
        title: "Prova individual de problemes",
        time: "55 min",
        phase: "evaluate",
        instruction: "Resol els problemes de la fitxa. Dedueix primer el model d'herència, escriu els genotips i comprova amb el quadre de Punnett, separant fills i filles quan el caràcter vagi lligat al sexe.",
        hints: [
          "Si el caràcter salta generacions → recessiu; si afecta molt més els homes → sospita de lligat al X.",
          "Al nivell A, el cas de les papallones (ZW/ZZ) es raona amb el mateix mètode, no de memòria."
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
      text: "En un pedigrí, un caràcter apareix en homes i dones, «salta» la generació dels pares i dos progenitors sense el caràcter tenen un fill afectat. Quin model és el més probable?",
      options: [
        "Autosòmic recessiu",
        "Autosòmic dominant",
        "Lligat al Y",
        "Lligat al X dominant"
      ],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "Per què la conclusió d'un pòster («aquest caràcter és lligat al X recessiu») és més sòlida si es defensa davant de preguntes crítiques que si només s'escriu al pòster?",
      hint: "En ciència una idea val si resisteix la crítica: respondre objeccions (poques dades, models alternatius) demostra que la conclusió està realment justificada i no només afirmada."
    },
    {
      id: "q3",
      type: "open",
      text: "Quan resols un problema de genètica, per què convé deduir primer el tipus d'herència a partir del pedigrí abans d'escriure els genotips?",
      hint: "El model d'herència (dominant/recessiu, autosòmic/lligat al sexe) determina quins genotips són possibles; si l'endevines primer, el quadre de Punnett confirma o refuta, en comptes d'anar a cegues."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Mira enrere tota la SA4: al principi, sabies llegir un pedigrí o predir amb un quadre de Punnett? Què és el que ara entens de l'herència que abans et semblava màgia o casualitat? De les dues coses que has fet avui —defensar el pòster i resoldre la prova—, en quina et sents més segur/a, i què faries diferent la propera vegada? Aquesta manera de pensar (model → predicció → límits → revisió) et servirà per a l'evolució.",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Revisa la coavaluació que has rebut del teu pòster i escriu tres millores concretes que hi faries. Prepara't per començar la SA5 (evolució): pensa en un animal o planta del pati de l'institut i pregunta't per què té la forma que té.",
    deadline: null,
    note: "Aprenentatge significatiu: reflexionar sobre la crítica rebuda tanca el cicle del projecte i prepara la mirada evolutiva de la SA següent.",
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Aquesta és la sessió de tancament de la SA4: congrés de pòsters + prova de problemes. Si has faltat, has de recuperar les dues parts",
    "Repassa l'apartat EXPLICA: com es defensa un pòster, com es coavalua amb rúbrica i el mètode per decidir el tipus d'herència a partir d'un pedigrí",
    "Estudia la Fig.1 (arbre de decisió del tipus d'herència) i torna a les figures de S1–S4 (pedigrí, Punnett, grups sanguinis, lligat al X)",
    "Descarrega la fitxa S5 i resol la prova de problemes com a autoavaluació; comprova les respostes amb el professor",
    "Parla amb el professor per acordar com presentes/lliures el teu pòster Heredity ID i com fas la prova"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE3", "CE4", "CE5"],
  criterisAvaluacio: ["1.2", "3.5", "4.1", "4.2"]
}
