# Side Menu

The side bar menu items are listed vertically and the side bar has the ability to collapse and free up screen space, with the logo inside the header.

The `side_menu` can be in auto collapse mode, is searchable and has adjustable width

## Required fields

The value defined for the `name` of the item should be a valid [lowdefy_name](/lowdefy-aws-deployment/docs/lowdefy.md#lowdefy_name). A list of menu item types should be provided as `links`, containing all the menu items in the order which they must be displayed.

- `name`
- `type`: "side_menu"
- `links`: []

## Default component settings

<U>JSON</U>

```json
{
  "links": [],
  "properties": {
    "autoCollapse": true,
    "search": true,
    "searchPlaceholder": "Find Menu Item",
    "width": 256
  }
}
```

<U>YAML</U>

```yaml
  links: []
  properties:
    autoCollapse: false
    search: true
    searchPlaceholder: Find Menu Item
    width: 256
```

## Component properties

- `autoCollapse`: _Boolean_  - Default: `false` - Auto expand collapse the side menu on mouse enter and exit.
- `search`: _Boolean_  - Default: `true` - Make the menu searchable. A search bar will show at the top of the menu. Search results are based on menu titles.
- `searchPlaceholder`: _String_  - Default: `"Find Menu Item"` - Placeholder text to display in search bar.
