Routes CRUD
GET /cars
Params :

brand (optionnel) : Filtrer par marque.
model (optionnel) : Filtrer par modèle.
year (optionnel) : Filtrer par année.
price_min (optionnel) : Prix minimum.
price_max (optionnel) : Prix maximum.
POST /cars
Body :

brand (obligatoire) : Marque.
model (obligatoire) : Modèle.
year (obligatoire) : Année.
price (obligatoire) : Prix.
GET /cars/:id
Params :

id (obligatoire) : ID unique de la voiture.
PUT /cars/:id
Body :

brand (optionnel) : Nouvelle marque.
price (optionnel) : Nouveau prix.
Autres caractéristiques optionnelles.
DELETE /cars/:id

Routes avancées
GET /cars/recommendations
Params :

user_id (obligatoire) : Identifier les préférences.
location (optionnel) : Localisation.
GET /cars/availability/:id
Params :

id (obligatoire) : ID unique de la voiture.
POST /cars/:id/test-drive
Body :

user_id (obligatoire) : ID de l'utilisateur.
date (obligatoire) : Date souhaitée.

Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/cars	Liste toutes les voitures ou filtre selon critères.	brand, model, year, price_min, price_max (optionnels)
GET	/cars/:id	Détails d'une voiture spécifique.	id (obligatoire)
POST	/cars	Ajouter une nouvelle voiture.	brand, model, year, price (obligatoires)
PUT	/cars/:id	Modifier les infos d'une voiture.	Champs au choix : brand, model, year, price
DELETE	/cars/:id	Supprimer une voiture spécifique.	id (obligatoire)
GET	/cars/recommendations	Suggestions personnalisées de voitures.	user_id (obligatoire), location (optionnel)
GET	/cars/availability/:id	Vérifie la disponibilité d'une voiture.	id (obligatoire)
POST	/cars/:id/test-drive	Réserver un essai pour une voiture.	user_id, date (obligatoires)

Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/cars	Liste toutes les voitures, avec possibilité de filtrage.	brand, model, year, type (SUV, berline…), price_range.
GET	/cars/:id	Récupère les détails d’une voiture spécifique.	id (obligatoire).
POST	/cars	Ajoute une nouvelle voiture.	brand, model, year, price, spec_id (obligatoires).
PUT	/cars/:id	Met à jour les infos d’une voiture.	Champs modifiables : price, availability, images.
DELETE	/cars/:id	Supprime une voiture.	id (obligatoire).
GET	/cars/:id/specifications	Affiche les spécifications techniques d’une voiture.	id (obligatoire).
POST	/cars/:id/images	Ajoute des images à une voiture.	image_urls (obligatoire).
GET	/cars/:id/history	Montre l’évolution historique d’un modèle (générations).	id (obligatoire).
GET	/cars/popular	Liste les voitures les plus populaires (basées sur ventes, recherches, avis).	region, year (optionnels).
GET	/cars/recent	Récupère les modèles récemment ajoutés à la base.	Aucun paramètre.
POST	/cars/:id/review	Ajoute un avis utilisateur ou expert sur une voiture.	user_id, rating, comment (obligatoires).
GET	/cars/:id/records	Liste les records associés à une voiture.	id (obligatoire).

Routes principales pour la gestion des voitures :
GET /api/cars : Liste toutes les voitures (avec possibilité de filtrer par marque, type, etc.).
POST /api/cars : Créer une nouvelle voiture.
GET /api/cars/:id : Détails d’une voiture spécifique par son ID.
PUT /api/cars/:id : Met à jour les informations d’une voiture.
DELETE /api/cars/:id : Supprime une voiture spécifique.
GET /api/cars/filter : Recherche avancée (par type, prix, année, etc.).

1. Recherche avancée et filtres
   GET /api/cars/price-range?min=:min&max=:max : Liste des voitures dans une fourchette de prix donnée.
   GET /api/cars/by-type/:typeId : Liste des voitures associées à un type spécifique (sport, rétro, etc.).
   GET /api/cars/by-year/:year : Liste des voitures d’une année spécifique.
   GET /api/cars/by-brand/:brandId : Liste des voitures d’une marque donnée.
   GET /api/cars/search?query=:query : Recherche par mot-clé dans les modèles, types ou technologies.
   GET /api/cars/compare?ids=:id1,:id2 : Compare les spécifications de deux voitures par leurs IDs.
   GET /api/cars/random : Retourne une voiture aléatoire.
   GET /api/cars/recently-added : Liste des voitures ajoutées récemment.
   GET /api/cars/most-expensive : La voiture la plus chère de la base.
   GET /api/cars/cheapest : La voiture la moins chère de la base.
2. Statistiques et analyses
   GET /api/cars/stats/count : Nombre total de voitures.
   GET /api/cars/stats/average-price : Prix moyen des voitures.
   GET /api/cars/stats/types-distribution : Répartition des voitures par type.
   GET /api/cars/stats/brands-distribution : Répartition des voitures par marque.
   GET /api/cars/stats/technologies-usage : Statistiques d’utilisation des technologies par modèle.
3. Gestion avancée
   POST /api/cars/batch : Ajoute plusieurs voitures en une seule requête.
   DELETE /api/cars/by-brand/:brandId : Supprime toutes les voitures d’une marque.
   PUT /api/cars/:id/update-price : Met à jour uniquement le prix d’une voiture.

