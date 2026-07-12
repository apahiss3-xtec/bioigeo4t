export const sa3s3 = {
  id: "s3", saId: "sa3",
  title: "Vacunes: ciència o mite?",
  sessionNumber: 3, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s3-vacunes.jpg",

  engageQuestion: "Un article que has vist a les xarxes diu que les vacunes causen autisme. Has preguntat a casa i alguns adults en dubten. Avui analitzareu l'article original i veureu per quina raó la revista el va retirar. Però primer: com saps si una informació científica és fiable?",
  engageContext: "Revisió formulari comprensió prèvia (S2 deures). Connexió amb l'enigma 2 de la paret. El professor projecta el titular de l'article Wakefield de 1998 i un estudi de 2019 (1.2 M de nens). L'alumnat ha d'avaluar-los amb criteri — però primer cal aprendre els criteris.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Explico el mecanisme d'acció de les vacunes (antigen atenuat → resposta adaptativa → memòria) i calculo el llindar d'immunitat de grup per a una malaltia donada.",
      "Analitzo l'article de Wakefield aplicant els 4 criteris de qualitat i identifico exactament quin criteri va ser violat i com.",
      "Dissenyo una campanya de comunicació que distingeixi pseudociència de ciència real, citant evidències concretes i anticipant contrarguments.",
      "Evaluo per quina raó l'immunitat de grup és un fenomen de solidaritat col·lectiva, no individual (CE5)."
    ],
    B: [
      "Explico com funciona una vacuna (antigen → resposta adaptativa → memòria) i el concepte d'immunitat de grup.",
      "Aplico els 4 criteris de qualitat d'una font (revisió per parells, mida de la mostra, conflicte d'interès, replicació) a dos articles contraposats.",
      "Explico per quina raó l'article de Wakefield va ser retirat i per quina raó no es pot afirmar que les vacunes causen autisme.",
      "Relaciono l'immunitat de grup amb la protecció de persones que no es poden vacunar (bebès, immunodeprimits)."
    ],
    C: [
      "Completo: la vacuna conté l'antigen _____ (feble/inactivat) → el cos fabrica _____ → i guarda _____ immunològica → si el patogen real arriba, la resposta és _____.",
      "Identifico al menys 2 problemes de l'article Wakefield (mida de la mostra, conflicte d'interès).",
      "Sé dir que si el 95% de la classe es vacuna, els que no es poden vacunar (bebès, malalts) estan protegits perquè el virus _____ (no pot circular).",
      "Reconec que una afirmació de xarxes socials NO és evidència científica i sé dir 1 criteri per distingir-les."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "1": {
      scaffold: "Per a cada font (article Wakefield / estudi 2019), omple la graella: ¿Publicada en revista científica revisada per parells? (sí/no) · ¿Mida de la mostra? (nombre de participants) · ¿Hi ha conflicte d'interès del autor? (sí/no/desconegut) · ¿Ha estat replicat per altres grups? (sí/no). Puntua cada font de 0 a 4.",
      challenge: "L'article de Wakefield va ser retirat el 2010. Però molts pares no van llegir la retractació. Quins factors psicològics expliquen per quina raó la gent recorda millor la notícia original que la correcció posterior? Proposa una estratègia de comunicació que tingui en compte aquest biaix."
    },
    "2": {
      scaffold: "Completa el diagrama de la vacuna: (1) S'injecta l'antigen _____ del patogen. (2) Els limfòcits ___ fabriquen ___. (3) Queden _____ de memòria. (4) Si arriba el patogen real → resposta secundària → _____ en hores. Relació amb SA3·S2: quin tipus d'immunitat activa la vacuna?",
      challenge: "Calcula: si el R₀ del xarampió és 15, quin percentatge de la població cal vacunar per mantenir R₀ efectiu < 1? Fórmula: llindar = 1 - 1/R₀. Per quina raó si el xarampió és quasi eradicat en un país, UNA família sense vacunar pot provocar un brot local?"
    },
    "3": {
      scaffold: "Llegeix els 4 criteris de qualitat. Ara aplica'ls a una afirmació que coneixes de les xarxes ('el vitamina C cura el refredat'). Criteris: revisió per parells (sí/no), mida de la mostra (gran/petita/no diu), conflicte d'interès (el qui ho diu ven suplements?), replicació (altri ho ha comprovat?). Quin és el resultat?",
      challenge: "Cerca un exemple real de pseudociència en salut que no hàgem vist a classe. Aplica-hi els 4 criteris i elabora una fitxa de 'desmuntatge': l'afirmació, els criteris que falla, i l'evidència real que la contradiu. Font: PubMed o Cochrane Library."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui analitzareu fonts científiques reals. Primer, la posada en comú del formulari de comprensió prèvia. Després treballareu per grups amb dos documents contraposats. Escriviu el que penseu ara — al final de la sessió compareu.",
    prompts: [
      {
        kind: "write",
        text: "Has vist alguna vegada una notícia sobre vacunes o medicaments que et va semblar sospitosa? Per quina raó et va semblar sospitosa? Quines pistes et van fer dubtar?",
        starter: "Una vegada vaig veure una notícia que deia... i em va semblar sospitosa perquè..."
      },
      {
        kind: "write",
        text: "Si dos articles diuen coses oposades sobre la mateixa vacuna, com decideixes a quin creure? Quins criteris fas servir (o faràs servir a partir d'avui)?",
        starter: "Per decidir a quin creure, jo miraria..."
      }
    ]
  },

  exploreInstructions: [
    "Cada grup rep dues fitxes: Fitxa A (resum de l'article Wakefield 1998, n=12) i Fitxa B (resum de l'estudi danes 2019, n=1.200.000)",
    "Per grups de 3: apliqueu la graella dels 4 criteris a les dues fitxes (10 min)",
    "Posada en comú: cada grup comparteix la puntuació i el criteri decisiu (5 min)",
    "El professor revela per quina raó The Lancet va retirar l'article: conflicte d'interès econòmic + dades manipulades + n massa petit",
    "Moment epistèmic: 'Un sol article, per gran que sigui la revista, mai és suficient. La ciència funciona per replicació.'"
  ],
  exploreDuration: "30 min",
  exploreMaterials: ["Fitxa A: resum Wakefield (imprès)", "Fitxa B: resum estudi danès (imprès)", "Graella dels 4 criteris (fitxa S3)"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa3-s3-t1.mp4",
      heading: "Com funciona una ==vacuna==: l'entrenament del SI",
      text: "La vacuna conté l'==antigen|o== del patogen en forma ==atenuada, inactivada o com a fragment|o== (no causa la malaltia). El SI respon: limfòcits B → ==anticossos|g== → cèl·lules de ==memòria|g==. Quan arriba el patogen ==real|r==, la resposta secundària és ==immediata|g== → malaltia avortada o lleu. Connexió S2: la vacuna activa la ==immunitat adaptativa|g== sense passar la malaltia.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa3-s3-t2.mp4",
      heading: "==Immunitat de grup==: per quina raó TOTS hem de vacunar-nos",
      text: "Si prou persones estan immunitzades, el virus ==no pot circular|g== i protegeix fins i tot els que NO es poden vacunar (bebès <6 mesos, immunodeprimits, persones al·lèrgiques). ==Llindar d'immunitat de grup== = 1 − 1/R₀. Per al ==xarampió (R₀≈15)|r== cal vacunar el ==93%|g== de la població. Per sota del llindar: risc de brots.",
      type: "concept",
      badge: "🤝 CE5 — Salut col·lectiva"
    },
    {
      id: "t3",
      apartat: "3",
      video: "/animacions/sa3-s3-t3.mp4",
      heading: "El cas ==Wakefield== (1998): per quina raó l'article va ser retirat",
      text: "Andrew Wakefield va publicar a ==The Lancet|o== un estudi amb ==12 nens|r== que suggeria vincle entre la vacuna MMR i l'autisme. Problemes: ==mostra irrisòria (n=12)|r==, ==conflicte d'interès econòmic|r== (cobrava d'advocats anti-vacunes), ==dades manipulades|r==. El 2010, The Lancet ==va retirar l'article|r==. Wakefield va perdre la ==llicència mèdica|r==. Cap estudi posterior (milions de nens) ha trobat cap vincle.",
      type: "epistemic",
      badge: "⚠️ Enigma 2 — clau"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa3-s3-t4.mp4",
      heading: "Com avaluar una font: 4 preguntes clau (==CE2==)",
      text: "1. ==Qui ho publica?|o== (revista revisada per parells vs blog d'opinió). 2. ==Quina mostra?|o== (n=12 vs n=1.200.000 → la mida importa). 3. ==Hi ha conflicte d'interès?|r== (l'autor en treu profit econòmic?). 4. ==Ha estat replicat?|g== (un sol estudi no és suficient, cal que d'altres grups independents arribin al mateix resultat). ==Un de sol mai no és suficient|r==.",
      type: "concept",
      badge: "🔬 CE2 — Avaluació de fonts"
    },
    {
      id: "t5",
      apartat: "3",
      video: "/animacions/sa3-s3-t5.mp4",
      heading: "Connexió ==enigma 2==: resolució",
      text: "L'article de Wakefield era ==pseudociència amb frau intencional|r==: mostra massa petita, conflicte d'interès, dades manipulades. La ciència real: ==estudis de milions de nens|g== (Danès 2019, n=650.000; britànic, n=498.000; etc.) == no han trobat cap vincle|g== entre la vacuna MMR i l'autisme. L'article va ser retirat perquè ==no complia els criteris bàsics de la ciència|r==.",
      type: "synthesis",
      badge: "✅ Enigma 2 — resolt parcialment"
    }
  ],

  graphicResources: [
    { id: "G2", apartat: "2", title: "Diagrama immunitat de grup", src: "/images/sa3-g2-immunitat-grup.svg", note: "Comparativa: 0% vacunats (virus circula lliurement) vs 50% (alguns protegits) vs 95% (virus no pot circular, protegit el bebè no vacunable)." }
  ],

  fitxaUrl: "/fitxes/sa3-s3-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S3 — Vacunes: ciència o mite?",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: escriu com decidiràs a quin article creure si dos diuen coses oposades. Anoteu sense por — ara no es corregeix.", hints: [] },
      { apartat: "1", title: "Anàlisi de fonts (grups)", time: "25 min", phase: "explore", instruction: "Apartat 1: aplica la graella dels 4 criteris a les fitxes A (Wakefield) i B (estudi danès). Per cada criteri, puntua 0 (no el compleix) o 1 (sí). Suma les puntuacions.", hints: [
        "Criteri 1: revista revisada per parells = la comunitat científica ha revisat l'article ABANS de publicar-lo. The Lancet ho és — però retirar un article implica que el sistema va fallar inicialment.",
        "Criteri 4 (replicació): un estudi aïllat no estableix una veritat científica. Quin dels dos articles ha estat replicat per d'altres grups?"
      ] },
      { apartat: "2", title: "Com funcionen les vacunes", time: "20 min", phase: "explica", instruction: "Apartat 2: completa el diagrama de la vacuna i calcula el llindar d'immunitat de grup per al xarampió (R₀=15) i la grip (R₀=2.5).", hints: [
        "Diagrama vacuna: antigen atenuat → SI activa → anticossos + cèl·lules memòria → si arriba el patogen real → resposta ràpida.",
        "Llindar = 1 - 1/R₀. Agafa una calculadora. Per al xarampió: 1 - 1/15 = 1 - 0.067 = 0.933 → 93.3%."
      ] },
      { apartat: "3", title: "4 criteris de qualitat + enigma 2", time: "15 min", phase: "explica", instruction: "Apartat 3: escriu els 4 criteris i aplica'ls a l'afirmació 'les vacunes causen autisme'. Per cada criteri, indica si l'evidència disponible (estudi danès vs Wakefield) la suporta o la refuta.", hints: [
        "El criteri de replicació és el definitiu: si 5 estudis independents amb milions de nens no troben vincle, la hipòtesi queda refutada.",
        "Conflicte d'interès: per quina raó algú voldria que la gent cregués que les vacunes causen autisme? Pensa en qui en treu profit."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica com funciona una vacuna. Usa els conceptes: antigen, anticòs, memòria immunològica, resposta secundària.", hint: "Segueix la cadena: vacuna injecta antigen atenuat → SI respon → fa anticossos + cèl·lules de memòria → si el patogen real arriba → resposta ràpida → malaltia avortada o lleu." },
    { id: "q2", type: "open", text: "Aplica els 4 criteris de qualitat a l'article de Wakefield. Quin criteri falla de forma més greu? Per quina raó?", hint: "Els 4 criteris: revisió per parells, mida de la mostra, conflicte d'interès, replicació. Wakefield: n=12 (massa petit), conflicte d'interès econòmic, cap estudi posterior ho ha replicat." },
    { id: "q3", type: "multiple", text: "Per quina raó és important que el 95% de la població es vacuni contra el xarampió?", options: ["Per protegir els que no es poden vacunar (bebès, immunodeprimits) bloquejant la circulació del virus", "Perquè d'altra manera la vacuna no funciona per a ningú", "Per obligació legal a tots els països", "Per augmentar la producció de laboratoris farmacèutics"], correct: 0 }
  ],

  homework: {
    description: "Llegeix la introducció als medicaments (apartat TEORIA d'aquesta pàgina, S4). Omple el formulari de comprensió prèvia (Classroom). Comença a pensar en el tema de la teva campanya de comunicació (pòster o vídeo de 60 s).",
    note: "La campanya és el producte final de la SA (entrega a S5). El tema ha de ser un mite sobre salut. Exemples: 'els antibiòtics curen totes les infeccions', 'el paracetamol és inofensiu', 'les drogues 'lleugeres' no enganxen'.",
    deadline: "2026-11-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (vacunes, immunitat de grup, 4 criteris de qualitat)",
    "Aplica els 4 criteris a 1 afirmació sobre salut que trobis a les xarxes (qualsevol)",
    "Omple la fitxa S3 apartats 0–3",
    "Exit tiquet online aquí"
  ],
  oaLinks: ["OA2", "OA3"], competencies: ["CE2", "CE5"]
}
