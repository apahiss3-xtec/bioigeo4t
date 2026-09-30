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
//
// Revisió 2026-09-29 (autoavaluació ≠ prova): l'assaig escrit copiava
// preguntes de la prova final del curs («El llac sota el gel»). S'ha refet
// sencer amb un context NOU —el talús d'una pedrera (dic, falla, cendra i colada datades)— que no és el de la
// prova, ni l'enigma de la SA, ni el del test. Cada pregunta entrena
// el bloc 6 de la prova final (6a–6b: edat d'un fòssil i d'una estructura que talla) amb les mateixes habilitats i exigència
// (tipus de dada, verb, format) i el model AE tanca l'error típic del bloc.
// Auditoria: web/scripts-avaluacio/audita_autoavaluacio.py.
export const sa6Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Assaig del bloc de la prova final que treballa SA6 (ordre i edat de les roques), amb un cas NOU: el talús d'una pedrera abandonada. De baix a dalt hi ha cinc capes horitzontals. Capa 1: calcària amb petxines marines. Capa 2: cendra volcànica, datada en 5,3 Ma. Capa 3: argiles amb una dent fòssil de mastodont. Capa 4: una colada de lava, datada en 3,6 Ma. Capa 5: graves de riu. Un dic de basalt (una làmina de roca volcànica vertical) travessa les capes 1, 2 i 3 i s'atura a sota de la 4, que el cobreix sense tallar-se. Una falla desplaça totes les capes, de la 1 a la 5. (Ma = milions d'anys.) Dibuixa el tall al full abans de respondre.",
    minutes: 26,
    questions: [
      {
        id: 'w1',
        oa: 'OA2',
        source: 'Entrena el bloc 6 de la prova final · ordenar esdeveniments amb els principis',
        minutes: 7,
        text: "Ordena del més antic al més recent tots els esdeveniments del talús: la formació de cada capa, el dic i la falla. Per a cada pas important, digues quin principi geològic fas servir.",
        model: {
          as: "Capa 1 → capa 2 → capa 3 → dic → capa 4 → capa 5 → falla. Les capes, per superposició (les de sota són més antigues). El dic és posterior a la 3 perquè la talla, i anterior a la 4 perquè no la talla. La falla és la darrera perquè talla totes les capes.",
          ae: "Ordre: capa 1 → capa 2 → capa 3 → dic → capa 4 → capa 5 → falla. Les capes es van dipositar horitzontals (principi d'horitzontalitat) i, com que no estan capgirades, la de sota és més antiga que la de sobre (principi de superposició): 1, 2, 3, 4, 5. El dic travessa la 1, la 2 i la 3, i una estructura que en talla una altra és més moderna que el que talla (principi d'intersecció): per tant és posterior a la capa 3. Com que la colada 4 el cobreix sense estar tallada, el dic ja hi era quan la lava s'hi va escampar: és anterior a la 4. La falla desplaça les cinc capes: per intersecció, és posterior a la capa 5 i és l'últim esdeveniment. L'error que cal evitar és ordenar el dic o la falla per la seva posició (a baix o a dalt): el que compta és què tallen i què no tallen.",
        },
        aeWhy: "L'AE posa el dic i la falla al seu lloc amb el principi d'intersecció, fa servir el que el dic NO talla per acotar-lo per dalt i anomena cada principi en el pas on l'aplica. L'error típic és situar les estructures per l'altura on es veuen.",
        must: [
          "L'ordre és 1, 2, 3, dic, 4, 5, falla.",
          "Has fet servir la superposició per a les capes.",
          "Has fet servir la intersecció per al dic i per a la falla.",
          "Has fet servir que la capa 4 no està tallada per dir que el dic és anterior."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Entrena el bloc 6 de la prova final · acotar l\'edat d\'un fòssil entre dues capes datades',
        minutes: 6,
        text: "a) Quina edat té la dent de mastodont de la capa 3? Justifica-ho. b) Un company respon «4,45 Ma, que és el punt mig». Què li diries? c) Quina troballa al talús permetria saber-ne l'edat amb més precisió?",
        model: {
          as: "a) Entre 5,3 i 3,6 Ma, perquè la capa 3 és a sobre de la 2 (més moderna que 5,3 Ma) i a sota de la 4 (més antiga que 3,6 Ma). b) Que no es pot saber tan exacte: només sabem que és entre les dues edats. c) Una altra capa de cendra datada més a prop de la dent.",
          ae: "a) La dent té entre 5,3 i 3,6 Ma. Per superposició, la capa 3 es va dipositar després de la cendra 2 (per tant, fa menys de 5,3 Ma) i abans de la colada 4 (per tant, fa més de 3,6 Ma). Les capes 2 i 4 es poden datar perquè són volcàniques; la capa 3 no, i per això la seva edat és un interval, no un número. b) Li diria que el punt mig no té cap base: les dades només diuen que la dent és DINS l'interval, però no on. Podria tenir 5,2 Ma o 3,7 Ma, perquè no sabem si les argiles es van dipositar de pressa o a poc a poc. Donar una xifra exacta és inventar una precisió que les dades no tenen. c) Una capa volcànica datable just a sota o just a sobre de la dent, o dins de la mateixa capa 3: com més a prop de la dent hi hagi una capa datada, més estret serà l'interval.",
        },
        aeWhy: "L'AE dona l'edat com a interval justificat per superposició, explica per què només les capes volcàniques tenen xifra i rebutja el punt mig amb raons. L'error típic és donar un sol número (una de les dues edats o la mitjana) com si fos l'edat del fòssil.",
        must: [
          "Has donat l'interval entre 5,3 i 3,6 Ma.",
          "Has justificat els dos límits amb la superposició.",
          "Has explicat per què el punt mig no és vàlid.",
          "Has proposat una capa datable més a prop de la dent."
        ]
      },
      {
        id: 'w3',
        oa: 'OA2',
        source: 'Entrena el bloc 6 de la prova final · edat relativa d\'una estructura que talla',
        minutes: 6,
        text: "a) El dic, és més antic o més modern que la capa 3? I que la capa 4? Digues entre quines edats el pots situar. b) Què pots dir de l'edat de la falla, i què NO en pots dir amb aquestes dades?",
        model: {
          as: "a) El dic és més modern que la capa 3, perquè la talla, i més antic que la 4, perquè no la talla. És entre 5,3 i 3,6 Ma. b) La falla té menys de 3,6 Ma, perquè talla la colada 4 i també la 5, però no sabem quants anys exactes té.",
          ae: "a) Més modern que la capa 3, perquè la talla (principi d'intersecció), i més antic que la 4, que el cobreix sense estar tallada. Com que la capa 3 és posterior a la cendra de 5,3 Ma, el dic té menys de 5,3 Ma; com que és anterior a la colada de 3,6 Ma, en té més de 3,6. Per tant, està entre 5,3 i 3,6 Ma, i dins d'aquest interval és posterior a la dent de mastodont. b) La falla talla la colada 4 i també la capa 5, de manera que té menys de 3,6 Ma i és posterior a les graves de riu. El que no en puc dir és el límit més recent: cap capa datada no la cobreix, així que podria tenir 3 Ma o haver-se mogut fa poc. Per acotar-la per dalt caldria trobar una capa, idealment datable, que la cobreixi sense estar desplaçada.",
        },
        aeWhy: "L'AE combina el principi d'intersecció amb les dues dates per convertir un ordre relatiu en un interval, i marca què queda obert: la falla només té límit per un costat. Aquesta és la diferència entre acotar una edat i endevinar-la.",
        must: [
          "Has situat el dic entre la capa 3 i la capa 4, amb el principi d'intersecció.",
          "Has convertit l'ordre del dic en l'interval 5,3–3,6 Ma.",
          "Has dit que la falla té menys de 3,6 Ma.",
          "Has dit que la falla no té límit recent i què caldria per trobar-lo."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Entrena el bloc 6 de la prova final · comunicar una reconstrucció geològica',
        minutes: 7,
        text: "Escriu, en 6–8 línies, el text d'un plafó per als visitants de la pedrera que expliqui la història del talús en ordre. Ha d'incloure almenys dos principis geològics, dues edats i què ens diuen la calcària amb petxines i les graves de riu sobre com era el lloc.",
        model: {
          as: "Fa més de 5,3 Ma aquí hi havia mar, perquè la calcària té petxines. Després un volcà va deixar cendra (5,3 Ma), es van dipositar argiles amb un mastodont, va entrar un dic i una colada de lava (3,6 Ma) ho va cobrir. Al final, un riu hi va deixar graves i una falla ho va trencar tot. Les de sota són més antigues (superposició).",
          ae: "Fa més de 5,3 milions d'anys, aquest lloc era fons de mar: la calcària de la base és plena de petxines marines, i els organismes com aquests avui només viuen al mar (actualisme). Fa 5,3 Ma, una erupció hi va deixar una capa de cendra. A sobre s'hi van acumular argiles, on va quedar la dent d'un mastodont: el mar ja s'havia retirat i hi vivien grans mamífers. Abans de fa 3,6 Ma, el magma va pujar per una fractura i va formar un dic que talla aquestes capes; una colada de lava el va cobrir fa 3,6 Ma. Després, un riu hi va dipositar graves. L'últim episodi és una falla que desplaça totes les capes. Com ho sabem: les capes de sota són les més antigues (superposició) i allò que talla una capa és més modern que ella (intersecció).",
        },
        aeWhy: "L'AE explica la història en ordre, reconstrueix l'ambient de cada moment amb l'actualisme (mar, terra ferma, riu), fa servir les edats com a límits i diu d'on surt cada conclusió. L'error típic és fer una llista de capes sense dir què va passar ni com se sap.",
        must: [
          "La història està en l'ordre correcte, amb el dic i la falla al seu lloc.",
          "Has fet servir almenys dos principis geològics anomenats.",
          "Has fet servir les dues edats de les capes volcàniques.",
          "Has dit com era l'ambient (mar, riu) a partir de les roques."
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
