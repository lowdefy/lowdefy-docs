### What Happened

We added 5 form input blocks to the page. For each of those blocks, we set the `title` property, and for the meeting room selector we set a list of meeting rooms to the options property.

We also added two buttons, a smaller reset button and a larger submit button. We set a few more properties on the buttons to set their layout and apperance.



>  If you would like to see how your config should look at this point, you can find it [here](tutorial-add-blocks-config).

### How it Works

Lowdefy apps are made from blocks. These blocks can be the page layout with header and menu, a piece of text, a chart or table, tabs or even a popup message or icon. The [type](type) of a block is the field that specifies which block it is. Each block type has a [kind](kind) - this is the general classification of what category of block it is. There are five block kinds:

- [Display](display) - The simplest block that shows something visually. Like an [`Icon`](Icon) or [`Title`](Title). These blocks can still have actions, like the [`Button`](Button) block does.

- [Input](input) - A block that allows the user to input data, like a [`TextInput`](TextInput) or [`DateSelector`](DateSelector). These blocks have a value in the page's [state](state).

- [Container](container) - A block that can show other blocks in it's content areas, like the [`Card`](Card) or [`Tabs`](Tabs) blocks.

- [List](list) - A list block has content areas like a container, but makes multiple sets of these blocks, one for each item of data in a list.  Examples include the [`ControlledList`](ControlledList) and [`Timeline`](Timeline) blocks.

- [Context](Context) - A context block works like a container, but also creates a context inside the scope of that block. For now, it is enough to understand that this context allows the Lowdefy magic to happen. Example of context blocks are[ `PageHeaderMenu`](PageHeaderMenu),[ `PageSiderMenu`](PageSiderMenu) and [`Context`](Context).


Since a context is needed for the other blocks on a page to work, the first block on a page needs to be a context block.

All blocks need to have an id that identifies the block. This id should be unique in the context that block is in.
 

### Up Next

Currently our form doesn't do very much. In the next section we will use [actions]() and [operators]() to make it more interactive.

