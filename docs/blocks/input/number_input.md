---
id: number_input
title: Number Input
sidebar_label: Number Input
---

Number input block. The input to this field is saved in [`state`](concepts/state.md), at the path name of the block.

- Output data types: _Number_

## Required fields

The value defined for the `name` of the block should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "number_input"

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

- `disabled` : _Boolean_ - Default: `false` - Disables the number input block if `true`.
- `placeholder` : _String_ - Placeholder inside number input block to show message before user types input.
- `defaultValue` : _Number_ - Default value for number input block to be set on page load.
- `minimum` : _Number_ - Minimum value user is allowed to input.
- `maximum` : _Number_ - Maximum value user is allowed to input.
- `step` : _Number_ - Default: `1` - Step size by which the current value is increased or decreased.
- `precision` : _Integer_ - Number of decimals to round to. If `precision` is not defined but a decimal `step` size is, the precision will adapt to those decimal spaces.
- `prefix` : _String_ - Text or symbol to prefix the value in the input block, eg. '\$' to show dollar values.
- `suffix` : _String_ - Text or symbol to suffix the value in the input block, eg. '%' to show percentage values.
- `size` : _Enum_ - Default: `default` - Size of the input block.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_
- `allowClear` : _Boolean_ - Default: `true` - Allows the user to clear their number input if `true`.

### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "my_number_input",
  "type": "number_input",
  "properties": {
    "placeholder": "Please enter a percentage in intervals of 5",
    "defaultValue": 0,
    "minimum": 0,
    "maximum": 100,
    "step": 5,
    "precision": 0,
    "suffix": "%",
    "size": "large",
    "allowClear": false,
  },
}
```

<!--YAML-->

```yaml
name: my_number_input
type: number_input
properties:
  placeholder: Please enter a percentage in intervals of 5
  defaultValue: 0
  minimum: 0
  maximum: 100
  step: 5
  precision: 0
  suffix: '%'
  size: large
  allowClear: false
```

<!--END_DOCUSAURUS_CODE_TABS-->
