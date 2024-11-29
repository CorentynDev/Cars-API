# Car Entity

## Description

The `car` entity is the main entity of the API. It gathered several `_id` from other entities, and allows users to know
everything about a `car`.

## JSON Structure for MongoDB Atlas

```JSON
{
  "_id": "ObjectId",
  "brand_id": "ObjectId",
  "model": "string",
  "year": "number",
  "price": {
    "base": "number",
    "options": [
      {
        "name": "string",
        "price": "number",
        "standard": "boolean"
      }
    ]
  },
  "technical_sheet": "ObjectId",
  "types": [
    "ObjectId"
  ],
  "safety_features": [
    "ObjectId"
  ],
  "technologies": [
    "ObjectId"
  ],
  "comfort_features": [
    "ObjectId"
  ],
  "images": [
    "ObjectId"
  ]
}
```
