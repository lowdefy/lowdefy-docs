---
id: text_input
title: Text Input
sidebar_label: Text Input
---

Text input block. The input to this field is saved in [`state`](concepts/state.md), at the path name of the block.

- Output data types: _String_

## Required fields

The value defined for the `name` of the block should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "text_input"

## Default block settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "size": "default",
  },
}
```

<!--YAML-->

```yaml
visible: true
properties:
  disabled: false
  size: default
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Block properties

- `disabled` : _Boolean_ - Default: `false` - Disables the text input block if `true`.
- `placeholder` : _String_ - Placeholder text inside text input block to show message before user types input.
- `defaultValue` : _String_ - Default value for text input block to be set on page load.
- `prefixIcon` : _String_ - Ant Icon to prefix the input block, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `suffixIcon` : _String_ - Ant Icon to suffix the input block, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `prefix` : _String_ - Prefix text for the input block, priority over prefixIcon.
- `suffix` : _String_ - Suffix text for the input block, priority over suffixIcon.
- `size` : _Enum_ - Default: `default` - Size of the input block.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_
- `rows` : _Integer_ - Number of `rows` in input block, should be greater or equal to 1. Defining rows disables any `prefix`, `prefixIcon`, `suffix` or `suffixIcon` that was defined.
- `autoRows` : _Enum_ - Automatically extend the input block number of rows for longer input lengths, a minimum and maximum number of rows can be specified. Defining `autoRows` disables any `prefix`, `prefixIcon`, `suffix` or `suffixIcon` that was defined.
  - `true` - _Boolean_
  - `false` - _Boolean_
  - _Object_
    - `minRows`: _Integer_ - Minimum number of rows input block can be adjusted to.
    - `maxRows`: _Integer_ - Maximum number of rows the input block can be adjusted to.
- `autoFocus` : _Boolean_ - Autofocus to input block.
- `allowClear` : _Boolean_ - Default: `false` - Allows the user to clear their text input if `true`.

### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "my_text_block",
  "type": "text_input",
  "visible": true,
  "properties": {
    "placeholder": "Please enter text here.",
    "defaultValue": "My default text",
    "prefixIcon": "arrow-right",
    "suffixIcon": "form",
    "size": "small",
    "autoFocus": false,
    "autoRows": {
      "minRows": 2,
      "maxRows": 10,
    },
  },
}
```

<!--YAML-->

```yaml
name: my_text_block
type: text_input
visible: true
properties:
  placeholder: Please enter text here.
  defaultValue: My default text
  prefixIcon: arrow-right
  suffixIcon: form
  size: small
  autoFocus: false
  autoRows:
    minRows: 2
    maxRows: 10
```

<!--END_DOCUSAURUS_CODE_TABS-->
