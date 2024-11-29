# Brand Entity

## Description

The `Brand` entity is the gathering of history, records, top sales, goals (dreams, wish) and logos of a car brand.

As a matter of fact, one `car` has **one and only one** brand, and one `brand` has **one or more** `cars`.

## JSON Structure for MongoDB Atlas

The JSON file below shows the basic structure of a brand:

```JSON
{
  "_id": "ObjectId",
  "name": "string",
  "logo_url": "string",
  "founded": "ISODate",
  "founder": "string",
  "headquarters": "string",
  "history": "string",
  "records": [
    "ObjectId"
  ],
  "car_id": [
    "ObjectId"
  ]
}
```
