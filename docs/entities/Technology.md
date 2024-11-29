# Technology Entity

## Description

The `technology` entity is a set of systems which improve a `car`.

## JSON Structure for MongoDB Atlas

```JSON
{
  "_id": "ObjectId",
  "name": "string",
  "description": "string",
  "standard": "boolean",
  "optional_on_models": [
    "ObjectId"
  ],
  "invented": "ISODate",
  "inventor": "string"
}
```
