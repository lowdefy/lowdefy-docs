---
id: column
title: Column
sidebar_label: Column
---

A column block is a container which renders child blocks into a new grid without applying any additional styling. Use a column block to group a set of blocks into a single column in the rendered grid which is very useful for group block visibility.

## Required fields

- `type`: "column"
- `name`: _String_ - A valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).
- `blocks`: _Array_ - A list of sub-blocks rendered as the column's content.

## Default block settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
}
```
<!--YAML-->
```yaml
  visible: true
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_column",
  "type": "column",
  "visible": true,
  "blocks": [
    ... list of column child blocks
  ]
}
```
<!--YAML-->
```yaml
  name: my_column
  type: column
  visible: true
  blocks:
    - ... list of column child blocks
```
<!--END_DOCUSAURUS_CODE_TABS-->