export const sa2s4 = {
  id: "s4",
  saId: "sa2",
  title: "Un cos que copia i un cos que reparteix",
  sessionNumber: 4,
  biome: "sa2",
  duration: "2h",
  engageImage: "/images/sa2-s4-portada.jpg",

  // ── ENGANXA (hook de síntesi) ─────────────────────────────
  engageChallenge: "Tres informes arriben avui al mateix laboratori: (1) una ferida a la pell que es tanca sola en una setmana; (2) una biòpsia de teixit muscular on, de 80 cèl·lules comptades, 28 estaven en divisió; (3) una parella que no aconsegueix tenir fills perquè, segons l'anàlisi, els espermatozoides de l'home tenen 46 cromosomes en comptes de 23. Cap dels tres parla del mateix procés. Quin explica cada cas: mitosi normal, mitosi descontrolada (càncer) o un error en la meiosi?",
  engageQuestion: "Primer, el consorci ajunta els resultats de TOTS els equips: quin fàrmac ha frenat el tumor, comparat amb el control? Després, tres peces d'un mateix trencaclosques: com es divideix una cèl·lula (S1), per què n'hi ha dues maneres de fer-ho (S2) i com es detecta quan una divisió es descontrola (S3). Avui les heu de fer servir TOTES tres alhora.",
  engageContext: "Comença el seminari de resultats del consorci: cada equip aporta la seva fila (fàrmac, dosi, temps, índex inicial i final) a la taula de la classe i la comparem amb el control. Aquesta taula són les dades del vostre article. Després sou l'equip de diagnòstic d'un centre mèdic: us arriben tres informes de pacients diferents i, en parella, heu de decidir quin dels tres processos (mitosi normal, mitosi sense control, o un error de meiosi) explica cada cas, justificant-ho amb el vocabulari i els números de les tres darreres sessions. Tot seguit, l'exercici avaluatiu (40 min): calcules l'índex mitòtic d'un estudi nou contra el melanoma, en fas un gràfic de barres comparatiu i n'analitzes els resultats. La sessió acaba amb la prova de La cèl·lula (50 min).",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Distingeixo, davant d'un cas nou, si explica mitosi normal, mitosi descontrolada (càncer) o un error de meiosi, i ho argumento amb el mecanisme correcte, no només amb la paraula.",
      "Relaciono els tres processos amb el mateix esquema del cicle cel·lular: on s'insereix la mitosi, on la meiosi i què falla exactament quan hi ha un tumor.",
      "Comparo els quatre casos i explico per què tots depenen del mateix fet: una cèl·lula ha de copiar o repartir el seu material genètic amb precisió.",
      "Detecto quan un número alt no demostra res perquè falta amb què comparar-lo."
    ],
    B: [
      "Reconec en un cas nou si parla de mitosi normal, de mitosi descontrolada (càncer) o d'un error de meiosi.",
      "Recordo les diferències clau: mitosi = 2 cèl·lules idèntiques (reparar/créixer); meiosi = 4 cèl·lules amb la meitat, un de cada parella (gàmetes); càncer = mitosi sense control.",
      "Uso l'índex mitòtic per decidir, amb els números a la mà, si un cas és sospitós o no.",
      "Distingeixo un error en el repartiment de cromosomes a un gàmeta d'un problema de mitosi."
    ],
    // C = adaptació (alumnes amb DIL). NO és la B escurçada: menys
    // objectius i tasca pròpia. Han de coincidir amb l'oa-box de
    // fitxa_sa2_s4_VISUAL_C.html.
    C: [
      "Davant d'un cas, dic si parla de mitosi, de meiosi o de càncer.",
      "Recordo què fa cada un dels tres processos.",
      "Dic què domino i què he de repassar de tota la SA."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — és repàs/síntesi (no contingut nou): baixem un punt
  // respecte S1-S3 (que eren "alta"), perquè l'alumnat ja ha vist els tres blocs
  // i la feina d'avui és connectar-los, no aprendre'ls de cero.
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Recorda: a vegades la meiosi també falla i un gàmeta queda amb el nombre complet de cromosomes (2n) en lloc de la meitat (n) — és un error de meiosi. Per a cada cas, respon sempre les mateixes tres preguntes en ordre: 1) Es fan cèl·lules IGUALS (2, mateix nombre de cromosomes) o cèl·lules amb LA MEITAT (4, n)? 2) Hi ha algun senyal de pèrdua de CONTROL (un número que no hauria de ser tan alt)? 3) Amb això, quin dels tres processos és? Fes-ho cas per cas, no barregis els tres alhora.",
      challenge:
        "La teva fitxa porta un quart cas que la del nivell B no té: una mostra amb un índex mitòtic encara més alt que el del cas sospitós, i un tècnic que en treu una conclusió precipitada. Hi has de localitzar exactament on falla el seu raonament. A tots els casos: no diguis només «és mitosi» o «és meiosi», explica el MECANISME i per què descartes els altres dos processos; i al final ordena els quatre casos de més a menys segur, dient en quin demanaries una segona prova."
    },
    "2": {
      scaffold:
        "Recorda el mapa dels tres: MITOSI (S1) = 1 cèl·lula → 2 idèntiques, per créixer i reparar. MEIOSI (S2) = 1 cèl·lula → 4 amb la meitat (n: un de cada parella), per fer gàmetes. CÀNCER (S3) = mitosi que ha perdut el control, es detecta amb l'índex mitòtic. Situa cada cas d'abans en aquest mapa.",
      challenge:
        "El mapa dels tres processos es pot dibuixar com un sol esquema (un cicle amb una bifurcació i una alarma). Dibuixa'l tu mateix/a amb les teves paraules, sense mirar els apunts, i compara'l després amb el d'un company."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de començar, sense mirar cap apunt, escriu en una frase cadascun dels tres processos (mitosi, meiosi, càncer). No es corregeix ara: al final de la sessió tornaràs a aquestes frases i veuràs si les canviaries.",
    prompts: [
      {
        kind: "write",
        text: "En una frase, què és la mitosi i per a què serveix?",
        starter: "La mitosi és…"
      },
      {
        kind: "write",
        text: "En una frase, què és la meiosi i per a què serveix?",
        starter: "La meiosi és…"
      },
      {
        kind: "write",
        text: "En una frase, què té a veure el càncer amb la mitosi?",
        starter: "El càncer té a veure amb la mitosi perquè…"
      }
    ]
  },

  // ── EXPLORA (ABP · informe de diagnòstic amb 3 casos) ─────
  exploreActivity: {
    what: "En parella, rebeu els informes de pacients de la vostra fitxa (tres al nivell B: ferida que cicatritza, biòpsia de teixit muscular amb índex mitòtic alt i espermatozoide amb 46 cromosomes; al nivell A n'hi ha un quart). En 10 minuts de CASOS EXPRÉS, decidiu per a cada un quin dels tres processos l'explica (mitosi normal / mitosi descontrolada / error de meiosi) i anoteu la frase-clau que ho demostra. Abans, en 15 minuts, el SEMINARI DE RESULTATS: cada equip aporta els seus índexs de la S3 a la taula del consorci, la classe la llegeix comparant cada fàrmac amb el control i tria el fàrmac candidat. Cadascú copia la taula al full de resultats: són les dades del seu article.",
    who: { mode: "grup", label: "Parelles de diagnòstic" },
    time: 25,
    apartats: "1",
    note: "No n'hi ha prou dient la paraula correcta: cal explicar PER QUÈ (el mecanisme) i per què no és cap dels altres dos. És la mateixa lògica de detectiu de S3, ara amb tres sospitosos possibles en comptes d'un."
  },
  exploreInstructions: [
    "SEMINARI (15 min): el teu equip dicta la seva fila (fàrmac, dosi, temps, índex inicial → final) i la copies tota al full de resultats del consorci",
    "Llegiu la taula comparant sempre amb el CONTROL: quin fàrmac baixa més l'índex? algun és tòxic? la dosi alta o el temps llarg canvien el resultat?",
    "CASOS EXPRÉS (10 min): llegeix els informes de pacient un per un (no els barregis)",
    "Recorda: a vegades la meiosi també falla en el repartiment i un gàmeta (espermatozoide o òvul) queda amb el nombre complet de cromosomes (2n) en lloc de la meitat (n) — és un error de meiosi",
    "Per a cada informe, aplica les tres preguntes: cèl·lules iguals o a la meitat? senyal de pèrdua de control? quin dels tres processos és? I abans de dir que un número és alt, pregunta't: alt comparat amb què?",
    "Escriu la conclusió de cada cas amb el vocabulari tècnic (índex mitòtic, n/2n, control del cicle)",
    "Per a cada cas, subratlleu la frase-clau que ho demostra: és el que us demanarà la prova"
  ],
  exploreDuration: "25 min · seminari 15 + casos 10",
  exploreMaterials: ["Full de resultats del consorci (taula de tota la classe)", "Els teus índexs de la S3 (fitxa de pacient)", "Els tres informes de pacient (a la fitxa)", "Apunts de S1, S2 i S3 (repàs, no contingut nou)"],
  exploreNote: "El seminari és el moment clau de la recerca: un sol equip no pot dir quin fàrmac és millor, però la taula de tota la classe sí. Després, activitat de síntesi: no s'explica res de nou, es reconeix i s'aplica el que ja es va treballar a S1 (cicle/mitosi), S2 (meiosi) i S3 (índex mitòtic). El repte és triar l'eina correcta a cada cas, no aprendre'n una altra.",

  // ── EXPLICA (repàs actiu, connexió dels 3 fils) ───────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
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
      apartat: "2",
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
      apartat: "2",
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
      apartat: "2",
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
      apartat: "2",
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
    { id: "Fig.1", apartat: "2", before: true, title: "Repàs: el cicle cel·lular i la mitosi", src: "/images/sa2-s1-cicle-mitosi.svg", note: "El cicle amb la interfase i la mitosi (S1). Un tumor és aquest mateix cicle sense aturador." },
    { id: "Fig.2", apartat: "2", title: "Repàs: mitosi vs meiosi", src: "/images/sa2-s2-mitosi-meiosi.svg", note: "La mateixa cèl·lula de partida, dues sortides diferents (S2): 2 idèntiques o 4 amb la meitat (un de cada parella). Llegenda: color = mare/pare, mida = tipus, una X és UN cromosoma." },
    { id: "Fig.3", apartat: "2", title: "Repàs: com es detecta la pèrdua de control", src: "/images/sa2-s3-com-distingir.svg", note: "Interfase vs en divisió i la fórmula de l'índex mitòtic (S3): l'eina per detectar un tumor." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa2-s4-fitxa-A.html", B: "/fitxes/sa2-s4-fitxa-B.html", C: "/fitxes/sa2-s4-fitxa-C.html" },
  sessionMaterials: [
    { id: "resultats-consorci", title: "Full de resultats del consorci (seminari)", url: "/fitxes/sa2-s4-resultats-consorci.html", who: "alumnat" },
    { id: "rubrica-article", title: "Rúbrica de l'article científic (producte final)", url: "/fitxes/sa2-rubrica-article.html", who: "alumnat" }
    // L'exercici avaluatiu (apartat E: versions B i C + solucionari) NO es
    // publica: és material qualificat, com la prova. Viu a
    // SA2-cellula/S4-tancament-repas/ i es reparteix imprès.
  ],
  teoriaPdfUrl: "/teoria/sa2-s4-teoria.pdf",
  elaborateNote: "Tancament de la SA2: després del seminari i els casos, l'exercici avaluatiu (40 min, individual, amb calculadora): índex mitòtic, gràfic de barres comparatiu i anàlisi d'un estudi nou contra el melanoma. La sessió acaba amb la prova escrita (50 min, individual i sense apunts). El mapa dels tres processos i les tres frases (apartat 2) queden per a casa, i l'article científic (producte final) es redacta després de la prova, amb la taula del seminari.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S4 — Un cos que copia i un cos que reparteix",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies: les tres frases",
        time: "5 min",
        phase: "engage",
        instruction: "Sense mirar apunts, escriu una frase per a cada procés (mitosi, meiosi, càncer). No es corregeix ara.",
        hints: []
      },
      {
        apartat: "1",
        title: "Seminari de resultats + diagnostica els casos",
        time: "25 min",
        phase: "explore",
        instruction: "Primer, 15 minuts de SEMINARI DE RESULTATS: cada equip aporta la seva fila de la S3 a la taula del consorci (full de resultats) i entre tots la llegiu comparant amb el control. Copia-la sencera: són les dades del teu article. Després, 10 minuts de CASOS EXPRÉS: llegeix els informes de pacient de la teva fitxa (tres al nivell B, quatre al nivell A) i decideix, cas per cas, quin procés l'explica (mitosi normal / mitosi descontrolada / error de meiosi), amb la frase-clau que ho demostra.",
        hints: [
          "Seminari: llegeix la taula per columnes. Primer el control (quant canvia sense fàrmac?), després cada fàrmac comparat amb el control.",
          "Recorda: a vegades la meiosi falla i un gàmeta queda amb el nombre complet (2n) en lloc de la meitat (n) — és un error de meiosi.",
          "Per a cada cas pregunta't: cèl·lules iguals o a la meitat? hi ha senyal de pèrdua de control?",
          "El cas 2 té un índex mitòtic: pregunta't quant s'hauria de dividir aquell teixit en condicions normals, com vas fer a S3.",
          "Quan un cas parli de cromosomes dins d'un gàmeta, pregunta't quants n'hauria de tenir i en quin procés es fa aquest repartiment."
        ]
      },
      {
        apartat: "E",
        title: "Exercici avaluatiu: la Verdina frena el melanoma?",
        time: "40 min",
        phase: "evaluate",
        instruction: "Individual, en un full a part, amb calculadora, regle i dos colors. Calcula l'índex mitòtic de cada grup de cultius de melanoma, fes un gràfic de barres comparatiu (dia 0 i dia 14 de cada grup) i analitza els resultats: compara sempre amb el control, mira què passa a la pell sana i recomana un tractament amb números.",
        hints: [
          "Total = interfase + en divisió. Si no hi sumes la interfase, l'índex et donarà 100 % i no voldrà dir res.",
          "Gràfic: títol, eix Y amb nom i unitat (%), escala regular que comença a 0, dues barres per grup i llegenda.",
          "El control també canvia: l'efecte del fàrmac és el seu canvi menys el canvi del control.",
          "Un fàrmac que frena el tumor però destrueix la pell sana no és una bona recomanació."
        ]
      },
      {
        apartat: "2",
        title: "El mapa dels tres processos + torna a les tres frases",
        time: "a casa",
        phase: "explica",
        instruction: "A casa, després de la prova. Amb les Fig.1-3 de repàs, completa un sol esquema que situï els tres processos partint del mateix cicle cel·lular. Després torna a les tres frases de l'apartat 0 i reescriu-les si ara les diries diferent.",
        hints: [
          "Mitosi = 2 idèntiques (tot el cos). Meiosi = 4 amb la meitat, un de cada parella (només gàmetes). Càncer = mitosi sense aturador.",
          "Les tres respostes a la mateixa pregunta: quantes cèl·lules surten i amb quin material genètic?",
          "Compara la teva frase nova amb la inicial: què hi has afegit que abans no sabies dir?"
        ]
      },
      {
        apartat: "3",
        title: "Prova escrita de La cèl·lula",
        time: "50 min",
        phase: "prova",
        instruction: "Al final de la sessió: prova individual i sense apunts (full a part, versió B o C; 5 min de lectura + 45 min). Abans de començar, deseu la fitxa i els apunts.",
        hints: []
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  // Sense exit tiquet des del 15/10/2026: la sessió acaba amb la prova escrita
  // (50 min, des del 26/10/2026, quan hi va entrar l'exercici avaluatiu de
  // 40 min). A l'Additio la formativa de la SA2 compta 3 tiquets (S1-S3).

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Compara la frase que vas escriure avui a l'apartat 0 sobre el càncer amb la que hauries escrit abans de començar la SA2 (Sessió 1). Què hi ha ara que abans no sabies explicar?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Primer, l'apartat 2 de la fitxa: completa el mapa dels tres processos i torna a les tres frases de l'apartat 0. Després, el PRODUCTE FINAL: el teu article científic, individual, a partir de la plantilla del model d'article. Ordre recomanat: 1) Material i mètodes (què vau fer a la S3); 2) Resultats: la taula del consorci i un gràfic de barres de l'índex mitòtic abans i després per a cada fàrmac i el control, descrits sense opinar; 3) Conclusions: quin fàrmac frena el tumor, si la hipòtesi es compleix, límits de l'assaig i un experiment futur; 4) Introducció; 5) Resum, títol (una afirmació) i referències. Revisa'l amb la rúbrica de l'article abans de lliurar-lo.",
    note: "Aprenentatge significatiu: comunicar una recerca pròpia amb les dades de tota la classe. Es fa després de la prova, quan ja tens els tres processos ben lligats."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Repassa les Fig.1-3 (cicle/mitosi de S1, mitosi vs meiosi de S2, com distingir la divisió de S3)",
    "Llegeix l'apartat EXPLICA d'avui: connecta els tres processos en un sol mapa",
    "Descarrega la fitxa S4 i resol-ne els casos de diagnòstic amb el vocabulari de les tres sessions anteriors",
    "Repassa les fitxes S1-S3 com a preparació per a la prova",
    "Parla amb el docent per fer l'exercici avaluatiu i la prova escrita un altre dia"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE3", "CE4", "CE5"],
  criterisAvaluacio: ["1.1", "1.2", "3.1", "3.3", "3.5", "4.1"]
}
