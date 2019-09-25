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
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
// lowdefy.json
{
  "config": {
    "theme": {
      "pages": {
        "home": {
          "title": "My app"
        }
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
# lowdefy.yaml

config:
  theme:
    pages:
      home:
        title: My app

groups:
  _ref: groups.yaml

pages: _ref: page_index.json
```
<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
// groups.json
{
  "id": "group_1",
  "properties": {
    "title": "Group 1"
  },
  "pageIds": ["page_1"]
}
```
<!--YAML-->
```yaml
// groups.yaml
- 
  id: group_1
  properties:
    title: Group 1
  pages:
    - page_1
```
<!--END_DOCUSAURUS_CODE_TABS-->

`page_index.json/yaml`
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
// page_index.json
[
  { "_ref": "pages/page_1.json" },
]
```
<!--YAML-->
```yaml
# page_index.yaml
-
  _ref: pages/page_1.yaml
-
  _ref: pages/page_2.yaml
```
<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
// page_1.json
{
  "id": "page_1",
  "properties": {
    "title": "Page 1"
  },
  "blocks": [
    // list of page_1 blocks
  ]
}
```
<!--YAML-->
```yaml
# page_1.yaml

id: page_1
properties:
  title: Page 1
blocks:
  -  # list of page_1 blocks
```
<!--END_DOCUSAURUS_CODE_TABS-->



The resulting configuration will be

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "config": {
    "theme": {
      "pages": {
        "home": {
          "title": "My app"
        }
      }
    }
  },
  "groups": [
    {
      "id": "group_1",
      "properties": {
        "title": "Group 1"
      },
      "pageIds": ["page_1"]
    }
  ],
  "pages": [
    {
      "id": "page_1",
      "properties": {
        "title": "Page 1"
      },
      "blocks": [
        // list of page_1 blocks
      ]
    }
  ]      
}      
```
<!--YAML-->
```yaml

```
<!--END_DOCUSAURUS_CODE_TABS-->
