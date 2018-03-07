import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import ReactHighcharts from 'react-highcharts';
import ReachHighmaps from 'react-highcharts/ReactHighmaps'
import ReactHighstock from 'react-highcharts/ReactHighstock'


class HistoricalTrading extends React.Component {

  render() {

  const data = this.props.tradingData[0] ? this.props.tradingData[0] : []
  const dataInUse = data.length > 0 ? data.map(item => [item.date, item.close]) : [[0,0]]
  const stockprices1 = dataInUse.length > 0 ? dataInUse.map(item => item[1]) : [0]
  const dates = dataInUse.length > 0 ? dataInUse.map(item => item[0]) : [0]

  const data2 = this.props.tradingData[1] ? this.props.tradingData[1] : []
  const data2InUse = data2.length > 0 ? data2.map(item => [item.date, item.close]) : [[0,0]]
  const stockprices2 = data2InUse.length > 0 ? data2InUse.map(item => item[1]) : [0]

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

  const config = {
    rangeSelector: {
      enabled: false
},
    navigator: {
      enabled: false
},
    scrollbar: {
      enabled: false
},


title: {
    text: `${this.props.modelData.basic_info_datum[0].codename} LTM Stock Price`
},

xAxis: {
  dateTimeLabelFormats: {
    month: "%b '%y"
  },
  labels: {
    enabled: false
  },
  showEmpty: false,
  // visible: false
},
yAxis: {
  labels: {
    format: '${value}'
  }
},

series: [{
    name: `${this.props.modelData.basic_info_datum[0].codename}`,
    data: dataInUse,
    tooltip: {
        valueDecimals: 2
    },
    color: '#1c3151'
}]
}

  const config2 = {
    rangeSelector: {
      enabled: false
},
    navigator: {
      enabled: false
},
    scrollbar: {
      enabled: false
},


title: {
    text: `${this.props.modelData.basic_info_datum[1].codename} LTM Stock Price`
},

xAxis: {
  dateTimeLabelFormats: {
    month: "%b '%y"
  },
  labels: {
    enabled: false
  },
  showEmpty: false,
  // visible: false
},

yAxis: {
  labels: {
    format: '${value}'
  }
},

series: [{
    name: `${this.props.modelData.basic_info_datum[1].codename}`,
    data: data2InUse,
    tooltip: {
        valueDecimals: 2
    },
    color: '#73757a'
}]
}

const config3 = {
  rangeSelector: {
    enabled: false
},
  navigator: {
    enabled: false
},
  scrollbar: {
    enabled: false
},


title: {
  text: `LTM Exchange Ratio`
},

xAxis: {
dateTimeLabelFormats: {
  month: "%b '%y"
},
labels: {
  enabled: false
},
showEmpty: false,
// visible: false
},

yAxis: {
labels: {
  format: '{value}x'
}
},

series: [{
  name: `Historical Exchange Ratio`,
  data:  exchangeRatioWithDates,
  tooltip: {
      valueDecimals: 1
  },
  color: '#0d58a6'
}]
}

    return (
       <div className="outputholder" id="trading">
       <h3>1 Year Trading</h3>


            <div className="single-table-holder">
              <ReactHighstock config={config} ></ReactHighstock>
            </div>
            <div className="single-table-holder">
              <ReactHighstock config={config2} ></ReactHighstock>
            </div>
            <div className="single-table-holder">
              <ReactHighstock config={config3} ></ReactHighstock>
  
          </div>
       </div>
    )
  }
}


export default connect (state => {return {outputsData: state.outputsData, tradingData: state.tradingData, modelData: state.modelData }},)(HistoricalTrading)
