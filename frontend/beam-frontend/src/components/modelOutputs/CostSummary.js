import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import NumberFormat from 'react-number-format';


class CostSummary extends React.Component {

  render() {
      let data = this.props.outputsData
      let acquirorCosts = data.acquirorCompany === "A" ?
      data.companyALAOCostsInUse : data.companyBLAOCostsInUse

      let targetCosts = data.acquirorCompany === "A" ?
       data.companyBLAOCostsInUse :data.companyALAOCostsInUse

      const costSummaryData = [{
        label: `${data ? data.acquirorCodename : 'Acquiror' } Legal, Advisory, Other Costs`,
        metric:
          <NumberFormat value={data ? acquirorCosts : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
          decimalSeparator={"."}
          decimalScale={1}
          fixedDecimalScale={true} />,
        percentage:
          <NumberFormat value={data ? (acquirorCosts / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
          decimalSeparator={"."}
          decimalScale={1}
          fixedDecimalScale={true} />,
        },{
          label: `${data ? data.targetCodename : 'Target' } Legal, Advisory, Other Costs`,
          metric:
            <NumberFormat value={data ? targetCosts : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
            decimalSeparator={"."}
            decimalScale={1}
            fixedDecimalScale={true} />,
          percentage:
            <NumberFormat value={data ? (targetCosts / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
            decimalSeparator={"."}
            decimalScale={1}
            fixedDecimalScale={true} />,
          },{
            label: `Debt Assumption Costs`,
            metric:
              <NumberFormat value={data ? data.debtAssumptionCostsInUse : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            percentage:
              <NumberFormat value={data ? (data.debtAssumptionCostsInUse / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            },{
              label: `Debt Prepayment Costs`,
              metric:
                <NumberFormat value={data ? data.debtPrepaymentCostsInUse : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                decimalSeparator={"."}
                decimalScale={1}
                fixedDecimalScale={true} />,
              percentage:
                <NumberFormat value={data ? (data.debtPrepaymentCostsInUse / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
                decimalSeparator={"."}
                decimalScale={1}
                fixedDecimalScale={true} />,
              },{
                label: `Swap Breakage Costs`,
                metric:
                  <NumberFormat value={data ? data.swapBreakageCostsInUse : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                percentage:
                  <NumberFormat value={data ? (data.swapBreakageCostsInUse / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
              },{
                label: `Debt Issuancee Costs`,
                metric:
                  <NumberFormat value={data ? data.debtIssuanceCostsInUse : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                percentage:
                  <NumberFormat value={data ? (data.debtIssuanceCostsInUse / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                },{
                label: `Bond Prepayment Costs`,
                metric:
                  <NumberFormat value={data ? data.bondPrepaymentCostsInUse : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                percentage:
                  <NumberFormat value={data ? (data.bondPrepaymentCostsInUse / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                },{
                label: `Transfer Taxes`,
                metric:
                  <NumberFormat value={data ? data.transferTaxesCostsInUse : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                percentage:
                  <NumberFormat value={data ? (data.transferTaxesCostsInUse / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                },{
                label: `Employee Costs`,
                metric:
                  <NumberFormat value={data ? data.employeeCostsInUse : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                percentage:
                  <NumberFormat value={data ? (data.employeeCostsInUse / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                },{
                label: `Other Costs`,
                metric:
                  <NumberFormat value={data ? data.otherCostsInUse : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                percentage:
                  <NumberFormat value={data ? (data.otherCostsInUse / data.CostsInUse) * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                }, {
                label: `Total Transaction Costs`,
                metric:
                  <NumberFormat value={data ? data.CostsInUse : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                  decimalSeparator={"."}
                  decimalScale={1}
                  fixedDecimalScale={true} />,
                percentage:
                <NumberFormat value={data ? 1 * 100 : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
                decimalSeparator={"."}
                decimalScale={1}
                fixedDecimalScale={true} />,
                },
        ]

      const dataInUse = costSummaryData.filter(item => item.metric.props.value !== 0 )

      const costSummaryColumns = [{
        Header: '',
        accessor: 'label',
        minWidth: 250,
        maxWidth: 325,
      }, {
        Header: 'Amount',
        accessor: 'metric',
        Cell: props => <span className='number'>{props.value}</span>,
         minWidth: 130,
         maxWidth: 130,
         className: 'cell-data'
      },
      {
        Header: '% of Total',
        accessor: 'percentage',
        Cell: props => <span className='number'>{props.value}</span>,
         minWidth: 130,
         maxWidth: 130,
         className: 'cell-data'
      },

    ]



console.log(dataInUse)
    return (
       <div className="outputholder">
          <div className="single-table-holder">
          <h3>Transaction Cost Summary</h3>
            <ReactTable
            data={dataInUse}
            columns={costSummaryColumns}
            showPagination={false}
            minRows={1}
            />
          </div>
       </div>
    )
  }
}


export default connect (state => {return {outputsData: state.outputsData }},)(CostSummary)
