---
id: date_range_input
title: Date Range Input
sidebar_label: Date Range Input
---

Date picker form input field. Allows the user to select a date range from a calender form, with a start and an end date.
The input to this field is saved as an array of [_Date_](date_input.md#date-type) types in [`state`](concepts/state.md), at the path name of the field.

- Output data types: [ _Date_ ]

>Other date type blocks are [date_input](date_input.md), [date_time_input](date_time_input.md), [week_input](week_input.md) and [month_input](month_input.md).

## Required fields

The value defined for the `name` of the component should be a valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "date_range_input"

## Default component settings
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "placeholder": [
      "Start Date",
      "End Date"
     ],
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
    placeholder:
      - Start Date
      - End Date
    format: YYYY-MM-DD
    size: default
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled` : _Boolean_ - Default: `false` - Disables the date range picker if `true`.
- `placeholder` : [ _String_ ] - Default: `[ 'Start Date', 'End Date' ]` - Array with placeholder text to show in the date picker for the start and end of the date range.
- `defaultValue` : [ _Date_ ] **|** [ _String_ ] - An array with the default values for the date picker to be set on page load. Can be an array of _Date_ types, as defined [here](date_input.md#date-type) or JavaScript parsable date strings - e.g. [ "1985/10/26", "2015/10/21" ] or [ "26-10-1985", "21-10-2015" ] ([moment.js](https://momentjs.com/docs/#/parsing/string/) has a useful guide for which date strings are parsable).
- `format` : _String_ - Default: `YYYY-MM-DD` - Format in which to parse the date value, eg. "DD MMMM YYYY" will parse a date value of `1999-12-31` as "31 December 1999". The format has to conform to [moment.js](https://momentjs.com/docs/#/parsing/string-format/) formats.
- `size` : _Enum_ - Default: `default` - Size of the date picker.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_

### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_date_range",
  "type": "date_range_input",
  "visible": true,
  "properties": {
    "placeholder": [
      "Start Date placeholder text using nunjucks template {{ data_field }}",
      "End Date placeholder text using nunjucks template {{ data_field }}"
      ],
    "defaultValue": [
      "1993-02-02",
      "1993-02-03"
      ],
    "format": "DD-MM-YY",
    "size": "large"
    }
  }
}
```
<!--YAML-->
```yaml
  name: my_date_range
  type: date_range_input
  visible: true
  properties:
    placeholder:
      - Start Date placeholder text using nunjucks template {{ data_field }}
      - End Date placeholder text using nunjucks template {{ data_field }}
    defaultValue:
      - 1993-02-02
      - 1993-02-03
    format: DD-MM-YY
    size: large
```
<!--END_DOCUSAURUS_CODE_TABS-->