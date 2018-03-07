import React from 'react'
import { connect } from "react-redux";
import ReactHighcharts from 'react-highcharts';

class Contribution extends React.Component {


state = {
  config: null
}

getDataForContribution = () => {
  let data = this.props.outputsData

  let targetCodename =  `${data ? data.targetCodename : 'Target' }`
  let acquirorCodename = `${data ? data.acquirorCodename : 'Acquiror' }`
  let targetShares = data ? data.allInRatio * data.targetShares: 0
  let acquirorShares = data ? data.acquirorShares : 0

  let targetRev =  data ? data.targetRevenueValueYear1 : 0
  let acquirorRev = data ? data.acquirorRevenueValueYear1 : 0

  let targetNOI = data ? data.targetNOIValue : 0
  let acquirorNOI = data? data.acquirorNOIValueYear1 : 0

  let targetEBITDA = data ? data.targetEBITDAValue : 0
  let acquirorEBITDA = data ? data.acquirorEBITDAValue : 0

  let acquirorTotalFFO = data ? data.acquirorFFOPerShareValueYear1 * data.acquirorShares : 0
  let acquirorTotalAFFO = data ? data.acquirorAFFOPerShareValueYear1 * data.acquirorShares : 0
  let targetTotalFFO =  data ? data.targetFFOPerShareValueYear1 * data.targetShares : 0
  let targetTotalAFFO = data ? data.targetAFFOPerShareValueYear1 * data.targetShares : 0



   const data3 = [{
       name: targetCodename,
       data: [targetShares, targetRev, targetNOI, targetEBITDA, targetTotalFFO, targetTotalAFFO],
        color: '#73757a',
       },
       {
          name: acquirorCodename,
          data: [acquirorShares, acquirorRev, acquirorNOI, acquirorEBITDA, acquirorTotalFFO, acquirorTotalAFFO],
          color: '#1c3151'
     }]
 return data3
}

handleConfigSetup = (data3) => {
  const configInUse =
  {
      chart: {
          type: 'bar'
      },
       title: {
          text: 'Year 1 Contribution Analysis'
      },
      xAxis: {
          categories: ['Ownership','Revenue', 'NOI', 'EBITDA', 'FFO', 'AFFO']
      },
      yAxis: {
          min: 0,
          title: {
              text: '% of Combined'
          }
      },
      legend: {
       reversed: true
   },
      tooltip: {
         pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:,.1f}</b> ({point.percentage:.0f}%)<br/>',
         shared: true
     },
      plotOptions: {
          series: {
              stacking: 'percent'
          }
      },
      series: data3
    }
    return configInUse
}


componentDidMount() {
  let data3 = this.getDataForContribution()
    let configInUse = this.handleConfigSetup(data3)
    this.setState({
      config: configInUse
    })
  }

  render() {
    console.log("CONFIG")
  console.log(this.state.config)
  if (!this.state.config) {
    return <div>
     "TEST"
    </div>
  }
 // debugger
    return (
       <div className="outputholder" id="contrib">
       {this.state.config  &&
      <ReactHighcharts config={this.state.config} ></ReactHighcharts>
      }
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, outputsData: state.outputsData }}, )(Contribution)

//
// {
//     chart: {
//         type: 'bar'
//     },
//      title: {
//         text: 'Year 1 Contribution Analysis'
//     },
//     xAxis: {
//         categories: ['Ownership','Revenue', 'NOI', 'EBITDA', 'FFO', 'AFFO']
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: '% of Combined'
//         }
//     },
//     legend: {
//      reversed: true
//  },
//     tooltip: {
//        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:,.1f}</b> ({point.percentage:.0f}%)<br/>',
//        shared: true
//    },
//     plotOptions: {
//         series: {
//             stacking: 'percent'
//         }
//     },
//     series: [{
//       data: [0,0,0,0,0,0]
//   }, {
//       data: [0,0,0,0,0,0]
//   }]
//   }
// setTimeout ( () => {
//   this.setState ({
//      config: configInUse
//   })
// }, 3000)
// componentDidMount() {
//   let data3 = this.getDataForContribution()
//   if (!data3.test) {
//     let configInUse = this.handleConfigSetup(data3)
//     this.setState({
//       config: configInUse
//     })
//   }
// }
