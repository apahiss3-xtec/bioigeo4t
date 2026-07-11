// Material d'autoavaluació de SA1 (Ciència i Pseudociència): checklist
// d'estudi (el que cal saber per tancar la SA) + test de transferència
// amb un cas NOU —la polsera Power Balance— diferent dels casos treballats
// a les sessions, per comprovar si l'alumne sap APLICAR el detector a un
// cas que ningú no li ha triat, i no només recordar la teoria.
export const sa1Avaluacio = {
  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé posar una nota de certesa (1–10) a una afirmació i justificar per què no és ni 100% segura ni del tot falsa." },
    { id: 'c2', oa: 'OA1', text: "Entenc per què a la ciència res no és 100% segur, i que canviar un model quan hi ha proves noves és una virtut, no una debilitat." },
    { id: 'c3', oa: 'OA2', text: "Reconec els 5 tipus de garanties (dades, models, hàbits, autoritat, identitat/valors) en un argument real." },
    { id: 'c4', oa: 'OA2', text: "Sé explicar per què dades i models donen més certesa que autoritat, hàbits o identitat/valors." },
    { id: 'c5', oa: 'OA2', text: "Conec el meu perfil epistèmic: de quines garanties abuso i quins biaixos em poden enganyar." },
    { id: 'c6', oa: 'OA3', text: "Puc explicar com treballa la ciència: hipòtesi, experiment que la pot posar a prova, i revisió crítica dels resultats." },
    { id: 'c7', oa: 'OA3', text: "Entenc per què posar una afirmació a prova «a cegues» (sense saber què esperem) dona una mesura més fiable de l'efecte real." },
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
      "Fa uns anys es van vendre milions de polseres «Power Balance»: una goma amb un petit holograma que, segons l'anunci, «equilibrava l'energia del cos» i millorava l'equilibri i la força. Molts esportistes famosos la duien i deien que els funcionava. Uns científics van fer una prova a doble cec: ni els esportistes ni qui feia el test sabien si duien la polsera de veritat o una d'idèntica però sense holograma. Resultat: no hi havia cap diferència. Tot i així, l'empresa va seguir venent-la amb les mateixes promeses.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Abans de la prova, molta gent estava «segura al 100%» que la polsera funcionava perquè la notaven. Com hauria de canviar aquesta certesa després de conèixer el resultat del test a doble cec?",
        options: [
          "Hauria de baixar molt: quan apareix una prova fiable en contra, has d'ajustar la teva certesa",
          "No hauria de canviar: si tu la notes, és que et funciona",
          "Hauria de pujar al 100%, perquè ara ja se n'ha parlat molt",
          "És impossible saber-ho, la certesa no es pot mesurar"
        ],
        correct: 0,
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
          "Autoritat i testimonis (persones conegudes ho diuen), no pas dades",
          "Dades i models (números i mesures fiables)",
          "Només hàbits («sempre s'ha fet així»)",
          "Cap: és un argument basat en experiments"
        ],
        correct: 0,
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
          "Perquè així ni les ganes de creure-hi ni les expectatives poden influir en el resultat: aïlla i mesura només l'efecte de la polsera",
          "Perquè és més ràpid de fer que una prova normal",
          "Perquè així els esportistes s'esforçaven més",
          "No aporta res: donava igual saber qui duia la polsera"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. Un bon experiment ha d'aïllar allò que vol mesurar. El doble cec treu del mig les expectatives i les ganes de creure-hi, així que si apareix un efecte, és de la polsera; si no, no n'hi ha.",
          wrong: "Pensa què ha de fer un bon experiment: aïllar la causa que vol mesurar. Si saps que dus la polsera «bona», potser ja et sents més fort per suggestió. Què treu del mig el doble cec perquè la mesura sigui fiable?"
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "L'empresa va continuar venent la polsera amb les mateixes promeses fins i tot després que la prova no trobés cap efecte. A quin calaix la posaries?",
        options: [
          "Pseudociència: es va poder comprovar, va sortir malament i tot i així no admeten la crítica ni corregeixen la promesa",
          "Ciència: han fet un experiment, per tant és ciència",
          "Encara no comprovat: falta fer-hi més proves abans de decidir",
          "No es pot classificar de cap manera"
        ],
        correct: 0,
        feedback: {
          correct: "Així és. La diferència no és el tema, és l'actitud davant la prova: la ciència corregeix el model quan la prova falla; aquí es va ignorar la prova i mantenir la promesa. Això és pseudociència.",
          wrong: "La clau són els senyals 1 i 2 del detector: es va PODER comprovar (senyal 1 superat) però NO admeten la crítica ni corregeixen res després d'un resultat negatiu. Quin calaix descriu «no admet crítica»?"
        }
      }
    ]
  }
}
