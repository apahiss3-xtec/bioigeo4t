// Avaluació SA4: checklist d'estudi + test de transferència amb la Núria
// (context NOU, diferent de l'enigma de la Laia que vertebra la SA).
export const sa4Avaluacio = {
  checklist: [
    { id: 'c1', oa: 'OA1', text: "Sé situar l'ésser humà com a única espècie vivent del gènere Homo i justificar-ho amb caràcters compartits i les funcions vitals (nutrició, relació, reproducció)." },
    { id: 'c2', oa: 'OA1', text: "Sé per quina raó les classificacions científiques (cladogrames) son provisionals i poden canviar amb noves proves, com l'ADN." },
    { id: 'c3', oa: 'OA2', text: "Sé identificar les 4 fases del cicle menstrual (menstruació, fol·licular, ovulació, lútea) i les hormones principals de cadascuna (FSH, LH, estrògens, progesterona)." },
    { id: 'c4', oa: 'OA2', text: "Puc calcular el dia d'ovulació aproximat d'un cicle de qualsevol durada (fórmula: dies del cicle − 14) i sé per quina raó el 'dia 14' no és universal." },
    { id: 'c5', oa: 'OA2', text: "Sé identificar les estructures principals de l'aparell reproductor masculí (testicles, epidídim, conducte deferent) i femení (ovaris, trompes, úter, endometri) i n'explico la funció." },
    { id: 'c6', oa: 'OA3', text: "Sé explicar per quina raó els gàmetes tenen 23 cromosomes (meiosi, SA1) i el zigot en té 46 (fecundació), i per quina raó aquest nombre es manté constant cada generació." },
    { id: 'c7', oa: 'OA3', text: "Sé distingir embrió (0-8 setmanes) de fetus i identifico les fites clau de cada trimestre (cor batega S4, fetus S9, viabilitat S22-24)." },
    { id: 'c8', oa: 'OA3', text: "Sé explicar la diferència entre bessons univitel·lins (1 zigot dividit → mateixa genètica → mateix sexe biològic) i bivitel·lins (2 fecundacions → genètica diferent → poden ser sexes distints)." },
    { id: 'c9', oa: 'OA4', text: "Distingeixo el preservatiu (doble protecció: embaràs + ISTs) dels mètodes hormonals (embaràs, NO ISTs) i sé per quina raó la diferència és crítica per a la salut." },
    { id: 'c10', oa: 'OA4', text: "Sé explicar el mecanisme de la píndola (inhibició de l'ovulació per hormones sintètiques) i puc matisar el mite 'la píndola engreixa' amb evidència." },
    { id: 'c11', oa: 'OA4', text: "Identifico les ISTs principals (VIH, HPV, herpes, clamidia), la via de transmissió principal i si son bacterianes (tractables amb antibiòtic) o víriques." },
    { id: 'c12', oa: 'OA4', text: "Sé explicar per quina raó el mètode del calendari és poc fiable: variació del dia d'ovulació (±3-5 dies) + supervivència dels espermatozoides 3-5 dies." }
  ],

  // Cas-fil NOU: la Núria i la Sandra — context diferent de l'enigma de la Laia.
  // Toca els 3 OA: cicle i aparells (OA1), cromosomes i determinació de sexe (OA2), mètodes i ISTs (OA3).
  test: {
    context:
      "La Núria té 16 anys i un cicle regular de 28 dies. Un company li diu que si pren la píndola quedarà estèril per sempre. Una altra li diu que ha d'esperar fins al dia 14 exacte per saber quan pot quedar-se embarassada. Al mateix temps, la seva amiga Sandra ha tingut una relació sexual sense preservatiu i li pregunta si el VIH es pot contagiar per via oral i quin és el risc.",
    questions: [
      {
        id: 't1',
        oa: 'OA2',
        text: "Si el cicle de la Núria dura 28 dies, quin és el seu dia d'ovulació aproximat? I si un mes, per l'estrès dels exàmens, el cicle s'allarga a 35 dies — quan seria l'ovulació aquell mes?",
        options: [
          "Cicle 28 dies: ovulació dia 14 (28−14). Cicle 35 dies: ovulació dia 21 (35−14). L'ovulació canvia perquè la fase fol·licular varia; la fase lútea és sempre ≈14 dies",
          "Sempre dia 14, independentment de la durada del cicle",
          "Cicle 28: dia 7 (la meitat del cicle). Cicle 35: dia 17",
          "No es pot saber sense una ecografia hormonal"
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. La fórmula és: dia ovulació ≈ durada cicle − 14. La fase lútea (de l'ovulació a la menstruació) sempre dura ≈14 dies; el que varia és la fase fol·licular. En cicles llargs, l'ovulació s'endarrereix.",
          wrong: "Recorda la fórmula: dia d'ovulació ≈ dies del cicle − 14. El 'dia 14' és vàlid únicament per a cicles de 28 dies. En un cicle de 35 dies: 35 − 14 = dia 21."
        }
      },
      {
        id: 't2',
        oa: 'OA3',
        text: "El company li ha dit a la Núria que la píndola la faria estèril per sempre. És correcte? Explica el mecanisme real de la píndola.",
        options: [
          "Fals. La píndola conté estrògens i progesterona sintètics que inhibeixen la FSH i la LH → no hi ha ovulació. En deixar de prendre-la, el cicle es recupera normalment (generalment en 1-3 cicles)",
          "Correcte: la píndola altera els ovaris de forma permanent i irreversible",
          "Parcialment cert: la píndola afecta la fertilitat durant 2 anys després de deixar-la",
          "Fals: la píndola no té cap efecte hormonal, actua únicament com a barrera química"
        ],
        correct: 0,
        feedback: {
          correct: "Correcte. La píndola actua inhibint temporalment l'ovulació mentre es pren. En deixar-la, els nivells de FSH i LH es recuperen i el cicle torna a la normalitat. No causa esterilitat permanent.",
          wrong: "La píndola inhibeix l'ovulació mentre es pren, però no causa esterilitat permanent. Actua bloqueig la secreció de FSH i LH. En deixar-la, el cicle es recupera."
        }
      },
      {
        id: 't3',
        oa: 'OA4',
        text: "La Sandra vol saber el risc de transmissió del VIH per via oral i quina és la millor prevenció. Quina és la resposta correcta?",
        options: [
          "El risc de transmissió oral del VIH és molt baix però no zero. Les vies principals son sanguínia (xeringues compartides) i de fluids sexuals. El preservatiu és la prevenció més eficaç",
          "El VIH es transmet fàcilment per via oral (saliva) com qualsevol altre virus respiratori",
          "El VIH no es transmet per cap via sexual, únicament per transfusions sanguínies",
          "El VIH és un bacteri i es pot curar amb antibiòtics si es detecta aviat"
        ],
        correct: 0,
        feedback: {
          correct: "Resposta matisada i correcta. La transmissió oral és molt baixa (concentracions mínimes a la saliva). Les vies principals son sanguínia i de fluids sexuals (semen, secrecions vaginals). A la lactància, la mare pot transmetre el VIH al nadó. El preservatiu és la millor prevenció.",
          wrong: "El VIH és un virus (retrovirus RNA) que ataca els limfòcits T. Les vies de transmissió son sanguínia, de fluids sexuals i de mare a fill (no per aire ni saliva en condicions normals). No es tracta amb antibiòtics (és un virus, no un bacteri)."
        }
      },
      {
        id: 't4',
        oa: 'OA4',
        text: "Connecta SA3 i SA4: per quina raó el VIH és tan perillós per al sistema immunitari? Quines cèl·lules destrueix i quines conseqüències té?",
        options: [
          "El VIH destrueix els limfòcits T CD4+ (T auxiliars), que coordinen tota la resposta immunitària adaptativa. Sense ells, el cos no pot fabricar anticossos ni destruir cèl·lules infectades → vulnerable a infeccions oportunistes (pneumònies, fongs) que normalment no afecten persones immunocompetents",
          "El VIH destrueix els macrò-fags, que son la primera línia de defensa innata",
          "El VIH destrueix els eritròcits, causant una anèmia greu similar a la del Marc Fontana (SA2)",
          "El VIH no afecta el SI directament, sinó que causa una febre molt alta que mata les cèl·lules immunitàries"
        ],
        correct: 0,
        feedback: {
          correct: "Exacte. El VIH infecta i destrueix específicament els limfòcits T CD4+ (T auxiliars). De SA3: els limfòcits T coordinen la resposta adaptativa (activen limfòcits B per fer anticossos i T citotòxics per destruir cèl·lules infectades). Sense ells, el SI adaptatiu col·lapsa → SIDA = immunodeficiència adquirida.",
          wrong: "Connecta amb SA3: els limfòcits T son els 'directors' de la immunitat adaptativa. El VIH ataca específicament els T CD4+ (auxiliars). Si desapareixen, qui organitza la producció d'anticossos? Resultat: el cos queda indefens davant infeccions que normalment hauria de controlar sense problema."
        }
      }
    ]
  }
}
