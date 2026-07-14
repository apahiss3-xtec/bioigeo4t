export const sa3s4 = {
  id: "s4",
  saId: "sa3",
  title: "Reescriure la vida? El debat CRISPR",
  sessionNumber: 4,
  biome: "sa3",
  duration: "2h",
  engageImage: "/images/sa3-s4-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "El 2018, un científic va anunciar al món que havia editat l'ADN de dues nenes bessones quan encara eren embrions, per intentar fer-les resistents al VIH. Ho va fer amb CRISPR, unes «tisores moleculars» que retallen l'ADN i permeten canviar-hi lletres. La comunitat científica va reaccionar amb alarma: no perquè fos impossible, sinó perquè s'havia fet en embrions —i aquests canvis passaran als seus fills i als fills dels seus fills, per sempre. El científic va acabar a la presó. El repte d'avui no és de laboratori, sinó de decisió: ara que SABEM que es pot canviar una lletra de l'ADN per curar o per «millorar» una persona, qui decideix fins on podem arribar? I amb quins arguments?",
  engageQuestion: "Una cosa és preguntar-se QUÈ ES POT fer amb el codi de la vida (una pregunta de ciència) i una altra de ben diferent QUÈ S'HAURIA de fer (una pregunta de valors). On és la frontera entre curar una malaltia i «dissenyar» una persona? I com decidim, entre tots, on posar-la?",
  engageContext: "Al llarg de la SA has vist com és l'ADN per dins (S2), com es tradueix en proteïnes i característiques (S3) i com una sola lletra canviada pot curar o causar una malaltia. Avui tanques la situació amb la pregunta que la va obrir a la S1: fins on hauríem de poder reescriure nosaltres el codi? Recuperaràs la graella de fonts fiables de SA1 per destriar la informació sòlida del soroll, coneixeràs qui va descobrir l'estructura de l'ADN (i qui va quedar oblidada), i prepararàs el teu assaig argumentatiu, el producte que avalua tota la SA.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Distingeixo la pregunta científica («què es pot fer amb CRISPR») de la pregunta ètica («què s'hauria de fer»), i explico per què la ciència pot dir què és possible però no decideix tota sola què és desitjable.",
      "Diferencio l'edició de cèl·lules del cos (somàtica, no s'hereta) de l'edició d'embrions o gàmetes (germinal, s'hereta) i argumento per què aquesta diferència és clau en el debat ètic.",
      "Avaluo la fiabilitat de fonts d'informació sobre CRISPR aplicant la graella de SA1 (autor, institució, intenció, verificació) i separo els fets contrastats de l'opinió i l'exageració.",
      "Construeixo un assaig argumentatiu amb postura pròpia, arguments a favor i en contra fonamentats i una conclusió raonada, valorant la contribució de la ciència i el paper (sovint invisibilitzat) de persones com Rosalind Franklin."
    ],
    B: [
      "Explico la diferència entre el que la ciència POT fer (CRISPR permet canviar lletres de l'ADN) i el que la societat decideix que S'HAURIA de fer.",
      "Dic la diferència entre editar cèl·lules del cos (no passa als fills) i editar embrions (passa als fills) i per què això preocupa.",
      "Faig servir la graella de fonts fiables de SA1 per decidir si una informació sobre CRISPR és de fiar o no.",
      "Escric un text argumentatiu curt amb la meva postura, un argument a favor i un en contra, i explico qui era Rosalind Franklin."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — coherent amb SA3·S1-S3; els arguments els construeix l'alumnat, però es dona la graella de destriar PODEM/HAURIEM i la de fonts.
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "CRISPR és, en essència, unes tisores molt precises. Imagina que l'ADN és un text molt llarg i que en una paraula hi ha una falta d'ortografia que causa una malaltia (com la lletra canviada de l'anèmia falciforme, S3). CRISPR és com una eina de «cerca i reemplaça»: localitza el tros exacte de text, hi fa un tall i permet corregir la lletra. No inventa res de nou: fa el mateix tipus de canvi que estudiaves a S3, però ara dirigit i a voluntat. Aquesta imatge et dona el QUÈ FA; el debat és sobre el FINS ON.",
      challenge:
        "Explica amb el vocabulari de la SA què fa exactament CRISPR sobre la molècula d'ADN (localitzar seqüència, tallar, editar) i connecta-ho amb S3: si una mutació és un canvi accidental d'una lletra, què és editar amb CRISPR? Després planteja: quina diferència hi ha, en el fons, entre una mutació natural que cura (algunes persones tenen mutacions que les protegeixen de malalties) i una edició feta al laboratori? És només una qüestió de qui la fa?"
    },
    "2": {
      scaffold:
        "Dos escenaris. (1) Un adult amb una malaltia de la sang: se li editen les cèl·lules de la seva medul·la per curar-lo. Aquest canvi es queda EN ELL: quan tingui fills, els fills NO l'heretaran. Això és edició SOMÀTICA (soma = cos). (2) S'edita un embrió: el canvi entra en TOTES les seves cèl·lules, incloses les que faran òvuls o espermatozoides, així que passarà als seus fills, néts... per sempre. Això és edició GERMINAL (de la línia germinal, la que forma els gàmetes). La imatge et mostra els dos camins: fixa't en la fletxa que continua cap als descendents només en un dels dos.",
      challenge:
        "Argumenta per què molts països permeten la investigació en edició somàtica però prohibeixen l'edició germinal en humans. Fes servir aquests dos criteris: (a) qui assumeix el risc i si ha pogut consentir-hi, i (b) el fet que un error germinal no afecta una persona sinó tota una descendència. Relaciona-ho amb el cas de les bessones editades del 2018: per què va ser tan polèmic que fos en embrions?"
    },
    "3": {
      scaffold:
        "Torna a la graella de SA1. Davant d'una informació sobre CRISPR (un titular, un vídeo, una web), pregunta't: Qui ho diu? (un científic, una empresa que ven el tractament, un influencer?) · Hi ha una institució darrere? · Quina intenció té (informar, vendre, espantar, generar clics)? · Es pot verificar amb altres fonts serioses? Un mateix fet —«s'han editat uns embrions»— es pot explicar com a notícia rigorosa o com a titular sensacionalista («científics creen nadons de disseny»). El teu paper és destriar el fet contrastat de l'exageració.",
      challenge:
        "Agafa una afirmació típica de titular («CRISPR permetrà triar el color d'ulls i la intel·ligència dels fills») i separa-la en dues parts: què hi ha de cert avui (fet contrastat) i què és especulació o exageració. Explica com ho has decidit i quines fonts creuries per confirmar-ho. Connecta-ho amb SA1: per què les afirmacions que no es poden verificar ni contrastar no són ciència, encara que sonin científiques?"
    },
    "4": {
      scaffold:
        "Un bon argument no és una opinió: és una postura + una raó + una prova o un valor que la sosté. Estructura senzilla per al debat: «Crec que [postura] perquè [raó científica o ètica], com mostra [exemple, dada o principi].» Fes servir el que has treballat: la distinció somàtica/germinal, qui assumeix el risc, el consentiment, els beneficis (curar malalties greus) i els perills (desigualtat, errors irreversibles, «millorar» en lloc de curar). Un argument a favor i un en contra, cadascun ben sostingut, valen més que deu opinions soltes.",
      challenge:
        "Prepara la teva postura per a l'assaig de manera ordenada (el marc PODEM/HAURÍEM): identifica els fets científics rellevants, els valors en joc (salut, llibertat, igualtat, precaució) i qui es veu afectat per la decisió. Construeix el teu argument més fort I el contraargument més fort de la posició contrària, i després respon-lo: un bon assaig no ignora l'altra banda, la rebat. Inclou una reflexió sobre com el cas de Rosalind Franklin ens recorda que la ciència és una tasca col·lectiva on el reconeixement no sempre és just."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de començar, recupera el que ja saps de tota la SA i la feina que vas preparar a casa. No es corregeix.",
    prompts: [
      {
        kind: "write",
        text: "Si canviar una lletra de l'ADN pot curar una malaltia (com vas veure amb l'anèmia falciforme), et sembla que hauríem de fer-ho sempre que puguem? Escriu la teva primera reacció, sense pensar-hi gaire.",
        starter: "La meva primera reacció és que…"
      },
      {
        kind: "write",
        text: "Quan una notícia diu «científics creen nadons de disseny», com decideixes si t'ho creus o no? En què et fixes?",
        starter: "Per decidir si m'ho crec, em fixo en…"
      }
    ]
  },

  // ── EXPLORA (ABP · debat i preparació de l'assaig) ───────
  exploreActivity: {
    what: "Debat argumentat en gran grup sobre l'edició genètica d'embrions humans, a partir del cas real de les bessones editades (2018). Primer, en equips, analitzeu un petit dossier de fonts diverses sobre CRISPR (una notícia rigorosa, un titular sensacionalista, la web d'una empresa, una font científica) i decidiu de quines us fieu i per què. Després us posicioneu i debateu, distingint sempre QUÈ ES POT fer (ciència) de QUÈ S'HAURIA de fer (ètica). El debat és la preparació de l'assaig argumentatiu individual, el producte que avalua la SA.",
    who: { mode: "grup", label: "Equips de 3-4 → debat en gran grup" },
    time: 55,
    note: "No es tracta de «guanyar» el debat ni d'imposar una postura. Es tracta de construir arguments fonamentats, escoltar l'altra banda i decidir amb criteri propi. La qualitat d'un argument no depèn de si estàs a favor o en contra, sinó de com el sostens."
  },
  exploreInstructions: [
    "En equip, llegiu les 4 fonts del dossier i puntueu-ne la fiabilitat amb la graella de SA1 (autor, institució, intenció, verificació)",
    "Separeu, per a cada font, què és un fet contrastat i què és opinió o exageració",
    "Situeu el cas de les bessones editades: edició somàtica o germinal? per què va ser polèmic?",
    "Cada equip prepara UN argument a favor i UN en contra, ben sostinguts (postura + raó + prova/valor)",
    "Debat en gran grup: distingiu sempre «què es pot» de «què s'hauria de fer»; anoteu els millors arguments de les dues bandes per a l'assaig"
  ],
  exploreDuration: "55 min",
  appSrc: null,
  exploreNote: "Itinerari amb suport decreixent: es dona la graella de fonts i el marc PODEM/HAURIEM, però els arguments i la postura els construïu vosaltres. És una qüestió sociocientífica (SSI): ni la ciència sola ni l'opinió sola hi donen resposta.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "CRISPR: unes ==tisores moleculars== per editar l'ADN",
      text: "==CRISPR== és una eina que permet ==editar l'ADN== amb precisió: localitza una ==seqüència== concreta, hi fa un ==tall== i permet ==canviar-hi lletres==. És com una funció de «cerca i reemplaça» aplicada al codi de la vida. No fa res que la natura no faci —recorda que una ==mutació|p== és un canvi de lletres (S3)—, però ho fa ==dirigit i a voluntat==. Pot servir per ==corregir== la lletra que causa una malaltia, com la de l'==anèmia falciforme==.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Somàtica== o ==germinal==: la diferència que ho canvia tot",
      text: "Editar les cèl·lules del ==cos== d'una persona (per exemple, la medul·la d'un adult malalt) és edició ==somàtica==: el canvi es queda ==en ella== i ==no s'hereta==. Editar un ==embrió|p== o els ==gàmetes|p== és edició ==germinal==: el canvi entra a ==totes les cèl·lules== i ==passa als descendents== per sempre. Per això molts països ==permeten== investigar l'edició somàtica però ==prohibeixen== l'edició germinal en humans: un error no afectaria una persona, sinó ==tota una descendència== que no ha pogut ==consentir-hi==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "==Fets== o ==soroll==: destriar la informació (graella de SA1)",
      text: "Sobre CRISPR circula molta informació desigual. Per destriar-la, torna a la ==graella de fonts fiables== de SA1: ==qui== ho diu, si hi ha una ==institució== al darrere, quina ==intenció== té (informar, vendre, espantar) i si es pot ==verificar== amb altres fonts. Un mateix fet es pot explicar com a ==notícia rigorosa== o com a ==titular sensacionalista==. Cal separar el ==fet contrastat== de l'==opinió== i l'==exageració==: allò que no es pot verificar ni contrastar ==no és ciència==, encara que ho sembli.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "==Podem== vs ==hauríem==: decidir amb arguments",
      text: "La ciència pot dir què és ==possible==, però ==no decideix tota sola== què és ==desitjable==: això ho decidim ==entre tots==, amb ==arguments==. Un argument sòlid és una ==postura== + una ==raó== (científica o ètica) + una ==prova o un valor== que la sosté. En una ==qüestió sociocientífica== (SSI) com aquesta cal pesar ==beneficis== (curar malalties greus) i ==riscos== (desigualtat, errors irreversibles, «==millorar==» en lloc de curar). I convé recordar, amb el cas de ==Rosalind Franklin==, que la ciència és una ==tasca col·lectiva== on el reconeixement no sempre ha estat ==just==.",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: false, title: "CRISPR: localitzar, tallar, editar", src: "/images/sa3-s4-crispr.svg", note: "L'eina localitza una seqüència concreta de l'ADN, hi fa un tall dirigit i permet canviar la lletra que causa el problema (aquí, corregir la mutació de tipus falciforme de S3). No inventa un canvi nou: dirigeix el mateix tipus de canvi que fa una mutació." },
    { id: "Fig.2", apartat: "2", before: false, title: "Edició somàtica vs germinal", src: "/images/sa3-s4-somatica-germinal.svg", note: "A dalt, edició somàtica: es corregeixen cèl·lules del cos d'un adult; el canvi es queda en ell i no passa als fills. A baix, edició germinal: s'edita un embrió i el canvi entra a totes les cèl·lules, també les que formaran gàmetes, així que s'hereta generació rere generació." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa3-s4-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa i de la SA: amb el marc PODEM/HAURIEM, la distinció somàtica/germinal i la graella de fonts, planifica el teu assaig argumentatiu (postura, argument a favor, contraargument rebatut i conclusió). L'assaig és el producte que avalua tota la SA3.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S4 — Reescriure la vida? El debat CRISPR",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "6 min",
        phase: "engage",
        instruction: "Omple l'apartat 0: la teva primera reacció sobre editar l'ADN per curar i com decideixes si et creus una notícia. No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "Què fa CRISPR",
        time: "16 min",
        phase: "explica",
        instruction: "Amb la Fig.1, explica què fa CRISPR sobre l'ADN (localitzar, tallar, editar) i connecta-ho amb la mutació de la S3.",
        hints: [
          "CRISPR = «cerca i reemplaça» sobre l'ADN: localitza la seqüència, la talla i canvia la lletra.",
          "Una mutació és un canvi de lletres accidental; editar és dirigir aquest mateix tipus de canvi a voluntat."
        ]
      },
      {
        apartat: "2",
        title: "Somàtica o germinal",
        time: "18 min",
        phase: "explica",
        instruction: "Amb la Fig.2, explica la diferència entre editar cèl·lules del cos (somàtica) i editar un embrió (germinal) i per què la segona genera tant debat.",
        hints: [
          "Somàtica = es queda en la persona, no s'hereta. Germinal = passa als descendents per sempre.",
          "Pensa qui assumeix el risc i si ha pogut consentir-hi."
        ]
      },
      {
        apartat: "3",
        title: "Fets o soroll: fonts fiables",
        time: "16 min",
        phase: "explore",
        instruction: "Analitza les fonts del dossier amb la graella de SA1 i separa, per a cada una, el fet contrastat de l'opinió o l'exageració.",
        hints: [
          "Qui ho diu? Hi ha una institució? Quina intenció? Es pot verificar?",
          "El que no es pot verificar ni contrastar no és ciència, encara que ho sembli."
        ]
      },
      {
        apartat: "4",
        title: "Prepara el teu assaig",
        time: "24 min",
        phase: "elabora",
        instruction: "Amb el marc PODEM/HAURIEM, planifica el teu assaig: postura, un argument a favor i un en contra ben sostinguts, i qui era Rosalind Franklin.",
        hints: [
          "Argument = postura + raó (científica o ètica) + prova o valor.",
          "Un bon assaig no ignora l'altra banda: la rebat."
        ]
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "multiple",
      text: "Quina és la diferència entre l'edició somàtica i la germinal?",
      options: [
        "La somàtica edita cèl·lules del cos i no s'hereta; la germinal edita embrions o gàmetes i passa als descendents",
        "La somàtica passa als fills i la germinal no",
        "Són el mateix procés amb dos noms diferents",
        "La somàtica només es fa en plantes i la germinal en animals"
      ],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "Explica amb les teves paraules la diferència entre la pregunta «QUÈ ES POT fer amb CRISPR» i la pregunta «QUÈ S'HAURIA de fer». Per què la ciència sola no respon la segona?",
      hint: "Una és una pregunta de possibilitat (ciència); l'altra, de valors (la decidim entre tots)."
    },
    {
      id: "q3",
      type: "open",
      text: "Escriu UN argument (a favor o en contra) d'editar el genoma d'un embrió humà, ben sostingut: postura + raó + prova o valor.",
      hint: "«Crec que… perquè… com mostra…». Fes servir la distinció somàtica/germinal o el consentiment."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Tanques la SA3 i el trimestre. Ara pots respondre la pregunta que la va obrir: fins on hauríem de poder reescriure el codi de la vida? Ha canviat la teva postura des de l'apartat 0? Què t'ha fet canviar (o mantenir) d'opinió: un fet científic, un argument dels companys, un valor? Què t'ha costat més: destriar les fonts o construir arguments fonamentats?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Escriu l'assaig argumentatiu individual sobre l'edició genètica d'embrions humans (producte avaluable de la SA3): una postura clara, com a mínim un argument a favor i un en contra fonamentats (postura + raó + prova/valor), l'altra banda rebatuda i una conclusió raonada. Cita les fonts que facis servir (graella de SA1). Inclou una menció a per què la ciència és una tasca col·lectiva, amb l'exemple de Rosalind Franklin.",
    deadline: null,
    note: "L'assaig es defensa a l'aula: has de poder explicar i sostenir els teus arguments en directe, no només lliurar-los (política d'ús de la IA d'Albert)."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: què fa CRISPR (localitzar, tallar, editar) i la diferència somàtica/germinal",
    "Mira la Fig.1 (CRISPR pas a pas) i la Fig.2 (somàtica vs germinal)",
    "Repassa la graella de fonts fiables de SA1: autor, institució, intenció, verificació",
    "Informa't sobre el cas de les bessones editades (2018) i per què va ser polèmic (edició germinal)",
    "Descarrega la fitxa S4 i prepara l'assaig: postura, un argument a favor i un en contra ben sostinguts, i qui era Rosalind Franklin",
    "Assegura't d'entendre la diferència entre «què es pot fer» (ciència) i «què s'hauria de fer» (decisió col·lectiva amb arguments)"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA4"],
  competencies: ["CE1", "CE2", "CE3"],
  criterisAvaluacio: ["1.3", "2.2", "3.6"]
}
