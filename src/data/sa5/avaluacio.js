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
