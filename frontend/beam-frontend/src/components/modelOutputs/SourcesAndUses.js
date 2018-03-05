import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import NumberFormat from 'react-number-format';

class SourcesAndUses extends React.Component {

  // impliedTargetEquityValue
  // assumedDebtAndPref,
  // repaidDebtAndPref,
  // usedCash

  handleAssumedItems = (array, dataInput) => {
    let tableInfo =
     (array && array.length > 1) ?
      array.map(item => ({
      label: `Assume ${item.item_name}`,
      metric: item.amount ?
            <NumberFormat
            value={item.amount} displayType={'text'}
            thousandSeparator={true} prefix={'$'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} /> : '',
    percentage: item.amount ?
          <NumberFormat
          value={(item.amount / dataInput * 100 || "")} displayType={'text'}
          thousandSeparator={true} suffix={'%'}
          decimalSeparator={"."} decimalScale={1}
          fixedDecimalScale={true} /> : '',
    })) : tableInfo = []
    return tableInfo
  }

  handleRepaidItems = (array, dataInput) => {
    let tableInfo =
    (array && array.length > 1) ?
    array.map(item => ({
      label: `Repay ${item.item_name}`,
      metric: item.amount ?
            <NumberFormat
            value={item.amount} displayType={'text'}
            thousandSeparator={true} prefix={'$'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} /> : "",
      percentage: item.amount ?
            <NumberFormat
            value={(item.amount / dataInput * 100 || "")} displayType={'text'}
            thousandSeparator={true} suffix={'%'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} /> : '',
    })) : tableInfo = []
    return tableInfo
  }




  handleUsedCash = (array, dataInput) => {
    let tableInfo =
    (array && array.length > 1) ?
    array.map(item => ({
      label: `Use of ${item.item_name}`,
      metric: item.amount ?
            <NumberFormat
            value={item.amount} displayType={'text'}
            thousandSeparator={true} prefix={'$'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} /> : "",
      percentage: item.amount ?
            <NumberFormat
            value={(item.amount / dataInput * 100 || "")} displayType={'text'}
            thousandSeparator={true} suffix={'%'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} /> : '',
    })) : tableInfo = []
    return tableInfo
  }

  handleNewFinancing = (array, dataInput) => {
    let tableInfo =
    (array && array.length > 1) ?
    array.map(item => ({
      label: `Issuance of new ${item.item_type}`,
      metric: item.amount ?
            <NumberFormat
            value={item.amount} displayType={'text'}
            thousandSeparator={true} prefix={'$'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} /> : '',
      percentage: item.amount ?
            <NumberFormat
            value={(item.amount / dataInput * 100 || "")} displayType={'text'}
            thousandSeparator={true} suffix={'%'}
            decimalSeparator={"."} decimalScale={1}
            fixedDecimalScale={true} /> : '',
    })) : tableInfo = []
    return tableInfo
  }




  handleTotalUsesCalc = () =>{

  }

  render() {
        let data = this.props.outputsData
        const usesData =  data ?
        [{
            label: `Purchase ${this.props.outputsData ? this.props.outputsData.targetCodename : 'Target' } Equity`,
            metric: data.impliedTargetEquityValue ?
            <NumberFormat
              value={data.impliedTargetEquityValue} displayType={'text'}
              thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."} decimalScale={1}
              fixedDecimalScale={true} /> : "",
            percentage: data.impliedTargetEquityValue ?
                  <NumberFormat
                  value={(data.impliedTargetEquityValue / data.TotalUses * 100 || "")} displayType={'text'}
                  thousandSeparator={true} suffix={'%'}
                  decimalSeparator={"."} decimalScale={1}
                  fixedDecimalScale={true} /> : '',
          }].concat(this.handleAssumedItems(data.assumedDebtAndPref, data.TotalUses)).concat(this.handleRepaidItems(data.repaidDebtAndPref, data.TotalUses)).concat([{
              label: 'Transaction Costs',
              metric: data.CostsInUse ?
                <NumberFormat
                value={data.CostsInUse} displayType={'text'}
                thousandSeparator={true} prefix={'$'}
                decimalSeparator={"."} decimalScale={1}
                fixedDecimalScale={true} /> : "",
              percentage: data.CostsInUse ?
                    <NumberFormat
                    value={(data.CostsInUse / data.TotalUses * 100 || "")} displayType={'text'}
                    thousandSeparator={true} suffix={'%'}
                    decimalSeparator={"."} decimalScale={1}
                    fixedDecimalScale={true} /> : ''
                }
              ,{
              label: 'Total Uses',
              metric: data.TotalUses?
              <NumberFormat
              value={data.TotalUses} displayType={'text'}
              thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."} decimalScale={1}
              fixedDecimalScale={true} /> : ""
            }]) : [{}]

        const sourcesData = data ?   [{
              label:
              `Issue ${this.props.outputsData ? this.props.outputsData.acquirorCodename : 'Acquiror' } Equity`,
              metric: data.AcquirorEquityIssued ?
                <NumberFormat
                value={data.AcquirorEquityIssued} displayType={'text'}
                thousandSeparator={true} prefix={'$'}
                decimalSeparator={"."} decimalScale={1}
                fixedDecimalScale={true} /> : "",
            percentage: data.AcquirorEquityIssued ?
                  <NumberFormat
                  value={(data.AcquirorEquityIssued / data.TotalSources * 100 || "")} displayType={'text'}
                  thousandSeparator={true} suffix={'%'}
                  decimalSeparator={"."} decimalScale={1}
                  fixedDecimalScale={true} /> : ''
            }].concat(this.handleAssumedItems(data.assumedDebtAndPref, data. TotalSources)).concat(this.handleUsedCash(data.usedCash, data. TotalSources)).concat(this.handleNewFinancing(data.newFinancingsInUseNoPlug, data.TotalSources)).concat([{
                    label: 'Additional New Financing',
                    metric: data.PlugFinancing ?
                      <NumberFormat
                      value={data.PlugFinancing} displayType={'text'}
                      thousandSeparator={true} prefix={'$'}
                      decimalSeparator={"."} decimalScale={1}
                      fixedDecimalScale={true} /> : "",
                    percentage: data.PlugFinancing ?
                          <NumberFormat
                          value={(data.PlugFinancing / data.TotalSources * 100 || "")} displayType={'text'}
                          thousandSeparator={true} suffix={'%'}
                          decimalSeparator={"."} decimalScale={1}
                          fixedDecimalScale={true} /> : ''}
                    ,{
                    label: 'Total Sources',
                    metric: data.TotalSources ?
                    <NumberFormat
                    value={data.TotalSources} displayType={'text'}
                    thousandSeparator={true} prefix={'$'}
                    decimalSeparator={"."} decimalScale={1}
                    fixedDecimalScale={true} /> : ""
                  }]) : [{}]

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
              minRows={8}
            />
            </div>
              <div className="single-table-holder">
              <ReactTable
              data={sourcesData}
              columns={sourcesColumns}
              showPagination={false}
              minRows={8}
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
      //     uses_metric: data ? data.impliedTargetEquityValue : 0 ,
      //     uses_percentage: "",
      //   }
      // ]

      //
