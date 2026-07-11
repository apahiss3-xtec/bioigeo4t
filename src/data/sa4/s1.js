export const sa4s1 = {
  id: "s1", saId: "sa4",
  title: "Qui som? El lloc de l'ésser humà",
  sessionNumber: 1, biome: "sa4", duration: "2h",
  engageImage: "/images/sa4-s1-arbre-vida.jpg",

  engageQuestion: "Som animals? Què ens fa humans: que pensem, que parlem, que tenim cultura... o també alguna cosa biològica? On col·locaries l'ésser humà en un arbre amb un ximpanzé, un peix i una planta?",
  engageContext: "Obertura de la bústia de preguntes anònimes (queda oberta tota la SA, alimenta S2-S4): tothom escriu com a mínim una pregunta sobre el cos, la reproducció o la sexualitat, o un 'no en tinc cap' (perquè ningú quedi marcat). Es presenta l'acord d'aula: es respecta, no es jutja, s'usa vocabulari científic, el que es diu a l'aula es queda a l'aula. Hook: una imatge de l'arbre de la vida amb l'humà com una branca minúscula entre milions — som una sola espècie del gènere Homo, totes les altres s'han extingit.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Justifico amb caràcters compartits (no amb 'impressions') la posició de l'humà al cladograma i proposo un caràcter nou que en faria canviar la forma.",
      "Explico per quina raó l'ADN és una prova més fiable que la morfologia per construir arbres evolutius, i per quina raó els arbres 'correctes' poden canviar amb noves proves.",
      "Distingeixo, en una pregunta real de la bústia, què n'és la part 'de biologia' (com funciona) i què n'és la part 'de decisió/valors' (què és millor) i ho argumento.",
      "Relaciono les funcions vitals compartides (nutrició, relació, reproducció) amb el que ja sé de la cèl·lula (SA1) i del cos humà (SA2) com a casos particulars d'aquest patró universal."
    ],
    B: [
      "Situo l'ésser humà com a organisme viu i única espècie vivent del gènere Homo, justificant-ho amb caràcters compartits i funcions vitals.",
      "Construeixo un cladograma senzill amb targetes ordenant espècies de més a menys properes a l'humà segons caràcters compartits.",
      "Reconec que les classificacions científiques son provisionals i poden canviar amb noves proves (per exemple l'ADN).",
      "Classifico una pregunta de la bústia com 'de biologia' o 'de decisió/valors'."
    ],
    C: [
      "Completo: l'ésser humà pertany al gènere ___ i l'única espècie vivent és ___ (les altres, com el neandertal, estan ___).",
      "Identifico almenys 2 caràcters que compartim amb el ximpanzé i 1 que ens diferencia, amb l'ajuda de les targetes.",
      "Completo: un arbre de la vida fet fa 100 anys (pot / no pot) ser exactament igual que el d'avui, perquè la ciència ___.",
      "Amb un exemple donat, digo si una pregunta és 'de biologia' o 'de decisió personal'."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Tens un arbre semiconstruït i els caràcters ja indicats a cada targeta. Ordena només les espècies que falten i justifica amb 1 caràcter per què van on van.",
      challenge: "Proposa un caràcter nou (que no estava a les targetes) que faria canviar la forma de l'arbre que ha construït el teu grup. Explica per quina raó."
    },
    "2": {
      scaffold: "Completa la taula: Funcions vitals compartides → Nutrició: ___ · Relació: ___ · Reproducció: ___. Gènere Homo → Espècie vivent: ___ · Una espècie extingida: ___.",
      challenge: "Per quina raó altres espècies del gènere Homo (neandertal, erectus) es van extingir mentre Homo sapiens ha sobreviscut? Busca almenys una hipòtesi científica i explica-la amb les teves paraules."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui comencem SA4. Abans de res, escriu el que penses ara — no es corregeix, serveix per veure com evoluciona el teu pensament durant la SA.",
    prompts: [
      {
        kind: "write",
        text: "Som animals? Què ens fa humans: que pensem, que parlem, que tenim cultura... o també alguna cosa biològica?",
        starter: "Crec que som... perquè..."
      },
      {
        kind: "draw",
        text: "On col·locaries l'ésser humà en un arbre amb un ximpanzé, un peix i una planta? Dibuixa'n un esbós ràpid.",
        starter: "El meu arbre té l'humà a..."
      }
    ]
  },

  exploreInstructions: [
    "En grups de 4: rebeu targetes d'espècies (humà, ximpanzé, goril·la, macaco, llangardaix, serp, granota, peix, insecte, planta) i targetes de caràcters (té cèl·lules, té teixits, té vèrtebres, té extremitats, mama, té pèl, placenta, polze oposable...)",
    "Pregunta investigadora prèvia: quin criteri faràs servir per ordenar de 'més semblant' a 'menys semblant' a l'humà?",
    "Tasca 1 (10 min): ordeneu les espècies de més a menys properes a l'humà segons els caràcters compartits",
    "Tasca 2 (10 min): construïu un arbre (les branques marquen on apareix un caràcter nou)",
    "Tasca 3 (5 min): situeu-hi l'humà i justifiqueu amb caràcters, no amb 'impressions'",
    "Posada en comú: tots els grups heu obtingut el mateix arbre? On difereix? Per quina raó?",
    "Moment epistèmic: quan els científics van poder llegir l'ADN, molts arbres 'correctes' fets per la forma del cos van canviar. Quin tipus de prova és més fiable, la morfologia o l'ADN? Pot canviar un arbre que avui sembla segur?"
  ],
  exploreDuration: "35 min",
  exploreMaterials: ["Targetes d'espècies (1 joc per grup de 4)", "Targetes de caràcters (1 joc per grup)", "Fitxa amb la pregunta investigadora i l'arbre en blanc"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Funcions vitals== compartides per tots els éssers vius",
      text: "Tot ésser viu fa ==nutrició==, ==relació== i ==reproducció==, i intercanvia matèria i energia amb el medi. Connexió SA1/SA2: la cèl·lula i el cos humà que ja heu vist son un cas particular d'aquest patró universal — des del bacteri més senzill fins a l'humà, totes les formes de vida comparteixen aquestes tres funcions.",
      type: "concept",
      video: "/animacions/sa4-s4-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Taxonomia i el gènere ==Homo==",
      text: "La classificació biològica té nivells (regne → ... → espècie). ==Homo sapiens|g== és l'==única espècie vivent|g== del gènere Homo. Altres espècies del mateix gènere ja ==extingides|r==: Homo neanderthalensis, Homo erectus. Caràcters distintius de la nostra espècie: ==bipedisme==, ==encèfal gran==, ==llenguatge==.",
      type: "concept",
      video: "/animacions/sa4-s4-t2.mp4"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "La ==ciència canvia==: classificacions provisionals",
      text: "Quan els científics van poder llegir l'==ADN|p==, molts arbres evolutius construïts únicament a partir de la forma del cos (morfologia) ==van canviar|o==. No és que estiguessin 'malament': és que la ciència ==millora amb noves proves|g==. Una classificació que avui sembla segura pot revisar-se demà amb una tècnica nova — això és el funcionament normal de la ciència, no una debilitat.",
      type: "epistemic",
      badge: "🔬 Moment epistèmic",
      video: "/animacions/sa4-s4-t3.mp4"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Funcions vitals compartides", src: "/images/sa4-g1-funcions-vitals.svg", note: "Esquema de nutrició / relació / reproducció amb exemples de diferents regnes (bacteri, planta, animal)." },
    { id: "G2", apartat: "2", title: "Línia temporal del gènere Homo", src: "/images/sa4-g2-genere-homo.svg", note: "Espècies del gènere Homo i el seu període de convivència; Homo sapiens com a única espècie vivent." }
  ],

  fitxaUrl: "/fitxes/sa4-s1-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S1 — Qui som?",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: escriu si creus que som animals i dibuixa on col·locaries l'humà en un arbre amb un ximpanzé, un peix i una planta. No es corregeix ara.", hints: [] },
      { apartat: "1", title: "Cladograma de targetes", time: "30 min", phase: "explore", instruction: "Apartat 1: amb el teu grup, ordena les espècies segons caràcters compartits i construeix l'arbre. Situa l'humà i justifica.", hints: [
        "Un caràcter compartit (per exemple 'té pèl') marca una branca comuna. Com més caràcters compartits, més a prop a l'arbre.",
        "No et fixis en l'aspecte general ('sembla un mico'): fixa't en els caràcters concrets de les targetes."
      ] },
      { apartat: "2", title: "Funcions vitals i gènere Homo", time: "15 min", phase: "explica", instruction: "Apartat 2: omple la taula de funcions vitals compartides i la del gènere Homo (espècie vivent + una espècie extingida).", hints: [
        "Les tres funcions vitals (nutrició, relació, reproducció) les comparteixen TOTS els éssers vius, des d'un bacteri fins a un humà.",
        "Homo sapiens és l'única espècie vivent del gènere; neandertal i erectus ja no existeixen."
      ] },
      { apartat: "3", title: "Classificar preguntes de la bústia", time: "10 min", phase: "explica", instruction: "Apartat 3: llegeix 2-3 preguntes anònimes (les que el docent ha triat) i classifica-les: són 'de biologia' (com funciona) o 'de decisió/valors' (què és millor)?", hints: [
        "La ciència descriu com funciona el cos; les decisions i els valors son de la persona i la societat.",
        "Si dubtes, pregunta't: això es pot comprovar amb un experiment o una dada? Si sí, és 'de biologia'."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Dona dos caràcters que compartim amb un ximpanzé i un que ens diferencia. Per quina raó l'humà és un animal?", hint: "Caràcters compartits: per exemple vèrtebres, mamífer, pèl. Caràcter diferencial: per exemple bipedisme, encèfal gran o llenguatge. Som animals perquè fem nutrició, relació i reproducció com qualsevol altre animal." },
    { id: "q2", type: "open", text: "Un arbre de la vida fet fa 100 anys, seria igual que el d'avui? Per quina raó?", hint: "No necessàriament: els arbres fets amb morfologia han canviat amb les proves d'ADN. La ciència és revisable, no és que abans estigués 'malament'." },
    { id: "q3", type: "open", text: "De les preguntes de la bústia, quina creus que la ciència pot respondre i quina és més aviat una decisió personal?", hint: "La ciència respon 'com funciona'; les decisions personals (què és millor per a mi) no les respon la ciència sola." }
  ],

  homework: {
    description: "Cap obligatòria. Pots afegir una pregunta més a la bústia de preguntes anònimes si te'n ve alguna al cap.",
    deadline: null
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (funcions vitals compartides, taxonomia, gènere Homo)",
    "Mira la imatge de l'arbre de la vida i el lloc de l'humà",
    "Fes el cladograma de targetes de la fitxa (o un esquema equivalent si no tens les targetes)",
    "Exit tiquet en paper a S2"
  ],
  oaLinks: ["OA1"], competencies: ["CE1"]
}
