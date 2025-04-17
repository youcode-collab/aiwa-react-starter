import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGeneratedResponse, useSendPrompt } from './hooks/useAiQuery'
import useAppStore from './store/useAppStore'

function App() {
  const [count, setCount] = useState(0)
  const [prompt, setPrompt] = useState('')
  
  // Utilisation du store Zustand
  const { isLoading: storeLoading, setLoading, setError, setData } = useAppStore()
  
  // Utilisation de React Query
  const { data: generatedResponse, isLoading, error } = useGeneratedResponse()
  const sendPrompt = useSendPrompt()

  const handleSendPrompt = async () => {
    if (!prompt) return
    
    try {
      setLoading(true)
      const result = await sendPrompt.mutateAsync(prompt)
      setData(result)
      setPrompt('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://vite.dev" target="_blank" className="hover:opacity-80 transition-opacity">
            <img src={viteLogo} className="h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition-opacity">
            <img src={reactLogo} className="h-24" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">AIWA React Starter</h1>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Test de l'API IA</h2>
          
          {/* États de chargement et d'erreur */}
          {isLoading && <p className="text-blue-600">Chargement des données...</p>}
          {error && <p className="text-red-600">Erreur: {error.message}</p>}
          
          {/* Affichage de la réponse générée */}
          {generatedResponse && (
            <div className="bg-green-50 border border-green-200 rounded p-3 mb-4">
              <h3 className="font-medium text-green-800 mb-1">Réponse générée:</h3>
              <p className="text-gray-700">{generatedResponse.message}</p>
            </div>
          )}
          
          {/* Formulaire pour envoyer un prompt */}
          <div className="mt-4">
            <div className="flex">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Entrez votre prompt..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendPrompt}
                disabled={sendPrompt.isPending || !prompt}
                className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 disabled:bg-gray-400"
              >
                {sendPrompt.isPending ? 'Envoi...' : 'Envoyer'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Compteur: {count}
          </button>
          
          <p className="mt-3 text-sm text-gray-600">
            Modifiez <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> pour tester les changements en direct
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
