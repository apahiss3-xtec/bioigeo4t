// Material d'autoavaluació de SA3: checklist d'estudi + test de
// transferència amb un context NOU (un alumne nouvingut amb carnet de vacunes incomplet,
// diferent dels casos "grip de novembre" i "article anti-vacunes" que vertebren la SA).
export const sa3Avaluacio = {
  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé distingir bacteris (procariotes) de virus (no cèl·lules) i explicar per quina raó els antibiòtics no funcionen contra la grip." },
    { id: 'c2', oa: 'OA1', text: "Puc interpretar el R₀ d'una malaltia i dir si una epidèmia s'estén (R₀>1) o s'extingeix (R₀<1)." },
    { id: 'c3', oa: 'OA1', text: "Conec les vies de transmissió principals (aèria, contacte, fecal-oral, vectorial) i una mesura preventiva per a cadascuna." },
    { id: 'c4', oa: 'OA2', text: "Sé explicar la seqüència immunitat innata (hores, inespecífica) → adaptativa (dies, específica, amb memòria)." },
    { id: 'c5', oa: 'OA2', text: "Puc explicar el mecanisme antigen-anticòs (clau-pany) i per quina raó un anticòs contra la grip no protegeix contra la varicel·la." },
    { id: 'c6', oa: 'OA2', text: "Entenc per quina raó la memòria immunològica impedeix una segona infecció i per quina raó la grip pot infectar-te cada any (el virus muta)." },
    { id: 'c7', oa: 'OA3', text: "Puc explicar el mecanisme d'acció de les vacunes (antigen atenuat → resposta adaptativa → memòria) i el concepte d'immunitat de grup." },
    { id: 'c8', oa: 'OA3', text: "Sé aplicar els 4 criteris de qualitat d'una font (revisió per parells, mida de la mostra, conflicte d'interès, replicació) a qualsevol afirmació sobre salut." },
    { id: 'c9', oa: 'OA4', text: "Sé distingir antibiòtics (bacteris), antivirals (virus) i analgèsics (símptomes), i explicar per quina raó l'automedicació amb antibiòtics és perillosa." },
    { id: 'c10', oa: 'OA4', text: "Entenc per quina raó les drogues causen addicció: activen la via de la dopamina de forma artificial → tolerància → comportament compulsiu." }
  ],

  // Cas-fil NOU: Kemal, alumne nouvingut de Turquia, té el carnet de vacunes incomplet.
  // Context diferent dels casos "grip de novembre" i "article anti-vacunes" de la SA.
  // Toca els 4 OA: patògens (OA1), SI i memòria (OA2), vacunes i fonts (OA3), antibiòtics (OA4).
  test: {
    context:
      "El Kemal acaba d'arribar de Turquia a la classe. Porta el carnet de vacunes però li falten les dosis de reforç del xarampió (2a dosi). El primer dia alguns companys li diuen que no cal vacunar-se perquè 'el xarampió ja ha desaparegut a Europa' i que 'les vacunes sobrecàrreguen el SI'. Al cap d'una setmana, un company de la classe (no vacunat) té xarampió (R₀=15).",
    questions: [
      {
        id: 't1',
        oa: 'OA1',
        text: "Si el company amb xarampió ha estat a classe amb 28 alumnes durant 3 dies sense saber-ho, quants alumnes poden haver-se infectat si el R₀=15? Explica per quina raó el xarampió es propaga tan ràpid.",
        options: [
          "Fins a 15 companys nous en 1 generació; el R₀ alt es deu a la via de transmissió aèria molt eficient i al llarg període de contagiositat (2 dies abans dels símptomes)",
          "Cap, perquè el xarampió ja ha desaparegut a Europa",
          "1 o 2, perquè cal contacte directe amb sang infectada",
          "Tots 28, però només si no s'han rentat les mans"
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. R₀=15 vol dir que cada cas genera fins a 15 nous en condicions normals (sense vacunació). La via aèria i la contagiositat presimptomàtica expliquen la propagació ràpida.",
          wrong: "Recorda que R₀ és el nombre mig de contagis per cas. R₀=15 és dels més alts que existeixen. La via de transmissió del xarampió és aèria — molt eficient en espais tancats com una aula."
        }
      },
      {
        id: 't2',
        oa: 'OA2',
        text: "El Kemal va tenir xarampió de petit (als 3 anys). Ara, als 14, s'exposa al company infectat. Per quina raó probablement no agafarà el xarampió?",
        options: [
          "Perquè el seu SI té memòria immunològica del xarampió: limfòcits de memòria → resposta secundària ràpida que destrueix el virus abans que causi malaltia",
          "Perquè el xarampió no infecta persones majors de 10 anys",
          "Perquè té els antibiòtics actius al cos",
          "Perquè el xarampió és un bacteri i el SI innata el pot matar en hores"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. La memòria immunològica del xarampió de petit persisteix dècades. Quan el patogen torna, la resposta secundària és tan ràpida (hores) que el virus queda destruït abans de causar símptomes.",
          wrong: "Pensa en la memòria immunològica: limfòcits de memòria que queden anys després de la primera infecció. Per al xarampió, la memòria és pràcticament permanent (a diferència de la grip, que muta)."
        }
      },
      {
        id: 't3',
        oa: 'OA3',
        text: "Un company li mostra al Kemal un vídeo de YouTube (sense fonts citades) que diu que 'les vacunes contenen substàncies tòxiques que sobrecàrreguen el SI'. Aplica els 4 criteris de qualitat: quin criteri falla primer i de forma més evident?",
        options: [
          "Revisió per parells: un vídeo de YouTube no és una font revisada per la comunitat científica — no té revisor ni editorial científica",
          "Conflicte d'interès: el creador del vídeo probablement ven productes alternatius",
          "Mida de la mostra: el vídeo no cita cap estudi",
          "Tots tres fallen igualment"
        ],
        correct: 0,
        feedback: {
          correct: "El primer criteri que cal verificar és si la font ha passat per revisió per parells. Un vídeo de YouTube, per definició, no ho ha fet. Els altres criteris (conflicte d'interès, mida de la mostra) tampoc es compleixen, però el primer filtre és el tipus de font.",
          wrong: "Tots els criteris fallen, però hi ha un ordre lògic: primer comproves si la font és revisada per parells. Si no ho és, no cal analitzar els altres criteris perquè la font queda descartada des del principi."
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "El Kemal té faringitis. El metge li diu que és bacteriana i li prescriu amoxicil·lina (antibiòtic) durant 7 dies. Als 4 dies se sent bé i vol deixar-lo. Per quina raó el metge li insisteix que ha d'acabar els 7 dies?",
        options: [
          "Si para als 4 dies, els bacteris més resistents han sobreviscut i es reproduiran; acabar el tractament assegura eliminar-los tots i evitar resistències",
          "Perquè l'amoxicil·lina necessita 7 dies per fabricar anticossos",
          "Perquè els antibiòtics actuen lentament i els primers 4 dies no han servit de res",
          "Per garantir els beneficis econòmics de la farmàcia"
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. Als 4 dies, els bacteris més febles ja han mort (per això se sent millor). Però els més resistents poden seguir vius. Si para el tractament, els resistents es reproduiran i la infecció tornarà amb bacteris difícils de matar — i potencialment transmetrà bacteris resistents a d'altres.",
          wrong: "Pensa en la selecció natural: els primers a morir amb l'antibiòtic son els bacteris més sensibles. Qui queda als 4 dies? Els més resistents. Si pares el tractament, els que queden s'adaptaran i es reproduiran. Acabar el tractament complert elimina fins i tot els més resistents."
        }
      }
    ]
  }
}
