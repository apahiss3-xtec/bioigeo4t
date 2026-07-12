export const sa6s3 = {
  id: "s3", saId: "sa6",
  title: "Greenwashing: veritat o mentida?",
  sessionNumber: 3, biome: "sa6", duration: "2h",
  engageImage: "/images/sa6-s3-greenwashing.jpg",

  engageQuestion: "Una marca de detergent diu que el seu producte és '100% natural i respectuós amb el medi ambient'. Un supermercat anuncia que les seves bosses son 'biodegradables'. Un producte de carn porta el segell 'CO₂ neutral'. Com saps si son veritat? Quines preguntes caldria fer?",
  engageContext: "Posada en comú dels fenòmens climàtics extrems de la feina a casa. Es construeix un mapa col·lectiu d'impactes. Seguidament, el docent mostra 3 anuncis reals amb missatge 'verd': els alumnes han de dir si els creuen i per quina raó. Es presenten els 4 criteris CE2 per avaluar fonts ambientals.",

  levelObjectives: {
    A: [
      "Aplico els 4 criteris d'avaluació de fonts (autoria, evidència, transparència, consens) a un informe corporatiu real de sostenibilitat (p. ex. informe anual de Nestlé, IKEA o Coca-Cola) i identifico al menys 2 tàctiques de greenwashing específiques amb referència al document.",
      "Distingeixo entre acció individual i acció sistèmica en la reducció de la petjada de carboni, i argumento per quina raó les campanyes de responsabilitat individual (calcular la teva petjada personal) van ser promogudes inicialment per empreses fòssils com a estratègia de desviació de l'atenció pública.",
      "Calculo la petjada ecológica personal en hectàrees globals (hag) usant una calculadora estàndard, la comparo amb la biocapacitat disponible per habitant (1,8 hag) i proposo un pla de reducció amb accions concretes i quantificades.",
      "Avaluo críticament el concepte de 'compensació de carboni' (carbon offset): en quins casos pot ser vàlid? Quines trampes pot amagar? Construeixo un argument fonamentat en evidències sobre si hauria de ser una eina principal o marginal de la política climàtica."
    ],
    B: [
      "Defineixo greenwashing i identifico almenys 4 tàctiques de comunicació enganyosa en exemples reals.",
      "Aplico els 4 criteris de fiabilitat (CE2) per avaluar si una afirmació ambiental d'una empresa és creïble.",
      "Explico la diferència entre petjada de carboni individual i sistèmica, i argumento per quina raó les decisions col·lectives (polítiques públiques, regulació) son més efectives que l'acció individual aïllada.",
      "Enumero les tres R (Reducció, Reutilització, Reciclatge) en ordre de prioritat ecològica i argumento per quina raó la reducció és sempre la primera opció."
    ],
    C: [
      "Completo: greenwashing és quan una empresa ___ (exagera/oculta) el seu impacte ambiental real per pareixer ___ de cara als consumidors.",
      "Aplico 2 dels 4 criteris per jutjar si una afirmació ambiental és fiable: 1) Qui la fa? ___ 2) Quines evidències aporta? ___.",
      "Ordeno de major a menor impacte ecològic: llençar / reutilitzar / reciclar / no comprar. L'ordre correcte és: ___ (millor) → ___ → ___ → ___ (pitjor).",
      "Completo la tercera pista de l'enigma: l'etiqueta del pernil que diu 'natural i sostenible' és o no és greenwashing? Per quina raó? ___."
    ]
  },

  apartatExtras: {
    "2": {
      scaffold: "Analitza aquest anunci: 'La nostra empresa ha plantat 1 milió d'arbres per compensar les seves emissions'. Aplica els 4 criteris: 1) Autoria: qui ho diu? ___. 2) Evidència: hi ha dades concretes? ___. 3) Transparència: declaren les emissions totals? ___. 4) Consens: ho avalen experts externs? ___. Veredicte: greenwashing o compromís real?",
      challenge: "Busca l'informe de sostenibilitat de 2023 d'una gran empresa que conocis (Zara/Inditex, Coca-Cola, McDonald's, Apple). Identifica: a) quines mètriques d'emissions reporta (Scope 1, 2, 3)? b) quins objectius de reducció es proposen i per a quan? c) hi ha verificació externa dels càlculs? Puntua l'informe de 0 a 10 en credibilitat i justifica la nota."
    },
    "3": {
      scaffold: "Omple la taula de les 3R: Reducció → exemple concret que puc fer: ___. Impacte estimat (alt/mitjà/baix): ___. Reutilització → exemple: ___. Impacte: ___. Reciclatge → exemple: ___. Impacte: ___. Per quina raó la Reducció sempre ha d'anar primer?",
      challenge: "El concepte de 'petjada de carboni personal' va ser popularitzat per BP (British Petroleum) en una campanya de 2004 que va crear la primera calculadora de petjada personal de CO₂ en línia. Investiga: per quina raó una empresa petrolifera podria estar interessada a promoure la responsabilitat individual? Quin és l'efecte sobre la pressió pública per regular el sector? Construeix un argument sobre si la responsabilitat individual i la col·lectiva son complementàries o oposades."
    }
  },

  ideesPrevies: {
    startPoint: "Avui analitzem el greenwashing. Compartiu els casos de fenòmens climàtics extrems de la feina a casa. Hi ha algun patró comú?",
    prompts: [
      {
        kind: "write",
        text: "Has vist mai un producte o anunci amb missatge 'verd' o 'sostenible' que et semblés sospitós? Descriu-lo. Quines preguntes li faries a l'empresa?",
        starter: "L'anunci o producte que em semblava sospitós era... i les preguntes que li faria son..."
      },
      {
        kind: "write",
        text: "Qui creus que té més responsabilitat en la reducció de les emissions: els individus (les seves decisions de consum), les empreses (les seves pràctiques) o els governs (les seves polítiques)? Argumenta la teva postura.",
        starter: "Crec que la major responsabilitat recau en... perquè..."
      }
    ]
  },

  exploreInstructions: [
    "Per grups de 3: rebeu un sobre amb 5 anuncis o etiquetes reals d'empreses amb missatge mediambiental (impresos o en pantalla)",
    "Tasca 1 (15 min): per a cada anunci, apliqueu els 4 criteris d'avaluació (autoria, evidència, transparència, consens). Ompliu la taula d'anàlisi. Veredicte: fiable, sospitós o greenwashing clar?",
    "Tasca 2 (5 min): trieu l'anunci que us sembla el cas més clar de greenwashing i prepareu una presentació de 2 minuts per al grup gran",
    "Tasca 3 (5 min): posada en comú. Cada grup presenta el seu cas. El docent sistematitza les 4 tàctiques de greenwashing més comunes",
    "Moment epistèmic: el docent planteja la pregunta — és suficient que els consumidors siguin crítics, o cal regulació pública? Breu debat (3 min)"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Sobre amb 5 anuncis reals per grup (impresos)", "Fitxa de 4 criteris d'avaluació (per alumne)", "Projector: cas real de greenwashing jutjat per un tribunal europeu (p. ex. KLM 2023)"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Greenwashing==: definició i tàctiques",
      text: "El ==greenwashing|r== (o ecoblanqueig) és la pràctica de transmetre una imatge de sostenibilitat o responsabilitat ambiental que no es correspon amb la realitat. No és publicitat il·legal en tots els casos, però sí enganyosa. Les ==quatre tàctiques|r== més comunes: 1. ==Afirmació vaga|r==: 'natural', 'eco-friendly', 'respectuós amb el medi ambient' sense definir ni mesurar res. 2. ==Compensació parcial|o==: destacar una acció positiva petita per distreure d'un impacte negatiu gran (p. ex. 'hem plantat 1000 arbres' mentre s'emeten milions de tones de CO₂). 3. ==Segell inventat|o==: usar un logotip verd de disseny propi que sembla una certificació oficial. 4. ==Irrelevàncies|o==: anunciar que un producte és 'lliure de CFC' quan els CFC ja estan prohibits per llei des de 1989.",
      type: "concept",
      video: "/animacions/sa6-s3-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "4 criteris ==CE2== per avaluar una font ambiental",
      text: "Per saber si una afirmació ambiental és fiable, aplica els ==4 criteris|g== (CE2): 1. ==Autoria|g==: Qui ho diu? L'empresa que es beneficia de la imatge positiva, un organisme independent, una revista científica revisada per parells? La font és directament interessada? 2. ==Evidència|g==: Quines dades concretes aporta? Hi ha xifres verificables, metodologia explicada, any de referència? Una afirmació sense dades concretes és sospitosa. 3. ==Transparència|g==: Declara també els impactes negatius? Quines emissions totals té l'empresa? Una empresa que declara les seves millores però amaga les seves emissions totals aplica el punt 2 del greenwashing. 4. ==Consens científic|g==: L'afirmació és coherent amb el que diu la comunitat científica (IPCC, revistes peer-reviewed)? Hi ha una verificació externa independent (auditoria, certificació reconeguda)?",
      type: "concept",
      video: "/animacions/sa6-s3-t2.mp4"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Consum responsable: les ==3R== per ordre de prioritat",
      text: "Les ==3R== (Reducció, Reutilització, Reciclatge) son les estratègies de consum responsable, i l'ordre importa molt: ==Reducció|g== (primer i més eficient): no comprar allò que no cal. Evitar l'emissió és millor que gestionar-la després. ==Reutilització|o== (segon): allargar la vida dels productes (reparar, revendre, donar). ==Reciclatge|r== (tercer, menys eficient): transformar el residu en matèria primera nova. El reciclatge té un cost energètic i no és mai al 100%. Exemple: reciclar alumini requereix el 5% de l'energia de produir-ne de nou — molt bo. Però reciclar plàstic mixt és molt menys eficient. Molts anuncis promouen el reciclatge per desviar l'atenció de la reducció del consum. L'ordre correcte és sempre: ==Reduir primer|g== — l'embalatge que no existeix no cal reciclar-lo.",
      type: "concept",
      video: "/animacions/sa6-s3-t3.mp4"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "==Petjada ecológica==: més enllà del carboni",
      text: "La ==petjada ecológica|o== és la mesura de la demanda humana sobre la natura, expressada en ==hectàrees globals (hag)|g==: quanta superfície de terra i mar productius necessita un estil de vida concret per a generar tots els recursos que consumeix i absorbir tots els residus que produeix. La biocapacitat disponible per habitant és de ==1,8 hag/habitant|g==. La petjada ecológica d'un ciutadà dels Països Catalans és ≈4-5 hag — el doble del que el planeta pot suportar. La petjada ecológica inclou: la ==petjada de carboni|r== (la major part), la petjada de conreus, de pastures, de boscos, de pesca, d'urbanització. Un planeta sencer no seria suficient si tothom visqués com a Europa. Si visqués com als EUA, caldrien 5 planetes.",
      type: "concept",
      video: "/animacions/sa6-s3-t4.mp4"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Connexió ==enigma 1==: tercera pista — etiquetes i greenwashing al sector carni",
      text: "El sector carni és un dels sectors amb més ús de greenwashing. Etiquetes comunes i el que realment signifiquen: =='Natural'|r== al pernil: no té significat legal en molts països. Un porc de granja intensiva menjant pinso transgènic és 'natural'? =='Producció sostenible'|o==: sovint significa únicament que han reduït l'ús d'aigüa un 5%, no que les emissions de CH₄ hagin disminuït. =='CO₂ neutral'|r== en alguns productes: sovint basat en compensació per plantació d'arbres (criteri 2: l'evidència és dèbil). =='Benestar animal' o 'lliure de gabia'|o==: millora el benestar animal però no redueix necessàriament les emissions de GEH. Aplicant els 4 criteris CE2 a l'etiqueta del pernil: autoria (fabricant interessat ✗), evidència (dades d'emissions? rarament ✗), transparència (declara kg CO₂eq per kg? quasi mai ✗), consens (certificació externa independent? poc freqüent). Veredicte habitual: ==greenwashing|r==.",
      type: "epistemic",
      badge: "🧩 Enigma 1 — tercera pista",
      video: "/animacions/sa6-s3-t5.mp4"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Les 4 tàctiques de greenwashing amb exemples reals", src: "/images/sa6-g5-greenwashing-tactics.svg", note: "Infografia: 4 quadres, un per tàctica (afirmació vaga / compensació parcial / segell inventat / irrelevàncies). Exemple real d'empresa per a cada tàctica. Any i veredicte (tribunal / ASA / CE)." },
    { id: "G2", apartat: "3", title: "Petjada ecológica per països (hag/habitant, 2023)", src: "/images/sa6-g6-petjada-ecologica-paises.svg", note: "Mapa mundial amb escala de color per petjada ecológica. Línia vermella: biocapacitat disponible per habitant (1,8 hag). Anotació: EUA ≈8,1 / Europa ≈4,7 / Índia ≈1,2 hag. Font: Global Footprint Network 2023." }
  ],

  fitxaUrl: "/fitxes/sa6-s3-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S3 — Greenwashing: veritat o mentida?",
    steps: [
      { apartat: "0", title: "Idees prèvies + deures S2", time: "10 min", phase: "engage", instruction: "Apartat 0: respon les 2 preguntes inicials (anunci sospitós i responsabilitat individual/col·lectiva). Presenta el fenomen climàtic extrem de la feina a casa.", hints: [] },
      { apartat: "1", title: "Anàlisi d'anuncis i etiquetes (4 criteris CE2)", time: "25 min", phase: "explore", instruction: "Apartat 1: analitza 5 anuncis amb els 4 criteris. Omple la taula. Veredicte per a cada un. Presenta el cas de greenwashing més clar al grup gran.", hints: [
        "Pregunta clau: qui es beneficia de l'afirmació? L'empresa mateixa o una entitat independent?",
        "Fixat en el que NO diuen: una empresa que declara haver reduït un 10% les seves emissions però no diu quant emet en total aplica greenwashing per omissió."
      ] },
      { apartat: "2", title: "Greenwashing i 4 criteris de fiabilitat", time: "15 min", phase: "explica", instruction: "Apartat 2: completa el quadre de les 4 tàctiques (G1) amb exemples nous. Practica els 4 criteris CE2 amb 2 afirmacions ambientals que et proposem.", hints: [
        "CE2: no es tracta de dir que totes les empreses mentides. El criteri és exigir evidència. Una empresa pot tenir un missatge verd creïble si aporta dades verificables i verificació externa.",
        "La certificació ISO 14001 (gestió ambiental) és més fiable que un segell de disseny propi, però no garanteix zero emissions — tan sols que l'empresa té un sistema de gestió ambiental."
      ] },
      { apartat: "3", title: "3R, petjada ecológica i pista enigma", time: "10 min", phase: "explica", instruction: "Apartat 3: ordena les 3R de major a menor efectivitat. Calcula la teva petjada ecológica (calculadora facilitada). Escriu la tercera pista de l'enigma: aplica els 4 criteris a una etiqueta de pernil real.", hints: [
        "Reducció sempre primer: el millor residu és el que no es genera. Reciclar bé és millor que no reciclar, però és l'última opció.",
        "Petjada ecológica: la major part (50-70%) sol ser la petjada alimentària + transport. L'electricitat a casa sol ser un 10-15% del total."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Analitza aquesta afirmació: 'La nostra empresa ha plantat 500.000 arbres per compensar les seves emissions de CO₂'. Aplica els 4 criteris CE2 (autoria, evidència, transparència, consens) i dona un veredicte argumentat.", hint: "Autoria: és la pròpia empresa → interessat. Evidència: quants kg CO₂ absorbeixen 500.000 arbres? Quants anys? A quin bioma? Transparència: quantes tones CO₂ emet l'empresa al total? Consens: és l'arboricultura una solució adequada per al volum d'emissions? Veredicte: probablement greenwashing per compensació parcial." },
    { id: "q2", type: "open", text: "Explica les 3R per ordre de prioritat ecológica i posa un exemple concret per a cada una. Per quina raó la reducció ha d'anar sempre en primer lloc?", hint: "Reducció (evitar): no comprar la bossa de plàstic. Reutilització (allargar): usar la bossa de roba 100 vegades. Reciclatge (transformar): reciclar quan no hi ha alternativa. La reducció és prioritària perquè evita tota la cadena d'impacte: fabricació + transport + residus." },
    { id: "q3", type: "multiple", text: "Quin dels següents és un exemple clar de greenwashing?", options: ["Un producte amb etiqueta 'lliure de CFC' (els CFC estan prohibits per llei des de 1989)", "Un informe d'emissions verificat externament per una auditora independent", "Un producte amb certificació FSC per a la fusta (gestió forestal sostenible)", "Una empresa que declara les seves emissions Scope 1, 2 i 3 detalladament"], correct: 0 }
  ],

  homework: {
    description: "Dissenya una acció concreta i viable per reduir la petjada de carboni de la nostra escola. Ha de ser una mesura que podríeu implementar realment (menú, energia, mobilitat, residus). Escriu: Descripció de la mesura / Estimació de la reducció d'emissions (gCO₂eq/any) / Recursos necessaris / Qui hauria d'aprovar-la. Porta-ho escrit a S4.",
    note: "Tasca creativa amb dimensió real. A S4, un 'comitè d'iguals' en avaluarà l'evidència i la viabilitat.",
    deadline: "2026-04-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (greenwashing, 4 criteris CE2, 3R, petjada ecológica)",
    "Analitza 2 anuncis reals amb els 4 criteris. Veredicte argumentat",
    "Explica les 3R per ordre i dona un exemple de cada una",
    "Calcula la teva petjada ecológica (calculadora en línia)",
    "Omple la fitxa S3 apartats 0-3"
  ],
  oaLinks: ["OA3", "OA4"], competencies: ["CE2", "CE5"]
}
