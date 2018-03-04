import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'

class Capitalization extends React.Component {

  render() {
    let data = this.props.outputsData
  const capitalizationData = [{
    label: `Price as of [toCome] Date`,
    acquiror: data ? data.acquirorCurrentPrice : 0,
    target: data ? data.targetCurrentPrice : 0,
    adjustment: "",
    proForma: data ? data.acquirorCurrentPrice : 0,
    leverageNeutralAdjustment: "",
    proFormaLN: "0"
  }, {
    label: `Shares and Units`,
    acquiror: data ? data.acquirorShares : 0,
    target: data ? data.targetShares : 0,
    adjustment: data? data.ProFormaShares - data.targetShares - data.acquirorShares : 0,
    proForma: data ? data.ProFormaShares : 0,
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  },
  {
    label: 'Implied Total Equity',
    acquiror: data ? data.acquirorShares * data.acquirorCurrentPrice : 0,
    target: data ? data.targetShares * data.targetCurrentPrice : 0,
    adjustment: "",
    proForma: data ? data.ProFormaShares * data.acquirorCurrentPrice : 0,
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  }, {
    label: 'Total Debt',
    acquiror: data ? data.acquirorShares : 0,
    target: "0",
    adjustment: "0",
    proForma: "0",
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
}, {
  label: 'Less Cash and Equivalents [negative]',
  acquiror: data ? data.acquirorShares : 0,
  target: "0",
  adjustment: "0",
  proForma: "0",
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
},{
  label: 'Net Debt',
  acquiror: data ? data.acquirorShares : 0,
  target: "0",
  adjustment: "0",
  proForma: "0",
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
},{
  label: 'Preferred Equity',
  acquiror: data ? data.acquirorShares : 0,
  target: "0",
  adjustment: "0",
  proForma: "0",
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
}, {
    label: 'Implied Total Enterprise Value',
    acquiror: '0',
    target: "0",
    adjustment: "0",
    proForma: "0",
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  },
  {},
  {
      label: 'Net Debt / TEV',
      acquiror: "0",
      target: "0",
      adjustment: "0",
      proForma: "0",
      leverageNeutralAdjustment: "0",
      proFormaLN: "0"
    },
    {
        label: 'Net Debt + Preferred / TEV',
        acquiror: "0",
        target: "0",
        adjustment: "0",
        proForma: "0",
        leverageNeutralAdjustment: "0",
        proFormaLN: "0"
      },

]
  const capitalizationColumns = [{
    Header: '',
    accessor: 'label',
    minWidth: 250,
    maxWidth: 325,
  }, {
    Header:  `${data ? data.acquirorCodename : 'Acquiror' }`,
    accessor: 'acquiror',
    Cell: props => <span className='number'>{props.value}</span>,
     // minWidth: 130,
     // maxWidth: 130,
  },{
    Header:  `${data ? data.targetCodename : 'Target' }`,
    accessor: 'target',
    Cell: props => <span className='number'>{props.value}</span>,
     // minWidth: 130,
     // maxWidth: 130,
  }, {
    Header:  `Adjustments`,
    accessor: 'adjustment',
    Cell: props => <span className='number'>{props.value}</span>,
     // minWidth: 130,
     // maxWidth: 130,
  }, {
    Header:  `Pro Forma`,
    accessor: 'proForma',
    Cell: props => <span className='number'>{props.value}</span>,
     // minWidth: 130,
     // maxWidth: 130,
 }
]

    return (
       <div className="outputholder">
        <h3>Capitalization</h3>
        <ReactTable
        data={capitalizationData}
        columns={capitalizationColumns}
        showPagination={false}
        defaultPageSize={15}
        />
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData  }}, )(Capitalization)
