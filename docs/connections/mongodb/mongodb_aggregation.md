---
id: mongodb_aggregation
title: MongoDB Aggregation Request
sidebar_label: Request: Aggregation
---

The `mongodb_aggregation` request executes an [aggregation pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/) in the collection specified in the connectionId. It returns the array of documents returned by the aggregation. Aggregation pipelines are MongoDB's data processing and aggregation framework. They are based on a series of stages, each of which apply a transformation to the data passed through them, like sorting, grouping or calculating additional fields.

>Cursors are not supported. The request will return the whole body of the response as an array.

## Required Fields

The request `name` should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).
The `connectionId` should refer to a `mongodb_collection` connection object.

- `name`
- `type`: "mongodb_aggregation"
- `connectionId`: 
- `properties.pipeline`

## Default Request Settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "required",
  "type": "mongodb_aggregation",
  "connectionId": "required",
  "properties": {
    "pipeline": "required"
  }
}
```

<!--YAML-->

```yaml
name: required
type: mongodb_aggregation
connectionId: required
properties:
  pipeline: required
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Request Properties

- `pipeline`: _Array_ - **REQUIRED** - Array containing all the aggregation framework commands for the execution.
- `options`: _Object_ - Optional settings. See the [driver docs](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#aggregate) for more information. Supported settings are:
  - `readPreference`: _String_ **|** _Object_ - The preferred read preference.
  - `allowDiskUse`: _Boolean_ - Default: `false` - Lets the server know if it can use disk to store temporary results for the aggregation.
  - `maxTimeMS`: _Integer_ - Specifies a cumulative time limit in milliseconds for processing operations on the cursor.
  - `bypassDocumentValidation`: _Boolean_ - Default: `false` - Allow driver to bypass schema validation in MongoDB 3.2 or higher.
  - `collation`: _Object_ - Specify collation (MongoDB 3.4 or higher) settings for update operation.
  - `comment`: _String_ - Add a comment to an aggregation command.
  - `hint`: _String_ **|** _Object_ - Add an index selection hint to an aggregation command.


### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "avg_score_by_region",
  "type": "mongodb_aggregation",
  "properties": {
    "pipeline": [
      {
        "$group": {
          "_id": "$region",
          "score": {
            "$avg": "$score"
          }
        }
      },
      {
        "$project": {
          "_id": 0,
          "region": "$_id",
          "score": 1
        }
      },
      {
        "$sort": {
          "score": 1
        }
      }
    ]
  }
}
```

<!--YAML-->

```yaml
name: avg_score_by_region
type:  mongodb_aggregation
properties:
  pipeline:
    - $group:
        _id: '$region'
        score:
          $avg: '$score'
    - $project:
        _id: 0
        region: '$_id'
        score: 1
    - $sort:
        score: 1

```

<!--END_DOCUSAURUS_CODE_TABS-->
