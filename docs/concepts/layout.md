---
id: layout
title: Layout and Menu
sidebar_label: Layout and Menu
---
The layout object contains the overall app layout settings. Currently only the menu structure is defined here.

## Menu Settings

Lowdefy offers various menu configuration options to accommodate popular menu designs while maintaining the same structure and schema. Ant design layout components are used, as described [here](https://ant.design/components/layout/).

User access is determined on a page level using groups. Signed in users only see the menu items to which they have been granted access.

By default Lowdefy compiles the menu from the list of `pages` and page properties, thus if no menu settings are provided a default menu is derived. The default `menu` is a non-collapsing `side_menu` populated by the list of page titles in the order set by the pages array.

However, if a menu object is provided, no default assumptions will be made, and pages not listed in the menu will not be linked to. Users will still be able to navigate to pages that are not listed in the menu by using the page url.

### Menu Types

The following menu types are available:

- `primary_side_menu` - _default_: A side bar menu with a large logo inside the side bar
- `side_menu` - A side bar menu with the logo inside the header
- `drawer_menu` - A menu which opens up as a sliding drawer
- `header_menu` - The menu is contained within the header bar

### Menu Item Types

The items in the menu can either be a `menu_link` or a `menu_group`. A `menu_link` is a link to a page in the app. A `menu_group` can be used to group `menu_link`'s. The menu supports up to two levels of grouping. Icons on  `menu_link`'s or `menu_group`'s will only be rendered if they are at the top level of the menu.

### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
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
<!--YAML-->
```yaml
layout:
  menu:
    name: my_menu
    type: primary_side_menu
    links:
    - 
      type: menu_link
      name: m_page_1
      pageId: page_1
      properties:
        title: Page 1
        icon: shopping-cart
    - 
      type: menu_group
      name: m_page_2
      properties:
        title: Page 2
        icon: user
      links:
      - 
        type: menu_link
        name: m_page_2_1
        pageId: page_2_1
        properties:
          title: Page 2.1
      - 
        type: menu_group
        name: m_page_2_2
        properties:
          title: Page 2.2
        links:
        - 
          type: menu_link
          name: m_page_2_2_1
          pageId: page_2_2_1
          properties:
            title: Page 2.2.1
```
<!--END_DOCUSAURUS_CODE_TABS-->

