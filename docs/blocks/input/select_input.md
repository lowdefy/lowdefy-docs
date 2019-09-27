---
id: select_input
title: Select Input
sidebar_label: Select Input
---

Drop down selector form input field. Allows a user to select a single value from a set of options. Values can be any primitive type. 
The input to this field is saved as an array in [`state`](concepts/state.md), at the path name of the field.
- Output data types: An array of any primitive type (_String_, _Boolean_, _Number_, _Date_).

Select block that changes the path name in [`_state`](concepts/lowdefy-file.md) to the value selected by the user.

>Other selector blocks are [checkbox_input](checkbox_input.md), [multiple_select_input](multiple_select_input.md), [radio_input](radio_input.md) and [radio_button_input](radio_button_input.md)

- Output data types: Any primitive type (_String_, _Boolean_, _Number_, _Date_).

## Required fields

The value defined for the `name` of the component should be a valid [lowdefy_name](concepts/lowdefy-file.md#names-and-ids)).

- `name`
- `type`: "select_input"
- `properties.options`

## Default component settings
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
```json
{
  "visible": true,
  "properties": {
    "disabled": false,
    "size": "default",
    "placeholder": "Select item",
    "allowClear": false,
    "showSearch": true
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    disabled: false
    size: default
    placeholder: Select item
    allowClear: false
    showSearch: true
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled`: _Boolean_ - Default: `false` - Disables the selector if `true`.
- `placeholder` : [_NunjucksTemplate_](concepts/lowdefy-file.md#_nunjucks_template_) - Default: `Select item` - Placeholder text inside selector to show message before user types input.
- `defaultValue`: _Primitive_ - Default value for selector to be set on page load. Can be of any primitive type (_String_, _Boolean_, _Number_, _Date_).
- `suffixIcon` :  _String_ - Ant Icon at the drop-down position of the selector, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `size` : _Enum_ - Default: `default` - Size of the selector.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_
- `allowClear` : _Boolean_ - Default: `false` - Allow the user to clear the selected value, sets the value to `null`. ###TEST
- `showSearch` :  _Boolean_ - Default: `true` - Make the selector options searchable.
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
  "name": "my_selector",
  "type": "select_input",
  "visible": true,
  "properties": {
    "placeholder": "Placeholder text using nunjucks template {{ data_field }}",
    "defaultValue": "A",
    "suffixIcon": "down",
    "size": "large",
    "allowClear": true,
    "showSearch": false,
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
  name: my_selector
  type: select_input
  visible: true
  properties:
    placeholder: "Placeholder text using nunjucks template {{ data_field }}"
    defaultValue: A
    prefixIcon: arrow-right
    suffixIcon: form
    size: large
    allowClear: true
    showSearch: false
    options:
      - A
      - B
      - C
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Object `options` example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_selector",
  "type": "select_input",
  "visible": true,
  "properties": {
    "defaultValue": "A",
    "prefixIcon": "arrow-right",
    "suffixIcon": "form",
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
  name: my_selector
  type: select_input
  visible: true
  properties:
    defaultValue: A
    prefixIcon: arrow-right
    suffixIcon: form
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
