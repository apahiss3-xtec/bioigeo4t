export const sa6s1 = {
  id: "s1", saId: "sa6",
  title: "L'esmorzar dels meus CO₂",
  sessionNumber: 1, biome: "sa6", duration: "2h",
  engageImage: "/images/sa6-s1-esmorzar.jpg",

  engageQuestion: "Avui has esmorzat (o ho faràs). Creus que el teu esmorzar contamina? Un bocadillo de pernil ibèric emet ≈500 gCO₂eq —cinc vegades més que un de formatge fresc. Un vol Barcelona–Londres emet ≈250 kg de CO₂ per persona. Per quina raó el pernil és tan contaminant? Ho descobrirem al llarg de la SA.",
  engageContext: "Cada alumne anota mentalment o en paper el seu esmorzar d'avui. El docent mostra una taula de petjada de carboni d'aliments habituals (producte / gCO₂eq per 100g). Es planteja l'enigma: el bocadillo de pernil emet 5× més que el de formatge. Per quina raó? Es presenta la SA: al final sabrem calcular la petjada de carboni del nostre esmorzar i entendrem per quina raó els aliments d'origen animal solen tenir un impacte molt més alt.",

  levelObjectives: {
    A: [
      "Explico el mecanisme de l'efecte hivernacle natural i la seva amplificació antròpica: quins gasos actuen com a 'vidre' i per quina raó el CO₂ no és l'únic responsable (CH₄ té un potencial d'escalfament 28× superior al CO₂ en 100 anys).",
      "Calculo la petjada de carboni del meu esmorzar complet (gCO₂eq per ingredient) i la comparo amb la petjada d'un esmorzar equivalent vegetarià. Argumento quins canvis reduirien més les emissions.",
      "Distingeixo entre emissió directa de CO₂ (crema combustible) i emissió equivalent de CH₄ o N₂O (expressades en CO₂eq). Explico per quina raó la ramaderia és una de les tres principals fonts d'emissió globals.",
      "Relaciono el cicle del carboni (SA5) amb l'efecte hivernacle: explico com la crema de combustibles fòssils altera el cicle natural incorporant CO₂ que havia estat fixat fa milions d'anys."
    ],
    B: [
      "Explico el mecanisme de l'efecte hivernacle natural i com l'activitat humana l'ha amplificat des de la Revolució Industrial.",
      "Identifico els tres principals gasos d'efecte hivernacle (CO₂, CH₄, N₂O), les seves fonts principals i per quina raó s'expressen en CO₂ equivalent (CO₂eq).",
      "Calculo la petjada de carboni d'almenys 3 aliments i les ordeno de major a menor impacte. Explico per quina raó la carn de vedella té una petjada molt més gran que les llegums.",
      "Explico per quina raó la primera pista de l'enigma és la ramaderia porcina: quines emissions genera i en quines fases del cicle de vida del pernil?"
    ],
    C: [
      "Completo: l'efecte hivernacle natural manté la Terra a ___ °C. Sense ell, la temperatura seria ___ °C. El problema actual és que les activitats humanes ___ (augmenten/disminueixen) la concentració de gasos hivernacle.",
      "Identifico almenys 2 gasos d'efecte hivernacle i la seva font principal: CO₂ → font: ___; CH₄ → font: ___.",
      "Ordeno de més a menys contaminant: vedella / pollastre / llegums / arròs. El més contaminant és ___ perquè ___.",
      "Completo la primera pista de l'enigma: el pernil emet més CO₂ que el formatge perquè els porcs emeten ___ durant la digestió, i la producció de pinso per alimentar-los necessita ___ quilòmetres de camp."
    ]
  },

  apartatExtras: {
    "2": {
      scaffold: "Omple el diagrama de l'efecte hivernacle: Sol → radiació entra → Terra s'escalfa → Terra emet calor cap a l'espai → gasos GEH ___ (retenen/alliberen) part de la calor → temperatura mitjana puja. Sense gasos GEH, la Terra estaria a ___ °C. Amb l'augment actual de CO₂, la temperatura ha pujat ___ °C des del 1850.",
      challenge: "El metà (CH₄) té un potencial d'escalfament global (GWP) de 28 en un horitzó de 100 anys. Això significa que 1 kg de CH₄ equival a 28 kg de CO₂ en termes d'impacte climàtic. Un porc emet aproximadament 1,5 kg de CH₄ al dia per fermentació entèrica. Calcula l'equivalent en CO₂ d'un ramat de 500 porcs al llarg d'un any. Compara-ho amb el CO₂ emès per un cotxe gasolina que recorre 15.000 km/any (≈2.400 kg CO₂)."
    },
    "3": {
      scaffold: "Omple la taula de petjada de carboni (gCO₂eq per 100g): Vedella: ___. Porc: ___. Pollastre: ___. Formatge: ___. Llet: ___. Llegums: ___. Verdures: ___. Ordena'ls de més a menys contaminant. Quin grup d'aliments té sempre la petjada més alta? Per quina raó?",
      challenge: "Investiga el concepte de 'food miles' (quilòmetres alimentaris): quins factors determinen la petjada de carboni d'un aliment? (transport, procés, refrigeració, embalatge, ramaderia). Per quina raó un tomàquet d'hivernacle holandès pot tenir una petjada superior a un de Marroc transportat per vaixell? Quin factor predomina: el transport o la producció?"
    }
  },

  ideesPrevies: {
    startPoint: "Avui comencem SA6. A la paret teniu l'enigma del bocadillo de pernil. Anoteu el que sabeu ara sobre el canvi climàtic — al final de la SA comparareu. No hi ha resposta incorrecta.",
    prompts: [
      {
        kind: "write",
        text: "Creus que el canvi climàtic és un problema real i urgent? Per quina raó? Quines evidències has vist o sentit que t'ho fan pensar?",
        starter: "Crec que el canvi climàtic és... perquè he vist/sentit que..."
      },
      {
        kind: "draw",
        text: "Dibuixa un esquema de l'efecte hivernacle tal com te l'imagines ara. No cal que sigui correcte — volem saber el teu model mental inicial.",
        starter: "El meu model de l'efecte hivernacle és..."
      },
      {
        kind: "write",
        text: "Quines activitats de la teva vida quotidiana creus que generen més CO₂? Llista'n almenys 3 ordenades de major a menor impacte (estimat).",
        starter: "Les activitats que crec que contaminen més son..."
      }
    ]
  },

  exploreInstructions: [
    "Per grups de 3: rebeu la taula de petjada de carboni de 20 aliments habituals (gCO₂eq per 100g). Teniu 10 minuts per calcular la petjada de carboni del vostre esmorzar d'avui",
    "Tasca 1 (10 min): cadascú calcula la petjada del seu esmorzar. Sumeu els gCO₂eq de cada ingredient. Qui té l'esmorzar més contaminant del grup?",
    "Tasca 2 (10 min): compareu la petjada de 5 esmorzars tipus (continental, vegà, mediterrani, fast food, pernil i formatge). Classifiqueu-los de menor a major impacte",
    "Tasca 3 (5 min): debat breu — per quina raó la vedella i el porc surten sempre als primers llocs? Quines hipòtesis teniu?",
    "Moment epistèmic: posada en comú. El docent sistematitza els gasos GEH i introdueix el concepte de CO₂ equivalent (CO₂eq)"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Taula de petjada de carboni d'aliments (per grup)", "Calculadora", "Projector: diagrama comparatiu d'emissions per categoria d'aliment"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "L'==efecte hivernacle==: el mecanisme natural i l'amplificació humana",
      text: "L'==efecte hivernacle== és un fenomen natural imprescindible per a la vida: sense ell, la temperatura mitjana de la Terra seria de −18 °C en comptes dels actuals +15 °C. Funciona com el vidre d'un hivernacle: la llum solar entra, escalfa la superfície terrestre, i la calor que la Terra re-emet cap a l'espai és ==parcialment retinguda|r== pels gasos d'efecte hivernacle de l'atmosfera. El problema actual és que l'activitat humana ha augmentat la concentració d'aquests gasos de forma dràstica des de la Revolució Industrial (1750), ==amplificant|r== l'efecte i provocant un escalfament addicional de +1,1 °C (mitjana global, dades IPCC 2023). Petits canvis de temperatura mitjana global tenen conseqüències enormes.",
      type: "concept",
      video: "/animacions/sa6-s1-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Gasos d'efecte hivernacle (==GEH==): CO₂, CH₄ i N₂O",
      text: "Els principals ==gasos d'efecte hivernacle|r== (GEH) son: ==CO₂== (diòxid de carboni) — font principal: crema de combustibles fòssils (carbó, petroli, gas natural) i deforestació. Concentració actual: 422 ppm (2024), vs 280 ppm preindustrial. ==CH₄|o== (metà) — font principal: ramaderia (fermentació entèrica del bestiar), abocadors, explotació de gas natural. Potencial d'escalfament 28× el CO₂ en 100 anys. ==N₂O|b== (òxid nitrós) — font principal: adobs nitrogenats (agricultura), ramaderia. Potencial 273×. Per comparar el seu impacte s'usa el ==CO₂ equivalent (CO₂eq)|g==: s'expressa tot en termes de CO₂. Connexió SA5: els GEH alteren el ==cicle del carboni|g== que hem estudiat.",
      type: "concept",
      video: "/animacions/sa6-s1-t2.mp4"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "La ==petjada de carboni==: definició i com es calcula",
      text: "La ==petjada de carboni== és la quantitat total de gasos d'efecte hivernacle emesos directament o indirectament per una persona, producte, organització o activitat, expressada en ==kg de CO₂eq|g==. Es calcula sumant les emissions de tota la cadena de vida del producte: producció de les primeres matèries + transformació + transport + ús + fi de vida (==anàlisi de cicle de vida|g== o ACV). Valors de referència: 1 kg de vedella ≈ 27 kg CO₂eq. 1 kg de pollastre ≈ 6 kg CO₂eq. 1 kg de llegums ≈ 0,9 kg CO₂eq. 1 litre de llet ≈ 3,2 kg CO₂eq. La petjada de carboni ==no és l'única mesura|o== d'impacte ambiental (també hi ha la petjada hídrica, l'ús de terra, la contaminació de sòls…).",
      type: "concept",
      video: "/animacions/sa6-s1-t3.mp4"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "L'impacte de la ramaderia: per quina raó la ==carn roja== és tan contaminant?",
      text: "La ramaderia representa ==14,5%|r== de les emissions globals de GEH (FAO, 2023). Tres raons expliquen per quina raó la carn roja (vedella, porc) és la categoria d'aliments amb la petjada de carboni més alta: 1. ==Metà entèric|r==: la fermentació dels aliments a l'estómac dels ramats de vaques i porcs genera grans quantitats de CH₄. 2. ==Producció de pinso|r==: alimentar 1 kg de porc requereix ≈3-4 kg de cereal (eficiència ≈25%). Produir aquells cereals necessita adobs nitrogenats (N₂O) i maquinària agrícola (CO₂). 3. ==Gestió dels purins|o==: el fem dels porcs en descomposició produeix CH₄ i N₂O. Comparació: produir 100 g de proteïna de vedella emet ≈50 kg CO₂eq, vs ≈1 kg CO₂eq per a llegums.",
      type: "concept",
      video: "/animacions/sa6-s1-t4.mp4"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Connexió ==enigma 1==: primera pista — el cicle de vida del pernil",
      text: "Ara pots entendre la primera pista de l'enigma. Un bocadillo de pernil ibèric (≈80g de pernil) emet ≈500 gCO₂eq, mentre que un de formatge fresc (≈80g) n'emet ≈100 gCO₂eq. Les ==quatre fonts d'emissió|r== del pernil son: 1. El porc produeix ==CH₄ per fermentació entèrica|r== (equivalent a ≈150 gCO₂eq per kg de carn). 2. La producció de ==pinso de cereal|r== per alimentar el porc (elevat ús de terra + adobs N₂O). 3. La ==gestió dels purins|o== de l'explotació porcina. 4. El ==transport i refrigeració|o== de la cadena de distribució. Per contra, el formatge emet menys perquè la vaca la produeix ==llet de forma més eficient|g== que la carn, i el formatge té menys etapes d'emissió. A S2 veurem la connexió amb les fonts d'energia.",
      type: "epistemic",
      badge: "🧩 Enigma 1 — primera pista",
      video: "/animacions/sa6-s1-t5.mp4"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Diagrama de l'efecte hivernacle ampliat per l'activitat humana", src: "/images/sa6-g1-efecte-hivernacle.svg", note: "Diagrama de flux: Sol → radiació solar → Terra s'escalfa → calor re-emesa → gasos GEH retenen part de la calor → temperatura puja. Comparació concentracions CO₂: 280 ppm (preindustrial) vs 422 ppm (2024)." },
    { id: "G2", apartat: "3", title: "Petjada de carboni comparada de 10 categories d'aliments", src: "/images/sa6-g2-petjada-aliments.svg", note: "Gràfic de barres horitzontal: kg CO₂eq per 100g de proteïna. Ordre descendent: vedella, xai, porc, formatge, pollastre, peix, llet, ou, llegums, tofu. Font: Our World in Data / Oxford (Poore & Nemecek 2018)." }
  ],

  fitxaUrl: "/fitxes/sa6-s1-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S1 — L'esmorzar dels meus CO₂",
    steps: [
      { apartat: "0", title: "Idees prèvies sobre el canvi climàtic", time: "5 min", phase: "engage", instruction: "Apartat 0: respon les 3 preguntes inicials. Dibuixa el teu model mental de l'efecte hivernacle. No es corregeix ara.", hints: [] },
      { apartat: "1", title: "Càlcul de la petjada de carboni de l'esmorzar", time: "25 min", phase: "explore", instruction: "Apartat 1: calcula la petjada del teu esmorzar d'avui (gCO₂eq per ingredient). Compara 5 esmorzars tipus. Construeix el rànquing del grup.", hints: [
        "Per calcular: petjada de l'ingredient = pes (g) × gCO₂eq per g. Exemple: 80g de pernil ibèric × 6,25 gCO₂eq/g ≈ 500 gCO₂eq.",
        "Recorda que la petjada de la beguda també compta: un got de llet (200 mL ≈ 200g) emet aproximadament 640 gCO₂eq."
      ] },
      { apartat: "2", title: "L'efecte hivernacle i els gasos GEH", time: "20 min", phase: "explica", instruction: "Apartat 2: completa el diagrama de l'efecte hivernacle (G1). Omple la taula dels 3 gasos GEH: nom / fórmula / font / potencial d'escalfament.", hints: [
        "Clau: l'efecte hivernacle NATURAL és necessari per a la vida. El problema és l'AMPLIFICACIÓ humana.",
        "CO₂eq: tots els gasos s'expressen en CO₂ equivalent per poder-los sumar. 1 kg de CH₄ = 28 kg CO₂eq."
      ] },
      { apartat: "3", title: "Petjada de carboni alimentària i primera pista", time: "10 min", phase: "explica", instruction: "Apartat 3: analitza el gràfic de petjada per categoria d'aliment (G2). Respon: per quina raó la vedella i el porc surten sempre als primers llocs? Escriu la primera pista de l'enigma.", hints: [
        "Les tres fonts d'emissió de la carn: 1) metà entèric del propi animal, 2) producció del pinso, 3) gestió dels purins.",
        "Eficiència de conversió: 1 kg de porc requereix ≈3-4 kg de cereals (≈25% d'eficiència energètica). Compara amb les llegums: l'any fix nitrogen de l'aire sense adobs."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica l'efecte hivernacle en 3 frases: mecanisme natural + amplificació humana + conseqüència principal. Anomena els dos gasos GEH amb major impacte global (no necessàriament el més abundant).", hint: "Mecanisme: la calor re-emesa per la Terra és retinguda per gasos GEH. Amplificació: la crema de fòssils i la ramaderia han augmentat la concentració. Gasos: CO₂ (per volum) i CH₄ (per potencial d'escalfament 28×)." },
    { id: "q2", type: "open", text: "Per quina raó un bocadillo de pernil emet 5 vegades més CO₂eq que un de formatge fresc? Anomena almenys 2 de les fonts d'emissió del procés de producció del pernil.", hint: "Fonts: 1) CH₄ per fermentació entèrica del porc. 2) Producció del pinso (cereals + adobs N₂O + maquinària). 3) Gestió dels purins. 4) Transport i refrigeració." },
    { id: "q3", type: "multiple", text: "Quin aliment té normalment la petjada de carboni més baixa per 100g de proteïna?", options: ["Vedella ecològica de pastura", "Peix blau (salmó)", "Llegums (llenties, cigrons)", "Ous de gallina"], correct: 2 }
  ],

  homework: {
    description: "Fotografía l'etiqueta de 3 productes de la nevera de casa. Per a cadascun, busca la petjada de carboni aproximada a la taula que t'hem donat. Calcula la petjada total dels 3 productes i pregunta a casa: algú de la família n'és conscient? Porta les fotos i el càlcul a S2.",
    note: "Activitat de camp no delegable a IA: requereix observació i conversa familiar pròpia.",
    deadline: "2026-04-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (efecte hivernacle, gasos GEH, petjada de carboni, impacte de la ramaderia)",
    "Completa el diagrama de l'efecte hivernacle (G1) i la taula de gasos GEH",
    "Calcula la petjada de carboni del teu esmorzar d'avui usant la taula (busca'la en línia si no la tens)",
    "Omple la fitxa S1 apartats 0-3",
    "Exit tiquet en paper a S2"
  ],
  oaLinks: ["OA1", "OA3"], competencies: ["CE5"]
}
