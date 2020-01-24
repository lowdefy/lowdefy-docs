---
id: label
title: Label
sidebar_label: Label
---

Input block labels can be applied by adding label settings to the `properties` of any input blocks except for buttons, objects and arrays in order to communicate input descriptions to the user.

Input block labels do not effect the [`state`](concepts/state.md). It is only used to communicate input descriptions to the user.

## Required fields

Input component labels do not have any required settings.

## Default component settings

The default value for the `label` is the [path](concepts/lowdefy-file.md#path-to-a-object) of the component.

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "properties": {
    "colon": true,
    "required": false,
    "label": "lowdefy_path_name"
  }
}
```
<!--YAML-->
```yaml
  properties:
    colon: true
    required: false
    label: lowdefy_path_name
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `label` : _String_ - Default: [`lowdefy_path_name`](concepts/lowdefy-file.md#path-to-a-object) - Label to describe the input component, if no label is specified the lowdefy_path_name is displayed.
- `colon` : _Boolean_ - Default: `true` -  Postfix the label with a colon.
- `extra` : _String_ - Add additional description tag to the label for a user to see when hovering over the label.
- `labelSpan` : _Integer_ - When set will render the label inline with the input component, control the label width by setting a number between 0 and 24.

The listed component properties will suffice to create a standard input block. [Ant Design](https://ant.design/components/form/#Form.Item) has an extensive list of the properties available for more customizable labels.

### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "label": "My Label",
  "colon": false,
  "extra": "This is extra information I want the user to see.",
  "labelSpan": 12
}
```
<!--YAML-->
```yaml
  label: My Label
  colon: false
  extra: This is extra information I want the user to see.
  labelSpan: 12
```
<!--END_DOCUSAURUS_CODE_TABS-->