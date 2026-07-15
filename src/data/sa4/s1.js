export const sa4s1 = {
  id: "s1",
  saId: "sa4",
  title: "Retrat de família",
  sessionNumber: 1,
  biome: "sa4",
  duration: "2h",
  engageImage: "/images/sa4-s1-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "La CTNNB1 és una malaltia minoritària que a Catalunya afecta molt poques persones. Una nena la pateix des que va néixer: li costa caminar i parlar. Els seus pares, en canvi, estan perfectament sans, i cap dels seus avis va tenir res semblant. Com pot ser que una nena tingui una malaltia que ve dels gens si ningú de la seva família la té? La malaltia no és contagiosa ni la va agafar de cap lloc: la portava escrita a l'ADN des del primer dia. El repte d'avui és entendre com una característica —o una malaltia— pot passar de pares a fills fins i tot quan els pares no la mostren, i com podem representar-ho i predir-ho.",
  engageQuestion: "Mira't al mirall i mira una foto dels teus avis: hi ha trets que es repeteixen i d'altres que semblen haver desaparegut i tornat a aparèixer. Per què uns trets «passen» i altres «salten» una generació? Es pot predir què heretarà algú?",
  engageContext: "Avui obres la situació sobre l'herència. Comentaràs el cas real d'una malaltia que apareix en una nena de pares sans, aprendràs el vocabulari bàsic que fan servir els genetistes (gen, al·lel, genotip, fenotip, dominant, recessiu), llegiràs el teu primer arbre genealògic o «pedigrí», i triaràs el caràcter hereditari que investigaràs en el teu projecte Heredity ID. No cal que memoritzis res: avui construïm les eines que faràs servir tota la situació.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Defineixo i uso amb precisió gen, al·lel, genotip i fenotip, i explico la diferència entre homozigot i heterozigot amb exemples propis.",
      "Argumento, fent servir genotips (AA, Aa, aa), per què un caràcter recessiu pot «saltar» generacions a través de portadors sans.",
      "Interpreto un pedigrí de tres generacions deduint els fenotips i, quan és possible, els genotips, i justifico si el caràcter sembla dominant o recessiu.",
      "Dissenyo la recollida de dades del meu caràcter familiar amb criteris de bon caràcter (observable, dues varietats clares, divers) protegint la intimitat de les persones."
    ],
    B: [
      "Explico amb les meves paraules què són un gen, un al·lel, el genotip i el fenotip, i distingeixo homozigot de heterozigot.",
      "Dic per què una característica pot desaparèixer en els pares i tornar a aparèixer en un fill (perquè els pares en són portadors).",
      "Llegeixo un pedigrí senzill amb l'ajuda de la llegenda de símbols i identifico qui té el caràcter i qui no.",
      "Trio un caràcter per investigar seguint una llista de comprovació i recullo dades de la meva família amb respecte a la intimitat."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — SA4 és al 2n trimestre; la bastida es manté a un nivell mitjà (com SA3).
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Per comentar el cas, ves per parts. Primer els FETS (què li passa a la nena, com estan els pares). Després la INFERÈNCIA (si els pares estan sans però la filla té la malaltia, on era la malaltia abans?). No cal que sàpigues encara el vocabulari tècnic: fes servir les teves paraules i una idea clau: potser els pares «porten» la informació sense que se'ls noti.",
      challenge:
        "Formula una hipòtesi que expliqui alhora les quatre observacions del cas: (1) la nena té la malaltia, (2) els pares no, (3) cap avi la tenia, (4) no és contagiosa. La teva hipòtesi ha de ser compatible amb TOTES quatre, no només amb una."
    },
    "2": {
      scaffold:
        "Fixa la notació i no la perdis: un GEN és el «tema» (p. ex. «poder doblegar la llengua»). Els AL·LELS són les «versions» d'aquest gen, i les escrivim amb lletres: la dominant en MAJÚSCULA (A) i la recessiva en minúscula (a). El GENOTIP són les dues lletres que tens (AA, Aa o aa); el FENOTIP és el que es veu. Regla d'or: n'hi ha prou amb UNA majúscula perquè es vegi el tret dominant (AA i Aa es veuen igual); només aa mostra el recessiu.",
      challenge:
        "Explica amb un exemple teu per què dues persones amb el mateix FENOTIP poden tenir GENOTIPS diferents, i quina de les dues «amaga» un al·lel que no es veu. Per què això és impossible per al fenotip recessiu?"
    },
    "3": {
      scaffold:
        "Per llegir un pedigrí, fixa't primer en la llegenda: quadrat = home, cercle = dona, figura PLENA = té el caràcter, buida = no el té. Les línies horitzontals uneixen parelles; les verticals baixen cap als fills. Comença sempre marcant qui té el caràcter (plens) i qui no, i després pregunta't: aquest tret ve de dalt sense saltar-se ningú (sembla dominant) o desapareix i reapareix (sembla recessiu)?",
      challenge:
        "Al pedigrí de la Fig.1, deixa anotat el genotip de cada individu que puguis deduir amb SEGURETAT (per exemple, tots els que mostren el caràcter recessiu són aa) i marca amb un interrogant els que només pots deduir com a «probables». Justifica un cas de cada tipus."
    },
    "4": {
      scaffold:
        "Un bon caràcter per investigar compleix tres condicions: (1) es veu a simple vista, sense anàlisis (p. ex. lòbul de l'orella enganxat o separat); (2) es pot classificar en DUES varietats clares (sí/no, clar/fosc), amb un criteri que decideixes abans; (3) és divers al teu voltant (hi ha persones de totes dues varietats). I una norma ètica: tu sí que has de saber de quina família són les dades, però no ho has de fer públic.",
      challenge:
        "Tria el teu caràcter i escriu el «protocol»: quines dues varietats definiràs exactament, com decidiràs els casos dubtosos, i com garantiràs la intimitat de les persones de qui reculls dades. Anticipa un problema possible (un cas a mig camí entre les dues varietats) i com el resoldràs."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de començar, posem sobre la taula el que ja pensem sobre l'herència. No es corregeix: ho compararàs al final de la situació.",
    prompts: [
      {
        kind: "write",
        text: "Per què t'assembles als teus pares o avis en algunes coses i en d'altres no? Què creus que «passa» exactament de pares a fills?",
        starter: "Crec que dels pares als fills passa… i que ens assemblem perquè…"
      },
      {
        kind: "write",
        text: "Pot un fill tenir una característica (o una malaltia) que cap dels dos pares mostra? Per què sí o per què no?",
        starter: "Crec que… perquè…"
      }
    ]
  },

  // ── EXPLORA (ABP · estudi de cas + llançament del projecte) ─────────
  exploreActivity: {
    what: "En dos moments. Primer, en equip, comenteu el cas real de la malaltia CTNNB1 (una nena la pateix, els pares no) i mireu d'explicar com pot ser. Després, decidiu quin caràcter hereditari investigareu al projecte Heredity ID i dissenyeu com recollireu les dades de tres generacions d'una família.",
    who: { mode: "grup", label: "Equips de 3 (consell genètic)" },
    time: 45,
    note: "El projecte Heredity ID vertebra tota la situació: el caràcter que trieu avui és el que analitzareu amb les lleis de Mendel (S2), classificareu (S3) i presentareu al pòster final (S5). Trieu-lo bé."
  },
  exploreInstructions: [
    "Mireu (o llegiu) el cas de la CTNNB1 i comenteu en equip com pot ser que una nena tingui una malaltia genètica que els pares no mostren",
    "Anoteu una hipòtesi d'equip que expliqui alhora que la nena la té, que els pares no, i que no és contagiosa",
    "Decidiu el caràcter que investigareu: ha de ser observable, tenir dues varietats clares i ser divers al vostre voltant",
    "Repartiu-vos: cada membre recollirà l'arbre d'una família diferent (mínim 3 generacions), protegint sempre la intimitat"
  ],
  exploreDuration: "45 min",
  appSrc: null,
  exploreNote: "Indagació amb dades reals: la demostració a l'aula és defensar davant d'un altre equip per què el caràcter que heu triat és bo per investigar (compleix les tres condicions) i com garantireu la intimitat de les persones.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Gen== i ==al·lel==: el tema i les seves versions",
      text: "Un ==gen== és un tros d'ADN amb la informació per a un caràcter (per exemple, poder doblegar la llengua). D'un mateix gen n'hi ha ==versions== diferents: els ==al·lels==. Cada persona en té ==dos==, un heretat del pare i un de la mare. Els escrivim amb una lletra: l'al·lel ==dominant|b== en MAJÚSCULA (A) i el ==recessiu|g== en minúscula (a).",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Genotip== i ==fenotip==: el que portes i el que es veu",
      text: "El ==genotip== són els dos al·lels que tens: ==AA==, ==Aa== o ==aa==. El ==fenotip== és el que es veu. Si els dos al·lels són iguals ets ==homozigot== (AA o aa); si són diferents, ==heterozigot== (Aa). Regla d'or: n'hi ha prou amb ==una sola majúscula== perquè es vegi el tret dominant, així que ==AA i Aa es veuen igual==; només ==aa== mostra el tret recessiu.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "El ==pedigrí==: dibuixar una família",
      text: "Un ==pedigrí== (o arbre genealògic) és el mapa d'una característica en una família. Els símbols són universals: ==quadrat== = home, ==cercle== = dona, figura ==plena== = té el caràcter, buida = no el té. Les línies ==horitzontals== uneixen les parelles i les ==verticals== baixen cap als fills. Serveix per veure d'un cop d'ull com es transmet un tret al llarg de les generacions.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Per què un caràcter ==salta generacions==",
      text: "Una persona ==Aa== (heterozigota) mostra el tret dominant però ==porta amagat== l'al·lel recessiu: n'és un ==portador==. Si dos portadors (Aa × Aa) tenen fills, un fill pot rebre ==a== de tots dos i ser ==aa==: mostrarà el tret recessiu que ==cap dels pares no mostrava==. Per això una malaltia recessiva pot aparèixer en fills de pares sans i sembla que «salta» generacions. Deduir un genotip d'un pedigrí és a vegades ==segur== (tot aa és aa) i a vegades només ==probable==: cal distingir-ho.",
      type: "epistemic",
      badge: "🧭 Deduir amb cautela"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "3", before: false, title: "Símbols del pedigrí i un caràcter que salta una generació", src: "/images/sa4-s1-pedigri.svg", note: "Exemple d'una família diferent de la del cas CTNNB1. A l'esquerra, la llegenda de símbols. A la dreta, un pedigrí de tres generacions: un avi mostra el caràcter recessiu (ple, aa), els seus fills no el mostren (són portadors, Aa) i torna a aparèixer en un nét (aa). El tret ha «saltat» la generació dels pares. A la fitxa de l'alumne els genotips no hi surten: s'han de deduir." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa4-s1-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: torna al cas de la CTNNB1 de l'apartat 1 i reescriu la teva explicació ara amb el vocabulari nou (al·lel, portador, homozigot/heterozigot), fent servir genotips.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S1 — Retrat de família",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "10 min",
        phase: "engage",
        instruction: "Omple l'apartat 0: què creus que passa de pares a fills i si un fill pot tenir un tret que els pares no mostren. No es corregeix; ho compararàs al final de la situació.",
        hints: []
      },
      {
        apartat: "1",
        title: "El cas: una malaltia de pares sans",
        time: "20 min",
        phase: "explore",
        instruction: "Comenta en equip el cas de la CTNNB1 i escriu una hipòtesi que expliqui alhora que la nena la té, que els pares no i que no és contagiosa.",
        hints: [
          "Si la malaltia no ve de fora, ja hi era: pensa on podia estar «amagada».",
          "Potser els pares porten la informació sense mostrar-la."
        ]
      },
      {
        apartat: "2",
        title: "El vocabulari de l'herència",
        time: "30 min",
        phase: "explica",
        instruction: "Amb la teoria, completa els conceptes: gen, al·lel, genotip, fenotip, homozigot/heterozigot, dominant/recessiu. Fixa't en la notació A/a.",
        hints: [
          "N'hi ha prou amb una majúscula (A) perquè es vegi el dominant: AA i Aa es veuen igual.",
          "Homozigot = dos al·lels iguals (AA o aa); heterozigot = diferents (Aa)."
        ]
      },
      {
        apartat: "3",
        title: "Llegir un pedigrí",
        time: "25 min",
        phase: "elabora",
        instruction: "Amb la Fig.1, llegeix el pedigrí: marca qui té el caràcter, digues si sembla dominant o recessiu i dedueix els genotips que puguis.",
        hints: [
          "Quadrat = home, cercle = dona, ple = té el caràcter.",
          "Tots els que mostren el caràcter recessiu són aa amb seguretat."
        ]
      },
      {
        apartat: "4",
        title: "El teu projecte Heredity ID",
        time: "15 min",
        phase: "elabora",
        instruction: "Tria el caràcter que investigaràs i escriu el protocol: dues varietats clares, criteri per als casos dubtosos i com protegiràs la intimitat.",
        hints: [
          "Bon caràcter = observable + dues varietats clares + divers al teu voltant.",
          "Tu saps de quina família són les dades, però no ho fas públic."
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
      text: "Explica amb un exemple la diferència entre GENOTIP i FENOTIP. Pot una persona tenir el genotip Aa i una altra AA i veure's exactament igual? Per què?",
      hint: "N'hi ha prou amb una majúscula perquè es vegi el tret dominant."
    },
    {
      id: "q2",
      type: "multiple",
      text: "Una parella, tots dos sans, tenen una filla amb una malaltia genètica recessiva. Quina és la millor explicació?",
      options: [
        "Els dos pares són portadors sans (Aa) i la filla ha rebut l'al·lel recessiu (a) de tots dos: és aa",
        "La filla va agafar la malaltia després de néixer",
        "És impossible: si els pares estan sans, els fills també ho estan sempre",
        "Un dels pares va mutar el gen expressament"
      ],
      correct: 0
    },
    {
      id: "q3",
      type: "open",
      text: "En un pedigrí veus una parella de pares tots dos buits (no tenen el caràcter) i, a sota, una filla (cercle) plena (sí que el té). Què vol dir cada símbol i què pots dir sobre com s'hereta aquest caràcter i sobre el genotip dels pares?",
      hint: "Si els pares no el mostren però la filla sí, el caràcter és recessiu i els pares en són portadors (Aa)."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, hauries sabut explicar per què un fill pot tenir un tret que cap dels pares mostra? Quina paraula nova (al·lel, portador, genotip…) t'ha ajudat més a entendre-ho? Què et falta encara per aclarir?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Comença a recollir les dades del teu caràcter Heredity ID: dibuixa l'arbre (pedigrí) d'una família amb almenys tres generacions (avis, pares, fills), marcant qui té cada varietat del caràcter amb el codi ple/buit. Recorda protegir la intimitat: tu saps de qui són les dades, però no cal que les identifiquis. A la propera sessió faràs servir aquest arbre per predir amb les lleis de Mendel.",
    deadline: null,
    note: "Aprenentatge significatiu: connectar la genètica amb la teva família real i preparar el material que analitzaràs a S2, no repetir definicions."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: gen i al·lel, genotip i fenotip, homozigot/heterozigot, dominant/recessiu i la notació A/a",
    "Estudia la Fig.1: aprèn els símbols del pedigrí (quadrat/cercle, ple/buit) i com un caràcter recessiu salta una generació via portadors",
    "Descarrega la fitxa S1 i completa l'apartat 2 (vocabulari) i l'apartat 3 (lectura del pedigrí)",
    "Tria un caràcter per al projecte Heredity ID (observable, dues varietats clares, divers) i dibuixa el pedigrí d'una família de 3 generacions",
    "L'exit tiquet el trobaràs a classe o aquí (apartat EXIT TIQUET); porta el teu arbre a la propera sessió"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1"],
  competencies: ["CE1", "CE4"],
  criterisAvaluacio: ["1.1", "1.3", "4.1"]
}
