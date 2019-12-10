---
id: mongodb_collection
title: MongoDB Collection Connection
sidebar_label: Connection: Collection
---

The `mongodb_collection` connection sets up a connection to a MongoDB deployment. A [connection URI](https://docs.mongodb.com/manual/reference/connection-string/index.html) with authentication credentials (username and password) is required. The URI can be in the standard or dns seedlist (srv) formats. Connections are defined on a collection level, since this allows for read/write access control on a per collection level. Access control can also be managed using the roles in the database.

>Since the connection URI contains authentication secrets, it should be stored using the [`_secret`](operators/secret.md) operator, and not be committed to the project repository. Alternatively, the entire properties object for the connection can be stored using the `_secret` operator.

## Required Fields

The connection `id` should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `id`
- `type`: "mongodb_collection"
- `properties.databaseUri`
- `properties.collection`

## Default Connection Settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "id": "required",
  "type": "mongodb_collection",
  "properties": {
    "databaseUri": "required",
    "databaseName": "default from connection string",
    "collection": "required",
    "read": true,
    "write": false
  }
}
```

<!--YAML-->

```yaml
id: required
type: mongodb_collection
properties:
  databaseUri: required
  databaseName: default from connection string
  collection: required
  read: true
  write: false
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Connection Properties

- `databaseUri`: _String_ - **REQUIRED** - Connection uri string for the MongoDb deployment. Should be stored using the [_secret](operators/secret.md) operator.
- `databaseName`: _String_ - Default: Database specified in connection string - The name of the database in the MongoDB deployment.
- `collection`: _String_ - **REQUIRED** - The name of the MongoDB collection.
- `read`: _Boolean_ - Default: `true` - Allow read operations like find on the collection.
- `write`: _Boolean_ - Default: `false` - Allow write operations like find or update on the collection.

## Allowed Requests

- [`mongodb_aggregation`](connections/mongodb/mongodb_aggregation.md): Run a MongoDB aggregation pipeline.
- [`mongodb_find`](connections/mongodb/mongodb_find.md): Run a MongoDB find query.
- [`mongodb_find_one`](connections/mongodb/mongodb_find_one.md): Run a MongoDB find one query.

## Allowed Mutations

- [`mongodb_insert_one`](connections/mongodb/mongodb_insert_one.md): Insert a document into the database.
- [`mongodb_update_one`](connections/mongodb/mongodb_update_one.md): Update a document into the database.

### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "connections": [
    {
      "id": "mongodb_stores",
      "type": "mongodb_collection",
      "properties": {
        "databaseUri": {
          "_secret": "my_uri"
        },
        "databaseName": "myDatabase",
        "collection": "stores",
        "read": true,
        "write": false
      }
    },
    {
      "id": "mongodb_logs",
      "type": "mongodb_collection",
      "properties": {
        "databaseUri": {
          "_secret": "my_uri"
        },
        "databaseName": "myDatabase",
        "collection": "logs",
        "read": false,
        "write": true
      }
    },
    {
      "id": "mongodb_orders",
      "type": "mongodb_collection",
      "properties": {
        "_secret": "my_orders_database"
      },
    }
  ]
}
```

<!--YAML-->

```yaml
connections:
  - id: mongodb_stores
    type: mongodb_collection
    properties:
      databaseUri:
        _secret: my_uri
      databaseName: myDatabase
      collection: stores
      read: true
      write: false
  - id: mongodb_logs
    type: mongodb_collection
    properties:
      databaseUri:
        _secret: my_uri
      databaseName: myDatabase
      collection: logs
      read: false
      write: true
  - id: mongodb_orders
    type: mongodb_collection
    properties:
      _secret: my_orders_database
```

<!--END_DOCUSAURUS_CODE_TABS-->
