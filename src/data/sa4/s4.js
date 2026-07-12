export const sa4s4 = {
  id: "s4", saId: "sa4",
  title: "Salut sexual i decisions",
  sessionNumber: 4, biome: "sa4", duration: "2h",
  engageImage: "/images/sa4-s4-salut-sexual.jpg",
  isFinalSession: true,

  engageQuestion: "Avui resolem l'enigma de la Laia i presenteu la vostra fitxa de respostes científiques. Però primer: dels mètodes anticonceptius que coneixeu, sabeu explicar com funcionen biològicament? I sabeu distingir els que protegeixen de les ISTs dels que no?",
  engageContext: "Posada en comú dels deures de S3 (imatges embrió/fetus, fonts). Connexió amb l'enigma de la Laia: avui veiem per quina raó el 'mètode del calendari' és poc fiable fins i tot si es coneix el dia d'ovulació. El producte final (fitxa de respostes) es presenta per grups i s'autoavalua amb el formulari Google.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Comparo l'eficàcia teòrica vs real (índex de Pearl) dels principals mètodes anticonceptius i explico per quina raó la diferència és major en els mètodes conductuals.",
      "Explico el mecanisme d'acció dels anticonceptius hormonals (inhibició de l'ovulació, canvis al moc cervical, endometri) i matiso el mite 'la píndola engreixa' amb evidència.",
      "Dissenyo una resposta a una pregunta real de la classe sobre sexualitat aplicant evidència científica i identificant possibles biaixos en la pregunta.",
      "Relaciono la prevenció del VIH amb el concepte d'immunitat (SA3): per quina raó el VIH destrueix el SI i fa vulnerable a infeccions oportunistes."
    ],
    B: [
      "Distingeixo els mètodes anticonceptius de barrera (preservatiu), hormonals (píndola, pegats, implant, DIU hormonal) i de llarga durada (DIU de coure) i n'explico el mecanisme d'acció bàsic.",
      "Explico per quina raó únicament el preservatiu protegeix simultàniament d'ISTs i d'embaràs no desitjat.",
      "Identifico les ISTs principals (VIH, herpes, HPV, clamidia) i les vies de transmissió i prevenció.",
      "Resolc l'enigma de la Laia: per quina raó el mètode del calendari és poc fiable malgrat conèixer el cicle."
    ],
    C: [
      "Completo: el preservatiu protegeix de les ISTs i de l'embaràs. La píndola protegeix de l'embaràs però NO de les ___.",
      "Identifico 3 ISTs i escric la via de transmissió principal de cadascuna i 1 mesura de prevenció.",
      "Completo: el mètode del calendari falla perquè el dia d'ovulació ___ d'un cicle a l'altre (pot variar per estrès, malaltia, etc.).",
      "Explico la resposta a 1 pregunta de la fitxa de respostes de la classe amb 2 frases científiques."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "2": {
      scaffold: "Omple la taula de mètodes anticonceptius: Preservatiu → Tipus: barrera · Protegeix ISTs: ___ · Com funciona: ___. Píndola → Tipus: hormonal · Protegeix ISTs: ___ · Com funciona: ___. DIU de coure → Tipus: dispositiu · Com funciona: ___.",
      challenge: "L'índex de Pearl mesura els embarassos no desitjats per 100 dones que fan servir un mètode durant 1 any. Preservatiu: Pearl 2 (ús perfecte) vs 18 (ús real). Analitza per quina raó la diferència és tan gran. Quin mètode té l'índex de Pearl més baix? Quines implicacions té per a les campanyes de salut pública?"
    },
    "3": {
      scaffold: "Omple la taula d'ISTs: VIH → Via transmissió: ___ · Prevenció: ___. HPV → Via transmissió: ___ · Vacuna disponible: ___. Clamidia → Via transmissió: ___ · Símptomes: ___. Herpes → Via transmissió: ___ · Curable?: ___.",
      challenge: "Per quina raó el VIH destrueix el SI de forma tan greu? Connecta amb SA3: els limfòcits T CD4+ que el VIH destrueix son els 'directors' de la resposta adaptativa. Si desapareixen, quines infeccions ataquen el cos? (infeccions oportunistes: pneumònia per Pneumocystis, toxoplasmosi). Relaciona-ho amb el concepte d'immunitat de grup (SA3)."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui és la sessió final de SA4. Presentareu la fitxa de respostes i resoldreu l'enigma de la Laia. Escriviu primer el que sabeu ja sobre mètodes anticonceptius i ISTs — comparareu amb el que sabreu al final.",
    prompts: [
      {
        kind: "write",
        text: "Quin(s) mètode(s) anticonceptiu(s) coneixes? Per quina raó creus que funcionen? Hi ha alguna diferència entre els que protegeixen de les ISTs i els que no?",
        starter: "Conec els mètodes... i crec que funcionen perquè..."
      },
      {
        kind: "write",
        text: "Si el cicle de la Laia dura 35 dies i sap que l'ovulació li passa cap al dia 21, per quina raó creus que el 'mètode del calendari' (evitar relacions els dies fèrtils) podria no ser prou fiable?",
        starter: "Crec que el mètode del calendari pot fallar perquè..."
      }
    ]
  },

  exploreInstructions: [
    "Per grups de 3: rebeu 1 pregunta real (anònima) de la classe sobre sexualitat/reproducció (5 targes en total)",
    "Tasca 1 (10 min): redacteu la resposta científica a la pregunta assignada. Font: la teoria d'avui + el que heu après a S1-S3",
    "Tasca 2 (10 min): presenteu la resposta (1 min per grup). Els altres grups valoren: 'correcta / incompleta / incorrecta' al formulari Google",
    "El docent corregeix i afegeix matisos (especialment en ISTs, eficàcia dels mètodes i resolució de l'enigma)",
    "Moment epistèmic: 'Responem preguntes reals amb ciència real — aquest és el producte final de la SA'"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["5 targetes de preguntes anònimes (1 per grup)", "Formulari Google (avaluació entre iguals + autoavaluació)", "Taula de mètodes anticonceptius i ISTs (fitxa S4)"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Preservatiu==: l'únic mètode de doble protecció",
      text: "El ==preservatiu|g== (masculí o femení): barrera física que impedeix el contacte entre gàmetes i fluids biològics. ==Doble protecció|g==: embaràs + ISTs. Eficàcia: ~98% (ús perfecte) / ~82% (ús real). És l'==únic mètode|g== que protegeix simultàniament d'embaràs i ISTs. Recomanació de salut pública: combinar amb un altre mètode anticonceptiu per màxima eficàcia contra l'embaràs (doble protecció).",
      type: "concept",
      video: "/animacions/sa4-s3-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Anticonceptius hormonals==: inhibir el cicle",
      text: "==Píndola combinada|o==: estrògens + progesterona sintètics → inhibeixen la secreció de FSH i LH → ==no hi ha ovulació|g==. Efectes secundaris possibles (individuals): nàusees, canvis d'humor, retenció de líquids. ==Mite 'la píndola engreixa'|r==: pot augmentar lleugerament el pes per retenció de líquids, però els estudis no mostren augment de teixit adipós. ==Altres formats==: pegats transdèrmics, anell vaginal, implant subcutani, DIU hormonal (progesterona local). ==Cap d'ells protegeix|r== de les ISTs.",
      type: "concept",
      video: "/animacions/sa4-s3-t2.mp4"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "Altres mètodes: ==DIU de coure== i el ==mètode del calendari==",
      text: "==DIU de coure|b==: dispositiu intrauterí no hormonal → els ions de coure son espermicides (tòxics per als espermatozoides). Eficàcia >99%. ==Esterilització== (vasectomia / lligadura de trompes): quirúrgic, permanent. ==Mètode del calendari|r==: evitar les relacions els dies estimats com a fèrtils. Molt poc fiable (eficàcia real ~76-88%) perquè el dia d'ovulació ==varia d'un cicle a l'altre|r== (estrès, malaltia, viatge) i els espermatozoides sobreviuen ==3-5 dies|o== a les trompes.",
      type: "concept",
      badge: "🧩 Enigma 1 — resolució",
      video: "/animacions/sa4-s3-t3.mp4"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "==ISTs==: infeccions de transmissió sexual",
      text: "==VIH|r== (virus): ataca els ==limfòcits T|r== (connexió SA3) → SIDA (immunodeficiència adquirida). Via: sang, fluids sexuals, lactància. Prevenció: preservatiu + no compartir material punxant. ==HPV|o== (virus): 100+ soques; algunes causen ==berrugues genitals|o==, algunes ==càncer de cèrvix|r==. Hi ha vacuna disponible per a nois i noies. ==Clamidia|p== (bacteri): molt freqüent, sovint ==asimptomàtica|r== → risc de no detectar-la. Tractament antibiòtic. ==Herpes|o== (virus): ==incurable|r== (el virus queda latent); el preservatiu redueix el risc però no el elimina totalment.",
      type: "concept",
      video: "/animacions/sa4-s3-t4.mp4"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Resolució ==enigma 1==: per quina raó el mètode del calendari falla",
      text: "La Laia sap que ovula ~dia 21 però el dia d'ovulació ==no és fix|r==: pot variar ±3-5 dies per estrès, malaltia, canvi d'horari o qualsevol factor que alteri la secreció de FSH/LH. A més, els espermatozoides ==sobreviuen 3-5 dies|o== a les trompes: una relació del dia 18 pot fecundar un òvul del dia 23. Conclusió: el mètode del calendari, per si sol, és el ==menys fiable|r== dels mètodes. Requereix combinar-se amb signes biològics (temperatura basal, moc cervical) i fins i tot llavors té una taxa de fallada notable. ==✅ Enigma 1 resolt==.",
      type: "synthesis",
      badge: "✅ Enigma 1 — resolt",
      video: "/animacions/sa4-s3-t5.mp4"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Comparativa de mètodes anticonceptius", src: "/images/sa4-g5-metodes-anticonceptius.svg", note: "Taula amb: nom del mètode, tipus, eficàcia (ús perfecte / real), protecció ISTs (sí/no), mecanisme d'acció." }
  ],

  fitxaUrl: "/fitxes/sa4-s4-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S4 — Salut sexual i decisions",
    steps: [
      { apartat: "0", title: "Idees prèvies — resolució enigma", time: "5 min", phase: "engage", instruction: "Apartat 0: escriu per quina raó creus que el mètode del calendari pot fallar per a la Laia malgrat saber que ovula al dia 21. Compara amb el que vas escriure a S2.", hints: [] },
      { apartat: "1", title: "Fitxa de respostes (per grups)", time: "20 min", phase: "explore", instruction: "Apartat 1: amb el teu grup, redacta la resposta científica a la pregunta assignada de la fitxa de respostes. Useu evidència de S1-S4.", hints: [
        "Una bona resposta científica: (1) Respon directament la pregunta. (2) Cita el mecanisme biològic. (3) Menciona les excepcions o matisos importants.",
        "Si la pregunta és sobre anticonceptius: recorda especificar si el mètode protegeix o no de les ISTs — és una diferència clau."
      ] },
      { apartat: "2", title: "Mètodes anticonceptius", time: "20 min", phase: "explica", instruction: "Apartat 2: omple la taula de mètodes. Per a cada un: tipus (barrera/hormonal/dispositiu), com funciona, eficàcia, protegeix les ISTs?", hints: [
        "Clau: únicament el preservatiu protegeix simultàniament d'embaràs i ISTs. Tots els altres son anticonceptius, no protectors d'ISTs.",
        "Mètode del calendari: per quina raó és el menys fiable? Perquè assumeix que l'ovulació és fixa — però no ho és (varia ±3-5 dies)."
      ] },
      { apartat: "3", title: "ISTs i resolució enigma", time: "15 min", phase: "explica", instruction: "Apartat 3: omple la taula d'ISTs. Resol l'enigma de la Laia: per quina raó el dia d'ovulació pot variar i per quina raó els espermatozoides de dies anteriors poden fecundar un òvul posterior.", hints: [
        "ISTs: per a cadascuna, identifica si és bacteriana o vírica. Això afecta el tractament: les bacterianes (clamidia) es tracten amb antibiòtic; les víriques (VIH, herpes, HPV) no es curen però es poden prevenir i controlar.",
        "Resolució enigma: dos factors clau — (1) variació del dia d'ovulació (±3-5 dies), (2) supervivència dels espermatozoides 3-5 dies a les trompes."
      ] }
    ]
  },

  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica la diferència entre el preservatiu i la píndola en termes de: (a) mecanisme d'acció biològic, (b) protecció d'ISTs, (c) eficàcia. Per quina raó es recomana la 'doble protecció' (preservatiu + píndola)?", hint: "Preservatiu: barrera física, protegeix ISTs, eficàcia ~82-98%. Píndola: inhibeix l'ovulació (hormonal), NO protegeix ISTs, eficàcia >99% (ús perfecte). Doble protecció: minimitza el risc d'embaràs i afegeix protecció d'ISTs." },
    { id: "q2", type: "open", text: "Resol l'enigma de la Laia: per quina raó no pot fiar-se del 'mètode del calendari' malgrat saber que ovula ~al dia 21?", hint: "Dos factors: (1) el dia d'ovulació varia ±3-5 dies (estrès, malaltia, etc.) → avui ovula al 21, el mes que ve pot ser al 19 o al 24; (2) els espermatozoides sobreviuen 3-5 dies → una relació del dia 17 pot fecundar un òvul del dia 21." }
  ],
  exitTicketNote: "Avaluació CE1 + CE5. Individual, formulari Google autocorrectiu.",

  deliverables: [
    { name: "Fitxa de respostes científiques (5 preguntes de la classe)", note: "Entrega a Classroom. Format: pregunta → resposta científica (2-4 frases) → font (teoria de S2/S3/S4). Una pregunta per grup, més la revisió de les altres 4." }
  ],

  homework: {
    description: "Acabar la fitxa de respostes científiques i entregar a Classroom.",
    deadline: "2026-01-XX (1 setmana)"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (mètodes anticonceptius, ISTs, resolució enigma Laia)",
    "Omple la taula de mètodes anticonceptius (eficàcia, protecció ISTs, mecanisme d'acció)",
    "Escriu la resolució de l'enigma de la Laia (2 factors: variació de l'ovulació + supervivència espermatozoides)",
    "Entrega la fitxa de respostes a Classroom"
  ],
  oaLinks: ["OA4"], competencies: ["CE1", "CE5"]
}
