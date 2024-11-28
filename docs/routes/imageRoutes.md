Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/images/cars/:id	Récupère les images associées à une voiture.	id (obligatoire).
POST	/images/cars/:id	Ajoute des images à une voiture.	image_urls (obligatoire).
DELETE	/images/cars/:id/:image_id	Supprime une image associée à une voiture.	image_id (obligatoire).

1. Gestion des images
   POST /api/images/upload : Upload d’une ou plusieurs images.
   GET /api/images/by-car/:carId : Liste des images associées à une voiture.
   DELETE /api/images/:id : Supprime une image par son ID.