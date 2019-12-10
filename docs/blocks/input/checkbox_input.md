---
id: checkbox_input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Checkbox block. Allows a user to select multiple values from a set of options. Values can be any primitive type.
The input to this field is saved as an array in [`state`](concepts/state.md), at the path name of the block.

- Output data types: An array of any primitive type (_String_, _Boolean_, _Number_, [_Date_](date_input.md#date-type)).

> Other selector blocks are [select_input](select_input.md), [multiple_select_input](multiple_select_input.md), [radio_input](radio_input.md) and [radio_button_input](radio_button_input.md)

## Required fields

The value defined for the `name` of the block should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "checkbox_input"
- `properties.options`

## Default component settings

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

## Component properties

- `disabled` : _Boolean_ - Default: `false` - Disables the checkbox if `true`.
- `defaultValue`: _[ Primitive ]_ - An array of default values for the checkbox to be set on page load. Can be an array of any primitive type (_String_, _Boolean_, _Number_, _Date_).
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
  "name": "my_checkbox",
  "type": "checkbox_input",
  "properties": {
    "defaultValue": ["A", "C"],
    "options": ["A", "B", "C", "D"],
  },
}
```

<!--YAML-->

```yaml
name: my_checkbox
type: checkbox_input
properties:
  defaultValue:
    - A
    - C
  options:
    - A
    - B
    - C
    - D
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Object `options` example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "my_checkbox",
  "type": "checkbox_input",
  "properties": {
    "defaultValue": ["A", "C"],
    "options": [
      {
        "label": "A - Label",
        "value": "A",
      },
      {
        "label": "B - Label",
        "value": "B",
        "disabled": true,
      },
      {
        "label": "C - Label",
        "value": "C",
      },
      {
        "label": "D - Label",
        "value": "D",
      },
    ],
  },
}
```

<!--YAML-->

```yaml
name: my_checkbox
type: checkbox_input
properties:
  defaultValue:
    - A
    - C
  options:
    - label: A - Label
      value: A
    - label: B - Label
      value: B
      disabled: true
    - label: C - Label
      value: C
    - label: D - Label
      value: D
```

<!--END_DOCUSAURUS_CODE_TABS-->
