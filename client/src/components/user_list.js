import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export default class UserList extends React.Component {
  render() {
    const { data } = this.props
    if (!data) { return }

    return (
      <div>
        <ReactTable
          filterable
          data={data}
          columns={[
            {
              Header: "Info",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                },
                {
                  Header: "Email",
                  accessor: "email"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Compliance",
                  accessor: "compliance"
                },
                {
                  Header: "Streak",
                  accessor: "streak"
                },
                {
                  Header: "Acuity",
                  accessor: "acuity"
                },
                {
                  Header: "Risk",
                  accessor: "riskscore"
                },
                {
                  Header: "Week-to-Week",
                  accessor: "weektoweek"
                },
                {
                  Header: "Most Missed",
                  accessor: "mostMissed"
                },
                {
                  Header: "3-Day %",
                  accessor: "threedayperc"
                },
              ]
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
          showPaginationTop
          showPaginationBottom
          noDataText="No users found"
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: e => {
                console.log("Cell - onClick", {
                  state,
                  rowInfo,
                  column,
                  instance,
                  event: e
                })
                this.props.onRowClick(rowInfo['original']['_id'])
              }
            }
          }}
        />
        <br />
        <div style={{ textAlign: "center" }}>
          <em>Tip: Hold shift when sorting to multi-sort!</em>
        </div>;
      </div>
    )
  }
}
