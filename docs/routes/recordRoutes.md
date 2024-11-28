Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/records	Liste tous les records disponibles (ventes, performances, compétitions).	Aucun paramètre.
GET	/records/:id	Détails d’un record spécifique.	id (obligatoire).
POST	/records	Ajoute un nouveau record.	type, description, value (obligatoires).
PUT	/records/:id	Met à jour un record.	Champs modifiables : description, value.
DELETE	/records/:id	Supprime un record.	id (obligatoire).