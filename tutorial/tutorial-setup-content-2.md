The blue bar at the bottom of the screen is called the inspector. This is only visible to users with the owner or developer role, and allows you to see whats happening inside your app.

### Installing Node.js

The [Lowdefy CLI](cli) (Command Line Interface) allows you to upload changes to your app. To run the Lowdefy CLI you need to install Node.js at version 10 or greater. If you don't have it installed, download Node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/), and follow the installation steps for your computer. All of the default settings given by the installer are fine for what we need.

To test if Node.js is installed on computer, run the following from a terminal:

```bash
node --version
```

The output should look something like:
```bash
v12.18.0
```

### YAML Files

Lowdefy apps are written using YAML files. YAML files are useful for storing structured data, like the configuration of all of the elements of your app. YAML files focus on being easily readable by humans, this means they don't lots of syntactic elements like brackets that make it difficult for humans to read, but instead use indentation to indicate structure. While this does make the file easier to read, this means care has to be taken that the data structure is as you intended. If you don't have any experience using YAML, this video is a good introduction.
