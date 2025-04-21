# AIWA React Starter Kit

## A propos

AIWA React Starter Kit est un template préconstruit pour démarrer rapidement des applications frontend avec React et Vite. Il inclut une structure organisée pour les composants, les hooks, les services API, et la gestion d'état.

## Structure du projet

```
react/
├── public/                     # Fichiers publics
├── src/                        # Code source React
│   ├── api/                    # Services API
│   │   ├── aiService.js        # Service pour les appels IA
│   │   └── client.js           # Client HTTP
│   ├── assets/                 # Assets spécifiques à l'application
│   ├── hooks/                  # Hooks personnalisés
│   │   └── useAiQuery.js       # Hook pour les requêtes IA
│   ├── store/                  # Gestion d'état
│   │   └── useAppStore.js      # Exemple de store Zustand
│   ├── App.css                 # Styles globaux pour App.jsx
│   ├── App.jsx                 # Composant principal
│   ├── index.css               # Styles globaux
│   ├── main.jsx                # Point d'entrée de l'application
├── .gitignore                  # Fichiers à ignorer par Git
├── package.json                # Dépendances et scripts du projet
├── tailwind.config.js          # Configuration Tailwind CSS
├── vite.config.js              # Configuration Vite
└── README.md                   # Documentation du projet
```

## Configuration

1. **Installer les dépendances**  
   Exécutez la commande suivante pour installer les dépendances nécessaires :
   ```bash
   npm install
   ```

2. **Configurer Tailwind CSS**  
   Assurez-vous que `tailwind.config.js` est correctement configuré pour votre projet.

3. **Configurer les services API**  
   Les services API sont définis dans le dossier `src/api/`. Par exemple, `aiService.js` contient des exemples d'intégration avec des modèles d'IA.

## Démarrage

Pour démarrer le serveur de développement, exécutez la commande suivante :
```bash
npm run dev
```

L'application sera accessible par défaut sur [http://localhost:5173](http://localhost:5173).

## Scripts disponibles

- **Démarrer le serveur de développement** :  
  ```bash
  npm run dev
  ```

- **Construire l'application pour la production** :  
  ```bash
  npm run build
  ```

- **Prévisualiser la version de production** :  
  ```bash
  npm run preview
  ```

## Utilisation des modèles d'IA

### Service API
Le service `aiService.js` dans `src/api/` contient des exemples pour interagir avec des modèles d'IA comme OpenAI ou Ollama.

### Hook personnalisé
Le hook `useAiQuery.js` dans `src/hooks/` est un exemple de gestion des requêtes IA dans vos composants React.

## Notes

- Assurez-vous que toutes les dépendances sont installées avant de démarrer le projet.
- Vérifiez que les services externes (comme OpenAI ou Ollama) sont correctement configurés et accessibles.
