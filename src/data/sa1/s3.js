export const sa1s3 = {
  id: "s3",
  saId: "sa1",
  title: "El judici als casos: defensem i classifiquem",
  sessionNumber: 3,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s3-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Rondes de defensa: cadascú surt 1 minut i defensa el veredicte del seu cas caçat fent servir el detector. La resta escolta amb el detector a la mà i, en acabar, aixeca targeta: CIÈNCIA · PSEUDOCIÈNCIA · ENCARA NO COMPROVAT. Si no coincidim, ho discutim.",
  engageQuestion: "Ja tens un veredicte del teu cas. Però un veredicte no val res si no el saps DEFENSAR davant de qui hi creu. Avui posem els casos a judici: què fa que una defensa convenci de veritat?",
  engageContext: "Cada alumne defensa el seu cas en 1 minut (demostració de comprensió PRESENCIAL). Els companys avaluen amb el detector. Després tanquem amb un exercici de classificació i el mural col·lectiu del detector.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Defenso oralment el veredicte d'un cas anticipant les objeccions de qui hi creu i responent-les amb el vocabulari de les garanties.",
      "Avaluo la defensa d'un company amb criteris propis i li dono una crítica que millori l'argument, no que el desqualifiqui.",
      "Classifico casos ambigus i justifico per què alguns NO són ni ciència ni pseudociència, sinó hipòtesis encara no comprovades.",
      "Sintetitzo els criteris del grup en un detector col·lectiu coherent i detecto què hi falta o hi sobra."
    ],
    B: [
      "Defenso oralment el veredicte del meu cas fent servir els 5 senyals del detector.",
      "Escolto la defensa d'un company i marco quins senyals del detector ha fet servir bé.",
      "Classifico 8 disciplines com a ciència o pseudociència i ho justifico amb un motiu.",
      "Ajudo a construir el detector col·lectiu de la classe amb un senyal i un exemple."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Per defensar, segueix el guió: «El meu cas és ___. Promet ___. Al detector hi trobo els senyals ___. Veredicte: ___ perquè ___. Si algú em diu «a mi em funciona», jo responc ___». Assaja-ho una vegada abans de sortir. Parla a poc a poc: 1 minut dona per a 4-5 frases. I quan escoltis els companys, no anotis només «bé» o «malament»: fixa't si han dit (a) què promet el cas, (b) quins senyals del detector hi ha i (c) el veredicte amb un perquè.",
      challenge:
        "Prepara la defensa per al públic MÉS difícil: anticipa DUES objeccions que facin servir garanties diferents (per exemple «a mi em funciona» → identitat/valors, i «ho diu un metge» → autoritat). Per a cadascuna, escriu una rèplica que ataqui l'argument, no la persona, i explica per què aquella garantia concreta no n'hi ha prou per estar-ne segur. En escoltar els companys, proposa a cadascun UNA millora concreta («la teva defensa milloraria si...»)."
    },
    "2": {
      scaffold:
        "Per classificar, fes-ho en dos passos i no vagis directe al veredicte. Primer escriu SÍ o NO a cada pregunta, una per una: (1) es pot posar a prova amb experiments fiables? (2) admet que la corregeixin? Només quan tinguis les dues respostes escrites, decideix: dos SÍ → ciència; dos NO → pseudociència; es pot provar però no s'ha fet → encara no comprovat.",
      challenge:
        "Després de classificar les disciplines de la taula, inventa TU un cas nou de frontera (una afirmació que costi de classificar) i explica per què és difícil: quins senyals l'acosten a la pseudociència i quins la mantenen dins d'allò «encara no comprovat»?"
    },
    "3": {
      scaffold:
        "Per al detector col·lectiu, no repeteixis un senyal que ja hi hagi al mural: mira'l abans d'escriure. Si el teu cas fa servir un truc que encara no hi és, afegeix-lo amb l'exemple concret al costat.",
      challenge:
        "Mira el mural sencer de la classe: hi falta o hi sobra algun senyal? Proposa una millora del detector justificada amb almenys dos casos reals que hagis sentit avui."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de sortir a defensar, recupera la feina que has preparat a casa: el cas, el veredicte i l'objecció de qui hi creu.",
    prompts: [
      {
        kind: "write",
        text: "En una frase: quin és el teu cas i quin veredicte li dones (ciència, pseudociència o encara no comprovat)?",
        starter: "El meu cas és… i el meu veredicte és…"
      },
      {
        kind: "write",
        text: "Quina objecció et posaria algú que hi creu, i què li respondràs?",
        starter: "Em diria… i jo li respondria…"
      }
    ]
  },

  // ── EXPLORA (ABP · estudi de cas) ────────────────────────
  exploreActivity: {
    what: "Rondes de defensa oral. Un per un, cada alumne defensa en 1 minut el veredicte del seu cas caçat fent servir el detector i anticipant una objecció. La resta de la classe escolta amb el detector a la mà i, en acabar cada defensa, vota amb targeta (CIÈNCIA / PSEUDOCIÈNCIA / ENCARA NO COMPROVAT) i comenta un punt fort i una millora.",
    who: { mode: "grup", label: "Individual (defensa) + tot el grup classe (avaluació)" },
    time: 40,
    note: "Aquesta és la DEMOSTRACIÓ DE COMPRENSIÓ presencial de la SA: no s'entrega res per escrit, s'avalua la defensa oral i la qualitat de l'argument (garanties + senyals del detector), no l'opinió."
  },
  exploreInstructions: [
    "Repassa el teu guió de defensa 1 minut abans de sortir (cas, promesa, senyals, veredicte, rèplica a l'objecció)",
    "Defensa el teu cas en 1 minut: parla a poc a poc i fes servir el vocabulari de les garanties i els 5 senyals",
    "Quan escoltis els altres, marca a la fitxa quins senyals del detector fan servir i vota amb la targeta",
    "Dona sempre un punt fort i una possible millora: ataca l'argument, mai la persona"
  ],
  exploreDuration: "40 min",
  appSrc: null,
  exploreNote: "Sense pantalles: defensa oral i avaluació entre iguals. El que avaluem és la qualitat de l'argument, no si el cas ens agrada.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Una bona defensa ataca l'==argument==, no la persona",
      text: "Convèncer no és tenir raó cridant més fort. Una defensa forta fa tres coses: diu ==què promet== el cas, ensenya ==quins senyals== del detector hi troba i dona un ==veredicte amb un perquè==. I quan algú hi creu («a mi em funciona»), no el ridiculitza: li mostra ==quina garantia== està fent servir (identitat, autoritat…) i per què aquella garantia ==no n'hi ha prou== per estar-ne segur.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "==Ciència== o ==pseudociència==: la prova de foc",
      text: "Per classificar qualsevol disciplina, fes-li dues preguntes: es pot ==posar a prova== amb experiments fiables? i ==admet== que la corregeixin? ==Dos SÍ== → ciència. ==Dos NO== → pseudociència. Si es POT provar però encara no s'ha fet, és una hipòtesi ==encara no comprovada==. El que decideix és la resposta a aquestes dues preguntes, no el nom que sona més «científic» ni el prestigi de qui ho diu.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "Ni ciència ni pseudociència: allò ==encara no comprovat==",
      text: "Alerta amb els casos de frontera. «Hi ha vida en altres planetes» no és pseudociència: és una ==hipòtesi contrastable== que encara no s'ha pogut comprovar. La diferència amb la pseudociència és l'==actitud==: la ciència ==vol== ser comprovada i acceptaria la resposta sigui quina sigui; la pseudociència ==es tanca== a tota prova en contra.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "El ==detector col·lectiu== de la classe",
      text: "Amb els senyals i exemples que han sortit a les defenses, construïm ==un sol detector== per a tota la classe: un mural amb els senyals d'alerta i, sota cada un, els millors exemples reals caçats per l'alumnat. Aquest detector és l'==eina de la classe per a tot el curs==: hi tornarem cada cop que una afirmació ens vulgui colar una promesa sense proves.",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "El detector: els 5 senyals d'alerta", src: "/images/sa1-s2-detector.svg", note: "Tingues-lo a la mà mentre defenses i mentre escoltes els companys." },
    { id: "Fig.2", apartat: "2", before: true, title: "Ciència vs pseudociència", src: "/images/sa1-s1-ciencia-pseudo-fitxa.svg", note: "Les dues preguntes clau: es pot posar a prova? admet crítica?" }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa1-s3-fitxa-A.html", B: "/fitxes/sa1-s3-fitxa-B.html" },
  teoriaPdfUrl: null,
  elaborateNote: "Producte de la sessió: la teva defensa oral d'1 minut (demostració de comprensió presencial) + el mural del detector col·lectiu de la classe. Res d'això s'entrega per escrit: es fa i es defensa a l'aula.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S3 — El judici als casos: defensem i classifiquem",
    steps: [
      {
        apartat: "0",
        title: "Preparo la meva defensa",
        time: "8 min",
        phase: "engage",
        instruction: "Recupera el cas, el veredicte i l'objecció que has preparat a casa. Repassa el guió en veu baixa abans de sortir.",
        hints: []
      },
      {
        apartat: "1",
        title: "Rondes de defensa",
        time: "40 min",
        phase: "explore",
        instruction: "Defensa el teu cas en 1 minut amb el detector. Quan escoltis els altres, marca quins senyals fan servir, apunta un punt fort i una millora, i vota amb la targeta.",
        hints: [
          "Parla a poc a poc: 1 minut són 4-5 frases ben dites, no un munt de coses de pressa.",
          "Anticipa l'objecció de qui hi creu i respon a la garantia que fa servir, no a la persona.",
          "En avaluar: crítica constructiva («la teva defensa milloraria si...»), i ataca l'argument, mai la persona."
        ]
      },
      {
        apartat: "2",
        title: "Ciència o pseudociència?",
        time: "20 min",
        phase: "elabora",
        instruction: "Classifica les disciplines de la taula com a ciència o pseudociència i escriu el motiu. Fes servir les dues preguntes clau de la Fig.2.",
        hints: [
          "Escriu primer SÍ o NO a cada una de les dues preguntes, i només després decideix el veredicte.",
          "Recorda que hi ha un tercer calaix: una cosa que es podria comprovar però encara no s'ha comprovat no és pseudociència."
        ]
      },
      {
        apartat: "3",
        title: "El detector col·lectiu",
        time: "12 min",
        phase: "elabora",
        instruction: "Aporta al mural de classe un senyal amb el millor exemple real que hagi sortit a les defenses. Copia a la fitxa el detector final consensuat.",
        hints: [
          "El millor exemple és el més clar, no el més estrany.",
          "Aquest detector el faràs servir tot el curs: que quedi entenedor."
        ]
      }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "web",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Un company defensa que «els horòscops encerten». Escriu una rèplica que ataqui l'argument (no la persona) fent servir el detector i les garanties.",
      hint: "Quins senyals hi trobes? En quina garantia es basa qui hi creu? Es pot posar a prova?"
    },
    {
      id: "q2",
      type: "multiple",
      text: "Quina d'aquestes NO és una pseudociència?",
      options: [
        "L'astrologia",
        "La geologia",
        "L'homeopatia",
        "El reiki"
      ],
      correct: 1
    },
    {
      id: "q3",
      type: "open",
      text: "Per què «pot haver-hi vida en altres planetes» NO és pseudociència, encara que no estigui demostrat?",
      hint: "Torna als tres calaixos i mira quina de les dues preguntes clau falla, i quina no."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Defensar en veu alta t'ha fet veure algun forat en el teu argument que no havies vist quan només l'escrivies? Escoltant els altres, has canviat el veredicte d'algun cas?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Tanquem la SA1 la propera sessió amb el repte final. Repassa el detector col·lectiu de la classe i porta pensat un cas de la teva vida quotidiana (un anunci, una notícia, un consell de salut) on el detector t'hagi servit o et pugui servir.",
    deadline: "2026-09-XX",
    note: "Aprenentatge significatiu: connectar el detector amb una situació real teva, no repetir la teoria."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: què fa una bona defensa, la prova de foc ciència/pseudociència i el detector col·lectiu",
    "Mira la Fig.1 (detector, 5 senyals) i la Fig.2 (ciència vs pseudociència)",
    "Descarrega la fitxa S3 i fes tu sol/a l'exercici de classificació de les disciplines (apartat 2)",
    "Prepara la defensa oral del teu cas i grava-la o assaja-la; l'hauràs de defensar a classe quan tornis",
    "Fes l'exit tiquet en aquesta mateixa pàgina, a l'apartat EXIT TIQUET"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA2", "OA3", "OA4"],
  competencies: ["CE2", "CE3", "CE4"],
  // 3.5 s'ha retirat (revisió agent-alumne 19/08): demana presentar resultats
  // d'experimentació i d'observació de camp amb taules, gràfics i eines
  // digitals, i aquesta sessió és una defensa oral d'1 minut sense pantalles
  // i sense res escrit. El substitueix 1.3, que sí que és argumentar la
  // validesa d'una solució davant d'una situació real.
  criterisAvaluacio: ["1.3", "2.2", "4.2"]
}
