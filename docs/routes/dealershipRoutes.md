Routes CRUD
GET /dealerships
Params :

location (optionnel).
specialty (optionnel).
POST /dealerships
Body :

name (obligatoire).
location (obligatoire).
GET /dealerships/:id
Params :

id (obligatoire).
PUT /dealerships/:id

DELETE /dealerships/:id

Routes avancées
GET /dealerships/:id/inventory
Params :

id (obligatoire).
POST /dealerships/:id/inventory
Body :

car_id (obligatoire).
quantity (obligatoire).
DELETE /dealerships/:id/inventory/:car_id

Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/dealerships	Liste toutes les concessions.	location, specialty (optionnels)
GET	/dealerships/:id	Détails d'une concession spécifique.	id (obligatoire)
POST	/dealerships	Ajoute une concession.	name, location (obligatoires)
PUT	/dealerships/:id	Met à jour les infos d'une concession.	Champs au choix
DELETE	/dealerships/:id	Supprime une concession.	id (obligatoire)
GET	/dealerships/:id/inventory	Liste l'inventaire d'une concession.	id (obligatoire)
POST	/dealerships/:id/inventory	Ajoute une voiture à l'inventaire.	car_id, quantity (obligatoires)
DELETE	/dealerships/:id/inventory/:car_id	Retire une voiture de l'inventaire.	car_id (obligatoire)