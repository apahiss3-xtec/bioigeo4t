// SA1 · S2 — el PUZLE DE CASOS (grup d'experts). Versió de 3 sessions (21/09/2026).
// Substitueix la S2 «Caça a la pseudociència» i la S3 «El judici als casos» de la
// versió de 4 sessions. Motiu (Albert, a l'aula): l'anàlisi depenia massa de la
// qualitat de la notícia que cada alumne havia trobat. Ara els casos es DONEN,
// treballats a fons en un dossier, i l'alumnat es mou per l'aula en format puzle.
// Dossiers, clau i casos: SA1-ciencia-pseudociencia/_generador/casos.py.
import { SENYALS_TXT } from "./senyals.js"

export const sa1s2 = {
  id: "s2",
  saId: "sa1",
  title: "El puzle de casos",
  repteInicial: "Sis casos reals, sis grups d'experts. Cada grup n'estudia un a fons i després us barregeu: cada expert explica el seu cas i la resta el passa pel detector. Al final, sabreu per què un cas que fa fàstic és ciència i un que sona molt científic no ho és.",
  sessionNumber: 2,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s2-portada.jpg",

  engageChallenge: "Un remei que es ven a les farmàcies, un «miracle» que es beu, una nena de 9 anys que desmunta una teràpia, un bany de peus que es torna marró, un trasplantament que fa fàstic i un horari per menjar que promet anys de vida. Quins són ciència?",
  engageQuestion: "Tenim el detector. Però un detector només serveix si l'has fet servir amb casos de debò, i si saps distingir el que és estrany del que és fals.",
  teacherNotes: "Puzle (jigsaw): 6 grups d'experts de 4 (un cas cadascun) → 4-6 grups puzle amb un expert de cada cas. El cas 5 és el control negatiu (ciència) i el 6 el de frontera (encara no comprovat vs influencer). Dossiers: un per grup, reutilitzables. Clau docent a part. Apartat 3 (29/09/2026): laboratori de la prova justa amb l'app ZenStop (parelles, una pantalla) i posada en comú amb el motlle. Al final, avisa en veu alta: a la S3 exposaran el seu cas oralment (1 min 30 s) i s'avaluarà; el guió és a peu de fitxa.",

  levelObjectives: {
    A: [
      "Analitzo un cas a fons i dissenyo la prova que el decidiria.",
      "Explico al puzle el cas i la prova que el decidiria.",
      "Distingeixo quan el problema és el tema i quan és com es presenta.",
      "Explico què fa justa una prova (comparació, atzar, a cegues, prou gent) i per què cal un control positiu."
    ],
    B: [
      "Analitzo a fons un cas real amb el meu grup d'experts i el passo pel detector.",
      "Explico el meu cas als companys del puzle en 3 minuts.",
      "Passo pel detector els casos que m'expliquen i els poso al calaix que toca.",
      "Explico què té una prova justa: grup de comparació, a l'atzar, a cegues i prou gent."
    ],
    C: [
      "Llegeixo el meu cas amb el grup d'experts i hi trobo els senyals.",
      "Explico el meu cas al puzle amb el guió.",
      "Poso cada cas al seu calaix.",
      "Sé què té una prova justa: dos grups, a l'atzar, a cegues."
    ]
  },

  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Repartiu-vos la feina: llegiu tots junts el requadre «📖 En 3 línies»; després cadascú llegeix un apartat del dossier i l'explica als altres. Assageu en veu alta: què promet → quins senyals (amb la frase) → com es va comprovar → calaix.",
      challenge:
        "Detecta amb els senyals escrits: " + SENYALS_TXT + " Marca'ls al dossier amb la frase que els encén. Després, ets qui dissenya la prova del grup: dos grups, què rep cadascun, qui no sap què, què es mesura i quin resultat faria canviar el calaix. Al puzle, després d'explicar el cas, explica com la muntaries tu i per què així les ganes de creure-hi no poden decidir el resultat."
    },
    "2": {
      scaffold:
        "Marca els senyals i el calaix ABANS que l'expert us digui els seus, i després compareu. Si no coincidiu, pregunteu-li quina frase del dossier encén el senyal.",
      challenge:
        "Tens els senyals escrits: " + SENYALS_TXT + " Per a cada cas, digues quin senyal s'encén i amb quina frase del dossier. Quan un expert acabi, fes-li una pregunta que el faci dubtar: «I si…?». Una bona pregunta ataca la prova, no la persona."
    },
    "3": {
      scaffold:
        "A cada pas de l'app, la paraula per a la fitxa surt al requadre taronja «La trampa». Per al motlle del cas 1: el grup A rep el producte; el grup B, una imitació (boletes de sucre iguals); mesures si es curen de la grip i en quants dies.",
      challenge:
        "Fes també el pas 6 de l'app (Control positiu). Al motlle del cas 6, digues quanta gent hi posaries i per què (recorda el pas 5 amb 4 persones). Després, amb els senyals escrits (" + SENYALS_TXT + "), digues quin senyal encendria la influencer del cas 6 si la prova li sortís en contra."
    }
  },

  ideesPrevies: {
    startPoint:
      "Tindràs el detector i els tres calaixos al davant tota la sessió. Apunta quin és el teu cas d'expert.",
    prompts: [
      {
        kind: "write",
        text: "Quin és el teu cas d'expert (número i títol)?",
        starter: "El meu cas d'expert és el número… :"
      }
    ]
  },

  exploreActivity: {
    what: "Puzle de casos. (1) GRUP D'EXPERTS, 35 min: cada grup rep el dossier d'un cas real (un per grup, no s'hi escriu) i omple la fitxa d'expert: què promet, quins senyals s'encenen i amb quina frase, com s'ha comprovat i a quin calaix va (a la A, la prova que el decidiria). (2) GRUP PUZLE, 45 min: nous grups amb un expert de cada cas; cada expert té 5 minuts (3 per explicar, 2 perquè la resta decideixi) i els altres marquen senyals i calaix ABANS de sentir el veredicte de l'expert.",
    who: { mode: "grup", label: "Grups d'experts (4) → grups puzle (6)" },
    time: 35,
    note: "Els sis casos estan triats perquè no tots encenguin el detector: el cas 5 (ciència que fa fàstic) i el cas 6 (una pregunta encara oberta) són els que fan pensar."
  },
  exploreInstructions: [
    "Seieu amb el vostre grup d'experts i llegiu el dossier del vostre cas",
    "Ompliu la fitxa d'expert: promesa, senyals amb la frase, com s'ha comprovat, calaix",
    "Assageu l'explicació: tothom l'ha de saber fer sol",
    "Al grup puzle, explica el teu cas en 3 minuts i escolta els altres cinc amb el detector a la mà"
  ],
  exploreMaterials: [
    "Dossiers dels 6 casos (1 per grup d'experts, reutilitzables)",
    "Cartell o projecció amb el número de grup d'experts i de grup puzle de cada alumne"
  ],
  exploreDuration: "35 min",
  // L'app és el lab de l'apartat 3 (no de l'EXPLORA): SessionPage la mostra a l'apartat appApartat.
  appSrc: { A: "/apps/app_prova_justa.html", B: "/apps/app_prova_justa.html", C: "/apps/app_prova_justa_C.html" },
  appApartat: "3",
  exploreNote: "Els apartats 1 i 2 van sense pantalles: dossiers en paper i conversa. L'app del laboratori de la prova justa és a l'apartat 3.",

  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Els ==tres calaixos==",
      text: "==CIÈNCIA|g==: s'ha posat a prova amb una prova justa i accepta el resultat, encara que no li agradi. ==PSEUDOCIÈNCIA|r==: es presenta com a ciència, però no es deixa posar a prova o no canvia quan la prova li surt en contra. ==ENCARA NO COMPROVAT|o==: es pot posar a prova i qui ho investiga ho admet, però encara no hi ha prou proves. No és pseudociència: és una pregunta oberta.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "3",
      heading: "Com es comprova ==de debò== si una cosa funciona",
      text: "Una prova justa té quatre peces. (1) Un ==grup de comparació== que no rep el producte o en rep una imitació: si no, no saps si s'hauria curat sol. (2) Repartir la gent ==a l'atzar==: si cadascú tria, els grups ja són diferents abans de començar. (3) ==A cegues==: ningú no sap qui rep què, perquè les ganes que funcioni et fan notar una millora que no hi és. (4) ==Prou gent==, i repetir-ho: amb 4 persones, la sort decideix. Si els dos grups surten igual, la promesa cau. I després, ==acceptar el resultat==, encara que no agradi: això és el que fa el cas 5 i no fa el cas 1.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "El calaix depèn de ==com es presenta==",
      text: "El cas 6 ho mostra: els investigadors diuen «en humans encara no ho sabem» (encara no comprovat), i una influencer diu «està demostrat que t'allarga la vida» (pseudociència). ==El mateix tema== pot anar a calaixos diferents segons què es fa amb la prova.",
      type: "epistemic",
      badge: "🧠 Cognició epistèmica"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: true, title: "El detector de pseudociència", src: "/images/sa1-s2-detector.svg", note: "Els 5 senyals. Els tens també a dalt de la fitxa." },
    { id: "Fig.2", apartat: "3", title: "Anatomia d'una prova justa", src: "/images/sa1-s2-prova-justa.svg", note: "Les quatre peces que has descobert a l'app. Són les del motlle de la fitxa." }
  ],

  fitxaUrl: { A: "/fitxes/sa1-s2-fitxa-A.html", B: "/fitxes/sa1-s2-fitxa-B.html", C: "/fitxes/sa1-s2-fitxa-C.html" },
  sessionMaterials: [
    { id: "dossiers", title: "Dossiers dels 6 casos del puzle", url: "/fitxes/sa1-s2-dossiers-casos.html", who: "alumnat" },
    { id: "clau", title: "Clau docent de la SA1 (casos, tires, anuncis, reserva)", url: "/fitxes/sa1-clau-docent.html", who: "docent" }
  ],
  teoriaPdfUrl: null,
  elaborateNote: "Fitxa de 2 pàgines. Els dossiers dels casos s'imprimeixen un per grup i no s'hi escriu: serveixen per a tots els grups i per al curs vinent.",

  fitxaGuide: {
    fitxaName: "Fitxa S2 — El puzle de casos",
    steps: [
      { apartat: "0", title: "Recordem el detector", time: "5 min", phase: "engage",
        instruction: "Llegeix els 5 senyals i els tres calaixos de dalt de la fitxa i apunta quin és el teu cas d'expert.", hints: [] },
      { apartat: "1", title: "Grup d'experts", time: "35 min", phase: "explore",
        instruction: "Amb el grup del teu cas, llegiu el dossier i ompliu la fitxa d'expert. Tothom l'ha de saber explicar sol.",
        hints: [
          "La frase que encén un senyal ha de ser del dossier, no inventada.",
          "Mireu el requadre «Com s'ha comprovat»: hi havia grup de comparació? Algú sabia qui rebia què?"
        ] },
      { apartat: "2", title: "Grup puzle", time: "45 min", phase: "explica",
        instruction: "Cada expert explica el seu cas en 3 minuts. La resta marca senyals i calaix abans de sentir el veredicte, i després compara.",
        hints: [
          "Si no coincidiu amb l'expert, demana-li la frase del dossier.",
          "Estrany no vol dir fals: mira si s'ha comprovat."
        ] },
      { apartat: "3", title: "Com es comprova de debò?", time: "30 min", phase: "explica",
        instruction: "En parelles, fes els passos de l'app del laboratori (el xiclet ZenStop) i escriu a la fitxa la paraula de cada trampa. Després, omple el motlle de la prova justa amb un cas del puzle.",
        hints: [
          "La paraula de cada pas surt al requadre taronja «La trampa».",
          "Motlle: dos grups a l'atzar, un rep una imitació, ningú no sap qui rep què, i un resultat que faria caure la promesa.",
          "Que una cosa faci fàstic o soni rara no és cap senyal del detector."
        ] }
    ]
  },

  exitTicketUrl: { A: "/fitxes/sa1-s2-exit-ticket.html", B: "/fitxes/sa1-s2-exit-ticket.html", C: "/fitxes/sa1-s2-exit-ticket-C.html" },
  exitTicketType: "paper",
  exitTicketCriteri: "3.3",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Tria un cas del puzle que s'hagi posat a prova (que no sigui el teu). Explica com es va fer la prova, què en van concloure i per què aquella prova era justa.",
      hint: "Pensa amb qui es va comparar i qui sabia què."
    }
  ],

  metacognition: {
    prompt: "Quin dels sis casos t'hauria enganyat abans de la SA? Quin senyal t'ha ajudat més a veure-ho?",
    type: "reflection"
  },

  homework: {
    description: "Porta el cas que has caçat (la foto o la frase de la promesa). Si encara no en tens, busca'n un que prometi una cosa concreta sobre el cos, la salut o la natura. 🎤 A la Sessió 3 l'exposaràs oralment (1 min 30 s) i t'ho avaluaré: assaja-ho una vegada en veu alta seguint el guió de peu de fitxa (què promet → senyals amb la frase → com ho comprovaria amb dos grups → calaix).",
    note: "A la Sessió 3 el passaràs pel detector i l'exposaràs. Si no en portes, hi haurà casos de reserva."
  },

  recoveryInstructions: [
    "Llegeix la teoria: els tres calaixos i les quatre peces d'una prova justa (figura «Anatomia d'una prova justa»)",
    "Fes l'app del laboratori de la prova justa (apartat 3) i omple la taula i el motlle de la fitxa",
    "Obre els dossiers dels 6 casos (enllaç a ELABORA) i llegeix-ne almenys tres",
    "Omple la fitxa d'expert amb un dels casos i la graella del puzle amb els altres",
    "Fes l'exit tiquet"
  ],

  oaLinks: ["OA3", "OA4"],
  competencies: ["CE2", "CE3"],
  criterisAvaluacio: ["2.2", "3.3", "3.4"]
}
