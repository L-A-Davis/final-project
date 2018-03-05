import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import NumberFormat from 'react-number-format';

class Accretion extends React.Component {

  render() {
        let data = this.props.outputsData
            const accretionData = [{
              label: `${data? data.acquirorCodename : 'Acquiror' } FFO / AFFO Per Share`,
              FFOMetric:
                <NumberFormat value={data ? data.acquirorFFOPerShareValueYear1 : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                decimalSeparator={"."}
                decimalScale={2}
                fixedDecimalScale={true} />,
              AFFOMetric:
                <NumberFormat value={data ? data.acquirorAFFOPerShareValueYear1 : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                decimalSeparator={"."}
                decimalScale={2}
                fixedDecimalScale={true} />,
            }, {
              label: `${data? data.acquirorCodename : 'Acquiror' } Shares and Units`,
              FFOMetric:
                <NumberFormat value={data ? data.acquirorShares : 0} displayType={'text'} thousandSeparator={true}
                decimalSeparator={"."}
                decimalScale={1}
                fixedDecimalScale={true} />,

              AFFOMetric:
                <NumberFormat value={data ? data.acquirorShares  : 0} displayType={'text'} thousandSeparator={true}
                decimalSeparator={"."}
                decimalScale={1}
                fixedDecimalScale={true} />,
            },
            {
              label: `${data? data.acquirorCodename : 'Acquiror' } Total Cash Flow`,
              FFOMetric:
                <NumberFormat value={data? data.acquirorShares * data.acquirorFFOPerShareValueYear1: 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
                decimalSeparator={"."}
                decimalScale={1}
                fixedDecimalScale={true} />,
              AFFOMetric:
              <NumberFormat value={data? data.acquirorShares * data.acquirorAFFOPerShareValueYear1: 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            }, {
            label: `${data? data.targetCodename : 'Target' } Per Share Value`,
            FFOMetric:
              <NumberFormat value={data? data.targetFFOPerShareValueYear1 : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={2}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.targetAFFOPerShareValueYear1 : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={2}
              fixedDecimalScale={true} />,
          }, {
            label: `${data? data.targetCodename : 'Target' } Shares`,
            FFOMetric:
              <NumberFormat value={data? data.targetShares : 0} displayType={'text'} thousandSeparator={true}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.targetShares : 0} displayType={'text'} thousandSeparator={true}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />
          },
          {
            label: `${data? data.targetCodename : 'Target' } Total Cash Flow`,
            FFOMetric:
              <NumberFormat value={data? data.targetShares * data.targetFFOPerShareValueYear1: 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.targetShares * data.targetAFFOPerShareValueYear1: 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
          },{
            label: "Transaction Adjustments"
          }, {
            label: "G&A Synergies / (Expense)",
            FFOMetric:
              <NumberFormat value={data? data.synergiesValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.synergiesValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
          },{
            label: "Cash Interest Savings",
            FFOMetric:
              <NumberFormat value={data? data.InterestSavingsValue  : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.InterestSavingsValue  : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
          },{
            label: "Loss Of Interest Income on Cash Used",
            FFOMetric:
              <NumberFormat value={data? data.cashInterestLostValue  : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.cashInterestLostValue  : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
          },{
            label: "Cash Interest Expense on New Financings",
            FFOMetric:
              <NumberFormat value={data? data.TotalNewInterestExpense  : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.TotalNewInterestExpense  : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
          },
          {
            label: "Total Adjustments",
            FFOMetric:
              <NumberFormat value={data? data.totalCashFlowAdjustments : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.totalCashFlowAdjustments : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
          }, {
          }, {
            label: "Pro Forma FFO / AFFO",
            FFOMetric:
              <NumberFormat value={data? data.ProFormaFFOYear1 : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.ProFormaAFFOYear1 : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
          },{
            label: "Pro Forma Shares",
            FFOMetric:
              <NumberFormat value={data? data.ProFormaShares : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.ProFormaShares : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
          }, {
            label: "Pro Forma FFO / AFFO Per Share",
            FFOMetric:
              <NumberFormat value={data? data.ProFormaFFOYear1PerShare: 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={2}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.ProFormaAFFOYear1PerShare : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={2}
              fixedDecimalScale={true} />,
          }, {
            label: "Per Share Accretion / (Dilution) - $",
            FFOMetric:
              <NumberFormat value={data? data.FFOPerShareAccretion: 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={2}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? data.AFFOPerShareAccretion : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
              decimalSeparator={"."}
              decimalScale={2}
              fixedDecimalScale={true} />,
          }, {
            label: "Per Share Accretion / (Dilution) - %",
            FFOMetric:
              <NumberFormat value={data? data.FFOPerShareAccretionPercent * 100: 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
            AFFOMetric:
              <NumberFormat value={data? (data.AFFOPerShareAccretionPercent * 100) : 0} displayType={'text'} thousandSeparator={true} suffix={'%'}
              decimalSeparator={"."}
              decimalScale={1}
              fixedDecimalScale={true} />,
          },

          ]
            const accretionColumns = [{
              Header: '',
              accessor: 'label',
              minWidth: 250,
              maxWidth: 325,
            }, {
              Header: 'FFO',
              accessor: 'FFOMetric',
              Cell: props => <span className='number'>{props.value}</span>,
               // minWidth: 130,
               // maxWidth: 130,
            },
            {
              Header: 'AFFO',
              accessor: 'AFFOMetric',
              Cell: props => <span className='number'>{props.value}</span>,
               // minWidth: 130,
               // maxWidth: 130,
            },
          ]

    return (
       <div className="outputholder">
        <h3>Year 1 Accretion / (Dilution) Analysis</h3>
          <ReactTable
          data={accretionData}
          columns={accretionColumns}
          showPagination={false}
          minRows={7}
          />
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }}, )(Accretion)
