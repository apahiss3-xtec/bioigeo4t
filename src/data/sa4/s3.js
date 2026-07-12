export const sa4s3 = {
  id: "s3", saId: "sa4",
  title: "De la cèl·lula a la persona",
  sessionNumber: 3, biome: "sa4", duration: "2h",
  engageImage: "/images/sa4-s3-fecundacio.jpg",

  engageQuestion: "Cada un de vosaltres ha 'guanyat' una competició de 200 milions de candidats (els espermatozoides). I al mateix temps, l'òvul que va ser fecundat era 1 dels ~400 que allibera una dona en tota la vida. Per quina raó sou VOSALTRES i no una altra persona? Avui ho entendreu.",
  engageContext: "Revisió breu de la S2: tenim gàmetes (espermatozoides i òvuls). Avui: el que passa quan es troben. Connexió important amb SA1/S2 (meiosi): els gàmetes son el resultat de la meiosi. El producte final de la SA (fitxa de respostes) es comença a esbossar avui.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Explico per quina raó la fecundació requereix que únicament 1 espermatozoide penetri l'òvul (mecanismes de bloqueig de polispèrmia) i les conseqüències si fallés.",
      "Distingeixo la fecundació in vitro (FIV) de la natural i analitzo les implicacions biològiques (selecció d'embrions, transferència, taxa d'implantació).",
      "Explico per quina raó els bessons idèntics son sempre del mateix sexe biològic i els fraterns no, connectant-ho amb la meiosi i la determinació cromosòmica.",
      "Construeixo la línia de temps del desenvolupament embrionari (setmana 1-40) identificant les fites clau de cada trimestre."
    ],
    B: [
      "Explico el procés de fecundació (lloc, zigot, 23+23=46 cromosomes) i la determinació del sexe biològic (XX/XY) i per quina raó el sexe el determina l'espermatozoide.",
      "Distingeixo embrió (0-8 setmanes) de fetus (8 setmanes-naixement) i identifico les fites principals de cada trimestre.",
      "Explico la diferència entre bessons univitel·lins (idèntics) i bivitel·lins (fraterns) en termes d'ADN i connexió amb la meiosi (SA1).",
      "Connecto la fecundació amb la meiosi (SA1/S2): per quina raó els gàmetes han de tenir 23 cromosomes i no 46."
    ],
    C: [
      "Completo: el zigot es forma quan ___ + ___ = ___ cromosomes. El sexe el determina l'___ perquè porta la cromosoma X o ___.",
      "Identifico les fites del primer trimestre: setmana ___ (cor batega) · setmana ___ (ja és fetus) · setmana ___ (nadó viable).",
      "Completo: bessons idèntics → 1 zigot es divideix → sempre sexe biològic ___. Bessons fraterns → 2 òvuls fecundats → poden tenir sexes ___.",
      "Connecto amb SA1: si els gàmetes tenen 23 cromosomes, és perquè es van formar per ___ (meiosi / mitosi)."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "2": {
      scaffold: "Completa la taula de la fecundació: Lloc on passa: ___. Cèl·lula que resulta: ___. Nombre de cromosomes: ___+___ = ___. Qui determina el sexe biològic: ___. Per quina raó: l'espermatozoide pot portar ___ o ___, però l'òvul sempre porta ___.",
      challenge: "En la FIV (fecundació in vitro), els embrions es creen al laboratori i es pot fer un diagnòstic genètic preimplantacional. Quines possibilitats obre? Quins debats bioètics planteja? Analitza des de la perspectiva científica (CE1: possibilitats tècniques) i des de la CE5 (implicacions per a la salut i la societat)."
    },
    "3": {
      scaffold: "Dibuixa la línia de temps de l'embaràs (40 setmanes = 3 trimestres). Marca: zigot (dia 1) → implantació (dia 7-10) → embrió (fins setmana 8) → fetus → viabilitat (~22 setmanes) → part (setmana 38-40). Quin òrgan gestiona els intercanvis entre mare i fetus?",
      challenge: "Per quina raó els bessons univitel·lins son genèticament idèntics però poden diferir en fenotip (aspecte, personalitat, malalties)? Dona almenys 2 factors ambientals que modifiquen l'expressió gènica. Connexió SA1: ADN → gens → expressió gènica modulada per l'ambient (epigenètica)."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Avui descobrirem per quina raó sou vosaltres i no una altra persona. Recorda el que saps de la meiosi (SA1) — avui la necessitaràs. Escriu el que creus que passa des de la fecundació fins al naixement.",
    prompts: [
      {
        kind: "write",
        text: "Un espermatozoide té 23 cromosomes i un òvul en té 23. Quan es fecunden, quants cromosomes tindrà la cèl·lula resultant? Connecta-ho amb el que vas aprendre de la meiosi a SA1.",
        starter: "Si espermatozoide (23) + òvul (23) = ___ cromosomes. A SA1 vam aprendre que la meiosi..."
      },
      {
        kind: "write",
        text: "Per quina raó creus que l'embaràs dura aproximadament 9 mesos? Quins canvis creus que es produeixen durant aquest temps perquè el fetus estigui preparat per néixer?",
        starter: "Crec que l'embaràs dura 9 mesos perquè el fetus necessita..."
      }
    ]
  },

  exploreInstructions: [
    "El docent projecta la seqüència d'animació del procés de fecundació i desenvolupament embrionari (2-3 min)",
    "Per parelles: ompliu la línia de temps del desenvol­upament (setmanes 1-40) amb les 6 fites clau de la fitxa",
    "Tasca: identifiqueu a la línia quan passa: a) fecundació; b) implantació; c) primers batecs del cor; d) inici del període fetal",
    "Connexió SA1: per quina raó els gàmetes tenen 23 cromosomes? Escriviu la resposta en 2 frases",
    "Moment epistèmic: per quina raó sou vosaltres? L'atzar de la meiosi (assortiment independent de cromosomes + combinació aleatòria de gàmetes)"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Projecció: animació fecundació i embaràs (3 min)", "Línia de temps en blanc (fitxa S3)", "Imatge comparativa: embrió setmana 4 vs fetus setmana 12 vs nadó terme"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Gàmetes==: la connexió amb la meiosi (SA1)",
      text: "Connexió SA1/S2: els gàmetes (==espermatozoides|b== i ==òvuls|o==) es formen per ==meiosi== → cada gàmeta té ==23 cromosomes|g== (la meitat dels 46 normals). Quan es fusionen: ==23 + 23 = 46|g== → cèl·lula diploide normal. L'==assortiment independent|p== durant la meiosi genera milions de combinacions possibles → per quina raó cada persona és genèticament única. Espermatozoides: 200-500 milions per ejaculació, vida 3-5 dies a les trompes. Òvul: 1 per cicle (rarament 2), vida ≈12-24 hores.",
      type: "concept",
      badge: "🔗 Connexió SA1",
      video: "/animacions/sa4-s2-t1.mp4"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Fecundació==: l'unió dels gàmetes",
      text: "Lloc habitual: ==trompes de Fal·lopi|o==. Procés: 1 espermatozoide penetra l'òvul → els nuclis es fusionen → ==zigot== (primera cèl·lula de la nova persona, 46 cromosomes). ==Determinació del sexe biològic==: l'òvul sempre porta X. L'espermatozoide porta X (→ ==noia XX|o==) o Y (→ ==noi XY|b==). El sexe biològic el determina l'espermatozoide perquè és l'únic que pot aportar el cromosoma Y.",
      type: "concept",
      video: "/animacions/sa4-s2-t2.mp4"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "De ==zigot== a ==embrió==: les primeres setmanes",
      text: "Dia 1: ==zigot== (1 cèl·lula, 46 cr.) → divisions mitòtiques → mòrula → blastocist. Dia 7-10: ==implantació|g== a l'endometri de l'úter. Setmanes 2-8: ==embrió==. Setmana 4: el ==cor batega|r==. Setmana 5: s'esbossen els membres. Setmana 8: ja hi ha tots els òrgans en formació (≈2 cm). ==Placenta==: òrgan de connexió mare-embrió → intercanvia nutrients, O₂, CO₂ i substàncies de rebuig sense barrejar la sang. A partir de la setmana 9: ==fetus==.",
      type: "concept",
      video: "/animacions/sa4-s2-t3.mp4"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "L'==embaràs==: tres trimestres",
      text: "==1r trimestre (0-12 setm.)==: formació d'òrgans (embrió → fetus), risc més alt d'avortament espontani, possibles nàusees. ==2n trimestre (13-26 setm.)==: creixement ràpid, moviments perceptibles, tots els òrgans presents; viabilitat ≈ ==setmana 22-24|o== (els pulmons ja funcionen mínimament). ==3r trimestre (27-40 setm.)==: maduració d'òrgans (sobretot pulmons i cervell), acumulació de greix subcutani. ==Part==: contraccions de l'úter → dilatació del coll uterí → expulsió del fetus → expulsió de la placenta.",
      type: "concept",
      video: "/animacions/sa4-s2-t4.mp4"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "==Bessons==: idèntics vs fraterns",
      text: "==Bessons univitel·lins (idèntics)|g==: 1 zigot es divideix en 2 embrions → mateixa informació genètica → sempre el ==mateix sexe biològic==. Idèntics genèticament però no clons: l'ambient i l'epigenètica modifiquen l'expressió gènica (connexió SA1/ADN). ==Bessons bivitel·lins (fraterns)|o==: 2 òvuls alliberats i fecundats per 2 espermatozoides → tan similars genèticament com qualsevol parella de germans → poden tenir ==sexes biològics diferents==.",
      type: "concept",
      video: "/animacions/sa4-s2-t5.mp4"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "2", title: "Determinació del sexe biològic (XX/XY)", src: "/images/sa4-g3-determinacio-sexe.svg", note: "Diagrama amb l'òvul (sempre X) i els dos tipus d'espermatozoide (X o Y). Resultat: XX (noia) o XY (noi). Connexió: per quina raó el sexe biològic el determina el pare (l'únic que aporta Y)." },
    { id: "G2", apartat: "3", title: "Línia de temps del desenvolupament (0-40 setmanes)", src: "/images/sa4-g4-linia-temps-embaras.svg", note: "Embrió setmana 4 / fetus setmana 12 / fetus viable setmana 24 / nadó terme setmana 40. Mides relatives." }
  ],

  fitxaUrl: "/fitxes/sa4-s3-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S3 — De la cèl·lula a la persona",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: quants cromosomes té el zigot? Connecta-ho amb la meiosi (SA1). Escriu el que creus que passa en els primers 9 mesos.", hints: [] },
      { apartat: "1", title: "Línia de temps de l'embaràs", time: "20 min", phase: "explore", instruction: "Apartat 1: omple la línia de temps (setmanes 1-40) amb les 6 fites clau. Quan passa de ser embrió a fetus? Quan és viable?", hints: [
        "Embrió = fins setmana 8 (tots els òrgans en formació). Fetus = de setmana 9 fins al naixement. Viable = ≈ setmana 22-24 (els pulmons ja funcionen mínimament).",
        "Connexió: per quina raó el cor batega a la setmana 4? Compara la velocitat de formació dels òrgans (1r trimestre) amb la velocitat de creixement i maduració (2n-3r trimestre)."
      ] },
      { apartat: "2", title: "Gàmetes i fecundació", time: "20 min", phase: "explica", instruction: "Apartat 2: omple la taula de la fecundació. Per quina raó els gàmetes tenen 23 cromosomes i no 46? Qui determina el sexe biològic i per quina raó?", hints: [
        "Connexió SA1: la meiosi redueix a la meitat el nombre de cromosomes. Si la cèl·lula humana ha de tenir 46, cada gàmeta ha d'aportar exactament 23.",
        "Sexe biològic: l'òvul sempre porta X. Si l'espermatozoide porta X → XX (noia). Si porta Y → XY (noi). L'atzar de quins espermatozoides arriben a l'òvul primer."
      ] },
      { apartat: "3", title: "Embaràs i bessons", time: "15 min", phase: "explica", instruction: "Apartat 3: descriu les característiques de cada trimestre. Explica la diferència entre bessons univitel·lins i bivitel·lins en termes d'ADN i sexe biològic.", hints: [
        "Univitel·lins: 1 zigot + mitosi → 2 individus idèntics genèticament → sempre el mateix sexe cromosòmic (XX o XY).",
        "Bivitel·lins: 2 meiosis + 2 fecundacions → 2 individus tan similars com qualsevol parella de germans → poden tenir sexes cromosòmics diferents."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "El zigot humà té 46 cromosomes. Connecta-ho amb la meiosi (SA1): per quina raó els gàmetes han de tenir exactament 23 cromosomes i no 46?", hint: "La reproducció sexual = unió de 2 gàmetes. Si cada gàmeta portés 46 cromosomes, el zigot en tindria 92 → el nombre doblaria cada generació. La meiosi evita aquest doblament reduint a la meitat el nombre." },
    { id: "q2", type: "multiple", text: "Una parella de bessons és formada per un noi i una noia. Quin tipus de bessons son?", options: ["Bivitel·lins (fraterns): 2 òvuls fecundats per 2 espermatozoides", "Univitel·lins (idèntics): 1 zigot dividit en 2", "Impossible saber-ho sense anàlisi genètica", "Univitel·lins perquè han nascut el mateix dia"], correct: 0 }
  ],

  homework: {
    description: "Busca 1 imatge mèdica d'un embrió humà a la setmana 6 i 1 d'un fetus a la setmana 20 (font fiable: webs mèdiques o científiques). Escriu 3 diferències observables. Porta-les a S4.",
    note: "Cal buscar fonts fiables (webs mèdiques, no xarxes socials) — pràctica CE2.",
    deadline: "2026-01-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (gàmetes, fecundació, embrió/fetus, trimestres, bessons)",
    "Connecta amb SA1: per quina raó els gàmetes tenen 23 cromosomes (meiosi) i el zigot en té 46",
    "Omple la fitxa S3 apartats 0-3 i la línia de temps",
    "Exit tiquet en paper a S4"
  ],
  oaLinks: ["OA3"], competencies: ["CE1", "CE5"]
}
