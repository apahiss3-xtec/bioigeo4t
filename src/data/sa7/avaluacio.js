// Material d'autoavaluació de SA7 (L'origen de tot): checklist d'estudi +
// test de transferència amb un cas NOU —el meteorit marcià ALH84001 i
// l'anunci de la NASA de 1996— diferent dels casos de les sessions
// (exoplaneta James Webb a S1, datació amb daus a S2, Miller-Urey/comitè
// d'astrobiologia a S3, debat SSI a S4), per comprovar si l'alumne sap
// APLICAR el Big Bang i l'escala còsmica, la datació, les hipòtesis sobre
// l'origen de la vida i la distinció explorar/afirmar a un cas real que
// ningú no li ha explicat directament a classe.
//
// Revisió 2026-08-17 (revisió agent-alumne). Canvis de fons:
// 1) t4 es contradeia: preguntava QUINA hipòtesi en sortiria reforçada i la
//    resposta correcta deia que CAP. Enunciat reformulat («què es podria
//    concloure i què no»). A més hi faltava la panspèrmia, que és
//    exactament la hipòtesi que evocaria un meteorit i que S3 sí que ensenya.
// 2) La resposta correcta ja no és sempre la primera opció ni la més llarga.
// 3) Cap pregunta cobria OA1 (Big Bang i escala còsmica): t1 ara ho fa.
// 4) Correccions menors: «Les anàlisis», i el feedback de t3 remetia a S4
//    quan els nivells de certesa es treballen a S1.
export const sa7Avaluacio = {
  checklist: [
    { id: 'c1', oa: 'OA1', text: "Explico el model del Big Bang i almenys dues proves observables que el sostenen (expansió de l'univers, radiació còsmica de fons, abundància d'hidrogen i heli)." },
    { id: 'c2', oa: 'OA1', text: "Situo en l'escala del temps còsmic el Big Bang (~13.800 M.a.) i la formació del sistema solar i la Terra (~4.600 M.a.), i explico com es va formar el sistema solar a partir d'un núvol de gas i pols." },
    { id: 'c3', oa: 'OA2', text: "Relaciono almenys tres condicions singulars de la Terra (distància a l'estel, aigua líquida, atmosfera, camp magnètic, massa) amb la possibilitat que hi aparegués i s'hi mantingués la vida." },
    { id: 'c4', oa: 'OA2', text: "Distingeixo la datació relativa (principis geològics, ordre d'esdeveniments) de la datació absoluta (desintegració radioactiva, semivida, edat en anys)." },
    { id: 'c5', oa: 'OA2', text: "Explico el concepte de semivida i com permet calcular l'edat absoluta d'una mostra." },
    { id: 'c6', oa: 'OA3', text: "Comparo les principals hipòtesis sobre l'origen de la vida (sopa primordial/Miller-Urey, món ARN, fumaroles hidrotermals) i indico quina evidència sosté cada una; i explico per què la panspèrmia trasllada la pregunta en comptes de respondre-la." },
    { id: 'c7', oa: 'OA3', text: "Valoro amb criteri quina hipòtesi sobre l'origen de la vida està més ben fonamentada i què li faltaria per estar-ho encara més." },
    { id: 'c8', oa: 'OA4', text: "Distingeixo, en una informació científica, un fet ben establert, una hipòtesi amb proves, una especulació i una afirmació no científica." },
    { id: 'c9', oa: 'OA4', text: "Identifico quina prova concreta caldria per fer pujar de nivell una afirmació (d'especulació a hipòtesi, d'hipòtesi a fet establert)." },
    { id: 'c10', oa: 'OA4', text: "Argumento amb rigor una postura pròpia sobre una qüestió sociocientífica (com invertir o no en la recerca de vida fora de la Terra), separant el que diu la ciència del que és una decisió de valors." }
  ],

  // Cas-fil NOU: el meteorit marcià ALH84001 i l'anunci de la NASA de 1996
  // sobre possibles fòssils de bacteris marcians. Context real, històric i
  // diferent dels quatre casos de les sessions, per mesurar transferència:
  // datació, origen de l'univers/sistema solar, hipòtesis sobre l'origen de
  // la vida, i el judici explorar/afirmar.
  test: {
    context:
      "L'any 1984 es va trobar a l'Antàrtida un meteorit anomenat ALH84001. Les anàlisis de la seva composició (les proporcions d'isòtops de gasos atrapats a dins) van demostrar que provenia de Mart: un impacte va llançar aquest tros de roca marciana a l'espai fa uns 17 milions d'anys, i va caure a la Terra fa uns 13.000 anys. Mesurant la desintegració radioactiva d'alguns dels seus minerals, els científics van calcular que la roca es va formar fa uns 4.000 milions d'anys, quan Mart era jove. El 1996, un equip de la NASA va anunciar en una roda de premsa que havien trobat, dins d'aquest meteorit, unes estructures microscòpiques amb forma de bastonet que s'assemblaven a bacteris fossilitzats, i van suggerir que podrien ser una prova de vida antiga a Mart. La notícia va aparèixer a portada de diaris de tot el món amb titulars com «Troben vida a Mart». Anys després, la majoria de la comunitat científica va concloure que aquelles estructures probablement es podien explicar per processos purament químics, sense necessitat que hi hagués vida, tot i que el debat no està completament tancat encara avui.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "La roca del meteorit es va formar fa uns 4.000 milions d'anys. Encaixa aquesta xifra amb el que saps sobre com i quan es va formar el sistema solar?",
        options: [
          "No: una roca de Mart hauria de tenir exactament la mateixa edat que el seu planeta.",
          "No: si venia de Mart, hauria de tenir l'edat de l'univers sencer, uns 13.800 milions d'anys.",
          "Sí, però només perquè a Mart el temps passa a un ritme diferent que a la Terra.",
          "Sí: el sistema solar es va formar fa uns 4.600 M.a., i Mart ja tenia escorça 600 M.a. després."
        ],
        correct: 3,
        feedback: {
          correct: "Exacte. Tots els planetes del sistema solar es van formar del mateix núvol de gas i pols fa uns 4.600 milions d'anys. Una roca marciana de 4.000 M.a. hi encaixa perfectament: vol dir que Mart ja tenia escorça sòlida uns 600 milions d'anys després de formar-se, igual com les roques més antigues de la Terra.",
          wrong: "Situa-ho a l'escala del temps còsmic: Big Bang ~13.800 M.a., sistema solar sencer (Sol i planetes, del mateix núvol) ~4.600 M.a. Una roca de 4.000 M.a. és més jove que el sistema solar, així que no hi ha cap contradicció — i el temps no passa a ritmes diferents segons el planeta."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "L'edat de 4.000 milions d'anys es va obtenir mesurant la desintegració radioactiva d'alguns minerals. En què es diferencia aquest mètode de datar per superposició de capes?",
        options: [
          "En res: mesurar la radioactivitat i mirar l'ordre de les capes són exactament el mateix mètode explicat amb dos noms diferents.",
          "La radioactivitat dona una xifra d'anys perquè el ritme de desintegració és constant; la superposició només dona l'ordre.",
          "La radioactivitat només serveix per a roques de la Terra, mai per a roques d'un altre planeta.",
          "Cap dels dos mètodes no dona anys: tots dos donen només un ordre d'esdeveniments."
        ],
        correct: 1,
        feedback: {
          correct: "Exacte: datació absoluta (una xifra d'anys) contra datació relativa (un ordre). És el que vas simular amb els daus a S2: com que la semivida és constant i coneguda, la proporció que queda de l'element original fa de rellotge.",
          wrong: "Torna a S2: la superposició et diu què és més antic que què, però no quants anys fa. La desintegració radioactiva sí que dona anys, perquè el ritme (la semivida) és constant, i funciona a qualsevol roca, vingui d'on vingui."
        }
      },
      {
        id: 't3',
        oa: 'OA4',
        text: "L'equip de la NASA va dir que havien trobat «estructures que s'assemblen a bacteris fossilitzats». Els diaris van titular «Troben vida a Mart». Per què aquestes dues frases no tenen el mateix nivell de certesa?",
        options: [
          "El titular és més prudent, perquè com més curta és una frase menys es compromet.",
          "Tenen exactament el mateix nivell: totes dues parlen del mateix descobriment.",
          "L'anunci era una observació més una hipòtesi oberta; el titular la dona per fet establert.",
          "El titular té més rigor, perquè un diari revisa la informació més que els mateixos investigadors."
        ],
        correct: 2,
        feedback: {
          correct: "Exacte, i és el judici que has fet servir tot el curs: «s'assembla a» és una hipòtesi que caldrà contrastar; «troben vida» ja és una afirmació tancada. El salt entre l'una i l'altra el van fer els titulars, no les dades.",
          wrong: "Repassa els quatre nivells de certesa que vas treballar a S1: fet establert, hipòtesi amb proves, especulació i afirmació no científica. «Unes estructures s'assemblen a bacteris» és una hipòtesi; «troben vida» és donar per establert justament allò que calia demostrar."
        }
      },
      {
        id: 't4',
        oa: 'OA3',
        text: "Imagina que algun dia es confirma que hi va haver vida microbiana a Mart fa 4.000 milions d'anys. Què es podria concloure —i què no— sobre l'origen de la vida a la Terra?",
        options: [
          "Que la vida terrestre va arribar de Mart dins d'un meteorit: seria la confirmació definitiva de la panspèrmia.",
          "Que la hipòtesi de Miller-Urey queda descartada, perquè la vida no hauria començat aquí.",
          "Que la vida pot sorgir allà on hi ha condicions semblants, però sense confirmar cap hipòtesi terrestre concreta.",
          "Res de res: un descobriment a Mart no té cap relació amb la pregunta de l'origen de la vida."
        ],
        correct: 2,
        feedback: {
          correct: "Exacte, i el mèrit és no fer un salt massa gran. Seria una dada molt rellevant per a l'astrobiologia —suggeriria que la vida no és un accident irrepetible— però no diria quina de les tres hipòtesis terrestres (sopa primordial, món ARN, fumaroles) és la bona. Compte també amb la panspèrmia: trobar vida a Mart no demostra que la nostra en vingui, i encara que en vingués, només traslladaria la pregunta a Mart en comptes de respondre-la.",
          wrong: "Vigila de confondre «és rellevant per a una pregunta» amb «la respon». Trobar vida marciana no diria com va començar la vida aquí, ni confirmaria la panspèrmia (que, a més, no explica l'origen: només el mou de lloc), ni descartaria Miller-Urey, que és un experiment sobre química terrestre."
        }
      }
    ]
  }
}
