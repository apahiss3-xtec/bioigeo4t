export const sa5s4 = {
  id: "s4", saId: "sa5",
  title: "La biodiversitat en perill",
  sessionNumber: 4, biome: "sa5", duration: "2h",
  engageImage: "/images/sa5-s4-biodiversitat.jpg",

  engageQuestion: "Cada dia s'extingeixen entre 3 i 150 espècies al planeta (depèn de la font que consultis). Per quina raó hauria de preocupar-nos? Quantes espècies cal perdre perquè un ecosistema col·lapsi? I el pati de la nostra escola — és un ecosistema saludable o en perill?",
  engageContext: "Posada en comú de les espècies invasores que ha investigat cada alumne (deures S3). Es construeix un mapa col·lectiu d'invasores a Catalunya. El docent obre la resolució de l'enigma: la cotorra és un cas d'espècie invasora, però no és l'únic problema que afronta la biodiversitat del nostre entorn.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Quantifico la biodiversitat d'un ecosistema usant l'índex de Shannon (diversitat específica) i argumento per quina raó un ecosistema amb alta biodiversitat és més resistent a les pertorbacions.",
      "Analitzo un cas real d'extinció en cascada (efecte dominó ecològic) i predico quines espècies serien les primeres en desaparèixer si una espècie clau s'extingís al nostre entorn.",
      "Avaluo críticamente les mesures de conservació d'una espècie amenaçada local (Rupicapra pyrenaica, Testudo hermanni, Acipenser sturio) identificant conflictes d'interessos i argumentant una proposta de gestió.",
      "Relaciono les 5 amenaces principals a la biodiversitat (HIPPO: Habitat loss, Invasive species, Pollution, Population, Overexploitation) amb el context local i global i proposo accions concretes a escala escolar."
    ],
    B: [
      "Defineixo biodiversitat (específica, genètica i d'ecosistemes) i argumento per quina raó la seva pèrdua és un problema per als humans, no tan sols per a la natura.",
      "Identifico les principals amenaces a la biodiversitat (destrucció d'hàbitat, espècies invasores, contaminació, sobreexplotació, canvi climàtic) i les relaciono amb casos locals.",
      "Explico el mecanisme d'invasió biològica amb el cas de la cotorra argentina i resolc l'enigma de la SA.",
      "Proposo 3 mesures concretes per millorar la biodiversitat del pati de l'escola i argumento per quina raó cada mesura és efectiva."
    ],
    C: [
      "Completo: biodiversitat = el nombre i la ___ d'espècies en un ecosistema. Quanta més biodiversitat, l'ecosistema és ___ (més/menys) resistent als canvis.",
      "Identifico almenys 3 amenaces a la biodiversitat de la llista: destrucció d'hàbitat / espècies invasores / contaminació / sobreexplotació / canvi climàtic.",
      "Explico per quina raó la cotorra argentina s'ha expandit tant: no té ___ naturals a Europa, ocupa el ___ del teuladí i és ___ per a la competència pels nius.",
      "Proposo 1 mesura concreta que podria fer la nostra escola per millorar la biodiversitat del pati."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "2": {
      scaffold: "Omple la taula d'amenaces: Destrucció d'hàbitat → exemple a Catalunya: ___. Espècie invasora → exemple: ___. Contaminació → exemple: ___. Per a cadascuna, escriu 1 acció humana concreta que l'hagi causat i 1 mesura que podria reduir-la.",
      challenge: "Investiga el concepte de 'servei ecosistèmic': els ecosistemes ens proveeixen d'aire net, polinització de conreus, regulació del clima, purificació de l'aigua, etc. Calcula o estima el valor econòmic anual dels serveis ecosistèmics globals (cerca l'estudi de Costanza et al. 1997 o el TEEB 2010). Per quina raó molts economistes diuen que la biodiversitat és el capital natural més important del planeta?"
    },
    "3": {
      scaffold: "Omple el resum de l'enigma: La cotorra és exòtica perquè ___ (d'on ve). Ha tingut tant d'èxit perquè: 1) No té ___ naturals a Europa. 2) Competeix per ___ amb el teuladí. 3) Fa nius ___ que el teuladí no pot ocupar ni defensar. 4) S'adapta a l'ambient ___. Per aturar-la caldria: ___.",
      challenge: "Proposa i justifica un pla de gestió de la cotorra argentina per al barri de l'escola. Ha de tenir en compte: l'eficàcia ecològica, l'acceptació social (molts ciutadans estimen les cotorres), l'ètica (mètodes letals vs no letals), i el cost econòmic. Consulta les mesures adoptades a Madrid, Barcelona i Sevilla i avalua quin model seguiries."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui és l'última sessió de SA5. Resolem l'enigma i construïm el producte final: la investigació de l'entorn. Compartiu les espècies invasores de la feina a casa.",
    prompts: [
      {
        kind: "write",
        text: "Creus que el pati de la nostra escola és un ecosistema saludable o en perill? Quines amenaces hi detectes? I quins senyals de biodiversitat?",
        starter: "Crec que el pati de l'escola és... perquè..."
      },
      {
        kind: "write",
        text: "Si poguesses fer UNA SOLA cosa per millorar la biodiversitat del teu barri, quina seria? Per quina raó has triat aquesta i no una altra?",
        starter: "La mesura que faria seria... perquè..."
      }
    ]
  },

  exploreInstructions: [
    "Per grups de 3-4: rebeu un sobre amb 4 casos de pertorbació d'ecosistemes catalans reals (cada grup té casos diferents)",
    "Casos possibles: A) Incendi forestal a la garriga mediterrània. B) Dessecació d'una zona humida al delta del Llobregat. C) Introducció del cranc americà al riu Ter. D) Contaminació lumínica al litoral Costa Daurada",
    "Tasca 1 (15 min): per a cada cas, identifiqueu l'amenaça principal, les espècies més afectades, l'impacte en la xarxa tròfica i 2 mesures de conservació possibles",
    "Tasca 2 (10 min): cada grup presenta el seu cas als altres (2 min per cas). El docent sistematitza les 5 amenaces principals a la biodiversitat",
    "Moment epistèmic: el docent tanca l'enigma de la cotorra argentina — tots els factors explicats al llarg de la SA conflueixen aquí"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Sobre amb 4 casos per grup (impressió prèvia + fotos)", "Fitxa d'anàlisi de casos (per grup)", "Projector: mapa d'espècies invasores a Catalunya (Generalitat)"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa5-s4-t1.mp4",
      heading: "==Biodiversitat==: per quina raó és fonamental",
      text: "La ==biodiversitat== és el nombre i la varietat d'espècies (diversitat ==específica|g==), de gens (diversitat ==genètica|o==) i d'ecosistemes (diversitat d'==ecosistemes|b==) en una zona. Un ecosistema amb alta biodiversitat és ==més resilient|g==: si una espècie desapareix, n'hi ha d'altres que poden ocupar parcialment la seva funció. Un ecosistema amb baixa biodiversitat és ==fràgil|r==: la desaparició d'una espècie clau pot col·lapsar-lo. A més, els ecosistemes ens ofereixen ==serveis ecosistèmics|g== imprescindibles: air net, polinització dels conreus, regulació del clima, purificació de l'aigua, medicines, aliments. La pèrdua de biodiversitat ens perjudica directament.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa5-s4-t2.mp4",
      heading: "Les 5 grans amenaces: ==HIPPO==",
      text: "Les 5 principals amenaces a la biodiversitat global s'acostumen a resumir com ==HIPPO|r==: ==H==àbitat loss (pèrdua i fragmentació d'hàbitat — la causa №1): tala de boscos, urbanització, agricultura intensiva. ==I==nvasive species (espècies invasores): competència, depredació sobre espècies autòctones. ==P==ollution (contaminació: aire, aigua, sòl, lumínica). ==P==opulation (sobreexplotació: caça, pesca, recol·lecció excessiva). ==O==verexploitation / canvi climàtic (l'última amenaça emergent però cada vegada la més gran). A Catalunya: destrucció de zones humides, incendis i espècies invasores son les principals.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      video: "/animacions/sa5-s4-t3.mp4",
      heading: "==Espècies invasores==: mecanisme de la invasió",
      text: "Una ==espècie invasora|r== és aquella introduïda fora del seu rang geogràfic natural (per acció humana, accidental o intencionada) que s'expandeix i causa impactes negatius en els ecosistemes, l'economia o la salut humana. Mecanisme de l'èxit invasor: ==absència de depredadors|r== naturals al nou hàbitat, ==alta plasticitat ecològica|o== (s'adapten a moltes condicions), ==taxa de reproducció elevada|o==, ==competència agressiva|r== per recursos. Exemples a Catalunya: cotorra argentina (Myiopsitta monachus), cranc americà de riu (Procambarus clarkii), silur (Silurus glanis), tortuga de Florida (Trachemys scripta), ailant (Ailanthus altissima).",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa5-s4-t4.mp4",
      heading: "==Resolució== de l'enigma: la cotorra argentina",
      text: "Ara pots resoldre l'enigma de SA5. La cotorra argentina (==Myiopsitta monachus|o==) ha desplaçat els teuladins del pati de l'escola per ==quatre raons interconnectades== que hem après al llarg de la SA: 1. ==Nínxol idèntic|r== (S2): cotorra i teuladí son consumidors de 1r ordre que mengen les mateixes llavors → competència interespecífica. 2. ==Principi d'exclusió competitiva|r== (S3): en el mateix nínxol, guanya qui és més competitiu. 3. ==Avantatges de la cotorra|r== (S3): nius col·lectius grans i defensables, comportament agressiu, sense depredadors naturals a Europa. 4. ==Absència de control biològic|r== (S4): és una espècie invasora sense enemics naturals que regulin la seva població. Solució: control actiu de poblacions + foment d'espècies autòctones (hàbitat favorable per als teuladins).",
      type: "resolution",
      badge: "✅ Resolució — Enigma 1"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Les 5 amenaces a la biodiversitat (HIPPO)", src: "/images/sa5-g6-hippo.svg", note: "Infografia de les 5 amenaces amb exemple local per a cada una i indicador de severitat relativa a Catalunya." },
    { id: "G2", apartat: "3", title: "Mapa d'espècies invasores a Catalunya", src: "/images/sa5-g7-invasores-cat.svg", note: "Mapa esquemàtic amb les 6 espècies invasores més impactants a Catalunya: distribució, any d'introducció i hàbitat afectat." }
  ],

  fitxaUrl: "/fitxes/sa5-s4-fitxa.pdf", teoriaPdfUrl: null,

  productInstructions: {
    title: "Investigació de l'entorn: la xarxa de vida del nostre pati",
    description: "Construeix el mapa de la xarxa alimentària de l'ecosistema del pati de l'escola (o un entorn proper que triïs). Identifica espècies, amenaces i proposa millores.",
    steps: [
      "1. Identifica almenys 8 espècies presents al teu ecosistema (productors + consumidors + descomponedors). Usa les fotos de S1 i iNaturalist.",
      "2. Construeix la xarxa tròfica amb totes les espècies identificades. Indica el nivell tròfic de cada una.",
      "3. Identifica almenys 1 amenaça real per a la biodiversitat d'aquest ecosistema (espècie invasora, contaminació, pèrdua d'hàbitat, etc.).",
      "4. Analitza l'impacte de l'amenaça: quines espècies es veuen afectades? Com canvia la xarxa tròfica?",
      "5. Proposa 2 mesures concretes de millora que es podrien implementar a l'escola o al barri. Justifica per quina raó serien eficaces."
    ],
    format: "Mapa en cartolina o digital (Canva, Google Slides) + descripció escrita (1 pàgina). Treball en grups de 3.",
    rubrica: "OA1 (identificació espècies) + OA2 (xarxa tròfica correcta) + OA3 (relacions i cicles) + OA4 (amenaces i mesures) + CE5 (argumentació ambiental) + CE6 (contextualització local)"
  },

  fitxaGuide: {
    fitxaName: "Fitxa S4 — La biodiversitat en perill",
    steps: [
      { apartat: "0", title: "Idees prèvies + posada en comú espècies invasores", time: "10 min", phase: "engage", instruction: "Apartat 0: reflexió sobre la salut del pati. Presenta l'espècie invasora que has investigat: nom, origen, impacte.", hints: [] },
      { apartat: "1", title: "Anàlisi de casos de pertorbació", time: "25 min", phase: "explore", instruction: "Apartat 1: analitza els 4 casos del sobre (amenaça / espècies afectades / impacte tròfic / mesures). Presenta el teu cas al grup.", hints: [
        "Per a cada cas, pensa en efectes en cascada: si l'amenaça afecta els productors, quins consumidors queden sense aliment? I els seus depredadors?",
        "Mesures: distingueix entre mesures de prevenció (evitar que s'estengui) i de restauració (recuperar el que s'ha perdut). Tots dos tipus son importants."
      ] },
      { apartat: "2", title: "Biodiversitat i amenaces", time: "15 min", phase: "explica", instruction: "Apartat 2: omple la taula HIPPO (amenaça / exemple local / mesura). Explica per quina raó la biodiversitat és un servei ecosistèmic i no tan sols una qüestió ètica.", hints: [
        "Servei ecosistèmic: tots els beneficis que els éssers humans obtenim dels ecosistemes (aliment, aire net, regulació climàtica, medicaments, turisme de natura...). La biodiversitat és la base d'aquests serveis.",
        "HIPPO: Hàbitat / Invasores / Pol·lució / Sobreexplotació. Ordre d'importància global: la destrucció d'hàbitat és la causa №1."
      ] },
      { apartat: "3", title: "Resolució enigma + producte final", time: "10 min", phase: "explica", instruction: "Apartat 3: completa la resolució de l'enigma de la cotorra (4 factors). Comença la planificació del producte final (la xarxa tròfica del pati).", hints: [
        "Resolució enigma: pensa en els 4 factors que hem anat descobrint sessions 1-4. Cadascun és una peça del trencaclosques.",
        "Producte: comença per llistar les espècies que ja has observat al pati (S1 + deures). Quines relacions tròfiques pots establir entre elles?"
      ] }
    ]
  },

  exitTicketType: "formulari_google",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica la resolució de l'enigma de la cotorra argentina. Quins 4 factors expliquen per quina raó la cotorra ha desplaçat els teuladins del pati? Relaciona cada factor amb la sessió on ho has après.", hint: "S1: nínxol ecològic. S2: competència tròfica (mateix nivell). S3: principi d'exclusió competitiva + avantatges de la cotorra (nius, agressivitat). S4: espècie invasora sense depredadors naturals." },
    { id: "q2", type: "open", text: "Proposa 2 mesures per millorar la biodiversitat del pati de l'escola. Per a cada mesura, explica: Què faries exactament? A qui beneficiaries? Per quina raó seria eficaç ecològicament?", hint: "Exemples possibles: instal·lar caixes nius per a teuladins, plantar arbustos autòctons florits, crear una zona de compostatge, reduir la il·luminació nocturna, instal·lar un hotel d'insectes." },
    { id: "q3", type: "multiple", text: "Quina és la principal causa de pèrdua de biodiversitat al planeta?", options: ["Les espècies invasores", "La contaminació dels rius", "La destrucció i fragmentació d'hàbitats", "La caça furtiva"], correct: 2 },
    { id: "q4", type: "open", text: "Compara la biodiversitat de dos ecosistemes: un camp de monocultiu de blat i un bosc mediterrani. Quin és més resilient a una plaga d'insectes? Per quina raó?", hint: "Resiliència = capacitat de recuperar-se d'una pertorbació. En el monocultiu, si el blat desapareix no hi ha alternatives. Al bosc mediterrani, altres plantes poden ocupar el buit i mantenir els cicles." }
  ],

  homework: null,
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (biodiversitat, amenaces HIPPO, espècies invasores, resolució enigma)",
    "Omple la taula HIPPO (5 amenaces + exemple local + mesura)",
    "Escriu la resolució de l'enigma de la cotorra (4 factors)",
    "Omple la fitxa S4 apartats 0-3",
    "Lliura el formulari Google de l'exit tiquet"
  ],
  oaLinks: ["OA3", "OA4"], competencies: ["CE4", "CE5", "CE6"]
}
