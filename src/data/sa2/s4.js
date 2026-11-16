export const sa2s4 = {
  id: "s4",
  saId: "sa2",
  title: "Un cos que copia i un cos que reparteix",
  sessionNumber: 4,
  biome: "sa2",
  duration: "2h",
  engageImage: "/images/sa2-s4-portada.jpg",

  // ── ENGANXA (hook de síntesi) ─────────────────────────────
  engageChallenge: "Avui tanquem la SA2 amb dues coses. Primer, el seminari de resultats del consorci: un sol equip no pot dir quin fàrmac frena el tumor, però la taula de tota la classe sí. Després, la prova escrita de La cèl·lula.",
  engageQuestion: "Quin fàrmac ha frenat el tumor, comparat amb el control? I com ho saps, si només mires els números de la taula?",
  engageContext: "Seminari de resultats (15 min): cada equip aporta la seva fila (fàrmac, dosi, temps, índex inicial i final) a la taula de la classe i la comparem amb el control. Aquesta taula són les dades del teu article científic. Després, la prova escrita de La cèl·lula (50 min), individual i sense apunts. Avui no hi ha fitxa.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Llegeixo la taula del consorci comparant cada fàrmac amb el control i trio el fàrmac candidat argumentant-ho amb números.",
      "Detecto quan un número alt no demostra res perquè falta amb què comparar-lo.",
      "Demostro a la prova que distingeixo mitosi, meiosi i càncer i n'explico el mecanisme, no només la paraula."
    ],
    B: [
      "Aporto la fila del meu equip a la taula del consorci i la copio sencera.",
      "Comparo cada fàrmac amb el control per dir quin baixa més l'índex mitòtic.",
      "Demostro a la prova que reconec la mitosi, la meiosi i el càncer i sé calcular l'índex mitòtic."
    ],
    C: [
      "Copio la taula del consorci amb les dades de tots els equips.",
      "Dic quin fàrmac baixa més l'índex, mirant el control.",
      "Faig la prova i dic què fa cada un dels tres processos."
    ]
  },

  // Sessió sense fitxa (10/11/2026): només seminari del consorci + prova escrita.
  guiaPerApartats: true,

  // ── EXPLORA (ABP · informe de diagnòstic amb 3 casos) ─────
  exploreActivity: {
    what: "SEMINARI DE RESULTATS: cada equip aporta els seus índexs de la S3 a la taula del consorci, la classe la llegeix comparant cada fàrmac amb el control i tria el fàrmac candidat. Cadascú copia la taula al full de resultats: són les dades del seu article.",
    who: { mode: "grup", label: "Equips del consorci" },
    time: 15,
    note: "Un número sol no diu res: abans de dir que un índex és alt o baix, pregunta't «comparat amb què?»."
  },
  exploreInstructions: [
    "El teu equip dicta la seva fila (fàrmac, dosi, temps, índex inicial → final) i la copies tota al full de resultats del consorci",
    "Llegiu la taula comparant sempre amb el CONTROL: quin fàrmac baixa més l'índex? algun és tòxic? la dosi alta o el temps llarg canvien el resultat?",
    "Trieu entre tots el fàrmac candidat i anoteu què NO es pot afirmar amb aquestes dades"
  ],
  exploreDuration: "15 min",
  exploreMaterials: ["Full de resultats del consorci (taula de tota la classe)", "Els teus índexs de la S3 (fitxa de pacient)"],
  exploreNote: "El seminari és el moment clau de la recerca: un sol equip no pot dir quin fàrmac és millor, però la taula de tota la classe sí.",

  // ── EXPLICA (repàs actiu, connexió dels 3 fils) ───────────
  theoryPoints: [
    {
      id: "t1",
      images: [
        {
          "src": "images/sa2-fotos/s4-t1.jpg",
          "caption": "Les fases de la meiosi: d'una cèl·lula 2n en surten quatre de n, totes diferents.",
          "credit": "Ali Zifan · CC BY-SA 4.0 · Wikimedia Commons"
        }
      ],
      apartat: "repas",
      heading: "Repàs: el mateix cicle, ==dues sortides==",
      text: "Tota cèl·lula ve del ==cicle cel·lular== (S1): creix, copia el seu material genètic i es divideix. Després hi ha dues sortides:",
      compare: [
        { title: "Mitosi", color: "b", items: ["1 cèl·lula → ==2 idèntiques==", "A tot el cos", "Per ==créixer i reparar=="] },
        { title: "Meiosi", color: "o", items: ["1 cèl·lula → ==4 amb la meitat==", "Un cromosoma de cada parella (n)", "Només a ovaris i testicles → ==gàmetes=="] }
      ],
      type: "concept"
    },
    {
      id: "t2",
      images: [
        {
          "src": "images/sa2-fotos/s4-t2.jpg",
          "caption": "Teixit tumoral al microscopi: cèl·lules que s'han dividit sense control.",
          "credit": "Ed Uthman from Houston, TX, USA · CC BY 2.0 · Wikimedia Commons"
        }
      ],
      apartat: "repas",
      heading: "Repàs: quan el cicle ==perd el control==",
      text: "El ==càncer|r== no és un tercer tipus de divisió: és ==mitosi normal que no s'atura quan toca== (S3). Es detecta amb l'índex mitòtic:",
      formula: { lhs: "Índex mitòtic (%)", num: "cèl·lules en divisió", den: "cèl·lules totals", tail: "× 100" },
      bullets: [
        "Sempre comparat amb el que és ==normal en aquell teixit==.",
        "Per provar un fàrmac: abans vs després, i sempre amb un ==control==."
      ],
      type: "keyequation"
    },
    {
      id: "t3",
      apartat: "repas",
      heading: "Els tres fils, en un sol mapa",
      text: "Davant de qualsevol cas, fes-te sempre les mateixes tres preguntes: quantes cèl·lules surten, amb quin material genètic, i s'atura quan toca?",
      compare: [
        { title: "Mitosi", color: "b", items: ["Surten: 2 idèntiques", "Material: complet (2n)", "S'atura? Sí"] },
        { title: "Meiosi", color: "o", items: ["Surten: 4", "Material: la meitat (n)", "S'atura? Sí (només gàmetes)"] },
        { title: "Càncer", color: "r", items: ["Surten: cada cop més", "Material: complet (2n)", "S'atura? ==NO=="] }
      ],
      type: "concept"
    },
    {
      id: "t4",
      images: [
        {
          "src": "images/sa2-fotos/s4-t4.jpg",
          "caption": "Model del desenvolupament de l'embrió: mitosi, meiosi i fecundació treballen juntes.",
          "credit": "Museum of Veterinary Anatomy FMVZ USP / Wagner Souza e Silva · CC BY-SA 4.0 · Wikimedia Commons"
        }
      ],
      apartat: "repas",
      heading: "Per què els tres processos ==importen==",
      bullets: [
        "Sense ==mitosi|b== → no hi hauria creixement ni reparació de ferides.",
        "Sense ==meiosi|o== → no hi hauria gàmetes ni ==variabilitat== entre germans.",
        "Sense ==control del cicle== → una mitosi es descontrola i forma un ==tumor|r==."
      ],
      after: "Els tres fils expliquen per què el cos creix, es repara, es reprodueix… i per què de vegades falla.",
      type: "concept"
    },
    {
      id: "t5",
      images: [
        {
          "src": "images/sa2-fotos/s4-t5.jpg",
          "caption": "Una gràfica de full de càlcul: compara sempre cada grup amb el control.",
          "credit": "Brews ohare · Public domain · Wikimedia Commons"
        }
      ],
      apartat: "repas",
      heading: "Llegir la taula del consorci: ==sempre contra el control==",
      text: "Una dada sola no diu res. Per analitzar els resultats, segueix aquest ordre:",
      bullets: [
        "1 · ==Control==: quant canvia l'índex SENSE fàrmac?",
        "2 · Cada ==fàrmac==: baixa més que el control? quant?",
        "3 · ==Dosi== i ==temps==: 30 U fa més que 10 U? 3 mesos més que 1 mes?",
        "4 · ==Toxicitat|r==: algun teixit queda destruït?",
        "5 · ==Límits==: quantes mostres hi ha de cada? què NO podem afirmar?"
      ],
      after: "Triar un fàrmac (o fer un diagnòstic) no és memoritzar casos: és saber ==quina pregunta fer-se== davant de dades noves.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "repas", title: "Repàs: el cicle cel·lular i la mitosi", src: "/images/sa2-s1-cicle-mitosi.svg", note: "El cicle amb la interfase i la mitosi (S1). Un tumor és aquest mateix cicle sense aturador." },
    { id: "Fig.2", apartat: "repas", title: "Repàs: mitosi vs meiosi", src: "/images/sa2-s2-mitosi-meiosi.svg", note: "La mateixa cèl·lula de partida, dues sortides diferents (S2): 2 idèntiques o 4 amb la meitat (un de cada parella). Llegenda: color = mare/pare, mida = tipus, una X és UN cromosoma." },
    { id: "Fig.3", apartat: "repas", title: "Repàs: com es detecta la pèrdua de control", src: "/images/sa2-s3-com-distingir.svg", note: "Interfase vs en divisió i la fórmula de l'índex mitòtic (S3): l'eina per detectar un tumor." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  sessionMaterials: [
    { id: "resultats-consorci", title: "Full de resultats del consorci (seminari)", url: "/fitxes/sa2-s4-resultats-consorci.html", who: "alumnat" },
    { id: "rubrica-article", title: "Rúbrica de l'article científic (producte final)", url: "/fitxes/sa2-rubrica-article.html", who: "alumnat" }
  ],
  teoriaPdfUrl: "/teoria/sa2-s4-teoria.pdf",
  elaborateNote: "Tancament de la SA2: seminari de resultats del consorci i prova escrita (50 min, individual i sense apunts). L'article científic (producte final) es redacta després de la prova, amb la taula del seminari.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Sessió 4 — Seminari de resultats i prova escrita (sense fitxa)",
    steps: [
      {
        apartat: "—",
        icon: "📊",
        title: "Seminari de resultats del consorci",
        time: "15 min",
        phase: "explore",
        explora: true,
        instruction: "Cada equip aporta la seva fila de la S3 a la taula del consorci (full de resultats) i entre tots la llegiu comparant amb el control. Copia-la sencera: són les dades del teu article.",
        items: [
          "Tinc a mà els números del meu cas de la S3: fàrmac, dosi, temps, índex inicial i final.",
          "Tinc el full de resultats del consorci per copiar-hi la taula de tota la classe."
        ],
        hints: [
          "Llegeix la taula per columnes. Primer el control (quant canvia sense fàrmac?), després cada fàrmac comparat amb el control."
        ]
      },
      {
        apartat: "—",
        icon: "📝",
        title: "Prova escrita de La cèl·lula",
        time: "50 min",
        phase: "prova",
        instruction: "Prova individual i sense apunts (full a part, versió B o C; 5 min de lectura + 45 min). Abans de començar, desa el full de resultats i els apunts.",
        hints: []
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  // Sense exit tiquet des del 15/10/2026: la sessió acaba amb la prova escrita
  // (50 min). Des del 10/11/2026 la sessió no té fitxa ni exercici avaluatiu:
  // només seminari del consorci + prova. A l'Additio la formativa de la SA2 compta 3 tiquets (S1-S3).

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Pensa què hauries dit sobre el càncer abans de començar la SA2 (Sessió 1). Què saps explicar ara que abans no sabies?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "El PRODUCTE FINAL: el teu article científic, individual, a partir de la plantilla del model d'article. Ordre recomanat: 1) Material i mètodes (què vau fer a la S3); 2) Resultats: la taula del consorci i un gràfic de barres de l'índex mitòtic abans i després per a cada fàrmac i el control, descrits sense opinar; 3) Conclusions: quin fàrmac frena el tumor, si la hipòtesi es compleix, límits de l'assaig i un experiment futur; 4) Introducció; 5) Resum, títol (una afirmació) i referències. Revisa'l amb la rúbrica de l'article abans de lliurar-lo.",
    note: "Aprenentatge significatiu: comunicar una recerca pròpia amb les dades de tota la classe. Es fa després de la prova, quan ja tens els tres processos ben lligats."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Demana a un company la taula del consorci i copia-la al full de resultats: són les dades del teu article",
    "Repassa les Fig.1-3 i les fitxes S1-S3 com a preparació per a la prova",
    "Parla amb el docent per fer la prova escrita un altre dia"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE3", "CE4", "CE5"],
  criterisAvaluacio: ["1.1", "1.2", "3.1", "3.3", "3.5", "4.1"]
}
