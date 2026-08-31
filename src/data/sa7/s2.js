export const sa7s2 = {
  id: "s2",
  saId: "sa7",
  title: "Una Terra que ho tenia tot",
  sessionNumber: 2,
  biome: "sa7",
  duration: "2h",
  engageImage: "/images/sa7-s2-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "A la sessió anterior vas escriure que la Terra té uns 4.600 milions d'anys. És un número que apareix a tots els llibres i que ningú no discuteix, però pensa-hi un moment: no hi havia cap testimoni, no hi ha cap document, i les roques més antigues que trobem trepitjant la superfície del planeta són molt més joves que això, perquè la Terra recicla constantment la seva pròpia escorça. Encara més estrany: el número no surt d'una roca terrestre, sinó de meteorits. Avui la pregunta és doble. Primera: com pot un laboratori posar un número d'anys a una pedra? Segona: què tenia aquest planeta i no tenien els seus veïns, perquè aquí la vida hi aparegués i s'hi mantingués més de tres mil milions d'anys.",
  engageQuestion: "Tens una pedra a la mà. No parla, no porta cap etiqueta i ningú no la va veure formar-se. Quina cosa hauria de contenir a dins perquè, mesurant-la, en poguessis deduir l'edat en anys? Escriu la teva idea abans de començar: no cal que sigui correcta.",
  engageContext: "Aquesta sessió és de desenvolupament i té dues meitats que s'acaben trobant. Primer miraràs què fa que un planeta pugui tenir aigua líquida a la superfície, i comprovaràs que estar al lloc adequat no ho garanteix. Després faràs, en equip, una simulació amb daus que reprodueix el comportament d'un àtom inestable: cada dau té la mateixa probabilitat de «desintegrar-se» a cada tirada, però tu no pots saber quin caurà. D'aquesta simulació en sortirà la idea de semivida, i de la semivida, el mètode amb què es data una roca. Al final actuareu com un laboratori de datació que ha de posar edat a unes quantes mostres i decidir, en un cas, que no es pot.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Interpreto la corba de la simulació dels daus com un model de la desintegració radioactiva i argumento per què el conjunt és previsible tot i que cada dau, per separat, no ho és; explico quin efecte té augmentar el nombre de rèpliques i quin límit té el model.",
      "Determino l'edat d'una mostra a partir de la fracció d'element de partida que li queda, justifico l'elecció del rellotge amb la regla d'aplicació i acoto el resultat quan les dades només permeten acotar-lo.",
      "Combino datació relativa i datació absoluta per situar en el temps una resta que no es pot datar directament, i explico per què la combinació dona un interval i no un número exacte.",
      "Argumento quines condicions de la Terra van fer possible que la vida s'hi mantingués i distingeixo, en aquest argument, què està sostingut per proves i què és una extrapolació a partir de l'única vida que coneixem."
    ],
    B: [
      "Explico què representa la simulació dels daus (cada dau és un àtom, cada tirada un interval de temps) i llegeixo al gràfic quantes tirades calen perquè en quedi la meitat.",
      "Defineixo semivida i calculo l'edat d'una mostra a partir de la fracció de l'element de partida que hi queda, partint per la meitat tantes vegades com calgui.",
      "Trio el rellotge adequat per a una mostra a partir de la taula de semivides i explico per què el carboni-14 no serveix per a un os de dinosaure.",
      "Distingeixo datació relativa (dona l'ordre) de datació absoluta (dona el número) i acoto entre dues dates l'edat d'una resta situada entre dues capes de cendra volcànica.",
      "Anomeno tres condicions de la Terra que van fer possible l'aigua líquida i la vida, i explico que estar a la distància adequada no ho garanteix."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: SA7 (final de curs) → bastida baixa; a S29 passarà a "cap".
  scaffoldFade: "baixa",
  apartatExtras: {
    "1": {
      scaffold:
        "La faixa de la Fig.1 et dona una de les condicions: la distància. Per trobar-ne d'altres, no busquis una llista, fes-te preguntes sobre l'atmosfera, que és el que manté l'aigua a la superfície. Primera: què hauria de tenir un planeta perquè la gravetat li retingués els gasos, i què passaria si en tingués poca? Segona: què hi ha, a l'espai, que pugui anar arrencant una atmosfera al llarg de milions d'anys, i què podria desviar-ho? Cada resposta que trobis és una condició, i de cadascuna n'has de saber dir la conseqüència de faltar.",
      challenge:
        "La faixa de la Fig.1 s'anomena sovint «zona d'habitabilitat». Discuteix si el nom està ben posat: què estem donant per suposat quan la dibuixem, i quin tipus de vida quedaria fora del que pot predir? Després fixa't en el cas de Mart que apareix a la figura i decideix què demostra exactament sobre el valor d'aquesta faixa."
    },
    "2": {
      scaffold:
        "Cada dau del got representa un àtom de l'element de partida i cada tirada, un interval de temps sempre igual. Un dau que treu un 6 s'ha desintegrat: s'aparta i ja no torna. La probabilitat de treure un 6 és sempre la mateixa, tant a la primera tirada com a l'última: els daus no es cansen ni «recorden» res. Per omplir el gràfic has de passar el nombre de daus que queden a percentatge: divideix els que queden entre els que hi havia al començament i multiplica per 100. La semivida es llegeix al gràfic: és el nombre de tirades que has hagut de fer perquè la corba baixi fins a la línia del 50 %.",
      challenge:
        "Abans de tirar cap dau, escriu una predicció numèrica: quantes tirades creus que caldran perquè en quedi la meitat, i per què. Un cop tinguis les dades, compara la teva corba amb la de tota la classe i respon: quina de les dues és més irregular i per què ho és, si la probabilitat de cada dau és exactament la mateixa en tots dos casos? I una última: la simulació prediu quin dau concret sortirà en la propera tirada?"
    },
    "3": {
      scaffold:
        "La semivida d'un element és el temps que ha de passar perquè se n'hagi transformat la meitat, i la regla és sempre la mateixa: cada semivida es menja la meitat del que queda en aquell moment. Per calcular una edat, doncs, has de comptar quantes vegades has hagut de partir per la meitat per arribar a la fracció que queda, i multiplicar aquest nombre per la semivida. La Fig.4 té l'exemple d'un altre element amb els primers passos fets: fixa't en el mètode, no en els números, perquè el teu element tindrà una semivida diferent. La semivida és fixa i no depèn de la temperatura ni de la pressió: per això funciona com un rellotge.",
      challenge:
        "Pensa una objecció al mètode: què hauria de passar-li a una roca al llarg de la seva història perquè el rellotge donés una edat falsa —massa vella o massa jove—, i com creus que un laboratori podria adonar-se'n abans de publicar el resultat?"
    },
    "4": {
      scaffold:
        "Al laboratori has de fer sempre els mateixos tres passos. Primer, mira quina mena de material és la mostra i quina edat aproximada s'espera: això et diu quin rellotge de la Fig.5 pots fer servir. Fixa-t'hi bé, perquè de vegades més d'un rellotge compleix la regla dels anys; quan passa això, mana la columna del material, no la de la franja. Segon, compta quantes vegades has de partir per la meitat per arribar a la fracció que queda, i multiplica per la semivida. Tercer, escriu la resposta dient també què NO pots afirmar amb aquesta dada. Si cap rellotge no serveix per a la mostra, la resposta correcta no és inventar-se un número: és dir què dataries en lloc seu.",
      challenge:
        "Un informe de laboratori honest ha de dir també què queda fora del seu abast. Per a la mostra que no es pot datar directament, escriu el paràgraf que enviaries al client: què s'ha datat realment, quin interval en resulta, per quin principi geològic, i per què el resultat és un interval i no un número. Després, amb la data dels primers indicis de vida a la mà, respon a la pregunta gran: podem afirmar que la vida va aparèixer un cop i només un cop en aquest planeta, o només que a partir d'aquell moment ja n'hi havia? Quina prova faria falta per decidir-ho?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES / REPÀS ─────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de tocar cap dau, recollim d'on partim. No es corregeix: servirà per comparar-ho al final de la sessió.",
    prompts: [
      {
        kind: "write",
        text: "Tens una pedra a la mà i vols saber quants anys té. Què hauria de contenir a dins perquè, mesurant-la, en poguessis deduir l'edat? I una segona: creus que es pot saber l'edat exacta d'un os de dinosaure? Digues per què sí o per què no.",
        starter: "Perquè una pedra pogués dir la seva edat hauria de tenir a dins... perquè..."
      }
    ]
  },

  // ── EXPLORA (indagació · simulació de la semivida amb daus) ──
  exploreActivity: {
    what: "Cada equip rep un got amb uns quaranta daus. Cada dau és un àtom d'un element inestable que encara no s'ha transformat, i cada tirada representa un interval de temps sempre igual. Aboqueu tots els daus alhora dins d'una safata, aparteu els que mostrin un 6 —aquests s'han desintegrat i no tornen mai més al got— i anoteu quants en queden. Repetiu-ho sis vegades. Amb les vostres dades dibuixareu la corba del percentatge que queda a cada tirada, i després hi superposareu la corba de tota la classe sumada. La pregunta que heu de poder respondre en acabar és per què el conjunt es comporta d'una manera previsible quan cap dau individual no ho és.",
    who: { mode: "grup", label: "Equips de 3-4 (laboratori de simulació)" },
    time: { A: 26, B: 28 },
    apartats: "2",
    note: "Demostració a l'aula: en acabar, un membre de cada equip triat a l'atzar ha de dir, mirant el gràfic i sense llegir cap full, quantes tirades han calgut perquè en quedés la meitat i com ho ha llegit al gràfic. Si no hi ha prou daus, es pot fer amb monedes canviant la regla (es desintegra el que surti creu), però llavors la corba baixa molt més de pressa i amb tres o quatre tirades ja n'hi ha prou.",
    materials: "Un got o pot per equip amb uns 40 daus (o 40 monedes), una safata o capsa per abocar-los sense que caiguin a terra, regle i dos colors de bolígraf."
  },
  exploreInstructions: [
    "Compteu els daus del got i anoteu-ho com a tirada 0: aquest és el vostre 100 %",
    "Aboqueu tots els daus alhora dins la safata, aparteu els que mostrin un 6 i anoteu quants en queden",
    "Repetiu-ho fins a completar sis tirades, sense tornar mai cap dau apartat al got",
    "Passeu cada valor a percentatge i dibuixeu la corba del vostre equip al gràfic",
    "Sumeu les dades de tots els equips i dibuixeu, amb un altre color, la corba de tota la classe",
    "Llegiu al gràfic quantes tirades han calgut perquè en quedés el 50 %"
  ],
  exploreDuration: "28 min",
  appSrc: null,
  exploreNote: "Aquesta simulació és un model probabilístic, com el de les monedes de la SA4: allà predeieu proporcions de descendents, aquí quants àtoms queden. Hi ha una cosa que val la pena que descobriu vosaltres: penseu bé què hi fan, aquí, les rèpliques. I un avís: si el vostre equip diu «ens ha sortit malament» només perquè la corba no queda perfecta, encara no ha entès què és el que està simulant.",

  // ── EXPLICA ──────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Què tenia aquest planeta i no tenien els veïns",
      text: "La vida que coneixem necessita ==aigua líquida==, i l'aigua només és líquida dins d'una franja estreta de temperatures. Per això la primera condició és la ==distància== a l'estrella: massa a prop, l'aigua s'evapora i s'escapa; massa lluny, es queda glaçada per sempre. Ara bé, la distància tota sola no decideix res, i la Fig.1 ho ensenya sense dir-ho: hi ha un planeta ben col·locat dins la franja bona que no té aigua líquida a la superfície. La pregunta que has de resoldre a classe és quines ==altres== condicions hi entren en joc, i totes tenen a veure amb una mateixa cosa: què cal perquè un planeta ==tingui== una atmosfera i què cal perquè no la vagi ==perdent==. Quan tinguis la llista, la conclusió important no serà la llista, sinó què li passa a un raonament quan una condició es compleix i el resultat, tot i així, no es dona.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "De l'==atzar== d'un dau a la previsió d'un ==rellotge==",
      text: "Els àtoms d'alguns elements són ==inestables==: es transformen en àtoms d'un altre element, i quan ho fan ja no tornen enrere. El conjunt d'aquestes transformacions és el que s'anomena ==radioactivitat==, i és exactament el fenomen que has simulat amb els daus. El model té dues cares que has de separar bé abans de treure'n cap conclusió. Una és el que passa amb un ==àtom sol==, o amb un dau sol, en una tirada concreta. L'altra és el que passa amb un ==nombre enorme== d'àtoms alhora, que és sempre el cas d'una roca de veritat. Compara les dues corbes que dibuixaràs, la del teu equip i la de tota la classe, i pregunta't quina de les dues cares explica la diferència entre elles, si la probabilitat de cada dau és exactament la mateixa als dos casos. D'aquí sortirà la resposta a què hi fan, aquí, les ==rèpliques==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "==Semivida==, datació ==relativa== i datació ==absoluta==",
      text: "S'anomena ==semivida== el temps que ha de passar perquè se n'hagi transformat la ==meitat==. Compte amb el nom: no vol dir la meitat de la vida del conjunt. La regla que ho governa tot és una de sola: cada semivida es menja la meitat ==del que queda== en aquell moment, no la meitat del que hi havia al principi. Aplica-la tu unes quantes vegades seguides i veuràs per què la corba no arriba mai del tot a zero. La semivida de cada element és ==fixa== i no depèn de la temperatura ni de la pressió, i això és precisament el que la converteix en un ==rellotge== fiable. Aquest rellotge dona a la geologia una mena de datació que a la SA6 no tenies: allà, amb els ==principis geològics==, podies dir moltes coses sobre unes capes, però hi havia una pregunta que no podies respondre mai. Identificar quina és aquesta pregunta, i quina de les dues datacions respon cada cosa, és la feina de l'apartat 3 de la fitxa.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Quan la vida hi era, i què d'això podem ==afirmar==",
      text: "Aplicant aquests rellotges a les roques més antigues i als meteorits, els laboratoris situen la formació de la Terra fa uns ==4.600 milions d'anys==, i els primers ==indicis== de vida entre ==3.800== i ==3.500 milions d'anys== enrere: restes de carboni d'origen probablement biològic a les roques més antigues que s'han conservat, i ==estromatòlits==, estructures fetes per capes de microorganismes que encara avui es formen en algunes badies. Ara ve la part difícil, i és de llenguatge. Aquestes proves permeten construir dues frases que semblen iguals i no ho són gens: una diu que la vida va ==aparèixer== en aquell moment, l'altra diu que en aquell moment ja n'hi ==havia==. Decidir quina de les dues sosté la prova —i per què les roques anteriors, que gairebé no s'han conservat, hi tenen alguna cosa a veure— és el que se't demana a la fitxa. La mateixa prudència val per a la Fig.1, dibuixada a partir de l'==única== vida que coneixem. Això no és un defecte de la ciència: és la diferència entre ==explorar== i ==afirmar==.",
      type: "epistemic",
      badge: "🧭 Naturalesa de la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "On pot haver-hi aigua líquida a la superfície d'un planeta", src: "/images/sa7-s2-zona-habitable.svg", note: "La faixa verda diu on l'aigua líquida és possible, no on és segura: Mart hi és a dins i no en té a la superfície. Llegeix el requadre groc de sota abans de treure'n cap conclusió." },
    { id: "Fig.2", apartat: "2", before: true, title: "El protocol de la simulació (sense cap resultat)", src: "/images/sa7-s2-protocol-daus.svg", note: "Els quatre passos de la simulació i què representa cada element. Aquí no hi trobaràs cap dada: els números els genereu vosaltres a classe." },
    { id: "Fig.3", apartat: "2", before: false, title: "La graella del gràfic (en blanc)", src: "/images/sa7-s2-grafic-buit.svg", note: "És la graella de la fitxa, aquí per si has faltat: percentatge que queda a cada tirada, amb la línia del 50 % marcada per poder-hi llegir la semivida." },
    { id: "Fig.4", apartat: "3", before: false, title: "Com es llegeix una semivida en una corba", src: "/images/sa7-s2-semivida-exemple.svg", note: "Exemple resolt amb urani-235, que NO és cap de les mostres del laboratori de l'apartat 4: et serveix per veure com es llegeix la corba i com es fan les divisions successives per la meitat." },
    { id: "Fig.5", apartat: "4", before: true, title: "Els rellotges de què disposa el laboratori", src: "/images/sa7-s2-rellotges.svg", note: "Taula de dades: semivida de cada element, franja on serveix i material per al qual es fa servir, amb la regla per triar-lo. Sense aquestes dades no es pot fer l'apartat 4." },
    { id: "Fig.6", apartat: "4", before: false, title: "Un tall amb dues capes de cendra volcànica datades", src: "/images/sa7-s2-datacio-creuada.svg", note: "El cas de la mostra que no es pot datar directament. La figura et dona les dues dates de les cendres i prou: quin dels principis de la SA6 ho justifica, i quina edat en surt per a l'os, ho has de deduir tu a la fitxa." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa7-s2-fitxa-A.html", B: "/fitxes/sa7-s2-fitxa-B.html" },
  teoriaPdfUrl: null,
  elaborateNote: "Actua com un laboratori de datació: rebràs tres mostres —quatre, a la versió A— amb el percentatge d'element de partida que hi queda i hauràs de decidir, per a cadascuna, quin rellotge hi serveix, quina edat en resulta i què no pots afirmar amb aquesta dada. Una de les mostres no es pot datar directament de cap manera: dir-ho i explicar què dataries en lloc seu és la resposta correcta, no un fracàs.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S27 — Una Terra que ho tenia tot",
    steps: [
      { apartat: "0", title: "D'on partim", time: "5 min", phase: "engage", instruction: "Escriu què hauria de contenir una pedra perquè en poguessis deduir l'edat, i si creus que es pot saber l'edat exacta d'un os de dinosaure. No es corregeix.", hints: [] },
      { apartat: "1", title: "Què fa la Terra especial", time: "10 min", phase: "explain", instruction: "A partir de la Fig.1, digues quines condicions calen perquè hi hagi aigua líquida a la superfície i què passaria si cadascuna faltés. Després mira el cas de Mart.", hints: ["Pregunta't què passaria amb l'atmosfera si el planeta fos més petit.", "Si una condició es compleix i el resultat no es dona, què vol dir això sobre la condició?"] },
      { apartat: "2", title: "La simulació dels daus", time: "28 min (A: 26)", phase: "explore", instruction: "Feu les sis tirades, anoteu els daus que queden, passeu-ho a percentatge i dibuixeu la corba del vostre equip i la de tota la classe. Després llegiu al gràfic quantes tirades calen perquè en quedi la meitat.", hints: ["Abans de començar, escriu una predicció numèrica: la compararàs amb el resultat.", "Compara la teva corba amb la de la classe abans de dir que una de les dues està «malament»."] },
      { apartat: "3", title: "Semivida i les dues datacions", time: "12 min", phase: "explain", instruction: "Fes servir la Fig.4 per completar els càlculs de fraccions successives i escriu, amb les teves paraules, què dona la datació relativa que l'absoluta no dona i a l'inrevés.", hints: ["Passades dues semivides no queda zero: quant queda?", "L'ordre i el número responen preguntes diferents; escriu primer quina pregunta respon cadascun."] },
      { apartat: "4", title: "El laboratori de datació", time: "28 min (A: 32)", phase: "elabora", instruction: "Per a cada mostra: tria el rellotge amb la Fig.5, calcula l'edat i escriu què no pots afirmar. Amb la mostra que no es pot datar, digues què dataries en lloc seu i acota'n l'edat amb la Fig.6. Tanca l'apartat amb la posada en comú de la classe (10 min) i la metacognició del final de la fitxa (5 min): totes dues són dins d'aquest mateix apartat 4, no en tenen un de propi.", hints: ["Comprova sempre que l'edat que esperes cau dins la franja on el rellotge serveix, i mira també la columna del material.", "Compta quantes vegades has de partir per la meitat per arribar a la fracció que queda."] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Una roca volcànica conté el 25 % del potassi-40 que tenia quan es va formar. Sabent que la semivida del potassi-40 és de 1.300 milions d'anys, quina edat té la roca? Escriu el raonament, no només el número.", hint: "Compta quantes vegades has hagut de partir per la meitat per passar del 100 % al 25 %." },
    { id: "q2", type: "multiple", text: "Què vol dir exactament que un element té una semivida de 5.000 anys?", options: ["Que al cap de 5.000 anys s'haurà transformat tot", "Que al cap de 5.000 anys se n'haurà transformat la meitat, i al cap de 10.000 no en quedarà res", "Que al cap de 5.000 anys se n'haurà transformat la meitat, i al cap de 10.000 en quedarà una quarta part", "Que cada àtom concret dura exactament 5.000 anys abans de transformar-se"], correct: 2 },
    { id: "q3", type: "open", text: "Un company proposa datar un os de dinosaure de fa uns 66 milions d'anys amb carboni-14, que té una semivida de 5.730 anys. Explica-li per què no pot funcionar i digues què hauria de datar en lloc de l'os.", hint: "Fes servir la regla de fins on serveix un rellotge, i recorda què hi ha a sobre i a sota de l'os al terreny." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Torna a llegir el que has escrit a l'apartat 0 sobre què hauria de contenir una pedra per dir la seva edat. Què hi canviaries ara? De tota la sessió, quina és la idea que t'ha costat més d'acceptar: que no es pugui saber què farà un àtom concret, o que sí que es pugui saber què faran tots junts? I una última: després d'haver dit «aquesta mostra no la puc datar», com et sembla que quedava l'informe, més fluix o més sòlid?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Busca dues hipòtesis diferents sobre com va aparèixer la vida a la Terra i porta, per a cadascuna, dues coses escrites: una prova concreta que hi juga a favor i una cosa que encara no explica.",
    deadline: "Per a la propera sessió",
    note: "A la sessió següent les compararem totes juntes, i la feina servirà per decidir quina està més ben fonamentada. No cal que en facis cap resum llarg: n'hi ha prou amb la prova i el forat, però han de ser teus i els hauràs de defensar en veu alta."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: les condicions que fan possible l'aigua líquida, la diferència entre atzar individual i previsió del conjunt, la semivida i les dues menes de datació",
    "Estudia la Fig.4 (com es llegeix una semivida en una corba) i la Fig.5 (la taula de rellotges amb la regla per triar-ne un): són les dues que necessites per calcular qualsevol edat",
    "Demana la fitxa S27 i fes l'apartat 4 sencer, encara que no hagis pogut fer la simulació dels daus",
    "Comprova que saps respondre les tres preguntes de l'exit tiquet, sobretot per què el carboni-14 no serveix per a un os de dinosaure",
    "Fes la feina de casa: dues hipòtesis sobre l'origen de la vida, amb una prova a favor i un forat per a cadascuna. A la propera sessió es dona per feta"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA2", "OA4"],
  competencies: ["CE1", "CE4", "CE6"],
  criterisAvaluacio: ["1.1", "1.2", "4.1", "6.5"]
}
