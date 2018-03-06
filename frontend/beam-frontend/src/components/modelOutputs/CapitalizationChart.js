import React from 'react'
import { connect } from "react-redux";
import ReactHighcharts from 'react-highcharts';

class CapitalizationChart extends React.Component {

  render() {
let data = this.props.outputsData

 const data3 = [{
     name: `${data ? data.targetCodename : 'Target' }`,
     data: [data.targetRevenueValueYear1, data.targetNOIValue, data.targetEBITDAValue,
       data.targetFFOPerShareValueYear1 * data.targetShares , data.targetAFFOPerShareValueYear1 * data.targetShares],
      color: '#73757a',
     },
     {
        name: `${data ? data.acquirorCodename : 'Acquiror' }`,
        data: [data.acquirorRevenueValueYear1, data.acquirorNOIValueYear1, data.acquirorEBITDAValue, data.acquirorFFOPerShareValueYear1 * data.acquirorShares , data.acquirorAFFOPerShareValueYear1 * data.acquirorShares ],
        color: '#1c3151'
    },
    {
     type: 'spline',
      name: 'Average',
      data: [2, 2, 2, 2, .25],
      marker: {
          lineWidth: 2,
          lineColor: 'red',
          fillColor: 'white'
      }
   }]

const config =
{
    chart: {
        type: 'bar'
    },
     title: {
        text: 'Year 1 CapitalizationChart Analysis'
    },
    xAxis: {
        categories: ['Revenue', 'NOI', 'EBITDA', 'FFO', 'AFFO']
    },
    yAxis: {
        min: 0,
        title: {
            text: '% of Combined'
        }
    },
    tooltip: {
       pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>${point.y}</b> ({point.percentage:.0f}%)<br/>',
       shared: true
   },
    plotOptions: {
        series: {
            stacking: 'percent'
        }
    },
    series: data3
  }




    return (
       <div className="outputholder">
      <ReactHighcharts config={config} ></ReactHighcharts>
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }}, )(CapitalizationChart)
