---
id: modal
title: Modal
sidebar_label: Modal
---

A modal block is a modal popup container which renders child blocks into a new grid inside a new floating layer over the current page. Use a modal block to render blocks for additional information and feedback without jumping page or interrupting the user's workflow. See [Antd Design Modal](https://ant.design/components/modal/) for more details.

## Required fields

- `type`: "modal"
- `name`: _String_ - A valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).
- `visible`: _Boolean_ - Used to control when the modal should be displayed.
- `blocks`: _Array_ - A list of sub-blocks rendered as the card's content.

## Default block settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "centered": false,
    "closable": true,
    "mask": true,
    "maskClosable": true,
    "okText": "Ok",
    "okButtonType": "primary",
    "cancelText": "Cancel",
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    centered: false
    closable: true
    mask: true
    maskClosable: true
    okText: Ok
    okButtonType: primary
    cancelText: Cancel
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Block label

- `title` : _String_ - Default: `null` - Modal title.

## Block properties

- `okText` : _String_ - Default: `"Ok"` - Ok button text.
- `cancelText` : _String_ - Default: `"Cancel"` - Cancel button text.
- `width` : _Number_ / _String_ - Default: `520` - Modal pixel width or percentage width of window.
- `centered` : _Boolean_ - Default: `false` - Centered modal on window.
- `closable` : _Boolean_ - Default: `true` - Whether a close (x) button is visible on top right of the modal dialog or not.
- `mask` : _Boolean_ - Default: `true` - Whether show mask or not.
- `maskClosable` : _Boolean_ - Default: `true` - Whether to close the modal dialog when the mask (area outside the modal) is clicked.
- `okType` : _Enum_ - Default: `primary` - Type of the Ok button.
  - `primary` - _String_
  - `default` - _String_
  - `danger` - _String_
  - `ghost` - _String_
  - `dashed` - _String_
  - `link` - _String_
- `okButtonProps` : _Object_ - Ok button properties object. See [Ant Design Button](https://ant.design/components/button/) for details on available properties.
- `cancelButtonProps` : _Object_ - Cancel button properties object. See [Ant Design Button](https://ant.design/components/button/) for details on available properties.

## Block actions

- `onOk` : List of actions to execute on Ok button click.
- `onCancel` : List of actions to execute on Cancel button click.

> See [Actions](./actions/actions.md) for the complete list of available actions.

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_modal",
  "type": "modal",
  "visible": { "_state": "my_modal_open" },
  "label": {
    "title": "Confirm all details."
  },
  "properties": {
    "width": 400,
    "centered": true
  },
  "actions": {
    "onOk": [
      {"mutate()": "save_details" },
      {"set()": { "my_modal_open": false }}
    ],
    "onCancel": [
      {"set()": { "my_modal_open": false }}
    ]
  },
  "blocks": [
    ... list of modal content blocks
  ]
}
```
<!--YAML-->
```yaml
  name: my_modal
  type: modal
  visible:
    _state: my_modal_open
  label:
    title: Confirm all details.
  properties:
    width: 400
    centered: true
  actions:
    onOk:
      - mutate(): save_details
      - set():
          my_modal_open: false
    onCancel:
      - set():
          my_modal_open: false
  blocks:
    - ... list of modal content blocks
```
<!--END_DOCUSAURUS_CODE_TABS-->