---
id: list
title: List
sidebar_label: List
---

A list block handles the use of indexed array variables in [`state`](concepts/state.md) and provides functionality to add, remove or control an items position in the array. This functionality is useful when managing a list of items for both display and input blocks.

## Required fields

- `type`: "modal"
- `name`: _String_ - A valid [Lowdefy name](concepts/lowdefy-file.md#names-and-ids).
- `visible`: _Boolean_ - Used to control when the modal should be displayed.
- `blocks`: _Array_ - A list of sub-blocks rendered as the list's content for each item in the [`state`](concepts/state.md) value array.
  
> List child blocks are indicated with `$` index name notation. For example, `my_list.$` will evaluate as  `my_list.0`, `my_list.1`, ... `my_list.n` for an list of primitive values.
> 
> For an list of objects, `my_list.$.my_field` will evaluate as  `my_list.0.my_field`, `my_list.1.my_field`, ... `my_list.n.my_field`. Use the `$` index notation when the same object in the array needs to be referenced.

## Default block settings

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "visible": true,
  "properties": {
    "addButtonTitle": "Add Item",
    "addToFront": false,
    "hideAddButton": false,
    "hideRemoveButton": false,
    "noDataTitle": "No Items"
  }
}
```
<!--YAML-->
```yaml
  visible: true
  properties:
    addButtonTitle: Add Item
    addToFront: false
    hideAddButton: false
    hideRemoveButton: false
    noDataTitle: No Items
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Block label

- `title` : _String_ - Default: `null` - List title.

## Block properties

- `addButtonTitle` : _String_ - Default: `"Add Item"` - Add button title.
- `noDataTitle` : _String_ - Default: `"No Items"` - Text to show when the list is empty.
- 'addToFront' : _Boolean_ - Default: `false` - New items are added to the front of the array when clicking the add item button.
- 'hideAddButton' : _Boolean_ - Default: `false` - Hide the add button, use when new items should not be added to the list.
- 'hideRemoveButton' : _Boolean_ - Default: `false` - Hide the remove button, use when items should not be removed from the list.
  
<!-- ## Block actions TODO

- `onAddItem` : List of actions to execute on Add Item button click.
- `onRemoveItem` : List of actions to execute on Remove Item button click.

> See [Actions](./actions/actions.md) for the complete list of available actions. -->

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "name": "my_list",
  "type": "list",
  "visible": true,
  "label": {
    "title": "List of Items."
  },
  "properties": {
    "addToFront": true,
  },
  "blocks": [
    ... list of content blocks
  ]
}
```
<!--YAML-->
```yaml
  name: my_modal
  type: modal
  visible: true
  label:
    title: List of Items.
  properties:
    addToFront: true
  blocks:
    - ... list of content blocks
```
<!--END_DOCUSAURUS_CODE_TABS-->