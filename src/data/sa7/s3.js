export const sa7s3 = {
  id: "s3",
  saId: "sa7",
  title: "D'on va sortir la vida?",
  sessionNumber: 3,
  biome: "sa7",
  duration: "2h",
  engageImage: "/images/sa7-s3-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "El 1953, un estudiant de vint-i-tres anys va tancar dins d'un aparell de vidre allò que aleshores es creia que hi havia a la Terra primitiva: aigua, tres gasos i cap ésser viu. Ho va fer bullir i hi va deixar passar descàrregues elèctriques durant una setmana, imitant els llamps. Quan va obrir l'aparell, el líquid s'havia tornat marró i, dins d'aquell fang, hi havia aminoàcids: les peces amb què estan fetes les proteïnes de tots els éssers vius, la teva inclosa. Els diaris de l'època van titular que s'havia creat vida al laboratori. Ell no va dir mai això. Avui la teva feina no és saber qui va guanyar aquella discussió, sinó una altra: aprendre a mesurar la distància que hi ha entre el que un experiment ensenya i el que la gent en llegeix.",
  engageQuestion: "Imagina que damunt d'una taula hi tens totes les peces d'una bicicleta, escampades. Tens una bicicleta? A la sessió d'avui aquesta pregunta no és cap acudit: és exactament el problema que separa l'experiment de 1953 de l'origen de la vida. Escriu, abans de començar, què creus que li falta a un munt de molècules per poder dir que allò ja és un ésser viu.",
  engageContext: "Aquesta sessió és de desenvolupament i no acaba amb una resposta, sinó amb un rànquing raonat. Actuareu com el comitè avaluador d'un congrés d'astrobiologia: rebreu quatre propostes que expliquen d'on va sortir la vida, més una cinquena que no és una proposta científica encara que ho sembli, i un dossier de proves escampades. Haureu de posar cada prova al seu lloc, dir què explica cada hipòtesi i què encara no explica, i ordenar-les per fonamentació. La feina de casa de la sessió anterior —dues hipòtesis, amb una prova i un forat— és el vostre punt de partida i l'haureu de defensar en veu alta.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Comparo les hipòtesis sobre l'origen de la vida distingint tres problemes diferents que han de resoldre (el compartiment, l'energia i la informació que es copia) i argumento quina proposta ataca quin problema.",
      "Argumento per què dues hipòtesis sobre l'origen de la vida poden no ser excloents i quina mena de prova caldria per decidir entre dues que sí que ho són.",
      "Avaluo la fonamentació de cada hipòtesi i formulo, per a la que trio, una observació o un experiment concret que la faria pujar o baixar de nivell de certesa.",
      "Justifico per què una afirmació que cap observació no podria contradir queda fora de la ciència, i explico per què això no equival a dir que sigui falsa.",
      "Analitzo críticament la font que he fet servir a casa (autoria, institució, intenció, verificabilitat) i la cito correctament."
    ],
    B: [
      "Explico què va obtenir realment l'experiment de Miller-Urey i què NO va obtenir, i distingeixo «fabricar les peces» de «fabricar un ésser viu».",
      "Descric les tres hipòtesis principals sobre l'origen de la vida (sopa primordial, món ARN i fumaroles hidrotermals) i dic una prova a favor i un forat de cadascuna.",
      "Explico per què la panspèrmia no respon del tot la pregunta, sinó que la trasllada a un altre lloc.",
      "Distingeixo una hipòtesi científica (es pot posar a prova) d'una afirmació que no ho és (cap observació no la podria contradir).",
      "Ordeno les hipòtesis segons com estan de fonamentades i justifico l'ordre amb les proves del dossier, no amb el que m'agrada més.",
      "Comprovo si la font que he fet servir a casa és fiable amb la graella de la SA1 i la cito."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: SA7 (final de curs) → bastida baixa; a S29 passarà a "cap".
  scaffoldFade: "baixa",
  apartatExtras: {
    "1": {
      scaffold:
        "Per llegir bé la Fig.1, segueix el camí del líquid amb el dit: on s'escalfa, per on puja el vapor, on rep les descàrregues i on es torna a refredar i s'acumula. Un cop tinguis clar el recorregut, la pregunta important no és com funcionava l'aparell, sinó quina diferència hi ha entre les dues frases següents: «s'han format molècules pròpies dels éssers vius» i «s'ha format un ésser viu». Torna a l'exemple de les peces de bicicleta si et perds.",
      challenge:
        "L'experiment de 1953 partia d'una atmosfera plena de metà i amoníac, i avui s'accepta que la primitiva devia tenir sobretot diòxid de carboni i nitrogen. Davant d'això hi ha tres reaccions possibles: llençar la hipòtesi, ignorar l'objecció o modificar la hipòtesi. Decideix quina va ser la reacció de la comunitat científica i, sobretot, escriu quin criteri fa que modificar una hipòtesi sigui honest en un cas i una trampa en un altre."
    },
    "2": {
      scaffold:
        "Cada targeta del dossier té un sol destí. Per col·locar-la, fes-te dues preguntes en aquest ordre. Primera: de quina de les quatre propostes parla? (Busca la paraula clau: llamps i gasos → sopa primordial; ARN → món ARN; fons del mar, xemeneies o calor sense llum → fumaroles; meteorit o espai → panspèrmia.) Segona: aquesta targeta ajuda la proposta o li fa un forat? Ajuda si el que s'hi explica dona suport a l'escenari; li fa un forat si el que s'hi explica no encaixa amb el que la proposta necessitaria, o si diu que una cosa que faria falta encara no s'ha aconseguit. Una de les nou targetes no encaixa en cap de les quatre propostes: aquesta té una casella pròpia a baix de tot.",
      challenge:
        "Quan hagis col·locat les nou targetes, mira la graella sencera i respon dues coses que no hi són escrites. Primera: hi ha alguna proposta que quedi sense forat, i què vol dir això exactament —que és la bona, o que encara no l'hem provada prou? Segona: agafa dues propostes qualssevol i decideix si són incompatibles (si una és certa, l'altra ha de ser falsa) o si podrien ser dos capítols de la mateixa història."
    },
    "3": {
      scaffold:
        "Els tres escenaris de la Fig.2 no competeixen per la mateixa feina. Cap d'ells no resol els tres problemes alhora, i per això a la fitxa se't demanen dues coses de cadascun: què resol millor i què continua sense resoldre. Abans d'omplir res, torna a l'apartat 0 i mira què hi vas escriure que li faltava a un munt de molècules per ser un ésser viu: ben segur que hi vas anomenar un d'aquests tres problemes.",
      challenge:
        "El món ARN es basa en una idea que val la pena que expliquis amb les teves paraules: una mateixa molècula fa alhora de recepta i de cuiner. Explica quin problema resol això que no resol un sistema on la informació la guarda una molècula i la feina la fa una altra, i fes servir la dada que et dona la fitxa sobre la màquina que fabrica les teves proteïnes."
    },
    "4": {
      scaffold:
        "Per ordenar les propostes no has de dir quina t'agrada més, sinó quina està més ben sostinguda per les targetes que has col·locat. Un criteri senzill i honest: compta quantes proves d'observació o d'experiment té a favor, mira quants forats té i quina mena de forats són —no és el mateix un forat que ja s'està investigant que un forat que fa impossible tota la resta. I recorda com acaba un informe seriós: dient quina observació nova el faria canviar d'opinió.",
      challenge:
        "Escriu el dictamen del comitè com si l'haguessis d'enviar de veritat: quina proposta finança el congrés, per quines raons, què s'hi hauria de mesurar per confirmar-la o descartar-la, i per què la cinquena proposta no entra ni tan sols a la llista. Aquest darrer punt és el difícil: has d'explicar per què queda fora sense dir en cap moment que sigui falsa."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES / REPÀS ─────────────────────
  ideesPrevies: {
    startPoint:
      "Abans d'obrir cap dossier, recollim d'on partim. No es corregeix: hi tornaràs al final de la sessió.",
    prompts: [
      {
        kind: "write",
        text: "Damunt d'una taula hi ha totes les peces d'una bicicleta, escampades. No tens una bicicleta. Doncs bé: què li falta a un munt de molècules escampades per poder dir que allò ja és un ésser viu? Escriu tot el que se t'acudeixi, encara que no estiguis segur.",
        starter: "Un munt de molècules no és un ésser viu fins que no..."
      }
    ]
  },

  // ── EXPLORA (comitè avaluador · dossier de proves) ───────
  exploreActivity: {
    what: "Cada equip rep la graella del comitè i un joc de nou targetes retallades amb el dossier de proves. Les targetes estan barrejades i cadascuna té un sol destí: parlen d'una de les quatre propostes i, dins d'aquella proposta, o bé hi juguen a favor o bé li assenyalen un forat. Una de les nou no encaixa en cap de les quatre i té una casella pròpia. Heu de col·locar-les totes, discutint-ho en veu alta, i després escriure amb les vostres paraules què explica cada proposta. La feina de casa que vau fer entra aquí: si la vostra prova ja hi és, la reconeixereu; si no hi és, guardeu-la per a l'apartat 5 de la fitxa, on l'escriureu i n'avaluareu la font.",
    who: { mode: "grup", label: "Equips de 3-4 (comitè avaluador)" },
    time: 26,
    note: "Demostració a l'aula: en acabar, cada equip haurà de justificar en veu alta la col·locació d'UNA targeta triada pel docent, i explicar per quina raó no va a cap altre lloc. No serveix llegir la targeta: cal dir la paraula que us ha fet decidir.",
    materials: "Un joc de 9 targetes retallades per equip (full `retallables_sa7_s28.html`, dos jocs per A4), tisores, barra d'enganxar i la fitxa de la sessió. La feina de casa de S27, damunt la taula."
  },
  exploreInstructions: [
    "Repartiu les nou targetes entre els membres de l'equip i llegiu-les totes en veu alta abans de moure'n cap",
    "Per a cada targeta, decidiu primer de quina proposta parla (busqueu la paraula clau) i després si hi juga a favor o li fa un forat",
    "Col·loqueu les targetes a la graella sense enganxar-les fins que tot l'equip hi estigui d'acord",
    "Rellegiu la graella sencera abans d'enganxar res i comproveu si hi ha alguna targeta que us serveixi per a dos llocs",
    "Guardeu la prova que vau portar de casa per a l'apartat 5: allà l'escriureu i n'avaluareu la font",
    "Trieu qui defensarà la col·locació d'una targeta si el docent us la demana"
  ],
  exploreDuration: "26 min",
  appSrc: null,
  exploreNote: "Aquesta activitat s'assembla a la del comitè editorial de la primera sessió d'aquesta situació, però amb una diferència que val la pena que noteu: allà classificàveu afirmacions segons el grau de certesa, i aquí heu de fer una feina més fina, perquè aquí les quatre propostes són totes hipòtesis amb proves, i el criteri per ordenar-les és una de les coses que haureu de discutir dins de l'equip abans d'escriure res.",

  // ── EXPLICA ──────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Què va demostrar l'experiment de ==Miller-Urey== i què no",
      text: "L'any 1953, Stanley ==Miller==, al laboratori de Harold ==Urey==, va tancar dins d'un aparell de vidre aigua i els gasos que aleshores es creia que formaven l'atmosfera primitiva —metà, amoníac i hidrogen— i hi va fer passar descàrregues elèctriques durant una setmana per imitar els ==llamps==. Al cap d'aquells dies el líquid contenia diversos ==aminoàcids==, que són les peces amb què es fabriquen les proteïnes de tots els éssers vius. El resultat va ser importantíssim perquè demostrava una cosa que abans només era una suposició: que les molècules de la vida es poden formar a partir de matèria ==inorgànica==, sense que hi intervingui cap ésser viu. La feina d'avui comença just aquí: els diaris de l'època van titular que s'havia creat vida al laboratori, i tu has de mesurar amb precisió la distància que hi ha entre el resultat i el titular. Hi ha, a més, una objecció seriosa que has de conèixer: avui es pensa que l'atmosfera primitiva no era com la que Miller va posar dins l'aparell. Què s'ha de fer amb una hipòtesi quan apareix una objecció així és la primera pregunta de la fitxa.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "3",
      heading: "Tres ==problemes==, no un de sol",
      text: "Quan es diu «l'origen de la vida» sembla que sigui una pregunta sola, i en realitat en són ==tres== de diferents que s'han de resoldre totes: la del ==compartiment==, la de l'==energia== i la de la ==informació que es copia==. A la fitxa les tens enunciades una per una amb el que passaria si faltés cadascuna, i el que hauràs de decidir és quin d'aquests tres problemes resol millor cada escenari i quin no resol. Val la pena que sàpigues que aquí hi ha un nus que encara avui no està resolt del tot, i té a veure amb com funcionen les teves pròpies cèl·lules: l'ADN i les proteïnes es necessiten mútuament, cosa que fa difícil imaginar quina de les dues hi va poder ser primer.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Els tres escenaris i la proposta que ==trasllada== la pregunta",
      text: "La ==sopa primordial== imagina un oceà o unes basses poc profundes on, amb l'energia dels llamps i de la radiació, s'hi van anar acumulant molècules orgàniques fins a fer-hi un brou concentrat: és l'escenari de l'experiment de 1953. El ==món ARN== proposa que abans de l'ADN i de les proteïnes hi va haver l'==ARN==, i el motiu és una propietat que l'ADN no té: hi ha molècules d'ARN que ==guarden informació== i alhora ==actuen== com si fossin eines, tallant i unint altres molècules sense necessitat de cap proteïna. En dieuen ==ribozims==. Les ==fumaroles hidrotermals== situen l'escena al fons del mar, en xemeneies de roca plenes de ==porus== microscòpics per on surt aigua calenta i alcalina que es troba amb l'aigua freda i àcida del mar, en un lloc on no arriba gens de llum. Finalment, la ==panspèrmia== diu que les molècules —o fins i tot la vida— van arribar de l'espai dins de meteorits, i té una prova real a favor que et sorprendrà; però fixa't bé en què respon i en què no respon, perquè amb aquesta n'hi ha prou de llegir-la amb atenció per veure què hi falla com a resposta a la pregunta d'avui.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "L'astrobiologia ==explora==, no ==afirma==",
      text: "Cap de les quatre propostes no està demostrada, i això no és cap escàndol: és l'estat normal d'una pregunta oberta. Però una pregunta oberta no vol dir que qualsevol resposta valgui igual, i el criteri per separar-les és molt concret. Una hipòtesi és ==científica== quan es pot posar a prova, és a dir, quan es pot dir per endavant què s'hauria d'==observar== si fos certa i, sobretot, què s'hauria d'observar si fos ==falsa==. La fitxa et demanarà que apliquis aquestes dues preguntes a una afirmació concreta i que en treguis tu la conclusió; i el que és difícil no és treure-la, sinó escriure-la amb precisió, perquè «no és ciència» i «és falsa» són dues coses diferents i confondre-les és un error que has vist tot el curs. La ==astrobiologia==, la ciència que estudia la possibilitat de vida en altres llocs, treballa exactament així: ==explora== escenaris, hi busca proves i diu clarament fins on arriba. Al llarg del curs has anat construint una escala de certeses, i avui l'has de saber fer servir amb quatre candidates que estan totes al mateix esglaó: totes són hipòtesis amb proves, i el que has de decidir és quina està ==més ben fonamentada== ara mateix.",
      type: "epistemic",
      badge: "🧭 Naturalesa de la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "L'aparell de Miller-Urey (1953)", src: "/images/sa7-s3-miller-urey.svg", note: "El recorregut del líquid i dels gasos dins l'aparell, i el que s'hi va posar al començament. Què hi havia al final, ho tens a la fitxa." },
    { id: "Fig.2", apartat: "3", before: true, title: "Els tres escenaris, dibuixats", src: "/images/sa7-s3-tres-escenaris.svg", note: "Només l'escena de cadascun. Fixa't que la panspèrmia no hi surt: pregunta't per què no se'n pot dibuixar cap escena com aquestes tres." },
    { id: "Fig.3", apartat: "3", before: false, title: "La finestra de temps en què va passar", src: "/images/sa7-s3-finestra-temps.svg", note: "Recull la datació de la sessió anterior. Els números que necessites per al càlcul són a l'eix; la resta l'has de fer tu." },
    { id: "Fig.4", apartat: "4", before: true, title: "Es pot posar a prova? El camí de decisió", src: "/images/sa7-s3-contrastable.svg", note: "El mètode per decidir si una afirmació és una hipòtesi científica, amb un exemple resolt que NO té res a veure amb l'origen de la vida perquè el puguis aplicar tu sol." },
    { id: "Fig.5", apartat: "2", before: false, title: "La graella del comitè (en blanc)", src: "/images/sa7-s3-graella-buida.svg", note: "És la graella de la fitxa, aquí per si has faltat. Les targetes de proves són al full de retallables." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa7-s3-fitxa-A.html", B: "/fitxes/sa7-s3-fitxa-B.html" },
  retallablesUrl: "/fitxes/sa7-s3-retallables.html",
  teoriaPdfUrl: null,
  elaborateNote: "El comitè ha d'emetre un dictamen escrit sobre les quatre propostes i sobre la cinquena. La fitxa us diu quins punts ha de contenir; el que no us diu ningú és amb quin criteri es decideix que una proposta està més ben fonamentada que una altra. Aquesta part la construïu vosaltres, i l'haureu de defensar davant dels altres equips.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S28 — D'on va sortir la vida?",
    steps: [
      { apartat: "0", title: "D'on partim", time: "5 min", phase: "engage", instruction: "Escriu què li falta a un munt de molècules escampades per poder dir que allò ja és un ésser viu. No es corregeix.", hints: [] },
      { apartat: "1", title: "Miller-Urey: què va obtenir i què no", time: "14 min", phase: "explain", instruction: "Amb la Fig.1, reconstrueix l'experiment i escriu què s'hi va obtenir i què no s'hi va obtenir, tot i el que van dir els diaris. Després decideix què s'ha de fer amb la hipòtesi davant l'objecció de l'atmosfera.", hints: ["Torna a l'exemple de les peces de bicicleta i a allò que vas escriure a l'apartat 0.", "Per triar entre les tres sortides, aplica-hi el camí de decisió de la Fig.4: quina de les tres deixa la hipòtesi en condicions de passar-hi?"] },
      { apartat: "2", title: "El comitè: col·loqueu les proves", time: "26 min", phase: "explore", instruction: "Retalleu les nou targetes i col·loqueu-les a la graella: primer decidiu de quina proposta parlen, després si hi juguen a favor o li fan un forat. Una no encaixa a cap de les quatre.", hints: ["Busca la paraula clau de cada targeta abans de moure-la.", "Llegiu les nou targetes senceres abans de col·locar-ne cap: n'hi ha que s'entenen millor quan ja has llegit la següent."] },
      { apartat: "3", title: "Tres problemes, tres escenaris", time: "16 min (B) / 22 min (A)", phase: "explain", instruction: "Amb la Fig.2, escriu quin problema resol millor cada escenari i quin continua sense resoldre. Després calcula la finestra de temps amb la Fig.3.", hints: ["Mira el dibuix de cada escenari i pregunta't què hi ha, allà, que no hi ha als altres dos.", "Per a cada escenari has de dir dues coses: què resol millor i què continua sense resoldre."] },
      { apartat: "4", title: "El dictamen del comitè", time: "22 min", phase: "elabora", instruction: "Ordena les quatre propostes de més a menys ben fonamentada, justifica l'ordre amb les proves, digues quina observació et faria canviar l'ordre i explica per què la cinquena proposta queda fora sense dir que sigui falsa.", hints: ["Abans d'ordenar res, poseu-vos d'acord dins de l'equip sobre quin criteri fareu servir; escriviu-lo.", "Per a la cinquena proposta, passeu-la pel camí de decisió de la Fig.4 i mireu on us deixa."] },
      { apartat: "5", title: "Posada en comú i fonts", time: "14 min (B) / 8 min (A)", phase: "elabora", instruction: "Comparem els dictàmens dels equips i, a la fitxa, escriviu la prova que vau portar de casa i avalueu-ne la font amb la graella de fiabilitat de la SA1.", hints: [] },
      { apartat: "6", title: "Exit tiquet i metacognició", time: "13 min", phase: "evaluate", instruction: "Respon l'exit tiquet i torna a l'apartat 0 per veure què has canviat.", hints: [] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Un titular diu: «Un experiment demostra que la vida es va crear a partir de gasos i llamps». Reescriu-lo perquè digui exactament el que l'experiment de Miller-Urey va demostrar, ni més ni menys.", hint: "Pensa què hi havia dins l'aparell al final: peces o una cosa viva?" },
    { id: "q2", type: "multiple", text: "Per què el món ARN va cridar tant l'atenció dels científics?", options: ["Perquè l'ARN és molt més resistent que l'ADN i dura milions d'anys", "Perquè hi ha ARN capaç de guardar informació i alhora actuar com una eina", "Perquè s'ha trobat ARN dins dels meteorits que cauen a la Terra", "Perquè l'ARN es forma tot sol amb facilitat a l'aigua calenta del fons del mar"], correct: 1 },
    { id: "q3", type: "open", text: "Un equip publica que, en condicions com les d'una fumarola, s'hi podrien formar cadenes curtes d'ARN, i diu exactament quines condicions caldria muntar al laboratori per comprovar-ho. Digues si això es pot tractar com una hipòtesi científica i per què.", hint: "Aplica-hi les dues preguntes de la Fig.4, sobretot la segona." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Torna a llegir el que has escrit a l'apartat 0 sobre què li falta a un munt de molècules per ser un ésser viu. Què hi afegiries ara? De les quatre propostes, n'hi ha alguna que t'agradés més abans de mirar les proves i que hagi baixat de lloc després de mirar-les? I una última: com et fa sentir tancar una sessió sense saber la resposta —incòmode, o és una altra cosa?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Prepara la teva postura per al debat de la propera sessió: hauríem d'invertir diners públics a buscar vida fora de la Terra? Escriu dos arguments a favor i dos en contra —tots quatre, encara que tu només n'estiguis d'acord amb dos— i, per a cadascun, digues en què es basa: en dades, en valors o en les dues coses.",
    deadline: "Per a la propera sessió",
    secondTask: "Repassa tota la SA7 per a la prova final: Big Bang i les seves proves, condicions de la Terra, semivida i les dues menes de datació, i les hipòtesis d'avui.",
    note: "A la sessió següent es tanca la situació i el curs: hi haurà el debat i la prova final. Escriure els arguments contraris als teus no és una pèrdua de temps, és el que et permetrà respondre'ls; i separar què és una dada i què és un valor és exactament el que has anat treballant des de la primera situació del curs."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA sencer: què va demostrar Miller-Urey i què no, els tres problemes que ha de resoldre l'origen de la vida, els tres escenaris i què vol dir que una hipòtesi es pugui posar a prova",
    "Mira la Fig.1 (l'aparell), la Fig.2 (els tres escenaris) i la Fig.3 (la finestra de temps): amb aquestes pots fer sol els apartats 1 i 3 de la fitxa",
    "Demana la fitxa S28 i el full de retallables, i fes la graella del comitè tu sol: les nou targetes tenen cadascuna un sol destí",
    "Comprova que saps respondre les tres preguntes de l'exit tiquet, sobretot la tercera (per què una afirmació que res no pot contradir queda fora de la ciència sense ser falsa)",
    "Fes la feina de casa: dos arguments a favor i dos en contra d'invertir a buscar vida fora, dient en què es basa cadascun. A la propera sessió hi ha el debat i la prova final del curs"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA3", "OA4"],
  competencies: ["CE1", "CE2", "CE3"],
  criterisAvaluacio: ["1.3", "2.1", "2.2", "3.1"]
}
