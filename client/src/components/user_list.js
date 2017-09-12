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
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Birthday",
                  accessor: "dateofbirth"
                },
                {
                  Header: "Active Date",
                  accessor: "active"
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
              ]
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
          showPaginationTop
          showPaginationBottom
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
                this.props.onRowClick(8)
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
