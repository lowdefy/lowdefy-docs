---
id: pages
title: Pages
sidebar_label: Pages
---

The pages of a Lowdefy app are defined in the pages section of the `lowdefy.json` file. Pages contain a list of blocks, and a list of requests that can be called  by those blocks.

### Page IDs

Each page should be given a unique id. This page id should be a valid Lowdefy id, as defined [here](lowdefy-file.md#_lowdefy_id_).


### Properties

### Box

### Block Placement Rules

The blocks on a page are placed in a Ant Design [Grid](https://ant.design/components/grid/).

The width of a page is divided into 24 columns. Blocks are given a default width of 24 columns (the full width of the page) if no width is otherwise specified.

Blocks are placed, starting from the first block, from the top left corner of the page. If the the available space to the right of the previous block is greater than or equal to the width of the block currently being placed (there is space to place the block next to the previous block), that block will be placed next to the previous block. If not (there is no space for the block), the block will be placed below all blocks on that row.

If no widths are specified for any blocks, all blocks will be placed underneath each other, spanning the full width of the page.

If a height is defined for a block, the block will rendered with that height. If the content of the block is larger than the specified height, the content of that block will scroll. If no height is defined, content of the block determines the height. If blocks are placed next to each other with different heights, the blocks on the next row will be beneath all the blocks on the row above.

A `column` block works like a page, it also has a width of 24 columns, and blocks inside a column are laid out according to the same rules as a page. 

### Route

A page will be available on the url route `/page/{pageID}`. The page will be viewable by any user who has access to that page, even if it isn't listed in the menu.

### Public Pages

Coming soon