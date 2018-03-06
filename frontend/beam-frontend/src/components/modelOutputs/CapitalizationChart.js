import React from 'react'
import { connect } from "react-redux";
import ReactHighcharts from 'react-highcharts';

class CapitalizationChart extends React.Component {

  render() {
let data = this.props.outputsData

let acquirorCurrentEquityCap = data ? data.acquirorShares * data.acquirorCurrentPrice : 0
let acquirorNetDebt = data ? data.acquirorNetDebtValue  : 0
let acquirorPreferred = data ? data.acquirorPreferredValue : 0

let targetCurrentEquityCap = data ? data.targetShares * data.targetCurrentPrice : 0
let targetNetDebt = data ? data.targetNetDebtValue  : 0
let targetPreferred = data ? data.targetPreferredValue : 0

let ProFormaCurrentEquityCap = data ? data.ProFormaEquityCap : 0
let ProFormaNetDebt = data ? data.ProFormaNetDebtValue  : 0
let ProFormaPreferred = data ? data.ProFormaTotalPreferredValue : 0


 const acquirorData = data ? [{
     name: `${data ? data.acquirorCodename : 'Acquiror'} Capitalization`,
     colorByPoint: true,
     data: [{
       name: 'Equity',
       y: acquirorCurrentEquityCap,
       color: '#73757a'
     },{
       name: "Net Debt",
       y: acquirorNetDebt,
       color: '#1c3151'
     }, {
       name: 'Preferred Equity',
       y: acquirorPreferred,
       color: '#0d58a6'
     }]
   }] : [{}]

   const targetData = data ? [{
       name: `${data ? data.targetCodename : 'Target'} Capitalization`,
       colorByPoint: true,
       data: [{
         name: 'Equity',
         y: targetCurrentEquityCap,
         color: '#73757a'
       },{
         name: "Net Debt",
         y: targetNetDebt,
         color: '#1c3151'
       }, {
         name: 'Preferred Equity',
         y: targetPreferred,
         color: '#0d58a6'
       }]
     }] : [{}]

     const ProFormaData = data ? [{
         name: `ProForma Capitalization`,
         colorByPoint: true,
         data: [{
           name: 'Equity',
           y: ProFormaCurrentEquityCap,
           color: '#73757a'
         },{
           name: "Net Debt",
           y: ProFormaNetDebt,
           color: '#1c3151'
         }, {
           name: 'Preferred Equity',
           y: ProFormaPreferred,
           color: '#0d58a6'
         }]
       }] : [{}]


const configAcquiror =
{
    chart: {
        type: 'pie'
    },
     title: {
        text: `${data ? data.acquirorCodename : 'Acquiror'} Capitalization`
    },
    tooltip: {
        pointFormat:  '<b>{point.percentage:.1f}%</b>'
   },
   plotOptions: {
         pie: {
             allowPointSelect: true,
             cursor: 'pointer',
             dataLabels: {
                 enabled: true,
                 format: '<b>{point.name}</b>: ${point.y:,.0f}, {point.percentage:.1f} %',
                 style: {
                     // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                 }
             }
         }
     },
    series: acquirorData
  }

  const configTarget =
  {
      chart: {
          type: 'pie'
      },
       title: {
          text: `${data ? data.targetCodename : 'Target'} Capitalization`
      },
      tooltip: {
          pointFormat:  '<b>{point.percentage:.1f}%</b>'
     },
     plotOptions: {
           pie: {
               allowPointSelect: true,
               cursor: 'pointer',
               dataLabels: {
                   enabled: true,
                   format: '<b>{point.name}</b>: ${point.y:,.0f}, {point.percentage:.1f} %',
                   style: {
                       // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                   }
               }
           }
       },
      series: targetData
    }

    const configProForma =
    {
        chart: {
            type: 'pie'
        },
         title: {
            text: `ProForma Capitalization`
        },
        tooltip: {
            pointFormat:  '<b>{point.percentage:.1f}%</b>'
       },
       plotOptions: {
             pie: {
                 allowPointSelect: true,
                 cursor: 'pointer',
                 dataLabels: {
                     enabled: true,
                     format: '<b>{point.name}</b>: ${point.y:,.0f}, {point.percentage:.1f} %',
                     style: {
                         // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                     }
                 }
             }
         },
        series: ProFormaData
      }


    return (
       <div className="outputholder">
      <ReactHighcharts config={configAcquiror} ></ReactHighcharts>
        <ReactHighcharts config={configTarget} ></ReactHighcharts>
        <ReactHighcharts config={configProForma} ></ReactHighcharts>
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }}, )(CapitalizationChart)
