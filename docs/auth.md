---
id: auth
title: User Authentication
sidebar_label: User Authentication
---

Lowdefy uses Amazon Cognito User Pools to manage user authentication into a Lowdefy app. Authentication settings can be defined in the deployment Lowdefy.json file by setting the `auth` object attributes in `config`.

## Usernames and Sign In

For Lowdefy apps each application user is registered using their email address as username. Users can belong to multiple Lowdefy apps with the same user email / username, however, it must be noted that each Lowdefy app maintains its own Cognito User Pool, thus users who have access to multiple apps will have to maintain passwords for each app account individually. Each Lowdefy app is also hosted on individual domains.

## Settings

### Default Settings

The default authentication settings for Lowdefy apps are chosen as reasonable defaults to allow users to set up apps quickly, while maintaining strong security practices.

These default settings are:

```json
{
  "config": {
    "auth": {
      "passwords": {
        "minLength": 8,
        "require": ["numbers", "special_characters", "uppercase", "lowercase"]
      },
      "mfa": {
        "enforce": "optional",
        "method": "totp",
        "newDeviceOnly": false
      },
      "createUsers": "admin_invite",
      "advanced": false
    }
  }
}
```

```yaml
config:
  auth:
    passwords:
      minLength: 8
      require:
        - uppercase
        - lowercase
        - numbers
        - special_characters
    mfa:
      enforce: optional
      method: totp
      newDeviceOnly: false
    createUsers: admin_invite
    advanced: false
```

### Passwords

Application user passwords can be configured by setting the `password` object in the `config.auth` settings. The following fields can be configured:

```json
{
  "config": {
    "auth": {
      "passwords": {
        "minLength": Integer,
        "require": ["numbers", "special_characters", "uppercase", "lowercase"]
      }
    }
  }
}
```

```yaml
config:
  auth:
    passwords:
      minLength: Integer
      require:
        - uppercase
        - lowercase
        - numbers
        - special_characters
```

#### Password settings

- `minLength`: _(Number)_ The minimum length of the users password.
- `require`: _(Array of Strings)_ The character types required for the user passwords. Allowed values are:
  - `"uppercase"`
  - `"lowercase"`
  - `"numbers"`
  - `"special_characters"`

### MFA

Application MFA settings can be configured by configuring the `mfa` object in the `config.auth` settings. The following fields can be configured:

```json
{
  "config": {
    "auth": {
      "mfa": {
        "enforce": "off" | "optional" | "on",
        "method": "totp" | "sms", // additional charges for SMS
        "newDeviceOnly": true | false
      }
    }
  }
}
```

```yaml
config:
  auth:
    mfa:
      enforce: "off" | "optional" | "on"
      method: totp | sms # additional charges for SMS
      newDeviceOnly: true | false,
```

#### MFA Parameters

- `enforce`: _(String)_ Allowed values are:

  - `"off"`: Users cannot enable MFA.
  - `"optional"`: Users have the option to enable MFA.
  - `"on"`: MFA is compulsory for all users.

- `method`: _(String)_ Allowed values are:
  - `"totp"`: Multifactor authentication using a Time-based One Time Password like Google Authenticator.
  - `"sms"`: Multifactor authentication using SMS messages. Additional charges are levied for using SMS"s.
- `newDeviceOnly`: _(Boolean)_ MFA is only required if users sign in with a new device. If set, user devices will be tracked by Amazon Cognito. MFA `"enforce"` should be set to `"optional"` or `"on"`

### Creating New Users

Two options exists for adding new users into an Lowdefy app. A user can be added by admin invite via the in app User Admin console, or via user self registration or sign up. By default users are added by user administrators. Self registration can be enabled by setting the `createUsers` field to `'self_sign_up'` in the `config.auth` settings. To allow any registered user to invite new user onto the user pool, set `createUsers` to `any_user_invite`.

```json
{
  "config": {
    "auth": {
      "createUsers": "admin_invite" | "self_sign_up" | "any_user_invite"
    }
  }
}
```

```yaml
config:
  auth:
    createUsers: admin_invite | self_sign_up | any_user_invite
```

#### Creating Users Parameters

- createUsers: _(String)_ Allowed values are:
  - `"admin_invite"`: User administrators can invite new users to the app. No public users can sign up.
  - `"self_sign_up"`: Anyone can sign up/register for the app without an invitation, from the sign in page.
  - `"any_user_invite"`: Any registered user can invite anyone to register.

### Advanced Security

Amazon Cognito advanced security can be enabled by setting the `advanced` field in `config.auth` settings to `true`. For more information on advanced security, see: https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html

The features provided by Cognito Advanced Security are following:

#### Checking for Compromised Credentials

Amazon Cognito can detect if a user’s credentials (user name and password) have been compromised elsewhere. This can happen when users reuse credentials at more than one site, or when they use passwords that are easy to guess. Users will be blocked from using such passwords

#### Adaptive Authentication

For each sign-in attempt, Amazon Cognito generates a risk score for how likely the sign-in request is to be from a compromised source. This risk score is based on many factors, including whether it detects a new device, user location, or IP address. It will then require second factor authentication in response to an increased risk level.

```json
{
  "config": {
    "auth": {
      "advanced": true | false
    }
  }
}
```

```yaml
config:
  auth:
    advanced: true | false
```

#### Advanced Security Parameters

- `advanced`: _(Boolean)_ Allowed values are:
  - `true`: Use Amazon Cognito advanced security. This will incur additional charges.
  - `false`: Do not use Amazon Cognito advanced security.

### Federated Authentication

// Future work.
