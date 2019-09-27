---
id: week_input
title: Week Input
sidebar_label: Week Input
---

Date picker form input field. Allows a user to select a specific week from a calender form.
The input to this field is saved as a [_Date_](date_input.md#date-type) type in [`state`](concepts/state.md), at the path name of the field.

- Output data types: _Date_

>Other date type blocks are [date_input](date_input.md), [date_time_input](date_time_input.md), [month_input](month_input.md) and [date_range_input](date_range_input.md).

## Required fields

The value defined for the `name` of the component should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "week_input"

## Default component settings
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "placeholder": "Select Week",
    "showToday": true,
    "size": "default",
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    disabled: false
    placeholder: Select Week
    showToday: true
    size: default
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled` : _Boolean_ - Default: `false` - Disables the week picker if `true`.
- `placeholder` : _String_ - Default: `Select Week` - Placeholder inside the date picker to show message before user picks a month.
- `defaultValue` : _Date_ **|** _String_ - Default value for the date picker to be set on page load. Can be a _Date_ type, as defined [here](date_input.md#date-type) or a JavaScript parsable date string - e.g. "2015/10/21" or "21-10-2015" ([moment.js](https://momentjs.com/docs/#/parsing/string/) has a useful guide for which date strings are parsable).
- `showToday` - _Boolean_ - Default: `true` - Shows a button to easily select the current week if `true`.
- `size` : _Enum_ - Default: `default` - Size of the date picker.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_

### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_week_picker",
  "type": "week_input",
  "visible": true,
  "properties": {
    "placeholder": "Placeholder text using nunjucks template {{ data_field }}",
    "defaultValue": "1993-02-01",
    "size": "small"
    }
  }
}
```
<!--YAML-->
```yaml
  name: my_week_picker
  type: week_input
  visible: true
  properties:
    placeholder: "Placeholder text using nunjucks template {{ data_field }}"
    defaultValue: 1993-02-01
    size: small
```
<!--END_DOCUSAURUS_CODE_TABS-->