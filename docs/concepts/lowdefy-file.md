---
id: lowdefy-file
title: Lowdefy Configuration File
sidebar_label: Lowdefy Configuration File
---

The configuration of a Lowdefy application is written in a JSON or YAML file called `lowdefy.json/yaml`, in the root directory of the project repository. YAML files will be parsed using (node yaml module), and then converted into JSON.

## File structure
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
// lowdefy.json
{
  "config": {
    // config object
  },
  "groups": [
    // config object
  ],
  "pages": [
    // config object
  ]
}
```
<!--YAML-->
```yaml
# lowdefy.yaml
config:
  # config object
groups:
  -
    # list of group objects
pages:
  -
    # list of page objects
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Lowdefy Objects

Since the the configuration of a Lowdefy application consists of different objects, like [`pages`](concepts/pages.md), [`groups`](concepts/groups.md), [`blocks`](concepts/blocks.md), [`connections`](concepts/connections.md#connections) and [`requests`](concepts/connections.md#requests). 

### Names and IDs

Most Lowdefy objects require either a `name` or `id`, which is used to identify this object. The object requires an id if that id should be unique across the app. Names can be duplicated. Names and ids should comply with the following restrictions:

- It should be a string.
- It may only consist of the characters `a-z, A-Z, 0-9, and _`.
- It may not contain whitespace.
- It may not start with a number.
- It must contain at least one non-numeric character.
- It may not start with `"lowdefy"` (Not case sensitive).

### Object Types

Most Lowdefy objects require a type. Objects like `groups` do not require a type since they can only have one type.

### Default Values

Only the required fields need be specified for Lowdefy objects. If a field is not specified, a default value will be used. This default value can be:
 - A specific value. (If the password minimum length is not specified, a default of 8 is used)
 - A reference to another field. (If a title field is not specified, the name/id of that object will be used)
 - A empty array. (If the components array is not specified, an empty array is used, and no components are rendered)

### Path to a Object

Any Lowdefy object can be referenced to by its path in the `lowdefy.json` file. This is often used to report where an error has occurred. 





