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
