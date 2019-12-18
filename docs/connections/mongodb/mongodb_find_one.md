---
id: mongodb_find_one
title: MongoDB Find One
sidebar_label: Request: Find One
---

The `mongodb_find_one` request executes a mongodb [query](https://docs.mongodb.com/manual/tutorial/query-documents/) on the collection specified in the connectionId. It returns the first document that matches the specified query.


## Required Fields

The request `name` should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).
The `connectionId` should refer to a `mongodb_collection` connection object.

- `name`
- `type`: "mongodb_find_one"
- `connectionId`: 
- `properties.query`

## Default Request Settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "required",
  "type": "mongodb_find_one",
  "connectionId": "required",
  "properties": {
    "query": "required"
  }
}
```

<!--YAML-->

```yaml
name: required
type: mongodb_find_one
connectionId: required
properties:
  query: required
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Request Properties

- `query`: _Object_ - **REQUIRED** - A MongoDB query object.
- `options`: _Object_ - Optional settings. See the [driver docs](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#findOne) for more information. Supported settings are:
  - `limit`: _Integer_ - Sets the limit of documents returned in the query.
  - `sort`: _Array_ **|** _Object_  - Set to sort the documents coming back from the query. Array of indexes, `[['a', 1]]`.
  - `projection`: _Object_ - The fields to return in the query. Object of fields to either include or exclude (one of, not both), `{'a':1, 'b': 1}` or `{'a': 0, 'b': 0}`.
  - `skip`: _Integer_ - Set to skip N documents ahead in your query (useful for pagination).
  - `hint`: _Object_ - Tell the query to use specific indexes in the query. Object of indexes to use, `{'_id':1}`.
  - `comment`: _String_ - Add a comment to make the profiler logs simpler.
  - `readPreference`: _String_ **|** _Object_ - The preferred read preference.
  - `maxTimeMS`: _Integer_ - Number of milliseconds to wait before aborting the query.
  - `collation`: _Object_ - Specify collation (MongoDB 3.4 or higher) settings for update operation.


### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "find_by_id",
  "type": "mongodb_find_one",
  "properties": {
    "query": {
      "_id": {
        "_input": "_id"
      }
    }
  }
}
```

<!--YAML-->

```yaml
name: find_by_id
type:  mongodb_find_one
properties:
  query:
    _id:
      _input: _id
```

<!--END_DOCUSAURUS_CODE_TABS-->
