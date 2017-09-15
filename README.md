# Installation

## Server

1. Setup MongoDB
2. Run Mongod
3. mongoimport --db care_coordinator_dashboard --collection Users --type json --file /Users/josephstein/Projects/care-coordinator-dashboard/server/sample_data/users.json --jsonArray
4. mongoimport --db care_coordinator_dashboard --collection Prescriptions --type json --file /Users/josephstein/Projects/care-coordinator-dashboard/server/sample_data/prescriptions.json --jsonArray
5. mongoimport --db care_coordinator_dashboard --collection Compliances --type json --file /Users/josephstein/Projects/care-coordinator-dashboard/server/sample_data/compliances.json --jsonArray



## Client

1.