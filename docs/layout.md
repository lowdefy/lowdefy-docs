---
id: layout
title: Layout
sidebar_label: Layout
---
The layout object contains the `menu` and `page` layout options.

## Menu Settings

Lowdefy offers various menu configuration options to accommodate all common menu designs while maintaining the same structure schema.

User access is determined on a page level using groups. Signed in users only see the menu items to which they have been granted access.

### Default menu

By default Lowdefy compiles the menu from the list of `pages` and page properties, thus if no menu settings are provided a default menu is derived. However, if a menu object is provided, no default assumptions will be made.

The default `menu` is assumed as a non-collapsing `side_menu` populated by the list of page titles in the order set by the pages array.

### Example

<U>JSON</U>

```json
{
  "layout": {
    "menu": {
      "name": "my_menu",
      "type": "primary_side_menu",
      "links": [
        {
          "type": "menu_link",
          "name": "m_page_1",
          "pageId": "page_1",
          "properties": {
            "title": "Page 1",
            "icon": "shopping-cart"
          }
        },
        {
          "type": "menu_group",
          "name": "m_page_2",
          "properties": {
            "title": "Page 2",
            "icon": "user"
          },
          "links": [
            {
              "type": "menu_link",
              "name": "m_page_2_1",
              "pageId": "page_2_1",
              "properties": {
                "title": "Page 2.1"
              }
            },
            {
              "type": "menu_group",
              "name": "m_page_2_2",
              "properties": {
                "title": "Page 2.2"
              },
              "links": [
                {
                  "type": "menu_link",
                  "name": "m_page_2_2_1",
                  "pageId": "page_2_2_1",
                  "properties": {
                    "title": "Page 2.2.1"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

<U>YAML</U>

```yaml
layout:
  menu:
    name: my_menu
    type: primary_side_menu
    links:
    - type: menu_link
      name: m_page_1
      pageId: page_1
      properties:
        title: Page 1
        icon: shopping-cart
    - type: menu_group
      name: m_page_2
      properties:
        title: Page 2
        icon: user
      links:
      - type: menu_link
        name: m_page_2_1
        pageId: page_2_1
        properties:
          title: Page 2.1
      - type: menu_group
        name: m_page_2_2
        properties:
          title: Page 2.2
        links:
        - type: menu_link
          name: m_page_2_2_1
          pageId: page_2_2_1
          properties:
            title: Page 2.2.1
```

### Menu types

The following menu types are available:

- `primary_side_menu` - _default_: A side bar menu with a large logo inside the side bar
- `side_menu` - A side bar menu with the logo inside the header
- `drawer_menu` - A menu which opens up as a sliding drawer
- `header_menu` - The menu is contained within the header bar

## Menu item types

Two menu item types `menu_link` and `menu_group`.