export const sa3s2 = {
  id: "s2", saId: "sa3",
  title: "Les defenses del cos",
  sessionNumber: 2, biome: "sa3", duration: "2h",
  engageImage: "/images/sa3-s2-immunitat.jpg",

  engageQuestion: "Si el virus de la grip entra al teu cos avui, quan trigues a curar-te? Per quina raó alguns es curen en 3 dies i altres triguen 10? I per quina raó la varicel·la mai et torna a infectar un cop l'has passada?",
  engageContext: "Revisió breu de la S1: el virus ha entrat. Ara el cos ha de respondre. Posada en comú dels R₀ de les malalties que han buscat a casa. Connexió amb l'enigma 1: per quina raó la Martina no va agafar la grip?",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Explico la seqüència temporal completa de la resposta immunitària (innata → adaptativa) amb els temps de resposta concrets i justific per quina raó la resposta secundària és molt més ràpida.",
      "Argumento per quina raó una persona immunodeprimida (sense limfòcits T funcionals) és especialment vulnerable a infeccions que normalment serien lleus.",
      "Diseño un experiment per demostrar que anticossos específics no protegeixen contra un altre antigen, explicant el grup control i la variable.",
      "Formulo una hipòtesi sobre per quina raó la Martina (no vacunada) no va agafar la grip i la contrasto amb dues explicacions alternatives."
    ],
    B: [
      "Distingeixo immunitat innata (ràpida, no específica) d'adaptativa (lenta, específica, amb memòria) i n'identifico les cèl·lules principals.",
      "Explico el mecanisme de l'antigen-anticòs (clau-pany) i per quina raó els anticossos contra la grip no protegeixen contra la varicel·la.",
      "Explico per quina raó la varicel·la no et torna a infectar gràcies a la memòria immunològica.",
      "Formulo una hipòtesi fonamentada sobre per quina raó la Martina no va agafar la grip."
    ],
    C: [
      "Completo: immunitat innata (macrò-fags, inflamació, febre) → actua en _____ hores. Immunitat adaptativa (limfòcits, anticossos) → actua en _____ dies.",
      "Dibuixo l'esquema antigen-anticòs amb fletxes i etiquetes (antigen, anticòs, unió específica).",
      "Completo: la varicel·la no em torna a infectar perquè el meu cos té _____ immunològica que recorda el _____ del virus.",
      "Sé dir que la Martina no va agafar la grip probablement perquè _____ (ja l'havia passada / el seu sistema immunitari tenia memòria)."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "2": {
      scaffold: "Omple la taula de les dues immunitats: Innata → Temps (hores/dies): ___ · Cèl·lules: ___ · Específica? (sí/no): ___. Adaptativa → Temps: ___ · Cèl·lules: ___ · Específica?: ___. Quin tipus de memòria té ONLY la innata/l'adaptativa?",
      challenge: "Per quina raó una persona amb VIH (que destrueix limfòcits T) pot morir de malalties que normalment no maten? Explica la cadena: menys limfòcits T → _____ → _____ → mort per infecció oportunista. Quin tipus d'immunitat queda intacta i quina queda compromesa?"
    },
    "3": {
      scaffold: "Esquema antigen-anticòs: dibuixa un antigen (cercle amb protuberàncies) i un anticòs (forma de Y). Uneix-los amb una fletxa i escriu 'unió específica: clau-pany'. Per quina raó un anticòs contra la grip no funciona contra la varicel·la? Pista: les protuberàncies de la 'clau' son _____ per a cada patogen.",
      challenge: "Dissenya un experiment per comprovar que l'anticòs contra la grip és específic. Quins grups tindries? Quina és la variable independent? Quin seria el resultat si el teu model és correcte? I si no ho és?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui descobrireu per quina raó el cos no defensa igual la primera vegada que agafa un patogen que la segona. Posada en comú: quines malalties de R₀ alt heu trobat a casa? Anoteu sense por.",
    prompts: [
      {
        kind: "write",
        text: "Quan agafes un refredat, per quina raó creus que et cures al cap d'una setmana sense prendre cap medicament específic?",
        starter: "Crec que em curo perquè el meu cos..."
      },
      {
        kind: "write",
        text: "Per quina raó la varicel·la no et pot infectar dues vegades (si ja l'has passada), però la grip sí que et pot infectar cada any?",
        starter: "Crec que la diferència és..."
      }
    ]
  },

  exploreInstructions: [
    "Obre l'app de sistema immunitari (o la simulació del professor) i segueix les instruccions a pantalla",
    "Observa: quan el virus entra, quines cèl·lules arriben primer? En quant de temps?",
    "Segueix la resposta: apareixen nous tipus de cèl·lules? Quan? Anota els temps a la taula de la fitxa",
    "Simulació de 'segon contacte': torna a introduir el mateix virus. Compara la velocitat de resposta",
    "Moment epistèmic: per quina raó la resposta secundària és tan més ràpida? Quina cèl·lula és la 'clau'?"
  ],
  exploreDuration: "30 min",
  exploreMaterials: ["Dispositiu amb accés a l'app (o projecció del docent)", "Fitxa per anotar temps de resposta"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa3-s2-t1.mp4",
      heading: "==Immunitat innata==: la resposta immediata",
      text: "==Pell i mucoses|o==: primera barrera física — si el patogen hi entra, és la primera defensa. ==Macrò-fags i neutròfils|g==: 'mengen' patògens (==fagocitosi==) en ==minuts–hores|o==. ==Inflamació==: enrogiment + calor + inflor → atreu més cèl·lules immunitàries. ==Febre== (connexió S1): el cos augmenta la temperatura per dificultar la reproducció del patogen.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa3-s2-t2.mp4",
      heading: "==Immunitat adaptativa==: la resposta específica",
      text: "S'activa al cap de ==7–14 dies|o== de la primera infecció. ==Limfòcits B|b==: produeixen ==anticossos== específics contra l'antigen. ==Limfòcits T|g==: destrueixen cèl·lules del propi cos que estan infectades. Primera infecció dura ~1 setmana perquè el cos ==tarda a fabricar anticossos|r== suficients.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      video: "/animacions/sa3-s2-t3.mp4",
      heading: "==Antigen== i ==anticòs==: el sistema clau-pany",
      text: "==Antigen==: qualsevol molècula estranya (proteïna de la superfície del patogen) que el SI reconeix com a 'no-pròpia'. ==Anticòs== (immunoglobulina): proteïna en forma de ==Y== fabricada pels limfòcits B que s'enganxa ==específicament== a un antigen concret (cada clau encaixa en un sol pany). Funció: ==neutralitza|g== el patogen o el ==marca per a fagocitosi|g==.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa3-s2-t4.mp4",
      heading: "==Memòria immunològica==: per quina raó la varicel·la no torna",
      text: "Després de la resposta adaptativa, queden ==limfòcits de memòria== que persisteixen ==anys o dècades==. Quan el mateix patogen torna, la ==resposta secundària|g== és molt més ràpida (hores, no dies) i intensa → el patogen es destrueix ==abans de causar símptomes|g==. Per quina raó la varicel·la no torna? Memòria. Per quina raó la grip sí? El virus ==muta|r== cada any i el SI no el reconeix.",
      type: "concept",
      badge: "🔗 Enigma 1 — primera pista"
    },
    {
      id: "t5",
      apartat: "3",
      video: "/animacions/sa3-s2-t5.mp4",
      heading: "Connexió ==enigma 1==: la Martina no vacunada",
      text: "La Martina podria tenir memòria d'una soca de grip similar d'anys anteriors (resposta ràpida que va avortar la infecció). O bé, la ==immunitat de grup|g==: si la meitat de la classe estava vacunada, el virus va tenir menys vectors per arribar a ella. Les dues raons son compatibles. Enigma 1 — ==primera pista|o==, resolució completa a S5.",
      type: "epistemic",
      badge: "🧩 Enigma 1"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Corba de resposta immunitària", src: "/images/sa3-g1-resposta-immunitaria.svg", note: "Resposta primària (lenta) vs secundària (ràpida). Eix X: dies. Eix Y: concentració d'anticossos." }
  ],

  fitxaUrl: "/fitxes/sa3-s2-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S2 — Les defenses del cos",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: per quina raó et cures de la grip sense medicament específic? Per quina raó la varicel·la no torna? Escriu el que saps ara — ho compararàs al final de la sessió.", hints: [] },
      { apartat: "1", title: "App sistema immunitari", time: "25 min", phase: "explore", instruction: "Segueix la simulació i omple la taula de l'apartat 1: registra les cèl·lules que apareixen a cada fase i el temps de resposta. Activa el 'segon contacte' i mesura la diferència.", hints: [
        "Fixa't en el temps que tarda a aparèixer cada cèl·lula. El macrò-fag arriba en minuts; l'anticòs, en dies.",
        "Anota quantes vegades és més ràpida la resposta secundària que la primària."
      ] },
      { apartat: "2", title: "Immunitat innata vs adaptativa", time: "20 min", phase: "explica", instruction: "Apartat 2: omple la taula comparativa. Identifica les cèl·lules de cadascuna, el temps de resposta i si és específica o no.", hints: [
        "Innata: ràpida (hores), no distingeix entre patògens. Adaptativa: lenta (dies), però recorda qui és l'enemic.",
        "Connexió: la inflamació (innata) és el signe que el cos ja ha detectat el problema i crida reforços."
      ] },
      { apartat: "3", title: "Antigen-anticòs i memòria", time: "15 min", phase: "explica", instruction: "Apartat 3: dibuixa l'esquema clau-pany i omple l'explicació de la memòria immunològica. Per quina raó la grip et pot infectar cada any i la varicel·la no?", hints: [
        "Antigen: part del patogen que el SI reconeix (com una etiqueta). Anticòs: proteïna Y que s'enganxa ONLY a aquell antigen.",
        "Grip vs varicel·la: la clau canvia cada any (el virus muta). La serradura del SI és per a la clau antiga."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica la diferència entre immunitat innata i adaptativa. Quina actua primer? Quina és específica? Dona un exemple de cèl·lula de cadascuna.", hint: "Innata: hores, inespecífica (macrò-fags). Adaptativa: dies, específica (limfòcits B→anticossos, limfòcits T→destrucció cèl·lules infectades)." },
    { id: "q2", type: "open", text: "Per quina raó la varicel·la no et torna a infectar però la grip sí pot infectar-te cada any? Usa els conceptes d'anticòs, antigen i memòria immunològica.", hint: "Varicel·la: el virus no muta → el SI reconeix el mateix antigen anys després → resposta secundària ràpida. Grip: el virus muta → antigen nou → el SI no el reconeix → necessita resposta primària (lenta)." },
    { id: "q3", type: "multiple", text: "Quin tipus de cèl·lula produeix els anticossos?", options: ["Limfòcit B", "Macrò-fag", "Limfòcit T", "Neutròfil"], correct: 0 }
  ],

  homework: {
    description: "Llegeix la introducció a les vacunes (apartat TEORIA d'aquesta pàgina, S3). Omple el formulari de comprensió prèvia (Classroom). A S3 comenceu directament l'anàlisi de fonts.",
    note: "Lectura obligatòria per a S3. El formulari de comprensió prèvia es fa servir al principi de S3.",
    deadline: "2026-11-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (immunitat innata, adaptativa, antigen-anticòs, memòria)",
    "Fes el diagrama de flux: virus entra → primer actua ___ (hores) → després actua ___ (dies) → queden cèl·lules de ___",
    "Omple la fitxa S2 apartats 0–3",
    "Exit tiquet online aquí"
  ],
  oaLinks: ["OA2"], competencies: ["CE2", "CE5"]
}
