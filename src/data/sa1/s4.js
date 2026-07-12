export const sa1s4 = {
  id: "s4",
  saId: "sa1",
  title: "Repte final: el detector al món real",
  sessionNumber: 4,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s2-detector.svg",
  isFinalSession: true,

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Treu el cas real que has portat de casa (un anunci, una notícia, un consell de salut, un vídeo). Passa'l pel detector davant del grup en 30 segons: què promet? quins senyals hi trobes? És ciència, pseudociència o encara no comprovat?",
  engageQuestion: "El detector no és per aprovar la SA: és per no deixar-te enredar la resta de la teva vida. Avui ho demostres amb un cas TEU, del món real, que ningú t'ha triat.",
  engageContext: "Cada alumne arriba amb un cas real de la seva vida quotidiana (feina a casa de S3). El repte final és analitzar-lo amb tot el que sap la SA i defensar-lo a la fira de casos. Tanquem amb l'autoavaluació per nivells d'assoliment.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Analitzo un cas real que he triat jo aplicant alhora l'escala de certeses, les garanties i els 5 senyals del detector, i n'extrec un veredicte justificat.",
      "Argumento per què el meu cas és ciència, pseudociència o una hipòtesi encara no comprovada, anticipant per què algú el podria classificar diferent.",
      "Valoro el meu propi aprenentatge de tota la SA contra els objectius i identifico amb honestedat què domino i què encara em falla.",
      "Proposo com faré servir el detector en una situació concreta de la meva vida durant el curs."
    ],
    B: [
      "Analitzo un cas real que he triat jo fent servir els 5 senyals del detector i li dono un veredicte.",
      "Dic si el meu cas és ciència, pseudociència o encara no comprovat i explico un motiu.",
      "Valoro el meu aprenentatge de la SA marcant, per cada objectiu, si el domino o necessito repassar-lo.",
      "Escric una situació de la meva vida on el detector em podria servir."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Analitza el teu cas amb aquesta graella: (a) Què promet exactament? (b) Nota de certesa de l'1 al 10. (c) En quina garantia es basa qui hi creu (dades, models, hàbits, autoritat, identitat/valors)? (d) Quins dels 5 senyals del detector hi apareixen? Omple-la abans de decidir el veredicte.",
      challenge:
        "No et quedis en el veredicte fàcil. Busca la part MÉS defensable del teu cas (allò que fa que la gent s'ho cregui) i explica per què, tot i semblar convincent, no n'hi ha prou. Fes servir les garanties per mostrar exactament on falla l'argument."
    },
    "2": {
      scaffold:
        "Per classificar, torna a les dues preguntes clau: es pot posar a prova amb experiments fiables? admet que la corregeixin? Dos SÍ → ciència; dos NO → pseudociència; es POT provar però encara no s'ha fet → encara no comprovat.",
      challenge:
        "Si el teu cas és de frontera (costa de classificar), no ho amaguis: explica quins trets l'acosten a la pseudociència i quins el mantindrien dins d'allò «encara no comprovat», i digues quina prova el resoldria."
    },
    "3": {
      scaffold:
        "Per autoavaluar-te, llegeix cada objectiu i sigues sincer/a: marca «ho domino», «a mitges» o «ho he de repassar». Per cada «a mitges» o «ho he de repassar», escriu UNA cosa concreta que faries per millorar.",
      challenge:
        "A la reflexió final, no diguis només què has après: explica COM ha canviat la teva manera de decidir què és cert des del primer dia de la SA, amb un exemple abans/després."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Recupera el cas real que has portat de casa. Si no en portes cap, tria'n un ara mateix: un anunci que has vist, un consell de salut que t'han donat o una notícia que t'ha fet dubtar.",
    prompts: [
      {
        kind: "write",
        text: "Quin cas real portes i per què el vas triar?",
        starter: "El meu cas és… i el vaig triar perquè…"
      },
      {
        kind: "write",
        text: "Abans d'analitzar-lo: t'ho creus, no t'ho creus o no ho tens clar?",
        starter: "De moment jo diria que…"
      }
    ]
  },

  // ── EXPLORA (ABP · estudi de cas) ────────────────────────
  exploreActivity: {
    what: "Repte final individual: cada alumne analitza el SEU cas real amb tot el kit de la SA (escala de certeses + garanties + 5 senyals del detector) i n'obté un veredicte classificat (ciència / pseudociència / encara no comprovat). Després, fira de casos: en parelles rotatives (2 min per cas), cadascú presenta el seu cas i rep una pregunta de l'altre. Tanquem amb l'autoavaluació de la SA.",
    who: { mode: "grup", label: "Anàlisi individual + fira de casos en parelles rotatives" },
    time: 45,
    note: "Aquesta és la DEMOSTRACIÓ DE COMPRENSIÓ presencial i final de la SA: s'avalua com apliques el detector a un cas nou triat per tu, no si el cas ens agrada. La feina es fa i es defensa a l'aula."
  },
  exploreInstructions: [
    "Analitza el teu cas real amb la graella: promesa, nota de certesa, garantia, senyals del detector",
    "Decideix el veredicte: ciència, pseudociència o encara no comprovat, amb un perquè",
    "Fira de casos: presenta el teu cas a un company en 2 min i fes-li tu una pregunta al seu",
    "Torna al teu lloc i completa l'autoavaluació de la SA (què domines, què has de repassar)"
  ],
  exploreDuration: "45 min",
  appSrc: null,
  exploreNote: "Sense pantalles obligatòries: l'important és aplicar el detector a un cas nou. Si el cas és un vídeo o un anunci, el pots ensenyar al mòbil al teu company durant la fira.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "El ==kit complet==: com passar qualsevol cas pel detector",
      text: "Ja tens totes les eines de la SA. Per a qualsevol afirmació nova, l'ordre és: 1) posa-li una ==nota de certesa== (1–10), 2) mira en quina ==garantia== es basa qui hi creu (dades, models, hàbits, autoritat, identitat/valors), 3) busca-hi els ==5 senyals== del detector, i 4) dona un ==veredicte amb un perquè==. Aquest és el múscul que has entrenat tota la SA.",
      type: "synthesis",
      badge: "🧰 Repàs de la SA"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Tres calaixos, no dos: ==ciència==, ==pseudociència== i ==encara no comprovat==",
      text: "L'error més fàcil és tirar-ho tot al calaix de «pseudociència». Recorda els tres calaixos: la ==ciència== es pot provar i admet crítica; la ==pseudociència== promet sense proves i es tanca a la crítica; allò ==encara no comprovat== es POT provar però encara no s'ha fet, i acceptaria la resposta. La diferència clau no és el tema, és l'==actitud davant la prova==.",
      type: "epistemic"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Conèixer-te: ==el teu perfil== i què t'endus per al curs",
      text: "El detector no serveix de res si el guardes al calaix. La ciència comença per ==conèixer-te==: saber en quines garanties tendeixes a confiar i quan et deixes convèncer massa de pressa. El que valores avui no és una nota: és si ==saps aplicar== aquestes eines sol/a, davant d'un cas que ningú t'ha triat. Aquest és el detector que faràs servir tota la vida.",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "El detector: els 5 senyals d'alerta", src: "/images/sa1-s2-detector.svg", note: "Passa-hi el teu cas real, senyal per senyal." },
    { id: "Fig.2", apartat: "2", before: true, title: "Ciència vs pseudociència", src: "/images/sa1-s1-ciencia-pseudo.svg", note: "Les dues preguntes clau per triar el calaix del teu cas." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa1-s4-fitxa.pdf",
  teoriaPdfUrl: null,
  rubricUrl: null,
  elaborateNote: "Producte final de la SA: l'anàlisi del teu cas real (graella + veredicte classificat) i la seva presentació a la fira de casos, més l'autoavaluació honesta del teu aprenentatge. Tot es fa i es defensa a l'aula.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S4 — Repte final: el detector al món real",
    steps: [
      {
        apartat: "0",
        title: "El meu cas real",
        time: "5 min",
        phase: "engage",
        instruction: "Escriu quin cas real portes de casa i si, de moment, t'ho creus o no. Encara no l'analitzis: només presenta'l.",
        hints: []
      },
      {
        apartat: "1",
        title: "Passo el cas pel detector",
        time: "20 min",
        phase: "explore",
        instruction: "Omple la graella del teu cas: promesa, nota de certesa, garantia de qui hi creu i senyals del detector. Després escriu el veredicte amb un perquè.",
        hints: [
          "Comença per la promesa: què diu exactament que passarà o que és cert?",
          "Mira la Fig.1: recorre els 5 senyals un per un i marca només els que hi siguin de veritat."
        ]
      },
      {
        apartat: "2",
        title: "A quin calaix va?",
        time: "10 min",
        phase: "elabora",
        instruction: "Classifica el teu cas: ciència, pseudociència o encara no comprovat. Justifica-ho amb les dues preguntes clau de la Fig.2.",
        hints: [
          "Es pot posar a prova amb experiments? Admet que el corregeixin?",
          "No tot el que no és ciència és pseudociència: potser és «encara no comprovat»."
        ]
      },
      {
        apartat: "3",
        title: "Autoavaluació de la SA",
        time: "15 min",
        phase: "elabora",
        instruction: "Per cada objectiu de la SA, marca si el domines, a mitges o l'has de repassar. Acaba amb la reflexió final i on faràs servir el detector.",
        hints: [
          "Sigues sincer/a: marcar «a mitges» amb un pla de millora val més que marcar «ho domino» sense ser-ho.",
          "Pensa en una situació REAL teva del curs on el detector et pugui servir."
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
      text: "En una frase: quin veredicte has donat al teu cas real i quin ha estat el senyal del detector més decisiu per decidir-ho?",
      hint: "Torna a la graella de l'apartat 1: quin senyal ha pesat més?"
    },
    {
      id: "q2",
      type: "multiple",
      text: "Un cas es POT posar a prova amb experiments i acceptaria qualsevol resultat, però encara ningú no ho ha fet. A quin calaix va?",
      options: [
        "Ciència ja comprovada",
        "Pseudociència",
        "Encara no comprovat",
        "No es pot classificar"
      ],
      correct: 2
    },
    {
      id: "q3",
      type: "open",
      text: "Compara com decidies què és cert el primer dia de la SA amb com ho decideixes ara. Quina és la diferència més gran?",
      hint: "Pensa en les garanties: abans potser confiaves més en l'autoritat o els hàbits; i ara?"
    }
  ],
  exitTicketNote: "Exit tiquet de tancament de SA: barreja una comprovació ràpida (q2) amb la reflexió metacognitiva sobre el propi canvi (q1, q3).",

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "De tota la SA, quina eina (l'escala de certeses, les garanties o el detector de 5 senyals) creus que faràs servir més sovint fora de classe? Per què aquella i no una altra?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Tanquem la SA1. Durant la setmana, aplica el detector a UNA afirmació nova que et trobis (xarxes, tele, una conversa) i porta apuntat: quina era, quin veredicte li dones i quin senyal t'ha fet decidir. Ho comentarem en obrir la SA següent.",
    deadline: "2026-09-XX",
    note: "Aprenentatge significatiu i de transferència: fer servir el detector en una situació real nova, no repetir la teoria de classe."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: el kit complet, els tres calaixos (ciència/pseudociència/encara no comprovat) i el perfil epistèmic",
    "Mira la Fig.1 (detector, 5 senyals) i la Fig.2 (ciència vs pseudociència)",
    "Tria un cas real teu (anunci, notícia, consell de salut) i passa'l tu sol/a per la graella de la fitxa S4",
    "Completa l'autoavaluació de la SA a la fitxa: marca què domines i què has de repassar",
    "Fes l'exit tiquet en paper a classe quan tornis, o online aquí (apartat EXIT TIQUET)"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE2", "CE3", "CE4"]
}
