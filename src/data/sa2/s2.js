export const sa2s2 = {
  id: "s2",
  saId: "sa2",
  title: "Dues còpies o quatre a mitges",
  sessionNumber: 2,
  biome: "sa2",
  duration: "2h",
  engageImage: "/images/sa2-s2-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Tens 46 cromosomes a gairebé totes les cèl·lules del cos. La teva mare també. El teu pare també. I tu vas començar quan UNA cèl·lula de la teva mare (l'òvul) es va fusionar amb UNA cèl·lula del teu pare (l'espermatozoide). Si l'òvul en portés 46 i l'espermatozoide 46, tu en tindries 92... i el teu fill 184. Però tots en tenim 46. On han anat a parar la meitat?",
  engageQuestion: "La mitosi fa dues cèl·lules idèntiques amb TOT el material genètic. Aleshores, per què els gàmetes (òvul i espermatozoide) NO es poden fabricar per mitosi?",
  engageContext: "Avui entrareu al laboratori: tenyireu la punta d'una arrel de ceba i veureu amb els vostres ulls cromosomes reals de cèl·lules en plena mitosi. Després, a l'explicació, descobrireu l'altra divisió, la meiosi: quatre cèl·lules amb la meitat i totes diferents. Al final podreu respondre per què el cos necessita les dues.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Preparo i observo una tinció d'àpex d'arrel de ceba, identifico cèl·lules en cada fase de la mitosi i justifico cada pas del protocol (per què l'àpex, per què l'àcid, per què l'aixafament).",
      "Explico per què els gàmetes han de tenir la meitat del material genètic, deduint-ho del que passaria a la fecundació si no fos així.",
      "Relaciono la meiosi amb la variabilitat: calculo quantes combinacions diferents de gàmetes pot donar una cèl·lula i argumento per què dos germans (que no siguin bessons idèntics) no són iguals.",
      "Justifico quan el cos fa servir cada divisió i per què les dues són imprescindibles per créixer, reparar-se i reproduir-se."
    ],
    B: [
      "Preparo una tinció d'arrel de ceba seguint el protocol i trobo al microscopi cèl·lules en diferents fases de la mitosi.",
      "Distingeixo la mitosi (2 cèl·lules idèntiques, material genètic complet) de la meiosi (4 cèl·lules, la meitat del material) en un esquema.",
      "Explico amb les meves paraules que els gàmetes tenen la meitat de cromosomes perquè, en unir-se a la fecundació, el nombre torni a ser el normal.",
      "Dic que la meiosi barreja el material genètic i que per això els gàmetes són diferents entre ells.",
      "Indico per a què serveix cada divisió: la mitosi per créixer i reparar, la meiosi per fer gàmetes (reproducció)."
    ],
    // C = adaptació (alumnes amb DIL). NO és la B escurçada: menys
    // objectius i tasca pròpia. Han de coincidir amb l'oa-box de
    // fitxa_sa2_s2_VISUAL_C.html.
    C: [
      "Segueixo els passos del laboratori i trobo una cèl·lula que s'està dividint.",
      "Distingeixo la mitosi (2 cèl·lules iguals) de la meiosi (4 amb la meitat).",
      "Dic per a què serveix cadascuna: créixer i reparar, o fer òvuls i espermatozoides.",
      "Explico per què un fill no és idèntic a cap dels seus pares."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "alta" — SA2 encara és inici de curs (1r trimestre).
  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Al microscopi, comença SEMPRE amb l'objectiu petit i puja després. Com reconèixer cada fase: INTERFASE, nucli rodó i granulat, no es veuen cromosomes. PROFASE, el nucli s'omple de fils (cabdell). METAFASE, els cromosomes fan una franja al mig de la cèl·lula. ANAFASE, dos grups de cromosomes que s'allunyen cap als extrems. TELOFASE, dos nuclis a punt de separar-se, amb una paret nova al mig. La majoria de cèl·lules estaran en interfase: és normal.",
      challenge:
        "No et quedis en trobar les fases: la fitxa et demana que justifiquis cada pas del protocol (per què només els 2-3 mm de la punta, per què s'escalfa amb àcid, per què s'aixafa) i que, amb el recompte d'un camp, calculis l'índex mitòtic i diguis si és el que esperaves en un teixit que creix."
    },
    "2": {
      scaffold:
        "Tot el que has vist al microscopi és MITOSI: 2 cèl·lules idèntiques amb el material complet. La MEIOSI fa dues divisions seguides: a la primera se separen les PARELLES (un vermell i un blau a cada banda); a la segona, les còpies de cada X. Resultat: 4 cèl·lules amb la meitat (un de cada parella). Mnemotècnic: mitosi = Idèntiques; meiosi = meitat.",
      challenge:
        "La teva taula no es queda en l'exemple humà: hi has de fer el mateix raonament per a tres espècies amb nombres de cromosomes diferents i, a l'última fila, escriure la regla general vàlida per a qualsevol espècie. Pensa-hi mentre ho fas: la mitosi i la meiosi comencen igual (totes dues copien l'ADN); quina és exactament la diferència que fa que una acabi amb material complet i l'altra amb la meitat?"
    },
    "3": {
      scaffold:
        "Pensa-ho amb números petits. Imagina una espècie amb 4 cromosomes. Si els gàmetes en tinguessin 4, el fill en tindria 4+4 = 8; el net, 16... Cada generació doblaria! Perquè el fill torni a tenir 4, cada gàmeta n'ha d'aportar 2 (la meitat). Això és el que fa la meiosi.",
      challenge:
        "Els humans tenim 46 cromosomes. Quants n'ha de tenir un òvul? I un espermatozoide? Justifica el número amb el que passa a la fecundació. Després explica per què, gràcies a com la meiosi barreja els cromosomes, cap germà teu (llevat d'un bessó idèntic) és igual que tu."
    },
    "4": {
      scaffold:
        "Fes-te dues preguntes per a cada divisió: ON passa al cos i PER A QUÈ. Mitosi: a tot el cos (pell, os, fetge...), per créixer i reparar. Meiosi: només als ovaris i als testicles, per fabricar gàmetes. Si una fallés, què no podries fer?",
      challenge:
        "Un tractament de quimioteràpia ataca les cèl·lules que es divideixen molt de pressa. Per què creus que provoca efectes com la caiguda del cabell o problemes digestius? Connecta-ho amb quins teixits fan MOLTA mitosi. (Pista: recorda els dos teixits que vas buscar de deures.)"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Primer posem en comú els deures (teixits que es regeneren molt i teixits que gairebé no) i el que ja pensem sobre com naixem. No es corregeix: ho compararem al final.",
    prompts: [
      {
        kind: "write",
        text: "Dels deures: quin teixit has trobat que es regenera molt de pressa i quin gairebé no? Per què creus que un fa molta mitosi i l'altre gairebé no?",
        starter: "Es regenera molt: … perquè… / Gairebé no: … perquè…"
      },
      {
        kind: "write",
        text: "Un fill s'assembla als seus pares però no és idèntic a cap dels dos. D'on creus que surt la barreja?",
        starter: "Crec que la barreja surt de…"
      }
    ]
  },

  // ── EXPLORA (laboratori real · tinció d'àpex d'arrel de ceba) ─
  exploreActivity: {
    what: "Laboratori real: tenyiu la punta d'una arrel de ceba amb orceïna i busqueu al microscopi cèl·lules en mitosi. Les arrels creixen per la punta (l'àpex), i és allà on les cèl·lules es divideixen sense parar. Heu de trobar almenys una cèl·lula de cada fase, fer-ne una foto amb el mòbil a través de l'ocular i comptar les cèl·lules d'un camp per fer un primer càlcul de l'índex mitòtic.",
    who: { mode: "grup", label: "Parelles de laboratori" },
    time: 55,
    note: "Feu servir bata i guants: l'orceïna taca i porta àcid. La gràcia no és només veure-ho: heu de poder explicar per què cada pas del protocol és necessari. Si una preparació no surt, en feu una altra amb una segona punta."
  },
  exploreInstructions: [
    "Talleu només els 2-3 mm de la punta de 2-3 arrels i poseu-los al vidre de rellotge amb 2-3 ml d'orceïna A",
    "Escalfeu-ho suaument a la flama uns 8 minuts, fins que surtin vapors tènues: MAI ha de bullir",
    "Poseu una punta al portaobjectes amb una gota d'orceïna B i deixeu-la actuar 1 minut",
    "Tapeu-la amb el cobreobjectes i doneu-hi copets amb el mànec de l'agulla; poseu-hi 5-6 tires de paper de filtre a sobre i premeu fort amb el polze, sense moure'l ni trencar el vidre (aixafament)",
    "Observeu-ho primer amb l'objectiu petit i després amb el gran: busqueu una cèl·lula de cada fase i feu-ne una foto pel mòbil a través de l'ocular",
    "Compteu les cèl·lules d'un camp: quantes estan en divisió i quantes no. Calculeu-ne l'índex mitòtic (ho repetireu bé a la sessió 3)"
  ],
  exploreDuration: "55 min",
  appSrc: "/apps/app_lab_ceba.html",
  exploreNote: "Laboratori virtual: si no has pogut venir o la preparació no t'ha sortit, fes la pràctica a l'app. Primer ordenes el protocol; després fas servir un microscopi virtual amb una preparació real d'arrel de ceba: hi classifiques les cèl·lules per fases i l'app et calcula l'índex mitòtic.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Tot el que has vist és ==mitosi==: dues còpies idèntiques",
      text: "Les cèl·lules que has trobat a l'arrel de ceba feien ==mitosi|p==: d'una cèl·lula en surten ==dues d'idèntiques==, amb ==tot el material genètic== (els 46 cromosomes, en els humans). L'arrel la fa servir per ==créixer==; el teu cos, per ==créixer i reparar==. És la fotocopiadora del cos: la còpia surt igual que l'original. Però, si la ceba només fes mitosi, com faria les llavors? On faria una altra mena de divisió?",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "La ==meiosi==: dues divisions per fer gàmetes",
      text: "La meiosi fa ==gàmetes== (òvuls i espermatozoides). A partir d'una cèl·lula fa ==dues divisions seguides== i n'obté ==quatre cèl·lules==, cadascuna amb la ==meitat|r== del material genètic: ==un cromosoma de cada parella== (23 en els humans, un de cada tipus). A la primera divisió se separen les ==parelles|b== de cromosomes; a la segona, les còpies. Per això el resultat NO és una còpia idèntica de la cèl·lula original.",
      image: "/images/cariotip-huma.webp",
      imageWide: true,
      imageTitle: "Els 23 parells de cromosomes humans",
      imageCaption: "Cariotip humà real: els 46 cromosomes ordenats en 23 parells. La meiosi fa gàmetes amb UN cromosoma de cada parella (23 en total). Els colors i les bandes són de la tinció del laboratori: no indiquen si el cromosoma ve de la mare o del pare. Il·lustració: NHGRI (domini públic), retolada en català.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Per què la ==meitat==? La fecundació",
      text: "A la ==fecundació|g==, un òvul (==n==, la meitat) s'uneix amb un espermatozoide (==n==, la meitat) i formen el ==zigot== (==2n==, complet). Si els gàmetes tinguessin el material sencer, cada generació el ==doblaria== (46 → 92 → 184...). La meiosi ho evita: a cada gàmeta hi posa ==un cromosoma de cada parella== (no 23 qualssevol) perquè, en sumar-se les dues meitats, el nombre torni a ser el normal.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "La meiosi ==barreja==: per això no som clons",
      text: "Quan la meiosi reparteix els cromosomes, ho fa ==a l'atzar==: de cada parella, uns cops va a un gàmeta el del pare i uns cops el de la mare. Per això cada gàmeta que fabriques porta una ==combinació diferent== del material que vas rebre dels teus pares, i dos germans ==no són idèntics== (llevat dels bessons idèntics). La meiosi és la font de la ==variabilitat== dins d'una espècie.",
      image: "/images/sa2-s2-segregacio-atzar.webp",
      imageWide: true,
      imageTitle: "Dues alineacions, quatre gàmetes diferents",
      imageCaption: "Les parelles s'alineen a l'equador a l'atzar: el cromosoma de la mare pot anar al mateix pol que el de la mare de l'altra parella (cas 1) o no (cas 2). Així, amb només 2 parelles, ja surten 4 combinacions diferents de gàmetes.",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "4",
      heading: "Quan fa servir el cos ==cada divisió==",
      text: "La ==mitosi== passa a ==tot el cos== durant tota la vida: cada cop que creixes, cures una ferida o reposes cèl·lules. La ==meiosi== només passa als ==ovaris i als testicles==, per fabricar gàmetes. Les dues són imprescindibles: sense mitosi no creixeries ni et curaries; sense meiosi no hi hauria ==reproducció==. Aquesta és la raó per la qual les dues divisions són tan importants en el desenvolupament, el creixement i la reproducció humans.",
      type: "epistemic",
      badge: "🧬 Per què importa"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: true, title: "Mitosi i meiosi, comparades", src: "/images/sa2-s2-mitosi-meiosi.svg", note: "La MATEIXA cèl·lula de partida dona dos resultats: mitosi (2 cèl·lules idèntiques, 2n = 4) i meiosi (4 gàmetes amb la meitat: un llarg + un curt, un de cada parella). Mira la llegenda: el color diu d'on ve (mare/pare), la mida el tipus, i una X és UN cromosoma copiat. Fes-la servir per seguir la demostració del docent." },
    { id: "App", apartat: "2", before: false, embed: true, aspect: "900 / 700", minHeight: 560, title: "Mitosi i meiosi pas a pas", src: "/apps/app_mitosi_meiosi.html", note: "Mitosi (6 fases) i meiosi (10 fases) amb el comptador de cromosomes a cada fase i la notació 2n / n. Fes-la servir per repassar l'ordre i, a casa, per preparar el vídeo." },
    { id: "Animació", apartat: "3", before: true, embed: true, aspect: "900 / 760", minHeight: 600, title: "23 + 23 = 46: la fecundació pas a pas", src: "/apps/sa2-s2-fecundacio-animacio.html", note: "Avança amb els botons o les fletxes ← →. L'òvul i l'espermatozoide porten 23 cromosomes cadascun, un de cada tipus; el zigot en té 46, en 23 parelles. L'últim pas mostra què passaria sense meiosi: 46 → 92 → 184 → 368." },
    { id: "Fig.2", apartat: "3", before: true, title: "Per què la meitat: la fecundació", src: "/images/sa2-s2-fecundacio.svg", note: "Òvul (n = 23, un de cada tipus) + espermatozoide (n = 23) = zigot (2n = 46, 23 parelles). Els cromosomes són de mides diferents perquè cada mida és un tipus. Si els gàmetes no tinguessin la meitat, cada generació doblaria el nombre de cromosomes." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa2-s2-fitxa-A.html", B: "/fitxes/sa2-s2-fitxa-B.html", C: "/fitxes/sa2-s2-fitxa-C.html" },
  sessionMaterials: [
    { id: "rubrica-producte", title: "Rúbrica del producte final: vídeo del procés + informe diagnòstic", url: "/fitxes/sa2-rubrica-maqueta-informe.html", who: "alumnat" }
  ],
  teoriaPdfUrl: "/teoria/sa2-s2-teoria.pdf",
  elaborateNote: "Tancament de la fitxa: torna a la pregunta del principi (per què no tenim 92 cromosomes) i respon-la amb el que has après sobre la meiosi i la fecundació.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S2 — Dues còpies o quatre a mitges",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies + posada en comú dels deures",
        time: "5 min",
        phase: "engage",
        instruction: "Posa en comú els dos teixits dels deures i respon: d'on creus que surt la barreja que fa que un fill no sigui idèntic als pares. No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "Laboratori: tinció de l'arrel de ceba",
        time: "55 min",
        phase: "explore",
        instruction: "Segueix el protocol de la fitxa per tenyir la punta de l'arrel. Al microscopi, busca una cèl·lula de cada fase, fes-ne una foto i dibuixa-la. Compta les cèl·lules d'un camp i fes un primer càlcul de l'índex mitòtic.",
        hints: [
          "Si no trobes cap cèl·lula en divisió, mou la preparació cap a la punta de l'arrel: és allà on n'hi ha més.",
          "Les cèl·lules en interfase són la majoria: si en un camp no en veus cap en divisió, prova un altre camp abans de rendir-te."
        ]
      },
      {
        apartat: "2",
        title: "Explica: de la mitosi a la meiosi",
        time: "25 min",
        phase: "explica",
        instruction: "Mira la demostració del docent i la Fig.1. Completa la comparació: nombre de divisions, nombre de cèl·lules i quantitat de material genètic de cada divisió. Marca quina fa cèl·lules idèntiques.",
        hints: [
          "A la meiosi hi ha DUES divisions: primer se separen les parelles, després les còpies.",
          "Per saber si són idèntiques, compara-les entre elles, no amb la cèl·lula de partida."
        ]
      },
      {
        apartat: "3",
        title: "Per què la meitat + per què no som clons",
        time: "15 min",
        phase: "explica",
        instruction: "Amb la Fig.2, explica per què els gàmetes tenen la meitat dels cromosomes i digues quants n'ha de tenir un òvul humà. Després explica per què dos germans no són idèntics.",
        hints: [
          "Si el gàmeta portés el material sencer, a la fecundació el número es doblaria a cada generació.",
          "La meiosi barreja els cromosomes: cada gàmeta és una combinació diferent."
        ]
      },
      {
        apartat: "4",
        title: "Quan fa el cos cada divisió + torna al hook",
        time: "10 min",
        phase: "explica",
        instruction: "Digues on i per a què fa servir el cos cada divisió. Després torna a la pregunta del principi (per què no tenim 92 cromosomes) i respon-la.",
        hints: [
          "Pensa en quins llocs del cos hi ha cèl·lules noves cada dia i en quins llocs se'n fabriquen només d'un tipus molt concret.",
          "Al hook: compta quants cromosomes hi posa cada progenitor i mira què hauria de passar abans perquè la suma no es dupliqui a cada generació."
        ]
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  // Full imprimible del tiquet de sortida (mig A4 · dos tiquets per full).
  // Generat per scripts/_exit-tickets/build_tickets.py.
  exitTicketUrl: { A: "/fitxes/sa2-s2-exit-ticket.html", B: "/fitxes/sa2-s2-exit-ticket.html", C: "/fitxes/sa2-s2-exit-ticket-C.html" },
  exitTicketType: "paper",
  exitTicketCriteri: "1.2",  // criteri imprès al tiquet (build_tickets.py)
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Per què dos germans dels mateixos pares no són idèntics (si no són bessons idèntics)? Relaciona-ho amb la meiosi.",
      hint: "La meiosi no fa còpies: barreja el material a l'atzar en cada gàmeta."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, havies vist mai un cromosoma de veritat? Què t'ha sorprès de la preparació? I, si t'haguessin preguntat per què no tens 92 cromosomes, què hauries dit? Què ha canviat?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Peça 1 del producte: grava un vídeo curt (2-3 minuts) on expliquis la mitosi i la meiosi a partir de la MATEIXA cèl·lula de partida (2 parelles de cromosomes: un vermell = mare i un blau = pare a cada parella). Pots fer servir qualsevol material: plastilina, fils, paper retallat, mitjons, una pissarra, objectes de casa... Ha de quedar clar: el pas de còpia (forma de X), com acaba cada divisió (quantes cèl·lules i quants cromosomes té cadascuna) i per què la meiosi dona gàmetes diferents. Es lliura a la sessió 4 i et servirà per estudiar per a la prova.",
    note: "Aprenentatge significatiu: explicar el procés amb un model propi i en veu alta obliga a entendre'l, no a copiar-lo. Mira la rúbrica del producte abans de gravar."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Fes la pràctica al laboratori virtual (a l'apartat EXPLORA): ordena el protocol i, al microscopi virtual, classifica les cèl·lules per fases i calcula'n l'índex mitòtic",
    "Llegeix l'apartat EXPLICA: la mitosi, la meiosi (dues divisions, 4 cèl·lules, la meitat del material), la fecundació (n + n = 2n) i la variabilitat",
    "Mira la Fig.1 (mitosi vs meiosi), l'app de mitosi i meiosi i la Fig.2 (fecundació)",
    "Descarrega la fitxa S2 i completa les preguntes del laboratori (amb les dades del laboratori virtual), la comparació i el càlcul dels cromosomes de l'òvul",
    "A casa, grava el vídeo del procés (mitosi i meiosi) amb el material que vulguis: es lliura a la sessió 4",
    "Fes l'exit tiquet online a l'acordió de sota"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA2", "OA4"],
  competencies: ["CE1", "CE3", "CE4"],
  criterisAvaluacio: ["1.1", "1.2", "4.1"]
}
