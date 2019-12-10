---
id: switch_input
title: Switch Input
sidebar_label: Switch Input
---

On/off switch input block. The input to this field is saved in [`state`](concepts/state.md), at the path name of the block.

- Output data types: _Boolean_

## Required fields

The value defined for the `name` of the block should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

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
    "size": "default",
  },
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

- `disabled` : _Boolean_ - Default: `false` - Disables the switch block if `true`.
- `defaultValue` : _Boolean_ - Default value for switch to be set on page load.
- `checkedIcon` : _String_ - Default: `check` - Ant Icon to show when the switch is checked (`true`), should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `uncheckedIcon` : _String_ - Default: `close` - Ant Icon to show when the switch is unchecked (`false`), should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `disableIcons` : _Boolean_ - Default: `false` - Disables icons for checked and unchecked state when `true`.
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
  "properties": {
    "defaultValue": true,
    "checkedIcon": "check",
    "uncheckedIcon": "close",
    "size": "small",
  },
}
```

<!--YAML-->

```yaml
name: my_switch
type: switch_input
properties:
  defaultValue: true
  checkedIcon: check
  uncheckedIcon: close
  size: small
```

<!--END_DOCUSAURUS_CODE_TABS-->
