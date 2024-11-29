# Comfort Entity

## Description

The `comfort` entity is the gathering all the comfort stuff inside a vehicle. You would be able to know if the stuff is a standard (in other word mandatory) or not.

## JSON Structure for MongoDB Atlas

```JSON
{
"_id": "ObjectId",
"name": "string",
"description": "string",
"standard": "boolean",
"optional_on_models": ["ObjectId"]
}
```
