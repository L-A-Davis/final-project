import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'

class Capitalization extends React.Component {

  render() {
  const capitalizationData = [{
    label: `Price as of [toCome] Date`,
    acquiror: this.props.outputsData ? this.props.outputsData.acquirorFFOPerShareValueYear1 : 0,
    target: "0",
    adjustment: "0",
    proForma: "0",
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  }, {
    label: `Shares and Units`,
    acquiror: this.props.outputsData ? this.props.outputsData.acquirorShares : 0,
    target: this.props.outputsData ? this.props.outputsData.targetShares : 0,
    adjustment: "0",
    proForma: "0",
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  },
  {
    label: 'Implied Total Equity',
    acquiror: this.props.outputsData ? this.props.outputsData.acquirorShares : 0,
    target: "0",
    adjustment: "0",
    proForma: "0",
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  }, {
    label: 'Total Debt',
    acquiror: this.props.outputsData ? this.props.outputsData.acquirorShares : 0,
    target: "0",
    adjustment: "0",
    proForma: "0",
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
}, {
  label: 'Less Cash and Equivalents [negative]',
  acquiror: this.props.outputsData ? this.props.outputsData.acquirorShares : 0,
  target: "0",
  adjustment: "0",
  proForma: "0",
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
},{
  label: 'Net Debt',
  acquiror: this.props.outputsData ? this.props.outputsData.acquirorShares : 0,
  target: "0",
  adjustment: "0",
  proForma: "0",
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
},{
  label: 'Preferred Equity',
  acquiror: this.props.outputsData ? this.props.outputsData.acquirorShares : 0,
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
    Header:  `${this.props.outputsData ? this.props.outputsData.acquirorCodename : 'Acquiror' }`,
    accessor: 'acquiror',
    Cell: props => <span className='number'>{props.value}</span>,
     // minWidth: 130,
     // maxWidth: 130,
  },{
    Header:  `${this.props.outputsData ? this.props.outputsData.targetCodename : 'Target' }`,
    accessor: 'target',
    Cell: props => <span className='number'>{props.value}</span>,
     // minWidth: 130,
     // maxWidth: 130,
  }
]

    return (
       <div className="outputholder">
        <h4>Capitalization</h4>
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
