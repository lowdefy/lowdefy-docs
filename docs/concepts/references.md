---
id: references
title: References
sidebar_label: References
---

Other JSON or YAML files in the project repository can be referenced in the `lowdefy.json` file, or in any of the referenced files. This allows the configuration to be split into a logical structure, and allows the reuse of configurations/block. A reference is written using an object with a key `_ref`, and a value which is a directory path to the file required. When a file is referenced, the contents of that file will be written into the file where the reference was made.

### Example

Given a directory structure like:

```text
pages/
  - page_1.yaml
  - page_2.yaml
groups.yaml
lowdefy.yaml
page_index.json
```

With files

`lowdefy.json/yaml`
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "config": {
    "theme": {
      "titles": {
        "app": "My app"
      }
    }
  },
  "groups": [
    { "_ref": "groups.json" }
  ],
  "pages": [
    { "_ref": "page_index.json" }
  ]
}
```
<!--YAML-->
```yaml
config:
  theme:
    titles:
      app: My app

groups:
  _ref: groups.yaml

pages:
  _ref: page_index.json
```
<!--END_DOCUSAURUS_CODE_TABS-->

`groups.json/yaml`
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "id": "group_1",
  "properties": {
    "title": "Group 1"
  },
  "pageIds": ["page_1"]
},
{
  "id": "group_2",
  "properties": {
    "title": "Group 2"
  },
  "pageIds": ["page_2"]
}
```
<!--YAML-->
```yaml
- 
  id: group_1
  properties:
    title: Group 1
  pages:
    - page_1
- 
  id: group_2
    title: Group 2
  pages:
    - page_2
```
<!--END_DOCUSAURUS_CODE_TABS-->

`page_index.json/yaml`
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
[
  { "_ref": "pages/page_1.json" },
  { "_ref": "pages/page_2.json" },
]
```
<!--YAML-->
```yaml
-
  _ref: pages/page_1.yaml
-
  _ref: pages/page_2.yaml
```
<!--END_DOCUSAURUS_CODE_TABS-->
```yaml
# 
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