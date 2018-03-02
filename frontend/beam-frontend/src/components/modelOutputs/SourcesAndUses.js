import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'

class SourcesAndUses extends React.Component {

handleAssumedDebtAndPref = (array) => {
  let assumedDebtAndPref = []
  let repaidDebtAndPref = []
  let usedCash = []
  for (let i = 0; i< array.length; i++){
    if ((array[i].item_type === "debt" || array[i].item_type === "preferred") && array[i].repay === false ) {
      assumedDebtAndPref.push(array[i])
    } else if ((array[i].item_type === "cash") && array[i].repay === true ){
      usedCash.push(array[i])
    } else if ((array[i].item_type === "debt" || array[i].item_type === "preferred") && array[i].repay === true ) {
      repaidDebtAndPref.push(array[i])
    }
    return {assumedDebtAndPref: assumedDebtAndPref, repaidDebtAndPref: repaidDebtAndPref, usedCash: usedCash}
}
}



  render() {



        const sourcesAndUsesData = [{
          uses_label: 'Purchase Target Equity',
          uses_metric: this.props.outputsData ? this.props.outputsData.impliedTargetEquityValue : 0 ,
          uses_percentage: "",
        }, {

        }
      ]
        const sourcesAndUsesColumns = [{
          Header: 'Uses',
          accessor: 'uses_label',
          minWidth: 250,
          maxWidth: 325,
        }, {
          Header: 'Amount',
          accessor: 'uses_metric',
          Cell: props => <span className='number'>{props.value}</span>,
           // minWidth: 130,
           // maxWidth: 130,
        },{
          Header: '%',
          accessor: 'uses_percentage',
          Cell: props => <span className='number'>{props.value}</span>,
           // minWidth: 130,
           // maxWidth: 130,
        },{
          minWidth: 10,
          maxWidth: 10,
        },{
          Header: 'Sources',
          accessor: 'sources_label',
          minWidth: 250,
          maxWidth: 325,
        },{
          Header: 'Amount',
          accessor: 'sources_metric',
          Cell: props => <span className='number'>{props.value}</span>,
           // minWidth: 130,
           // maxWidth: 130,
        },
        {
          Header: '%',
          accessor: 'sources_percentage',
          Cell: props => <span className='number'>{props.value}</span>,
           // minWidth: 130,
           // maxWidth: 130,
        },

      ]

    return (
       <div className="outputholder">
          <div className="single-table-holder">
            <h3>Sources and Uses</h3>
              <ReactTable
              data={sourcesAndUsesData}
              columns={sourcesAndUsesColumns}
              showPagination={false}
              defaultPageSize={7}
            />
          </div>
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }}, )(SourcesAndUses)
