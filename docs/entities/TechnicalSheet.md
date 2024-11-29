# TechnicalSheet Entity

## Description

The `technical sheet` entity is the gathering of all information concerning a `car`, and its statistics and its
characteristics.

## JSON Structure for MongoDB Atlas

```JSON
{
  "_id": "ObjectId",
  "engine": {
    "position": "string",
    "cylinder_volume": "number"
  },
  "transmission": "string",
  "length": "number",
  "width": "number",
  "curb-weight": "number",
  "weight": "number",
  "fuel_efficiency": "string",
  "performance": {
    "max_speed": "number",
    "horsepower": "number"
  }
}
```
