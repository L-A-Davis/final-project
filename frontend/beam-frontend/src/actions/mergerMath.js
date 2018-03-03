
const calculateMergerMath = (data) => {

        let targetInfo = data.basic_info_datum.find(company => company.acquiror === false)
        let targetCompany = targetInfo.company
        let acquirorInfo = data.basic_info_datum.find(company => company.acquiror === true)
        let targetCodename = targetInfo.codename
        let acquirorCodename = acquirorInfo.codename
        let acquirorCompany = targetCompany === "B" ? "A" : "B"
        let targetEquityData = data.equity_info_datum.find(item => item.company === targetCompany)
        let acquirorEquityData = data.equity_info_datum.find(item => item.company === acquirorCompany)
        let targetCurrentPrice = Math.abs(parseFloat(targetEquityData.currentSharePrice))
        let acquirorCurrentPrice = Math.abs(parseFloat(acquirorEquityData.currentSharePrice))
        let offerData = data.offer_info_datum[0]
        let stockPercentage = Math.abs(parseFloat(offerData.percentage_stock))
        let cashPercentage = 1 - stockPercentage
        let allInRatio = targetCurrentPrice / acquirorCurrentPrice
        let impliedAllInPrice = allInRatio * acquirorCurrentPrice
        let cashPerShare = impliedAllInPrice * cashPercentage
        let remainingStockPerShare = impliedAllInPrice - cashPerShare
        let stockExchangeRatio = remainingStockPerShare / acquirorCurrentPrice
        let stockPerShare = stockExchangeRatio * acquirorCurrentPrice

        let impliedOffer
        if (offerData.offer_type === "SetAmount") {
          impliedOffer = Math.abs(parseFloat(offerData.offer_metric));
        } else if (offerData.offer_type === "%Premium"){
          impliedOffer = targetCurrentPrice * (1 + parseFloat(offerData.offer_metric));
        } else {
          impliedOffer = (cashPerShare + stockPerShare)
        }
        let premiumToCurrent = (impliedOffer / targetCurrentPrice) - 1

        let targetCapitalizationInfo = data.capitalization_info_datum.filter(item => item.company === targetCompany)
        let targetCashFlowInfo = data.cash_flow_info_datum.filter(item => item.company === targetCompany)
        let acquirorCashFlowInfo = data.cash_flow_info_datum.filter(item => item.company === acquirorCompany)


        let acquirorFFOPerShare = acquirorCashFlowInfo.find(item => item.item_name === "FFO_Per_Share")
        let acquirorFFOPerShareValueYear1 = acquirorFFOPerShare.amount_year1 || 0
        let acquirorShares = Math.abs(acquirorEquityData.shares)

        let targetShares = Math.abs(targetEquityData.shares)
        let impliedTargetEquityValue = impliedOffer * targetShares
        let targetTotalDebt = targetCapitalizationInfo.filter(item => item.item_type === "debt").reduce((a, b) => ({amount: a.amount + b.amount}))
        let targetTotalDebtValue = Math.abs(targetTotalDebt.amount)
        let targetCapitalInUse = targetCapitalizationInfo.filter(item => parseFloat(item.amount) !== 0)

        let targetPreferred = targetCapitalizationInfo.filter(item => item.item_type === "preferred").reduce((a, b) => ({amount: a.amount + b.amount}))
        let targetPreferredValue = Math.abs(targetPreferred.amount)
        let targetCash =  targetCapitalizationInfo.filter(item => item.item_type === "cash").reduce((a, b) => ({amount: a.amount + b.amount}))
        let targetCashValue = Math.abs(targetCash.amount)

        let targetNOI = targetCashFlowInfo.find(item => item.item_name === "NOI")
        let targetNOIValue = targetNOI.amount_year1  || 0
        let targetImpliedTEV = (impliedTargetEquityValue + targetTotalDebtValue + targetPreferredValue - targetCashValue)

        let impliedCapRate
        if (targetNOIValue <= 0 || (targetTotalDebtValue + targetPreferredValue - targetCashValue) <= 0 ){
          impliedCapRate = "NA"
        } else {
          impliedCapRate = (targetNOIValue / targetImpliedTEV)
        }

        let targetFFOPerShare = targetCashFlowInfo.find(item => item.item_name === "FFO_Per_Share")
        let targetFFOPerShareValueYear1 = targetFFOPerShare.amount_year1 || 0

        let FFOMultiple_Year1
        if (targetFFOPerShareValueYear1 <= 0) {
          FFOMultiple_Year1 = "NA"
        } else {
          FFOMultiple_Year1 = impliedOffer / targetFFOPerShareValueYear1
        }

        let targetAFFOPerShare = targetCashFlowInfo.find(item => item.item_name === "AFFO_Per_Share")
        let targetAFFOPerShareValueYear1 = targetAFFOPerShare.amount_year1 || 0

        let AFFOMultiple_Year1
        if (targetAFFOPerShareValueYear1 <= 0) {
          AFFOMultiple_Year1 = "NA"
        } else {
          AFFOMultiple_Year1 = impliedOffer / targetAFFOPerShareValueYear1
        }

        let targetEBITDA = targetCashFlowInfo.find(item => item.item_name === "EBITDA")
        let targetEBITDAValue = targetEBITDA.amount_year1  || 0

        let EBITDAMultiple_Year1
        if (targetEBITDAValue <= 0) {
          EBITDAMultiple_Year1 = "NA"
        } else {
          EBITDAMultiple_Year1 = targetImpliedTEV / targetEBITDAValue
        }

        let assumedDebtAndPref = []
        let repaidDebtAndPref = []
        let usedCash = []
        for (let i = 0; i< targetCapitalInUse.length; i++){
          if ((targetCapitalInUse[i].item_type === "debt" || targetCapitalInUse[i].item_type === "preferred") && targetCapitalInUse[i].repay === false ) {
            assumedDebtAndPref.push(targetCapitalInUse[i])
          } else if ((targetCapitalInUse[i].item_type === "cash") && targetCapitalInUse[i].repay === true ){
            usedCash.push(targetCapitalInUse[i])
          } else if ((targetCapitalInUse[i].item_type === "debt" || targetCapitalInUse[i].item_type === "preferred") && targetCapitalInUse[i].repay === true ) {
            repaidDebtAndPref.push(targetCapitalInUse[i])
          }
        }

// debugger



  return {
    impliedOffer,
    premiumToCurrent,
    impliedCapRate,
    FFOMultiple_Year1,
    AFFOMultiple_Year1,
    EBITDAMultiple_Year1,
    stockPercentage,
    cashPercentage,
    allInRatio,
    cashPerShare,
    stockPerShare,
    stockExchangeRatio,
    impliedTargetEquityValue,
    targetCapitalInUse,
    targetCodename,
    acquirorCodename,
    acquirorFFOPerShareValueYear1,
    targetFFOPerShareValueYear1,
    acquirorShares,
    targetShares,
    assumedDebtAndPref,
    repaidDebtAndPref,
    usedCash
}
}


export default {
   calculateMergerMath
}
