export const sa3s4 = {
  id: "s4", saId: "sa3",
  title: "Medicaments: com actuen",
  sessionNumber: 4, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s4-farmacs.jpg",

  engageQuestion: "La teva mare et dóna un antibiòtic perquè tens grip. El teu pare et diu que no el prenguis. Qui té raó? Avui descobriràs com actuen els medicaments per dins — i per quina raó «millorar» no sempre prova que un fàrmac ha funcionat.",
  engageContext: "Revisió formulari comprensió prèvia (S3 deures). El docent explica l'estructura de la sessió: primer les estacions de medicaments, després el mecanisme molecular, i finalment automedicació i efecte placebo.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Classifico els fàrmacs per mecanisme d'acció i distingeixo tractar el símptoma de tractar la causa.",
      "Explico el mecanisme molecular de l'ibuprofèn (inhibició de l'enzim COX) i les conseqüències per a l'estómac.",
      "Analitzo les resistències bacterianes als antibiòtics com a conseqüència de la selecció natural.",
      "Dissenyo un experiment controlat amb grup placebo per distingir l'efecte real d'un fàrmac d'una simple expectativa."
    ],
    B: [
      "Classifico els fàrmacs en 4 famílies (analgèsics, antitèrmics, antisèptics, antiinflamatoris) segons per a què serveixen i on actuen.",
      "Explico amb un model senzill com actua un fàrmac (p. ex. l'ibuprofèn bloqueja l'enzim COX).",
      "Justifico per quina raó automedicar-se (sobretot antibiòtics per a virus) és un risc.",
      "Distingeixo que un fàrmac tracta el símptoma i que «millorar» no prova per si sol que el fàrmac funcioni (efecte placebo)."
    ],
    C: [
      "Sé que els fàrmacs es classifiquen per la seva funció: analgèsics, antitèrmics, antisèptics i antiinflamatoris.",
      "Sé que l'ibuprofèn bloqueja l'enzim COX i per això baixa el dolor i la inflamació.",
      "Sé que automedicar-se (sobretot antibiòtics per a virus) és perillós.",
      "Sé que l'efecte placebo és quan millores sense principi actiu, només per expectativa."
    ]
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui descobriràs com actuen els medicaments per dins. Escriu el que en saps ara — ho compararàs al final de la sessió.",
    prompts: [
      {
        kind: "write",
        text: "Què prens quan tens mal de cap? I quan tens febre? És el mateix medicament?",
        starter: "Quan tinc mal de cap prenc... i quan tinc febre..."
      },
      {
        kind: "write",
        text: "Saps què fa la pastilla dins el teu cos, o només saps que al cap d'una estona el dolor marxa?",
        starter: "Crec que la pastilla..."
      }
    ]
  },

  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      video: "/animacions/sa3-s4-t1.mp4",
      heading: "==Antibiòtics==: arma de doble tall",
      text: "Els ==antibiòtics|g== maten o frenen bacteris atacant estructures pròpies dels ==procariotes== (paret cel·lular, ribosomes 70S). ==No funcionen contra virus|r==. La ==grip és un virus|r== → antibiòtic ineficaç i contraproduent. ==Resistències|r==: ús excessiu → selecció natural → bacteris resistents (==superbugs|r==). ==No automedicar-se|o==: cada antibiòtic té un bacteri diana, ús incorrecte és pitjor que no prendre'n.",
      type: "concept",
      badge: "⚕️ No automedicació"
    },
    {
      id: "t2",
      apartat: "1",
      video: "/animacions/sa3-s4-t2.mp4",
      heading: "==Analgèsics== i ==antipirètics==: no tot és igual",
      text: "==Paracetamol==: analgèsic + antipirètic. Actua al cervell. Risc hepàtic si s'abusa. ==Ibuprofèn|o==: AINE — analgèsic + antiinflamatori + antipirètic. Actua als teixits. Risc gàstric. ==Cap dels dos mata el virus|r== — tracten els símptomes mentre el SI lluita. Mai combinar sense prescripció. La febre moderada és beneficiosa (S1): ==no cal baixar-la sempre|o==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      video: "/animacions/sa3-s4-t3.mp4",
      heading: "El fàrmac tracta el ==símptoma==, no sempre la ==causa==",
      text: "Cadena: ==patogen|r== → malaltia → símptoma (dolor, febre) → fàrmac. L'==ibuprofèn|o== bloqueja l'enzim ==COX== → menys prostaglandines → menys dolor i inflamació (però les prostaglandines també protegeixen l'estómac: per això pot irritar-lo). L'==antibiòtic|g== ataca estructures pròpies dels bacteris → ==no té diana en un virus|r==. Baixar la febre amb paracetamol ==no cura la infecció|r==: només alleuja el símptoma mentre el sistema immunitari fa la feina.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa3-s4-t4.mp4",
      heading: "==Automedicació== i efecte ==placebo==",
      text: "Automedicar-se sense llegir el prospecte (p. ex. combinar ibuprofèn i paracetamol, o prendre antibiòtics que sobren) pot ser perillós. ==Efecte placebo|o==: una pastilla sense principi actiu pot reduir el dolor de debò — el cervell allibera ==endorfines== quan espera millorar. Per això cap fàrmac es valida sense grup placebo: ==«millorar» després de prendre alguna cosa no demostra per si sol que aquella cosa hagi funcionat|r==.",
      type: "concept",
      badge: "🔬 Pensament crític"
    }
  ],

  fitxaUrl: "/fitxes/sa3-s4-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S4 — Medicaments: com actuen",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: escriu què prens per al mal de cap i per a la febre, i si saps què fa realment la pastilla dins el cos.", hints: [] },
      { apartat: "1", title: "Estacions de medicaments", time: "30 min", phase: "explore", instruction: "Apartat 1: omple la graella de fàrmacs (analgèsic / antitèrmic / antisèptic / antiinflamatori): per a què serveix, on actua, si cal recepta. Compte amb la trampa: el paracetamol i l'ibuprofèn surten a més d'una família!", hints: [
        "El paracetamol és analgèsic i antitèrmic però NO antiinflamatori. L'ibuprofèn és els tres — per quina raó? Pensa en el mecanisme COX.",
        "L'antisèptic actua a la pell (mata microbis per contacte); els altres actuen per dins el cos."
      ] },
      { apartat: "2", title: "Com actuen per dins", time: "25 min", phase: "explica", instruction: "Apartat 2: completa la cadena causa → malaltia → símptoma → fàrmac, i les frases sobre l'ibuprofèn (enzim COX) i per quina raó un antibiòtic no serveix per a la grip.", hints: [
        "Antibiòtic vs antiviral: un ataca cèl·lules (procariotes), l'altre no. La grip no té cèl·lules pròpies → l'antibiòtic no té diana.",
        "Resistències: imagina que mors el 99% dels bacteris amb antibiòtic. El 1% que sobreviu és el més resistent. Quan es reprodueix, tota la colònia és resistent."
      ] },
      { apartat: "3", title: "Automedicació, placebo i cas Yasmina", time: "15 min", phase: "explica", instruction: "Apartat 3: analitza el cas Yasmina (antibiòtics per a la grip + ibuprofèn i paracetamol sense llegir el prospecte) i explica per quina raó «millorar el dia 5» no demostra que els antibiòtics funcionessin.", hints: [
        "Placebo: el cervell allibera endorfines quan espera millorar — per això cap fàrmac es valida sense grup placebo.",
        "La Yasmina podria haver-se curat igualment (la grip dura uns 5-7 dies) encara que no hagués pres els antibiòtics."
      ] }
    ]
  },

  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Tria un fàrmac (ibuprofèn, paracetamol o un antisèptic) i explica en 2-3 frases on actua i què atura dins el cos.", hint: "Ibuprofèn → bloqueja COX → menys prostaglandines → menys dolor i inflamació. Antisèptic → actua a la pell, mata microbis per contacte." },
    { id: "q2", type: "open", text: "En Pau té mal de coll víric i es pren un antibiòtic que li va sobrar. Dona dues raons per les quals és una mala decisió.", hint: "(1) L'antibiòtic no té diana en un virus — no el matarà. (2) Contribueix a les resistències bacterianes si en queden bacteris exposats sense necessitat." },
    { id: "q3", type: "open", text: "La iaia diu: «em vaig prendre una til·la i el mal de cap va marxar, així que la til·la cura el mal de cap». Per quina raó això NO és una prova? Què caldria per saber-ho de debò?", hint: "El mal de cap també hauria pogut marxar sol. Caldria un assaig amb grup placebo: comparar persones que prenen til·la real amb persones que prenen una til·la «buida» sense saber-ho." }
  ],
  exitTicketNote: "Avaluació formativa OA4.",

  homework: {
    description: "Pensa en una substància que creus que pot generar dependència i una raó. Ho comentareu en veu alta a l'inici de S5 (no cal recerca).",
    note: "Lectura prèvia disponible per a S5 (drogues, addicció i síntesi de la SA).",
    deadline: "2026-11-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (famílies de fàrmacs, mecanisme COX, automedicació, placebo)",
    "Omple la taula de famílies de fàrmacs (analgèsic / antitèrmic / antisèptic / antiinflamatori)",
    "Explica per quina raó un antibiòtic no serveix per a un virus i per quina raó cal un grup placebo per validar un fàrmac",
    "Exit tiquet online aquí"
  ],
  oaLinks: ["OA4"], competencies: ["CE2"]
}
