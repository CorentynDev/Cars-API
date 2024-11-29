# Safety Feature Entity

## Description

The `safety feature` entity is a set of all features which could be found in a `car`, aimed at security.

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
