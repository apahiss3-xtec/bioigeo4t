export const sa2s3 = {
  id: "s3",
  saId: "sa2",
  title: "El laboratori d'oncologia",
  sessionNumber: 3,
  biome: "sa2",
  duration: "2h",
  engageImage: "/images/sa2-s1-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Un laboratori de recerca prova un fàrmac nou contra el càncer. Injecten a ratolins un tumor i després els tracten amb el fàrmac. Per saber si funciona NO obren el ratolí per veure si el tumor és més petit: agafen un trosset de teixit (una biòpsia), el miren al microscopi i compten una sola cosa. Què creus que compten, si un càncer és, precisament, cèl·lules que es divideixen sense control?",
  engageQuestion: "A la Sessió 1 vas veure que un tumor són cèl·lules que fan mitosi sense parar. Si això és així, com podries mesurar amb NÚMEROS si un teixit té càncer... o si un fàrmac l'està frenant?",
  engageContext: "Avui sou l'equip d'un laboratori de recerca oncològica. Rebreu les biòpsies d'un ratolí (abans i després del tractament), comptareu les cèl·lules en divisió i decidireu, amb dades a la mà, si el fàrmac funciona. Al final haureu de defensar la vostra conclusió com si la publiquéssiu.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Calculo l'índex mitòtic d'una biòpsia i argumento, amb el número, si el teixit presenta un procés cancerós.",
      "Comparo l'índex mitòtic abans i després del tractament i dedueixo, amb dades, si el fàrmac és eficaç, tòxic o inútil.",
      "Explico per què el càncer és una pèrdua de control del cicle cel·lular i com un fàrmac antimitòtic el pot frenar.",
      "Raono per què un assaig es fa a cegues i amb molts casos, i quin tipus d'error de recompte és més perillós en un diagnòstic."
    ],
    B: [
      "Distingeixo al microscopi una cèl·lula en divisió (cromosomes visibles) d'una en interfase (nucli difús).",
      "Calculo l'índex mitòtic amb la fórmula: cèl·lules en mitosi dividit pel total, per cent.",
      "Comparo l'índex mitòtic abans i després i dic si ha baixat, per concloure si el fàrmac funciona.",
      "Explico amb les meves paraules que el càncer és una divisió cel·lular sense control."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "alta" — SA2 encara és inici de curs (1r trimestre).
  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Fes-ho en dos passos per a cada camp del microscopi. PAS 1: compta TOTES les cèl·lules del cercle (les difuses i les que tenen fils foscos). PAS 2: compta només les que estan EN DIVISIÓ (fils foscos = cromosomes visibles). Índex mitòtic = (en divisió / total) × 100. Fes-ho primer amb la biòpsia INICIAL i després amb la FINAL.",
      challenge:
        "A més de l'índex mitòtic total, classifica les cèl·lules en divisió per fase (profase, metafase, anafase, telofase) fent servir el que vas aprendre a la S1. Si el fàrmac atura la divisió, en quina fase creus que s'acumularien les cèl·lules? Justifica-ho amb el que has comptat."
    },
    "2": {
      scaffold:
        "Recorda la clau de la Fig.1: INTERFASE = nucli difús, sense fils → NO compta. EN DIVISIÓ = cromosomes condensats visibles → SÍ compta. El llindar: per sobre d'un índex del ~10% hi ha risc de procés cancerós. Compara els teus dos números amb aquest 10%.",
      challenge:
        "L'índex mitòtic d'un teixit sa de pell o d'intestí també és alt (es regeneren molt). Aleshores, per què un índex alt en aquest teixit del ratolí SÍ que és sospitós? Pista: pensa de quin teixit ve la mostra i si allà s'hi hauria de dividir tant."
    },
    "3": {
      scaffold:
        "Per decidir si el fàrmac funciona, respon en ordre: 1) L'índex INICIAL estava per sobre del 10%? (teixit amb càncer, sí/no). 2) L'índex FINAL és més ALT, IGUAL o més BAIX que l'inicial? 3) Conclusió: si baixa clarament → el fàrmac frena la divisió → FUNCIONA. Si puja o es manté → no funciona (o fins i tot empitjora).",
      challenge:
        "El teu company d'un altre equip ha provat el mateix fàrmac a una DOSI més baixa i li ha baixat menys l'índex. Què li diries sobre la relació dosi–efecte? I si a un tercer equip l'índex ha baixat però el ratolí ha mort: com interpretaries això (pensa en la toxicitat i en què més fa el fàrmac a banda de frenar el tumor)?"
    },
    "4": {
      scaffold:
        "Torna al principi. Un tumor és mitosi FORA DE CONTROL. Completa la idea: en una cèl·lula normal, el cicle s'atura quan toca; en una cèl·lula cancerosa, el control està _______ i per això no para de dividir-se. Un fàrmac antimitòtic actua _______ la divisió.",
      challenge:
        "Els fàrmacs que van més bé contra el càncer ataquen les cèl·lules que es divideixen molt de pressa. Per què creus que provoquen efectes secundaris com la caiguda del cabell, les nàusees o l'anèmia? Connecta-ho amb quins teixits SANS del cos també fan molta mitosi (recorda els deures de la S2)."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Primer posem en comú l'esquema-resum mitosi/meiosi dels deures. Després anoteu la vostra intuïció sobre com es detecta un càncer al microscopi. No es corregeix: ho compararem al final.",
    prompts: [
      {
        kind: "write",
        text: "Dels deures: en una frase pròpia, per què la meiosi és imprescindible per a la reproducció? (Posada en comú ràpida.)",
        starter: "La meiosi és imprescindible perquè…"
      },
      {
        kind: "write",
        text: "Un metge que mira teixits al microscopi (un patòleg) vol saber si hi ha càncer. Què creus que busca? Què veuria de diferent en un teixit malalt respecte d'un de sa?",
        starter: "Crec que busca…"
      }
    ]
  },

  // ── EXPLORA (ABP · laboratori de recompte) ────────────────
  exploreActivity: {
    what: "Sou l'equip d'un laboratori d'oncologia. Cada equip rep una fitxa de pacient diferent (un ratolí amb un fàrmac, una dosi i un temps propis) amb dues micrografies reals: la biòpsia ABANS del tractament i la de DESPRÉS. Compteu a cada biòpsia el total de cèl·lules i quantes estan en divisió, calculeu els dos índexs mitòtics i decidiu si el vostre fàrmac funciona. Després es posen en comú tots els casos de la classe.",
    who: { mode: "grup", label: "Parelles de laboratori" },
    time: 40,
    note: "La gràcia és arribar VOSALTRES al veredicte a partir de les dades, no que us el diguin. La demostració a l'aula és defensar la vostra conclusió (funciona / no funciona / és tòxic) davant d'una altra parella, ensenyant els números que l'aguanten."
  },
  exploreInstructions: [
    "Mira la Fig.1 i assegura't que distingeixes una cèl·lula EN DIVISIÓ (fils foscos) d'una en INTERFASE (nucli difús)",
    "A la teva fitxa de pacient, anota el fàrmac, la dosi i el temps (el teu cas)",
    "Biòpsia INICIAL: compta el TOTAL de cèl·lules i quantes estan en divisió; índex mitòtic inicial = (en divisió ÷ total) × 100",
    "Biòpsia FINAL: repeteix el recompte i calcula l'índex mitòtic final",
    "Compara els dos índexs: ha baixat? Decidiu si el vostre fàrmac funciona i porteu el resultat a la posada en comú de la classe"
  ],
  exploreDuration: "40 min",
  exploreMaterials: ["Fitxa de pacient assignada (biòpsia inicial + final, un cas diferent per equip)", "Calculadora o full de càlcul a mà"],
  exploreNote: "Recompte i decisió basada en dades (ABP). Si compteu un parell de cèl·lules amunt o avall no passa res: el que importa és la TENDÈNCIA (baixa l'índex o no). Com que cada equip té un fàrmac/dosi/temps diferent, a la posada en comú (seminari de laboratori) es comparen tots els casos a la pissarra: quins fàrmacs frenen la divisió, quins no i quins són tòxics.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "L'==índex mitòtic==: comptar per diagnosticar",
      text: "L'==índex mitòtic|p== és el ==percentatge== de cèl·lules d'un teixit que estan ==en divisió== en un moment donat: (cèl·lules en mitosi ÷ total) × 100. És una eina de ==diagnòstic==: com que un ==tumor|r== són cèl·lules que es divideixen sense parar, un teixit amb un índex mitòtic ==alt== (per sobre del ~10%) fa ==sospitar== d'un procés cancerós.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Com distingir una cèl·lula ==en divisió==",
      text: "Al microscopi, una cèl·lula en ==interfase|b== té el nucli ==difús==, sense res destacat: NO compta com a mitosi. Una cèl·lula ==en divisió|p== té els ==cromosomes condensats visibles== (fils foscos): SÍ compta. Comptar bé és clau: confondre-les canvia el diagnòstic. Aquesta és la mateixa mitosi que vas ordenar a la S1, ara aplicada a un cas real.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Provar un fàrmac: ==abans i després==",
      text: "Per saber si un fàrmac frena el càncer, es mesura l'índex mitòtic ==abans|o== (pre-test) i ==després|g== (post-test) del tractament. Si l'índex ==baixa|g== clarament, el fàrmac ha ==frenat la divisió== → és eficaç. Si es ==manté o puja|r==, no funciona. Si el teixit es ==destrueix|r== del tot, el fàrmac pot ser massa ==tòxic==. Comparar dues mesures és el cor del ==mètode experimental==.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "El càncer: el cicle ==sense control==",
      text: "Una cèl·lula normal ==s'atura== de dividir-se quan toca (hi ha uns ==controls== del cicle). Al ==càncer|r==, aquests controls ==fallen== i la cèl·lula es divideix sense parar → es forma un ==tumor==. Els fàrmacs antimitòtics ==aturen la divisió==, per això baixa l'índex mitòtic. Però ataquen TOTES les cèl·lules que es divideixen molt, també les ==sanes|o== (cabell, intestí, sang): per això la ==quimioteràpia== té efectes secundaris.",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "4",
      heading: "Per què importa fer-ho ==amb rigor==",
      text: "Un sol ratolí no demostra res: els assajos es fan amb ==molts casos== i sovint ==a cegues== (qui compta no sap quin tractament ha rebut la mostra) per no ==enganyar-se== a si mateix. Decidir si un fàrmac serveix afecta ==vides reals==: per això la ciència exigeix ==dades==, repetició i honestedat, no impressions.",
      type: "epistemic",
      badge: "🧭 Ètica i ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "Com distingir una cèl·lula en divisió", src: "/images/sa2-s3-com-distingir.svg", note: "Interfase (nucli difús) NO compta; en divisió (cromosomes visibles) SÍ. A sota, la fórmula de l'índex mitòtic i el llindar de sospita (~10%)." },
    { id: "Fig.2", apartat: "1", before: true, title: "Exemple de fitxa de pacient", src: "/images/sa2-s3-biopsia-exemple.png", note: "Aquest és el TIPUS d'imatge que compteu. Cada equip rep una fitxa de pacient diferent (amb el seu fàrmac, dosi i temps) amb la seva biòpsia inicial i final." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa2-s3-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament: torna a la pregunta del principi (què compta el laboratori) i respon-la amb el que has calculat, i digues en una frase per què el càncer és una divisió sense control.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S3 — El laboratori d'oncologia",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies + posada en comú dels deures",
        time: "10 min",
        phase: "engage",
        instruction: "Posa en comú l'esquema mitosi/meiosi dels deures i respon: què creus que busca un patòleg al microscopi per detectar un càncer. No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "Compta i calcula els dos índexs mitòtics",
        time: "40 min",
        phase: "explore",
        instruction: "A la teva fitxa de pacient, compta a cada biòpsia (inicial i final) el total de cèl·lules i les que estan en divisió, i calcula els dos índexs mitòtics. La Fig.2 mostra un exemple del tipus d'imatge.",
        hints: [
          "Compta en dos passos: primer TOTES les cèl·lules, després només les que tenen fils foscos (en divisió).",
          "Índex mitòtic = (en divisió ÷ total) × 100. Fes-ho per separat a la biòpsia inicial i a la final."
        ]
      },
      {
        apartat: "2",
        title: "Interpreta els números",
        time: "20 min",
        phase: "explica",
        instruction: "Amb la Fig.1, decideix si cada índex indica un teixit sospitós. Marca quin dels dos supera el llindar del ~10%.",
        hints: [
          "Interfase = nucli difús (no compta). En divisió = cromosomes visibles (sí compta).",
          "Per sobre del ~10% → sospita de procés cancerós."
        ]
      },
      {
        apartat: "3",
        title: "Veredicte: funciona el fàrmac?",
        time: "25 min",
        phase: "elabora",
        instruction: "Compara l'índex inicial i el final i escriu el veredicte de l'equip amb les dades que l'aguanten. Prepara com el defensaràs.",
        hints: [
          "Si l'índex baixa clarament → el fàrmac frena la divisió → funciona.",
          "No diguis només 'sí funciona': acompanya-ho sempre dels dos números."
        ]
      },
      {
        apartat: "4",
        title: "Per què el càncer no para + torna al principi",
        time: "15 min",
        phase: "elabora",
        instruction: "Explica per què el càncer és una divisió sense control i per què la quimioteràpia té efectes secundaris. Després torna a la pregunta d'entrada i respon-la.",
        hints: [
          "Càncer = els controls del cicle fallen → mitosi sense parar.",
          "La quimio ataca les cèl·lules que es divideixen molt: també cabell, intestí i sang."
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
      text: "En un camp del microscopi hi ha 40 cèl·lules i 8 estan en divisió. Quin és l'índex mitòtic?",
      options: ["20%", "8%", "32%", "40%"],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "En un altre ratolí, l'índex mitòtic passa del 30% al 9% després del tractament. El fàrmac funciona? Justifica-ho amb els números.",
      hint: "Fixa't si l'índex baixa i si el final queda per sota del llindar del ~10%."
    },
    {
      id: "q3",
      type: "open",
      text: "Per què la quimioteràpia provoca efectes com la caiguda del cabell? Relaciona-ho amb la mitosi.",
      hint: "El fàrmac atura les cèl·lules que es divideixen molt. Quins teixits SANS també ho fan?"
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, si t'haguessin dit que un càncer es diagnostica 'comptant cèl·lules', ho hauries entès? Què ha canviat després de calcular tu els dos índexs mitòtics?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Amb els teus dos índexs mitòtics, escriu un mini-informe de 4-5 línies com si fos la conclusió d'un article científic: què heu mesurat, quins números heu obtingut abans i després, i quin és el vostre veredicte sobre el fàrmac. Ha de poder-se defensar només amb les dades. El farem servir per tancar la SA a la propera sessió.",
    deadline: "2026-XX-XX",
    note: "Aprenentatge significatiu: comunicar una conclusió amb dades pròpies (prepara la síntesi de la SA), no copiar una definició."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Mira la Fig.1: aprèn a distingir una cèl·lula en divisió (fils foscos) d'una en interfase (nucli difús)",
    "Amb la Fig.2, compta el total i les cèl·lules en divisió de cada biòpsia i calcula els dos índexs mitòtics",
    "Llegeix l'apartat EXPLICA (índex mitòtic, provar un fàrmac abans/després, el càncer com a cicle sense control)",
    "Descarrega la fitxa S3 i completa el recompte, la interpretació i el veredicte",
    "A casa, redacta el mini-informe de conclusió amb els teus números; l'exit tiquet en paper el trobaràs a classe o fes-lo online aquí"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA3"],
  competencies: ["CE1", "CE3", "CE4"],
  criterisAvaluacio: ["3.1", "3.3", "4.1"]
}
