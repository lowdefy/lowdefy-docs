---
id: date_time_input
title: DateTime Input
sidebar_label: DateTime Input
---

Date picker form input field. Allows a user to select a single date and time from a calender form.
The input to this field is saved as a [_Date_](date_input.md#date-type) type in [`state`](concepts/state.md), at the path name of the field.

- Output data types: _Date_

>Other date type blocks are [date_input](date_input.md), [week_input](week_input.md), [month_input](month_input.md) and [date_range_input](date_range_input.md).

## Required fields

The value defined for the `name` of the component should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "date_time_input"

## Default component settings
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "placeholder": "Select Date & Time",
    "showToday": true,
    "format": "YYYY-MM-DD HH:mm",
    "size": "default",
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    disabled: false
    placeholder: Select Date & Time
    showToday: true
    format: YYYY-MM-DD HH:mm
    size: default
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled` : _Boolean_ - Default: `false` - Disables the date time picker if `true`.
- `placeholder` : _String_ - Default: `Select Date & Time` - Placeholder inside the date picker to show message before user picks a date and time.
- `defaultValue` : _Date_ **|** _String_ - Default value for the date picker to be set on page load. Can be a _Date_ type, as defined [here](date_input.md#date-type) or a JavaScript parsable date string - e.g. "2015/10/21 07:28:00" or "21-10-2015 07:28:00" ([moment.js](https://momentjs.com/docs/#/parsing/string/) has a useful guide for which date strings are parsable).
- `format` : _String_ - Default: `YYYY-MM-DD HH:mm` - Format in which to parse the date value, eg. "DD MMMM YYYY-hh:mm a" will parse a date value of `1999-12-31 23:59:59` as "31 December 1999-12:59 pm". The format has to conform to [moment.js](https://momentjs.com/docs/#/parsing/string-format/) formats.
- `showToday` - _Boolean_ - Default: `true` - Shows a button to easily select the current date if `true`.
- `size` : _Enum_ - Default: `default` - Size of the date picker.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_

### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_date_time_picker",
  "type": "date_time_input",
  "visible": true,
  "properties": {
    "placeholder": "Placeholder text using nunjucks template {{ data_field }}",
    "defaultValue": "1993-02-02 06:00:00",
    "format": "DD-MM-YY HH:mm:ss",
    "size": "large"
    }
  }
}
```
<!--YAML-->
```yaml
  name: my_date_time_picker
  type: date_time_input
  visible: true
  properties:
    placeholder: "Placeholder text using nunjucks template {{ data_field }}"
    defaultValue: 1993-02-02 06:00:00
    format: DD-MM-YY
    size: large
```
<!--END_DOCUSAURUS_CODE_TABS-->