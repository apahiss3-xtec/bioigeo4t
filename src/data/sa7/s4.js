export const sa7s4 = {
  id: "s4",
  saId: "sa7",
  title: "Val la pena buscar vida fora?",
  sessionNumber: 4,
  biome: "sa7",
  duration: "2h",
  engageImage: "/images/sa7-s4-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "El telescopi espacial James Webb, el mateix que a la primera sessió d'aquesta situació mirava un planeta a més de cent anys llum, va costar al voltant de deu mil milions de dòlars i va tenir més de vint anys de retards abans d'enlairar-se. Amb aquells diners s'hi hauria pogut fer una altra cosa: hospitals, escoles, recerca contra el càncer, protecció del delta. Aquesta comparació no té resposta científica. La ciència et pot dir amb precisió què costa una missió, quina probabilitat té de trobar el que busca i què n'aprendríem si la trobés; el que no et pot dir és si val més la pena això o allò. Aquesta última part no la decideix cap dada: la decidim les persones. I decidir-ho bé, amb les dades a la mà i sabent quan has deixat de parlar de dades, és exactament el que has estat entrenant tot el curs.",
  engageQuestion: "Abans que comenci res, escriu en una frase la teva postura: hauríem d'invertir diners públics a buscar vida fora de la Terra? I ara la part difícil, que et servirà tota la sessió: escriu al costat quina dada concreta et faria canviar d'opinió. Si no en trobes cap, para't a pensar-hi —vol dir que la teva postura no descansa sobre dades sinó sobre valors, i això no és cap defecte, però convé que ho sàpigues abans d'obrir la boca al debat.",
  engageContext: "Aquesta és la darrera sessió de la situació i del curs, i té tres parts ben diferents. Primer un debat de veritat, amb torns i regles, sobre una qüestió que barreja ciència i valors; enmig hi ha un torn en què hauràs de defensar la postura contrària a la teva. Després tanquem el curs sencer: recuperaràs l'escala de certeses de la primera situació i miraràs com ha canviat, al llarg de l'any, la teva manera de decidir que una cosa és veritat. I al final hi ha la prova escrita del curs, que no és de memòria: és una situació nova on hauràs de fer servir alhora coses de situacions diferents.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Construeixo la meva postura sobre una qüestió sociocientífica separant amb precisió la part que descansa en dades de la part que descansa en valors, i ho faig també amb els arguments dels altres.",
      "Defenso amb rigor una postura que no és la meva, sense caricaturitzar-la, i n'identifico el punt més fort.",
      "Dic quina dada concreta em faria canviar d'opinió i explico per què aquesta i no una altra; si no n'hi ha cap de possible, ho reconec i n'extrec la conseqüència.",
      "Argumento com el coneixement científic sobre altres planetes ha acabat canviant la manera com cuidem aquest, amb un exemple concret i comprovable.",
      "Reviso el meu perfil epistèmic del curs: explico amb quin tipus de raó em conformava al setembre i amb quin em conformo ara, i poso un exemple d'una idea que he canviat pel camí i què m'ho va fer canviar.",
      "Resolc una situació-problema nova connectant sabers de situacions diferents del curs i justifico cada pas amb la prova en què em baso."
    ],
    B: [
      "Distingeixo, en un argument, la part que és una dada (es podria comprovar) de la part que és un valor (diu què hauria de ser).",
      "Participo al debat respectant els torns, responent l'argument que m'han fet de veritat i citant d'on trec les dades que dic.",
      "Defenso durant un torn la postura contrària a la meva i anoto el millor argument que he sentit de l'altra banda.",
      "Dic quina dada em faria canviar d'opinió.",
      "Explico un exemple de coneixement obtingut mirant altres planetes que ha servit per cuidar millor la Terra.",
      "Recupero l'escala de certeses de la primera situació i la faig servir per dir com ha canviat la meva manera de justificar que una cosa és certa.",
      "Resolc una situació-problema nova aplicant-hi sabers de més d'una situació del curs."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "cap" — última sessió del curs. Cap bastida de mètode: l'alumnat ja
  // porta l'any sencer de vocabulari i de procediments. Només reptes per al nivell A.
  scaffoldFade: "cap",
  apartatExtras: {
    "1": {
      challenge:
        "Agafa un dels teus quatre arguments i porta'l al límit: escriu-lo primer sencer, tal com et va sortir, i després parteix-lo en les dues frases que hi ha amagades a dins —la que es podria comprovar i la que diu què hauria de ser. Quan les tinguis separades, mira la frase de la dada i pregunta't una cosa incòmoda: si aquesta dada resultés ser falsa, l'argument cauria del tot o continuaria dret gràcies a l'altra meitat?"
    },
    "2": {
      challenge:
        "Al torn del canvi de cadira no n'hi ha prou de dir el que creus que dirien els altres. La feina és una altra: has de construir la versió més forta possible de la postura contrària, la que a tu et costaria més de respondre. Escriu-la i, tot seguit, escriu com la respondries si tornessis a la teva cadira. Si la teva resposta és fluixa, ho has fet bé: vol dir que has trobat un argument de debò."
    },
    "3": {
      challenge:
        "Amb el mapa ple, busca la situació on la prova era més indirecta de totes —on el que afirmem queda més lluny del que hem pogut observar de debò— i explica per què, tot i això, la conclusió es continua sostenint. I si et queda temps: busca dues situacions que facin servir la mateixa mena de prova per a coses que no s'assemblen gens, i digues què tenen en comú aquells dos raonaments."
    },
    "4": {
      challenge:
        "Quan acabis, torna enrere i tria la pregunta de què t'has quedat menys segur. Escriu al marge quina dada concreta t'hauria fet falta per estar-ne segur, o quin pas del teu raonament és el que et fa dubtar. Això no baixa la valoració: assenyalar amb precisió on s'acaba el que saps és part del que s'avalua."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES / REPÀS ─────────────────────
  ideesPrevies: {
    startPoint:
      "Dues frases abans de començar. No es corregeixen, però hi tornaràs al final del curs.",
    prompts: [
      {
        kind: "write",
        text: "Hauríem d'invertir diners públics a buscar vida fora de la Terra? Escriu la teva postura en una frase i, al costat, quina dada concreta et faria canviar d'opinió.",
        starter: "Jo crec que... i canviaria d'opinió si es demostrés que..."
      }
    ]
  },

  // ── EXPLORA (debat SSI amb canvi de cadira) ──────────────
  exploreActivity: {
    what: "Debat de tot el grup, dividit en dues bandes assignades pel docent —no per preferència—, amb cinc torns cronometrats. Cada banda obre amb un argument de dades i un de valors; després hi ha vuit minuts de rèplica creuada en què només val respondre el que l'altra banda ha dit de veritat; i al quart torn es fa el canvi de cadira: cada banda ha de defensar la postura contrària durant cinc minuts. Es tanca dient en veu alta què t'ha fet dubtar. Dins de cada banda hi ha dos encàrrecs (portaveu i rellotge) i, alhora, tothom va omplint a la seva fitxa les dues taules d'escolta: la de les dades que se citen i la dels valors que apareixen.",
    who: { mode: "grup", label: "Dues bandes; dos encàrrecs dins de cada una" },
    time: 22,
    apartats: "2",
    note: "Demostració a l'aula: la banda assignada no depèn del que penses. El torn del canvi de cadira és el que es mira amb més atenció, perquè no es pot preparar a casa ni delegar: cal haver escoltat de veritat el que ha dit l'altra banda durant els catorze minuts anteriors.",
    materials: "La feina de casa de la sessió anterior (dos arguments a favor i dos en contra, dient en què es basa cadascun), la fitxa de la sessió, un cronòmetre per banda. Les dues taules d'escolta (dades i valors) ja són a la fitxa: no cal cap full a part."
  },
  exploreInstructions: [
    "Trieu qui fa de portaveu i qui de rellotge abans que comenci el primer torn",
    "Al torn d'obertura heu de dir exactament un argument de dades i un de valors, no dos del mateix tipus",
    "A la rèplica, repetiu l'argument de l'altra banda abans de contestar-lo: si no el sabeu repetir, no l'heu entès",
    "Cada dada que digueu ha d'anar amb la font; si no la recordeu, digueu-ho en veu alta",
    "Al canvi de cadira, construïu la versió més forta de la postura contrària, no la més fàcil de tombar",
    "Al tancament, cadascú ha de dir una cosa concreta que l'hagi fet dubtar"
  ],
  exploreDuration: "22 min",
  appSrc: null,
  exploreNote: "Aquest debat no s'assembla al de l'edició genètica de la tercera situació: allà discutíeu si una tècnica que ja existeix s'hauria d'utilitzar, i aquí discutiu on posar uns diners que són limitats. Aquesta diferència canvia la forma dels arguments que hi funcionen, i és una de les coses que heu de descobrir vosaltres abans del torn 3.",

  // ── EXPLICA ──────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Una pregunta, dues menes de ==raons==",
      text: "Les preguntes com la d'avui es diuen ==sociocientífiques== perquè tenen sempre dues capes barrejades. A sota hi ha les ==dades==: quant costa una missió, quantes possibilitats hi ha de trobar el que es busca, què s'ha trobat fins ara. Aquestes es poden comprovar, i per tant es poden discutir amb proves i es poden equivocar. A sobre hi ha els ==valors==: què és més urgent, què és més just, què li deu una generació a la següent. Aquests no es mesuren, i això no vol dir que valguin menys ni que tot valgui igual —un valor també es defensa amb raons—, però vol dir que si tu i jo tenim la mateixa dada i valors diferents, podem arribar a conclusions diferents sense que cap dels dos s'equivoqui en els números. La Fig.1 et dona les dues preguntes per separar-les, amb un exemple resolt que no té res a veure amb el tema d'avui. El que has de saber fer amb això és doble: separar-ho en els teus arguments i, sobretot, ==reconèixer-ho== en els dels altres, perquè la majoria de discussions que no avancen és perquè un parla de dades i l'altre de valors sense adonar-se'n.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Què hi guanyem ==aquí baix==",
      text: "Hi ha un argument que apareix sempre en aquests debats i que has de tenir ben entès abans de fer-lo servir o de respondre'l: el de dir que mirar altres mons ha acabat servint per cuidar millor aquest. No és un argument buit i té casos concrets al darrere, però els casos els has de posar tu: en tens dos de treballats aquest mateix curs, i has de ser tu qui els recordi i triï el que expliqui millor la idea. A la fitxa se't demana un cas concret i, després, la part difícil: ==fins on arriba== aquest argument. Perquè tot argument en té, de límit, i el d'aquest no és evident. Pensa-hi abans de fer-lo servir al debat, perquè si el dius sense el límit te'l poden tombar en una frase; i, sobretot, saber fins on arriba un argument que t'agrada és tan important com saber respondre'n un que no.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "El teu ==perfil epistèmic==, un any després",
      text: "La primera sessió del curs et va demanar que ordenessis unes afirmacions de més a menys certa i que diguessis quina ==garantia== feies servir per decidir-ho: si t'ho creies perquè ho deia algú que en sap, perquè hi havia dades, perquè encaixava amb un model que ja funciona, perquè sempre ho has sentit dir o perquè ho diu la gent com tu. Allò era el teu perfil epistèmic de partida. Avui el tornes a mirar, però amb una diferència: entremig has passat per set situacions on les coses es justificaven de maneres que no s'assemblen gens entre elles, i el mapa de la Fig.3 et demana precisament que recordis quina mena de prova hi havia darrere de cada una. La pregunta de tancament del curs no és quina nota has tret, sinó aquesta: ha canviat la mena de raó amb què et conformes? I n'hi ha una altra que la completa: hi ha alguna idea que tenies al setembre que hagis canviat, i saps dir ==què== t'ho va fer canviar? Poder respondre aquesta segona pregunta és, probablement, la cosa més útil que et pots endur d'aquesta matèria.",
      type: "epistemic",
      badge: "🧭 Naturalesa de la ciència"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Una prova que no és de ==memòria==",
      text: "La prova final del curs és una ==situació-problema==: un cas nou que no has vist mai, amb dades a la mà, on has d'anar fent servir coses que has après en situacions diferents. No es puntua: es mira, per a cada objectiu, si ho has assolit i fins a quin nivell, exactament com s'ha fet tot l'any. El que s'hi valora no és recordar definicions, sinó tres coses: que triïs bé quina eina va a cada pregunta, que ==justifiquis== cada pas amb la dada concreta en què et bases i que, quan una cosa no es pugui saber amb les dades que tens, ho ==diguis== en lloc d'inventar-t'ho. Aquesta última és la que la gent falla més, i és la que has treballat des del primer dia: dir «amb aquestes dades no es pot decidir» és una resposta correcta si va acompanyada de què faria falta per decidir-ho.",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "Dades o valors? Les dues preguntes", src: "/images/sa7-s4-dades-valors.svg", note: "El mètode per separar les dues capes d'un argument. L'exemple resolt és d'un altre tema expressament, perquè el puguis aplicar tu sol al d'avui." },
    { id: "Fig.2", apartat: "2", before: true, title: "L'estructura del debat", src: "/images/sa7-s4-debat.svg", note: "Els cinc torns amb els seus minuts, qui fa què i les tres regles. Mira-t'ho abans de començar: no hi ha temps per rellegir-ho enmig." },
    { id: "Fig.3", apartat: "3", before: true, title: "El mapa del curs, en blanc", src: "/images/sa7-s4-mapa-curs-alumne.svg", note: "Una fila per situació, amb dues caselles buides. La llista de menes de prova que hi ha a sota no està ordenada i no en va una a cada fila: n'hi ha que es repeteixen." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa7-s4-fitxa-A.html", B: "/fitxes/sa7-s4-fitxa-B.html" },
  teoriaPdfUrl: null,
  elaborateNote: "El producte de la situació és un assaig argumentatiu individual que escriuràs després d'aquesta sessió, amb els fulls de dades i de valors del debat al davant. No és un resum del debat: és la teva postura, amb la millor objecció que has sentit i la teva resposta. Al final hi ha d'haver una frase que la gent s'oblida sempre de posar i que aquí és obligatòria: quina dada et faria canviar d'opinió.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S29 — Val la pena buscar vida fora?",
    steps: [
      { apartat: "0", title: "D'on partim", time: "4 min", phase: "engage", instruction: "Escriu la teva postura en una frase i quina dada et faria canviar d'opinió. No es corregeix.", hints: [] },
      { apartat: "1", title: "Dades i valors: prepara't", time: "10 min", phase: "explain", instruction: "Passa els quatre arguments que portes de casa per les dues preguntes de la Fig.1 i classifica'ls. Després mira quina banda t'ha tocat i tria amb quins dos obriràs.", hints: ["Què has de fer amb un argument que respon que sí a totes dues preguntes? Decideix-ho abans de classificar-lo.", "Comprova si les dades que portes tenen font; les que no en tinguin, no les diguis com a dades."] },
      { apartat: "2", title: "El debat", time: "22 min", phase: "explore", instruction: "Cinc torns amb els temps de la Fig.2. Al torn 4 es defensa la postura contrària. Els dos fulls d'anotació han de quedar plens.", hints: ["Repeteix l'argument de l'altra banda abans de respondre'l.", "Al canvi de cadira, la versió forta de la postura contrària és la que et costaria respondre a tu."] },
      { apartat: "3", title: "El curs sencer: el teu perfil epistèmic", time: "12 min", phase: "elabora", instruction: "Omple el mapa del curs de la Fig.3 i respon les preguntes de tancament sobre com ha canviat la teva manera de justificar que una cosa és certa.", hints: ["Per a cada situació, pensa primer què havies de saber i després com ho vas arribar a saber.", "La mateixa mena de prova pot anar a més d'una fila."] },
      { apartat: "4", title: "Prova escrita final del curs", time: "50 min", phase: "prova", instruction: "Full a part: 5 minuts per llegir la situació i les dades, i 45 per respondre les sis preguntes. Individual i sense apunts, tret del que el docent autoritzi.", hints: [] },
      { apartat: "5", title: "Tancament del curs", time: "5 min", phase: "evaluate", instruction: "Torna a l'apartat 0 i tanca el curs: què t'endús i quina pregunta te'n vas amb tu sense respondre.", hints: [] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  // A S29 l'exit tiquet no és un full a part: la q1 és l'última pregunta de
  // l'apartat 5 de la fitxa (tancament del curs) i la q2 és el torn 5 del debat
  // (2c a la versió A, 2e a la B). L'instrument avaluable de la sessió és la
  // prova escrita final, que va en un document independent.
  exitTicketType: "web",
  exitTicketWhere: "ja el respons a la fitxa (apartat 5 i torn 5 del debat)",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Escriu una afirmació que al setembre t'hauries cregut sense comprovar-la i que ara no et creuries sense comprovar-la. Digues què comprovaries i com.", hint: "Pensa en un titular, un anunci o una cosa que et van dir." },
    { id: "q2", type: "open", text: "Al debat d'avui, quina cosa concreta t'ha fet dubtar? Digues si era una dada o un valor, i què has fet amb aquell dubte.", hint: "Val a dir que has canviat d'opinió, i val a dir que no; el que no val és no haver dubtat de res." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Es tanca el curs. Torna a llegir la frase que has escrit a l'apartat 0 i digues si continua sent la teva. Després, dues coses més: què t'endús d'aquesta matèria que et servirà encara que no tornis a estudiar biologia mai més, i quina pregunta te'n vas amb tu sense haver-la respost. Aquesta última escriu-la bé, perquè és la que et durà a la següent.",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Assaig argumentatiu individual (producte final de la situació): la teva postura sobre si s'ha d'invertir a buscar vida fora de la Terra, en un full. Ha de portar, per aquest ordre: la teva postura; un argument teu basat en dades, amb la font; un argument teu basat en valors, dit com a tal; la millor objecció que vas sentir al debat, escrita amb honestedat; la teva resposta a aquella objecció; i una última frase amb quina dada et faria canviar d'opinió.",
    deadline: "Es lliura al Classroom durant la setmana següent",
    secondTask: null,
    note: "Escriu-lo amb els dos fulls del debat al davant, el de dades i el de valors. No és un resum del que va passar a classe: és el teu argument. I la millor objecció no és la més fàcil de respondre, és la que et va costar."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA sencer: la diferència entre dades i valors, què hi guanyem aquí baix de mirar altres planetes, i les dues preguntes de tancament del curs",
    "Mira la Fig.1 i aplica les dues preguntes als quatre arguments de la feina de casa de la sessió anterior",
    "Omple el mapa del curs de la Fig.3 tu sol: una pregunta i una mena de prova per a cada situació",
    "Demana hora al docent per fer la prova final del curs: és una situació-problema nova i no es pot recuperar amb apunts",
    "Escriu igualment l'assaig argumentatiu i entrega'l al Classroom: és el producte final de la situació"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE2", "CE4", "CE5"],
  criterisAvaluacio: ["1.1", "1.2", "2.2", "4.1", "4.2", "5.4", "6.5"]
}
