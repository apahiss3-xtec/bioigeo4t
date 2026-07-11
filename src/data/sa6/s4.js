export const sa6s4 = {
  id: "s4", saId: "sa6",
  title: "Podem canviar alguna cosa?",
  sessionNumber: 4, biome: "sa6", duration: "2h",
  engageImage: "/images/sa6-s4-accio.jpg",

  engageQuestion: "Heu dissenyat una proposta d'acció per reduir la petjada de la nostra escola. Ara toca avaluar-les com ho faria un ajuntament o una escola real: amb evidència i viabilitat. Quines propostes son realistes i impactants? Com s'argumenta que una mesura és efectiva?",
  engageContext: "Posada en comú de les propostes individuals de la feina a casa. El docent anuncia el 'comitè d'iguals': cada grup avalua les propostes d'un altre grup amb la rúbrica (evidència i viabilitat). Es presenta la resolució de l'enigma del bocadillo de pernil i es tanca la SA.",

  levelObjectives: {
    A: [
      "Avaluo la proposta d'acció d'un altre grup aplicant la rúbrica de 4 dimensions (evidència d'emissions / viabilitat / impacte estimat / coherència amb els ODS) i justificao cada puntuació amb argumentació científica.",
      "Relaciono la proposta d'acció escolar amb almenys 2 dels 17 Objectius de Desenvolupament Sostenible (ODS) de l'ONU i argumento per quina raó les accions locals son necessàries però insuficients sense acció sistèmica.",
      "Analitzo els acords internacionals sobre el clima (Kyoto 1997, París 2015, Glasgow COP26 2021) identificant els seus objectius principals, l'any de ratificació, els països signants clau i per quina raó molts científics consideren que els compromisos actuals son insuficients.",
      "Construeixo un argument complet sobre si les escoles haurien de tenir una política climàtica explícita: aporto exemples reals d'escoles amb zero emissions, quantifico l'impacte potencial i contraresto l'argument de 'les escoles no fan la diferència'."
    ],
    B: [
      "Presento i argumento la meva proposta d'acció per a l'escola amb dades d'impacte estimades (reducció de gCO₂eq/any).",
      "Avaluo la proposta d'un altre grup usant la rúbrica (evidència + viabilitat) i dono un feedback constructiu.",
      "Explico els objectius principals dels Acords de París (2015) i per quina raó es va fixar l'objectiu de no superar +1,5 °C i +2 °C.",
      "Relaciono la transició energètica, el consum responsable i les accions col·lectives com a tres pilars de la resposta al canvi climàtic."
    ],
    C: [
      "Presento la meva proposta d'acció per a l'escola: Mesura → ___. Reducció estimada: ___ kg CO₂/any. Recursos: ___. Qui ho ha d'aprovar: ___.",
      "Completo: els Acords de París (2015) van fixar l'objectiu de no superar ___ °C d'escalfament global. El van signar ___ països. El principal repte és que els compromisos actuals porten a ___ °C.",
      "Resolc l'enigma: el bocadillo de pernil emet 5× més CO₂ que el de formatge perquè: 1) ___. 2) ___. 3) ___.",
      "Proposo 1 acció concreta que JO puc fer per reduir la meva petjada de carboni alimentària, amb un impacte estimat."
    ]
  },

  apartatExtras: {
    "2": {
      scaffold: "Omple la taula de la transició energètica: del fòssil a les renovables. Font fòssil → renovable equivalent: Carbó → ___. Petroli (cotxe) → ___. Gas natural (calefacció) → ___. Per quina raó no podem fer la transició de cop? Quins 2 obstacles principals hi ha (tècnic / econòmic / social)?",
      challenge: "Analitza els 3 escenaris d'emissions de l'IPCC (SSP1-1.9, SSP2-4.5, SSP5-8.5): quines polítiques concretes cal implementar per a cada escenari? Quina és la probabilitat que el món segueixi cada trajectòria? Argumenta quin és el millor i el pitjor escenari des d'un punt de vista de justícia global (els països menys emissors son els que patiran més els impactes)."
    },
    "3": {
      scaffold: "Omple el quadre de resolució de l'enigma: el bocadillo de pernil emet 5× més CO₂ que el formatge perquè: Font 1 → ___. Font 2 → ___. Font 3 → ___. Font 4 → ___. Si volgués reduir la petjada sense canviar el tipus d'esmorzar, quina mesura seria la més efectiva?",
      challenge: "Investiga la 'dieta planetària' recomanada per la comissió EAT-Lancet (2019): quanta proteïna animal, llegums, cereals i fruites i verdures caldria consumir diàriament per a una dieta sana i amb emissions dins dels límits planetaris? Compara-la amb la dieta mediterrània actual. Quins canvis caldrien? Per quina raó la comissió conclou que no cal ser vegà per a una dieta sostenible?"
    }
  },

  ideesPrevies: {
    startPoint: "Avui és l'última sessió de SA6. Presentem les propostes d'acció, avaluem les dels companys i resolem l'enigma del bocadillo de pernil.",
    prompts: [
      {
        kind: "write",
        text: "Creus que les accions individuals (com canviar el teu esmorzar o reciclar) poden tenir un impacte real en el canvi climàtic? Per quina raó sí o per quina raó no? Quin és l'argument que t'ha semblat més convincent al llarg de la SA?",
        starter: "Crec que les accions individuals... perquè al llarg de la SA he après que..."
      },
      {
        kind: "write",
        text: "Si la nostra escola pogués implementar NOMÉS UNA mesura per reduir la seva petjada de carboni, quina triaries? Per quina raó aquesta i no una altra?",
        starter: "La mesura que triaria per a l'escola seria... perquè..."
      }
    ]
  },

  exploreInstructions: [
    "Per grups de 3-4: rebeu les propostes d'acció del grup assignat (cada grup avalua les d'un altre grup diferent)",
    "Tasca 1 (15 min): llegiu les propostes rebudes. Per a cada proposta, ompliu la rúbrica d'avaluació d'iguals (evidència d'emissions / viabilitat / impacte estimat / recursos necessaris). Puntua de 1 a 4 cada dimensió",
    "Tasca 2 (5 min): seleccioneu la proposta que puntueu més alta del vostre sobre. Prepareu 2 arguments per defensar-la davant del grup gran",
    "Tasca 3 (5 min): posada en comú. Cada grup presenta la proposta guanyadora. El docent moddera el debat i sistematitza les accions per categories (menú / energia / mobilitat / residus)",
    "Tancament: el docent presenta la resolució completa de l'enigma del bocadillo de pernil"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Sobre amb les propostes d'acció del grup assignat", "Rúbrica d'avaluació d'iguals (per avaluador)", "Projector: taula de propostes seleccionades per categoria"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Transició energètica: del ==fòssil== a les ==renovables==",
      text: "La ==transició energètica|g== és el procés de substitució progressiva de les fonts d'energia fòssils per renovables. No és un canvi instantani: els sistemes energètics son enormement complexos i els canvis requereixen dècades. Els tres pilars de la transició son: ==Descarbonitzar l'electricitat|g== (substituir centrals de carbó i gas per solar i eòlica). ==Electrificar l'ús final|g== (cotxes elèctrics, calderes de bomba de calor, trens). ==Millorar l'eficiència energètica|g== (aïllament d'edificis, electrodomèstics A+++). A Espanya: l'objectiu és 74% d'electricitat renovable per al 2030 i neutralitat de carboni per al 2050. Catalunya: Llei de Canvi Climàtic de 2017, objectiu de reducció del 40% d'emissions per al 2030 vs 1990. El principal obstacle no és la tecnologia (les renovables ja son la font d'electricitat més barata) sinó la velocitat del desplegament.",
      type: "concept",
      video: "/animacions/sa6-s4-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Acords internacionals: ==Kyoto== (1997) i ==París== (2015)",
      text: "El ==Protocol de Kyoto== (1997): primer acord vinculant de reducció d'emissions per als països industrialitzats. Objectiu: reduir el 5% de les emissions respecte al 1990 en el període 2008-2012. Limitació: no incloïa els països emergents (Xina, Índia) ni els EUA (que no el va ratificar). L'==Acord de París== (2015): 196 països signants. Objectiu: limitar l'escalfament a +1,5 °C (ideal) o màxim +2 °C respecte al nivell preindustrial. Per quina raó +1,5 °C i no +2 °C? Per damunt d'1,5 °C, científics del IPCC preveuen riscos molt majors de fenòmens extrems, pèrdua d'arrecifes de coral i punts de no retorn. Situació actual: els compromisos actuals dels països porten a +2,5 °C. Per tant, cal escalar molt més ràpidament les accions.",
      type: "concept",
      video: "/animacions/sa6-s4-t2.mp4"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "==Resolució== de l'enigma: el cicle de vida complet del bocadillo de pernil",
      text: "Ara pots resoldre l'enigma de SA6. El bocadillo de pernil ibèric (≈80g) emet ≈500 gCO₂eq vs ≈100 gCO₂eq del formatge fresc. Les ==quatre fonts d'emissió|r== que hem descobert al llarg de la SA: 1. ==CH₄ entèric|r== (S1): la fermentació digestiva del porc genera metà (potencial 28× el CO₂). 2. ==Producció del pinso|r== (S1): 1 kg de porc requereix 3-4 kg de cereals → adobs N₂O + maquinària dièsel. 3. ==Energia de la cadena|o== (S2): calefacció de granges, escorxadors i refrigeració del transport, majoritàriament fòssil. 4. ==Greenwashing de l'etiquetatge|o== (S3): les afirmacions 'natural' o 'sostenible' del sector carni rarament estan avalades per auditories independents d'emissions. Per contra, el formatge fresc té una cadena més curta, menys fases energètiques i la vaca produeix llet amb menor emissió per unitat de proteïna que carn. ==Conclusió|g==: les decisions alimentàries son de les accions individuals amb major impacte en la petjada de carboni personal.",
      type: "resolution",
      badge: "✅ Resolució — Enigma 1",
      video: "/animacions/sa6-s4-t3.mp4"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Progrés de la transició energètica a Espanya (2010-2023)", src: "/images/sa6-g7-transicio-energetica.svg", note: "Gràfic de línies: % de renovables en la generació elèctrica espanyola per any. Anotació de fites clau: cierre de centrals de carbó, rècords d'energia solar i eòlica. Font: Red Eléctrica Española 2023." },
    { id: "G2", apartat: "3", title: "Cicle de vida complet del bocadillo de pernil (resolució enigma)", src: "/images/sa6-g8-cicle-pernil.svg", note: "Diagrama de flux: pinso (camps+adobs+maquinària) → granja porcina (CH₄ entèric + purins) → escorxador (energia) → curat (sal+temps+energia) → transport refrigerat → supermercat → bocadillo. GCO₂eq anotats en cada fase. Comparació amb el formatge fresc en paral·lel." }
  ],

  fitxaUrl: "/fitxes/sa6-s4-fitxa.pdf", teoriaPdfUrl: null,

  productInstructions: {
    title: "Proposta d'acció escolar per reduir la petjada de carboni de l'escola",
    description: "Dissenya una mesura concreta i viable per reduir les emissions de GEH de la nostra escola. Ha de ser real, implementable i avaluada per iguals.",
    steps: [
      "1. Tria una categoria: menú del menjador / consum elèctric / mobilitat (transport d'alumnat i professorat) / gestió de residus.",
      "2. Descriu la mesura amb precisió: Què es faria? Qui ho implementaria? Quan? Quins recursos econòmics i humans cal?",
      "3. Estima la reducció d'emissions: busca dades de referència (kg CO₂eq estalviats per unitat d'acció). Calcula la reducció anual estimada en kg CO₂eq.",
      "4. Identifica els obstacles: qui podria oposar-s'hi? Per quina raó? Proposa com superar-los.",
      "5. Connecta amb els acords climàtics: per quina raó aquesta mesura és coherent amb els Acords de París?"
    ],
    format: "Document escrit (1 pàgina) + presentació oral de 3 minuts al 'comitè d'iguals'. Treball individual o per parelles.",
    rubrica: "OA3 (petjada i consum responsable) + OA4 (evidència i pensament crític) + CE2 (argumentació basada en dades) + CE5 (acció ambiental concreta)"
  },

  fitxaGuide: {
    fitxaName: "Fitxa S4 — Podem canviar alguna cosa?",
    steps: [
      { apartat: "0", title: "Idees prèvies + presentació proposta", time: "10 min", phase: "engage", instruction: "Apartat 0: reflexió sobre l'impacte individual vs col·lectiu. Presenta la teva proposta d'acció (1 min) al grup petit.", hints: [] },
      { apartat: "1", title: "Avaluació de propostes per iguals", time: "25 min", phase: "explore", instruction: "Apartat 1: avalua les propostes del grup assignat amb la rúbrica. Puntua cada dimensió (1-4) i justifica la nota. Selecciona la proposta guanyadora del sobre.", hints: [
        "Avaluació justa: puntua segons la rúbrica, no segons si t'agrada la mesura. Una proposta de 'plantar arbres' cal avaluar-la en evidència (quant CO₂ absorbeix realment?) i viabilitat (qui i quan els planta?).",
        "La dimensió 'impacte estimat' és clau: una mesura molt fàcil però de poc impacte és menys valuosa que una ambiciosa amb impacte demostrat."
      ] },
      { apartat: "2", title: "Transició energètica i acords internacionals", time: "15 min", phase: "explica", instruction: "Apartat 2: omple el quadre de la transició energètica (G1). Compara Kyoto vs París (objectius, signants, limitacions). Respon: per quina raó els compromisos actuals son insuficients?", hints: [
        "Kyoto vs París: Kyoto era vinculant però no incloïa els grans emissors emergents. París inclou tothom però els compromisos son voluntaris (NDCs: contribucions determinades a nivell nacional).",
        "El gap climàtic: la diferència entre el que els països han promès i el que cal fer per mantenir-se per sota de +1,5 °C s'anomena 'implementation gap'. L'UNEP el calcula cada any."
      ] },
      { apartat: "3", title: "Resolució enigma + síntesi SA6", time: "10 min", phase: "explica", instruction: "Apartat 3: completa el diagrama del cicle de vida del bocadillo de pernil (G2). Respon l'enigma: quines 4 fonts fan que el pernil emeti 5× més que el formatge? Escriu 1 acció personal que podries canviar.", hints: [
        "Cicle de vida complet: pensa en TOTES les etapes, no tan sols la del porc. Producció de pinso → granja → escorxador → curat → transport → supermercat.",
        "Acció personal: no ha de ser 'fer-me vegà'. Pot ser 'substituir 2 dies de carn de vedella per llegums a la setmana' (reducció significant, canvi assequible)."
      ] }
    ]
  },

  exitTicketType: "formulari_google",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica la resolució completa de l'enigma del bocadillo de pernil. Quines 4 fonts d'emissió fan que emeti 5× més CO₂eq que un bocadillo de formatge? Associa cada font a la sessió on ho has après.", hint: "S1: CH₄ entèric del porc + producció del pinso (cereals + adobs N₂O). S2: energia fòssil de la cadena de producció (calefacció, refrigeració, transport). S3: greenwashing en l'etiquetatge del sector carni (afirmacions sense evidència verificable)." },
    { id: "q2", type: "open", text: "Descriu la teva proposta d'acció per a l'escola. Quina reducció d'emissions estimes? Quins obstacles hauries de superar? Per quina raó creus que és la mesura amb millor equilibri entre impacte i viabilitat?", hint: "Estructura la resposta: Mesura → Categoria → Impacte estimat (kg CO₂eq/any) → Obstacles → Argument de viabilitat." },
    { id: "q3", type: "multiple", text: "L'objectiu principal dels Acords de París (2015) és:", options: ["Reduir les emissions un 20% respecte al 1990 per al 2030", "Limitar l'escalfament global a no superar +1,5 °C (o màxim +2 °C) respecte al nivell preindustrial", "Eliminar completament els combustibles fòssils per al 2040", "Obligar tots els països a usar almenys un 50% d'energies renovables per al 2025"], correct: 1 },
    { id: "q4", type: "open", text: "Compara les accions individuals (canviar el que menja un alumne) i les accions sistèmiques (una política pública de canvi del menú escolar a tot Catalunya). Quina és més efectiva? Son excloents o complementàries? Argumenta-ho.", hint: "Acció individual: impacte limitat però pedagogia directa + agent de canvi a la família. Acció sistèmica: escala (afecta milions de persones alhora) però requereix consens polític. Son complementàries: l'acció individual crea consciència i genera pressió política per a les mesures sistèmiques." }
  ],

  homework: null,
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (transició energètica, Acords de París, resolució enigma)",
    "Completa el diagrama del cicle de vida del bocadillo de pernil (4 fonts d'emissió)",
    "Escriu la resolució de l'enigma: per quina raó el pernil emet 5× més que el formatge?",
    "Dissenya una proposta d'acció per a l'escola (mesura + impacte estimat + viabilitat)",
    "Omple la fitxa S4 apartats 0-3",
    "Lliura el formulari Google de l'exit tiquet"
  ],
  oaLinks: ["OA1", "OA2", "OA3", "OA4"], competencies: ["CE2", "CE5"]
}
