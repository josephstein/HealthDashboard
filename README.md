# Installation

## Server

1. Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
2. Install & run `mongod`
3. Import sample data
⋅⋅* mongoimport --db care_coordinator_dashboard --collection Users --type json --file /path/to/project/server/sample_data/users.json --jsonArray
⋅⋅* mongoimport --db care_coordinator_dashboard --collection Prescriptions --type json --file /path/to/project/server/sample_data/prescriptions.json --jsonArray
⋅⋅* mongoimport --db care_coordinator_dashboard --collection Compliances --type json --file /path/to/project/server/sample_data/compliances.json --jsonArray

## Client

1. Install [React](https://facebook.github.io/react/docs/installation.html)
2. Navigate to `/client` directory
3. `npm install`

# Run

## Server

1. Navigate to `/server` directory
2. `node index.js`

## Client

1. Navigate to `/client` directory
2. `yarn start`

