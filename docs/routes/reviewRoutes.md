Routes
GET /reviews
Params :

car_id (optionnel).
user_id (optionnel).
POST /reviews
Body :

car_id (obligatoire).
user_id (obligatoire).
rating (obligatoire).
comment (optionnel).
DELETE /reviews/:id

Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/reviews	Liste les avis.	car_id, user_id (optionnels)
POST	/reviews	Ajoute un avis.	car_id, user_id, rating (obligatoires)
DELETE	/reviews/:id	Supprime un avis.	id (obligatoire)

1. Gestion des avis
   GET /api/reviews/by-car/:carId : Liste des avis pour une voiture.
   POST /api/reviews/:carId : Ajoute un avis pour une voiture.
   PUT /api/reviews/:reviewId : Modifie un avis existant.
   DELETE /api/reviews/:reviewId : Supprime un avis.
2. Statistiques des avis
   GET /api/reviews/average-rating/:carId : Note moyenne des avis pour une voiture.
   GET /api/reviews/top-reviewed-cars : Les voitures avec les meilleures notes.
1. Avis sur les Voitures
   POST /api/reviews/:carId : Ajouter un avis sur une voiture.
   Params : { rating, comment }
   PUT /api/reviews/:reviewId : Modifier un avis existant.
   Params : { rating, comment }
   DELETE /api/reviews/:reviewId : Supprimer un avis existant.
   GET /api/reviews/:carId : Liste des avis pour une voiture.
   GET /api/reviews/by-user/:userId : Liste des avis laissés par un utilisateur.
2. Commentaires et Réponses
   POST /api/comments/:carId : Ajouter un commentaire général sur une voiture.
   Params : { text }
   POST /api/comments/:commentId/reply : Ajouter une réponse à un commentaire.
   Params : { text }
   GET /api/comments/:carId : Liste des commentaires et réponses sur une voiture.
   DELETE /api/comments/:commentId : Supprimer un commentaire ou une réponse.