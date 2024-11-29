# Dealership Entity

## Description

The `dealership` entity allows specific `users` to manage their car garage and their inventory.

## JSON Structure for MongoDB Atlas

```JSON
{
  "_id": "ObjectId",
  "users": ["ObjectId"],
  "location": "string",
  "cars": ["ObjectId"],
  "reviews": [
    {
      "_id": "ObjectId",
      "user_id": "ObjectId",
      "title": "string",
      "content": "string",
      "date": "ISODate"
    }
  ]
}
```