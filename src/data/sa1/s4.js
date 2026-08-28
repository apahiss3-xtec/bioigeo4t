export const sa1s4 = {
  id: "s4",
  saId: "sa1",
  title: "Repte final: el detector al món real",
  sessionNumber: 4,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s4-portada.jpg",
  isFinalSession: true,

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Treu el cas real que has portat de casa (un anunci, una notícia, un consell de salut, un vídeo). Passa'l pel detector davant del grup en 30 segons: què promet? quins senyals hi trobes? És ciència, pseudociència o encara no comprovat?",
  engageQuestion: "El detector no és per aprovar la SA: és per no deixar-te enredar la resta de la teva vida. Avui ho demostres amb un cas TEU, del món real, que ningú t'ha triat.",
  engageContext: "Cada alumne arriba amb un cas real de la seva vida quotidiana (feina a casa de S3). El repte final és analitzar-lo amb tot el que sap la SA i defensar-lo a la fira de casos. Tanquem amb l'autoavaluació per nivells d'assoliment.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Analitzo un cas real que he triat jo aplicant alhora l'escala de certeses, les garanties i els senyals del detector que vam acordar, i n'extrec un veredicte justificat.",
      "Argumento per què el meu cas és ciència, pseudociència o una hipòtesi encara no comprovada, anticipant per què algú el podria classificar diferent.",
      "Faig de revisor del cas d'un altre: hi dono un segon veredicte a cegues i, en comparar-lo, distingeixo si el desacord és sobre la dada o sobre la garantia.",
      "Autoavaluo cada objectiu de la SA amb la prova concreta que el demostra i proposo com faré servir el detector en una situació real meva."
    ],
    B: [
      "Analitzo un cas real que he triat jo fent servir els senyals del detector i li dono un veredicte.",
      "Dic si el meu cas és ciència, pseudociència o encara no comprovat i explico un motiu.",
      "A la fira de casos analitzo el cas d'un company sense saber què n'ha dit, i després comparo el meu veredicte amb el seu.",
      "Valoro el meu aprenentatge de la SA marcant, per cada objectiu, si el domino o necessito repassar-lo, i escric una situació de la meva vida on el detector em podria servir."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Analitza el teu cas amb aquesta graella: (a) Què promet exactament? (b) Nota de certesa de l'1 al 10. (c) En quina garantia es basa qui hi creu (dades, models, hàbits, autoritat, identitat/valors)? (d) Quins senyals del detector hi apareixen? Omple-la abans de decidir el veredicte.",
      challenge:
        "La teva graella té dues files més que la de nivell B: (e) quina prova concreta et faria canviar de veredicte, i (f) què vol dir sobre l'afirmació que no n'existeixi cap. I el veredicte no el pots escriure com una sentència: l'has d'escriure com un argument sencer, en aquest ordre — la dada o el fet en què et fixes, la garantia que hi ha al darrere i què val, i només llavors la conclusió. Busca també la part MÉS defensable del teu cas i explica per què, tot i semblar convincent, no n'hi ha prou."
    },
    "2": {
      scaffold:
        "Per classificar, torna a les dues preguntes clau: es pot posar a prova amb experiments fiables? admet que la corregeixin? Dos SÍ → ciència; dos NO → pseudociència; es POT provar però encara no s'ha fet → encara no comprovat.",
      challenge:
        "Si el teu cas és de frontera (costa de classificar), no ho amaguis: explica quins trets l'acosten a la pseudociència i quins el mantindrien dins d'allò «encara no comprovat», i digues quina prova el resoldria."
    },
    "3": {
      scaffold:
        "Cadascú copia el seu cas i què promet a una targeta del full de retallables (el veredicte NO hi va) i la deixa al seu lloc. Tu revises UNA targeta que no és la teva i n'omples la graella: què promet, UN senyal que hi vegis (amb la frase que t'ho fa dir) i a quin calaix el posaries tu. Tens la frase feta a la fitxa per començar. Al final busques l'autor, li preguntes què hi posava ell i mires si coincidiu.",
      challenge:
        "Tu n'agafes UNA de sola i la treballes a fons: promesa, senyals amb la frase que t'ho fa dir, calaix i la prova que ho tancaria. Ho fas a cegues, només amb el que digui la targeta. Quan després parles amb l'autor, la feina no és veure qui té raó, sinó dir de quina mena és el desacord — sobre la DADA (què diu el cas exactament) o sobre la GARANTIA (si allò ja compta com a prova prou bona) — i com es tancaria."
    },
    "4": {
      scaffold:
        "Per autoavaluar-te, llegeix cada objectiu i sigues sincer/a: marca «ho domino», «a mitges» o «ho he de repassar». Per cada «a mitges» o «ho he de repassar», escriu UNA cosa concreta que faries per millorar.",
      challenge:
        "La teva taula d'autoavaluació té una columna més: la PROVA. Per cada objectiu has d'escriure què has fet o escrit exactament durant la SA que ho demostri (quina sessió, quin apartat, quin cas). Si no trobes la prova, la casella honesta no és «ho domino». I a la reflexió final explica COM ha canviat la teva manera de decidir què és cert des del primer dia, amb un exemple abans/després."
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
    what: "Repte final individual: cada alumne analitza el SEU cas real amb tot el kit de la SA (escala de certeses + garanties + senyals del detector) i n'obté un veredicte classificat (ciència / pseudociència / encara no comprovat). Després, FIRA DE CASOS (45 min): cadascú copia el seu cas i què promet a una TARGETA del full de retallables —sense el veredicte, que es queda a la seva fitxa— i la deixa al seu lloc, de manera que qui revisa jutja a cegues. El professor assigna qui revisa què (així cap cas no es queda sense revisor). Tothom en revisa una: al nivell B amb una graella guiada, al nivell A a fons i afegint de quina mena és el desacord. Després cadascú busca l'autor del cas que ha revisat, comparen els dos veredictes i li deixa una nota de revisió. Tanquem amb l'autoavaluació de la SA.",
    who: { mode: "grup", label: "Anàlisi individual + fira de casos (tota la classe circulant)" },
    time: 45,
    note: "Aquesta és la DEMOSTRACIÓ DE COMPRENSIÓ presencial i final de la SA: s'avalua com apliques el detector a un cas nou triat per tu i com revises el d'un altre, no si el cas ens agrada. La feina es fa i es defensa a l'aula."
  },
  exploreInstructions: [
    "Analitza el teu cas real amb la graella: promesa, nota de certesa, garantia, senyals del detector",
    "Decideix el veredicte: ciència, pseudociència o encara no comprovat, amb un perquè",
    "Copia el cas i què promet a la targeta del full de retallables (sense el veredicte) i deixa-la al teu lloc",
    "Revisa la targeta que t'assignin, a cegues: nivell B amb graella guiada, nivell A a fons",
    "Busca l'autor/a del cas que has revisat, compareu els veredictes i deixa-li la nota de revisió retallable (un punt fort + una millora concreta)",
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
      text: "Ja tens totes les eines de la SA. Per a qualsevol afirmació nova, l'ordre és: 1) posa-li una ==nota de certesa== (1–10), 2) mira en quina ==garantia== es basa qui hi creu (dades, models, hàbits, autoritat, identitat/valors), 3) busca-hi els ==senyals== del detector que vau acordar, i 4) dona un ==veredicte amb un perquè==. Aquest és el múscul que has entrenat tota la SA.",
      type: "synthesis",
      badge: "🧰 Repàs de la SA"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Tres calaixos, no dos: ==ciència==, ==pseudociència== i ==encara no comprovat==",
      text: "L'error més fàcil és tirar-ho tot al calaix de «pseudociència». Recorda els tres calaixos: la ==ciència== es pot provar i admet crítica; la ==pseudociència== promet sense proves —o malgrat les proves en contra— i es tanca a la crítica; allò ==encara no comprovat== es POT provar però encara no s'ha fet, i acceptaria la resposta. La diferència clau no és el tema, és l'==actitud davant la prova==.",
      type: "epistemic"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Quan dos revisors no coincideixen: ==desacord sobre la dada== o ==sobre la garantia==",
      text: "A la fira jutjaràs el cas d'algú altre ==a cegues==, o sigui sense saber què n'ha dit qui el va portar, i pot passar que no coincidiu. Abans de discutir, mira de quina ==mena== és el desacord, perquè no tots es resolen de la mateixa manera. N'hi ha que són sobre la ==dada== —què diu exactament el cas, què s'hi ha mesurat, què hi heu llegit cadascú—, i n'hi ha que són sobre la ==garantia== —tots dos veieu la mateixa dada, però no coincidiu en si allò ja ==compta com a prova prou bona==—. Distingir-los és la feina d'avui; ==com es tanca cadascun ho decidireu vosaltres== a la fitxa i ho posarem en comú al final. A la ciència passa igual, i per això els articles no els publica només qui els escriu: els llegeix abans algú altre.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Conèixer-te: ==el teu perfil== i què t'endus per al curs",
      text: "El detector no serveix de res si el guardes al calaix. La ciència comença per ==conèixer-te==: saber en quines garanties tendeixes a confiar i quan et deixes convèncer massa de pressa. El que valores avui no és una nota: és si ==saps aplicar== aquestes eines sol/a, davant d'un cas que ningú t'ha triat. Aquest és el detector que faràs servir tota la vida.",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: true, title: "El detector d'alerta", src: "/images/sa1-s2-detector.svg", note: "El detector tal com sol quedar en acabar la S2. Si el de la vostra classe és diferent, fes servir el vostre: passa-hi el teu cas real, senyal per senyal." },
    { id: "Fig.2", apartat: "2", before: true, title: "Ciència vs pseudociència", src: "/images/sa1-s1-ciencia-pseudo-fitxa.svg", note: "Les dues preguntes clau per triar el calaix del teu cas." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa1-s4-fitxa-A.html", B: "/fitxes/sa1-s4-fitxa-B.html" },
  retallablesUrl: "/fitxes/sa1-s4-retallables.html",
  teoriaPdfUrl: null,
  rubricUrl: null,
  elaborateNote: "Producte final de la SA: l'anàlisi del teu cas real (graella + veredicte classificat), la revisió a cegues del cas d'un company a la fira i l'autoavaluació honesta del teu aprenentatge. Necessites el full de retallables (targeta del cas + nota de revisió). Tot es fa i es defensa a l'aula.",

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
        time: "25 min",
        phase: "explore",
        instruction: "Omple la graella del teu cas: promesa, nota de certesa, garantia de qui hi creu i senyals del detector. Al nivell A la graella té dues files més, sobre quina prova et faria canviar d'opinió, i el veredicte s'ha d'escriure com un argument sencer (dada → garantia → conclusió).",
        hints: [
          "Comença per la promesa: què diu exactament que passarà o que és cert?",
          "Mira la Fig.1: recorre els senyals un per un i marca només els que hi siguin de veritat."
        ]
      },
      {
        apartat: "2",
        title: "A quin calaix va?",
        time: "15 min",
        phase: "elabora",
        instruction: "Classifica el teu cas: ciència, pseudociència o encara no comprovat. Justifica-ho amb les dues preguntes clau de la Fig.2.",
        hints: [
          "Es pot posar a prova amb experiments? Admet que el corregeixin?",
          "No tot el que no és ciència és pseudociència: potser és «encara no comprovat»."
        ]
      },
      {
        apartat: "3",
        title: "Fira de casos: fas de revisor",
        time: "45 min",
        phase: "elabora",
        instruction: "Copia el teu cas i què promet a una targeta del full de retallables —sense el veredicte— i deixa-la al teu lloc. Tothom en revisa una: al nivell B amb una graella guiada, al nivell A a fons i afegint de quina mena és el desacord. Després es busca l'autor i es comparen els dos veredictes. Tots dos nivells deixen una nota de revisió a la peça retallable.",
        hints: [
          "Que el veredicte no vagi a la targeta no és un joc: si el saps abans, ja no pots saber què hauries dit tu.",
          "A la nota de revisió, ataca l'argument i no la persona: «hi falta…» val, «està poc treballat» no diu res."
        ]
      },
      {
        apartat: "4",
        title: "Autoavaluació de la SA",
        time: "15 min",
        phase: "elabora",
        instruction: "Per cada objectiu de la SA, marca si el domines, a mitges o l'has de repassar. Al nivell A hi ha una columna més: la prova concreta que ho demostra. Acaba amb la reflexió final i on faràs servir el detector.",
        hints: [
          "Sigues sincer/a: marcar «a mitges» amb un pla de millora val més que marcar «ho domino» sense ser-ho.",
          "Pensa en una situació REAL teva del curs on el detector et pugui servir."
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
      hint: "Torna al teu perfil de la S1: quina garantia hi sortia més? Ha canviat res des de llavors?"
    }
  ],
  exitTicketNote: "Exit tiquet de tancament de SA: barreja una comprovació ràpida (q2) amb la reflexió metacognitiva sobre el propi canvi (q1, q3).",

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "De tota la SA, quina eina (l'escala de certeses, les garanties o el detector) creus que faràs servir més sovint fora de classe? Per què aquella i no una altra?",
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
    "Mira la Fig.1 (el detector) i la Fig.2 (ciència vs pseudociència)",
    "Tria un cas real teu (anunci, notícia, consell de salut) i passa'l tu sol/a per la graella de la fitxa S4",
    "Completa l'autoavaluació de la SA a la fitxa: marca què domines i què has de repassar",
    "Fes l'exit tiquet en aquesta mateixa pàgina, a l'apartat EXIT TIQUET"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE2", "CE3", "CE4"],
  // 2.1 reincorporat (revisió 28/08): la targeta del cas de la fira demana
  // explícitament «d'on l'he tret», o sigui que la font sí que s'ha de donar.
  criterisAvaluacio: ["1.1", "1.3", "2.1", "2.2", "4.2"]
}
