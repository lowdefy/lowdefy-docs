---
id: text_input
title: Text Input
sidebar_label: Text Input
---

Input field that takes text inputs from the user and changes the path name in [`_state`](concepts/lowdefy-file.md) to a string value.

- Output data types: _String_

## Required fields

The value defined for the `name` of the component should be a valid [lowdefy_name](concepts/lowdefy-file.md#_lowdefy_name_).

- `name`
- `type`: "text_input"

## Default component settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "size": "default",
    "rows": 1,
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    disabled: false
    size: default
    rows: 1
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled` : _Boolean_ - Default: `false` - Disables the text input box if `true`.
- `placeholder` : [_NunjucksTemplate_](concepts/lowdefy-file.md#_nunjucks_template_) - Placeholder inside text input box to show message before user types input.
- `defaultValue` : _String_ - Default value for text input box to be set on page load.
- `prefixIcon` :  _String_ - Ant Icon to prefix the input box, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `suffixIcon` :  _String_ - Ant Icon to suffix the input box, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `prefix` :  _String_ - Prefix text for the input box, priority over prefixIcon.
- `suffix` :  _String_ - Suffix text for the input box, priority over suffixIcon.
- `size` : _Enum_ - Default: `default` - Size of the input box.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_
- `rows` : _Integer_ - Default: `1` - Number of rows in input box, should be greater or equal to 1.
- `autoFocus` : _Boolean_ - Autofocus to input box.
- `autoRows` : _Enum_ - Automatically extend the input box number of rows for longer input lengths, a minimum and maximum number of rows can be specified.
  - `true` - _Boolean_
  - `false` - _Boolean_
  - _Object_
    - `minRows`: _Integer_ - Minimum number of rows input box can be adjusted to.
    - `maxRows`: _Integer_ - Maximum number of rows the input box can be adjusted to.

### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_text_box",
  "type": "text_input",
  "visible": true,
  "properties": {
    "placeholder": "Placeholder text using nunjucks template {{ data_field }}",
    "defaultValue": "My default text",
    "prefixIcon": "arrow-right",
    "suffixIcon": "form",
    "size": "small",
    "autoFocus": false,
    "autoRows": {
      "minRows": 2,
      "maxRows": 10
    }
  }
}
```
<!--YAML-->
```yaml
  name: my_text_box
  type: text_input
  visible: true
  properties:
    placeholder: "Placeholder text using nunjucks template {{ data_field }}"
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