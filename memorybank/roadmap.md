# Blancastory - Feuille de Route

Ce document présente la stratégie d'implémentation globale pour le développement de Blancastory, incluant l'ordre des tâches et les dépendances techniques.

## Principes directeurs

1. **Développement incrémental** : Une fonctionnalité complète à la fois
2. **Priorité à la valeur utilisateur** : Implémenter d'abord les fonctionnalités les plus utiles
3. **Fondations solides** : Établir une architecture robuste avant d'ajouter des fonctionnalités complexes
4. **Intégration continue** : Tester régulièrement et maintenir un code fonctionnel

## Phases de développement

### Phase 1 : Fondations et gestion de base des scénarios

1. **Système de persistance des données**
   - Implémentation d'une base de données locale (IndexedDB)
   - Modèles de données pour les projets et scénarios
   - Sauvegarde et chargement de projets

2. **Amélioration de l'éditeur de scénario**
   - Sauvegarde automatique
   - Gestion de multiples scénarios
   - Export PDF/HTML/Word
   - Statistiques basiques (nombre de mots, temps de lecture)

3. **Interface utilisateur de base**
   - Navigation entre projets
   - Gestion des projets (création, suppression, renommage)
   - Thème visuel cohérent

### Phase 2 : Gestion des éléments narratifs

1. **Système de gestion des personnages**
   - Création et édition de fiches de personnages
   - Attributs personnalisables
   - Galerie d'images
   - Relations entre personnages

2. **Gestion des lieux**
   - Création et édition de fiches de lieux
   - Description des décors
   - Galerie d'images
   - Association avec les scènes

3. **Organisation structurelle**
   - Hiérarchie narrative (actes, séquences, scènes)
   - Réorganisation par glisser-déposer
   - Tags et filtres

### Phase 3 : Visualisation et planification

1. **Chronologie**
   - Ligne temporelle visuelle
   - Calendrier d'événements
   - Visualisation des arcs narratifs

2. **Storyboard**
   - Création de storyboards pour les scènes
   - Import et annotation d'images
   - Lien entre storyboard et scénario

3. **Character Design**
   - Outils de conception visuelle des personnages
   - Galerie de références
   - Variations de costumes/apparences

### Phase 4 : Fonctionnalités avancées

1. **Assistance IA pour l'écriture**
   - Intégration d'API d'IA
   - Suggestions de dialogue
   - Analyse de cohérence narrative

2. **Collaboration**
   - Édition collaborative en temps réel
   - Commentaires et annotations
   - Gestion des droits d'accès

3. **Gestion de projet**
   - Suivi de l'avancement
   - Échéancier
   - Notes de production

### Phase 5 : Polissage et optimisation

1. **Performance et optimisation**
   - Amélioration des performances
   - Optimisation pour différents appareils
   - Mode hors ligne

2. **Expérience utilisateur**
   - Raccourcis clavier configurables
   - Tutoriels et aide contextuelle
   - Thèmes personnalisables

3. **Déploiement et distribution**
   - Packaging pour différentes plateformes
   - Mise en place de mises à jour automatiques
   - Documentation utilisateur complète

## Premier sprint proposé

Pour le premier sprint, nous recommandons de se concentrer sur les fondations du système :

1. Implémentation du système de persistance des données
   - Création des modèles de données
   - Mise en place d'IndexedDB
   - Fonctions CRUD de base pour les projets

2. Sauvegarde et chargement de scénarios
   - Sauvegarde automatique
   - Liste des projets récents
   - Import/export de fichiers Fountain

3. Interface de gestion de projets
   - Écran d'accueil avec liste des projets
   - Création de nouveaux projets
   - Suppression et renommage de projets

Ces tâches établiront une base solide pour toutes les fonctionnalités futures et apporteront immédiatement de la valeur aux utilisateurs en leur permettant de sauvegarder leur travail.