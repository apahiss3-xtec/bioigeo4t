export const sa2s4 = {
  id: "s4",
  saId: "sa2",
  title: "Un cos que copia i un cos que reparteix",
  sessionNumber: 4,
  biome: "sa2",
  duration: "2h",
  engageImage: "/images/sa2-s1-portada.jpg",

  // ── ENGANXA (hook de síntesi) ─────────────────────────────
  engageChallenge: "Tres informes arriben avui al mateix laboratori: (1) una ferida a la pell que es tanca sola en una setmana; (2) una biòpsia amb un índex mitòtic del 35%; (3) una parella que no aconsegueix tenir fills perquè, segons l'anàlisi, els espermatozoides de l'home tenen 46 cromosomes en comptes de 23. Cap dels tres parla del mateix procés. Quin explica cada cas: mitosi normal, mitosi descontrolada (càncer) o un error en la meiosi?",
  engageQuestion: "Durant tres sessions heu treballat tres peces d'un mateix trencaclosques: com es divideix una cèl·lula (S1), per què n'hi ha dues maneres de fer-ho (S2) i com es detecta quan una divisió es descontrola (S3). Avui les heu de fer servir TOTES tres alhora, com un laboratori de diagnòstic que ha de triar quina eina fer servir a cada cas.",
  engageContext: "Sou l'equip de diagnòstic d'un centre mèdic. Us arriben tres informes de pacients diferents i, en parella, heu de decidir quin dels tres processos (mitosi normal, mitosi sense control, o un error de meiosi) explica cada cas, justificant-ho amb el vocabulari i els números de les tres darreres sessions. És la sessió de repàs i preparació per a la prova de La cèl·lula.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Distingeixo, davant d'un cas nou, si explica mitosi normal, mitosi descontrolada (càncer) o un error de meiosi, i ho argumento amb el mecanisme correcte, no només amb la paraula.",
      "Relaciono els tres processos amb el mateix esquema del cicle cel·lular: on s'insereix la mitosi, on la meiosi i què falla exactament quan hi ha un tumor.",
      "Comparo els tres casos i explico per què tots tres depenen del mateix fet: una cèl·lula ha de copiar o repartir el seu material genètic amb precisió.",
      "Anticipo un quart cas (inventat per mi) que un company hauria de saber classificar correctament entre els tres processos."
    ],
    B: [
      "Reconec en un cas nou si parla de mitosi normal, de mitosi descontrolada (càncer) o d'un error de meiosi.",
      "Recordo les diferències clau: mitosi = 2 cèl·lules idèntiques (reparar/créixer); meiosi = 4 cèl·lules amb la meitat (gàmetes); càncer = mitosi sense control.",
      "Uso l'índex mitòtic per justificar per què el cas 2 és sospitós de càncer.",
      "Explico per què el cas 3 (espermatozoide amb 46 cromosomes) és un error de meiosi i no de mitosi."
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
        "Recorda: a vegades la meiosi també falla i un gàmeta queda amb el nombre complet de cromosomes (2n) en lloc de la meitat (n) — és un error de meiosi (com al cas dels espermatozoides). Per a cada cas, respon sempre les mateixes tres preguntes en ordre: 1) Es fan cèl·lules IGUALS (2, mateix nombre de cromosomes) o cèl·lules amb LA MEITAT (4, n)? 2) Hi ha algun senyal de pèrdua de CONTROL (un número que no hauria de ser tan alt)? 3) Amb això, quin dels tres processos és? Fes-ho cas per cas, no barregis els tres alhora.",
      challenge:
        "Per a cada cas, no diguis només «és mitosi» o «és meiosi»: explica el MECANISME (què passa exactament a la cèl·lula) i per què descartes els altres dos processos. Si et quedes dubtós entre dos, digues quina dada et faria decantar-te definitivament per un."
    },
    "2": {
      scaffold:
        "Recorda el mapa dels tres: MITOSI (S1) = 1 cèl·lula → 2 idèntiques, per créixer i reparar. MEIOSI (S2) = 1 cèl·lula → 4 amb la meitat (n), per fer gàmetes. CÀNCER (S3) = mitosi que ha perdut el control, es detecta amb l'índex mitòtic. Situa cada cas d'abans en aquest mapa.",
      challenge:
        "El mapa dels tres processos es pot dibuixar com un sol esquema (un cicle amb una bifurcació i una alarma). Dibuixa'l tu mateix/a amb les teves paraules, sense mirar els apunts, i compara'l després amb el d'un company."
    },
    "3": {
      scaffold:
        "Per redactar la conclusió de cada cas, omple aquesta frase: «El cas ___ és ___ (mitosi/meiosi/càncer) perquè ___ (la dada o el mecanisme que ho demostra)». Fes-ho tres vegades, un per cas.",
      challenge:
        "Escriu la conclusió dels tres casos com si fossis tu qui signa l'informe mèdic: sense repetir la pregunta, amb el vocabulari tècnic (índex mitòtic, n/2n, control del cicle) i sense arrodonir cap dada."
    },
    "4": {
      scaffold:
        "Per inventar el teu cas nou, tria primer QUIN dels tres processos vols que expliqui (mitosi, meiosi o càncer) i després pensa una situació real (un símptoma, una anàlisi, un número) que ho reveli, com als tres casos d'avui.",
      challenge:
        "Inventa un cas ambigu a propòsit (que sembli una cosa però sigui una altra) i prepara la pista final que el desfaria. Se l'intercanviaràs amb un company perquè l'endevini."
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
    what: "En parella, rebeu els tres informes de pacients (ferida que cicatritza, biòpsia amb índex mitòtic alt, i espermatozoide amb 46 cromosomes). Per a cada un, decidiu quin dels tres processos l'explica (mitosi normal / mitosi descontrolada / error de meiosi) i redacteu la justificació amb el vocabulari i els números apresos a S1-S3. Al final, prepareu-vos per defensar el vostre informe complet davant d'una altra parella.",
    who: { mode: "grup", label: "Parelles de diagnòstic" },
    time: 35,
    note: "No n'hi ha prou dient la paraula correcta: cal explicar PER QUÈ (el mecanisme) i per què no és cap dels altres dos. És la mateixa lògica de detectiu de S3, ara amb tres sospitosos en comptes d'un."
  },
  exploreInstructions: [
    "Llegeix els tres informes de pacient un per un (no els barregis)",
    "Recorda: a vegades la meiosi també falla en el repartiment i un gàmeta (espermatozoide o òvul) queda amb el nombre complet de cromosomes (2n) en lloc de la meitat (n) — és un error de meiosi",
    "Per a cada informe, aplica les tres preguntes: cèl·lules iguals o a la meitat? senyal de pèrdua de control? quin dels tres processos és?",
    "Escriu la conclusió de cada cas amb el vocabulari tècnic (índex mitòtic, n/2n, control del cicle)",
    "Poseu-vos d'acord en parella abans d'escriure la versió final",
    "Prepareu la defensa oral: per a cada cas, la frase-clau que ho demostra"
  ],
  exploreDuration: "35 min",
  exploreMaterials: ["Els tres informes de pacient (a la fitxa)", "Apunts de S1, S2 i S3 (repàs, no contingut nou)"],
  exploreNote: "Activitat de síntesi: no s'explica res de nou, es reconeix i s'aplica el que ja es va treballar a S1 (cicle/mitosi), S2 (meiosi) i S3 (índex mitòtic). El repte és triar l'eina correcta a cada cas, no aprendre'n una altra.",

  // ── EXPLICA (repàs actiu, connexió dels 3 fils) ───────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Repàs: el mateix cicle, ==dues sortides==",
      text: "Tota cèl·lula ve del ==cicle cel·lular== (S1): creix, copia el seu material genètic i es divideix. La ==mitosi|b== és la sortida normal: 2 cèl·lules ==idèntiques==, per créixer o reparar. La ==meiosi|o== és una sortida diferent, només a ==ovaris i testicles==: 4 cèl·lules amb ==la meitat== del material (gàmetes). Són dues maneres de dividir-se per a dues finalitats diferents.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Repàs: quan el cicle ==perd el control==",
      text: "El ==càncer|r== no és un tercer tipus de divisió: és ==mitosi normal que ha perdut el control== (S3). Es detecta amb l'==índex mitòtic|p== (cèl·lules en divisió ÷ total × 100): per sobre del ~10% fa sospitar. La diferència amb una mitosi sana no és el TIPUS de divisió, sinó que ==no s'atura quan toca==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "Els tres fils, en un sol mapa",
      text: "==Mitosi== (1 cèl·lula → 2 idèntiques, tot el cos) + ==meiosi== (1 cèl·lula → 4 amb la meitat, només gàmetes) + ==càncer== (mitosi que ==no s'atura==) formen un sol mapa: totes tres parteixen del mateix ==cicle cel·lular==, i la clau per distingir-les és sempre la mateixa pregunta: quantes cèl·lules surten, amb quin material genètic, i s'atura quan toca?",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Per què els tres processos ==importen==",
      text: "Sense ==mitosi|b== no hi hauria creixement ni reparació de ferides. Sense ==meiosi|o== no hi hauria gàmetes ni ==variabilitat== entre germans. Sense un bon ==control del cicle==, una mitosi es pot descontrolar i formar un ==tumor|r==. Els tres fils expliquen per què el cos creix, es repara, es reprodueix... i per què de vegades falla.",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Diagnosticar és ==triar l'eina correcta==",
      text: "Un/a professional de la salut no memoritza casos: aplica el ==mètode== correcte a cada informe (comptar cromosomes, calcular un índex, comparar abans/després). El mateix passa a la prova: no cal recordar exemples exactes, cal saber ==quina pregunta fer-se== davant d'un cas nou.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: true, title: "Repàs: el cicle cel·lular i la mitosi", src: "/images/sa2-s1-cicle-mitosi.svg", note: "El cicle amb la interfase i la mitosi (S1). Un tumor és aquest mateix cicle sense aturador." },
    { id: "Fig.2", apartat: "2", title: "Repàs: mitosi vs meiosi", src: "/images/sa2-s2-mitosi-meiosi.svg", note: "La mateixa cèl·lula de partida, dues sortides diferents (S2): 2 idèntiques o 4 amb la meitat." },
    { id: "Fig.3", apartat: "2", title: "Repàs: com es detecta la pèrdua de control", src: "/images/sa2-s3-com-distingir.svg", note: "Interfase vs en divisió i la fórmula de l'índex mitòtic (S3): l'eina per detectar un tumor." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa2-s4-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la SA2: torna a les tres frases inicials (apartat 0) i reescriu-les si cal amb el que has après avui. Aquesta sessió prepara directament la prova de La cèl·lula.",

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
        title: "Diagnostica els tres casos",
        time: "35 min",
        phase: "explore",
        instruction: "Llegeix els tres informes de pacient i decideix, cas per cas, quin procés l'explica (mitosi normal / mitosi descontrolada / error de meiosi). Justifica cada resposta amb el vocabulari i els números de S1-S3.",
        hints: [
          "Recorda: a vegades la meiosi falla i un gàmeta queda amb el nombre complet (2n) en lloc de la meitat (n) — és un error de meiosi.",
          "Per a cada cas pregunta't: cèl·lules iguals o a la meitat? hi ha senyal de pèrdua de control?",
          "El cas 2 té un índex mitòtic: compara'l amb el llindar del ~10% que vas fer servir a S3.",
          "El cas 3 parla de cromosomes en un gàmeta: recorda que un gàmeta hauria de tenir la meitat (n), no el nombre complet (2n)."
        ]
      },
      {
        apartat: "2",
        title: "El mapa dels tres processos",
        time: "20 min",
        phase: "explica",
        instruction: "Amb les Fig.1-3 de repàs, dibuixa o completa un sol esquema que situï mitosi, meiosi i càncer partint del mateix cicle cel·lular.",
        hints: [
          "Mitosi = 2 idèntiques (tot el cos). Meiosi = 4 amb la meitat (només gàmetes). Càncer = mitosi sense aturador.",
          "Les tres respostes a la mateixa pregunta: quantes cèl·lules surten i amb quin material genètic?"
        ]
      },
      {
        apartat: "3",
        title: "Informe final de diagnòstic",
        time: "25 min",
        phase: "elabora",
        instruction: "Redacta la conclusió dels tres casos com un informe mèdic, amb la frase-clau de cada un, i explica en 3-4 línies per què els tres processos són importants per al cos.",
        hints: [
          "Frase model: «El cas ___ és ___ perquè ___ (la dada que ho demostra)».",
          "A la conclusió general, connecta creixement/reparació (mitosi), reproducció (meiosi) i risc si falla el control (càncer)."
        ]
      },
      {
        apartat: "4",
        title: "Inventa un quart cas + torna a les tres frases",
        time: "15 min",
        phase: "elabora",
        instruction: "Inventa un quart cas breu que un company hauria de classificar correctament. Després, torna a les tres frases de l'apartat 0 i reescriu-les si ara les diries diferent.",
        hints: [
          "Tria primer el procés que vols amagar-hi i després pensa la situació que el revela.",
          "Compara la teva frase nova amb la inicial: què hi has afegit que abans no sabies dir?"
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
      text: "Un múscul es fa més gran després d'entrenar molt perquè les seves cèl·lules es divideixen i en creixen de noves i idèntiques. Quin procés és?",
      options: ["Mitosi", "Meiosi", "Càncer", "Cap dels tres"],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "Una biòpsia de pell dona un índex mitòtic del 4% i una altra de còlon dona un 28%. Quina et fa sospitar més d'un procés cancerós? Raona-ho amb el llindar que vas aprendre a S3.",
      hint: "El llindar de sospita és al voltant del 10%. Compara els dos números amb aquest valor."
    },
    {
      id: "q3",
      type: "open",
      text: "Explica, en 3-4 línies, per quina cosa es diferencien la mitosi, la meiosi i el càncer si totes tres parteixen del mateix cicle cel·lular.",
      hint: "Pensa en tres preguntes: quantes cèl·lules surten, amb quin material genètic, i si el procés s'atura quan toca."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Compara la frase que vas escriure avui a l'apartat 0 sobre el càncer amb la que hauries escrit abans de començar la SA2 (Sessió 1). Què hi ha ara que abans no sabies explicar?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Repassa amb els apunts de S1, S2 i S3 els tres processos i completa una taula de tres columnes (Mitosi / Meiosi / Càncer) amb: quantes cèl·lules resulten, quin material genètic tenen, i on/quan passa al cos. Porta-la a la propera sessió com a preparació directa per a la prova de La cèl·lula.",
    deadline: "2026-XX-XX",
    note: "Aprenentatge significatiu: organitzar i comparar (no copiar definicions), preparació explícita de l'avaluació."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Repassa les Fig.1-3 (cicle/mitosi de S1, mitosi vs meiosi de S2, com distingir la divisió de S3)",
    "Llegeix l'apartat EXPLICA d'avui: connecta els tres processos en un sol mapa",
    "Descarrega la fitxa S4 i resol els tres casos de diagnòstic amb el vocabulari de les tres sessions anteriors",
    "Fes la taula comparativa dels deures (Mitosi / Meiosi / Càncer) com a preparació per a la prova",
    "L'exit tiquet en paper el trobaràs a classe o fes-lo online aquí"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE3", "CE4", "CE5"],
  criterisAvaluacio: ["1.1", "1.2", "3.1", "3.3", "4.1"]
}
