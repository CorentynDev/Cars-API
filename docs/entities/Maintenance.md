# Maintenance Entity

## Description

The `maintenance` entity allows users to keep track of their `car`, and constitute a copy of the maintenance log of their `car`.

## JSON Structure for MongoDB Atlas

```JSON
{
  "_id": "ObjectId",
  "car_id": "ObjectId",
  "logs": [
    {
      "name": "string",
      "description": "string",
      "date": "ISODate",
      "replaced_part": "string",
      "cost": "number"
    }
  ]
}
```