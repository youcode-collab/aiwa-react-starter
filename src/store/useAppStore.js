import { create } from 'zustand'

// Store principal de l'application
const useAppStore = create((set) => ({
  // État
  isLoading: false,
  error: null,
  data: null,
  
  // Actions
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  setData: (data) => set({ data }),
  
  // Réinitialiser l'état
  reset: () => set({ isLoading: false, error: null, data: null }),
}))

export default useAppStore