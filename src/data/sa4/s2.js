export const sa4s2 = {
  id: "s2", saId: "sa4",
  title: "Els canvis del cos",
  sessionNumber: 2, biome: "sa4", duration: "2h",
  engageImage: "/images/sa4-s2-pubertat.jpg",

  engageQuestion: "El docent recollirà 1-2 preguntes anònimes de la bústia oberta a S1 (sense noms) i les llegirà en veu alta. Avui comencem a respondre-les amb ciència. Però primer: quins canvis físics creus que controla el cervell?",
  engageContext: "Presentació de l'enigma de la SA (el cicle de la Laia) que quedarà a la paret tota la SA. La bústia de preguntes anònimes (oberta a S1) continua activa tota la SA. El docent llegeix 1-2 preguntes ja dipositades i la classe en va seleccionant les que respondran a la fitxa de respostes (producte final de la SA, a S4).",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (A/B/C) ──────────
  levelObjectives: {
    A: [
      "Explico la retroalimentació hormonal negativa que regula el cicle menstrual (FSH/LH/estrògens/progesterona) i prevec com canviarien els nivells si es bloquegés la LH.",
      "Argumento per quina raó la pubertat és diferent en temps i forma en cada persona i quins factors (genètics i ambientals) en modulen l'inici.",
      "Calculo el dia d'ovulació aproximat de la Laia (cicle 35 dies) i comparo amb l'error del 'dia 14 fix' que comet l'amiga.",
      "Distingeixo entre la funció exocrina (gàmetes) i endocrina (hormones) dels gònades masculins i femenins."
    ],
    B: [
      "Identifico les 4 fases del cicle menstrual (menstruació, fol·licular, ovulació, lútea) i les hormones principals associades a cada fase.",
      "Explico les funcions de les estructures principals de l'aparell reproductor masculí i femení.",
      "Explico per quina raó la pubertat comporta els canvis que comporta (base hormonal) tant en nois com en noies.",
      "Calculo el dia d'ovulació de la Laia i explico per quina raó el 'dia 14' no és el seu dia fèrtil."
    ],
    C: [
      "Identifico les 4 fases del cicle menstrual i completo la seqüència: menstruació (dia 1) → fol·licular → ovulació (dia ___) → lútea.",
      "Completo: en els nois, la pubertat produeix _____ (hormona) que causa _____ (2 canvis). En les noies, els _____ causen _____ (2 canvis).",
      "Identifico almenys 2 estructures de l'aparell reproductor femení i 2 del masculí i n'escric la funció.",
      "Completo: el cicle de la Laia (35 dies) NO és anormal perquè el cicle normal dura _____ a _____ dies."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT ──────────────────────────
  apartatExtras: {
    "2": {
      scaffold: "Completa la taula de la pubertat: Nois → Hormona: ___ · Canvis: (1)___ (2)___. Noies → Hormona: ___ · Canvis: (1)___ (2)___. L'òrgan del cervell que dóna l'ordre és: ___.",
      challenge: "Explica la retroalimentació negativa del cicle menstrual: com sap la hipòfisi que els estrògens ja han pujat prou i que ha de reduir la FSH? Analogia: és com un termòstat. Explica'n el mecanisme i preveu què passaria si es bloquegés la LH permanentment."
    },
    "3": {
      scaffold: "Dibuixa el cicle menstrual com una línia de temps de 28 dies. Marca: dia 1 (menstruació), dia 14 (ovulació estimada), dia 28 (inici nou cicle). Ara: si el cicle dura 35 dies, quan seria l'ovulació aproximada? Pista: l'ovulació passa ≈14 dies ABANS del final del cicle.",
      challenge: "Si la Laia vol saber els seus dies fèrtils per planificar, quin és el seu dia d'ovulació real? Per quina raó el 'mètode del calendari' és poc fiable fins i tot si el cicle és aparentment regular? Quins altres signes biològics podria observar (temperatura basal, moc cervical) per completar el mètode?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint: "Teniu l'enigma de la Laia a la paret. Anoteu el que sabeu ara sobre el cicle menstrual — al final de la SA comparareu. No hi ha resposta incorrecta: les idees prèvies serveixen per veure com evoluciona el vostre pensament.",
    prompts: [
      {
        kind: "write",
        text: "Quins canvis físics recordes de la pubertat (els teus o els que has observat)? Per quina raó creus que passen? Quin creus que és el 'director' d'aquests canvis al cos?",
        starter: "Durant la pubertat he observat que... i crec que es deu a..."
      },
      {
        kind: "write",
        text: "Quant de temps creus que dura un cicle menstrual 'normal'? Si una persona té un cicle de 35 dies en comptes de 28, és anormal?",
        starter: "Crec que el cicle normal dura... i un cicle de 35 dies em sembla..."
      }
    ]
  },

  exploreInstructions: [
    "Per parelles: rebeu un sobre amb 8 targetes (fases del cicle menstrual, hormones, dies aproximats)",
    "Tasca 1 (10 min): ordeneu les targetes cronològicament formant el cicle complet. Discutiu el raonament",
    "Tasca 2 (5 min): identifiqueu quina fase permet la fecundació i per quina raó",
    "Tasca 3 (10 min): reviseu l'enigma de la Laia (35 dies). Si l'ovulació passa ≈14 dies ABANS del final, quan seria el dia fèrtil de la Laia?",
    "Moment epistèmic: posada en comú. El docent presenta el diagrama del cicle complet amb les hormones"
  ],
  exploreDuration: "25 min",
  exploreMaterials: ["Sobre amb 8 targetes per parella", "Diagrama en blanc del cicle (fitxa S2)", "Projector: diagrama final del cicle amb hormones"],

  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      video: "/animacions/sa4-s1-t1.mp4",
      heading: "==Pubertat==: el cervell comanda els canvis",
      text: "La ==pubertat== s'inicia quan l'==hipotàlem|p== activa la hipòfisi → produeix ==FSH i LH|p== → els gònades produeixen les hormones sexuals. ==Testosterona|b== (nois): creixement muscular, veu greu, vello pubià i facial, maduració dels espermatozoides. ==Estrògens|o== (noies): creixement de pits, amplada de malucs, menarca (primera menstruació). Ambdós sexes produeixen les dues hormones en proporcions molt diferents.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      video: "/animacions/sa4-s1-t2.mp4",
      heading: "==Aparell reproductor masculí==: fàbrica d'espermatozoides",
      text: "==Testicles|b==: produeixen ==espermatozoides== (gàmetes masculins, 23 cromosomes) i ==testosterona==. Temperatura: 2-3°C per sota de la corporal — per quina raó els testicles son fora de la cavitat abdominal. ==Epidídim==: lloc de maduració dels espermatozoides. ==Conducte deferent==: transport fins a la uretra. ==Glàndules accessòries== (seminals, prostàtica, bulbouretrals): produeixen el ==semen|b== — vehicle aquós amb nutrients per als espermatozoides.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      video: "/animacions/sa4-s1-t3.mp4",
      heading: "==Aparell reproductor femení==: del gàmeta a l'embrió",
      text: "==Ovaris==: produeixen ==òvuls== (gàmetes femenins, 23 cromosomes) i les hormones ==estrògens i progesterona==. ==Trompes de Fal·lopi|o==: condueixen l'òvul de l'ovari a l'úter — lloc habitual de la ==fecundació|g==. ==Úter==: on s'implanta i es desenvolupa l'embrió; la capa interior (==endometri|o==) es renova cada cicle. ==Vagina==: canal de part i via d'entrada dels espermatozoides.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      video: "/animacions/sa4-s1-t4.mp4",
      heading: "El ==cicle menstrual==: les 4 fases",
      text: "Durada normal: ==21-35 dies|g== (NO sempre 28; la variació és normal). Fase 1 ==Menstruació|r== (dies 1-5): l'endometri es desprèn si no hi ha hagut fecundació. Fase 2 ==Fol·licular== (dies 1-13 en un cicle de 28): FSH estimula el creixement del fol·licle; estrògens pugen i reconstrueixen l'endometri. Fase 3 ==Ovulació|g== (≈ dia 14 en cicles de 28 dies): LH en pic → allibera l'òvul madur. Fase 4 ==Lútea== (dies 15-28): progesterona prepara l'endometri; si no hi ha fecundació → baixa la progesterona → nova menstruació.",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "3",
      video: "/animacions/sa4-s1-t5.mp4",
      heading: "Connexió ==enigma 1==: el cicle de la Laia",
      text: "La Laia té un cicle de ==35 dies|o==: és ==normal|g== (rang 21-35 dies). Error 1 de l'amiga: l'ovulació NO és sempre el dia 14 — és aproximadament ==14 dies ABANS del final|g== del cicle. Si el cicle dura 35 dies: ovulació ≈ dia ==21|g== (35 − 14). El dia 14 és vàlid únicament per a cicles de 28 dies. Error 2: no hi ha rang de cicle normal que sigui 'anormal' entre 21-35 dies. Enigma parcialment resolt — a S4 veurem la implicació per als mètodes anticonceptius.",
      type: "epistemic",
      badge: "🧩 Enigma 1 — primera pista"
    }
  ],

  graphicResources: [
    { id: "G1", apartat: "3", title: "Cicle menstrual: fases i hormones", src: "/images/sa4-g1-cicle-menstrual.svg", note: "Diagrama del cicle de 28 dies amb les 4 fases, els nivells hormonals (FSH, LH, estrògens, progesterona) i l'endometri. Eix X: dies 1-28." }
  ],

  fitxaUrl: "/fitxes/sa4-s2-fitxa.pdf", teoriaPdfUrl: null,

  fitxaGuide: {
    fitxaName: "Fitxa S2 — Els canvis del cos",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage", instruction: "Apartat 0: escriu el que saps sobre la pubertat i el cicle menstrual. No es corregeix ara — el compararàs al final de la SA.", hints: [] },
      { apartat: "1", title: "Joc de targetes — cicle menstrual", time: "25 min", phase: "explore", instruction: "Apartat 1: ordena les 8 targetes del cicle i omple el diagrama en blanc. Calcula: quan seria l'ovulació de la Laia si el seu cicle dura 35 dies?", hints: [
        "Clau: l'ovulació no és el dia 14 de tots els cicles. És aproximadament 14 dies ABANS de la menstruació.",
        "La fase lútea (des de l'ovulació fins a la menstruació) sempre dura ≈14 dies. Per tant: dia d'ovulació ≈ durada del cicle − 14."
      ] },
      { apartat: "2", title: "Pubertat i aparells reproductors", time: "20 min", phase: "explica", instruction: "Apartat 2: omple la taula de la pubertat (hormones + canvis en nois i noies). Identifica les estructures de la il·lustració de l'aparell reproductor masculí i femení.", hints: [
        "Recorda la cadena: hipotàlem → hipòfisi (FSH/LH) → gònades (testosterona/estrògens). El cervell és el director.",
        "Testicles i ovaris: doble funció — exocrina (gàmetes) i endocrina (hormones). Compara amb el pàncrees (SA2: glucosa i insulina)."
      ] },
      { apartat: "3", title: "El cicle menstrual i l'enigma", time: "10 min", phase: "explica", instruction: "Apartat 3: dibuixa la línia de temps del cicle de la Laia (35 dies). Marca el dia d'ovulació real. Escriu per quina raó les dues afirmacions de les amigues son incorrectes.", hints: [
        "Fórmula: dia ovulació ≈ dies del cicle − 14. Si el cicle és de 35 dies: 35 − 14 = dia 21.",
        "La fase lútea sempre dura ≈14 dies. El que varia entre cicles curts i llargs és la fase fol·licular, no la lútea."
      ] }
    ]
  },

  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica per quina raó la Laia, amb un cicle de 35 dies, NO és 'anormal' i per quina raó el 'dia 14' no és el seu dia fèrtil. Quin seria el dia d'ovulació aproximat?", hint: "Rang normal del cicle: 21-35 dies. Ovulació ≈ dies del cicle − 14. Laia: 35 − 14 = dia 21." },
    { id: "q2", type: "open", text: "Indica la funció d'una trompa de Fal·lopi i de l'endometri. Connecta-ho amb el cicle menstrual: per quina raó l'endometri es desprèn cada mes si no hi ha fecundació?", hint: "Trompa: condueix l'òvul i és el lloc habitual de la fecundació. Endometri: es prepara (progesterona) per a la implantació. Si no hi ha zigot → baixa la progesterona → l'endometri es desprèn (menstruació)." },
    { id: "q3", type: "multiple", text: "Quina hormona provoca l'ovulació (alliberació de l'òvul)?", options: ["LH (hormona luteinitzant)", "FSH (hormona fol·liculo-estimulant)", "Estrògens", "Progesterona"], correct: 0 }
  ],

  homework: {
    description: "Observa el gràfic del cicle menstrual de la fitxa (Gràfic G1). Escriu 3 observacions sobre com canvien les hormones al llarg del cicle (quan pugen, quan baixen i per quina raó). Porta-les a S3.",
    note: "No realitzable completament amb IA si cal interpretar el gràfic específic de la fitxa.",
    deadline: "2026-01-XX"
  },
  recoveryInstructions: [
    "Llegeix la teoria d'aquesta pàgina (pubertat, aparells reproductors, cicle menstrual)",
    "Fes el diagrama del cicle menstrual en una línia de temps de 28 dies (o 35 per a la Laia)",
    "Omple la fitxa S2 apartats 0-3",
    "Exit tiquet en paper a S3"
  ],
  oaLinks: ["OA2"], competencies: ["CE1", "CE5"]
}
