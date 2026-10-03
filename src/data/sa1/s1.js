// SA1 · S1 — versió de 3 sessions (21/09/2026).
// Canvis respecte a la versió de 4 (arxivada a SA1-ciencia-pseudociencia/_versio-4-sessions-2026-09/):
//   · l'escala de certeses passa de 10 afirmacions a 8 frases de la vida de cada dia
//     (fora transgènics, homeopatia i similars: l'alumnat no sabia què volien dir);
//   · només se'n justifiquen TRES per escrit (la més certa, la menys i la més dubtosa);
//   · el perfil epistèmic queda en una línia dins l'apartat de garanties;
//   · el DETECTOR (5 senyals) es DONA fet en aquesta sessió, a tots els nivells, i
//     s'estrena amb quatre anuncis curts i controlats (un de ciència com a control).
//     Construir-lo entre tots no funcionava a l'aula (Albert, 21/09/2026).
import { SENYALS_TXT } from "./senyals.js"

export const sa1s1 = {
  id: "s1",
  saId: "sa1",
  title: "Com decideixes què és cert?",
  repteInicial: "Ordenaràs frases de la vida de cada dia de més certa a menys certa, descobriràs en què et bases per creure-te-les i estrenaràs el detector de pseudociència: cinc senyals que et faran servei tot el curs.",
  sessionNumber: 1,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s1-portada.jpg",

  // ── ENGANXA ──────────────────────────────────────────────
  engageChallenge: "Repte ràpid, a mà alçada: qui coneix algú que llegeixi l'horòscop, que cregui que trencar un mirall porta mala sort o que porti una polsera «que dona energia»? Molta gent hi confia. I la pregunta incòmoda: com decideixes TU què és cert i què no?",
  engageQuestion: "A la vida —i a la ciència— res no és 100 % segur: hi ha coses més certes i coses menys certes. Però, en què et bases per decidir quant de segura és una afirmació?",
  engageContext: "Avui no estudiem un contingut de biologia: estudiem com pensem. És l'eina que faràs servir tot el curs.",

  // ── OBJECTIUS PER NIVELL ─────────────────────────────────
  // La C: menys objectius i tasca pròpia; mateixos minuts que la B.
  levelObjectives: {
    A: [
      "Ordeno afirmacions per certesa i dic quina prova concreta faria moure la que més dubtem.",
      "Classifico arguments per garantia i els ordeno de més fort a més feble.",
      "Passo quatre anuncis pel detector i distingeixo el que no n'encén cap.",
      "Invento un anunci de pseudociència i poso a prova el detector d'un company."
    ],
    B: [
      "Ordeno afirmacions de més certa a menys certa i justifico les que més dubto.",
      "Reconec els 5 tipus de garanties en arguments senzills.",
      "Conec els 5 senyals del detector de pseudociència.",
      "Passo anuncis curts pel detector i dic quins senyals s'encenen."
    ],
    C: [
      "Poso cada frase al calaix que li toca: molt certa, depèn o gens certa.",
      "Reconec 3 garanties: dades, autoritat i el que vull creure.",
      "Reconec els 3 senyals del detector en un anunci."
    ]
  },

  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Per a cada tira, pregunta't: algú ho ha comprovat? Com? Si ningú no ho pot comprovar, no pot ser «molt certa» per molt que t'ho creguis. Per justificar: «La poso aquí perquè ___ (ho sabem perquè ___)».",
      challenge:
        "Només n'escrius una: la tira on més ha discrepat el grup. Però no n'hi ha prou amb dir «no hi ha proves»: has de dir QUINA prova concreta la faria pujar o baixar de lloc (què mesuraries, en qui i comparat amb què)."
    },
    "2": {
      scaffold:
        "Pista per classificar: números o mesures → DADES; com funciona una cosa → MODELS; «sempre ha estat així» → HÀBITS; «ho diu X» → AUTORITAT; el que vols o creus → IDENTITAT i VALORS.",
      challenge:
        "A més del tipus de garantia, numera els sis arguments del més fort (1) al més feble (6). Compte amb l'autoritat: no és el mateix un servei meteorològic, que es recolza en dades i models, que un famós."
    },
    "3": {
      scaffold:
        "Llegeix l'anunci buscant paraules concretes: paraula grossa que no explica res → senyal 4; excusa per si no funciona → senyal 2; famosos o testimonis → senyal 3; promet el que desitges → senyal 5; impossible de mesurar → senyal 1. Un dels quatre anuncis no n'encén cap.",
      challenge:
        "Tens els senyals escrits: " + SENYALS_TXT + " Marca els senyals dels quatre anuncis i, per a cada senyal, copia la frase que l'encén. Al final, inventa'n un de pseudociència (dues línies) que encengui almenys tres senyals. Passa'l a un company sense dir-li quins són: si hi troba els mateixos, has guanyat."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ────────────────────────────
  ideesPrevies: {
    startPoint:
      "Sigues sincer/a: no hi ha respostes que restin. Ho compararàs al final de la SA.",
    prompts: [
      {
        kind: "write",
        text: "Escriu una cosa de la qual estiguis molt segur/a. Per què n'estàs tan segur/a?",
        starter: "Estic molt segur/a que… perquè…"
      }
    ]
  },

  // ── APARTAT 1 · ESCALA DE CERTESES ───────────────────────
  exploreActivity: {
    what: "Escala de certeses: cada parella rep un joc de 8 tires (frases de la vida de cada dia) i les ordena sobre la taula de més certa a menys certa. No s'enganxen: a la fitxa només se n'escriuen tres (la més certa, la menys certa i la més dubtosa) amb el perquè. Després, en grup de 4, es comparen els dos ordres i cadascú defensa les diferències.",
    who: { mode: "grup", label: "En parella, després contrast en grup de 4" },
    time: 30,
    note: "El valor és la DISCUSSIÓ: per què li dones aquesta certesa? Les garanties que feu servir per convèncer-vos són el material de l'apartat 2."
  },
  exploreInstructions: [
    "Agafeu el joc de 8 tires (un per parella) i ordeneu-les sobre la taula, de més certa a menys certa",
    "Per a cada tira, pregunteu-vos: algú ho ha comprovat? com?",
    "A la fitxa, escriviu la més certa, la menys certa i la que més heu dubtat, amb el perquè",
    "En grup de 4, compareu els ordres i defenseu les diferències en una frase"
  ],
  exploreMaterials: ["Retallables: 1 joc de 8 tires per parella (reutilitzable)"],
  exploreDuration: "30 min",
  appSrc: null,
  exploreNote: "Sense pantalles: tires i debat.",

  // ── EXPLICA ──────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Res no és ==100 % segur==: hi ha graus de certesa",
      text: "A la vida i a la ciència, les coses no són segures o falses del tot, sinó ==més certes o menys certes==. El que fa pujar la certesa d'una afirmació és que ==algú l'hagi comprovat== i que es pugui tornar a comprovar.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Les ==garanties==: en què basem els nostres arguments",
      text: "Quan volem convèncer algú fem servir ==garanties==. N'hi ha 5 tipus: ==dades|o== (números, mesures), ==models|g== (com funciona un sistema), ==hàbits|b== («sempre ha estat així»), ==autoritat|r== (la fiabilitat d'algú) i ==identitat i valors|p== (el que volem o creiem). Un mateix argument en pot combinar diverses.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "2",
      heading: "No totes les garanties valen igual",
      text: "Les ==dades i els models== donen més certesa que l'autoritat, els hàbits o el que vols creure. Mira quina garantia fas servir més tu: fiar-te sempre d'un sol tipus et fa fàcil d'enganyar.",
      type: "epistemic",
      badge: "🧠 Cognició epistèmica"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "El ==detector de pseudociència==: 5 senyals",
      text: "Les pseudociències semblen ciència, però repeteixen els mateixos trucs. ==1 · No es pot comprovar==: la promesa és vaga o parla d'una cosa impossible de mesurar. ==2 · No admet crítica==: té una excusa per a cada resultat en contra. ==3 · Es basa en autoritat==: famosos, «experts» o testimonis en lloc de dades. ==4 · Sona «científica»==: «quàntic», «energia», «toxines», «natural»… paraules que no expliquen res. ==5 · Apel·la al que vols creure==: s'aprofita del que desitges o et fa por. Amb ==un sol senyal== ja pots sospitar; com més senyals, més clar.",
      type: "concept"
    },
    {
      id: "t5",
      apartat: "3",
      heading: "Estrany no vol dir pseudociència",
      text: "Un anunci pot parlar de medicaments, de bacteris o de coses que sonen rares i ser ==ciència==: el que compta és si ==s'ha posat a prova== amb un grup de comparació i si ==accepta el resultat==. Per això un dels quatre anuncis de la fitxa no encén el detector.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: true, title: "Els 5 tipus de garanties", src: "/images/sa1-s1-garanties.svg", note: "Dades, models, hàbits, autoritat i identitat/valors." },
    { id: "Fig.2", apartat: "3", before: true, title: "El detector de pseudociència: 5 senyals", src: "/images/sa1-s2-detector.svg", note: "El mateix detector que tens a la fitxa. El faràs servir a les tres sessions." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa1-s1-fitxa-A.html", B: "/fitxes/sa1-s1-fitxa-B.html", C: "/fitxes/sa1-s1-fitxa-C.html" },
  retallablesUrl: "/fitxes/sa1-s1-retallables.html",
  teoriaPdfUrl: null,
  elaborateNote: "Fitxa de 2 pàgines (1 full a doble cara). Les tires de l'escala són un joc per parella i no s'enganxen: es poden reaprofitar.",

  fitxaGuide: {
    fitxaName: "Fitxa S1 — Com decideixes què és cert?",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "5 min", phase: "engage",
        instruction: "Escriu una cosa de la qual estiguis molt segur/a i per què. No es corregeix.", hints: [] },
      { apartat: "1", title: "Escala de certeses", time: "30 min", phase: "explore",
        instruction: "En parella, ordeneu les 8 tires sobre la taula. A la fitxa, escriviu-ne tres amb el perquè (a la A, només la més discutida i la prova que la mouria). Després, contrast en grup de 4.",
        hints: [
          "No et fixis en si la frase t'agrada: fixa't en si algú ho ha comprovat.",
          "«Depèn» és una resposta vàlida si dius de què depèn."
        ] },
      { apartat: "2", title: "Les garanties", time: "20 min", phase: "explica",
        instruction: "Classifica els sis arguments de «demà plourà» segons la garantia (a la A, a més, ordena'ls per força). Mira la Fig.1.",
        hints: [
          "Un mateix argument pot fer servir més d'una garantia.",
          "Pregunta clau: es podria comprovar amb una mesura, o és una opinió o un costum?"
        ] },
      { apartat: "3", title: "El detector de pseudociència", time: "35 min", phase: "explica",
        instruction: "Llegeix els 5 senyals del detector (Fig.2) i marca quins s'encenen a cadascun dels quatre anuncis. A la A, inventa'n un per posar a prova el detector d'un company.",
        hints: [
          "Busca les paraules exactes: si no trobes la frase que encén el senyal, aquell senyal no hi és.",
          "Un dels quatre anuncis no n'encén cap: què té que els altres no tenen?"
        ] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketUrl: { A: "/fitxes/sa1-s1-exit-ticket.html", B: "/fitxes/sa1-s1-exit-ticket.html", C: "/fitxes/sa1-s1-exit-ticket-C.html" },
  exitTicketType: "paper",
  exitTicketCriteri: "2.2",
  exitTicketQuestions: [
    {
      id: "q1",
      type: "open",
      text: "Un anunci diu: «Crema natural amb l'energia de les plantes que et rejoveneix la pell 10 anys. La recomanen 9 de cada 10 influencers.» Quins dos senyals del detector s'hi encenen, i amb quina frase? Què hauries de saber per creure-t'ho?",
      hint: "Per a cada senyal, copia les paraules exactes de l'anunci que l'encenen."
    }
  ],

  metacognition: {
    prompt: "Quin tipus de garantia fas servir tu més sovint per decidir què és cert? Quin senyal del detector et costa més de veure?",
    type: "reflection"
  },

  homework: {
    description: "Caça un cas per a la Sessió 3: un anunci, un post o un consell de salut que prometi una cosa concreta sobre el cos, la salut o la natura. Fes-ne una foto o copia la frase de la promesa. Ha de poder-se dir en una frase: «Promet que…».",
    note: "A la Sessió 2 treballareu casos que us donem fets; el vostre cas el fareu servir a la 3, i l'exposareu oralment a la classe."
  },

  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: graus de certesa, les 5 garanties i els 5 senyals del detector",
    "Descarrega la fitxa S1 i fes-la sol/a (les 8 frases de l'escala són als retallables)",
    "Marca els senyals dels quatre anuncis de l'apartat 3",
    "Caça un cas per a la Sessió 3",
    "Fes l'exit tiquet"
  ],

  oaLinks: ["OA1", "OA2", "OA4"],
  competencies: ["CE1", "CE2"],
  criterisAvaluacio: ["1.1", "2.2"]
}
