---
id: groups
title: Groups and Roles
sidebar_label: Groups and Roles
---
Lowdefy groups grant granular user access to resources in the application. These groups are configured in the `groups` section of the deployment `lowdefy.json` file. Users are placed in a group via the group admin console in a specific Lowdefy to gain access.

Lowdefy roles grant permissions within the application. These roles are given to a specific user via the user admin console in a specific Lowdefy deployment.


## Groups

If no groups are defined, all users of the app have access to all pages in the application.

Groups are defined as a tree structure in the groups section of the `lowdefy.json` file. This structure can have more than one groups at the root level. The tree structure, analogous to a file folder structure, ensures no circular references are created.  

A group can provide access to pages in the application, but can also provide access to other groups. The user in a group gains all the access given by all sub-groups.

A user can be in more than one group, but they can not be a member of any of sub-groups of a group to which they are assigned. If a user is placed in a group which is a parent of a group of which they are currently a member, they will be removed from that group and be placed in the parent group (they are moved higher up the tree). If an attempt is made to place a user in a group which is a sub-group of any group of which they are a member, the user will not be placed in that group, since they already have that group access.


### Group IDs

Each group should be given a unique id. This group id should be a valid Lowdefy id, as defined [here](lowdefy-file#names-and-ids).

### Example

Consider a Lowdefy application with the following configuration file.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
// lowdefy.json
{
  "groups": [
    {
      "id": "executives",
      "pageIds": [ "executive_report" ],
      "groups": [
        {
          "id": "sales",
          "pageIds": [ "sales_report" ],
          "groups": [
            {
              "id": "sales_north_america",
              "pageIds": [ "sales_north_america_report" ]
            },
            {
              "id": "sales_europe",
              "pageIds": [ "sales_europe_report" ]
            }
          ]
        },
        {
          "id": "marketing",
          "pageIds": [ "marketing_report" ]
        }
      ]
    }
  ],
  "pages": [
    { "_ref": "executive_report" },
    { "_ref": "sales_report" },
    { "_ref": "sales_north_america_report" },
    { "_ref": "sales_europe_report" },
    { "_ref": "marketing_report" }
  ]
}
```
<!--YAML-->
```yaml
# lowdefy.yaml
groups:
  -
    id: executives
    pageIds:
     - executive_report
    groups:
      -
        id: sales
        pageIds:
          - sales_report
        groups:
          -
            id: sales_north_america
            pageIds:   
              - sales_north_america_report
          -
            id: sales_europe
            pageIds:   
              - sales_europe_report
      -
        id: marketing
        pageIds:
          - marketing_report
    
pages:
  - _ref: executive_report
  - _ref: sales_report
  - _ref: sales_north_america_report
  - _ref: sales_europe_report
  - _ref: marketing_report
```
<!--END_DOCUSAURUS_CODE_TABS-->


This will allow users to view pages in the application as follows:

- Users in the `executives` group are able to view pages:
  - `executive_report`
  - `sales_report`
  - `sales_north_america_report`
  - `sales_europe_report`
  - `marketing_report`

- Users in the `sales` group are able to view pages:
  - `sales_report`
  - `sales_north_america_report`
  - `sales_europe_report`

- Users in the `sales_north_america` group are able to view pages:
  - `sales_north_america_report`

- Users in the `sales_europe` group are able to view pages:
  - `sales_europe_report`

- Users in the `marketing` group are able to view pages:
  - `marketing_report`

## Roles

Lowdefy roles grant permissions within the application. These roles are given to a specific user via the user admin console in a specific Lowdefy deployment.

The roles defined for all Lowdefy applications are:

- `Owner`: Provides access to all resources/rights in the application. The first user is granted owner privileges when the deployment is created (`Owner` users automatically have the `User Admin`, `Create Group Admins` and `All Group Admin` roles).
- `User Admin`: Allows a user to invite new users to the deployment user pool, and to edit user profiles.
- `All Group Admin`: The user is the group admin for all groups in the application. This allows a user to add/remove users from all groups in the application.
- `Create Group Admins`: Allows a user to grant `Group Admin` role to other users for any groups of which they are an admin. 
- `Group Admin`: 


### Group Admins

Users can be granted the `Group Admin` role for groups in the application which allows them to add and remove users from that group, and all of its sub-groups, but not on parent groups. Granting a user a `Group Admin` role does not place the user in that group. This means it does not automatically grant access to the group's resources, but the user would be able to add themselves to that group.

If the group admin has the `User Admin` role, they can invite new users. If the user also has  the `Create Group Admins` role, they can then create new admins for that group or any of its sub-groups.

### Example

Consider the following group structure:
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json5
{
  "groups": [
    {
      "id": "national",
      "pageIds": [ "national_report" ],
      "groups": [
        {
          "id": "region",
          "pageIds": [ "region_report" ]
        }
      ]
    }
  ]
}
```
<!--YAML-->
```yaml
groups:
 -
  id: national
  pageIds:
    - national_report
  groups:
    - 
      id: region
      pageIds: 
        - region_report
```
<!--END_DOCUSAURUS_CODE_TABS-->


`User A` is in group `national` and has the role `Group Admin` for the group `region`. This means that `User A` can view both the `national_report` and the `region_report` and can add other users in the Lowdefy deployment to the `region` group to access the `region_report`.

`User B` is an admin of `national` and has the `User Admin` role. This enables `User B` to invite external people to create user profiles in the Lowdefy deployment. `User B` will also be able to edit any user profile and add users to the `national` and region groups.

