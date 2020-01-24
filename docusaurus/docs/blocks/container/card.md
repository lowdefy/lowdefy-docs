---
id: card
title: Card
sidebar_label: Card
---

Similar to a column block, a card block is a single rectangular container which renders child blocks into a new grid with card border and styling. Use a card block to group a set of blocks into a single column in the rendered grid. See [Antd Design Card](https://ant.design/components/card/) for more details.

## Required fields

- `type`: "card"
- `name`: _String_ - A valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).
- `blocks`: _Array_ - A list of sub-blocks rendered as the card's content.

## Default block settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "bordered": true,
    "hoverable": false,
    "inner": false,
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    bordered: true
    hoverable: false
    inner: false
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Block label

- `title` : _String_ - Default: `null` - Card title.

## Block properties

- `cover` : _String_ - Default: `null` - Card cover image source url.
- `bordered` : _Boolean_ - Default: `true` - Toggles rendering of the border around the card.
- `hoverable` : _Boolean_ - Default: `false` - Lift up when hovering card.
- `inner` : _Boolean_ - Default: `false` - Inner card style type.
- `size` : _Enum_ - Default: `"default"` - Size of the card block.
  - `"default"` - _String_
  - `"small"` - _String_

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_card",
  "type": "card",
  "visible": true,
  "properties": {
    "bordered": false
  },
  "blocks": [
    ... list of card content blocks
  ]
}
```
<!--YAML-->
```yaml
  name: my_card
  type: card
  visible: true
  properties:
    bordered: false
  blocks:
    - ... list of card content blocks
```
<!--END_DOCUSAURUS_CODE_TABS-->