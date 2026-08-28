export const sa1s2 = {
  id: "s2",
  saId: "sa1",
  title: "Caça a la pseudociència: construïm el detector",
  sessionNumber: 2,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s2-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Posada en comú ràpida: cadascú ensenya la pseudociència que ha caçat (polsera magnètica, detox, horòscop, un aliment «que cura»...). En 1 minut: què promet i amb quines garanties intenta convèncer-te? Anem apuntant a la pissarra els trucs que es repeteixen.",
  engageQuestion: "La sessió passada vam veure que no totes les garanties valen igual. Però quan tens una afirmació nova al davant, com decideixes de manera sistemàtica si és ciència o pseudociència? Avui construirem una eina per fer-ho: un detector.",
  engageContext: "Amb els casos que heu caçat a casa, buscarem els patrons que es repeteixen en tota pseudociència. D'aquests patrons en sortirà el «detector» que farem servir tot el curs per no deixar-nos enganyar.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Valoro el grau de certesa d'afirmacions polèmiques reals, argumento en quines garanties es basa la creença social i faig una predicció que es pot equivocar sobre on discreparà la classe.",
      "Dedueixo els senyals del detector a partir de frases reals, els converteixo en preguntes de SÍ o NO i justifico el criteri de cada grup.",
      "Poso el detector a prova amb un control positiu i un de negatiu i el corregeixo quan dona una falsa alarma.",
      "Aplico el detector a un cas real caçat i reconec quan una afirmació NO és ni ciència ni pseudociència, sinó una qüestió que encara no s'ha pogut comprovar."
    ],
    B: [
      "Poso una nota de certesa (1–10) a afirmacions reals i marco en quina garantia em baso.",
      "Identifico els senyals d'alerta d'una pseudociència que hem acordat entre tots i hi poso un exemple real.",
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
        "Abans d'omplir res, fes una PREDICCIÓ que es pugui equivocar: encercla les 6 afirmacions on creus que la teva nota s'allunyarà més de la que hi posaria la majoria de la gent, i digues per què aquestes. La nota JO la poses a totes; la nota MAJORIA, només a aquestes 6. Després tria les 3 amb més distància i esbrina quina garantia mou la creença de la majoria. Al final comprova la predicció amb els teus propis números: en quantes de les 6 hi ha 3 punts o més de distància?"
    },
    "2": {
      scaffold:
        "El detector el munteu entre tots a la posada en comú. Per cada senyal que hi acordeu, escriu-hi un exemple curt dels casos que heu caçat: «aquest anunci fa servir el senyal ___ perquè ___». Amb un sol senyal ja pots sospitar; com més senyals encaixen, més clar és.",
      challenge:
        "Tu no esperes la posada en comú: a la teva fitxa hi ha set frases reals d'anuncis i has de treure'n TU els trucs. Digues amb les teves paraules quin truc fa servir cadascuna i agrupa-les (les que facin el mateix truc, mateixa lletra). Ni el nombre de grups ni la classificació te'ls donem: el que compta és que el criteri sigui clar. Després posa nom a cada truc, escriu la pregunta de SÍ o NO que el detecta, i només llavors compara la teva llista amb el detector que acordi la classe: què t'havies perdut i què tens tu que ells no tenen."
    },
    "3": {
      scaffold:
        "Per preparar la defensa, omple aquest guió: «El meu cas és ___. Promet ___. Els senyals del detector que hi trobo són ___. Per tant crec que és [ciència / pseudociència / encara no comprovat] perquè ___». Assaja-ho en veu alta amb un company abans de sortir.",
      challenge:
        "Abans de fiar-te del detector, passa-li els dos CONTROLS. Els dos textos te'ls donem fets a la fitxa perquè tota la classe comprovi l'eina amb el mateix material: un control positiu (un anunci que ja saps que és pseudociència: el detector s'hi ha d'encendre) i un control negatiu (el resum d'un estudi de ciència ben comprovada: NO s'hi ha d'encendre). Compta quants senyals s'encenen a cadascun. Si se t'encén al control negatiu tens una falsa alarma: decideix si el que has de corregir és el veredicte del cas o com està escrit el senyal, i reescriu el senyal perquè no s'encengui amb la ciència de debò però sí amb el control positiu."
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
    what: "Posicionem-nos davant de 15 afirmacions polèmiques reals (des de «les vacunes funcionen» fins a «hi ha números que donen sort»). Individualment, poseu a cadascuna una nota de certesa de l'1 al 10 i marqueu en quin/s tipus de garantia us baseu. Al nivell A, abans de començar s'encerclen les 6 afirmacions on es creu que la pròpia nota s'allunyarà més de la de la majoria, i només en aquestes s'hi posa una segona nota: la que hi posaria la majoria de la gent. Després compareu les notes (columna JO) en grup: no cal posar-vos d'acord, cal ENTENDRE per què discrepeu; el nivell A, a més, comprova amb els seus números si la predicció s'ha complert.",
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
      heading: "El ==detector de pseudociència==: el construïu vosaltres",
      text: "Tota pseudociència sol repetir els mateixos ==trucs==, i per això es poden llistar. Però aquesta llista ==no te la donem feta==: la treureu vosaltres dels casos reals que heu caçat i de les frases de la fitxa, i de la posada en comú en sortirà ==un sol detector== per a tota la classe (el tindràs complet a partir de la S3). Un senyal només serveix si el pots convertir en una ==pregunta de SÍ o NO== que li puguis fer a qualsevol afirmació: si no saps com comprovar-lo, no és un senyal, és una impressió. I compte amb els senyals que apel·len al que vols creure: aquestes ganes no només et fan acceptar la promesa, també et poden fer ==NOTAR una millora que no hi és==. Per això, quan es vol comprovar de debò si una cosa funciona, la prova s'ha de muntar de manera que ==ningú sàpiga== qui rep el producte de veritat i qui no.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "El detector no és infal·lible: cal posar-lo a prova",
      text: "El detector serveix per aixecar sospites, no per condemnar: una idea que després resulta ser ciència de vegades sona estranya al principi. Com saps si l'eina que has fabricat funciona? Igual que amb qualsevol instrument: la passes per casos on ==ja saps la resposta==, com qui comprova un termòmetre ficant-lo en aigua bullint. Un ==control positiu== és un text que ja saps que és pseudociència —el detector s'hi ==ha d'encendre==— i et diu si l'eina detecta. Un ==control negatiu== és un text de ciència ben comprovada —el detector ==no s'hi ha d'encendre==— i et diu si l'eina s'espanta sense motiu. Quan se t'encén al control negatiu tens una ==falsa alarma==, i llavors t'has de preguntar què és el que falla. Ho decidiràs tu a la fitxa.",
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
    { id: "Fig.2", apartat: "2", title: "El detector de pseudociència (encara buit)", src: "/images/sa1-s2-detector-buit.svg", note: "Ni els noms dels senyals ni quants n'hi ha venen donats: surten de la posada en comú de la classe. Al nivell B els tens ja definits a la fitxa; al nivell A els dedueixes tu a partir de set frases reals i només després els compares amb els de la classe. A partir de la S3 tindràs el detector complet per fer-lo servir." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa1-s2-fitxa-A.html", B: "/fitxes/sa1-s2-fitxa-B.html" },
  teoriaPdfUrl: null,
  elaborateNote: "Producte de la sessió: apliques el detector al teu cas caçat i prepares una defensa oral d'1 minut que anticipa l'objecció de qui hi creu. La demostració de comprensió és PRESENCIAL (defensa a l'aula), no s'entrega per escrit.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S2 — Caça a la pseudociència: construïm el detector",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies i posada en comú",
        time: "10 min (8 al nivell A)",
        phase: "engage",
        instruction: "Escriu quin cas has caçat i què promet. Recupera amb les teves paraules la diferència entre ciència i pseudociència de la sessió passada.",
        hints: []
      },
      {
        apartat: "1",
        title: "Posicionem-nos: 15 afirmacions",
        time: "35 min (30 al nivell A)",
        phase: "explore",
        instruction: "Posa una nota de certesa (1–10) a cada afirmació i marca la garantia en què et bases. Al nivell A, abans de res s'escriu una predicció sobre on discreparà la classe, i cada afirmació porta una segona nota: la que creus que hi posaria la majoria de la gent. Després compareu en grup on més discrepeu de debò.",
        hints: [
          "La nota no és «correcta» o «incorrecta»: el que compta és que la sàpigues justificar amb la garantia.",
          "Fixa't en la Fig.1: números o mesures → Dades; «ho diu X» → Autoritat; el que vull creure → Identitat i valors."
        ]
      },
      {
        apartat: "2",
        title: "Construïm el detector",
        time: "25 min (40 al nivell A)",
        phase: "explica",
        instruction: "A partir dels trucs que heu apuntat, munteu entre tots el detector de la classe i poseu-hi un exemple de cada senyal, agafat dels casos caçats. Al nivell B els senyals venen amb la definició feta; al nivell A es dedueixen abans de la posada en comú, a partir de set frases reals d'anuncis que hi ha a la fitxa, i després es comparen amb els de la classe.",
        hints: [
          "Amb un sol senyal ja pots sospitar; com més senyals encaixen, més clar és que és pseudociència.",
          "Un senyal només val si el pots convertir en una pregunta de SÍ o NO. Si no saps com comprovar-lo, encara no és un senyal."
        ]
      },
      {
        apartat: "3",
        title: "Apliquem el detector i preparem la defensa",
        time: "25 min (28 al nivell A)",
        phase: "elabora",
        instruction: "Passa el teu cas caçat pels senyals del detector i prepara la defensa oral d'1 minut. Al nivell A, abans de tancar-ho, el detector ha de passar dos controls: una afirmació que ja saps que és pseudociència i una que ja saps que és ciència comprovada.",
        hints: [
          "Anticipa l'objecció de qui hi creu: «a mi em funciona», «és natural»... Quina resposta hi donaries?",
          "Si el detector s'encén amb un text que saps que és ciència de debò: de qui és el problema, del text o de l'eina?"
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
      text: "Explica dos dels senyals del detector que heu acordat avui i posa un exemple real de cadascun.",
      hint: "Tria exemples que NO s'hagin dit a classe: han de ser casos teus."
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
    prompt: "Ara que tens el detector: hi ha alguna creença teva que hagi passat pels senyals del detector i que ara veus diferent? El detector t'ha fet dubtar d'alguna cosa que donaves per segura?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Acaba de polir la teva defensa oral d'1 minut: passa el cas caçat pels senyals del detector que heu acordat i escriu l'objecció que et posaria qui hi creu, amb la teva resposta. La defensa es fa a l'aula la propera sessió i és la teva demostració de comprensió (no s'entrega per escrit).",
    deadline: "2026-09-XX",
    note: "Aprenentatge significatiu: no és copiar teoria, sinó aplicar el detector a un cas real i preparar-te per defensar-lo davant els companys."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: la certesa social, com es construeix el detector i la diferència entre pseudociència i allò encara no comprovat",
    "Mira la Fig.1 (garanties) i la Fig.2 (detector de pseudociència)",
    "Descarrega la fitxa S2 i fes tu sol/a la taula «Posicionem-nos» (apartat 1) i completa el detector (apartat 2)",
    "Caça un cas i aplica-hi el detector (apartat 3); prepara la defensa oral d'1 minut per a la propera sessió",
    "Fes l'exit tiquet en aquesta mateixa pàgina, a l'apartat EXIT TIQUET"
  ],

  // ── COMPETÈNCIES I CRITERIS D'AVALUACIÓ ──────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE2", "CE3", "CE1"],
  criterisAvaluacio: ["2.2", "3.1", "1.1"]
}
