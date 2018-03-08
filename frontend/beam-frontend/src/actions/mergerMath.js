

const multiplyforMath = (a, b) => {
  return a * b
}

const multiplyThreeForMath = (a, b, c) => {
  return a * b * c
}

const subtractForMath = (a, b) => {
  return a - b
}

const divideForMath = (a, b) => {
  return (Math.round(a * 10000) / 10000) / b
}

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


        let impliedOffer
        if (offerData.offer_type === "SetAmount") {
          impliedOffer = Math.abs(parseFloat(offerData.offer_metric));
        } else if (offerData.offer_type === "%Premium"){
          let premium = parseFloat(offerData.offer_metric) > 1 ? parseFloat(offerData.offer_metric)/100 : parseFloat(offerData.offer_metric)
          impliedOffer = targetCurrentPrice * (1 + premium);
        } else {
          let allInRatioForCalc = parseFloat(offerData.offer_metric) > 1 ? parseFloat(offerData.offer_metric)/100 : parseFloat(offerData.offer_metric)
          let impliedAllInPriceForCalc = multiplyforMath(allInRatioForCalc, acquirorCurrentPrice)
          let cashPerShareForCalc = multiplyforMath(impliedAllInPriceForCalc,cashPercentage)
          let stockPerShareForCalc = multiplyThreeForMath(allInRatioForCalc, stockPercentage, acquirorCurrentPrice)

          impliedOffer = (cashPerShareForCalc + stockPerShareForCalc)
        }
        let allInRatio = impliedOffer / acquirorCurrentPrice
        let impliedAllInPrice = allInRatio * acquirorCurrentPrice
        let cashPerShare = impliedAllInPrice * cashPercentage
        let remainingStockPerShare = impliedAllInPrice - cashPerShare
        let stockExchangeRatio = remainingStockPerShare / acquirorCurrentPrice
        let stockPerShare = stockExchangeRatio * acquirorCurrentPrice


        let premiumToCurrent = (impliedOffer / targetCurrentPrice) - 1
        let targetCapitalizationInfo = data.capitalization_info_datum.filter(item => item.company === targetCompany)
        let acquirorCapitalizationInfo = data.capitalization_info_datum.filter(item => item.company === acquirorCompany)
        let targetCashFlowInfo = data.cash_flow_info_datum.filter(item => item.company === targetCompany)
        let acquirorCashFlowInfo = data.cash_flow_info_datum.filter(item => item.company === acquirorCompany)


        let acquirorFFOPerShare = acquirorCashFlowInfo.find(item => item.item_name === "FFO_Per_Share")
        let acquirorAFFOPerShare = acquirorCashFlowInfo.find(item => item.item_name === "AFFO_Per_Share")
        let acquirorFFOPerShareValueYear1 = acquirorFFOPerShare.amount_year1 || 0
        let acquirorAFFOPerShareValueYear1 = acquirorAFFOPerShare.amount_year1 || 0

        let acquirorRevenue = acquirorCashFlowInfo.find(item => item.item_name === "Revenue")
        let acquirorRevenueValueYear1 = acquirorRevenue.amount_year1 || 0
        let acquirorNOI = acquirorCashFlowInfo.find(item => item.item_name === "NOI")
        let acquirorNOIValueYear1 = acquirorNOI.amount_year1 || 0
        let targetRevenue = targetCashFlowInfo.find(item => item.item_name === "Revenue")
        let targetRevenueValueYear1 = targetRevenue.amount_year1 || 0


        let acquirorShares = Math.abs(acquirorEquityData.shares)

        let targetShares = Math.abs(targetEquityData.shares)
        let impliedTargetEquityValue = impliedOffer * targetShares
        let targetTotalDebt = targetCapitalizationInfo.filter(item => item.item_type === "debt").reduce((a, b) => ({amount: a.amount + b.amount}))
        let targetTotalDebtValue = Math.abs(targetTotalDebt.amount)
        let targetCapitalInUse = targetCapitalizationInfo.filter(item => parseFloat(item.amount) !== 0)

        let acquirorTotalDebt = acquirorCapitalizationInfo.filter(item => item.item_type === "debt").reduce((a, b) => ({amount: a.amount + b.amount}))
        let acquirorTotalDebtValue = Math.abs(acquirorTotalDebt.amount)
        let acquirorCapitalInUse = acquirorCapitalizationInfo.filter(item => parseFloat(item.amount) !== 0)


        let targetPreferred = targetCapitalizationInfo.filter(item => item.item_type === "preferred").reduce((a, b) => ({amount: a.amount + b.amount}))
        let targetPreferredValue = Math.abs(targetPreferred.amount)
        let targetCash =  targetCapitalizationInfo.filter(item => item.item_type === "cash").reduce((a, b) => ({amount: a.amount + b.amount}))
        let targetCashValue = Math.abs(targetCash.amount)


        let acquirorPreferred = acquirorCapitalizationInfo.filter(item => item.item_type === "preferred").reduce((a, b) => ({amount: a.amount + b.amount}))
        let acquirorPreferredValue = Math.abs(acquirorPreferred.amount)
        let acquirorCash =  acquirorCapitalizationInfo.filter(item => item.item_type === "cash").reduce((a, b) => ({amount: a.amount + b.amount}))
        let acquirorCashValue = Math.abs(acquirorCash.amount)

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

        let targetNetDebtValue = targetTotalDebtValue - targetCashValue
        let targetNetDebtAndPrefValue = targetNetDebtValue + targetPreferredValue
        let targetCurrentEquityCap = targetCurrentPrice * targetShares
        let targetCurrentTEV = targetNetDebtAndPrefValue + targetCurrentEquityCap
        let targetNDPtoTEV = targetNetDebtAndPrefValue / targetCurrentTEV
        let targetNDtoTEV = targetNetDebtValue / targetCurrentTEV

        let acquirorNetDebtValue = acquirorTotalDebtValue - acquirorCashValue
        let acquirorNetDebtAndPrefValue = acquirorNetDebtValue + acquirorPreferredValue
        let acquirorCurrentEquityCap = acquirorCurrentPrice * acquirorShares
        let acquirorCurrentTEV = acquirorNetDebtAndPrefValue + acquirorCurrentEquityCap
        let acquirorNDPtoTEV = acquirorNetDebtAndPrefValue / acquirorCurrentTEV
        let acquirorNDtoTEV = acquirorNetDebtValue / acquirorCurrentTEV


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

        let acquirorEBITDA = acquirorCashFlowInfo.find(item => item.item_name === "EBITDA")
        let acquirorEBITDAValue = acquirorEBITDA.amount_year1  || 0

        let targetNDPtoEBITDA = targetNetDebtAndPrefValue / targetEBITDAValue
        let targetNDtoEBITDA = targetNetDebtValue / targetEBITDAValue

        let acquirorNDPtoEBITDA = acquirorNetDebtAndPrefValue / acquirorEBITDAValue
        let acquirorNDtoEBITDA = acquirorNetDebtValue / acquirorEBITDAValue

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

        let assumedDebtCost = inUseTransactioCosts.find(item => item.name === "debt_assumption_costs") ? inUseTransactioCosts.find(item => item.name === "debt_assumption_costs") : 0
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

        let repaidDebtCost = inUseTransactioCosts.find(item => item.name === "debt_prepayment_costs") ? inUseTransactioCosts.find(item => item.name === "debt_prepayment_costs") : 0
        let repaidDebtCostRate = repaidDebtCost.input_type === "percentage" ? repaidDebtCost.data_input : 0
        let repaidDebtCostRateAsPercent = repaidDebtCostRate > 1 ? repaidDebtCostRate / 100 : repaidDebtCostRate

        let repaidMortgageDebtCostValue = repaidMortgageDebtValue * repaidDebtCostRateAsPercent

        let assumedCorporateDebt = assumedDebtAndPref.filter(item => item.item_name === "bonds" || item.item_name === "credit_facility" )
        let assumedCorporateDebtAmount = assumedCorporateDebt.length > 0 ?
        assumedCorporateDebt.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let assumedCorporateDebtValue
        if (assumedCorporateDebtAmount.hasOwnProperty('amount')) {
          assumedCorporateDebtValue = assumedCorporateDebtAmount.amount
        } else {
          assumedCorporateDebtValue = 0
        }

        let assumedCorporateDebtCostValue = assumedCorporateDebtValue * assumedDebtCostRateAsPercent

        let repaidCreditFacility = repaidDebtAndPref.filter(item => item.item_name === "credit_facility" )
        let repaidCreditFacilityAmount = repaidCreditFacility.length > 0 ?
        repaidCreditFacility.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let repaidCreditFacilityValue
        if (repaidCreditFacilityAmount.hasOwnProperty('amount')) {
          repaidCreditFacilityValue = repaidCreditFacilityAmount.amount
        } else {
          repaidCreditFacilityValue = 0
        }

        let repaidBonds = repaidDebtAndPref.filter(item => item.item_name === "bonds" )
        let repaidBondsAmount = repaidBonds.length > 0 ?
        repaidBonds.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let repaidBondsValue
        if (repaidBondsAmount.hasOwnProperty('amount')) {
          repaidBondsValue = repaidBondsAmount.amount
        } else {
          repaidBondsValue = 0
        }

        let repaidPreferred = repaidDebtAndPref.filter(item => item.item_name === "preferred_equity" )
        let repaidPreferredAmount = repaidPreferred.length > 0 ?
        repaidPreferred.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let repaidPreferredValue
        if (repaidPreferredAmount.hasOwnProperty('amount')) {
          repaidPreferredValue = repaidPreferredAmount.amount
        } else {
          repaidPreferredValue = 0
        }


        let swapBreakageCost = inUseTransactioCosts.find(item => item.name === "swap_breakage_costs") ? inUseTransactioCosts.find(item => item.name === "swap_breakage_costs") : 0
        let swapBreakageCostRate = swapBreakageCost.input_type === "percentage" ? swapBreakageCost.data_input : 0
        let swapBreakageCostRateAsPercent =  swapBreakageCostRate > 1 ? swapBreakageCostRate / 100 : swapBreakageCostRate

        let swapBreakageCostValue = repaidCreditFacilityValue * swapBreakageCostRateAsPercent

        let companyALAOCosts = inUseTransactioCosts.find(item => item.name === "CompanyA_LAO_costs") ? inUseTransactioCosts.find(item => item.name === "CompanyA_LAO_costs") : 0
        let companyALAORate = companyALAOCosts.input_type === "percentage" ? companyALAOCosts.data_input : 0
        let companyALAORateAsPercent = companyALAORate > 1 ? companyALAORate / 100 : companyALAORate

        let companyALAOCostValue = companyALAORateAsPercent * targetTotalUsesPreCosts

        let companyBLAOCosts = inUseTransactioCosts.find(item => item.name === "CompanyB_LAO_costs") ? inUseTransactioCosts.find(item => item.name === "CompanyB_LAO_costs") : 0
        let companyBLAORate = companyBLAOCosts.input_type === "percentage" ? companyBLAOCosts.data_input : 0
        let companyBLAORateAsPercent = companyBLAORate > 1 ? companyBLAORate / 100 : companyBLAORate

        let companyBLAOCostValue = companyBLAORateAsPercent * targetTotalUsesPreCosts

        let newFinancingsExcludingPlug = data.new_financing_info_datum.filter(item => item.plug === false)
        let newFinancingsExcludingPlugAmount =
        newFinancingsExcludingPlug.length > 0 ?
         newFinancingsExcludingPlug.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let newFinancingsExcludingPlugValue
        if ( newFinancingsExcludingPlugAmount.hasOwnProperty('amount')) {
          newFinancingsExcludingPlugValue =  newFinancingsExcludingPlugAmount.amount
        } else {
          newFinancingsExcludingPlugValue = 0
        }

        let newDebtFinancingsExcludingPlug = data.new_financing_info_datum.filter(item => item.plug === false && (item.type === "debt" || item.type === "debt_secured"))
        let newDebtFinancingsExcludingPlugAmount =
        newDebtFinancingsExcludingPlug.length > 0 ?
         newDebtFinancingsExcludingPlug.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let newDebtFinancingsExcludingPlugValue
        if ( newDebtFinancingsExcludingPlugAmount.hasOwnProperty('amount')) {
          newDebtFinancingsExcludingPlugValue =  newDebtFinancingsExcludingPlugAmount.amount
        } else {
          newDebtFinancingsExcludingPlugValue = 0
        }

        let newPreferredFinancingsExcludingPlug = data.new_financing_info_datum.filter(item => item.plug === false && item.type === "repaidPreferred")
        let newPreferredFinancingsExcludingPlugAmount =
        newPreferredFinancingsExcludingPlug.length > 0 ?
         newPreferredFinancingsExcludingPlug.reduce((a, b) => ({amount: a.amount + b.amount})) : 0
        let newPreferredFinancingsExcludingPlugValue
        if ( newPreferredFinancingsExcludingPlugAmount.hasOwnProperty('amount')) {
          newPreferredFinancingsExcludingPlugValue =  newPreferredFinancingsExcludingPlugAmount.amount
        } else {
          newPreferredFinancingsExcludingPlugValue = 0
        }

        let debtIssuanceCosts = inUseTransactioCosts.find(item => item.name === "debt_issuance_costs") ? inUseTransactioCosts.find(item => item.name === "debt_issuance_costs") : 0
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

        let companyALAOCostsInUse = setCosts.find(item => item.name === "CompanyA_LAO_costs") ?
        setCosts.find(item => item.name === "CompanyA_LAO_costs").data_input : companyALAOCostValue

        let companyBLAOCostsInUse = setCosts.find(item => item.name === "CompanyB_LAO_costs") ? setCosts.find(item => item.name === "CompanyB_LAO_costs").data_input : companyBLAOCostValue

        let debtAssumptionCostsInUse = setCosts.find(item => item.name === "debt_assumption_costs") ? setCosts.find(item => item.name === "debt_assumption_costs").data_input : assumedMortgageDebtCostValue + assumedCorporateDebtCostValue

        let debtPrepaymentCostsInUse = setCosts.find(item => item.name === "debt_prepayment_costs") ? setCosts.find(item => item.name === "debt_prepayment_costs").data_input : repaidMortgageDebtCostValue

        let swapBreakageCostsInUse = setCosts.find(item => item.name === "swap_breakage_costs") ? setCosts.find(item => item.name === "swap_breakage_costs").data_input : swapBreakageCostValue

        let debtIssuanceCostsInUse = setCosts.find(item => item.name === "debt_issuance_costs") ? setCosts.find(item => item.name === "debt_issuance_costs").data_input : newFinancingCostValue

        let bondPrepaymentCostsInUse = setCosts.find(item => item.name === "bond_prepayment_costs") ? setCosts.find(item => item.name === "bond_prepayment_costs").data_input : 0

        let transferTaxesCostsInUse = setCosts.find(item => item.name === "transfer_taxes") ? setCosts.find(item => item.name === "transfer_taxes").data_input : 0

        let employeeCostsInUse = setCosts.find(item => item.name === "employee_costs") ? setCosts.find(item => item.name === "employee_costs").data_input : 0

      let otherCostsInUse = setCosts.find(item => item.name === "other_costs") ? setCosts.find(item => item.name === "other_costs").data_input : 0

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

        let FFOPerShareAccretion = ProFormaFFOYear1PerShare - acquirorFFOPerShareValueYear1

        let FFOPerShareAccretionPercent = (ProFormaFFOYear1PerShare / acquirorFFOPerShareValueYear1) - 1

        let ProFormaAFFOYear1PerShare =  ProFormaAFFOYear1 / ProFormaShares

        let AFFOPerShareAccretion = ProFormaAFFOYear1PerShare - acquirorAFFOPerShareValueYear1

        let AFFOPerShareAccretionPercent = (ProFormaAFFOYear1PerShare / acquirorAFFOPerShareValueYear1) - 1


        let TotalRepaidDebtValue = repaidMortgageDebtValue + repaidCreditFacilityValue + repaidBondsValue

        let TotalNewDebtValue = newDebtFinancingsExcludingPlugValue + (newFinancingPlug.item_type === "debt" || newFinancingPlug.item_type === "debt_secured") ? PlugFinancing : 0

        let netChangeInDebtValue = TotalNewDebtValue - TotalRepaidDebtValue

        let netChangeInPreferredValue =   newPreferredFinancingsExcludingPlugValue +  newFinancingPlug.item_type === "preferred" ? PlugFinancing : 0 - repaidPreferredValue

        let ProFormaTotalDebtValue = targetTotalDebtValue + acquirorTotalDebtValue + netChangeInDebtValue

        let ProFormaTotalPreferredValue = targetPreferredValue + acquirorPreferredValue + netChangeInPreferredValue

        let ProFormaEquityCap = ProFormaShares * acquirorCurrentPrice

        let ProFormaCashValue = Math.abs(targetCashValue) + Math.abs(acquirorCashValue) - Math.abs(usedCashValue)

        let ProFormaNetDebtValue = ProFormaTotalDebtValue - ProFormaCashValue

        let ProFormaNetDebtAndPrefValue = ProFormaNetDebtValue + ProFormaTotalPreferredValue

        let ProFormaTEV = ProFormaEquityCap + ProFormaNetDebtAndPrefValue

        let ProFormaNDPtoTEV = ProFormaNetDebtAndPrefValue / ProFormaTEV
        let ProFormaNDtoTEV = ProFormaNetDebtValue / ProFormaTEV

        let ProFormaEBITDAValue = targetEBITDAValue + acquirorEBITDAValue + synergiesValue

        let ProFormaNDPtoEBITDA = ProFormaNetDebtAndPrefValue / ProFormaEBITDAValue
        let ProFormaNDtoEBITDA = ProFormaNetDebtValue / ProFormaEBITDAValue



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
    AcquirorSharesIssued,
    ProFormaShares,
    ProFormaFFOYear1PerShare,
    ProFormaAFFOYear1PerShare,
    targetCurrentPrice,
    acquirorCurrentPrice,
    targetTotalDebtValue,
    targetPreferredValue,
    targetCashValue,
    targetCurrentTEV,
    acquirorTotalDebtValue,
    acquirorPreferredValue,
    acquirorCashValue,
    acquirorCurrentTEV,
    targetNDPtoTEV,
    targetNDtoTEV,
    acquirorNDPtoTEV,
    acquirorNDtoTEV,
    targetNDPtoEBITDA,
    targetNDtoEBITDA,
    acquirorNDPtoEBITDA,
    acquirorNDtoEBITDA,
    netChangeInDebtValue,
    netChangeInPreferredValue,
    usedCashValue,
    ProFormaTotalDebtValue,
    ProFormaTotalPreferredValue,
    ProFormaCashValue,
    ProFormaNetDebtValue,
    ProFormaTEV,
    ProFormaNDPtoTEV,
    ProFormaNDtoTEV,
    ProFormaNDPtoEBITDA,
    ProFormaNDtoEBITDA,
    FFOPerShareAccretion,
    FFOPerShareAccretionPercent,
    AFFOPerShareAccretion,
    AFFOPerShareAccretionPercent,
    companyALAOCostsInUse,
    companyBLAOCostsInUse,
    debtAssumptionCostsInUse,
    debtPrepaymentCostsInUse,
    swapBreakageCostsInUse,
    debtIssuanceCostsInUse,
    bondPrepaymentCostsInUse,
    transferTaxesCostsInUse,
    employeeCostsInUse,
    otherCostsInUse,
    acquirorCompany,
    targetEBITDAValue,
    acquirorEBITDAValue,
    acquirorRevenueValueYear1,
    acquirorNOIValueYear1,
    targetNOIValue,
    targetRevenueValueYear1,
    acquirorNetDebtValue,
    targetNetDebtValue,
    ProFormaEquityCap
}
}


export default {
   calculateMergerMath
}
