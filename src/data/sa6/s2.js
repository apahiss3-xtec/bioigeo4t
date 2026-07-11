export const sa6s2 = {
  id: "s2", saId: "sa6",
  title: "D'on ve l'energia? + Efecte hivernacle",
  sessionNumber: 2, biome: "sa6", duration: "2h",
  engageImage: "/images/sa6-s2-energia.jpg",

  engageQuestion: "La nostra escola consumeix electricitat. D'on ve? De l'endoll, sí — però d'on ve l'electricitat de l'endoll? Poseu-vos d'acord en grup: quines fonts d'energia coneixeu? Quines creieu que son les més usades a Catalunya? I a nivell global?",
  engageContext: "Posada en comú dels productes de casa (deures S1). Es construeix un mapa de petjades al projector. Seguidament, el docent presenta el lab de les ampolles: podem demostrar a classe, amb materials senzills, que el CO₂ reté calor? La hipòtesi és la de les alumnes.",

  levelObjectives: {
    A: [
      "Distingeixo entre energia primària (font: carbó, vent, sol) i energia final (electricitat, calor a casa) i explico les pèrdues de conversió. Calculo l'eficiència d'una planta tèrmica de carbó (≈35%) vs una fotovoltaica (≈20%) vs una eòlica (≈40%).",
      "Analitzo el mix elèctric de Catalunya (% de cada font) i argumento per quina raó la descarbonització del sector elèctric és condició necessària però no suficient per assolir la neutralitat de carboni.",
      "Diseño un experiment adequat per demostrar l'efecte hivernacle a petita escala (variable dependent, independent, control), identifico les limitacions del model i explico per quina raó no podem extrapolar directament els resultats al clima global.",
      "Relaciono el concepte de retroalimentació positiva (feedback loop) amb l'escalfament global: fusió de gel àrtic → menys albedo → més absorció de calor → més fusió. Argumenta per quina raó els punts de no retorn (tipping points) son la preocupació principal dels científics del clima."
    ],
    B: [
      "Distingeixo les fonts d'energia renovables de les no renovables i explico per quina raó les renovables son considerades 'netes' des d'un punt de vista climàtic.",
      "Enumero almenys 4 fonts d'energia renovables i 3 de no renovables, i associo cada una al seu impacte principal sobre el clima o el medi ambient.",
      "Descric el disseny del lab de les ampolles (hipòtesi, variable independent, control, resultat esperat) i interpreto per quina raó la diferència de temperatura és petita però significativa.",
      "Llisto almenys 3 conseqüències observables del canvi climàtic i les relaciono amb les evidències científiques disponibles (IPCC)."
    ],
    C: [
      "Classifico correctament en renovable / no renovable: carbó / sol / vent / petroli / gas natural / hidràulica / nuclear. La diferència clau és si la font es ___ (regenera/esgota) en escala humana.",
      "Completo: el lab de les ampolles demostra que l'ampolla amb ___ (CO₂/aire) s'escalfa ___ (més/menys) que l'ampolla control. Això és perquè el CO₂ ___ (reté/deixa passar) la radiació infraroja.",
      "Escriu 2 conseqüències del canvi climàtic que has sentit o llegit i explica com es relacionen amb l'augment de temperatura.",
      "Completo la segona pista de l'enigma: el pernil necessita energia per ___. Aquesta energia prové de ___ (renovables/fòssils) a la majoria d'explotacions porcines."
    ]
  },

  apartatExtras: {
    "2": {
      scaffold: "Omple la taula d'energies: Carbó → renovable? ___ → emissió principal: ___. Solar → renovable? ___ → emissió: ___. Eòlica → renovable? ___ → emissió: ___. Gas natural → renovable? ___ → emissió: ___. Nuclear → renovable? ___ → emissió principal: ___. Ara explica: quina diferència fonamental separa les renovables de les no renovables?",
      challenge: "Investiga el 'cost del cicle de vida' d'una placa solar fotovoltaica: quanta energia és necessària per fabricar-la (energia gris o embodied energy)? Quant triga a amortitzar energèticament la seva producció (energy payback time)? Busca les dades per a panells de silici monocristal·lí. Conclou: si una placa solar dura 25 anys, quin és el seu balanç energètic net?"
    },
    "3": {
      scaffold: "Omple el quadre de conseqüències del canvi climàtic: Augment temperatura → ____ (3 exemples). Fusió glaceres i gel polar → ____. Pujada del nivell del mar → ____. Acidificació dels oceans → ____. Fenòmens meteorològics extrems → ____. Quin creus que és el més urgent per a Catalunya?",
      challenge: "El concepte de 'tipping point' (punt de no retorn) és clau en la ciència del clima. Investiga 2 tipping points identificats per l'IPCC: a) la fusió del permafrost siberià i b) la mort dels arrecifes de coral. Per a cada un: quina temperatura d'escalfament l'activa? Quines retroalimentacions positives desencadena? Per quina raó, un cop creuat, pot ser irreversible?"
    }
  },

  ideesPrevies: {
    startPoint: "Avui fem el lab de les ampolles i estudiem les fonts d'energia. Compartiu els productes de la feina a casa i les seves petjades. Hi ha alguna sorpresa?",
    prompts: [
      {
        kind: "write",
        text: "Si haguessis de dissenyar un experiment per demostrar que el CO₂ reté calor, com ho faries? Quins materials necessitaries? Quina seria la teva hipòtesi?",
        starter: "El meu experiment tindria... La meva hipòtesi és que..."
      },
      {
        kind: "write",
        text: "Quines fonts d'energia coneixes? Fes dues llistes: les que creus que son 'netes' per al clima, i les que creus que no ho son. Explica el criteri que fas servir.",
        starter: "Energies netes per al clima: ... Energies no netes: ... El meu criteri és..."
      }
    ]
  },

  exploreInstructions: [
    "Lab de les ampolles (per grups de 4): rebeu 2 ampolles de plàstic 2L, 2 termòmetres, 1 làmpada de 100W i bicarbonat + vinagre per generar CO₂",
    "Pas 1 (5 min): formuleu la hipòtesi del grup — l'ampolla amb CO₂ s'escalfarà més, menys o igual que l'ampolla amb aire? Escriviu-la a la fitxa",
    "Pas 2 (5 min): ompliu una ampolla amb CO₂ (bicarbonat + vinagre) i l'altra amb aire normal. Col·loqueu el termòmetre a cada ampolla. Registreu la temperatura inicial",
    "Pas 3 (10 min): poseu les dues ampolles a la mateixa distància de la làmpada. Registreu la temperatura cada 2 minuts (5 mesures). Ompliu la taula de dades",
    "Pas 4 (5 min): compareu els resultats amb els altres grups. Interpreteu: la diferència és la que esperàveu? Quines limitacions té el model?",
    "Moment epistèmic: el docent guia la discussió sobre el problema d'escala. La diferència de temperatura és petita al lab, però en el clima global, petites diferències de temperatura tenen efectes enormes"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["2 ampolles 2L per grup", "2 termòmetres", "Làmpada 100W o focus de projecció", "Bicarbonat (2 cullerades) + vinagre (100 mL) per generar CO₂", "Cronòmetre", "Fitxa de registre de dades"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Fonts d'energia ==no renovables==: els combustibles fòssils",
      text: "Les fonts d'energia ==no renovables|r== s'esgoten o triguen milions d'anys a regenerar-se. Els ==combustibles fòssils== (carbó, petroli, gas natural) son restes d'organismes vius de fa 300-60 milions d'anys transformades per pressió i temperatura. En cremar-los, alliberem el CO₂ que aquells organismes havien fixat de l'atmosfera milions d'anys enrere — en qüestió de segles. Connexió SA5: el ==cicle del carboni|g== s'ha accelerat de forma artificial. L'==energia nuclear== usa urani (també no renovable) per fissió: no emet CO₂ directament, però genera residus radioactius de llarga durada. Avui, els combustibles fòssils proporcionen ≈80% de l'energia primària global (AIE, 2023).",
      type: "concept",
      video: "/animacions/sa6-s2-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Fonts d'energia ==renovables==: el futur de l'energia",
      text: "Les fonts d'energia ==renovables|g== es regeneren de forma natural en escala humana. Les principals son: ==Solar fotovoltaica|g==: la llum solar genera electricitat directament (cèl·lules fotovoltaiques). ==Solar tèrmica|g==: la calor solar s'usa per escalfar aigua o generar vapor. ==Eòlica|b==: el vent fa girar turbines. ==Hidràulica|b==: l'energia de l'aigua en caiguda. ==Geotèrmica|o==: la calor interna de la Terra. ==Biomassa|o==: crema de matèria orgànica (carboni neutral si és sostenible). Cap de les renovables emet CO₂ en el moment de la generació, però totes tenen un impacte ambiental en la fabricació dels equips (energia gris). A Catalunya (2023): 55% renovable (eòlica + hidràulica + solar + nuclear), 45% fòssil.",
      type: "concept",
      video: "/animacions/sa6-s2-t2.mp4"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "El model de les ampolles: que hem demostrat i quins ==límits== té",
      text: "L'experiment de les ampolles demostra que el CO₂ ==reté més calor|r== que l'aire normal — la base física de l'efecte hivernacle. La diferència de temperatura (típicament 1-3 °C en 10 minuts) sembla petita. ==Moment epistèmic==: el clima global no funciona com dues ampolles sota una làmpada. Les diferències d'escala son enormes: el model simplifica la composició de l'atmosfera real (0,04% CO₂), la convecció, la radiació infraroja, les retroalimentacions de núvols, etc. El que el model sí demostra és el ==principi|g==: certes molècules (CO₂, CH₄) absorbeixen radiació infraroja i la reemeten en totes direccions, retenint calor. Com tot model científic, és útil i limitat alhora.",
      type: "epistemic",
      video: "/animacions/sa6-s2-t3.mp4"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Conseqüències del canvi climàtic: ==evidències== i projeccions",
      text: "El canvi climàtic ja és observable. Evidències actuals (IPCC AR6, 2021): ==Temperatura|r== global: +1,1 °C respecte al nivell preindustrial (2023 va ser el més càlid registrat: +1,45 °C). ==Glaceres|b== i gel àrtic: el volum de gel estival àrtic s'ha reduït un 40% des dels anys 70. ==Nivell del mar|b==: pujada de 20 cm des del 1900, accelerant-se. ==Acidificació dels oceans|o==: el pH ha baixat 0,1 unitats (↑30% d'acidesa). ==Fenòmens extrems|r==: onades de calor, sequeres, pluges torrencials i ciclons més freqüents i intensos. Projeccions: sense acció, +2 °C per al 2050; +3-4 °C per al 2100. Amb els acords actuals de París: +2,5-3 °C.",
      type: "concept",
      video: "/animacions/sa6-s2-t4.mp4"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Connexió ==enigma 1==: segon pas — l'energia de la cadena porcina",
      text: "La segona pista de l'enigma connecta l'energia amb el pernil. La cadena de producció del pernil consumeix energia en múltiples etapes: 1. ==Maquinària agrícola|r== (tractors i collitadores a dièsel) per produir el pinso de cereals. 2. ==Calefacció i ventilació|r== de les granges porcines (electricitat, sovint de fòssils). 3. ==Transport|o== entre granja, escorxador, fàbrica de curat i supermercat. 4. ==Refrigeració|o== permanent de tota la cadena. Si la major part d'aquesta energia prové de fonts ==fòssils|r==, l'empremta de CO₂ s'acumula en cada fase. A mesura que el mix elèctric es descarbonitza (més solar i eòlica), la petjada del pernil es reduiria lleument — però les emissions de CH₄ entèric i N₂O dels purins dependrien d'un canvi de model ramader.",
      type: "epistemic",
      badge: "🧩 Enigma 1 — segon pas",
      video: "/animacions/sa6-s2-t5.mp4"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Mix elèctric de Catalunya i Espanya (2023)", src: "/images/sa6-g3-mix-electric.svg", note: "Gràfic de sectors (donut): % de cada font d'energia en la generació elèctrica. Comparació Catalunya vs Espanya vs UE vs global. Font: Red Eléctrica de España / AIE 2023." },
    { id: "G2", apartat: "3", title: "Projeccions del canvi climàtic: temperatura i nivell del mar", src: "/images/sa6-g4-projeccions-clima.svg", note: "Gràfic de línies: temperatura global 1850-2100 amb 3 escenaris (SSP1-1.9 / SSP2-4.5 / SSP5-8.5). Eix secundari: pujada del nivell del mar. Font: IPCC AR6 (2021)." }
  ],

  fitxaUrl: "/fitxes/sa6-s2-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S2 — D'on ve l'energia? + Efecte hivernacle",
    steps: [
      { apartat: "0", title: "Idees prèvies + deures S1", time: "10 min", phase: "engage", instruction: "Apartat 0: respon les preguntes inicials (hipòtesi lab + classificació energies). Comparteix els productes de la feina a casa al grup.", hints: [] },
      { apartat: "1", title: "Lab de les ampolles (efecte hivernacle)", time: "25 min", phase: "explore", instruction: "Apartat 1: omple la fitxa del lab (hipòtesi / disseny / taula de dades / conclusió). Identifica les limitacions del model.", hints: [
        "La hipòtesi ha d'especificar la variable independent (CO₂ vs aire) i la dependent (temperatura), i ha de ser falsable.",
        "Limitació principal: l'experiment no reprodueix la composició real de l'atmosfera (0,04% CO₂), ni la convecció ni la radiació infraroja real. Però sí demostra el principi físic."
      ] },
      { apartat: "2", title: "Fonts d'energia renovables i no renovables", time: "15 min", phase: "explica", instruction: "Apartat 2: classifica 10 fonts d'energia en renovable/no renovable. Completa la taula amb l'impacte climàtic de cada una. Analitza el mix elèctric de Catalunya (G1).", hints: [
        "Clau: renovable = es regenera en escala humana (sol, vent, aigua). No renovable = s'esgota (carbó, petroli, gas, urani).",
        "Nuclear: no emet CO₂ en operació, però no és renovable (l'urani s'esgota) i genera residus radioactius de llarga vida."
      ] },
      { apartat: "3", title: "Conseqüències del CC i connexió enigma", time: "10 min", phase: "explica", instruction: "Apartat 3: omple la taula de conseqüències del canvi climàtic (evidència actual + projecció 2100). Escriu la segona pista de l'enigma: com es connecta l'energia al cicle de producció del pernil?", hints: [
        "Evidències: temperatura (+1,1°C), glaceres (−40% gel àrtic), mar (+20 cm), acidificació dels oceans (pH −0,1).",
        "Pista enigma: les etapes amb més consum energètic de la cadena porcina son la producció de pinso (maquinària agrícola) i la refrigeració de la distribució."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Descriu el disseny del lab de les ampolles: quina és la variable independent? Quina és la dependent? Quin és el control? Quin resultat has obtingut i com l'interpretes?", hint: "Variable independent: composició del gas (CO₂ vs aire). Variable dependent: temperatura final. Control: ampolla amb aire a la mateixa distància i condicions. Interpretació: el CO₂ reté la radiació infraroja, escalfant l'interior de l'ampolla." },
    { id: "q2", type: "open", text: "Enumera 3 fonts d'energia renovables i explica per quina raó cada una s'anomena 'neta' des d'un punt de vista climàtic. Quines emissions sí generen les renovables (pensa en el cicle de vida complet)?", hint: "Neta = no emet CO₂ en la generació. Però les renovables sí emeten CO₂ en la fabricació dels equips (panells, turbines, preses) — és l'energia 'gris' o 'embodied energy'. S'amortitza en pocs anys d'operació." },
    { id: "q3", type: "multiple", text: "Quina font d'energia genera la petjada de CO₂ per kWh produït més baixa?", options: ["Central de gas natural de cicle combinat", "Central nuclear d'urani", "Parc eòlic offshore", "Central de biomassa"], correct: 2 }
  ],

  homework: {
    description: "Busca a quantes persones ha desplaçat un fenomen climàtic extrem (inundacions, onada de calor, sequera) en els darrers 5 anys. Aporta el nom del fenomen, l'any, la zona geogràfica i el nombre de persones afectades. Porta la informació a S3.",
    note: "Activitat de recerca no delegable a IA: requereix cerca activa, selecció de fonts fiables i valoració crítica de la informació.",
    deadline: "2026-04-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (fonts d'energia, model ampolles, conseqüències canvi climàtic)",
    "Classifica 10 fonts d'energia en renovable/no renovable i explica el criteri",
    "Descriu el lab de les ampolles: hipòtesi, disseny, resultat i 2 limitacions",
    "Llista 3 evidències del canvi climàtic amb dades concretes",
    "Omple la fitxa S2 apartats 0-3"
  ],
  oaLinks: ["OA1", "OA2"], competencies: ["CE5"]
}
