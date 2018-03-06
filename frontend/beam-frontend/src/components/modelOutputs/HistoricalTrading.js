import React from 'react'
import { connect } from "react-redux";
import ReactTable from 'react-table'
import ReactHighcharts from 'react-highcharts';
import ReachHighmaps from 'react-highcharts/ReactHighmaps'
import ReactHighstock from 'react-highcharts/ReactHighstock'


class HistoricalTrading extends React.Component {

  render() {
      let data = this.props.outputsData
      let acquirorTicker = data.acquirorCompany === "A" ?
      data.companyALAOCostsInUse : data.companyBLAOCostsInUse

      let targetTicker = data.acquirorCompany === "A" ?
       data.companyBLAOCostsInUse :data.companyALAOCostsInUse

      const config = {
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

  const data2 = this.props.tradingData[0] ? this.props.tradingData[0] : []
  const data2InUse = data2.length > 0 ? data2.map(item => [item.date, item.close]) : []
  debugger

  const config2 = {
    rangeSelector: {
    selected: 1
},

title: {
    text: '[name  ]Stock Price'
},

series: [{
    name: 'SPG',
    data: data2InUse,
    tooltip: {
        valueDecimals: 2
    }
}]
}

    return (
       <div className="outputholder">
          <div className="single-table-holder">
          <h3>1 Year Trading</h3>
            <ReactHighcharts config={config} ></ReactHighcharts>
            <ReactHighstock config={config2} ></ReactHighstock>
          </div>
       </div>
    )
  }
}


export default connect (state => {return {outputsData: state.outputsData, tradingData: state.tradingData }},)(HistoricalTrading)
