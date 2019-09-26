---
id: connections
title: Connections and Requests
sidebar_label: Connections and Requests
---

Lowdefy applications connect to other services like databases and REST APIs using connections and requests.

A connection to a external service is set up as a connection object in the `connections` section of the deployment `lowdefy.json` file. In this object properties of the connection like the url endpoint and secrets are defined. Each type of connection has its own properties.

Requests to a connection are defined in the requests section of a page. These requests are specific requests to the connections, like a read or update operation on a database, or an api call for external data.

## Connections 

Connections are defined in the `conections` section of the deployment `lowdefy.json` file. Each connection should have a unique connection id, that is a valid Lowdefy id, as defined [here](lowdefy-file#_lowdefy_id_).

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
// lowdefy.json
"connections": [
  {
    "id": "lowdefy_id",
    "type": "connection_type",
    "properties": {
      // connection properties
    }
  }
]
```
<!--YAML-->
```yaml
# lowdefy.yaml
connections:
  -
    id: lowdefy_id
    type: connection_type
    properties:
      # connection properties
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Connection Secrets

Connections normally require sensitive secrets like passwords and access keys that should not be openly distributed or committed in repositories. The `"_secret"` operator allows secrets to be accessed from the deployment's secure secret store. These secrets can be managed from the controller application.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "id": "lowdefy_id",
  "type": "connection_type",
  "properties": {
    "password" : { "_secret": "my_secret_id" }
  }
}
```
<!--YAML-->
```yaml
id: lowdefy_id
type: connection_type
properties:
  password: 
    _secret: my_secret_id
```
<!--END_DOCUSAURUS_CODE_TABS-->


### Connection types

Currently supported connection types are:

- HTTP/HTTPS requests [`https`](link)
- MongoDB collections [`mongodb_collection`](link)

## Requests

Requests can be defined in the `requests` section of a Lowdefy page. Each request is a specific operation on a connection, that can modify data in an external service and/or return data. Each request type is linked to a connection, for example a MongoDB query or insert can only be performed on a `mongodb_collection` connection.


## Examples

Defining connections
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "connections": [
    {
      "id": "mongodb_mflix_comments",
      "type": "mongodb_collection",
      "properties": {
        "databaseURI": { "_secret": "mongodb_mflix_uri" },
        "collection": "comments",
        "read": true,
        "write": true
      }
    },
    {
      "id": "mongodb_mflix_movies",
      "type": "mongodb_collection",
      "properties": {
        "databaseURI": { "_secret": "mongodb_mflix_uri" },
        "collection": "movies",
        "read": true,
        "write": false
      }
    },
    {
      "id": "api_tmdb",
      "type": "https",
      "properties": {
        "headers": {
          "Authorization": { "_secret": "tmdb_api_key" }
        } ,
        "baseUrl": "https://api.themoviedb.org/3",
        "allowMethods": ["get", "post"]
      }
    }
  ]
}
```
<!--YAML-->
```yaml
connections:
- 
  id: mongodb_mflix_comments
  type: mongodb_collection
  properties:
    databaseURI:
      _secret: mongodb_mflix_uri
    collection: comments
    read: true
    write: true
- 
  id: mongodb_mflix_movies
  type: mongodb_collection
  properties:
    databaseURI:
      _secret: mongodb_mflix_uri
    collection: movies
    read: true
    write: false
- 
  id: api_tmdb
  type: https
  properties:
    headers:
      Authorization:
        _secret: tmdb_api_key
    baseUrl: https://api.themoviedb.org/3
    allowMethods:
    - get
    - post
```
<!--END_DOCUSAURUS_CODE_TABS-->


Defining requests on a page.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "requests": [
    {
      "name": "save",
      "type": "mongodb_insert",
      "connectionId": "foo_sales",
      "properties": {
        "pipeline": [
          { "$addFields": {
              "capture_date" : { "_date": "now" },
              "agent": { "_user": "id" },
              "agent_name": { "_user": "fullName" },
              "manager": { "_user": "manager" }
          } }
        ]
      }

    },
    {
      "name": "agg_movies_by_year",
      "type": "mongodb_aggregation",
      "connectionId": "mongodb_mflix_movies",
      "properties": {
        "pipeline": [
          { 
            "$group": {
              "_id": { "$dateFromParts": { "year": { "$year": "$released" } } },
              "count": { "$sum": 1 },
              "avg_imdb": { "$avg": "$imdb.rating" }
            }
          },
          { 
            "$addFields": {
              "year": "$id"  
            }
          },
          {
            "$sort": { 
              "year": 1 
            }
          }
        ]
      }
    }
    {
      "name": "restApiGet",
      "type": "https_get",
      "connectionId": "api_tmdb",
      "properties": {
        "headers": {
          "x-my-header": "hello"
        },
        "urlPath": "/movies/id/{_state.movieId}"
      }
    },
    {
      "name": "graphql_post",
      "type": "https_post",
      "connectionId": "api_tmdb",
      "properties": {
        "urlPath": "/graphql",
        "headers": {
          "ContentType": "Application/Json"
        },
        "body": {
          "query": "{ user( id: $user){ id name } }",
          "variables": {
            "id": { "_state": "userId" }
          }
        }
      }
    }
  ]
}
```
<!--YAML-->
```yaml
requests:
  - 
    name: save
      type: mongodb_insert
      connectionId: foo_sales
      properties:
        pipeline:
        - "$addFields":
            capture_date:
              _date: now
            agent:
              _user: id
            agent_name:
              _user: fullName
            manager:
              _user: manager
  - 
    name: agg_movies_by_year
    type: mongodb_aggregation
    connectionId: mongodb_mflix_movies
    properties:
      pipeline:
      - "$group":
          _id:
            "$dateFromParts":
              year:
                "$year": "$released"
          count:
            "$sum": 1
          avg_imdb:
            "$avg": "$imdb.rating"
      - "$addFields":
          year: "$id"
      - "$sort":
          year: 1
  - 
  name: restApiGet
    type: https_get
    connectionId: api_tmdb
    properties:
      headers:
        x-my-header: hello
      urlPath: "/movies/id/{_state.movieId}"
  - 
    name: graphql_post
    type: https_post
    connectionId: api_tmdb
    properties:
      urlPath: "/graphql"
      headers:
        ContentType: Application/Json
      body:
        query: "{ user( id: $user){ id name } }"
        variables:
          id:
            _state: userId
```
<!--END_DOCUSAURUS_CODE_TABS-->