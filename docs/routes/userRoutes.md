Routes CRUD
GET /users
Params :

role (optionnel) : Type d'utilisateur (buyer, seller, admin).
POST /users
Body :

name (obligatoire).
email (obligatoire).
role (obligatoire).
GET /users/:id
Params :

id (obligatoire) : ID utilisateur.
PUT /users/:id
Body :

email (optionnel).
preferences (optionnel).
DELETE /users/:id

Routes avancées
GET /users/:id/favorites
Params :

id (obligatoire) : ID utilisateur.
POST /users/:id/favorites
Body :

car_id (obligatoire).
DELETE /users/:id/favorites/:car_id

Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/users	Liste tous les utilisateurs.	role (optionnel)
GET	/users/:id	Récupère les infos d'un utilisateur spécifique.	id (obligatoire)
POST	/users	Crée un utilisateur.	name, email, role (obligatoires)
PUT	/users/:id	Met à jour les infos utilisateur.	Champs au choix : email, preferences
DELETE	/users/:id	Supprime un utilisateur.	id (obligatoire)
GET	/users/:id/favorites	Récupère les favoris de l'utilisateur.	id (obligatoire)
POST	/users/:id/favorites	Ajoute une voiture aux favoris.	car_id (obligatoire)
DELETE	/users/:id/favorites/:car_id	Retire une voiture des favoris.	car_id (obligatoire)

1. Authentification et Profil
   POST /api/users/register : Inscription d’un utilisateur.
   Params : { username, email, password, preferences }
   POST /api/users/login : Connexion d’un utilisateur.
   Params : { email, password }
   GET /api/users/logout : Déconnexion d’un utilisateur.
   GET /api/users/me : Récupère les informations du profil de l’utilisateur connecté.
   PUT /api/users/update-profile : Met à jour le profil de l’utilisateur connecté.
   Params : { username, email, preferences, avatar_url }
   DELETE /api/users/delete-account : Supprime le compte de l’utilisateur connecté.
2. Gestion des Relations Sociales
   POST /api/users/:id/follow : Suivre un utilisateur.
   DELETE /api/users/:id/unfollow : Arrêter de suivre un utilisateur.
   GET /api/users/:id/followers : Liste des abonnés d’un utilisateur.
   GET /api/users/:id/following : Liste des utilisateurs suivis par un utilisateur.
1. Publications et Partages
   POST /api/posts : Publier un post général (hors groupe).
   Params : { title, content, images }
   GET /api/posts : Liste des posts publics.
   GET /api/posts/:id : Détails d’un post.
   PUT /api/posts/:id : Modifier un post.
   Params : { title, content }
   DELETE /api/posts/:id : Supprimer un post.
2. Gestion des Likes
   POST /api/posts/:id/like : Liker un post.
   DELETE /api/posts/:id/unlike : Enlever son like d’un post.
   GET /api/posts/:id/likes : Liste des utilisateurs ayant liké un post.
1. Suggestions
   POST /api/suggestions : Ajouter une suggestion pour améliorer la plateforme ou le contenu.
   Params : { title, description, category }
   GET /api/suggestions : Liste des suggestions.
   GET /api/suggestions/:id : Détails d’une suggestion.
   PUT /api/suggestions/:id : Modifier une suggestion.
   Params : { title, description }
   DELETE /api/suggestions/:id : Supprimer une suggestion.
2. Votes
   POST /api/suggestions/:id/vote : Voter pour une suggestion.
   DELETE /api/suggestions/:id/unvote : Retirer son vote pour une suggestion.
   GET /api/suggestions/:id/votes : Liste des votes sur une suggestion.