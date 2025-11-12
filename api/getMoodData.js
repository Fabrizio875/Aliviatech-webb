// Mock endpoint: devuelve datos de estado de ánimo
export function getMoodData() {
  const today = new Date().toISOString().slice(0, 10);
  return { user: "María González", date: today, mood: "Feliz", score: 82 };
}