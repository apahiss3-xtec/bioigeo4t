// Competències específiques de Bio/Geo (4t ESO), en llenguatge alumne.
// Noms alineats amb els enunciats oficials de les 6 CE (comunes a tota l'ESO).
// Font: vault «Currículum oficial 4t ESO — cita literal».
export const competencyLabels = {
  CE1: { emoji: '🔭', name: 'Interpretar fenòmens amb models i teories' },
  CE2: { emoji: '🕵️', name: 'Avaluar informació i descartar pseudociència' },
  CE3: { emoji: '🔬', name: 'Dissenyar i comunicar recerques' },
  CE4: { emoji: '🧮', name: 'Raonar per resoldre problemes' },
  CE5: { emoji: '🌍', name: 'Medi ambient i salut' },
  CE6: { emoji: '🏞️', name: 'Analitzar el paisatge i els processos geològics' }
}

export const getCompetency = (code) =>
  competencyLabels[code] || { emoji: '📘', name: code }
