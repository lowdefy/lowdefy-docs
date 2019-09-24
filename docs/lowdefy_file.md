---
id: lowdefy_file
title: Lowdefy Configuration File
sidebar_label: Lowdefy Configuration File
---

The configuration of a Lowdefy application is written in a JSON or YAML file called `lowdefy.json/yaml`, in the root directory of the git repository. YAML files will be parsed using (node yaml module), and then converted into JSON.



property path reference

## File structure
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```JSON

// lowdefy.json

{
  "config": {
    // config object
  },
  "groups": [
    // list of group objects
  ],
  "pages": [
    // list of page objects
  ]
}
```
<!--YAML-->
```YAML
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

## Default Values

Only the required fields need be specified for lowdefy objects. If a field is not specified, a default value will be used. This default value can be:
 - A specific value. (If the password minimum length is not specified, a default of 8 is used)
 - A reference to another field. (If a title field is not specified, the name/id of that object will be used)
 - A empty array. (If the components array is not specified, an empty array is used, and no components are rendered)

## References

Other JSON or YAML files in the project repository can be referenced in the lowdefy.json file, or in any of these files. This allows the configuration to be split into a logical structure, and allows the reuse of configurations/components. A reference is written using the keyword `$ref`, followed by a directory path to the file required. When a file is referenced, the contents of that file will be written into the file where the reference is.

### Example

Given a directory structure like:

```
pages/
  - page_1.yaml
  - page_2.yaml
groups.yaml
lowdefy.yaml
page_index.json
```

With files

```yaml
# lowdefy.yaml
config:
  theme:
    titles:
      app: My app

groups: $ref/groups.yaml

pages: $ref/page_index.json
```

```yaml
# groups.yaml
- id: group_1
  title: Group 1
  description: Description for Group 1
  pages:
    - page_1
- id: group_2
  title: Group 2
  description: Description for Group 2
  pages:
    - page_2
```

```yaml
# page_index.json
[
  "$ref/pages/page_1.yaml",
  "$ref/pages/page_2.yaml"
]

```

```yaml
# page_1.yaml
id: page_1
title: Page 1
components:
  -  # list of page_1 components
```

```yaml
# page_2.yaml
id: page_2
title: Page 2
components:
  -  # list of page_2 components
```

The resulting configuration will be

```json
{
  "config": {
    "theme": {
      "titles": {
        "app": "My app"
      }
    }
  },
  "groups": [
    {
      "id": "group_1",
      "title": "Group 1",
      "description": "Description for Group 1",
      "pages": [
        "page_1"
      ]
    },
    {
      "id": "group_2",
      "title": "Group 2",
      "description": "Description for Group 2",
      "pages": [
        "page_2"
      ]
    }
  ],
  "pages": [
    {
      "id": "page_1",
      "title": "Page 1",
      "components": [
        // list of page_1 components
      ]
    },
    {
      "id": "page_2",
      "title": "Page 2",
      "components": [
        // list of page_2 components
      ]
    }
  ]      
}      
```

## Paths

Any object in the Lowdefy.json settings can be specified by writing it's object path description.

## Lowdefy Property Types

In this documentation Lowdefy refers to some special property types which must be used when writing config.

Most Lowdefy objects require either a `name` or `id`, which is used to identify this object. The object requires an id if that id should be unique across the application. Names can be duplicated. Names and ids should comply with the following restrictions:

- It should be a string.
- It may only consist of the characters `a-z, A-Z, 0-9, and _`.
- It may not contain whitespace.
- It may not start with a number.
- It must contain at least one non-numeric character.
- It may not start with `"lowdefy"` (Not case sensitive).

### _lowdefy_name_

### _lowdefy_id_

### _nunjucks_template_

### _nunjucks_condition_




