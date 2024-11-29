# Transaction Entity

## Description

The `transaction` entity is a set of information that allows users to keep track of their purchase(s), sale(s) and rental(s).

## JSON Structure for MongoDB Atlas

```JSON
{
"_id": "ObjectId",
"user_id": "ObjectId",
"car_id": "ObjectId",
"price": "number",
"date": "ISODate"
}
```
