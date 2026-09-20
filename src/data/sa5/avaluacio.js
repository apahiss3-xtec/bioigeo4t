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
export const sa5Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Aquestes preguntes són del tipus que trobaràs a la prova. Full, bolígraf i sense apunts. Vigila els verbs: «s'adapten», «es fan», «desenvolupen» són verbs lamarckians i fan baixar una resposta que per la resta estaria bé.",
    minutes: 26,
    questions: [
      {
        id: 'w1',
        oa: 'OA3',
        source: 'Prova final del curs · Pregunta 5, «la població canvia»',
        minutes: 8,
        text: "En una població, abans de cap canvi d'ambient, un 8 % dels individus ja resisteix el fred; després de refredar l'aigua, la proporció puja al 41 % i després al 87 %. Explica aquest canvi segons Lamarck i segons el neodarwinisme, i digues quina dada permet decidir entre les dues.",
        model: {
          as: "Lamarck diria que els individus es van fer resistents pel fred i que van transmetre aquesta resistència. El neodarwinisme diu que la variabilitat ja hi era i que el fred va fer que els resistents sobrevisquessin més i es reproduïssin. La dada decisiva és el 8 % de la generació 0, perquè ja hi havia resistents abans del fred.",
          ae: "Lamarck: en trobar-se amb el fred, els individus haurien desenvolupat la resistència per necessitat i l'haurien transmesa als descendents; el caràcter apareixeria a causa de l'ambient. Neodarwinisme: la variabilitat ja existia —hi havia individus amb i sense l'al·lel, per mutacions anteriors i independents del fred—; en refredar l'aigua, els que tenien la proteïna anticongelant sobreviuen i es reprodueixen més, i la proporció d'aquell al·lel puja generació rere generació. L'ambient no crea el caràcter: selecciona el que ja hi havia. La dada que decideix és el 8 % de la generació 0, mesurat abans de refredar res, perquè és l'únic número on les dues teories prediuen coses diferents: Lamarck hi esperaria un 0 %. El 41 % i el 87 % són compatibles amb totes dues i per tant no decideixen res.",
        },
        aeWhy: "L'AE explica per què aquella dada i no una altra —és l'única on les dues teories divergeixen—. Assenyalar el 87 % final és l'error típic: és compatible amb les dues explicacions.",
        must: [
          "Has explicat les dues teories, no només la correcta.",
          "Has dit que la variabilitat és prèvia i a l'atzar.",
          "Has assenyalat el 8 % de la generació 0 com a dada decisiva.",
          "Has dit per què el 87 % final no decideix res.",
          "No has fet servir verbs lamarckians per explicar el neodarwinisme."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Tipus de pregunta de la prova · Homologia i analogia',
        minutes: 6,
        text: "L'ala d'un ocell i l'ala d'un insecte serveixen per al mateix, però l'ala d'un ocell i el braç d'una persona no. Explica quina de les dues parelles és homòloga i quina anàloga, i què ens diu cadascuna sobre el parentiu.",
        model: {
          as: "L'ala d'ocell i el braç humà són homòlegs: tenen el mateix origen evolutiu i els mateixos ossos, encara que facin funcions diferents. L'ala d'ocell i la d'insecte són anàlogues: fan la mateixa funció però tenen orígens diferents. L'homologia indica parentiu; l'analogia, no.",
          ae: "L'ala d'ocell i el braç humà són estructures homòlogues: comparteixen el mateix pla ossi heretat d'un avantpassat comú —un os llarg, dos ossos, ossets, dits— tot i que la funció ha divergit. L'ala d'ocell i la d'insecte són anàlogues: fan la mateixa funció però no deriven de cap estructura comuna; s'assemblen per convergència, perquè volar imposa exigències físiques semblants a qualsevol animal. La conseqüència és important a l'hora de classificar: per reconstruir el parentiu només serveixen les homologies, perquè són les que reflecteixen història compartida; guiar-se per les analogies porta a agrupar espècies només perquè viuen igual. Per això s'ha de mirar l'estructura interna i no l'aspecte exterior.",
        },
        aeWhy: "L'AE descriu el pla ossi compartit, anomena la convergència i n'extreu la regla pràctica: només les homologies serveixen per classificar.",
        must: [
          "Has identificat correctament les dues parelles.",
          "Has definit homologia per l'origen, no per la funció.",
          "Has dit que l'analogia no indica parentiu.",
          "Has dit per què cal mirar l'estructura i no l'aspecte."
        ]
      },
      {
        id: 'w3',
        oa: 'OA2',
        source: 'Tipus de pregunta de la prova · Selecció natural i artificial',
        minutes: 6,
        text: "Un gall de granja amb prou feines pot volar i el seu parent salvatge vola sense problemes. Explica per quina raó, distingint selecció natural de selecció artificial.",
        model: {
          as: "Perquè el gall de granja ha passat per selecció artificial: les persones han triat durant generacions els individus més grossos i amb més carn, no els que volen millor. A la natura, en canvi, és l'ambient qui selecciona, i allà volar sí que és útil per escapar dels depredadors.",
          ae: "En tots dos casos el mecanisme és el mateix —uns individus deixen més descendència que d'altres i la població canvia—; el que canvia és qui fa la tria. A la natura, la tria la fa l'ambient: un ocell que no pot volar no escapa dels depredadors i deixa menys descendència, de manera que la capacitat de vol es manté. A la granja, la tria la fa l'ésser humà, que durant generacions ha escollit per reproduir-se els individus més grossos i amb més pit, sense que volar hi compti gens; a més, els depredadors i la necessitat de fugir han desaparegut, així que la pressió que mantenia el vol s'ha aixecat. El resultat és un animal molt adaptat al criteri humà i incapaç de sobreviure sol. Convé no dir que «ha perdut la capacitat perquè no la feia servir»: això seria lamarckisme; el que ha passat és que els que volaven pitjor van poder reproduir-se igual.",
        },
        aeWhy: "L'AE veu que el mecanisme és idèntic i que només canvia l'agent que selecciona, explica que la pressió s'ha aixecat, i tanca la porta a l'explicació lamarckiana.",
        must: [
          "Has dit qui fa la tria en cada cas.",
          "Has dit que el mecanisme de fons és el mateix.",
          "Has explicat què passa amb la pressió selectiva a la granja.",
          "No has explicat la pèrdua del vol per desús."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Tipus de pregunta de la prova · Teories en context',
        minutes: 6,
        text: "Lamarck es va equivocar, però encara l'estudiem. Explica quina va ser la seva aportació i per quina raó no és just jutjar-lo amb el que sabem avui.",
        model: {
          as: "Lamarck va ser el primer a proposar que les espècies canvien amb el temps en comptes de ser fixes, i que els canvis es relacionen amb l'ambient. El que va errar és el mecanisme: creia que els caràcters adquirits s'heretaven. Al seu temps no es coneixia la genètica.",
          ae: "L'aportació de Lamarck és de primer ordre: va trencar amb el fixisme i va proposar que les espècies canvien al llarg del temps i que el canvi té a veure amb l'ambient on viuen. El que va errar és el mecanisme —va suposar que els caràcters adquirits durant la vida es transmeten a la descendència—, però aquesta era una idea raonable amb el que es podia observar aleshores: no es coneixien ni les lleis de Mendel ni l'ADN, i per tant no hi havia cap manera de saber que el que s'hereta és la informació dels gàmetes i no el que li passa al cos. Jutjar-lo amb els nostres coneixements és anacrònic; el criteri just és preguntar-se si la seva proposta explicava millor les dades de què disposava que les alternatives del seu moment, i la resposta és que sí. Darwin va partir precisament de la idea de canvi que Lamarck havia obert.",
        },
        aeWhy: "L'AE separa la part encertada de la part errònia, explica per què l'error era raonable en el seu context i enuncia el criteri d'avaluació històrica.",
        must: [
          "Has dit què va aportar (el canvi de les espècies, contra el fixisme).",
          "Has dit exactament en què es va equivocar.",
          "Has explicat què no es podia saber en aquell moment.",
          "Has donat un criteri per valorar una teoria en el seu context."
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
