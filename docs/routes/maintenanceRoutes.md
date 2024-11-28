Routes CRUD
GET /maintenance
Params :

car_id (optionnel).
status (optionnel) : completed, pending.
POST /maintenance
Body :

car_id (obligatoire).
description (obligatoire).
GET /maintenance/:id

PUT /maintenance/:id

DELETE /maintenance/:id

Routes avancées
GET /maintenance/history/:car_id

Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/maintenance	Liste les maintenances.	car_id, status (optionnels)
POST	/maintenance	Ajoute un enregistrement de maintenance.	car_id, description (obligatoires)
GET	/maintenance/:id	Détails d'une maintenance spécifique.	id (obligatoire)
PUT	/maintenance/:id	Met à jour une maintenance.	Champs au choix
DELETE	/maintenance/:id	Supprime une maintenance.	id (obligatoire)
GET	/maintenance/history/:car_id	Historique complet d'une voiture.	car_id (obligatoire)