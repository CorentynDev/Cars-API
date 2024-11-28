Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/brands	Liste toutes les marques de voitures.	region (optionnel).
GET	/brands/:id	Récupère les détails d’une marque spécifique.	id (obligatoire).
POST	/brands	Ajoute une nouvelle marque.	name, logo_url, history (obligatoires).
PUT	/brands/:id	Met à jour les infos d’une marque.	Champs modifiables : history, logo_url, records.
DELETE	/brands/:id	Supprime une marque.	id (obligatoire).
GET	/brands/:id/history	Affiche l’histoire complète d’une marque.	id (obligatoire).
GET	/brands/:id/records	Liste les records détenus par une marque (ventes, compétitions…).	id (obligatoire).
GET	/brands/:id/popular-car	Liste les modèles les plus populaires d’une marque.	id (obligatoire).

Routes principales pour la gestion des marques :
GET /api/brands : Liste toutes les marques.
POST /api/brands : Créer une nouvelle marque.
GET /api/brands/:id : Détails d’une marque spécifique par son ID.
PUT /api/brands/:id : Met à jour les informations d’une marque.
DELETE /api/brands/:id : Supprime une marque spécifique.

1. Recherche et filtres
   GET /api/brands/by-country/:country : Liste des marques par pays d’origine.
   GET /api/brands/search?query=:query : Recherche de marques par mot-clé.
   GET /api/brands/top-brands?limit=:limit : Liste des marques ayant le plus de modèles dans la base.
2. Statistiques
   GET /api/brands/stats/count : Nombre total de marques.
   GET /api/brands/stats/models-count/:brandId : Nombre de modèles associés à une marque spécifique.
   GET /api/brands/stats/average-price/:brandId : Prix moyen des voitures d’une marque.

1. GET /api/brands
   Fonction : Liste toutes les marques disponibles.
   Description : Récupère une liste de toutes les marques de voitures.
   Paramètres obligatoires : Aucun.
   Paramètres optionnels :
   limit: Nombre maximum de marques à retourner.
   page: Numéro de page pour la pagination.
   Authentification : Non.
   Exemple de réponse :
   json
   Copier le code
   {
   "brands": [
   {
   "id": "1",
   "name": "Toyota",
   "country": "Japan",
   "founding_year": 1937
   },
   {
   "id": "2",
   "name": "Tesla",
   "country": "USA",
   "founding_year": 2003
   }
   ]
   }
   Statuts HTTP :
   200 OK : Les données sont retournées avec succès.
   400 Bad Request : Requête malformée ou paramètres incorrects.
   500 Internal Server Error : Erreur serveur, vérifier les logs serveur.
2. POST /api/brands
   Fonction : Ajouter une nouvelle marque.
   Description : Crée une nouvelle marque de voiture.
   Paramètres obligatoires :
   name: Nom de la marque.
   country: Pays d'origine de la marque.
   founding_year: Année de fondation de la marque.
   Paramètres optionnels :
   logo: URL du logo de la marque.
   description: Description de la marque.
   Authentification : Oui (authentification nécessaire pour ajouter une marque).
   Exemple de réponse :
   json
   Copier le code
   {
   "message": "Brand created successfully",
   "brand": {
   "id": "3",
   "name": "BMW",
   "country": "Germany",
   "founding_year": 1916,
   "logo": "https://example.com/logo.png"
   }
   }
   Statuts HTTP :
   201 Created : La marque a été ajoutée avec succès.
   400 Bad Request : Champs manquants ou invalides.
   401 Unauthorized : L'utilisateur n'est pas authentifié.
   500 Internal Server Error : Erreur serveur, vérifier les logs serveur.
