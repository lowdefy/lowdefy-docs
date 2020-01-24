---
id: theme
title: Theme
sidebar_label: Theme
---

Lowdefy allows you to customize and white label your application theme. Theme settings can be defined in the deployment `lowdefy.json` file by setting the `theme` object attributes in `config`.

## Settings

### Pages

Some default application pages, like Sign In and Reset Password have properties which can be customized. These application page settings can be set at the route `config.theme.pages`. The following page settings can be customized.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "config": {
    "theme": {
      "pages": {
        "home": {
          "pageTitle": "Lowdefy",
          "title": "Lowdefy"
        },
        "signUp": {
          "pageTitle": "Lowdefy",
          "title": "Sign up as a new user",
          "message": null,
          "submitButton": "Sign Up"
        },
        "postSignUp": {
          "pageTitle": "Lowdefy",
          "title": "Welcome!",
          "message": "An email containing a temporary password is on its way. Please sign in using the provided temporary password to confirm your email.",
          "submitButton": "Back to Sign In"
        },
        "signIn": {
          "pageTitle": "Lowdefy",
          "title": "Sign in to your account",
          "message": null,
          "submitButton": "Sign In"
        },
        "resetPassword": {
          "pageTitle": "Lowdefy",
          "title": "Reset your password",
          "message": null,
          "submitButton": "Reset Password"
        },
        "changePassword": {
          "pageTitle": "Lowdefy",
          "title": "Change your password",
          "message": "A password reset code was sent to your email, please enter the code in order to reset your password.",
          "submitButton": "Change Password"
        },
        "confirmSignIn": {
          "pageTitle": "Lowdefy",
          "title": "Sign up as a new user",
          "message": null,
          "submitButton": "Sign Up"
        },
        "requireNewPassword": {
          "pageTitle": "Lowdefy",
          "title": "Update your password",
          "message": null,
          "submitButton": "Update Password"
        },
        "updateProfile": {
          "pageTitle": "Lowdefy",
          "title": "Update your user profile",
          "message": null,
          "submitButton": "Update"
        },
        "verifyPhoneNumber": {
          "pageTitle": "Lowdefy",
          "title": "Verify your phone number",
          "message": null,
          "submitButton": "Verify"
        }
      }
    }
  }
}
```
<!--YAML-->
```yaml
config:
  theme:
    pages:
      home:
        pageTitle: Lowdefy
        title: Lowdefy
      signUp:
        pageTitle: Lowdefy
        title: Sign up as a new user
        message: null
        submitButton: 'Sign Up'
      postSignUp:
        pageTitle: Lowdefy
        title: Welcome!
        message: An email containing a temporary password is on its way. Please sign in using the provided temporary password to confirm your email.
        submitButton: Back to Sign In
      signIn:
        pageTitle: Lowdefy
        title: Sign in to your account
        message: null
        submitButton: Sign In
      resetPassword:
        pageTitle: Lowdefy
        title: Reset your password
        message: null
        submitButton: Reset Password
      changePassword:
        pageTitle: Lowdefy
        title: Change your password
        message: A password reset code was sent to your email, please enter the code in order to reset your password.
        submitButton: Change Password
      confirmSignIn:
        pageTitle: Lowdefy
        title: Sign up as a new user
        message: null
        submitButton: Sign Up
      requireNewPassword:
        pageTitle: Lowdefy
        title: Update your password
        message: null
        submitButton: Update Password
      updateProfile:
        pageTitle: Lowdefy
        title: Update your user profile
        message: null
        submitButton: Update
      verifyPhoneNumber:
        pageTitle: Lowdefy
        title: Verify your phone number
        message: null
        submitButton: Verify
```
<!--END_DOCUSAURUS_CODE_TABS-->


### Application Logos and Images

Application images can be customized by changing a hosted images url to the `images` settings in the `config.theme` object

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "config": {
    "theme": {
      "images": {
        "logo": "https://lowdefy.com/apps/logo.png",
        "favicon": "https://lowdefy.com/apps/favicon.ico",
      }
    }
  }
}
```
<!--YAML-->
```yaml
config:
  theme:
    images:
      logo: https://lowdefy.com/apps/logo.png
      favicon: https://lowdefy.com/apps/favicon.ico
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Overwriting CSS Variables

Lowdefy uses Ant Design as a React component library. This enables us to expose all Ant Design CSS theme variables for customization of app css styles. To overwrite the default css variables, set the `cssVariables` in the `config.theme` object. 

For example:
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "config": {
    "theme": {
      "cssVariables": {
        "@primary-color": "#1890ff", // primary color for all components
        "@link-color": "#1890ff", // link color
        "@success-color": "#52c41a", // success state color
        "@warning-color": "#faad14", // warning state color
        "error-color": "#f5222d", // error state color
        "@font-size-base": "14px", // major text font size
        "@heading-color": "rgba(0, 0, 0, 0.85)", // heading text color
        "@text-color": "rgba(0, 0, 0, 0.65)", // major text color
        "@text-color-secondary": "rgba(0, 0, 0, .45)", // secondary text color
        "@disabled-color": "rgba(0, 0, 0, .25)", // disable state color
        "@border-radius-base": "4px",  // major border radius
        "@border-color-base": "#d9d9d9", // major border color
        "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)" // major shadow for layers
      }
    }
  }
}
```
<!--YAML-->
```yaml
  config:
    theme:
      cssVariables: 
        "@primary-color": "#1890ff" # primary color for all components
        "@link-color": "#1890ff" # link color
        "@success-color": "#52c41a" # success state color
        "@warning-color": "#faad14" # warning state color
        "error-color": "#f5222d" # error state color
        "@font-size-base": "14px" # major text font size
        "@heading-color": "rgba(0, 0, 0, 0.85)" # heading text color
        "@text-color": "rgba(0, 0, 0, 0.65)" # major text color
        "@text-color-secondary": "rgba(0, 0, 0, .45)" # secondary text color
        "@disabled-color": "rgba(0, 0, 0, .25)" # disable state color
        "@border-radius-base": "4px" # major border radius
        "@border-color-base": "#d9d9d9" # major border color
        "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)" # major shadow for layers
```
<!--END_DOCUSAURUS_CODE_TABS-->


For more details see:
https://ant.design/docs/react/customize-theme

The full list of css variables provided by Ant Design are:
https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

A useful theme editor:
http://antdtheme.com/