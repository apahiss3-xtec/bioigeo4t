// Avaluacio SA7: checklist d'estudi + test de transferencia (el terratrèmol de l'Aquila, 2009)
// Cas NOU: diferent de l'enigma de les Preses — context de risc sísmic i comunicació científica.
export const sa7Avaluacio = {
  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé identificar les tres famílies de roques (ígnies, sedimentàries, metamòrfiques) per les seves característiques observables (textura, mida de cristalls, clivatge, reacció amb àcid) i explicar el procés de formació de cada família." },
    { id: 'c2', oa: 'OA1', text: "Explicar el cicle de les roques de forma completa: magma → ígnia → erosió → sediment → sedimentaria → calor/pressió → metamòrfica → fusió → magma. Identifico en quin punt del cicle estan les roques del laboratori." },
    { id: 'c3', oa: 'OA1', text: "Distingeixo roca ígnia intrusiva (granit, cristalls grans, refredat lent en profunditat) d'extrusiva (basalt, cristalls petits, refredat ràpid a la superfície) i relaciono aquesta diferència amb la velocitat de refredament del magma." },
    { id: 'c4', oa: 'OA2', text: "Descric les 4 capes de la Terra (escorça, mantell, nucli extern, nucli intern) amb els seus materials i estats físics, i explico per quina raó la litosfera es mou per convecció del mantell." },
    { id: 'c5', oa: 'OA2', text: "Relaciono els tres tipus de límits de plaques (divergents, convergents, transformants) amb els fenòmens associats (dorsals, subducció+volcans, col·lisió+muntanyes, falles+terratrèmols) i identifico exemples reals en un mapa." },
    { id: 'c6', oa: 'OA2', text: "Explico la resolució de l'enigma: per quina raó hi ha terratrèmols al Pirineu (col·lisió alpina + falles actives heretades) i per quina raó la Garrotxa té volcans sense subducció (rift postalpí = extensió litosférica)." },
    { id: 'c7', oa: 'OA2', text: "Distingeixo entre magnitud (energia alliberada, logarítmica: +1 mag = 32× energia) i intensitat (efecte local; depèn de la distància, profunditat i substrat) d'un terratrèmol, i entre hipocentre (origen en profunditat) i epicentre (punt superficial més proper)." },
    { id: 'c8', oa: 'OA3', text: "Distingeixo minerals de roques, identifico els 3 principals recursos geológics de Catalunya (calcari per a ciment, pissarra pirinenca, potassa del Bages) i explico per quina raó els combustibles fòssils son no renovables a escala humana." },
    { id: 'c9', oa: 'OA3', text: "Explico per quina raó el ciment és un dels materials amb major impacte climàtic (descarbonatació: CaCO₃→CaO+CO₂ a 1.450°C, ≈8% emissions globals) i el relaciono amb el cicle del carboni geológic (connexió SA6)." },
    { id: 'c10', oa: 'OA4', text: "Identifico el procés geológic principal d'almenys 4 indrets del paisatge de Catalunya (Montserrat, Garrotxa, Delta de l'Ebre, Pirineus, Costa Brava, Cardona) i argumento com la geologia condiciona el paisatge i la vida de les persones." }
  ],

  // Cas de transferència: el terratrèmol de l'Aquila (Itàlia, 2009) — context nou, diferent de l'enigma.
  // Cobreix OA2 (tectònica, riscos sísmics), OA3 (recursos geológics), OA4 (paisatge i riscos).
  test: {
    context:
      "El 6 d'abril de 2009, un terratrèmol de magnitud 6,3 va sacsejar L'Aquila (Itàlia central) i va matar 309 persones. L'epicentre era a 3 km de la ciutat. L'hipocentre era a 8,8 km de profunditat. Sis científics van ser condemnats el 2012 (i absolts el 2015) per no haver comunicat correctament el risc sísmic als ciutadans. La zona és al sistema de falles dels Apenins, que formen una cadena de muntanyes resultant de la col·lisió entre la placa Adriàtica i la placa Euràsia. Al mateix temps, al sud d'Itàlia (Sicília, Nàpols), hi ha el volcà Etna i els Camps Flegres, però la raó no és la mateixa que a l'Aquila.",
    questions: [
      {
        id: 't1',
        oa: 'OA2',
        text: "Explica per quina raó es va produir el terratrèmol de L'Aquila usant el model de tectònica de plaques. Quin tipus de límit de plaques és el que genera els Apenins? Per quina raó l'hipocentre poc profund (8,8 km) va fer el terratrèmol especialment destructor en comparació a un terratrèmol de la mateixa magnitud però a 100 km de profunditat?",
        options: [
          "Els Apenins son el resultat de la col·lisió de la placa Adriàtica (microplaca) i la placa Euràsia — límit convergent continental, similar al Pirineu. L'acumulació de tensió en les falles dels Apenins es va alliberar sobtadament → terratrèmol M6,3. L'hipocentre poc profund (8,8 km) fa que les ones sísmiques arriben a la superfície amb molta energia sense haver-se atenuat: a 8 km, l'epicentre és molt proper (àrea de màxima intensitat petita però molt intensa). A 100 km, les ones han recorregut molt més camí i perden energia → menys destrucció local",
          "El terratrèmol de L'Aquila va ser causat per una erupció volcànica subterrània de l'Etna. Els volcans i els terratrèmols sempre van junts i s'originen pel mateix mecanisme (subducció)",
          "Els Apenins son una dorsal oceànica sota terra. El límit divergent entre plaques genera terratrèmols sense volcans a la superfície. L'hipocentre poc profund no té cap efecte en la intensitat en superfície",
          "El terratrèmol de L'Aquila va ser un event imprevisible sense relació amb les plaques tectòniques. Itàlia no es troba en cap límit de plaques actiu"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. Els Apenins son anàlegs al Pirineu: col·lisió continental que genera falles actives. L'hipocentre poc profund (shallow focus) és especialment perillós perquè l'energia no es dissipa en el camí fins a la superfície: l'epicentre és la zona de màxima acceleració del sòl i els edificis reben el màxim impacte. Terratrèmols de M6 superficials han causat molts més morts que M7 profunds. Lliçó: la profunditat és un factor crític del risc sísmic.",
          wrong: "Aplica el model: Itàlia central (Apenins) = col·lisió continental placa Adriàtica + placa Euràsia = límit convergent (similar al Pirineu). Sobre la profunditat: l'energia de les ones sísmiques s'atenua amb la distància. A 8 km de profunditat, les ones arriben a la superfície amb molt més energia que des de 100 km. A més, la durada del moviment és més curta però molt intensa. Compara: el terratrèmol de Kobe 1995 (M6,9, 16 km) = 6.400 morts. El de Bolu 1999 (M7,6, 10 km) = 17.000 morts."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "L'Etna (Sicília) i els Camps Flegres (Nàpols) son volcans actius, però el seu mecanisme és diferent del de la Garrotxa catalana. Explica per quina raó el sud d'Itàlia té volcans de subducció mentre que la Garrotxa té volcans de rift. Quina diferència hi ha en el magma i en la perillositat dels dos tipus de vulcanisme?",
        options: [
          "El sud d'Itàlia (Sicília, Nàpols) té volcans de SUBDUCCIÓ: la placa oceànica africana (Iònica) s'enfonsa sota la placa Euràsia → magma ric en sílice i gasos (viscós, alt risc d'erupcions explosives: Plini, VEI 4-7). La Garrotxa té volcans de RIFT: l'extensió litosférica permet que el mantell fundi parcialment → magma basàltic (pobre en sílice, fluid, baix risc d'erupcions explosives: efusiva, VEI 1-2). Diferència clau: subducció = magma silícic + explosiu; rift = basalt + efusiu",
          "Tots dos tipus de volcans son idèntics en mecanisme i perillositat. La diferència és tan sols geogràfica: els volcans del nord d'Itàlia son menys actius que els del sud. La Garrotxa és menys perillosa perquè és més petita",
          "L'Etna és un punt calent (hotspot) com Hawaii. La Garrotxa és un volcà de subducció però extingit. La diferència és que els punts calents generen magma basàltic mentre que la subducció genera magma silícic",
          "Tant l'Etna com la Garrotxa son volcans de subducció de la mateixa placa (Adriàtica). La diferència és la profunditat de la subducció: en superfície genera basalt, en profunditat genera granit"
        ],
        correct: 0,
        feedback: {
          correct: "Excel·lent. La distinció clau és el mecanisme: 1) Subducció (Sicília/Nàpols): placa oceànica s'enfonsa + s'hidrata → l'aigua baixa el punt de fusió del mantell → magma silícic (ric en SiO₂) → alta viscositat → gasos atrapats → erupcions explosives (Plini = VEI 6, Vesuvi AD 79). 2) Rift (Garrotxa): extensió → baixada de pressió → fusió parcial del mantell superior → basalt (pobre en SiO₂) → baixa viscositat → erupcions efusives (colades de lava, VEI 1-2). La perillositat és molt diferent: el basalt flueix però no explota; el magma silícic pot generar núvols piromàstics mortals.",
          wrong: "Pensa en el mecanisme de generació del magma. Subducció (Itàlia sud): la placa oceànica africana s'enfonsa → s'hidrata en fondre's → l'aigua baixa el punt de fusió del mantell → magma silícic = ric en sílice i gasos = explosiu. Rift (Garrotxa): extensió litosférica → baixa la pressió → el mantell fon parcialment → magma basàltic = pobre en sílice = fluid = efusiu. La diferència és: alt vs baix contingut en SiO₂ = explosiu vs efusiu."
        }
      },
      {
        id: 't3',
        oa: 'OA4',
        text: "L'Aquila és una ciutat medieval construïda sobre sediments de valle (roca al·luvial poc consolidada). Els barris construïts sobre el substrat de roca sòlida (calcari dels Apenins) van patir molts menys danys que els barris sobre sediments. Explica per quina raó el substrat geológic influeix en l'intensitat d'un terratrèmol i argumenta per quina raó els plans urbanístics haurien de tenir en compte la geologia del sòl.",
        options: [
          "Els sediments tous (sorra, argila, al·luvions) ampliquen les ones sísmiques (efecte d'amplificació sísmica o 'efecte sòl'): les ones es mouen més lentament, l'amplitud augmenta i els edificis reben una acceleració major. A més, els sediments saturats d'agua poden liquidar-se (liquefacció sísmica). La roca sòlida (calcari) transmet les ones sense amplificar-les. Per tant, la geologia del substrat hauria de ser un criteri obligatori en el planejament urbanístic: zona de risc alt (sediments) vs zona de risc baix (roca sòlida)",
          "El substrat geológic no influeix en l'intensitat del terratrèmol. L'únic factor que importa és la distància a l'epicentre: com més lluny, menys danys. Els edificis de L'Aquila van caure per deficiències constructives, no per la geologia del sòl",
          "Els sediments protegeixen els edificis perquè absorbeixen l'energia sísmica. Per tant, els barris sobre sediments haurien de patir menys danys. La roca sòlida transmet les ones sense atenuar-les i és, per tant, més perillosa",
          "La geologia del substrat és rellevant tan sols per a terratrèmols de magnitud superior a 7. Per a M6,3 com el de L'Aquila, tots els substrats es comporten igual"
        ],
        correct: 0,
        feedback: {
          correct: "Perfecte. L'efecte sòl (site effect) és un factor crític del risc sísmic: els sediments tous ampliquen les ones i la durada del moviment. El terratrèmol de Mexico 1985 (M8,1) va destruir masovament els barris de Mexico DF construïts sobre l'antic llac (argila lacustre), mentre que zones sobre roca sòlida a pocs km van tenir molt menys danys. La microzonació sísmica (mapeig del substrat) és una eina de planificació urbana essencial a les zones sísmiques. A Catalunya, el mapa de risc sísmic inclou informació de substrat.",
          wrong: "Pensa en el comportament de les ones en materials de diferent rigidesa. Els sediments tous (argila, sorra, al·luvions) son menys rígids → les ones sísmiques s'alenteixen → l'amplitud augmenta → els edificis oscil·len més. Analogia: si agites gelatina vs pedra sòlida, quina oscil·la més? La gelatina (sediment) amplifica el moviment. Per això, la microzonació sísmica (conèixer el substrat) és obligatòria en la planificació urbanística a Itàlia, Japó i Califòrnia (i hauria de ser-ho arreu)."
        }
      },
      {
        id: 't4',
        oa: 'OA3',
        text: "La reconstrucció de L'Aquila va usar grans quantitats de ciment i formigó. Si 1 kg de ciment emet aproximadament 0,9 kg de CO₂, i es van usar ≈500.000 tones de ciment per a la reconstrucció, calcula les emissions totals en tones de CO₂. Argüeix si hi havia alternatives de construcció amb menys petjada de carboni, tenint en compte que la zona és sísmica.",
        options: [
          "Càlcul: 500.000 t ciment × 0,9 kg CO₂/kg = 500.000 × 900 kg CO₂ = 450.000.000 kg CO₂ = 450.000 tones CO₂. Alternatives de menor petjada: 1) Fusta estructural (CLT: Cross-Laminated Timber): baixa petjada + molt ben comportament sísmic (lleuger i flexible). 2) Pedra local calcària amb morter de calç (tradicional, menor temperatura de calcinació que el ciment Portland). 3) Formigó amb menys clínquer (ciments mixtos amb cendres volants o escòria d'alt forn). Complicació: en zona sísmica, la resistència estructural és prioritat → la fusta requereix enginyeria especial però és factible",
          "El càlcul és impossible perquè el ciment no emet CO₂ durant la producció: el CO₂ s'emet tan sols durant la destrucció dels edificis. Les alternatives de menys petjada son sempre pitjors sísmica, de manera que no hi ha alternativa real al formigó armat en zones sísmiques",
          "Càlcul: 500.000 tones × 0,9 = 450.000 tones CO₂. Però les emissions son compensables plantant arbres: 1 arbre absorbeix ≈22 kg CO₂/any → caldrien ≈20 milions d'arbres per compensar en 1 any. Conclusió: la compensació forestal és sempre la millor solució",
          "El ciment només emet CO₂ si es produeix en countries pobres. El ciment europeu no emet CO₂ perquè les fàbriques europees estan regulades"
        ],
        correct: 0,
        feedback: {
          correct: "El càlcul és correcte: 450.000 tones CO₂. El raonament sobre les alternatives és el punt fort: la fusta estructural (CLT) és excel·lent en zones sísmiques (lleuger = menys força d'inèrcia, flexible = dissipa energia). Japó usa cada cop més fusta en construcció antisísmica. Els ciments mixtos (fly ash, GGBS) redueixen la petjada fins al 30-50% amb les mateixes prestacions estructurals. La tensió entre 'emisser de CO₂' i 'resistent als terratrèmols' és real, però les alternatives existeixen. La geologia i la sostenibilitat no son enemigues.",
          wrong: "Càlcul: 500.000 t × 0,9 = 450.000 tones CO₂ (equivalent a les emissions anuals de ≈100.000 cotxes). Sobre les alternatives: la fusta estructural (CLT) té una petjada de carboni negativa (fixa CO₂ mentre creix) i es comporta excel·lentment en zones sísmiques (és lleugera i flexible). Els ciments mixtos (amb cendres volants o escòria d'alt forn) redueixen la petjada del clínquer entre un 30% i un 50%. La compensació forestal (opció 2) és una solució parcial però no substitueix la reducció directa d'emissions."
        }
      }
    ]
  }
}
