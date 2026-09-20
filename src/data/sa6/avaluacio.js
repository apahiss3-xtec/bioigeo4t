// Material d'autoavaluació de SA6 (Un planeta viu i inquiet): checklist
// d'estudi + test de transferència amb un cas NOU —la muntanya de sal de
// Cardona— diferent dels casos de les sessions (planeta fictici Gondwana
// Tales a S1-S3, Terres de l'Ebre genèric a S4, vídeo divulgatiu a S5), per
// comprovar si l'alumne sap APLICAR la tectònica de plaques, la
// reconstrucció del passat geològic i l'anàlisi de riscos naturals a un
// indret real de Catalunya que ningú no li ha explicat directament a classe.
//
// Revisió 2026-08-17 (revisió agent-alumne). Canvis de fons:
// 1) El context REGALAVA les respostes de t1 (deia literalment que la
//    col·lisió Ibèrica-Euroasiàtica que va aixecar el Pirineu va plegar la
//    sal) i de t3 (deia que la pluja dissol la sal i afebleix el sostre de
//    les galeries). Ara el context només dona els FETS observables i la
//    cadena causal l'ha de construir l'alumne.
// 2) La resposta correcta ja no és sempre la primera opció ni la més llarga.
// 3) t2 preguntava «com saben que es van formar fa 37 M.a.» però la resposta
//    explicava l'AMBIENT de formació, no l'edat: enunciat corregit.
// 4) t3 demanava dues coses alhora (causa + mesura); ara només la causa.
// 5) c4, c7 i c9 no recollien intersecció ni el marc perillositat/exposició/
//    vulnerabilitat ni predicció/prevenció/correcció, que sí que es treballen.
export const sa6Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Aquestes preguntes són del tipus que trobaràs a la prova. Full, bolígraf i sense apunts. A geologia històrica el que es valora és que DEDUEIXIS l'ordre dels fets a partir dels principis, i que diguis en quin principi et bases a cada pas.",
    minutes: 26,
    questions: [
      {
        id: 'w1',
        oa: 'OA2',
        source: 'Prova final del curs · Pregunta 6, «quant fa»',
        minutes: 8,
        text: "Una capa amb fòssils està entre una capa de cendra volcànica datada en 1,20 Ma a sota i una altra de 0,80 Ma a sobre. Una esquerda talla les tres capes però queda coberta sencera per una quarta capa de damunt. Data el fòssil i situa l'esquerda, dient en quin principi et bases a cada pas.",
        model: {
          as: "El fòssil té entre 0,80 i 1,20 milions d'anys, perquè està entre les dues cendres datades (principi de superposició: el que hi ha a sota és més antic). L'esquerda és més moderna que les tres capes que talla (principi d'intersecció: el que talla és més jove) i més antiga que la capa que la cobreix.",
          ae: "El fòssil: la capa no es pot datar directament, però està per sobre de la cendra d'1,20 Ma i per sota de la de 0,80 Ma; pel principi de superposició —en una successió no capgirada, el que hi ha a sota és més antic— queda acotada entre 0,80 i 1,20 milions d'anys. És una datació relativa acotada per dues datacions absolutes. L'esquerda: talla les capes 1, 2 i 3, i pel principi d'intersecció el que talla és més jove que el que és tallat, per tant és posterior a totes tres; però la capa 4 li passa per damunt sencera i no està tallada, de manera que és anterior a la capa 4. Queda pinçada entre el sostre de la capa 3 i la base de la capa 4: es va obrir després de dipositar-se la capa 3 i abans que hi caigués la cendra de 0,80 Ma. Amb les dades donades no es pot precisar més, i dir-ho també forma part de la resposta.",
        },
        aeWhy: "L'AE anomena els principis a cada pas, distingeix datació relativa d'absoluta i reconeix explícitament fins on arriben les dades — que en aquesta prova compta com a resposta correcta.",
        must: [
          "Has donat l'interval d'edat del fòssil.",
          "Has anomenat el principi de superposició.",
          "Has anomenat el principi d'intersecció.",
          "Has acotat l'esquerda per les dues bandes.",
          "Has dit fins on es pot arribar amb les dades donades."
        ]
      },
      {
        id: 'w2',
        oa: 'OA1',
        source: 'Tipus de pregunta de la prova · Deriva continental',
        minutes: 7,
        text: "Wegener va proposar la deriva continental el 1912 i va ser rebutjat durant dècades. Explica dues proves que tenia i per quina raó no el van creure.",
        model: {
          as: "Tenia l'encaix de les costes d'Àfrica i Sud-amèrica i la presència dels mateixos fòssils guia en continents avui separats, a més de la continuïtat de roques i serralades. No el van creure perquè no sabia explicar quina força movia els continents.",
          ae: "Proves: (1) l'encaix geomètric de les costes d'Àfrica i Sud-amèrica, que millora encara si s'ajusten pels marges continentals i no per la línia de costa actual; (2) els mateixos fòssils guia d'espècies terrestres i d'aigua dolça —que no podien travessar un oceà— a banda i banda de l'Atlàntic; (3) la continuïtat de formacions rocoses i serralades que queden alineades si es tanca l'oceà. El rebuig no va ser per manca de proves sinó per manca de MECANISME: Wegener no sabia quina força podia moure una massa continental, i les que va proposar eren insuficients. La comunitat científica no va acceptar el model fins als anys 60, quan el fons oceànic i el paleomagnetisme van permetre identificar la convecció del mantell i l'expansió del fons com a motor. És un bon exemple de com funciona la ciència: una hipòtesi amb bones dades però sense mecanisme queda en espera, i són les proves noves les que la resolen.",
        },
        aeWhy: "L'AE explica que les proves eren bones i que el problema era el mecanisme, i tanca amb el que això ensenya sobre com funciona la ciència (connexió amb SA1).",
        must: [
          "Has donat com a mínim dues proves concretes.",
          "Has dit per què els fòssils guia són una prova (no podien travessar l'oceà).",
          "Has dit que el problema era la manca de mecanisme.",
          "Has dit què va resoldre el problema anys després."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: 'Tipus de pregunta de la prova · Risc geològic',
        minutes: 6,
        text: "Dos pobles estan al mateix vessant i tenen la mateixa probabilitat d'esllavissada, però un té molt més risc que l'altre. Explica-ho descomponent el risc en perillositat, exposició i vulnerabilitat.",
        model: {
          as: "La perillositat és la mateixa, perquè és la probabilitat que passi el fenomen. El que canvia és l'exposició (quanta gent i quants béns hi ha en el camí) i la vulnerabilitat (com de preparats estan els edificis i les persones per resistir-ho).",
          ae: "El risc no és només el fenomen: és el producte de tres coses. La perillositat és la probabilitat que es produeixi l'esllavissada i depèn de la litologia, el pendent, la vegetació i la pluja; aquí és la mateixa per als dos pobles. L'exposició és què hi ha en la trajectòria: si un poble té cases, l'escola i la carretera al peu del vessant i l'altre hi té camps, l'exposició és molt diferent. La vulnerabilitat és com de malament se'n surt allò que està exposat: edificis antics sense reforç, sense murs de contenció i sense pla d'evacuació són molt més vulnerables que els mateixos edificis consolidats i amb avisos. Per això es pot reduir molt el risc sense poder tocar gens la perillositat, i per això dos llocs geològicament idèntics poden tenir riscos completament diferents: hi ha decisions humanes pel mig.",
        },
        aeWhy: "L'AE defineix els tres components amb exemples concrets del cas i n'extreu la conseqüència: es pot actuar sobre l'exposició i la vulnerabilitat encara que la perillositat sigui inevitable.",
        must: [
          "Has definit els tres components.",
          "Has dit que la perillositat és igual als dos pobles.",
          "Has donat un exemple concret d'exposició i un de vulnerabilitat.",
          "Has dit sobre quins components es pot actuar."
        ]
      },
      {
        id: 'w4',
        oa: 'OA3',
        source: 'Tipus de pregunta de la prova · Mesures',
        minutes: 5,
        text: "Proposa tres mesures per a un poble amb risc d'inundació i classifica cadascuna en predicció, prevenció o correcció.",
        model: {
          as: "Predicció: una xarxa de sensors al riu amb un sistema d'avisos. Prevenció: no deixar construir a la zona inundable i fer simulacres. Correcció: refer les motes i recuperar la vegetació de la ribera després d'una crescuda.",
          ae: "Predicció — instal·lar sensors de cabal i pluviòmetres aigües amunt connectats a un sistema d'alerta primerenca: no evita la inundació, però guanya hores per evacuar. Prevenció — planificació urbanística que prohibeixi construir a la zona inundable, recuperar zones on el riu pugui vessar sense fer mal, i fer simulacres perquè la gent sàpiga què fer: actua abans que passi res i redueix exposició i vulnerabilitat. Correcció — un cop passat l'episodi, reparar i dimensionar millor les motes, restaurar la vegetació de ribera i revisar el pla amb el que s'ha après. Val la pena notar que la mesura més barata sol ser la de prevenció i la més cara la de correcció, i que l'escalfament global augmenta la freqüència d'episodis de pluja intensa: un risc que ja hi era es pot intensificar per acció humana.",
        },
        aeWhy: "L'AE justifica sobre què actua cada mesura i afegeix la perspectiva de riscos induïts, que és el criteri que distingeix AN d'AE en aquest OA.",
        must: [
          "Has proposat tres mesures concretes, no genèriques.",
          "Has classificat cada mesura correctament.",
          "Has dit sobre quin component del risc actua cadascuna.",
          "Has esmentat que l'acció humana pot intensificar el risc."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Explico la deriva continental de Wegener i almenys dues proves que la sostenen (encaix de continents, fòssils guia en continents separats, continuïtat de roques i serralades)." },
    { id: 'c2', oa: 'OA1', text: "Descric els tres tipus de límits de plaques (divergent, convergent, transformant) i el fenomen associat a cada un." },
    { id: 'c3', oa: 'OA1', text: "Explico el motor de la tectònica de plaques: la convecció del mantell." },
    { id: 'c4', oa: 'OA2', text: "Aplico els principis geològics bàsics (horitzontalitat, superposició, intersecció —el que talla és més jove— i actualisme) per deduir l'ordre dels esdeveniments en una successió de capes." },
    { id: 'c5', oa: 'OA2', text: "Utilitzo fòssils guia per datar i relacionar capes de roca, fins i tot en indrets separats." },
    { id: 'c6', oa: 'OA2', text: "Explico el cicle de Wilson (obertura i tancament d'un oceà) i el relaciono amb la formació de serralades." },
    { id: 'c7', oa: 'OA3', text: "Identifico els principals riscos geològics d'un indret real (sísmic, volcànic, inundacions, esllavissades) a partir de la seva litologia, relleu i vegetació, i descomponc el risc en perillositat, exposició i vulnerabilitat." },
    { id: 'c8', oa: 'OA3', text: "Explico com l'acció humana i l'escalfament global poden intensificar un risc natural que ja existia (riscos induïts)." },
    { id: 'c9', oa: 'OA3', text: "Proposo mesures raonables per a un risc geològic concret i dic si són de predicció, de prevenció o de correcció." },
    { id: 'c10', oa: 'OA4', text: "Comunico una reconstrucció geològica o una anàlisi de riscos de manera clara, argumentant les conclusions a partir de dades i utilitzant amb precisió el lèxic geològic." }
  ],

  // Cas-fil NOU: la muntanya de sal de Cardona — indret real de Catalunya,
  // diferent del planeta fictici Gondwana Tales i del cas genèric de Terres
  // de l'Ebre, per mesurar transferència: tectònica (orogènia pirinenca),
  // reconstrucció del passat (principis geològics, mar antic) i riscos
  // (subsidència minera intensificada per la pluja).
  test: {
    context:
      "A Cardona (Bages) hi ha una muntanya feta gairebé tota de sal: la Muntanya de Sal, un jaciment de roques de sal i de guix que arriba a tenir centenars de metres de gruix. La sal gemma és una roca tova que es dissol amb l'aigua. Aquestes capes de sal es van dipositar fa uns 37 milions d'anys, planes i horitzontals, i s'alternen amb capes primes d'altres sediments. Cardona és a la conca de l'Ebre, just al sud del Pirineu. Avui les capes de la muntanya no són planes: apareixen molt inclinades i replegades, i emergeixen per sobre del terreny del voltant. Cardona va tenir mines de sal en explotació fins al 1990; part del poble té els carrers construïts damunt d'antigues galeries mineres. Des que les mines es van tancar, alguns d'aquests carrers han patit esfondraments sobtats, sobretot després d'episodis de pluja forta.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Les capes de sal es van dipositar planes al fons d'un mar i avui apareixen inclinades i replegades. Quin procés tectònic ho explica millor, tenint en compte on és Cardona?",
        options: [
          "Un límit divergent: les plaques es van separar i les capes es van enfonsar cap avall.",
          "L'erosió del vent i de la pluja, que amb milions d'anys acaba doblegant qualsevol capa.",
          "La compressió d'un límit convergent: la col·lisió que va aixecar el Pirineu, al costat mateix.",
          "Una propietat pròpia de la sal, que la fa plegar sola sense cap relació amb el moviment de les plaques."
        ],
        correct: 2,
        feedback: {
          correct: "Exacte. Cardona és al peu del Pirineu, que es va formar per col·lisió (límit convergent). Aquella compressió també va afectar les capes de la conca: com que la sal és molt tova, en comptes de trencar-se es plega i fins i tot pot pujar cap a la superfície. (Aquest ascens de la sal té nom propi, diapirisme, però no cal que el recordis.)",
          wrong: "Repassa els tres límits: divergent (separació), convergent (col·lisió, forma serralades) i transformant (lliscament lateral). Unes capes plegades i comprimides just al costat d'una serralada jove apunten a un mateix procés. I compte: l'erosió desgasta les roques, no les plega."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "Els geòlegs afirmen que aquestes sals es van formar en un mar poc profund que s'evaporava una vegada i una altra. Quin raonament els permet dir en quin AMBIENT es va formar una roca que ningú no va veure formar-se?",
        options: [
          "L'actualisme: avui veiem llacunes salades que s'evaporen i deixen sal, i aquí les capes es repeteixen.",
          "El principi d'horitzontalitat, que és l'únic que es pot aplicar a les roques de sal.",
          "La superposició: com que les capes de sal són a sota de les altres, ja sabem en quin ambient es van formar.",
          "No hi ha cap manera de saber en quin ambient es va formar una roca sense haver-hi estat."
        ],
        correct: 0,
        feedback: {
          correct: "Correcte: «el present és la clau del passat». Com que avui podem observar què deixa una llacuna salada quan s'evapora, podem reconèixer el mateix procés en unes capes de fa 37 milions d'anys. I la repetició de capes indica que el cicle es va repetir moltes vegades.",
          wrong: "Torna als principis de S3 i mira què fa cadascun. L'horitzontalitat diu com es dipositen les capes i la superposició diu quina és més antiga: cap de les dues no diu res de l'AMBIENT. El que permet parlar d'ambient és comparar la roca amb un procés que puguem observar funcionant avui."
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "Dels esfondraments dels carrers de Cardona se'n diu que són un risc INDUÏT: ni del tot natural, ni del tot humà. Quina explicació ho justifica millor?",
        options: [
          "És un risc del tot natural: la sal s'hauria dissolt igual encara que no s'hi hagués minat mai.",
          "És un risc del tot humà: sense mines no hi hauria cap perill al poble, passés el que passés amb el clima i amb la pluja.",
          "No és cap risc real, perquè afecta els carrers i no directament les persones que hi viuen.",
          "El procés natural (la pluja dissol la sal) actua sobre unes galeries buides que hi ha perquè les hem excavat nosaltres."
        ],
        correct: 3,
        feedback: {
          correct: "Exacte, i és el patró de S4: hi ha un procés natural que existiria igualment (l'aigua dissol la sal), però l'obra humana el converteix en un perill per a les cases perquè ha deixat buits just sota el poble. Ni una cosa ni l'altra sola no explicaria els esfondraments.",
          wrong: "Fixa't que calen els DOS factors alhora, i que per tant cap dels dos extrems no serveix: dir que és «del tot natural» ignora que els buits els hem fet nosaltres, i dir que és «del tot humà» ignora que sense una roca que es dissol amb l'aigua les galeries no cedirien. Això és exactament un risc induït."
        }
      },
      {
        id: 't4',
        oa: 'OA2',
        text: "Un company diu: «que hi hagi sal marina de fa 37 milions d'anys ens diu que allò era mar, però no ens diu res sobre QUAN es va deformar tot això». Què li respondries?",
        options: [
          "Té raó: l'edat d'una capa i el moment en què es deforma no es poden relacionar mai.",
          "Que li falta una deducció: si la capa de 37 M.a. apareix plegada, el plegament és posterior a la capa.",
          "Que s'equivoca del revés: la sal sempre es diposita a sobre de roques que ja estaven plegades des d'abans.",
          "Que per saber-ho caldria datar el plegament amb radioactivitat, perquè no hi ha cap altra via."
        ],
        correct: 1,
        feedback: {
          correct: "Exacte. És el mateix raonament que amb una esquerda que talla una capa (principi d'intersecció): allò que afecta una capa ha de ser POSTERIOR a aquesta capa. Per tant, el plegament no pot ser més antic de 37 milions d'anys, encara que no en sapiguem la data exacta.",
          wrong: "Pensa-hi com amb una esquerda que talla capes: el que deforma una capa ha d'haver passat DESPRÉS que la capa existís. Això ja et dona una fita d'edat relativa per al plegament, sense necessitat de cap datació absoluta."
        }
      }
    ]
  }
}
