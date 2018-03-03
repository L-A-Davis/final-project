import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import NumberFormat from 'react-number-format';

class SourcesAndUses extends React.Component {

  // impliedTargetEquityValue
  // assumedDebtAndPref,
  // repaidDebtAndPref,
  // usedCash

  handleAssumedItems = (array) => {
    let tableInfo =
    array.map(item => ({
      label: `Assume ${item.item_name}`,
      metric:
            <NumberFormat
            value={item.amount} displayType={'text'}
            thousandSeparator={true} prefix={'$'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} />,
    }))
    return tableInfo
  }

  handleRepaidItems = (array) => {
    let tableInfo =
    array.map(item => ({
      label: `Repay ${item.item_name}`,
      metric:
            <NumberFormat
            value={item.amount} displayType={'text'}
            thousandSeparator={true} prefix={'$'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} />,
    }))
    return tableInfo
  }


  handleUsedCash = (array) => {
    let tableInfo =
    array.map(item => ({
      label: `Use of ${item.item_name}`,
      metric:
            <NumberFormat
            value={item.amount} displayType={'text'}
            thousandSeparator={true} prefix={'$'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} />,
    }))
    return tableInfo
  }

  handleTotalUsesCalc = () =>{
    
  }

  render() {

        const usesData =  this.props.outputsData ?
        [{
            label: 'Purchase Target Equity',
            metric:
            <NumberFormat
            value={this.props.outputsData.impliedTargetEquityValue} displayType={'text'}
            thousandSeparator={true} prefix={'$'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} />
          }].concat(this.handleAssumedItems(this.props.outputsData.assumedDebtAndPref)).concat(this.handleRepaidItems(this.props.outputsData.repaidDebtAndPref)).concat([{
              label: 'Transaction Costs',
              metric:
              <NumberFormat
              value={30} displayType={'text'}
              thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."} decimalScale={1}
              fixedDecimalScale={true} />}]) : [{}]

        const sourcesData = this.props.outputsData ? this.handleAssumedItems(this.props.outputsData.assumedDebtAndPref).concat(this.handleUsedCash(this.props.outputsData.usedCash)) : [{}]

        const sourcesColumns = [{
          Header: 'Sources',
          accessor: 'label',
          minWidth: 250,
          maxWidth: 325,
        }, {
          Header: 'Amount',
          accessor: 'metric',
          Cell: props => <span className='number'>{props.value}</span>,
           // minWidth: 130,
           // maxWidth: 130,
        },{
          Header: '%',
          accessor: 'percentage',
          Cell: props => <span className='number'>{props.value}</span>,
           // minWidth: 130,
           // maxWidth: 130,
        }]

        const usesColumns = [{
          Header: 'Uses',
          accessor: 'label',
          minWidth: 250,
          maxWidth: 325,
        },
         {
          Header: 'Amount',
          accessor: 'metric',
          Cell: props => <span className='number'>{props.value}</span>,
           // minWidth: 130,
           // maxWidth: 130,
        },
        {
          Header: '%',
          accessor: 'percentage',
          Cell: props => <span className='number'>{props.value}</span>,
           // minWidth: 130,
           // maxWidth: 130,
        },

      ]

    return (
       <div className="outputholder">
       <h3>Sources and Uses</h3>
         <div className="multiple-table-holder">
          <div className="single-table-holder">
              <ReactTable
              data={usesData}
              columns={usesColumns}
              showPagination={false}
              defaultPageSize={9}
            />
            </div>
              <div className="single-table-holder">
              <ReactTable
              data={sourcesData}
              columns={sourcesColumns}
              showPagination={false}
              defaultPageSize={9}
            />
          </div>
          </div>
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }}, )(SourcesAndUses)



      //   const sourcesAndUsesData = [{
      //     uses_label: 'Purchase Target Equity',
      //     uses_metric: this.props.outputsData ? this.props.outputsData.impliedTargetEquityValue : 0 ,
      //     uses_percentage: "",
      //   }
      // ]
