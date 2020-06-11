The blue bar at the bottom of the screen is called the inspector. This is only visible to users with the owner or developer role, and allows you to see whats happening inside your app.

### Creating a Project Directory

Create a folder on your computer that will contain the configuration files for your app. We will be referring to this folder as the project directory.

> This folder can be a source control repository. We are working on a [Github](https://github.com/) integration that will sync commits on your master branch to your app.

### Installing the Lowdefy CLI

The [Lowdefy CLI](cli) (Command Line Interface) allows you to upload changes to your app. To run the Lowdefy CLI you need to install Node.js at version 10 or greater. This will also install npm, a package manager for Node.js. Download Node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

To test if Node.js is installed on computer, run the following from a terminal:

```bash
node --version
```

The output should look something like:
```bash
v12.18.0
```

To install the CLI globally (available from anywhere on your computer), run:

```bash
npm install -g @lowdefy/cli
```
> You can also create a `package.json` file and install the CLI as a devDependency if you wish.

In your terminal, run `lowdefy --version` to verify that the CLI is installed. The CLI watches all the files in the directory it is running from, and uploads all those files to your app. Those files are then complied together to form the configuration for your app. Keep the CLI running while you are developing your app, and keep an eye on it for any warnings or errors. To stop the CLI, you can press `Ctrl + C`.

### Up Next

In the next section we will add our first page to our app.