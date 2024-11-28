1. Groupes
   POST /api/groups : Créer un groupe.
   Params : { name, description, type (public/private), ownerId }
   GET /api/groups : Liste de tous les groupes (avec filtres par type ou mots-clés).
   GET /api/groups/:id : Détails d’un groupe spécifique.
   PUT /api/groups/:id : Modifier un groupe.
   Params : { name, description, type }
   DELETE /api/groups/:id : Supprimer un groupe.
2. Membres de Groupes
   POST /api/groups/:groupId/join : Rejoindre un groupe.
   POST /api/groups/:groupId/leave : Quitter un groupe.
   GET /api/groups/:groupId/members : Liste des membres d’un groupe.
3. Discussions dans les Groupes
   POST /api/groups/:groupId/posts : Ajouter un post dans un groupe.
   Params : { title, content }
   GET /api/groups/:groupId/posts : Liste des posts d’un groupe.
   POST /api/groups/:groupId/posts/:postId/comment : Ajouter un commentaire à un post.
   Params : { text }
   DELETE /api/groups/:groupId/posts/:postId : Supprimer un post dans un groupe.
1. Gestion des Événements
   POST /api/events : Créer un événement.
   Params : { name, date, location, description, organizerId }
   GET /api/events : Liste des événements à venir.
   GET /api/events/:id : Détails d’un événement spécifique.
   PUT /api/events/:id : Modifier un événement.
   Params : { name, date, location, description }
   DELETE /api/events/:id : Supprimer un événement.
2. Participation
   POST /api/events/:eventId/join : Participer à un événement.
   POST /api/events/:eventId/leave : Quitter un événement.
   GET /api/events/:eventId/participants : Liste des participants à un événement.

1. Gestion de la Communauté
   GET /api/moderation/reports : Liste des signalements (contenu inapproprié).
   POST /api/moderation/ban-user/:userId : Bannir un utilisateur.
   POST /api/moderation/delete-content/:contentId : Supprimer un contenu signalé.
2. Signalements
   POST /api/reports : Signaler un contenu ou un utilisateur.
   Params : { targetId, reason, details }
   GET /api/reports/:id : Détails d’un signalement.
   DELETE /api/reports/:id : Supprimer un signalement traité.
   IX. Routes pour l’Engagement et la Gamification
1. Système de Badges
   POST /api/badges : Ajouter un nouveau badge.
   Params : { name, description, criteria }
   GET /api/badges : Liste des badges disponibles.
   GET /api/users/:id/badges : Liste des badges obtenus par un utilisateur.