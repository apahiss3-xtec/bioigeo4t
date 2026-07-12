// Material d'autoavaluació de SA2 (La cèl·lula): checklist d'estudi (el
// que cal saber per tancar la SA) + test de transferència amb un cas NOU
// —un banc de teixits que cultiva pell per a empelts i un banc de
// fertilitat que revisa mostres de semen— diferent dels casos treballats
// a les sessions (arrel de ceba a S1, model de plastilina a S2, ratolins
// de laboratori a S3, els tres informes de S4), per comprovar si l'alumne
// sap APLICAR el cicle cel·lular, la mitosi, la meiosi i l'índex mitòtic
// a casos que ningú no li ha triat, i no només recordar-los.
export const sa2Avaluacio = {
  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé identificar les fases de la mitosi (interfase, profase, metafase, anafase, telofase) en una imatge o preparació." },
    { id: 'c2', oa: 'OA1', text: "Puc explicar per quina raó el cos ha de dividir cèl·lules per mitosi: reparar teixits i créixer." },
    { id: 'c3', oa: 'OA1', text: "Entenc que a la interfase la cèl·lula copia tot el seu ADN abans de repartir-lo, i que per això les dues cèl·lules filles surten idèntiques." },
    { id: 'c4', oa: 'OA2', text: "Sé distingir la mitosi (2 cèl·lules idèntiques, material complet) de la meiosi (4 cèl·lules, la meitat del material)." },
    { id: 'c5', oa: 'OA2', text: "Explico per què els gàmetes han de tenir la meitat dels cromosomes, i què passaria a la fecundació si no fos així." },
    { id: 'c6', oa: 'OA2', text: "Entenc per què la meiosi barreja el material genètic a l'atzar i és la font de la variabilitat entre germans." },
    { id: 'c7', oa: 'OA3', text: "Sé calcular l'índex mitòtic (cèl·lules en divisió ÷ total × 100) a partir d'un recompte." },
    { id: 'c8', oa: 'OA3', text: "Distingeixo al microscopi una cèl·lula en interfase (nucli difús) d'una en divisió (cromosomes visibles)." },
    { id: 'c9', oa: 'OA3', text: "Relaciono un índex mitòtic alt amb la pèrdua de control del cicle cel·lular i el risc de procés cancerós." },
    { id: 'c10', oa: 'OA4', text: "Sé justificar, davant d'un cas nou, si explica mitosi normal, mitosi descontrolada (càncer) o un error de meiosi, i per què." }
  ],

  // Cas-fil NOU: un banc de teixits que cultiva pell de laboratori per a
  // empelts (mitosi controlada) i un banc de fertilitat que troba una
  // anomalia en una mostra de semen (error de meiosi). Context real i
  // diferent dels quatre casos de les sessions, per mesurar transferència:
  // cicle cel·lular, mitosi, índex mitòtic i meiosi.
  test: {
    context:
      "Un banc de teixits cultiva pell de laboratori per fer empelts a persones grans cremades: parteixen d'una mostra petita de la pell sana del pacient i la deixen créixer en una placa fins a tenir prou pell nova. Un dia, en un dels cultius, els tècnics mesuren un índex mitòtic molt més alt del que esperaven i decideixen NO fer servir aquell cultiu per a l'empelt. El mateix dia, en un banc de fertilitat, un altre equip revisa mostres de semen d'un donant i troba que alguns espermatozoides tenen 46 cromosomes en comptes de 23, i també rebutgen la mostra.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Per quina raó el banc de teixits pot fer créixer pell nova a partir d'una mostra petita de pell del pacient?",
        options: [
          "Perquè les cèl·lules de la pell es divideixen per mitosi i produeixen cèl·lules noves idèntiques a l'original",
          "Perquè les cèl·lules de la pell fan meiosi i produeixen quatre còpies cada vegada",
          "Perquè la pell es regenera sense que cap cèl·lula es divideixi",
          "Perquè les cèl·lules de la pell no tenen ADN i per això es multipliquen soles"
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. La mitosi és la que produeix cèl·lules noves i idèntiques a partir d'una original: és el mecanisme que permet cultivar prou pell nova per a l'empelt, igual que el cos la fa servir per reparar ferides o créixer.",
          wrong: "Pensa en el que vas veure amb l'arrel de ceba a S1: quina divisió produeix cèl·lules idèntiques a l'original, la mateixa que el cos fa servir per reparar i créixer? És la que permet multiplicar la pell en cultiu."
        }
      },
      {
        id: 't2',
        oa: 'OA3',
        text: "El cultiu de pell té un índex mitòtic molt més alt del que s'esperava i per això es rebutja. Per què és un motiu de sospita, si al capdavall el que es vol és que la pell creixi?",
        options: [
          "Perquè un índex mitòtic anormalment alt pot indicar que el cultiu ha perdut el control de la divisió (com passa en un procés cancerós), i implantar-lo seria perillós",
          "Perquè un índex mitòtic alt vol dir que les cèl·lules ja no es divideixen gens",
          "Perquè un índex mitòtic alt sempre vol dir que la mostra és massa petita",
          "No hi ha cap motiu real: es podria implantar igualment"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. És el mateix raonament que amb les biòpsies del ratolí a S3: un índex mitòtic molt per sobre del que toca fa sospitar que el cicle ha perdut el control, i implantar un teixit així seria arriscat.",
          wrong: "Recorda S3: l'índex mitòtic mesura quin percentatge de cèl·lules està en divisió. Un valor molt alt no vol dir «més pell més de pressa i sense risc»: què sol indicar quan el cicle cel·lular no s'atura quan toca?"
        }
      },
      {
        id: 't3',
        oa: 'OA2',
        text: "Al banc de fertilitat, alguns espermatozoides tenen 46 cromosomes en comptes de 23. Quin procés explica millor aquesta anomalia?",
        options: [
          "Un error de meiosi: en algun moment del repartiment, l'espermatozoide s'ha quedat amb el material genètic complet (2n) en lloc de la meitat (n)",
          "Un error de mitosi: l'espermatozoide s'ha dividit en dues cèl·lules idèntiques",
          "És normal: tots els espermatozoides tenen 46 cromosomes",
          "Un procés cancerós al testicle"
        ],
        correct: 0,
        feedback: {
          correct: "Així és. Els gàmetes s'han de formar amb la meitat del material genètic (n) perquè, a la fecundació, la suma torni a donar el nombre normal (2n). Si un espermatozoide en té 46, el repartiment de la meiosi ha fallat.",
          wrong: "Recorda S2 i S4: un gàmeta normal ha de tenir la MEITAT dels cromosomes (23 en humans), no els 46 sencers. Quin dels dos processos (mitosi o meiosi) és el que reparteix el material a la meitat, i què vol dir que hagi fallat?"
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "Els dos casos del banc de teixits i del banc de fertilitat parlen de processos diferents (un de mitosi, l'altre de meiosi), però els dos equips actuen igual: rebutgen la mostra. Per què tenen raó de fer-ho en tots dos casos?",
        options: [
          "Perquè en tots dos casos hi ha un senyal que el procés no ha anat com toca (control perdut en un cas, repartiment incorrecte en l'altre), i usar la mostra tindria conseqüències greus per a la salut",
          "Perquè els dos casos parlen exactament del mateix procés",
          "Perquè rebutjar mostres és un protocol arbitrari sense cap raó biològica",
          "Perquè cap dels dos casos té relació amb la mitosi o la meiosi"
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. Encara que un cas sigui de mitosi descontrolada i l'altre d'un error de meiosi, en tots dos hi ha una divisió cel·lular que no ha sortit bé, i per això els dos equips prefereixen no arriscar la salut del pacient o del futur fill.",
          wrong: "Pensa-ho com al mapa dels tres processos de S4: no cal que els dos casos siguin el mateix procés per compartir el motiu de fons. Què tenen en comú «un cicle que no s'atura» i «un repartiment que no dona la meitat»?"
        }
      }
    ]
  }
}
