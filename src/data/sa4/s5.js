export const sa4s5 = {
  id: "s5",
  saId: "sa4",
  title: "Congrés Heredity ID",
  sessionNumber: 5,
  biome: "sa4",
  duration: "2h",
  engageImage: "/images/sa4-s5-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Avui es tanca el projecte Heredity ID. Durant tota la SA has investigat un caràcter hereditari real de la teva família, has recollit dades de tres generacions, has construït el pedigrí i has fet una hipòtesi sobre com s'hereta. Ara toca la part que la ciència no s'estalvia mai: comunicar-ho i defensar-ho davant d'altres. Muntareu un petit congrés científic: cada equip presenta el seu pòster, respon les preguntes dels companys i coavalua els altres pòsters amb la mateixa rúbrica que faríeu servir en un congrés de veritat. El repte d'avui és convèncer: explicar el teu pòster sense llegir-lo, aguantar les preguntes dels altres i avaluar amb criteris la feina dels companys. La prova individual de problemes de genètica vindrà just després, a l'inici de la SA5.",
  engageQuestion: "Què fa que un pòster científic sigui convincent i no només bonic? I com saps si la conclusió d'un altre equip és realment compatible amb les seves dades?",
  engageContext: "Tanques la SA4 amb tot el que has après: el vocabulari (S1), predir amb Mendel i el quadre de Punnett (S2), els casos que Mendel no explica del tot (S3) i l'herència lligada al sexe i el consell genètic (S4). Avui ho poses tot junt com a comunicador científic: defenses el pòster i avalues els dels altres. No s'estudia res nou; es demostra el que ja saps. La prova individual de problemes es fa a la SA5 · S1.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Presento i defenso el pòster Heredity ID amb vocabulari científic precís, connectant la pregunta de recerca, el pedigrí i la conclusió sobre el tipus d'herència, i responc amb rigor les preguntes crítiques dels companys.",
      "Responc les objeccions difícils (poques dades, autosòmic o lligat al X, poligènia) aplicant els senyals del pedigrí a individus concrets.",
      "Coavaluo els pòsters d'altres equips amb la rúbrica de manera justificada i jutjo si la seva conclusió és compatible amb el seu pedigrí o l'han «forçada»."
    ],
    B: [
      "Presento el pòster Heredity ID explicant el caràcter estudiat, el pedigrí i la conclusió, amb ajuda del guió de defensa.",
      "Justifico el tipus d'herència del nostre caràcter amb el pedigrí i responc les preguntes del públic.",
      "Coavaluo un pòster amb la rúbrica marcant el nivell de cada criteri i escrivint una cosa que funciona i una millora concreta."
    ],
    C: [
      "Explico el pòster del meu equip completant un guió.",
      "Dic quin tipus d'herència té el caràcter i quina persona del pedigrí ho mostra.",
      "Avaluo un pòster amb la graella i dic una millora."
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
        "Prepara't per a les preguntes difícils que et poden fer els companys o el professor: «I si les dades fossin poques, la conclusió seria igual de segura?», «Com distingiries un caràcter autosòmic recessiu d'un de lligat al X només amb el pedigrí?», «El teu caràcter podria ser poligènic en lloc de mendelià simple? com ho sabries?». Anota una resposta breu per a cadascuna aplicant els senyals del pedigrí (salta generacions, afecta més els homes, pocs individus) a persones concretes del vostre pedigrí: defensar bé és preveure què et poden objectar."
    },
    "2": {
      scaffold:
        "La coavaluació amb rúbrica es fa per criteris, no per «m'agrada / no m'agrada». Per a cada pòster que avaluïs, mira criteri per criteri (introducció i pregunta, metodologia, resultats/pedigrí, conclusions genètiques, forma i presentació oral) i marca en quin nivell està (Expert / Avançat / Aprenent / Novell). Acompanya cada nota amb una frase concreta: què està bé i què milloraria. Una coavaluació útil és la que ajuda l'altre equip a millorar.",
      challenge:
        "El criteri amb més pes de la rúbrica és «conclusions genètiques» (determinar bé el tipus d'herència i justificar-ho amb el pedigrí). Quan coavaluïs, fixa't especialment si la conclusió de l'altre equip és realment compatible amb el seu pedigrí o si han «forçat» el resultat. Escriu, per a un dels pòsters, si canviaries la seva conclusió i per què."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans del congrés, recorda la conclusió del pòster i pensa quin és el seu punt feble.",
    prompts: [
      {
        kind: "write",
        text: "En una frase, quina és la conclusió del teu pòster Heredity ID: el caràcter que has estudiat és genètic? i si ho és, com s'hereta?",
        starter: "El nostre caràcter…"
      },
      {
        kind: "write",
        text: "Quina part del pòster et fa més respecte explicar (o, al nivell A, quin és el punt més feble de la conclusió)? Per què?",
        starter: "El que em fa més respecte és…"
      }
    ]
  },

  // ── EXPLORA (ABP · congrés de pòsters) ──────────────────
  exploreActivity: {
    what: "Congrés Heredity ID: cada equip penja el seu pòster i el presenta breument (3–4 min) a la resta; els altres equips fan de públic crític (pregunten) i coavaluen amb la rúbrica. Hi ha temps perquè presentin tots els equips i perquè cada pregunta tingui resposta. La prova individual de problemes de genètica, que demostra el raonament de cadascú amb un cas nou, es fa a l'inici de la SA5 · S1.",
    who: { mode: "grup", label: "Congrés en equips" },
    time: 60,
    note: "Demostració en directe (política d'ús de la IA d'Albert): el pòster es defensa oralment i es responen preguntes a l'aula, i la prova (SA5 · S1) és individual i sense ajuda. Així la comprensió es demostra en viu, no en un lliurament que es podria delegar. La coavaluació es fa amb la mateixa rúbrica del pòster (CoRubrics), que fa transparents els criteris.",
  },
  exploreInstructions: [
    "Congrés: presenteu el pòster en 2–3 min seguint el guió (caràcter → dades i pedigrí → hipòtesi → conclusió sobre el tipus d'herència → confirmació o refutació)",
    "Feu de públic crític: cada equip fa almenys una pregunta a un altre equip sobre la seva conclusió genètica",
    "Coavalueu amb la rúbrica: marqueu el nivell de cada criteri i escriviu un comentari de millora concret"
  ],
  exploreDuration: "60 min",
  appSrc: null,
  exploreNote: "El congrés fa visible que comunicar ciència és part de fer ciència: no n'hi ha prou d'arribar a una conclusió, s'ha de poder defensar davant d'altres i acceptar la crítica. La prova de la SA5 · S1, en canvi, comprovarà el raonament individual amb un cas nou.",

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
      id: "t2b",
      apartat: "2",
      heading: "Per preparar la prova: resoldre un problema ==pas a pas==",
      text: "Segueix sempre el mateix ordre: ==1)== escriu la ==notació== dels al·lels (A dominant, a recessiu; en ABO, ==IA, IB, i==; lligat al X, ==XH / Xh==). ==2)== Dedueix el ==genotip== de cada progenitor del que diu l'enunciat. ==3)== Escriu els ==gàmetes== de cadascun. ==4)== Omple el ==quadre de Punnett==. ==5)== Llegeix els ==fenotips== i les ==proporcions==. Recorda dues claus: a l'==ABO==, IA i IB són codominants i dominen sobre i (el grup 0 només surt amb ==ii==); i si el caràcter va ==lligat al X==, separa sempre els ==fills (XY)== de les ==filles (XX)==, perquè l'home només té una X.",
      type: "concept",
      badge: "🧭 Pas a pas"
    },
    {
      id: "t3",
      apartat: "1",
      heading: "==Decidir el tipus d'herència== a partir d'un pedigrí (síntesi de la SA)",
      text: "Per defensar una conclusió (i per resoldre un problema), primer ==dedueixes el model== d'herència mirant el pedigrí: si el caràcter ==«salta» generacions== → probablement ==recessiu==; si apareix a cada generació → ==dominant==. Si afecta ==molt més els homes== i salta per les dones → sospita de ==lligat al X recessiu== (recorda: l'home és ==hemizigot==). Dos progenitors sense el caràcter amb un fill afectat → ==recessiu==. Un cop tens el model, escrius els ==genotips== i comproves amb un ==quadre de Punnett==, separant ==fills i filles== si va lligat al sexe. Aquest mètode serveix per a qualsevol cas, fins i tot per a sistemes de sexe diferents (papallones ==ZW/ZZ==).",
      type: "concept",
      badge: "🧭 Mètode de resolució"
    },
    {
      id: "t4",
      apartat: "2",
      heading: "Tancament de la SA4: què he après sobre l'herència",
      text: "En aquesta SA has passat de ==descriure== l'herència (vocabulari, pedigrí) a ==predir-la== (Mendel, Punnett) i a ==explicar-ne els casos difícils== (codominància, al·lelisme múltiple, lligat al sexe). Has vist que un ==model científic== (les lleis de Mendel) és potent però té ==límits==, i que ampliar-lo (poligènia, lligat al X) el fa més útil sense trencar-lo. I has practicat les dues cares de la ciència: ==resoldre== problemes i ==comunicar-los==. Aquesta manera de pensar —model, predicció, límits, revisió— la faràs servir també a l'==evolució== (SA5).",
      type: "epistemic",
      badge: "🎓 Síntesi SA4"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "Guia ràpida: quin tipus d'herència?", src: "/images/sa4-s5-decisio-herencia.svg", note: "Arbre de decisió: salta generacions → recessiu; a cada generació → dominant; afecta molt més els homes i salta per les dones → lligat al X recessiu. Primer dedueixes el model, després comproves amb Punnett." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa4-s5-fitxa-A.html", B: "/fitxes/sa4-s5-fitxa-B.html", C: "/fitxes/sa4-s5-fitxa-C.html" },
  sessionMaterials: [
    { id: "rubrica-poster", title: "Rúbrica del pòster Heredity ID (també per coavaluar)", url: "/fitxes/sa4-rubrica-poster-heredity.html", who: "alumnat" },
    { id: "rubrica-poster-corubrics", title: "Rúbrica del pòster en CSV per importar a CoRubrics", url: "/fitxes/sa4-rubrica-poster-heredity-corubrics.csv", who: "docent" },
    { id: "prova-sa4-B", title: "Prova escrita SA4 · versió B (es fa a la SA5 · S1)", url: "/docs/prova_escrita_sa4_B.docx", who: "docent" },
    { id: "prova-sa4-C", title: "Prova escrita SA4 · versió C (es fa a la SA5 · S1)", url: "/docs/prova_escrita_sa4_C.docx", who: "docent" },
    { id: "prova-sa4-solucionari", title: "Solucionari de la prova SA4 (amb annex C)", url: "/docs/solucionari_prova_sa4.docx", who: "docent" }
  ],
  teoriaPdfUrl: "/teoria/sa4-s5-teoria.pdf",
  elaborateNote: "La defensa i la coavaluació són la part d'elaboració: apliques el mètode de la SA (del pedigrí al tipus d'herència) al teu pòster i al dels altres. Per preparar la prova de la SA5 · S1, refés els problemes de les fitxes S2, S3 i S4.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S5 — Congrés Heredity ID (tancament SA4)",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "10 min",
        phase: "engage",
        instruction: "Recorda la conclusió del teu pòster i pensa què et fa més respecte explicar (A: quin és el seu punt feble). No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "Congrés: defensa del pòster",
        time: "60 min",
        phase: "explore",
        instruction: "Completa el guió de defensa, presenta el pòster i respon les preguntes dels companys. Al nivell A, prepara la resposta a les objeccions difícils aplicant els senyals del pedigrí.",
        hints: [
          "El pòster és el suport, no el text a llegir: explica'l amb les teves paraules.",
          "Deixa clara la connexió pedigrí → conclusió sobre el tipus d'herència."
        ]
      },
      {
        apartat: "2",
        title: "Coavaluació dels pòsters",
        time: "35 min",
        phase: "evaluate",
        instruction: "Avalua un altre pòster amb la graella NA/AS/AN/AE, criteri per criteri, i escriu una cosa que funciona i una millora concreta. Al nivell A, jutja si la seva conclusió aguanta.",
        hints: [
          "El criteri de més pes és si la conclusió genètica és correcta i justificada.",
          "Cada nota ha d'anar amb un comentari: què està bé i què milloraria."
        ]
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  // Full imprimible del tiquet de sortida (mig A4 · dos tiquets per full).
  // Generat per scripts/_exit-tickets/build_tickets.py.
  exitTicketUrl: { A: "/fitxes/sa4-s5-exit-ticket.html", B: "/fitxes/sa4-s5-exit-ticket.html", C: "/fitxes/sa4-s5-exit-ticket-C.html" },
  exitTicketType: "paper",
  exitTicketCriteri: "3.5",  // criteri imprès al tiquet (build_tickets.py)
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
      hint: "Pensa què li pot passar a una conclusió escrita que ningú no ha discutit, i què hi guanya quan algú li busca el punt feble i qui la defensa hi respon."
    },
    {
      id: "q3",
      type: "open",
      text: "Un equip conclou al pòster que el caràcter és «autosòmic dominant», però al seu pedigrí dos pares sans tenen un fill afectat. Què els diries al retorn de la coavaluació perquè puguin millorar la conclusió?",
      hint: "Una bona crítica assenyala la dada concreta que no encaixa, explica per què no hi encaixa i proposa què haurien de revisar, sense dir-los només «està malament»."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Mira enrere tota la SA4: al principi, sabies llegir un pedigrí o predir amb un quadre de Punnett? Què és el que ara entens de l'herència que abans et semblava màgia o casualitat? Què has entès defensant el pòster que no havies entès fent-lo, i què faries diferent la propera vegada? Aquesta manera de pensar (model → predicció → límits → revisió) et servirà per a l'evolució.",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Revisa la coavaluació que has rebut del teu pòster i escriu tres millores concretes que hi faries. Prepara la prova individual de genètica (inici de la SA5 · S1): refés sense mirar les solucions els problemes de les fitxes S2, S3 i S4.",
    note: "Aprenentatge significatiu: reflexionar sobre la crítica rebuda tanca el cicle del projecte, i refer problemes ja fets és la millor preparació per a un cas nou.",
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Aquesta és la sessió de tancament de la SA4: el congrés de pòsters. Si has faltat, has de recuperar la defensa del pòster (la prova es fa a la SA5 · S1)",
    "Repassa l'apartat EXPLICA: com es defensa un pòster, com es coavalua amb rúbrica i el mètode per decidir el tipus d'herència a partir d'un pedigrí",
    "Estudia la Fig.1 (arbre de decisió del tipus d'herència) i torna a les figures de S1–S4 (pedigrí, Punnett, grups sanguinis, lligat al X)",
    "Descarrega la fitxa S5 i completa el guió de defensa del teu pòster",
    "Parla amb el professor per acordar com presentes el teu pòster Heredity ID"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE3", "CE4", "CE5"],
  criterisAvaluacio: ["1.2", "3.5", "4.1", "4.2"]
}
