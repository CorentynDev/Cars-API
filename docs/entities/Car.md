Cars - Gestion des voitures (caractéristiques, performance, disponibilité…).

{
"_id": "ObjectId",
"brand": "string",
"model": "string",
"year": "number",
"price": "number",
"features": ["string"],
"availability": "boolean"
}

Comprend les modèles spécifiques avec des fiches techniques, des images, des spécifications détaillées, et des variantes.

{
"_id": "ObjectId",
"brand_id": "ObjectId",
"model": "string",
"year": "number",
"spec_id": "ObjectId",
"images": ["string"],
"price": "number",
"availability": "boolean",
"history": ["string"]
}

{
"_id": "ObjectId",
"brand_id": "ObjectId",
"model": "Porsche 911",
"year": 2024,
"price": {
"base": 120000,
"options": {
"sport_package": 15000
}
},
"technical_specifications": {
"engine": "Essence",
"power": "450 ch",
"acceleration_0_100": "3.5 sec"
},
"types": ["ObjectId", "ObjectId"],
"safety_features": ["ObjectId", "ObjectId"],
"technologies": ["ObjectId", "ObjectId"],
"comfort_features": ["ObjectId", "ObjectId"],
"images": [
"https://cdn.car-images/porsche_911.jpg",
"https://cdn.car-images/porsche_911_interior.jpg"
]
}→ Contient toutes les informations de base sur les voitures.

{
"_id": "ObjectId",
"brand_id": "ObjectId",
"model": "Porsche 911",
"year": 2024,
"price": {
"base": 120000,
"options": {
"sport_package": 15000
}
},
"technical_specifications": {
"engine": "Essence",
"power": "450 ch",
"acceleration_0_100": "3.5 sec"
},
"types": ["ObjectId", "ObjectId"],
"safety_features": ["ObjectId", "ObjectId"],
"technologies": ["ObjectId", "ObjectId"],
"comfort_features": ["ObjectId", "ObjectId"],
"images": [
"https://cdn.car-images/porsche_911.jpg",
"https://cdn.car-images/porsche_911_interior.jpg"
]
}
Liens :
brand_id : Lien avec la collection Brands (Référence à la marque de la voiture).
types : Lien avec la collection Types (Une voiture peut appartenir à plusieurs types).
safety_features : Lien avec la collection SafetyFeatures (Systèmes de sécurité).
technologies : Lien avec la collection Technologies (Technologies avancées).
comfort_features : Lien avec la collection ComfortFeatures (Confort).
