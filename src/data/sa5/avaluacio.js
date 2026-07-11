// Avaluació SA5: checklist d'estudi + test de transferència (El bosc dels Ports de Tortosa)
// Cas NOU: diferent de l'enigma de la cotorra — context de bosc mediterrani pertorbat.
export const sa5Avaluacio = {
  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé distingir els components biòtics (éssers vius) i abiòtics (factors físics) d'un ecosistema i poso exemples concrets de l'entorn de l'escola." },
    { id: 'c2', oa: 'OA1', text: "Sé diferenciar individu, població, comunitat i ecosistema i aplico correctament els 4 nivells a un exemple real." },
    { id: 'c3', oa: 'OA1', text: "Classific els organismes en productors, consumidors de 1r/2n/3r ordre i descomponedors, i explico la funció tròfica de cada grup." },
    { id: 'c4', oa: 'OA2', text: "Construeixo una cadena tròfica correcta de 4 eslabons i la transformo en una xarxa tròfica afegint ramificacions realistes." },
    { id: 'c5', oa: 'OA2', text: "Aplico la regla del 10% per calcular l'energia disponible en cada nivell tròfic i explico per quina raó les cadenes rarament superen 4-5 eslabons." },
    { id: 'c6', oa: 'OA2', text: "Sé interpretar una piràmide d'energia i explico per quina raó sempre té forma de piràmide (mai invertida), a diferència de les de nombre o biomassa." },
    { id: 'c7', oa: 'OA3', text: "Classifico les relacions interespecífiques (depredació, parasitisme, mutualisme, comensalisme, competència) indicant el signe +/−/0 per a cada participant." },
    { id: 'c8', oa: 'OA3', text: "Explico el cicle del carboni: els 4 reservoris (atmosfera, éssers vius, sòl, oceans) i els 4 fluxos principals (fotosíntesi, respiració, descomposició, combustió)." },
    { id: 'c9', oa: 'OA4', text: "Identifico les 5 amenaces principals a la biodiversitat (HIPPO) i les relaciono amb exemples reals de Catalunya." },
    { id: 'c10', oa: 'OA4', text: "Explico el mecanisme de l'èxit invasor de la cotorra argentina (4 factors: nínxol, exclusió competitiva, avantatges estructurals, absència de depredadors) i proposo mesures de gestió." }
  ],

  // Cas de transferència: el bosc dels Ports de Tortosa — context nou, diferent de l'enigma de la SA.
  // Cobreix OA1 (ecosistema), OA2 (xarxa tròfica + energia), OA3 (relacions + cicle carboni), OA4 (biodiversitat).
  test: {
    context:
      "Els Ports de Tortosa-Beseit son un dels boscos de pi negre i alzina més ben conservats de Catalunya. El 2023, un incendi va cremar el 15% de la superfície. Dos anys després, investigadors del CREAF observen que: la població de conills ha augmentat un 40% (menys depredadors i menys vegetació alta = més visibilitat per als depredadors = paradoxa). Les àguiles cuabarrades (depredadores de 3r ordre) han abandonat la zona. Els bolets (descomponedors) s'han multiplicat als troncs cremats. La regeneració de l'alzina és molt lenta.",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "L'incendi ha modificat els components abiòtics del bosc. Esmenta 3 factors abiòtics que han canviat amb l'incendi i explica com cadascun afecta els éssers vius del bosc.",
        options: [
          "Temperatura del sòl (augmenta → mata llavors i bacteris del sòl), llum disponible al sòl (augmenta → afavoreix plantes pioneres helèofites), composició química del sòl (augmenta minerals minerals per la cendra → fertilització temporal però pèrdua de matèria orgànica)",
          "Només canvia la temperatura; els altres factors abiòtics son independents del foc",
          "L'incendi no afecta factors abiòtics, únicament els éssers vius (components biòtics)",
          "Canvia la llum i la humitat, però la composició química del sòl és immutable"
        ],
        correct: 0,
        feedback: {
          correct: "Excellent. L'incendi modifica profundament el medi abiòtic: temperatura del sòl (fins a 300°C → mata microorganismes del sòl), llum solar disponible a nivell de terra (augmenta molt → avantatge per a plantes pioneres), composició química del sòl (la cendra aporta minerals però elimina la matèria orgànica que dona estructura al sòl).",
          wrong: "Recorda que els factors abiòtics inclouen tots els factors físics: llum, temperatura, humitat, composició del sòl, pH, vent. L'incendi els altera tots simultàniament. Per exemple: el sòl nu perd humitat molt més ràpidament (sense la coberta vegetal que la retenia)."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "Construeix una cadena tròfica de 4 eslabons per al bosc dels Ports i calcula l'energia disponible a cada nivell si els productors capturen 100.000 kcal/any. Per quina raó l'àguila cuabarrada (superdepredadora) és la primera en abandonar la zona?",
        options: [
          "Alzina (100.000 kcal) → Conill (10.000 kcal, 10%) → Guineu (1.000 kcal, 10%) → Àguila (100 kcal, 10%). L'àguila és la primera a patir perquè al 4t nivell tròfic l'energia disponible és ínfima (100 kcal); qualsevol reducció als nivells inferiors provoca la insuficiència d'aliment per mantenir-la",
          "L'àguila abandona per raons de comportament, no per manca d'energia: les àguiles son sensibles al soroll de l'incendi",
          "L'àguila és la primera a patir perquè és la que menys es reprodueix. La regla del 10% no s'aplica als superdepredadors",
          "Al 4t nivell hi ha 50.000 kcal perquè l'energia s'acumula en pujant la cadena"
        ],
        correct: 0,
        feedback: {
          correct: "Perfecte. Regla del 10%: 100.000 → 10.000 → 1.000 → 100 kcal. L'àguila al 4t nivell tròfic ja depèn d'una quantitat d'energia molt petita. Si l'incendi redueix la vegetació (menys productors), la reducció es multiplica en cascada: 50% menys d'alzines → 50% menys de conills → 50% menys de guineus → 50% menys d'energia per a les àguiles. Amb tan poc marge, les àguiles no poden mantenir la seva població i emigren.",
          wrong: "Aplica la regla del 10%: en cada transferència tròfica es perd el 90% de l'energia. Per tant: productors (100.000) → C1 (10.000) → C2 (1.000) → C3 (100 kcal). L'àguila, al 4t nivell, parteix d'una energia ja molt reduïda — qualsevol pertorbació als nivells inferiors la afecta de forma desproporcionada."
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "Per quina raó els bolets (descomponedors) s'han multiplicat als troncs cremats? Quina funció fan en el cicle del carboni del bosc en recuperació?",
        options: [
          "Els bolets s'han multiplicat perquè hi ha una abundància molt gran de matèria orgànica morta (troncs i arrels cremades) que constitueix el seu aliment. Funció en el cicle del carboni: descomponen la matèria orgànica en CO₂ (retorna a l'atmosfera) i minerals (resten al sòl disponibles per als nous productors). Son imprescindibles per a la regeneració forestal",
          "Els bolets s'han multiplicat perquè l'incendi ha elevat la temperatura, i els bolets necessiten calor per créixer",
          "Els bolets fan fotosíntesi igual que les plantes, de manera que aprofiten la major llum disponible per créixer",
          "El cicle del carboni no implica els descomponedors: els bolets utilitzen el nitrogen, no el carboni"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. Els bolets son heteròtrofs descomponedors: obtenen energia i carboni degradant la matèria orgànica morta. Amb tants troncs cremats disponibles, el seu substrat d'alimentació és abundant. Rol en el cicle del carboni: converteixen la matèria orgànica → CO₂ (retorna a l'atmosfera, disponible per a la fotosíntesi dels nous arbres) + minerals inorgànics (nutrients per al sòl). Son l'engranatge que tanca el cicle i permet la regeneració del bosc.",
          wrong: "Recorda: els bolets son descomponedors, no productors (no fan fotosíntesi). S'alimenten de matèria orgànica morta (fusta, fulles, cadàvers). En el cicle del carboni, els descomponedors converteixen la matèria orgànica en CO₂ (alliberat a l'atmosfera) i minerals (alliberats al sòl). Sense ells, la biomassa morta s'acumularia i els nutrients no tornarien al sistema."
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "L'incendi és una pertorbació natural que ha afectat la biodiversitat dels Ports. Identifica 2 de les amenaces HIPPO presents en aquest cas i proposa 2 mesures de gestió post-incendi que millorarien la recuperació de la biodiversitat.",
        options: [
          "Amenaces: Hàbitat loss (destrucció temporal de l'hàbitat forestal) i potencialment Invasive species (les zones obertes post-incendi son colonitzades ràpidament per plantes invasores com l'ailant). Mesures: reintroducció de plantes autòctones pioneres (accelera la recuperació de la xarxa tròfica) + control d'espècies invasores a les zones obertes (evita que monopolitzin el sòl nu)",
          "L'incendi no entra a cap categoria HIPPO perquè és un fenomen natural. Les mesures han de ser únicament esperar la regeneració espontània",
          "Amenaces: únicament Pollution (el fum de l'incendi). Mesures: apagar l'incendi i plantar arbres exòtics de creixement ràpid (eucaliptus) per recuperar la cobertura vegetal ràpidament",
          "L'única amenaça és la sobreexplotació (Overexploitation) perquè els animals han perdut el seu aliment"
        ],
        correct: 0,
        feedback: {
          correct: "Excel·lent anàlisi. L'incendi activa especialment Habitat loss (la destrucció de l'hàbitat, tot i que temporal, és una de les 5 amenaces HIPPO). Les zones obertes post-incendi son un terreny abonable per a espècies invasores (Invasive species), ja que les autòctones triguen més a regenerar-se. Les mesures proposades son ecològicament sòlides: afavorir les plantes autòctones pioneres (jara, romaní, garriga) permet que la xarxa tròfica es reconstrueixi de baix a dalt; controlar les invasores evita que bloquegin la regeneració del bosc climàcic (alzinar).",
          wrong: "Recorda el marc HIPPO: Habitat loss / Invasive species / Pollution / Population (sobreexplotació) / Overexploitation. Un incendi que destrueix l'hàbitat forestal entra clarament a Habitat loss. A més, les zones obertes post-incendi son molt vulnerables a la colonització per espècies invasores (Invasive species) com l'ailant (Ailanthus altissima), molt competitiu en sòls pertorbats. Les mesures no han de ser plantar arbres exòtics de creixement ràpid (empitjorarien la biodiversitat a llarg termini) sinó restaurar l'ecosistema autòcton."
        }
      }
    ]
  }
}
