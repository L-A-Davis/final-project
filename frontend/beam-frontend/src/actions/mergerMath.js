
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
        let acquirorAFFOPerShare = acquirorCashFlowInfo.find(item => item.item_name === "AFFO_Per_Share")
        let acquirorFFOPerShareValueYear1 = acquirorFFOPerShare.amount_year1 || 0
        let acquirorAFFOPerShareValueYear1 = acquirorAFFOPerShare.amount_year1 || 0
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
        let targetTotalUsesPreCosts = impliedTargetEquityValue + targetTotalDebtValue + targetPreferredValue

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

        let inUseTransactioCosts = data.transaction_cost.filter(item => parseFloat(item.data_input) !== 0)

        let assumedMortgageDebt = assumedDebtAndPref.filter(item => item.item_name === "share_JV_debt" || item.item_name === "mortgage_debt"  || item.item_name === "mezz_debt")
        let assumedMortgageDebtAmount = assumedMortgageDebt.length > 0 ?
        assumedMortgageDebt.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let assumedMortgageDebtValue
        if (assumedMortgageDebtAmount.hasOwnProperty('amount')) {
          assumedMortgageDebtValue = assumedMortgageDebtAmount.amount
        } else {
          assumedMortgageDebtValue = 0
        }

        let assumedDebtCost = inUseTransactioCosts.find(item => item.name === "debt_assumption_costs")
        let assumedDebtCostRate = assumedDebtCost.input_type === "percentage" ? assumedDebtCost.data_input : 0
        let assumedDebtCostRateAsPercent = assumedDebtCostRate > 1 ? assumedDebtCostRate / 100 : assumedDebtCostRate

        let assumedMortgageDebtCostValue = assumedMortgageDebtValue * assumedDebtCostRateAsPercent

        let repaidMortgageDebt = repaidDebtAndPref.filter(item => item.item_name === "share_JV_debt" || item.item_name === "mortgage_debt"  || item.item_name === "mezz_debt" )
        let repaidMortgageDebtAmount = repaidMortgageDebt.length > 0 ?
        repaidMortgageDebtAmount.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let repaidMortgageDebtValue
        if (repaidMortgageDebtAmount.hasOwnProperty('amount')) {
           repaidMortgageDebtValue = repaidMortgageDebtAmount.amount
        } else {
          repaidMortgageDebtValue = 0
        }

        let repaidDebtCost = inUseTransactioCosts.find(item => item.name === "debt_prepayment_costs")
        let repaidDebtCostRate = repaidDebtCost.input_type === "percentage" ? repaidDebtCost.data_input : 0
        let repaidDebtCostRateAsPercent = repaidDebtCostRate > 1 ? repaidDebtCostRate / 100 : repaidDebtCostRate

        let repaidMortgageDebtCostValue = repaidMortgageDebtValue * repaidDebtCostRateAsPercent

        let assumedCorporateDebt = assumedDebtAndPref.filter(item => item.item_name === "bonds" || item.item_name === "credit_facility" )
        let assumedCorporateDebtAmount = assumedCorporateDebt.length > 0 ?
        assumedCorporateDebt.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let assumedCorporateDebtValue
        if (assumedCorporateDebt.hasOwnProperty('amount')) {
          assumedCorporateDebtValue = assumedCorporateDebt.amount
        } else {
          assumedCorporateDebtValue = 0
        }

        let assumedCorporateDebtCostValue = assumedCorporateDebtValue * assumedDebtCostRateAsPercent

        let repaidCreditFacility = repaidDebtAndPref.filter(item => item.item_name === "credit_facility" )
        let repaidCreditFacilityAmount = repaidCreditFacility.length > 0 ?
        repaidCreditFacility.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let repaidCreditFacilityValue
        if (repaidCreditFacility.hasOwnProperty('amount')) {
          repaidCreditFacilityValue = repaidCreditFacility.amount
        } else {
          repaidCreditFacilityValue = 0
        }

        let swapBreakageCost = inUseTransactioCosts.find(item => item.name === "swap_breakage_costs")
        let swapBreakageCostRate = swapBreakageCost.input_type === "percentage" ? swapBreakageCost.data_input : 0
        let swapBreakageCostRateAsPercent =  swapBreakageCostRate > 1 ? swapBreakageCostRate / 100 : swapBreakageCostRate

        let swapBreakageCostValue = repaidCreditFacilityValue * swapBreakageCostRateAsPercent

        let companyALAOCosts = inUseTransactioCosts.find(item => item.name === "CompanyA_LAO_costs")
        let companyALAORate = companyALAOCosts.input_type === "percentage" ? companyALAOCosts.data_input : 0
        let companyALAORateAsPercent = companyALAORate > 1 ? companyALAORate / 100 : companyALAORate

        let companyALAOCostValue = companyALAORateAsPercent * targetTotalUsesPreCosts

        let companyBLAOCosts = inUseTransactioCosts.find(item => item.name === "CompanyB_LAO_costs")
        let companyBLAORate = companyBLAOCosts.input_type === "percentage" ? companyBLAOCosts.data_input : 0
        let companyBLAORateAsPercent = companyBLAORate > 1 ? companyBLAORate / 100 : companyBLAORate

        let companyBLAOCostValue = companyBLAORateAsPercent * targetTotalUsesPreCosts

        let newFinancingsExcludingPlug = data.new_financing_info_datum.filter(item => item.plug === false)
        let newFinancingExcludingPlugAmount =  newFinancingsExcludingPlug.reduce((a, b) => ({amount: a.amount + b.amount}))
        let newFinancingsExcludingPlugValue
        if ( newFinancingExcludingPlugAmount.hasOwnProperty('amount')) {
          newFinancingsExcludingPlugValue =  newFinancingExcludingPlugAmount.amount
        } else {
          newFinancingsExcludingPlugValue = 0
        }

        let debtIssuanceCosts = inUseTransactioCosts.find(item => item.name === "debt_issuance_costs")
        let debtIssuanceRate = debtIssuanceCosts.input_type === "percentage" ? debtIssuanceCosts.data_input : 0
        let debtIssuanceRateAsPercent = debtIssuanceRate > 1 ? debtIssuanceRate / 100 : debtIssuanceRate

        let newFinancingCostValue = newFinancingsExcludingPlugValue * debtIssuanceRateAsPercent


        let OverallCosts = data.transaction_cost.find(item => item.name === "Overall_deal_costs")

        let setCosts = inUseTransactioCosts.filter(item => item.input_type === "setAmount" )
        let setCostsAmount = setCosts.length > 0 ? setCosts.reduce((a, b) => ({data_input: a.data_input + b.data_input})) : 0
        let setCostsValue
        if ( setCostsAmount.hasOwnProperty('data_input')) {
          setCostsValue =  setCostsAmount.data_input
        } else {
          setCostsValue = 0
        }


        let CostsInUse
        if (OverallCosts.input_type === "overall") {
          CostsInUse = OverallCosts.data_input
        } else {
          CostsInUse = setCostsValue + newFinancingCostValue + companyBLAOCostValue + companyALAOCostValue + swapBreakageCostValue + assumedCorporateDebtCostValue + repaidMortgageDebtCostValue + assumedMortgageDebtCostValue
        }

        let TotalUses = (targetTotalUsesPreCosts || 0) + (CostsInUse || 0)

        const calcAcquirorSharesIssued = (targetShares, stockExchangeRatio, stockPerShare, acquirorCurrentPrice) =>{
          if (isNaN(targetShares * stockExchangeRatio * acquirorCurrentPrice)) {
            return ((stockPerShare * targetShares) / acquirorCurrentPrice)
          } else {
            return (targetShares * stockExchangeRatio * acquirorCurrentPrice)
          }
        }

        let AcquirorEquityIssued = calcAcquirorSharesIssued(targetShares, stockExchangeRatio, stockPerShare, acquirorCurrentPrice )

        let AcquirorSharesIssued = AcquirorEquityIssued / acquirorCurrentPrice

        let ProFormaShares = acquirorShares + AcquirorSharesIssued

        let newFinancingsInUseNoPlug = data.new_financing_info_datum.filter(item => item.plug === false && item.amount !== 0)
        let newFinancingsAmount = newFinancingsInUseNoPlug.length > 0 ? newFinancingsInUseNoPlug.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let newFinancingsValueNoPlug
        if ( newFinancingsAmount.hasOwnProperty('amount')) {
          newFinancingsValueNoPlug =  newFinancingsAmount.amount
        } else {
          newFinancingsValueNoPlug = 0
        }

        let assumedDebtAndPrefAmount =
        assumedDebtAndPref.length > 0 ?
        assumedDebtAndPref.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let assumedDebtAndPrefValue
        if ( assumedDebtAndPrefAmount.hasOwnProperty('amount')) {
          assumedDebtAndPrefValue =  assumedDebtAndPrefAmount.amount
        } else {
          assumedDebtAndPrefValue = 0
        }

        let usedCashAmount =
        usedCash.length > 0 ?
        usedCash.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let usedCashValue
        if ( usedCashAmount.hasOwnProperty('amount')) {
          usedCashValue =  usedCashAmount.amount
        } else {
          usedCashValue = 0
        }


        let totalSourcesPrePlug = newFinancingsValueNoPlug + assumedDebtAndPrefValue + usedCashValue + AcquirorEquityIssued

        let PlugFinancing = TotalUses - totalSourcesPrePlug || 0
        let TotalSources = (totalSourcesPrePlug + PlugFinancing) || 0

        let synergiesData = data.synergies_info_datum.find(item => item.item_name === "GA_synergies")
        let synergiesType = synergiesData.input_type

        let TargetGA = targetCashFlowInfo.find(item => item.item_name === "GA")
        let AcquirorGA = acquirorCashFlowInfo.find(item => item.item_name === "GA")

        let synergiesValue
        if (synergiesType === "SetAmount_savings") {
          synergiesValue = Math.abs(synergiesData.input_amount)
        } else if (synergiesType === "SetAmount_additional_exp"){
          synergiesValue = -Math.abs(synergiesData.input_amount)
        } else if (synergiesType === "PercentofAcquiror") {
          let synergiesPercent = Math.abs(synergiesData.input_amount) > 1 ? synergiesData.input_amount / 100 : synergiesData.input_amount
          synergiesValue = Math.abs(synergiesPercent) * Math.abs(AcquirorGA.amount_year1)
        } else {
          let synergiesPercent = Math.abs(synergiesData.input_amount) > 1 ? synergiesData.input_amount / 100 : synergiesData.input_amount
          synergiesValue = Math.abs(synergiesPercent) * Math.abs(TargetGA.amount_year1)
        }

        let InterestSavingsAmounts =
        repaidDebtAndPref.length > 0 ?
        repaidDebtAndPref.map(item => Math.abs(item.amount) * Math.abs(Math.abs(item.rate) > 1 ? (item.rate / 100) : item.rate)) : 0
        let InterestSavingsValue = InterestSavingsAmounts.length > 0 ?  InterestSavingsAmounts.reduce((a, b) => a + b) : 0

        let cashInterestLostAmounts =
        usedCash.length > 0 ?
        usedCash.map(item => -Math.abs(item.amount) * Math.abs(Math.abs(item.rate) > 1 ? (item.rate / 100) : item.rate)) : 0
        let cashInterestLostValue = cashInterestLostAmounts.length > 0 ?  cashInterestLostAmounts.reduce((a, b) => a + b) : 0

        let newFinancingsNoPlugCostAmounts =
        newFinancingsInUseNoPlug.length > 0 ?
        newFinancingsInUseNoPlug.map(item => -Math.abs(item.amount) * Math.abs(Math.abs(item.rate) > 1 ? (item.rate / 100) : item.rate)) : 0
        let newFinancingNoPlugExpense = newFinancingsNoPlugCostAmounts. length > 0 ?
        newFinancingsNoPlugCostAmounts.reduce((a, b) => a + b) : 0

        let newFinancingPlug = data.new_financing_info_datum.find(item => item.plug === true)
        let newFinancingPlugRate = newFinancingPlug.rate || 0
        let PlugInterestExpense = newFinancingPlugRate * -Math.abs(PlugFinancing)
        let TotalNewInterestExpense = newFinancingNoPlugExpense + PlugInterestExpense

        let totalCashFlowAdjustments =   synergiesValue + InterestSavingsValue + cashInterestLostValue + TotalNewInterestExpense

        let acquirorTotalFFOYear1 = acquirorFFOPerShareValueYear1* acquirorShares

        let acquirorTotalAFFOYear1 = acquirorAFFOPerShareValueYear1* acquirorShares

        let targetTotalFFOYear1 = targetFFOPerShareValueYear1 * targetShares

        let targetTotalAFFOYear1 = targetAFFOPerShareValueYear1 * targetShares

        let ProFormaFFOYear1 = acquirorTotalFFOYear1 + targetTotalFFOYear1 + totalCashFlowAdjustments

        let ProFormaAFFOYear1 = acquirorTotalAFFOYear1 + targetTotalAFFOYear1 + totalCashFlowAdjustments

        let ProFormaFFOYear1PerShare =  ProFormaFFOYear1 / ProFormaShares

        let ProFormaAFFOYear1PerShare =  ProFormaAFFOYear1 / ProFormaShares

debugger



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
    acquirorAFFOPerShareValueYear1,
    targetFFOPerShareValueYear1,
    targetAFFOPerShareValueYear1,
    acquirorShares,
    targetShares,
    assumedDebtAndPref,
    repaidDebtAndPref,
    usedCash,
    CostsInUse,
    TotalUses,
    AcquirorEquityIssued,
    newFinancingsInUseNoPlug,
    PlugFinancing,
    TotalSources,
    synergiesValue,
    InterestSavingsValue,
    cashInterestLostValue,
    TotalNewInterestExpense,
    totalCashFlowAdjustments,
    ProFormaFFOYear1,
    ProFormaAFFOYear1,
    ProFormaShares,
    ProFormaFFOYear1PerShare,
    ProFormaAFFOYear1PerShare,
    targetCurrentPrice,
    acquirorCurrentPrice
}
}


export default {
   calculateMergerMath
}
