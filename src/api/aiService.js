import apiClient from './client'

export const aiService = {
  // Récupération d'une réponse générée par l'API
  getGenerated: async () => {
    const response = await apiClient.get('/generate')
    return response.data
  },
  
  // Envoi d'un prompt personnalisé (à implémenter si nécessaire)
  sendPrompt: async (prompt) => {
    const response = await apiClient.post('/generate', { prompt })
    return response.data
  },
}