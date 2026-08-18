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
