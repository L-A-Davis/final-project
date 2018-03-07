import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import NumberFormat from 'react-number-format';
// import { FormattedNumber } from 'react-intl'

class OfferSummary extends React.Component {


  render() {
      const offerSummaryData = [{
        label: 'Offer Per Share',
        metric:
        <NumberFormat value={this.props.outputsData ? this.props.outputsData.impliedOffer : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
        decimalSeparator={"."}
        decimalScale={2}
        fixedDecimalScale={true} />,
        type: 'per_share'
      }, {

      },
      {
        label: 'Premium / (Discount) To Current',
        metric:
        <NumberFormat
        value={
        this.props.outputsData ?
        Math.round(this.props.outputsData.premiumToCurrent * 100) / 100 * 100 : 0} displayType={'text'}
        suffix={"%"}
        decimalScale={1}
        fixedDecimalScale={true}
        />,
        type: "percent"
      },{
        label: 'Cap Rate',
        metric:
          <NumberFormat
          value={this.props.outputsData ?  this.props.outputsData.impliedCapRate*100 : "NA"}
          displayType={'text'}
          suffix={"%"}
          decimalScale={1}
          fixedDecimalScale={true}
          />,
        type: "percent"
      }, {
        label: 'FFO Multiple',
        metric:
           <NumberFormat
          value={this.props.outputsData ? this.props.outputsData.FFOMultiple_Year1 : "NA"}
          displayType={'text'}
          suffix={"x"}
          decimalScale={1}
          fixedDecimalScale={true}
          />,
        type: "multiple"
      }, {
        label: 'AFFO Multiple',
        metric:
        <NumberFormat
           value={this.props.outputsData ? this.props.outputsData.AFFOMultiple_Year1 : "NA"}
           displayType={'text'}
           suffix={"x"}
           decimalScale={1}
           fixedDecimalScale={true}
           />,
        type: "multiple"
      },  {
        label: 'EBITDA Multiple',
        metric:
          <NumberFormat
           value={this.props.outputsData ? this.props.outputsData.EBITDAMultiple_Year1 : "NA"}
           displayType={'text'}
           suffix={"x"}
           decimalScale={1}
           fixedDecimalScale={true}
           />,
        type: "multiple"
      }
        ]

      const offerSummaryColumns = [{
        Header: '',
        accessor: 'label',
        minWidth: 150,
        // maxWidth: 325,
      }, {
        Header: 'Metric',
        accessor: 'metric',
        Cell: props => <span className='number'>{props.value}</span>,
         // minWidth: 130,
         // maxWidth: 130,
         className: 'cell-data'
      },]

      const exchangeRatioData = [{
        label: '% Stock',
        metric:
          <NumberFormat
          value={
          this.props.outputsData ? this.props.outputsData.stockPercentage*100 : 0} displayType={'text'}
          suffix={"%"}
          decimalScale={0}
          fixedDecimalScale={true}
          />,
        type: "percent"
      },
      {
        label: '% Cash',
        metric:
        <NumberFormat
          value={
          this.props.outputsData ? Math.round(this.props.outputsData.cashPercentage * 100) / 100 * 100 : 0} displayType={'text'}
          suffix={"%"}
          decimalScale={0}
          fixedDecimalScale={true}
          />,
        type: 'percent'
      },{
      },
      {
        label: 'All-In Exchange Ratio',
        metric:
          <NumberFormat
           value={this.props.outputsData ? this.props.outputsData.allInRatio : "NA"}
           displayType={'text'}
           suffix={"x"}
           decimalScale={3}
           fixedDecimalScale={true}
           />,
        type: "multiple"
      }, {
        label: 'Cash Per Share',
        metric:
          <NumberFormat value={this.props.outputsData ? this.props.outputsData.cashPerShare : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
          decimalSeparator={"."}
          decimalScale={2}
          fixedDecimalScale={true} />,
        type: "per_share"
      }, {
        label: 'Stock Per Share',
        metric:
          <NumberFormat value={this.props.outputsData ? this.props.outputsData.stockPerShare : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
          decimalSeparator={"."}
          decimalScale={2}
          fixedDecimalScale={true} />,
        type: "per_share"
      },  {
        label: 'Stock Exchange Ratio',
        metric:
          <NumberFormat
           value={this.props.outputsData ? this.props.outputsData.stockExchangeRatio : "NA"}
           displayType={'text'}
           suffix={"x"}
           decimalScale={3}
           fixedDecimalScale={true}
           />,
        type: "per_share"
      }
        ]


      const exchangeRatioColumns = [{
        Header: '',
        accessor: 'label',
        // minWidth: 150,
        // maxWidth: 325,
      }, {
        Header: 'Metric',
        accessor: 'metric',
        Cell: props => <span className='number'>{props.value}</span>,
         // minWidth: 130,
         // maxWidth: 130,
         className: "cell-data"
      },]

    return (
       <div className="outputholder" id="offer-summary">
        <div className="multiple-table-holder">
          <div className="single-table-holder">
          <h3>Offer Summary</h3>
            <ReactTable
            data={offerSummaryData}
            columns={offerSummaryColumns}
            showPagination={false}
            defaultPageSize={7}
            className="-highlight"
            />
          </div>

          <div className="single-table-holder">
          <h3>Exchange Ratio Summary</h3>
            <ReactTable
            data={exchangeRatioData}
            columns={exchangeRatioColumns}
            showPagination={false}
            defaultPageSize={7}
            className="-highlight"
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
