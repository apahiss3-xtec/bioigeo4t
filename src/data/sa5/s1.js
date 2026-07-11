export const sa5s1 = {
  id: "s1", saId: "sa5",
  title: "Qui viu aquí?",
  sessionNumber: 1, biome: "sa5", duration: "2h",
  engageImage: "/images/sa5-s1-ecosistema.jpg",

  engageQuestion: "Surt al pati de l'escola amb els ulls ben oberts. Quants éssers vius hi veus en 2 minuts? I quants factors que NO son éssers vius però que afecten la vida? El que estàs observant té un nom: ecosistema.",
  engageContext: "Presentació de l'enigma de la SA (la invasió de la cotorra). L'alumnat surt 5 minuts al pati a observar i anotar el que veu. Es crea un núvol de paraules col·lectiu a la pissarra: éssers vius vs factors físics. El docent presenta la pregunta de la SA: per quina raó les cotorres argentines s'instal·len tan bé als parcs urbans?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Distingeixo entre els conceptes d'ecosistema, comunitat, població i individu i aplico correctament la jerarquia en exemples reals complexos.",
      "Explico per quina raó la pèrdua d'un productor afecta tots els nivells tròfics superiors, amb un exemple de la xarxa tròfica del pati.",
      "Argumento per quina raó les espècies exòtiques tendeixen a ser tan exitoses en ecosistemes on els seus depredadors naturals estan absents.",
      "Relaciono la fotosíntesi (SA1) amb la funció dels productors en un ecosistema i calculo l'energia disponible per als consumidors de 1r ordre."
    ],
    B: [
      "Identifico els components biòtics (plantes, animals, fongs, bacteris) i abiòtics (llum, temperatura, humitat, sòl) d'un ecosistema.",
      "Distingeixo entre individu, població, comunitat i ecosistema amb exemples del pati de l'escola.",
      "Classifico els organismes en productors, consumidors de 1r/2n/3r ordre i descomponedors i explico la seva funció.",
      "Explico per quina raó la cotorra argentina és una espècie exòtica i quina amenaça suposa per a l'ecosistema local."
    ],
    C: [
      "Identifico almenys 3 éssers vius (biòtic) i 3 factors sense vida (abiòtic) en el pati de l'escola.",
      "Completo: un ==ecosistema== té dos components: el ___ (éssers vius) i el ___ (factors físics com llum, temperatura, sòl).",
      "Classific una planta com a ___ i un conill com a ___ perquè les plantes fabriquen el seu propi menjar i els animals el necessiten d'altri.",
      "Completo: la cotorra argentina és una espècie ___ perquè prové d'un lloc ___ i ha arribat aquí per acció ___."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "2": {
      scaffold: "Omple la taula: Escriu 3 éssers vius del pati (biòtic) i 3 factors sense vida (abiòtic). Per a cada ésser viu indica si és productor (fa la fotosíntesi) o consumidor (menja altres). Planta → ___ · Cucut → ___ · Bacteri del sòl → ___.",
      challenge: "Un ecosistema pot tenir milers d'espècies. Com es podria mesurar la 'salut' d'un ecosistema? Proposa almenys 2 indicadors que faries servir i argumenta per quina raó els escolls. (Pista: pensa en diversitat, abundància i estabilitat.)"
    },
    "3": {
      scaffold: "Uneix amb fletxes: individu ↔ 'tots els conills del parc' / població ↔ 'un conill concret' / comunitat ↔ 'tots els éssers vius del parc' / ecosistema ↔ 'tots els éssers vius + el sòl + l'aire + la llum del parc'.",
      challenge: "Investiga: per quina raó la cotorra argentina (Myiopsitta monachus) té tant d'èxit a les ciutats europees i no a la seva Amèrica del Sud natal? Quins factors abiòtics i biòtics en faciliten l'expansió? Conecta-ho amb el concepte de nínxol ecològic."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui comencem SA5. Teniu l'enigma de la cotorra a la paret. Anoteu el que sabeu ara sobre ecosistemes — al final de la SA comparareu. No hi ha resposta incorrecta.",
    prompts: [
      {
        kind: "draw",
        text: "Dibuixa un ecosistema que coneguis (bosc, mar, riu, jardí urbà). Indica quins éssers vius hi viuen i quins factors 'sense vida' hi ha (llum, temperatura, sòl, etc.).",
        starter: "En el meu ecosistema hi ha..."
      },
      {
        kind: "write",
        text: "Creus que tots els éssers vius del planeta estan connectats entre ells? Per quina raó? Posa un exemple de connexió que puguis observar al teu entorn immediat.",
        starter: "Crec que els éssers vius estan connectats perquè..."
      },
      {
        kind: "write",
        text: "Què creus que passaria si d'un bosc desapareguessin tots els arbres? Enumera almenys 3 conseqüències per als altres éssers vius.",
        starter: "Si desapareguessin tots els arbres, passaria que..."
      }
    ]
  },

  exploreInstructions: [
    "Per grups de 3: sortiu al pati amb la fitxa d'observació. Teniu 10 minuts per identificar el màxim d'éssers vius i factors abiòtics possibles",
    "Tasca 1 (10 min): ompliu la taula de la fitxa amb almenys 5 organismes i 5 factors abiòtics. Per a cada organisme indiqueu si és productor, consumidor o descomponedor",
    "Tasca 2 (10 min): construïu un mapa conceptual del pati com a ecosistema — quines relacions observeu entre els organismes que heu anotat?",
    "Tasca 3 (5 min): torneu a l'aula i discutiu: on encaixaria la cotorra argentina en la xarxa del pati? Aporta o competeix?",
    "Moment epistèmic: posada en comú. El docent sistematitza els components biòtics/abiòtics i presenta els nivells d'organització"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Fitxa d'observació del pati (per grup)", "Llapis de colors per al mapa conceptual", "Projector: fotos de cotorra argentina vs teuladí"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa5-s1-t1.mp4",
      heading: "L'==ecosistema==: la comunitat i el seu entorn",
      text: "Un ==ecosistema== és la unitat bàsica d'estudi de l'ecologia. Té dos components: el ==biòtic== (tots els éssers vius: plantes, animals, fongs, bacteris, protists) i l'==abiòtic== (els factors físics: llum, temperatura, humitat, tipus de sòl, disponibilitat d'aigua). Exemple: el pati de l'escola és un ecosistema urbà amb herba (biòtic), ciment i asfalte (abiòtic), ocells (biòtic) i temperatura + llum solar (abiòtic). Cap component existeix de forma independent — canviar un canvia tots els altres.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa5-s1-t2.mp4",
      heading: "Nivells d'organització: d'==individu== a ==ecosistema==",
      text: "Quatre nivells jeràrquics: ==Individu== → un organisme concret (una cotorra específica). ==Població== → tots els individus de la mateixa espècie en un lloc (totes les cotorres del parc de la Ciutadella). ==Comunitat== → totes les poblacions de totes les espècies que viuen en el mateix lloc (cotorres + teuladins + gats + roures + bacteris del sòl...). ==Ecosistema== → la comunitat + tots els factors abiòtics. L'estudi de l'ecologia es pot fer a qualsevol d'aquests nivells.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      video: "/animacions/sa5-s1-t3.mp4",
      heading: "Funció tròfica: ==productors==, ==consumidors== i ==descomponedors==",
      text: "Cada organisme té un paper funcional en l'ecosistema. ==Productors== (autòtrofs): fabriquen matèria orgànica a partir de la llum (fotosíntesi) o de reaccions químiques. Plantes, algues, cianobacteris. Connexió SA1: la cèl·lula vegetal usa els cloroplasts per fixar CO₂ en glucosa. ==Consumidors== (heteròtrofs): obtenen matèria i energia menjant altres organismes. De 1r ordre: mengen productors (herbívors). De 2n ordre: mengen consumidors de 1r. De 3r ordre: mengen consumidors de 2n. ==Descomponedors==: bacteris i fongs que desintegren la matèria orgànica morta i la retornen al medi com a nutrients minerals.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa5-s1-t4.mp4",
      heading: "Connexió ==enigma 1==: la cotorra entra a l'ecosistema",
      text: "La cotorra argentina (==Myiopsitta monachus|o==) és una espècie ==exòtica invasora|r==: procedeix d'Amèrica del Sud i ha estat introduïda per acció humana (animals de companyia alliberats). A les ciutats ibèriques no té depredadors naturals eficients, cosa que permet un creixement poblacional ràpid. La cotorra és consumidora de ==1r ordre|g== (menja llavors, fruits i brots — igual que el teuladí). Per quina raó, doncs, els nius dels teuladins desapareixen? Enigma parcialment obert — a S3 estudiarem les relacions de competència.",
      type: "epistemic",
      badge: "🧩 Enigma 1 — primera pista"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Esquema: components biòtics i abiòtics d'un ecosistema urbà", src: "/images/sa5-g1-ecosistema-urba.svg", note: "Diagrama de l'ecosistema del pati de l'escola: plantes, ocells, insectes (biòtic) i llum, temperatura, humitat, sòl (abiòtic) interconnectats amb fletxes de dependència." },
    { id: "G2", apartat: "3", title: "Piràmide dels nivells d'organització ecològica", src: "/images/sa5-g2-nivells-organitzacio.svg", note: "Piràmide amb 4 nivells: individu (base) → població → comunitat → ecosistema (cim). Exemple concret de cotorra a cada nivell." }
  ],

  fitxaUrl: "/fitxes/sa5-s1-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S1 — Qui viu aquí?",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: dibuixa un ecosistema que coneguis i anota el que saps sobre la connexió entre éssers vius. No es corregeix ara.", hints: [] },
      { apartat: "1", title: "Observació del pati", time: "25 min", phase: "explore", instruction: "Apartat 1: omple la taula d'observació (5 organismes + 5 factors abiòtics) i construeix el mapa conceptual del pati com a ecosistema.", hints: [
        "Pensa també en els organismes que no veus directament: bacteris del sòl, fongs als troncs, larves als pots d'herba.",
        "Els factors abiòtics inclouen la llum, la temperatura, el tipus de sòl, la humitat i fins i tot el soroll."
      ] },
      { apartat: "2", title: "Components biòtics i abiòtics", time: "20 min", phase: "explica", instruction: "Apartat 2: classifica els organismes en productor/consumidor/descomponedor. Completa el diagrama de l'ecosistema urbà (G1) amb les fletxes de dependència.", hints: [
        "Clau: els productors son tots els organismes que fabriquen el seu propi aliment (plantes, algues). La resta son consumidors o descomponedors.",
        "Recorda: els descomponedors (bacteris, fongs) son imprescindibles per tancar el cicle de la matèria. Sense ells, la matèria morta s'acumularia indefinidament."
      ] },
      { apartat: "3", title: "Nivells d'organització i enigma", time: "10 min", phase: "explica", instruction: "Apartat 3: completa la piràmide dels nivells d'organització amb exemples concrets de la cotorra. Respon: en quin nivell tròfic se situa la cotorra? Per quina raó és potencialment perillosa per als teuladins?", hints: [
        "La cotorra és un consumidor de 1r ordre (herbívor). El teuladí també. Quan dos organismes ocupen el mateix nínxol ecològic, competeixen pels mateixos recursos.",
        "Nínxol ecològic = 'ocupació' d'una espècie: el que menja, on viu, quan és activa, etc. Dues espècies no poden ocupar exactament el mateix nínxol indefinidament."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Defineix ecosistema i posa un exemple del teu entorn. Indica 2 components biòtics i 2 d'abiòtics del teu exemple.", hint: "Ecosistema = comunitat (éssers vius) + factors abiòtics (físics). Biòtic: plantes, animals, fongs, bacteris. Abiòtic: llum, temperatura, sòl, humitat." },
    { id: "q2", type: "open", text: "La cotorra argentina menja llavors i brots. Els teuladins també. Explica per quina raó la cotorra pot ser una amenaça per als teuladins i en quin nivell tròfic situaries les dues espècies.", hint: "Ambdues son consumidores de 1r ordre. Quan comparteixen el mateix nínxol, competeixen pels mateixos recursos (menjar, nius)." },
    { id: "q3", type: "multiple", text: "Quina afirmació descriu correctament un ecosistema?", options: ["Tots els éssers vius d'una zona geogràfica", "Tots els éssers vius d'una zona + els factors físics del seu entorn", "Tots els individus de la mateixa espècie en un lloc", "Els factors físics d'un ambient (llum, temperatura, sòl)"], correct: 1 }
  ],

  homework: {
    description: "Fotografia 1 espècie local (planta, insecte, ocell, fong) que trobis a casa, al parc o al carrer. Identifica'n el nom (pots usar iNaturalist o Google Lens). Anota si és productor, consumidor o descomponedor i quin és el seu probable rol en la xarxa tròfica local. Porta la foto i les notes a S2.",
    note: "Activitat de camp no delegable a IA: requereix observació directa i fotografia pròpia.",
    deadline: "2026-03-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (ecosistema, biòtic/abiòtic, nivells organització, productors/consumidors/descomponedors)",
    "Fes l'esquema dels components biòtics i abiòtics del pati de l'escola (G1)",
    "Omple la fitxa S1 apartats 0-3",
    "Exit tiquet en paper a S2"
  ],
  oaLinks: ["OA1"], competencies: ["CE4", "CE6"]
}
