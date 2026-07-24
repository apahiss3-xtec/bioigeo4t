export const sa5s4 = {
  id: "s4",
  saId: "sa5",
  title: "El museu evolutiu del pati",
  sessionNumber: 4,
  biome: "sa5",
  duration: "2h",
  engageImage: "/images/sa5-s4-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Avui s'inaugura el museu. Durant tota la situació has actuat com un biòleg de camp: has sortit al pati a observar organismes reals, has buscat les proves que expliquen el seu parentiu, has entès per què canvien els éssers vius i has après a mirar un mateix cas des de les quatre grans teories de l'evolució. Ara toca posar-ho tot junt en una sola targeta i defensar-la davant dels teus companys. Cada equip exposa UN organisme del pati —la gallina, el plataner, la morera, un ocell, un insecte, una mala herba— i explica en una targeta-cas què vàreu observar, quina adaptació és, quina prova de l'evolució el sustenta i com l'explicarien Lamarck i el neodarwinisme. Després visitaràs els altres estands, els coavaluaràs amb una rúbrica i, per acabar, faràs sol un exercici tipus selectivitat: analitzar un cas nou des de les quatre teories. És el tancament de la situació i del trimestre.",
  engageQuestion: "Si haguessis d'explicar en menys d'un minut per què el teu organisme del pati és com és, quines quatre coses no hi poden faltar? I com distingiries una explicació lamarckiana (errònia) d'una de neodarwiniana (correcta)?",
  engageContext: "Aquesta és una sessió de síntesi i avaluació: no s'aprèn contingut nou, es demostra tot el que ja saps de la situació. Té tres moments. Primer, el museu: cada equip presenta la seva targeta-cas i defensa l'organisme oralment. Segon, la coavaluació: visites els altres estands i els puntues amb una rúbrica, donant una millora concreta. Tercer, l'exercici individual tipus PAU: analitzes un cas nou (el peix globus o la tolerància a la lactosa) des de les quatre teories, que és l'habilitat que se t'exigirà a la prova i a batxillerat. Tanquem amb una metacognició de tota la situació i del trimestre.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Sintetitzo en una targeta-cas un organisme real del pati integrant els quatre eixos de la situació: el tret observat, l'adaptació (estructura → funció → ambient), la prova de l'evolució que el sustenta i la comparació Lamarck vs neodarwinisme, i el defenso oralment amb precisió.",
      "Coavaluo els estands dels altres equips amb una rúbrica, justifico la meva valoració amb criteris i proposo a cada equip una millora concreta i argumentada.",
      "Resolc sol un exercici tipus PAU analitzant un cas nou des de les quatre teories, argumento quina l'explica millor i detecto i corregeixo l'error lamarckià.",
      "Valoro, en la metacognició de tancament, què he après al llarg de tota la situació sobre com i per què evolucionen els éssers vius, i com la ciència es revisa amb el temps."
    ],
    B: [
      "Completo la targeta-cas del meu organisme del pati seguint la plantilla amb els quatre apartats guiats (tret, adaptació, prova, Lamarck vs neodarwinisme) i la presento amb el guió de defensa donat.",
      "Coavaluo un estand amb la rúbrica marcant les caselles i escrivint, amb l'ajuda dels starters, una cosa que fan bé i una millora.",
      "Resolc, amb la graella parcialment resolta, un exercici tipus PAU analitzant un cas nou des de les quatre teories i identifico l'explicació lamarckiana incorrecta.",
      "Reconec, amb ajuda, tres coses que he après a la situació i una raó per la qual la ciència ha anat canviant les seves explicacions."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: SA5 final del 2n trimestre; la bastida baixa (tendència cap a SA6-7).
  scaffoldFade: "baixa",
  apartatExtras: {
    "1": {
      scaffold:
        "La targeta-cas té quatre caselles i totes s'han de poder llegir en un cop d'ull. (1) TRET OBSERVAT: què vàreu veure al pati (el bec, les ales curtes, les fulles amples, les espines...). (2) ADAPTACIÓ: connecta ESTRUCTURA → FUNCIÓ → AMBIENT («aquest tret serveix per a ___ en un ambient on ___»). (3) PROVA DE L'EVOLUCIÓ: quina de les proves que has estudiat el sustenta (homologia, analogia, estructura vestigial, adaptació, selecció artificial/domesticació). (4) LAMARCK vs NEODARWINISME: una frase de cada, deixant clar per què la de Lamarck és FALSA. Recorda: «l'organisme es va esforçar / va voler» = sempre lamarckià = incorrecte.",
      challenge:
        "Munta la targeta-cas del teu organisme de manera que un visitant que no hagi vingut a classe l'entengui sol. Afegeix-hi una dada o una comparació que sorprengui (per exemple, l'avantpassat salvatge del teu organisme, o un organisme del pati que resolgui el mateix problema d'una altra manera). Prepara una defensa oral de 45 segons sense llegir la targeta."
    },
    "2": {
      scaffold:
        "Per coavaluar bé un estand no diguis només «m'agrada» o «està bé». Fes servir la rúbrica: mira si els quatre apartats hi són, si l'adaptació connecta de veritat estructura-funció-ambient, si la prova de l'evolució està ben triada i si la comparació Lamarck/neodarwinisme deixa clar l'error de Lamarck. Marca el nivell (encara no ho fa / ho fa amb ajuda / ho fa bé / ho fa molt bé) i escriu SEMPRE una millora concreta: «podríeu... perquè...».",
      challenge:
        "Coavalua dos estands diferents amb la rúbrica i, per a cadascun, detecta si hi ha algun error científic amagat (una prova mal triada, una explicació que en realitat és lamarckiana disfressada de neodarwiniana) i proposa com corregir-lo. Sigues exigent i just alhora."
    },
    "3": {
      scaffold:
        "L'exercici tipus PAU sempre demana el mateix: agafar UN cas i explicar-lo des de les quatre teories. Recorda l'estructura: FIXISME → no canvia, sempre ha estat igual. LAMARCKISME → l'ús/l'esforç desenvolupa el tret i es transmet (FALS). DARWINISME → ja hi havia variabilitat i l'ambient selecciona, però sense saber com s'hereta. NEODARWINISME → mutacions a l'atzar en els gens + herència + selecció natural (model actual). Fes servir la graella parcialment resolta com a bastida i completa el que falti.",
      challenge:
        "Resol el cas nou des de les quatre teories sense la graella parcial: redacta un text tipus PAU que digui explícitament quina teoria l'explica millor, per què les altres tres fallen i quina prova concreta descartaria el lamarckisme en aquest cas."
    },
    "4": {
      scaffold:
        "Per a la metacognició, torna a l'enigma inicial de la situació (què és obra de la natura i què és obra nostra al pati) i repassa mentalment les quatre sessions: el safari d'observació, les proves de l'evolució, per què canvien els éssers vius i el museu d'avui. Pensa què sabies al principi i què saps ara.",
      challenge:
        "Escriu una reflexió de tancament de la situació i del trimestre: quina idea t'ha canviat més la manera de mirar els éssers vius, quin moment (una prova, la simulació, un estand) t'ha fet fer un salt, i què t'agradaria entendre millor sobre l'evolució."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES / REPÀS ─────────────────────
  ideesPrevies: {
    startPoint:
      "Abans d'inaugurar el museu, recorda l'enigma amb què vam començar la situació. No es corregeix: et servirà per tancar-la al final.",
    prompts: [
      {
        kind: "write",
        text: "L'enigma de la situació era: al pati, quins organismes són com són per obra de la NATURA i quins per obra NOSTRA (perquè els hi hem posat o els hem domesticat)? Escriu un exemple de cada.",
        starter: "Per obra de la natura: ___ . Per obra nostra: ___ ."
      }
    ]
  },

  // ── EXPLORA (ABP · el museu + coavaluació) ───────────────
  exploreActivity: {
    what: "Inaugureu el museu evolutiu del pati. Cada equip munta el seu estand amb la targeta-cas d'UN organisme real del pati i el defensa oralment (uns 45 segons) davant els companys que el visiten. Després feu de visitants: recorreu els altres estands, els coavalueu amb la rúbrica i deixeu a cada equip una millora concreta. El museu és el producte final de la situació: demostra que sabeu observar, buscar proves, explicar el canvi evolutiu i contrastar les teories, tot alhora i sobre un organisme tangible i vostre.",
    who: { mode: "grup", label: "Equips de 3-4 (munten l'estand i el defensen; després visiten i coavaluen)" },
    time: 45,
    note: "Càrrega cognitiva baixa i tangible: no és una exposició llarga, és UNA targeta ben feta i ben defensada. El valor és que integra tota la situació en un organisme real que heu triat vosaltres."
  },
  exploreInstructions: [
    "Munteu l'estand amb la targeta-cas del vostre organisme: tret observat, adaptació (estructura → funció → ambient), prova de l'evolució i Lamarck vs neodarwinisme",
    "Prepareu una defensa oral de 45 segons: qui parla, què destaca, com respon si algú pregunta «i això com ho saps?»",
    "Feu de visitants: recorreu els altres estands i escolteu la defensa de cada equip",
    "Coavalueu cada estand amb la rúbrica: marqueu el nivell de cada criteri i escriviu una cosa que fan bé i una millora concreta",
    "Detecteu si algun estand té un error científic amagat (prova mal triada o explicació lamarckiana disfressada) i proposeu com corregir-lo"
  ],
  exploreDuration: "45 min",
  appSrc: null,
  exploreNote: "Demostració a l'aula: la defensa oral de 45 segons de la vostra targeta i, com a visitants, la rúbrica de coavaluació emplenada amb una millora argumentada per a cada estand visitat.",

  // ── EXPLICA (síntesi de tota la SA) ──────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "La ==targeta-cas==: els quatre eixos de la situació en una sola mirada",
      text: "Tota la situació cap en una targeta amb quatre caselles. Primer, el ==tret observat==: allò concret que vau veure al pati. Segon, l'==adaptació==, que sempre connecta ==estructura → funció → ambient== (aquest tret serveix per a alguna cosa en un ambient concret). Tercer, la ==prova de l'evolució== que el sustenta: ==homologia== (mateix origen, funció diferent), ==analogia== (funció igual, origen diferent), ==estructura vestigial==, adaptació o ==selecció artificial== (domesticació). Quart, la comparació ==Lamarck vs neodarwinisme==. Si sabeu omplir aquesta targeta per a un organisme, sabeu evolució.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "1",
      heading: "==Natura o nosaltres==: selecció natural i selecció artificial",
      text: "Al pati hi conviuen els dos motors del canvi. A la ==selecció natural==, és l'==ambient== qui «tria» quins individus sobreviuen i es reprodueixen (els ocells salvatges, els insectes, les males herbes). A la ==selecció artificial== o ==domesticació==, som ==nosaltres== qui triem (la gallina, que ve del gall salvatge de la selva; la morera i el plataner, plantats i podats). El mecanisme és el mateix —hi ha variabilitat i algú selecciona—, però canvia ==qui selecciona==. Darwin va fer servir la domesticació com a ==prova viva== que la selecció funciona.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "L'habilitat ==PAU==: un cas, quatre teories, i caçar l'error lamarckià",
      text: "L'exercici tipus selectivitat sempre demana analitzar un cas des de les ==quatre teories==. ==Fixisme==: no canvia. ==Lamarckisme==: l'ús/l'esforç desenvolupa el tret i es ==transmet== (FALS). ==Darwinisme==: ja hi havia ==variabilitat== i l'ambient ==selecciona==, però sense saber com s'hereta. ==Neodarwinisme==: ==mutacions a l'atzar== en els gens + herència + selecció natural (model actual). La ==trampa== recurrent: qualsevol frase amb «l'organisme ==va voler==, es va ==esforçar==, ho ==necessitava== i per això ho va aconseguir i ho va passar als fills» és ==lamarckiana i incorrecta==. El que s'hereta són els ==gens==, no el que has fet amb el cos.",
      type: "concept"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "La ciència es ==revisa==: mirada de tancament",
      text: "En tancar la situació val la pena recordar-ho: les explicacions de l'evolució han ==canviat== amb el temps perquè la ciència és una tasca ==col·lectiva== que es ==corregeix== amb noves proves. Lamarck va encertar que les espècies canvien i es va equivocar en el mecanisme; Darwin va trobar el mecanisme però li faltava la genètica; el neodarwinisme ho va unir tot quan es va conèixer l'ADN. Saber distingir «el que una teoria explicava en el seu temps» de «el que sabem ara» és pensar com un ==científic==, i és el fil que hem seguit tota la situació.",
      type: "epistemic",
      badge: "🧭 Naturalesa de la ciència"
    }
  ],

  graphicResources: [
    { id: "Fig.1", apartat: "1", before: false, title: "Targeta-cas del museu (model RESOLT: la gallina del pati)", src: "/images/sa5-s4-targeta-cas.svg", note: "Model d'una targeta-cas totalment resolta amb la gallina domèstica del pati (Gallus gallus domesticus): el tret observat (ales curtes, gairebé no vola), l'adaptació (estructura → funció → ambient), la prova de l'evolució (selecció artificial / domesticació, amb el gall salvatge de la selva com a avantpassat) i la comparació Lamarck (fals) vs neodarwinisme. És el model que has de seguir per fer la targeta del teu organisme; a la fitxa la faràs tu en blanc." },
    { id: "Fig.2", apartat: "1", before: false, title: "Targeta-cas en blanc (per al teu organisme)", src: "/images/sa5-s4-targeta-cas-alumne.svg", note: "La mateixa plantilla de targeta-cas, buida, perquè hi posis el teu organisme del pati. Segueix l'ordre dels quatre eixos: tret observat, adaptació (estructura → funció → ambient), prova de l'evolució i Lamarck vs neodarwinisme." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: "/fitxes/sa5-s4-fitxa.pdf",
  teoriaPdfUrl: null,
  elaborateNote: "Tancament de la situació: torna a l'enigma inicial (natura o nosaltres) i respon-lo ara amb el vocabulari de tota la SA (adaptació, prova de l'evolució, selecció natural vs artificial, les quatre teories). El museu i l'exercici PAU són la demostració que ja saps mirar qualsevol ésser viu amb ulls d'evolucionista.",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S20 — El museu evolutiu del pati",
    steps: [
      { apartat: "0", title: "L'enigma de la situació", time: "5 min", phase: "engage", instruction: "Recorda l'enigma inicial: al pati, què és obra de la natura i què és obra nostra? Escriu un exemple de cada. No es corregeix; el tancaràs al final.", hints: [] },
      { apartat: "1", title: "La teva targeta-cas", time: "35 min", phase: "explore", instruction: "Completa la targeta-cas del teu organisme (Fig.2) amb els quatre eixos i prepara la defensa oral de 45 segons. Consulta el model resolt de la gallina (Fig.1) només si et cal.", hints: ["Adaptació = estructura → funció → ambient.", "Tria bé la prova: homologia, analogia, vestigial, adaptació o selecció artificial (domesticació)."] },
      { apartat: "2", title: "Coavaluació dels estands", time: "20 min", phase: "explore", instruction: "Visita els altres estands i coavalua'ls amb la rúbrica: marca el nivell de cada criteri i escriu una cosa que fan bé i una millora concreta.", hints: ["No diguis només «està bé»: mira si els quatre apartats hi són i si són correctes.", "Detecta explicacions lamarckianes disfressades de neodarwinistes."] },
      { apartat: "3", title: "Exercici individual tipus PAU", time: "25 min", phase: "elabora", instruction: "Analitza sol un cas nou (peix globus o tolerància a la lactosa) des de les quatre teories i argumenta quina l'explica millor. Detecta i corregeix l'error lamarckià.", hints: ["Segueix l'estructura fixisme / lamarckisme / darwinisme / neodarwinisme.", "«L'organisme es va esforçar i ho va passar als fills» = lamarckià = fals."] },
      { apartat: "4", title: "Metacognició de tancament", time: "10 min", phase: "elabora", instruction: "Tanca la situació i el trimestre: respon l'enigma inicial amb el vocabulari nou i reflexiona sobre què has après i què t'agradaria entendre millor.", hints: ["Torna a l'exemple de natura/nosaltres del principi i millora'l.", "Pensa en un moment concret (una prova, la simulació, un estand) que t'hagi fet fer un salt."] }
    ]
  },

  // ── EXIT TIQUET (= exercici individual tipus PAU) ─────────
  exitTicketType: "paper",
  exitTicketQuestions: [
    { id: "q1", type: "open", text: "El peix globus és molt tòxic (té tetrodotoxina), però hi ha una serp que se'l menja sense morir: amb els anys, poblacions senceres de la serp s'han fet resistents al verí. Explica aquest cas amb la cadena mutació → variabilitat → selecció → canvi, assenyalant quin pas és a l'atzar i quin depèn de l'ambient.", hint: "La mutació de resistència apareix a l'atzar; el verí del peix globus (ambient) selecciona les serps que ja la tenien." },
    { id: "q2", type: "multiple", text: "Molts humans adults poden digerir la llet (persistència de la lactasa) perquè els seus avantpassats eren ramaders. Quina explicació és correcta segons el neodarwinisme?", options: ["Ja hi havia persones amb una mutació que mantenia la lactasa activa d'adults; en poblacions ramaderes tenien avantatge, sobrevivien i es reproduïen més, i van transmetre el gen", "Els avantpassats van beure tanta llet que el seu cos es va acostumar i van passar aquesta capacitat als fills", "Tots els humans van decidir alhora poder digerir la llet perquè els convenia", "La capacitat de digerir la llet no té res a veure amb l'evolució"], correct: 0 },
    { id: "q3", type: "open", text: "En un dels dos casos anteriors, escriu com l'explicaria (malament) el lamarckisme i digues quina prova concreta descartaria aquesta explicació lamarckiana.", hint: "Lamarck diria que l'ús/l'esforç desenvolupa el tret i es transmet; la prova: els caràcters adquirits durant la vida no passen als fills pels gens." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Tanquem la situació i el trimestre. Torna a l'enigma inicial (natura o nosaltres): el respondries igual que al principi? Quina idea de tota la situació t'ha canviat més la manera de mirar els éssers vius, i quin moment concret (una prova, la simulació, un estand del museu) t'ha fet fer el salt? Què t'agradaria entendre millor sobre l'evolució?",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Cap tasca nova: la situació es tanca avui. Repassa la graella de les quatre teories i les proves de l'evolució de cara a la prova d'avaluació del trimestre.",
    deadline: null,
    note: "Fi de la SA5 i del segon trimestre. La targeta-cas i l'exercici PAU d'avui són la demostració avaluable de tota la situació."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: la targeta-cas amb els quatre eixos, selecció natural vs artificial (domesticació), l'habilitat PAU d'analitzar un cas des de les quatre teories i com la ciència es revisa",
    "Estudia la Fig.1 (targeta-cas resolta de la gallina del pati) i fes tu la Fig.2 en blanc amb un organisme del pati que triïs",
    "Descarrega la fitxa S20 i completa la teva targeta-cas i la rúbrica de coavaluació",
    "Fes l'exercici individual tipus PAU (peix globus o lactosa) analitzant el cas des de les quatre teories i corregint l'error lamarckià",
    "Respon la metacognició de tancament tornant a l'enigma inicial de la situació"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA1", "OA2", "OA3", "OA4"],
  competencies: ["CE1", "CE2", "CE4"],
  criterisAvaluacio: ["1.2", "1.3", "2.2", "4.1", "4.2"]
}
