---
id: select_input
title: Select Input
sidebar_label: Select Input
---

Drop down selector input block. Allows a user to select a single value from a set of options. Values can be any primitive type.
The input to this field is saved as a primitive type in [`state`](concepts/state.md), at the path name of the block.

- Output data types: Any primitive type (_String_, _Boolean_, _Number_, [_Date_](date_input.md#date-type)).

> Other selector blocks are [checkbox_input](checkbox_input.md), [multiple_select_input](multiple_select_input.md), [radio_input](radio_input.md) and [radio_button_input](radio_button_input.md)

## Required fields

The value defined for the `name` of the block should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "select_input"
- `properties.options`

## Default block settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "size": "default",
    "placeholder": "Select item",
    "showArrow": true,
    "showSearch": true,
    "suffixIcon": "down",
    "allowClear": false,
    "clearIcon": "close-cirlce"
  },
}
```

<!--YAML-->

```yaml
visible: true
properties:
  disabled: false
  size: default
  placeholder: Select item
  showArrow: true
  showSearch: true
  suffixIcon: down
  allowClear: false
  clearIcon: close-circle
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Block properties

- `disabled` : _Boolean_ - Default: `false` - Disables the selector if `true`.
- `placeholder` : _String_ - Default: `Select item` - Placeholder text inside selector to show message before user types input.
- `defaultValue`: _Primitive_ - Default value for selector to be set on page load. Can be of any primitive type (_String_, _Boolean_, _Number_, _Date_).
- `size` : _Enum_ - Default: `default` - Size of the selector.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_
- `options`: _[ Primitive ]_ **|** _[ Object ]_ - **REQUIRED** - An array of either primitive types or objects. The `options` are required and has to be defined either as an array of primitive values or an array of objects with value and label fields. In the latter case, only the value fields are compulsary.
  - _Primitive_ - The value will be shown as the label.
  - _Object_
    - `label`: _String_ - If a `label` is not specified, the `value` is shown as the label.
    - `value`: _Primitive_ - **REQUIRED**.
    - `disabled`: _Boolean_ - Default: `false` - Disables the option if `true`.
- `showArrow` : _Boolean_ - Default: `true` - Shows the default down arrow at the drop-down position of the selector when `true` and hides it when `false`.
- `showSearch` : _Boolean_ - Default: `true` - Make the selector options searchable.
- `suffixIcon` : _String_ - Default: `down` - Ant Icon at the drop-down position of the selector, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `allowClear` : _Boolean_ - Default: `false` - Allow the user to clear the selected value, sets the value to `null`.
- `clearIcon` : _String_ - Default: `close-circle` - Ant Icon at far right position of the selector, when `allowClear` is set to `true`, should be a valid [Ant icon reference](https://ant.design/components/icon/).

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
    "placeholder": "Please select a value",
    "defaultValue": "A",
    "suffixIcon": "form",
    "size": "large",
    "allowClear": true,
    "showSearch": false,
    "options": ["A", "B", "C"],
  },
}
```

<!--YAML-->

```yaml
name: my_selector
type: select_input
visible: true
properties:
  placeholder: Please select a value
  defaultValue: A
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
name: my_selector
type: select_input
visible: true
properties:
  defaultValue: A
  prefixIcon: arrow-right
  suffixIcon: form
  size: large
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
