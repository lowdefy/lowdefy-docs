---
id: mongodb_update_one
title: MongoDB Update One Mutation
sidebar_label: Mutation: Update One
---

The `mongodb_update_one` mutation updates a single document into the collection specified in the connectionId. It requires a filter, which is written in the query syntax, to select a document to update. It will update the first document that matches the filter. If `upsert` is set to true, it will insert a new document if no document is found to update.

## Required Fields

The request `name` should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).
The `connectionId` should refer to a `mongodb_collection` connection object.

- `name`
- `type`: "mongodb_update_one"
- `connectionId`: 
- `properties.filter`
- `properties.update`

## Default Mutation Settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "required",
  "type": "mongodb_update_one",
  "connectionId": "required",
  "properties": {
    "filter": "required",
    "update": "required"
  }
}
```

<!--YAML-->

```yaml
name: required
type: mongodb_update_one
connectionId: required
properties:
  filter: required
  update: required
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Mutation Properties

- `filter`: _Object_ - **REQUIRED** - The filter used to select the document to update.
- `update`: _Object_ - **REQUIRED** - The update operations to be applied to the document.
- `options`: _Object_ - Optional settings. See the [driver docs](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#updateOne) for more information. Supported settings are:
  - `upsert`: _Boolean_ - Insert document if no match is found.
  - `arrayFilters`: _Array_ - Array filters for the [`$[<identifier>]`](https://docs.mongodb.com/manual/reference/operator/update/positional-filtered/) array update operator.  
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
  "name": "like_comment",
  "type": "mongodb_update_one",
  "properties": {
    "filter": {
      "_id": {
        "_state": "comments_id"
      }
    },
    "update": {
      "$inc": {
        "likes": 1
      },
      "$push": {
        "liked_by": {
          "_user": null
        }
      },
      "$set": {
        "last_liked": {
          "_date": "now"
        }
      }
    }
  }
}
```

<!--YAML-->

```yaml
name: like_comment
type:  mongodb_update_one
properties:
  filter:
    _id:
      _state: comment_id
  update:
    $inc:
      likes: 1
    $push:
      liked_by:
        _user: 
    $set:
      last_liked:
        _date: now
    
```

<!--END_DOCUSAURUS_CODE_TABS-->
