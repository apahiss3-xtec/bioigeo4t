export const sa7s2 = {
  id: "s2", saId: "sa7",
  title: "La Terra que tremola",
  sessionNumber: 2, biome: "sa7", duration: "2h",
  engageImage: "/images/sa7-s2-terratrèmol.jpg",

  engageQuestion: "El 19 de novembre de 2021, un terratrèmol de magnitud 4,2 va sacsejar l'Alt Empordà. El 2023, una sèrie sísmica va afectar els Pirineus lleidatans. Per quina raó tremola la terra a Catalunya si no som a la vora d'un límit de plaques actiu com el Japó o Califòrnia? I per quina raó la Garrotxa, just al costat, té volcans?",
  engageContext: "El docent mostra un mapa de distribució mundial de terratrèmols i volcans (darrera 100 anys). Els alumnes observen el patró: quasi tots es concentren als límits de les plaques tectòniques. Però Catalunya apareix al mapa amb activitat sísmica. Debat: per quina raó Catalunya surt al mapa? Quina diferència hi ha entre un terratrèmol i un volcà? Connexió amb S1: el basalt de la Garrotxa com a primera pista.",

  levelObjectives: {
    A: [
      "Explico l'estructura interna de la Terra (escorça, mantell, nucli) amb les seves propietats físiques específiques (densitat, temperatura, estat físic) i argumento per quina raó les ones sísmiques ens han permès conèixer l'interior de la Terra sense poder-hi anar.",
      "Relaciono els tres tipus de límits de plaques (divergents, convergents-subducció, convergents-col·lisió, transformants) amb els fenòmens específics que generen (dorsal oceànica, arc volcànic, cadena de muntanyes, falla transformant) i identifico exemples reals de cada tipus en un mapa.",
      "Aplico el model de tectònica de plaques per explicar la geologia de Catalunya: per quina raó el Pirineu es va formar per col·lisió (convergència) i per quina raó la Garrotxa té volcans de rift (extensió postalpina), dos mecanismes completament oposats en la mateixa zona geogràfica.",
      "Distineixo entre magnitud (energia alliberada, logarítmica) i intensitat (efecte en un lloc concret, depèn de la distància i el substrat) i argumento per quina raó un terratrèmol de M4 a 5 km de profunditat pot causar més danys que un de M6 a 600 km."
    ],
    B: [
      "Descric les capes de la Terra (escorça continental/oceànica, mantell superior/inferior, nucli extern líquid, nucli intern sòlid) i explico per quina raó la litosfera es mou.",
      "Relaciono els tres tipus de límits de plaques amb els fenòmens associats: divergents → dorsals oceàniques i volcans de rift; convergents-subducció → volcans d'arc i foses oceàniques; convergents-col·lisió → cadenes de muntanyes; transformants → terratrèmols sense volcanisme.",
      "Explico la diferència entre hipocentre (on s'origina el terratrèmol en profunditat) i epicentre (punt de la superfície més proper), i entre magnitud (Richter) i intensitat (Mercalli).",
      "Explico per quina raó hi ha terratrèmols al Pirineu (falla activa heretada de la col·lisió alpina) i volcans a la Garrotxa (rift postalpí, extensió)."
    ],
    C: [
      "Completo: la Terra té 4 capes. De fora cap a dins: 1) _____ (on vivim), 2) _____ (roca semiplàstica que flueix molt lentament), 3) _____ (líquid, genera el camp magnètic), 4) _____ (sòlid, molt calent).",
      "Completo: hi ha 3 tipus de límits de plaques. Als límits _____, les plaques s'allunyen i surt magma (ex: dorsal Atlàntica). Als límits convergents de subducció, una placa passa per sota de l'altra i es generen _____. Als límits transformants, les plaques llisquen lateralment i es generen _____.",
      "Completo: un terratrèmol comença al _____ (punt on es trenca la roca). L'_____ és el punt de la superfície just a sobre. Les ones sísmiques que notem a la superfície son les _____ (superficials).",
      "Completo la pista de l'enigma: el Pirineu va néixer fa 55-35 milions d'anys per la col·lisió de la placa _____ i la placa _____. Les falles que van crear el Pirineu aStill son actives, per això hi ha _____."
    ]
  },

  apartatExtras: {
    "2": {
      scaffold: "Omple l'esquema de l'estructura de la Terra: dibuixa les 4 capes concèntriques i etiqueta-les. Per a cada capa anota: nom / material principal / estat físic (sòlid/líquid/semiplàstic). Temperatura aproximada al centre: ___ °C. Raó per la qual el nucli extern és líquid però l'intern és sòlid: ___.",
      challenge: "Les ones sísmiques de tipus S (ones de cisalla) no es propaguen per líquids. Quan un terratrèmol gran ocorre, les estacions sismogràfiques de l'altra banda del planeta no reben ones S — hi ha una 'zona d'ombra'. Explica per quina raó això demostra que el nucli extern de la Terra és líquid. Quin diàmetre té aproximadament el nucli extern? (Cerca en fonts científiques fiables i indica-les.)"
    },
    "3": {
      scaffold: "Per a cada tipus de límit de plaques, completa: Límit DIVERGENT: les plaques s'___ (allunyen/apropen). Fenomen: neix nova ___ oceànica. Exemple real: ___. Límit CONVERGENT (subducció): la placa ___ (més densa) s'enfonsa. Fenomen: volcans d'___ + ___. Exemple real: ___. Límit TRANSFORMANT: les plaques llisquen ___ (lateral). Fenomen: ___. Exemple real: Falla de ___.",
      challenge: "La placa Ibèrica i la placa Euràsia col·lidiren fa ≈55 Ma aixecant el Pirineu. Però si dues plaques continentals col·lideixen (les dues flotan sobre el mantell), cap pot subduir. Explica per quina raó la col·lisió continental no genera volcans d'arc (a diferència de la subducció oceànica-continental). Quina estructura interna del Pirineu evidencia la col·lisió: encavalcaments i mantos de corriment."
    }
  },

  ideesPrevies: {
    startPoint: "Mireu el mapa de terratrèmols dels darrers 100 anys a la paret. On se'n produeixen la majoria? Per quina raó Catalunya apareix al mapa? Anoteu les vostres hipòtesis.",
    prompts: [
      {
        kind: "write",
        text: "Has sentit mai un terratrèmol (aquí o en un altre país)? Quines sensacions ha provocat? Si no, com t'imagines que seria? Per quina raó creus que la terra tremola?",
        starter: "Un terratrèmol és... crec que passa perquè..."
      },
      {
        kind: "draw",
        text: "Dibuixa com creus que és l'interior de la Terra. No cal que sigui correcte — volem el teu model inicial. Quantes capes té? Quins materials hi ha?",
        starter: "Crec que l'interior de la Terra té... capes. La capa més profunda és..."
      },
      {
        kind: "write",
        text: "Creus que Catalunya és una zona de risc sísmic? Quines evidències tens? Per quina raó creus que hi ha o no hi ha terratrèmols aquí?",
        starter: "Crec que Catalunya (és / no és) una zona de risc sísmic perquè..."
      }
    ]
  },

  exploreInstructions: [
    "Anàlisi de mapes tectònics (en grups de 3). Rebeu un mapa de les plaques tectòniques mundials i un mapa de sismicitat global (terratrèmols M>4 dels darrers 50 anys)",
    "Pas 1 (10 min): superposeu els dos mapes (o transparències). On coincideixen els terratrèmols amb els límits de plaques? Hi ha terratrèmols que NO siguin als límits? (intraplacas — nota els punts calents)",
    "Pas 2 (8 min): identifiqueu en el mapa 3 límits divergents, 3 convergents de subducció, 3 col·lisions continentals i 2 transformants. Per a cada un, escriviu el fenomen geológic associat (dorsal, arc volcànic, cadena de muntanyes, falla)",
    "Pas 3 (7 min): localitzeu Catalunya al mapa. Quines plaques la rodegen? A quin tipus de límit correspon la frontera Pirineus? I la Garrotxa, és en un límit de plaques actual? (Resposta: NO — és intraplaques. Per quina raó hi ha volcans, doncs?)",
    "Moment epistèmic: el docent explica la diferència entre volcans de subducció (arc) i volcans de rift / punts calents. La Garrotxa = rift postalpí (extensió) = mecanisme diferent de la subducció"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Mapa de plaques tectòniques mundials (per grup)", "Mapa de sismicitat global (darrera 50 anys)", "Mapa de sismicitat i volcans de Catalunya i la Mediterrània occidental", "Projector: animació moviment de plaques (2 cm/any, visualització accelerada)"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "L'estructura interna de la Terra: un arxiu de calor",
      text: "La Terra té una estructura en capes concèntriques, deduïda gràcies a les ==ones sísmiques|g== (les que es propaguen de manera diferent pels materials sòlids i líquids). De fora cap a dins: 1) ==Escorça|b==: capa prima i rígida. ==Continental== (25-70 km, granit, flotan't) vs ==oceànica== (5-10 km, basalt, més densa i prima). 2) ==Mantell|o==: la capa més gruixuda (2.900 km). El ==mantell superior|r== és semiplàstic en la seva part superior (==astenòsfera|r==) i permet el moviment de les plaques. 3) ==Nucli extern|r==: líquid (ferro i níquel, 2.890-5.150 km de profunditat). Genera el ==camp magnètic terrestre|g==. 4) ==Nucli intern==: sòlid (ferro, 5.150-6.370 km). Temperatura: ≈5.000-6.000 °C. Les ==ones P== (de compressió) es propaguen per sòlids i líquids; les ==ones S|r== (de cisalla) NOMÉS per sòlids → la zona d'ombra de les S demostra que el nucli extern és líquid.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Tectònica de plaques==: la litosfera en moviment",
      text: "La ==litosfera|g== (escorça + part sòlida del mantell superior) està dividida en unes 15 ==plaques tectòniques|b== grans i diverses de petites que es mouen sobre l'==astenòsfera|r== (mantell semiplàstic). El mecanisme de moviment és la ==convecció del mantell|g==: el material calent puja (menys dens), es desplaça lateralment i baixa en refredar-se, arrastrant les plaques. Velocitat: ==2-10 cm/any|o== (aproximadament com creixen les ungles). A escala geológica, 5 cm/any × 55 milions d'anys = 2.750 km de desplaçament → suficient per crear el Pirineu. Les proves del moviment de plaques: 1) Encaix dels continents (Wegener, 1912). 2) ==Expansió del fons oceànic|g== (dorsals). 3) Distribució de fòssils idèntics en continents separats. 4) Simetria del camp magnètic al voltant de les dorsals.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Límits de plaques: tres tipus, tres fenòmens",
      text: "Les plaques interaccionen en tres tipus de límits: 1) ==Límits divergents|g==: les plaques s'allunyen. El mantell puja, es fon parcialment i genera ==magma basàltic|r== que crea nova escorça oceànica. Resultat: ==dorsals oceàniques|b== (ex: Dorsal de l'Atlàntic mig). 2) ==Límits convergents|o==: les plaques s'apropen. Dues variants: a) ==Subducció|r==: una placa (oceànica, més densa) s'enfonsa sota l'altra. El material fos genera ==volcans d'arc|r== i ==terratrèmols profunds|r== (ex: Japó, Andes). b) ==Col·lisió continental|o==: dues plaques continentals (igual densitat) no poden subduir-se i aixequen ==cadenes de muntanyes|o== (ex: Alps, Himàlaia, Pirineus). 3) ==Límits transformants|b==: les plaques llisquen lateralment l'una respecte l'altra sense crear ni destruir escorça. Resultat: ==grans falles|b== i ==terratrèmols== (ex: Falla de San Andres, Califòrnia).",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Els ==terratrèmols==: quan la roca es trenca",
      text: "Un ==terratrèmol== (sisme) es produeix quan l'energia acumulada en una falla (fractura de la litosfera) s'allibera sobtadament. El punt de ruptura en profunditat és l'==hipocentre|r== (o focus); el punt de la superfície just a sobre és l'==epicentre|b==. L'energia es propaga com ==ones sísmiques|g==: ones P (primàries, de compressió, les primeres a arribar) i ones S (secundàries, de cisalla). La ==magnitud|o== mesura l'energia alliberada (escala logarítmica Richter o Moment Magnitud Mw): +1 en magnitud = 32 vegades més energia. La ==intensitat== (escala Mercalli XII graus) mesura l'efecte local (depèn de la distància, la profunditat i el substrat). Un terratrèmol M4 poc profund pot causar més danys que un M6 profund. ==Risc sísmic|r== = perillositat (probabilitat) × exposició (edificis) × vulnerabilitat (qualitat constructiva).",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Connexió ==enigma==: terratrèmols al Pirineu i volcans a la Garrotxa",
      text: "Ara tens les dues peces per respondre l'enigma. 1) ==Terratrèmols al Pirineu|r==: el Pirineu es va formar fa 55-35 Ma per la col·lisió de la placa Ibèrica i la placa Euràsia (límit convergent continental). Les ==falles|r== que van aixecar les muntanyes aStill estan actives (la col·lisió continua a escala geológica). El terratrèmol de les Preses (1428, M≈6,5-7) i l'activitat sísmica actual de l'Alt Empordà i els Pirineus s'expliquen per la ==reactivació d'aquestes falles|r==. 2) ==Volcans de la Garrotxa|b==: NO és vulcanisme de subducció. Després de la col·lisió alpina, la litosfera de la zona va experimentar ==extensió (rift)|b==: les plaques es van separar lleugerament, permetent que el mantell pujés i generés magma basàltic que va erupcionar a la superfície. El darrer volcà actiu de la Garrotxa va erupcionar fa ≈11.500 anys — en termes geológics, ==és molt recent|o==. Conclusió: el Pirineu (col·lisió) i la Garrotxa (extensió) son processos oposats que van succeir seqüencialment en la mateixa zona.",
      type: "epistemic",
      badge: "🧩 Enigma — pista 2 (Pirineu + Garrotxa)"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Estructura interna de la Terra (tall)", src: "/images/sa7-g2-estructura-terra.svg", note: "Diagrama de tall circular: 4 capes concèntriques etiquetades (escorça, mantell, nucli extern, nucli intern) amb gruixos i temperatures representatives. Distinció escorça continental (gruixuda, flotant) vs oceànica (prima, densa). Astenòsfera marcada al mantell superior." },
    { id: "G2", apartat: "3", title: "Tres tipus de límits de plaques", src: "/images/sa7-g3-limits-plaques.svg", note: "Diagrama de 3 blocs 3D: 1) Divergent: dorsal oceànica, fletxes d'allunyament, magma que puja al centre. 2) Convergent-subducció: una placa oceànica s'enfonsa, arc volcànic a sobre, fossa oceànica al fons. 3) Transformant: dues plaques llisquen lateralment, zona de falla marcada." },
    { id: "G3", apartat: "3", title: "Sismicitat i geologia de Catalunya i el Pirineu", src: "/images/sa7-g4-sismicitat-cat.svg", note: "Mapa de Catalunya: zones sísmiques (Alt Empordà, Pirineus, Ribagorça) marcades amb cercles de diferent magnitud. Falla pirinenca principal. Camp volcànic de la Garrotxa. Llegenda de tipus de límit tectònic. Epicentre del terratrèmol de les Preses (1428)." }
  ],

  fitxaUrl: "/fitxes/sa7-s2-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S2 — La Terra que tremola",
    steps: [
      { apartat: "0", title: "Idees prèvies sobre terratrèmols i l'interior de la Terra", time: "5 min", phase: "engage", instruction: "Apartat 0: respon les 3 preguntes inicials (model de l'interior de la Terra, experiència amb terratrèmols, hipòtesi sobre Catalunya). No es corregeix ara.", hints: [] },
      { apartat: "1", title: "Anàlisi de mapes tectònics", time: "25 min", phase: "explore", instruction: "Apartat 1: analitza el mapa de plaques i sismicitat. Identifica 3 límits de cada tipus. Localitza Catalunya i el Pirineu. Anota la teva hipòtesi: per quina raó hi ha activitat sísmica al Pirineu?", hints: [
        "El patró és clar: quasi tots els terratrèmols i volcans estan als límits de plaques. Cerca l'excepció: quins terratrèmols estan al mig de les plaques (intraplacas)?",
        "Catalunya és a la placa Ibèrica, i el Pirineu és la cicatriu de la col·lisió amb la placa Euràsia. La Garrotxa no és en cap límit actiu actual."
      ] },
      { apartat: "2", title: "Estructura de la Terra i tectònica de plaques", time: "20 min", phase: "explica", instruction: "Apartat 2: etiqueta el diagrama de les capes de la Terra (G1). Omple la taula dels 3 tipus de límits de plaques: tipus / moviment / fenomen / exemple. Per quina raó la litosfera es mou?", hints: [
        "Clau: la convecció del mantell. El mantell calent puja (com el vapor en una olla), es desplaça lateralment i baixa en refredar-se, arrastrant les plaques com a una cinta transportadora.",
        "Ones S: no passen per líquids. La zona d'ombra de les ones S demostra que el nucli extern és líquid."
      ] },
      { apartat: "3", title: "Terratrèmols i pista 2 de l'enigma", time: "10 min", phase: "explica", instruction: "Apartat 3: completa el diagrama d'un terratrèmol (hipocentre / epicentre / ones sísmiques). Respon: per quina raó el Pirineu té terratrèmols i la Garrotxa té volcans? Anota la pista 2 de l'enigma.", hints: [
        "Pirineu: col·lisió alpina → falles actives heretades → terratrèmols. NO hi ha volcans perquè és col·lisió continental (les dues plaques flotan i no hi ha subducció).",
        "Garrotxa: rift postalpí (extensió) → el mantell puja → magma basàltic erupciona. Darrer volcà actiu: fa ≈11.500 anys. No és subducció!"
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica la diferència entre un límit de plaques convergent de subducció i un de col·lisió continental. Per quina raó el primer genera volcans i el segon no? Posa un exemple real de cada un.", hint: "Subducció: una placa oceànica (densa) s'enfonsa sota una continental → fusió parcial → volcans d'arc (Japó, Andes). Col·lisió: dues plaques continentals (igual densitat) no poden subduir → aixecament de muntanyes (Pirineus, Alps, Himàlaia). Sense subducció → sense volcans d'arc." },
    { id: "q2", type: "open", text: "Explica per quina raó hi ha terratrèmols al Pirineu usant el model de tectònica de plaques. Per quina raó la Garrotxa té volcans si NO és en un límit de plaques convergent? Quins tipus de vulcanisme existeix a part de la subducció?", hint: "Pirineu: col·lisió placa Ibèrica + Euràsia (55-35 Ma) → falles actives → terratrèmols. Garrotxa: rift postalpí (extensió, no convergència) → mantell puja → basalt (volcans intraplacas / punts calents / rift). Altres tipus: dorsals oceàniques, punts calents (Hawaii)." },
    { id: "q3", type: "multiple", text: "Quin tipus de límit de plaques va originar el Pirineu?", options: ["Límit divergent (dorsal oceànica)", "Límit convergent de subducció (oceànica-continental)", "Límit convergent de col·lisió (continental-continental)", "Límit transformant (falla de lliscament)"], correct: 2 }
  ],

  homework: {
    description: "Cerca en la premsa en línia una notícia recent (dels darrers 2 anys) sobre un terratrèmol a Espanya o Catalunya. Anota: data, magnitud, epicentre, danys. Explica breument per quina raó creus que va ocórrer allà on va ocórrer usant el que has après. Porta el retall o la captura de pantalla a S3.",
    note: "Activitat de recerca personal no delegable a IA: busca la notícia real i analitza-la tu.",
    deadline: "2026-05-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (estructura de la Terra, tectònica de plaques, tipus de límits, terratrèmols)",
    "Dibuixa i etiqueta les 4 capes de la Terra amb les seves característiques",
    "Omple la taula dels 3 tipus de límits de plaques: tipus / moviment / fenomen / exemple",
    "Explica per escrit per quina raó hi ha terratrèmols al Pirineu (2-3 frases) i per quina raó la Garrotxa té volcans (2-3 frases)",
    "Exit tiquet en paper a S3"
  ],
  oaLinks: ["OA2"], competencies: ["CE1"]
}
