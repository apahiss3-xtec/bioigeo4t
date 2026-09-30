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
//
// Revisió 2026-09-29 (autoavaluació ≠ prova): l'assaig escrit copiava
// preguntes de la prova final del curs («El llac sota el gel»). S'ha refet
// sencer amb un context NOU —els conills de pèl curt i angora d'una granja del Lluçanès— que no és el de la
// prova, ni l'enigma de la SA, ni el del test. Cada pregunta entrena
// el bloc 4 de la prova final del curs amb les mateixes habilitats i exigència
// (tipus de dada, verb, format) i el model AE tanca l'error típic del bloc.
// Auditoria: web/scripts-avaluacio/audita_autoavaluacio.py.
export const sa4Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Assaig del bloc de la prova final que treballa SA4 (qui ho hereta), amb un cas NOU: una granja de conills del Lluçanès. En aquests conills, el pèl curt (al·lel C) domina sobre el pèl llarg o angora (al·lel c). Full, bolígraf i sense apunts. Dibuixa els quadres de Punnett al full: el que es valora és que JUSTIFIQUIS els genotips, no només que escriguis una proporció.",
    minutes: 26,
    questions: [
      {
        id: 'w1',
        oa: 'OA2',
        source: 'Entrena el bloc 4 de la prova final · deduir els genotips dels progenitors',
        minutes: 8,
        text: "La Clara creua un mascle i una femella, tots dos de pèl curt. En un any tenen 24 cries: 18 de pèl curt i 6 de pèl llarg. a) Quins genotips tenen els dos progenitors? Fes el quadre de Punnett. b) Justifica per què han de ser aquests genotips i no uns altres.",
        model: {
          as: "Tots dos són Cc. El quadre dona CC, Cc, Cc i cc: 3 de pèl curt per 1 de pèl llarg, que és el que ha passat (18 i 6). Si algun fos CC no hi hauria cries de pèl llarg.",
          ae: "Els dos progenitors són Cc. Raonament: les cries de pèl llarg tenen el fenotip recessiu, i per tant són cc; cada c ha vingut d'un progenitor diferent, així que TOTS DOS porten un al·lel c. Com que tots dos tenen el pèl curt, també porten un C. Per tant: Cc × Cc. Gàmetes de cada un: C i c. Quadre: CC, Cc, Cc, cc → genotips 1 CC : 2 Cc : 1 cc; fenotips 3 de pèl curt : 1 de pèl llarg. Les dades hi encaixen: 6 de 24 és exactament 1 de cada 4. Per què no uns altres: si un progenitor fos CC, cada cria rebria almenys una C i cap no podria ser cc, però n'han sortit sis. I no poden ser cc, perquè llavors tindrien el pèl llarg. Fixa't que el genotip (Cc) no es veu: el que es veu és el fenotip (pèl curt).",
        },
        aeWhy: "L'AE parteix de les cries cc per deduir què porta cada progenitor, descarta explícitament CC i cc, i distingeix genotip de fenotip. L'error típic és escriure «3:1, per tant Cc × Cc» sense explicar d'on surt, o confondre la proporció de genotips amb la de fenotips.",
        must: [
          "Has deduït que les cries de pèl llarg són cc i que cada c ve d'un progenitor.",
          "Has fet el quadre amb els gàmetes C i c de cada progenitor.",
          "Has descartat que algun progenitor sigui CC, i has dit per què.",
          "Has distingit la proporció de genotips (1:2:1) de la de fenotips (3:1)."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Entrena el bloc 4 de la prova final · proporció esperada i atzar',
        minutes: 5,
        text: "Una altra parella, també Cc × Cc, té una ventrada de 4 cries i TOTES són de pèl curt. En Martí, que ajuda a la granja, diu: «El quadre de Punnett falla: n'havia de sortir una de pèl llarg». Té raó? Justifica-ho.",
        model: {
          as: "No té raó. El quadre diu la probabilitat, 1 de cada 4, però no vol dir que de cada 4 cries n'hagi de sortir una exacta. Amb poques cries pot passar que no en surti cap.",
          ae: "No té raó. El quadre de Punnett no diu quantes cries de cada tipus sortiran en una ventrada, sinó la probabilitat de cada cria: cada una, independentment de les altres, té 1 possibilitat de 4 de ser cc. Les cries no «es compensen» entre elles: que una surti de pèl curt no fa més probable que la següent el tingui llarg. Amb només 4 cries és perfectament possible que cap no sigui cc. La proporció 3:1 és una tendència que s'acosta a la realitat quan hi ha moltes cries —com les 24 de la pregunta anterior—, no una garantia per a cada ventrada. Si aquesta parella tingués 40 o 50 cries i no en sortís cap de pèl llarg, llavors sí que caldria dubtar que siguin Cc.",
        },
        aeWhy: "L'AE separa probabilitat de resultat concret, explica que cada cria és independent i diu amb quantes cries la dada seria preocupant. L'error típic és llegir el 3:1 com una quota que s'ha de complir en cada ventrada.",
        must: [
          "Has dit que en Martí no té raó.",
          "Has explicat que 1 de cada 4 és una probabilitat per a cada cria.",
          "Has dit que amb poques cries l'atzar pesa molt.",
          "Has dit amb quantes cries sí que caldria dubtar dels genotips."
        ]
      },
      {
        id: 'w3',
        oa: 'OA1',
        source: 'Entrena el bloc 4 de la prova final · dos progenitors amb el caràcter recessiu',
        minutes: 6,
        text: "La Clara creua dos conills angora (pèl llarg). a) Quines cries n'esperes? Justifica-ho amb els genotips. b) En una ventrada apareix una cria de pèl curt. Quines explicacions possibles hi ha, i quina NO ho pot ser?",
        model: {
          as: "Tots dos són cc, així que només poden donar gàmetes c i totes les cries seran cc, de pèl llarg. Si en surt una de pèl curt, potser el pare és un altre conill de pèl curt.",
          ae: "a) Un conill de pèl llarg té el fenotip recessiu i per força és cc (si tingués una C, tindria el pèl curt). Dos cc només fan gàmetes c, i totes les cries seran cc: pèl llarg, el 100 %, no el 3:1. b) Una cria de pèl curt ha de tenir almenys una C, i cap dels dos pares no en té. Explicacions possibles: que el pare no sigui el que creiem (un mascle de pèl curt de la granja ha arribat a la femella), que és el més probable; o una mutació nova de c a C en un gàmeta, que és possible però molt rara. El que NO ho pot explicar és que la C «estigués amagada» en els pares: en un cc no hi ha cap C per amagar. Un caràcter recessiu pot saltar generacions; un de dominant, no.",
        },
        aeWhy: "L'AE dedueix el genotip a partir del fenotip recessiu, resol el cas de dos progenitors cc (l'extra de la versió A) i, davant de la dada inesperada, ordena les explicacions per probabilitat i en descarta una amb raons. Evita l'error d'aplicar el 3:1 a qualsevol creuament.",
        must: [
          "Has dit que un conill de pèl llarg és per força cc.",
          "Has predit el 100 % de cries de pèl llarg, amb el raonament dels gàmetes.",
          "Has proposat un altre pare (o una mutació rara) per a la cria de pèl curt.",
          "Has descartat que la C estigués amagada en els pares."
        ]
      },
      {
        id: 'w4',
        oa: 'OA1',
        source: 'Entrena el bloc 4 de la prova final · descartar un genotip amb un creuament',
        minutes: 7,
        text: "Un comprador vol un mascle de pèl curt que NO porti l'al·lel c, i en tenen un de pèl curt que no saben si és CC o Cc. No es pot fer cap anàlisi d'ADN. a) Quin creuament faries per saber-ho, i quins resultats esperes en cada cas? b) Si les 3 cries que surten són de pèl curt, ja pots assegurar que el mascle és CC?",
        model: {
          as: "El creuaria amb una femella de pèl llarg (cc). Si és CC, totes les cries seran de pèl curt; si és Cc, la meitat seran de pèl llarg. Amb 3 cries no n'estaria segur del tot: en caldrien més.",
          ae: "a) El creuaria amb una femella de pèl llarg, que per força és cc i només aporta c. Així, el fenotip de cada cria ens diu quin al·lel ha aportat el mascle. Si és CC, totes les cries reben C i totes tenen el pèl curt (100 %). Si és Cc, cada cria té 1 possibilitat de 2 de rebre la c i ser de pèl llarg (tendència 1:1). b) No. Una sola cria de pèl llarg ja demostraria que és Cc, però tres de pèl curt no demostren que sigui CC: un mascle Cc també pot tenir tres cries seguides de pèl curt per atzar (1/2 × 1/2 × 1/2 = 1 de cada 8 vegades). Si en surten deu i totes són de pèl curt, la probabilitat que sigui Cc baixa a menys d'1 de cada 1.000, i llavors sí que el podríem vendre com a CC amb molta confiança, tot i que no amb certesa absoluta.",
        },
        aeWhy: "L'AE tria el creuament que fa visible l'al·lel amagat, diu què s'espera en cada cas i distingeix una prova que descarta (una cria de pèl llarg) d'una que només fa probable (moltes de pèl curt). És el mateix raonament que cal a la prova per descartar un genotip, fet al revés.",
        must: [
          "Has proposat creuar-lo amb un conill cc.",
          "Has dit què s'espera si és CC i què si és Cc.",
          "Has dit que 3 cries de pèl curt no ho demostren.",
          "Has dit que amb moltes més cries la conclusió seria molt més fiable."
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
