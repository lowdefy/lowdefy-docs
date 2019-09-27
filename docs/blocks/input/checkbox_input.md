---
id: checkbox_input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Check box block that changes the path name in [`_state`](concepts/lowdefy-file.md) to an array of the values selected by the user.

>Other selector blocks are [select_input](select_input.md), [multiple_select_input](multiple_select_input.md), [radio_input](radio_input.md) and [radio_button_input](radio_button_input.md)

- Output data types: An array of any primitive type (_String_, _Boolean_, _Number_, _Date_).

## Required fields

The value defined for the `name` of the component should be a valid [lowdefy_name](concepts/lowdefy-file.md#names-and-ids)).

- `name`
- `type`: "checkbox_input"
- `options`

## Default component settings
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "disabled": false
  }
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

- `disabled`: _Boolean_ - Default: `false` - Disables the checkbox if `true`.
- `defaultValue`:  _[ Primitive ]_ - An array of default values for the checkbox to be set on page load. Can be an array of any primitive type (_String_, _Boolean_, _Number_, _Date_).
- `options`: _[ Primitive ]_ **|** _[ Object ]_ - **REQUIRED** - An array of either primitive types or objects.
  - _Primitive_ - The value will be shown as the label.
  - _Object_
    - `label`: _String_ - If a `label` is not specified, the `value` is shown as the label.
    - `value`: _Primitive_ -  **REQUIRED**.

### Example

#### Primitive type `options` example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_checkbox",
  "type": "checkbox_input",
  "visible": true,
  "properties": {
    "defaultValue": [
      "A",
      "C"
      ],
    "options": [
      "A",
      "B",
      "C",
      "D"
      ]
  }
}
```
<!--YAML-->
```yaml
  name: my_checkbox
  type: checkbox_input
  visible: true
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
  "visible": true,
  "properties": {
    "defaultValue": [
      "A",
      "C"
      ],
    "options": [
      {
        "label": "A - Label",
        "value": "A"
      },
      {
        "label": "B - Label",
        "value": "B"
      },
      {
        "label": "C - Label",
        "value": "C"
      },
      {
        "label": "D - Label",
        "value": "D"
      }
      ]
  }
}
```
<!--YAML-->
```yaml
  name: my_checkbox
  type: checkbox_input
  visible: true
  properties:
    defaultValue:
      - A
      - C
    options:
      -
        label: A - Label
        value: A
      -
        label: B - Label
        value: B
      -
        label: C - Label
        value: C
      -
        label: D - Label
        value: D
```
<!--END_DOCUSAURUS_CODE_TABS-->