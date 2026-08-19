export const sa6s4 = {
  id: "s4",
  saId: "sa6",
  title: "Riscos naturals al nostre territori",
  sessionNumber: 4,
  biome: "sa6",
  duration: "2h",
  engageImage: "/images/sa6-s4-portada.jpg",

  // ── ENGANXA (hook) ───────────────────────────────────────
  engageChallenge: "Setembre de 2013. Davant de la costa de Vinaròs, a poques milles del delta de l'Ebre, una plataforma injecta gas a pressió dins d'un antic jaciment de petroli buit: és el magatzem Castor. Al cap de pocs dies comencen els terratrèmols. No un: més de mil, en poques setmanes, el més fort de magnitud 4,3. La gent d'Alcanar, de Vinaròs i de les Cases surt de casa de matinada. Mai abans no s'hi havien notat sismes així. El magatzem es va tancar per sempre sense arribar a funcionar. Sis anys després, el gener de 2020, el temporal Gloria entrava mar endins al delta de l'Ebre fins a uns tres quilòmetres i inundava milers d'hectàrees d'arrossars amb aigua salada. Dos successos ben diferents i una mateixa pregunta: per què passen just aquí?",
  engageQuestion: "Un terratrèmol de magnitud 4,3 al mig d'un desert buit no fa cap mal. El mateix terratrèmol sota una ciutat pot ser una catàstrofe. Aleshores, què és exactament un «risc»? Depèn només de la natura, o també de nosaltres? I la segona pregunta, més incòmoda: quants dels riscos del nostre territori els hem fabricat o agreujat nosaltres mateixos?",
  engageContext: "Fins ara has fet de geòleg del passat: has descobert que les plaques es mouen (S21), per què es mouen (S22) i com llegir la història escrita a les roques (S23). Avui gires la mirada cap al present i cap a casa teva. La mateixa geologia que explica per què el Mont Caro té fòssils marins explica també per què hi ha una falla sota el mar davant de la costa, per què el delta s'enfonsa i per què després d'un incendi als Ports la primera pluja forta s'emporta el vessant. Avui seràs analista de riscos del teu propi territori: n'identificaràs els perills, diràs de què depenen i proposaràs què s'hi pot fer.",

  // ── OBJECTIUS D'APRENENTATGE PER NIVELL (només A i B) ────
  levelObjectives: {
    A: [
      "Analitzo un risc natural descomponent-lo en perillositat, exposició i vulnerabilitat, i justifico sobre quin dels tres factors es pot actuar més fàcilment en un cas concret i per què.",
      "Justifico, a partir de la litologia, el relleu i la vegetació d'una zona, quins riscos geològics hi són més probables, i avaluo fins a quin punt un model fet a classe permet extreure'n conclusions.",
      "Argumento com determinades accions humanes i l'escalfament global transformen un procés natural en un risc o l'intensifiquen, distingint la causa geològica de fons de la decisió humana que hi afegeix el dany.",
      "Proposo mesures de prevenció i de correcció per a un indret real, les classifico segons sobre quin factor del risc actuen i en valoro els límits, els costos i qui n'hauria de decidir."
    ],
    B: [
      "Explico què és un risc natural i identifico els tres factors que el formen (perillositat, exposició i vulnerabilitat) en un exemple donat.",
      "Distingeixo els riscos d'origen intern (terratrèmols, vulcanisme), els d'origen extern (inundacions, esllavissades, despreniments) i els induïts o agreujats per l'acció humana, i relaciono cada risc amb el tipus de roca, el pendent i la vegetació del lloc.",
      "Explico, amb el suport de la figura, com una acció humana (desforestar, construir en una zona inundable, retenir els sediments en un embassament, injectar fluids al subsòl) pot fer que un risc sigui més gran.",
      "Proposo dues mesures per reduir un risc concret del meu territori i dic si són de predicció (saber que passarà), de prevenció (evitar el dany abans) o de correcció (obres que redueixen o desvien el fenomen)."
    ]
  },

  // ── BASTIMENT/REPTE PER APARTAT segons el nivell ────────
  // scaffoldFade: SA6 (3r trimestre) → bastida baixa.
  scaffoldFade: "baixa",
  apartatExtras: {
    "1": {
      scaffold:
        "Un risc no és el mateix que un perill. Fes servir aquests tres mots i no els barregis. PERILLOSITAT: la probabilitat que el fenomen natural passi en aquell lloc i amb quina força (que hi hagi una falla activa, que el barranc es desbordi cada tants anys). EXPOSICIÓ: què i qui hi ha allà que en pugui rebre el cop (cases, carretera, camps, persones). VULNERABILITAT: com de malament ho passaria allò que hi ha exposat (una casa antiga de tàpia pateix més que un edifici modern fet amb norma sismoresistent; una població avisada i entrenada pateix menys que una que no sap què fer). Si un dels tres és zero, el risc és zero: un terratrèmol enorme al mig d'un desert buit no és cap risc, perquè no hi ha exposició.",
      challenge:
        "Els tres factors no es poden tocar igual de fàcilment. Agafa un risc real del teu territori i argumenta: sobre quin dels tres factors és més difícil actuar, sobre quin és car però possible, i sobre quin es podria actuar demà mateix i gairebé sense diners? Compte: reforestar o posar malles a un talús també toquen la perillositat, així que no val dir que és intocable, has de dir fins a quin punt i a quin cost. Justifica-ho i digues qui hauria de prendre cada decisió (l'ajuntament, el govern, els veïns, tu mateix)."
    },
    "2": {
      scaffold:
        "Per saber quins riscos té un lloc, mira sempre les mateixes tres coses. (1) LITOLOGIA, quina roca hi ha: la calcària és dura i s'esquerda, i en deixa caure blocs; les argiles i les margues són toves i llisquen quan s'amaren d'aigua; els sediments solts i amarats del delta amplifiquen les sacsejades i s'enfonsen. (2) RELLEU: com més pendent, més energia té tot el que cau o baixa; una plana al costat d'un riu és zona inundable. (3) VEGETACIÓ: les arrels lliguen el sòl i les fulles frenen la pluja abans que toqui terra; un vessant cremat o llaurat amunt i avall queda nu i l'aigua se l'endú. Els riscos INTERNS (terratrèmols, vulcanisme) vénen de l'energia de dins de la Terra; els EXTERNS (inundacions, esllavissades, despreniments, erosió de la costa) els mouen l'aigua, el vent i la gravetat a la superfície. I n'hi ha un tercer grup que no encaixa en cap dels dos: els INDUÏTS o agreujats per l'acció humana, com la sismicitat provocada per injectar fluids al subsòl o l'enfonsament d'un delta que ja no rep sediment.",
      challenge:
        "El model del vessant compara dues safates. Tracta'l com un experiment de veritat: quina és l'única cosa que canvies, què mesures, i què has hagut de mantenir igual perquè la comparació sigui justa? Després digues què NO reprodueix el model (escala, temps, tipus d'arrel, gruix de sòl, intensitat de la pluja) i explica en quin sentit concret això et podria fer arribar a una conclusió exagerada."
    },
    "3": {
      scaffold:
        "Molts «desastres naturals» tenen una part que no és natural. No és que nosaltres fem els terratrèmols o la pluja: és que decidim on posem les coses i canviem el terreny. Quatre exemples del nostre territori. (1) Construir cases i càmpings en zones inundables: el barranc no ha canviat, el que hem canviat és què hi ha a la vora (puja l'exposició). (2) Cremar o desforestar un vessant: sense arrels, la primera pluja forta arrossega el sòl (puja la perillositat). (3) Retenir els sediments als embassaments: el riu ja no porta prou fang al delta i el delta, que s'havia construït amb aquest fang, s'enfonsa i s'encongeix. (4) Injectar fluids a pressió al subsòl a prop d'una falla, com al projecte Castor: pot arribar a desencadenar terratrèmols que no s'haurien produït. A sobre, l'escalfament global hi afegeix pluges més intenses i concentrades i un nivell del mar més alt, que fa que cada temporal entri més endins.",
      challenge:
        "Es diu sovint «desastre natural». Argumenta si aquesta expressió és honesta en el cas del delta de l'Ebre i el temporal Gloria: quina part del que va passar era natural i inevitable, quina part era una decisió humana presa fa dècades i molt lluny d'allà, i quina part és conseqüència del canvi climàtic. Acaba escrivint com hauria de titular la notícia un diari que volgués ser rigorós."
    },
    "4": {
      scaffold:
        "Les mesures es classifiquen segons quan actuen i sobre què. PREDICCIÓ: saber si passarà i quan (xarxa sísmica, avisos meteorològics de Protecció Civil, sensors de nivell als barrancs). PREVENCIÓ: evitar el dany abans que passi res — mapes de perillositat i no deixar construir en zona inundable (baixa l'exposició), norma sismoresistent, reforestar, protocols i simulacres a l'escola (baixa la vulnerabilitat). CORRECCIÓ: obres que redueixen el fenomen o el desvien — malles i murs de contenció en un talús, terrasses en un vessant, canalitzacions, aportació de sorra a les platges. Cap mesura no és gratuïta ni perfecta: una canalització pot enviar el problema al poble de baix.",
      challenge:
        "Tria l'indret que has analitzat i redacta una proposta com si l'haguessis de defensar davant del ple de l'ajuntament: quina mesura prioritzes, sobre quin factor del risc actua, quant de temps triga a fer efecte, qui s'hi oposaria i amb quina raó, i quina alternativa més barata hi hauria. Inclou explícitament una cosa que la teva mesura NO resol."
    }
  },

  // ── APARTAT 0 · IDEES PRÈVIES / REPÀS ─────────────────────
  ideesPrevies: {
    startPoint:
      "Posem en comú els riscos naturals del territori que heu buscat a casa. Els anotem tots a la pissarra i intentem agrupar-los: quins vénen de dins de la Terra i quins de fora? En quins hi ha, d'alguna manera, la mà de les persones? No es corregeix res: és el mapa de partida de la sessió.",
    prompts: [
      {
        kind: "write",
        text: "Quin risc natural del teu territori has trobat? On i quan va passar, i què va provocar? I la pregunta clau: per què creus que va passar just en aquell lloc i no en un altre?",
        starter: "El cas que he trobat és... Va passar a... l'any... Va provocar... Crec que va passar just allà perquè..."
      }
    ]
  },

  // ── EXPLORA (ABP · gabinet de riscos + model del vessant) ─
  exploreActivity: {
    what: "En equip sou el gabinet d'anàlisi de riscos de les Terres de l'Ebre, i teniu dues feines. PRIMERA, el model: munteu dues safates inclinades amb el mateix sòl i el mateix pendent; una la deixeu nua i l'altra la cobriu amb vegetació (gespa, molsa, palla o retalls de planta amb arrel). Aboqueu la mateixa quantitat d'aigua des de la mateixa alçada a totes dues i recolliu el que surt per baix. Abans d'abocar cap gota, escriviu la predicció i decidiu què mesurareu. SEGONA, el cas real: cada equip rep un indret real del territori —un vessant cremat dels Ports, el delta de l'Ebre, o la costa d'Alcanar-Vinaròs amb la falla d'Amposta i el magatzem Castor— amb les seves dades de litologia, relleu, vegetació i usos humans. Heu de dir quins riscos hi ha, de quina dada els deduïu, què hi ha afegit l'acció humana i quines mesures proposeu.",
    who: { mode: "grup", label: "Equips de 3-4 (gabinet de riscos)" },
    time: 50,
    note: "Al model no busqueu que «surti bé»: busqueu poder dir amb honestedat què heu canviat, què heu mantingut igual i què no reprodueix el model. Al cas real, cap risc no val si no el podeu lligar a una dada concreta de la fitxa de l'indret."
  },
  exploreInstructions: [
    "Munteu les dues safates amb el mateix sòl, el mateix gruix i el mateix pendent: l'única diferència ha de ser la vegetació",
    "Escriviu la predicció ABANS d'abocar l'aigua i digueu què mesurareu (aigua recollida, terra arrossegada, temps que triga a baixar…)",
    "Aboqueu la mateixa quantitat d'aigua, des de la mateixa alçada i al mateix ritme, a totes dues safates",
    "Compareu el que surt per baix: quanta aigua i, sobretot, quanta terra se n'ha anat",
    "Llegiu la fitxa del vostre indret real i subratlleu-ne les tres dades físiques clau: quina roca hi ha, quin pendent i quina vegetació",
    "Llisteu els riscos possibles i, per a cadascun, escriviu de quina dada surt i si l'acció humana l'ha creat o l'ha agreujat",
    "Proposeu dues mesures i digueu sobre quin factor del risc actuen: perillositat, exposició o vulnerabilitat"
  ],
  exploreDuration: "50 min (25 model + 25 cas real)",
  exploreMaterials: ["2 safates o mitges ampolles tallades", "Sòl o sorra (el mateix per a totes dues)", "Gespa, molsa, palla o planta amb arrel", "Regadora o ampolla amb forats", "Gots per recollir el que surt", "Fitxa de l'indret real assignat"],
  exploreNote: "Demostració a l'aula (últims 20-25 min de la sessió, 3 min per equip): cada equip presenta el seu indret en 3 minuts davant del mapa projectat i ha de respondre dues preguntes del professor —«de quina dada surt aquest risc?» i «la teva mesura, sobre quin factor actua?»— sense llegir el paper.",

  // ── EXPLICA ──────────────────────────────────────────────
  theoryPoints: [
    {
      id: "t1",
      apartat: "1",
      heading: "Què és un ==risc==: tres factors, no un",
      text: "Un fenomen natural no és, per si sol, un ==risc==. Un terratrèmol enorme al mig d'un ==desert== buit no fa cap mal. El risc apareix quan es donen ==tres== coses alhora. La ==perillositat== és la probabilitat que el fenomen passi en aquell lloc i amb quina ==força==: depèn de la geologia i del clima, i és la part que no hem triat nosaltres. L'==exposició== és què i qui hi ha ==allà== per rebre el cop: cases, carreteres, camps, persones. I la ==vulnerabilitat== és com de malament ho passaria allò que està exposat: una casa vella de ==tàpia== pateix molt més que un edifici construït amb norma ==sismoresistent==, i una població que ha fet ==simulacres== pateix menys que una que no sap què fer. Si un dels tres factors és ==zero==, el risc és zero. I això té una conseqüència important: encara que no puguem evitar el ==fenomen==, sí que podem reduir el ==dany==.",
      type: "concept"
    },
    {
      id: "t2",
      apartat: "2",
      heading: "Riscos ==interns== i ==externs==: què els decideix en un lloc concret",
      text: "Els riscos ==interns== (o endògens) vénen de l'energia de ==dins== de la Terra i són conseqüència directa del que vas estudiar a S21 i S22: els ==terratrèmols== i el ==vulcanisme== es concentren als ==límits== de plaques i a les ==falles== actives. Els riscos ==externs== (o exògens) els mouen l'==aigua==, el vent i la ==gravetat== a la superfície: ==inundacions==, ==esllavissades==, despreniments, erosió de la costa. Quins pot patir un indret concret ho decideixen tres dades que ja saps llegir. La ==litologia==: la calcària és dura, s'esquerda i deixa caure ==blocs==; les argiles i les margues són toves i ==llisquen== quan s'amaren; els sediments ==solts== i amarats del delta ==amplifiquen== les sacsejades i s'enfonsen. El ==relleu==: com més ==pendent==, més energia té tot el que baixa, i una plana vora un riu és ==inundable== per definició. I la ==vegetació==: les ==arrels== lliguen el sòl i les fulles frenen la pluja; un vessant ==cremat== queda nu i la primera tempesta forta se l'emporta.",
      type: "concept"
    },
    {
      id: "t3",
      apartat: "3",
      heading: "Quan el ==desastre== no és del tot natural",
      text: "Nosaltres no fem els terratrèmols ni la pluja, però sí que decidim ==on== posem les coses i ==com== tractem el terreny, i això canvia el risc. Construir en una zona ==inundable== no canvia el barranc: el que puja és l'==exposició==. ==Desforestar== o deixar un vessant ==cremat== sí que canvia el terreny: el que puja és la ==perillositat==. Els ==embassaments== de l'Ebre retenen la major part del ==sediment== que abans arribava al mar; com que el delta es va construir amb aquest fang, ara s'==enfonsa== i s'encongeix, i cada temporal hi entra més ==endins==. I fins i tot es poden desencadenar terratrèmols: el 2013, la injecció de gas a pressió del magatzem ==Castor==, davant de la costa entre Vinaròs i Alcanar i a prop de la falla d'==Amposta==, va anar seguida de més de ==mil== sismes, el més fort de magnitud ==4,3==; la instal·lació es va tancar sense arribar a funcionar mai. A tot això, l'==escalfament global== hi afegeix pluges més ==intenses== i concentrades i un nivell del mar més ==alt==. Per això molts «desastres naturals» són, en bona part, ==decisions== humanes antigues que la natura acaba cobrant.",
      type: "concept",
      badge: "🌍 Ciència, tecnologia i societat"
    },
    {
      id: "t4",
      apartat: "4",
      heading: "Què s'hi pot fer: ==predicció==, ==prevenció== i ==correcció==",
      text: "Davant d'un risc hi ha tres maneres d'actuar, i val la pena no confondre-les. La ==predicció== busca saber si passarà i ==quan==: xarxes ==sísmiques==, avisos meteorològics de Protecció Civil, sensors de ==nivell== als barrancs, sistemes d'alerta primerenca. La ==prevenció== actua ==abans== que passi res per evitar el dany: fer ==mapes== de perillositat i no autoritzar-hi construccions (baixa l'==exposició==), aplicar la norma ==sismoresistent==, ==reforestar== un vessant, i fer ==protocols== i simulacres a les escoles (baixa la ==vulnerabilitat==). La ==correcció== són obres que redueixen el fenomen o el desvien: ==malles== i murs en un talús, ==terrasses== en un vessant, canalitzacions, aportació de ==sorra== a les platges. Cap mesura no és gratuïta ni perfecta, i cap no és ==neutral==: una canalització pot enviar l'aigua ==més avall== i crear el problema al poble següent. Per això decidir sobre riscos no és només una qüestió ==tècnica==: també és una decisió ==col·lectiva== sobre qui assumeix quin perill.",
      type: "concept"
    }
  ],

  graphicResources: [
    { id: "Fig.0", apartat: "3", before: true, title: "Els tres indrets, de la muntanya al mar", src: "/images/sa6-s4-mapa.svg", note: "Perfil esquemàtic de les Terres de l'Ebre per situar els tres indrets que analitzareu: el vessant cremat dels Ports, el delta de l'Ebre i la costa d'Alcanar-Vinaròs, amb la falla d'Amposta i el magatzem Castor mar endins. No és un mapa ni està a escala." },
    { id: "Fig.1", apartat: "1", before: false, title: "Els tres factors del risc", src: "/images/sa6-s4-risc.svg", note: "Un mateix fenomen —la crescuda d'un barranc exactament igual de forta— produeix un risc molt diferent segons què hi ha exposat i com de vulnerable és. Fixa-t'hi: la perillositat és idèntica als tres casos; el que canvia és la resta." },
    { id: "Fig.2", apartat: "2", before: false, title: "El model del vessant: com es munta la comparació", src: "/images/sa6-s4-vessant.svg", note: "El muntatge de les dues safates, amb el que ha de ser IGUAL i l'única cosa que ha de ser DIFERENT. La figura no et dona el resultat: això ho has de trobar tu abocant l'aigua." },
    { id: "Fig.3", apartat: "3", before: true, title: "Fitxes dels tres indrets: dades de camp", src: "/images/sa6-s4-indrets.svg", note: "Les dades de camp dels tres indrets que analitzareu al gabinet de riscos: quina roca hi ha, quin relleu, quina vegetació i què hi han posat les persones. Aquí no hi ha cap risc escrit: els riscos es dedueixen a partir d'aquestes dades." },
    { id: "Fig.4", apartat: "3", before: false, title: "Per què s'enfonsa el delta de l'Ebre", src: "/images/sa6-s4-delta.svg", note: "La cadena completa: els embassaments retenen el sediment riu amunt, el delta deixa de rebre fang, es compacta i s'enfonsa, i alhora el nivell del mar puja. Resultat: cada temporal entra més endins que l'anterior." }
  ],

  // ── ELABORA ──────────────────────────────────────────────
  fitxaUrl: { A: "/fitxes/sa6-s4-fitxa-A.html", B: "/fitxes/sa6-s4-fitxa-B.html" },
  teoriaPdfUrl: null,
  elaborateNote: "A la fitxa faràs l'informe de riscos d'un indret real de les Terres de l'Ebre: identificar-ne els riscos a partir de la roca, el relleu i la vegetació, separar què hi ha posat la natura i què hi hem posat nosaltres, i proposar mesures dient sobre quin factor del risc actuen. Aquest informe és una de les dues peces avaluables de la SA, juntament amb el vídeo divulgatiu «Gondwana Tales».",

  // ── GUIA DE LA FITXA ─────────────────────────────────────
  fitxaGuide: {
    fitxaName: "Fitxa S24 — Riscos naturals al nostre territori",
    steps: [
      { apartat: "0", title: "El risc que has trobat", time: "10 min", phase: "engage", instruction: "Comparteix el cas de risc natural del territori que has buscat a casa: on, quan, què va provocar i per què creus que va passar just allà. No es corregeix.", hints: [] },
      { apartat: "1", title: "Els tres factors del risc", time: "15 min (A: 20)", phase: "explain", instruction: "Descompon el teu cas en perillositat, exposició i vulnerabilitat. A la versió B tens la Fig.1 com a exemple resolt; a la versió A has de decidir a més sobre quin factor val la pena actuar i qui ho ha de decidir.", hints: ["Si no hi ha ningú ni res, no hi ha risc encara que el fenomen sigui enorme.", "La vulnerabilitat no és què hi ha, sinó com de malament ho passa."] },
      { apartat: "2", title: "El model del vessant", time: "25 min", phase: "explore", instruction: "Escriu la predicció, fes la comparació de les dues safates i anota què has mantingut igual. Després tradueix el resultat al territori.", hints: ["Perquè la comparació sigui justa, només pot canviar una cosa.", "Pensa què passa als Ports el primer any després d'un incendi."] },
      { apartat: "3", title: "L'informe de l'indret", time: "25 min", phase: "explore", instruction: "Analitza l'indret real assignat: de cada dada física (roca, pendent, vegetació) dedueix els riscos, i separa el que hi ha afegit l'acció humana.", hints: ["Cada risc que escrius ha de sortir d'una dada concreta de la fitxa de l'indret.", "Pregunta't sempre: això puja la perillositat o puja l'exposició?"] },
      { apartat: "4", title: "Què proposes (a la versió A: la proposta al ple)", time: "15 min (A: 10)", phase: "elabora", instruction: "Proposa mesures de prevenció i de correcció per al teu indret i digues sobre quin factor del risc actua cadascuna i quin límit té.", hints: ["Predir no és prevenir: un avís només serveix si la gent sap què fer.", "Tota mesura té un cost i algú que hi surt perdent."] }
    ]
  },

  // ── EXIT TIQUET ──────────────────────────────────────────
  exitTicketType: "web",
  exitTicketQuestions: [
    { id: "q1", type: "multiple", text: "Un poble decideix prohibir construir cases noves a la plana inundable del barranc. Sobre quin factor del risc actua aquesta mesura?", options: ["Sobre la perillositat: el barranc es desbordarà menys sovint", "Sobre l'exposició: hi haurà menys coses i persones al lloc on arriba l'aigua", "Sobre la vulnerabilitat: les cases que ja hi ha seran més resistents", "Sobre cap dels tres: és només una mesura administrativa"], correct: 1 },
    { id: "q2", type: "open", text: "Dos vessants dels Ports tenen la mateixa roca i el mateix pendent, però un va cremar l'estiu passat i l'altre té bosc. Quin dels dos té més risc d'esllavissada i, sobretot, quin factor del risc ha canviat l'incendi? Justifica-ho.", hint: "Compara els dos vessants element per element: què ha quedat igual (roca, pendent, el que hi ha a sota) i què ha desaparegut. El factor que ha canviat és el que et diu si el procés és ara més probable o si només hi ha més coses per rebre el cop." },
    { id: "q3", type: "open", text: "El delta de l'Ebre s'enfonsa i cada temporal hi entra més endins. Explica la cadena de causes, incloent-hi almenys una decisió humana presa lluny del delta i un efecte del canvi climàtic.", hint: "Comença riu amunt i baixa fins al mar. Pregunta't d'on venia el material amb què es va construir el delta i què l'atura ara. Després afegeix-hi el que fa el mar pel seu compte." }
  ],

  // ── METACOGNICIÓ ─────────────────────────────────────────
  metacognition: {
    prompt: "Abans d'avui, quan senties «desastre natural», de qui pensaves que era la responsabilitat? Ha canviat alguna cosa en la teva manera de mirar el paisatge de casa teva? Digues una cosa concreta del teu poble o del teu barri que ara miris d'una altra manera, i per què.",
    type: "reflection"
  },

  // ── FEINA A CASA ─────────────────────────────────────────
  homework: {
    description: "Prepareu, en equip, el vídeo divulgatiu «Gondwana Tales»: guió tancat i gravació. Ha d'explicar la història geològica del planeta que heu reconstruït (S21-S23) i acabar connectant-la amb un risc real del nostre territori i una mesura que proposeu. Recordeu la regla del curs: al vídeo no n'hi ha prou de dir què va passar, heu de dir com ho sabeu.",
    deadline: null,
    note: "La propera sessió és l'estrena i la coavaluació dels vídeos amb la rúbrica Gondwana, més l'informe individual de riscos. Porteu el vídeo ja gravat: a classe no hi haurà temps de gravar-lo."
  },

  // ── HAS FALTAT? ──────────────────────────────────────────
  recoveryInstructions: [
    "Llegeix l'apartat EXPLICA: els tres factors del risc (perillositat, exposició i vulnerabilitat), els riscos interns i externs, com l'acció humana i l'escalfament global els intensifiquen, i la diferència entre predicció, prevenció i correcció",
    "Estudia les cinc figures d'aquesta pàgina: el perfil del territori amb els tres indrets, els tres factors del risc, el muntatge del model del vessant, les fitxes de dades dels tres indrets i la cadena que explica per què s'enfonsa el delta de l'Ebre",
    "Retén la idea clau: no podem evitar el fenomen, però sí que podem reduir el dany, perquè dos dels tres factors depenen de nosaltres",
    "Descarrega la fitxa S24 i fes l'informe de riscos d'un dels tres indrets (el vessant cremat dels Ports, el delta de l'Ebre o la costa d'Alcanar-Vinaròs amb la falla d'Amposta)",
    "Respon l'exit tiquet: la mesura sobre la plana inundable, els dos vessants amb i sense bosc, i la cadena de causes de l'enfonsament del delta",
    "Contacta amb el teu equip: el vídeo divulgatiu «Gondwana Tales» s'estrena la propera sessió i s'ha de portar gravat"
  ],

  // ── COMPETÈNCIES ─────────────────────────────────────────
  oaLinks: ["OA3"],
  competencies: ["CE5", "CE6"],
  criterisAvaluacio: ["5.1", "5.2", "6.3", "6.4"]
}
