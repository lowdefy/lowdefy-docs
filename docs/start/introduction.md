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


