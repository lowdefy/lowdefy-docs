---
id: group
title: Group
sidebar_label: Group
---
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "id": "lowdefy_id",
  "properties": {
    "title": "string",
    "description": "string",
  },
  "groups": [
    // Array of sub-group objects
  ],
  "pageIds": [
    // Array of page_ids
  ]
}
```
<!--YAML-->
```yaml
id: lowdefy_id
properties: 
  title: string
  description: string
groups:
  - # Array of sub-group objects
pageIds:
  - # Array of page ids
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### Group Settings

- `id`: _[lowdefy_id](lowdefy-file#names-and-ids)_ - **REQUIRED** - Unique ID for the group.
- `properties`: _object_
  - `title`: _string_ - A title for the group. Default is the group id
  - `description`: _string_ - A description of the group and access it provides. Empty if not specified
- `groups`: _[ group ]_ - An Array of group objects defining sub-groups of the group. Users will gain the access of all sub-groups of the group. Empty if not specified
- `pageIds`: _[ string ]_ - An Array of page ids that the group provides access to. Empty if not specified