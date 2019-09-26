---
id: page
title: Page
sidebar_label: Page
---


<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "id": "lowdefy_id",
  "properties": {
    "title": "string",
    "description": "string",
    "margin": "pixel_size"
  },
  "box": {
    // box object
  },
  "blocks": [
    // Array of blocks
  ],
  "requests": [
    // Array of requests
  ]
}
```
<!--YAML-->
```yaml
id: lowdefy_id
properties: 
  title: string
  description: string
box: # box object
blocks:
  - # Array of blocks
requests:
  - # Array of requests
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### Page Settings

- `id`: _[lowdefy_id](lowdefy-file.md#_lowdefy_id_)_ - **REQUIRED** - Unique ID for the page.
- `properties`: _object_
  - `title`: _string_ - A title for the page. Default is the page id.
  - `description`: _string_ - A description of the page. Empty if not specified
  - `margin`: 
- `box`: _object_
  - `width`:
  - `height`:
- `blocks`: _[ blocks ]_ - An Array of blocks to be rendered on the page. They will be placed using [block placement rules](pages.md#block-placement-rules)
- `requests`: _[ requests ]_ - An Array of requests.