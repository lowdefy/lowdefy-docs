---
id: users
title: User Settings
sidebar_label: User Settings
---

Lowdefy manages application user registration and authentication, but also provides the ability to define custom user attributes which can be referenced in the data context.

## Users Collection

In most deployments it is useful to lookup data in the users collection when resolving data components. In order to do this Lowdefy needs to synchronize user attributes to a data collection. To activate this, setup the users collection by setting the `collection` parameter in the `config.users` object to a defined data collection id:

```json
{
  config: {
    users: {
      collection: 'my_users_collection_id'
    }
  },
  ...
  dataCollections: {
    {
      id: 'my_users_collection_id',
      collection: 'my_users_database_collection'
    }
}
```

```yaml
config:
  users:
    collection: my_users_collection_id
dataCollections:
  - id: my_users_collection_id
    collection: my_users_database_collection
```

If no users data collection is defined, Lowdefy only manages the user data is the deployment storage, the current user is still available when resolving data components by referencing the `user` field in the `$$context`.

## Standard User Attributes

The following user attributes and are mandatory defaults for all users, but but can be configured as indicated:

```json
{
  config: {
    users: {
      userAttributes: [
        {
          type: 'text',
          name: 'email',
          properties: {
            label: 'Email',  // configurable
            placeholder: 'Enter your email', // configurable
            required: true,
            rules: [  // configurable
              {
                message: 'Not a valid email', // configurable
                test: 'email' // mandatory
              },
            ]
          }
        },
        {
          type: 'password',
          name: 'password',
          properties: {
            label: 'Password', // configurable
            placeholder: 'Enter your password', // configurable
            required: true,
            rules: [ // configurable
              {
                test: 'min_length',
                rule: 8,
                message: 'Your password length must be at least 8 characters'
              },
              {
                test: 'regex',
                rule: '[0-9]',
                message: 'Your password must contain at least one number'
              },
              {
                test: 'regex',
                rule: '[a-z]',
                message: 'Your password must contain at least one lowercase character'
              },
              {
                test: 'regex',
                rule: '[A-Z]',
                message: 'Your password must contain at least one uppercase character'
              },
              {
                test: 'regex',
                rule: '[!@#$%^&*(),.?;:{}|<>\\-+~_]',
                message: 'Your password must contain at least one special character'
              }
            ]
          }
        },
        {
          type: 'text',
          name: 'firstName',
          properties: {
            label: 'First Name', // configurable
            placeholder: 'Enter your first name', // configurable
            required: true, // configurable
            profile: true  // configurable
          }
        },
        {
          type: 'text',
          name: 'lastName',
          properties: {
            label: 'Last Name', // configurable
            placeholder: 'Enter your last name', // configurable
            required: true, // configurable
            profile: true // configurable
          }
        },
        {
          type: 'phoneNumber',
          name: 'phoneNumber',
          properties: {
            label: 'Phone Number', // configurable
            placeholder: 'Enter your phone number' // configurable
            profile: true, // configurable
          }
        }
      ]
    }
  }
}
```

```yaml
config:
  users:
    userAttributes:
      - type: text
        name: email
        properties:
          label: Email # configurable
          placeholder: Enter your email # configurable
          required: true
          rules: # configurable
            - message: Not a valid email # configurable
              test: email # mandatory
      - type: password
        name: password
        properties:
          label: Password # configurable
          placeholder: Enter your password # configurable
          required: true
          rules: # configurable
            - test: min_length
              rule: 8
              message: Your password length must be at least 8 characters
            - test: regex
              rule: "[0-9]"
              message: Your password must contain at least one number
            - test: regex
              rule: "[a-z]"
              message: Your password must contain at least one lowercase character
            - test: regex
              rule: "[A-Z]"
              message: Your password must contain at least one uppercase character
            - test: regex
              rule: '[!@#$%^&*(),.?;:{}|<>\\-+~_]'
              message: Your password must contain at least one special character
      - type: text
        name: firstName
        properties:
          label: First Name # configurable
          placeholder: Enter your first name # configurable
          required: true # configurable
          profile: true # configurable
      - type: text
        name: lastName
        properties:
          label: Last Name # configurable
          placeholder: Enter your last name # configurable
          required: true # configurable
          profile: true # configurable
      - type: phoneNumber
        name: phoneNumber
        properties:
          label: Phone Number # configurable
          placeholder: Enter your phone number # configurable
          profile: true # configurable
```

These user attributes are loaded by default and settings can be customized as indicated by setting the properties on the same field component.

## Custom User Attributes

Custom user attributes can be defined which allow app users and administrators to save user information to the deployment storage and users collection.

These custom user attributes can be defined by adding field components to the `userAttributes` array. The additional `profile` property on these field components is used to indicate users are able to edit that attribute on their profile page. Fields which does not have this `profile` property can only be changed by administrators.

```json
{
  "config": {
    "users": {
      "userAttributes": [
        ...{
          "type": "date",
          "name": "birthdate",
          "properties": {
            "label": "Birthdate",
            "placeholder": "Optional Birthdate",
            "required": false,
            "profile": true
          }
        },
        {
          "type": "text",
          "name": "employee_number",
          "properties": {
            "label": "Employee Number",
            "placeholder": "Employee Number",
            "required": true,
            "profile": false
          }
        }
      ]
    }
  }
}
```

```yaml
  config:
    users:
      userAttributes:
        ...
        - # Optional attribute set by user on profile
          type: date
          name: birthday
          properties:
            label: Birthdate
            placeholder: Optional Birthdate
            required: false
            profile: true
        - # Compulsory attribute set by administrator
          type: text
          name: employee_number
          properties:
            label: Employee Number
            placeholder: Employee Number
            required: true
            profile: false
```

## Keeping Users Data Collection in Sync

Although Lowdefy manages these user attributes in the deployment storage, synchronization is only one directional, from deployment storage to the users data collection. The means that if the data base owner modifies data in the users data collection, the changes will not propagate back to the deployment storage and as a result, the `user` data referenced by `$$context` reflects data as saved in the deployment storage. However, if the user data is accessed by looking up the users data collection, the modified data will be referenced. It is thus advised to provide a user collection, which is dedicated to Lowdefy users and is not modified externally to ensure that the users deployment storage and the users data collection remains in sync.
