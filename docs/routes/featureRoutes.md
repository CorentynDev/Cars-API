1. Routes communes aux caractéristiques (safety, technology, comfort)
GET /api/features/:category/popular : Les caractéristiques les plus populaires d’une catégorie donnée.
    category peut être safety, technology, ou comfort.
    GET /api/features/:category/search?query=:query : Recherche dans une catégorie.
    GET /api/features/stats/usage : Statistiques d’utilisation des caractéristiques (par catégorie et par voiture).
2. Routes pour une caractéristique spécifique
GET /api/safety-features/cars/:id : Liste des voitures utilisant une caractéristique de sécurité donnée.
    GET /api/technologies/cars/:id : Liste des voitures utilisant une technologie donnée.
    GET /api/comfort-features/cars/:id : Liste des voitures utilisant une caractéristique de confort donnée.