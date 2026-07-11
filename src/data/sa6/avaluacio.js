// Avaluació SA6: checklist d'estudi + test de transferència (La sequera a Catalunya)
// Cas NOU: diferent de l'enigma del bocadillo — context de gestió hídrica i canvi climàtic local.
export const sa6Avaluacio = {
  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé explicar el mecanisme de l'efecte hivernacle natural i com l'activitat humana l'ha amplificat des de la Revolució Industrial (+1,1 °C global fins al 2023)." },
    { id: 'c2', oa: 'OA1', text: "Identifico els tres principals gasos d'efecte hivernacle (CO₂, CH₄, N₂O), la seva font principal i per quina raó s'expressen en CO₂ equivalent (CO₂eq)." },
    { id: 'c3', oa: 'OA1', text: "Llisto almenys 4 conseqüències observables del canvi climàtic amb dades concretes (temperatura, glaceres, nivell del mar, acidificació, fenòmens extrems)." },
    { id: 'c4', oa: 'OA2', text: "Distingeixo les fonts d'energia renovables de les no renovables, enumero almenys 4 de cada tipus i explico per quina raó les renovables son 'netes' des del punt de vista climàtic (però no des del punt de vista de la fabricació)." },
    { id: 'c5', oa: 'OA2', text: "Explico els tres pilars de la transició energètica (descarbonitzar l'electricitat, electrificar l'ús final, millorar l'eficiència) i l'objectiu climàtic dels Acords de París (+1,5 °C màxim)." },
    { id: 'c6', oa: 'OA3', text: "Sé calcular la petjada de carboni d'un aliment (gCO₂eq per ingredient) usant una taula de referència i interpreto per quina raó els aliments d'origen animal tenen generalment una petjada molt major que els vegetals." },
    { id: 'c7', oa: 'OA3', text: "Explico les 3R per ordre de prioritat ecológica (Reducció → Reutilització → Reciclatge) i argumento per quina raó la reducció és sempre la primera opció." },
    { id: 'c8', oa: 'OA3', text: "Sé interpretar la petjada ecológica (hectàrees globals per habitant) i la comparo amb la biocapacitat disponible per habitant (1,8 hag). Argumento quin canvi d'hàbit personal tindria l'impacte més gran." },
    { id: 'c9', oa: 'OA4', text: "Identifico almenys 3 tàctiques de greenwashing (afirmació vaga, compensació parcial, segell inventat, irrelevàncies) en exemples reals i aplico els 4 criteris CE2 (autoria, evidència, transparència, consens) per avaluar una afirmació ambiental." },
    { id: 'c10', oa: 'OA4', text: "Explico la resolució de l'enigma del bocadillo de pernil: les 4 fonts d'emissió que fan que emeti 5× més CO₂eq que el de formatge fresc i per quina raó les decisions alimentàries son de les accions individuals amb major impacte climàtic." }
  ],

  // Cas de transferència: la sequera a Catalunya — context nou, diferent de l'enigma del bocadillo.
  // Cobreix OA1 (canvi climàtic), OA2 (fonts d'energia), OA3 (consum responsable), OA4 (avaluació crítica).
  test: {
    context:
      "El 2024, Catalunya va viure la pitjor sequera en 100 anys. L'embassament de la Mina (proveïdor principal de l'àrea metropolitana de Barcelona) va baixar al 16% de la seva capacitat. El govern va decretar restriccions d'ús de l'aigua. Al mateix temps, una empresa d'embotellament d'aigua mineral va llançar una campanya afirmant que el seu producte era 'la solució sostenible per a un futur amb escassetat d'aigua'. Les restriccions van generar debat: per quina raó, en un context de sequera, les granges porcines (que usen milers de litres d'aigua al dia) no patien les mateixes restriccions que els municipis?",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "La sequera de 2024 a Catalunya s'ha relacionat amb el canvi climàtic. Explica el mecanisme: com afecta l'augment de temperatura global el cicle hidrològic i la disponibilitat d'aigua? Anomena almenys 2 evidències científiques que relacionen el canvi climàtic amb l'augment de les sequeres a la Mediterrània.",
        options: [
          "L'augment de temperatura accelera l'evaporació de l'aigua (dels rius, embassaments i sòl), incrementa l'evapotranspiració de les plantes i fa que les precipitacions siguin més irregulars (pluges torrencials curtes vs. períodes secs llargs). Evidències: reducció del 10-20% de les precipitacions a la conca mediterrània en els darrers 50 anys (IPCC AR6); augment del 30% de la freqüència de sequeres extremes al sud d'Europa des del 1980; reducció del 20% del flux dels rius catalans en els darrers 30 anys (Agència Catalana de l'Aigua)",
          "El canvi climàtic augmenta les precipitacions arreu del planeta. Si plou més, no hi hauria sequera. La relació entre canvi climàtic i sequera és una hipòtesi controvertida sense consens científic",
          "Les sequeres a Catalunya son fenòmens naturals cíclics sense relació amb el canvi climàtic. El clima de la Mediterrània sempre ha tingut episodis de sequera cada 30-40 anys",
          "L'augment de temperatura afecta les precipitacions de forma uniforme: redueix les precipitacions arreu del planeta. L'única solució és dessalar l'aigua del mar"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. El canvi climàtic afecta el cicle hidrològic de forma complexa: no redueix necessàriament la pluja total, sinó que la fa més irregular (pluges torrencials concentrades + sequeres prolongades). A la Mediterrània, l'efecte és especialment clar: l'IPCC AR6 (2021) preveu una reducció del 10-20% de les precipitacions anuals al sud d'Europa per al final del segle. L'evaporació augmentada per les temperatures més altes agreuja l'efecte sobre els embassaments.",
          wrong: "Recorda el mecanisme: temperatura alta → evaporació accelerada → menys humitat al sòl → menys recàrrega d'aqüífers i embassaments. A la Mediterrània, el canvi climàtic provoca un patró de 'més extrem en tots dos sentits': pluges torrencials més freqüents però separades per períodes de sequera més llargs. Busca 'Mediterrani com a hotspot del canvi climàtic' als informes de l'IPCC."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "Per dessalar l'aigua del mar (una de les solucions proposades per garantir el subministrament a Barcelona), calen grans quantitats d'energia elèctrica. Explica per quina raó la transició cap a energies renovables és essencial perquè la dessalació sigui una solució 'climàticament neutral'. Quin seria l'impacte climàtic de dessalar amb electricitat de carbó vs. amb solar fotovoltaica?",
        options: [
          "La dessalació per osmosi inversa requereix ≈3-4 kWh per m³ d'aigua produïda. Si l'electricitat ve de carbó (≈820 gCO₂/kWh), 1 m³ d'aigua dessalada genera ≈2,5-3,3 kg CO₂. Si ve d'energia solar (≈20-50 gCO₂/kWh en cicle de vida), 1 m³ genera ≈60-200 gCO₂ — entre 13 i 40 vegades menys. Per tant, dessalar amb renovables és viable climàticament; dessalar amb fòssils agreuja el problema que origina la sequera",
          "La dessalació és sempre sostenible independentment de la font d'energia, perquè produeix un recurs essencial (l'aigua). L'impacte climàtic de l'energia usada és marginal",
          "La dessalació solar no funciona de nit ni en dies ennuvolats. Per tant, la transició energètica no és possible per a instal·lacions de dessalació que han de funcionar 24h",
          "Tots els tipus d'electricitat emeten la mateixa quantitat de CO₂ perquè els electrons no saben d'on venen"
        ],
        correct: 0,
        feedback: {
          correct: "Perfecte. El raonament és clau: la dessalació per osmosi inversa és energèticament intensiva. Si funciona amb carbó, el procés que resol la manca d'aigua (causada en part pel canvi climàtic) agreuja la causa del problema (emissions de CO₂). Amb solar fotovoltaica, l'empremta de carboni és 40 vegades menor. Això il·lustra per quina raó la transició energètica no és tan sols un tema de 'energia': afecta la viabilitat de totes les solucions d'adaptació climàtica.",
          wrong: "Recorda la cadena: font d'energia → emissions per kWh → emissions totals per m³ d'aigua dessalada. Carbó ≈820 gCO₂/kWh × 3,5 kWh/m³ = ≈2.870 gCO₂ per m³. Solar fotovoltaica ≈35 gCO₂/kWh × 3,5 kWh/m³ = ≈120 gCO₂ per m³. La diferència és enorme. A més, les plantes de dessalació modernes usen bateries o emmagatzematge per funcionar les 24h — la intermitència solar no és un obstacle insuperable."
        }
      },
      {
        id: 't3',
        oa: 'OA4',
        text: "L'empresa d'embotellament afirma que el seu producte és 'la solució sostenible per a un futur amb escassetat d'aigua'. Aplica els 4 criteris CE2 (autoria, evidència, transparència, consens) per avaluar aquesta afirmació i determina si és greenwashing o un compromís ambiental creïble.",
        options: [
          "Autoria: l'empresa embotelladora és directament interessada en vendre el producte → credibilitat baixa. Evidència: l'afirmació no aporta dades sobre la petjada de carboni de la producció, transport i embalatge de l'ampolla → falta d'evidència. Transparència: no declara l'impacte total (plàstic, transport, extracció de l'aqüífer) → ocultació. Consens: envassar aigua en plàstic d'un aqüífer en sequera NO és la solució recomanada pels experts en gestió hídrica → contradiu el consens. Veredicte: greenwashing clar (afirmació vaga + irrelevàncies)",
          "L'empresa té raó: l'aigua embotellada és més segura que la de l'aixeta, i en una situació d'emergència hídrica, qualsevol solució és bona. La credibilitat és alta perquè l'empresa té interessos en el sector de l'aigua",
          "No es pot avaluar l'afirmació sense veure el balanç complet de l'empresa. Totes les afirmacions empresarials son sospitoses per defecte",
          "L'empresa és fiable perquè les aigües minerals estan regulades per llei i les fonts naturals no s'esgoten mai"
        ],
        correct: 0,
        feedback: {
          correct: "Excel·lent aplicació dels 4 criteris. L'anàlisi és completa: l'empresa té un interès directe (autoria ✗), no aporta dades de petjada de carboni de les ampolles de plàstic (evidència ✗), no declara quant extreu dels aqüífers (transparència ✗) i la proposta contradiu les recomanacions dels experts en gestió hídrica en context de sequera (consens ✗). A més, és un exemple de 'compensació parcial': proposar l'ampolla de plàstic com a 'solució' a la sequera en un context on els experts recomanen reduir el consum hídric industrial i millorar la xarxa de distribució.",
          wrong: "Aplica els 4 criteris sistemàticament: 1) Autoria: és la pròpia empresa → interès directe. 2) Evidència: quin impacte té la producció, transport i embalatge de l'ampolla? 3) Transparència: declara quanta aigua extreu de l'aqüífer en context de sequera? 4) Consens: els experts en gestió hídrica recomanen les ampolles de plàstic com a solució a la sequera? (no). Resposta: greenwashing per afirmació vaga i contradicció del consens expert."
        }
      },
      {
        id: 't4',
        oa: 'OA3',
        text: "El debat sobre les granges porcines a Catalunya durant la sequera posa de manifest la diferència entre la petjada hídrica individual i la sistèmica. Una granja porcina de 5.000 porcs pot consumir ≈1.000 m³ d'aigua al dia (incloent el bestiar i la neteja). Si el govern aplica les mateixes restriccions a les granges que als municipis (reducció del 25%), quina reducció d'emissions en kg CO₂eq aconseguiria si l'estalvi d'aigüa es traduís en menys producció de pernil? Argumenta si creus que les restriccions han de ser iguals per als particulars i per a la indústria.",
        options: [
          "Reducció del 25% de la producció d'una granja de 5.000 porcs = 1.250 porcs menys/cicle (6 mesos). 1 porc ≈ 250 kg de carn → 1.250 porcs = 312.500 kg menys de carn de porc. Petjada de porc ≈ 6 kg CO₂eq/kg → estalvi ≈1.875.000 kg CO₂eq (1.875 tones CO₂eq) per cicle. Argument: les restriccions haurien de ser proporcionals a l'impacte hídric, no iguals en %. La indústria usa molt més volum total d'aigua que els particulars, però les restriccions iguals en % redueixen menys en termes absoluts la seva responsabilitat proporcional",
          "Les restriccions han de ser iguals per a particulars i indústria perquè la llei ha de tractar tothom per igual. La indústria ja paga per l'aigua que usa, de manera que no cal cap restricció addicional",
          "Les restriccions a les granges porcines no tindrien cap efecte en les emissions de CO₂ perquè la petjada de carboni de la carn és independent de la quantitat d'agua usada per produir-la",
          "La reducció de la producció de pernil augmentaria les emissions de CO₂ perquè si els consumidors no troben pernil compraran vedella, que emet 4 vegades més CO₂"
        ],
        correct: 0,
        feedback: {
          correct: "Excellent raonament. El càlcul demostra que l'impacte sistèmic (restriccions a les granges) pot superar en diversos ordres de magnitud l'impacte individual (restriccions als municipis). Però l'argument sobre les restriccions és el punt clau: aplicar un 25% igual de restricció a una granja de 1.000 m³/dia i a un habitatge de 0,2 m³/dia és matemàticament igual en % però molt diferent en impacte absolut. La qüestió de la proporcionalitat i la justícia ambiental és un debat real en política pública.",
          wrong: "Aplica la cadena lògica: restricció hídrica → menys producció de porc → menys kg de carn → menys emissions de CO₂eq. El càlcul: 25% × 5.000 porcs = 1.250 porcs menys. 1.250 porcs × 250 kg/porc × 6 kg CO₂eq/kg ≈ 1.875 tones CO₂eq per cicle de 6 mesos. Sobre l'argument: la qüestió no és si la llei tracta tothom igual, sinó si el % igual d'estalvi és just quan el volum absolut és tan diferent."
        }
      }
    ]
  }
}
