Change the content of the title to include your name. Refresh your browser and you should see your changes.

### What Happened

- We removed the` welcome` page preloaded on the app, and created a new page with type `PageHeaderMenu` and id `hello`.
- We added a `Card` block inside the main content area of the page.
- We added a `Title` block inside the main content area of the card block.
- We changed the `content` property of the title to say hello.

### How it Works

The pages array (list) in the `lowdefy.yaml` file contains all the definitions of pages in your app. Adding or removing pages here does the same in your app. Each page is created at a url route that matches the page id. That is, if the page id is `hello`, the page can be found at `app-id.lowdefy.com/hello`.

### Up Next

In the next section we will add some more blocks to our page to create a form for users to book a meeting room.

