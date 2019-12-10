---
id: radio_input
title: Radio Input
sidebar_label: Radio Input
---

Radio input block. Allows a user to select a single value from a set of options. Values can be any primitive type.
The input to this field is saved as a primitive type in [`state`](concepts/state.md), at the path name of the block.

- Output data types: Any primitive type (_String_, _Boolean_, _Number_, [_Date_](date_input.md#date-type)).

> Other selector blocks are [checkbox_input](checkbox_input.md), [select_input](select_input.md), [multiple_select_input](multiple_select_input.md) and [radio_button_input](radio_button_input.md)

## Required fields

The value defined for the `name` of the block should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "radio_input"
- `properties.options`

## Default block settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
  },
}
```

<!--YAML-->

```yaml
visible: true
properties:
  disabled: false
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Block properties

- `disabled` : _Boolean_ - Default: `false` - Disables the radio if `true`.
- `defaultValue`: _Primitive_ - Default value for radio to be set on page load. Can be of any primitive type (_String_, _Boolean_, _Number_, _Date_).
- `options`: _[ Primitive ]_ **|** _[ Object ]_ - **REQUIRED** - An array of either primitive types or objects. The `options` are required and has to be defined either as an array of primitive values or an array of objects with value and label fields. In the latter case, only the value fields are compulsary.
  - _Primitive_ - The value will be shown as the label.
  - _Object_
    - `label`: _String_ - If a `label` is not specified, the `value` is shown as the label.
    - `value`: _Primitive_ - **REQUIRED**.
    - `disabled`: _Boolean_ - Default: `false` - Disables the option if `true`.

### Example

#### Primitive type `options` example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "my_radio",
  "type": "radio_input",
  "properties": {
    "defaultValue": "A",
    "options": ["A", "B", "C"],
  },
}
```

<!--YAML-->

```yaml
name: my_radio
type: radio_input
properties:
  defaultValue: A
  options:
    - A
    - B
    - C
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Object `options` example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "my_radio",
  "type": "radio_input",
  "properties": {
    "defaultValue": "A",
    "options": [
      {
        "label": "A - Label",
        "value": "A",
      },
      {
        "label": "B - Label",
        "value": "B",
        "disabled": true
      },
      {
        "label": "C - Label",
        "value": "C",
      },
    ],
  },
}
```

<!--YAML-->

```yaml
name: my_radio
type: radio_input
properties:
  defaultValue: A
  options:
    - label: A - Label
      value: A
    - label: B - Label
      value: B
      disabled: true
    - label: C - Label
      value: C
```

<!--END_DOCUSAURUS_CODE_TABS-->
