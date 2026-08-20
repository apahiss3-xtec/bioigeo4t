export const sa6s1 = {
  id: "s1",
  saId: "sa6",
  title: "Un planeta amb memòria",
  sessionNumber: 1,
  biome: "sa6",
  duration: "2h",
  engageImage: "/images/sa6-s1-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Comença una nova situació i canvies d'ofici: durant les properes setmanes seràs geòleg o geòloga d'un planeta molt semblant a la Terra i n'hauràs de reconstruir la història. Avui rebreu el primer encàrrec: un mapa mut del planeta amb els seus continents escampats, un grapat de fòssils que apareixen en costes que ara estan separades per oceans, i unes serralades que semblen tallades a la meitat. La pregunta que va canviar la geologia fa cent anys és la mateixa que et faràs tu: aquests continents han estat sempre on són ara? Un meteoròleg alemany, Alfred Wegener, va gosar dir que no —que abans formaven una sola massa i que després es van separar— i durant dècades gairebé ningú el va creure. Avui tu tindràs a les mans les mateixes proves que ell i hauràs de decidir si tenia raó.",
  engageQuestion: "Si mai has vist moure's un continent —i ningú no ho ha vist mai, perquè triguen milions d'anys—, quines proves et convencerien que abans estaven junts i s'han separat? Escriu les que se t'acudeixin abans de mirar el mapa.",
  engageContext: "Aquesta és la sessió que obre la situació de geologia. És una sessió d'activació: no cal que ho sàpigues tot abans de començar, cal que et facis les preguntes bones. Primer recollirem què saps ja sobre per què hi ha terratrèmols, volcans o serralades. Després, en equip, faràs d'investigador amb el mapa del planeta: intentaràs encaixar-ne els continents i fer servir els fòssils guia com a proves per decidir quins estaven junts. A partir del que hàgiu trobat, entendràs la deriva continental de Wegener, la tectònica de plaques, els tipus de límits entre plaques i què les mou per dins. Acabaràs predient cap on es mouran els continents del planeta. La memòria del planeta és a les proves; la teva feina és aprendre a llegir-la.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Argumento, a partir de les proves (encaix de continents, fòssils guia, continuïtat de roques i serralades), per què és raonable pensar que continents ara separats van estar units, i explico per què una prova sola no n'hi ha prou.",
      "Explico la tectònica de plaques i distingeixo els tres tipus de límits (divergent, convergent, transformant) relacionant cadascun amb el que hi passa (es crea escorça, es destrueix o s'arruga, llisca) i amb el seu efecte (dorsals, fosses, orògens, terratrèmols).",
      "Relaciono el moviment de les plaques amb el seu motor, la convecció del mantell, i predic el moviment futur dels continents del planeta justificant-ho amb el tipus de límit.",
      "Valoro per què la hipòtesi de Wegener va ser rebutjada al seu temps i acceptada dècades després, i què ens diu això sobre com avança la ciència."
    ],
    B: [
      "Identifico, amb la guia, tres proves que indiquen que continents ara separats van estar units (l'encaix de les costes, els mateixos fòssils guia a banda i banda d'un oceà i les serralades que continuen) i explico què demostra cadascuna.",
      "Reconec els tres tipus de límits de plaques (divergent, convergent, transformant) i, amb el suport de l'esquema, relaciono cadascun amb el que hi passa i amb un exemple.",
      "Explico, amb ajuda, que les plaques es mouen perquè el mantell té corrents de convecció, i indico cap on es mou un continent segons el límit que té a prop.",
      "Reconec que la idea de Wegener no es va acceptar de seguida i dic una raó per la qual la ciència a vegades triga a canviar d'opinió."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: SA6 (3r trimestre) → bastida baixa.
  scaffoldFade: "baixa",
  apartatExtras: {
    "1": {
      scaffold:
        "Per decidir si dos continents van estar junts, no et fixis en una sola cosa: busca proves que coincideixin. (1) L'ENCAIX de les costes: encaixen com les peces d'un trencaclosques? (2) Els FÒSSILS GUIA: el mateix fòssil d'un animal o planta que no podia travessar l'oceà apareix a les dues costes? (3) Les ROQUES i SERRALADES: hi ha una serralada o un tipus de roca que sembla continuar de l'altre costat de l'oceà? Si tres proves diferents apunten al mateix, la conclusió és sòlida.",
      challenge:
        "Ordena les proves de més forta a més feble i justifica l'ordre: quina prova, ella sola, et convenceria menys i per què? Un escèptic de l'època de Wegener et diria que l'encaix de les costes és casualitat. Quina de les altres proves fa que aquesta objecció no s'aguanti?"
    },
    "2": {
      scaffold:
        "Els límits entre plaques són de tres tipus i la clau és mirar què hi passa amb l'escorça. DIVERGENT: les plaques se separen, puja magma i es crea escorça nova (dorsals oceàniques). CONVERGENT: les plaques xoquen; una s'enfonsa sota l'altra (subducció, fosses) o totes dues s'arruguen i formen muntanyes (orògens). TRANSFORMANT: les plaques llisquen de costat una contra l'altra, sense crear ni destruir escorça (grans terratrèmols). Associa cada tipus amb «es crea / es destrueix o s'arruga / llisca».",
      challenge:
        "En el teu mapa, una serralada al mig d'un continent i una fossa profunda a la vora d'un oceà són pistes de dos processos diferents que passen dins d'un MATEIX tipus de límit, el convergent: en un cas dues plaques xoquen i s'arruguen (orogen), en l'altre una placa s'enfonsa sota una altra (subducció). Digues quin procés correspon a cada cas i explica com ho saps a partir del que passa amb l'escorça."
    },
    "3": {
      scaffold:
        "Si les plaques es mouen, alguna cosa les ha d'empènyer. Dins la Terra fa molta calor, i aquesta calor fa que el material del mantell es mogui en corrents de CONVECCIÓ: el material calent puja, s'escampa per sota de les plaques arrossegant-les, es refreda i torna a baixar. És el mateix que passa amb l'aigua d'una olla que bull o amb l'aire calent d'un radiador. Aquest era el motor que li faltava a Wegener per convèncer tothom.",
      challenge:
        "Wegener sabia QUE els continents es movien però no sabia PER QUÈ, i per això no el van creure. Explica per què, en ciència, descriure un fenomen no és suficient si no en trobes el mecanisme, i posa un exemple d'una altra idea que hagi necessitat trobar el seu «motor» per ser acceptada."
    },
    "4": {
      scaffold:
        "Per predir cap on es mourà un continent, mira quins límits té a prop. Si té una dorsal (límit divergent) a un costat, aquell costat l'empeny i s'allunya. Si té una fossa (subducció) a l'altre, per allà l'escorça s'enfonsa. Fes una fletxa des de la dorsal cap a la fossa: aquesta és, aproximadament, la direcció del moviment.",
      challenge:
        "Fes una predicció a llarg termini per al teu planeta: si els moviments actuals continuen, quins continents s'ajuntaran i quins oceans es tancaran o s'obriran? El cicle de Wilson diu que els oceans neixen, creixen i moren; situa el teu planeta en aquest cicle i justifica-ho."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES / REPÀS ─────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de rebre el mapa, posem en comú què sabeu ja del planeta on vivim. No es corregeix: serveix per veure d'on partim.",
    prompts: [
      {
        kind: "write",
        text: "Per què creus que hi ha zones de la Terra amb molts terratrèmols i volcans i altres on gairebé no n'hi ha mai? I per què hi ha serralades tan altes com l'Himàlaia?",
        starter: "Crec que els terratrèmols i els volcans es concentren on... i les serralades es formen quan..."
      }
    ]
  },

  // ── EXPLORA (ABP · encaix de continents + fòssils guia) ──
  exploreActivity: {
    what: "Rebeu el mapa mut del vostre planeta amb els continents retallats i un joc de fitxes de fòssils guia. En equip, intenteu encaixar els continents com un trencaclosques i, després, comproveu-ho amb les proves: on apareix cada fòssil guia? Si un mateix fòssil terrestre apareix a dues costes ara separades per un oceà, què vol dir? Amb l'encaix i els fòssils, proposeu quins continents estaven junts i formuleu una primera explicació de com era el planeta al passat. No busqueu la resposta «bona»: busqueu una explicació que les proves aguantin.",
    who: { mode: "grup", label: "Equips de 3-4 (geòlegs del planeta)" },
    time: 30,
    note: "Indagació: sou vosaltres qui proposeu l'explicació a partir de les proves, com va fer Wegener. Una prova sola pot ser casualitat; la força ve de fer coincidir proves diferents (encaix + fòssils + roques)."
  },
  exploreInstructions: [
    "Retalleu (o moveu) els continents del mapa mut i proveu d'encaixar-los per les costes, com un trencaclosques",
    "Col·loqueu les fitxes de fòssils guia: marqueu a quines costes apareix cada fòssil",
    "Busqueu casos d'un mateix fòssil guia a dues costes ara separades per un oceà: anoteu-los com a prova",
    "Comproveu si alguna serralada o tipus de roca sembla continuar d'un continent a un altre",
    "Proposeu quins continents estaven junts i escriviu una primera explicació de com era el planeta al passat, justificada amb les proves"
  ],
  exploreDuration: "30 min",
  appSrc: null,
  exploreNote: "Demostració a l'aula: cada equip ensenya el seu encaix i defensa amb quines proves concretes (quins fòssils, quines costes, quines serralades) sosté que dos continents van estar units.",

  // ── EXPLICA ──────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Wegener i la ==deriva continental==: llegir la memòria del planeta",
      text: "Fa cent anys, Alfred ==Wegener== va proposar una idea agosarada: els continents no estan fixos, sinó que es ==mouen== lentament, i abans formaven una sola massa que després es va trencar. La va sostenir amb ==proves== que no es podien explicar d'una altra manera: l'==encaix== de les costes (Amèrica i Àfrica encaixen), els ==fòssils guia== —el mateix fòssil terrestre a dues costes ara separades per un oceà que aquell ésser viu mai hauria pogut travessar—, i la ==continuïtat== de roques i serralades d'un continent a un altre. Cap prova sola és definitiva, però totes juntes apunten al mateix: els continents han estat units. Aquesta és la ==memòria== del planeta.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "La ==tectònica de plaques== i els tres tipus de ==límits==",
      text: "Avui sabem que la capa exterior rígida de la Terra (la ==litosfera==) està trencada en ==plaques== que es mouen sobre una capa més calenta i deformable. On dues plaques es toquen hi ha un ==límit==, i n'hi ha de tres tipus segons què passa amb l'escorça. ==Divergent==: les plaques se ==separen==, puja magma i es crea ==escorça nova== (les ==dorsals== oceàniques). ==Convergent==: les plaques ==xoquen==; una s'enfonsa sota l'altra (==subducció==, amb ==fosses== profundes) o totes dues s'==arruguen== formant serralades (==orògens==, com l'Himàlaia). ==Transformant==: les plaques ==llisquen== de costat, sense crear ni destruir escorça, i hi ha grans ==terratrèmols==. Per això els terratrèmols i els volcans no són a tot arreu: es concentren als ==límits==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "El ==motor==: la convecció del mantell (el que li faltava a Wegener)",
      text: "Si les plaques es mouen, alguna cosa les ha d'empènyer. La resposta és la ==calor== interna de la Terra: el ==mantell== es mou en corrents de ==convecció== —el material calent puja, s'escampa sota les plaques i les arrossega, es refreda i torna a baixar—, igual que l'aigua d'una olla que bull. Aquest ==motor== és el que li ==faltava== a Wegener: ell va descriure que els continents es movien, però no sabia ==per què==, i per això molts científics no el van creure durant dècades. Quan es van descobrir noves proves (el ==magnetisme== de les roques i l'edat del ==fons oceànic==), la idea es va acceptar del tot.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Una hipòtesi ==rebutjada== que es va acabar acceptant",
      text: "La història de la deriva continental és un exemple de com ==avança la ciència==. Wegener tenia raó en el ==què== (els continents es mouen) però li faltava el ==com== (el mecanisme), i sense mecanisme la comunitat científica va ==rebutjar== la seva idea durant molt de temps. No va ser tossuderia: en ciència, una bona explicació ha d'aguantar les ==proves== i oferir un ==mecanisme== plausible. Quan van arribar proves noves i el motor de la convecció, la mateixa comunitat va ==canviar d'opinió==. Que la ciència es ==revisi== amb noves dades no és un defecte: és exactament el que la fa fiable.",
      type: "epistemic",
      badge: "🧭 Naturalesa de la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: false, title: "L'encaix dels continents i els fòssils guia (RESOLT)", src: "/images/sa6-s1-deriva.svg", note: "Model resolt: dos continents ara separats per un oceà que encaixen per les costes, amb el mateix fòssil guia (un rèptil terrestre i una falguera) apareixent a totes dues bandes i una serralada que continua d'un a l'altre. És la mena de raonament que has de fer amb el mapa del teu planeta; a la fitxa el faràs tu sobre un mapa en blanc." },
    { id: "Fig.2", apartat: "2", before: false, title: "Els tres tipus de límits de plaques", src: "/images/sa6-s1-limits.svg", note: "Esquema dels tres tipus de límits: divergent (dorsal, es crea escorça), convergent (subducció amb fossa, o orogen que arruga muntanyes) i transformant (les plaques llisquen, terratrèmols). Cada límit té associat què passa amb l'escorça i el seu relleu característic." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa6-s1-fitxa-A.html", B: "/fitxes/sa6-s1-fitxa-B.html" },
  teoriaPdfUrl: null,
  elaborateNote: "Torna al mapa del teu planeta amb tot el que has après: marca-hi els tipus de límits que hi reconeixes i dibuixa fletxes amb la direcció en què es mouran els continents si els moviments actuals continuen. Justifica cada fletxa amb el límit que la provoca. Aquesta predicció és el primer pas del vídeo divulgatiu que farem al final de la situació.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S21 — Un planeta amb memòria",
    steps: [
      { apartat: "0", title: "Què saps ja del planeta", time: "10 min", phase: "engage", instruction: "Respon per què creus que els terratrèmols i els volcans es concentren en unes zones i per què es formen les serralades. No es corregeix; és el punt de partida.", hints: [] },
      { apartat: "1", title: "Les proves de la deriva", time: "30 min", phase: "explore", instruction: "Amb el mapa del planeta, identifica les tres proves que dos continents van estar units: l'encaix, els fòssils guia i la continuïtat de roques/serralades. Estudia la Fig.1 com a model.", hints: ["Una prova sola pot ser casualitat; busca'n tres que coincideixin.", "Un fòssil terrestre a dues costes separades per un oceà és una prova molt forta: aquell ésser no podia travessar el mar."] },
      { apartat: "2", title: "Els tipus de límits", time: "25 min", phase: "explain", instruction: "Classifica els límits del teu planeta en divergent, convergent o transformant fixant-te en què passa amb l'escorça (es crea / es destrueix o s'arruga / llisca). Fes servir la Fig.2.", hints: ["Dorsal = divergent; fossa o serralada = convergent; gran falla amb terratrèmols = transformant.", "Relaciona cada límit amb el seu relleu."] },
      { apartat: "3", title: "El motor de les plaques", time: "15 min", phase: "explain", instruction: "Explica amb les teves paraules per què es mouen les plaques (convecció del mantell) i per què això és el que li faltava a Wegener.", hints: ["Pensa en l'aigua d'una olla que bull: el calent puja, el fred baixa.", "Descriure un fenomen no és suficient: cal el mecanisme."] },
      { apartat: "4", title: "Predir el futur del planeta", time: "20 min", phase: "elabora", instruction: "Dibuixa al mapa les fletxes de moviment dels continents segons els límits que hi ha i justifica cap on aniran. Situa el planeta en el cicle de Wilson.", hints: ["Des de la dorsal (empeny) cap a la fossa (s'enfonsa).", "El cicle de Wilson: els oceans neixen, creixen i moren."] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "El mateix fòssil d'un rèptil terrestre petit apareix a la costa d'Àfrica i a la de Sud-amèrica, separades avui per l'oceà Atlàntic. Quina explicació és més sòlida i per què: que va travessar l'oceà nedant, o que els dos continents van estar units?", hint: "Un rèptil terrestre petit no pot travessar un oceà; la prova apunta que les costes van estar juntes." },
    { id: "q2", type: "multiple", text: "En un límit DIVERGENT (com una dorsal oceànica), què passa amb l'escorça?", options: ["Es crea escorça nova perquè puja magma quan les plaques se separen", "Es destrueix escorça perquè una placa s'enfonsa sota l'altra", "No es crea ni es destrueix escorça, les plaques només llisquen de costat", "L'escorça s'arruga i forma una gran serralada"], correct: 0 },
    { id: "q3", type: "open", text: "Per què molts científics no van creure Wegener quan va dir que els continents es movien, tot i que tenia proves? Què li faltava?", hint: "Li faltava el mecanisme (el motor): no sabia PER QUÈ es movien. Això es va resoldre amb la convecció del mantell." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Comencem una situació nova. Al principi de la sessió, quines proves havies dit que et convencerien que els continents s'han mogut? Coincideixen amb les que has acabat fent servir? Què t'ha sorprès més de la idea que un planeta «guarda memòria» del seu passat, i què t'agradaria saber llegir millor a les roques?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Busca una notícia recent d'un terratrèmol o una erupció volcànica al món i localitza on ha passat en un mapa. Fixa't si és a prop d'un límit de plaques i porta-la a la propera sessió.",
    deadline: null,
    note: "Servirà per connectar la teoria d'avui amb fets reals i actuals a la propera sessió (què mou les plaques + simulador de tectònica)."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: la deriva continental de Wegener i les seves proves, els tres tipus de límits de plaques, el motor de la convecció i com una hipòtesi rebutjada es va acabar acceptant",
    "Estudia la Fig.1 (encaix de continents i fòssils guia resolt) i la Fig.2 (els tres tipus de límits)",
    "Descarrega la fitxa S21 i completa les proves de la deriva, la classificació de límits i la predicció de moviments al mapa",
    "Respon l'exit tiquet: per què un fòssil terrestre a dues costes separades és una prova forta, què passa a un límit divergent i què li faltava a Wegener",
    "Porta per a la propera sessió una notícia d'un terratrèmol o una erupció volcànica localitzada al mapa"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1"],
  competencies: ["CE1", "CE3", "CE6"],
  criterisAvaluacio: ["1.1", "1.2", "3.1", "6.2"]
}
