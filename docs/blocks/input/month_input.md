---
id: month_input
title: Month Input
sidebar_label: Month Input
---

Month picker input block. Allows a user to select a specific month from a calender form.
The input to this field is saved as a [_Date_](date_input.md#date-type) type in [`state`](concepts/state.md), at the path name of the block.

- Output data types: _Date_

> Other date type blocks are [date_input](date_input.md), [date_time_input](date_time_input.md), [week_input](week_input.md) and [date_range_input](date_range_input.md).

## Required fields

The value defined for the `name` of the block should be a valid [lowdefy_name](concepts/lowdefy-file.md#names-and-ids).

- `name`
- `type`: "month_input"

## Default component settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "placeholder": "Select Month",
    "format": "YYYY-MM",
    "suffixIcon": "calendar",
    "size": "default",
    "allowClear": false,
  },
}
```

<!--YAML-->

```yaml
visible: true
properties:
  disabled: false
  placeholder: Select Month
  format: YYYY-MM
  suffixIcon: calendar
  size: default
  allowClear: false
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled` : _Boolean_ - Default: `false` - Disables the month picker if `true`.
- `placeholder` : _String_ - Default: `Select Month` - Placeholder inside the date picker to show message before user picks a month.
- `defaultValue` : _Date_ **|** _String_ - Default value for the date picker to be set on page load. Can be a _Date_ type, as defined [here](date_input.md#date-type) or a JavaScript parsable date string - e.g. "2015/10/21" or "21-10-2015" ([moment.js](https://momentjs.com/docs/#/parsing/string/) has a useful guide for which date strings are parsable).
- `format` : _String_ - Default: `YYYY-MM` - Format in which to parse the date value, eg. "MMMM YYYY" will parse a date value of `1999-12-31` as "December 1999". The format has to conform to [moment.js](https://momentjs.com/docs/#/parsing/string-format/) formats.
- `suffixIcon` : _String_ - Default: `calendar` - Ant Icon at the right-hand side of the date picker, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `size` : _Enum_ - Default: `default` - Size of the date picker.
  - `large` - _String_
  - `default` - _String_
  - `small` - _String_
- `allowClear` : _Boolean_ - Default: `false` - Allows the user to clear their date selection if `true`.

### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  "name": "my_month_picker",
  "type": "month_input",
  "visible": true,
  "properties": {
    "placeholder": "Please select a month",
    "defaultValue": "1993-02-01",
    "format": "YYYY-MMMM",
    "size": "small"
    }
  }
}
```

<!--YAML-->

```yaml
name: my_month_picker
type: month_input
visible: true
properties:
  placeholder: Please select a month
  defaultValue: '1993-02-01'
  format: YYYY-MMMM
  size: small
```

<!--END_DOCUSAURUS_CODE_TABS-->
