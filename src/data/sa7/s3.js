export const sa7s3 = {
  id: "s3", saId: "sa7",
  title: "De les roques als recursos",
  sessionNumber: 3, biome: "sa7", duration: "2h",
  engageImage: "/images/sa7-s3-recursos.jpg",

  engageQuestion: "Quin material és el terra de la nostra aula? Les parets? El sostre? Les cadires? Si busquem l'origen de cada material, gairebé tots venen de la Terra: pedra, sorra, argila, ferro, alumini, guix... Quant contamina produir-los? I si s'esgoten?",
  engageContext: "El docent fa una volta visual per l'aula: el terra (gres o marbre), les parets (guix = mineral), el sostre (formigó de ciment = calcari + argila calcinats), les finestres (vidre = sorra de quars fosa), les cadires (acer = mineral de ferro). Debat: tots aquests materials existiran sempre o s'esgotaran? Quins son renovables? Connexió SA6: el ciment emet ≈8% del CO₂ global — per quina raó un material «de pedra» contamina tant?",

  levelObjectives: {
    A: [
      "Explico les 3 etapes del procés de formació del carbó (etapificació: torba → lignit → hulla → antracita) i del petroli (origen biogènic, migració, trampa geológica) i argumento per quina raó son «no renovables» en l'escala de temps humana tot i que es renoven en l'escala geológica.",
      "Calculo l'impacte de CO₂ del ciment (extracció del calcari → descarbonatació: CaCO₃ → CaO + CO₂, ≈8% de les emissions globals) i el comparo amb l'impacte de l'acer i l'alumini. Argumento quin material és més «sostenible» tenint en compte el reciclatge.",
      "Avaluo l'impacte paisatgístic i ambiental d'una pedrera de calcari usant els criteris de CE6 (paisatge / biodiversitat / contaminació hídrica / rehabilitació) i proposo mesures de minimització de l'impacte.",
      "Relaciono el cicle del carboni geológic (SA6) amb la formació de roques calcàries: el CO₂ atmosfèric fixat per organismes marins fa 100 Ma és el calcari de Cardona; quan el cremem (ciment) el retornem a l'atmosfera en qüestió de mesos."
    ],
    B: [
      "Distingeixo minerals de roques amb exemples: el quars és un mineral (SiO₂ sempre), el granit és una roca (barreja de quars + feldspat + mica).",
      "Explico la formació dels combustibles fòssils (carbó: de boscos del Carbonífer; petroli: d'organismes marins) i per quina raó son no renovables a escala humana.",
      "Identifico els principals recursos geológics de Catalunya (pedra calcària per al ciment, pissarra pirinenca, potassa de Cardona/Sallent, arenisques) i la seva aplicació industrial.",
      "Explico l'impacte ambiental de l'extracció minera (pedreres obertes, contaminació hídrica, impacte paisatgístic) i la necessitat de rehabilitació del paisatge."
    ],
    C: [
      "Completo: un mineral sempre té la mateixa composició química. El quars és sempre ___. El calcari és una roca perquè conté el mineral ___  i sovint restes de ___.",
      "Completo: els combustibles fòssils (carbó, petroli, gas natural) es van formar fa ___ milions d'anys. El carbó ve de restes de ___ (plantes/animals) enterrades i compactades. El petroli ve de restes de ___ (plantes/animals) marines.",
      "Completo: 3 recursos geológics importants de Catalunya: 1. ___ (s'usa per fer ciment), 2. ___ (cobertes de les cases als Pirineus), 3. ___ (sal de potassi que s'exporta del Bages).",
      "Completo la connexió SA6: per produir ciment cal calcinar el calcari a 1.450 °C. Això allibera ___ a l'atmosfera. El ciment és responsable del ___% de les emissions globals de CO₂."
    ]
  },

  apartatExtras: {
    "2": {
      scaffold: "Omple la taula de recursos geológics: recurs / tipus (mineral/roca/fòssil) / on s'extreu / ús principal / és renovable? (sí/no / a quina escala?). Afegeix: calcari, pissarra, potassa, granit, carbó, petroli, sorra de quars.",
      challenge: "La mina de potassa de Sallent (Bages) genera una muntanya de sal blanca visible des de l'autovia. La potassa s'usa com a adob agrícola i s'exporta a tot el món. Investiga: quin és el cicle de vida de la potassa (des de la mina fins al camp)? Quin impacte paisatgístic té la muntanya de sal? Quines mesures de rehabilitació s'han proposat? Avalua si l'activitat és ambientalment sostenible o no (usa criteris CE6 i CE2)."
    },
    "3": {
      scaffold: "Llegeix el text de la teoria sobre l'impacte del ciment. Respon: 1. Per quina raó el ciment emet CO₂ (quin procés químic)? 2. Quin percentatge de les emissions globals de CO₂ representa? 3. Quines alternatives existeixen per reduir l'impacte? Escriu les respostes en frases curtes.",
      challenge: "L'alumini és el metall més abundant de l'escorça terrestre (8%), però l'obtenim de la bauxita, que s'extreu amb un impacte ambiental enorme (mines obertes a selva tropical). Per contra, reciclar alumini requereix tan sols el 5% de l'energia necessària per produir-lo des de zero. Compara l'impacte del cicle de vida del ciment (calcari → clínquer → ciment → formigó → enderroc → abocador) vs l'alumini (bauxita → alumini → ús → reciclatge → ús → reciclatge). Quin material és «millor» des del punt de vista de l'economia circular?"
    }
  },

  ideesPrevies: {
    startPoint: "Mireu al vostre voltant: de quin material és cada objecte de l'aula? D'on creus que ve? Anoteu 5 materials que us rodegen i la seva possible font geológica.",
    prompts: [
      {
        kind: "write",
        text: "Porta una foto (o el dibuix) dels 3 materials de construcció del teu barri que has identificat de deures. Quin tipus de roca o mineral creus que és cadascun? D'on creus que s'ha extret?",
        starter: "El material que he fotografiat és... Crec que és una roca/mineral de tipus... perquè..."
      },
      {
        kind: "write",
        text: "Quina diferència creus que hi ha entre un mineral i una roca? Dóna un exemple de cadascun i explica com els reconeixeries.",
        starter: "Un mineral és... Per exemple... Una roca és... Per exemple..."
      },
      {
        kind: "write",
        text: "Creus que els recursos geológics (pedra, minerals, combustibles fòssils) s'esgotaran? En quins casos sí i en quins casos no? Per quina raó?",
        starter: "Crec que (sí/no) s'esgotaran perquè... Però en el cas de ___ és diferent perquè..."
      }
    ]
  },

  exploreInstructions: [
    "Estudi de cas: impacte dels recursos geológics (en grups de 3-4). Cada grup rep un recurs diferent: A) calcari i ciment, B) pissarra pirinenca, C) potassa de Cardona/Sallent, D) sorra de platja per a la construcció, E) granit ornamental",
    "Pas 1 (10 min): per a cada recurs, investigueu (fitxa de referència + recerca guiada): on s'extreu a Catalunya, com es processa, on s'usa, quin és l'impacte ambiental principal (paisatgístic, contaminació, emissió de CO₂...)",
    "Pas 2 (8 min): relacioneu el vostre recurs amb SA6 (canvi climàtic). Com contribueix a les emissions de GEH? Hi ha alternatives més sostenibles? Connexió amb el cicle del carboni geológic",
    "Pas 3 (7 min): prepareu 3 frases per presentar al grup classe: 1 curiositat del recurs, 1 dada d'impacte ambiental, 1 proposta de millora",
    "Posada en comú: cada grup presenta les 3 frases. El docent sistematitza: tots els recursos geológics son finits a escala humana, però uns es reciclen millor que d'altres"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Fitxes de recursos geológics (1 per grup, amb dades d'extracció, impacte i alternativas)", "Mapa de recursos geológics de Catalunya", "Projector: imatges de pedreres (oberta + restaurada), mina de potassa de Sallent"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Minerals== vs ==roques==: definicions exactes",
      text: "Un ==mineral|g== és una substància sòlida inorgànica, natural, amb composició química fixa i estructura cristal·lina definida. El ==quars|b== és sempre SiO₂, el ==calcita|b== és sempre CaCO₃, el ==halita|b== (sal) és sempre NaCl. Els minerals es reconeixen per: ==duresa|o== (escala de Mohs 1-10), ==color i ratllada==, ==lluentor== (metàl·lica, vítria, nacrada), ==clivatge== (com es trenca). Una ==roca== és un material natural format per l'agregació de dos o més minerals (o restes orgàniques). El ==granit|o== conté quars + feldspat + mica. El ==calcari|b== conté calcita + possibles fòssils. La ==pissarra|r== conté mica + clorita metamorfitzades. Hi ha milers de minerals, però l'escorça terrestre és feta principalment per 8: ==feldspat== (51%), ==quars== (12%), ==piroxens|o== (11%), ==miques|o== (5%), ==anfíbols==, ==oliví==, ==calcita== i ==óxids de Fe==.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Combustibles fòssils==: la memoria química d'éssers vius extingits",
      text: "Els ==combustibles fòssils|r== (carbó, petroli, gas natural) son la matèria orgànica d'éssers vius que va quedar enterrada fa milions d'anys i es va transformar per pressió i calor. ==Carbó|r==: de boscos tropicals del ==Carbonífer|o== (350-300 Ma) compactats i metamorfitzats. Graus: torba (recent) → lignit → hulla → antracita (el més pur). ==Petroli i gas natural|r==: d'organismes marins (plàncton, algues) acumulats al fons marí, coberts per sediments i transformats per calor (50-150 °C) durant milions d'anys. Migra cap amunt fins a quedar atrapat en una ==trampa geológica|o== (anticlinal, falla segellada). Per quina raó son «no renovables»: es van formar en escales de 100 milions d'anys; els estem consumint en 200 anys. Connexió SA6: quan els cremem, el ==CO₂ fixat fa milions d'anys|r== retorna a l'atmosfera en qüestió de mesos, desequilibrant el ==cicle del carboni geológic|g==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Recursos geológics a ==Catalunya==: pedra, sal i memòria",
      text: "Catalunya té una geologia diversa que ha proveït recursos geológics importants: 1) ==Calcari|b== (roques sedimentàries del Mesozoic): s'extreu en grans pedreres a la conca del Llobregat i la Conca de Barberà. Ús principal: ==ciment|o== (matèria primera bàsica de la construcció). La pedra de Montjuïc (conglomerat) va ser la pedra d'edificis emblemàtics de Barcelona. 2) ==Pissarra pirinenca|r==: als Pirineus (Pallars, Alt Urgell). Ús: ==teulades|o== tradicionals (molt durador, 50-100 anys). 3) ==Potassa|g== (Bages): les mines de Cardona i Sallent son de les reserves de potassi més grans d'Europa. Ús: ==adobs agrícoles|g== (exportació mundial). La muntanya de residus salins de Sallent és visible des de l'autovia. 4) ==Granit== (Guilleries, Montnegre): pedra ornamental. 5) ==Sorra de quars== (Delta de l'Ebre, platjes): vidre, microxips. L'extracció excessiva de sorra de platja n'accelera la regressió.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Impacte ambiental de l'extracció: el ==paisatge ferit==",
      text: "L'extracció de roques i minerals genera impactes ambientals significatius (CE6): 1) ==Impacte paisatgístic|r==: les pedreres obertes alteren de forma dràstica el relleu i la vegetació. Les mines de cel obert (com la de potassa de Sallent) generen terrenys de color i morfologia artificials visibles des de quilòmetres. 2) ==Contaminació hídrica|r==: els lixiviats de les escombreres i els pols de les pedreres contaminen sòls i aqüífers. Les mines de sal de Sallent generen salmorres que han afectat el ==riu Llobregat|o==. 3) ==Emissions de CO₂|r==: el ciment requereix calcinar calcari a 1.450 °C (==descarbonatació|r==: CaCO₃ → CaO + CO₂). Representa el ==8% de les emissions globals de CO₂|r==. 4) ==Rehabilitació==: la llei minera obliga les empreses a elaborar un pla de restauració del paisatge. Algunes pedreres abandonades s'han convertit en reserves naturals o espais de lleure (ex: pedreres de Montjuïc → Parc de Montjuïc). La ==economia circular|g== (reutilitzar els residus de construcció i demolició) és una alternativa de futur.",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Connexió ==enigma== — pista 3: la Terra com arxiu del temps",
      text: "Les roques calcàries que avui s'extreuen a les pedreres catalanes van néixer al ==mar de Tethys|b== fa ≈100 milions d'anys (Cretaci), quan el que ara és Catalunya era un fons marí ple d'organismes amb closques de CaCO₃. Aquells organismes van fixar el ==CO₂ atmosfèric del Cretaci|r== en les seves closques, i les closques es van convertir en calcari. Quan avui cremem aquell calcari per produir ciment, retornem a l'atmosfera el CO₂ que havia estat capturat fa 100 milions d'anys — el ==cicle del carboni geológic|g==. Les roques metamòrfiques del Pirineu central (gneis, esquistos) guarden la memoria de la col·lisió ==hercínica|o== fa 300 Ma. El basalt de la Garrotxa és el resultat del ==rift postalpí|b== fa tan sols 11.500 anys. Cada roca és un arxiu del temps geológic. Per llegir-les cal saber el codi — i ara en saps prou per llegir el paisatge de Catalunya.",
      type: "epistemic",
      badge: "🧩 Enigma — pista 3 (cicle del carboni geológic)"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Mapa de recursos geológics de Catalunya", src: "/images/sa7-g5-recursos-cat.svg", note: "Mapa de Catalunya amb marques per zones de recursos: calcari (Llobregat, Conca Barberà), pissarra (Pallars, Alt Urgell), potassa (Bages: Cardona, Sallent), granit (Guilleries), volcans (Garrotxa = basalt), sorra (Delta de l'Ebre). Llegenda de colors per tipus de recurs." },
    { id: "G2", apartat: "3", title: "Impacte del ciment: cicle de vida i emissions de CO₂", src: "/images/sa7-g6-ciment-co2.svg", note: "Diagrama de cicle de vida: extracció calcari → forn de clínquer (1450°C, CaCO₃→CaO+CO₂) → ciment → formigó → construcció → enderroc → abocador/reciclatge. Punts d'emissió de CO₂ marcats. Comparació: 1 tona de ciment = ≈0,9 tones CO₂. 8% emissions globals." }
  ],

  fitxaUrl: "/fitxes/sa7-s3-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S3 — De les roques als recursos",
    steps: [
      { apartat: "0", title: "Materials del nostre entorn (deures S1→S2)", time: "5 min", phase: "engage", instruction: "Apartat 0: presenta les fotos dels 3 materials de construcció del barri. Anota: material identificat, tipus de roca/mineral, origen possible.", hints: [] },
      { apartat: "1", title: "Estudi de cas: el vostre recurs geológic", time: "25 min", phase: "explore", instruction: "Apartat 1: completa la fitxa del vostre recurs (on s'extreu, com es processa, usos, impacte ambiental, connexió SA6). Prepareu les 3 frases per a la posada en comú.", hints: [
        "Connexió SA6: el ciment és responsable del 8% de les emissions globals de CO₂. El petroli i el carbó son responsables de la major part de la resta. Tots son recursos geológics.",
        "Pregunta clau: és el recurs renovable a escala humana (100-200 anys) o cal milions d'anys per regenerar-lo?"
      ] },
      { apartat: "2", title: "Minerals, combustibles fòssils i recursos de Catalunya", time: "20 min", phase: "explica", instruction: "Apartat 2: completa la taula de minerals i resources (G1). Omple l'esquema de formació del carbó i el petroli. Per quina raó son no renovables?", hints: [
        "Mineral = composició fixa i estructura cristal·lina. Roca = barreja de minerals. Fòssil = restes d'éssers vius mineralitzades.",
        "Carbó: boscos del Carbonífer (350-300 Ma) → enterrats → compactats → carbó. Petroli: organismes marins → fons marí → calor i pressió → petroli. Tots dos: milions d'anys per formar-se, uns 200 anys per esgotar-se."
      ] },
      { apartat: "3", title: "Impacte ambiental i pista 3 de l'enigma", time: "10 min", phase: "explica", instruction: "Apartat 3: completa el diagrama d'impacte del ciment (G2). Respon: per quina raó el ciment emet tant CO₂? Escriu la pista 3 de l'enigma: les roques calcàries com a arxiu del CO₂ geológic.", hints: [
        "Descarbonatació: CaCO₃ (calcari) → CaO (calç) + CO₂ (gas, a 1.450°C). Per cada tona de ciment, ≈0,9 tones de CO₂ a l'atmosfera.",
        "Connexió: el calcari de les pedreres catalanes es va formar al mar de Tethys fa 100 Ma, fixant CO₂ atmosfèric d'aquella època. Quan el cremem, el retornem a l'atmosfera 100 milions d'anys més tard."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Per quina raó el ciment és un dels materials amb major impacte climàtic tot i ser un 'material de pedra'? Explica el procés químic involucrat i relaciona'l amb la connexió SA6.", hint: "Descarbonatació: CaCO₃ → CaO + CO₂ (a 1.450°C). A més, el forn necessita energia (normalment fòssil). Total: ≈0,9 kg CO₂ per kg de ciment. 8% emissions globals. Connexió SA6: CO₂ capturat fa 100 Ma es retorna a l'atmosfera." },
    { id: "q2", type: "open", text: "Per quina raó els combustibles fòssils son 'no renovables' si la Terra els ha produït de forma natural? Explica la diferència entre l'escala de temps humana i la geológica.", hint: "Es formen en 100-300 milions d'anys per transformació de matèria orgànica enterrada. S'estan esgotant en ≈200 anys de consum industrial. La raó per la qual son 'no renovables' és que el ritme de consum supera infinitament el ritme de formació natural." },
    { id: "q3", type: "multiple", text: "Quin recurs geológic és el que extreu la mina de Sallent (Bages, Catalunya) i quin és el seu ús principal?", options: ["Carbó, per a la producció d'electricitat", "Potassa, per a la producció d'adobs agrícoles", "Calcari, per a la producció de ciment", "Granit, per a la construcció d'edificis ornamentals"], correct: 1 }
  ],

  homework: {
    description: "Cerca la petjada de carboni aproximada d'un dels 5 materials de construcció més comuns (ciment, acer, alumini, vidre, fusta). Fes una llista de menor a major impacte i explica breument per quina raó la fusta és diferent dels altres. Porta la llista a S4.",
    note: "Recerca breu documentada (2-3 fonts), no delegable a IA: analitza i interpreta tu les dades que trobes.",
    deadline: "2026-05-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (minerals vs roques, combustibles fòssils, recursos geológics de Catalunya, impacte ambiental)",
    "Omple la taula de recursos geológics: recurs / tipus / on s'extreu / ús / és renovable?",
    "Explica en 3 frases per quina raó el ciment emet tant CO₂",
    "Completa la connexió SA6: carbó → format fa ___ Ma de ___ → quan el cremem alliberem ___ a l'atmosfera",
    "Exit tiquet en paper a S4"
  ],
  oaLinks: ["OA3"], competencies: ["CE1", "CE6"]
}
