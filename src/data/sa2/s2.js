export const sa2s2 = {
  id: "s2",
  saId: "sa2",
  title: "Dues còpies o quatre a mitges",
  sessionNumber: 2,
  biome: "sa2",
  duration: "2h",
  engageImage: "/images/sa2-s1-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Tens 46 cromosomes a gairebé totes les cèl·lules del cos. La teva mare també. El teu pare també. I tu vas començar quan UNA cèl·lula de la teva mare (l'òvul) es va fusionar amb UNA cèl·lula del teu pare (l'espermatozoide). Si l'òvul en portés 46 i l'espermatozoide 46, tu en tindries 92... i el teu fill 184. Però tots en tenim 46. On han anat a parar la meitat?",
  engageQuestion: "La mitosi fa dues cèl·lules idèntiques amb TOT el material genètic. Aleshores, per què els gàmetes (òvul i espermatozoide) NO es poden fabricar per mitosi?",
  engageContext: "Avui modelareu vosaltres mateixos les dues divisions amb els mateixos cromosomes de partida i veureu que donen resultats molt diferents: la mitosi, dues còpies idèntiques; la meiosi, quatre cèl·lules amb la meitat i totes diferents. Al final podreu respondre per què el cos necessita les dues.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Modelo la mitosi i la meiosi a partir d'una mateixa cèl·lula i argumento, amb el meu model, per què una fa cèl·lules idèntiques i l'altra no.",
      "Explico per què els gàmetes han de tenir la meitat del material genètic, deduint-ho del que passaria a la fecundació si no fos així.",
      "Relaciono la meiosi amb la variabilitat: argumento per què dos germans (que no siguin bessons idèntics) no són iguals.",
      "Justifico quan el cos fa servir cada divisió i per què les dues són imprescindibles per créixer, reparar-se i reproduir-se."
    ],
    B: [
      "Distingeixo la mitosi (2 cèl·lules idèntiques, material genètic complet) de la meiosi (4 cèl·lules, la meitat del material) en un esquema.",
      "Explico amb les meves paraules que els gàmetes tenen la meitat de cromosomes perquè, en unir-se a la fecundació, el nombre torni a ser el normal.",
      "Dic que la meiosi barreja el material genètic i que per això els gàmetes són diferents entre ells.",
      "Indico per a què serveix cada divisió: la mitosi per créixer i reparar, la meiosi per fer gàmetes (reproducció)."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "alta" — SA2 encara és inici de curs (1r trimestre).
  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Parteix SEMPRE de la mateixa cèl·lula: 4 cromosomes = 2 parelles. Cada parella són els DOS del mateix color (mateixa mida i forma): un l'has heretat del pare i l'altre de la mare. Pas comú a les dues divisions: copia cada cromosoma (fes-ne un segon idèntic i enganxa'l pel centre → forma de X). MITOSI: reparteix les còpies → 2 cèl·lules amb 4 cromosomes. MEIOSI: primera divisió, separa els dos membres de cada PARELLA, un de cada color a cada banda (2 cèl·lules amb 2 cromosomes dobles); segona divisió, separa les còpies → 4 cèl·lules amb 2 cromosomes.",
      challenge:
        "Fes els dos models i, a sota, escriu la regla general amb els teus números: la mitosi va de ___ cromosomes a ___ per cèl·lula; la meiosi va de ___ a ___ per cèl·lula, i en surten ___ cèl·lules. Explica a un company per què la meiosi necessita DUES divisions i la mitosi només una."
    },
    "2": {
      scaffold:
        "Fixa't només en dues coses de cada resultat: QUANTES cèl·lules surten i QUANT material genètic té cadascuna. Mitosi: 2 cèl·lules, material complet (idèntiques a la mare). Meiosi: 4 cèl·lules, la meitat del material (gàmetes). Mnemotècnic: MitosiI = Idèntiques; meiosi = meitat.",
      challenge:
        "La mitosi i la meiosi comencen igual (es copia l'ADN). Si les dues copien primer l'ADN, com és que la mitosi acaba amb cèl·lules de material complet i la meiosi amb la meitat? Quina és exactament la diferència que ho explica?"
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

  // ── EXPLORA (ABP · modelatge manipulatiu) ─────────────────
  exploreActivity: {
    what: "Modeleu les dues divisions amb la MATEIXA cèl·lula de partida (4 cromosomes = 2 parelles, dos colors), amb plastilina, fils de colors o dibuixant. Primer feu la mitosi; després, des de la mateixa cèl·lula, la meiosi. Compareu els dos resultats: quantes cèl·lules surten i quant material té cadascuna.",
    who: { mode: "grup", label: "Parelles de laboratori" },
    time: 40,
    note: "La gràcia és FER-HO vosaltres i adonar-vos, amb el model a la mà, que partint del mateix s'arriba a resultats diferents. La demostració a l'aula és ensenyar els dos models a una altra parella i defensar per què la meiosi acaba amb la meitat."
  },
  exploreInstructions: [
    "Feu una cèl·lula de partida amb 4 cromosomes: 2 d'un color (una parella) i 2 d'un altre color (l'altra parella)",
    "Copieu cada cromosoma: feu-ne un segon xurro idèntic i enganxeu-lo al primer pel centre; ara té forma de X (dues còpies unides). És el pas comú a les dues divisions",
    "MITOSI: repartiu les còpies en dues cèl·lules i compteu els cromosomes de cada filla",
    "MEIOSI: primera divisió, separeu les PARELLES; segona divisió, separeu les còpies; compteu quantes cèl·lules i quants cromosomes queden",
    "Compareu els dos resultats i anoteu les diferències (nombre de cèl·lules i quantitat de material genètic)"
  ],
  exploreDuration: "40 min",
  appSrc: "/apps/app_mitosi_meiosi.html",
  exploreNote: "Modelatge (ABP): construïu, compareu i defenseu. Amb l'app interactiva (Mitosi 6 fases · Meiosi 10 fases · notació 2n/n) podeu comprovar l'ordre correcte i la notació ploïdica un cop heu fet el model de plastilina/dibuix. L'ordre i el perquè els confirmareu a l'apartat EXPLICA. Demostració a l'aula: ensenyar els dos models a una altra parella i explicar per què la meiosi dona la meitat.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Recordem la ==mitosi==: dues còpies idèntiques",
      text: "A la sessió anterior vas veure la ==mitosi|p==: d'una cèl·lula en surten ==dues d'idèntiques==, amb ==tot el material genètic== (els 46 cromosomes, en els humans). El cos la fa servir per ==créixer i reparar==. És la fotocopiadora del cos: la còpia surt igual que l'original.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "La ==meiosi==: dues divisions per fer gàmetes",
      text: "La meiosi fa ==gàmetes== (òvuls i espermatozoides). A partir d'una cèl·lula fa ==dues divisions seguides== i n'obté ==quatre cèl·lules==, cadascuna amb la ==meitat|r== del material genètic (23 cromosomes en els humans). A la primera divisió se separen les ==parelles|b== de cromosomes; a la segona, les còpies. Per això el resultat NO és una còpia idèntica de la cèl·lula original.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Per què la ==meitat==? La fecundació",
      text: "A la ==fecundació|g==, un òvul (==n==, la meitat) s'uneix amb un espermatozoide (==n==, la meitat) i formen el ==zigot== (==2n==, complet). Si els gàmetes tinguessin el material sencer, cada generació el ==doblaria== (46 → 92 → 184...). La meiosi ho evita: reparteix la meitat perquè, en sumar-se les dues meitats, el nombre torni a ser el normal.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "La meiosi ==barreja==: per això no som clons",
      text: "Quan la meiosi reparteix els cromosomes, ho fa ==a l'atzar==: de cada parella, uns cops va a un gàmeta el del pare i uns cops el de la mare. Per això cada gàmeta que fabriques porta una ==combinació diferent== del material que vas rebre dels teus pares, i dos germans ==no són idèntics== (llevat dels bessons idèntics). La meiosi és la font de la ==variabilitat== dins d'una espècie.",
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
    { id: "Fig.1", apartat: "1", before: true, title: "Mitosi i meiosi, comparades", src: "/images/sa2-s2-mitosi-meiosi.svg", note: "La MATEIXA cèl·lula de partida dona dos resultats: mitosi (2 cèl·lules idèntiques, material complet) i meiosi (4 cèl·lules, la meitat). Fes-la servir per comprovar el teu model." },
    { id: "Fig.2", apartat: "3", before: true, title: "Per què la meitat: la fecundació", src: "/images/sa2-s2-fecundacio.svg", note: "Òvul (n) + espermatozoide (n) = zigot (2n). Si els gàmetes no tinguessin la meitat, cada generació doblaria el nombre de cromosomes." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa2-s2-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: torna a la pregunta del principi (per què no tenim 92 cromosomes) i respon-la amb el que has après sobre la meiosi i la fecundació.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S2 — Dues còpies o quatre a mitges",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies + posada en comú dels deures",
        time: "10 min",
        phase: "engage",
        instruction: "Posa en comú els dos teixits dels deures i respon: d'on creus que surt la barreja que fa que un fill no sigui idèntic als pares. No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "Modela: mitosi i meiosi amb la mateixa cèl·lula",
        time: "40 min",
        phase: "explore",
        instruction: "Amb 4 cromosomes (2 parelles, 2 colors), modela primer la mitosi i després la meiosi. Compta quantes cèl·lules surten i quants cromosomes té cadascuna.",
        hints: [
          "Copia SEMPRE els cromosomes primer: aquest pas és igual a les dues divisions.",
          "La diferència clau: a la mitosi reparteixes les còpies un cop; a la meiosi divideixes DUES vegades (primer separes les parelles, després les còpies)."
        ]
      },
      {
        apartat: "2",
        title: "Mitosi vs meiosi: el resultat",
        time: "25 min",
        phase: "explica",
        instruction: "Amb la Fig.1, completa la comparació: nombre de cèl·lules i quantitat de material genètic de cada divisió. Marca quina fa cèl·lules idèntiques.",
        hints: [
          "Mitosi = 2 cèl·lules idèntiques, material complet. Meiosi = 4 cèl·lules, la meitat.",
          "Mnemotècnic: mitosi → Idèntiques; meiosi → meitat."
        ]
      },
      {
        apartat: "3",
        title: "Per què la meitat + per què no som clons",
        time: "25 min",
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
        time: "20 min",
        phase: "explica",
        instruction: "Digues on i per a què fa servir el cos cada divisió. Després torna a la pregunta del principi (per què no tenim 92 cromosomes) i respon-la.",
        hints: [
          "Mitosi = tot el cos, per créixer i reparar. Meiosi = ovaris i testicles, per fer gàmetes.",
          "Al hook: cada progenitor aporta la meitat (gràcies a la meiosi) perquè la suma torni a ser 46."
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
      text: "Una cèl·lula humana (46 cromosomes) fa MEIOSI. Quantes cèl·lules en surten i amb quants cromosomes cadascuna?",
      options: [
        "4 cèl·lules amb 23 cromosomes cadascuna",
        "2 cèl·lules amb 46 cromosomes cadascuna",
        "4 cèl·lules amb 46 cromosomes cadascuna",
        "2 cèl·lules amb 23 cromosomes cadascuna"
      ],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "Explica amb les teves paraules per què els gàmetes han de tenir la meitat del material genètic. Què passaria si no fos així?",
      hint: "Pensa en la fecundació: dues meitats que se sumen. Si fossin senceres…"
    },
    {
      id: "q3",
      type: "open",
      text: "Per què dos germans dels mateixos pares no són idèntics (si no són bessons idèntics)? Relaciona-ho amb la meiosi.",
      hint: "La meiosi no fa còpies: barreja el material a l'atzar en cada gàmeta."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, si t'haguessin preguntat per què no tens 92 cromosomes, què hauries dit? Què ha canviat després de modelar la meiosi?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Fes un esquema-resum d'una sola cara comparant mitosi i meiosi amb quatre columnes: nombre de divisions, nombre de cèl·lules filles, quantitat de material genètic i per a què serveix. Afegeix-hi una frase pròpia que expliqui, sense copiar, per què la meiosi és imprescindible per a la reproducció. Ho farem servir a la propera sessió per entrar al laboratori d'anàlisi (índex mitòtic).",
    deadline: "2026-XX-XX",
    note: "Aprenentatge significatiu: sintetitzar i comparar amb les pròpies paraules, no copiar la definició; l'esquema alimenta la demostració a l'aula."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: recordatori de la mitosi, la meiosi (dues divisions, 4 cèl·lules, la meitat del material), la fecundació (n + n = 2n) i la variabilitat",
    "Mira la Fig.1 (mitosi vs meiosi) i la Fig.2 (fecundació) i intenta reconstruir tu els dos processos amb un dibuix",
    "Descarrega la fitxa S2 i completa la comparació i el càlcul dels cromosomes de l'òvul",
    "A casa, fes l'esquema-resum de comparació mitosi/meiosi de quatre columnes",
    "L'exit tiquet en paper el trobaràs a classe, o fes-lo online aquí (apartat EXIT TIQUET)"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA2", "OA4"],
  competencies: ["CE1", "CE3", "CE4"],
  criterisAvaluacio: ["1.1", "1.2", "4.1"]
}
