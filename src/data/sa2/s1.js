export const sa2s1 = {
  id: "s1",
  saId: "sa2",
  title: "Una cèl·lula que no s'atura",
  sessionNumber: 1,
  biome: "sa2",
  duration: "2h",
  engageImage: "/images/sa2-s1-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Un familiar rep un informe mèdic. Hi apareix una frase: «s'observen cèl·lules que es divideixen sense control». Espera... i les cèl·lules normals, també es divideixen? Doncs sí: ara mateix, mentre llegeixes això, milions de cèl·lules teves s'estan dividint per curar una ferida o fer-te créixer. Aleshores, quina diferència hi ha entre una divisió normal i una de tumoral?",
  engageQuestion: "Tot el teu cos ha sortit d'UNA sola cèl·lula que s'ha dividit una vegada rere una altra. Si la divisió cel·lular és normal i necessària, per què una cèl·lula tumoral és perillosa?",
  engageContext: "Avui feu de laboratori d'anàlisi: observareu cèl·lules de veritat que s'estan dividint i n'identificareu les fases. Al final de la sessió podreu explicar, amb el que hàgiu vist, per què una cèl·lula que «no s'atura» és un problema.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Identifico les fases de la mitosi en una preparació real i argumento en quin ordre passen a partir del que observo, no de memòria.",
      "Explico per quina raó una cèl·lula ha de dividir-se de manera que les dues filles siguin idèntiques, i què significa perdre el control d'aquest procés.",
      "Estimo quina fase dura més a partir de la proporció de cèl·lules que hi ha en cada fase i justifico el raonament.",
      "Relaciono la divisió sense control amb el càncer i argumento per què és perillós, connectant-ho amb el cas de la biòpsia."
    ],
    B: [
      "Reconec i anomeno les fases de la mitosi (interfase, profase, metafase, anafase, telofase) en imatges de cèl·lules reals.",
      "Explico amb les meves paraules per què el cos necessita dividir cèl·lules (reparar ferides, créixer).",
      "Compto quantes cèl·lules hi ha en cada fase i dic quina fase és més freqüent.",
      "Explico què vol dir que una cèl·lula es divideixi «sense control» i per què això és el que passa en un tumor."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "alta" — SA2 encara és inici de curs (1r trimestre).
  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Per identificar cada fase, fixa't NOMÉS en com està l'ADN (la part fosca): està escampat i difús? → interfase. Es veuen fils gruixuts i separats? → profase. Estan tots alineats al mig? → metafase. S'estan separant cap als dos costats? → anafase. Ja hi ha dos grups clarament separats? → telofase.",
      challenge:
        "Sense mirar encara la solució (Fig.1): ordena tu els deu quadres només pel que veus. Quina pista visual fa MÉS fàcil distingir la cèl·lula amb l'ADN alineat al centre de la que el té separant-se cap als dos costats? Escriu-la com si l'expliquessis a un company que s'hi encalla."
    },
    "2": {
      scaffold:
        "La interfase no és una fase de la mitosi, és el temps ENTRE divisions: la cèl·lula creix i copia el seu ADN. Per això després pot repartir una còpia completa a cada cèl·lula filla. Recorda l'ordre amb: In-Pro-Meta-Ana-Telo.",
      challenge:
        "Per què és imprescindible que l'ADN es copiï SENCER a la interfase, ABANS de començar a repartir-lo? Què passaria si una cèl·lula comencés a dividir-se amb l'ADN copiat només a mitges?"
    },
    "3": {
      scaffold:
        "Pensa en dos exemples concrets: quan et fas un tall al dit, quines cèl·lules s'han de dividir per tancar-lo? I quan eres petit i vas créixer 20 cm, què van fer les teves cèl·lules? En els dos casos la mitosi fa cèl·lules NOVES i IDÈNTIQUES.",
      challenge:
        "Una cèl·lula sana rep senyals de «para de dividir-te» quan ja n'hi ha prou. Una tumoral ignora aquests senyals. Explica, com si fossis el metge que llegeix la biòpsia, per què això fa que un tumor «creixi sense control»."
    },
    "4": {
      scaffold:
        "Si en una preparació hi ha moltes més cèl·lules en interfase que en qualsevol altra fase, vol dir que la interfase és la que dura MÉS temps (com una foto d'una carretera: on hi ha més cotxes és on van més a poc a poc). Compta i compara.",
      challenge:
        "Un investigador troba una mostra amb MOLTES cèl·lules en fase de divisió (mitosi) i molt poques en interfase, comparada amb un teixit sa. Què li fa sospitar això sobre la mostra? Connecta-ho amb l'índex mitòtic i el càncer."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de mirar res pel microscopi, posem sobre la taula el que ja pensem. No es corregeix: és per comparar-ho al final.",
    prompts: [
      {
        kind: "write",
        text: "D'on surten les cèl·lules noves del teu cos? Quan et fas una ferida i es cura, què ha passat exactament?",
        starter: "Les cèl·lules noves surten de… Quan es cura una ferida…"
      },
      {
        kind: "write",
        text: "Has sentit parlar del càncer. Amb el que saps ara, què creus que li passa a una cèl·lula perquè sigui cancerosa?",
        starter: "Crec que una cèl·lula cancerosa…"
      }
    ]
  },

  // ── EXPLORA (ABP · estudi de cas manipulatiu / indagació) ─
  exploreActivity: {
    what: "Feu de laboratori d'anàlisi. Rebeu deu cèl·lules d'un àpex d'arrel de ceba en moments diferents de la divisió (Fig.2), sense cap nom (o bé les observeu al microscopi si en teniu). Heu d'agrupar-les per com es veu l'ADN, posar-les en ordre i comptar quantes n'hi ha de cada tipus.",
    who: { mode: "grup", label: "Parelles de laboratori" },
    time: 40,
    note: "La gràcia és DEDUIR l'ordre vosaltres: mireu com canvia la part fosca (l'ADN) de cada cèl·lula i raoneu què deu passar abans i què després. La teoria vindrà després per confirmar-ho."
  },
  exploreInstructions: [
    "Observeu la preparació al microscopi (o les imatges de la Fig.2) i busqueu cèl·lules que NO es vegin totes iguals per dins",
    "Agrupeu-les segons com està l'ADN: escampat, en fils, alineat al centre, separant-se, o en dos grups",
    "Poseu els grups en l'ordre que creieu que passa la divisió i justifiqueu per què aquest ordre",
    "Compteu quantes cèl·lules hi ha de cada grup: quin és el més nombrós?"
  ],
  exploreDuration: "40 min",
  appSrc: null,
  exploreNote: "Indagació: primer observeu i raoneu; l'ordre correcte de les fases el confirmareu a l'apartat EXPLICA. La demostració a l'aula és defensar en veu alta el vostre ordre i el recompte davant d'una altra parella.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "El ==cicle cel·lular==: la major part del temps, la cèl·lula NO es divideix",
      text: "Una cèl·lula passa la major part de la seva vida en ==interfase|o==: creix, treballa i ==copia tot el seu ADN==. Només de tant en tant entra en ==divisió|p==. Copiar l'ADN abans de dividir-se és el que permet que cada cèl·lula filla en rebi una còpia completa i idèntica.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "La ==mitosi==: quatre fases per repartir l'ADN",
      text: "La mitosi reparteix l'ADN copiat en dues cèl·lules idèntiques, en 4 fases: ==profase|g== (els cromosomes es fan visibles), ==metafase|r== (s'alineen al centre), ==anafase|b== (les dues còpies se separen cap als extrems) i ==telofase|p== (es formen dos nuclis i la cèl·lula es parteix en dues). Ordre: In → Pro → Meta → Ana → Telo.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Per què el cos ==divideix cèl·lules==?",
      text: "La mitosi fa cèl·lules noves ==idèntiques== a l'original. El cos la fa servir per ==reparar== (tancar una ferida, substituir cèl·lules mortes) i per ==créixer== (per això un nadó es fa gran). Cada dia perds i reposes milions de cèl·lules de la pell i de l'intestí gràcies a la mitosi.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Quan es perd el ==control==: el càncer",
      text: "Una cèl·lula sana rep senyals de ==quan dividir-se i quan aturar-se==. En una cèl·lula ==tumoral|r== aquest control falla: es divideix ==sense parar==, encara que no calgui, i forma una massa (un tumor). Per això la frase de la biòpsia —«cèl·lules que es divideixen sense control»— descriu justament una mitosi que ha perdut els frens.",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "4",
      heading: "Comptar cèl·lules ens diu quina fase ==dura més==",
      text: "En una preparació veus una ==foto congelada==: com més cèl·lules trobis en una fase, més temps dura aquesta fase. Per això sempre hi ha moltíssimes cèl·lules en interfase (és la més llarga). Comptar les cèl·lules de cada fase i calcular quina proporció representa la divisió és el que fan servir els laboratoris: és l'==índex mitòtic==.",
      type: "epistemic",
      badge: "🔬 Com es mesura al laboratori"
    }
  ],

  graphicResources: [
    { id: "Fig.2", apartat: "1", before: true, title: "Deu cèl·lules en moments diferents (per ordenar)", src: "/images/sa2-s1-observa-cellules.svg", note: "Cada quadre és una cèl·lula en un moment diferent de la divisió, SENSE nom. Agrupa-les segons com es veu l'ADN, ordena-les i compta quantes n'hi ha de cada tipus." },
    { id: "Fig.1", apartat: "2", before: true, title: "El cicle de la mitosi (la solució)", src: "/images/sa2-s1-cicle-mitosi.svg", note: "Les fases en ordre. Fes-la servir per comprovar l'ordre que has deduït tu i posar nom a cada grup." },
    { id: "Fig.3", apartat: "2", title: "Les mateixes fases en cèl·lules reals", src: "/images/sa2-s1-mitosi-ceba.png", note: "Preparacions reals d'àpex d'arrel de ceba: així es veuen de veritat les fases al microscopi." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa2-s1-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: torna a l'informe de la biòpsia del principi i, amb el que has après, escriu en 4-5 línies què li està passant a aquelles cèl·lules i per què és perillós.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S1 — Una cèl·lula que no s'atura",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "10 min",
        phase: "engage",
        instruction: "Omple l'apartat 0: d'on surten les cèl·lules noves i què creus que passa en una cèl·lula cancerosa. No es corregeix; ho compararàs al final.",
        hints: []
      },
      {
        apartat: "1",
        title: "Laboratori: observa i ordena les fases",
        time: "40 min",
        phase: "explore",
        instruction: "Mira els deu quadres de la Fig.2 (o el microscopi), agrupa les cèl·lules segons com es veu l'ADN, posa-les en l'ordre que creguis i compta quantes n'hi ha de cada grup.",
        hints: [
          "No busquis colors ni noms: fixa't només en la FORMA de la part fosca (l'ADN) de cada cèl·lula.",
          "La cèl·lula amb l'ADN alineat en una fila al centre va JUST abans de la que el té separant-se cap als dos costats."
        ]
      },
      {
        apartat: "2",
        title: "El cicle i les 4 fases",
        time: "25 min",
        phase: "explica",
        instruction: "Amb la Fig.1, comprova el teu ordre i completa el nom de cada fase i què hi passa. Marca on és la interfase.",
        hints: [
          "La interfase no és part de la mitosi: és quan la cèl·lula copia el seu ADN abans de repartir-lo.",
          "Recorda l'ordre amb: In - Pro - Meta - Ana - Telo."
        ]
      },
      {
        apartat: "3",
        title: "Per què dividir-se? I quan es perd el control",
        time: "25 min",
        phase: "explica",
        instruction: "Explica dos motius pels quals el cos divideix cèl·lules i què diferencia una divisió normal d'una tumoral.",
        hints: [
          "Pensa en una ferida que es cura i en un nen que creix: què fan les cèl·lules en tots dos casos?",
          "La cèl·lula tumoral no és que es divideixi «malament»: és que no s'atura quan hauria de fer-ho."
        ]
      },
      {
        apartat: "4",
        title: "Quina fase dura més? + torna a la biòpsia",
        time: "20 min",
        phase: "explica",
        instruction: "A partir del teu recompte, digues quina fase dura més i per què. Després torna a l'informe de la biòpsia i explica, amb el que has après, què li passa a aquelles cèl·lules.",
        hints: [
          "On hi ha més cèl·lules acumulades, més dura aquella fase (com els cotxes en un embús).",
          "A la biòpsia, «sense control» vol dir que la mitosi ha perdut els senyals que la fan aturar."
        ]
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Explica amb les teves paraules per què el cos necessita que les cèl·lules es divideixin, i posa un exemple concret.",
      hint: "Pensa en reparar (una ferida) i en créixer."
    },
    {
      id: "q2",
      type: "multiple",
      text: "En una preparació d'arrel de ceba trobes 80 cèl·lules en interfase i molt poques en cada fase de la mitosi. Què vol dir això?",
      options: [
        "Que la interfase és la fase que dura més temps",
        "Que la ceba està malalta",
        "Que la mitosi no s'ha produït mai",
        "Que hi ha un error a la preparació"
      ],
      correct: 0
    },
    {
      id: "q3",
      type: "open",
      text: "Torna a la frase de la biòpsia: «cèl·lules que es divideixen sense control». Amb el que has après avui, què està passant exactament i per què és perillós?",
      hint: "Relaciona-ho amb la mitosi i amb la pèrdua dels senyals que fan aturar la divisió."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, què pensaves que era el càncer? Ha canviat alguna cosa després de veure com es divideix una cèl·lula normal?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Busca DOS teixits del teu cos: un que es regeneri molt de pressa (la pell, l'intestí, la sang…) i un que gairebé no es regeneri (les neurones del cervell, per exemple). Anota per què creus que un fa molta mitosi i l'altre gairebé no. Ho posarem en comú a la propera sessió, on compararem mitosi i meiosi.",
    deadline: "2026-XX-XX",
    note: "Aprenentatge significatiu: connectar la mitosi amb casos reals del cos, no repetir la definició."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: el cicle cel·lular, les 4 fases de la mitosi, per què el cos divideix cèl·lules i què és el càncer",
    "Mira la Fig.1 (el cicle de la mitosi) i la Fig.2 (cèl·lules reals d'arrel de ceba) i intenta ordenar tu les fases",
    "Descarrega la fitxa S1 i completa l'observació i el recompte amb les imatges de la Fig.2",
    "A casa, busca un teixit que es regeneri de pressa i un que no, i anota per què",
    "L'exit tiquet en paper el trobaràs a classe, o fes-lo online aquí (apartat EXIT TIQUET)"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA3"],
  competencies: ["CE1", "CE3", "CE4"],
  criterisAvaluacio: ["1.1", "3.3", "4.1"]
}
