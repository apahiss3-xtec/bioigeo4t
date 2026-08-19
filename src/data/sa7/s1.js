export const sa7s1 = {
  id: "s1",
  saId: "sa7",
  title: "Estem sols?",
  sessionNumber: 1,
  biome: "sa7",
  duration: "2h",
  engageImage: "/images/sa7-s1-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "L'any 2023 el telescopi espacial James Webb va apuntar cap a K2-18b, un planeta que gira al voltant d'una estrella situada a uns 124 anys llum de nosaltres. Analitzant la llum de l'estrella quan travessa l'atmosfera del planeta, l'equip va detectar un senyal molt feble d'una molècula anomenada dimetilsulfur que, aquí a la Terra, produeixen sobretot organismes marins. L'endemà, molts titulars deien «troben indicis de vida fora del sistema solar». El mateix equip que ho havia mesurat deia una cosa força diferent: que el senyal era feble, que calia confirmar-lo amb més observacions i que hi podia haver processos sense cap ésser viu al darrere que expliquessin aquella molècula. Altres equips ho han posat en dubte des d'aleshores. Avui comences l'última situació del curs amb aquesta pregunta al davant: qui explicava millor la realitat, el titular o els científics?",
  engageQuestion: "Fa 300.000 anys tot just apareixia la nostra espècie, i fa 13.800 milions d'anys no hi havia absolutament ningú per veure-ho. Com pot dir la ciència res sobre l'origen de l'univers, de la Terra o de la vida si no hi ha cap testimoni? Escriu la teva resposta abans de començar: després la compararàs amb la que tindràs al final de la sessió.",
  engageContext: "Aquesta és la sessió que obre la darrera situació del curs, i és de tipus activació: no cal que arribis sabent res, cal que et facis les preguntes bones. Primer recollirem què creus que se sap sobre l'origen de l'univers, de la Terra i de la vida. Després, en equip, faràs de comitè editorial d'una revista de divulgació: rebràs afirmacions reals sobre l'espai i n'hauràs de decidir el grau de certesa, exactament amb l'escala que vau construir a la SA1. A partir d'aquí entendràs què és el Big Bang i quines proves el sostenen, com es van formar el sistema solar i la Terra, i què vol dir de debò l'escala del temps còsmic. La idea que ho lliga tot: mirar lluny és mirar enrere.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Classifico afirmacions reals sobre l'univers i la vida segons el grau de certesa, justifico cada decisió amb el tipus de prova que la sosté i dic quina prova concreta faria pujar de nivell una afirmació que ara no hi arriba.",
      "Explico el model del Big Bang i argumento per què les tres proves (expansió, radiació de fons i abundància d'hidrogen i heli) el sostenen millor juntes que per separat, i corregeixo la idea que va ser una explosió dins de l'espai.",
      "Relaciono la formació del sistema solar amb un mateix núvol de gas i pols i proposo una explicació de per què els planetes interiors i els exteriors van sortir diferents.",
      "Faig servir el fet que la llum triga a arribar per explicar per què observar l'univers llunyà és observar el passat, i n'extrec una conseqüència sobre els límits del que podem saber."
    ],
    B: [
      "Classifico afirmacions sobre l'univers i la vida en fet ben establert, hipòtesi amb proves, especulació o afirmació no científica, i dic en quina prova em baso.",
      "Explico amb les meves paraules què diu el model del Big Bang i anomeno les tres proves que el sostenen, dient què se'n dedueix de cadascuna.",
      "Explico que el Sol, la Terra i la resta de planetes es van formar fa uns 4.600 milions d'anys a partir d'un mateix núvol de gas i pols.",
      "Situo les fites principals (Big Bang, formació de la Terra, primera vida, primers animals, éssers humans) a la línia del temps còsmica i explico què em sorprèn de l'ordre i de les distàncies.",
      "Explico per què mirar lluny és mirar enrere, a partir del fet que la llum triga a arribar."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: SA7 (final de curs) → bastida baixa; a S29 passarà a "cap".
  scaffoldFade: "baixa",
  apartatExtras: {
    "1": {
      scaffold:
        "Recupera l'escala de certeses de la SA1 i fes servir quatre nivells. FET BEN ESTABLERT: hi ha moltes proves independents, de tipus diferents, i cap resultat seriós que hi vagi en contra. HIPÒTESI AMB PROVES: hi ha proves a favor, però encara no són prou fortes o no s'han confirmat; és el terreny on la ciència treballa ara mateix. ESPECULACIÓ: és possible i no contradiu res, però ara mateix no hi ha cap prova que hi apunti. AFIRMACIÓ NO CIENTÍFICA: està formulada de manera que cap observació la podria desmentir mai, o va contra proves sòlides. La pregunta que decideix el nivell sempre és la mateixa: quina observació concreta la sosté, i quina la desmentiria?",
      challenge:
        "Tria les dues afirmacions que t'hagi costat més de situar i digues, per a cadascuna, quina observació concreta hauria de fer un telescopi o un laboratori perquè pugés de nivell. Després contesta: per què una afirmació que ningú no pot desmentir mai és més feble, i no més forta, que una que es podria desmentir demà?"
    },
    "2": {
      scaffold:
        "El model del Big Bang diu que fa uns 13.800 milions d'anys tot el que existeix era concentrat en un estat extremadament dens i calent, i que des d'aleshores l'univers s'expandeix i es refreda. Compte amb la paraula «bang»: no va ser l'explosió d'una bomba dins d'un espai buit que ja hi era, sinó l'expansió de l'espai mateix; per això no hi ha cap «centre» ni cap lloc concret on va passar. Les tres proves: (1) totes les galàxies llunyanes s'allunyen de nosaltres i com més lluny són, més de pressa ho fan; (2) tot el cel està banyat per una radiació de fons molt freda i molt uniforme, que és la llum més antiga que existeix; (3) la proporció d'hidrogen i heli de l'univers és la que el model prediu.",
      challenge:
        "Cadascuna de les tres proves, tota sola, tindria alguna escletxa. Explica quina objecció es podria posar a la primera prova si només tinguéssim aquesta, i com les altres dues la tanquen. Després corregeix aquesta frase d'un llibre mal escrit: «el Big Bang va ser una explosió gegant que va llançar la matèria cap enfora des d'un punt de l'espai». Digues què hi ha de fals exactament i com ho diries tu."
    },
    "3": {
      scaffold:
        "Ara canvia l'escala: passem de tot l'univers a un racó concret. Fa uns 4.600 milions d'anys, un núvol enorme de gas i pols va començar a contreure's per la gravetat. La major part de la massa va anar al centre i, quan la pressió i la temperatura hi van ser prou altes, s'hi va encendre la fusió nuclear: aquell és el Sol. La resta va quedar girant al voltant en forma de disc, i allà els grans de pols van anar xocant i enganxant-se fins a formar cossos cada cop més grans, que van acabar sent els planetes. Una dada més, que et caldrà: al disc la temperatura no era igual a tot arreu (a prop del Sol feia molta calor i lluny feia molt fred) i els gels i els gasos lleugers només es condensen per sota d'una certa temperatura. La conseqüència important: el Sol, la Terra, la Lluna i tu esteu fets del mateix material i teniu, aproximadament, la mateixa edat.",
      challenge:
        "A prop del Sol hi ha planetes petits i rocosos i lluny n'hi ha de gegants i gasosos. Proposa una explicació d'aquesta diferència a partir de la temperatura del disc: on es podia condensar el gel i on el material lleuger es quedava en forma de gas escalfat i escapava? I una segona pregunta: si tots els planetes s'han format alhora, per què costa tant de datar la Terra amb les roques de la seva pròpia superfície?"
    },
    "4": {
      scaffold:
        "Els números són tan grans que no diuen res fins que no els redueixes. El truc del calendari còsmic és imaginar que els 13.800 milions d'anys són un sol any: l'1 de gener a les 00:00 és el Big Bang i avui és el 31 de desembre a les 24:00. Aleshores cada dia d'aquest calendari equival a 13.800 ÷ 365 = 37,8 milions d'anys. Per situar-hi una fita: resta la seva edat de 13.800, divideix el resultat entre 37,8 i tens els dies transcorreguts; el dia de l'any és aquest número arrodonit cap avall més 1. Les dates concretes de cada fita són la feina de la fitxa: aquí no les trobaràs.",
      challenge:
        "El calendari còsmic amaga una trampa: comprimir el temps fa que sembli que la vida va aparèixer «de seguida» després de formar-se la Terra i que després no va passar gairebé res durant molt de temps. Digues per què aquestes dues lectures són enganyoses (quants milions d'anys hi ha de debò darrere de cada «dia»?) i proposa una manera diferent de representar el temps que no tingui aquest problema.",
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES / REPÀS ─────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de rebre les afirmacions, posem en comú d'on partim. No es corregeix res: serveix per veure què pensem al començament i tornar-hi al final.",
    prompts: [
      {
        kind: "write",
        text: "Escriu una cosa que creguis que la ciència sap del cert sobre l'origen de l'univers, de la Terra o de la vida, i una cosa que creguis que encara no se sap. Com decideixes en quin dels dos sacs va cada cosa?",
        starter: "Crec que se sap del cert que... perquè... En canvi, crec que encara no se sap..."
      }
    ]
  },

  // ── EXPLORA (ABP · comitè editorial: escala de certeses) ──
  exploreActivity: {
    what: "Feu de comitè editorial d'una revista de divulgació científica. Us arriben vuit afirmacions reals que han sortit als mitjans sobre l'univers, la Terra i la vida, i heu de decidir com les publicaríeu. Per a cadascuna heu de dir en quin dels quatre nivells de certesa la col·loqueu, en quina prova us baseu i com la redactaríeu perquè el titular no digués més del que la prova sosté. No busqueu la resposta correcta al llibre: la vostra feina és justificar la decisió. Al final l'equip ha de poder defensar en veu alta les dues afirmacions que li hagin costat més.",
    who: { mode: "grup", label: "Equips de 3-4 (comitè editorial)" },
    time: 25,
    note: "Demostració a l'aula: un membre de cada equip, triat a l'atzar, defensarà sense paper una de les afirmacions dubtoses: en quin nivell l'heu posada, per quina prova, i quina observació la faria pujar de nivell."
  },
  exploreInstructions: [
    "Llegiu les vuit afirmacions i, per a cadascuna, pregunteu-vos: quina observació la sosté i quina la desmentiria?",
    "Col·loqueu cada afirmació en un dels quatre nivells de certesa (fet ben establert · hipòtesi amb proves · especulació · afirmació no científica)",
    "Anoteu, en una línia, la prova concreta en què us baseu per posar-la en aquell nivell",
    "Detecteu les afirmacions on el titular diu més del que la prova sosté i reescriviu-ne el titular",
    "Trieu les dues que us hagin costat més i prepareu-ne la defensa oral"
  ],
  exploreDuration: "25 min",
  appSrc: null,
  exploreNote: "Aquesta activitat recupera directament l'escala de certeses que vau construir a la SA1: la mateixa eina, aplicada ara al tema més gran de tots. Un equip que digui «no ho sabem» sense dir per què no ha acabat la feina.",

  // ── EXPLICA ──────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Quatre graus de ==certesa== (i per què no són el mateix)",
      text: "No tot el que diu la ciència té la mateixa força, i confondre-ho és el que fa que un titular enganyi sense arribar a mentir. Un ==fet ben establert== té moltes proves ==independents== i de tipus diferents que hi apunten, i cap resultat seriós en contra. Una ==hipòtesi amb proves== té indicis a favor però encara no confirmats: és el terreny on la ciència treballa ara mateix. Una ==especulació== és possible i no contradiu res, però encara no hi ha cap prova que hi apunti. I una ==afirmació no científica== és aquella que està feta de manera que ==cap== observació la podria desmentir mai, o que va contra proves sòlides. La pregunta que decideix el nivell és sempre la mateixa: ==quina prova== la sosté i quina la ==desmentiria==?",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "El ==Big Bang== i les tres proves que el sostenen",
      text: "El model del ==Big Bang== diu que fa uns ==13.800 milions d'anys== tot el que existeix estava concentrat en un estat extremadament ==dens== i ==calent==, i que des d'aleshores l'univers s'==expandeix== i es ==refreda==. Atenció a una confusió molt estesa: no va ser una ==explosió== dins d'un espai que ja hi era, sinó l'expansió de l'==espai== mateix, i per això no té ==centre==. Tres proves independents el sostenen: (1) l'==expansió==: totes les galàxies llunyanes s'allunyen i com més lluny són, més de pressa ho fan, cosa que, mirada enrere, vol dir que abans estaven més ==juntes==; (2) la ==radiació còsmica de fons==, una llum molt freda i molt uniforme que banya tot el cel i que és la llum més ==antiga== que existeix; (3) l'==abundància== d'hidrogen i heli de l'univers, que coincideix amb la que el model prediu. Cap prova sola seria concloent: la força ve que ==tres proves diferents== apunten al mateix.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Del núvol de pols al ==sistema solar==: com es va fer la Terra",
      text: "Fa uns ==4.600 milions d'anys==, en un racó d'una galàxia corrent, un núvol de ==gas i pols== va començar a contreure's per la ==gravetat==. La major part de la massa va anar al centre fins que s'hi va encendre la ==fusió nuclear==: aquell és el ==Sol==. La resta va quedar girant en un ==disc==, i allà els grans de pols van xocar i enganxar-se en cossos cada cop més grans fins a formar els ==planetes==. A prop del Sol feia massa calor perquè els gels i els gasos lleugers s'hi quedessin, i per això hi van resultar planetes petits i ==rocosos==; lluny, en canvi, es van formar els ==gegants gasosos==. La conseqüència que costa d'assimilar: el Sol, la Terra, la Lluna i els àtoms del teu cos venen del ==mateix== núvol i tenen aproximadament la mateixa ==edat==.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Mirar ==lluny== és mirar ==enrere==",
      text: "Com pot la ciència saber res d'un passat que ningú no va veure? En el cas de l'univers, la resposta és sorprenentment directa: la ==llum== no és instantània, triga a arribar. La llum del Sol tarda uns ==8 minuts== a arribar-nos; la de l'estel més proper, uns ==4 anys==; la de les galàxies més llunyanes que veu el telescopi ==James Webb==, més de ==13.000 milions d'anys==. Això vol dir que quan mirem lluny no veiem com són aquells objectes ==ara==, sinó com eren quan la llum va sortir: el cel és un ==arxiu== del passat. Per això l'astronomia pot ==observar== èpoques antiquíssimes sense cap testimoni. I per això, també, hi ha coses que ==no== podrem observar mai, i sobre les quals la ciència honesta diu que ==explora==, no que ==afirma==.",
      type: "epistemic",
      badge: "🧭 Naturalesa de la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "L'escala de certeses (amb un exemple resolt)", src: "/images/sa7-s1-escala-certeses.svg", note: "Els quatre nivells amb la pregunta que decideix cadascun. L'exemple resolt de sota és d'un tema que no surt a les vuit afirmacions de la fitxa: et serveix per veure el nivell de detall que s'espera, no per copiar-ne la resposta." },
    { id: "Fig.2", apartat: "2", before: true, title: "Les tres proves del Big Bang (per completar)", src: "/images/sa7-s1-bigbang-alumne.svg", note: "És la figura de la fitxa: les tres observacions les tens donades i les caselles grogues les omples tu, primer sol i després, amb un altre color, quan ho hàgim explicat. La versió amb les deduccions escrites la reparteixo a classe en acabar." },
    { id: "Fig.3", apartat: "4", before: false, title: "El calendari còsmic: com es fa el càlcul", src: "/images/sa7-s1-calendari.svg", note: "Com es transforma una edat en milions d'anys en una data del calendari còsmic, amb una fita resolta com a mostra del càlcul. Aquesta fita d'exemple no és cap de les set que has de situar tu." },
    { id: "Fig.4", apartat: "4", before: false, title: "La línia del temps còsmica (en blanc)", src: "/images/sa7-s1-linia-temps-alumne.svg", note: "És la línia buida de la fitxa, aquí per si has faltat: l'any còsmic sencer, mes a mes. Les targetes de les fites són al full de retallables que reparteixo a classe." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa7-s1-fitxa-A.html", B: "/fitxes/sa7-s1-fitxa-B.html" },
  retallablesUrl: "/fitxes/sa7-s1-retallables.html",
  teoriaPdfUrl: null,
  elaborateNote: "Construeix la teva línia del temps còsmica: retalla les targetes de fites del full de retallables i enganxa-les al lloc que els correspon de la línia, calculant abans on van. Al costat de cada fita, escriu en poques paraules quina mena de prova ens permet saber-ho. Aquesta línia del temps és la primera peça del producte final de la situació.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S26 — Estem sols?",
    steps: [
      { apartat: "0", title: "D'on partim", time: "6 min", phase: "engage", instruction: "Escriu una cosa que creguis que se sap del cert sobre l'origen de tot i una que creguis que encara no se sap, i com ho decideixes. No es corregeix.", hints: [] },
      { apartat: "1", title: "El comitè editorial", time: "25 min + 8 de defensa oral", phase: "explore", instruction: "Classifica les vuit afirmacions en els quatre nivells de certesa, anota la prova en què et bases i reescriu els titulars que diuen més del que la prova sosté.", hints: ["Abans de decidir el nivell, respon dues preguntes per escrit: quina observació la sosté? i quina la desmentiria?", "Separa sempre què s'ha observat de debò i què hi afegeix qui ho explica."] },
      { apartat: "2", title: "El Big Bang i la llum que triga a arribar", time: "20 min", phase: "explain", instruction: "Completa la figura muda de les tres proves ABANS de l'explicació de classe: per a cada observació, escriu què se'n dedueix. Després, amb un altre color, corregeix-la, esmena la frase que diu que va ser una explosió dins de l'espai i respon per què mirar lluny és mirar enrere.", hints: ["Pregunta't què implica, mirat cap enrere, el que observes ara.", "Cada prova sola deixa alguna porta oberta: quina, i qui la tanca?"] },
      { apartat: "3", title: "Com es va fer la Terra", time: "8 min", phase: "explain", instruction: "Explica en poques frases com es passa d'un núvol de gas i pols al Sol i als planetes, i per què els de dins són rocosos i els de fora gasosos.", hints: ["Segueix la massa: on va a parar la major part, i què hi passa quan s'hi acumula?", "Mira la dada de la temperatura del disc i pensa què s'hi pot quedar i què no."] },
      { apartat: "4", title: "La línia del temps còsmica", time: "30 min", phase: "elabora", instruction: "Calcula la data còsmica de cada fita, marca-la a la línia i enganxa-hi la targeta del full de retallables; després digues quina mena de prova ens permet saber-ho.", hints: ["Comença sempre pel temps transcorregut des del Big Bang, no per l'edat de la fita.", "Compte amb l'última fita: no et donarà un dia nou, sinó una hora."] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Un titular diu: «Un telescopi troba vida en un planeta llunyà». La notícia explica que s'ha detectat un senyal feble d'una molècula que a la Terra produeixen sobretot éssers vius, i que cal confirmar-lo. En quin nivell de certesa situaries l'afirmació del titular i quina observació concreta la faria pujar de nivell?", hint: "Separa primer què s'ha observat de debò i què hi afegeix el titular; després pensa quina observació nova caldria." },
    { id: "q2", type: "multiple", text: "Quina de les quatre frases descriu millor què diu el model del Big Bang?", options: ["Una explosió va llançar la matèria cap enfora des d'un punt concret de l'espai", "L'espai mateix s'expandeix des d'un estat molt dens i calent, i per això no hi ha cap centre", "L'univers sempre ha tingut la mida que té ara, però s'ha anat refredant", "La matèria va aparèixer de cop al centre de la nostra galàxia i s'ha anat escampant"], correct: 1 },
    { id: "q3", type: "open", text: "El teu germà petit et diu que és impossible saber res de fa milers de milions d'anys perquè no hi havia ningú per veure-ho. Respon-li amb l'argument de la llum, posant un exemple concret amb un número.", hint: "Pensa en quant triga a arribar la llum del Sol i en què veu el telescopi James Webb quan mira molt lluny." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Torna a llegir el que has escrit a l'apartat 0 sobre com decideixes si una cosa se sap o no se sap. Canviaries alguna cosa de la teva resposta ara? Quina de les vuit afirmacions t'ha fet dubtar més, i què has necessitat per decidir-te? I l'última: després d'una sessió sobre 13.800 milions d'anys, quina pregunta t'endus a casa?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Cap.",
    deadline: null,
    note: "Aquesta setmana no hi ha feina per a casa: a la propera sessió farem la simulació de la semivida amb daus per entendre com es data l'edat de la Terra, i tot el material es reparteix a classe. Si vols avançar, guarda la notícia sobre l'exploració de l'espai que vas portar de la sessió anterior: la farem servir."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: els quatre graus de certesa, el model del Big Bang i les seves tres proves, la formació del sistema solar i la idea que mirar lluny és mirar enrere",
    "Estudia la Fig.1 (l'escala de certeses amb un exemple resolt), la Fig.2 (les tres proves del Big Bang) i la Fig.3 (com es calcula una data del calendari còsmic)",
    "Demana la fitxa S26 i el full de retallables, i completa la classificació de les vuit afirmacions i la línia del temps còsmica",
    "Respon l'exit tiquet: en quin nivell situaries un titular sobre vida en un exoplaneta, quina frase descriu bé el Big Bang i com respondries que sí que es pot saber què va passar sense testimonis",
    "Comprova que entens la diferència entre els 13.800 milions d'anys de l'univers i els 4.600 milions d'anys de la Terra: a la propera sessió es dona per sabuda"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA4"],
  competencies: ["CE1", "CE2"],
  criterisAvaluacio: ["1.1", "2.1", "2.2"]
}