1. GET /api/cars
   Fonction : Liste toutes les voitures disponibles.
   Description : Récupère une liste paginée de toutes les voitures présentes dans la base de données.
   Paramètres obligatoires : Aucun.
   Paramètres optionnels :
   limit : Le nombre de voitures à retourner (par défaut 10).
   page : Le numéro de page pour la pagination (par défaut 1).
   sort : Tri des résultats (price, year, etc.).
   filter : Filtre par marque, type ou caractéristiques spécifiques.
   Authentification : Non.
   Exemple de réponse :
   json
   Copier le code
   {
   "cars": [
   {
   "id": "1",
   "brand": "Toyota",
   "model": "Camry",
   "year": 2020,
   "price": 25000,
   "type": ["Sedan"],
   "engine": "Hybrid",
   "fuel": "Petrol"
   },
   {
   "id": "2",
   "brand": "Tesla",
   "model": "Model 3",
   "year": 2021,
   "price": 35000,
   "type": ["Sedan", "Electric"],
   "engine": "Electric",
   "fuel": "Electric"
   }
   ]
   }
   Statuts HTTP :
   200 OK : Les données sont retournées avec succès.
   400 Bad Request : Mauvaise requête, vérifier les paramètres passés dans la requête (par exemple, limit ou page).
   500 Internal Server Error : Erreur serveur, vérifier les logs serveur.
2. POST /api/cars
   Fonction : Créer une nouvelle voiture.
   Description : Ajoute une nouvelle voiture à la base de données.
   Paramètres obligatoires :
   brand: Marque de la voiture.
   model: Modèle de la voiture.
   year: Année de production.
   price: Prix de la voiture.
   engine: Type de moteur (ex: V6, Electric, Hybrid).
   Paramètres optionnels :
   color: Couleur de la voiture.
   fuel: Type de carburant (ex: Petrol, Diesel, Electric).
   type: Liste des types de voiture (ex: Sedan, SUV).
   features: Liste des caractéristiques supplémentaires.
   Authentification : Oui (authentification nécessaire pour la création de voiture).
   Exemple de réponse :
   json
   Copier le code
   {
   "message": "Car added successfully",
   "car": {
   "id": "3",
   "brand": "BMW",
   "model": "X5",
   "year": 2023,
   "price": 60000,
   "engine": "V8",
   "fuel": "Diesel",
   "type": ["SUV"]
   }
   }
   Statuts HTTP :
   201 Created : La voiture a été ajoutée avec succès.
   400 Bad Request : Des champs obligatoires manquent (par exemple, brand ou model).
   401 Unauthorized : L'utilisateur n'est pas authentifié.
   500 Internal Server Error : Erreur serveur, vérifier les logs serveur.
3. GET /api/cars/:id
   Fonction : Récupérer les détails d'une voiture spécifique.
   Description : Récupère les détails d’une voiture selon son ID.
   Paramètres obligatoires :
   id: ID de la voiture à récupérer.
   Paramètres optionnels : Aucun.
   Authentification : Non.
   Exemple de réponse :
   json
   Copier le code
   {
   "id": "1",
   "brand": "Toyota",
   "model": "Camry",
   "year": 2020,
   "price": 25000,
   "type": ["Sedan"],
   "engine": "Hybrid",
   "fuel": "Petrol"
   }
   Statuts HTTP :
   200 OK : La voiture a été trouvée et ses informations sont retournées.
   404 Not Found : La voiture avec l’ID donné n’a pas été trouvée dans la base de données.
   500 Internal Server Error : Erreur serveur, vérifier les logs serveur.
4. PUT /api/cars/:id
   Fonction : Modifier une voiture existante.
   Description : Met à jour les informations d’une voiture.
   Paramètres obligatoires :
   id: ID de la voiture à mettre à jour.
   price: Nouveau prix de la voiture.
   year: Nouvelle année de production (optionnel).
   engine: Nouveau type de moteur (optionnel).
   Paramètres optionnels :
   color: Nouvelle couleur de la voiture (optionnel).
   fuel: Nouveau carburant.
   type: Liste des types de voiture à jour.
   features: Liste des caractéristiques mises à jour.
   Authentification : Oui (authentification nécessaire pour modifier une voiture).
   Exemple de réponse :
   json
   Copier le code
   {
   "message": "Car updated successfully",
   "car": {
   "id": "1",
   "brand": "Toyota",
   "model": "Camry",
   "year": 2021,
   "price": 27000,
   "engine": "Hybrid",
   "fuel": "Petrol",
   "type": ["Sedan"]
   }
   }
   Statuts HTTP :
   200 OK : La voiture a été mise à jour avec succès.
   400 Bad Request : Paramètres manquants ou incorrects dans la requête.
   401 Unauthorized : L'utilisateur n'est pas authentifié.
   404 Not Found : La voiture avec l'ID spécifié n'existe pas.
   500 Internal Server Error : Erreur serveur, vérifier les logs serveur.
5. DELETE /api/cars/:id
   Fonction : Supprimer une voiture de la base de données.
   Description : Supprime une voiture en fonction de son ID.
   Paramètres obligatoires :
   id: ID de la voiture à supprimer.
   Paramètres optionnels : Aucun.
   Authentification : Oui (authentification nécessaire pour supprimer une voiture).
   Exemple de réponse :
   json
   Copier le code
   {
   "message": "Car deleted successfully"
   }
   Statuts HTTP :
   200 OK : La voiture a été supprimée avec succès.
   401 Unauthorized : L'utilisateur n'est pas authentifié pour effectuer cette action.
   404 Not Found : La voiture avec l’ID spécifié n’a pas été trouvée.
   500 Internal Server Error : Erreur serveur, vérifier les logs serveur.