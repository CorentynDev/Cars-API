Routes
   GET /services
   Params :

type (optionnel) : insurance, financing, rental.
POST /services
Body :

car_id (obligatoire).
type (obligatoire).
GET /services/:id

PUT /services/:id

DELETE /services/:id

Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/services	Liste tous les services.	type (optionnel)
POST	/services	Ajoute un nouveau service.	car_id, type (obligatoires)
GET	/services/:id	Détails d'un service spécifique.	id (obligatoire)
PUT	/services/:id	Met à jour un service.	Champs au choix
DELETE	/services/:id	Supprime un service.	id (obligatoire)