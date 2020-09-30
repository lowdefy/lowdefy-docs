##### Step 2
Using your text editor, create a file called `lowdefy.yaml` in your project directory.

##### Step 3
Paste the following configuration in the file (we will explain what this means below):

```yaml
pages:
  - id: welcome
    type: PageHeaderMenu
    blocks:
      - id: content_card
        type: Card
        blocks:
          - id: title
            type: Title
            properties:
              content: Hello World
```

##### Step 4
To upload this page to your app, you need to run the Lowdefy CLI. In a terminal or command-line, change directory to your project directory.

##### Step 5
From there run: 

```
npx @lowdefy/cli
```

##### Step 6
The CLI will prompt you for a token. You can get your token by clicking on the inspector bar, and clicking the CLI token button. This will copy a token into your clipboard. Paste this token at the prompt and the CLI will upload your page (You need to right-click to paste into the command-line on Windows).

##### Step 7
Refresh your browser, and you should see something like this: