The inspector is visible to users with the `developer` or `owner` roles. It allows you to see variables that are defined throughout the whole app, as well as in specific contexts, and the results of actions, requests, and mutations. This is also where you get access to your CLI token, and you can set an option to set block borders to help with layouts.

You can open the inspector by clicking on the blue bar at the bottom of your screen.

## Context 

Lowdefy uses contexts to separate different parts of your app, so they can have their own independent states and requests. Each page has its own context, therefore the first block on any page should be of category context. You can place additional context blocks on the same page. You might want to do this if you have two different forms on the same page, and you want them to be independent .of each other. You can select the context you want to look at in the inspector using the first drop-down in top left of the inspector.

## Global objects

Some objects are available throughout the entire app. These are the currently logged in user, the menus defined for the app, and the global and config objects.

### User
Select the `master:booking:booking:{}` context, and then select the 'User' option. Here you can see your user object, you should be able to see your userId, name, avatar url and roles. The user object contains details for the currently logged in user, and is null if no user is logged in. You can access the current user your app using the `_user` operator.

### Menu

Select the 'Menu' option in the inspector selector, and have a look at the menus you defined earlier. The menu object contains all the menus defined in your app. You can use different menus on different pages. The menus are filtered by the pages that the currently logged in user can see, so users with limited access won't see menu items they don't have access to. You can use different menus using the `_menu` operator.

### Global

You can define variables to be used across the whole app using the global object. These variables can be defined in the `lowdefy.yaml` file, and you can also set variables in the global object using the `setGlobal()` action. Some app variables like the deployment id, name and domain name are also available in the global object. Select the 'Global' option in the inspector selector. You should be able to see the deployment id, name and domain name. You can use variables in the global object using the `_global` operator.

### Config

You can define certain app configuration settings, like if the app allows public sign ups, in the config object in the `lowdefy.yaml` file. You can use these settings using the `_config` operator.

## Context specific objects

Some objects are specific to every context. These are the state, input, actions, requests and mutations.

### State

State is the most commonly used variable in an app. Each input block stores its input in state with its id as key. Select the 'State' option in the inspector and you should see all the form inputs we have defined. If you change the inputs in the form, you should see the values in the inspector change. You can set values in state using the `setState()` action, and you can use state values with the `_state` operator.

### Input

The input object is used when you need to provide variables to a page when linking to it. These are set when using the `link()` operator, and can be accessed using the `_input` operator.

### Actions

If you select the 'Actions' option in the inspector, you can see a list of all the actions that have been executed in that context. You can access this action log using the `_action_log` operator.

### Requests and Mutations

Requests are used to connect with external data sources like databases or API's. Requests are for 'read' operations, like database queries or `GET` requests, while mutations are for 'write' operations, like database updates or `POST` requests. We will be looking a these in more detail later.

## Up next

We need to create a database before we can save our data to it. In the next section we will be setting up a free MongoDB cluster.
