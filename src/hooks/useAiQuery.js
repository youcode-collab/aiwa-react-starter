import { useQuery, useMutation } from '@tanstack/react-query'
import { aiService } from '../api/aiService'

// Hook pour récupérer une réponse générée
export const useGeneratedResponse = () => {
  return useQuery({
    queryKey: ['generated'],
    queryFn: aiService.getGenerated,
  })
}

// Hook pour envoyer un prompt personnalisé
export const useSendPrompt = () => {
  return useMutation({
    mutationFn: aiService.sendPrompt,
  })
}