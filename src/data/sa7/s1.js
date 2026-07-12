export const sa7s1 = {
  id: "s1", saId: "sa7",
  title: "Les roques expliquen la historia",
  sessionNumber: 1, biome: "sa7", duration: "2h",
  engageImage: "/images/sa7-s1-roques.jpg",

  engageQuestion: "El terra de la nostra aula, les façanes dels edificis del barri, els monuments... tots estan fets de roca. Però per quina raó hi ha roques tan diferents? Un granit és completament diferent d'una pissarra, i totes dues ho son d'un calcari. Al final d'avui sabràs identificar qualsevol mostra de roca i explicar per quina raó és com és.",
  engageContext: "El docent presenta 6 mostres de roca sense etiquetes: granit, calcari, pissarra, basalt, arenisca, marbre. Els alumnes les observen, les toquen i les descriuen amb adjectius. Debat: quines han vist als edificis del barri? Quin material és el sòl del pati? Connexió amb l'enigma: una de les roques (basalt) és volcànica — serà la clau per entendre la Garrotxa a S2.",

  levelObjectives: {
    A: [
      "Identifico qualsevol mostra de roca pel seu origen (ígnia/sedimentària/metamòrfica) usant almenys 3 criteris d'observació (textura, mida de cristalls, presència de fòssils, laminació, reacció amb HCl) i argumento per quina raó cada característica és una evidència del procés de formació.",
      "Explico el cicle de les roques de forma completa: magma → roca ígnia → erosió → sediment → roca sedimentària → metamorfisme → roca metamòrfica → fusió → magma. Identifico en quin punt del cicle estan les roques del laboratori.",
      "Connecto els tipus de roca amb els processos geológics de la SA: per quina raó el basalt de la Garrotxa és extrusiu i no intrusiu, i quina diferència hi ha en la mida dels cristalls.",
      "Dissenyo un protocol d'identificació de roques desconegudes amb almenys 5 proves ordenades de menys a més destructiva. Justifique l'ordre amb criteris de metodologia científica (CE3)."
    ],
    B: [
      "Identifico les 6 mostres de roca del laboratori per les seves característiques observables i les classifico en les 3 famílies (ígnia / sedimentària / metamòrfica).",
      "Explico el procés de formació de cada família: ígnies (solidificació del magma), sedimentàries (dipòsit + litificació de sediments), metamòrfiques (transformació per calor i pressió).",
      "Descric les principals diferències entre roques intrusions (granit) i extrusions (basalt), i entre roques sedimentàries clàstiques (arenisca) i químiques (calcari).",
      "Explico el cicle de les roques: com les tres famílies es transformen les unes en les altres al llarg de milions d'anys."
    ],
    C: [
      "Completo: les tres famílies de roques son _____, _____ i _____. Cada família es forma de manera diferent: les ígnies es formen quan _____; les sedimentàries quan _____; les metamòrfiques quan _____.",
      "Identifico en el laboratori: la roca que reacciona amb àcid és _____ (família: _____). La roca amb capes visibles és _____ (família: _____). La roca de cristalls grans i molts colors és _____ (família: _____).",
      "Completo el cicle de les roques: magma → roca _____ → erosió → _____ → roca sedimentària → calor i pressió → roca _____.",
      "Anoto 2 característiques que m'han ajudat a identificar una roca al laboratori: 1. _____ 2. _____."
    ]
  },

  apartatExtras: {
    "2": {
      scaffold: "Omple la taula d'identificació de les 3 famílies: Família / Procés de formació / 2 exemples / 1 característica clau. Ígnies: procés = ___ / exemples = ___, ___ / característica = ___. Sedimentàries: procés = ___ / exemples = ___, ___ / característica = ___. Metamòrfiques: procés = ___ / exemples = ___, ___ / característica = ___.",
      challenge: "Investiga el concepte de 'datació radiomètrica': com podem saber l'edat d'una roca ígnia usant la desintegració radioactiva? Explica el principi del rellotge atòmic (isòtop pare → isòtop fill) i per quina raó les roques sedimentàries son molt difícils de datar directament (però els fòssils que contenen no)."
    },
    "3": {
      scaffold: "Al laboratori, respon per a cada mostra: color (clar/fosc), textura (cristal·lina/granular/làmines), pots ratllar-la amb una ungla? (sí/no), reacciona amb unes gotes d'àcid? (sí/no). Amb aquests 4 criteris, quina família creus que és? Compara amb el teu company.",
      challenge: "La pedrera de granit de Montjuïc (Barcelona) va subministrar pedra per als edificis del Passeig de Gràcia al s. XIX, però avui ja no s'extreu. La pedra de Montjuïc és un conglomerat, no un granit. Per quina raó creus que s'anomena popularment 'granit de Montjuïc'? Quina diferència hi ha entre el conglomerat (sedimentari) i el granit (ígni intrusiu) pel que fa a la resistència i al tractament artístic?"
    }
  },

  ideesPrevies: {
    startPoint: "Avui comencem SA7 — l'última SA del curs. A la taula teniu les mostres de roca. Sense mirar res, escriviu el que ja sabeu sobre roques i minerals — al final de la SA comparareu.",
    prompts: [
      {
        kind: "draw",
        text: "Dibuixa o descriu una roca que hagis vist o tocat recentment (al carrer, a la natura, als edificis). Quines característiques té? Com creus que s'ha format?",
        starter: "La roca que recordo és... la vaig veure a... i té les característiques..."
      },
      {
        kind: "write",
        text: "Quina diferència creus que hi ha entre una roca i un mineral? Escriu la teva hipòtesi abans que ho expliquem.",
        starter: "Crec que la diferència entre roca i mineral és..."
      },
      {
        kind: "write",
        text: "Com creus que es formen les roques? D'on vénen? Escriu tot el que saps o imagines.",
        starter: "Crec que les roques es formen quan..."
      }
    ]
  },

  exploreInstructions: [
    "Lab d'identificació de roques (en grups de 3). Rebeu 6 mostres etiquetades amb una lletra (A–F) i la fitxa d'identificació. No mireu les respostes fins al final",
    "Passa 1 (10 min): observació visual i tàctil. Per a cada mostra anoteu: color principal, textura (cristal·lina, granular, làmines, compacta), brilla? (lluentor dels cristalls), és pesada o lleugera?",
    "Pas 2 (8 min): duresa i àcid. Intenteu ratllar la mostra amb l'ungla (duresa <2,5), amb una clau (duresa <5,5). Poseu 2 gotes d'HCl diluït a cada mostra: reacciona? (CaCO₃ → CO₂ = calcari o marbre)",
    "Pas 3 (7 min): classificació. Amb les dades, intenteu assignar cada mostra a una família (ígnia/sedimentària/metamòrfica) i un nom (granit, basalt, calcari, pissarra, arenisca, marbre)",
    "Moment epistèmic: posada en comú. El docent confirma les identificacions i explica el raonament per a cada roca. Per quina raó el basalt (mostra ?) té cristalls tan petits en comparació al granit?"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["6 mostres de roca etiquetades (granit, basalt, calcari, pissarra, arenisca, marbre)", "HCl diluït al 10% (en comptagotes)", "Clau o moneda de coure (per a duresa)", "Lupa 10×", "Fitxa d'identificació de roques (per grup)"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Roques i minerals: les ==tres famílies== del regne inorgànic",
      text: "Una ==roca== és un material natural sòlid format per un o més ==minerals|g==. Un ==mineral|g== és una substància inorgànica, natural, amb composició química definida i estructura cristal·lina pròpia (quars = SiO₂ sempre). La diferència clau: un mineral té sempre la mateixa composició; una roca és una barreja. El granit, per exemple, conté ==quars|b== (gris translúcid), ==feldspat|o== (rosa o blanc) i ==mica|r== (làmines negres brillants). Les roques es classifiquen en tres famílies segons el seu origen: ==ígnies== (del foc), ==sedimentàries== (de sediments) i ==metamòrfiques== (transformat per calor/pressió). Cada família és la memòria d'un procés geológic diferent.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Roques ==ígnies==: solidificació del magma",
      text: "Les roques ==ígnies== (del llatí *ignis*, foc) es formen quan el ==magma|r== —roca fosa en profunditat— es refreda i es solidifica. Si es refreda lentament ==en profunditat== (intrusiu), els cristalls tenen temps de créixer: resultat → ==granit|o==, de cristalls grans i visibles. Si erupciona a la superfície (extrusiu) i es refreda ràpidament, els cristalls no tenen temps de créixer: resultat → ==basalt|r==, de cristalls microscòpics o amorf. Un truc per recordar-ho: ==grans cristalls = refredat lent = profund|g== / ==cristalls petits o vidriós = refredat ràpid = superficial|o==. El basalt de la Garrotxa és extrusiu: va erupcionar a l'aire lliure. Connexió enigma — primera pista: la presència de basalt indica que hi ha hagut un episodi de ==vulcanisme|r==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Roques ==sedimentàries==: la memoria del paisatge passat",
      text: "Les roques ==sedimentàries== es formen per acumulació de ==sediments|o== (fragments d'altres roques, restes d'organismes, minerals precipitats) en medis aquàtics o eòlics. El procés de ==litificació|g== té dues fases: 1) ==compactació== (el pes dels sediments superiors pressiona els inferiors i treu l'aigua) + 2) ==cimentació== (minerals dissolts precipiten entre els grans unint-los). Les principals: ==arenisca|o== (grans de sorra cimentats; sovint es veuen a simple vista), ==calcari|b== (CaCO₃ de restes de closques i esquelets, reacciona amb HCl → efervescència), ==argil·lita== (partícules molt fines, compacte). Una característica clau: les roques sedimentàries son les úniques que poden contenir ==fòssils|g== (restes d'organismes atrapats durant la litificació). La pedrera de Montjuïc és conglomerat sedimentari, no granit.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Roques ==metamòrfiques==: transformació per calor i pressió",
      text: "Les roques ==metamòrfiques== es formen quan una roca preexistent (ígnia, sedimentària o metamòrfica) és sotmesa a alta ==temperatura|r== i/o alta ==pressió|r== sense arribar a fondre's. Això passa en profunditat o quan les plaques col·lideixen. Exemples: ==pissarra|b== (de l'argil·lita, per pressió → es cliva en làmines; molt usada per teulades al Pirineu), ==marbre|o== (del calcari, per calor → cristalls de calcita recristal·litzada; per això el marbre ja no fa efervescència amb HCl com el calcari original), ==quarsita== (de l'arenisca, molt dura). El ==grau de metamorfisme|g== indica la intensitat del procés: baix grau (pissarra) → mig grau (esquist) → alt grau (gneis). Les roques metamòrfiques del Pirineu central guarden la memòria de la col·lisió hercínica fa 300 milions d'anys.",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "El ==cicle de les roques==: la Terra recicla els seus materials",
      text: "Cap roca és permanent: totes es van transformant al llarg de milions d'anys en un cicle continu. El ==cicle de les roques== connecta les tres famílies: 1) ==Magma → roca ígnia==: el magma es refreda i cristal·litza. 2) ==Roca ígnia → sediment → roca sedimentària==: l'erosió (vent, pluja, glaceres) fragmenta qualsevol roca, els sediments s'acumulen i es litifiquen. 3) ==Roca sedimentària → metamòrfica==: enterrada en profunditat o en una col·lisió de plaques, la calor i la pressió la transformen. 4) ==Roca metamòrfica → magma==: si la temperatura és prou alta, es fon i torna a ser magma. Implicació clau per a l'enigma: les ==roques basàltiques|r== de la Garrotxa son ígnies extrusives recents (fa ≈11.000 anys), la qual cosa indica activitat magmàtica recent en una zona on no hi hauria d'haver volcans de subducció. Per quina raó? Ho respondrem a S2.",
      type: "epistemic",
      badge: "🧩 Enigma — primera pista"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Clau d'identificació de les 6 roques del laboratori", src: "/images/sa7-g1-clau-roques.svg", note: "Taula visual: mostra (foto) / família / procés / característiques diagnòstiques / ús humà. Granit: ígnia intrusiva, cristalls grans, ús en construcció. Basalt: ígnia extrusiva, cristalls petits/amorf, volcànica. Calcari: sedimentària química, efervescència amb HCl, fòssils possibles. Pissarra: metamòrfica, clivatge en làmines, baix grau. Arenisca: sedimentària clàstica, grans de sorra visibles. Marbre: metamòrfica de calcari, cristalls de calcita, no fa efervescència." },
    { id: "G2", apartat: "3", title: "Cicle de les roques", src: "/images/sa7-g2-cicle-roques.svg", note: "Diagrama cíclic: Magma (centre) → Roca ígnia (↑ refredar-se) → Sediment (→ erosió) → Roca sedimentaria (→ litificació) → Roca metamòrfica (↓ calor+pressió) → Magma (↓ fusió). Fletxes i noms dels processos per cada transició." }
  ],

  fitxaUrl: "/fitxes/sa7-s1-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S1 — Les roques expliquen la historia",
    steps: [
      { apartat: "0", title: "Idees prèvies sobre roques i minerals", time: "5 min", phase: "engage", instruction: "Apartat 0: respon les 3 preguntes inicials (dibuix + hipòtesis). No es corregeix ara — al final de la SA comparareu.", hints: [] },
      { apartat: "1", title: "Lab d'identificació de roques (6 mostres)", time: "25 min", phase: "explore", instruction: "Apartat 1: omple la fitxa d'identificació de les 6 mostres (color, textura, duresa, reacció àcid, família, nom). Compara amb el grup abans de la posada en comú.", hints: [
        "Truc: si la mostra fa efervescència (bombolles) amb HCl, és un carbonat (calcari o marbre). Si és marbre, els cristalls de calcita son visibles i la textura és granulosa; si és calcari, pot tenir fòssils.",
        "La pissarra es cliva en làmines planes (com fulls de paper endurit). El granit té cristalls de tres colors: quars gris, feldspat rosa i mica negra brillant."
      ] },
      { apartat: "2", title: "Les tres famílies i el procés de formació", time: "20 min", phase: "explica", instruction: "Apartat 2: omple la taula de les 3 famílies (família / procés / exemples / característica clau). Respon: per quina raó el basalt té cristalls petits i el granit grans si totes dues son roques ígnies?", hints: [
        "Clau: velocitat de refredament. Lent (en profunditat) → cristalls grans. Ràpid (a la superfície, extrusiu) → cristalls petits o textura vítria.",
        "Ígnies = del foc (magma). Sedimentàries = de sediments (erosió + litificació). Metamòrfiques = transformades (calor + pressió)."
      ] },
      { apartat: "3", title: "Identificació de les mostres i cicle de les roques", time: "10 min", phase: "explica", instruction: "Apartat 3: corregeix les teves identificacions del lab amb la clau (G1). Emplena el diagrama del cicle de les roques (G2). Escriu la primera pista de l'enigma.", hints: [
        "Cicle: magma → ígnia → erosió → sediment → sedimentària → calor/pressió → metamòrfica → fusió → magma.",
        "Primera pista de l'enigma: el basalt de la Garrotxa és una roca ígnia extrusiva recent. Per quina raó hi ha basalt a la Garrotxa si no hi ha cap límit de plaques de subducció a prop?"
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica la diferència entre roca ígnia intrusiva i extrusiva. Posa un exemple de cada una i explica per quina raó la mida dels cristalls és diferent.", hint: "Intrusiva (granit): refreda lentament en profunditat → cristalls grans. Extrusiva (basalt): erupciona a la superfície i refreda ràpidament → cristalls petits o amorf." },
    { id: "q2", type: "open", text: "Quina de les 6 mostres del laboratori reacciona amb HCl? Per quina raó? És del mateix mineral la que fa efervescència que el marbre? Explica la diferència.", hint: "El calcari reacciona (CaCO₃ + HCl → CO₂). El marbre és calcari metamorfitzat: té calcita recristal·litzada i ja no fa tanta efervescència perquè el gas s'escapa més lentament. Totes dues contenen CaCO₃ però amb textures molt diferents." },
    { id: "q3", type: "multiple", text: "Quin procés transforma una roca sedimentaria en una roca metamòrfica?", options: ["Erosió i transport per l'aigua", "Alta temperatura i/o pressió en profunditat", "Solidificació del magma", "Dipòsit de sediments i compactació"], correct: 1 }
  ],

  homework: {
    description: "Fotografia 3 materials de construcció de l'entorn del teu barri (façana d'un edifici, paviment del carrer, monument, pedres d'un mur...). Per a cada un, intenta identificar de quin tipus de roca es tracta (usa la clau de la fitxa) i escriu on creus que s'ha extret. Porta les fotos o les descripcions a S2.",
    note: "Activitat de camp no delegable a IA: requereix observació i identificació presencial de materials reals.",
    deadline: "2026-05-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (minerals vs roques, les 3 famílies, cicle de les roques)",
    "Omple la taula de les 3 famílies: família / procés / 2 exemples / 1 característica clau",
    "Completa el diagrama del cicle de les roques (G2): etiqueta cada procés de transició",
    "Si pots, observa un edifici del teu barri i identifica el material de construcció de la façana (quin tipus de roca o mineral és?)",
    "Exit tiquet en paper a S2"
  ],
  oaLinks: ["OA1"], competencies: ["CE1", "CE3"]
}
