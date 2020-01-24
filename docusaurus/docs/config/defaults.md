---
id: defaults
title: Default Settings
sidebar_label: Default Settings
---
Lowdefy assumes some application default parameters. These defaults parameters can be customizing by overwriting the defaults.


These default parameters are:
- `countryDialCode`: _String_ - Default: "1" - The default country dial used on the phone number block. 
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "config": {
    "defaults": {
      "countryDialCode": "1"
    }
  }
}
```
<!--YAML-->
```yaml
config:
  defaults:
    countryDialCode: '1'
```
<!--END_DOCUSAURUS_CODE_TABS-->
