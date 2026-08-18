export const sa6s3 = {
  id: "s3",
  saId: "sa6",
  title: "Llegir la història a les roques",
  sessionNumber: 3,
  biome: "sa6",
  duration: "2h",
  engageImage: "/images/sa6-s3-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "A la sessió anterior vas ordenar una columna d'estrats fàcil: capes horitzontals, una a sobre de l'altra, i el principi de superposició ho resolia tot. Però la realitat gairebé mai és tan amable. En un talús de carretera dels Ports pots trobar capes inclinades, tallades per una esquerda que les desplaça, travessades per una llengua de roca fosca que abans era magma, i amb un tros de la història que senzillament no hi és. Cap geòloga hi era per veure-ho. I tot i així, en pot reconstruir l'ordre exacte. Avui aprendràs com: amb quatre principis i uns quants fòssils. En acabar sabràs mirar una paret de roca i llegir-hi una història de milions d'anys.",
  engageQuestion: "Mira un tall de roques on una capa n'està tallada per una esquerda i, més amunt, hi ha capes que no estan tallades. Què va passar abans: la capa o l'esquerda? Com ho pots saber sense haver-hi estat? I una pregunta més difícil: si trobes la mateixa espècie de fòssil en dues roques separades per un oceà, què en pots deduir?",
  engageContext: "Aquesta és una sessió de desenvolupament i és el cor de la teva feina com a geòleg de Gondwana Tales. Fins ara has descobert que les plaques es mouen (S21) i per què es mouen (S22). Ara has de descobrir QUAN va passar cada cosa, perquè sense ordre no hi ha història. Treballaràs amb un tall geològic complet del teu planeta i amb un joc de fitxes de fòssils guia: hauràs d'ordenar tots els esdeveniments —dipòsits, plegaments, falles, intrusions, erosions— i correlacionar dues columnes de dos continents ara separats per demostrar que van estar junts. Acabaràs aplicant-ho a un paisatge que coneixes: per què hi ha fòssils de mar a dalt del Mont Caro?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Justifico per què podem interpretar roques del passat a partir de processos que observem avui (actualisme) i reconec quan cal recórrer a esdeveniments sobtats i excepcionals (neocatastrofisme).",
      "Dedueixo l'ordre complet dels esdeveniments d'un tall geològic complex —incloent-hi plecs, falles, intrusions i discordances— aplicant els principis geològics i argumentant cada decisió amb el principi que la sosté.",
      "Explico què fa que un fòssil sigui un bon fòssil guia i el faig servir per correlacionar columnes de llocs allunyats, distingint la datació relativa (l'ordre) de l'absoluta (els anys) i situant els esdeveniments a l'escala del temps geològic.",
      "Reconstrueixo la història d'un paisatge concret a partir de la seva litologia i els seus fòssils, relacionant els elements del paisatge entre si i justificant com hi han influït els esdeveniments geològics i biològics del passat."
    ],
    B: [
      "Explico el principi d'actualisme («el present és la clau del passat») i el faig servir per dir en quin ambient es va formar una roca a partir del que veig passar avui.",
      "Ordeno els esdeveniments d'un tall geològic amb els principis de superposició, horitzontalitat i intersecció (el que talla és més jove que el que és tallat), indicant quin principi faig servir a cada pas.",
      "Identifico un fòssil guia a partir de les seves característiques i el faig servir per dir que dues capes de llocs diferents tenen la mateixa edat.",
      "Descric, amb el suport de la figura, quin ambient hi havia en un lloc a partir del tipus de roca i dels fòssils que conté, i explico un canvi del paisatge al llarg del temps."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: SA6 (3r trimestre) → bastida baixa.
  scaffoldFade: "baixa",
  apartatExtras: {
    "1": {
      scaffold:
        "L'actualisme diu: «el present és la clau del passat». No podem veure com es va formar una roca fa 200 milions d'anys, però SÍ que podem veure com es formen les capes AVUI: un riu diposita sorra al seu llit, un mar tranquil diposita fang i closques al fons, un volcà escampa cendra. Si trobem una roca feta de sorra amb marques d'ones, deduïm que allà hi havia un riu o una platja, perquè és el que passa ara. Fes servir aquesta idea: mira la roca, pensa on es formaria una cosa igual avui.",
      challenge:
        "L'actualisme funciona perquè suposem que les lleis de la natura no han canviat. Però hi ha esdeveniments que no veiem passar avui i que han deixat marca (l'impacte d'un asteroide, una erupció gegant, una inundació catastròfica): és el que s'anomena neocatastrofisme. Explica per què l'actualisme sol no n'hi ha prou, i posa un exemple d'una roca o una capa que NO podries explicar només amb processos lents i quotidians."
    },
    "2": {
      scaffold:
        "Quatre principis, en aquest ordre de treball. (1) HORITZONTALITAT: els sediments es dipositen en capes horitzontals; si les trobes inclinades o plegades, algú les ha mogut DESPRÉS. (2) SUPERPOSICIÓ: si no s'han capgirat, la capa de sota és més antiga. (3) INTERSECCIÓ: una falla o una llengua de magma (dic) que TALLA unes capes és més JOVE que totes les capes que talla. (4) DISCORDANÇA: una superfície d'erosió entremig vol dir que allà hi falta temps —el terreny va emergir i es va erosionar abans que hi tornés a caure sediment. Regla d'or: primer es diposita, després es deforma o es talla.",
      challenge:
        "Ordena el tall sencer i escriu, al costat de cada pas, el principi que t'ho permet afirmar. Després pensa en el que NO pots saber: els principis et donen l'ORDRE, però no els anys. Digues quins dos esdeveniments del teu tall podries situar amb seguretat un abans de l'altre i quins dos no podries ordenar amb els principis sols, i explica què et faria falta per resoldre-ho."
    },
    "3": {
      scaffold:
        "Un bon fòssil guia compleix quatre condicions: (1) l'espècie va viure poc temps (així marca un moment concret i no una època sencera); (2) es va escampar per molts llocs (així el pots trobar a continents diferents); (3) era abundant; (4) és fàcil de reconèixer. Si el mateix fòssil guia surt en dues capes molt allunyades, aquelles dues capes tenen la mateixa edat: això es diu correlacionar. Compte amb la diferència: datació RELATIVA = l'ordre (quin abans i quin després); datació ABSOLUTA = els anys, i s'obté amb la radioactivitat de certs minerals.",
      challenge:
        "Un company proposa fer servir com a fòssil guia un mol·lusc que va viure 300 milions d'anys seguits i només en una badia. Explica per què és mal fòssil guia i quines dues condicions incompleix. Després fes servir la correlació al revés, com Wegener: si el mateix rèptil terrestre fòssil apareix a dos continents avui separats per un oceà, quines dues explicacions alternatives hi ha i quina és més econòmica? Com decidiries entre les dues?"
    },
    "4": {
      scaffold:
        "Per reconstruir un paisatge, tradueix cada capa a un ambient: calcària amb corals o closques → mar càlid i poc profund; gres (sorra endurida) amb marques d'ones → platja o riu; argila fosca amb fulles → llacuna o aiguamoll tranquil; capa de cendra → un volcà a prop. Llegeix la columna de baix a dalt i explica com anava canviant el lloc: «primer hi havia mar, després es va omplir de sediments de riu, després…». Els fòssils marins que ara són dalt d'una muntanya no hi van pujar: la muntanya els va aixecar. I la roca no només explica el passat: també mana sobre el present. La calcària s'esquerda i es dissol amb l'aigua de pluja, de manera que l'aigua s'escola cap endins (per això als Ports hi ha avencs, fonts i barrancs secs bona part de l'any) i el sòl que hi queda a sobre és prim i pedregós: per això hi creixen pins, garric i romaní i no pas un bosc espès.",
      challenge:
        "El paisatge que veus avui és el resultat acumulat de tot el que ha passat, i els seus elements es condicionen mútuament: el tipus de roca decideix el relleu (la calcària dura fa cingles i parets), el relleu i el fet que la roca deixi passar l'aigua o no decideixen on va a parar l'aigua, l'aigua i el gruix del sòl decideixen quina vegetació hi creix, i la vegetació frena o accelera l'erosió de la roca. Tria un tram del paisatge de les Terres de l'Ebre (els Ports, la serra del Montsià, el delta) i justifica'n la història: quina roca hi ha, què vol dir sobre el passat, quin procés la va posar on és ara, i com aquesta roca explica el relleu i la vegetació d'avui."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES / REPÀS ─────────────────────
  ideesPrevies: {
    startPoint:
      "Posem en comú les fotos de talls geològics que heu buscat a casa (un talús de carretera, un penya-segat, una pedrera). Quantes capes hi heu identificat? Quina heu dit que era la més antiga i per què? Avui posarem a prova aquest criteri amb casos on la superposició sola no basta.",
    prompts: [
      {
        kind: "write",
        text: "A la foto de talls de roques que has portat, quina capa has dit que és la més antiga i amb quin argument? Ara pensa-hi: totes les capes eren horitzontals? Hi havia alguna esquerda o alguna cosa que en tallés unes altres?",
        starter: "A la meva foto la capa més antiga és... perquè... Les capes (sí / no) eren horitzontals, i he vist que..."
      }
    ]
  },

  // ── EXPLORA (ABP · el tall geològic del planeta) ──────────
  exploreActivity: {
    what: "En equip, sou l'equip de datació de la missió Gondwana Tales. Rebeu un TALL GEOLÒGIC complet del planeta —amb capes inclinades, una falla, un dic de magma i una superfície d'erosió— i un joc de FITXES DE FÒSSILS GUIA amb una nota de camp que descriu la roca on es va trobar cadascuna. La vostra feina té dues parts. Primera: reconstruir l'ordre complet dels esdeveniments del tall, justificant cada pas amb el principi geològic que el sosté. Segona: agafar dues columnes de dos continents del planeta que avui estan separats per un oceà i, col·locant-hi les fitxes de fòssils guia, demostrar quines capes tenen la mateixa edat. Si les mateixes espècies terrestres apareixen als dos costats, teniu una prova independent que aquells continents van estar units —la mateixa prova que va fer servir Wegener.",
    who: { mode: "grup", label: "Equips de 3-4 (equip de datació)" },
    time: 45,
    note: "No busqueu la resposta bona a la primera: busqueu poder DEFENSAR-LA. Cada afirmació d'ordre ha d'anar acompanyada del principi que la justifica. Un ordre sense argument no val res en geologia.",
  },
  exploreInstructions: [
    "Observeu el tall geològic sencer abans de tocar res: quantes capes hi ha, n'hi ha d'inclinades, hi ha alguna cosa que en talli unes altres?",
    "Apliqueu la superposició a les capes que no estan tallades ni deformades i numereu-les de la més antiga a la més moderna",
    "Localitzeu la falla i el dic de magma: com que TALLEN capes, són més joves que tot el que tallen. Situeu-los a la vostra seqüència",
    "Busqueu la superfície d'erosió (discordança): què hi falta? Què hi va passar entremig?",
    "Retalleu les fitxes de fòssils guia i deduïu, a partir de la nota de camp, a quina capa exacta de cada columna va aparèixer cada espècie",
    "Correlacioneu: quines capes dels dos continents tenen la mateixa edat? Quina prova en treieu sobre la posició d'aquells continents en el passat?",
    "Escriviu la història completa del tall en 5-6 frases ordenades, cadascuna amb el principi que la justifica"
  ],
  exploreDuration: "45 min",
  exploreMaterials: ["Tall geològic del planeta (a la fitxa)", "Full de retallables: fitxes de fòssils guia", "Tisores i cola de barra", "Regle"],
  exploreNote: "Demostració a l'aula: cada equip presenta la seva seqüència d'esdeveniments davant del tall projectat i ha de justificar amb quin principi ha decidit cada pas. Si dos equips discrepen en un pas, es discuteix amb els principis a la mà, no per votació.",

  // ── EXPLICA ──────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "L'==actualisme==: el present és la clau del passat",
      text: "Ningú no era aquí fa 200 milions d'anys, però sí que podem mirar què passa ==avui==. Un riu diposita ==sorra== al seu llit; un mar tranquil diposita ==fang== i closques al fons; un volcà escampa ==cendra==. Si suposem que les ==lleis== de la natura eren les mateixes abans que ara —això és l'==actualisme==—, aleshores una roca de sorra endurida amb marques d'==ones== ens diu que allà hi havia una platja o un riu. Aquesta idea, de James ==Hutton== i Charles ==Lyell==, és la que converteix les roques en un ==document== llegible. Ara bé, no tot passa a poc a poc: hi ha esdeveniments ==sobtats== i rars —un impacte d'asteroide, una erupció gegant— que també deixen la seva capa. Tenir-los en compte és el ==neocatastrofisme==. Els dos junts expliquen millor el registre que qualsevol dels dos sol.",
      type: "epistemic",
      badge: "🧭 Naturalesa de la ciència"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Els ==principis== per posar ordre al temps",
      text: "Amb quatre regles pots ordenar gairebé qualsevol tall. ==HORITZONTALITAT==: els sediments es dipositen en capes ==horitzontals==; si les trobes inclinades o plegades, és perquè les plaques les han mogut ==després== de dipositar-se. ==SUPERPOSICIÓ==: si la sèrie no s'ha capgirat, la capa de ==sota== és més ==antiga== que la de sobre. ==INTERSECCIÓ==: qualsevol cosa que en ==talla== una altra —una ==falla==, un ==dic== de magma que travessa les capes— és més ==jove== que tot allò que talla. I la ==DISCORDANÇA==: una superfície d'==erosió== entremig de la sèrie vol dir que aquell terreny va ==emergir==, es va erosionar durant molt de temps i després hi van tornar a caure sediments: és un tros de la història que ==falta==. Amb això obtens la datació ==relativa==, l'ordre. Per als ==anys== fa falta la datació ==absoluta==, que es mesura amb la ==radioactivitat== de certs minerals.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Els ==fòssils guia==: rellotges que es poden portar d'un continent a l'altre",
      text: "Un ==fòssil guia== és una espècie que serveix per posar ==edat== a una capa. Per fer-ho bé ha de complir quatre condicions: haver viscut poc ==temps== (així marca un moment concret), haver-se escampat per molts ==llocs==, haver estat ==abundant== i ser fàcil de ==reconèixer==. Quan trobes el mateix fòssil guia en dues capes separades per centenars de quilòmetres, pots afirmar que tenen la mateixa ==edat==: això és ==correlacionar==. Amb aquest mètode s'ha construït l'escala del ==temps geològic== —Proterozoic, ==Paleozoic==, ==Mesozoic==, ==Cenozoic==—, que és el calendari compartit de tots els geòlegs. I aquí es tanca el cercle de la sessió 1: quan Wegener va veure el mateix ==Mesosaurus== —un rèptil d'aigua dolça que no podia travessar cap oceà— a Sud-amèrica i a l'Àfrica, no estava mirant dos animals: estava mirant una ==prova== que aquells dos continents havien estat ==junts==.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "De les roques al ==paisatge==: reconstruir una història",
      text: "Cada capa és una ==escena==. Una ==calcària== plena de corals o closques et diu que allà hi havia un mar ==càlid== i poc profund. Un ==gres== amb marques d'ones, una platja o un ==riu==. Una argila fosca amb fulles, una ==llacuna== tranquil·la. Una capa de ==cendra==, un volcà a prop. Llegint-les de baix a dalt reconstrueixes com anava ==canviant== aquell lloc. I això explica coses que semblen impossibles: al ==Mont Caro==, als Ports, a més de 1.400 m d'altitud, hi ha ==calcàries== del ==Mesozoic== amb fòssils ==marins==. Aquells animals no van pujar a la muntanya: la ==muntanya== els va ==aixecar==, quan la col·lisió de plaques va plegar el fons d'aquell mar. Al ==delta== de l'Ebre, en canvi, les capes són ==recents== i toves, perquè el riu encara les hi està deixant. El paisatge d'avui —el relleu, on va l'aigua, quina vegetació hi creix— és el resultat ==acumulat== de tot això, i cada element hi ==influeix== sobre els altres.",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: false, title: "De la roca a l'ambient: llegir el paisatge del passat", src: "/images/sa6-s3-ambients.svg", note: "Quatre tipus de roca amb els seus fòssils i l'ambient que representen, deduït per actualisme: calcària amb ammonits i closques (mar càlid poc profund), gres amb marques d'ones (platja o riu), argila amb fulles (llacuna) i cendra volcànica (volcà a prop)." },
    { id: "Fig.2", apartat: "2", before: false, title: "Exemple resolt: com s'ordena un tall geològic", src: "/images/sa6-s3-tall.svg", note: "Un tall d'exemple, diferent del que treballaràs a la fitxa, resolt pas a pas amb el principi que justifica cada decisió. Fixa't també en l'última caixa: els principis donen l'ordre, però hi ha parelles d'esdeveniments que no es poden ordenar perquè no es tallen entre ells." },
    { id: "Fig.3", apartat: "3", before: false, title: "Exemple de correlació amb fòssils guia", src: "/images/sa6-s3-correlacio.svg", note: "Dos jaciments molt allunyats. Les capes que contenen el mateix fòssil guia tenen la mateixa edat i es poden unir amb una línia de correlació, encara que el gruix i el tipus de roca siguin ben diferents." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa6-s3-fitxa-A.html", B: "/fitxes/sa6-s3-fitxa-B.html" },
  retallablesUrl: "/fitxes/sa6-s3-retallables.html",
  teoriaPdfUrl: null,
  elaborateNote: "A la fitxa reconstruiràs la història d'un paisatge concret: primer el tall del teu planeta i després un cas real i proper, el dels Ports i el delta de l'Ebre. Aquesta és exactament la feina que hauràs de mostrar al vídeo divulgatiu «Gondwana Tales»: explicar què va passar i, sobretot, com ho saps.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S23 — Llegir la història a les roques",
    steps: [
      { apartat: "0", title: "La teva foto de roques", time: "10 min", phase: "engage", instruction: "Comparteix la foto del tall que has buscat a casa i digues quina capa creus que és la més antiga i amb quin argument. No es corregeix.", hints: [] },
      { apartat: "1", title: "Actualisme: llegir amb els ulls d'avui", time: "15 min", phase: "explain", instruction: "Fes servir el que veus passar avui (rius, mars, volcans) per deduir en quin ambient es va formar cada roca. Fes servir la Fig.1.", hints: ["El present és la clau del passat.", "Pregunta't: on es formaria avui una roca com aquesta?"] },
      { apartat: "2", title: "Ordenar el tall geològic", time: "35 min", phase: "explore", instruction: "Aplica els quatre principis al tall del planeta i escriu la seqüència completa d'esdeveniments, indicant a cada pas quin principi la justifica.", hints: ["El que talla és més jove que el que és tallat.", "Si les capes són inclinades, algú les ha mogut després de dipositar-les.", "Una superfície d'erosió és temps que falta."] },
      { apartat: "3", title: "Fòssils guia i correlació", time: "25 min", phase: "explore", instruction: "Retalla les fitxes de fòssils guia del full a part, col·loca-les a les dues columnes i uneix les capes de la mateixa edat. Digues quina prova en treus sobre la posició dels continents.", hints: ["Bon fòssil guia: poc temps, molts llocs, abundant, fàcil de reconèixer.", "Un rèptil terrestre no travessa un oceà nedant."] },
      { apartat: "4", title: "La història d'un paisatge real", time: "20 min", phase: "elabora", instruction: "Aplica-ho als Ports i al delta de l'Ebre: per què hi ha fòssils marins a dalt del Mont Caro i per què el delta és pla i tou?", hints: ["Els fòssils no van pujar: la muntanya els va aixecar.", "El delta encara s'està formant avui."] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "multiple", text: "En un tall hi ha tres capes horitzontals (A a baix, B al mig, C a dalt) i una falla que talla A i B però NO arriba a C. Quin és l'ordre correcte?", options: ["Primer la falla, després A, B i C", "Primer A i B, després la falla, i finalment C", "Primer A, B i C, i la falla al final de tot", "No es pot saber amb els principis geològics"], correct: 1 },
    { id: "q2", type: "open", text: "Trobes la mateixa espècie de fòssil de rèptil terrestre en una capa del Brasil i en una de Namíbia, a l'altre costat de l'Atlàntic. Quines dues coses en pots deduir? Digues quina és la deducció sobre l'EDAT i quina sobre la POSICIÓ dels continents.", hint: "Sobre l'edat: les dues capes es van formar en el mateix moment (correlació amb fòssil guia). Sobre la posició: un rèptil terrestre no travessa un oceà, així que aquells dos continents havien d'estar units quan aquell animal hi vivia." },
    { id: "q3", type: "open", text: "Al Mont Caro, a 1.441 m d'altitud, hi ha roques calcàries amb fòssils marins. Explica com hi han arribat, fent servir l'actualisme i el que saps de la tectònica de plaques.", hint: "La calcària amb fòssils marins es forma al fons d'un mar càlid i poc profund (actualisme). Després, el xoc de plaques va plegar i aixecar aquell fons marí fins a convertir-lo en muntanya. Els fòssils no van pujar: va pujar la roca." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Quan has ordenat el tall geològic, quin pas t'ha costat més de decidir? Hi ha hagut algun moment en què el teu equip no es posava d'acord i el principi geològic ho ha resolt? Ara mira enrere: fa dues sessions et semblava possible saber què va passar en un lloc fa milions d'anys sense que ningú hi fos? Què t'ha convençut que sí que es pot?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Busca un risc natural del teu territori (les Terres de l'Ebre o la teva comarca): un terratrèmol, una inundació, una esllavissada, un incendi que va provocar esllavissades després… Anota on va passar, quan, què va provocar i, si ho trobes, per què va passar just allà.",
    deadline: null,
    note: "Serà el punt de partida de la propera sessió, on passarem de reconstruir el passat a analitzar els riscos del present al nostre propi territori."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: l'actualisme, els quatre principis geològics (horitzontalitat, superposició, intersecció i discordança), els fòssils guia i la correlació, i com es reconstrueix un paisatge",
    "Estudia les tres figures d'aquesta pàgina: de la roca a l'ambient, l'exemple resolt d'un tall geològic pas a pas, i l'exemple de correlació amb fòssils guia (compte: la numeració de figures de la fitxa és la seva pròpia)",
    "Fixa't especialment en la regla d'intersecció: el que talla és sempre més jove que el que és tallat",
    "Descarrega la fitxa S23 i el full de retallables, i completa l'ordenació del tall i la correlació de les dues columnes",
    "Respon l'exit tiquet: l'ordre d'una falla respecte a les capes, la deducció dels fòssils guia a banda i banda de l'Atlàntic i el cas dels fòssils marins del Mont Caro",
    "Fes la feina de casa: busca un risc natural del teu territori per a la propera sessió"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA2"],
  competencies: ["CE1", "CE6"],
  criterisAvaluacio: ["1.1", "6.1", "6.2", "6.5"]
}
