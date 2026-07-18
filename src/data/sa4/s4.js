export const sa4s4 = {
  id: "s4",
  saId: "sa4",
  title: "Herència lligada al sexe i malalties genètiques",
  sessionNumber: 4,
  biome: "sa4",
  duration: "2h",
  engageImage: "/images/sa4-s4-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "L'hemofília (la sang no coagula bé) i el daltonisme (confondre certs colors) tenen una cosa curiosa en comú: afecten MOLTS més homes que dones. No és casualitat ni és que els homes siguin «més febles»: la raó està escrita als cromosomes. Mira aquesta família: l'avi tenia hemofília, cap dels seus fills la té… però un dels seus néts, sí. La malaltia ha «saltat» per la línia de les dones sense que cap d'elles la pateixi. Com pot ser? El repte d'avui: entendre per què un caràcter que viatja pel cromosoma X afecta de manera tan diferent homes i dones, i fer d'assessor de consell genètic per a una parella que vol saber quin risc tenen els seus fills.",
  engageQuestion: "Si l'hemofília o el daltonisme fossin com qualsevol altre caràcter recessiu, afectarien igual homes i dones. Per què no és així? Què tenen d'especial aquests caràcters perquè els homes els pateixin molt més sovint, i les dones els puguin transmetre sense patir-los?",
  engageContext: "A S1 vas aprendre el vocabulari (al·lel, genotip, portador) i a fer pedigrís; a S2 a predir amb el quadre de Punnett; a S3 vas veure que Mendel no ho explica tot (dominància incompleta, codominància, poligènia). Avui afegeixes l'última peça: alguns caràcters viatgen enganxats al cromosoma que decideix el sexe. Descobriràs com es determina el sexe (XX/XY), per què un caràcter recessiu del cromosoma X afecta més els homes, i resoldràs un cas de consell genètic amb pedigrí. També pensaràs sobre les decisions que això obre (bioètica). És l'eina que et faltava per completar el pòster Heredity ID.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Explico amb precisió com es determina genèticament el sexe (XX/XY) i justifico per què és el progenitor masculí qui aporta el cromosoma que decideix el sexe de la descendència.",
      "Argumento per què un caràcter recessiu lligat al cromosoma X afecta molt més els homes que les dones, connectant-ho amb el fet que l'home només té una còpia del gen (hemizigot).",
      "Resolc un cas de consell genètic amb pedigrí lligat al X (hemofília o daltonisme), deduint genotips de portadores i calculant la probabilitat de descendència afectada.",
      "Valoro amb arguments propis els dilemes bioètics del consell genètic i de conèixer la pròpia informació genètica, distingint el que la ciència pot dir del que és una decisió personal."
    ],
    B: [
      "Descric com es determina el sexe amb els cromosomes X i Y i dic quin progenitor aporta la Y.",
      "Explico amb les meves paraules per què l'hemofília i el daltonisme afecten més els homes (només tenen una X).",
      "Omplo un quadre de Punnett d'un cas lligat al X (mare portadora × pare sa) i dic quina proporció de fills i filles pot estar afectada o ser portadora.",
      "Identifico què és una portadora en un pedigrí i explico per què pot transmetre una malaltia sense patir-la."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — SA4 és al 2n trimestre; es manté la bastida a nivell mitjà (com S1–S3).
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Les persones tenim 23 parelles de cromosomes. Una parella són els cromosomes SEXUALS: XX en les dones i XY en els homes. Les altres 22 parelles són els autosomes. Com que la mare és XX, tots els seus òvuls porten una X. El pare és XY: la meitat dels espermatozoides porten X i l'altra meitat Y. Per tant, qui aporta la X o la Y que decidirà el sexe és sempre el PARE.",
      challenge:
        "El cromosoma Y és molt més petit que el X i porta molts menys gens (sobretot el gen SRY, que engega el desenvolupament masculí). Raona quines conseqüències té aquesta asimetria: què passa amb els gens que hi ha al X però NO tenen parella al Y? Relaciona-ho amb per què el sexe genètic dels fills depèn del pare i no de la mare."
    },
    "2": {
      scaffold:
        "Un gen lligat al X és un gen que està al cromosoma X. Les dones (XX) en tenen DUES còpies: si una és sana pot «tapar» l'al·lel malalt → són PORTADORES (sanes però el poden transmetre). Els homes (XY) només tenen UNA X: el que hi hagi al seu únic X s'expressa sí o sí, perquè el Y no en porta còpia. Notació: X^H = sa, X^h = malalt (hemofília). Home sa = X^H Y; home malalt = X^h Y; dona sana = X^H X^H; dona portadora = X^H X^h; dona malalta (rar) = X^h X^h.",
      challenge:
        "Una dona portadora (X^H X^h) es creua amb un home sa (X^H Y). Fes el quadre de Punnett i demostra amb els genotips per què, entre els FILLS (homes), n'hi ha la meitat afectats, però entre les FILLES cap no ho està (encara que la meitat siguin portadores). Explica per què la mateixa proporció d'al·lel «malalt» dóna un resultat tan diferent en homes i en dones."
    },
    "3": {
      scaffold:
        "El consell genètic és l'assessorament que dona un professional a una família per informar-la del risc que un fill tingui una malaltia genètica, a partir de l'historial familiar (pedigrí) i, si cal, de proves genètiques. No decideix per la família: dona la informació (probabilitats) perquè la família decideixi. Per calcular el risc, primer dedueixes els genotips a partir del pedigrí i després fas el creuament.",
      challenge:
        "El consell genètic obre preguntes que la ciència sola no respon: val la pena saber si ets portador d'una malaltia sense cura? Qui hauria de tenir accés a la teva informació genètica (asseguradores, empreses)? Tria una d'aquestes preguntes i escriu un argument a favor i un en contra, distingint clarament què és una dada científica i què és una decisió de valors."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Recuperem el que saps de pedigrís (S1) i de portadors. Abans de veure com viatgen els caràcters pel cromosoma X, posa a prova la teva intuïció.",
    prompts: [
      {
        kind: "write",
        text: "El daltonisme i l'hemofília afecten molts més homes que dones. Se t'acut alguna raó biològica? (pista: pensa en els cromosomes que fan home o dona).",
        starter: "Crec que afecten més els homes perquè…"
      },
      {
        kind: "write",
        text: "En una família, qui decideix si un fill serà nen o nena: el pare, la mare, els dos? Per què ho penses?",
        starter: "Crec que ho decideix… perquè…"
      }
    ]
  },

  // ── EXPLORA (ABP · consell genètic amb pedigrí) ─────────
  exploreActivity: {
    what: "En equip feu d'assessors d'un servei de consell genètic. Rebeu el cas d'una parella que espera tenir fills i té antecedents d'hemofília a la família de la dona (l'avi matern la patia). Heu de: (1) construir/interpretar el pedigrí de la família; (2) deduir si la dona pot ser portadora i amb quina probabilitat; (3) fer el quadre de Punnett del creuament amb la seva parella (home sa); (4) informar la parella del risc per als fills i per a les filles, separadament. Important: doneu INFORMACIÓ (probabilitats i el que signifiquen), no una recomanació del que han de fer.",
    who: { mode: "grup", label: "Equips de 3 (servei de consell genètic)" },
    time: 45,
    note: "Indagació + argumentació: la clau no és memoritzar, sinó ADONAR-SE que en un caràcter lligat al X el sexe canvia completament el risc, i saber-ho comunicar amb honestedat (probabilitat, no certesa; informació, no ordre). Cada equip presenta el seu informe a un altre equip, que fa de «família» i pot demanar aclariments.",
  },
  exploreInstructions: [
    "Construïu el pedigrí: marqueu qui està afectat (avi matern), i deduïu si la mare de la parella i la dona poden ser portadores",
    "Escriviu els genotips amb la notació X^H / X^h per a cada membre que pugueu deduir amb seguretat",
    "Feu el quadre de Punnett del creuament dona (possible portadora) × home sa i separeu el resultat en fills (XY) i filles (XX)",
    "Redacteu l'informe: quin risc té un fill de ser afectat? i una filla? què vol dir «portadora»? Doneu probabilitats, no ordres"
  ],
  exploreDuration: "45 min",
  appSrc: null,
  exploreNote: "Demostració a l'aula: cada equip presenta el seu informe de consell genètic a un altre equip, que fa de família i ha de decidir si l'informe és clar i honest (dona probabilitats, distingeix fills i filles, no els diu què han de fer). Si la «família» no ho entén, l'informe no és prou bo.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "La ==determinació del sexe==: XX i XY",
      text: "De les 23 parelles de cromosomes, una és la dels ==cromosomes sexuals==. Les dones són ==XX== i els homes ==XY==. La mare, com que és XX, només pot posar una ==X== a cada òvul. El pare és XY: la meitat dels espermatozoides porten ==X== i l'altra meitat ==Y==. Per això ==és el pare qui determina el sexe== dels fills (segons si l'espermatozoide que fecunda porta X → nena, o Y → nen). La proporció esperada és ==1 nen : 1 nena== (50%).",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Herència lligada al X==: per què afecta més els homes",
      text: "El cromosoma ==Y== és petit i porta ==pocs gens==; el ==X== en porta molts que el Y ==no== té. Un caràcter ==lligat al X== recessiu (com l'==hemofília== o el ==daltonisme==) es comporta diferent segons el sexe: la dona (==XX==) té dues còpies, així que una X sana pot ==tapar== l'al·lel malalt → és ==portadora== (sana, però el transmet). L'home (==XY==) només té ==una X==: el que hi hagi s'expressa ==sí o sí==, perquè el Y no en porta còpia (diem que és ==hemizigot==). Per això ==els homes pateixen molt més== aquests caràcters: n'hi ha prou amb una sola còpia de l'al·lel malalt.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "Un cas real: ==mare portadora × pare sa==",
      text: "Notació: ==X^H== = al·lel sa, ==X^h== = al·lel de l'hemofília. Una dona ==portadora== (X^H X^h) amb un home ==sa== (X^H Y) pot tenir: filles ==X^H X^H== (sanes) o ==X^H X^h== (portadores) — ==cap filla malalta==; i fills ==X^H Y== (sans) o ==X^h Y== (==hemofílics==). Resultat: ==meitat dels fills afectats==, ==cap filla afectada== (però la meitat portadores). Així la malaltia ==«salta»== generacions: viatja amagada per les dones portadores i apareix en els seus fills homes. (Per això l'avi malalt no té fills malalts, però sí néts.)",
      type: "concept",
      badge: "🧬 Cas hemofília"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "==Consell genètic== i ==bioètica==: informar, no decidir",
      text: "El ==consell genètic== és l'assessorament que rep una família per conèixer el ==risc== que un fill tingui una malaltia genètica, a partir del ==pedigrí== i de proves. La feina de l'assessor és ==donar informació== (probabilitats i què signifiquen), ==no decidir== per la família. Això obre ==dilemes bioètics==: val la pena saber que ets portador d'una malaltia sense cura? qui pot accedir a la teva informació genètica? La ciència diu ==què és probable==; què fer amb aquesta informació és una ==decisió de valors== de cada persona. Fer bona ciència inclou saber ==on acaba el que la ciència pot respondre==.",
      type: "epistemic",
      badge: "⚖️ Ciència i decisions"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: false, title: "Determinació del sexe: qui aporta la X i la Y", src: "/images/sa4-s4-determinacio-sexe.svg", note: "La mare (XX) sempre aporta una X; el pare (XY) aporta X o Y. El quadre de Punnett XX × XY dóna 1 nena (XX) : 1 nen (XY). És el pare qui determina el sexe." },
    { id: "Fig.2", apartat: "2", before: false, title: "Pedigrí lligat al X: mare portadora × pare sa", src: "/images/sa4-s4-pedigri-x.svg", note: "Notació X^H (sa) / X^h (hemofília). Dona portadora (X^H X^h) × home sa (X^H Y): cap filla afectada (la meitat portadores), la meitat dels fills afectats. La malaltia salta generacions via portadores." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa4-s4-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: torna a la família del hook (avi hemofílic, néts afectats) i explica amb els genotips per què la malaltia va saltar la generació dels fills i va reaparèixer en els néts. Després, tanca l'informe de consell genètic separant clarament el risc dels fills i el de les filles.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S4 — Herència lligada al sexe i malalties genètiques",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "8 min",
        phase: "engage",
        instruction: "Omple l'apartat 0: per què creus que l'hemofília i el daltonisme afecten més els homes, i qui decideix el sexe d'un fill. No es corregeix.",
        hints: []
      },
      {
        apartat: "1",
        title: "Determinació del sexe",
        time: "25 min",
        phase: "explore",
        instruction: "Estudia com es determina el sexe (XX/XY) i fes el quadre de Punnett XX × XY. Explica per què és el pare qui determina el sexe.",
        hints: [
          "La mare (XX) només pot posar X; el pare (XY) posa X o Y.",
          "Per tant el sexe depèn de l'espermatozoide del pare: X → nena, Y → nen."
        ]
      },
      {
        apartat: "2",
        title: "Herència lligada al X",
        time: "40 min",
        phase: "explica",
        instruction: "Aprèn la notació X^H / X^h. Resol el creuament mare portadora × pare sa i separa el resultat en fills (XY) i filles (XX). Explica per què afecta més els homes.",
        hints: [
          "L'home només té una X (hemizigot): el que hi ha s'expressa sí o sí.",
          "La dona té dues X: una sana pot tapar la malalta → portadora (sana però la transmet)."
        ]
      },
      {
        apartat: "3",
        title: "Consell genètic i bioètica",
        time: "22 min",
        phase: "elabora",
        instruction: "Redacta l'informe de consell genètic del cas (risc dels fills i de les filles per separat) i escriu un argument bioètic a favor i un en contra sobre conèixer la pròpia informació genètica.",
        hints: [
          "El consell genètic informa del risc (probabilitat), no decideix per la família.",
          "Distingeix el que és una dada científica del que és una decisió de valors."
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
      text: "Per què l'hemofília (recessiva, lligada al X) afecta molt més els homes que les dones?",
      options: [
        "Perquè l'home només té una X: n'hi ha prou amb una còpia de l'al·lel malalt per patir-la",
        "Perquè els homes tenen la sang més dèbil que les dones",
        "Perquè el gen de l'hemofília està al cromosoma Y",
        "Perquè les dones no poden transmetre mai la malaltia"
      ],
      correct: 0
    },
    {
      id: "q2",
      type: "open",
      text: "Una dona portadora (X^H X^h) té fills amb un home sa (X^H Y). Quina proporció de FILLS i de FILLES pot estar afectada? Per què és tan diferent?",
      hint: "Filles: X^H X^H o X^H X^h → cap afectada (meitat portadores). Fills: X^H Y o X^h Y → meitat afectats. Diferent perquè la filla té una segona X que pot tapar l'al·lel malalt; el fill no."
    },
    {
      id: "q3",
      type: "open",
      text: "Un assessor de consell genètic informa una parella que el seu fill té un 50% de probabilitat de patir hemofília. La parella li demana: «I què hem de fer?». Com hauria de respondre l'assessor i per què?",
      hint: "L'assessor dona informació (el risc i què significa), però NO decideix per la família: què fer amb aquesta informació és una decisió personal de valors, no una dada científica."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui pensaves que un caràcter recessiu afecta igual homes i dones? Què t'ha fet canviar d'idea? Quan veus un pedigrí, saps ara quina pista et diu que un caràcter podria estar lligat al sexe (afecta sobretot homes, salta per les dones)? I saps distingir el que la ciència pot dir del que és una decisió personal?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Resol un problema curt de daltonisme (un altre caràcter lligat al X): a partir d'un pedigrí donat, dedueix els genotips i calcula el risc per als fills i les filles d'una parella. Després, acaba de preparar el pòster científic Heredity ID: decideix si el caràcter que has triat podria estar lligat al sexe i com ho argumentaries a partir del teu pedigrí de tres generacions.",
    deadline: null,
    note: "Aprenentatge significatiu: apliques l'herència lligada al X a un cas nou i decideixes com encaixa (o no) en el TEU caràcter real del pòster, que hauràs de defensar en directe."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: determinació del sexe (XX/XY), herència lligada al X, el cas mare portadora × pare sa i el consell genètic",
    "Estudia la Fig.1 (Punnett XX × XY: el pare determina el sexe) i la Fig.2 (pedigrí lligat al X: portadores i fills afectats)",
    "Descarrega la fitxa S4 i resol el quadre de Punnett de l'apartat 2 (mare portadora × pare sa) separant fills i filles",
    "Comprova que entens la idea clau: l'home només té una X (hemizigot), per això un al·lel recessiu del X l'afecta amb una sola còpia; la dona pot ser portadora sana",
    "L'exit tiquet el trobaràs a classe o aquí (apartat EXIT TIQUET); porta el problema de daltonisme resolt"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA4"],
  competencies: ["CE1", "CE4", "CE5"],
  criterisAvaluacio: ["1.2", "4.1", "4.2", "5.3"]
}
