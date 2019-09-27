---
id: date_input
title: Date Input
sidebar_label: Date Input
---

Date picker form input field. Allows a user to select a single date from a calender form.
The input to this field is saved as a [_Date_](#date-type) type in [`state`](concepts/state.md), at the path name of the field.

- Output data types: _Date_

>Other date type blocks are [date_time_input](date_time_input.md), [week_input](week_input.md), [month_input](month_input.md) and [date_range_input](date_range_input.md).

## Date Type

Dates are saved or output as [JavaScript date objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

Dates can be input by a user either as a [JavaScript parsable date string](https://momentjs.com/docs/#/parsing/string/), that will be converted to a _Date_, or as a _Date_ type. A date object can be defined in a couple of different ways.

- By referencing a pre-defined date in `state`:
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
    "my_date": {
        "_state": "predefined_date"
    }
}
```
<!--YAML-->
```yaml
    my_date:
        _state: predefined_date
```
<!--END_DOCUSAURUS_CODE_TABS-->

- By using one of the [`_date`](concepts/operators.md) operator options:
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
    "my_date": {
        "_date": "now"
    },
    //OR
    "my_date": {
        "_date": "1955-11-12"
    }
}
```
<!--YAML-->
```yaml
    my_date:
        _date:  now
    #OR
    my_date:
        _date: 1955-11-12
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Required fields

The value defined for the `name` of the component should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "date_input"

## Default component settings
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "placeholder": "Select Date",
    "showToday": true,
    "format": "YYYY-MM-DD",
    "size": "default",
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    disabled: false
    placeholder: Select Date
    showToday: true
    format: YYYY-MM-DD
    size: default
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled` : _Boolean_ - Default: `false` - Disables the date picker if `true`.
- `placeholder` : _String_ - Default: `Select Date` - Placeholder inside the date picker to show message before user picks a date.
- `defaultValue` : _Date_ **|** _String_ - Default value for the date picker to be set on page load. Can be a _Date_ type, as defined [here](#date-type) or a JavaScript parsable date string - e.g. "2015/10/21" or "21-10-2015" ([moment.js](https://momentjs.com/docs/#/parsing/string/) has a useful guide for which date strings are parsable).
- `format` : _String_ - Default: `YYYY-MM-DD` - Format in which to parse the date value, eg. "DD MMMM YYYY" will parse a date value of `1999-12-31` as "31 December 1999". The format has to conform to [moment.js](https://momentjs.com/docs/#/parsing/string-format/) formats.
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
  "name": "my_date_picker",
  "type": "date_input",
  "visible": true,
  "properties": {
    "placeholder": "Placeholder text using nunjucks template {{ data_field }}",
    "defaultValue": "1993-02-02",
    "format": "DD-MM-YY",
    "showToday": false,
    "size": "large"
    }
  }
}
```
<!--YAML-->
```yaml
  name: my_date_picker
  type: date_input
  visible: true
  properties:
    placeholder: "Placeholder text using nunjucks template {{ data_field }}"
    defaultValue: 1993-02-02
    format: DD-MM-YY
    showToday: false
    size: large
```
<!--END_DOCUSAURUS_CODE_TABS-->