export const sa1s3 = {
  id: "s3",
  saId: "sa1",
  title: "El judici als casos: defensem i classifiquem",
  sessionNumber: 3,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s3-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Rondes de defensa: cadascú surt 1 minut i defensa el veredicte del seu cas caçat fent servir el detector. Es fa en grups d'unes 8 persones: la resta escolta amb el detector a la mà i, en acabar, vota alçant la mà: CIÈNCIA · PSEUDOCIÈNCIA · ENCARA NO COMPROVAT. Si no coincidim, ho discutim.",
  engageQuestion: "Ja tens un veredicte del teu cas. Però un veredicte no val res si no el saps DEFENSAR davant de qui hi creu. Avui posem els casos a judici: què fa que una defensa convenci de veritat?",
  engageContext: "Cada alumne defensa el seu cas en 1 minut (demostració de comprensió PRESENCIAL). Els companys avaluen amb el detector. Després classifiquem afirmacions en TRES calaixos, i tanquem amb la pregunta que decideix el calaix de veritat —què hauria de passar perquè l'afirmació caigués?— i amb el mural col·lectiu del detector.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Defenso oralment el veredicte d'un cas anticipant les objeccions de qui hi creu i responent-les amb el vocabulari de les garanties.",
      "Avaluo la defensa d'un company amb criteris propis i li dono una crítica que millori l'argument, no que el desqualifiqui.",
      "Classifico casos de frontera i justifico per què alguns NO són ni ciència ni pseudociència, sinó hipòtesis encara no comprovades.",
      "Escric quin resultat concret faria caure una afirmació i detecto la frase que la salva a canvi de deixar-la fora de la ciència.",
      "Escric els senyals del detector que la classe acorda, els ordeno per força i detecto què hi falta o hi sobra."
    ],
    B: [
      "Defenso oralment el veredicte del meu cas fent servir els 5 senyals del detector.",
      "Escolto la defensa d'un company i marco quins senyals del detector ha fet servir bé.",
      // Nota: la taula d'aquest apartat NO repeteix les disciplines de la S1: al
      // nivell B són sis afirmacions concretes amb tres calaixos (S1 només en
      // tenia dos i eren disciplines), i al nivell A és 1 cas fàcil + 5 casos
      // de frontera (vegeu apartatExtras["2"].challenge). Cap dels noms de la
      // taula de la S1 no torna a sortir.
      "Classifico afirmacions concretes en tres calaixos (ciència · pseudociència · encara no comprovat) i ho justifico amb un motiu.",
      "Escric quina prova concreta faria caure una afirmació i quina frase diria qui la defensa per salvar-la si el resultat sortís en contra.",
      "Recullo el detector que la classe acorda i hi poso el millor exemple real de cada senyal."
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
        "A la S1 vas classificar DISCIPLINES senceres (la biologia, l'astrologia…) en dos calaixos. Avui no: avui classifiques AFIRMACIONS concretes, i els calaixos són tres. Fes-ho en dos passos i no vagis directe al veredicte. Primer escriu SÍ o NO a cada pregunta, una per una: (1) es pot posar a prova amb experiments fiables? (2) admet que la corregeixin? Només quan tinguis les dues respostes escrites, decideix: la (2) és la que mana —si la (2) és NO, és pseudociència tant si es podria provar com si no—; i si totes dues són SÍ, mira si la prova ja està feta i és clara (ciència) o encara no (encara no comprovat). Cada fila et dona, en cursiva, el que se'n sap ara mateix: la decisió surt d'aquí, no del que et sembli.",
      challenge:
        "La teva taula no porta les mateixes afirmacions que la de nivell B. La primera fila hi és per agafar el ritme; les cinc següents són casos de frontera (acupuntura, vitamina C i refredats, plantes medicinals, pantalles i concentració, grafologia), on hi ha gent formada que discrepa. En algun d'aquests cinc, el cas es pot partir: la promesa pot anar a un calaix i l'explicació que en dona, a un altre — dir-ho és una resposta correcta, no una excusa. Després has de defensar quin dels cinc s'assembla més a la ciència per fora i què li falta per dins: hi ha més d'una resposta defensable i el que compta és l'argument."
    },
    "3": {
      scaffold:
        "No busquis la prova que demostraria que l'afirmació és CERTA: busca la que demostraria que és FALSA. És més fàcil del que sembla si te la imagines com un experiment amb dos grups iguals que només es diferencien en una cosa. I després ve la pregunta que ho decideix tot: si aquell resultat sortís, qui defensa l'afirmació canviaria d'idea, o es buscaria una sortida?",
      challenge:
        "Fes-ho amb els casos difícils: agafa dos dels cinc casos de frontera de l'apartat anterior i escriu, per a cadascun, l'observació o l'experiment concret que el faria canviar de calaix. Després ve la part que compta: davant d'un resultat en contra, escriu la frase exacta que diria qui defensa l'afirmació per salvar-la, i explica què li costa aquesta frase a l'afirmació. Finalment, torna al veredicte que has escrit a l'apartat 0 i que acabes de defensar a l'1: podries dir per endavant quin resultat te'l faria canviar?"
    },
    "4": {
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
    what: "Rondes de defensa oral EN GRUPS D'UNES 8 PERSONES alhora (no davant de tota la classe: així tothom defensa i tothom escolta de prop, i les rondes caben en el temps). Un per un, cada alumne defensa en 1 minut el veredicte del seu cas caçat fent servir el detector i anticipant una objecció. La resta del grup escolta amb el detector a la mà i, en acabar cada defensa, vota alçant la mà (CIÈNCIA / PSEUDOCIÈNCIA / ENCARA NO COMPROVAT) i comenta un punt fort i una millora.",
    who: { mode: "grup", label: "Individual (defensa) + grups de 8 (escolta i avaluació)" },
    time: 35,
    note: "Aquesta és la DEMOSTRACIÓ DE COMPRENSIÓ presencial de la SA: no s'entrega res per escrit, s'avalua la defensa oral i la qualitat de l'argument (garanties + senyals del detector), no l'opinió."
  },
  exploreInstructions: [
    "Repassa el teu guió de defensa 1 minut abans de sortir (cas, promesa, senyals, veredicte, rèplica a l'objecció)",
    "Defensa el teu cas en 1 minut davant del teu grup: parla a poc a poc i fes servir el vocabulari de les garanties i els senyals del detector",
    "Quan escoltis els altres, marca a la fitxa el que et demani el teu full i vota alçant la mà",
    "Dona sempre un punt fort i una possible millora: ataca l'argument, mai la persona"
  ],
  exploreDuration: "35 min",
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
      text: "Avui no classifiques disciplines senceres com a la S1, sinó ==afirmacions concretes== —una mateixa ciència pot fer afirmacions ben comprovades i afirmacions que encara no ho estan. A cada afirmació, dues preguntes: es pot ==posar a prova== amb experiments fiables? i qui la defensa ==admet== que la corregeixin? La segona és la que mana: si la resposta és ==NO==, és pseudociència tant si es podria provar com si no, perquè no acceptarà mai cap resultat en contra. Si a totes dues és ==SÍ==, encara falta saber si la prova ==ja s'ha fet i és clara== (ciència) o ==encara no== (hipòtesi encara no comprovada). El que decideix són aquestes respostes, no el nom que sona més «científic» ni el prestigi de qui ho diu.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "Ni ciència ni pseudociència: allò ==encara no comprovat==",
      text: "Alerta amb els casos de frontera. Hi ha afirmacions que encara no s'han pogut comprovar i que, tot i així, ==no són pseudociència==: són ==hipòtesis contrastables==, es podrien posar a prova i qui les defensa acceptaria el resultat, però la prova encara no s'ha fet o els resultats ==no són concloents==. La diferència amb la pseudociència no és el grau de certesa, és l'==actitud==: la ciència ==vol== ser comprovada; la pseudociència ==es tanca== a tota prova en contra.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    },
    {
      id: "t3b",
      apartat: "3",
      heading: "La pregunta que ho decideix: ==què la faria caure?==",
      text: "Les dues preguntes de l'apartat anterior es poden convertir en ==una sola== i molt més pràctica: ==quin resultat concret== faria que abandonéssim aquesta afirmació? Una afirmació científica ho diu ==per endavant== («si els dos grups milloren igual, m'he equivocat»). I qui la defensa ==accepta el tracte==: si surt aquell resultat, canvia d'idea. Exemple del tracte ben fet: «aquest adob fa créixer més les tomaqueres» → planta dos grups iguals, un amb adob i un sense, i si les de l'adob no creixen més, l'afirmació ==cau==. Una prova concreta diu sempre ==qui es compara amb qui== i ==què es mesura==: «fer un estudi» no és una prova concreta.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    },
    {
      id: "t3c",
      apartat: "3",
      heading: "La sortida d'emergència",
      text: "Quan surt un resultat en contra, gairebé mai no passa que qui hi creu calli: hi ha una jugada molt habitual que consisteix a ==canviar l'afirmació just el necessari== perquè aquell resultat ja no la toqui. A l'aula hauràs d'escriure tu quina és aquesta frase en un cas concret; al nivell A, a més, ==què li costa== a l'afirmació dir-la. Perquè la diferència que compta és aquesta: ==rectificar== davant de dades noves és bona ciència; ==blindar-se== perquè no la puguin tombar mai, no.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "El ==detector col·lectiu== de la classe",
      text: "Amb els senyals i exemples que han sortit a les defenses, construïm ==un sol detector== per a tota la classe: un mural amb els senyals d'alerta i, sota cada un, els millors exemples reals caçats per l'alumnat. Aquest detector és l'==eina de la classe per a tot el curs==: hi tornarem cada cop que una afirmació ens vulgui colar una promesa sense proves.",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "El detector: els 5 senyals d'alerta", src: "/images/sa1-s2-detector.svg", note: "Tingues-lo a la mà mentre defenses i mentre escoltes els companys." },
    // Fig.2 va a l'apartat 0 (recordatori de la S1): és BINÀRIA (ciència /
    // pseudociència) i l'apartat 2 treballa amb TRES calaixos — publicar-la
    // com a suport del 2 contradeia la classificació que s'hi demana.
    { id: "Fig.2", apartat: "0", before: true, title: "Recordatori de la S1: les dues preguntes clau", src: "/images/sa1-s1-ciencia-pseudo-fitxa.svg", note: "Et servirà avui, però compte: avui els calaixos són tres, no dos." },
    // Versió MUDA a la web: la resolta la porta només la fitxa de nivell B.
    // Publicar la resolta donaria fets els tres finals que la fitxa A demana escriure.
    { id: "Fig.3", apartat: "3", before: true, title: "El camí de les tres preguntes", src: "/images/sa1-s3-canviar-idea-alumne.svg", note: "L'important és l'ordre de les preguntes, no anar directe al calaix. Segons el nivell, al teu full el trobaràs amb els finals per escriure o ja resolts." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa1-s3-fitxa-A.html", B: "/fitxes/sa1-s3-fitxa-B.html" },
  teoriaPdfUrl: null,
  elaborateNote: "Producte de la sessió: la teva defensa oral d'1 minut (demostració de comprensió presencial) + el mural del detector col·lectiu de la classe. La defensa no s'entrega per escrit —es fa i s'avalua a l'aula—, però la FITXA SÍ que es recull al final de la sessió: és l'evidència de com has escoltat els companys i de les proves que has escrit a l'apartat 3.",

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
        time: "35 min",
        phase: "explore",
        instruction: "En grups d'unes 8 persones: defensa el teu cas en 1 minut amb el detector i, quan escoltis els altres, omple la taula del teu full i vota alçant la mà. El full es recull al final de la sessió.",
        hints: [
          "Parla a poc a poc: 1 minut són 4-5 frases ben dites, no un munt de coses de pressa.",
          "Anticipa l'objecció de qui hi creu i respon a la garantia que fa servir, no a la persona.",
          "En avaluar: crítica constructiva («la teva defensa milloraria si...»), i ataca l'argument, mai la persona."
        ]
      },
      {
        apartat: "2",
        title: "Al calaix que toca",
        time: "24 min",
        phase: "elabora",
        instruction: "Col·loca cada cas de la taula al seu calaix i escriu el motiu. Fes servir les dues preguntes clau i el que diu la cursiva de cada fila. Segons el teu nivell la taula és diferent: mira't la que tens a la fitxa i no la del company.",
        hints: [
          "Escriu primer SÍ o NO a cada una de les dues preguntes, i només després decideix el veredicte.",
          "Recorda que hi ha un tercer calaix: una cosa que es pot comprovar i acceptaria la resposta, però que encara no s'ha comprovat o no és concloent, no és pseudociència.",
          "Aquí no classifiques disciplines senceres com a la S1, sinó afirmacions concretes: la mateixa disciplina pot fer afirmacions de calaixos diferents."
        ]
      },
      {
        apartat: "3",
        title: "Què la faria caure?",
        time: "25 min",
        phase: "elabora",
        instruction: "Per a cada afirmació que et toqui, escriu el resultat concret que la faria caure i decideix si qui la defensa acceptaria aquest resultat. Les preguntes de tancament són diferents a cada nivell: fes les del teu full.",
        hints: [
          "Busca la prova que la faria caure, no la que la confirmaria: és la que de debò la posa en risc.",
          "Una prova concreta diu QUI es compara amb QUI i QUÈ es mesura. «Fer un estudi» no és una prova concreta.",
          "Si per a alguna afirmació no se t'acut cap resultat que la pugui tombar, no ho deixis en blanc: escriu-ho, perquè és exactament el que t'està dient d'aquella afirmació."
        ]
      },
      {
        apartat: "4",
        title: "El detector col·lectiu",
        time: "15 min",
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
      text: "Un amic diu: «el meu amulet em porta sort; i si algun dia no funciona, és que no hi tenia prou fe». Què li passa, a aquesta afirmació?",
      options: [
        "Que encara no s'ha comprovat, però es podria comprovar demà.",
        "Que és certa mentre no aparegui cap prova clara en contra.",
        "Que ja no hi ha cap resultat possible que la pugui fer caure.",
        "Que li falten dades numèriques per poder ser una bona hipòtesi."
      ],
      correct: 2
    },
    {
      id: "q3",
      type: "open",
      text: "«Escoltar música clàssica mentre dorms fa que recordis millor el que has estudiat.» Escriu la prova concreta que faria caure aquesta afirmació i digues a quin calaix la poses ara mateix, i per què.",
      hint: "Comença per la prova: qui compararies amb qui, i què mesuraries exactament?"
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Defensar en veu alta t'ha fet veure algun forat en el teu argument que no havies vist quan només l'escrivies? I quan has hagut de dir què faria caure cada afirmació: n'hi ha alguna de teva, de les que creus, que no sabries com posar a prova?",
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
    "Llegeix l'apartat EXPLICA: què fa una bona defensa, els tres calaixos, la pregunta «què la faria caure?» i el detector col·lectiu",
    "Mira la Fig.1 (detector, 5 senyals), la Fig.2 (ciència vs pseudociència) i la Fig.3 (el camí de les tres preguntes)",
    "Descarrega la fitxa S3 i fes tu sol/a la classificació d'afirmacions (apartat 2) i les proves que les farien caure (apartat 3)",
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
  // 3.1 s'incorpora el 30/08 amb l'apartat 3 nou («què la faria caure?»): és
  // literalment «diferenciant-les d'aquelles qüestions pseudocientífiques que no
  // admeten comprovació experimental». Abans no estava vinculat perquè cap
  // activitat de la sessió demanava formular la comprovació, només classificar.
  criterisAvaluacio: ["1.3", "2.2", "3.1", "4.2"]
}
