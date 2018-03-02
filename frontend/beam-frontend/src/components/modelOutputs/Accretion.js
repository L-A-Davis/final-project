import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'

class Accretion extends React.Component {

  render() {

            const accretionData = [{
              label: `${this.props.outputsData ? this.props.outputsData.acquirorCodename : 'Acquiror' } Per Share`,
              metric: this.props.outputsData ? this.props.outputsData.acquirorFFOPerShareValueYear1 : 0
            }, {
              label: `${this.props.outputsData ? this.props.outputsData.acquirorCodename : 'Acquiror' } Shares`,
              metric: this.props.outputsData ? this.props.outputsData.acquirorShares : 0
            },
            {
              label: `${this.props.outputsData ? this.props.outputsData.acquirorCodename : 'Acquiror' } Total Cash Flow`,
              metric: this.props.outputsData ? this.props.outputsData.acquirorShares * this.props.outputsData.acquirorFFOPerShareValueYear1: 0
            }, {
            label: `${this.props.outputsData ? this.props.outputsData.targetCodename : 'Target' } Per Share`,
            metric: this.props.outputsData ? this.props.outputsData.targetFFOPerShareValueYear1 : 0
          }, {
            label: `${this.props.outputsData ? this.props.outputsData.targetCodename : 'Target' } Shares`,
            metric: this.props.outputsData ? this.props.outputsData.targetShares : 0
          },
          {
            label: `${this.props.outputsData ? this.props.outputsData.targetCodename : 'Target' } Total Cash Flow`,
            metric: this.props.outputsData ? this.props.outputsData.targetShares * this.props.outputsData.targetFFOPerShareValueYear1: 0
          },
          {
            label: "Transaction Adjustments"
          }

          ]
            const accretionColumns = [{
              Header: '',
              accessor: 'label',
              minWidth: 250,
              maxWidth: 325,
            }, {
              Header: 'Year 1',
              accessor: 'metric',
              Cell: props => <span className='number'>{props.value}</span>,
               // minWidth: 130,
               // maxWidth: 130,
            }]

    return (
       <div className="outputholder">
        <h4>Accretion / Dilution Analysis</h4>
          <ReactTable
          data={accretionData}
          columns={accretionColumns}
          showPagination={false}
          defaultPageSize={7}
          />
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }}, )(Accretion)
