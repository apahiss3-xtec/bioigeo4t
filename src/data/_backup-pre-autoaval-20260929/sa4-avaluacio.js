// Material d'autoavaluació de SA4 (Herència): checklist d'estudi + test de
// transferència amb un cas NOU —una consulta de consell genètic sobre la
// distròfia muscular de Duchenne i els grups sanguinis ABO d'una família—
// diferent dels casos de les sessions (caràcter familiar propi a S1, Punnett
// amb monedes/llavors a S2, flors/grups sanguinis com a exemple genèric a
// S3, daltonisme/hemofília a S4), per comprovar si l'alumne sap APLICAR el
// vocabulari de l'herència, els quadres de Punnett, la codominància i
// l'herència lligada al sexe a un cas real que ningú no li ha triat.
//
// Revisió 2026-08-17 (revisió agent-alumne): resposta correcta repartida
// entre les quatre posicions i opcions d'una llargada semblant (abans la
// correcta era sempre la primera i la més llarga). A més: t4 estava marcada
// com a OA1 quan el seu contingut és consell genètic i ètica (OA4), i cap
// pregunta cobria OA1 → t1 passa a ser una pregunta de lectura de pedigrí
// (OA1) i la pregunta sobre portadores es manté dins de t2 (OA4).
export const sa4Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Aquestes preguntes són del tipus que trobaràs a la prova. Full, bolígraf i sense apunts. A genètica no n'hi ha prou amb encertar la proporció: cal ensenyar el quadre de Punnett i justificar els genotips dels progenitors.",
    minutes: 27,
    questions: [
      {
        id: 'w1',
        oa: 'OA2',
        source: 'Prova final del curs · Pregunta 4, «qui ho hereta»',
        minutes: 8,
        text: "Dos progenitors presenten un caràcter, però una quarta part dels seus descendents no el presenta. Dedueix el genotip dels dos progenitors, fes el quadre de Punnett i justifica per què no podrien ser tots dos homozigots dominants.",
        model: {
          as: "Tots dos són Aa. Fent el quadre A/a × A/a surten AA, Aa, Aa i aa, és a dir, 3 que presenten el caràcter i 1 que no. Si fossin AA, cap descendent no podria ser aa.",
          ae: "Els dos progenitors presenten el caràcter, per tant tots dos tenen com a mínim un al·lel A. Com que apareix descendència que no el presenta, i aquests només poden ser aa, cada progenitor ha d'haver aportat una a: tots dos són heterozigots, Aa. Quadre de Punnett (A/a × A/a): AA · Aa · Aa · aa, és a dir 3 amb el caràcter : 1 sense, exactament l'1 de cada 4 de l'enunciat. No poden ser AA × AA ni AA × Aa perquè en tots dos casos almenys un progenitor només aportaria A i cap descendent no podria ser aa. Cal recordar, a més, que 3:1 és una proporció esperada, una tendència estadística: en una família concreta de quatre fills poden sortir-ne quatre amb el caràcter sense que això contradigui res.",
        },
        aeWhy: "L'AE raona cap enrere des del fenotip aa fins als genotips dels pares, descarta explícitament les altres combinacions i afegeix el matís esperat/observat que demana l'OA2.",
        must: [
          "Has escrit el quadre de Punnett amb les quatre caselles.",
          "Has justificat per què cada progenitor ha d'aportar una a.",
          "Has descartat AA × AA i AA × Aa dient per què.",
          "Has distingit la proporció esperada del resultat concret d'una família."
        ]
      },
      {
        id: 'w2',
        oa: 'OA4',
        source: 'Tipus de pregunta de la prova · Herència lligada a X',
        minutes: 7,
        text: "Una dona portadora d'un caràcter recessiu lligat al cromosoma X té fills amb un home que no el presenta. Digues quina descendència es pot esperar i explica per quina raó aquests caràcters afecten més sovint els homes.",
        model: {
          as: "La mare és X^A X^a i el pare X^A Y. Els fills poden ser: noies X^A X^A o X^A X^a (cap afectada) i nois X^A Y o X^a Y (la meitat dels nois, afectats). Afecta més els homes perquè només tenen un cromosoma X.",
          ae: "Mare X^A X^a, pare X^A Y. Quadre: filles X^A X^A i X^A X^a — cap no presenta el caràcter, però la meitat són portadores — i fills X^A Y i X^a Y — la meitat el presenten. Els homes en resulten afectats més sovint perquè només tenen un cromosoma X: n'hi ha prou amb un sol al·lel recessiu perquè s'expressi, ja que no hi ha un segon X que pugui emmascarar-lo (el cromosoma Y és molt més petit i no porta la majoria d'aquests gens). Una dona, en canvi, ha de rebre l'al·lel per duplicat, un de cada progenitor, cosa molt menys probable; per això les dones solen ser portadores i són elles les que transmeten el caràcter als fills.",
        },
        aeWhy: "L'AE explica el mecanisme (el Y no porta el gen homòleg, no hi ha emmascarament) i afegeix la conseqüència del patró: la transmissió per via materna.",
        must: [
          "Has escrit els genotips amb la notació X^A, X^a i Y.",
          "Has donat el resultat separant filles i fills.",
          "Has esmentat les portadores.",
          "Has explicat per què tenir un sol X fa que s'expressi."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: 'Tipus de pregunta de la prova · Més enllà de Mendel',
        minutes: 6,
        text: "Explica la diferència entre codominància i dominància incompleta amb un exemple de cada una, i digues per quina raó cap de les dues no encaixa amb el model de dominància simple.",
        model: {
          as: "A la codominància els dos al·lels s'expressen alhora i es veuen tots dos, com al grup sanguini AB. A la dominància incompleta el fenotip és una barreja intermèdia, com una flor rosa a partir d'una de vermella i una de blanca. En cap dels dos casos un al·lel tapa l'altre.",
          ae: "A la dominància simple, l'heterozigot té el mateix fenotip que l'homozigot dominant: un al·lel emmascara l'altre. A la codominància, l'heterozigot expressa els dos al·lels alhora i tots dos es manifesten sencers i distingibles: el grup sanguini AB té alhora l'antigen A i l'antigen B, no un antigen intermedi. A la dominància incompleta, l'heterozigot mostra un fenotip intermedi entre els dos homozigots —la flor rosa d'un creuament vermell × blanc—, perquè una sola còpia de l'al·lel no en produeix prou quantitat per donar el fenotip complet. Cap de les dues encaixa amb la dominància simple perquè en totes dues l'heterozigot es distingeix dels dos homozigots, i per tant la proporció fenotípica de la F2 ja no és 3:1 sinó 1:2:1.",
        },
        aeWhy: "L'AE defineix les dues per contrast amb l'heterozigot (que és on es veu la diferència) i n'extreu la conseqüència numèrica: 1:2:1 en comptes de 3:1.",
        must: [
          "Has posat un exemple concret de cada cas.",
          "Has dit què passa a l'heterozigot en cada cas.",
          "Has dit que a la codominància es veuen tots dos, no una barreja.",
          "Has dit com canvia la proporció fenotípica respecte de 3:1."
        ]
      },
      {
        id: 'w4',
        oa: 'OA1',
        source: 'Tipus de pregunta de la prova · Pedigrí',
        minutes: 6,
        text: "En un arbre genealògic, un caràcter apareix als avis, no apareix a cap dels fills i torna a aparèixer en un net. Explica què et diu això sobre el caràcter i per quina raó no ha desaparegut mai del tot.",
        model: {
          as: "Que el caràcter és recessiu. Els fills el portaven però no el mostraven: eren heterozigots (portadors). Quan dos portadors tenen descendència, pot tornar a sortir un aa i el caràcter reapareix.",
          ae: "Que el caràcter és recessiu i que els que «no el tenen» poden portar-lo igualment. Els fills havien de ser heterozigots, Aa: tenien l'al·lel però el dominant l'emmascarava, de manera que el genotip i el fenotip no coincidien. L'al·lel es transmet amb normalitat encara que no es vegi, i quan dos portadors tenen descendència hi ha una probabilitat d'1 sobre 4 que el fill sigui aa i el caràcter reaparegui. És el que volem dir quan diem que un caràcter «salta» una generació: no salta, viatja amagat. I això explica per què llegir un pedigrí exigeix distingir genotip de fenotip — si només mires qui el mostra, l'arbre sembla impossible.",
        },
        aeWhy: "L'AE posa el nom al mecanisme (genotip ≠ fenotip), quantifica la probabilitat i corregeix la metàfora de «saltar», que és l'error conceptual que la pregunta busca.",
        must: [
          "Has dit que el caràcter és recessiu.",
          "Has anomenat els portadors heterozigots.",
          "Has distingit genotip de fenotip.",
          "Has donat la probabilitat que reaparegui entre dos portadors."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Uso correctament gen, al·lel, genotip i fenotip, homozigot i heterozigot, dominant i recessiu." },
    { id: 'c2', oa: 'OA1', text: "Llegeixo un pedigrí (arbre genealògic) i explico per què un caràcter recessiu pot «saltar» una generació sense desaparèixer." },
    { id: 'c3', oa: 'OA2', text: "Aplico un quadre de Punnett per predir les proporcions genotípiques i fenotípiques d'un encreuament." },
    { id: 'c4', oa: 'OA2', text: "Distingeixo la proporció esperada (tendència estadística, p. ex. 3:1) del resultat concret d'una família (atzar): una proporció no és una garantia per a cada fill individual." },
    { id: 'c5', oa: 'OA3', text: "Reconec i resolc un cas de codominància (els dos al·lels s'expressen alhora, com el grup sanguini AB) i el distingeixo de la dominància simple." },
    { id: 'c6', oa: 'OA3', text: "Reconec i resolc un cas de dominància incompleta (el fenotip és una barreja intermèdia) i un cas d'al·lelisme múltiple (més de dos al·lels possibles per a un gen, com els grups sanguinis ABO)." },
    { id: 'c7', oa: 'OA3', text: "Identifico els límits del model mendelià davant caràcters poligènics o multifactorials (p. ex. l'alçada), on molts gens i l'ambient hi influeixen alhora." },
    { id: 'c8', oa: 'OA4', text: "Explico com es determina genèticament el sexe (XX/XY) i què vol dir que un caràcter estigui «lligat al sexe»." },
    { id: 'c9', oa: 'OA4', text: "Resolc un cas d'herència lligada al cromosoma X i explico per quina raó aquests caràcters afecten més sovint els homes." },
    { id: 'c10', oa: 'OA4', text: "Valoro amb criteri ètic una decisió de consell genètic, sense jutjar les persones implicades i distingint el que diu la genètica (probabilitats) del que ha de decidir cada família (valors)." }
  ],

  // Cas-fil NOU: una consulta real de consell genètic — distròfia muscular
  // de Duchenne (herència lligada al X) i grups sanguinis ABO (al·lelisme
  // múltiple + codominància) en la mateixa família. Context real i diferent
  // dels quatre casos de les sessions, per mesurar transferència: pedigrí,
  // Punnett, codominància/al·lelisme múltiple, i herència lligada al sexe.
  test: {
    context:
      "Una parella espera el seu segon fill i acut a consell genètic. En el seu primer fill, un nen, es va diagnosticar distròfia muscular de Duchenne (DMD), una malaltia greu causada per un al·lel recessiu situat al cromosoma X que afecta la força muscular. Ni el pare ni la mare tenen símptomes de la malaltia; un germà de la mare, però, també la va patir. A més, com que el naixement serà en un hospital petit, els metges volen preveure el grup sanguini del nadó per si calgués una transfusió d'urgència: el pare és del grup sanguini A i la mare del grup B; el primer fill va néixer del grup 0.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Al pedigrí d'aquesta família, la DMD apareix al germà de la mare i al fill de la parella, però en cap dels dos pares. Què ens diu aquest «salt» d'una generació sobre l'al·lel de la malaltia?",
        options: [
          "Que l'al·lel és dominant, perquè apareix en dues generacions de la mateixa família.",
          "Que l'al·lel de la malaltia va desaparèixer del tot i ha tornat a aparèixer per una mutació nova i independent a cada cas.",
          "Que és un al·lel recessiu que la mare porta sense manifestar-lo, perquè el seu altre al·lel és el normal.",
          "Que la malaltia només es pot transmetre de germà a nebot, saltant sempre els pares."
        ],
        correct: 2,
        feedback: {
          correct: "Exacte. Un al·lel recessiu pot travessar generacions «amagat» dins de persones sanes: qui té l'al·lel normal i el de la malaltia no en té símptomes, però el pot passar. Per això al pedigrí sembla que el caràcter «salti».",
          wrong: "Torna al pedigrí de S1: si els pares no tenen la malaltia però el fill sí, l'al·lel no pot ser dominant (es veuria en qui el té). Ha de ser recessiu i viatjar amagat en una persona sana, que el transmet."
        }
      },
      {
        id: 't2',
        oa: 'OA4',
        text: "Ni el pare ni la mare tenen símptomes de DMD, però el seu primer fill sí. Per què aquesta malaltia afecta molt més sovint els nens que les nenes?",
        options: [
          "Perquè un nen només té un cromosoma X: si el que rep porta l'al·lel, no en té cap altre que ho compensi.",
          "Perquè és el pare qui li transmet la malaltia a través del cromosoma Y, que només dona als fills mascles i no a les filles.",
          "Perquè les nenes no arriben a rebre mai l'al·lel de la malaltia de la seva mare.",
          "Perquè una malaltia genètica només es manifesta si tots dos pares en tenen símptomes."
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. És el mateix raonament del daltonisme i l'hemofília a S4: els homes (XY) tenen una sola còpia del cromosoma X, així que un únic al·lel recessiu ja s'expressa. Una noia (XX) amb un al·lel normal queda sana, encara que sigui portadora.",
          wrong: "Repassa l'herència lligada al X: la malaltia està al cromosoma X, no al Y (per tant no ve del pare als fills mascles). Les noies tenen dos X i el normal pot «tapar» el de la malaltia; els nois, amb un sol X, no tenen aquesta possibilitat."
        }
      },
      {
        id: 't3',
        oa: 'OA2',
        text: "La mare és portadora (Xᴰ Xᵈ) i el pare no és afectat (Xᴰ Y). Fes el quadre de Punnett: dels fills que neixin NENS, quina proporció tindrà la malaltia?",
        options: [
          "Cap: si el pare no és afectat, cap fill seu no pot ser-ho.",
          "Tots: si la mare és portadora, tots els fills que siguin nens naixeran amb la malaltia.",
          "Un de cada quatre fills en total, si comptem alhora els nens i les nenes del quadre.",
          "La meitat: dels dos genotips possibles de nen (XᴰY i XᵈY), un és afectat."
        ],
        correct: 3,
        feedback: {
          correct: "Correcte. El quadre dona quatre caselles: Xᴰ Xᴰ i Xᴰ Xᵈ (filles, cap afectada) i Xᴰ Y i Xᵈ Y (nens). Entre els nens, un dels dos genotips és el de la malaltia: 50 % dels nens. Sobre el total de fills seria el 25 %, però la pregunta demana només els nens.",
          wrong: "Fes el quadre: mare Xᴰ Xᵈ × pare Xᴰ Y. Surten quatre caselles. Ara mira NOMÉS les que reben la Y del pare (són els nens): quantes d'aquestes porten l'al·lel Xᵈ de la mare?"
        }
      },
      {
        id: 't4',
        oa: 'OA3',
        text: "El pare és del grup A, la mare del grup B i el primer fill va néixer del grup 0. Els grups ABO tenen tres al·lels (Iᴬ, Iᴮ, i): Iᴬ i Iᴮ són codominants entre ells i tots dos dominants sobre i. Quins genotips han de tenir els pares?",
        options: [
          "Pare Iᴬ i i mare Iᴮ i: un fill de grup 0 és ii, i cada progenitor hi ha d'aportar un al·lel i.",
          "Pare Iᴬ Iᴬ i mare Iᴮ Iᴮ, perquè el grup 0 surt quan es troben dos al·lels dominants diferents i cap dels dos no s'imposa a l'altre.",
          "És impossible: uns pares A i B no poden tenir un fill de grup 0 i hi ha d'haver un error.",
          "Qualsevol genotip: el grup sanguini del fill no depèn dels al·lels que tenen els pares."
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. És al·lelisme múltiple: hi ha tres al·lels possibles, però cada persona només en té dos. Com que i és recessiu, tant el pare (A) com la mare (B) el porten amagat, i el fill que rep els dos al·lels i és del grup 0. Si es trobessin Iᴬ i Iᴮ, en canvi, el fill seria AB: això és la codominància.",
          wrong: "Pensa a l'inrevés: el fill de grup 0 té el genotip ii, i cada al·lel li ve d'un progenitor. Per tant tots dos pares han de portar un al·lel i, encara que el seu fenotip sigui A i B, perquè Iᴬ i Iᴮ dominen sobre i i el tapen."
        }
      }
    ]
  }
}
