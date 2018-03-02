import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'


class OfferSummary extends React.Component {


  render() {
      const offerSummaryData = [{
        label: 'Offer Per Share',
        metric: this.props.outputsData ? this.props.outputsData.impliedOffer.toLocaleString('en-US',{style: 'currency', currency: 'USD' }) : 0 ,
        type: 'per_share'
      }, {

      },
      {
        label: 'Premium / (Discount) To Current',
        metric: this.props.outputsData ? this.props.outputsData.premiumToCurrent.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1}) : 0,
        type: "percent"
      },{
        label: 'Cap Rate',
        metric:  this.props.outputsData ? <FormattedNumber value={ this.props.outputsData.impliedCapRate} style="percent" /> : "NA",
        type: "percent"
      }, {
        label: 'FFO Multiple',
        metric: this.props.outputsData ? this.props.outputsData.FFOMultiple_Year1 : "NA",
        type: "multiple"
      }, {
        label: 'AFFO Multiple',
        metric: this.props.outputsData ? this.props.outputsData.AFFOMultiple_Year1 : "NA",
        type: "multiple"
      },  {
        label: 'EBITDA Multiple',
        metric: this.props.outputsData ? this.props.outputsData.EBITDAMultiple_Year1 : "NA",
        type: "multiple"
      }
        ]

      const offerSummaryColumns = [{
        Header: '',
        accessor: 'label',
        minWidth: 250,
        maxWidth: 325,
      }, {
        Header: 'Implied Metric',
        accessor: 'metric',
        Cell: props => <span className='number'>{props.value}</span>,
         minWidth: 130,
         maxWidth: 130,
      },]

      const exchangeRatioData = [{
        label: '% Stock',
        metric: this.props.outputsData ? this.props.outputsData.stockPercentage : "NA" ,
        type: "percent"
      },
      {
        label: '% Cash',
        metric: this.props.outputsData ? this.props.outputsData.cashPercentage : "NA",
        type: 'percent'
      },{
      },
      {
        label: 'All-In Exchange Ratio',
        metric:  this.props.outputsData ? this.props.outputsData.allInRatio : "NA",
        type: "multiple"
      }, {
        label: 'Cash Per Share',
        metric: this.props.outputsData ? this.props.outputsData.cashPerShare : "NA",
        type: "per_share"
      }, {
        label: 'Stock Per Share',
        metric: this.props.outputsData ? this.props.outputsData.stockPerShare : "NA",
        type: "per_share"
      },  {
        label: 'Stock Exchange Ratio',
        metric: this.props.outputsData ? this.props.outputsData.stockExchangeRatio : "NA",
        type: "per_share"
      }
        ]


      const exchangeRatioColumns = [{
        Header: '',
        accessor: 'label',
        minWidth: 250,
        maxWidth: 325,
      }, {
        Header: 'Implied Amount',
        accessor: 'metric',
        Cell: props => <span className='number'>{props.value}</span>,
         minWidth: 130,
         maxWidth: 130,
      },]

    return (
       <div className="outputholder">
        <div className="multiple-table-holder">
          <div className="single-table-holder">
          <h3>Offer Summary</h3>
            <ReactTable
            data={offerSummaryData}
            columns={offerSummaryColumns}
            showPagination={false}
            defaultPageSize={7}
            />
          </div>

          <div className="single-table-holder">
          <h3>Exchange Ratio Summary</h3>
            <ReactTable
            data={exchangeRatioData}
            columns={exchangeRatioColumns}
            showPagination={false}
            defaultPageSize={7}
            />
          </div>
        </div>
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }},)(OfferSummary)

//
// const columns = [{
//   Header: '',
//   accessor: 'label' // String-based value accessors!
// }, {
//   Header: 'Implied Metrics',
//   accessor: 'metric',
//   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
// }, {
//   id: 'friendName', // Required because our accessor is not a string
//   Header: 'Friend Name',
//   accessor: d => d.friend.name // Custom value accessors!
// }, {
//   Header: props => <span>Friend Age</span>, // Custom header components!
//   accessor: 'friend.age'
// }]
