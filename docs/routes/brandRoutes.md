# Routes for Brands

## Routes Chart

| Method   | Route                                      | Description                                         | Params                                                            |
|----------|--------------------------------------------|-----------------------------------------------------|-------------------------------------------------------------------|
| `GET`    | `/api/brands/`                             | Lists all car brands.                               | `region` (optional)                                               |
| `GET`    | `/api/brands/:id`                          | Get details concerning one car brand                | `id` (mandatory)                                                  |
| `POST`   | `/api/brands/:id`                          | Add a new car brand.                                | `name` (mandatory), `logo_url` (mandatory), `history` (mandatory) |
| `PUT`    | `/api/brands/:id`                          | Modify an existing brand.                           | `history` (optional), `logo_url` (optional), `records` (optional) |
| `DELETE` | `/api/brands/:id`                          | Delete a car brand.                                 | `id` (mandatory)                                                  |
| `GET`    | `/api/brands/:id/history`                  | Get the history of a car brand.                     | `id` (mandatory)                                                  |
| `GET`    | `/api/brands/:id/records`                  | Lists all records of a car brand.                   | `id` (mandatory)                                                  |
| `GET`    | `/api/brands/:id/popular-car`              | Lists most popular cars of a brand.                 | `id` (mandatory)                                                  |
| `GET`    | `/api/brands/by-country/:country`          | Lists car brands regarding a country.               | `country` (mandatory)                                             |
| `GET`    | `/api/brands/search?query=:query`          | Search a car brand with keyword                     | `query` (mandatory)                                               |
| `GET`    | `/api/brands/top-brands?limit=:limit`      | Lists car brand with most cars.                     | `limit` (mandatory)                                               |
| `GET`    | `/api/brands/stats/count`                  | Returns the number of car brands.                   |                                                                   |
| `DELETE` | `/api/brands/stats/models-count/:brandId`  | Returns the number of cars from the car brand.      | `brandId` (mandatory)                                             |
| `DELETE` | `/api/brands/stats/average-price/:brandId` | Returns the average price of cars from a car brand. | `brandId` (mandatory)                                             |
| `DELETE` | `/api/brands/top-brands?limit=:limit`      | Lists car brand with most cars.                     | `limit` (mandatory)                                               |
| `DELETE` | `/api/brands/top-brands?limit=:limit`      | Lists car brand with most cars.                     | `limit` (mandatory)                                               |

## Details of each routes

1. `GET /api/brands/`

    * Mandatory params:
        * None.
    * Optional params:
        * limit:
            * Maximal number of car brands to return.
        * page:
            * Page number for pagination
        * Authentication:
            * Optional
        * Response example:
            * ```JSON
                {
                  "brands":  [
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
                ```
        * HTTP Status:
          * `200 OK`: Data are returned successfully
          * `400 Bad Request`: The request is non-conventional or params are not correct
          * `500 Internal Server Error`: Server error, please try again


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
