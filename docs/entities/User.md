# User Entity

## Description

The `user` entity is the core of the API, combined to `car`. It allows the `user` to interact with all aspects of API.

## JSON Structure for MongoDB Atlas

```JSON
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "profile_picture": "string",
  "role": "string",
  "car_id": "ObjectId",
  "wishlist": ["ObjectId"],
  "favorites": ["ObjectId"],
  "preferences": [
    {
      "theme": "string",
      "lang": "string",
      "system_notification": "boolean",
      "activity_notification": "boolean"
    }
  ]
}
```
