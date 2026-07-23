export const sa5s3 = {
  id: "s3",
  saId: "sa5",
  title: "Per què canvien els éssers vius?",
  sessionNumber: 3,
  biome: "sa5",
  duration: "2h",
  engageImage: "/images/sa5-s3-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Un antibiòtic que fa deu anys curava una infecció en tres dies, avui de vegades no fa res. No és que el medicament s'hagi fet vell: són els bacteris els que han canviat. Cada cop que prenem un antibiòtic, matem la majoria de bacteris... però algun, per pura casualitat, havia nascut amb una petita variació que el feia resistent. Aquest sobreviu, es reprodueix i omple el seu lloc de descendents resistents. En pocs anys, tota la població ha canviat. El mateix passa amb els insectes i els pesticides. Això és evolució passant DAVANT dels nostres ulls, en temps humà. Avui no ens creurem la història: la posarem a prova. Dissenyaràs i faràs una simulació de selecció natural i, amb el que observis, hauràs de decidir quina de les grans teories de l'evolució explica millor per què canvien els éssers vius.",
  engageQuestion: "Si un bacteri es fa resistent a un antibiòtic, què ha passat realment: el bacteri ha «decidit» defensar-se, s'ha «esforçat» i ho ha transmès, o hi havia atzar i l'ambient n'ha triat uns quants? Com canvien de veritat les poblacions?",
  engageContext: "Avui és una sessió de desenvolupament amb dos moments potents. Primer faràs ciència de debò: dissenyaràs una simulació de selecció natural (depredador i preses de colors sobre diferents fons), definiràs les variables i faràs rondes per veure què sobreviu. Després faràs l'habilitat més important de tota la situació, la que et demanaran a la selectivitat: mirar un mateix cas (el coll de la girafa, la resistència a un antibiòtic) des de les QUATRE teories de l'evolució i saber per què el neodarwinisme és el model que la ciència accepta avui.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Dissenyo una simulació de selecció natural definint jo mateix la variable independent, la dependent, el control i el nombre de rèpliques, i justifico per què cada decisió fa l'experiment fiable.",
      "Explico amb un cas propi la cadena mutació (atzar) → variabilitat → selecció (ambient) → canvi de la població, deixant clar què és a l'atzar i què no.",
      "Analitzo un mateix cas des de les quatre teories (fixisme, lamarckisme, darwinisme, neodarwinisme) i argumento quina l'explica millor i per què les altres fallen.",
      "Valoro per què cada teoria va tenir sentit en el seu context històric, distingint el que la ciència ha descartat del que ha conservat."
    ],
    B: [
      "Faig una simulació de selecció natural identificant, amb la graella donada, què és la variable independent (el fons), la dependent (els supervivents), el control i les rèpliques.",
      "Ordeno els passos de la cadena mutació → variabilitat → selecció natural → canvi de la població amb l'ajuda d'un exemple guiat.",
      "Completo una graella comparant com expliquen un mateix cas el lamarckisme i el neodarwinisme, seguint el model resolt del coll de la girafa.",
      "Reconec, amb ajuda, quina de les quatre teories accepta la ciència actual i una raó per la qual les altres es van descartar."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: SA5 al 2n trimestre; bastida mitjana amb tendència a baixar cap a SA6-7.
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Per dissenyar bé la simulació, separa les variables. La VARIABLE INDEPENDENT és la que TU canvies a propòsit: aquí, el color del FONS (clar o fosc) on «cacen» el depredador. La VARIABLE DEPENDENT és la que MESURES: quantes preses de cada color sobreviuen. El CONTROL és la comparació que et diu si el fons hi té res a veure (mateixes preses, però comptades abans de caçar, o sobre un fons neutre). Les RÈPLIQUES són repetir la cacera diverses rondes perquè l'atzar no t'enganyi: una sola ronda no demostra res.",
      challenge:
        "Dissenya la teva pròpia simulació de selecció natural amb el material que tinguis (paperets de colors, llegums, el que sigui). Decideix quina és la VI, la VD, el control i quantes rèpliques faràs, i escriu la hipòtesi amb direcció: «si el fons és fosc, sobreviuran més les preses ______ perquè ______». Prediu el resultat ABANS de fer-ho."
    },
    "2": {
      scaffold:
        "La cadena té quatre baules i l'ordre importa. (1) MUTACIÓ: a l'atzar, apareix una variació nova en algun individu (un color diferent, una resistència). Ningú la busca: és casualitat. (2) VARIABILITAT: dins la població hi ha individus diferents. (3) SELECCIÓ: l'AMBIENT afavoreix els que tenen la variació avantatjosa (sobreviuen i es reprodueixen més). (4) CANVI: al cap de generacions, la variació avantatjosa és la majoritària. Compte: la mutació és a l'atzar; la selecció NO —depèn de l'ambient.",
      challenge:
        "Aplica la cadena mutació → variabilitat → selecció → canvi a un cas real que no sigui el dels bacteris (per exemple, les arnes fosques a les ciutats industrials, o una planta que es fa tolerant a la sequera). Marca clarament quin pas és pur atzar i quin depèn de l'ambient. Per què seria un error dir que l'organisme «va voler» canviar?"
    },
    "3": {
      scaffold:
        "Per omplir la graella de les 4 teories, fixa't què diu cadascuna sobre UN mateix cas (el coll de la girafa): FIXISME → les espècies no canvien, sempre han estat així. LAMARCKISME → l'òrgan que s'usa es desenvolupa i es transmet (la girafa estira el coll i el passa als fills). DARWINISME → ja hi havia girafes de colls diferents; les de coll llarg sobrevivien més i deixaven més fills (selecció natural), però Darwin no sabia com s'heretava. NEODARWINISME → igual que Darwin + la genètica: la variació ve de mutacions a l'atzar en els gens i s'hereta. Segueix el model resolt de la girafa per a l'altre cas.",
      challenge:
        "Tria un cas (resistència a un antibiòtic, tolerància a la lactosa en humans o el teu organisme del pati) i analitza'l des de les QUATRE teories en una graella. Després escriu un paràgraf: per què el lamarckisme sembla de sentit comú però és FALS, i quina prova concreta el descarta?"
    },
    "4": {
      scaffold:
        "Cada teoria va néixer en un moment i amb la informació que hi havia. Lamarck (1809) va ser el primer a dir que les espècies canvien: es va equivocar en el MECANISME, però va encertar la idea que hi ha evolució. Darwin (1859) va trobar el mecanisme (selecció natural) però li faltava la genètica. El neodarwinisme (segle XX) va unir Darwin amb Mendel i l'ADN. La ciència no «tenia raó de cop»: es va anar corregint amb noves proves. Això és el més científic de tot.",
      challenge:
        "Explica per què seria injust dir que «Lamarck era ximple». Què va aportar que encara conservem? I com il·lustra aquest cas que la ciència és una tasca col·lectiva que es revisa amb el temps, i no una veritat fixa?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de la simulació, posem sobre la taula com creus que canvien els éssers vius. No es corregeix ara: ho compararàs quan hagis vist les proves.",
    prompts: [
      {
        kind: "write",
        text: "Un bacteri es fa resistent a un antibiòtic. Creus que el bacteri «s'ha defensat» a propòsit, o que ja hi havia bacteris diferents i uns quants han sobreviscut? Explica-ho.",
        starter: "Crec que el que passa és que…"
      },
      {
        kind: "write",
        text: "Si una girafa estira el coll tota la vida per arribar a les fulles altes, els seus fills naixeran amb el coll una mica més llarg? Per què sí o per què no?",
        starter: "Crec que… perquè…"
      }
    ]
  },

  // ── EXPLORA (ABP · simulació d'indagació oberta) ─────────
  exploreActivity: {
    what: "Dissenyeu i feu una simulació de selecció natural. Sou un depredador (per exemple, amb pinces o els dits) que ha de «caçar» preses (paperets, llegums o fitxes de colors) escampades sobre un fons d'un color determinat, amb pocs segons per ronda. Les preses que no captureu «sobreviuen» i es «reprodueixen» per a la ronda següent. Definiu la variable independent (el color del fons), la dependent (quines preses sobreviuen), un control i el nombre de rèpliques (rondes), i registreu com canvia la població de colors ronda rere ronda.",
    who: { mode: "grup", label: "Equips de 3-4 (un fa de depredador, els altres registren)" },
    time: 45,
    note: "És una indagació oberta: no us donem el protocol tancat, el decidiu vosaltres. El que importa no és «guanyar», sinó veure amb dades pròpies com un ambient (el fons) fa canviar una població sense que ningú «vulgui» canviar."
  },
  exploreInstructions: [
    "Trieu un fons (per exemple, paper de color) i escampeu-hi preses de dos o tres colors, algunes que hi camuflin i altres que ressaltin",
    "Definiu la variable independent (el fons), la dependent (supervivents per color), el control i quantes rondes (rèpliques) fareu",
    "Feu la primera ronda: el depredador captura durant uns segons; les preses no capturades «sobreviuen» i es dupliquen per a la ronda següent",
    "Registreu en una taula quantes preses de cada color queden després de cada ronda i observeu cap a quin color «evoluciona» la població",
    "Repetiu amb un fons de color diferent i compareu: què canvia i per què?"
  ],
  exploreDuration: "45 min",
  appSrc: null,
  exploreNote: "Indagació oberta amb dades pròpies: la demostració a l'aula és presentar a un altre equip la vostra taula de resultats i defensar quina era la VI, la VD i el control, i explicar per què el color que sobreviu depèn del fons i no de la «voluntat» de les preses.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Mutació → variabilitat → selecció== → canvi de la població",
      text: "Les poblacions canvien per una cadena de quatre passos. Primer, a l'==atzar==, apareix una ==mutació==: una variació nova en l'ADN d'algun individu (un color diferent, una resistència). Ningú la busca. Segon, això crea ==variabilitat==: dins la població hi ha individus diferents. Tercer, l'==ambient== fa la ==selecció==: els individus amb la variació avantatjosa sobreviuen i es reprodueixen més. Quart, generació rere generació, la variació avantatjosa es fa ==majoritària==: la població ha ==canviat==. La clau: la mutació és ==a l'atzar==, però la selecció ==no== —la dirigeix l'ambient.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "3",
      heading: "Les ==quatre teories==: un mateix cas, quatre explicacions",
      text: "Al llarg de la història s'han donat quatre grans explicacions. El ==fixisme/creacionisme== deia que les espècies ==no canvien==: sempre han estat iguals. El ==lamarckisme== (Lamarck, 1809) deia que l'òrgan que s'==usa== es desenvolupa i es ==transmet== als fills (la girafa estira el coll i el passa). El ==darwinisme== (Darwin, 1859) va trobar el mecanisme correcte: ja hi ha ==variabilitat== i l'ambient fa ==selecció natural==, però Darwin no sabia com s'heretava. El ==neodarwinisme== (segle XX) uneix Darwin amb la ==genètica== de Mendel i l'ADN: la variació ve de ==mutacions a l'atzar== i s'hereta pels gens. És el model que la ciència accepta avui.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Per què el ==lamarckisme== sembla lògic però és ==fals==",
      text: "Dir que «l'esforç es transmet» sona de sentit comú, però és ==fals==: els caràcters que adquireixes durant la vida ==no es transmeten== als fills pels gens. Si un culturista té molt de múscul, els seus fills no neixen musculats; si talles la cua a ratolins generació rere generació, segueixen naixent amb cua. El que s'hereta són els ==gens==, no el que has fet amb el teu cos. Aquesta és la diferència clau entre Lamarck i el neodarwinisme, i és la ==trampa== més habitual a les proves: «l'organisme va voler / es va esforçar» és sempre una explicació lamarckiana ==incorrecta==.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "La ciència es ==revisa==: cada teoria en el seu context",
      text: "Seria injust dir que Lamarck «s'equivocava perquè era ximple». Va ser el ==primer== a defensar que les espècies ==canvien==, en una època en què gairebé tothom era fixista: es va equivocar en el mecanisme, però va encertar la idea gran. Darwin va trobar el mecanisme però li faltava la genètica, que encara no existia. El neodarwinisme va poder unir-ho tot perquè ja es coneixia l'ADN. La ciència no és una veritat ==fixa==: és una tasca ==col·lectiva== que es ==corregeix== amb noves proves. Distingir «el que la teoria explicava en el seu temps» de «el que sabem ara» és pensar com un científic.",
      type: "epistemic",
      badge: "🧭 Naturalesa de la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: false, title: "Simulació de selecció natural: el fons ho decideix", src: "/images/sa5-s3-simulacio.svg", note: "Esquema de la simulació: les mateixes preses de dos colors sobre dos fons diferents. Sobre el fons fosc, les preses clares ressalten i el depredador les caça; sobreviuen les fosques. Sobre el fons clar, a l'inrevés. La població «evoluciona» cap al color que camufla, sense que cap presa «vulgui» canviar: és l'ambient (el fons = variable independent) qui selecciona. A la teva simulació tu tries el fons i comptes els supervivents (variable dependent)." },
    { id: "Fig.2", apartat: "3", before: false, title: "Un mateix cas, quatre teories (coll de la girafa)", src: "/images/sa5-s3-graella.svg", note: "Graella d'anàlisi RESOLTA amb el cas del coll de la girafa vist des de les quatre teories: fixisme (no canvia), lamarckisme (estira el coll i el transmet — fals), darwinisme (ja hi havia colls diferents, selecció natural), neodarwinisme (mutacions a l'atzar + herència genètica). A la fitxa hauràs d'omplir tu la mateixa graella amb un altre cas (resistència a un antibiòtic). És l'habilitat clau tipus PAU d'aquesta situació." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa5-s3-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament: torna a les teves idees prèvies (el bacteri resistent i la girafa) i reescriu-les ara amb el vocabulari correcte (mutació a l'atzar, variabilitat, selecció natural, herència de gens), assenyalant on abans donaves una explicació lamarckiana i corregint-la des del neodarwinisme.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S19 — Per què canvien els éssers vius?",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "10 min", phase: "engage", instruction: "Omple l'apartat 0: què creus que passa quan un bacteri es fa resistent i si l'esforç de la girafa es transmet als fills. No es corregeix; ho compararàs al final.", hints: [] },
      { apartat: "1", title: "Disseny i simulació de selecció natural", time: "45 min", phase: "explore", instruction: "Dissenya i fes la simulació: defineix la variable independent (fons), la dependent (supervivents), el control i les rèpliques (rondes). Registra els resultats a la taula i escriu la hipòtesi amb direcció abans de començar.", hints: ["VI = el que tu canvies (el color del fons). VD = el que mesures (quins colors sobreviuen).", "Rèpliques = repetir rondes perquè l'atzar no t'enganyi: una sola ronda no demostra res."] },
      { apartat: "2", title: "La cadena del canvi", time: "20 min", phase: "explica", instruction: "Amb la teoria i la teva simulació, ordena i explica la cadena mutació → variabilitat → selecció → canvi en un cas real. Marca què és atzar i què depèn de l'ambient.", hints: ["La mutació és a l'atzar; la selecció la dirigeix l'ambient.", "«L'organisme va voler canviar» és sempre incorrecte."] },
      { apartat: "3", title: "Graella de les 4 teories", time: "25 min", phase: "elabora", instruction: "Omple la graella d'anàlisi (Fig.2) amb un cas nou (resistència a un antibiòtic): què en diu cada teoria? Explica per què el lamarckisme és fals i quina prova el descarta.", hints: ["Segueix el model resolt del coll de la girafa.", "Lamarckisme = «l'esforç/ús es transmet» → fals: s'hereten els gens, no el que fas amb el cos."] },
      { apartat: "4", title: "La ciència es revisa", time: "10 min", phase: "elabora", instruction: "Explica per què cada teoria va tenir sentit en el seu context i què va aportar Lamarck que encara conservem. Com mostra que la ciència es corregeix amb el temps?", hints: ["Lamarck: primer a dir que les espècies canvien (idea encertada, mecanisme erroni).", "La ciència és col·lectiva i es revisa amb noves proves."] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica amb la cadena mutació → variabilitat → selecció → canvi per què, després d'anys usant un antibiòtic, tota una població de bacteris pot acabar sent resistent. Assenyala quin pas és a l'atzar i quin depèn de l'ambient.", hint: "La mutació apareix a l'atzar; l'antibiòtic (ambient) selecciona els que ja eren resistents." },
    { id: "q2", type: "multiple", text: "Una girafa estira el coll tota la vida per arribar a les fulles altes. Quina afirmació és correcta segons la ciència actual (neodarwinisme)?", options: ["El seu esforç NO passa als fills; les girafes de coll llarg sobreviuen més perquè ja tenien gens per a un coll llarg, i els transmeten", "Els seus fills naixeran amb el coll una mica més llarg perquè ella l'ha estirat tota la vida", "Les girafes van decidir totes alhora tenir el coll més llarg", "El coll de la girafa no té res a veure amb l'evolució"], correct: 0 },
    { id: "q3", type: "open", text: "Un company diu: «Lamarck era ximple perquè es va equivocar». Estàs d'acord? Explica què va encertar Lamarck i què va corregir el neodarwinisme, i què ens diu això sobre com funciona la ciència.", hint: "Lamarck va encertar que les espècies canvien; es va equivocar en el mecanisme (herència de l'esforç). La ciència es revisa amb noves proves." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Al principi de la sessió, la teva explicació del bacteri resistent o de la girafa era més aviat lamarckiana (l'esforç, la voluntat) o ja neodarwiniana (atzar + selecció)? Quina prova o quin moment de la simulació t'ha fet canviar la manera de pensar-ho? Què et falta encara per tenir clar?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Prepara la targeta-cas del teu organisme del pati per al museu evolutiu (S20): tria el tret que has observat, digues quina adaptació és (estructura → funció → ambient), quin tipus de prova de l'evolució el sustenta i com l'explicarien Lamarck i el neodarwinisme (una frase cadascun, deixant clar per què Lamarck s'equivoca).",
    deadline: null,
    note: "Aprenentatge significatiu: aplicar les 4 teories a un organisme real i teu prepara la síntesi de la SA al museu del pati."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: la cadena mutació → variabilitat → selecció → canvi, les quatre teories (fixisme, lamarckisme, darwinisme, neodarwinisme), per què el lamarckisme és fals i com la ciència es revisa",
    "Estudia la Fig.1 (com el fons selecciona el color que sobreviu) i la Fig.2 (la graella de les 4 teories amb el coll de la girafa resolt)",
    "Descarrega la fitxa S19 i fes una mini-simulació a casa amb paperets de colors sobre dos fons diferents, registrant quins sobreviuen",
    "Omple la graella de les 4 teories amb el cas de la resistència a un antibiòtic, seguint el model de la girafa",
    "Respon l'exit tiquet (apartat EXIT TIQUET) i prepara la targeta-cas del teu organisme per al museu de la propera sessió"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA3", "OA4"],
  competencies: ["CE2", "CE3", "CE4"],
  criterisAvaluacio: ["2.2", "3.6", "4.1", "4.2"]
}
