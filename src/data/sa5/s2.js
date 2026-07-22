export const sa5s2 = {
  id: "s2",
  saId: "sa5",
  title: "Les proves de l'evolució, del pati al laboratori",
  sessionNumber: 2,
  biome: "sa5",
  duration: "2h",
  engageImage: "/images/sa5-s2-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "A la sessió anterior vau explicar històries sobre els organismes del pati: «la gallina amb prou feines vola perquè l'hem domesticat», «el plataner té la fulla com un auró». Però una història no és una prova. Avui passem de biòlegs de camp a detectius de l'evolució: buscarem les PROVES que confirmen (o refuten) el parentiu entre éssers vius. La primera la tens gairebé a la cuina: l'esquelet d'una ala de pollastre. Si la desmuntes, hi trobaràs un os llarg (húmer), després dos ossos junts (radi i cúbit) i uns ossets petits. Exactament els mateixos ossos que tens al teu braç. Casualitat? L'ala d'un insecte també serveix per volar, però per dins no s'assembla gens a la del pollastre. Per què unes semblances valen com a prova de parentiu i altres no?",
  engageQuestion: "L'ala d'un ocell i l'ala d'un insecte fan el mateix (volar): són «el mateix invent»? Quan una semblança entre dos éssers vius demostra que són parents, i quan només és una coincidència?",
  engageContext: "Avui és una sessió de desenvolupament: aprendràs a distingir les proves de l'evolució. La clau és una idea potent —homologia vs analogia— i una habilitat nova: llegir un arbre de semblances ja construït per inferir qui és parent de qui. No el dibuixaràs tu; l'has de saber interpretar, com un mapa. Al final relacionaràs cada organisme del pati amb el tipus de prova que explica la seva història.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Distingeixo una estructura homòloga d'una d'anàloga justificant-ho amb l'estructura interna, i explico per què la primera prova parentiu i la segona no (divergència vs convergència).",
      "Argumento amb un exemple propi per què una estructura vestigial és una prova de l'evolució.",
      "Relaciono cada organisme del pati amb el tipus de prova (anatòmica, bioquímica, paleontològica, biogeogràfica…) que millor explicaria el seu parentiu.",
      "Interpreto un arbre de semblances ja construït per deduir quines espècies comparteixen l'avantpassat comú més recent, i justifico la resposta llegint els nodes."
    ],
    B: [
      "Identifico, amb ajuda de la figura, quins ossos són els mateixos a l'ala de pollastre i al braç humà (homologia) i reconec que l'ala d'insecte és diferent per dins (analogia).",
      "Dic què és una estructura vestigial amb un exemple donat (apèndix, queixals del seny…).",
      "Associo un organisme del pati amb un tipus de prova de l'evolució seguint una llista d'exemples.",
      "Llegeixo un arbre de semblances senzill i identifico el node (avantpassat comú) que comparteixen dues espècies."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "HOMOLOGIA = mateixos ossos per dins, tot i que per fora facin coses diferents. A l'ala de pollastre, al teu braç, a l'ala de ratpenat i a l'aleta de balena hi ha sempre: un os llarg (HÚMER), dos ossos junts (RADI i CÚBIT) i ossets petits (mà/dits). Que siguin els mateixos ossos, només canviats de mida, és la prova que tots vénen d'un avantpassat comú. Mira la Fig.1 i pinta del mateix color l'húmer de les quatre extremitats.",
      challenge:
        "L'ala de ratpenat i l'aleta de balena semblen molt diferents (una vola, l'altra neda), però tenen els mateixos ossos que el teu braç. Explica com pot ser: quin procés (divergència) fa que una mateixa estructura de partida acabi fent funcions tan diferents? Posa'n un altre exemple d'òrgan homòleg que no surti a la figura."
    },
    "2": {
      scaffold:
        "ANALOGIA = mateixa funció, però origen i estructura interna diferents. L'ala d'ocell (amb ossos) i l'ala d'insecte (una membrana, sense ossos) serveixen totes dues per volar, però per dins no s'assemblen: cada una va aparèixer pel seu compte. Això és convergència. Regla d'or: per saber si dos éssers són parents, no miris QUÈ FA l'òrgan (funció), mira COM ÉS PER DINS (estructura).",
      challenge:
        "El plataner i l'auró fan fulles molt semblants però no són parents propers; la fulla del plataner i la teva mà no s'assemblen però... comparteixen més història del que sembla? Tria dos casos del pati (un d'homologia i un d'analogia) i justifica per quin dels dos t'hi jugaries que hi ha parentiu."
    },
    "3": {
      scaffold:
        "Una ESTRUCTURA VESTIGIAL és un òrgan que abans tenia una funció i ara ja gairebé no en té: va quedant reduït generació rere generació. Exemples en humans: l'apèndix, els queixals del seny, l'os de la cua (còccix). En una balena: ossets de la pelvis (de quan els seus avantpassats caminaven). Que quedin «restes» d'òrgans antics és una prova de l'evolució. A part de l'anatomia, hi ha més tipus de proves: bioquímiques (comparar ADN o proteïnes), paleontològiques (fòssils), embriològiques i biogeogràfiques (on viu cada espècie).",
      challenge:
        "Tria un organisme del pati i decideix quin TIPUS de prova (anatòmica, bioquímica, paleontològica, biogeogràfica…) seria la més convincent per demostrar el seu parentiu amb un altre, i explica per què aquesta i no una altra. Quina prova costaria més d'obtenir al pati mateix?"
    },
    "4": {
      scaffold:
        "Un ARBRE DE SEMBLANCES ja construït es llegeix així: les puntes de dalt són les espècies actuals; els punts on es reparteixen les branques (NODES) són avantpassats comuns; l'eix vertical és el TEMPS. Regla: com més a prop està el node que comparteixen dues espècies, més recent és el seu avantpassat comú i més emparentades estan. No l'has de dibuixar ni refer: només llegir-lo, com un mapa de metro del parentiu.",
      challenge:
        "A la Fig.3, quines dues espècies estan MENYS emparentades entre elles? Justifica-ho pel node que han de baixar a buscar. Si aparegués una espècie nova que comparteix node amb la gallina abans que amb el pardal, on la dibuixaries i què voldria dir?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Recuperem la sessió anterior: vas triar un organisme del pati i vas escriure una hipòtesi sobre una adaptació seva. Avui buscarem proves. Abans, pensa:",
    prompts: [
      {
        kind: "write",
        text: "Un dofí i un tauró tenen forma molt semblant i tots dos neden molt bé. Vol dir això que són parents propers? Per què ho creus?",
        starter: "Crec que… perquè…"
      },
      {
        kind: "write",
        text: "Si volguessis demostrar que l'home i el ximpanzé són parents, quina PROVA buscaries? On la trobaries?",
        starter: "Buscaria…"
      }
    ]
  },

  // ── EXPLORA (ABP · manipulatiu ala de pollastre) ─────────
  exploreActivity: {
    what: "Observació de l'esquelet d'una ala de pollastre (neta i bullida, portada de casa o preparada a l'aula). En equip, localitzeu els ossos i compareu-los amb el vostre propi braç i amb la figura de tetràpodes: húmer (un os llarg), radi i cúbit (dos ossos junts) i els ossets de la mà. Després relacioneu cada organisme del pati amb un tipus de prova de l'evolució.",
    who: { mode: "grup", label: "Equips de 3-4 (detectius de l'evolució)" },
    time: 40,
    note: "Manipulatiu segur i assequible: substitueix els cranis d'homínids (no disponibles). L'ala de pollastre és homòloga del braç humà; palpar els mateixos ossos en un animal tan diferent és la millor manera d'entendre l'homologia."
  },
  exploreInstructions: [
    "Localitzeu a l'ala de pollastre els tres blocs d'ossos: l'húmer (un os llarg), el radi i el cúbit (dos ossos junts) i els ossets de la mà",
    "Compareu-los amb el vostre propi braç i amb la Fig.1: són els mateixos ossos? Quins canvien de mida o de forma?",
    "Compareu ara l'ala d'un ocell amb l'ala d'un insecte (imatge): fan la mateixa funció, però per dins s'assemblen?",
    "Ompliu la graella de proves: relacioneu cada organisme del pati amb el tipus de prova que millor explicaria el seu parentiu"
  ],
  exploreDuration: "40 min",
  appSrc: null,
  exploreNote: "Demostració a l'aula: cada equip ensenya a un altre on són l'húmer, el radi i el cúbit a l'ala de pollastre i explica per què això prova el parentiu amb els humans. Recordeu: la mateixa FUNCIÓ no prova parentiu; la mateixa ESTRUCTURA interna, sí.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "==Òrgans homòlegs==: mateix esquelet, funcions diferents",
      text: "Dos òrgans són ==homòlegs== quan tenen la ==mateixa estructura interna== encara que facin funcions diferents. El teu braç, l'ala d'un pollastre, l'ala d'un ratpenat i l'aleta d'una balena semblen molt diferents per fora, però per dins tenen ==els mateixos ossos==: un ==húmer==, un ==radi== i un ==cúbit==, i els ossets de la mà, només canviats de mida i forma. Això s'explica perquè totes vénen d'una ==mateixa estructura de partida== que s'ha anat adaptant a funcions diferents: és la ==divergència evolutiva==. Els òrgans homòlegs són una ==prova de parentiu==: indiquen un ==avantpassat comú==.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Òrgans anàlegs==: mateixa funció, origen diferent",
      text: "Dos òrgans són ==anàlegs== quan fan la ==mateixa funció== però tenen un ==origen i una estructura diferents==. L'==ala d'un ocell== (amb ossos) i l'==ala d'un insecte== (una membrana sense ossos) serveixen totes dues per volar, però per dins no s'assemblen gens: cada una va aparèixer ==pel seu compte==. Aquest fenomen és la ==convergència evolutiva==: dues línies diferents arriben a una solució semblant. Per això els òrgans anàlegs ==NO== proven parentiu. Regla clau: per saber si dos éssers vius són parents, no miris ==què fa== l'òrgan, mira ==com és per dins==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "==Estructures vestigials== i els altres tipus de proves",
      text: "Una ==estructura vestigial== és un òrgan que ==abans tenia una funció i ara gairebé no en té==, i va quedant reduït generació rere generació: l'==apèndix==, els ==queixals del seny== o l'os de la cua (==còccix==) en humans; els ossets de la ==pelvis== en balenes, que recorden que els seus avantpassats caminaven. Les restes d'òrgans antics són una prova de l'evolució. A més de les proves ==anatòmiques== (homologia, analogia, vestigis), n'hi ha de ==bioquímiques== (comparar l'ADN o les proteïnes: com més semblants, més parents), ==paleontològiques== (fòssils que mostren canvis graduals, com l'==Archaeopteryx==), ==embriològiques== i ==biogeogràfiques== (on viu cada espècie: els pinsans de les Galápagos).",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Llegir un ==arbre de semblances== (sense refer-lo)",
      text: "Totes aquestes proves permeten proposar qui és parent de qui, i això es representa amb un ==arbre de semblances== (arbre filogenètic). Avui n'aprens a ==llegir-ne un ja construït==, no a dibuixar-lo. Les ==puntes de dalt== són les espècies actuals; els punts on es reparteixen les branques són els ==nodes== = ==avantpassats comuns==; l'eix vertical és el ==temps==. La regla per interpretar-lo: com més ==a prop== està el node que comparteixen dues espècies, més ==recent== és el seu avantpassat comú i més ==emparentades== estan. Inferir el parentiu és una ==interpretació== del que diu l'arbre: la dada és el dibuix; el «són parents» és la lectura raonada.",
      type: "epistemic",
      badge: "🧭 Semblar-se ≠ ser parents"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: false, title: "Homologia vs analogia", src: "/images/sa5-s2-homologia-analogia.svg", note: "A dalt, quatre extremitats de tetràpodes (braç humà, ala de pollastre, ala de ratpenat, aleta de balena): tenen els mateixos ossos (húmer, radi, cúbit i ossets de la mà) canviats de mida = HOMOLOGIA, prova de parentiu. A baix, ala d'ocell (amb ossos) vs ala d'insecte (membrana sense ossos): mateixa funció, estructura diferent = ANALOGIA, no prova parentiu. A la fitxa de l'alumne els ossos són en gris perquè els pintis tu." },
    { id: "Fig.3", apartat: "4", before: false, title: "Arbre de semblances ja construït", src: "/images/sa5-s2-arbre.svg", note: "Arbre per interpretar (no per refer): pardal i gallina comparteixen el node 1; ratpenat i balena, el node 2; tots comparteixen l'arrel. L'eix vertical és el temps. Com més a prop és el node compartit, més emparentades estan les espècies. Fixa't: el ratpenat s'assembla més al pardal per fora (vola), però l'arbre el situa més a prop de la balena." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa5-s2-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament: torna a la pregunta d'inici (l'ala d'ocell i la d'insecte, són el mateix invent?) i respon-la ara amb el vocabulari nou (homologia, analogia, convergència/divergència), explicant quina de les dues semblances demostra parentiu i per què.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S18 — Les proves de l'evolució",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "8 min", phase: "engage", instruction: "Omple l'apartat 0: el dofí i el tauró són parents? Quina prova buscaries per demostrar un parentiu? No es corregeix.", hints: [] },
      { apartat: "1", title: "Homologia: l'ala de pollastre", time: "35 min", phase: "explore", instruction: "Amb l'ala de pollastre a la mà i la Fig.1, localitza l'húmer, el radi i el cúbit i compara'ls amb el teu braç. Pinta del mateix color els ossos que són iguals a les quatre extremitats.", hints: ["Els mateixos ossos, canviats de mida = homologia = parentiu.", "Un os llarg (húmer), dos ossos junts (radi i cúbit), ossets de la mà."] },
      { apartat: "2", title: "Analogia", time: "20 min", phase: "explica", instruction: "Compara l'ala d'ocell amb l'ala d'insecte. Fan la mateixa funció? S'assemblen per dins? Decideix si és homologia o analogia.", hints: ["Mateixa funció + estructura diferent = analogia = convergència.", "L'analogia NO prova parentiu."] },
      { apartat: "3", title: "Vestigis i graella de proves", time: "25 min", phase: "elabora", instruction: "Explica què és una estructura vestigial amb un exemple i omple la graella relacionant organismes del pati amb el tipus de prova.", hints: ["Vestigi = òrgan que va perdre la funció (apèndix, queixals del seny, còccix).", "Tipus de prova: anatòmica, bioquímica, paleontològica, biogeogràfica."] },
      { apartat: "4", title: "Interpretar l'arbre", time: "20 min", phase: "elabora", instruction: "Amb la Fig.3, respon les preguntes d'interpretació: quines espècies comparteixen l'avantpassat comú més recent i quines estan menys emparentades.", hints: ["Node = avantpassat comú; eix vertical = temps.", "Com més a prop el node compartit, més emparentades."] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica amb les teves paraules la diferència entre HOMOLOGIA i ANALOGIA, i digues quina de les dues demostra que dos éssers vius són parents. Posa un exemple de cada.", hint: "Homologia = mateixa estructura interna; analogia = mateixa funció, estructura diferent." },
    { id: "q2", type: "multiple", text: "L'ala d'un ratpenat i l'aleta d'una balena tenen els mateixos ossos (húmer, radi, cúbit) tot i que una vola i l'altra neda. Què en podem concloure?", options: ["Són òrgans homòlegs: comparteixen un avantpassat comú (són parents)", "Són òrgans anàlegs: no tenen res a veure evolutivament", "Que volar i nedar són la mateixa cosa", "Que el ratpenat i la balena són la mateixa espècie"], correct: 0 },
    { id: "q3", type: "open", text: "A l'arbre de la Fig.3, el pardal i el ratpenat s'assemblen molt per fora (tots dos volen). Per què l'arbre situa el ratpenat més a prop de la balena que del pardal? Quina prova pesa més que el «semblar-se per fora»?", hint: "Mira quin node comparteixen; recorda que la funció (volar) no prova parentiu." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, hauries dit que dos animals que s'assemblen molt són parents. Ha canviat la teva manera de decidir qui és parent de qui? Quina prova et sembla ara més convincent i per què? Què et costa encara d'entendre d'un arbre de semblances?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Busca (o recorda) un exemple d'estructura vestigial en el teu propi cos o en un animal que coneguis i escriu una frase explicant quina funció tenia abans. Prepara't per a la propera sessió, on veurem PER QUÈ canvien els éssers vius (mutació, variabilitat i selecció natural) amb una simulació.",
    deadline: null,
    note: "Aprenentatge significatiu: connectar una prova de l'evolució (vestigi) amb el propi cos, no memoritzar una llista."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: òrgans homòlegs (mateixa estructura, funcions diferents = parentiu), òrgans anàlegs (mateixa funció, origen diferent = NO parentiu), estructures vestigials i els tipus de proves de l'evolució",
    "Estudia la Fig.1: els mateixos ossos (húmer, radi, cúbit) a l'ala de pollastre, el braç humà, l'ala de ratpenat i l'aleta de balena (homologia) i l'ala d'ocell vs d'insecte (analogia)",
    "Estudia la Fig.3: com es llegeix un arbre de semblances (nodes = avantpassats comuns, eix vertical = temps, com més a prop el node compartit més emparentats)",
    "Descarrega la fitxa S18 i fes els apartats 1 a 4; si pots, aconsegueix una ala de pollastre neta i localitza-hi els ossos",
    "L'exit tiquet el trobaràs a classe o aquí (apartat EXIT TIQUET)"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA2"],
  competencies: ["CE1", "CE4"],
  criterisAvaluacio: ["1.1", "1.2", "4.1"]
}
