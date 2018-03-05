import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import NumberFormat from 'react-number-format';

class Capitalization extends React.Component {

  render() {
    let data = this.props.outputsData
  const capitalizationData = [{
    label: `Price as of [toCome] Date`,
    acquiror:
      <NumberFormat value={data? data.acquirorCurrentPrice : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={2}
      fixedDecimalScale={true} />,
    target:
      <NumberFormat value={data? data.targetCurrentPrice : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={2}
      fixedDecimalScale={true} />,
    adjustment: "",
    proForma:
      <NumberFormat value={data? data.acquirorCurrentPrice : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={2}
      fixedDecimalScale={true} />,
    leverageNeutralAdjustment: "",
    proFormaLN: "0"
  }, {
    label: `Shares and Units`,
    acquiror:
      <NumberFormat value={data? data.acquirorShares : 0} displayType={'text'} thousandSeparator={true}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    target:
      <NumberFormat value={data? data.targetShares : 0} displayType={'text'} thousandSeparator={true}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    adjustment:
      <NumberFormat value={data? data.ProFormaShares - data.targetShares - data.acquirorShares : 0} displayType={'text'} thousandSeparator={true}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    proForma:
      <NumberFormat value={data ? data.ProFormaShares : 0} displayType={'text'} thousandSeparator={true}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  },
  {
    label: 'Implied Total Equity',
    acquiror:
      <NumberFormat value={data ? data.acquirorShares * data.acquirorCurrentPrice : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    target: data ? data.targetShares * data.targetCurrentPrice : 0,
    adjustment: "",
    proForma: data ? data.ProFormaShares * data.acquirorCurrentPrice : 0,
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  }, {
    label: 'Total Debt',
    acquiror: data ? data.acquirorTotalDebtValue : 0,
    target: data ? data.targetTotalDebtValue : 0,
    adjustment:  data ? data.netChangeInDebtValue : 0,
    proForma: data ? data.ProFormaTotalDebtValue : 0,
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
}, {
  label: 'Less Cash and Equivalents [negative]',
  acquiror: data ? -Math.abs(data.acquirorCashValue) : 0,
  target: data ? -Math.abs(data.targetCashValue) : 0,
  adjustment: data ? data.usedCashValue : 0,
  proForma: data ? -Math.abs(data.ProFormaCashValue) : 0,
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
},{
  label: 'Net Debt',
  acquiror: data ? data.acquirorTotalDebtValue - Math.abs(data.acquirorCashValue) : 0,
  target:  data ? data.targetTotalDebtValue - Math.abs(data.targetCashValue) : 0,
  adjustment: data? data.netChangeInDebtValue + data.usedCashValue : 0,
  proForma: data ? data.ProFormaNetDebtValue  : 0,
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
},{
  label: 'Preferred Equity',
  acquiror: data ? data.acquirorPreferredValue : 0,
  target: data ? data.targetPreferredValue : 0,
  adjustment: data ? data.netChangeInPreferredValue : 0,
  proForma: data ? data.ProFormaTotalPreferredValue : 0,
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
}, {
    label: 'Implied Total Enterprise Value',
    acquiror: data ? data.acquirorCurrentTEV : 0,
    target: data ? data.targetCurrentTEV : 0,
    adjustment: " ",
    proForma: data ? data.ProFormaTEV : 0,
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  },
  {},
  {
      label: 'Net Debt / TEV',
      acquiror: data ? data.acquirorNDtoTEV : 0,
      target: data ? data.targetNDtoTEV : 0,
      adjustment: "",
      proForma: data ? data.ProFormaNDtoTEV : 0,
      leverageNeutralAdjustment: "0",
      proFormaLN: "0"
    },
    {
        label: 'Net Debt + Preferred / TEV',
        acquiror: data ? data.acquirorNDPtoTEV : 0,
        target: data ? data.targetNDPtoTEV : 0,
        adjustment: "",
        proForma: data ? data.ProFormaNDPtoTEV : 0,
        leverageNeutralAdjustment: "0",
        proFormaLN: "0"
      },  {
        label: 'Net Debt / EBITDA',
        acquiror: data ? data.acquirorNDtoEBITDA : 0,
        target: data ? data.targetNDtoEBITDA : 0,
        adjustment: "",
        proForma: data? data.ProFormaNDtoEBITDA : 0,
        leverageNeutralAdjustment: "0",
        proFormaLN: "0"
      },
      {
        label: 'Net Debt + Preferred / EBITDA',
        acquiror: data ? data.acquirorNDPtoEBITDA : 0,
        target: data ? data.targetNDPtoEBITDA : 0,
        adjustment: "",
        proForma: data ? data.ProFormaNDPtoEBITDA : 0,
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
        minRows={12}
        />
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData  }}, )(Capitalization)
