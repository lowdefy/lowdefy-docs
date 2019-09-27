---
id: slider_input
title: Slider Input
sidebar_label: Slider Input
---

Slider block that changes the path name in [`_state`](concepts/lowdefy-file.md) to the number value selected on the slider.

- Output data types: _Number_

## Required fields

The value defined for the `name` of the component should be a valid [lowdefy_name](concepts/lowdefy-file.md#names-and-ids)).

- `name`
- `type`: "slider_input"

## Default component settings
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "disabled": false,
    "disableIcons": false,
    "showMarks": true,
    "min": 0,
    "max": 10,
    "step": 1,
    "iconMin": "frown-o",
    "iconMax": "smile-o"
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    disabled: false
    disableIcons: false
    showMarks: true
    min: 0
    max: 10
    step: 1
    iconMin: frown-o
    iconMax: smile-o
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Component properties

- `disabled`: _Boolean_ - Default: `false` - Disables the slider component if `true`.
- `disableIcons`: _Boolean_ - Default: `false` - Hides `iconMin` and `iconMax` when `true`.
- `showMarks`: _Boolean_  - Default: `true` - Shows marks at specified `min`, `max` and `step` values when `true`.
- `tooltipVisible`: _Boolean_ - Default: `undefined` - Always shows a tooltip with the current value of the slider when `true` and never shows the tooltip when `false`. If `tooltipVisible` is undefined (the default value) the tooltip only shows when dragging slider.
- `min`: _Number_ - Default: `0` - The minimum value of the slider.
- `max`: _Number_ - Default: `10` -  The maximum value of the slider.
- `step`: _Number_ - Default: `1` -  The size of the step between values, has to be values greater than 0.
- `iconMin`: _String_ - Default: `"frown-o"` - Ant Icon to the left of the minimum side of the slider, should be a valid [Ant icon reference](https://ant.design/components/icon/).
- `iconMin`: _String_ - Default: `"smile-o"` - Ant Icon to the right of the maximum side of the slider, should be a valid [Ant icon reference](https://ant.design/components/icon/).

### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_slider",
  "type": "slider_input",
  "visible": true,
  "properties": {
    "showMarks": false,
    "tooltipVisible": true,
    "min": 0,
    "max": 100,
    "step": 10
  }
}
```
<!--YAML-->
```yaml
  name: my_slider
  type: slider_input
  visible: true
  properties:
    showMarks: false
    tooltipVisible: true
    min: 0
    max: 100
    step: 10
```
<!--END_DOCUSAURUS_CODE_TABS-->