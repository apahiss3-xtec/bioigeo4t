// SA1 · S3 — el detector al món real. Versió de 3 sessions (21/09/2026).
// Substitueix la S4 «Repte final» de la versió de 4 sessions. El cas propi (deures
// des de la S1) arriba DESPRÉS d'haver entrenat el detector amb casos donats: primer
// a l'app autocorrectiva (apartat 1), després amb el cas propi (apartat 2).
// Si el cas és fluix o no n'hi ha, hi ha casos de reserva: la qualitat de la
// notícia ja no decideix la qualitat de l'anàlisi.
// 29/09/2026: exposició oral avaluada del cas (apartat 4, 40 min), motlle de la
// prova justa a l'apartat 2 i exit tiquet de transferència amb un cas nou (GreenBeat).
import { SENYALS_TXT } from "./senyals.js"

export const sa1s3 = {
  id: "s3",
  saId: "sa1",
  title: "El detector al món real",
  repteInicial: "T'entrenaràs amb una app que et corregeix al moment i després passaràs pel detector el cas que has caçat tu i dissenyaràs la prova justa que el decidiria. Un company el revisarà a cegues i, al final, l'exposaràs a la classe.",
  sessionNumber: 3,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s3-portada.jpg",
  isFinalSession: true,

  engageChallenge: "Treu el cas que has caçat. En 30 segons, digues al company del costat què promet, sense dir-li què en penses. Ell et diu, a ull, si li sembla ciència o no. Ho comprovareu al final de la sessió.",
  engageQuestion: "El detector no és per aprovar la SA: és per no deixar-te enredar la resta de la teva vida. Funciona amb un cas que ningú no t'ha triat?",
  teacherNotes: "Temps: 5 + 20 (app) + 25 (cas propi + motlle) + 15 (revisió a cegues) + 40 (exposició oral) + 5 (autoavaluació) + 10 (tiquet). Apartat 1 amb pantalles (la C té una app pròpia amb 3 senyals). Exposició: 1 min 30 s + una pregunta, amb la targeta de paraules clau de la fitxa; rúbrica a la clau docent (criteris 2.2, 3.1, 3.2 i 1.1). Amb 24-28 alumnes, 40 min no hi arriben: 3-4 exposicions es poden passar a l'inici de la sessió següent. L'exit tiquet és un cas NOU (GreenBeat): transferència, no el seu cas.",

  levelObjectives: {
    A: [
      "Analitzo el meu cas i reescric la promesa perquè es pugui comprovar.",
      "Dissenyo la prova justa que la faria caure.",
      "Exposo el meu cas i anticipo l'objecció de qui hi creu.",
      "A la revisió a cegues, dic si el desacord és sobre la dada o sobre la garantia."
    ],
    B: [
      "M'entreno amb l'app del detector fins a encertar els senyals.",
      "Passo el meu cas real pel detector i li dono un calaix.",
      "Dissenyo la prova justa que faria caure la promesa del meu cas.",
      "Exposo el meu cas en 1 min 30 s seguint el guió."
    ],
    C: [
      "Passo el meu cas pel detector i li poso un calaix.",
      "Dic com el comprovaria amb dos grups.",
      "Explico el meu cas a la classe amb la targeta."
    ]
  },

  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Quan fallis un cas, no passis de pressa al següent: llegeix les frases pintades. Són la pista de per què aquell senyal hi era (o no). Apunta el senyal que més falles: és el que has de mirar amb més cura al teu cas.",
      challenge:
        "Abans de prémer Comprova, justifica cada senyal amb la definició escrita: " + SENYALS_TXT + " Busca un cas on no coincideixis amb l'app: els senyals en groc són «defensables». Per què creus que els hi ha posat?"
    },
    "2": {
      scaffold:
        "Motlle de la prova justa (el mateix de la S2): «Faig dos grups a l'atzar. El grup A rep ___; el grup B rep una imitació (o res): ___. Ningú no sap qui rep què. Tot el demés és igual. Mesuro ___. Si els dos grups surten igual, la promesa cau».",
      challenge:
        "Detecta amb els senyals escrits: " + SENYALS_TXT + " Per a cada senyal que s'encén, copia la frase del teu cas que l'encén. Després reescriu la promesa «Si ___, aleshores ___» perquè es pugui posar a prova, omple el motlle i digues quina excusa esperes si la prova surt en contra (senyal 2)."
    },
    "3": {
      scaffold:
        "Escolta només la promesa del company i passa-la pel detector sense preguntar-li què en pensa. Després compareu: si no coincidiu, busqueu la frase que us fa pensar diferent.",
      challenge:
        "Quan no coincidiu, esbrina de quina mena és el desacord: sobre la DADA (què diu exactament el cas) o sobre la GARANTIA (si allò ja compta com a prova prou bona). I digues com es tancaria."
    },
    "4": {
      scaffold:
        "Guió de 4 passos, 1 min 30 s: (1) Què promet, en una frase. (2) Quins senyals s'encenen i amb quina frase. (3) Com ho comprovaries: dos grups, què rep cadascun, qui no sap què i quin resultat la faria caure. (4) A quin calaix va. A la targeta, només paraules clau.",
      challenge:
        "Afegeix un cinquè pas: l'objecció que et faria qui hi creu i com la respons. Fes servir els senyals escrits per nomenar-la: " + SENYALS_TXT
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
    what: "Entrenament amb l'app autocorrectiva del detector: 14 casos curts (ciència, pseudociència i encara no comprovat). Per a cada cas es marquen els senyals i el calaix i l'app corregeix al moment, pintant la frase que encén cada senyal. Mínim 6 casos.",
    who: { mode: "individual", label: "Individual, amb ordinador o tauleta" },
    time: 20,
    note: "L'app et compta els casos fets i els encerts: apunta a la fitxa el que et demana."
  },
  exploreInstructions: [
    "Obre l'app (a sota) o a pantalla completa",
    "Per a cada cas, marca els senyals que s'encenen (pot ser cap) i el calaix, i prem Comprova",
    "Llegeix les frases pintades quan t'equivoquis",
    "Apunta a la fitxa el resultat que et demana (casos fets, encerts…)"
  ],
  exploreDuration: "20 min",
  // La C té una app pròpia (24/09/2026): vocabulari de la fitxa C (3 senyals),
  // 10 casos reescrits curts i una pregunta per pantalla. SessionPage hi aplica pickLevel.
  appSrc: {
    A: "/apps/app_detector_pseudociencia.html",
    B: "/apps/app_detector_pseudociencia.html",
    C: "/apps/app_detector_pseudociencia_C.html"
  },
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
    },
    {
      id: "t3",
      apartat: "4",
      heading: "Explicar-ho és ==posar-ho a prova==",
      text: "Quan exposes el teu cas, la classe fa de ==segon detector==. Segueix el guió: ==què promet==, ==quins senyals== (amb la frase), ==com ho comprovaries== amb dos grups i ==quin resultat== la faria caure, i a quin ==calaix== va. Una bona pregunta dels companys ataca la prova, no la persona.",
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
  elaborateNote: "Fitxa de 2 pàgines. L'exposició oral és l'apartat 4 i l'autoavaluació ràpida, l'apartat 5; per repassar a fons, fes també l'Autoavaluació de la SA al web.",

  fitxaGuide: {
    fitxaName: "Fitxa S3 — El detector al món real",
    steps: [
      { apartat: "0", title: "El meu cas", time: "5 min", phase: "engage",
        instruction: "Copia la promesa del teu cas en una frase. Si no en tens, agafa un cas de reserva.", hints: [] },
      { apartat: "1", title: "Entrenament amb l'app", time: "20 min", phase: "explore",
        instruction: "Fes com a mínim 6 casos a l'app i apunta els encerts i el senyal que més falles.",
        hints: [
          "Pot ser que un cas no encengui cap senyal: també és una resposta.",
          "Si falles, llegeix la frase pintada abans de passar al següent."
        ] },
      { apartat: "2", title: "El meu cas pel detector", time: "25 min", phase: "elabora",
        instruction: "Marca els senyals del teu cas, copia la frase que n'encén un, tria el calaix i omple el motlle de la prova justa (a la A, reescriu abans la promesa «Si ___, aleshores ___»).",
        hints: [
          "Busca la prova que la faria caure, no la que la demostraria.",
          "Motlle: dos grups a l'atzar, un rep una imitació, ningú no sap qui rep què, tot el demés igual.",
          "Si no se t'acut cap prova possible, això ja et diu molt del cas."
        ] },
      { apartat: "3", title: "Revisió a cegues", time: "15 min", phase: "elabora",
        instruction: "En parella, cadascú llegeix només la promesa del seu cas; l'altre la passa pel detector i després compareu.",
        hints: [
          "No diguis el teu calaix fins que el company hagi decidit el seu.",
          "Si no coincidiu, busqueu la frase que us fa pensar diferent."
        ] },
      { apartat: "4", title: "Exposició oral del cas", time: "40 min", phase: "evaluate",
        instruction: "Omple la targeta amb paraules clau i exposa el teu cas en 1 min 30 s: què promet, senyals amb la frase, com ho comprovaries i calaix. Després, respon una pregunta.",
        hints: [
          "Mira la classe, no el paper: a la targeta, només paraules clau.",
          "La part que més compta és com ho comprovaries: dos grups i el resultat que faria caure la promesa."
        ] },
      { apartat: "5", title: "Autoavaluació de la SA", time: "5 min", phase: "evaluate",
        instruction: "Marca, per a cada objectiu de la SA, si el domines, a mitges o l'has de repassar. La completa és al web.",
        hints: [] }
    ]
  },

  exitTicketUrl: { A: "/fitxes/sa1-s3-exit-ticket.html", B: "/fitxes/sa1-s3-exit-ticket.html", C: "/fitxes/sa1-s3-exit-ticket-C.html" },
  exitTicketType: "paper",
  exitTicketCriteri: "3.1",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Cas nou: «Posa el nostre altaveu a l'hivernacle: amb la música especial GreenBeat, les teves tomaqueres creixeran un 30 % més. Ho diuen centenars de pagesos satisfets.» Escriu la promesa com una frase que es pugui comprovar: «Si ___, aleshores ___».",
      hint: "Què faries i què hauria de passar si fos veritat?"
    },
    {
      id: "q2",
      type: "open",
      text: "Dissenya la prova justa: què rep el grup A, què rep el grup B, 3 coses iguals als dos grups, què mesures i quan, i qui no sap quin grup és quin.",
      hint: "Les plantes no poden fer veure que creixen. Qui s'ha de posar a cegues és qui mesura."
    },
    {
      id: "q3",
      type: "open",
      text: "Quin resultat faria caure la promesa? Si l'empresa respon «les plantes han de sentir la música amb bona energia», quin senyal s'encén i per què?",
      hint: "Una excusa per a cada resultat en contra…"
    }
  ],

  metacognition: {
    prompt: "Com ha canviat la teva manera de decidir què és cert des del primer dia de la SA? Posa'n un exemple.",
    type: "reflection"
  },

  homework: {
    description: "Fes l'Autoavaluació de la SA1 al web (checklist, pràctica escrita i un cas nou). Si no has pogut exposar a classe, prepara la targeta: exposaràs a l'inici de la sessió següent.",
    note: "La pràctica escrita es fa a mà abans de mirar les respostes model."
  },

  recoveryInstructions: [
    "Fes com a mínim 6 casos de l'app del detector (apartat 1)",
    "Passa un cas real teu (o un de reserva) pel detector amb la fitxa S3 i omple el motlle de la prova justa",
    "Prepara la targeta de l'exposició (apartat 4): l'exposaràs a la sessió següent",
    "Demana a algú de casa que et llegeixi una promesa d'un anunci i passa-la pel detector",
    "Fes l'autoavaluació de la SA i l'exit tiquet"
  ],

  oaLinks: ["OA1", "OA3", "OA4"],
  competencies: ["CE1", "CE2", "CE3"],
  criterisAvaluacio: ["1.1", "2.2", "3.1", "3.2"]
}
