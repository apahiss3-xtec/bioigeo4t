export const sa3s1 = {
  id: "s1", saId: "sa3",
  title: "L'enemic entra",
  sessionNumber: 1, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s1-contagi.jpg",

  engageQuestion: "Avui sou actors d'una epidèmia. Alguns de vosaltres porteu un virus sense saber-ho. Al final de la sessió, descobrirem quantes persones s'han 'infectat'. Però primer: per quina raó creus que la grip es propaga tan ràpid en un espai tancat com una aula?",
  engageContext: "Presentació dels dos enigmes de la SA (la grip de gener + l'article anti-vacunes) que quedaran a la paret tota la SA. Idees prèvies: 'Quina diferència hi ha entre un refredat i una grip? Per quina raó de vegades agafem la grip i d'altres no?'",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Calculo el R₀ a partir de les dades de la simulació i interpreto el valor en termes de corba epidèmica (creixement exponencial vs extinció).",
      "Argumento per quina raó un antibiòtic eficaç contra la tuberculosi no funciona contra la grip, citant diferències estructurals entre bacteris i virus.",
      "Dissenyo una mesura d'aïllament que reduiria el R₀ de la grip a la classe, justificant-la amb la via de transmissió específica.",
      "Explico per quina raó la febre alta és perillosa però la febre moderada és, de fet, una resposta beneficiosa del cos."
    ],
    B: [
      "Distingeixo entre bacteris (cèl·lules procariotes) i virus (no cèl·lules) i explico per quina raó els antibiòtics no funcionen contra la grip.",
      "Interpreto el R₀ de la simulació: si R₀>1, l'epidèmia s'estén; si R₀<1, s'extingeix.",
      "Identifico les vies de transmissió principals i relaciono cada via amb una mesura preventiva concreta.",
      "Explico per quina raó tenim febre i per quina raó la febre moderada és una resposta útil del cos."
    ],
    C: [
      "Distingeixo: bacteris (cèl·lules vives → antibiòtic pot matar-los) vs virus (no cèl·lules → antibiòtic no funciona).",
      "Reconec que si una persona infectada en contagia 3, l'epidèmia _____ (s'estén / s'extingeix).",
      "Identifico 2 vies de transmissió de la grip i 1 mesura preventiva per a cadascuna.",
      "Completo: la febre és la manera que té el cos de _____ la temperatura per dificultar la supervivència del patogen."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Durant el joc de rols: a la ronda 1 (lliure), anota amb qui interactues (dónes la mà o parles cara a cara). A la ronda 2, anota si portaves 'mascareta' (paper doblat) o no. Al final, compta quantes persones has 'contagiat' si la teva targeta era 'VIRUS': aquest és el teu R₀ personal.",
      challenge: "A partir de les dades de la simulació: calcula el R₀ mig de la classe a la ronda 1 i a la ronda 2, i el % de reducció. Compara'l amb el R₀ de la grip real (2–3) i el xarampió (12–18). Per quina raó el R₀ del xarampió és tan alt? Quina intervenció addicional faria que R₀ baixés per sota d'1?"
    },
    "2": {
      scaffold: "Omplena la taula: Bacteris → Té membrana cel·lular? (sí/no) → Pot reproduir-se sol? (sí/no) → L'antibiòtic el mata? (sí/no). Virus → el mateix. Pista: el virus necessita entrar dins una cèl·lula per copiar-se.",
      challenge: "Explica, pas a pas, com el virus de la grip entra, es replica i destrueix la cèl·lula hoste. Quina part de la cèl·lula usa com a 'fàbrica'? Connecta-ho amb la SA1 (nucli, ribosomes, membrana)."
    },
    "3": {
      scaffold: "Per a cada via de transmissió (aèria, contacte directe, fomites), escriu una mesura preventiva concreta. Pista: si va per l'aire → mascareta/ventilació; si va per contacte → rentar mans; si va per superfícies → desinfectar.",
      challenge: "La febre moderada (37.5–39°C) sembla paradoxal: el cos es 'fa mal' a si mateix pujant la temperatura. Justifica, des de la selecció natural, per quina raó l'evolució ha conservat aquesta resposta. Quin cost té pujar la temperatura, i per quina raó compensa igualment?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui comencem SA3 sobre els defensors del cos. Teniu dos enigmes a la paret que haureu de resoldre al final. Avui poseu la primera peça. Anoteu sense por — les idees prèvies no es corregeixen, es comparen al final.",
    prompts: [
      {
        kind: "write",
        text: "Pensa en l'última vegada que vas estar malalt/a. Per quina raó creus que vas agafar aquella malaltia? I per quina raó et vas curar?",
        starter: "Crec que vaig agafar-la perquè..."
      },
      {
        kind: "write",
        text: "Quina diferència creus que hi ha entre un bacteri i un virus? Per quina raó els antibiòtics no funcionen per a totes les malalties?",
        starter: "Crec que un bacteri és... i un virus és..."
      }
    ]
  },

  exploreInstructions: [
    "Cada alumne rep una targeta (ningú la mostra): la majoria estan en blanc, però 2-3 estan marcades 'VIRUS' en secret",
    "Activitat 1 (5 min): lliure circulació per l'aula — doneu la mà o parleu cara a cara amb 4 persones (simuleu interaccions normals)",
    "Activitat 2 (5 min): segona ronda — ara podeu 'posar-vos mascareta' (doblar el paper) si voleu. Seguiu interactuant",
    "Revelació: qui tenia el virus s'asseu; els que van interactuar amb ells (sense mascareta) s'assenten amb una creu",
    "Moment epistèmic: recompte a la pissarra → quants infectats per 'cas 0'? → aquest és el R₀ de la simulació"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Targetes (1 per alumne, 2-3 marcades 'VIRUS')", "Llista de contactes buida (per anotar interaccions)", "Pissarra per recompte col·lectiu"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa3-s1-t1.mp4",
      heading: "==Bacteris== vs ==virus==: l'enemic no és un de sol",
      text: "==Bacteris|r==: cèl·lules ==procariotes|o== amb membrana pròpia, es reprodueixen ells sols, l'==antibiòtic|g== pot matar-los. ==Virus|r==: no són cèl·lules, no tenen metabolisme propi, necessiten una ==cèl·lula hoste|o== per copiar-se — l'antibiòtic ==no els afecta|r==. Per la grip cal un ==antiviral==, no un antibiòtic.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa3-s1-t2.mp4",
      heading: "Per quina raó la grip es propaga tan ràpid — el ==R₀==",
      text: "==R₀== (nombre reproductiu bàsic): quantes persones contagia de mitjana 1 infectat. ==Grip==: R₀ ≈ 2–3 (cada cas genera 2 o 3 nous). ==Xarampió==: R₀ ≈ 12–18. ==Si R₀>1|r== → l'epidèmia creix. ==Si R₀<1|g== → s'extingeix. Vies: ==aire (droplets)|o==, contacte directe, superfícies (fomites).",
      type: "concept",
      badge: "🔢 Connexió simulació"
    },
    {
      id: "t3",
      apartat: "3",
      video: "/animacions/sa3-s1-t3.mp4",
      heading: "==Incubació==: el perill invisible",
      text: "==Període d'incubació==: temps entre la infecció i els primers símptomes. ==Grip==: 1–4 dies. Durant aquest temps es pot ser ==contagiós sense saber-ho|r== — per quina raó la grip s'estén tan ràpid: la gent va a classe sense saber que és portadora.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa3-s1-t4.mp4",
      heading: "Malalties ==infeccioses== vs ==no infeccioses==",
      text: "==Infeccioses|r==: causades per patògens (bacteris, virus, fongs, paràsits) → transmissibles (grip, tuberculosi, VIH). ==No infeccioses==: factors genètics, ambientals o d'estil de vida (==diabetis tipus 2|o==, ==càncer|r==, malaltia cardiovascular). Connexió SA2: l'anèmia del Marc era ==no infecciosa|o== (manca de ferro).",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "3",
      video: "/animacions/sa3-s1-t5.mp4",
      heading: "Per quina raó tenim ==febre==?",
      text: "La ==febre== és una resposta controlada: el cos puja la temperatura per ==dificultar la reproducció del patogen|o== i activar millor les cèl·lules immunitàries. ==Febre moderada (37.5–39°C)|g==: beneficiosa, no cal baixar-la de seguida. ==Febre alta (>39.5°C)|r==: cal tractament, pot ser perillosa per al cervell.",
      type: "concept",
      badge: "🌡️ Paradoxa beneficiosa"
    }
  ],

  fitxaUrl: "/fitxes/sa3-s1-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S1 — L'enemic entra",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Omple l'apartat 0 sense mirar el mòbil. Quina diferència creus que hi ha entre un bacteri i un virus? No es corregeix ara — el compararàs al final de la SA.", hints: [] },
      { apartat: "1", title: "Simulació del contagi", time: "25 min", phase: "explore", instruction: "Durant el joc de rols, omple el mapa de contactes de l'apartat 1: anota amb qui interactues a cada ronda. Després del recompte, calcula el R₀ de la teva targeta.", hints: [
        "Anota TOTES les interaccions, fins i tot les curtes. El virus no avisa.",
        "Segona ronda: anota si portaves 'mascareta' o no. Compararem els dos grups al final."
      ] },
      { apartat: "2", title: "Qui és l'enemic?", time: "20 min", phase: "explica", instruction: "Omple l'apartat 2: completa la taula bacteris vs virus i la definició de R₀. Per quina raó l'antibiòtic no funciona per a la grip?", hints: [
        "Pensa en la diferència estructural: un bacteri és una cèl·lula; un virus, no. L'antibiòtic ataca estructures cel·lulars — té sentit usar-lo contra alguna cosa que no és una cèl·lula?",
        "R₀: si a la simulació has 'infectat' 3 persones, el teu R₀ és 3."
      ] },
      { apartat: "3", title: "Com funciona la infecció?", time: "15 min", phase: "explica", instruction: "Apartat 3: completa el diagrama de vies de transmissió i les mesures preventives. Explica per quina raó la febre moderada pot ser beneficiosa.", hints: [
        "Cada via de transmissió suggereix una mesura: si va per l'aire → mascareta / ventilació. Si va per contacte → rentar mans. Lliga la causa amb la solució.",
        "Febre: el patogen també necessita una temperatura òptima per reproduir-se. Puja la teva temperatura → surts de la seva zona de confort."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "El teu company té grip i t'ha estossegat a la cara. Quina és la via de transmissió? Quin tipus de patogen és el virus de la grip i per quina raó un antibiòtic no el pot matar?", hint: "Identifica la via (aire/droplets). Recorda: l'antibiòtic ataca estructures de cèl·lules bacterianes. El virus de la grip... és una cèl·lula?" },
    { id: "q2", type: "open", text: "A la simulació, el R₀ de la classe ha estat de 2.4. Interpreteu-lo: s'estendria una epidèmia real amb aquest valor? Quina mesura hauria baixat el R₀ per sota d'1?", hint: "R₀>1 → expansió. R₀<1 → extinció. Quina de les mesures de l'apartat 3 redueix més el nombre de contactes efectius?" },
    { id: "q3", type: "multiple", text: "Quin dels patògens següents té el R₀ més alt?", options: ["Xarampió (R₀ ≈ 12–18)", "Grip estacional (R₀ ≈ 2–3)", "COVID-19 soca original (R₀ ≈ 5–7)", "Tuberculosi (R₀ ≈ 2–3)"], correct: 0 }
  ],

  homework: null, // S1 no té feina a casa — decisió de disseny (spec SA3-S1, 02/07/2026)
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (bacteris vs virus, R₀, febre)",
    "Fes el joc de rols simplificat: llança un dau — si treu 1 o 2, ets 'infectat'. Conta quantes persones fictícies contagiaries en R₀=2.5",
    "Omple la fitxa S1 apartats 0–3",
    "Exit tiquet en paper a S2 o online aquí"
  ],
  oaLinks: ["OA1"], competencies: ["CE2", "CE5"]
}
