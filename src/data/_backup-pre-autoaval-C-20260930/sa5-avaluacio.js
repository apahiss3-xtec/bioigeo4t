// Material d'autoavaluació de SA5 (El pati, un museu de l'evolució):
// checklist d'estudi + test de transferència amb un cas NOU —els elefants
// sense ullals del Parc Nacional de Gorongosa (Moçambic) després de la
// guerra civil— diferent dels casos de les sessions (organismes del pati a
// S1, ala de pollastre a S2, resistència a antibiòtics/pesticides a S3,
// targetes-cas del museu a S4).
//
// Revisió 2026-08-17 (revisió agent-alumne). Tres canvis de fons:
// 1) El cas anterior (arnes del bedoll i melanisme industrial) NO era nou:
//    s5/s3.js el proposa literalment com a exemple a l'alumnat. Substituït
//    pels elefants de Gorongosa, que no apareix enlloc del material.
// 2) La pregunta t3 demanava classificar el cas com a «observació directa de
//    selecció natural», una categoria que S2 no ensenya (S2 treballa
//    homologia, analogia i vestigis). Ara t3 pregunta per la distinció
//    selecció natural / selecció artificial, que sí que és de la SA (c5).
// 3) La pregunta t4 es justificava amb el criteri reproductiu d'espècie, que
//    no s'ha treballat. Ara demana relacionar estructura → funció → ambient.
// A més, la resposta correcta ja no és sempre la primera opció ni la més
// llarga: abans el test s'encertava sencer sense haver llegit res.
//
// Revisió 2026-09-29 (autoavaluació ≠ prova): l'assaig escrit copiava
// preguntes de la prova final del curs («El llac sota el gel»). S'ha refet
// sencer amb un context NOU —els espinosos que colonitzen un llac d'aigua dolça— que no és el de la
// prova, ni l'enigma de la SA, ni el del test. Cada pregunta entrena
// el bloc 5 de la prova final del curs (i la idea de variabilitat del bloc 2) amb les mateixes habilitats i exigència
// (tipus de dada, verb, format) i el model AE tanca l'error típic del bloc.
// Auditoria: web/scripts-avaluacio/audita_autoavaluacio.py.
export const sa5Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Assaig del bloc de la prova final que treballa SA5 (la població canvia), amb un cas NOU: l'espinós, un peix petit que viu al mar i que té el cos cobert de plaques d'os. Un grup d'espinosos marins arriba a un llac d'aigua dolça. Allà, fabricar plaques costa molt (l'aigua té poc calci), i els peixos amb poques plaques creixen més de pressa i es reprodueixen abans. Recompte al llac, en % d'individus amb poques plaques: generació 0 (els peixos marins que hi arriben), 2 %; generació 10, 35 %; generació 25, 80 %. El caràcter «poques plaques» depèn d'un al·lel recessiu. Full, bolígraf i sense apunts.",
    minutes: 27,
    questions: [
      {
        id: 'w1',
        oa: 'OA3',
        source: 'Entrena el bloc 5 de la prova final · explicar un canvi amb dues teories',
        minutes: 8,
        text: "Explica el canvi dels espinosos del llac com ho faria Lamarck i com ho fa el neodarwinisme. Escriu les dues explicacions per separat, cadascuna amb les seves paraules clau.",
        model: {
          as: "Lamarck: com que al llac les plaques no servien, els peixos les van deixar de fer servir i de fabricar, i aquest canvi el van passar als fills. Neodarwinisme: ja hi havia peixos amb poques plaques; al llac es reproduïen més, i el seu al·lel es va anar fent més freqüent.",
          ae: "Lamarck: l'ambient crea una necessitat i l'organisme canvia per respondre-hi. Al llac les plaques no serien necessàries; per desús, cada peix en fabricaria menys al llarg de la seva vida i transmetria aquest caràcter adquirit als fills, i generació rere generació en tindrien menys. Neodarwinisme: la variació és anterior al canvi d'ambient i sorgeix per mutació a l'atzar i per la recombinació de la reproducció sexual. Entre els peixos que hi van arribar n'hi havia pocs amb l'al·lel de poques plaques. Al llac, aquests creixen més de pressa i es reprodueixen abans (selecció natural), de manera que deixen més descendents, i la FREQÜÈNCIA de l'al·lel a la població puja: del 2 % al 80 % en 25 generacions. Cap peix no canvia al llarg de la vida: el que canvia és la proporció de la població. En l'explicació neodarwinista no hi poden sortir verbs com «s'adapten», «ho necessiten» o «deixen de fabricar-ne».",
        },
        aeWhy: "L'AE separa les dues teories pel mecanisme (necessitat i caràcters adquirits vs variació prèvia i selecció), diu que canvia la població i no l'individu, i fa servir les dades. L'error més repetit és escriure una explicació «neodarwinista» amb verbs lamarckians.",
        must: [
          "A Lamarck hi ha la necessitat o el desús i l'herència del que s'adquireix.",
          "Al neodarwinisme hi ha variació prèvia, a l'atzar, i selecció natural.",
          "Has dit que el que canvia és la freqüència a la població, no cada peix.",
          "No has fet servir «s'adapten» o «ho necessiten» a l'explicació neodarwinista."
        ]
      },
      {
        id: 'w2',
        oa: 'OA4',
        source: 'Entrena el bloc 5 de la prova final · la dada que decideix entre les teories',
        minutes: 6,
        text: "Quina de les tres xifres del recompte serveix per triar entre Lamarck i el neodarwinisme? Per què precisament aquesta i no les altres?",
        model: {
          as: "La de la generació 0: el 2 % dels peixos que venien del mar ja tenien poques plaques abans d'arribar al llac. Vol dir que la variació ja hi era.",
          ae: "La dada decisiva és la de la generació 0: el 2 % dels peixos que arriben del MAR ja tenen poques plaques, abans d'haver viscut ni un dia a l'aigua dolça. Si Lamarck tingués raó, el caràcter hauria d'aparèixer DESPRÉS d'arribar al llac, com a resposta a l'ambient: a la generació 0 hi hauria d'haver un 0 %. En canvi, el neodarwinisme necessita justament que la variant ja existeixi abans perquè la selecció hi pugui actuar. Les dades de les generacions 10 i 25 (35 % i 80 %) no decideixen res, perquè totes dues teories prediuen que el percentatge puja: el 80 % final és la dada més vistosa, però no permet distingir-les. Una dada decideix entre dues teories quan cadascuna en prediu un valor diferent.",
        },
        aeWhy: "L'AE tria la dada de la generació 0 i justifica per què: és l'única on les dues teories prediuen coses diferents. Descarta explícitament la dada final, que és la que tria l'error típic, i formula el criteri general.",
        must: [
          "Has triat la generació 0 (el 2 % abans d'arribar al llac).",
          "Has dit què hauria de valer aquella dada si Lamarck tingués raó.",
          "Has explicat per què el 35 % i el 80 % no decideixen.",
          "Has formulat el criteri: una dada decideix si les teories en prediuen valors diferents."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: 'Entrena el bloc 5 de la prova final · d\'on surt la variabilitat',
        minutes: 7,
        text: "Al mar, els peixos amb poques plaques són rars i són menjats més sovint, però l'al·lel no desapareix mai del tot. a) Explica com pot ser que de dos pares amb moltes plaques neixi un fill amb poques. b) Explica per què la meiosi i la fecundació són importants perquè la població del llac hagi pogut canviar tan de pressa.",
        model: {
          as: "a) Els pares tenen l'al·lel recessiu amagat: són heterozigots i el fill rep l'al·lel de poques plaques de cadascun. b) La meiosi barreja els al·lels i fa que els fills siguin diferents: sense aquesta variabilitat la selecció no tindria res a triar.",
          ae: "a) Com que «poques plaques» és recessiu, un peix heterozigot (una còpia de cada al·lel) té moltes plaques però porta l'al·lel amagat. Al mar, la selecció elimina els homozigots de poques plaques, però no veu els heterozigots, i per això l'al·lel s'hi manté amb una freqüència baixa. Si dos heterozigots es creuen, a la meiosi cadascun fa gàmetes amb un al·lel o l'altre, i en la fecundació una part dels fills (tendència 1 de cada 4) rep els dos al·lels recessius i té poques plaques. b) La meiosi separa els al·lels i els combina de maneres noves (recombinació i repartiment a l'atzar), i la fecundació ajunta els de dos individus: cada generació apareixen combinacions noves i els al·lels amagats tornen a sortir. Això dona a la selecció variabilitat sobre la qual actuar. Si els espinosos només es reproduïssin per mitosi, cada fill seria una còpia del pare i la població només podria canviar si aparegués una mutació nova, que és un procés molt més lent. La meiosi no «crea» el caràcter perquè faci falta: reparteix i combina la variació que ja hi ha.",
        },
        aeWhy: "L'AE uneix herència i evolució: explica per què un al·lel recessiu sobreviu amagat als heterozigots, fa servir la meiosi i la fecundació per explicar d'on surt la variabilitat i raona el cas límit d'una població de còpies. Evita l'error de dir que la meiosi «crea» caràcters quan calen.",
        must: [
          "Has dit que els pares són heterozigots i porten l'al·lel amagat.",
          "Has explicat per què la selecció del mar no elimina els heterozigots.",
          "Has dit que la meiosi i la fecundació barregen i combinen al·lels.",
          "Has raonat què passaria amb una població que només fes mitosi."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Entrena el bloc 5 de la prova final · Darwin, neodarwinisme i context històric',
        minutes: 6,
        text: "Darwin ja explicava la selecció natural, però no sabia res de gens. a) Què del cas dels espinosos podia explicar Darwin i què no? b) Una companya diu: «Lamarck era un ignorant». Valora aquesta frase tenint en compte el context en què va treballar.",
        model: {
          as: "a) Darwin podia explicar que els peixos amb poques plaques sobreviuen i es reprodueixen més, però no sabia d'on surt la variació ni per què passa als fills. b) No és just: en aquella època no se sabia res dels gens, i Lamarck va ser dels primers a proposar que les espècies canvien.",
          ae: "a) Darwin podia explicar el mecanisme: hi ha variació entre els individus, al llac els de poques plaques deixen més descendents i, amb el temps, la població canvia. El que no podia explicar és d'on surt aquesta variació ni com es transmet: no coneixia els gens, ni els al·lels dominants i recessius, ni les mutacions. El neodarwinisme hi afegeix la genètica: la variació surt de mutacions a l'atzar i de la recombinació de la meiosi, es transmet amb els al·lels, i per això un caràcter recessiu pot quedar amagat i tornar a aparèixer. b) La frase jutja Lamarck amb el que sabem avui. A principi del segle XIX no es coneixia l'herència, i Lamarck va ser dels primers a defensar que les espècies no són fixes i que canvien amb el temps, cosa que llavors era trencadora. La seva explicació del mecanisme, l'herència dels caràcters adquirits, les proves l'han descartada, però això no el fa ignorant: el fa un científic del seu temps amb una hipòtesi que després no es va confirmar.",
        },
        aeWhy: "L'AE separa el que aporta Darwin (el mecanisme de selecció) del que hi afegeix la genètica (l'origen i la transmissió de la variació), i valora Lamarck en el seu context sense jutjar-lo amb els coneixements d'avui, que és el que demana l'OA4.",
        must: [
          "Has dit que Darwin explicava la selecció però no l'origen de la variació.",
          "Has dit què hi afegeix el neodarwinisme (gens, mutació, meiosi).",
          "Has situat Lamarck en el seu context històric.",
          "Has distingit una hipòtesi descartada d'una persona «ignorant»."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Descric amb precisió els trets observables d'un organisme i aplico criteris de classificació i la nomenclatura binomial (gènere + espècie)." },
    { id: 'c2', oa: 'OA1', text: "Identifico una adaptació relacionant una estructura concreta amb la seva funció i amb l'ambient on viu l'organisme." },
    { id: 'c3', oa: 'OA2', text: "Distingeixo homologia (mateix origen evolutiu, com el braç humà i l'ala de pollastre) d'analogia (mateixa funció, origen diferent, com l'ala d'insecte i l'ala d'ocell)." },
    { id: 'c4', oa: 'OA2', text: "Reconec les estructures vestigials com a prova de l'evolució i explico per quina raó hi són encara, encara que ja no serveixin per a res." },
    { id: 'c5', oa: 'OA2', text: "Distingeixo la selecció natural (la fa el propi ambient) de la selecció artificial o domesticació (la fa l'ésser humà escollint quins individus es reprodueixen)." },
    { id: 'c6', oa: 'OA2', text: "Interpreto un arbre de semblances (filogènia) ja construït i identifico quins organismes són més o menys emparentats." },
    { id: 'c7', oa: 'OA3', text: "Explico la cadena mutació → variabilitat → selecció natural: la mutació no «apareix perquè cal», sorgeix a l'atzar i és l'ambient qui selecciona." },
    { id: 'c8', oa: 'OA3', text: "Defineixo variable independent, variable dependent, control i rèpliques en el disseny d'una simulació de selecció natural." },
    { id: 'c9', oa: 'OA4', text: "Contraposo les quatre teories —creacionisme/fixisme, lamarckisme, darwinisme i neodarwinisme— i explico la diferència clau entre cada una." },
    { id: 'c10', oa: 'OA4', text: "Analitzo un mateix cas des de les quatre teories amb una graella d'anàlisi i valoro cada teoria en el seu context històric, sense jutjar-la amb els coneixements d'avui." }
  ],

  // Cas-fil NOU: els elefants sense ullals del Parc Nacional de Gorongosa
  // (Moçambic). Cas real i documentat amb dades, i no treballat a cap
  // sessió de la SA, per mesurar transferència: mutació→variabilitat→
  // selecció, les quatre teories, natural vs. artificial i adaptació.
  test: {
    context:
      "Al Parc Nacional de Gorongosa (Moçambic), la majoria d'elefants africans (Loxodonta africana) tenen ullals: dues dents llarguíssimes que fan servir per pelar l'escorça dels arbres, cavar el terra buscant aigua i sals minerals, i defensar-se. Sempre hi ha hagut, però, algunes femelles que neixen sense ullals, un tret que les seves filles solen heretar. Durant la guerra civil de Moçambic (1977-1992), la caça furtiva per vendre l'ivori va matar aproximadament nou de cada deu elefants del parc: els caçadors buscaven els ullals, i els elefants que en tenien de grossos eren els primers a caure. Abans de la guerra, unes 18 de cada 100 femelles naixien sense ullals. Entre les femelles nascudes just després de la guerra, n'eren aproximadament la meitat. Avui, amb la caça furtiva molt reduïda, els biòlegs segueixen el parc any rere any per veure què passa amb aquesta proporció.",
    questions: [
      {
        id: 't1',
        oa: 'OA3',
        text: "Ja abans de la guerra hi havia femelles sense ullals, encara que fossin poques. Segons la cadena mutació → variabilitat → selecció, d'on venia aquesta variant i per què no calia que aparegués «just quan feia falta»?",
        options: [
          "Els elefants van deixar de fer créixer els ullals per no cridar l'atenció dels caçadors.",
          "La variant va sorgir com a resposta de l'espècie al perill, just quan va començar la caça furtiva dins del parc.",
          "Ja existia a l'atzar dins la població; la caça només va fer que passés a ser un avantatge.",
          "És una simple coincidència: sense caça, la proporció hauria pujat exactament igual."
        ],
        correct: 2,
        feedback: {
          correct: "Exacte, i aquest és el nucli del neodarwinisme: la variant hi era abans i per atzar, sense cap relació amb si seria útil. El que va canviar va ser l'ambient (uns caçadors que buscaven ullals), i llavors un tret que abans era un inconvenient va passar a salvar la vida.",
          wrong: "Repassa la cadena mutació → variabilitat → selecció: la mutació NO apareix perquè faci falta, ja hi és abans que canviï res. Un elefant tampoc no pot decidir deixar de fer-se créixer els ullals. El que canvia amb la caça és quina variant sobreviu i deixa més descendència."
        }
      },
      {
        id: 't2',
        oa: 'OA4',
        text: "Quina de les explicacions següents del que va passar a Gorongosa és una explicació LAMARCKIANA?",
        options: [
          "Les femelles sense ullals van sobreviure més temps i van tenir més cries, que també naixien sense ullals.",
          "Els elefants van anar reduint els ullals per no fer-los servir tant, i van passar-ho a les cries.",
          "Els elefants amb ullals grossos van ser eliminats pels caçadors abans de poder-se reproduir.",
          "La proporció de femelles sense ullals va canviar perquè va canviar qui arribava a tenir cries."
        ],
        correct: 1,
        feedback: {
          correct: "Correcte. La marca del lamarckisme és que un canvi que li passa al cos d'un individu durant la seva vida (per l'ús o el desús d'un òrgan) es transmet als fills. Les altres tres opcions són la mateixa explicació per selecció natural (darwinista/neodarwinista) dita de tres maneres.",
          wrong: "Busca l'explicació on l'individu CANVIA durant la seva vida i després passa aquest canvi als fills: això és el lamarckisme. Les explicacions que parlen de qui sobreviu i qui es reprodueix són darwinistes/neodarwinistes, no lamarckianes."
        }
      },
      {
        id: 't3',
        oa: 'OA2',
        text: "Els que van provocar el canvi van ser persones (els caçadors furtius). Vol dir això que el cas de Gorongosa és un exemple de selecció artificial, com la domesticació del gos o del blat?",
        options: [
          "Sí: sempre que la causa última d'un canvi evolutiu són les persones, es tracta de selecció artificial.",
          "Sí, perquè els caçadors buscaven un tret concret, i això és exactament el que fa un ramader.",
          "No, perquè per parlar de selecció artificial cal que el canvi es noti en una sola generació.",
          "No: ningú no triava quins elefants havien de criar; els caçadors van actuar com un factor més de l'ambient."
        ],
        correct: 3,
        feedback: {
          correct: "Exacte, i és una distinció fina. A la selecció artificial l'ésser humà tria quins individus es reprodueixen per obtenir un tret (gossos, blat, vaques lleteres). A Gorongosa ningú no criava elefants: els caçadors van fer de factor de mortalitat, com ho faria un depredador o una sequera. La causa és humana, però el mecanisme és selecció natural.",
          wrong: "Torna a la definició de S1 (l'activitat «Natura o nosaltres?»): hi ha selecció artificial quan les persones ESCULLEN quins individus es reprodueixen. Els caçadors no criaven elefants ni triaven parelles; simplement en mataven uns més que uns altres, que és el que fa qualsevol factor de l'ambient."
        }
      },
      {
        id: 't4',
        oa: 'OA1',
        text: "Ara que la caça furtiva ha baixat molt, els biòlegs esperen que la proporció de femelles sense ullals torni a caure amb els anys. Quina raó ho explica millor, pensant en per a què serveixen els ullals?",
        options: [
          "Perquè els ullals sempre tornen a créixer si l'animal creix en un ambient tranquil i sense cap mena de perill.",
          "Perquè sense ullals costa més pelar escorça i cavar buscant aigua, i sense caçadors això torna a pesar.",
          "Perquè les femelles sense ullals no poden tenir cries i la variant desapareix tota sola.",
          "Perquè l'espècie tendeix per si mateixa a recuperar l'aspecte que tenia originalment."
        ],
        correct: 1,
        feedback: {
          correct: "Exacte. Els ullals són una adaptació: una estructura amb una funció (pelar escorça, cavar buscant aigua, defensar-se) dins d'un ambient concret. Mentre hi havia caçadors, el cost de no tenir-ne compensava; sense caçadors, torna a manar l'avantatge de tenir-ne. La mateixa estructura pot ser un avantatge o un inconvenient segons l'ambient.",
          wrong: "Pensa en estructura → funció → ambient: els ullals serveixen per menjar, per trobar aigua i per defensar-se. Sense caçadors, qui no en té continua tenint aquesta feina més difícil — i és això, no cap tendència de l'espècie a «tornar enrere», el que fa baixar la proporció."
        }
      }
    ]
  }
}
