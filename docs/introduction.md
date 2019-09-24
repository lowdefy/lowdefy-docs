---
id: introduction
title: Introduction
sidebar_label: Introduction
---

Lowdefy apps are defined in a Github repositories, and are then deployed into its own Amazon Web Services (AWS) account. The deployed application consists of a Single Page App (SPA) front end, served by content delivery network (CDN), with a serverless graphql backend. The front end serves content in the form of _blocks_ and routes requests through the graphql backed to your source or data _connections_. 

## Blocks

A block is a front end component like a chart, table or form component. Each block has a set of properties which defines how that block is rendered and behaves. When using libraries like amCharts or ag-Grid, the properties of the block are used directly by that library. We try to make all features of the library available, and any examples or documentation that are available for that library, applicable.

## Connections

A connection is a link to an outside service, like a database or REST API. Secrets for these connections are stored securely using AWS Secrets Manager, and never stored in the project repository. The various connection types support different requests, like database queries or API calls.

## Separate AWS Accounts and Data Retention

Each Lowdefy application is deployed in its own AWS account for maximum security and data separation. Lowdefy never stores any data passing to and from your connections. We only cache your repository code in the deployment AWS account. 

## User access control

Lowdefy applications offer granular group based user access control, giving the ability to control who sees what. User identity is managed with AWS Cognito, Amazon's identity management service, that allows for federated identity through third-party identity providers like Google, Facebook, and Active Directory.

## Serverless Scaling

Lowdefy runs on a serverless architecture. This allows for a very low running cost if the app is not used, fast scaling to handle a large spike in usage and error recovery and redundancy.

## Github

Lowdefy applications are deployed similarly to Netlify websites. Once a commit is made on a tracked branch, those changes are carried over to the application. Some changes, like changes to the properties of a table or form can be updated immediately, while less frequent changes, like changing the password policy, theme or adding custom block or connection types require a software build.

Defining Lowdefy applications in a repository offers these advantages:
- The same app can easily be deployed multiple times, and all the deployments can be updated simultaneously.
- Version control of all changes made to an application.
- It is easy to implement a staging and review process, where changes can be tested before deploying them to production.
- Apps can be open-sourced - Users can improve on community projects, and reuse apps and ideas of others.

## Customization and White Labeling

Lowdefy applications use the Ant Design design system. We expose all Ant Design CSS theme variables, which allow for the customization of the app with over 500 Less variables. Application images like the app logo and favicon can be included, and the app can be hosted on a custom domain.

## Custom Blocks and Connections (on our road map)

A custom block is a React component that receives properties and data. The component is defined in the project repository, and is included in the build of the web app front end. NPM dependencies con also be included.

A custom connection is a Node.js method running in AWS Lambda, executed by events like front end requests. These functions can connect to the internet or execute custom logic.
