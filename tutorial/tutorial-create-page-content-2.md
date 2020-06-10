Change the content of the title to include your name. Refresh your browser and you should see your changes.

### What Happened

The pages array (list) in the `lowdefy.yaml` file contains all the definitions of pages in your app. Adding or removing pages here does the same in your app. Each page is created at a url route that matches the page id. That is, if the page id is `hello`, the page can be found at `app-id.lowdefy.com/hello`.



Each page is a block. A block should always have an `id` property, which should be unique on that page. A block should also have a `type` property, which should be a valid Lowdefy block type. The first block on a page should also have a [kind](kind) 'context', like the `PageHeaderMenu`, `PageSiderMenu` and `Context` blocks do. Lowdefy blocks operate within a [context](context), which we will explain later, for now it is enough to understand that this context allows the Lowdefy magic to happen.

Some blocks (those with kind `context`, `container` or `list`) can contain children blocks. These blocks are added in a list under the `blocks` key of the parent block. We added a `Card` block, which is a `container`, and we added a `Title` block inside the card. This title has a property called `content`, which is the text displayed in the title.



### Up Next

In the next section we will create a form for users to book a meeting room.

