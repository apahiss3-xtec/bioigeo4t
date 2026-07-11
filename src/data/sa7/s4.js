export const sa7s4 = {
  id: "s4", saId: "sa7",
  title: "Llegir el paisatge: la Terra com a arxiu",
  sessionNumber: 4, biome: "sa7", duration: "2h",
  engageImage: "/images/sa7-s4-paisatge.jpg",

  engageQuestion: "Montserrat és de conglomerat erosionat. La Garrotxa és de basalt volcànic. El Delta de l'Ebre és de sediment fluvial en formació activa. El Pirineu és la cicatriu d'una col·lisió de continents. Cada paisatge de Catalunya explica una historia geológica diferent. Avui llegirem el paisatge i resoldrem l'enigma.",
  engageContext: "El docent mostra 6 fotografies emblemàtiques del paisatge de Catalunya amb la pregunta: 'Per quina raó cada lloc és com és?' (Montserrat, Garrotxa, Delta de l'Ebre, Pirineus, Costa Brava, Cardona). Treball inicial individual: cada alumne escull una fotografia i escriu la seva hipòtesi sobre el procés geológic que l'ha format. Posada en comú. Connexió: avui completem la resolució de l'enigma de les Preses (1428).",

  levelObjectives: {
    A: [
      "Construeixo una pàgina completa de la guia geológica amb: nom del lloc, situació geológica (quin tipus de roca predomina i com es va formar), procés geológic principal (amb dates aproximades en Ma), recurs geológic (si n'hi ha), impacte humà sobre el paisatge, i 1 repte de conservació. Argumento per quina raó el coneixement geológic és necessari per a la planificació territorial.",
      "Resolc l'enigma completament amb argumentació geológica: explico per separat el mecanisme dels terratrèmols al Pirineu (col·lisió alpina + falles actives heretades) i el mecanisme del vulcanisme de la Garrotxa (rift postalpí = extensió litosférica), i argumento per quina raó son dos processos oposats (convergència vs divergència) que van succeir seqüencialment a la mateixa zona.",
      "Relaciono la geologia de Catalunya amb la historia humana: per quina raó el Pirineu va ser una frontera natural entre Hispania i Francia? Per quina raó els pobles pirinencs usen pissarra a les teulades? Per quina raó Cardona té un castell sobre un turó de sal? Per quina raó el Delta de l'Ebre s'allarga cap al mar però les platges de Tarragona s'erosionen?",
      "Faig una síntesi de la SA: quines connexions existeixen entre SA7 i les SAs anteriors? (SA1: minerals en la cèl·lula; SA2: minerals en la sang = Fe de la hemoglobina; SA5: el cicle del N i del C connecta amb els minerals; SA6: combustibles fòssils i cicle del carboni geológic)."
    ],
    B: [
      "Completo la resolució de l'enigma: explico per quina raó hi ha terratrèmols al Pirineu (col·lisió alpina, falles heretades) i per quina raó la Garrotxa té volcans (rift postalpí, no subducció).",
      "Identifico el procés geológic principal que explica almenys 4 dels paisatges de Catalunya (Montserrat, Garrotxa, Delta de l'Ebre, Pirineus, Costa Brava) i el relaciono amb els sabers de la SA.",
      "Contribueixo de forma significativa a la guia geológica del grup: aporto el tipus de roca, el procés de formació i l'ús humà de l'indret que hem estudiat.",
      "Faig almenys 2 connexions entre la geologia de la SA7 i continguts d'altres SAs del curs."
    ],
    C: [
      "Completo la resolució de l'enigma: els terratrèmols del Pirineu es produeixen perquè fa milions d'anys les plaques ___ i ___ van col·lisionar, i les falles que van crear el Pirineu ancora son ___. Els volcans de la Garrotxa existeixen perquè la litosfera es va ___ (estirar/comprimir) creant un rift i permetent que el mantell ___.",
      "Completo per a l'indret del meu grup: el paisatge de ___ és de roques de tipus ___ (ígni/sedimentari/metamòrfic), que es van formar fa aproximadament ___ Ma per ___.",
      "Aporto almenys 1 dada o 1 il·lustració a la guia geológica del grup.",
      "Completo 1 connexió entre SA7 i una altra SA del curs: 'A SA___ vam aprendre que ___. A SA7 hem après que ___. La connexió és que ___'."
    ]
  },

  apartatExtras: {
    "2": {
      scaffold: "Omple la fitxa de l'indret del teu grup per a la guia: nom de l'indret / municipi i comarca / tipus de roca predominant / família de la roca (ígnia/sedimentaria/metamòrfica) / procés de formació (en paraules simples) / edat aproximada (en Ma o any) / ús humà del recurs / 1 impacte ambiental visible.",
      challenge: "El Delta de l'Ebre avança ≈5 m/any cap al mar per deposició de sediments del riu, però des de la construcció del pantà de Mequinença (1964) la deposició de sediments ha disminuït un 90% i el delta s'erosiona. A més, el canvi climàtic preveu una pujada del nivell del mar de 30-60 cm el 2100. Modelitza quin serà l'estat del delta el 2100 si no es prenen mesures (fes un càlcul estimatiu de la regressió en km² usant dades publicades) i proposa 2 mesures de gestió possibles."
    },
    "3": {
      scaffold: "Per a la resolució de l'enigma, omple els espais: 1) Els terratrèmols del Pirineu es deuen a: la col·lisió de les plaques ___ i ___ fa ___-___ Ma. Aquesta col·lisió va crear falles que ___ (son/no son) actives avui. 2) Els volcans de la Garrotxa es deuen a: un procés de ___ (rift/subducció) postalpí que va estirar la litosfera i va permetre que el mantell pujés i generés magma ___. El darrer volcà va erupcionar fa ≈___ anys.",
      challenge: "Consulta el Catàleg Sísmic d'Espanya (IGN) o el Servei Geológic de Catalunya per trobar el darrer terratrèmol significatiu (M≥3,0) a Catalunya. Anota: data, magnitud, epicentre, profunditat, danys (si n'hi va haver). Explica per quina raó es va produir allà on es va produir usant el model de tectònica de plaques que has après."
    }
  },

  ideesPrevies: {
    startPoint: "Avui és l'última sessió de SA7 i del curs de geologia. Observeu les 6 fotografies del paisatge de Catalunya. Quin paisatge us crida més l'atenció? Per quina raó creus que és com és? Escriu la teva hipòtesi inicial.",
    prompts: [
      {
        kind: "write",
        text: "Ara que hem estudiat les tres famílies de roques i la tectònica de plaques, escull una de les 6 fotografies i intenta explicar quin procés geológic l'ha format. No cal que sigui perfecte — usa el que has après.",
        starter: "He escollit la fotografia de ___ perquè... Crec que el procés geológic és... perquè la roca..."
      },
      {
        kind: "write",
        text: "Creus que ara ja pots respondre l'enigma de les Preses (1428)? Escriu el que recordes: per quina raó hi ha terratrèmols al Pirineu i per quina raó hi ha volcans a la Garrotxa? Quines pistes has recollit a S1, S2 i S3?",
        starter: "Crec que els terratrèmols del Pirineu es deuen a... Els volcans de la Garrotxa existeixen perquè..."
      },
      {
        kind: "write",
        text: "Quina ha estat la connexió que t'ha semblat més sorprenent entre la geologia i alguna altra SA del curs? Per quina raó?",
        starter: "La connexió que m'ha semblat més sorprenent és... perquè..."
      }
    ]
  },

  exploreInstructions: [
    "Producte final: Guia geológica de l'entorn (en grups de 3-4). Cada grup rep un indret de l'entorn proper (del barri, de la comarca o de Catalunya) i construeix una pàgina per a la guia col·lectiva",
    "La pàgina de la guia inclou (fitxa format A5): nom de l'indret / foto o il·lustració / tipus de roca predominant / procés geológic que l'ha format / edat aproximada / recurs humà (si n'hi ha) / 1 impacte ambiental + 1 mesura de conservació",
    "Pas 1 (15 min): recerca i construcció de la pàgina. Useu la teoria de S1-S3 i la fitxa de referència",
    "Pas 2 (10 min): cada grup presenta la seva pàgina al grup classe (màx. 2 min per grup). Les pàgines s'uneixen formant la guia col·lectiva",
    "Pas 3 (5 min): Formulari Google de síntesi individual (accés via QR o enllaç) — 10 preguntes autocorrectives couvrant S1-S4 + resolució de l'enigma"
  ],
  exploreDuration: "30 min",
  exploreMaterials: ["Fitxa format A5 per a la pàgina de la guia (1 per grup)", "Accés al formulari Google de síntesi (QR)", "Projector: galeria de paisatges de Catalunya + context geológic de cada un"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Llegir el ==paisatge==: geologia i forma del relleu",
      text: "El ==relleu== que veiem és el resultat de dos tipus de forces en competència: ==forces internes|r== (tectònica: empent les roques cap amunt, crea muntanyes i volcans) i ==forces externes|b== (erosió: vent, aigua, glaceres escullen les roques). La fórmula: ==procés geológic → roca → erosió → relleu → paisatge|g==. Dos paisatges completament diferents poden tenir la mateixa roca si l'erosió ha actuat de forma diferent. Exemples a Catalunya: el ==granit|o== del Cap de Creus (Costa Brava) i el granit dels Pirineus centrals son el mateix tipus de roca, però l'erosió marina ha creat un paisatge de cales i esculls mentre l'erosió glacial i fluvial ha creat valls en U i pics aguts. El ==conglomerat de Montserrat|o== (sedimentari) ha estat esculpit per l'erosió diferencial en les característiques 'boles' i 'agulles'.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "El paisatge de ==Catalunya== llegit en geologia",
      text: "Cada zona de Catalunya té la seva «signatura geológica»: 1) ==Pirineus|b==: col·lisió alpina (55-35 Ma) entre plaques Ibèrica i Euràsia. Roques: granits i gneis al Pirineu axial (hercínics, 300 Ma) + calcàries i pissarres als Pre-pirineus (Mesozoic). 2) ==Garrotxa|r==: camp volcànic de rift postalpí. 40 cons volcànics i 20 colades de basalt. Darrera erupció ≈11.500 anys AP. ==Volcà actiu latent|r==. 3) ==Montserrat|o==: conglomerat cretaci (≈60 Ma) erosionat de forma espectacular per l'agua → formes «inselberg». 4) ==Delta de l'Ebre|g==: sediments al·luvials en deposició activa. S'allarga cap al mar ≈5 m/any, però la construcció de pantans n'ha reduït el sediment. 5) ==Cardona|o== (Bages): diapir de sal (evaporita del Triàsic, ≈230 Ma) → la Muntanya de Sal. 6) ==Costa Brava|b==: granits hercínics erosionats per la mar Mediterrània → cales, illes i esculls.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "==Resolució de l'enigma==: el terratrèmol de les Preses (1428)",
      text: "Resposta completa a les dues preguntes de l'enigma: 1) ==Per quina raó hi ha terratrèmols al Pirineu?|r== El Pirineu és el resultat de la ==col·lisió de les plaques Ibèrica i Euràsia|b== (límit convergent continental) iniciada fa ≈55 Ma i finalitzada fa ≈35 Ma. Durant la col·lisió es van generar grans ==sistemes de falles|r== (fractures de la litosfera). Avui la col·lisió ja no aixeca muntanyes, però les falles ancora estan actives i acumulen tensió. Quan la tensió s'allibera → ==terratrèmol|r==. L'alt Empordà, la Val d'Aran i el Pirineu lleidatà son les zones de major sismicitat de Catalunya per la densitat de falles actives. 2) ==Per quina raó hi ha volcans a la Garrotxa?|b== No és vulcanisme de ==subducció|r== (no hi ha cap fossa oceànica a prop). És ==vulcanisme de rift postalpí|b==: després de la compressió alpina, la litosfera de la zona va patir extensió (estirament). Quan la litosfera s'estira, el mantell puja, baixa la pressió → ==fusió parcial del mantell|g== → ==magma basàltic|r== erupciona a la superfície. El darrer volcà actiu (volcà del Croscat, Garrotxa) va erupcionar fa ≈11.500 anys. Conclusió: ==dos processos oposats en la mateixa zona|o== (primer compressió → Pirineu; després extensió → Garrotxa).",
      type: "concept",
      badge: "✅ Resolució de l'enigma"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Síntesi del curs: connexions entre geologia i vida",
      text: "La geologia no és un tema aïllat: connecta amb tot el curs. ==SA1 (cèl·lula)==: els minerals (ferro, calci, fòsfor) son imprescindibles per a les cèl·lules. L'hemoglobina conté ==ferro|r== — un mineral geológic. ==SA2 (cos humà)==: el ==calci dels ossos|o== prové del calcari i de la cadena alimentàra. L'anèmia ferropènica (enigma SA2) és un dèficit del mineral ferro. ==SA5 (ecologia)==: el ==cicle del carboni|g== té una component geológica (CO₂ atmosfèric → closques CaCO₃ → calcari → erosió → CO₂) i una component biológica (fotosíntesi ↔ respiració). ==SA6 (canvi climàtic)==: la crema de ==combustibles fòssils|r== retorna a l'atmosfera en 200 anys el carboni fixat en roques fa milions d'anys, desequilibrant el ==cicle del carboni geológic|g==. La geologia és la memoria de la Terra — i ara en saps llegir una mica.",
      type: "epistemic"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Mapa geológic simplificat de Catalunya", src: "/images/sa7-g7-mapa-geologic-cat.svg", note: "Mapa de Catalunya amb zones geológiques: Pirineu axial (granit i gneis, hercínic), Pre-pirineus (calcàries mesozoiques), Depressió central (sediments terciaris), Serralada Costanera (granits + calcàries), Delta de l'Ebre (sediments actius), Garrotxa (basalts volcànics). Llegenda de colors per edat i tipus de roca." },
    { id: "G2", apartat: "3", title: "Resolució de l'enigma: terratrèmols i volcans de Catalunya", src: "/images/sa7-g8-enigma-resolucio.svg", note: "Diagrama de dos blocs: 1) Col·lisió alpina (55-35 Ma): plaques Ibèrica + Euràsia → Pirineu + falles actives → terratrèmols actuals. 2) Rift postalpí (11.500-100.000 anys AP): extensió litosférica → mantell puja → basalt → volcans de la Garrotxa. Fletxes de compressió (→←) per al Pirineu i fletxes d'extensió (←→) per a la Garrotxa." }
  ],

  fitxaUrl: "/fitxes/sa7-s4-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S4 — Llegir el paisatge i resolució de l'enigma",
    steps: [
      { apartat: "0", title: "Idees prèvies: hipòtesi inicial sobre el paisatge", time: "5 min", phase: "engage", instruction: "Apartat 0: escull una fotografia del paisatge de Catalunya i escriu la teva hipòtesi del procés geológic que l'ha format. Anota el que recordes de les pistes 1, 2 i 3 de l'enigma.", hints: [] },
      { apartat: "1", title: "Guia geológica del vostre indret (producte final)", time: "30 min", phase: "explore", instruction: "Apartat 1: construeix la pàgina de la guia geológica del vostre indret. Segueix el format de la fitxa A5: roca / procés / edat / ús / impacte / conservació. Presenteu-la al grup classe.", hints: [
        "Si no trobes la informació de l'indret, usa la teoria de S1-S3 com a base. Identifica primer el tipus de roca → busca el procés geológic que genera aquell tipus de roca en aquella zona.",
        "Els Pirineus = granit (ígni intrusiu, hercínic) + calcàries (sedimentàries, mesozoiques) + pissarres (metamòrfiques). La Garrotxa = basalt (ígni extrusiu, molt recent). El Delta = sediments al·luvials (sedimentaris actuals)."
      ] },
      { apartat: "2", title: "Paisatge de Catalunya i lectura geológica", time: "10 min", phase: "explica", instruction: "Apartat 2: completa la taula dels 6 paisatges de Catalunya (G1): indret / roca predominant / procés geológic / edat aproximada. Per a cada paisatge, respon en 1 frase per quina raó és com és.", hints: [
        "Montserrat = conglomerat (sedimentari del Cretaci) erosionat diferencialment per l'agua → boles i agulles. Costa Brava = granit hercínic (300 Ma) erosionat per la mar → cales. Cardona = evaporita triàsica (sal gemma, 230 Ma) → diapir de sal."
      ] },
      { apartat: "3", title: "Resolució de l'enigma + formulari Google de síntesi", time: "15 min", phase: "explica", instruction: "Apartat 3: escriu la resolució completa de l'enigma (terratrèmols Pirineu + volcans Garrotxa) amb 3-4 frases per a cada part. Després, respon el formulari Google de síntesi (QR a la pissarra) — 10 preguntes autocorrectives.", hints: [
        "Pirineu: col·lisió alpina (55-35 Ma) placa Ibèrica + Euràsia → falles actives → terratrèmols. Garrotxa: rift postalpí (extensió) → mantell puja → basalt → volcans. Dos processos oposats (compressió → extensió) a la mateixa zona.",
        "Clau per recordar: PIRINEUS = col·lisió (convergència) = terratrèmols SENSE volcans. GARROTXA = rift (divergència) = volcans de basalt SENSE terratrèmols significatius."
      ] }
    ]
  },

  exitTicketType: "formulari",
  exitTicketUrl: "https://forms.gle/sa7-sintesi",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica en 4-5 frases la resolució completa de l'enigma: per quina raó hi ha terratrèmols al Pirineu i per quina raó hi ha volcans a la Garrotxa? Usa els conceptes: col·lisió, plaques, falles, rift, extensió, basalt.", hint: "Pirineu: col·lisió alpina (55-35 Ma) → falles actives → terratrèmols. Garrotxa: rift postalpí (extensió) → mantell puja → fusió parcial → basalt volcànic → erupcions (darrera fa 11.500 anys). Dos processos oposats: compressió (Pirineu) + extensió posterior (Garrotxa)." },
    { id: "q2", type: "open", text: "Fes una síntesi de SA7 esmentant 3 connexions amb SAs anteriors del curs. Per quina raó la geologia és rellevant per entendre la biologia, l'ecologia o el canvi climàtic?", hint: "Connexions: SA2 (ferro = mineral geológic en l'hemoglobina), SA5 (cicle del carboni geológic: CaCO₃ → CO₂ atmosfèric), SA6 (combustibles fòssils = roca geológica; ciment = 8% emissions globals). La geologia proveeix els materials i l'energia que fa funcionar la vida i l'economia." },
    { id: "q3", type: "multiple", text: "Per quina raó el darrer volcà actiu de la Garrotxa (fa ≈11.500 anys) no és un volcà de subducció com els del Japó o els Andes?", options: ["Perquè la Garrotxa és a l'interior del continent, on no arriben les ones sísmiques", "Perquè és un volcà de rift (extensió litosférica postalpina), no de subducció — no hi ha fossa oceànica ni placa que s'enfonsi a prop", "Perquè és massa petit per ser un volcà de subducció — els volcans de subducció sempre son molt grans", "Perquè és un volcà extinat — els volcans actius de subducció mai s'acaben d'extingir"], correct: 1 }
  ],

  homework: {
    description: "Porta la guia geológica col·lectiva de la classe a casa i comparteix-la amb algú de la família. Explica-li en 5 minuts l'enigma de les Preses (1428): per quina raó hi va haver aquell terratrèmol i per quina raó la Garrotxa té volcans. Anota la reacció de la persona: sabia alguna d'aquestes coses? S'ha sorprès?",
    note: "Activitat de comunicació científica informal: explicar la ciència a algú no especialista.",
    deadline: "2026-06-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (paisatge de Catalunya, resolució de l'enigma, connexions SA)",
    "Completa la taula dels 6 paisatges de Catalunya (G1): roca / procés / edat",
    "Escriu la resolució de l'enigma: 3 frases sobre terratrèmols al Pirineu + 3 frases sobre volcans a la Garrotxa",
    "Respon el formulari Google de síntesi (QR o enllaç a la pàgina web de la sessió)",
    "Llegeix la síntesi de connexions entre SA7 i les SAs anteriors (t4)"
  ],
  oaLinks: ["OA4", "OA2"], competencies: ["CE1", "CE6"]
}
