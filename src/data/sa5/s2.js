export const sa5s2 = {
  id: "s2", saId: "sa5",
  title: "Qui menja qui?",
  sessionNumber: 2, biome: "sa5", duration: "2h",
  engageImage: "/images/sa5-s2-xarxa-trofica.jpg",

  engageQuestion: "Que menjaves ahir al migdia? Escriu-ho. Ara pensa: d'on ve cada ingredient? I el que menjava aquell ingredient? I l'anterior? Si continues prou enrere, sempre arribes al mateix punt. Quin?",
  engageContext: "Els alumnes comparteixen la fotografia/nota de l'espècie que van observar a casa (deures S1). Es construeix un mapa col·lectiu a la pissarra: quines espècies tenim? Quines relacions alimentàries podem establir? El docent planteja: totes les cadenes alimentàries acaben sempre en el mateix lloc — per quina raó?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Construeixo una xarxa tròfica complexa (mínim 10 espècies, 3 nivells) i predico l'efecte en cascada que tindria l'eliminació d'una espècie clau.",
      "Calculo l'energia disponible en cada nivell tròfic aplicant la regla del 10% i raono per quina raó les cadenes tròfiques rarament superen 4-5 eslabons.",
      "Explico el concepte de 'cascada tròfica' amb un exemple real (p. ex. reintroducció del llop a Yellowstone) i el relaciono amb l'impacte de les espècies invasores.",
      "Argumento per quina raó la piràmide de biomassa s'inverteix en alguns ecosistemes aquàtics (fitoplancton de vida curta vs. peixos grans de vida llarga)."
    ],
    B: [
      "Construeixo una cadena tròfica de 4 eslabons i la transformo en part d'una xarxa tròfica afegint-hi almenys 2 ramificacions.",
      "Identifico el nivell tròfic (1r, 2n, 3r ordre, descomponedor) de cadascuna de les espècies d'una xarxa tròfica donada.",
      "Explico per quina raó l'energia es perd en cada transferència tròfica i com ho representen les piràmides d'energia.",
      "Predico l'efecte d'eliminar una espècie d'una cadena tròfica: quines espècies augmentarien i quines disminuirien?"
    ],
    C: [
      "Construeixo una cadena tròfica senzilla de 3 eslabons: ___ (productor) → ___ (consumidor 1r) → ___ (consumidor 2n).",
      "Completo: en una cadena tròfica, l'energia va sempre de ___ a ___ i mai al revés. La font original de tota l'energia és ___.",
      "Completo la piràmide d'energia: si els productors capturen 1000 kcal, els consumidors de 1r ordre en tindran disponibles ___ kcal (regla del 10%).",
      "Identifico quin animal seria més afectat si desaparegués una planta concreta d'una cadena tròfica donada."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "2": {
      scaffold: "Construeix una cadena tròfica de 3 passos usant espècies del pati: ___ (fa la fotosíntesi) → ___ (menja la planta) → ___ (menja l'animal). Marca amb una fletxa la direcció del flux d'energia. La fletxa apunta cap a qui MEN JA o cap a qui és MENJAT?",
      challenge: "Investiga el cas de la reintroducció dels llops a Yellowstone (1995). Com va canviar l'ecosistema sencer per la tornada d'un depredador? El fenomen s'anomena 'cascada tròfica' (o efecte de dominó ecològic). Explica'l amb un esquema."
    },
    "3": {
      scaffold: "Omple la piràmide: Productors (herba): 10.000 kcal. → Conills (consumidors 1r): ___ kcal (10%). → Falcons (consumidors 2n): ___ kcal (10% del nivell anterior). Per quina raó al cim sempre hi ha pocs individus grans?",
      challenge: "Per quina raó algunes piràmides de biomassa en ecosistemes aquàtics estan 'invertides' (hi ha més biomassa de peixos que de fitoplancton)? Pensa en la taxa de reproducció del fitoplancton vs la longevitat dels peixos. Justifica-ho numèricament."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui construïm xarxes tròfiques. Compartiu les fotos de les espècies de la feina a casa i comença a pensar: de quin altre organisme depèn l'espècie que has fotografiat?",
    prompts: [
      {
        kind: "write",
        text: "Escriu una cadena alimentària de 3 passos que coneguis (p. ex. herba → conill → àguila). Ara afegeix-hi 2 ramificacions: qui més menja el conill? Qui més menja l'àguila? Veus com una cadena es converteix en una xarxa?",
        starter: "La meva cadena tròfica és... i es ramifica perquè..."
      },
      {
        kind: "write",
        text: "Si s'extingeixin tots els insectes pol·linitzadors (abelles, papallones) d'un ecosistema, quines espècies es veurien afectades? Ordena les conseqüències de més immediata a més tardana.",
        starter: "Si desapareguessin les abelles, primer passaria... després..."
      }
    ]
  },

  exploreInstructions: [
    "Per grups de 4: rebeu un sobre amb 12 targetes d'espècies del bosc mediterrani (alzina, conill, llebre, àguila, serp, ratolí, escarabat, bolet, carritx, guineu, eriçó, turó)",
    "Tasca 1 (15 min): connecteu les targetes amb fletxes en una cartolina per construir una xarxa tròfica. Identifiqueu el nivell tròfic de cada espècie",
    "Tasca 2 (5 min): assenyaleu quina espècie és la 'clau de volta' de la xarxa — la que, si desaparegués, tindria més efecte en cascada. Justifiqueu l'elecció",
    "Tasca 3 (5 min): afegiu la cotorra argentina a la vostra xarxa. On s'ubica? Quines espècies ja presents competeixen amb ella?",
    "Moment epistèmic: posada en comú. El docent presenta la piràmide d'energia i la regla del 10%"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Sobre amb 12 targetes d'espècies per grup", "Cartolina A3 + celo + llapis de colors", "Projector: piràmide d'energia"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa5-s2-t1.mp4",
      heading: "==Cadena tròfica==: el camí de l'energia",
      text: "Una ==cadena tròfica== representa qui menja qui en un ecosistema. Sempre comença en un ==productor|g== i la fletxa apunta cap a qui ES MENJA (l'energia circula en la direcció de la fletxa). Exemple: ==Herba|g== → ==Cargol|o== → ==Eriçó|b== → ==Mussol|p==. Cada organisme en la cadena s'anomena ==eslabon tròfic|g==. La ==xarxa tròfica== és la representació realista de totes les cadenes interconnectades d'un ecosistema — perquè quasi cap espècie menja una sola cosa.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa5-s2-t2.mp4",
      heading: "==Nivells tròfics==: qui és qui a la cadena",
      text: "==Productors|g== (1r nivell): organismes autòtrofs — fabriquen matèria orgànica. Plantes, algues, cianobacteris. ==Consumidors de 1r ordre|o== (2n nivell): herbívors — mengen productors. Conills, erugues, saltamartins. ==Consumidors de 2n ordre|b== (3r nivell): carnívers — mengen herbívors. Guineus, granotes, serps. ==Consumidors de 3r ordre|p== (4t nivell): superdepredadors. Àguiles, tiburons, llops. ==Descomponedors|r==: bacteris i fongs que desintegren la matèria orgànica morta i retornen minerals al sòl — tanquen el cicle.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      video: "/animacions/sa5-s2-t3.mp4",
      heading: "Flux d'energia: la ==regla del 10%==",
      text: "Quan un organisme menja un altre, no transfereix el 100% de l'energia que conté: una gran part es perd com a calor (respiració cel·lular, moviment, calor corporal). La ==regla del 10%==: aproximadament el 10% de l'energia d'un nivell tròfic passa al nivell superior. Si els productors capturen 10.000 kcal de llum solar, els herbívors en tindran ≈1.000 kcal, els carnívers ≈100 kcal, i els superdepredadors ≈10 kcal. Per quina raó hi ha tan pocs lleons per tants herbívors? Per quina raó les cadenes rarament superen 4-5 eslabons? Perquè l'energia s'esgota.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa5-s2-t4.mp4",
      heading: "==Piràmides== ecològiques",
      text: "Les ==piràmides ecològiques== representen gràficament els nivells tròfics. ==Piràmide de nombres==: nombre d'individus en cada nivell (molts productors, pocs superdepredadors). ==Piràmide de biomassa==: massa total de matèria viva per nivell. ==Piràmide d'energia==: flux d'energia per unitat de temps — sempre té forma de piràmide real (mai invertida), perquè l'energia es perd sempre en sentit ascendent. La piràmide d'energia és la representació més fidel de l'estructura tròfica d'un ecosistema.",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "3",
      video: "/animacions/sa5-s2-t5.mp4",
      heading: "Connexió ==enigma 1==: la cotorra ocupa el nínxol del teuladí",
      text: "La cotorra argentina s'ubica en el ==2n nivell tròfic|o== (consumidora de 1r ordre): menja principalment llavors, fruits, brots i ocasionalment ous d'altri. Els teuladins (Passer domesticus) ocupen ==exactament el mateix nínxol|r==: mengen llavors, insectes i restes urbanes. La ==competència interespecífica|r== s'activa quan dues espècies competeixen pels mateixos recursos limitats (menjar, nius). La cotorra, amb nius enormes de palles (que pot ocupar fins a 50 parelles) i un comportament molt agressiu, desplaça els teuladins. Però hi ha més: la cotorra també competeix pels nius. A S3 estudiarem les relacions de competència en profunditat.",
      type: "epistemic",
      badge: "🧩 Enigma 1 — pista 2"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Xarxa tròfica del bosc mediterrani", src: "/images/sa5-g2-xarxa-trofica.svg", note: "Xarxa tròfica amb 10 espècies representatives del bosc mediterrani ibèric. Fletxes de qui és menjat a qui menja. Nivells tròfics codificats per color." },
    { id: "G2", apartat: "3", title: "Piràmide d'energia: regla del 10%", src: "/images/sa5-g3-piramide-energia.svg", note: "Piràmide de 4 nivells amb valors numèrics en kcal/m²/any. Il·lustra la pèrdua de l'90% de l'energia en cada transferència tròfica." }
  ],

  fitxaUrl: "/fitxes/sa5-s2-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S2 — Qui menja qui?",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: escriu una cadena alimentària de 3 eslabons i reflexiona sobre les conseqüències de l'extinció dels insectes pol·linitzadors.", hints: [] },
      { apartat: "1", title: "Xarxa tròfica del bosc", time: "25 min", phase: "explore", instruction: "Apartat 1: construeix la xarxa tròfica amb les targetes. Identifica l'espècie 'clau de volta' i afegeix la cotorra argentina. On s'ubica? Amb qui competeix?", hints: [
        "Recorda: la fletxa de la cadena tròfica apunta cap a qui MENJA (qui rep l'energia). Herba → Conill vol dir que el conill menja l'herba.",
        "Per identificar l'espècie clau: pensa en quina espècie té més connexions a la xarxa. Si la treus, quantes altres espècies quedarien sense aliment o perdrien el seu depredador natural?"
      ] },
      { apartat: "2", title: "Cadenes, xarxes i nivells tròfics", time: "15 min", phase: "explica", instruction: "Apartat 2: omple la taula de nivells tròfics (productor / C1 / C2 / C3 / descomponedor) per a 6 espècies de la xarxa. Dibuixa la xarxa completa de la fitxa (G1) amb les fletxes.", hints: [
        "Dubte freqüent: un organisme pot ser consumidor de 1r ordre per a una espècie i de 2n per a una altra. Una guineu que menja fruita és C1; la mateixa guineu que menja un conill és C2.",
        "Els descomponedors (bacteris, bolets) no apareixen a les cadenes tròfiques habituals, però son essencials: descomponen la matèria morta de tots els nivells."
      ] },
      { apartat: "3", title: "Flux d'energia i piràmides", time: "15 min", phase: "explica", instruction: "Apartat 3: aplica la regla del 10% per calcular l'energia disponible en cada nivell de la piràmide (partint de 10.000 kcal als productors). Explica per quina raó la cotorra és una amenaça per als teuladins des del punt de vista de la competència tròfica.", hints: [
        "10.000 kcal (productors) × 0,10 = 1.000 kcal (herbívors) × 0,10 = 100 kcal (carnívers 1s) × 0,10 = 10 kcal (superdepredadors). Per quina raó hi ha tan pocs lleons?",
        "La cotorra i el teuladí son al mateix nivell tròfic i mengen el mateix. Quan els recursos son limitats, competiran fins que un desplaci l'altre."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Construeix una cadena tròfica de 4 eslabons per a l'ecosistema del pati de l'escola. Indica el nivell tròfic de cada organisme i la direcció del flux d'energia.", hint: "La fletxa de la cadena apunta cap a qui menja (rep l'energia). Nivells: Productor → C1 (herbívor) → C2 (carnívor) → C3 (superdepredador)." },
    { id: "q2", type: "open", text: "Si en un ecosistema els productors capturen 50.000 kcal/any, quanta energia estarà disponible per als consumidors de 2n ordre? Mostra el càlcul i explica per quina raó les cadenes tròfiques rarament superen 4-5 eslabons.", hint: "Regla del 10%: 50.000 → 5.000 (C1) → 500 (C2). Per quina raó paren aquí: a C3 ja quedarien 50 kcal; no és suficient per mantenir una població viable de grans depredadors." },
    { id: "q3", type: "multiple", text: "En una cadena tròfica, la fletxa indica:", options: ["El moviment físic dels animals", "La direcció del flux d'energia (de qui és menjat a qui menja)", "La relació de parentiu entre espècies", "La mida dels organismes de gran a petit"], correct: 1 }
  ],

  homework: {
    description: "Observa l'etiqueta d'un aliment que mengis normalment. Construeix la cadena tròfica completa dels seus ingredients principals fins als productors (plantes o algues). Quants nivells tròfics hi ha? Porta la cadena a S3.",
    note: "Requereix lectura d'etiquetes reals i raonament propi sobre els ingredients. Difícil de delegar completament a IA.",
    deadline: "2026-03-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (cadena tròfica, nivells tròfics, regla del 10%, piràmides ecològiques)",
    "Construeix una cadena tròfica de 4 eslabons i calcula l'energia disponible a cada nivell (regla del 10%)",
    "Omple la fitxa S2 apartats 0-3",
    "Exit tiquet en paper a S3"
  ],
  oaLinks: ["OA2"], competencies: ["CE4", "CE5"]
}
