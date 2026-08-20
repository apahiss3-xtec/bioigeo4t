export const sa6s2 = {
  id: "s2",
  saId: "sa6",
  title: "Què mou les plaques?",
  sessionNumber: 2,
  biome: "sa6",
  duration: "2h",
  engageImage: "/images/sa6-s2-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "A la sessió anterior vas decidir, amb les proves a la mà, que els continents del teu planeta havien estat units i s'havien separat. Wegener també ho va veure, però els seus col·legues no el van creure per una raó demolidora: no sabia dir QUÈ movia els continents. Sense un motor, la deriva era màgia. Avui ets tu qui ha de trobar el motor. No et donarem la resposta: et donarem un got d'aigua calenta, colorant, sorra i temps. Amb això muntaràs un model que reprodueixi, a escala d'una taula, el que passa a milers de quilòmetres sota els teus peus. I amb un simulador de tectònica veuràs néixer i tancar-se oceans sencers en segons —el que a la Terra triga centenars de milions d'anys.",
  engageQuestion: "Un oceà pot néixer i, molt més tard, tancar-se del tot fins a desaparèixer. Què creus que hi ha SOTA les plaques que les empeny a separar-se i a xocar? Escriu la teva hipòtesi abans de muntar cap model: què esperaries veure si tinguessis raó?",
  engageContext: "Aquesta és una sessió de desenvolupament: passem del QUÈ (els continents es mouen, S21) al PER QUÈ (què els mou) i al COM HO SABEM (models i simulacions). Primer posarem en comú la notícia de terratrèmol o volcà que has portat de casa i la situarem sobre els límits de plaques. Després, en equip, dissenyaràs i muntaràs un model d'indagació per posar a prova la teva hipòtesi sobre el motor de les plaques: la convecció (com es mou un fluid quan s'escalfa per sota) i, si vols, l'estratificació (com es dipositen els sediments i queden en capes). No busques que «surti bé»: busques que el model et deixi observar alguna cosa que confirmi o desmenteixi la teva hipòtesi. A partir d'aquí entendràs la convecció del mantell, el cicle de Wilson (com neixen, creixen i moren els oceans) i com les capes de roca guarden l'ordre en què van passar les coses. Acabaràs ordenant la història d'una columna d'estrats.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Dissenyo un model d'indagació (convecció amb aigua calenta i colorant, i/o estratificació amb sediments) per posar a prova una hipòtesi sobre el motor de les plaques, indicant què representa cada part del model, què observaria si la hipòtesi és certa i quines són les limitacions del model.",
      "Explico la convecció del mantell com a motor de la tectònica de plaques i la relaciono amb el que passa als límits (dorsal, subducció), argumentant per què un model de laboratori pot representar un procés que no podem observar directament.",
      "Explico el cicle de Wilson (naixement, creixement, tancament i desaparició d'un oceà) i el faig servir per situar i justificar en quina fase es troba un oceà concret del meu planeta o de la Terra.",
      "Dedueixo l'ordre dels esdeveniments d'una columna d'estrats aplicant els principis de superposició i horitzontalitat, i argumento la història que expliquen les roques."
    ],
    B: [
      "Munto, amb la guia, un model de convecció (aigua calenta + colorant) i descric què observo, què representa cada part del model (aigua = mantell, colorant = corrent, superfície = plaques) i una limitació del model.",
      "Explico, amb ajuda, que les plaques es mouen per la convecció del mantell i relaciono els corrents que pugen i baixen amb el que passa a les dorsals i a les zones de subducció.",
      "Reconec les fases del cicle de Wilson (un oceà neix, creix i es tanca) i n'identifico un exemple amb el suport de l'esquema.",
      "Ordeno els esdeveniments d'una columna d'estrats senzilla amb el principi de superposició (el que és a sota és més antic) i explico què va passar primer."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: SA6 (3r trimestre) → bastida baixa.
  scaffoldFade: "baixa",
  apartatExtras: {
    "1": {
      scaffold:
        "Un bon model no ha de ser realista: ha de deixar-te OBSERVAR el que vols estudiar. Per a la convecció: escalfa aigua per un punt (per sota o per un costat) i deixa-hi caure una gota de colorant. Abans de mirar, decideix què representa cada cosa —l'aigua és el mantell, el colorant fa visible el corrent, la superfície són les plaques— i escriu QUÈ esperes veure si la teva hipòtesi (la calor mou el fluid) és certa. Després observa i compara amb la predicció.",
      challenge:
        "Dissenya el teu model com un experiment: quina és la teva hipòtesi, què representa cada part, què observaràs (variable que mires) i què deixaràs igual perquè la comparació sigui justa? Un company diu que «l'aigua no és roca, així que el model no serveix per a res». Respon-li: què SÍ pot ensenyar-te aquest model sobre el mantell i què NO, i per què tot i les diferències continua sent útil."
    },
    "2": {
      scaffold:
        "La convecció és el motor. Dins la Terra fa molta calor: el material del mantell calent és menys dens, puja; quan arriba a dalt s'escampa sota les plaques i les arrossega; en refredar-se es torna més dens i baixa. On dos corrents pugen i se separen, s'obre una DORSAL i neix escorça (l'oceà creix). On un corrent baixa, l'escorça s'enfonsa: SUBDUCCIÓ (l'oceà es tanca). Relaciona: corrent que puja → dorsal → oceà que s'obre; corrent que baixa → subducció → oceà que es tanca.",
      challenge:
        "El teu model de laboratori i el mantell real es diferencien en la mida, el temps i el material (aigua vs roca sòlida que flueix lentíssimament). Explica per què, malgrat aquestes diferències, el model captura el mecanisme essencial de la convecció, i posa un altre exemple de la vida quotidiana on vegis convecció (radiador, olla, aire d'una habitació)."
    },
    "3": {
      scaffold:
        "El cicle de Wilson diu que els oceans tenen vida: NEIXEN quan un continent es trenca i s'obre una dorsal (com el Rift africà avui); CREIXEN mentre la dorsal fabrica escorça nova (com l'Atlàntic); es TANQUEN quan comença la subducció als marges (com el Pacífic, que s'encongeix); i DESAPAREIXEN quan els continents xoquen i aixequen una serralada (com quan es va tancar l'oceà que hi havia on ara hi ha l'Himàlaia). Situa cada oceà en la seva fase.",
      challenge:
        "Tria un oceà del teu planeta (o de la Terra) i justifica en quina fase del cicle de Wilson es troba a partir dels límits que l'envolten (té dorsal? té fosses de subducció als marges?). Després fes una predicció: què li passarà d'aquí a 100 milions d'anys i per què?"
    },
    "4": {
      scaffold:
        "Les roques guarden l'ordre del temps. Principi d'HORITZONTALITAT: els sediments es dipositen en capes horitzontals. Principi de SUPERPOSICIÓ: si no s'han capgirat, la capa de sota és més antiga que la de sobre. Per llegir una columna d'estrats, comença per baix (el més antic) i puja fins a dalt (el més recent), anotant què va passar a cada capa (mar, riu, volcà, fòssils…).",
      challenge:
        "En una columna real de vegades hi ha una capa inclinada sota d'unes altres d'horitzontals, o falta un tros de la sèrie. Explica què hauria d'haver passat perquè unes capes quedin inclinades i després en vinguin d'horitzontals a sobre (pensa en què fan les plaques), i què vol dir que «falti» un tros de la història a les roques."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES / REPÀS ─────────────────────
  ideesPrevies: {
    startPoint:
      "Compartim les notícies de terratrèmols i volcans que heu portat de casa i les situem sobre el mapa de límits de plaques de S21. Coincideixen amb els límits? Això ens porta la pregunta d'avui: què hi ha a sota que ho mou tot?",
    prompts: [
      {
        kind: "write",
        text: "La notícia que has portat (terratrèmol o volcà), on ha passat? És a prop d'un límit de plaques dels que vas veure a la sessió anterior? Què creus que hi ha sota les plaques que provoca aquests fenòmens?",
        starter: "La meva notícia és de... Està a prop d'un límit... Crec que sota les plaques hi ha..."
      }
    ]
  },

  // ── EXPLORA (ABP · model d'indagació dissenyat per l'alumnat) ──
  exploreActivity: {
    what: "En equip, dissenyareu i muntareu un MODEL d'indagació per posar a prova la vostra hipòtesi sobre el motor de les plaques. L'opció principal és la CONVECCIÓ: en un recipient transparent amb aigua, escalfeu-la per un punt i deixeu-hi caure colorant per fer visible com es mou el fluid quan hi ha una diferència de temperatura. Opcionalment, podeu muntar un model d'ESTRATIFICACIÓ: barregeu sorra i aigua en un pot, agiteu i deixeu decantar per veure com es dipositen les capes (com els sediments al fons del mar). Abans d'observar res, heu de decidir què representa cada part del model i què esperaríeu veure si la vostra hipòtesi és certa. Després, comparareu el model amb el simulador tectonic-explorer.concord.org, que us deixa obrir i tancar oceans i veure el cicle de Wilson accelerat.",
    who: { mode: "grup", label: "Equips de 3-4 (geòlegs modelitzadors)" },
    time: 35,
    note: "Indagació oberta: vosaltres decidiu la hipòtesi, el muntatge i què mirareu. Un model no és la realitat, però un bon model us deixa veure el mecanisme. El simulador complementa el model físic: mostra el cicle de Wilson que no cabria en una taula."
  },
  exploreInstructions: [
    "Escriviu la vostra hipòtesi sobre el motor de les plaques i què representarà el vostre model (aigua = mantell, colorant = corrent, superfície = plaques…)",
    "Munteu el model de convecció: aigua en un recipient transparent, una font de calor per un punt i unes gotes de colorant; abans de mirar, escriviu què espereu observar",
    "Observeu i dibuixeu el moviment del colorant: on puja, on baixa, on s'escampa per la superfície. Compareu-ho amb la vostra predicció",
    "(Opcional) Munteu el model d'estratificació: sorra + aigua en un pot, agiteu, deixeu decantar i observeu com queden les capes",
    "Obriu el simulador tectonic-explorer.concord.org i proveu d'obrir i tancar un oceà: relacioneu el que veieu amb el vostre model de convecció",
    "Concloeu: què confirma o desmenteix el vostre model sobre el motor de les plaques? Quines limitacions té?"
  ],
  exploreDuration: "35 min",
  exploreMaterials: ["Recipient transparent (got alt o cubeta)", "Aigua i una font de calor segura (aigua molt calenta d'una tetera, o placa)", "Colorant alimentari o tinta", "Pot amb tapa, sorra fina i aigua (model d'estratificació, opcional)", "Ordinador/tauleta amb tectonic-explorer.concord.org", "Fitxa de registre (hipòtesi, dibuix, conclusió)"],
  appSrc: "https://tectonic-explorer.concord.org",
  exploreNote: "Demostració a l'aula: cada equip ensenya el seu model, explica què representa cada part i què ha observat, i defensa si la seva hipòtesi sobre el motor s'aguanta. Seguretat: l'aigua calenta la manipula el docent o amb molta cura; no cal que bulli.",

  // ── EXPLICA ──────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Modelitzar el que no es pot veure: la ==indagació== amb models",
      text: "No podem baixar al ==mantell== ni esperar milions d'anys, així que els geòlegs fan servir ==models== per estudiar-lo. Un model no és una còpia de la realitat: és una ==simplificació== que ens deixa ==observar== un mecanisme. El teu got d'aigua calenta amb colorant no és el mantell —és aigua, no roca, i triga segons, no milions d'anys—, però reprodueix l'essencial: què li passa a un ==fluid== quan s'escalfa de manera desigual. La ==clau== d'un bon model és decidir abans QUÈ representa cada part i QUÈ esperes ==observar== si la teva hipòtesi és certa. Comparar la ==predicció== amb el que passa és fer ciència, encara que sigui en un got.",
      type: "epistemic",
      badge: "🧭 Naturalesa de la ciència"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "El ==motor==: la convecció del mantell",
      text: "La ==calor== interna de la Terra mou el mantell en corrents de ==convecció==. El material calent és menys ==dens== i ==puja==; quan arriba a dalt, s'escampa sota les plaques i les ==arrossega==; en refredar-se es torna més dens i ==baixa==. És el mateix que has vist al got: el colorant calent puja, s'escampa per la superfície i torna a baixar pels costats. On dos corrents ==pugen== i se separen, s'obre una ==dorsal== i neix escorça nova (l'oceà s'obre). On un corrent ==baixa==, l'escorça s'enfonsa: ==subducció== (l'oceà es tanca). Aquest era el ==motor== que li faltava a Wegener per convèncer tothom.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "El ==cicle de Wilson==: els oceans neixen, creixen i moren",
      text: "Els oceans tenen una ==vida==. ==Neixen== quan un continent es ==trenca== i s'hi obre una dorsal (com el ==Rift== de l'Àfrica oriental avui). ==Creixen== mentre la dorsal fabrica escorça nova a banda i banda (com l'==Atlàntic==). Es ==tanquen== quan als seus marges comença la ==subducció== i l'escorça oceànica s'enfonsa més ràpid del que es crea (com el ==Pacífic==, que s'encongeix). I ==desapareixen== quan els dos continents que hi havia als costats ==xoquen== i aixequen una serralada (com quan es va tancar l'oceà de Tetis i es va formar l'==Himàlaia==). La diferència entre ==néixer== i ==créixer== és l'==edat== i l'==amplada==: un oceà que acaba de trencar el continent encara és una ==franja estreta== dins d'una vall; un que fa desenes de milions d'anys que fabrica escorça ja és ==ample==. Aquest recorregut és el ==cicle de Wilson==: explica per què un oceà pot néixer i, centenars de milions d'anys després, ja no existir.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Llegir el temps a les roques: ==columnes== i principis geològics",
      text: "El passat del planeta queda ==registrat== a les roques. Els sediments es dipositen en capes (==estrats==) gairebé ==horitzontals== (principi d'==horitzontalitat==). Si després no s'han capgirat, la capa de ==sota== és més ==antiga== que la de sobre (principi de ==superposició==). Llegint una ==columna== d'estrats de baix a dalt reconstruïm l'==ordre== dels esdeveniments: quan hi havia mar, quan un riu, quan una erupció, quins ==fòssils== hi vivien. I si un tros de capes apareix ==inclinat== sota d'altres d'horitzontals, o si en ==falta== un tros, això també és informació: ens diu que les plaques van moure el terreny o que l'erosió va esborrar una part de la història. Les roques són la ==memòria== del planeta i tenen un ordre.",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: false, title: "La convecció del mantell mou les plaques", src: "/images/sa6-s2-conveccio.svg", note: "Esquema de les cel·les de convecció del mantell: el material calent puja sota la dorsal (on neix escorça i s'obre l'oceà), s'escampa arrossegant les plaques i baixa a la zona de subducció (on l'escorça s'enfonsa i l'oceà es tanca). És el mateix moviment que has fet visible amb el colorant al got d'aigua calenta." },
    { id: "Fig.2", apartat: "3", before: false, title: "El cicle de Wilson: la vida d'un oceà", src: "/images/sa6-s2-wilson.svg", note: "Les quatre fases del cicle de Wilson: naixement (rift continental), creixement (dorsal i oceà ample), tancament (subducció als marges) i desaparició (col·lisió continental i serralada). Cada fase amb un exemple real actual." },
    { id: "Fig.3", apartat: "4", before: false, title: "Columna d'estrats: llegir l'ordre del temps", src: "/images/sa6-s2-columna.svg", note: "Columna d'estrats amb diferents capes (marina, fluvial, cendra volcànica) i fòssils. Aplicant la superposició, la capa de sota és la més antiga: es llegeix de baix a dalt per reconstruir la història. Model per a la web; a la fitxa n'ordenaràs una tu." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa6-s2-fitxa-A.html", B: "/fitxes/sa6-s2-fitxa-B.html" },
  teoriaPdfUrl: null,
  elaborateNote: "A la fitxa ordenaràs els esdeveniments d'una columna d'estrats aplicant la superposició (el que és a sota és més antic) i explicaràs la història que expliquen les roques. Aquesta habilitat de reconstruir el passat a partir de proves és la que faràs servir en el vídeo divulgatiu «Gondwana Tales» per explicar la història del teu planeta.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S22 — Què mou les plaques?",
    steps: [
      { apartat: "0", title: "La notícia i la pregunta d'avui", time: "10 min", phase: "engage", instruction: "Situa la teva notícia de terratrèmol/volcà sobre els límits de plaques i escriu la teva hipòtesi sobre què mou les plaques. No es corregeix; és el punt de partida.", hints: [] },
      { apartat: "1", title: "El teu model d'indagació", time: "35 min", phase: "explore", instruction: "Escriu la hipòtesi, munta el model de convecció (aigua calenta + colorant), decideix què representa cada part i què esperes veure, i després dibuixa i descriu el que observes.", hints: ["Un model no ha de ser realista, ha de deixar-te observar el mecanisme.", "Abans de mirar, escriu la predicció: així pots comparar-la amb el que passa."] },
      { apartat: "2", title: "La convecció com a motor", time: "20 min", phase: "explain", instruction: "Relaciona el que has vist al got amb la convecció del mantell: on puja el corrent (dorsal, oceà s'obre) i on baixa (subducció, oceà es tanca). Fes servir la Fig.1.", hints: ["Calent puja i és menys dens; fred baixa i és més dens.", "Corrent que puja → dorsal; corrent que baixa → subducció."] },
      { apartat: "3", title: "El cicle de Wilson", time: "20 min", phase: "explain", instruction: "Identifica les fases del cicle de Wilson (neix, creix, es tanca, desapareix) i associa cada fase a un oceà real amb la Fig.2.", hints: ["Rift africà = neix; Atlàntic = creix; Pacífic = es tanca; Himàlaia = va desaparèixer un oceà.", "Mira els límits que envolten l'oceà per saber en quina fase és."] },
      { apartat: "4", title: "Llegir una columna d'estrats", time: "15 min", phase: "elabora", instruction: "Ordena els esdeveniments d'una columna d'estrats de baix (més antic) a dalt (més recent) i explica la història que expliquen les roques.", hints: ["Principi de superposició: el que és a sota és més antic.", "Cada capa és una escena de la història: mar, riu, volcà, fòssils…"] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Al teu model, l'aigua calenta amb colorant pujava, s'escampava per dalt i tornava a baixar pels costats. Com relaciones aquest moviment amb el que fa el mantell sota les plaques? Digues què representava cada part del model.", hint: "L'aigua = mantell; el colorant fa visible el corrent de convecció; la superfície = les plaques que el corrent arrossega. El calent puja (dorsal) i el fred baixa (subducció)." },
    { id: "q2", type: "multiple", text: "Al planeta de Gondwana Tales, una vall llarga i estreta parteix un continent pel mig: el terreny s'esquerda i se separa, hi ha volcans i terratrèmols alineats al fons de la vall, i el mar tot just ha començat a entrar-hi per un extrem. Fa 20 milions d'anys allà no hi havia ni vall ni mar: era continent sencer. En quina fase del cicle de Wilson es troba?", options: ["Naixement", "Creixement", "Tancament", "Desaparició"], correct: 0 },
    { id: "q3", type: "open", text: "En una columna d'estrats trobes, de baix a dalt: (1) una capa amb fòssils marins, (2) una capa de sorra de riu, (3) una capa de cendra volcànica. Quin esdeveniment va passar primer i quin darrer? Amb quin principi ho decideixes?", hint: "Primer el mar (capa de sota, més antiga), després el riu, i finalment el volcà (capa de dalt, més recent). Principi de superposició." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Al principi de la sessió, quina hipòtesi tenies sobre què mou les plaques? El teu model l'ha confirmada, l'ha canviada o t'ha fet dubtar? Què t'ha convençut més: el model del got, el simulador o l'explicació? I què creus que el teu model NO podia ensenyar-te sobre el mantell real?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Busca una imatge d'una columna o d'un tall geològic real (un talús de carretera, un penya-segat, una pedrera) i identifica-hi almenys tres capes diferents. Anota quina creus que és la més antiga i per què.",
    deadline: null,
    note: "Servirà per connectar amb la propera sessió, on aprendrem a llegir la història completa a les roques amb tots els principis geològics."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: com es fa servir un model per estudiar el que no es pot veure, la convecció del mantell com a motor de les plaques, el cicle de Wilson i com es llegeix una columna d'estrats",
    "Estudia la Fig.1 (convecció del mantell), la Fig.2 (cicle de Wilson) i la Fig.3 (columna d'estrats)",
    "Si pots, munta a casa el model de convecció: un got d'aigua ben calenta i unes gotes de colorant, i observa com es mou",
    "Prova el simulador tectonic-explorer.concord.org: obre i tanca un oceà i relaciona-ho amb la convecció",
    "Descarrega la fitxa S22, completa el model d'indagació, la convecció, el cicle de Wilson i l'ordenació de la columna d'estrats",
    "Respon l'exit tiquet: relaciona el model amb el mantell, situa un oceà al cicle de Wilson i ordena una columna d'estrats"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2"],
  competencies: ["CE1", "CE3", "CE6"],
  criterisAvaluacio: ["1.2", "3.2", "6.2", "6.5"]
}
