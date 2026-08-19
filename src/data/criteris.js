// Criteris d'avaluació oficials de Biologia i Geologia · 4t d'ESO (matèria optativa).
//
// Cada criteri té dos camps:
//   · `oficial` — TEXT LITERAL del currículum. Font: llistat oficial «Criteris
//     d'avaluació 4t OPT» (Decret 175/2022, Annex 3. Matèries de l'educació
//     secundària obligatòria — Biologia i geologia), recollit al vault a
//     «_Sistema/Currículum oficial 4t ESO - cita literal».
//     ⚠️ NO reescriure'l, resumir-lo ni «adaptar-lo»: ha de coincidir paraula
//     per paraula amb el currículum.
//   · `resum` — la mateixa idea en una línia i en llenguatge d'alumne. Això SÍ
//     que es pot millorar. És el que es llegeix primer a la web; el text oficial
//     queda a sota, en petit, per a qui el vulgui.
//
// La numeració X.Y vol dir: X = competència específica (CE), Y = ordre del
// criteri dins d'aquella CE. Per tant el criteri 6.5 és el cinquè de la CE6.

export const criterisAvaluacio4t = {
  '1.1': {
    resum: 'Analitzo conceptes i fenòmens a partir d\'informació en formats diferents (gràfics, taules, esquemes, webs…) amb actitud crítica, i defenso conclusions i opinions pròpies fonamentades en raons científiques.',
    oficial: 'Analitzar conceptes, fenòmens i processos relacionats amb els sabers de la biologia i la geologia, interpretant informació en diferents formats (models, gràfics, taules, diagrames, fórmules, esquemes, símbols, pàgines web…), mantenint una actitud crítica i obtenint conclusions fonamentades en raons científiques i defensant amb criteri opinions pròpies fonamentades.'
  },
  '1.2': {
    resum: 'Explico i predic com es comporten fenòmens de cada dia fent servir models, lleis i teories de biologia i geologia.',
    oficial: 'Interpretar i predir el comportament de fenòmens quotidians, argumentant-ho amb rigor sobre la base de models, lleis i teories adequades de la biologia i la geologia.'
  },
  '1.3': {
    resum: 'Davant d\'un problema real, identifico quins conceptes científics hi entren, proposo solucions i argumento si valen o no.',
    oficial: 'Identificar els conceptes relacionats amb situacions problemàtiques reals de caràcter científic, proporcionar possibles solucions i argumentar sobre la seva validesa.'
  },

  '2.1': {
    resum: 'Busco informació en fonts diferents, la selecciono i l\'organitzo amb esperit crític, i dic sempre d\'on l\'he tret.',
    oficial: 'Resoldre qüestions i aprofundir en aspectes relacionats amb els sabers de la matèria de Biologia i Geologia localitzant, seleccionant, organitzant i analitzant críticament la informació de diferents fonts, citant-les correctament amb respecte per la propietat intel·lectual.'
  },
  '2.2': {
    resum: 'Comprovo si una informació és fiable (qui la signa, quina institució hi ha al darrere, amb quina intenció està publicada, si hi ha bibliografia, si es pot verificar amb altres fonts) i detecto pseudociència, conspiracions i notícies falses.',
    oficial: 'Contrastar la fiabilitat de la informació sobre temes relacionats amb els sabers de la matèria de Biologia i Geologia, utilitzant fonts fiables (tenint en compte si s\'identifica l\'autor o responsable, si hi ha una institució al darrere, quina és la finalitat o intenció de publicar aquella informació, si es pot verificar amb altres fonts, si hi ha bibliografia, etc.) adoptant una actitud crítica i escèptica vers informacions no fonamentades en la ciència, com pseudociències, teories conspiratòries, creences, falses notícies, mentides, etc.'
  },

  '3.1': {
    resum: 'Faig preguntes i formulo hipòtesis que es poden posar a prova a classe, i les distingeixo de les que no admeten cap comprovació.',
    oficial: 'Plantejar preguntes sobre fenòmens quotidians i formular hipòtesis que puguin ser respostes o contrastades en el context escolar a través de l\'experimentació, la presa de dades i l\'anàlisi de fenòmens biològics i geològics, diferenciant-les d\'aquelles qüestions pseudocientífiques que no admeten comprovació experimental.'
  },
  '3.2': {
    resum: 'Dissenyo jo com investigar una cosa: què deduir, quin experiment muntar i quins càlculs fer.',
    oficial: 'Dissenyar, fent servir metodologies pròpies de la ciència, procediments de recerca que impliquin l\'ús de la deducció, el treball experimental i el raonament logicomatemàtic.'
  },
  '3.3': {
    resum: 'Faig l\'experiment amb els instruments adequats i interpreto els resultats per treure\'n conclusions (o veig que amb aquestes dades no se\'n poden treure).',
    oficial: 'Portar a terme l\'experimentació plantejada fent servir els instruments, eines o tècniques adequades amb correcció i interpretar-ne els resultats quan sigui necessari amb eines matemàtiques i tecnològiques per obtenir conclusions raonades i fonamentades o valorar la impossibilitat de fer-ho.'
  },
  '3.4': {
    resum: 'Col·laboro amb els altres a cada fase del projecte, respectant la diversitat i fent que tothom hi càpiga, i valoro que investigar és feina d\'equip.',
    oficial: 'Establir col·laboracions quan sigui necessari en les diferents fases del projecte científic per treballar amb més eficiència, valorant la importància de la cooperació en la investigació, respectant la diversitat i afavorint la inclusió.'
  },
  '3.5': {
    resum: 'Presento els resultats d\'un experiment o d\'una sortida de camp i les conclusions de manera clara, argumentant com es connecten, amb el format adequat (taula, gràfic, informe) i eines digitals.',
    oficial: 'Presentar de manera clara i rigorosa els resultats i les conclusions obtingudes mitjançant l\'experimentació, argumentant la connexió entre uns i altres, i l\'observació de camp, utilitzant el format adequat (taules, gràfics, informes, etc.) i eines digitals.'
  },
  '3.6': {
    resum: 'Valoro què aporta la ciència a la societat i qui l\'ha feta, incloent-hi els biaixos de gènere, i que és una feina col·lectiva i de moltes disciplines que va canviant i que depèn també dels diners i de la política del moment.',
    oficial: 'Valorar la contribució de la ciència a la societat i la tasca de les persones que s\'hi han dedicat, argumentant sobre els biaixos de gènere en les ciències i la tecnologia i entenent la recerca com una tasca col·lectiva i interdisciplinària en constant evolució, influïda pel context polític i els recursos econòmics.'
  },

  '4.1': {
    resum: 'Resolc problemes i explico processos de biologia o geologia amb els coneixements i les dades que tinc, el raonament lògic i, si cal, eines digitals.',
    oficial: 'Resoldre problemes o donar explicació a processos biològics o geològics utilitzant coneixements, dades i informació aportades, el raonament lògic, el pensament computacional o recursos digitals.'
  },
  '4.2': {
    resum: 'Reviso críticament la meva solució i la canvio si no funciona o si apareixen dades noves.',
    oficial: 'Analitzar críticament la solució a un problema o fenòmens biològics i geològics i canviar els procediments usats o revisar les conclusions si aquesta solució no fos viable o davant de noves dades aportades amb posterioritat.'
  },

  '5.1': {
    resum: 'Justifico amb ciència per què cal conservar la biodiversitat, l\'entorn i la qualitat de vida, i identifico els riscos naturals que l\'acció humana pot agreujar en una zona, segons les seves roques, el relleu i la vegetació.',
    oficial: 'Justificar amb fonaments científics la importància de la preservació de la biodiversitat, la conservació de l\'entorn, la protecció dels éssers vius de l\'entorn, el desenvolupament sostenible i la qualitat de vida i identificar els possibles riscos naturals potenciats per determinades accions humanes sobre una zona geogràfica, tenint en compte les seves característiques litològiques, el relleu i la vegetació.'
  },
  '5.2': {
    resum: 'Analitzo amb esperit crític els hàbits (consum, residus, transport) i argumento per què cal que siguin sostenibles.',
    oficial: 'Argumentar sobre la necessitat de tenir hàbits sostenibles, analitzant les accions pròpies i alienes (hàbits de consum, generació residus, transport...), amb actitud crítica i basant-se en fonaments del funcionament dels sistemes naturals.'
  },
  '5.3': {
    resum: 'Analitzo els hàbits de salut (alimentació, descans, pantalles, activitat física…) i argumento per què cal que siguin saludables.',
    oficial: 'Argumentar sobre la necessitat de tenir hàbits saludables, analitzant les accions pròpies i alienes (alimentació, higiene, postura corporal, activitat física, desplaçaments segurs, relacions interpersonals, descans, exposició a les pantalles, maneig de l\'estrès, seguretat en les pràctiques sexuals, consum de substàncies…), amb actitud crítica i basant-se en fonaments de la fisiologia.'
  },
  '5.4': {
    resum: 'Argumento com el que sé de biologia i geologia pot millorar el medi ambient i la salut de tothom.',
    oficial: 'Argumentar, justificant les raons aportades, sobre com els coneixements derivats de la biologia i la geologia poden contribuir a millorar la sostenibilitat ambiental i la salut individual i col·lectiva.'
  },
  '5.5': {
    resum: 'Tiro endavant pel meu compte projectes científics per millorar la societat, treballant amb els companys de manera crítica i honesta.',
    oficial: 'Emprendre, de forma autònoma amb la metodologia adequada, projectes científics relacionats amb la millora de la societat i que afavoreixin el creixement entre iguals com a base d\'una comunitat científica escolar crítica i ètica.'
  },
  '5.6': {
    resum: 'Em comprometo davant dels hàbits de mobilitat que posen en risc la salut i decideixo a partir d\'informació fiable i amb base científica.',
    oficial: 'Adoptar actituds compromeses i actives davant de pràctiques, comportaments i hàbits per a una mobilitat segura i sostenible que suposen un risc per a la nostra salut, contrastant informacions fiables, objectives i amb una base científica vàlida.'
  },

  '6.1': {
    resum: 'Justifico com es relacionen i s\'influeixen entre ells els elements d\'un paisatge.',
    oficial: 'Justificar les relacions i la influència mútua que mantenen els diferents elements del paisatge.'
  },
  '6.2': {
    resum: 'Relaciono com és un paisatge avui amb els fets biològics, geològics i ambientals que hi han passat.',
    oficial: 'Relacionar el grau de desenvolupament integral d\'un paisatge amb els esdeveniments biològics, geològics i ambientals esdevinguts.'
  },
  '6.3': {
    resum: 'Identifico les activitats humanes que impacten el paisatge i proposo maneres realistes de revertir-ho.',
    oficial: 'Identificar i analitzar críticament les activitats humanes que impacten en el paisatge i fer propostes plausibles de reversió.'
  },
  '6.4': {
    resum: 'Identifico els riscos geològics, naturals o provocats per les persones, i proposo mesures de prevenció i correcció.',
    oficial: 'Identificar els principals riscos geològics derivats de causes naturals o antròpiques i proposar mesures de prevenció i correcció.'
  },
  '6.5': {
    resum: 'Dedueixo i explico la història d\'un paisatge, n\'identifico els elements més importants i faig servir la successió i els principis geològics (horitzontalitat, superposició, actualisme, neocatastrofisme…).',
    oficial: 'Deduir i explicar la història d\'un paisatge concret, identificar-ne els elements més rellevants, utilitzant el raonament, els coneixements sobre la successió i els principis geològics bàsics (horitzontalitat, superposició, actualisme, neocatastrofisme...).'
  }
}

// { resum, oficial } d'un criteri, o null si el codi no existeix.
export const getCriteri = (codi) => criterisAvaluacio4t[codi] || null

// Codi de la CE a la qual pertany un criteri: '6.5' → 'CE6'
export const ceDeCriteri = (codi) => `CE${String(codi).split('.')[0]}`

// Ordena una llista de codis numèricament: ['2.2','1.10','1.2'] → ['1.2','1.10','2.2']
export const ordenaCriteris = (codis) =>
  [...(codis || [])].sort((a, b) => {
    const [a1, a2] = String(a).split('.').map(Number)
    const [b1, b2] = String(b).split('.').map(Number)
    return a1 - b1 || a2 - b2
  })
