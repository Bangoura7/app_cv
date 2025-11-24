# Guide de déploiement sur Render

## ✅ Configuration complète pour Render

### Fichiers ajoutés :
- ✅ `server.js` - Serveur Express pour servir les fichiers statiques
- ✅ `render.yaml` - Configuration Render
- ✅ `package.json` - Script `start` pour Render
- ✅ `netlify.toml` - Configuration Netlify (optionnel)

### Étapes de déploiement sur Render :

#### 1. **Préparer le repository GitHub**
```bash
git add .
git commit -m "Configurer déploiement Render avec serveur Express"
git push origin main
```

#### 2. **Se connecter à Render**
- Allez sur https://render.com
- Cliquez sur "Sign up" ou "Sign in"
- Choisissez "Sign up with GitHub" ou connectez votre GitHub

#### 3. **Créer un nouveau Web Service**
- Cliquez sur "New +" → "Web Service"
- Sélectionnez le repository `app_cv`
- Cliquez sur "Connect"

#### 4. **Configurer le service**
Les paramètres suivants s'afficheront :

- **Name** : `app-cv` (ou le nom que vous voulez)
- **Environment** : `Node`
- **Region** : Laissez par défaut (ou choisissez la plus proche)
- **Branch** : `main`
- **Build Command** : `npm install && npm run build`
- **Start Command** : `node server.js`

#### 5. **Ajouter les variables d'environnement (optionnel)**
- Cliquez sur "Advanced" → "Add Environment Variable"
- Ajoutez :
  ```
  NODE_ENV = production
  PORT = 3000
  ```

#### 6. **Déployer**
- Cliquez sur "Create Web Service"
- Render va :
  1. Builder l'application (`npm run build`)
  2. Créer le dossier `dist`
  3. Lancer le serveur (`node server.js`)
  4. Vous donner une URL publique

### 🎯 Résultat attendu :
```
✅ Build successful
✅ Deploying...
✅ Your service is live at: https://app-cv-xxxxx.onrender.com
```

### 📝 Notes importantes :

1. **Render utilise Node.js** pour exécuter `server.js`
2. **Express sert les fichiers statiques** du dossier `dist`
3. **Le port 3000 est exposé** sur `0.0.0.0` (accessible publiquement)
4. **Les mises à jour auto** : À chaque push sur `main`, Render redéploie automatiquement

### ❌ Erreur précédente expliquée :
L'erreur était due au fait que Render exécutait `npm run dev` (serveur Vite pour le développement) au lieu de construire et servir en production. Maintenant, c'est corrigé !

---

**Besoin d'aide pour autre chose ?** Posez votre question ! 🚀
