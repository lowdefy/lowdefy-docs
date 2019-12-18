---
id: users
title: User Attributes
sidebar_label: User Attributes
---

Lowdefy manages application user registration and authentication, but also provides the ability to define custom user attributes which can be referenced in the data context.

## Standard User Attributes

The following user attributes are mandatory defaults for all users, but but can be configured where indicated:

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  config: {
    users: {
      collection: "my_users",

      firstName: {
        label: "First Name", // configurable
        placeholder: "Enter your first name", // configurable
        required: true // configurable
      },
      lastName: {
        label: "Last Name", // configurable
        placeholder: "Enter your last name", // configurable
        required: true // configurable
      },
      phoneNumber: {
        label: "Phone number", // configurable
        placeholder: "Enter phone number (format?)", // configurable
        required: true, // configurable
        validation: [] // configurable
      },
      email: {
        label: "Email", // configurable
        placeholder: "Enter your email", // configurable
        required: true, // not configurable
        prefixIcon: "user", // not configurable
        validation: [
          // configurable
          {
            status: "error", // not configurable
            message: "Not a valid email", // configurable
            pass: {
              _regex: {
                pattern: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
                key: "$email"
              } // not configurable
            }
          }
        ]
      },
      password: {
        label: "Password", // configurable
        placeholder: "Enter your password", // configurable
        required: true, // not configurable
        prefixIcon: "lock", // not configurable
        validation: [
          // configurable
          {
            status: "error",
            message: "Your password length must be at least 8 characters",
            pass: {
              _mql_expr: { $gte: [{ $strLenCP: "$password" }, 8] }
            }
          },
          {
            status: "error",
            message: "Your password must contain at least one number",
            pass: {
              _regex: { pattern: "[0-9]", key: "$password" }
            }
          },
          {
            status: "error",
            message: "Your password must contain at least one lowercase character",
            pass: {
              _regex: { pattern: "[a-z]", key: "$password" }
            }
          },
          {
            status: "error",
            message: "Your password must contain at least one uppercase character",
            pass: {
              _regex: { pattern: "[A-Z]", key: "$password" }
            }
          },
          {
            status: "error",
            message: "Your password must contain at least one special character",
            pass: {
              _regex: {
                pattern: "[!@#$%^&*(),.?;:{}|<>\\-+~_]",
                key: "$password"
              }
            }
          }
        ]
      },
      passwordConfirm: {
        label: "Confirm Password", // configurable
        placeholder: "Re-enter your password", // configurable
        required: true, // not configurable
        prefixIcon: "lock", // not configurable,
        validation: [
          // not configurable
          {
            status: "error",
            message: "Your password does not match", // configurable
            pass: {
              _mql_test: { passwordConfirm: "_state.password" }
            }
          }
        ]
      },

      adminAttributes: [], // configurable

      userAttributes: [] // configurable
    }
  }
}
```

<!--YAML-->

```yaml
config:
  users:
    collection: my_users

    firstName:
      label: First Name # configurable
      placeholder: Enter your first name # configurable
      required: true # configurable

    lastName:
      label: Last Name # configurable
      placeholder: Enter your last name # configurable
      required: true # configurable

    phoneNumber:
      label: Phone number # configurable
      placeholder: Enter phone number (format?) # configurable
      required: true # configurable
      validation: [] # configurable

    email:
      label: Email # configurable
      placeholder: Enter email address # configurable
      required: true # not configurable
      prefixIcon: user # not configurable
      validation: # configurable
        - status: error # not configurable
          message: Not a valid email # configurable
          pass:
            _regex: {
                "pattern": "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
                "key": "$email",
              } # not configurable

    password:
      label: Password # configurable
      placeholder: Enter password # configurable
      required: true # not configurable
      prefixIcon: lock # not configurable
      validation: # configurable
        - status: error
          message: Your password length must be at least 8 characters
          pass:
            _mql_expr: { "$gte": [{ "$strLenCP": "$password" }, 8] }
        - status: error
          message: Your password must contain at least one number
          pass:
            _regex: { "pattern": "[0-9]", "key": "$password" }
        - status: error
          message: Your password must contain at least one lowercase character
          pass:
            _regex: { "pattern": "[a-z]", "key": "$password" }
        - status: error
          message: Your password must contain at least one uppercase character
          pass:
            _regex: { "pattern": "[A-Z]", "key": "$password" }
        - status: error
          message: Your password must contain at least one special character
          pass:
            _regex:
              { "pattern": "[!@#$%^&*(),.?;:{}|<>\\-+~_]", "key": "$password" }

      passwordConfirm:
        label: Confirm Password # configurable
        placeholder: Re-enter your password # configurable
        required: true # not configurable
        prefixIcon: lock # not configurable,
        validation: # not configurable
          - status: error
            message: Your password does not match # configurable
            pass:
              _mql_test: { "passwordConfirm": "$password" }

    adminAttributes: [] # configurable

    userAttributes: [] # configurable
```

<!--END_DOCUSAURUS_CODE_TABS-->

[Validation rules](concepts/lowdefy-file.md) can be customized for the following fields:

- `email.validation` : The message of the default rule can be changed and new rules can be added.
- `password.validation` : The default rules can be changed or removed and new rules can be added.
- `passwordConfirm.validation` : The message of the default rule can be changed.
- `phoneNumber.validation` : New rules can be added.

The `adminAttributes` and `userAttributes` arrays are empty by default, but they can be populated with any field input blocks.

## Custom User Attributes

Custom user attributes can be defined which allow app users and administrators to save user information to the deployment storage.

These custom user attributes can be defined by adding field blocks to the `adminAttributes` and the `userAttributes` arrays. Users are able to edit any attributes added to `userAttributes` on their profile page whilst only administrators can edit attributes added to `adminAttributes`.

### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->

```json5
{
  config: {
    users: {
      adminAttributes: [
        // Attributes set by administrator
        {
          type: "text_input",
          name: "employee_number",
          properties: {
            label: "Employee Number",
            placeholder: "Employee Number",
            required: true
          }
        }
      ],
      userAttributes: [
        // Attributes set by user on profile
        {
          type: "date_input",
          name: "birthdate",
          properties: {
            label: "Birthdate",
            placeholder: "Optional Birthdate",
            required: false
          }
        },
        {
          type: "select_input",
          name: "region",
          properties: {
            label: "Region",
            required: true,
            options: ["CPT", "JHB", "PTA"]
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
    adminAttributes: # Attributes set by administrator
      - type: text_input
        name: employee_number
        properties:
          label: Employee Number
          placeholder: Employee Number
          required: true

    userAttributes: # Attributes set by user on profile
      - type: date_input
        name: birthday
        properties:
          label: Birthdate
          placeholder: Optional Birthdate
          required: false
      - type: select_input
        name: region
        properties:
          label: Region
          required: true
          options:
            - CPT
            - JHB
            - PTA
```

<!--END_DOCUSAURUS_CODE_TABS-->
