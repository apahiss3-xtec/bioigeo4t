export const sa2 = {
  id: "sa2",
  title: "La cèl·lula",
  subtitle: "Per què una cèl·lula normal es divideix i s'atura, i una de tumoral no?",
  biome: "sa2",
  color: { primary: "#7B3F9E", accent: "#A66BC9" },
  sessions: 4,
  portadaImage: "/images/sa2-s1-portada-v2.jpg",
  guiaDocent: "/docs/sa2-guia-docent.docx",
  description: "La classe és un consorci de recerca contra el càncer. Teniu sobre la taula tres fàrmacs candidats (C, H i Z), sols i combinats, i biòpsies de pacients abans i després del tractament. Per saber quin fàrmac frena el tumor primer heu d'aprendre a llegir una cèl·lula que es divideix (mitosi), a distingir-la de la divisió que fa gàmetes (meiosi) i a mesurar la divisió amb un número: l'índex mitòtic. Després analitzareu els resultats de tota la classe i cadascú els publicarà en un article científic.",
  product: "Un article científic individual que presenta els resultats de l'assaig (taula + gràfic de l'índex mitòtic abans i després, comparat amb el control) i conclou quin fàrmac frena el tumor sense ser tòxic. Peça complementària: vídeo del procés de mitosi i meiosi.",
  enigmas: [
    {
      id: "enigma1",
      title: "Quin fàrmac frena el tumor?",
      description: "Un tumor és un grup de cèl·lules que s'han oblidat d'aturar-se. Un bon fàrmac anticàncer hauria de fer baixar la divisió de les cèl·lules tumorals… sense matar la resta. El consorci ha provat els fàrmacs C, H i Z (sols i combinats, a dues dosis i dos temps) i té un grup control sense tractar. La pregunta no es respon amb una opinió, sinó amb dades: compteu, calculeu, compareu amb el control i decidiu. Al final escriuràs l'article que defensa el fàrmac guanyador amb els números a la mà."
    }
  ],
  objectives: [
    { id: "OA1", text: "El cicle i la mitosi", desc: "Identificar les fases de la mitosi en preparacions reals i explicar per què el cos ha de dividir cèl·lules (reparació, creixement)" },
    { id: "OA2", text: "Mitosi vs meiosi", desc: "Distingir les dues divisions i el seu propòsit: la meiosi fa gàmetes, redueix a la meitat el material genètic (un cromosoma de cada parella) i és font de variabilitat" },
    { id: "OA3", text: "Índex mitòtic i anàlisi de resultats", desc: "Comptar cèl·lules per fase, calcular l'índex mitòtic, comparar tractaments amb el grup control i relacionar la pèrdua de control del cicle amb el càncer" },
    { id: "OA4", text: "Comunicar la recerca", desc: "Redactar un article científic que presenti els resultats amb taules i gràfics, en tregui conclusions justificades i expliqui per què la mitosi i la meiosi importen en el creixement, la reparació i la reproducció" }
  ],
  competencies: ["CE1", "CE3", "CE4", "CE5"]
}
