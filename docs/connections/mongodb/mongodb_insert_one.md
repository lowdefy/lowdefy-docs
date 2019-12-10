---
id: mongodb_insert_one
title: MongoDB Insert One Mutation
sidebar_label: Mutation: Insert One
---

The `mongodb_insert_one` mutation inserts a document into the collection specified in the connectionId. If a `_id` field is not specified, a MongoDB `ObjectID` will be generated.

## Required Fields

The request `name` should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).
The `connectionId` should refer to a `mongodb_collection` connection object.

- `name`
- `type`: "mongodb_insert_one"
- `connectionId`: 
- `properties.doc`

## Default Mutation Settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "required",
  "type": "mongodb_insert_one",
  "connectionId": "required",
  "properties": {
    "doc": "required"
  }
}
```

<!--YAML-->

```yaml
name: required
type: mongodb_insert_one
connectionId: required
properties:
  doc: required
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Mutation Properties

- `doc`: _Object_ - **REQUIRED** - The document to be inserted.
- `options`: _Object_ - Optional settings. See the [driver docs](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#insertOne) for more information. Supported settings are:
  - `w`: _Integer_ **|** _String_ - The write concern
  - `wtimeout`: _Integer_  - The write concern timeout.
  - `j`: _Boolean_ - Specify a journal write concern.
  - `forceServerObjectId`: _Boolean_ - Force server to assign _id values instead of driver.
  - `bypassDocumentValidation`: _Boolean_ - Allow driver to bypass schema validation in MongoDB 3.2 or higher.


### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "insert_new_comment",
  "type": "mongodb_insert_one",
  "properties": {
    "doc": {
      "comment": {
        "_state": "comment_input"
      },
      "user_id": {
        "_user": "id"
      },
      "timestamp": {
        "_date": "now"
      }
    }
  }
}
```

<!--YAML-->

```yaml
name: insert_new_comment
type:  mongodb_insert_one
properties:
  doc:
    comment:
      _state: comment_input
    user_id:
      _user: id
    timestamp:
      _date: now
    
```

<!--END_DOCUSAURUS_CODE_TABS-->
