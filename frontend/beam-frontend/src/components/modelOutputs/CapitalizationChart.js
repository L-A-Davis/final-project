import React from 'react'
import { connect } from "react-redux";
import ReactHighcharts from 'react-highcharts';

class CapitalizationChart extends React.Component {


state = {
  configAcquiror: null,
  configTarget: null,
  configProForma: null
}



handleGetAcquirorData = () => {
  let data = this.props.outputsData

  let acquirorCurrentEquityCap = data ? data.acquirorShares * data.acquirorCurrentPrice : 0
  let acquirorNetDebt = data ? data.acquirorNetDebtValue  : 0
  let acquirorPreferred = data ? data.acquirorPreferredValue : 0

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

 return acquirorData
}

handleGetTargetData = () => {
  let data = this.props.outputsData
  let targetCurrentEquityCap = data ? data.targetShares * data.targetCurrentPrice : 0
  let targetNetDebt = data ? data.targetNetDebtValue  : 0
  let targetPreferred = data ? data.targetPreferredValue : 0

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

    return targetData
}

handleGetProFormaData = () => {
  let data = this.props.outputsData
  let ProFormaCurrentEquityCap = data ? data.ProFormaEquityCap : 0
  let ProFormaNetDebt = data ? data.ProFormaNetDebtValue  : 0
  let ProFormaPreferred = data ? data.ProFormaTotalPreferredValue : 0

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

    return ProFormaData

}


handleConfigSetup = (title, dataInput) => {
  return     {
          chart: {
              type: 'pie'
          },
           title: {
              text: title
          },
          tooltip: {
              pointFormat:  '${point.y:,.0f},<b>{point.percentage:.1f}%</b>'

         },
         plotOptions: {
               pie: {
                   allowPointSelect: true,
                   cursor: 'pointer',
                   dataLabels: {
                       enabled: false,
                       format: '<b>{point.name}</b>: ${point.y:,.0f}, {point.percentage:.1f} %',
                       style: {
                           // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                       }
                   }
               }
           },
          series: dataInput
        }
}


componentDidMount() {
  let data = this.props.outputsData
  let chart1Title = `${data ? data.acquirorCodename : 'Acquiror'}`
  let chart2Title = `${data ? data.targetCodename : 'Target'}`
  let chart3Title = "Pro Forma"
  let acquirorDataTest = this.handleGetAcquirorData()
  let targetDataTest = this.handleGetTargetData()
  let proFormaDataTest = this.handleGetProFormaData()
  let chart1AllInfo = this.handleConfigSetup(chart1Title, acquirorDataTest)
  let chart2AllInfo = this.handleConfigSetup(chart2Title, targetDataTest)
  let chart3AllInfo = this.handleConfigSetup(chart3Title, proFormaDataTest)
  this.setState({
    configAcquiror: chart1AllInfo,
    configTarget: chart2AllInfo,
    configProForma: chart3AllInfo
  })
}


  render() {
    return (
       <div className="outputholder" id="cap-charts">
        <h3>Capitalization Summaries</h3>
       <div className="three-table-holder">
        { this.state.configAcquiror &&
          <div className="single-table-holder">
           <ReactHighcharts config={this.state.configAcquiror} ></ReactHighcharts>
         </div>
        }
        { this.state.configTarget &&
          <div className="single-table-holder">
            <ReactHighcharts config={this.state.configTarget} ></ReactHighcharts>
          </div>
        }
        { this.state.configProForma &&
          <div className="single-table-holder">
            <ReactHighcharts config={this.state.configProForma} ></ReactHighcharts>
          </div>
        }

        </div>
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }}, )(CapitalizationChart)

// const configAcquiror =
// {
//     chart: {
//         type: 'pie'
//     },
//      title: {
//         text: `${data ? data.acquirorCodename : 'Acquiror'} Capitalization`
//     },
//     tooltip: {
//         pointFormat:  '<b>{point.percentage:.1f}%</b>'
//    },
//    plotOptions: {
//          pie: {
//              allowPointSelect: true,
//              cursor: 'pointer',
//              dataLabels: {
//                  enabled: true,
//                  format: '<b>{point.name}</b>: ${point.y:,.0f}, {point.percentage:.1f} %',
//                  style: {
//                      // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                  }
//              }
//          }
//      },
//     series: acquirorData
//   }
//
//   const configTarget =
//   {
//       chart: {
//           type: 'pie'
//       },
//        title: {
//           text: `${data ? data.targetCodename : 'Target'} Capitalization`
//       },
//       tooltip: {
//           pointFormat:  '<b>{point.percentage:.1f}%</b>'
//      },
//      plotOptions: {
//            pie: {
//                allowPointSelect: true,
//                cursor: 'pointer',
//                dataLabels: {
//                    enabled: true,
//                    format: '<b>{point.name}</b>: ${point.y:,.0f}, {point.percentage:.1f} %',
//                    style: {
//                        // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                    }
//                }
//            }
//        },
//       series: targetData
//     }
//
//     const configProForma =
//     {
//         chart: {
//             type: 'pie'
//         },
//          title: {
//             text: `ProForma Capitalization`
//         },
//         tooltip: {
//             pointFormat:  '${point.y:,.0f},<b>{point.percentage:.1f}%</b>'
//
//        },
//        plotOptions: {
//              pie: {
//                  allowPointSelect: true,
//                  cursor: 'pointer',
//                  dataLabels: {
//                      enabled: false,
//                      format: '<b>{point.name}</b>: ${point.y:,.0f}, {point.percentage:.1f} %',
//                      style: {
//                          // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                      }
//                  }
//              }
//          },
//         series: ProFormaData
//       }
//
