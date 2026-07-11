export const sa3s5 = {
  id: "s5", saId: "sa3",
  title: "Drogues, addicció i síntesi",
  sessionNumber: 5, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s5-drogues.jpg",
  isFinalSession: true,

  engageQuestion: "Avui és la sessió final de la SA. Resoleu els dos enigmes que han estat a la paret tot el mes. Però primer: per quina raó costa tant deixar una addicció? És només qüestió de «voluntat»?",
  engageContext: "Revisió formulari comprensió prèvia (S4 deures). Connexió amb els dos enigmes — avui es resolen tots dos. El docent explica l'estructura de la sessió: classificació de substàncies → la sinapsi i la droga → mapa síntesi de tota la SA.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Explico la sinapsi i el mecanisme de recompensa de la dopamina a nivell molecular.",
      "Analitzo com les drogues segresten el sistema de recompensa (agonisme, antagonisme, bloqueig de la recaptació).",
      "Explico l'addicció com a plasticitat neuronal (downregulation de receptors, tolerància, abstinència).",
      "Faig una síntesi connectant tots els conceptes de la SA en un mapa conceptual argumentat i resolc els dos enigmes amb l'evidència acumulada."
    ],
    B: [
      "Explico la sinapsi i com la dopamina marca la recompensa.",
      "Explico que moltes drogues són anàlogues a neurotransmissors que inunden els receptors.",
      "Explico l'addicció com un canvi físic del cervell (tolerància, abstinència), no com a debilitat moral.",
      "Connecto els conceptes de la SA en un mapa (patogen → defenses → vacuna → fàrmac → droga) i resolc els dos enigmes de la SA."
    ],
    C: [
      "Sé que les drogues actuen com a neurotransmissors i inunden els receptors de dopamina.",
      "Sé que l'addicció és un canvi físic del cervell, no una qüestió de voluntat.",
      "Sé que la tolerància significa que cal cada vegada més dosi per sentir el mateix.",
      "Sé connectar els conceptes de la SA: patogen → defenses → vacuna → fàrmac → droga."
    ]
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui és la sessió final de la SA. Resoleu els dos enigmes que han estat a la paret tot el mes. Abans d'escoltar les explicacions, escriviu individualment el que sabeu ara — compareu amb el que vau escriure a S1.",
    prompts: [
      {
        kind: "write",
        text: "Què és per a tu una «droga»? Creus que l'alcohol n'és una? I el cafè?",
        starter: "Per a mi, una droga és..."
      },
      {
        kind: "write",
        text: "Per quina raó costa tant deixar una addicció? És només qüestió de «voluntat»?",
        starter: "Crec que costa tant perquè..."
      }
    ]
  },

  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "==Endogen== vs ==exogen==: medicament o droga?",
      text: "Hi ha substàncies que el cos fabrica (==endògenes|g==: dopamina, endorfines) i d'altres que entren des de fora (==exògenes|o==: cafè, alcohol, fàrmacs, drogues). Una ==droga== és una substància exògena que altera el sistema nerviós i pot crear dependència. El ==cafè i l'alcohol també són drogues|r== — encara que siguin legals. La classificació legal ==no sempre reflecteix el risc real|r== per a la salut.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa3-s4-t3.mp4",
      heading: "==Drogues==: per quina raó enganyen el cervell",
      text: "Moltes drogues imiten els neurotransmissors naturals (com la ==dopamina==) però en concentracions molt més altes: ==inunden|r== els receptors del nucli accumbens (centre de recompensa). El cervell interpreta: «==això ha estat bo, repeteix-ho|g==». Tipus: ==depressores|o== (alcohol, benzodiazepines), ==estimulants|r== (cocaïna, amfetamines), ==al·lucinògens|p== (LSD, cannabis en dosis altes).",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "==Tolerància== i ==abstinència==: la base física de l'addicció",
      text: "Amb l'ús repetit, el cervell redueix els ==receptors|r== de dopamina (downregulation) → cal cada cop ==més dosi|r== per sentir el mateix efecte (==tolerància==). Si la droga falta, apareix un malestar físic real (==abstinència==). ==Addicció|r==: comportament compulsiu de recerca de la droga malgrat les conseqüències negatives. ==Idea clau|g==: és una malaltia del cervell amb base física, NO una qüestió de voluntat.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa3-s4-t5.mp4",
      heading: "Síntesi SA3: de la ==infecció== a la ==decisió==",
      text: "Cadena completa: ==patogen entra|r== (S1) → SI innata (hores) → SI adaptativa (dies): anticossos + memòria (S2) → ==vacuna|g== = entrenar el SI per avançat (S3) → ==immunitat de grup|g== = protecció col·lectiva → fàrmac tracta el ==símptoma|o== (S4) → droga ==segresta la sinapsi|r== (S5). Enigma 1 resolt: Martina → memòria + immunitat de grup. Enigma 2 resolt: article Wakefield → frau científic.",
      type: "synthesis",
      badge: "✅ SA3 Síntesi completa"
    }
  ],

  fitxaUrl: "/fitxes/sa3-s5-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S5 — Drogues, addicció i síntesi",
    steps: [
      { apartat: "0", title: "Idees prèvies — resolució enigmes", time: "5 min", phase: "engage", instruction: "Apartat 0: escriu què és per a tu una droga i per quina raó costa tant deixar una addicció. Compara-ho amb el que vas escriure a S1.", hints: [] },
      { apartat: "1", title: "Classificació de substàncies", time: "30 min", phase: "explore", instruction: "Apartat 1: amb les targetes, completa el quadre endogen/exogen, medicament/droga i zona grisa (cafè, alcohol, tabac), amb 2 exemples a cada casella.", hints: [
        "Endogen = el cos en produeix (dopamina, endorfines). Exogen = entra des de fora (cafè, alcohol, fàrmacs, drogues il·legals).",
        "La zona grisa (cafè, alcohol, tabac) és legal però també altera el sistema nerviós i pot crear dependència."
      ] },
      { apartat: "2", title: "La sinapsi i la droga", time: "25 min", phase: "explica", instruction: "Apartat 2: completa les frases sobre com una droga imita un neurotransmissor i per quina raó el cervell redueix receptors amb l'ús repetit (tolerància i abstinència).", hints: [
        "Dopamina: neurotransmissor del plaer i la recompensa. Una droga inunda els receptors amb molta més concentració que el procés natural.",
        "Tolerància: el cervell s'adapta reduint receptors → cal més dosi. Abstinència: malestar físic quan falta la droga."
      ] },
      { apartat: "3", title: "Mapa síntesi i resolució dels enigmes", time: "15 min", phase: "explica", instruction: "Apartat 3: dibuixa el mapa conceptual connectant com a mínim 6 conceptes de la SA (patogen, barrera, antigen/anticòs, memòria, vacuna, immunitat de grup, fàrmac, droga, addicció) i escriu la resolució completa dels dos enigmes.", hints: [
        "Enigma 1 (Martina): pot ser que tingués memòria d'una soca similar O que la immunitat de grup la protegís. Les dues explicacions són compatibles.",
        "Enigma 2 (article Wakefield): mostra massa petita (n=12), conflicte d'interès econòmic, dades manipulades, mai replicat per estudis posteriors amb milions de nens."
      ] }
    ]
  },

  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Resol l'enigma 1: per quina raó la Martina (no vacunada) i la seva àvia (vacunada) van escapar de la grip de novembre? Dona almenys 2 explicacions fonamentades per a la Martina.", hint: "Martina: (1) memòria immunològica d'una soca similar (havien coincidit anys enrere) → resposta secundària ràpida que va avortar la infecció. (2) Immunitat de grup: tants companys vacunats que el virus no va circular prou. Àvia: vacunada → resposta adaptativa activa." },
    { id: "q2", type: "open", text: "L'article de Wakefield afirmava que les vacunes causen autisme. Per quina raó la revista científica el va retirar? Cita almenys 2 raons concretes.", hint: "Mostra irrisòria (n=12), conflicte d'interès econòmic de l'autor, dades manipulades, i cap estudi posterior (amb milions de nens) ha trobat el vincle." },
    { id: "q3", type: "open", text: "Per quina raó l'addicció NO és «només qüestió de voluntat»? Usa les paraules dopamina i receptors.", hint: "La droga inunda els receptors de dopamina; amb l'ús repetit el cervell els redueix (downregulation) → cal més dosi (tolerància) i apareix malestar quan falta (abstinència). És un canvi físic, no només mental." }
  ],
  exitTicketNote: "Avaluació sumativa CE2 + CE5 (resolució dels 2 enigmes de la SA). Individual, sense ajuda.",

  deliverables: [
    { name: "Campanya de comunicació científica (pòster digital o vídeo 60 s)", note: "Entrega a Classroom. Desmunta un mite sobre salut aplicant els 4 criteris de qualitat." }
  ],

  campanyaStructure: {
    title: "Campanya: estructura mínima",
    sections: [
      "1. L'afirmació que desmuntes (cita la font original)",
      "2. Per quina raó és un mite: aplica els 4 criteris de qualitat a la font original",
      "3. L'evidència real: cita almenys 1 estudi científic vàlid",
      "4. Missatge final: clar, breu i dirigit al públic objectiu (companys de classe)"
    ]
  },

  homework: { description: "Prova escrita de la SA (Defensors del cos): repassa el mapa síntesi, els dos enigmes i els mecanismes (vacuna, fàrmac, droga). Acaba i entrega la campanya de comunicació científica a Classroom.", deadline: "2026-11-XX (1 setmana)" },

  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (endogen/exogen, sinapsi i dopamina, tolerància i abstinència, síntesi SA3)",
    "Omple el diagrama de síntesi: patogen → SI innata → SI adaptativa → tractament → prevenció (vacuna) → fàrmac → droga",
    "Escriu la resolució dels dos enigmes (Martina + article Wakefield) amb les cadenes causals",
    "Entrega la campanya de comunicació a Classroom (format pòster o vídeo 60 s)"
  ],
  oaLinks: ["OA4"], competencies: ["CE2", "CE5"]
}
