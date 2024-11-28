Routes
GET /transactions
Params :

user_id (optionnel).
car_id (optionnel).
POST /transactions
Body :

user_id (obligatoire).
car_id (obligatoire).
price (obligatoire).
GET /transactions/:id

Méthode	Route	Description	Paramètres obligatoires / optionnels
GET	/transactions	Liste les transactions.	user_id, car_id (optionnels)
POST	/transactions	Crée une transaction.	user_id, car_id, price (obligatoires)
GET	/transactions/:id	Détails d'une transaction.	id (obligatoire)