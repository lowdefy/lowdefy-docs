##### Step 8

In the `lowdefy.yaml` file, change the "Hello World" text of the title block to include your name. Refresh your browser and you should see your changes.

### What happened

- The token you copied authorized you to make changes to your app.
- The CLI uploaded the `lowdefy.yaml` file to your app. This file defines your app.
- If the config files changed, the CLI uploaded them again, and the changes reflected in the app.

### How it works

The CLI watches all the files in the directory it is running from, and if a file in the project directory is saved, it gets uploaded to your app. Those files are then transformed to form the configuration for your app. Keep the CLI running while you are developing your app, and keep an eye on it for any warnings or errors. To stop the CLI, you can press `Ctrl + C`.

### Up next

In the next section we will add a new page to the app.

