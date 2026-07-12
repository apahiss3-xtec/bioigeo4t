export const sa1s1 = {
  id: "s1",
  saId: "sa1",
  title: "Com decideixes què és cert?",
  sessionNumber: 1,
  biome: "sa1",
  duration: "2h",
  engageImage: "/images/sa1-s1-garanties.svg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  // Repte oral curt, fenomenològic: partim de creences reals molt esteses.
  engageChallenge: "Repte ràpid, a mà alçada: qui coneix algú que llegeixi l'horòscop, prengui homeopatia o cregui en la sort d'un número? Molta gent hi confia. Per quina raó ens creiem coses que la ciència diu que són falses? I la pregunta incòmoda: com decideixes TU què és cert i què no?",
  engageQuestion: "A la vida —i a la ciència— res no és 100% segur: hi ha coses més certes i coses menys certes. Però, en què et bases per decidir quant de segura és una afirmació?",
  engageContext: "Avui no estudiem un contingut de biologia: estudiem com pensem. Aprendràs a mesurar la teva pròpia certesa i a distingir la ciència de la pseudociència. És l'eina que faràs servir tot el curs.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  // A = ampliació (raonament obert, menys bastida) · B = base (més bastida, decreixent)
  // Les paraules "Ampliació"/"Estàndard" NO apareixen enlloc: només la lletra.
  levelObjectives: {
    A: [
      "Justifico el grau de certesa d'una afirmació i argumento per què no totes les garanties valen igual per decidir què és cert.",
      "Classifico els arguments d'un debat segons el tipus de garantia (dades, models, hàbits, autoritat, identitat/valors) i n'analitzo la solidesa.",
      "Analitzo el meu perfil epistèmic: reconec de quines garanties abuso i quins biaixos em poden enganyar.",
      "Argumento amb criteris per què una pràctica és ciència o pseudociència, més enllà d'una llista d'exemples."
    ],
    B: [
      "Ordeno afirmacions de més certa a menys certa i explico amb les meves paraules per què.",
      "Identifico els 5 tipus de garanties (dades, models, hàbits, autoritat, identitat/valors) en exemples donats.",
      "Compto quines garanties faig servir més i dibuixo el meu perfil epistèmic.",
      "Distingeixo ciència de pseudociència a partir de si es fa servir el mètode científic i s'admet la crítica."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffold → es mostra a NIVELL B (suport, molt present a l'inici de curs)
  // challenge → es mostra a NIVELL A (ampliació: pregunta oberta)
  // scaffoldFade: "alta" perquè SA1 és l'arrencada del curs → molta bastida.
  scaffoldFade: "alta",
  apartatExtras: {
    "1": {
      scaffold:
        "Per justificar cada posició, completa: «Poso aquesta afirmació al nivell ___ perquè ___». Fes servir paraules com: segur, probable, depèn de, no hi ha proves, tothom ho diu.",
      challenge:
        "Tria les 2 afirmacions on el teu grup ha discutit més. Per quina raó costa posar-vos d'acord? Quin tipus d'informació us caldria per decidir-ho de manera objectiva?"
    },
    "2": {
      scaffold:
        "Fes servir aquesta pista per classificar cada argument: si parla de números o mesures → DADES; si explica com funciona una cosa → MODELS; si diu «sempre ha estat així» → HÀBITS; si diu «ho diu X» → AUTORITAT; si parla del que vols o creus → IDENTITAT i VALORS.",
      challenge:
        "Creus que totes les garanties valen igual per decidir què és cert? Ordena els 5 tipus de la que dona MÉS certesa a la que en dona menys, i defensa el teu ordre amb un exemple de cada."
    },
    "3": {
      scaffold:
        "Per llegir el teu perfil, respon: quina garantia has fet servir més cops? I quina menys? Compara-ho amb un company i completa: «Jo faig servir molt ___, i això vol dir que ___».",
      challenge:
        "Què passa quan algú decideix gairebé tot per Identitat i Valors o per Autoritat? Posa un exemple real (una notícia, un producte, una creença) on aquest biaix porti a error."
    },
    "4": {
      scaffold:
        "Per decidir ciència o pseudociència, pregunta't: hi ha experiments que ho comprovin? Admet que la puguin criticar i corregir? Si la resposta és NO a totes dues → pseudociència.",
      challenge:
        "L'astrologia i l'astronomia van néixer juntes. Per quina raó una és ciència i l'altra no? Escriu l'argument que faries servir per convèncer algú que confia en l'horòscop."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de començar, sigues sincer/a amb tu mateix/a: no hi ha respostes que restin. L'objectiu és fotografiar com penses ARA per comparar-ho al final de la sessió.",
    prompts: [
      {
        kind: "write",
        text: "Escriu una cosa de la qual estiguis MOLT segur/a, i una de la qual estiguis MOLT poc segur/a. Què fa que una sigui més certa que l'altra?",
        starter: "Estic molt segur/a que… i poc segur/a que… La diferència és…"
      },
      {
        kind: "write",
        text: "Quan vols convèncer algú que tens raó, en què t'acostumes a basar?",
        starter: "M'acostumo a basar en…"
      },
      {
        kind: "write",
        text: "Què vol dir per a tu que una cosa sigui «científica»?",
        starter: "Per a mi, científic vol dir…"
      }
    ]
  },

  // ── EXPLORA (ABP · estudi de cas manipulatiu) ────────────
  exploreActivity: {
    what: "Escala de certeses: rebeu 10 afirmacions retallables (des de «Demà sortirà el Sol» fins a «Si en compro, em tocarà la loteria»). Ordeneu-les de més certa (10) a menys certa (1) i justifiqueu cada posició. Després, poseu-vos d'acord en grup sense canviar el vostre full: marqueu amb fletxes els canvis que accepteu.",
    who: { mode: "grup", label: "Individual primer, després consens en grup de 4" },
    time: 40,
    note: "El valor de l'activitat és la DISCUSSIÓ: per què li dones aquesta certesa? Escoltar els arguments dels altres és el material de la teoria d'avui."
  },
  exploreInstructions: [
    "Retalla les 10 afirmacions de la fitxa",
    "Individualment, ordena-les de més certa (10) a menys certa (1) i escriu per què a cada posició",
    "En grup, discutiu fins a consensuar un ordre comú. NO canviïs el teu full: marca amb fletxes vermelles els canvis que estàs disposat/da a acceptar",
    "Aneu anotant QUINS tipus d'arguments feu servir per convèncer-vos els uns als altres"
  ],
  exploreDuration: "40 min",
  appSrc: null,
  exploreNote: "Sense pantalles: material retallable i debat. La tecnologia aquí és el cap de cadascú.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "Res no és ==100% segur==: hi ha graus de certesa",
      text: "A la vida i a la ciència, les coses no són segures o falses del tot, sinó ==més certes o menys certes==. Quan una cosa és poc segura, diem que és ==incerta==. Aprendre a mesurar la teva pròpia certesa —i saber per què— és el primer pas del pensament científic.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Les ==garanties==: en què basem els nostres arguments",
      text: "Quan volem convèncer algú, fem servir idees que donin força al que diem: són les ==garanties==. N'hi ha de 5 tipus: ==dades|o== (números, mesures), ==models|g== (com funciona un sistema, probabilitats), ==hàbits|b== («sempre ha estat així»), ==autoritat|r== (la fiabilitat d'algú) i ==identitat i valors|p== (desitjos, creences, biaixos). Un mateix argument pot combinar-ne diversos.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "El teu ==perfil epistèmic==: conèixer com penses",
      text: "Si comptes quantes vegades fas servir cada tipus de garantia, obtens el teu ==perfil epistèmic==. Desenvolupar la cognició epistèmica és ==conèixer-te tu mateix==: per no deixar-te enganyar (ni enganyar-te), primer cal saber en què t'acostumes a basar per decidir.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "3",
      heading: "No totes les garanties valen igual",
      text: "Basar-se en ==dades i models== dona més seguretat que basar-se només en ==autoritat, hàbits o identitat==. Quan decidim per allò que volem creure (identitat/valors) o perquè «ho diu algú» (autoritat), és quan més fàcil és equivocar-se. Fer servir un sol tipus de garantia sempre és perillós.",
      type: "epistemic",
      badge: "🧠 Cognició epistèmica"
    },
    {
      id: "t5",
      apartat: "4",
      heading: "==Ciència== vs ==pseudociència==",
      text: "La ==ciència|o== s'obté observant, experimentant i comprovant resultats: formula hipòtesis, les prova amb experiments i les revisa de manera crítica (admet que la corregeixin). La ==pseudociència|r== sembla ciència, però no fa servir el mètode científic: les seves idees no es comproven amb experiments fiables, no admeten crítica i sovint es basen en creences.",
      type: "concept"
    },
    {
      id: "t6",
      apartat: "4",
      heading: "La ciència és revisable (i això és una virtut)",
      text: "Que la ciència canviï els seus models NO és una debilitat: és el que la fa fiable. Una idea que no es pot posar mai a prova ni corregir no és ciència. Per això l'astronomia és ciència i l'astrologia no ho és, encara que van néixer juntes fa segles.",
      type: "epistemic",
      badge: "🔬 Com funciona la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: true, title: "Els 5 tipus de garanties", src: "/images/sa1-s1-garanties.svg", note: "Dades, models, hàbits, autoritat i identitat/valors. Fes-la servir per classificar els arguments que heu usat a l'escala de certeses." },
    { id: "Fig.2", apartat: "4", title: "Ciència vs. pseudociència", src: "/images/sa1-s1-ciencia-pseudo.svg", note: "Els criteris que distingeixen la ciència: mètode, comprovació, obertura a la crítica. Fixa-t'hi abans de classificar els exemples de la fitxa." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa1-s1-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Pregunta central de la fitxa: 'Tria una creença molt estesa (horòscop, homeopatia, un número de la sort...) i argumenta, amb el vocabulari de les garanties, per què no la considerem científica.'",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S1 — Com decideixes què és cert?",
    steps: [
      {
        apartat: "0",
        title: "Idees prèvies",
        time: "10 min",
        phase: "engage",
        instruction: "Omple l'apartat 0 del full: com de segur/a estàs de certes coses i en què et bases per convèncer. No es corregeix; ho compararàs al final.",
        hints: []
      },
      {
        apartat: "1",
        title: "Escala de certeses",
        time: "40 min",
        phase: "explore",
        instruction: "Retalla les 10 afirmacions, ordena-les de més certa a menys certa i justifica cada posició. Després arribeu a un consens de grup marcant amb fletxes els canvis que acceptes.",
        hints: [
          "No et fixis només en si la cosa t'agrada: fixa't en si hi ha manera de comprovar-la.",
          "«Demà sortirà el Sol» i «Si en compro, em tocarà la loteria»: quina de les dues pots preveure amb un model? Aquesta és més certa."
        ]
      },
      {
        apartat: "2",
        title: "Identifiquem tipus d'arguments",
        time: "25 min",
        phase: "explica",
        instruction: "Classifica els arguments de l'apartat 2 segons la garantia: dades, models, hàbits, autoritat o identitat/valors. Fixa't en la Fig.1.",
        hints: [
          "Un mateix argument pot fer servir més d'un tipus de garantia alhora.",
          "Pregunta clau: aquest argument es podria comprovar amb una mesura, o només és una opinió o un costum?"
        ]
      },
      {
        apartat: "3",
        title: "Conec com penso: el meu perfil",
        time: "20 min",
        phase: "explica",
        instruction: "Compta quantes vegades has fet servir cada garantia i dibuixa el teu perfil epistèmic. Compara'l amb un company.",
        hints: [
          "No hi ha un perfil «bo» o «dolent», però pensa: fiar-te només d'un tipus de garantia et fa més fàcil d'enganyar?",
          "Si abuses de la identitat/valors, potser creus coses perquè VOLS que siguin certes."
        ]
      },
      {
        apartat: "4",
        title: "Ciència o pseudociència?",
        time: "25 min",
        phase: "explica",
        instruction: "Llegeix cada descripció (astrologia, biologia, homeopatia, ufologia...) i escriu si és ciència o pseudociència, justificant-ho amb els criteris de la Fig.2.",
        hints: [
          "La pregunta no és si «funciona» segons algú, sinó si es comprova amb experiments fiables i admet crítica.",
          "Si una idea no es pot posar mai a prova ni corregir, no és ciència."
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
      text: "Explica amb les teves paraules per què diem que a la ciència res no és 100% segur, i per què això no la fa menys fiable.",
      hint: "Pensa en la idea de graus de certesa i en que la ciència es revisa i es corregeix a si mateixa."
    },
    {
      id: "q2",
      type: "multiple",
      text: "«Les vacunes funcionen perquè hi ha estudis amb milers de persones que ho mesuren.» Quin tipus de garantia és aquesta?",
      options: [
        "Dades",
        "Autoritat",
        "Hàbits",
        "Identitat i valors"
      ],
      correct: 0
    },
    {
      id: "q3",
      type: "open",
      text: "Tria una creença molt estesa (horòscop, un número de la sort, homeopatia...). Quina garantia creus que fa que molta gent hi confiï, i quina prova et faria falta a tu per estar-ne segur?",
      hint: "Pensa en quina garantia mou la creença social (autoritat, identitat i valors, hàbits) i què hauria de passar per convèncer algú que decideix per dades."
    }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Quin tipus de garantia fas servir tu més sovint per decidir què és cert? T'has adonat avui d'alguna creença teva que donaves per segura i que ara veus amb més dubte?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Caça a casa un cas de pseudociència real (un anunci, una polsera magnètica, un producte «detox», un horòscop...). Anota què promet i amb quina garantia intenta convèncer-te. El portaràs a la propera sessió per construir el detector.",
    deadline: "2026-09-XX",
    note: "Aprenentatge significatiu: buscar un cas real teu, no repetir la teoria."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: graus de certesa, els 5 tipus de garanties, el perfil epistèmic i la diferència ciència/pseudociència",
    "Mira la Fig.1 (els 5 tipus de garanties) i la Fig.2 (ciència vs pseudociència)",
    "Descarrega la fitxa S1 i ordena tu sol/a l'escala de certeses (retallables a part) i marca les garanties",
    "Caça un cas de pseudociència a casa i anota què promet i amb quina garantia et vol convèncer",
    "L'exit tiquet en paper el trobaràs a classe, o fes-lo online aquí (apartat EXIT TIQUET)"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3"],
  competencies: ["CE2", "CE1", "CE3"]
}
