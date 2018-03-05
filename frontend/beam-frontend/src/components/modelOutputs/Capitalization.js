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
    target:
      <NumberFormat value={data ? data.targetShares * data.targetCurrentPrice : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    adjustment: "",
    proForma:
      <NumberFormat value={data ? data.ProFormaShares * data.acquirorCurrentPrice : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  }, {
    label: 'Total Debt',
    acquiror:
      <NumberFormat value={data ? data.acquirorTotalDebtValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    target:
      <NumberFormat value={data ? data.targetTotalDebtValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    adjustment:
      <NumberFormat value={data ? data.netChangeInDebtValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    proForma:
      <NumberFormat value={data ? data.ProFormaTotalDebtValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
}, {
  label: 'Less Cash and Equivalents',
  acquiror:
    <NumberFormat value={data ? -Math.abs(data.acquirorCashValue) : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  target:
    <NumberFormat value={data ? -Math.abs(data.targetCashValue) : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  adjustment:
    <NumberFormat value={data ? data.usedCashValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  proForma:
    <NumberFormat value={data ? -Math.abs(data.ProFormaCashValue): 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
},{
  label: 'Net Debt',
  acquiror:
    <NumberFormat value={data ? data.acquirorTotalDebtValue - Math.abs(data.acquirorCashValue) : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  target:
    <NumberFormat value={data ? data.targetTotalDebtValue - Math.abs(data.targetCashValue) : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  adjustment:
    <NumberFormat value={data? data.netChangeInDebtValue + data.usedCashValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  proForma:
    <NumberFormat value={data ? data.ProFormaNetDebtValue  : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
},{
  label: 'Preferred Equity',
  acquiror:
    <NumberFormat value={data ? data.acquirorPreferredValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  target:
    <NumberFormat value={data ? data.targetPreferredValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  adjustment:
    <NumberFormat value={data ? data.netChangeInPreferredValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  proForma:
    <NumberFormat value={data ? data.ProFormaTotalPreferredValue : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
    decimalSeparator={"."}
    decimalScale={1}
    fixedDecimalScale={true} />,
  leverageNeutralAdjustment: "0",
  proFormaLN: "0"
}, {
    label: 'Implied Total Enterprise Value',
    acquiror:
      <NumberFormat value={data ? data.acquirorCurrentTEV : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    target:
      <NumberFormat value={data ? data.targetCurrentTEV : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    adjustment: " ",
    proForma:
      <NumberFormat value={data ? data.ProFormaTEV : 0} displayType={'text'} thousandSeparator={true} prefix={'$'}
      decimalSeparator={"."}
      decimalScale={1}
      fixedDecimalScale={true} />,
    leverageNeutralAdjustment: "0",
    proFormaLN: "0"
  },
  {},
  {
      label: 'Net Debt / TEV',
      acquiror:
        <NumberFormat
        value={data ? data.acquirorNDtoTEV *100 : "NA"}
        displayType={'text'}
        suffix={"%"}
        decimalScale={1}
        fixedDecimalScale={true}
        />,
      target:
        <NumberFormat
        value={data ? data.targetNDtoTEV *100 : "NA"}
        displayType={'text'}
        suffix={"%"}
        decimalScale={1}
        fixedDecimalScale={true}
        />,
      adjustment: "",
      proForma:
        <NumberFormat
        value={data ? data.ProFormaNDtoTEV *100 : "NA"}
        displayType={'text'}
        suffix={"%"}
        decimalScale={1}
        fixedDecimalScale={true}
        />,
      leverageNeutralAdjustment: "0",
      proFormaLN: "0"
    },
    {
        label: 'Net Debt + Preferred / TEV',
        acquiror:
          <NumberFormat
          value={data ? data.acquirorNDPtoTEV *100 : "NA"}
          displayType={'text'}
          suffix={"%"}
          decimalScale={1}
          fixedDecimalScale={true}
          />,
        target:
          <NumberFormat
          value={data ? data.targetNDPtoTEV *100 : "NA"}
          displayType={'text'}
          suffix={"%"}
          decimalScale={1}
          fixedDecimalScale={true}
          />,
        adjustment: "",
        proForma:
          <NumberFormat
          value={data ? data.ProFormaNDPtoTEV *100 : "NA"}
          displayType={'text'}
          suffix={"%"}
          decimalScale={1}
          fixedDecimalScale={true}
          />,
        leverageNeutralAdjustment: "0",
        proFormaLN: "0"
      },  {
        label: 'Net Debt / EBITDA',
        acquiror:
            <NumberFormat
           value={data ? data.acquirorNDtoEBITDA : "NA"}
           displayType={'text'}
           suffix={"x"}
           decimalScale={1}
           fixedDecimalScale={true}
           />,
        target:
        <NumberFormat
           value={data ? data.targetNDtoEBITDA  : "NA"}
           displayType={'text'}
           suffix={"x"}
           decimalScale={1}
           fixedDecimalScale={true}
           />,
        adjustment: "",
        proForma:
          <NumberFormat
             value={data ? data.ProFormaNDtoEBITDA  : "NA"}
             displayType={'text'}
             suffix={"x"}
             decimalScale={1}
             fixedDecimalScale={true}
             />,
        leverageNeutralAdjustment: "0",
        proFormaLN: "0"
      },
      {
        label: 'Net Debt + Preferred / EBITDA',
        acquiror:
          <NumberFormat
             value={data ? data.acquirorNDPtoEBITDA  : "NA"}
             displayType={'text'}
             suffix={"x"}
             decimalScale={1}
             fixedDecimalScale={true}
             />,
        target:
          <NumberFormat
             value={data ? data.targetNDPtoEBITDA  : "NA"}
             displayType={'text'}
             suffix={"x"}
             decimalScale={1}
             fixedDecimalScale={true}
             />,
        adjustment: "",
        proForma:
          <NumberFormat
             value={data ? data.ProFormaNDPtoEBITDA  : "NA"}
             displayType={'text'}
             suffix={"x"}
             decimalScale={1}
             fixedDecimalScale={true}
             />,
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
