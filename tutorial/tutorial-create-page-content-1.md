To write Lowdefy configuration files you need a text editor. We recommend [VSCode](https://code.visualstudio.com/download), but feel free to use your favourite.

Using your text editor, create a file called `lowdefy.yaml` in your project directory. Paste the following configuration in the file (we will explain what this means below):

```yaml
pages:
  - id: hello
    type: PageHeaderMenu
    blocks:
      - id: content_card
        type: Card
        blocks:
          - id: title
            type: Title
            properties:
              content: Hello There
```

To upload this page to your app, you need to run the Lowdefy CLI. In a terminal, change directory to your project directory. From there run: 

```bash
lowdefy
```

The CLI will prompt you for a token. You can get your token by clicking on the inspector bar, and clicking the CLI token button. This will copy a token into your clipboard. Paste this token at the prompt and the CLI will upload your page.

>  If you get any errors, check that the contents of your `lowdefy.yaml` match the example exactly, especially the identation of the text. If that doesn't solve the issue, get in touch with us and we will help you out.

Change your browser url to `app-id.lowdefy.com` and you should be redirected to your new hello page at `app-id.lowdefy.com/hello`.

> The welcome page was removed, so if you go to`app-id.lowdefy.com/welcome`, you will get a 404 page not found error.

It should look like this: