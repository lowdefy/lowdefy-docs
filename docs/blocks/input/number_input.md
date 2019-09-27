---
id: number_input
title: Number Input
sidebar_label: Number Input
---

Number box form input field. The input to this field is saved in [`state`](concepts/state.md), at the path name of the field.
- Output data types: _Number_

## Required fields

The value defined for the `name` of the component should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids)).

- `name`
- `type`: "number_input"

## Default component settings
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "size": "default"
  }
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

## Component properties

- `disabled` : _Boolean_ - Default: `false` - Disables the number input box if `true`.
- `placeholder` : _String_ - Placeholder inside number input box to show message before user types input.
- `formatter`: _String_ - Format the number input a format in the input box, eg: `"${{value}}"` to show `$5`.
- `defaultValue` : _Number_ - Default value for number input box to be set on page load.
- `minimum` : _Number_ - Minimum value user is allowed to input.
- `maximum` : _Number_ - Maximum value user is allowed to input.
- `size` : _Enum_ - Default: `default` - Size of the input box.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_
- `precision` : _Integer_ - Number of decimals to round to.

### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_number_input",
  "type": "number_input",
  "visible": true,
  "properties": {
    "placeholder": "Placeholder text using nunjucks template {{ data_field }}",
    "formatter": "{{value}} %",
    "defaultValue": 0,
    "minimum": 0,
    "maximum": 100,
    "size": "large",
    "precision": 1
  }
}
```
<!--YAML-->
```yaml
  name: my_number_input
  type: number_input
  visible: true
  properties:
    placeholder: "Placeholder text using nunjucks template {{ data_field }}"
    formatter: "{{value}} %"
    defaultValue: 0
    minimum: 0
    maximum: 100
    size: large
    precision: 1
```
<!--END_DOCUSAURUS_CODE_TABS-->