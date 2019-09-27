---
id: switch_input
title: Switch Input
sidebar_label: Switch Input
---

On/off switch form input field. The input to this field is saved in [`state`](concepts/state.md), at the path name of the field.
- Output data types: _Boolean_

## Required fields

The value defined for the `name` of the component should be a valid [lowdefy_name](concepts/lowdefy-file.md#names-and-ids)).

- `name`
- `type`: "switch_input"

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

- `disabled`: _Boolean_ - Default: `false` - Disables the switch component if `true`.
- `defaultValue` : _Boolean_ - Default value for switch to be set on page load.
- `checkedIcon` : _String_ - Ant Icon to show when the switch is checked (`true`), should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `uncheckedIcon` : _String_ - Ant Icon to show when the switch is unchecked (`false`), should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `size` : _Enum_ - Default: `default` - Size of the switch component.
  - `default` - _String_
  - `small` - _String_

### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_switch",
  "type": "switch_input",
  "visible": true,
  "properties": {
    "defaultValue": true,
    "checkedIcon": "check",
    "uncheckedIcon": "close",
    "size": "small"
  }
}
```
<!--YAML-->
```yaml
  name: my_switch
  type: switch_input
  visible: true
  properties:
    defaultValue: true
    checkedIcon: check
    uncheckedIcon: close
    size: small
```
<!--END_DOCUSAURUS_CODE_TABS-->