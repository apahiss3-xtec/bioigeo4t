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
//
// Revisió 2026-09-29 (autoavaluació ≠ prova): l'assaig escrit copiava
// preguntes de la prova final del curs («El llac sota el gel»). S'ha refet
// sencer amb un context NOU —els microorganismes dins els cristalls de guix d'una mina de Mèxic— que no és el de la
// prova, ni l'enigma de la SA, ni el del test. Cada pregunta entrena
// els blocs 1 i 6 de la prova final (6c–6e: controls i grau de certesa) amb les mateixes habilitats i exigència
// (tipus de dada, verb, format) i el model AE tanca l'error típic del bloc.
// Auditoria: web/scripts-avaluacio/audita_autoavaluacio.py.
export const sa7Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Assaig dels blocs de la prova final que treballen SA7 (el control experimental i el grau de certesa), amb un cas NOU: una mina de Mèxic amb cristalls de guix gegants, a 300 m de fondària i a uns 50 °C. Dins dels cristalls hi ha bombolles petites d'aigua que van quedar tancades quan el cristall creixia. Una investigadora, la doctora Ruiz, obre aquestes bombolles amb una agulla estèril i hi troba microorganismes vius. Per arribar-hi, l'equip ha de trepitjar la cova, tocar els cristalls i fer-hi forats. Full, bolígraf i sense apunts.",
    minutes: 26,
    questions: [
      {
        id: 'w1',
        oa: 'OA3',
        source: 'Entrena el bloc 1 de la prova final · proposar els controls d\'un resultat',
        minutes: 7,
        text: "Un revisor diu que, abans d'afirmar que els microorganismes vivien DINS dels cristalls, calen controls. Proposa un control negatiu i un control positiu: per a cada un, digues què analitzaries i què hi hauria de sortir si la feina està ben feta.",
        model: {
          as: "Control negatiu: analitzar l'agulla, l'aigua i els productes que es fan servir, sense obrir cap cristall; no hi hauria de sortir cap microorganisme. Control positiu: afegir un microorganisme conegut a una mostra estèril i comprovar que el mètode el detecta.",
          ae: "Control negatiu: passar per tot el procés una mostra on SEGUR que no hi ha microorganismes de la cova: l'agulla estèril i els reactius sense tocar cap cristall, i també un frotis de la superfície externa del cristall abans d'obrir-lo. Si la feina està ben feta, a l'agulla i als reactius no hi ha de sortir res, i el que surti a la superfície ens diu què hi pot haver deixat l'equip o l'aire de la cova, per comparar-ho amb el de dins. Control positiu: una mostra estèril a la qual s'afegeix una quantitat petita d'un microorganisme conegut, processada exactament igual. Hi ha de sortir, perquè demostra que el mètode és capaç de detectar-lo: si no sortís, un resultat negatiu no voldria dir res. Un control no és repetir la mesura: és una mostra on ja saps què ha de sortir, que et diu si pots creure't la teva.",
        },
        aeWhy: "L'AE proposa els dos controls amb el que s'espera de cadascun i explica què demostra cada un: el negatiu descarta la contaminació; el positiu, que el mètode funciona. Tanca l'error típic de confondre un control amb repetir la mesura.",
        must: [
          "Has proposat un control negatiu (agulla i reactius sense cristall, o superfície externa).",
          "Has dit que al negatiu no hi ha de sortir res.",
          "Has proposat un control positiu amb un microorganisme conegut, i que hi ha de sortir.",
          "Has explicat que un control no és el mateix que repetir la mesura."
        ]
      },
      {
        id: 'w2',
        oa: 'OA3',
        source: 'Entrena el bloc 1 de la prova final · què concloure si un control falla',
        minutes: 5,
        text: "Els resultats arriben i, al control negatiu, hi apareixen microorganismes de la mateixa mena que els de dins dels cristalls. La doctora Ruiz tenia l'article gairebé acabat. Què vol dir aquest resultat? Explica què s'ha de fer amb l'article, què no es pot donar per provat i quins passos vénen ara.",
        model: {
          as: "Vol dir que hi ha contaminació: els microorganismes poden venir del material o de l'equip. No es pot publicar que vivien dins dels cristalls. Cal trobar d'on ve la contaminació i repetir-ho amb més cura.",
          ae: "Vol dir que el mètode deixa entrar microorganismes de fora: el que s'ha trobat dins els cristalls pot ser contaminació, i no hi ha manera de saber quina part ho és. L'article, tal com està, no es pot publicar: seria afirmar una cosa que les dades no sostenen. Compte, però: tampoc no queda demostrat que els microorganismes NO siguin de dins els cristalls. El resultat no diu «són de fora»; diu «amb això no ho podem saber». Cal buscar la font de la contaminació (material, reactius, persones, aire de la cova), corregir el protocol, per exemple esterilitzant la superfície del cristall abans d'obrir-lo, i repetir-ho tot amb controls nous. Només si el negatiu surt net i el de dins no, es podrà tornar a plantejar.",
        },
        aeWhy: "L'AE separa les tres coses que demana la pregunta (publicació, què no queda demostrat i passos següents) i evita els dos errors típics: publicar igualment i concloure que els microorganismes no són de dins. Un control fallat deixa la pregunta oberta, no la tanca en contra.",
        must: [
          "Has dit que no es pot publicar així.",
          "Has dit que no queda demostrat, però que tampoc no queda descartat.",
          "Has proposat buscar la font de contaminació i corregir el mètode.",
          "Has dit que cal repetir-ho amb controls nous."
        ]
      },
      {
        id: 'w3',
        oa: 'OA4',
        source: 'Entrena el bloc 6 de la prova final · classificar afirmacions pel grau de certesa',
        minutes: 7,
        text: "Suposa que el problema s'ha resolt i els controls ara surten bé. Un diari publica quatre frases. Per a cada una, decideix si és un fet establert, una especulació, una afirmació no científica o una hipòtesi amb proves, i justifica-ho. 1) S'han trobat microorganismes a totes les bombolles de cristall obertes i analitzades amb el protocol nou. 2) Aquests microorganismes van quedar tancats quan els cristalls es formaven, fa desenes de milers d'anys. 3) A les coves de qualsevol planeta amb aigua calenta sota terra hi deu haver vida com aquesta. 4) Han sobreviscut tant de temps perquè estaven destinats a ser descoberts.",
        model: {
          as: "1) Fet establert: s'ha observat. 2) Hipòtesi amb proves: hi ha dades que ho fan pensar, però no és segur. 3) Especulació: no hi ha cap prova d'altres planetes. 4) No científica: no es pot comprovar.",
          ae: "1) Fet establert: és una observació directa, feta amb controls que surten bé, i qualsevol equip que repeteixi el protocol ho pot comprovar. Diu què s'ha trobat, no per què. 2) Hipòtesi amb proves: la sostenen dades (l'edat dels cristalls, el fet que les bombolles són tancades i que els controls descarten contaminació), però no s'ha observat el moment en què van quedar tancats i hi podria haver altres explicacions, com una fissura antiga per on haguessin entrat després. 3) Especulació: estén el cas a altres planetes sense cap dada d'enlloc fora de la Terra. No és absurda, però ara com ara no té proves. 4) Afirmació no científica: «estaven destinats» parla d'un propòsit, i no hi ha cap observació que la pugui confirmar ni desmentir.",
        },
        aeWhy: "L'AE justifica cada nivell amb un criteri (observació repetible, dades que sostenen però no demostren, extensió sense dades, impossibilitat de posar-ho a prova), i a la 2 diu què li falta per ser un fet. L'error típic és classificar per intuïció o confondre especulació amb no científica.",
        must: [
          "Has classificat 1 com a fet, 2 com a hipòtesi, 3 com a especulació i 4 com a no científica.",
          "A cada una has donat el criteri, no només l'etiqueta.",
          "A la 2 has dit quines proves la sostenen i per què encara no és un fet.",
          "Has distingit l'especulació (sense proves encara) de la no científica (no es pot provar)."
        ]
      },
      {
        id: 'w4',
        oa: 'OA4',
        source: 'Entrena el bloc 6 de la prova final · què faria pujar una afirmació de nivell',
        minutes: 7,
        text: "a) Quina observació concreta faria pujar de nivell la frase 3? b) Per què cap observació no aconseguirà mai fer pujar la frase 4? Respon-ho sense afirmar que és falsa.",
        model: {
          as: "a) Trobar microorganismes en aigua calenta sota terra en un altre planeta o lluna. b) Perquè no hi ha cap experiment que la pugui comprovar: no parla de coses que es puguin mesurar.",
          ae: "a) Una observació fora de la Terra: per exemple, que una sonda detecti en aigua subterrània calenta d'un altre planeta molècules que només fan els éssers vius, o microorganismes, amb controls que descartin que els hi hagi portat la mateixa sonda. Llavors la frase passaria d'especulació a hipòtesi amb proves; per ser un fet caldria que es repetís en diversos llocs, perquè «qualsevol planeta» és molt més que un cas. b) La frase 4 no fa cap predicció que es pugui comprovar: tant si demà es troben més microorganismes com si no, «estaven destinats» encaixa amb qualsevol resultat. Una afirmació que cap observació no pot contradir tampoc no la pot confirmar cap observació, i per això queda fora de la ciència. No per això és falsa: simplement, la ciència no té cap manera de posar-la a prova.",
        },
        aeWhy: "L'AE proposa una observació concreta i realista, diu a quin nivell faria pujar la frase i què faltaria per arribar a fet. I explica per què la 4 no pot pujar (no es pot contradir) sense caure en l'error de declarar-la falsa, que és l'extra de la versió A.",
        must: [
          "Has proposat una observació concreta fora de la Terra.",
          "Has dit fins a quin nivell pujaria la frase 3.",
          "Has explicat que la 4 encaixa amb qualsevol resultat i no es pot posar a prova.",
          "No has dit que la 4 sigui falsa."
        ]
      }
    ]
  },

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
      "L'any 1984 es va recollir un meteorit anomenat ALH84001. Les anàlisis de la seva composició (les proporcions d'isòtops de gasos atrapats a dins) van demostrar que provenia de Mart: un impacte va llançar aquest tros de roca marciana a l'espai fa uns 17 milions d'anys, i va caure a la Terra fa uns 13.000 anys. Mesurant la desintegració radioactiva d'alguns dels seus minerals, els científics van calcular que la roca es va formar fa uns 4.000 milions d'anys, quan Mart era jove. El 1996, un equip de la NASA va anunciar en una roda de premsa que havien trobat, dins d'aquest meteorit, unes estructures microscòpiques amb forma de bastonet que s'assemblaven a bacteris fossilitzats, i van suggerir que podrien ser una prova de vida antiga a Mart. La notícia va aparèixer a portada de diaris de tot el món amb titulars com «Troben vida a Mart». Anys després, la majoria de la comunitat científica va concloure que aquelles estructures probablement es podien explicar per processos purament químics, sense necessitat que hi hagués vida, tot i que el debat no està completament tancat encara avui.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "La roca del meteorit es va formar fa uns 4.000 milions d'anys. Encaixa aquesta xifra amb el que saps sobre com i quan es va formar el sistema solar?",
        options: [
          "No: una roca de Mart hauria de tenir exactament la mateixa edat que el seu planeta.",
          "No: si venia de Mart, hauria de tenir l'edat de l'univers sencer, uns 13.800 milions d'anys.",
          "Sí, però només perquè a Mart el temps passa a un ritme diferent que a la Terra.",
          "Sí: el sistema solar té uns 4.600 M.a., i Mart ja tenia escorça uns 600 M.a. després."
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
          "Que la vida terrestre va arribar de Mart a bord d'un meteorit: seria la confirmació definitiva de la panspèrmia.",
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
