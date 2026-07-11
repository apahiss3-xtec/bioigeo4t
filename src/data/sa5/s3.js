export const sa5s3 = {
  id: "s3", saId: "sa5",
  title: "Viure junts (i de vegades enfrontat)",
  sessionNumber: 3, biome: "sa5", duration: "2h",
  engageImage: "/images/sa5-s3-relacions.jpg",

  engageQuestion: "La cotorra argentina i el teuladí mengen les mateixes llavors. El poll s'alimenta de la sang del teuladí. La figuera depèn d'una vespa específica per pol·linitzar-se. El líquen és en realitat un fong i una alga vivint junts. Quina cosa tenen en comú totes aquestes situacions? I en quina mesura es diferencien?",
  engageContext: "Presentació de la 3a pista de l'enigma: la cotorra no tan sols competeix amb el teuladí pels aliments, sinó que competeix activament pels nius. S'obre el debat: hi ha relacions entre éssers vius que beneficien tothom, d'altres que perjudiquen algú. Quin tipus de relació és la pitjor per a la biodiversitat?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Classifico qualsevol relació entre espècies (intra o interespecífica) identificant els signes +/−/0 de cada participant i argumento si és simbiosi, comensalisme, amensalisme, depredació o competència.",
      "Explico per quina raó la competència interespecífica tendeix a l'exclusió competitiva a llarg termini (principi de Gause) i quines condicions la poden evitar (partició de nínxol).",
      "Explico el cicle del carboni complet (fotosíntesi, respiració, combustió, descomposició, calcificació) i el relaciono amb l'augment de CO₂ atmosfèric i el canvi climàtic.",
      "Argumento per quina raó el nitrogen atmosfèric (N₂) no pot ser usat directament per les plantes i explico el paper dels bacteris nitrificants i desnitrificants."
    ],
    B: [
      "Classifico les relacions interespecífiques (depredació, parasitisme, mutualisme, comensalisme, competència) i indico el signe (+/−/0) per a cada participant.",
      "Distingeixo relació intraespecífica (mateixa espècie) d'interespecífica (espècies diferents) amb exemples concrets.",
      "Explico el cicle del carboni: on s'emmagatzema el carboni (atmosfera, éssers vius, sòl, oceans) i com circula (fotosíntesi, respiració, descomposició).",
      "Explico el paper dels descomponedors en el cicle dels nutrients i per quina raó son indispensables per a la vida."
    ],
    C: [
      "Completo: en la relació depredació, el depredador (+) s'alimenta de la ___ (−). En el parasitisme, el paràsit (+) viu ___ i perjudica ___.",
      "Distingeixo: relació intraespecífica = entre individus de la ___ espècie. Interespecífica = entre individus d'espècies ___.",
      "En el cicle del carboni: les plantes capturen CO₂ per ___ i el retornen a l'atmosfera per ___. Quan una planta mor, els ___ el retornen als minerals.",
      "Completo: els descomponedors son organismes com ___ i ___ que desintegren la matèria ___ i retornen els nutrients al ___."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "2": {
      scaffold: "Per a cada relació, indica quin organisme surt guanyador (+), perdedor (−) o neutral (0): Depredació: llop/conill → llop ___, conill ___. Parasitisme: poll/teuladí → poll ___, teuladí ___. Mutualisme: abella/flor → abella ___, flor ___. Comensalisme: cotorra/estructura metàl·lica → cotorra ___, estructura ___.",
      challenge: "El principi de Gause (1934) diu que dues espècies no poden coexistir indefinidament si ocupen exactament el mateix nínxol ecològic (exclusió competitiva). Però a la natura s'observen milers d'espècies similars que conviuen. Com és possible? Investiga el concepte de 'partició del nínxol' i posa un exemple real."
    },
    "3": {
      scaffold: "Cicle del carboni: omple els buits. Les plantes capturen CO₂ per ___ (reacció en cloroplasts). Tots els éssers vius retornen CO₂ per ___. Quan un ésser viu mor, els ___ el descomponen alliberant CO₂ i minerals. El carboni s'emmagatzema a llarg termini en ___ i ___.",
      challenge: "El metà (CH₄) és un gas d'efecte hivernacle 25 vegades més potent que el CO₂. On entra el metà en el cicle del carboni? Quines activitats humanes n'incrementen l'emissió? Connecta-ho amb el que has après sobre els descomponedors (bacteris anaerobis)."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui classifiquem totes les relacions possibles entre éssers vius i aprendrem com circula la matèria. Al final, resoldrem gairebé del tot l'enigma de la cotorra.",
    prompts: [
      {
        kind: "write",
        text: "Pensa en 3 relacions entre éssers vius que coneguis. Per a cada una, indica si els dos organismes surten guanyant, un guanya i l'altre perd, o una altra cosa. Quina creus que és la relació més freqüent a la natura?",
        starter: "Les relacions que conec son... La més freqüent crec que és..."
      },
      {
        kind: "write",
        text: "El carboni que tens al cos (a les proteïnes, els greixos, l'ADN) d'on ve? I quan moris, on anirà? Descriu el 'viatge' del carboni per la biosfera.",
        starter: "El carboni del meu cos ve de... i quan mori anirà a..."
      }
    ]
  },

  exploreInstructions: [
    "Per grups de 3: rebeu 6 targetes de casos de relacions (un per targeta). Per a cada cas, identifiqueu: quines espècies hi ha, quin organisme es beneficia (+), quin és perjudicat (−) i quin és neutral (0)",
    "Casos: 1) Cotorra vs teuladí (nius i menjar). 2) Poll vs ocell. 3) Abella vs flor. 4) Remora vs tauró. 5) Líquen (fong + alga). 6) Àcars de l'alzina vs gal·les (excrescències)",
    "Tasca 1 (15 min): classifiqueu cada cas en la taula de la fitxa (depredació / parasitisme / mutualisme / comensalisme / competència / simbiosi) i justifiqueu el signe per a cada participant",
    "Tasca 2 (10 min): posada en comú a la pissarra. El docent sistematitza les 5 categories",
    "Moment epistèmic: la cotorra i el teuladí és un cas de competència interespecífica. Per quina raó la cotorra guanya? L'exclusió competitiva: dues espècies no poden coexistir indefinidament en el mateix nínxol"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["6 targetes de casos per grup (impressió prèvia)", "Taula de classificació a la fitxa", "Pissarra: taula de signes +/−/0"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa5-s3-t1.mp4",
      heading: "Relacions ==intraespecífiques== vs ==interespecífiques==",
      text: "Les relacions entre éssers vius es classifiquen primer per a qui impliquen. ==Intraespecífiques==: entre individus de la ==mateixa espècie|g==. Exemples: competència per territori, jerarquia de dominància, comportament cooperatiu (ramades, rucs). ==Interespecífiques==: entre individus d'==espècies diferents|o==. Son les més variades i determinen l'estructura de les comunitats ecològiques. Dins de les interespecífiques, el signe (+/−/0) de cada participant ens indica quin tipus de relació és.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa5-s3-t2.mp4",
      heading: "==Competència== i ==exclusió competitiva==",
      text: "==Competència interespecífica|r== (−/−): dues espècies que utilitzen els mateixos recursos limitats (menjar, nius, territori, llum). Totes dues en surten perjudicades. Exemple: cotorra argentina vs teuladí. El ==principi d'exclusió competitiva|r== (Gause, 1934): dues espècies que ocupen exactament el mateix nínxol no poden coexistir indefinidament — una acaba desplaçant l'altra. La cotorra guanya perquè és ==més agressiva|r==, fa nius ==col·lectius grans i defensables|r== (avantatge estructural) i té una ==taxa de reproducció|r== lleugerament superior en ambient urbà. Connexió enigma 1: tercer factor identificat.",
      type: "concept",
      badge: "🧩 Enigma 1 — pista 3"
    },
    {
      id: "t3",
      apartat: "2",
      video: "/animacions/sa5-s3-t3.mp4",
      heading: "Altres relacions interespecífiques: ==depredació==, ==parasitisme==, ==mutualisme==",
      text: "==Depredació|r== (+/−): el depredador (+) captura i consumeix la presa (−). Controla les poblacions de preses. Exemple: guineu/conill. ==Parasitisme|r== (+/−): el paràsit (+) viu a expenses de l'hoste (−) sense matar-lo (normalment). Exemples: polls, paràsits intestinals, virus. ==Mutualisme|g== (+/+): totes dues espècies en surten beneficiades. Exemples: abella/flor (pol·linització), líquen (fong+alga), bacteris intestinals humans/nosaltres (connexió SA3: microbiota). ==Comensalisme|o== (+/0): un es beneficia, l'altre és neutral. Exemple: remora que viatja enganxada al tauró.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa5-s3-t4.mp4",
      heading: "El ==cicle del carboni==: la matèria és cíclica",
      text: "A diferència de l'energia (que es perd com a calor), la ==matèria és cíclica|g==: el carboni circula sense parar entre l'atmosfera, els éssers vius, el sòl i els oceans. ==Fotosíntesi|g==: plantes capturen CO₂ → matèria orgànica. Connexió SA1: cloroplast + llum → glucosa. ==Respiració cel·lular|o==: tots els éssers vius alliberen CO₂ (connexió SA1: mitocondri → ATP + CO₂). ==Descomposició|b==: bacteris i fongs descomponen matèria orgànica morta → minerals i CO₂ retornen al medi. ==Combustió|r==: la crema de combustibles fòssils allibera CO₂ que havia quedat segrestat durant milions d'anys → desequilibra el cicle. Connexió SA6 (canvi climàtic).",
      type: "concept",
      badge: "🔗 Connexió SA1 + SA6"
    },
    {
      id: "t5",
      apartat: "3",
      video: "/animacions/sa5-s3-t5.mp4",
      heading: "==Descomponedors== i cicle del ==nitrogen==",
      text: "Els ==descomponedors|g== (bacteris i fongs) son el tancament imprescindible de tots els cicles: sense ells, la matèria orgànica morta s'acumularia i els nutrients no tornarien al sòl per als productors. ==Cicle del nitrogen==: el nitrogen atmosfèric (N₂ = 78% de l'aire) ==no pot usar-se directament|r== per les plantes. Cal que ==bacteris fixadors|g== (Rhizobium als llegums) el converteixin en amoníac (NH₃) i nitrats (NO₃⁻), que les plantes ja poden absorbir. Els ==bacteris desnitrificants|o== el retornen a l'atmosfera com a N₂. Els humans trenquem el cicle amb els ==fertilitzants nitrogenats|r== (eutrofització, connexió SA6).",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Taula de relacions interespecífiques", src: "/images/sa5-g4-relacions.svg", note: "Taula resum de les 5 relacions interespecífiques amb signe (+/−/0) per a cada participant, exemple d'espècies i descripció breu." },
    { id: "G2", apartat: "3", title: "Cicle del carboni simplificat", src: "/images/sa5-g5-cicle-carboni.svg", note: "Diagrama circular amb 4 reservoris (atmosfera, éssers vius, sòl/matèria orgànica, oceans) i els 4 fluxos principals (fotosíntesi, respiració, descomposició, combustió)." }
  ],

  fitxaUrl: "/fitxes/sa5-s3-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S3 — Viure junts (i de vegades enfrontat)",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: anota 3 relacions entre éssers vius que coneguis i indica qui surt guanyant. Reflexiona sobre el viatge del carboni del teu cos.", hints: [] },
      { apartat: "1", title: "Joc de classificació de relacions", time: "25 min", phase: "explore", instruction: "Apartat 1: classifica els 6 casos de la targeta en la taula (depredació/parasitisme/mutualisme/comensalisme/competència) i indica el signe +/−/0 per a cada participant. Justifica cada classificació.", hints: [
        "Clau: identifica primer qui DONA alguna cosa i qui REP alguna cosa. Si tots dos reben → mutualisme. Si un rep i l'altre no → comensalisme. Si un rep i l'altre pateix → depredació o parasitisme. Si tots dos pateixen → competència.",
        "La diferència entre depredació i parasitisme: en la depredació, el depredador mata i consumeix la presa. En el parasitisme, el paràsit viu a expenses de l'hoste sense matar-lo (normalment)."
      ] },
      { apartat: "2", title: "Relacions entre espècies", time: "15 min", phase: "explica", instruction: "Apartat 2: omple la taula de relacions (G1) i respon: la cotorra vs teuladí és una relació de competència (+/−) o de depredació (+/−/−)? Per quina raó la cotorra guanya?", hints: [
        "Competència: tots dos participants es veuen perjudicats (−/−) perquè competeixen pels mateixos recursos. El que ho suporta millor és el que sobreviu.",
        "Principi d'exclusió competitiva: dues espècies no poden compartir exactament el mateix nínxol indefinidament. Quina té avantatge en nius, agressivitat i reproducció?"
      ] },
      { apartat: "3", title: "Cicle del carboni i descomponedors", time: "15 min", phase: "explica", instruction: "Apartat 3: omple el diagrama del cicle del carboni (G2) indicant el nom de cada flux (fotosíntesi, respiració, descomposició, combustió). Explica per quina raó la matèria és cíclica però l'energia no.", hints: [
        "Energia: quan un organisme crema ATP, l'energia es dissipa com a calor i no pot ser recuperada. La matèria (carboni, nitrogen, oxigen) en canvi es recicla: el CO₂ que exhales pot ser captat per una planta en 10 minuts.",
        "Descomponedors: sense ells, tota la matèria orgànica morta s'acumularia (imagina un bosc sense fongs ni bacteris del sòl). Son l'últim eslabó que tanca el cicle."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Classifica les relacions següents i indica el signe (+/−/0) per a cada participant: a) Gat/ratolí b) Poll/persona c) Bacteris intestinals/persona d) Dues cotorres competint pel mateix niu", hint: "Gat/ratolí → depredació (+/−). Poll/persona → parasitisme (+/−). Bacteris intestinals → mutualisme (+/+). Dues cotorres → competència intraespecífica (−/−)." },
    { id: "q2", type: "open", text: "Explica per quina raó la matèria (carboni, nitrogen) és cíclica però l'energia no. Quina funció fan els descomponedors en el cicle del carboni?", hint: "L'energia es dissipa com a calor i no es pot recuperar. La matèria canvia de forma (orgànica ↔ mineral) però no es destrueix. Descomponedors: converteixen matèria orgànica morta en minerals que els productors poden absorbir." },
    { id: "q3", type: "multiple", text: "Quin tipus de relació s'estableix entre les arrels dels llegums i els bacteris Rhizobium que fixen el nitrogen atmosfèric?", options: ["Parasitisme", "Competència", "Mutualisme", "Depredació"], correct: 2 }
  ],

  homework: {
    description: "Busca una espècie invasora a Catalunya (diferent de la cotorra argentina). Anota: nom científic i comú, origen, any d'introducció, per quina raó ha tingut èxit i quin impacte té en la xarxa tròfica local. Porta les dades a S4 per a la investigació de l'entorn.",
    note: "Requereix consultar fonts científiques (IUCN, DIBA, Generalitat de Catalunya). No delegable completament a IA.",
    deadline: "2026-03-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (relacions inter/intraespecífiques, competència, cicle del carboni, descomponedors)",
    "Classifica 4 relacions entre espècies (depredació/parasitisme/mutualisme/comensalisme/competència)",
    "Omple el diagrama del cicle del carboni (G2)",
    "Omple la fitxa S3 apartats 0-3",
    "Exit tiquet en paper a S4"
  ],
  oaLinks: ["OA3"], competencies: ["CE4", "CE5"]
}
