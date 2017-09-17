# Health Dashboard

## Overview

A demo app of a health dashboard used by care coordinators to manage patients at a high level. Demonstrates core concepts of what you'd likely see in a standard web application. 

# Installation

## Server

1. Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
2. Navigate to `/server` directory
3. `npm install`
3. Install & run `mongod`
4. Import sample data
  * `mongoimport --db care_coordinator_dashboard --collection Users --type json --file /path/to/project/server/sample_data/users.json --jsonArray`
  * `mongoimport --db care_coordinator_dashboard --collection Prescriptions --type json --file /path/to/project/server/sample_data/prescriptions.json --jsonArray`
  * `mongoimport --db care_coordinator_dashboard --collection Compliances --type json --file /path/to/project/server/sample_data/compliances.json --jsonArray`

## Client

1. Install [React](https://facebook.github.io/react/docs/installation.html)
2. Navigate to `/client` directory
3. `npm install`

# Run

## Server

1. Navigate to `/server` directory
2. `node index.js`
3. `mongod` (can be run from any path)

## Client

1. Navigate to `/client` directory
2. `yarn start`

# Component Architecture

![Component Architecture](https://github.com/josephstein/HealthDashboard/blob/master/component_architecture.png "Component Architecture")

- `app.js`: Highest level container. Contains all components listed below
- `user_list.js`: Displays table of users (Hidden on mobile when sidebar is visible)
- `side_bar.js`: Container for toggling between `user_basics.js` and `user_details_edit.js`
- `user_details.js`: Container for showing 1 of the following three components as tabs:
  * `user_details_basics.js`: Displays basic user information provided by `Users` db table
  * `user_details_prescriptions.js`: Displays a users prescriptions provided by `Prescriptions` db table
  * `user_details_compliances.js`: Displays a users compliances provided by `Compliances` db table
- `user_details_edit.js`: For for editing basic user information
