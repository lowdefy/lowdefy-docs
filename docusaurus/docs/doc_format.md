# Format rules for writing docs

Description of feature/component

## Required Fields

Give [link](/lowdefy-aws-deployment/docs/lowdefy.md#lowdefy_name) to allowed lowdefy names and IDs before the code blocks.

- `id`
- `name`
- `properties.something`
- `properties.graphs[n].name`

## Default Values

<U>JSON</U>
```json
{
  "visible": true,
  "properties": {
    "disabled": false,
    "size": "default"
  }
}
```
<U>YAML</U>
```yaml
  visible: true
  properties:
    disabled: false
    size: default
```

## Component Properties
List all properties specific to the component/ feature

Format shown below. First state the `field name`, then _Type_ , then **REQUIRED** (on all required fields only), then the default value (if one exists or if undefined requires an explanation), then a concise description of the property.

>All `nunjucks_template` to be of type [_NunjucksTemplate_](/lowdefy-aws-deployment/docs/lowdefy.md#nunjucks_template) and all `nunjucks_condition` to be of type [_NunjucksCondition_](/lowdefy-aws-deployment/docs/lowdefy.md#nunjucks_condition)

>Default: specific value, `component.id`, [], {}, undefined (only in special cases)

Root types (_String_, _Number_, _Boolean_, _NunjucksCondition_, _NunjucksTemplate_):

- `fieldname`: _Type_ - **REQUIRED** - Default: "14px" - Description.
- `fieldname`: _Type_ - **REQUIRED** - Default: `this.id` - Description.

_Object_ types:

- `fieldname`: _Object_ - Description.
  - `nested_field`: _Type_ - Description. - Default: specific value - Description

_Array_ of fields (flat array):

- `fieldname`: _[ String ]_ - Description. Which types allowed in the array. min or max length.

_Array_ of objects:

- `fieldname`: _[ Object ]_ Description.
  - `nested_field`: _Object_ - Description. Mention default value here?

_Enum_ root fields (a set list of available root types):

- `fieldname`: _Enum_ - Default: `enum_value` - Description.
  - `enum_value` - _Type_ - Description.
  - `enum_value` - _Type_ - Description.
  - _Object_
    - `nested_field` - _Type_ - Description.

Enum arrays (a set list of available arrays):

- `fieldname`:  _[ Enum ]_  - Default: `enum_value` - Description of Array.
  - `enum_value` - _Type_ - Description.
  - `enum_value` - _Type_ - Description.

>In the case of an object that is used repeatedly (`column_type` used in prop fields `labelCol`, `wrapperCol` in [label.md](../docs/components/input/label.md)) just define the object in the first instance and refer back to definition in following instances

### Example

Show completed json and yaml example of a feature with as many fields defined as possible. If some of the types required are complicated (_Condtion_, _Template_) try and show an example of the the more complicated option.

<U>JSON</U>

```json
{
  "name": "my_name",
  "type": "object",
  "visible": true,
  "properties": {
    "disabled": false,
    "size": "default",
    "object_field": {
      "nested_field_1": 100,
      "nested_field_2": true,
      "nested_array_field": [ 0, 1 ],
      "nested_object_field": {
        "field_1": "Some String",
        "field_2": [ "array", "of", "something" ]
      }
    }
  }
}
```

<U>YAML</U>

```yaml
name: my_name
type: object
visible: true
properties:
  disabled: false
  size: default
  object_field:
    nested_field_1: 100
    nested_field_2: true
    nested_array_field:
      - 0
      - 1
    nested_object_field:
      field_1: Some String
      field_2:
        - array
        - of
        - something
```
