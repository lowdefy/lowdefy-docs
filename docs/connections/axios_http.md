---
id: axios_http
title: Axios HTTP
sidebar_label: Axios HTTP
---

Connection for HTTP and HTTPS requests using the [axios](https://github.com/axios/axios) library. All properties, except properties that require a function as input are mapped directly to the axios library, so examples and their own documentation are relevant. The same properties can be set on both the connection and on axios requests and mutations. The properties will be merged, with the request properties overwriting connection properties. This allows properties like authentication headers and the baseUrl to be set on the connection, with request specific properties like the request.

>Secrets like authentication headers and API keys should not be committed to the project repository, they should be stored using the [`_secret`](operators/secret.md) operator. Alternatively, the entire properties object for the connection can be stored using the `_secret` operator.

## Required fields

The connection `id` should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `id`
- `type`: "axios_http"

## Default component settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "id": "required",
  "type": "axios_http",
  "properties": {
  }
}
```

<!--YAML-->

```yaml
id: required
type: mongodb_collection,
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Connection properties

- `url`: _String_ - The server URL that will be used for the request.
- `method`: _Enum_ - Default: `'get'` - The request method to be used when making the request. Options are:
  - `'get'`
  - `'delete'`
  - `'head'`
  - `'options'`
  - `'post'`
  - `'put'`
  - `'patch'`
- `baseURL`: _String_ - `baseURL` will be prepended to `url` unless `url` is absolute. It can be convenient to set `baseURL` for an instance of axios to pass relative URLs to methods of that instance.
- `headers`: _Object_ - An object with custom headers to be sent sent with the request. The object keys should be header names, and the values should be the string header values.
- `params`: _Object_ - An object with URL parameters to be sent with the request.
- `data`: _String_ **|** _Object_ - The data to be sent as the request body. Only applicable for request methods `'put'`, `'post'`, and `'patch'`. Can be an object or a string in the format `'Country=Brasil&City=Belo Horizonte'`.
- `timeout`: _Integer_ - Default: `0` (no timeout) - The number of milliseconds before the request times out. If the request takes longer than `timeout`, the request will be aborted. Set to `0` for no timeout. 
- `auth`: _Object_ - Indicates that HTTP Basic auth should be used, and supplies credentials. This will set an `Authorization` header, overwriting any existing `Authorization` custom headers you have set using `headers`. Only HTTP Basic auth is configurable through this parameter, for Bearer tokens and such, use `Authorization` custom headers instead. The `auth` object should have the following fields:
 - `username`: _String_
 - `password`: _String_

- `responseType`: _Enum_ - Default: `'json'` - The type of data that the server will respond with. Options are:
  - `'document'`
  - `'json'`
  - `'text'`
- `responseEncoding`: _String_ - Default: `'utf8'` - Indicates encoding to use for decoding responses.
- `maxContentLength`: _Integer_ - Defines the max size of the http response content allowed in bytes.
- `maxRedirects`: _Integer_ - Defines the maximum number of redirects to follow. If set to 0, no redirects will be followed.
- `proxy`: _Object_ - Defines the hostname and port of the proxy server. The `proxy` object should have the following fields:
  - `host`: _String_ - Host IP address (eg. `'127.0.0.1'`).
  - `port`: _Integer_ - Port number.
  - `auth`: _Object_ - Object with username and password.


## Allowed Requests

- [`axios_http`](requests/axios_http.md): Axios http request.


## Allowed Mutations

- [`axios_http`](requests/axios_http.md): Axios http mutation.

### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "connections": [
    {
      "id": "my_api_connection",
      "type": "axios_http",
      "properties": {
        "baseURL": "https://api.myapp.com",
        "headers": {
          "X-Api-Key": {
            "_secret": "my_api_key"
          }
        },
        "timeout": 5000,
        "responseType": "text",
        "responseEncoding": "utf8",
        "maxContentLength": 5000
      }
    },
    {
      "id": "my_proxy_connection",
      "type": "axios_http",
      "properties": {
        "proxy": {
          "host": "127.0.0.1",
          "port": 9000,
          "auth": {
            "username": "my_username",
            "password": "not_password123"
          }
        }
      }
    },
    {
      "id": "my_basic_auth_connection",
      "type": "axios_http",
      "properties": {
        "url": "https://www.myapp.com/api",
        "auth": {
          "username": "myusername",
          "password": {
            "_secret": "my_password"
          }
        }
      }
    }
  ]
}
```

<!--YAML-->

```yaml
connections:
  - id: my_api_connection
    type: axios_http
    properties:
      baseURL: https://api.myapp.com
      headers:
        X-Api-Key:
          _secret: my_api_key
      timeout: 5000
      responseType: text
      responseEncoding: utf8
      maxContentLength: 5000
  - id: my_proxy_connection
    type: axios_http
    properties:
      proxy:
        host: '127.0.0.1'
        port: 9000
        auth:
          username: my_username
          password: not_password123
  - id: my_basic_auth_connection
    type: axios_http
    properties:
      url: https://www.myapp.com/api
      auth:
        username: myusername
        password:
          _secret:
            my_password
```

<!--END_DOCUSAURUS_CODE_TABS-->
