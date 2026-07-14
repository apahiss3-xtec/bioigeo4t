export const sa3s3 = {
  id: "s3",
  saId: "sa3",
  title: "De l'ADN a la proteïna",
  sessionNumber: 3,
  biome: "sa3",
  duration: "2h",
  engageImage: "/images/sa3-s3-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Dues persones tenen el mateix gen de l'hemoglobina, la proteïna que transporta l'oxigen a la sang. La seva seqüència d'ADN és gairebé idèntica: es diferencien en UNA sola lletra de tot el gen. Una té la sang normal; l'altra té anèmia falciforme (drepanocitosi), una malaltia on els glòbuls vermells adopten forma de falç, s'encallen als vasos i no transporten bé l'oxigen. El repte: com pot ser que canviar UNA lletra en una molècula tan llarga canviï tota una persona? Heu de seguir el camí que va de l'ADN fins a la proteïna i trobar exactament on aquest canvi ho espatlla tot.",
  engageQuestion: "Si l'ADN no surt mai del nucli, però les proteïnes es fabriquen fora, al citoplasma, com arriba el missatge de l'ADN fins a la fàbrica de proteïnes? I com és que una sola lletra canviada pot deixar una persona malalta?",
  engageContext: "A la sessió passada vau treure l'ADN i vau veure com és per dins (doble cadena, quatre lletres). Avui descobrireu QUÈ FA aquesta informació: com es llegeix i es tradueix per fabricar proteïnes, que són les que construeixen i fan funcionar el cos. Fareu de traductors del codi genètic amb una taula de codons, i al final aplicareu tot el camí a un cas real: la mutació que causa l'anèmia falciforme.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Explico el camí complet gen → ARNm → proteïna → característica distingint la transcripció (còpia de l'ADN a ARN dins el nucli) de la traducció (lectura de l'ARN al ribosoma per fabricar la proteïna), i justifico per què cal un missatger intermediari.",
      "Tradueixo una seqüència d'ADN a ARNm i després a aminoàcids fent servir la complementarietat i la taula de codons, i explico què és un codó i un anticodó.",
      "Relaciono el genotip (l'ordre de les lletres) amb el fenotip (la característica observable) i argumento per què l'ordre de les lletres, i no les lletres en si, és el que conté la informació.",
      "Predic l'efecte d'una mutació puntual sobre la proteïna i el fenotip (cas de l'anèmia falciforme) i explico per què algunes mutacions canvien la persona i d'altres no (mutació silenciosa)."
    ],
    B: [
      "Ordeno els passos del camí gen → ARNm → proteïna → característica i dic que la transcripció passa al nucli (es copia l'ADN a ARN) i la traducció al ribosoma (es fabrica la proteïna).",
      "Amb l'ajuda de la taula de codons, tradueixo una seqüència curta d'ADN a ARNm i a aminoàcids, i dic que cada codó (3 lletres) correspon a un aminoàcid.",
      "Explico amb un exemple que l'ordre de les lletres de l'ADN determina la característica (genotip → fenotip).",
      "Identifico, en el cas de l'anèmia falciforme, quina lletra ha canviat i quin aminoàcid queda diferent."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — coherent amb SA3·S1 i S2; l'activitat de traducció té guia (taula) però el raonament és de l'alumnat.
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Fes servir una comparació: l'ADN és com el llibre de receptes original de la biblioteca, que NO es pot treure d'allà (no surt del nucli). Per cuinar (fabricar una proteïna) a la cuina (el citoplasma), primer en fas una FOTOCÒPIA d'una sola recepta: aquesta còpia és l'ARN missatger (ARNm). Copiar la recepta = TRANSCRIPCIÓ (passa al nucli). Cuinar seguint la còpia = TRADUCCIÓ (passa al ribosoma). Aquesta imatge et dona els dos passos i on passa cadascun.",
      challenge:
        "Explica el camí gen → ARNm → proteïna → característica SENSE la comparació de la recepta, amb el vocabulari científic exacte (nucli, transcripció, ARN polimerasa, ribosoma, traducció). Respon també: per què creus que la cèl·lula no fabrica la proteïna directament sobre l'ADN, dins el nucli? Quin avantatge té fer servir un missatger intermediari (l'ARNm)?"
    },
    "2": {
      scaffold:
        "Ves pas a pas amb la taula. (1) De l'ADN a l'ARNm: copia la cadena canviant cada lletra per la seva complementària i escrivint U on tocaria T (l'ARN no té T, té U). (2) Separa l'ARNm en grups de 3 lletres: cada grup de 3 és un CODÓ. (3) Busca cada codó a la taula de codons i escriu l'aminoàcid corresponent. L'ANTICODÓ és el grup de 3 lletres de l'ARN de transferència que encaixa amb el codó per complementarietat.",
      challenge:
        "Tradueix la seqüència sencer sense pistes intermèdies i, a més, dona la volta al procés: si una proteïna comença per Met-Val-His, quines seqüències d'ARNm i d'ADN podrien haver-la originat? Explica per què pot haver-hi MÉS D'UNA resposta possible (pista: mira quants codons diferents donen el mateix aminoàcid a la taula) i què ens diu això sobre el codi genètic."
    },
    "3": {
      scaffold:
        "GENOTIP = la informació escrita a l'ADN (l'ordre de les lletres). FENOTIP = la característica que es veu o es pot mesurar (el color dels ulls, tenir la sang normal o falciforme). El camí és: l'ordre de les lletres decideix l'ordre dels aminoàcids → l'ordre dels aminoàcids decideix la forma de la proteïna → la forma de la proteïna decideix si funciona bé → i això dona la característica. Pensa en les lletres A-D-N-A vs N-A-D-A: mateixes lletres, ordre diferent, significat diferent.",
      challenge:
        "Argumenta per què diem que la informació és l'ORDRE de les lletres i no les lletres en si (relaciona-ho amb com, canviant l'ordre de les mateixes lletres, canvia el significat d'una paraula). Després connecta-ho amb SA2: si totes les cèl·lules d'una persona tenen el MATEIX ADN, com pot ser que una neurona i una cèl·lula de la pell siguin tan diferents? (Pista: no totes les cèl·lules llegeixen les mateixes receptes.)"
    },
    "4": {
      scaffold:
        "A l'anèmia falciforme canvia UNA sola lletra del gen de l'hemoglobina. Segueix el camí que ja saps: aquesta lletra fa canviar UN codó de l'ARNm → aquest codó fa posar un aminoàcid DIFERENT (on hi havia d'anar glutamat, hi va valina) → la proteïna canvia lleugerament de forma → els glòbuls vermells s'enganxen i prenen forma de falç → la persona té anèmia. Una lletra al principi, tota una malaltia al final.",
      challenge:
        "Explica tot el camí de la mutació falciforme amb precisió (lletra → codó → aminoàcid → proteïna → cèl·lula → persona). Després respon la pregunta clau: si canviéssim una altra lletra i el codó nou seguís donant EL MATEIX aminoàcid, la persona estaria malalta? Com se'n diu, d'aquest tipus de mutació? I què ens diu això sobre per què no totes les mutacions són perilloses (algunes són fins i tot la matèria primera de l'evolució, que veureu a SA5)?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de començar, recupera el que vas veure a la sessió passada i el vídeo de casa. No es corregeix.",
    prompts: [
      {
        kind: "write",
        text: "Ahir vas veure que l'ADN guarda informació amb quatre lletres. Per a què creus que serveix aquesta informació? Què fabrica, la cèl·lula, seguint-la?",
        starter: "La informació de l'ADN serveix per… i la cèl·lula fabrica…"
      },
      {
        kind: "write",
        text: "L'ADN es queda dins el nucli, però les proteïnes es fabriquen fora. Com creus que arriba el missatge de l'ADN fins a la fàbrica de proteïnes?",
        starter: "Crec que el missatge arriba…"
      }
    ]
  },

  // ── EXPLORA (ABP · traducció del codi genètic) ───────────
  exploreActivity: {
    what: "Feu de traductors del codi genètic. A partir d'un fragment del gen de l'hemoglobina, recorreu tot el camí: copieu l'ADN a ARNm (transcripció), talleu l'ARNm en codons de 3 lletres i, amb la taula de codons, obteniu la seqüència d'aminoàcids de la proteïna (traducció). Després repetiu el procés amb la versió MUTADA del gen (anèmia falciforme) i comparеu: quina lletra ha canviat, quin aminoàcid queda diferent i per què això canvia la persona.",
    who: { mode: "grup", label: "Parelles o equips de 3" },
    time: 50,
    note: "La gràcia no és «encertar les lletres», sinó veure com un canvi minúscul a l'inici (una lletra) es propaga fins a un efecte enorme al final (una malaltia). Compareu sempre la versió normal amb la mutada, l'una al costat de l'altra."
  },
  exploreInstructions: [
    "Escriviu la cadena d'ARNm a partir de la cadena motlle de l'ADN (complementarietat, i U en lloc de T)",
    "Separeu l'ARNm en codons (grups de 3 lletres), començant pel codó d'inici AUG",
    "Amb la taula de codons, traduïu cada codó al seu aminoàcid i escriviu la seqüència de la proteïna",
    "Repetiu-ho amb el gen MUTAT (anèmia falciforme) i marqueu la lletra que ha canviat",
    "Compareu les dues proteïnes: quin aminoàcid és diferent i on? Relacioneu-ho amb la forma de falç del glòbul vermell"
  ],
  exploreDuration: "50 min",
  appSrc: null,
  exploreNote: "Itinerari guiat: la taula de codons i la seqüència es donen, però la traducció i la interpretació del canvi les feu vosaltres. És un exercici de resolució de problemes (mètode preferent a 4t).",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "El camí de la informació: ==transcripció== i ==traducció==",
      text: "L'ADN es queda al ==nucli|p==, però les proteïnes es fabriquen fora, al ==citoplasma|p==. Per això la cèl·lula fa una còpia d'un gen en forma d'==ARN missatger (ARNm)==: aquest pas es diu ==transcripció== i el fa una màquina, l'==ARN polimerasa==. L'ARNm surt del nucli i, al ==ribosoma|p==, es llegeix per fabricar la proteïna: aquest segon pas és la ==traducció==. El camí complet és ==gen → ARNm → proteïna → característica==.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "El codi genètic: ==codons== i ==anticodons==",
      text: "L'ARNm es llegeix de ==tres en tres== lletres. Cada grup de tres és un ==codó==, i cada codó indica un ==aminoàcid== (les peces de què estan fetes les proteïnes). Hi ha un codó d'==inici== (==AUG==) i codons d'==aturada|p== (STOP). L'ARN de transferència que porta cada aminoàcid té un ==anticodó==: tres lletres que encaixen amb el codó per ==complementarietat==. Com que l'ARN no té T, en comptes de T fa servir ==U==.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Del ==genotip== al ==fenotip==",
      text: "El ==genotip== és la informació escrita a l'ADN (l'==ordre de les lletres==); el ==fenotip== és la característica observable (la sang normal o falciforme, el color dels ulls…). L'ordre de les lletres decideix l'ordre dels ==aminoàcids==, que decideix la ==forma== de la proteïna, que decideix si ==funciona== bé. Per això la informació és l'==ordre== de les lletres, no les lletres soltes: com a ==A-D-N-A== i ==N-A-D-A==, les mateixes lletres en un altre ordre volen dir coses diferents.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Una lletra ho pot canviar tot: la ==mutació==",
      text: "Una ==mutació== és un canvi en la seqüència de l'ADN. A l'==anèmia falciforme== canvia ==una sola lletra== del gen de l'hemoglobina: el codó canvia i, on hi havia d'anar ==glutamat==, hi va ==valina==. La proteïna canvia de forma, els glòbuls vermells prenen ==forma de falç== i la persona té la malaltia. Però ==no totes les mutacions== tenen efecte: si el codó nou dona el ==mateix aminoàcid==, la proteïna no canvia (==mutació silenciosa==). Les mutacions són també la matèria primera de l'==evolució== (SA5).",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: false, title: "El camí de l'ADN a la proteïna", src: "/images/sa3-s3-dogma-detall.svg", note: "Del gen (al nucli) a la característica. L'ADN es copia a ARNm (transcripció, dins el nucli); l'ARNm surt i al ribosoma es llegeix de tres en tres per encadenar aminoàcids i fabricar la proteïna (traducció). La proteïna dona la característica." },
    { id: "Fig.2", apartat: "4", before: false, title: "Una lletra canviada: l'anèmia falciforme", src: "/images/sa3-s3-falciforme.svg", note: "El mateix gen amb una sola lletra diferent. El codó GAG (glutamat) passa a GTG/GUG (valina); la proteïna canvia i el glòbul vermell, rodó i flexible, es torna una falç rígida." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa3-s3-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: després de traduir el gen normal i el mutat, respon per què una sola lletra canviada pot causar una malaltia i quan, en canvi, un canvi de lletra no té cap efecte (mutació silenciosa).",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S3 — De l'ADN a la proteïna",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "6 min",
        phase: "engage",
        instruction: "Omple l'apartat 0: per a què serveix la informació de l'ADN i com creus que el missatge arriba fins a la fàbrica de proteïnes. No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "El camí: transcripció i traducció",
        time: "20 min",
        phase: "explica",
        instruction: "Amb la Fig.1, completa el camí gen → ARNm → proteïna → característica i indica on passa cada pas (transcripció al nucli, traducció al ribosoma).",
        hints: [
          "Transcripció = copiar l'ADN a ARNm (al nucli). Traducció = fabricar la proteïna (al ribosoma).",
          "L'ARNm és el missatger que surt del nucli perquè l'ADN no en surt."
        ]
      },
      {
        apartat: "2",
        title: "Tradueix el codi genètic",
        time: "25 min",
        phase: "explore",
        instruction: "Passa la seqüència d'ADN a ARNm (U en lloc de T), sepаra-la en codons de 3 lletres i, amb la taula de codons, escriu la proteïna.",
        hints: [
          "Recorda la complementarietat i que l'ARN fa servir U en lloc de T.",
          "Cada 3 lletres (codó) = 1 aminoàcid. Comença per AUG (inici)."
        ]
      },
      {
        apartat: "3",
        title: "Del genotip al fenotip",
        time: "12 min",
        phase: "explica",
        instruction: "Explica amb un exemple com l'ordre de les lletres (genotip) acaba determinant una característica (fenotip). Fes servir la idea A-D-N-A / N-A-D-A.",
        hints: [
          "Ordre de lletres → ordre d'aminoàcids → forma de la proteïna → característica.",
          "Mateixes lletres en un altre ordre = missatge diferent."
        ]
      },
      {
        apartat: "4",
        title: "Una lletra ho canvia tot: la mutació",
        time: "17 min",
        phase: "elabora",
        instruction: "Tradueix el gen MUTAT (anèmia falciforme), marca la lletra i l'aminoàcid que canvien i explica per què això causa la malaltia. Digues quan un canvi de lletra NO tindria efecte.",
        hints: [
          "Compara el gen normal i el mutat l'un al costat de l'altre.",
          "Si el codó nou dona el mateix aminoàcid, la proteïna no canvia (mutació silenciosa)."
        ]
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "multiple",
      text: "Quina diferència hi ha entre transcripció i traducció?",
      options: [
        "La transcripció copia l'ADN a ARNm (al nucli); la traducció fabrica la proteïna llegint l'ARNm (al ribosoma)",
        "La transcripció fabrica la proteïna i la traducció copia l'ADN",
        "Són el mateix procés amb dos noms diferents",
        "La transcripció passa al ribosoma i la traducció al nucli"
      ],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "Un fragment d'ARNm és AUG-GUG-CAC. Fent servir la taula de codons (AUG=Met, GUG=Val, CAC=His), escriu la seqüència d'aminoàcids i explica què és un codó.",
      hint: "Cada grup de 3 lletres (codó) correspon a un aminoàcid."
    },
    {
      id: "q3",
      type: "open",
      text: "A l'anèmia falciforme canvia una sola lletra del gen. Explica, pas a pas, com un canvi tan petit pot fer que una persona estigui malalta.",
      hint: "Segueix el camí: lletra → codó → aminoàcid → proteïna → glòbul vermell → persona."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Què t'ha semblat més difícil: fer la traducció amb la taula de codons o entendre com una lletra pot canviar tota una persona? Ara pots respondre la pregunta de l'inici: com pot ser que canviar una sola lletra ho canviï tot?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Prepara't per al debat de la propera sessió sobre CRISPR (edició genètica): si ara ja saps que canviar una lletra de l'ADN pot curar o causar una malaltia, pensa DOS arguments a favor i DOS en contra d'editar el genoma d'un embrió humà. Anota d'on has tret la informació (recorda la graella de fonts fiables de SA1).",
    deadline: null,
    note: "Connecta el mecanisme (avui: com una lletra canvia la proteïna) amb la decisió ètica (S4: hauríem de reescriure-la nosaltres?)."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: transcripció (ADN→ARNm, al nucli) i traducció (ARNm→proteïna, al ribosoma)",
    "Mira la Fig.1 (camí de l'ADN a la proteïna) i la Fig.2 (la mutació falciforme)",
    "Descarrega la fitxa S3 i practica la traducció: passa una seqüència d'ADN a ARNm, separa-la en codons i tradueix-la amb la taula",
    "Fes l'apartat 4: tradueix el gen mutat, troba la lletra i l'aminoàcid que canvien i explica per què causa la malaltia",
    "Assegura't d'entendre la diferència genotip (ordre de lletres) → fenotip (característica) i què és una mutació silenciosa"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA2", "OA3"],
  competencies: ["CE1", "CE4"],
  criterisAvaluacio: ["1.1", "1.2", "4.1"]
}
