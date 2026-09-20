// Material d'autoavaluació de SA1 (Ciència i Pseudociència): checklist
// d'estudi (el que cal saber per tancar la SA) + test de transferència
// amb un cas NOU —la polsera Power Balance— diferent dels casos treballats
// a les sessions, per comprovar si l'alumne sap APLICAR el detector a un
// cas que ningú no li ha triat, i no només recordar la teoria.
//
// Revisió 2026-08-17 (revisió agent-alumne, 2 rondes). Canvis: la resposta
// correcta era la primera opció i la més llarga a les quatre preguntes (el
// test s'encertava sencer sense llegir res) → opcions reordenades i
// igualades en llargada, i dos distractors buits substituïts per errors
// conceptuals reals.
//
// Revisió 2026-08-18: resolt el pendent del 17/08 sobre el «doble cec».
// c7 prometia un concepte que cap sessió de SA1 (s1–s4) no ensenya —el
// terme es treballa més tard, a sa2/s3.js («els assajos es fan amb molts
// casos i sovint a cegues»)—, de manera que la checklist d'estudi de SA1
// demanava repassar una cosa que no s'havia explicat. Reescrit c7 amb el
// que SA1 SÍ que ensenya i que és el que t3 realment posa a prova: el lligam
// entre el senyal 5 del detector («apel·la al que vols creure», s2/t2) i el
// senyal 1 («no es pot comprovar»), és a dir, que una prova justa ha de
// treure del mig les ganes de creure-hi. t3 es manté: el context defineix
// què és el doble cec i la pregunta demana INFERIR per què fa fiable la
// mesura, que és exactament el que ha de fer un test de transferència; només
// se n'ha ancorat el feedback `wrong` al senyal 5 perquè el camí de tornada
// a SA1 sigui explícit. Divergència vault↔material anotada a ESTAT.md.
export const sa1Avaluacio = {
  // Assaig de prova escrita. El test de 4 opcions comprova si es transfereix
  // una idea, pero la prova es respon ESCRIVINT: marcar la casella bona dona
  // una falsa sensacio d'anar preparat. Aqui les preguntes son del tipus de
  // les de la prova i s'han de respondre a ma, en un full, abans d'obrir la
  // solucio; els models AS i AE estan escrits amb els mateixos descriptors
  // que fan servir les rubriques de les proves del curs.
  escrita: {
    intro:
      "Aquestes preguntes són del tipus que trobaràs a la prova. Full, bolígraf i sense apunts: escriu la resposta sencera i només després obre la solució. A SA1 gairebé tot es respon argumentant, i un argument no és una etiqueta: «això és pseudociència» no és una resposta fins que dius per què.",
    minutes: 24,
    questions: [
      {
        id: 'w1',
        oa: 'OA4',
        source: 'Tipus de pregunta de la prova · Veredicte amb el detector',
        minutes: 7,
        text: "Un producte promet millorar la concentració «gràcies a la ressonància quàntica de les cèl·lules». No hi ha cap estudi publicat, però la web recull desenes de testimonis entusiastes. Dona-li un veredicte (ciència / pseudociència / encara no comprovat) i justifica'l amb els senyals del detector.",
        model: {
          as: "És pseudociència. Fa servir paraules que sonen científiques («quàntica») sense explicar res, es basa en testimonis en comptes de dades, i no hi ha cap estudi que ho pugui comprovar.",
          ae: "Veredicte: pseudociència. Hi veig tres senyals alhora. (1) Sona científica: «ressonància quàntica» és vocabulari de física aplicat a un context on no vol dir res, i serveix per donar autoritat, no per explicar el mecanisme. (2) Les garanties que aporta són testimonis, no dades: molts casos anecdòtics no equivalen a un sol estudi controlat, perquè ningú no compta els que no ha funcionat. (3) No es pot comprovar: sense una predicció concreta que pugui sortir malament, cap resultat no la posaria en dubte. El que fa decisiu el veredicte no és que encara no hi hagi estudis —això només seria «encara no comprovat»—, sinó l'actitud davant la prova: es presenta com a ja demostrat i s'immunitza contra la crítica.",
        },
        aeWhy: "L'AE separa el calaix «pseudociència» del calaix «encara no comprovat» dient quin és el criteri que els distingeix (l'actitud davant la prova), i explica per què els testimonis no compten com a dades.",
        must: [
          "Has donat un veredicte explícit dels tres calaixos.",
          "Has citat com a mínim dos senyals del detector.",
          "Has explicat per què els testimonis no són dades.",
          "Has dit què diferencia la pseudociència del «encara no comprovat»."
        ]
      },
      {
        id: 'w2',
        oa: 'OA2',
        source: 'Tipus de pregunta de la prova · Tipus de garantia',
        minutes: 6,
        text: "Dues persones defensen la mateixa conclusió. Una diu: «ho he llegit en un metaanàlisi de 40 estudis». L'altra diu: «a casa meva ho hem fet sempre així i ens ha anat bé». Explica quina garantia fa servir cadascuna i per quina raó no donen la mateixa certesa.",
        model: {
          as: "La primera fa servir dades i la segona, hàbits. Les dades donen més certesa perquè es poden comprovar i repetir, mentre que un hàbit només diu que a ells els ha funcionat.",
          ae: "La primera fa servir dades (i un model, perquè un metaanàlisi resumeix molts estudis amb un criteri); la segona fa servir hàbits, reforçats per identitat («a casa meva»). No donen la mateixa certesa perquè les dades són públiques i contrastables: qualsevol pot mirar si els 40 estudis estan ben fets i si el resum és honest, i si estan equivocats es pot demostrar. Un hàbit, en canvi, només informa que una cosa s'ha repetit, no que funcioni: no té grup de comparació —no se sap què hauria passat fent-ho d'una altra manera— i no distingeix una relació causal d'una casualitat. Això no vol dir que l'hàbit hagi de ser fals; vol dir que, si volem saber si és cert, cal posar-lo a prova amb dades.",
        },
        aeWhy: "L'AE no es limita a ordenar les garanties: diu QUÈ falta a l'hàbit (grup de comparació, causalitat) i evita concloure que el segon estigui equivocat, que és el matís que la rúbrica busca.",
        must: [
          "Has anomenat les dues garanties amb el nom que fem servir a classe.",
          "Has dit per què les dades són contrastables.",
          "Has dit què li falta a l'hàbit per ser una prova.",
          "No has dit que la segona persona estigui necessàriament equivocada."
        ]
      },
      {
        id: 'w3',
        oa: 'OA3',
        source: 'Tipus de pregunta de la prova · Disseny de la prova',
        minutes: 6,
        text: "Vols comprovar si una infusió realment redueix el mal de cap. Explica com muntaries la prova perquè les ganes de creure-hi no puguin decidir el resultat.",
        model: {
          as: "Faria dos grups a l'atzar: un pren la infusió i l'altre una infusió sense l'ingredient (placebo), amb el mateix gust i aspecte. Ningú no sabria quin pren, ni els participants ni qui recull les dades.",
          ae: "Partiria d'una hipòtesi concreta i falsable: «qui pren la infusió A té menys episodis de mal de cap en quatre setmanes que qui pren la B». Repartiria molts participants a l'atzar en dos grups, un amb la infusió i l'altre amb un placebo indistingible en gust, color i olor, i mesuraria la mateixa variable en tots dos amb el mateix criteri. La clau és que ni els participants ni qui recull les dades sàpiguen qui pren què: així les ganes de creure-hi —el senyal 5— no poden decidir ni el que noten ni el que s'apunta. I abans de concloure res, caldria repetir-ho amb altres grups: un resultat que no es pot replicar no és un resultat.",
        },
        aeWhy: "L'AE parteix d'una hipòtesi que pot sortir malament, connecta explícitament el disseny amb el senyal 5 del detector i afegeix la replicació. L'AS descriu el muntatge però no diu per què cada peça hi és.",
        must: [
          "Has enunciat una hipòtesi que es pot posar a prova.",
          "Has posat un grup control amb placebo.",
          "Has repartit els participants a l'atzar.",
          "Has explicat per què ningú no ha de saber qui pren què.",
          "Has dit que cal repetir l'estudi."
        ]
      },
      {
        id: 'w4',
        oa: 'OA1',
        source: 'Tipus de pregunta de la prova · Provisionalitat',
        minutes: 5,
        text: "Un company diu: «si els científics canvien d'idea cada pocs anys, vol dir que no en saben res». Respon-li amb el que has treballat sobre com funciona la ciència.",
        model: {
          as: "No té raó. La ciència canvia quan apareixen proves noves, i això és una virtut: vol dir que el model nou explica millor les dades. El que seria dolent és no canviar mai.",
          ae: "El que descriu com un defecte és precisament el mecanisme. Un model científic no és una veritat definitiva sinó la millor explicació disponible amb les proves que tenim; quan apareix una prova que no hi encaixa, el model es corregeix o se substitueix. Per això la ciència no dona mai un 100 % de certesa, i tampoc un 0 %: dona graus. Ara bé, que canviï no vol dir que qualsevol cosa valgui igual: el model nou ha d'explicar tot el que explicava l'antic i, a més, allò que l'antic no explicava. Canviar davant de proves noves és el contrari de no saber-ne res: és l'única manera de saber-ne cada cop més.",
        },
        aeWhy: "L'AE bloqueja la sortida relativista («tot és opinable») dient quina condició ha de complir el model nou per ser millor.",
        must: [
          "Has dit que canviar amb proves noves és una virtut.",
          "Has parlat de graus de certesa, no de veritat o mentida.",
          "Has dit què ha de complir el model nou per ser millor.",
          "Has respost al company, no has fet només una definició."
        ]
      }
    ]
  },

  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé posar una nota de certesa (1–10) a una afirmació i justificar per què no és ni 100% segura ni del tot falsa." },
    { id: 'c2', oa: 'OA1', text: "Entenc per què a la ciència res no és 100% segur, i que canviar un model quan hi ha proves noves és una virtut, no una debilitat." },
    { id: 'c3', oa: 'OA2', text: "Reconec els 5 tipus de garanties (dades, models, hàbits, autoritat, identitat/valors) en un argument real." },
    { id: 'c4', oa: 'OA2', text: "Sé explicar per què dades i models donen més certesa que autoritat, hàbits o identitat/valors." },
    { id: 'c5', oa: 'OA2', text: "Conec el meu perfil epistèmic: sé de quines garanties abuso i en quins casos decideixo per allò que VULL que sigui cert (identitat i valors) en comptes de per proves." },
    { id: 'c6', oa: 'OA3', text: "Puc explicar com treballa la ciència: hipòtesi, experiment que la pot posar a prova, i revisió crítica dels resultats." },
    { id: 'c7', oa: 'OA3', text: "Sé que les ganes de creure en una cosa (senyal 5) et poden fer notar un efecte que no hi és, i que per això una prova només val si està muntada de manera que aquestes ganes no puguin decidir el resultat." },
    { id: 'c8', oa: 'OA4', text: "Passo una afirmació pels 5 senyals del detector (no es comprova · no admet crítica · autoritat/testimonis · sona científica · apel·la al que vols creure)." },
    { id: 'c9', oa: 'OA4', text: "Distingeixo els tres calaixos: ciència, pseudociència i allò «encara no comprovat», i sé que la clau és l'actitud davant la prova." },
    { id: 'c10', oa: 'OA4', text: "Sé donar jo sol/a un veredicte a un cas NOU (ciència / pseudociència / encara no comprovat) amb un perquè, no només una etiqueta." }
  ],

  // Cas-fil NOU: la polsera Power Balance (holograma "que millora
  // l'equilibri i la força"). Context real, mediàtic i tancat amb un
  // assaig a doble cec —diferent dels casos caçats a classe—, per mesurar
  // transferència: graus de certesa, garanties, mètode científic i els
  // tres calaixos (ciència / pseudociència / encara no comprovat).
  test: {
    context:
      "Fa uns anys es van vendre milions de polseres «Power Balance»: una goma amb un petit holograma que, segons l'anunci, «equilibrava l'energia del cos» i millorava l'equilibri i la força. Molts esportistes famosos la duien i deien que els funcionava. Uns quants equips independents ho van provar diverses vegades a doble cec: ni els esportistes ni qui feia el test sabien si duien la polsera de veritat o una d'idèntica però sense holograma. El resultat va ser sempre el mateix: cap diferència. El 2010 les autoritats australianes van obligar l'empresa a publicar que no tenia cap prova científica i a tornar els diners a qui ho reclamés; tot i això, el producte es va continuar venent arreu amb la mateixa promesa.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Abans de les proves, molta gent estava «segura al 100%» que la polsera funcionava perquè la notaven. Què hauries de fer amb aquella certesa un cop coneguts els resultats dels tests a doble cec?",
        options: [
          "Deixar-la igual: si tu notes que et funciona, és que et funciona de veritat",
          "Apujar-la fins al 100%, perquè ara ja se n'ha parlat molt i tothom ho comenta",
          "Abaixar-la molt: quan apareixen proves fiables en contra, cal ajustar la certesa",
          "És impossible saber-ho, perquè la certesa d'una persona no es pot mesurar de cap manera"
        ],
        correct: 2,
        feedback: {
          correct: "Exacte. La certesa no és fixa: es mou amb les proves. Una prova fiable en contra és una raó forta per baixar la nota de certesa, encara que abans n'estiguessis convençut.",
          wrong: "Recorda els graus de certesa: cap afirmació és 100% segura i la certesa s'ha d'ajustar quan arriben proves noves. Aquí la prova a doble cec no troba cap efecte: cap a on hauria d'anar la teva certesa?"
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "«Molts esportistes famosos la porten i diuen que els va bé.» Quin tipus de garantia fa servir sobretot aquest argument de l'anunci?",
        options: [
          "Dades: en són milions, els que l'han comprada i diuen que els va bé",
          "Només hàbits i costum: «això sempre s'ha fet així»",
          "Models: explica per quin mecanisme l'holograma actuaria sobre el cos",
          "Autoritat i testimonis: persones conegudes ho diuen, no pas dades"
        ],
        correct: 3,
        feedback: {
          correct: "Molt bé. Fiar-se que «ho diu algú famós» és la garantia d'autoritat/testimoni, una de les més febles: que algú sigui conegut no fa que tingui raó.",
          wrong: "Fixa't en QUI dona força a l'argument: no són mesures ni experiments, sinó persones famoses que ho asseguren. Quina garantia és, dades o autoritat/testimonis?"
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "Al mètode científic, per què fer la prova «a doble cec» (ningú sabia qui duia la polsera de veritat) la fa més fiable per mesurar l'efecte real?",
        options: [
          "Perquè així es pot provar el producte en molta més gent alhora i en menys temps",
          "Perquè les expectatives i les ganes de creure-hi no poden influir en el resultat",
          "Perquè garanteix que els científics que la fan no treballen per a l'empresa",
          "No aporta res: tant se val si se sap qui duia la polsera bona i qui la falsa"
        ],
        correct: 1,
        feedback: {
          correct: "Correcte. Un bon experiment ha d'aïllar allò que vol mesurar. El doble cec treu del mig les expectatives i les ganes de creure-hi, així que si apareix un efecte, és de la polsera; si no, no n'hi ha.",
          wrong: "Lliga-ho amb el detector de S2: el senyal 5 diu que una promesa apel·la al que VOLS creure. Si saps que dus la polsera «bona», aquestes ganes ja et poden fer notar que et va millor, sense que la polsera hi tingui res a veure. Què és, doncs, el que el doble cec treu del mig perquè la mesura sigui fiable?"
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "L'empresa va continuar venent la polsera amb les mateixes promeses fins i tot després que cap de les proves no trobés cap efecte. A quin calaix la posaries?",
        options: [
          "Ciència: s'ha fet un experiment de veritat sobre el producte, amb controls i tot",
          "Encara no comprovat: caldria fer-hi més proves abans de decidir-ho",
          "Pseudociència: les proves no van trobar cap efecte i no corregeixen la promesa",
          "No es pot classificar de cap manera amb el detector de pseudociència"
        ],
        correct: 2,
        feedback: {
          correct: "Així és. La diferència no és el tema, és l'actitud davant la prova: la ciència corregeix el model quan la prova falla; aquí es va ignorar la prova i mantenir la promesa. Això és pseudociència.",
          wrong: "La clau són els senyals 1 i 2 del detector: es va PODER comprovar (senyal 1 superat) però NO admeten la crítica ni corregeixen res després d'un resultat negatiu. Quin calaix descriu «no admet crítica»?"
        }
      }
    ]
  }
}
