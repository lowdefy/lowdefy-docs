Change the content of the title to include your name. Refresh your browser and you should see your changes.

### How it Works

The pages array (list) in the `lowdefy.yaml` file contains all the definitions of pages in your app. Adding or removing pages here does the same in your app. Each page is created at a url route that matches the page id. That is, if the page id is `hello`, the page can be found at `app-id.lowdefy.com/hello`.

Lowdefy apps are made from blocks. These blocks can be the page layout with header and menu, a piece of text, a chart or table, tabs or even a popup message or icon. The [type](type) of a block is the field that specifies which block it is. Each block type has a [kind](kind) - this is the general classification of what category of block it is. There are five block kinds:

- [Display](display) - The simplest block that shows something visually. Like an [`Icon`](Icon) or [`Title`](Title). These blocks can still have actions, like the [`Button`](Button) block does.

- [Input](input) - A block that allows the user to input data, like a [`TextInput`](TextInput) or [`DateSelector`](DateSelector). These blocks have a value in the page's [state](state).

- [Container](container) - A block that can show other blocks in it's content areas, like the [`Card`](Card) or [`Tabs`](Tabs) blocks.

- [List](list) - A list block has content areas like a container, but makes multiple sets of these blocks, one for each item of data in a list.  Examples include the [`ControlledList`](ControlledList) and [`Timeline`](Timeline) blocks.

- [Context](Context) - A context block works like a container, but also creates a context inside the scope of that block. For now, it is enough to understand that this context allows the Lowdefy magic to happen. Example of context blocks are[ `PageHeaderMenu`](PageHeaderMenu),[ `PageSiderMenu`](PageSiderMenu) and [`Context`](Context).

  

Since a context is needed for the other blocks on a page to work, the first block on a page needs to be a context block.

All blocks need to have an id that identifies the block. This id should be unique in the context that block is in.

### What Happened

- We removed the` welcome` page preloaded on the app, and created a new page with type `PageHeaderMenu` and kind context and id `booking`.
- We added a `Card` block (of kind container) inside the main content area of the page.
- We added a `Title` block (of kind display) inside the main content area of the card block.
- We changed the `content` property of the title to say hello to the world and to ourself.

### Up Next

In the next section we will add some more blocks to our page to create a form for users to book a meeting room.

