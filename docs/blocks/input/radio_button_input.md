---
id: radio_button_input
title: Radio Button Input
sidebar_label: Radio Button Input
---

Radio button block that changes the path name in [`_state`](concepts/lowdefy-file.md) to the value selected by the user. Similar to [radio_input](radio_input.md) except for its appearance, which is in button form instead of radio selector form.

>Other selector blocks are [checkbox_input](checkbox_input.md), [select_input](select_input.md), [multiple_select_input](multiple_select_input.md) and [radio_input](radio_input.md)

- Output data types: Any primitive type (_String_, _Boolean_, _Number_, _Date_).

## Required fields

The value defined for the `name` of the component should be a valid [lowdefy_name](concepts/lowdefy-file.md#_lowdefy_name_).

- `name`
- `type`: "radio_button"
- `options`

## Default component settings
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "buttonStyle": "solid",
    "size": "default"
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    disabled: false
    buttonStyle: solid
    size: default
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled`: _Boolean_ - Default: `false` - Disables the radio button if `true`.
- `defaultValue`: _Primitive_ - Default value for radio button to be set on page load. Can be of any primitive type (_String_, _Boolean_, _Number_, _Date_).
- `buttonStyle`: _Enum_ - Default: `solid` - Style in which the radio buttons will be rendered.
  - `solid` - _String_
  - `outline` - _String_
- `size` : _Enum_ - Default: `default` - Size of the radio buttons.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_
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
  "name": "my_radio_button",
  "type": "radio_button_input",
  "visible": true,
  "properties": {
    "buttonStyle": "outline",
    "size": "small",
    "options": [
      "A",
      "B",
      "C"
      ]
  }
}
```
<!--YAML-->
```yaml
  name: my_radio_button
  type: radio_button_input
  visible: true
  properties:
    buttonStyle: outline
    size: small
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
  "name": "my_radio_button",
  "type": "radio_button",
  "visible": true,
  "properties": {
    "defaultValue": "A",
    "size": "large",
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
      }
      ]
  }
}
```
<!--YAML-->
```yaml
  name: my_radio_button
  type: radio_button
  visible: true
  properties:
    defaultValue: A
    size: large
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
```
<!--END_DOCUSAURUS_CODE_TABS-->