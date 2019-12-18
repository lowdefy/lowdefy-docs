---
id: form
title: Form
sidebar_label: Form
---

A form block is a container which renders child blocks into a new grid and provides the ability to assign form label settings to the set of child blocks. Note that a form block is not required to create use input components as any input component will propagate to [`state`](concepts/state.md) regardless of the parent block.

## Required fields

- `type`: "form"
- `name`: _String_ - A valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).
- `blocks`: _Array_ - A list of sub-blocks rendered as the form's content.

## Default block settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "hideRequiredMark": false,
    "labelAlign": "right",
    "layout": "horizontal",
    "colon": true
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    hideRequiredMark: false
    labelAlign: "right"
    layout: "horizontal"
    colon: true
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Block properties

- `hideRequiredMark` : _Boolean_ - Default: `false` - Hide the required mark for all input blocks with labels in child blocks.
- `labelCol` : _Object_ - Define label column settings to apply to all input items with labels in child blocks.
- `wrapperCol` : _Object_ - Define block wrapper column settings to apply to all input in child blocks.
- `labelAlign` : _Enum_ - Default: `"right"` - Text align of label for all input items with labels in child blocks.
  - `"right"` - _String_
  - `"left"` - _String_
- `layout` : _Enum_ - Default: `"horizontal"` - Define form layout flow direction.
  - `"horizontal"` - _String_
  - `"vertical"` - _String_
  - `"inline"` - _String_

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_form",
  "type": "form",
  "visible": true,
  "properties": {
    "layout": "inline"
  },
  "blocks": [
    ... list of form child blocks
  ]
}
```
<!--YAML-->
```yaml
  name: my_form
  type: form
  visible: true
  properties:
    layout: inline
  blocks:
    - ... list of form child blocks
```
<!--END_DOCUSAURUS_CODE_TABS-->