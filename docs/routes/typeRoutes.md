Routes principales pour la gestion des types de voitures :
GET /api/types : Liste tous les types de véhicules (sport, tout-terrain, etc.).
POST /api/types : Ajouter un nouveau type de véhicule.
GET /api/types/:id : Détails d’un type spécifique.
PUT /api/types/:id : Met à jour un type.
DELETE /api/types/:id : Supprime un type.

1. Gestion
   GET /api/types/popular : Liste des types les plus populaires (selon les voitures associées).
   GET /api/types/search?query=:query : Recherche dans les types.