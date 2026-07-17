export const sa4s3 = {
  id: "s3",
  saId: "sa4",
  title: "Quan Mendel no n'hi ha prou",
  sessionNumber: 3,
  biome: "sa4",
  duration: "2h",
  engageImage: "/images/sa4-s3-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Mendel deia: un al·lel mana (dominant) i l'altre s'amaga (recessiu). Però mira aquests tres casos reals. Creues una flor VERMELLA amb una de BLANCA i tots els fills surten ROSA — ni vermells ni blancs. Una parella en què ell és del grup sanguini A i ella del B té una filla de grup AB: els dos caràcters es veuen alhora. I l'alçada o el color de pell no van «a saltes» (alt o baix), sinó que hi ha de tot, amb tots els intermedis. Cap dels tres encaixa amb el «dominant tapa recessiu». El repte d'avui: entendre que el model de Mendel és una bona base, però la natura té més maneres d'heretar un caràcter — i aprendre a reconèixer quina és cadascuna.",
  engageQuestion: "Si un al·lel sempre tapés l'altre, no hi hauria flors rosades ni persones de grup AB. Com s'hereten els caràcters que NO segueixen el «dominant-recessiu» simple? I per què l'alçada o el color de pell tenen tants matisos en lloc de dues categories?",
  engageContext: "A S1 vas aprendre el vocabulari (al·lel, genotip, fenotip) i a S2 a predir amb el quadre de Punnett quan hi ha dominància simple. Avui descobriràs tres situacions que Mendel no explica del tot: la dominància incompleta (barreja), la codominància (els dos alhora) i l'al·lelisme múltiple (més de dos al·lels per un gen), i veuràs per què la majoria de caràcters humans (alçada, color de pell) són poligènics i multifactorials. Al final classificaràs casos segons el tipus d'herència, una eina que necessitaràs per al pòster Heredity ID.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Distingeixo amb precisió dominància incompleta, codominància i al·lelisme múltiple, i justifico amb el fenotip de l'heterozigot per què cada cas NO és dominància simple.",
      "Resolc problemes de grups sanguinis (sistema ABO) raonant amb tres al·lels i predint els grups possibles dels fills a partir dels genotips dels pares.",
      "Argumento per què la majoria de caràcters humans (alçada, color de pell) són poligènics i multifactorials, i explico per què això produeix una variació contínua i no categories netes.",
      "Classifico casos nous segons el tipus d'herència i justifico la tria amb el patró de fenotips observat, identificant quan una dada no permet decidir."
    ],
    B: [
      "Reconec quan un cas és de dominància incompleta (surt una barreja) o de codominància (es veuen els dos alhora) mirant el fenotip de l'heterozigot.",
      "Ompliu un quadre de Punnett d'un creuament de grups sanguinis i dic quins grups poden tenir els fills.",
      "Explico amb les meves paraules per què l'alçada o el color de pell tenen molts valors intermedis i no només «alt/baix».",
      "Classifico un cas senzill segons el tipus d'herència seguint una taula de pistes."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — SA4 és al 2n trimestre; es manté la bastida a nivell mitjà (com S1 i S2).
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Fixa't només en l'HETEROZIGOT (el que té els dos al·lels diferents). En dominància simple, l'heterozigot es veu igual que el dominant (Aa es veu com AA). En dominància INCOMPLETA, l'heterozigot és una BARREJA: vermell + blanc = rosa. La pista clau és: «l'heterozigot, s'assembla a un dels pares o és intermedi?». Si és intermedi → dominància incompleta.",
      challenge:
        "En dominància incompleta, el creuament VB × VB dóna 1 vermell : 2 rosa : 1 blanc. Compara aquesta proporció FENOTÍPICA amb la d'un creuament Aa × Aa de dominància simple (3:1) i explica per què, aquí, la proporció de genotips i la de fenotips coincideixen (1:2:1). Què fa la dominància incompleta que la simple no fa?"
    },
    "2": {
      scaffold:
        "El sistema ABO té TRES al·lels d'un mateix gen: I^A, I^B i i. Regles: I^A i I^B són tots dos dominants sobre i, però ENTRE ELLS són codominants (si tens els dos, es veuen els dos → grup AB). El i és recessiu (només surt grup 0 si és ii). Per fer el quadre, tracta cada al·lel com sempre, però recorda aquestes tres regles en llegir el resultat.",
      challenge:
        "Un pare de grup A i una mare de grup B tenen quatre fills: un de cada grup (A, B, AB i 0). Demostra amb genotips i un quadre de Punnett que això és possible, i indica quins genotips havien de tenir els pares perquè pugui sortir un fill de grup 0."
    },
    "3": {
      scaffold:
        "Un caràcter POLIGÈNIC depèn de molts gens alhora; cada al·lel «actiu» hi suma una miqueta (com sumar monedes). Per això no surten dues categories, sinó molts valors intermedis (una gradació). Si a més hi influeix l'ambient (alimentació, sol...), es diu MULTIFACTORIAL. Pista: si veus una variació contínua (de mica en mica, sense saltes), pensa en poligènia.",
      challenge:
        "Explica per què un caràcter poligènic dóna una distribució en forma de campana (pocs individus als extrems, molts al mig) mentre que un caràcter mendelià simple dóna proporcions discretes (3:1). Relaciona-ho amb la idea de «sumar molts efectes petits a l'atzar»."
    },
    "4": {
      scaffold:
        "Per classificar un cas, mira el fenotip de l'heterozigot i el nombre de classes: (1) si l'heterozigot és igual al dominant → dominància simple; (2) si és una barreja intermèdia → dominància incompleta; (3) si es veuen els dos trets alhora → codominància; (4) si hi ha més de dos al·lels pel gen → al·lelisme múltiple; (5) si hi ha variació contínua amb molts intermedis → poligènica/multifactorial. Fes servir aquestes cinc pistes com una clau dicotòmica.",
      challenge:
        "Crea tu un cas nou (inventat però coherent) per a cada tipus d'herència i intercanvia'ls amb un company perquè els classifiqui. Un dels teus casos ha de ser «ambigu a propòsit»: explica quina dada addicional caldria per decidir-ho amb seguretat."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Recuperem S2. Ja saps predir amb el quadre de Punnett quan un al·lel domina l'altre. Abans de veure els casos que se'n surten, posa a prova la teva intuïció.",
    prompts: [
      {
        kind: "write",
        text: "Si creues una flor vermella amb una de blanca, de quin color esperes els fills? Pot sortir un color que no tingui cap dels dos pares?",
        starter: "Crec que sortiran… perquè…"
      },
      {
        kind: "write",
        text: "Per què hi ha persones molt altes, molt baixes i de tantes alçades intermèdies, i no només «altes» o «baixes» com passa amb el color de la llavor del pèsol?",
        starter: "Crec que és perquè l'alçada depèn de…"
      }
    ]
  },

  // ── EXPLORA (ABP · classificació de casos) ─────────
  exploreActivity: {
    what: "En equip feu de servei de genètica d'un hospital. Rebeu tres casos reals que no encaixen amb el «dominant-recessiu» simple: (1) un viver que obté flors roses creuant vermelles i blanques; (2) una parella (pare grup A, mare grup B) que ha tingut fills dels quatre grups sanguinis i vol saber com és possible; (3) un estudi d'alçada d'una població amb tots els valors intermedis. Per a cada cas heu de decidir QUIN tipus d'herència explica el que s'observa i justificar-ho, i resoldre amb un quadre de Punnett el cas dels grups sanguinis.",
    who: { mode: "grup", label: "Equips de 3 (servei de genètica)" },
    time: 45,
    note: "Indagació: la clau no és memoritzar noms, sinó ADONAR-SE que el fenotip de l'heterozigot (barreja? els dos alhora? intermedi continu?) és la pista que revela el tipus d'herència. Cada equip ha de defensar la seva classificació davant d'un altre amb l'evidència del cas.",
  },
  exploreInstructions: [
    "Cas flors: quin color té l'heterozigot? És intermedi o igual a un pare? Decidiu el tipus d'herència i escriviu la proporció esperada de VB × VB",
    "Cas grups sanguinis: escriviu els genotips possibles del pare (A) i de la mare (B), feu el quadre de Punnett i digueu quins grups poden tenir els fills",
    "Cas alçada: la variació és a saltes o contínua? Decidiu si és mendeliana simple o poligènica/multifactorial i justifiqueu-ho",
    "Prepareu la defensa: per a cada cas, quina EVIDÈNCIA concreta us fa triar aquell tipus d'herència i no un altre"
  ],
  exploreDuration: "45 min",
  appSrc: null,
  exploreNote: "Demostració a l'aula: cada equip presenta un dels tres casos a un altre equip i ha de convèncer-lo del tipus d'herència fent servir el fenotip de l'heterozigot com a prova. Si els dos equips discrepen, han d'acordar quina dada addicional els trauria el dubte.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "==Dominància incompleta==: l'heterozigot és una ==barreja==",
      text: "A vegades ==cap al·lel domina== del tot. En les flors de la ==bella de nit== (Mirabilis jalapa), una planta vermella (==VV==) creuada amb una blanca (==BB==) dóna fills tots ==rosa== (==VB==): un fenotip ==intermedi==, barreja dels dos. Si creues dues roses (VB × VB) surten ==1 vermell : 2 rosa : 1 blanc==. Fixa't: aquí la proporció de ==fenotips== (1:2:1) és igual que la de ==genotips==, perquè cada genotip es veu diferent.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Codominància==: els dos al·lels es veuen ==alhora==",
      text: "En la ==codominància== l'heterozigot mostra ==els dos trets sencers==, no una barreja. El cas clàssic són els ==grups sanguinis==: si tens l'al·lel ==I^A== i el ==I^B==, els glòbuls porten ==els dos antígens== (A i B) → ets grup ==AB==. No és rosa: és A ==i== B de veritat, cadascun complet. La diferència amb la dominància incompleta és clau: incompleta = ==mescla==; codominància = ==tots dos sencers==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "==Al·lelisme múltiple==: un gen amb ==més de dos== al·lels",
      text: "Mendel treballava amb ==dos== al·lels per gen, però un gen en pot tenir ==més==. El sistema ==ABO== en té ==tres==: ==I^A==, ==I^B== i ==i==. Regles: I^A i I^B ==dominen== sobre i, però entre ells són ==codominants==. Així, grup A = I^A I^A o I^A i · grup B = I^B I^B o I^B i · grup ==AB== = I^A I^B · grup ==0== = ==ii==. Cada persona només en porta ==dos==, però a la població n'hi ha tres circulant.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "==Poligènia== i herència ==multifactorial==: quan Mendel es queda curt",
      text: "La majoria de caràcters humans (==alçada==, ==color de pell==, pes) ==no== depenen d'un sol gen: són ==poligènics== (molts gens que hi sumen una mica cadascun) i sovint ==multifactorials== (també hi influeix l'==ambient==: alimentació, sol...). Per això no hi ha ==dues== categories sinó una ==variació contínua== amb tots els intermedis, en forma de ==campana==. El model mendelià simple segueix sent la base, però ==no ho explica tot==: reconèixer-ne els límits és fer bona ciència.",
      type: "epistemic",
      badge: "🔬 Límits del model"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: false, title: "Dominància incompleta: vermell × blanc = rosa", src: "/images/sa4-s3-domin-incompleta.svg", note: "V = al·lel vermell, B = al·lel blanc; cap domina. L'heterozigot VB és rosa (intermedi). El creuament VB × VB dóna 1 vermell : 2 rosa : 1 blanc — la proporció de fenotips coincideix amb la de genotips (1:2:1)." },
    { id: "Fig.2", apartat: "2", before: false, title: "Grups sanguinis: codominància i tres al·lels (ABO)", src: "/images/sa4-s3-grups-sang.svg", note: "Un gen amb tres al·lels (I^A, I^B, i). I^A i I^B són codominants entre ells (grup AB mostra els dos antígens alhora) i tots dos dominen sobre i (grup 0 = ii). És alhora codominància i al·lelisme múltiple." },
    { id: "Fig.3", apartat: "3", before: false, title: "Herència poligènica i multifactorial", src: "/images/sa4-s3-poligenia.svg", note: "El color de pell o l'alçada depenen de molts gens que sumen una mica cadascun (poligènia) i de l'ambient (multifactorial). El resultat és una variació contínua en forma de campana, no dues categories netes." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa4-s3-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: torna als tres casos del hook (flors rosa, fills de grup AB, alçada contínua) i etiqueta cadascun amb el seu tipus d'herència, explicant en una frase quina evidència t'ho ha fet decidir.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S3 — Quan Mendel no n'hi ha prou",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "8 min",
        phase: "engage",
        instruction: "Omple l'apartat 0: de quin color esperes els fills de vermell × blanc, i per què l'alçada té tants valors intermedis. No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "Dominància incompleta",
        time: "28 min",
        phase: "explore",
        instruction: "Estudia el cas de les flors i decideix el tipus d'herència mirant l'heterozigot. Fes el quadre VB × VB i escriu la proporció 1:2:1.",
        hints: [
          "L'heterozigot VB és rosa: una barreja, no igual a cap pare.",
          "Aquí cada genotip es veu diferent, per això fenotips = genotips = 1:2:1."
        ]
      },
      {
        apartat: "2",
        title: "Codominància i grups sanguinis",
        time: "35 min",
        phase: "explica",
        instruction: "Aprèn les regles de l'ABO (tres al·lels; I^A i I^B codominants, i recessiu). Resol el cas pare A × mare B i digues quins grups poden tenir els fills.",
        hints: [
          "Grup A = I^A I^A o I^A i; grup B = I^B I^B o I^B i; AB = I^A I^B; 0 = ii.",
          "Perquè surti un fill de grup 0, tots dos pares han de portar l'al·lel i."
        ]
      },
      {
        apartat: "3",
        title: "Poligènia i multifactorial",
        time: "20 min",
        phase: "elabora",
        instruction: "Explica per què l'alçada i el color de pell tenen variació contínua (campana) i no dues categories. Relaciona-ho amb «molts gens + ambient».",
        hints: [
          "Cada al·lel actiu suma una mica: molts intermedis possibles.",
          "Si a més hi influeix l'ambient (alimentació, sol), és multifactorial."
        ]
      },
      {
        apartat: "4",
        title: "Classificar casos",
        time: "17 min",
        phase: "elabora",
        instruction: "Fes servir la clau de pistes per classificar cada cas segons el tipus d'herència i justifica la tria amb el fenotip de l'heterozigot.",
        hints: [
          "Barreja intermèdia → incompleta; els dos alhora → codominància.",
          "Més de dos al·lels → al·lelisme múltiple; variació contínua → poligènica."
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
      text: "Creues una flor vermella (VV) amb una de blanca (BB) i TOTS els fills surten rosa. Quin tipus d'herència és?",
      options: [
        "Dominància incompleta (l'heterozigot és una barreja intermèdia)",
        "Dominància simple (el vermell domina)",
        "Codominància (es veuen els dos colors per separat)",
        "Al·lelisme múltiple (hi ha tres al·lels)"
      ],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "Una persona de grup AB té els antígens A i B alhora als glòbuls. Per què això és codominància i NO dominància incompleta? Quina diferència hi ha amb la flor rosa?",
      hint: "En codominància es veuen els dos trets sencers (A i B de veritat); en dominància incompleta surt una mescla intermèdia (rosa) que no és cap dels dos."
    },
    {
      id: "q3",
      type: "open",
      text: "Un pare de grup 0 i una mare de grup AB tenen fills. Quins grups sanguinis poden tenir els fills i quins NO? Fes-ho amb els genotips.",
      hint: "Pare 0 = ii (només passa i); mare AB = I^A I^B (passa I^A o I^B). Els fills seran I^A i (grup A) o I^B i (grup B): mai AB ni 0."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui pensaves que sempre un al·lel «tapa» l'altre? Quin dels tres casos (flors rosa, grup AB, alçada contínua) t'ha costat més d'encaixar i per què? Quan et donen un cas nou, saps quina pista mirar primer per decidir el tipus d'herència?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Resol una tanda curta de problemes: un de dominància incompleta (proporció de fenotips), un de grups sanguinis (grups possibles dels fills d'una parella) i una pregunta breu sobre per què un caràcter donat (p. ex. el color d'ulls o l'alçada) és poligènic. Torna a mirar el caràcter del teu projecte Heredity ID i decideix si segueix un patró mendelià simple o no: ho hauràs d'argumentar al pòster.",
    deadline: null,
    note: "Aprenentatge significatiu: decideixes quin model d'herència explica el TEU caràcter real, cosa que hauràs de justificar al pòster científic final."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: dominància incompleta, codominància, al·lelisme múltiple i herència poligènica/multifactorial",
    "Estudia la Fig.1 (vermell × blanc → rosa, 1:2:1), la Fig.2 (grups sanguinis ABO i codominància) i la Fig.3 (poligènia: variació contínua)",
    "Descarrega la fitxa S3 i resol el quadre de grups sanguinis de l'apartat 2 i la classificació de casos de l'apartat 4",
    "Comprova que saps la diferència clau: dominància incompleta = mescla intermèdia; codominància = els dos trets alhora",
    "L'exit tiquet el trobaràs a classe o aquí (apartat EXIT TIQUET); porta la tanda de problemes resolta"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA3"],
  competencies: ["CE1", "CE4"],
  criterisAvaluacio: ["1.2", "4.1"]
}
