// SA1 · S3 — el detector al món real. Versió de 3 sessions (21/09/2026).
// Substitueix la S4 «Repte final» de la versió de 4 sessions. El cas propi (deures
// des de la S1) arriba DESPRÉS d'haver entrenat el detector amb casos donats: primer
// a l'app autocorrectiva (apartat 1), després amb el cas propi (apartat 2).
// Si el cas és fluix o no n'hi ha, hi ha casos de reserva: la qualitat de la
// notícia ja no decideix la qualitat de l'anàlisi.
export const sa1s3 = {
  id: "s3",
  saId: "sa1",
  title: "Funciona el teu detector fora de classe?",
  repteInicial: "T'entrenaràs amb una app que et corregeix al moment i després passaràs pel detector el cas que has caçat tu. Un company el revisarà a cegues: si arribeu al mateix veredicte per camins diferents, el detector funciona.",
  sessionNumber: 3,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s3-portada.jpg",
  isFinalSession: true,

  engageChallenge: "Treu el cas que has caçat. En 30 segons, digues al company del costat què promet, sense dir-li què en penses. Ell et diu, a ull, si li sembla ciència o no. Ho comprovareu al final de la sessió.",
  engageQuestion: "El detector no és per aprovar la SA: és per no deixar-te enredar la resta de la teva vida. Funciona amb un cas que ningú no t'ha triat?",
  teacherNotes: "Apartat 1 amb pantalles (app autocorrectiva, mode 3 senyals per a la C). Apartat 2 amb el cas propi o un cas de reserva. Revisió a cegues en parella i autoavaluació. L'exit tiquet tanca amb la falsabilitat del cas propi.",

  levelObjectives: {
    A: [
      "M'entreno amb l'app i explico on no coincideixo amb ella.",
      "Analitzo el meu cas i reescric la promesa perquè es pugui comprovar.",
      "Anticipo l'objecció de qui hi creu i la responc amb el detector.",
      "A la revisió a cegues, dic si el desacord és sobre la dada o sobre la garantia."
    ],
    B: [
      "M'entreno amb l'app del detector fins a encertar els senyals.",
      "Passo el meu cas real pel detector i li dono un calaix amb un perquè.",
      "Dic quina prova concreta faria canviar el veredicte del meu cas.",
      "Reviso el cas d'un company a cegues i comparem els veredictes."
    ],
    C: [
      "Faig casos a l'app del detector.",
      "Passo el meu cas pel detector i li poso un calaix.",
      "Dic què domino i què he de repassar."
    ]
  },

  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Quan fallis un cas, no passis de pressa al següent: llegeix les frases pintades. Són la pista de per què aquell senyal hi era (o no). Apunta el senyal que més falles: és el que has de mirar amb més cura al teu cas.",
      challenge:
        "Busca un cas on no coincideixis amb l'app i on creguis que tens un argument. L'app té senyals «defensables» en groc: per què creus que els hi ha posat?"
    },
    "2": {
      scaffold:
        "Per a la prova, fes servir aquest motlle: «Faria dos grups: un rep ___ i l'altre no (o una imitació). Ningú no sap qui rep què. Mesuro ___. Si els dos grups surten igual, la promesa és falsa».",
      challenge:
        "Reescriu la promesa del cas perquè es pugui posar a prova: què es mesura, en qui i comparat amb què. Si no es pot reescriure sense canviar-la del tot, això ja és un veredicte."
    },
    "3": {
      scaffold:
        "Escolta només la promesa del company i passa-la pel detector sense preguntar-li què en pensa. Després compareu: si no coincidiu, busqueu la frase que us fa pensar diferent.",
      challenge:
        "Quan no coincidiu, esbrina de quina mena és el desacord: sobre la DADA (què diu exactament el cas) o sobre la GARANTIA (si allò ja compta com a prova prou bona). I digues com es tancaria."
    }
  },

  ideesPrevies: {
    startPoint:
      "Recupera el cas que has caçat. Si no en portes cap o no promet res concret, agafa un cas de reserva.",
    prompts: [
      {
        kind: "write",
        text: "Copia la promesa del teu cas en una frase.",
        starter: "Promet que…"
      }
    ]
  },

  exploreActivity: {
    what: "Entrenament amb l'app autocorrectiva del detector: 14 casos curts (ciència, pseudociència i encara no comprovat). Per a cada cas es marquen els senyals i el calaix i l'app corregeix al moment, pintant la frase que encén cada senyal. Mínim 8 casos. Qui treballa amb la versió C fa servir el mode «3 senyals».",
    who: { mode: "individual", label: "Individual, amb ordinador o tauleta" },
    time: 25,
    note: "Apunta a la fitxa quants casos has fet, quants encerts sencers i el senyal que més falles."
  },
  exploreInstructions: [
    "Obre l'app (a sota) o a pantalla completa",
    "Per a cada cas, marca els senyals que s'encenen (pot ser cap) i el calaix, i prem Comprova",
    "Llegeix les frases pintades quan t'equivoquis",
    "Apunta a la fitxa els casos fets, els encerts i el senyal que més falles"
  ],
  exploreDuration: "25 min",
  appSrc: "/apps/app_detector_pseudociencia.html",
  exploreNote: "L'app funciona sola i no desa res: el resultat s'apunta a la fitxa.",

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Una promesa que ==no pot fallar== no diu res",
      text: "Per saber si una promesa és ciència, pregunta't ==quin resultat la faria caure==. Si cap resultat no la pot fer caure («si no et funciona és que no hi creus»), no és que sigui molt certa: és que ==no es pot comprovar== (senyal 1) i ==no admet crítica== (senyal 2).",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    },
    {
      id: "t2",
      apartat: "3",
      heading: "Un ==segon detector== és millor que un",
      text: "A la ciència, un resultat val més quan ==algú altre== el revisa sense saber què n'has dit tu. Si dues persones arriben al mateix veredicte per separat, el detector funciona. Si no, el desacord pot ser sobre la ==dada== (què diu el cas) o sobre la ==garantia== (si allò ja és prova prou bona).",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: true, title: "El detector de pseudociència", src: "/images/sa1-s2-detector.svg", note: "Els 5 senyals. A la fitxa els tens en una franja a dalt de l'apartat 2." }
  ],

  fitxaUrl: { A: "/fitxes/sa1-s3-fitxa-A.html", B: "/fitxes/sa1-s3-fitxa-B.html", C: "/fitxes/sa1-s3-fitxa-C.html" },
  sessionMaterials: [
    { id: "reserva", title: "Casos de reserva (per a qui no porta cas)", url: "/fitxes/sa1-s3-casos-reserva.html", who: "alumnat" },
    { id: "clau", title: "Clau docent de la SA1", url: "/fitxes/sa1-clau-docent.html", who: "docent" }
  ],
  teoriaPdfUrl: null,
  elaborateNote: "Fitxa de 2 pàgines. L'autoavaluació de la SA és l'apartat 4; per preparar la prova, fes també l'Autoavaluació pre-examen de la SA.",

  fitxaGuide: {
    fitxaName: "Fitxa S3 — El detector al món real",
    steps: [
      { apartat: "0", title: "El meu cas", time: "5 min", phase: "engage",
        instruction: "Copia la promesa del teu cas en una frase. Si no en tens, agafa un cas de reserva.", hints: [] },
      { apartat: "1", title: "Entrenament amb l'app", time: "25 min", phase: "explore",
        instruction: "Fes com a mínim 8 casos a l'app i apunta els encerts i el senyal que més falles.",
        hints: [
          "Pot ser que un cas no encengui cap senyal: també és una resposta.",
          "Si falles, llegeix la frase pintada abans de passar al següent."
        ] },
      { apartat: "2", title: "El meu cas pel detector", time: "25 min", phase: "elabora",
        instruction: "Marca els senyals del teu cas, copia la frase que n'encén un, tria el calaix i escriu la prova que el decidiria (a la A, reescriu la promesa perquè es pugui comprovar).",
        hints: [
          "Busca la prova que la faria caure, no la que la demostraria.",
          "Si no se t'acut cap prova possible, això ja et diu molt del cas."
        ] },
      { apartat: "3", title: "Revisió a cegues", time: "20 min", phase: "elabora",
        instruction: "En parella, cadascú llegeix només la promesa del seu cas; l'altre la passa pel detector i després compareu.",
        hints: [
          "No diguis el teu calaix fins que el company hagi decidit el seu.",
          "Si no coincidiu, busqueu la frase que us fa pensar diferent."
        ] },
      { apartat: "4", title: "Autoavaluació de la SA", time: "15 min", phase: "evaluate",
        instruction: "Marca, per a cada objectiu de la SA, si el domines, a mitges o l'has de repassar, i escriu una situació de la teva vida on faràs servir el detector.",
        hints: [] }
    ]
  },

  exitTicketUrl: { A: "/fitxes/sa1-s3-exit-ticket.html", B: "/fitxes/sa1-s3-exit-ticket.html", C: "/fitxes/sa1-s3-exit-ticket-C.html" },
  exitTicketType: "web",
  exitTicketCriteri: "3.1",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Escriu la promesa del teu cas en una frase i quina prova concreta la podria fer caure. Si no se t'acut cap prova possible, què et diu això del cas?",
      hint: "Si cap resultat no la pot fer caure, recorda el senyal 1 del detector."
    }
  ],

  metacognition: {
    prompt: "Com ha canviat la teva manera de decidir què és cert des del primer dia de la SA? Posa'n un exemple.",
    type: "reflection"
  },

  homework: {
    description: "Fes l'Autoavaluació pre-examen de la SA1 (checklist, assaig de prova escrita i test de transferència).",
    note: "L'assaig s'escriu a mà abans de mirar les respostes model."
  },

  recoveryInstructions: [
    "Fes com a mínim 8 casos de l'app del detector (apartat 1)",
    "Passa un cas real teu (o un de reserva) pel detector amb la fitxa S3",
    "Demana a algú de casa que et llegeixi una promesa d'un anunci i passa-la pel detector",
    "Fes l'autoavaluació de la SA i l'exit tiquet"
  ],

  oaLinks: ["OA1", "OA3", "OA4"],
  competencies: ["CE1", "CE2", "CE3"],
  criterisAvaluacio: ["2.2", "3.1"]
}
