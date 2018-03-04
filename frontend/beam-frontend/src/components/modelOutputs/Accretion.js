import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'

class Accretion extends React.Component {

  render() {
        let data = this.props.outputsData
            const accretionData = [{
              label: `${data? this.props.outputsData.acquirorCodename : 'Acquiror' } FFO / AFFO Per Share`,
              FFOMetric: data? this.props.outputsData.acquirorFFOPerShareValueYear1 : 0,
              AFFOMetric: data? this.props.outputsData.acquirorAFFOPerShareValueYear1 : 0,
            }, {
              label: `${data? this.props.outputsData.acquirorCodename : 'Acquiror' } Shares and Units`,
              FFOMetric: data? this.props.outputsData.acquirorShares : 0,
              AFFOMetric: data? this.props.outputsData.acquirorShares : 0,
            },
            {
              label: `${data? this.props.outputsData.acquirorCodename : 'Acquiror' } Total Cash Flow`,
              FFOMetric: data? this.props.outputsData.acquirorShares * this.props.outputsData.acquirorFFOPerShareValueYear1: 0,
              AFFOMetric: data? this.props.outputsData.acquirorShares * this.props.outputsData.acquirorAFFOPerShareValueYear1: 0
            }, {
            label: `${data? this.props.outputsData.targetCodename : 'Target' } Per Share Value`,
            FFOMetric: data? this.props.outputsData.targetFFOPerShareValueYear1 : 0,
            AFFOMetric: data? this.props.outputsData.targetAFFOPerShareValueYear1 : 0,
          }, {
            label: `${data? this.props.outputsData.targetCodename : 'Target' } Shares`,
            FFOMetric: data? this.props.outputsData.targetShares : 0,
            AFFOMetric: data? this.props.outputsData.targetShares : 0
          },
          {
            label: `${data? this.props.outputsData.targetCodename : 'Target' } Total Cash Flow`,
            FFOMetric: data? this.props.outputsData.targetShares * this.props.outputsData.targetFFOPerShareValueYear1: 0,
            AFFOMetric: data? this.props.outputsData.targetShares * this.props.outputsData.targetAFFOPerShareValueYear1: 0
          },{
            label: "Transaction Adjustments"
          }, {
            label: "G&A Synergies / (Expense)",
            FFOMetric: data?
            this.props.outputsData.synergiesValue : 0,
            AFFOMetric: data?
            this.props.outputsData.synergiesValue : 0,
          },{
            label: "Cash Interest Savings",
            FFOMetric: data?
            this.props.outputsData.InterestSavingsValue : 0,
            AFFOMetric: data?
            this.props.outputsData.InterestSavingsValue : 0,
          },{
            label: "Loss Of Interest Income on Cash Used",
            FFOMetric: data?
            this.props.outputsData.cashInterestLostValue : 0,
            AFFOMetric: data?
            this.props.outputsData.cashInterestLostValue : 0,
          },{
            label: "Cash Interest Expense on New Financings",
            FFOMetric: data?
            this.props.outputsData.TotalNewInterestExpense : 0,
            AFFOMetric: data?
            this.props.outputsData.TotalNewInterestExpense : 0,
          },
          {
            label: "Total Adjustments",
            FFOMetric: data?
            this.props.outputsData.totalCashFlowAdjustments : 0,
            AFFOMetric: data?
            this.props.outputsData.totalCashFlowAdjustments : 0,
          }, {
          }, {
            label: "Pro Forma FFO / AFFO",
            FFOMetric: data?
            this.props.outputsData.ProFormaFFOYear1 : 0,
            AFFOMetric: data?
            this.props.outputsData.ProFormaAFFOYear1 : 0,
          },{
            label: "Pro Forma Shares",
            FFOMetric: data?
            this.props.outputsData.ProFormaShares : 0,
            AFFOMetric: data?
            this.props.outputsData.ProFormaShares : 0,
          }, {
            label: "Pro Forma FFO / AFFO Per Share",
            FFOMetric: data?
            this.props.outputsData.ProFormaFFOYear1PerShare : 0,
            AFFOMetric: data?
            this.props.outputsData.ProFormaAFFOYear1PerShare : 0,
          }

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
