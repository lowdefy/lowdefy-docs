  # References

 

Other JSON or YAML files in the project repository can be referenced in the `lowdefy.yaml` file, or in any of the referenced files, using the `"_ref"` [operator](operators). This allows the configuration to be split into a logical structure, and allows the reuse of configurations since a file can be referenced multiple times. A reference is written using an object with a key `"_ref"`, and a value which is the file path to the file, from the directory of the `lowdefy.yaml` file. When a file is referenced, the contents of that file will be written into the file where the reference was made.

The file path can contain the file extension of the file (either `.yaml`, `.yml` or `.json`). If no extension is specified, the system will first look for a file with a YAML extension (`.yaml` and then .`yml`), and then look for a file with a `.json` extension.

If no file matching the path is found, a null will be substituted into the config at that point.

References can also contain variables, which are are substituted into the referenced file using the `_var` operator. This allows a file to act as a template. More can read about this [here](_var).

### Example

  Given a directory structure like:

  ```text
  pages/
    - page_1.yaml
    - page_2.json
    - page_3.json
    - page_3.yaml
  groups.yaml
  lowdefy.yaml
  ```

  With files:

**lowdefy.yaml**

  ```yaml
  groups:
  	_ref: groups.yaml
  pages:
  	- _ref: page_1.yaml
  	- _ref: page_2.json
  	- _ref: page_3

  ```

**groups.yaml**

  ```yaml
- id: group1
	pages:
		- page_1
- id: group2
	pages:
		- page_2
  ```
**page_1.yaml**

  ```yaml
  id: page_1
  properties:
    title: Page 1
  ```
**page_2.json**

  ```json
{
	"id": "page_2",
  "properties": {
  	"title": "Page 2"
  }
}
  ```

**page_3.yaml**

  ```yaml
  id: page_3
  properties:
    title: Page 3 YAML
  
  ```

**page_3.json**

  ```json
{
	"id": "page_3",
  "properties": {
  	"title": "Page 3 JSON"
  }
}
  ```



The resulting config will look like this:

```yaml
  groups:
    - id: group1
      pages:
        - page_1
    - id: group2
      pages:
        - page_2
  pages:
    - id: page_1
  		properties:
    	  title: Page 1
    - id: page_2
  		properties:
    	  title: Page 2
    - id: page_3
  		properties:
    	  title: Page 3 YAML
```

