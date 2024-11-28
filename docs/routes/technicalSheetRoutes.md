Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/specifications/:id	Récupère les spécifications techniques détaillées.	id (obligatoire).
POST	/specifications	Ajoute une nouvelle fiche technique.	engine, transmission, dimensions (obligatoires).
PUT	/specifications/:id	Met à jour une fiche technique.	Champs modifiables : engine, dimensions.
DELETE	/specifications/:id	Supprime une fiche technique.	id (obligatoire).

1. Gestion des spécifications
   GET /api/specifications/compare?ids=:id1,:id2 : Compare les spécifications techniques de deux voitures.
   GET /api/specifications/stats/average-power : Puissance moyenne des voitures.
   GET /api/specifications/top-speed : Les voitures avec la vitesse maximale la plus élevée.
   GET /api/specifications/by-fuel-type/:fuelType : Liste des voitures par type de carburant.