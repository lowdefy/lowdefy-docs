# Lowdefy Configuration



The configuration of a Lowdefy application is written in  YAML or JSON files. A file called `lowdefy.yaml` or `lowdefy.json` is the root of the the configuration. This root file has sections for different parts of the application like [config](config), [global](global), [menus](menus), [connections](connections), [groups](groups), and [pages](pages). The configuration can be split into multiple files using [references](references).

## Configuration structure

The sections in the lowdefy configuration are as follows:

```yaml
#lowdefy.yaml

config:
	# config object
global:
	# global object
menus:
	- # list of menu objects
groups:
	- # list of group objects
connections:
	- # list of external data connection objects
pages:
	- # list of page objects
```

## Lowdefy Ids

All Lowdefy objects require an `id`, which is used to identify this object. This id should be unique within that object's context. For example, no menu object should have the same id as another menu object, but a menu may have the same id as a page, and two blocks can have the same id if they are placed on different pages.

Ids should comply to the following rules:

- It should be a string.
- It may only consist of the characters `a-z`,` A-Z`, `0-9`, `-`  (dash), and `_` (underscore).

- It may not contain whitespace.

- It may not start with a number.

- It must contain at least one non-numeric character.

- It may not start with `"lowdefy"` (Not case sensitive).



