---
id: multiple_select_input
title: Multiple Select Input
sidebar_label: Multiple Select Input
---

Drop down selector input block. Allows a user to select multiple values from a set of options. Values can be any primitive type.
The input to this field is saved as an array in [`state`](concepts/state.md), at the path name of the block.

- Output data types: An array of any primitive type (_String_, _Boolean_, _Number_, [_Date_](date_input.md#date-type)).

> Other selector blocks are [checkbox_input](checkbox_input.md), [multiple_select_input](multiple_select_input.md), [radio_input](radio_input.md) and [radio_button_input](radio_button_input.md)

## Required fields

The value defined for the `name` of the block should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "multiple_select_input"
- `properties.options`

## Default component settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "size": "default",
    "placeholder": "Select item(s)",
    "showArrow": true,
    "showSearch": true,
    "selectedIcon": "check",
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
  placeholder: Select item(s)
  showArrow: true
  showSearch: true
  selectedIcon: check
  suffixIcon: down
  allowClear: false
  clearIcon: close-circle
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled` : _Boolean_ - Default: `false` - Disables the multiple selector if `true`.
- `placeholder` : _String_ - Default: `Select item` - Placeholder text inside multiple selector to show message before user types input.
- `defaultValue`: _[ Primitive ]_ - An array of default values for multiple selector to be set on page load. Can be an array of any primitive type (_String_, _Boolean_, _Number_, _Date_).
- `size` : _Enum_ - Default: `default` - Size of the multiple selector.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_
- `options`: _[ Primitive ]_ **|** _[ Object ]_ - **REQUIRED** - An array of either primitive types or objects. The `options` are required and has to be defined either as an array of primitive values or an array of objects with value and label fields. In the latter case, only the value fields are compulsary.
  - _Primitive_ - The value will be shown as the label.
  - _Object_
    - `label`: _String_ - If a `label` is not specified, the `value` is shown as the label.
    - `value`: _Primitive_ - **REQUIRED**.
- `showArrow` : _Boolean_ - Default: `true` - Shows the default down arrow at the drop-down position of the selector when `true` and hides it when `false`.
- `showSearch` : _Boolean_ - Default: `true` - Make the selector options searchable.
- `selectedIcon` : _String_ - Default: `check` - Ant Icon showing when a selection is made in the drop-down list, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `suffixIcon` : _String_ - Default: `down` - Ant Icon at the drop-down position of the selector, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `allowClear` : _Boolean_ - Default: `false` - Allow the user to clear the selected value, sets the value to `null`.
- `clearIcon` : _String_ - Default: `close-circle` - Ant Icon at far right position of the selector, when `allowClear` is set to `true`, should be a valid [Ant icon reference](https://ant.design/components/icon/).

### Example

#### Primitive type `options` example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "my_multiple_selector",
  "type": "multiple_select_input",
  "visible": true,
  "properties": {
    "placeholder": "Please select one or more values",
    "defaultValue": ["A", "C"],
    "suffixIcon": "form",
    "size": "large",
    "allowClear": true,
    "showSearch": false,
    "options": ["A", "B", "C", "D"],
  },
}
```

<!--YAML-->

```yaml
name: my_multiple_selector
type: multiple_select_input
visible: true
properties:
  placeholder: Please select one or more values
  defaultValue:
    - A
    - C
  suffixIcon: form
  size: large
  allowClear: true
  showSearch: false
  options:
    - A
    - B
    - C
    - D
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Object `options` example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "my_multiple_selector",
  "type": "multiple_select_input",
  "visible": true,
  "properties": {
    "defaultValue": ["A", "C"],
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
name: my_multiple_selector
type: multiple_select_input
visible: true
properties:
  defaultValue:
    - A
    - C
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
    - label: D - Label
      value: D
```

<!--END_DOCUSAURUS_CODE_TABS-->
