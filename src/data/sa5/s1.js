export const sa5s1 = {
  id: "s1",
  saId: "sa5",
  title: "Safari evolutiu al pati",
  sessionNumber: 1,
  biome: "sa5",
  duration: "2h",
  engageImage: "/images/sa5-s1-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Surt al pati i mira al teu voltant. Les gallines que graten el terra, els plataners retallats en fila, les moreres, els pardals que roben molles, els insectes sota una pedra... Sembla que sempre hagin estat allà, però cadascun té una història. Les gallines vénen d'un ocell salvatge asiàtic que dorm dalt dels arbres perquè hi vola cada nit; les nostres amb prou feines s'aixequen. Els plataners no creixen així de sols: algú els poda cada any. El repte d'avui és sortir com a biòlegs de camp i llegir el pati com un museu: observar amb atenció, descriure trets sense inventar-los i començar a distingir què és obra de la natura i què és obra nostra.",
  engageQuestion: "Per què cada ésser viu del pati té la forma que té? Quins hi són «per natura» i quins perquè els humans els hem triat i posat allà (gallines domesticades, plataners podats, moreres plantades)?",
  engageContext: "Avui obres la situació «El pati, un museu de l'evolució». Sortiràs al pati amb una fitxa de camp per observar 5-6 organismes reals, aprendràs a descriure'ls amb precisió, a classificar-los per trets compartits i a anomenar-los amb la nomenclatura binomial dels científics. També faràs la primera pregunta gran del tema: què és una adaptació? No cal memoritzar res: avui construïm la mirada de biòleg de camp que faràs servir tota la situació, fins al museu evolutiu del pati.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Observo un organisme real del pati i en descric els trets amb precisió, distingint clarament el que veig (dada) del que interpreto (hipòtesi).",
      "Classifico els organismes del pati aplicant criteris de trets compartits que justifico jo mateix, i els anomeno amb la nomenclatura binomial correcta (Gènere espècie, en cursiva).",
      "Explico què és una adaptació relacionant una estructura concreta amb la seva funció i l'ambient, i formulo una hipòtesi sobre per què un tret és avantatjós.",
      "Argumento amb un exemple del pati per què un mateix tret pot venir de la natura (selecció natural) o dels humans (selecció artificial/domesticació)."
    ],
    B: [
      "Observo un organisme del pati i n'anoto els trets visibles amb l'ajuda de la taula d'observació, separant el que veig del que penso.",
      "Agrupo els organismes del pati segons un tret compartit senzill (té plomes? té flors?) i escric el seu nom científic seguint el model donat (Gènere espècie, en cursiva).",
      "Dic què és una adaptació amb un exemple guiat, relacionant una part de l'organisme amb per a què li serveix.",
      "Reconec, amb ajuda, quins organismes del pati han estat triats pels humans (domesticats) i quins hi són de manera natural."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: "mitjana" — SA5 és al 2n trimestre; la bastida es manté a nivell mitjà (com SA4), amb tendència a baixar cap a SA6-7.
  scaffoldFade: "mitjana",
  apartatExtras: {
    "1": {
      scaffold:
        "Per observar bé, separa sempre DUES columnes. A «Observo» hi va NOMÉS el que veus amb els ulls (color, forma, mida, quantes potes, si té plomes o fulles). A «Penso/Hipòtesi» hi va la teva interpretació (per a què creus que li serveix, per què creus que és així). No barregis les dues: un bon biòleg de camp primer descriu, després interpreta.",
      challenge:
        "Tria l'organisme que et sembli MENYS «espectacular» del pati (una mala herba, una formiga, un pardal). Descriu-lo amb tanta precisió que algú que no el veu podria dibuixar-lo només amb les teves notes. Quins tres trets el fan diferent del veí més proper?"
    },
    "2": {
      scaffold:
        "Classificar és agrupar per SEMBLANCES. Tria un tret que es vegi (per exemple: «té plomes?» o «fa flors?») i separa els organismes en dos grups: els que sí i els que no. La nomenclatura binomial té dues paraules: primer el GÈNERE (en majúscula) i després l'espècie (en minúscula), sempre en cursiva o subratllat. Exemple: Gallus gallus (la gallina), Morus alba (la morera).",
      challenge:
        "Proposa DOS criteris de classificació diferents per als mateixos organismes del pati (p. ex. «té plomes» i «pot volar»). Comprova que amb un criteri i amb l'altre els grups no queden igual. Quin dels dos et sembla més útil per a un biòleg i per què?"
    },
    "3": {
      scaffold:
        "Una ADAPTACIÓ és un tret que ajuda l'organisme a sobreviure o reproduir-se en el seu ambient. Per identificar-ne una, uneix tres coses: (1) una ESTRUCTURA que veus (bec fort, fulla ampla, potes llargues), (2) la seva FUNCIÓ (per a què serveix), (3) l'AMBIENT on viu. Si les tres encaixen, tens una adaptació. Exemple: bec fort → trencar llavors dures → viure on hi ha llavors.",
      challenge:
        "Tria una adaptació d'un organisme del pati i explica-la com una cadena estructura → funció → ambient. Després, imagina que l'ambient canvia de cop (deixa de ploure durant un any): aquesta adaptació seguiria sent avantatjosa? Justifica-ho."
    },
    "4": {
      scaffold:
        "Alguns organismes del pati els ha «triat» la natura i altres els hem triat nosaltres. Quan els humans trien quins individus es reprodueixen (gallines que ponen més ous, gossos més mansos), això és SELECCIÓ ARTIFICIAL o domesticació. Quan és l'ambient qui «tria» sense ningú al darrere, és SELECCIÓ NATURAL. Pista: si un organisme ens dona menjar, ombra o companyia i el cuidem, probablement l'hem triat nosaltres.",
      challenge:
        "Fes dues llistes amb els organismes del pati: «triats pels humans» i «hi són per natura». Per a un de cada llista, explica quin tret concret delata qui l'ha «dissenyat». Hi ha algun cas dubtós (a mig camí)? Quin i per què?"
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES ─────────────────────────────
  ideesPrevies: {
    startPoint:
      "Abans de sortir al pati, posem sobre la taula el que ja pensem sobre per què els éssers vius són com són. No es corregeix: ho compararàs al final de la situació.",
    prompts: [
      {
        kind: "write",
        text: "Per què creus que una girafa té el coll llarg, o una gallina no vola gaire? Què ha fet que siguin així?",
        starter: "Crec que són així perquè…"
      },
      {
        kind: "write",
        text: "Els éssers vius d'avui, són iguals que fa milions d'anys o han canviat? Qui o què els fa canviar?",
        starter: "Crec que… perquè…"
      }
    ]
  },

  // ── EXPLORA (ABP · sortida de camp) ─────────
  exploreActivity: {
    what: "Sortida al pati com a biòlegs de camp. En equip, observeu 5-6 organismes reals (gallines, moreres, plataners, pardals o altres ocells, insectes, males herbes) i documenteu-ne els trets observables amb la fitxa de camp, separant sempre el que veieu del que interpreteu. En tornar a l'aula, agrupareu els organismes per trets compartits.",
    who: { mode: "grup", label: "Equips de 3-4 (biòlegs de camp)" },
    time: 50,
    note: "Aquesta observació és la matèria primera de tota la SA5: l'organisme que observeu millor avui podria ser el que presenteu al museu evolutiu del pati (S20). Observeu amb rigor i respecte pels animals i les plantes."
  },
  exploreInstructions: [
    "Repartiu-vos 5-6 organismes del pati i, per a cadascun, ompliu la taula d'observació separant «Observo» (el que veig) de «Penso» (què interpreto)",
    "Anoteu per a cada organisme almenys tres trets observables amb precisió (color, forma, mida, parts del cos)",
    "De tornada a l'aula, trieu UN criteri de trets compartits i agrupeu els organismes en dos grups (per semblances, no un arbre evolutiu)",
    "Escriviu el nom científic (Gènere espècie, en cursiva) de cada organisme seguint el model donat"
  ],
  exploreDuration: "50 min",
  appSrc: null,
  exploreNote: "Indagació amb organismes reals: la demostració a l'aula és presentar a un altre equip com heu agrupat els organismes i justificar el criteri que heu triat (per què aquest tret i no un altre). Recordeu: agrupar per semblances NO és encara dibuixar un arbre evolutiu.",

  // ── EXPLICA ───────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "2",
      heading: "==Biodiversitat== i ==classificar==: posar ordre a la vida",
      text: "Al pati hi conviuen molts éssers vius diferents: això és la ==biodiversitat==. Per estudiar-los, els biòlegs els ==classifiquen==, és a dir, els ==agrupen per semblances==. Classificar sempre comença triant un ==criteri== observable (té plomes?, fa flors?, té les potes articulades?). Amb un bon criteri, organismes que s'assemblen queden junts. El mateix conjunt d'organismes es pot classificar de maneres diferents segons el criteri que triïs.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "La ==nomenclatura binomial==: el nom científic universal",
      text: "«Gallina», «hen», «pollo»... cada llengua té el seu nom, i això confon. Per això els científics fan servir un ==nom científic== únic per a tot el món: la ==nomenclatura binomial== de Linné. Té ==dues paraules== en llatí: el ==gènere== (amb majúscula) i l'==espècie== (amb minúscula), i s'escriu sempre en ==cursiva== o subratllat. Exemples del pati: ==Gallus gallus== (gallina), ==Morus alba== (morera), ==Platanus × hispanica== (plataner), ==Passer domesticus== (pardal).",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Què és una ==adaptació==: estructura, funció i ambient",
      text: "Una ==adaptació== és un tret que ajuda un organisme a ==sobreviure o reproduir-se== en el seu ambient. Per reconèixer-ne una, uneix tres coses: una ==estructura== que veus (bec, fulla, ala, arrel), la seva ==funció== (per a què serveix) i l'==ambient== on viu. Si encaixen, és una adaptació: el bec fort del pardal (estructura) trenca llavors dures (funció) allà on hi ha llavors (ambient). Compte: una adaptació ho és ==per a un ambient concret==; si l'ambient canvia, pot deixar de ser avantatjosa.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "==Natura== o ==nosaltres==? Selecció natural i artificial",
      text: "No tots els trets del pati vénen del mateix «dissenyador». Quan són els ==humans== qui trien quins individus es reprodueixen —gallines que ponen més ous, plataners que fan bona ombra— parlem de ==selecció artificial== o ==domesticació==. Quan és l'==ambient== qui «tria» sense ningú al darrere (només sobreviuen i es reprodueixen els més ben adaptats), és ==selecció natural==. Darwin va fer servir la domesticació com a ==prova viva==: si els humans poden canviar tant una espècie en pocs segles, la natura pot fer-ho encara més en milions d'anys. Observar el tret és una ==dada==; dir qui l'ha «triat» és una ==inferència== que cal justificar.",
      type: "epistemic",
      badge: "🧭 Observar vs inferir"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "2", before: false, title: "Classificar per trets compartits: el pati en grups", src: "/images/sa5-s1-classificacio.svg", note: "Esquema d'exemple de com agrupar sis organismes del pati aplicant criteris de trets compartits (té plomes? / fa flors?). NO és un arbre evolutiu: és una classificació per semblances observables. A sota, el model de nomenclatura binomial (Gènere espècie, en cursiva). A la fitxa de l'alumne els grups queden buits: els has d'omplir tu amb el criteri que triïs." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa5-s1-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la fitxa: torna a la pregunta d'inici (per què cada ésser viu del pati és com és?) i respon-la ara amb el vocabulari nou (adaptació, estructura-funció-ambient, selecció natural vs artificial), fent servir un organisme que hagis observat.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S17 — Safari evolutiu al pati",
    steps: [
      { apartat: "0", title: "Idees prèvies", time: "10 min", phase: "engage", instruction: "Omple l'apartat 0: per què creus que els éssers vius tenen la forma que tenen i si han canviat amb el temps. No es corregeix; ho compararàs al final de la situació.", hints: [] },
      { apartat: "1", title: "Safari: observació de camp", time: "50 min", phase: "explore", instruction: "Al pati, omple la taula d'observació de 5-6 organismes separant «Observo» (el que veig) de «Penso» (què interpreto). Anota almenys tres trets precisos de cada organisme.", hints: ["A «Observo» hi va NOMÉS el que es veu: color, forma, mida, parts del cos.", "A «Penso» hi va la teva interpretació: per a què creus que serveix cada tret."] },
      { apartat: "2", title: "Classificar i anomenar", time: "25 min", phase: "explica", instruction: "Amb la teoria i la Fig.1, tria un criteri de trets compartits i agrupa els organismes. Escriu el nom científic de cadascun (Gènere espècie, en cursiva).", hints: ["Classificar = agrupar per semblances segons un criteri que triïs.", "Nom científic: dues paraules en llatí, gènere en majúscula, espècie en minúscula, en cursiva."] },
      { apartat: "3", title: "Què és una adaptació", time: "20 min", phase: "elabora", instruction: "Tria un tret d'un organisme i explica'l com una cadena estructura → funció → ambient. És una adaptació?", hints: ["Uneix tres coses: què veus, per a què serveix, on viu.", "Una adaptació ho és per a un ambient concret."] },
      { apartat: "4", title: "Natura o nosaltres?", time: "15 min", phase: "elabora", instruction: "Separa els organismes del pati en «triats pels humans» (domesticats) i «hi són per natura», i justifica un cas de cada tipus amb un tret concret.", hints: ["Selecció artificial = els humans trien qui es reprodueix (domesticació).", "Selecció natural = l'ambient «tria» sense ningú al darrere."] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "Explica què és una ADAPTACIÓ amb un exemple del pati, unint una estructura que has vist, la seva funció i l'ambient on viu l'organisme.", hint: "Estructura (què veig) → funció (per a què serveix) → ambient (on viu)." },
    { id: "q2", type: "multiple", text: "Les gallines del pati tenen les ales petites i amb prou feines volen, tot i que el seu avantpassat salvatge sí que volava. Quina és la millor explicació?", options: ["Els humans han criat durant segles les gallines més tranquil·les i productives, no les millors voladores: és selecció artificial (domesticació)", "Les gallines van decidir deixar de volar perquè els feia mandra", "Totes les aus perden la capacitat de volar amb el temps de manera automàtica", "Les ales petites no tenen res a veure amb l'evolució ni amb els humans"], correct: 0 },
    { id: "q3", type: "open", text: "Un company diu: «he vist que el pardal té el bec fort, per tant és una adaptació per menjar llavors». Què d'aquesta frase és una OBSERVACIÓ (dada) i què és una INFERÈNCIA (interpretació)? Com podríeu comprovar la part inferida?", hint: "El que es veu amb els ulls és dada; el «per tant serveix per...» és interpretació que cal justificar." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, t'havies fixat mai en per què els éssers vius del pati són com són? Quina paraula nova (adaptació, selecció natural, nomenclatura binomial…) t'ha ajudat més a mirar-los d'una altra manera? Què et falta encara per aclarir?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Tria l'organisme del pati que t'hagi cridat més l'atenció i fes-li una foto o un dibuix acurat. Anota un tret que creguis que és una adaptació i escriu una hipòtesi (cadena estructura → funció → ambient) de per què és avantatjós. A la propera sessió buscarem les PROVES que confirmen o refuten aquestes històries.",
    deadline: null,
    note: "Aprenentatge significatiu: connectar l'evolució amb organismes reals i tangibles del teu entorn, no memoritzar definicions abstractes."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: què és la biodiversitat i classificar per trets compartits, la nomenclatura binomial (Gènere espècie), què és una adaptació (estructura-funció-ambient) i la diferència entre selecció natural i artificial",
    "Estudia la Fig.1: com s'agrupen els organismes del pati per semblances i el model de nom científic",
    "Descarrega la fitxa S17 i, si pots, surt un moment a observar 3-4 organismes reals (del pati, un parc o el carrer) omplint la taula «Observo / Penso»",
    "Tria un organisme, identifica-hi una possible adaptació i escriu-la com a cadena estructura → funció → ambient",
    "L'exit tiquet el trobaràs a classe o aquí (apartat EXIT TIQUET); porta la teva observació a la propera sessió"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1"],
  competencies: ["CE1", "CE4"],
  criterisAvaluacio: ["1.2", "1.3", "4.1"]
}
