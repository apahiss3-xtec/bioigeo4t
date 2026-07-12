export const sa1s2 = {
  id: "s2",
  saId: "sa1",
  title: "Caça a la pseudociència: construïm el detector",
  sessionNumber: 2,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s2-detector.svg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Posada en comú ràpida: cadascú ensenya la pseudociència que ha caçat (polsera magnètica, detox, horòscop, un aliment «que cura»...). En 1 minut: què promet i amb quines garanties intenta convèncer-te? Anem apuntant a la pissarra els trucs que es repeteixen.",
  engageQuestion: "La sessió passada vam veure que no totes les garanties valen igual. Però quan tens una afirmació nova al davant, com decideixes de manera sistemàtica si és ciència o pseudociència? Avui construirem una eina per fer-ho: un detector.",
  engageContext: "Amb els casos que heu caçat a casa, buscarem els patrons que es repeteixen en tota pseudociència. D'aquests patrons en sortirà el «detector» que farem servir tot el curs per no deixar-nos enganyar.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Valoro el grau de certesa d'afirmacions polèmiques reals i argumento en quines garanties es basa la creença social, no només la meva.",
      "Construeixo criteris propis per distingir ciència de pseudociència i els justifico més enllà d'una llista d'exemples.",
      "Aplico el detector a un cas real caçat i preparo una defensa oral que anticipa les objeccions de qui hi creu.",
      "Reconec quan una afirmació NO és ni ciència ni pseudociència, sinó una qüestió que encara no s'ha pogut comprovar."
    ],
    B: [
      "Poso una nota de certesa (1–10) a afirmacions reals i marco en quina garantia em baso.",
      "Identifico els senyals d'alerta d'una pseudociència (no es comprova, no admet crítica, es basa en autoritat o en el que vols creure).",
      "Faig servir el detector per analitzar un cas real caçat i preparo què diré a la defensa oral.",
      "Distingeixo una afirmació científica d'una pseudocientífica fixant-me si es pot posar a prova."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Per posar la nota de certesa, pregunta't: hi ha estudis o dades que ho mesurin? → nota alta. Només ho diu la gent o em fa sentir bé? → nota baixa. Per marcar la garantia, recorda: números o mesures → DADES; com funciona una cosa → MODELS; «sempre s'ha fet» → HÀBITS; «ho diu X» → AUTORITAT; el que vull creure → IDENTITAT i VALORS.",
      challenge:
        "Tria les 3 afirmacions on la teva nota de certesa s'allunya més del que creu la majoria de la societat. Per què creus que molta gent hi confia (o hi desconfia) més que tu? Quina garantia mou la creença social en cada cas?"
    },
    "2": {
      scaffold:
        "El detector té 5 senyals. Per cada un, escriu-hi un exemple curt dels casos que heu caçat: «aquest anunci fa servir el senyal ___ perquè ___». Amb un sol senyal ja pots sospitar; com més senyals encaixen, més clar és.",
      challenge:
        "Cap detector és perfecte. Pensa un cas on una idea SÍ que era ciència però al principi semblava sospitosa (per exemple, una teoria nova que ningú creia). Quin senyal del detector podria fer-nos rebutjar per error una bona idea? Com ho evitaries?"
    },
    "3": {
      scaffold:
        "Per preparar la defensa, omple aquest guió: «El meu cas és ___. Promet ___. Els senyals del detector que hi trobo són ___. Per tant crec que és pseudociència perquè ___». Assaja-ho en veu alta amb un company abans de sortir.",
      challenge:
        "Prepara la defensa pensant en qui HI CREU: quina objecció et posaria («a mi em funciona», «és natural», «ho diu un metge»)? Escriu la teva resposta a aquesta objecció fent servir el vocabulari de les garanties."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de construir el detector, recuperem el que ja saps de la sessió passada i el cas que has caçat a casa.",
    prompts: [
      {
        kind: "write",
        text: "Quin cas de pseudociència has caçat? Escriu en una frase què promet.",
        starter: "He caçat… i promet que…"
      },
      {
        kind: "write",
        text: "Sense mirar la fitxa de S1: quina és la diferència entre ciència i pseudociència, amb les teves paraules?",
        starter: "La diferència és que la ciència…"
      }
    ]
  },

  // ── EXPLORA (ABP · estudi de cas) ────────────────────────
  exploreActivity: {
    what: "Posicionem-nos davant de 15 afirmacions polèmiques reals (des de «les vacunes funcionen» fins a «hi ha números que donen sort»). Individualment, poseu a cadascuna una nota de certesa de l'1 al 10 i marqueu en quin/s tipus de garantia us baseu. Després compareu les notes en grup: no cal posar-vos d'acord, cal ENTENDRE per què discrepeu.",
    who: { mode: "grup", label: "Individual primer, després contrast en grup de 4" },
    time: 35,
    note: "Aquí no hi ha una única resposta correcta a la nota: el que avaluem és si saps JUSTIFICAR la teva certesa amb la garantia adequada. La discrepància dins el grup és el material de la teoria d'avui."
  },
  exploreInstructions: [
    "Individualment, posa una nota de certesa (1–10) a cadascuna de les 15 afirmacions de la fitxa",
    "Marca amb una creu en quin/s tipus de garantia et bases per donar aquesta nota",
    "En grup, compareu les notes: busqueu l'afirmació on més discrepeu i mireu quina garantia fa servir cadascú",
    "Aneu anotant quins «trucs» repeteix la gent per defensar creences poc fonamentades"
  ],
  exploreDuration: "35 min",
  appSrc: null,
  exploreNote: "Sense pantalles: full de treball i debat. El valor és la justificació, no la nota en si.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "La ==certesa social== no sempre és la teva",
      text: "Molta gent dona molta certesa a coses que no la mereixen (horòscops, números de la sort) i poca certesa a coses ben comprovades (vacunes). Sovint la diferència no és la ==prova==, sinó la ==garantia== que mou cadascú: uns decideixen per ==dades==, altres per ==identitat i valors== o per ==autoritat==. Reconèixer-ho és el primer pas per no deixar-te arrossegar.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "El ==detector de pseudociència==: 5 senyals d'alerta",
      text: "Tota pseudociència sol repetir els mateixos trucs. En destaquem ==5 senyals==: (1) ==no es pot comprovar== amb experiments fiables; (2) ==no admet crítica== ni es corregeix mai; (3) es basa en ==autoritat== o testimonis, no en dades; (4) ==sona científica== (fa servir paraules com «quàntic», «energia», «natural»); (5) ==apel·la al que vols creure== (desitjos, valors, identitat). Amb un sol senyal ja pots sospitar; com més senyals, més clar.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "El detector no és infal·lible",
      text: "El detector serveix per aixecar sospites, no per condemnar. Una idea nova de ciència de vegades sembla estranya al principi. La clau està en els ==senyals 1 i 2==: si una afirmació ==es pot posar a prova== i ==admet que la corregeixin==, va pel camí de la ciència, encara que ara soni rara. La pseudociència, en canvi, es tanca a tota crítica.",
      type: "epistemic",
      badge: "🧠 Pensament crític"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "Ni ciència ni pseudociència: allò ==encara no comprovat==",
      text: "Compte: no tot el que no està demostrat és pseudociència. «Existeix vida extraterrestre» no és pseudociència: és una ==hipòtesi contrastable== que encara no s'ha pogut comprovar. La pseudociència és diferent: ==no vol== ser comprovada i rebutja qualsevol prova en contra. Saber distingir-ho és pensament científic de veritat.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "Recordatori: els 5 tipus de garanties", src: "/images/sa1-s1-garanties.svg", note: "Torna-hi per decidir en quina garantia et bases a l'hora de puntuar cada afirmació." },
    { id: "Fig.2", apartat: "2", before: true, title: "El detector de pseudociència", src: "/images/sa1-s2-detector.svg", note: "Els 5 senyals d'alerta. Fes-lo servir per analitzar el cas que has caçat i per preparar la defensa oral." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa1-s2-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Producte de la sessió: apliques el detector al teu cas caçat i prepares una defensa oral d'1 minut que anticipa l'objecció de qui hi creu. La demostració de comprensió és PRESENCIAL (defensa a l'aula), no s'entrega per escrit.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S2 — Caça a la pseudociència: construïm el detector",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies i posada en comú",
        time: "10 min",
        phase: "engage",
        instruction: "Escriu quin cas has caçat i què promet. Recupera amb les teves paraules la diferència entre ciència i pseudociència de la sessió passada.",
        hints: []
      },
      {
        apartat: "1",
        title: "Posicionem-nos: 15 afirmacions",
        time: "35 min",
        phase: "explore",
        instruction: "Posa una nota de certesa (1–10) a cada afirmació i marca la garantia en què et bases. Després compara amb el grup on més discrepeu.",
        hints: [
          "La nota no és «correcta» o «incorrecta»: el que compta és que la sàpigues justificar amb la garantia.",
          "Fixa't en la Fig.1: números o mesures → Dades; «ho diu X» → Autoritat; el que vull creure → Identitat i valors."
        ]
      },
      {
        apartat: "2",
        title: "Construïm el detector",
        time: "25 min",
        phase: "explica",
        instruction: "A partir dels trucs que heu apuntat, completa els 5 senyals d'alerta del detector amb un exemple de cada, agafat dels casos caçats. Fixa't en la Fig.2.",
        hints: [
          "Amb un sol senyal ja pots sospitar; com més senyals encaixen, més clar és que és pseudociència.",
          "El senyal més fort és si es pot comprovar i si admet crítica (senyals 1 i 2)."
        ]
      },
      {
        apartat: "3",
        title: "Apliquem el detector i preparem la defensa",
        time: "25 min",
        phase: "elabora",
        instruction: "Passa el teu cas caçat pels 5 senyals del detector i prepara la defensa oral d'1 minut. Assaja-la amb un company abans de sortir.",
        hints: [
          "Anticipa l'objecció de qui hi creu: «a mi em funciona», «és natural»... Quina resposta hi donaries?",
          "Fes servir el vocabulari d'avui: garanties, comprovació, admetre la crítica."
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
      text: "Explica dos dels cinc senyals del detector de pseudociència i posa un exemple real de cadascun.",
      hint: "Els senyals: no es comprova, no admet crítica, es basa en autoritat, sona científica, apel·la al que vols creure."
    },
    {
      id: "q2",
      type: "multiple",
      text: "«Existeix vida extraterrestre.» Segons el que hem après avui, aquesta afirmació és…",
      options: [
        "Pseudociència, perquè no està demostrada",
        "Una hipòtesi contrastable encara no comprovada",
        "Ciència ja demostrada",
        "Una garantia d'autoritat"
      ],
      correct: 1
    },
    {
      id: "q3",
      type: "open",
      text: "Algú et diu: «la meva polsera magnètica em treu el mal d'esquena perquè a mi em funciona». Aplica-hi el detector i respon-li amb arguments.",
      hint: "Pensa: es pot comprovar? En quina garantia es basa («a mi em funciona»)? Admet que ho posem a prova?"
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Ara que tens el detector: hi ha alguna creença teva que hagi passat pels 5 senyals i que ara veus diferent? El detector t'ha fet dubtar d'alguna cosa que donaves per segura?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Acaba de polir la teva defensa oral d'1 minut: passa el cas caçat pels 5 senyals del detector i escriu l'objecció que et posaria qui hi creu, amb la teva resposta. La defensa es fa a l'aula la propera sessió i és la teva demostració de comprensió (no s'entrega per escrit).",
    deadline: "2026-09-XX",
    note: "Aprenentatge significatiu: no és copiar teoria, sinó aplicar el detector a un cas real i preparar-te per defensar-lo davant els companys."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: la certesa social, els 5 senyals del detector i la diferència entre pseudociència i allò encara no comprovat",
    "Mira la Fig.1 (garanties) i la Fig.2 (detector de pseudociència)",
    "Descarrega la fitxa S2 i fes tu sol/a la taula «Posicionem-nos» (apartat 1) i completa el detector (apartat 2)",
    "Caça un cas i aplica-hi el detector (apartat 3); prepara la defensa oral d'1 minut per a la propera sessió",
    "L'exit tiquet en paper el trobaràs a classe, o fes-lo online aquí (apartat EXIT TIQUET)"
  ],

  // ── COMPETÈNCIES I CRITERIS D'AVALUACIÓ ──────────────────
  oaLinks: ["OA1", "OA2", "OA4"],
  competencies: ["CE2", "CE3", "CE1"],
  criterisAvaluacio: ["2.2", "3.1", "1.1"]
}
