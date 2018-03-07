import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import ReactHighcharts from 'react-highcharts';
import ReachHighmaps from 'react-highcharts/ReactHighmaps'
import ReactHighstock from 'react-highcharts/ReactHighstock'

class HistoricalTrading extends React.Component {

state = {
  config: null,
  config2: null,
  config3: null
}

handleConfigSetup = (title, seriesName, dataInput, colorInput, formatInput, deimcalsInput) => {
  return  {
    rangeSelector: {
      enabled: false },
    navigator: {
      enabled: false },
    scrollbar: {
      enabled: false},
title: {
    text: title},
xAxis: {
  dateTimeLabelFormats: {
    month: "%b '%y"},
  labels: {
    enabled: false},
  showEmpty: false,
  // visible: false
},
yAxis: {
  labels: {
    format: formatInput
  }},
series: [{
    name: seriesName,
    data: dataInput,
    tooltip: {
        valueDecimals: deimcalsInput
    },
    color: colorInput
}]
}
}

handleGetChart1Data = () => {
  const data = this.props.tradingData[0] ? this.props.tradingData[0] : []
  const dataInUse = data.length > 0 ? data.map(item => [item.date, item.close]) : [[0,0]]
  return dataInUse
}

handleStockPrice = (dataInUse) => {
  const stockprices1 = dataInUse.length > 0 ?
 dataInUse.map(item => item[1]) : [0]
 return stockprices1
}

handleGetDates = (dataInUse) => {
  const dates = dataInUse.length > 0 ? dataInUse.map(item => item[0]) : [0]
  return dates
}


handleGetChart2Data = () => {
  const data2 = this.props.tradingData[1] ? this.props.tradingData[1] : []
  const data2InUse = data2.length > 0 ? data2.map(item => [item.date, item.close]) : [[0,0]]
  return data2InUse
}

handleExchangeRatioCalc = (stockprices1, stockprices2, dates) => {
  let exchangeRatioHist = []

  if (this.props.modelData.basic_info_datum[0].acquiror) {
    for (let i = 0; i< stockprices1.length; i++){
      exchangeRatioHist.push(stockprices2[i] / stockprices1[i])
    }} else {
      for (let i = 0; i< stockprices1.length; i++){
        exchangeRatioHist.push(stockprices1[i] / stockprices2[i])
    }
  }
  let exchangeRatioWithDates = []
  for (let i = 0; i< dates.length; i++){
    exchangeRatioWithDates.push([dates[i], exchangeRatioHist[i]])
  }
  return exchangeRatioWithDates
}

componentDidMount() {
  let codename1 = this.props.modelData.basic_info_datum[0].codename
  let codename2 = this.props.modelData.basic_info_datum[1].codename
  let color1 = '#1c3151'
  let color2 = '#73757a'
  let color3 = '#0d58a6'
  let dollarFormat = '${value}'
  let exchangeFormat = '{value}x'
  let dollarDecimals = 2
  let exchangeDecimals = 1
  let dataInUse = this.handleGetChart1Data()
  let stockprices1 = this.handleStockPrice(dataInUse)
  let data2InUse = this.handleGetChart2Data()
  let stockprices2 = this.handleStockPrice(data2InUse)
  let dates = this.handleGetDates(dataInUse)
  let exchangeRatios = this.handleExchangeRatioCalc(stockprices1, stockprices2, dates)
  let config = this.handleConfigSetup(`${codename1} LTM Stock Price`, `${codename1}`, dataInUse, color1, dollarFormat, dollarDecimals)
  let config2 = this.handleConfigSetup(`${codename2} LTM Stock Price`, `${codename2}`, data2InUse, color2, dollarFormat, dollarDecimals)
  let config3 = this.handleConfigSetup(`LTM Exchange Ratio`, `Exchange Ratio`, exchangeRatios, color3, exchangeFormat, exchangeDecimals)
  this.setState ({
    config: config,
    config2: config2,
    config3: config3
  })
}

  render() {
    return (
       <div className="outputholder" id="trading">
       <h3>1 Year Trading</h3>
          {this.state.config &&
            <div className="single-table-holder">
              <ReactHighstock config={this.state.config}  ></ReactHighstock>
                  </div>
              }
            { this.state.config2 &&
              <div className="single-table-holder">
                <ReactHighstock config={this.state.config2} ></ReactHighstock>
            </div>
            }
            { this.state.config3 &&
              <div className="single-table-holder">
                <ReactHighstock config={this.state.config3} ></ReactHighstock>
            </div>
            }
       </div>
    )
  }
}


export default connect (state => {return {outputsData: state.outputsData, tradingData: state.tradingData, modelData: state.modelData }},)(HistoricalTrading)

//
//
//   const config = {
//     rangeSelector: {
//       enabled: false
// },
//     navigator: {
//       enabled: false
// },
//     scrollbar: {
//       enabled: false
// },
//
//
// title: {
//     text: `${this.props.modelData.basic_info_datum[0].codename} LTM Stock Price`
// },
//
// xAxis: {
//   dateTimeLabelFormats: {
//     month: "%b '%y"
//   },
//   labels: {
//     enabled: false
//   },
//   showEmpty: false,
//   // visible: false
// },
// yAxis: {
//   labels: {
//     format: '${value}'
//   }
// },
//
// series: [{
//     name: `${this.props.modelData.basic_info_datum[0].codename}`,
//     data: dataInUse,
//     tooltip: {
//         valueDecimals: 2
//     },
//     color: '#1c3151'
// }]
// }
//
//   const config2 = {
//     rangeSelector: {
//       enabled: false
// },
//     navigator: {
//       enabled: false
// },
//     scrollbar: {
//       enabled: false
// },
//
//
// title: {
//     text: `${this.props.modelData.basic_info_datum[1].codename} LTM Stock Price`
// },
//
// xAxis: {
//   dateTimeLabelFormats: {
//     month: "%b '%y"
//   },
//   labels: {
//     enabled: false
//   },
//   showEmpty: false,
//   // visible: false
// },
//
// yAxis: {
//   labels: {
//     format: '${value}'
//   }
// },
//
// series: [{
//     name: `${this.props.modelData.basic_info_datum[1].codename}`,
//     data: data2InUse,
//     tooltip: {
//         valueDecimals: 2
//     },
//     color: '#73757a'
// }]
// }
//
// const config3 = {
//   rangeSelector: {
//     enabled: false
// },
//   navigator: {
//     enabled: false
// },
//   scrollbar: {
//     enabled: false
// },
//
//
// title: {
//   text: `LTM Exchange Ratio`
// },
//
// xAxis: {
// dateTimeLabelFormats: {
//   month: "%b '%y"
// },
// labels: {
//   enabled: false
// },
// showEmpty: false,
// // visible: false
// },
//
// yAxis: {
// labels: {
//   format: '{value}x'
// }
// },
//
// series: [{
//   name: `Historical Exchange Ratio`,
//   data:  exchangeRatioWithDates,
//   tooltip: {
//       valueDecimals: 1
//   },
//   color: '#0d58a6'
// }]
// }
