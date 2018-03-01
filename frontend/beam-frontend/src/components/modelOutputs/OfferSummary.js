import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import { handleCalculateOutputs } from '../../actions'
// import 'react-table/react-table.css'


class OfferSummary extends React.Component {

state = {
  targetCurrentPrice: "",
  acquirorCurrentPrice: "",
  impliedOffer: "",
  premiumToCurrent: "",
}

 componentDidMount() {
   this.props.handleCalculateOutputs(this.props.modelData)
 }




  render() {
      const offerSummaryData = [{
        label: 'Offer Per Share',
        metric: this.props.outputsData ? this.props.outputsData.impliedOffer : 0 ,
      }, {

      },
      {
        label: 'Premium / (Discount) To Current',
        metric: this.props.outputsData ? this.props.outputsData.premiumToCurrent : 0,
      },{
        label: 'Cap Rate',
        metric:  this.props.outputsData ? this.props.outputsData.impliedCapRate : "NA",
      }, {
        label: 'FFO Multiple',
        metric: this.props.outputsData ? this.props.outputsData.FFOMultiple_Year1 : "NA",
      }, {
        label: 'AFFO Multiple',
        metric: this.props.outputsData ? this.props.outputsData.AFFOMultiple_Year1 : "NA",
      },  {
        label: 'EBITDA Multiple',
        metric: this.props.outputsData ? this.props.outputsData.EBITDAMultiple_Year1 : "NA",
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
        </div>
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }}, { handleCalculateOutputs })(OfferSummary)

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
