---
id: users
title: User Attributes
sidebar_label: User Attributes
---

Lowdefy manages application user registration and authentication, but also provides the ability to define custom user attributes which can be referenced in the data context.

## Standard User Attributes

The following user attributes and are mandatory defaults for all users, but but can be configured as indicated:
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "config": {
    "users": {
      "userAttributes": [
        {
          "type": "text_input",
          "name": "email",
          "properties": {
            "label": "Email",  // configurable
            "placeholder": "Enter your email", // configurable
            "required": true,
            "rules": [  // configurable
              {
                "message": "Not a valid email", // configurable
                "test": "email" // mandatory
              }
            ]
          }
        },
        {
          "type": "password_input",
          "name": "password",
          "properties": {
            "label": "Password", // configurable
            "placeholder": "Enter your password", // configurable
            "required": true,
            "rules": [ // configurable
              {
                "test": "min_length",
                "rule": 8,
                "message": "Your password length must be at least 8 characters"
              },
              {
                "test": "regex",
                "rule": "[0-9]",
                "message": "Your password must contain at least one number"
              },
              {
                "test": "regex",
                "rule": "[a-z]",
                "message": "Your password must contain at least one lowercase character"
              },
              {
                "test": "regex",
                "rule": "[A-Z]",
                "message": "Your password must contain at least one uppercase character"
              },
              {
                "test": "regex",
                "rule": "[!@#$%^&*(),.?;:{}|<>\\-+~_]",
                "message": "Your password must contain at least one special character"
              }
            ]
          }
        },
        {
          "type": "text_input",
          "name": "firstName",
          "properties": {
            "label": "First Name", // configurable
            "placeholder": "Enter your first name", // configurable
            "required": true, // configurable
            "profile": true  // configurable
          }
        },
        {
          "type": "text_input",
          "name": "lastName",
          "properties": {
            "label": "Last Name", // configurable
            "placeholder": "Enter your last name", // configurable
            "required": true, // configurable
            "profile": true // configurable
          }
        },
        {
          "type": "phoneNumber",
          "name": "phoneNumber",
          "properties": {
            "label": "Phone Number", // configurable
            "placeholder": "Enter your phone number", // configurable
            "profile": true // configurable
          }
        }
      ]
    }
  }
}
```
<!--YAML-->
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
<!--END_DOCUSAURUS_CODE_TABS-->

These user attributes are loaded by default and settings can be customized as indicated by setting the properties on the same field component.

## Custom User Attributes

Custom user attributes can be defined which allow app users and administrators to save user information to the deployment storage.

These custom user attributes can be defined by adding field blocks to the `userAttributes` array. The additional `profile` property on these input blocks is used to indicate users are able to edit that attribute on their profile page. Fields which does not have this `profile` property can only be changed by administrators.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "config": {
    "users": {
      "userAttributes": [
        {
          "type": "date_input", // Optional attribute set by user on profile
          "name": "birthdate",
          "properties": {
            "label": "Birthdate",
            "placeholder": "Optional Birthdate",
            "required": false,
            "profile": true
          }
        },
        {
          "type": "text_input", // Compulsory attribute set by administrator
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
<!--YAML-->
```yaml
  config:
    users:
      userAttributes:
        - 
          type: date # Optional attribute set by user on profile
          name: birthday
          properties:
            label: Birthdate
            placeholder: Optional Birthdate
            required: false
            profile: true
        - 
          type: text # Compulsory attribute set by administrator
          name: employee_number
          properties:
            label: Employee Number
            placeholder: Employee Number
            required: true
            profile: false
```
<!--END_DOCUSAURUS_CODE_TABS-->
