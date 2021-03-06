export default function companyBasicInfoReducer(
  state = {
    allProjects: [],
    allModelsforProject: [],
    selectedProjectData: {
      id: '',
      name: '',
      deal_type: '',
      User_id: ''},
    modelData: {
      id: '',
      project_id: '',
      name: '',
      model_type: '',
      data: []
    },
    tradingData: [],
    showOutputs: false,
    outputsData: {
      test: true
    },
    selectedCompany: null, loading: false,
    newProjectFormData: {
      id: '',
      name: '',
      deal_type: '',
      User_id: ''},
    newModelFormData: {
      project_id: '',
      name: '',
      model_type: '',
    },
    BasicInfoFormData: {
      CompanyA_id: "",
      CompanyB_id: "",
      CompanyA_ticker: "",
      CompanyB_ticker: "",
      CompanyA_codename: "",
      CompanyB_codename: "",
      CompanyA_acquiror: false},
    EquityFormData: {
      CompanyA_id: "",
      CompanyB_id: "",
      CompanyA_currentSharePrice: "",
      CompanyB_currentSharePrice: "",
      CompanyA_shares: "",
      CompanyB_shares: "",
      CompanyA_dividend: "",
      CompanyB_dividend: ""},
    OfferFormData: {
      Offer_id: "",
      OfferType: 'SetAmount',
      OfferMetric: '',
      Percentage_Stock: ''},
    CapitalizationFormData: {
      CompanyA_cash_id: "",
      CompanyA_cash: '',
      CompanyA_cash_use: false,
      CompanyA_cash_rate: '',
      CompanyB_cash_id: "",
      CompanyB_cash: '',
      CompanyB_cash_use: false,
      CompanyB_cash_rate: '',

      CompanyA_otherLiquidAssets_id: "",
      CompanyA_otherLiquidAssets: '',
      CompanyA_otherLiquidAssets_use: false,
      CompanyA_otherLiquidAssets_rate: '',
      CompanyB_otherLiquidAssets_id: "",
      CompanyB_otherLiquidAssets: '',
      CompanyB_otherLiquidAssets_use: false,
      CompanyB_otherLiquidAssets_rate: '',

      CompanyA_mortgageDebt_id: "",
      CompanyA_mortgageDebt: '',
      CompanyA_mortgageDebt_repay: false,
      CompanyA_mortgageDebt_rate: '',
      CompanyB_mortgageDebt_id: "",
      CompanyB_mortgageDebt: '',
      CompanyB_mortgageDebt_repay: false,
      CompanyB_mortgageDebt_rate: '',

      CompanyA_shareOfJVDebt_id: "",
      CompanyA_shareOfJVDebt: '',
      CompanyA_shareOfJVDebt_repay: false,
      CompanyA_shareOfJVDebt_rate: '',
      CompanyB_shareOfJVDebt_id: "",
      CompanyB_shareOfJVDebt: '',
      CompanyB_shareOfJVDebt_repay: false,
      CompanyB_shareOfJVDebt_rate: '',

      CompanyA_bonds_id: "",
      CompanyA_bonds: '',
      CompanyA_bonds_repay: false,
      CompanyA_bonds_rate: '',
      CompanyB_bonds_id: "",
      CompanyB_bonds: '',
      CompanyB_bonds_repay: false,
      CompanyB_bonds_rate: '',

      CompanyA_creditFacility_id: "",
      CompanyA_creditFacility: '',
      CompanyA_creditFacility_repay: false,
      CompanyA_creditFacility_rate: '',
      CompanyB_creditFacility_id: "",
      CompanyB_creditFacility: '',
      CompanyB_creditFacility_repay: false,
      CompanyB_creditFacility_rate: '',

      CompanyA_mezzDebt_id: "",
      CompanyA_mezzDebt: '',
      CompanyA_mezzDebt_repay: false,
      CompanyA_mezzDebt_rate: '',
      CompanyB_mezzDebt_id: "",
      CompanyB_mezzDebt: '',
      CompanyB_mezzDebt_repay: false,
      CompanyB_mezzDebt_rate: '',

      CompanyA_preferredEquity_id: "",
      CompanyA_preferredEquity: '',
      CompanyA_preferredEquity_repay: false,
      CompanyA_preferredEquity_rate: '',
      CompanyB_preferredEquity_id: '',
      CompanyB_preferredEquity: '',
      CompanyB_preferredEquity_repay: false,
      CompanyB_preferredEquity_rate: ''
    },
    CashFlowFormData: {
      CompanyA_FFOPerShare_id: "",
      CompanyA_FFOPerShare_1: "",
      CompanyB_FFOPerShare_id: "",
      CompanyB_FFOPerShare_1: "",

      CompanyA_AFFOPerShare_id: "",
      CompanyA_AFFOPerShare_1: "",
      CompanyB_AFFOPerShare_id: "",
      CompanyB_AFFOPerShare_1: "",

      CompanyA_revenue_id: "",
      CompanyA_revenue_1: "",
      CompanyB_revenue_id: "",
      CompanyB_revenue_1: "",

      CompanyA_NOI_id: "",
      CompanyA_NOI_1: "",
      CompanyB_NOI_id: "",
      CompanyB_NOI_1: "",

      CompanyA_GA_id: "",
      CompanyA_GA_1: "",
      CompanyB_GA_id: "",
      CompanyB_GA_1: "",

      CompanyA_EBITDA_id: "",
      CompanyA_EBITDA_1: "",
      CompanyB_EBITDA_id: "",
      CompanyB_EBITDA_1: "",
    },
     TransactionCostsFormData: {
      Deal_costs_id: "",
      Deal_costs_type: "",
      Deal_costs_input: "",
      CompanyA_LAO_costs_id: "",
      CompanyA_LAO_costs_type: "",
      CompanyA_LAO_costs_input: "",
      CompanyB_LAO_costs_id: "",
      CompanyB_LAO_costs_type: "",
      CompanyB_LAO_costs_input: "",

      Swap_Breakage_id: "",
      Swap_Breakage_type: "",
      Swap_Breakage_input: "",
      Debt_Prepayment_id: "",
      Debt_Prepayment_type: "",
      Debt_Prepayment_input: "",
      Debt_Assumption_id: "",
      Debt_Assumption_type: "",
      Debt_Assumption_input: "",
      Debt_Issuance_id: "",
      Debt_Issuance_type: "",
      Debt_Issuance_input: "",

      Bond_Prepayment_id: "",
      Bond_Prepayment_input: "",
      Transfer_Taxes_id: "",
      Transfer_Taxes_input: "",
      Employee_Costs_id: "",
      Employee_Costs_input: "",
      Other_Costs_id: "",
      Other_Costs_input: ""
    },
    TransactionAdjustmentsFormData: {
     Synergies_id: "",
     Synergies_type: "",
     Synergies_input: "",

     New_financing_1_id: "",
     New_financing_1_rate: "",
     New_financing_1_amount: "",
     New_financing_1_type_of: "",
     New_financing_1_plug: false,

     New_financing_2_id: "",
     New_financing_2_rate: "",
     New_financing_2_amount: "",
     New_financing_2_type_of: "",
     New_financing_2_plug: false,

     New_financing_3_id: "",
     New_financing_3_rate: "",
     New_financing_3_amount: "",
     New_financing_3_type_of: "",
     New_financing_3_plug: false
   },
    FormCompletedStatus:{
      newModelFormData: false,
      BasicInfoFormData: false,
      EquityFormData: false,
      OfferFormData: false,
      CapitalizationFormData: false,
      CashFlowFormData: false,
      TransactionCostsFormData: false,
      TransactionAdjustmentsFormData: false,
    }
     },
  action
) {
  switch (action.type) {

    // case "COMPANIES_LOADING":
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // case "COMPANY_LOAD":
    //   return {
    //     ...state,
    //     modelData: action.payload,
    //     loading: false
    //   };
     case "PROJECTS_LOAD":
      return {
              ...state,
              allProjects: action.payload
            };
    case "MODELS_LOAD":
     return {
             ...state,
             allModelsforProject: action.payload
           };

   case "MODEL_PARTS_LOAD":
   let model_id = action.payload.id || ""
   let model_name = action.payload.name || ""

   let basic_data = action.payload.basic_info_datum
   let basic_data_a = (basic_data.length === 0) ? {id: "", ticker: "", codename: "", acquiror: false} :
   basic_data[0].company === "A" ? basic_data[0] : basic_data[1]
   let basic_data_b = (basic_data.length === 0)  ? {id: "", ticker: "", codename: "", acquiror: false} :
   basic_data[1].company === "B" ? basic_data[1] : basic_data[0]


   let equity_data = action.payload.equity_info_datum
   let equity_data_a = (equity_data.length === 0) ? {id: "", currentSharePrice: "", shares: "", dividend: ""} :
     equity_data[0].company === "A" ? equity_data[0] : equity_data[1]
   let equity_data_b = (equity_data.length === 0) ? {id: "", currentSharePrice: "", shares: "", dividend: ""} : equity_data[1].company === "B" ? equity_data[1] : equity_data[0]

   let offer_data = action.payload.offer_info_datum
   let offer_data_a = (offer_data.length === 0) ? {id: "", offer_type: "", offer_metric: "", percentage_stock: ""} : offer_data[0]

   let capitalization_data = action.payload.capitalization_info_datum

   let cash_CompanyA_data = capitalization_data.find(item => item.item_name === "cash_and_equivalents" && item.company === "A" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let cash_CompanyB_data = capitalization_data.find(item => item.item_name === "cash_and_equivalents" && item.company === "B" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let other_assets_CompanyA_data = capitalization_data.find(item => item.item_name === "other_liquid_assets" && item.company === "A" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let other_assets_CompanyB_data = capitalization_data.find(item => item.item_name === "other_liquid_assets" && item.company === "B" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let mortgages_CompanyA_data = capitalization_data.find(item => item.item_name === "mortgage_debt" && item.company === "A" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let mortgages_CompanyB_data = capitalization_data.find(item => item.item_name === "mortgage_debt" && item.company === "B" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let JVdebt_CompanyA_data = capitalization_data.find(item => item.item_name === "share_JV_debt" && item.company === "A" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let JVdebt_CompanyB_data = capitalization_data.find(item => item.item_name === "share_JV_debt" && item.company === "B" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let bonds_CompanyA_data = capitalization_data.find(item => item.item_name === "bonds" && item.company === "A" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let bonds_CompanyB_data = capitalization_data.find(item => item.item_name === "bonds" && item.company === "B" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let facility_CompanyA_data = capitalization_data.find(item => item.item_name === "credit_facility" && item.company === "A" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let facility_CompanyB_data = capitalization_data.find(item => item.item_name === "credit_facility" && item.company === "B" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let mezz_CompanyA_data = capitalization_data.find(item => item.item_name === "mezz_debt" && item.company === "A" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let mezz_CompanyB_data = capitalization_data.find(item => item.item_name === "mezz_debt" && item.company === "B" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let pref_CompanyA_data = capitalization_data.find(item => item.item_name === "preferred_equity" && item.company === "A" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let pref_CompanyB_data = capitalization_data.find(item => item.item_name === "preferred_equity" && item.company === "B" ) || {id: "", company: "", item_name: "", item_type: "", amount: "", repay: "", rate: ""}

   let cash_flow_data = action.payload.cash_flow_info_datum

   let FFO_CompanyA_data = cash_flow_data.find(item => item.item_name === "FFO_Per_Share" && item.company === "A" ) || {id: "", company: "", item_name: "", amount_year1: ""}

    let FFO_CompanyB_data = cash_flow_data.find(item => item.item_name === "FFO_Per_Share" && item.company === "B" ) || {id: "", company: "", item_name: "", amount_year1: ""}

    let AFFO_CompanyA_data = cash_flow_data.find(item => item.item_name === "AFFO_Per_Share" && item.company === "A" ) || {id: "", company: "", item_name: "", amount_year1: ""}

     let AFFO_CompanyB_data = cash_flow_data.find(item => item.item_name === "AFFO_Per_Share" && item.company === "B" ) || {id: "", company: "", item_name: "", amount_year1: ""}

     let revenue_CompanyA_data = cash_flow_data.find(item => item.item_name === "Revenue" && item.company === "A" ) || {id: "", company: "", item_name: "", amount_year1: ""}

      let revenue_CompanyB_data = cash_flow_data.find(item => item.item_name === "Revenue" && item.company === "B" ) || {id: "", company: "", item_name: "", amount_year1: ""}

      let NOI_CompanyA_data = cash_flow_data.find(item => item.item_name === "NOI" && item.company === "A" ) || {id: "", company: "", item_name: "", amount_year1: ""}

       let NOI_CompanyB_data = cash_flow_data.find(item => item.item_name === "NOI" && item.company === "B" ) || {id: "", company: "", item_name: "", amount_year1: ""}

       let GA_CompanyA_data = cash_flow_data.find(item => item.item_name === "GA" && item.company === "A" ) || {id: "", company: "", item_name: "", amount_year1: ""}

       let GA_CompanyB_data = cash_flow_data.find(item => item.item_name === "GA" && item.company === "B" ) || {id: "", company: "", item_name: "", amount_year1: ""}

       let EBITDA_CompanyA_data = cash_flow_data.find(item => item.item_name === "EBITDA" && item.company === "A" ) || {id: "", company: "", item_name: "", amount_year1: ""}

        let EBITDA_CompanyB_data = cash_flow_data.find(item => item.item_name === "EBITDA" && item.company === "B" ) || {id: "", company: "", item_name: "", amount_year1: ""}


    let cost_data = action.payload.transaction_cost

    let deal_costs_data = cost_data.find(item => item.name === "Overall_deal_costs") || {id: "", name: "", item_type: "", data_input: ""}

    let LAO_CompanyA_data = cost_data.find(item => item.name === "CompanyA_LAO_costs") || {id: "", name: "", item_type: "", data_input: ""}

    let LAO_CompanyB_data = cost_data.find(item => item.name === "CompanyB_LAO_costs") || {id: "", name: "", item_type: "", data_input: ""}

    let swap_breakage_data = cost_data.find(item => item.name === "swap_breakage_costs") || {id: "", name: "", item_type: "", data_input: ""}

    let debt_prepayment_data = cost_data.find(item => item.name === "debt_prepayment_costs") || {id: "", name: "", item_type: "", data_input: ""}

    let debt_assumption_data = cost_data.find(item => item.name === "debt_assumption_costs") || {id: "", name: "", item_type: "", data_input: ""}

    let debt_issuance_data = cost_data.find(item => item.name === "debt_issuance_costs") || {id: "", name: "", item_type: "", data_input: ""}

    let bond_prepayment_data = cost_data.find(item => item.name === "bond_prepayment_costs") || {id: "", name: "", item_type: "", data_input: ""}

    let transfer_taxes_data = cost_data.find(item => item.name === "transfer_taxes") || {id: "", name: "", item_type: "", data_input: ""}

    let employee_costs_data = cost_data.find(item => item.name === "employee_costs") || {id: "", name: "", item_type: "", data_input: ""}

    let other_costs_data = cost_data.find(item => item.name === "other_costs") || {id: "", name: "", item_type: "", data_input: ""}

   let new_financing_data = action.payload.new_financing_info_datum

   let new_financing_1_data = new_financing_data.find(item => item.item_name === "New_financing_1") || {id: "", item_name: "", item_type: "", amount: "", rate: "", plug:""}

   let new_financing_2_data = new_financing_data.find(item => item.item_name === "New_financing_2") || {id: "", item_name: "", item_type: "", amount: "", rate: "", plug:""}

   let new_financing_3_data = new_financing_data.find(item => item.item_name === "New_financing_3") || {id: "", item_name: "", item_type: "", amount: "", rate: "", plug:""}

    let synergies_data = action.payload.synergies_info_datum

    let synergies_1_data = synergies_data.find(item => item.item_name === "GA_synergies") || {id: "", item_name: "", item_type: "", input_amount: ""}

    return {
            ...state,
            modelData: action.payload,
            BasicInfoFormData: {
              CompanyA_id: basic_data_a.id,
              CompanyB_id: basic_data_b.id,
              CompanyA_ticker: basic_data_a.ticker,
              CompanyB_ticker: basic_data_b.ticker,
              CompanyA_codename: basic_data_a.codename,
              CompanyB_codename: basic_data_b.codename,
              CompanyA_acquiror: basic_data_a.acquiror },
            EquityFormData: {
              CompanyA_id: equity_data_a.id,
              CompanyB_id: equity_data_b.id,
              CompanyA_currentSharePrice: equity_data_a.currentSharePrice,
              CompanyB_currentSharePrice: equity_data_b.currentSharePrice,
              CompanyA_shares: equity_data_a.shares,
              CompanyB_shares: equity_data_b.shares,
              CompanyA_dividend: equity_data_a.dividend,
              CompanyB_dividend: equity_data_b.dividend},
            OfferFormData: {
               Offer_id: offer_data_a.id,
               OfferType: offer_data_a.offer_type,
               OfferMetric: offer_data_a.offer_metric,
               Percentage_Stock: offer_data_a.percentage_stock
            },
            CapitalizationFormData:{
              CompanyA_cash_id: cash_CompanyA_data.id,
              CompanyA_cash: cash_CompanyA_data.amount,
              CompanyA_cash_use: cash_CompanyA_data.repay,
              CompanyA_cash_rate: cash_CompanyA_data.rate,
              CompanyB_cash_id: cash_CompanyB_data.id,
              CompanyB_cash: cash_CompanyB_data.amount,
              CompanyB_cash_use: cash_CompanyB_data.repay,
              CompanyB_cash_rate: cash_CompanyB_data.rate,

              CompanyA_otherLiquidAssets_id: other_assets_CompanyA_data.id,
              CompanyA_otherLiquidAssets: other_assets_CompanyA_data.amount,
              CompanyA_otherLiquidAssets_use: other_assets_CompanyA_data.repay,
              CompanyA_otherLiquidAssets_rate: other_assets_CompanyA_data.rate,
              CompanyB_otherLiquidAssets_id: other_assets_CompanyB_data.id,
              CompanyB_otherLiquidAssets: other_assets_CompanyB_data.amount,
              CompanyB_otherLiquidAssets_use: other_assets_CompanyB_data.repay,
              CompanyB_otherLiquidAssets_rate: other_assets_CompanyB_data.rate,

              CompanyA_mortgageDebt_id: mortgages_CompanyA_data.id,
              CompanyA_mortgageDebt: mortgages_CompanyA_data.amount,
              CompanyA_mortgageDebt_repay: mortgages_CompanyA_data.repay,
              CompanyA_mortgageDebt_rate: mortgages_CompanyA_data.rate,
              CompanyB_mortgageDebt_id: mortgages_CompanyB_data.id,
              CompanyB_mortgageDebt: mortgages_CompanyB_data.amount,
              CompanyB_mortgageDebt_repay: mortgages_CompanyB_data.repay,
              CompanyB_mortgageDebt_rate: mortgages_CompanyB_data.rate,

              CompanyA_shareOfJVDebt_id: JVdebt_CompanyA_data.id,
              CompanyA_shareOfJVDebt: JVdebt_CompanyA_data.amount,
              CompanyA_shareOfJVDebt_repay: JVdebt_CompanyA_data.repay,
              CompanyA_shareOfJVDebt_rate: JVdebt_CompanyA_data.rate,
              CompanyB_shareOfJVDebt_id: JVdebt_CompanyB_data.id,
              CompanyB_shareOfJVDebt: JVdebt_CompanyB_data.amount,
              CompanyB_shareOfJVDebt_repay: JVdebt_CompanyB_data.repay,
              CompanyB_shareOfJVDebt_rate: JVdebt_CompanyB_data.rate,

              CompanyA_bonds_id: bonds_CompanyA_data.id,
              CompanyA_bonds: bonds_CompanyA_data.amount,
              CompanyA_bonds_repay: bonds_CompanyA_data.repay,
              CompanyA_bonds_rate: bonds_CompanyA_data.rate,
              CompanyB_bonds_id: bonds_CompanyB_data.id,
              CompanyB_bonds: bonds_CompanyB_data.amount,
              CompanyB_bonds_repay: bonds_CompanyB_data.repay,
              CompanyB_bonds_rate: bonds_CompanyB_data.rate,

              CompanyA_creditFacility_id: facility_CompanyA_data.id,
              CompanyA_creditFacility: facility_CompanyA_data.amount,
              CompanyA_creditFacility_repay: facility_CompanyA_data.repay,
              CompanyA_creditFacility_rate: facility_CompanyA_data.rate,
              CompanyB_creditFacility_id: facility_CompanyB_data.id,
              CompanyB_creditFacility: facility_CompanyB_data.amount,
              CompanyB_creditFacility_repay: facility_CompanyB_data.repay,
              CompanyB_creditFacility_rate: facility_CompanyB_data.rate,

              CompanyA_mezzDebt_id: mezz_CompanyA_data.id,
              CompanyA_mezzDebt: mezz_CompanyA_data.amount,
              CompanyA_mezzDebt_repay: mezz_CompanyA_data.repay,
              CompanyA_mezzDebt_rate: mezz_CompanyA_data.rate,
              CompanyB_mezzDebt_id: mezz_CompanyB_data.id,
              CompanyB_mezzDebt: mezz_CompanyB_data.amount,
              CompanyB_mezzDebt_repay: mezz_CompanyB_data.repay,
              CompanyB_mezzDebt_rate: mezz_CompanyB_data.rate,

              CompanyA_preferredEquity_id: pref_CompanyA_data.id,
              CompanyA_preferredEquity: pref_CompanyA_data.amount,
              CompanyA_preferredEquity_repay: pref_CompanyA_data.repay,
              CompanyA_preferredEquity_rate: pref_CompanyA_data.rate,
              CompanyB_preferredEquity_id: pref_CompanyB_data.id,
              CompanyB_preferredEquity: pref_CompanyB_data.amount,
              CompanyB_preferredEquity_repay: pref_CompanyB_data.repay,
              CompanyB_preferredEquity_rate: pref_CompanyB_data.rate
            },
            CashFlowFormData: {
              CompanyA_FFOPerShare_id: FFO_CompanyA_data.id,
              CompanyA_FFOPerShare_1: FFO_CompanyA_data.amount_year1,
              CompanyB_FFOPerShare_id: FFO_CompanyB_data.id,
              CompanyB_FFOPerShare_1: FFO_CompanyB_data.amount_year1,

              CompanyA_AFFOPerShare_id: AFFO_CompanyA_data.id,
              CompanyA_AFFOPerShare_1: AFFO_CompanyA_data.amount_year1,
              CompanyB_AFFOPerShare_id: AFFO_CompanyB_data.id,
              CompanyB_AFFOPerShare_1: AFFO_CompanyB_data.amount_year1,

              CompanyA_revenue_id: revenue_CompanyA_data.id,
              CompanyA_revenue_1: revenue_CompanyA_data.amount_year1,
              CompanyB_revenue_id: revenue_CompanyB_data.id,
              CompanyB_revenue_1: revenue_CompanyB_data.amount_year1,

              CompanyA_NOI_id: NOI_CompanyA_data.id,
              CompanyA_NOI_1: NOI_CompanyA_data.amount_year1,
              CompanyB_NOI_id: NOI_CompanyB_data.id,
              CompanyB_NOI_1: NOI_CompanyB_data.amount_year1,

              CompanyA_GA_id: GA_CompanyA_data.id,
              CompanyA_GA_1: GA_CompanyA_data.amount_year1,
              CompanyB_GA_id: GA_CompanyB_data.id,
              CompanyB_GA_1: GA_CompanyB_data.amount_year1,

              CompanyA_EBITDA_id: EBITDA_CompanyA_data.id,
              CompanyA_EBITDA_1: EBITDA_CompanyA_data.amount_year1,
              CompanyB_EBITDA_id: EBITDA_CompanyB_data.id,
              CompanyB_EBITDA_1: EBITDA_CompanyB_data.id,
            },
            TransactionCostsFormData: {
             Deal_costs_id: deal_costs_data.id,
             Deal_costs_type: deal_costs_data.input_type,
             Deal_costs_input: deal_costs_data.data_input,
             CompanyA_LAO_costs_id: LAO_CompanyA_data.id,
             CompanyA_LAO_costs_type: LAO_CompanyA_data.input_type,
             CompanyA_LAO_costs_input: LAO_CompanyA_data.data_input,
             CompanyB_LAO_costs_id: LAO_CompanyB_data.id,
             CompanyB_LAO_costs_type: LAO_CompanyB_data.input_type,
             CompanyB_LAO_costs_input: LAO_CompanyB_data.data_input,

             Swap_Breakage_id: swap_breakage_data.id,
             Swap_Breakage_type: swap_breakage_data.input_type,
             Swap_Breakage_input: swap_breakage_data.data_input,
             Debt_Prepayment_id: debt_prepayment_data.id,
             Debt_Prepayment_type: debt_prepayment_data.input_type,
             Debt_Prepayment_input: debt_prepayment_data.data_input,
             Debt_Assumption_id: debt_assumption_data.id,
             Debt_Assumption_type: debt_assumption_data.input_type,
             Debt_Assumption_input: debt_assumption_data.data_input,
             Debt_Issuance_id: debt_issuance_data.id,
             Debt_Issuance_type: debt_issuance_data.input_type,
             Debt_Issuance_input: debt_issuance_data.data_input,

             Bond_Prepayment_id: bond_prepayment_data.id,
             Bond_Prepayment_input: bond_prepayment_data.data_input,
             Transfer_Taxes_id: transfer_taxes_data.id,
             Transfer_Taxes_input: transfer_taxes_data.data_input,
             Employee_Costs_id: employee_costs_data.id,
             Employee_Costs_input: employee_costs_data.data_input,
             Other_Costs_id: other_costs_data.id,
             Other_Costs_input: other_costs_data.data_input
           },
       TransactionAdjustmentsFormData: {
            Synergies_id: synergies_1_data.id,
            Synergies_type: synergies_1_data.item_type,
            Synergies_input: synergies_1_data.input_amount,
            New_financing_1_id: new_financing_1_data.id,
            New_financing_1_rate: new_financing_1_data.rate,
            New_financing_1_amount: new_financing_1_data.amount,
            New_financing_1_type_of: new_financing_1_data.item_type,
            New_financing_1_plug:
            new_financing_1_data.plug,
            New_financing_2_id: new_financing_2_data.id,
            New_financing_2_rate: new_financing_2_data.rate,
            New_financing_2_amount: new_financing_2_data.amount,
            New_financing_2_type_of: new_financing_2_data.item_type,
            New_financing_2_plug:
            new_financing_2_data.plug,
            New_financing_3_id: new_financing_3_data.id,
            New_financing_3_rate: new_financing_3_data.rate,
            New_financing_3_amount: new_financing_3_data.amount,
            New_financing_3_type_of: new_financing_3_data.item_type,New_financing_3_plug:
            new_financing_3_data.plug
          },

           FormCompletedStatus:{
             newModelFormData: true,
             BasicInfoFormData: basic_data.length > 0 ? true : false,
             EquityFormData: equity_data.length > 0 ? true : false,
             OfferFormData: offer_data.length > 0 ? true : false,
             CapitalizationFormData: capitalization_data.length > 0 ? true : false,
             CashFlowFormData: cash_flow_data.length > 0 ? true : false,
             TransactionCostsFormData: cost_data.length > 0 ? true : false,
             TransactionAdjustmentsFormData: (new_financing_data.length > 0 && synergies_data.length > 0) ? true : false,
           },
           showOutputs:
               model_id !== "" &&
               model_name !== "" &&
               basic_data.length > 0 &&
               equity_data.length > 0 &&
               offer_data.length > 0 &&
               capitalization_data.length > 0 &&
               cash_flow_data.length > 0 &&
               cost_data.length > 0 &&
               new_financing_data.length > 0 &&
               synergies_data.length > 0

}

 // add transaction adjustments to status above

    //
    // case 'ADD_COMPANY':
    //   return state.concat(action.company);
    //
    // case 'REMOVE_COMPANY':
    //   return state.filter(company => company.id !== action.companyId);

      // case "SELECT_COMPANY":
      //   return {
      //     ...state,
      //     newProjectFormData: action.payload
      //   };

      case "UPDATE_NEWPROJECT_FORM":
        return {
          ...state,
          newProjectFormData: {...state.newProjectFormData, ...action.payload}
        }


      case "UPDATE_NEWMODEL_FORM":
        return {
          ...state,
          newModelFormData: {...state.newModelFormData, ...action.payload}
        }

        case "UPDATE_BASICINFO_FORM":
          return {
            ...state,
            BasicInfoFormData: {...state.BasicInfoFormData, ...action.payload}
          }

        case "UPDATE_EQUITYINFO_FORM":
          return {
            ...state,
            EquityFormData: {...state.EquityFormData, ...action.payload}
          }

        case "UPDATE_OFFER_FORM":
          return {
            ...state,
            OfferFormData: {...state.OfferFormData, ...action.payload}
          }

        case "UPDATE_CAPITALIZATION_FORM":
          return {
            ...state,
            CapitalizationFormData: {...state.CapitalizationFormData, ...action.payload}
          }

        case "UPDATE_CASHFLOW_FORM":
          return {
            ...state,
            CashFlowFormData: {...state.CashFlowFormData, ...action.payload}
          }

        case "UPDATE_TRANSACTIONCOSTS_FORM":
          return {
            ...state,
            TransactionCostsFormData: {...state.TransactionCostsFormData, ...action.payload}
          }

      case "UPDATE_TRANSACTIONADJUSTMENTS_FORM":
        return {
          ...state,
          TransactionAdjustmentsFormData: {...state.TransactionAdjustmentsFormData, ...action.payload}
        }
        // case "SUBMIT_NEWPROJECT_FORM":
        //   return {
        //     ...state,
        //     selectedProjectData: {...state.selectedProjectData, ...action.payload.selectedProjectData}
        //   }

        case "SELECT_PROJECT":
         let projectToSet = state.allProjects.find(project => project.id === parseInt(action.payload.id, 10))
          return {
            ...state,
            selectedProjectData: projectToSet
            }

      // case "SELECT_MODEL":
      //  let modelToSet = state.allModelsforProject.find(model => model.id === parseInt(action.payload.id, 10))
      //  let data2 = modelToSet.data
      //  modelToSet.data = data2
      //   return {
      //     ...state,
      //     modelData: {...state.modelData, ...modelToSet,
      //     project_id: state.selectedProjectData.id}
      //     }

        case "SET_NEW_PROJECT":
         return {
                 ...state,
                 selectedProjectData: action.payload
               };

       case "UPDATE_MODELDATA":
         return {
           ...state,
           modelData: {...state.modelData, ...action.payload}
         }

       case "UPDATE_BASICINFO_DATA":
         return {
           ...state,
           modelData: {...state.modelData,
           basic_info_datum: state.modelData.basic_info_datum.map(item => {
             if(item.id === action.payload.id) {
               return action.payload
             } else {
               return item
             }
           })
           }
         }

       case "SAVE_BASICINFO_DATA":
       let data
       let CompanyA_ID
       let CompanyB_ID
       data = action.payload
       CompanyA_ID = data.company === "A" ?
        data.id : ""
       CompanyB_ID = data.company === "B" ?
         data.id : ""

         return {
           ...state,
           modelData: {...state.modelData,
            basic_info_datum:[      ...state.modelData.basic_info_datum, {...action.payload}]},
          BasicInfoFormData: {...state.BasicInfoFormData,
            CompanyA_id: CompanyA_ID !== "" ? CompanyA_ID : state.BasicInfoFormData.CompanyA_id,
            CompanyB_id: CompanyB_ID !== "" ? CompanyB_ID : state.BasicInfoFormData.CompanyB_id,
            }
          }

          case "UPDATE_EQUITY_DATA":
            return {
              ...state,
              modelData: {...state.modelData,
              equity_info_datum: state.modelData.equity_info_datum.map(item => {
                if(item.id === action.payload.id) {
                  return action.payload
                } else {
                  return item
                }
              })
              }
            }

         case "SAVE_EQUITY_DATA":
         let equityData = action.payload
         let ED_CompanyA_ID = equityData.company === "A" ?
          equityData.id : ""
         let ED_CompanyB_ID = equityData.company === "B" ?
           equityData.id : ""

           return {
             ...state,
             modelData: {...state.modelData,
              equity_info_datum:[      ...state.modelData.equity_info_datum, {...action.payload}]},
            EquityFormData: {...state.EquityFormData,
              CompanyA_id: ED_CompanyA_ID !== "" ? ED_CompanyA_ID : state.EquityFormData.CompanyA_id,
              CompanyB_id: ED_CompanyB_ID !== "" ? ED_CompanyB_ID : state.EquityFormData.CompanyB_id,
              }
            }

             case "UPDATE_OFFER_DATA":
               return {
                 ...state,
                 modelData: {...state.modelData,
                 offer_info_datum: state.modelData.offer_info_datum.map(item => {
                   if(item.id === action.payload.id) {
                     return action.payload
                   } else {
                     return item
                   }
                 })
                 }
               }

           case "SAVE_OFFER_DATA":
           data = action.payload
           let item_ID = data.id ? data.id : ""

             return {
               ...state,
               modelData: {...state.modelData,
                offer_info_datum:[      ...state.modelData.offer_info_datum, {...action.payload}]},
              OfferFormData: {...state.OfferFormData,
                Offer_id: item_ID !== "" ? item_ID : state.OfferFormData.Offer_id
                }
              }

         case "UPDATE_CAPITALIZATION_DATA":
           return {
             ...state,
             modelData: {...state.modelData,
             capitalization_info_datum: state.modelData.capitalization_info_datum.map(item => {
               if(item.id === action.payload.id) {
                 return action.payload
               } else {
                 return item
               }
             })
             }
           }

       case "SAVE_CAPITALIZATION_DATA":
        let capData = action.payload

        let cash_CompanyA_ID = (capData.item_name === "cash_and_equivalents" && capData.company === "A" ) ? capData.id : ""

        let cash_CompanyB_ID = (capData.item_name === "cash_and_equivalents" && capData.company === "B" ) ? capData.id : ""

        let other_assets_CompanyA_ID = (capData.item_name === "other_liquid_assets" && capData.company === "A" ) ? capData.id : ""

        let other_assets_CompanyB_ID = (capData.item_name === "other_liquid_assets" && capData.company === "B" ) ? capData.id : ""

        let mortgages_CompanyA_ID = (capData.item_name === "mortgage_debt" && capData.company === "A" ) ? capData.id : ""

        let mortgages_CompanyB_ID = (capData.item_name === "mortgage_debt" && capData.company === "B" ) ? capData.id : ""

        let JVdebt_CompanyA_ID = (capData.item_name === "share_JV_debt" && capData.company === "A" ) ? capData.id : ""

        let JVdebt_CompanyB_ID = (capData.item_name === "share_JV_debt" && capData.company === "B" ) ? capData.id : ""

        let bonds_CompanyA_ID = (capData.item_name === "bonds" && capData.company === "A" ) ? capData.id : ""

        let bonds_CompanyB_ID = (capData.item_name === "bonds" && capData.company === "B" ) ? capData.id : ""

        let facility_CompanyA_ID = (capData.item_name === "credit_facility" && capData.company === "A" ) ? capData.id : ""

        let facility_CompanyB_ID = (capData.item_name === "credit_facility" && capData.company === "B" ) ? capData.id : ""

        let mezz_CompanyA_ID = (capData.item_name === "mezz_debt" && capData.company === "A" ) ? capData.id : ""

        let mezz_CompanyB_ID = (capData.item_name === "mezz_debt" && capData.company === "B" ) ? capData.id : ""

        let pref_CompanyA_ID = (capData.item_name === "preferred_equity" && capData.company === "A" ) ? capData.id : ""

        let pref_CompanyB_ID = (capData.item_name === "preferred_equity" && capData.company === "B" ) ? capData.id : ""

         return {
           ...state,
           modelData: {...state.modelData,
            capitalization_info_datum:[      ...state.modelData.capitalization_info_datum, {...action.payload}]},
          CapitalizationFormData: {...state.CapitalizationFormData,
            CompanyA_cash_id: cash_CompanyA_ID !== "" ? cash_CompanyA_ID : state.CapitalizationFormData.CompanyA_cash_id,
            CompanyB_cash_id:  cash_CompanyB_ID !== "" ? cash_CompanyB_ID : state.CapitalizationFormData.CompanyB_cash_id,

            CompanyA_otherLiquidAssets_id: other_assets_CompanyA_ID !== "" ? other_assets_CompanyA_ID : state.CapitalizationFormData.CompanyA_otherLiquidAssets_id,
            CompanyB_otherLiquidAssets_id: other_assets_CompanyB_ID !== "" ? other_assets_CompanyB_ID : state.CapitalizationFormData.CompanyB_otherLiquidAssets_id,

            CompanyA_mortgageDebt_id: mortgages_CompanyA_ID !== "" ? mortgages_CompanyA_ID : state.CapitalizationFormData.CompanyA_mortgageDebt_id,
            CompanyB_mortgageDebt_id: mortgages_CompanyB_ID !== "" ? mortgages_CompanyB_ID : state.CapitalizationFormData.CompanyB_mortgageDebt_id,

            CompanyA_shareOfJVDebt_id: JVdebt_CompanyA_ID !== "" ? JVdebt_CompanyA_ID : state.CapitalizationFormData.CompanyA_shareOfJVDebt_id,
            CompanyB_shareOfJVDebt_id: JVdebt_CompanyB_ID !== "" ? JVdebt_CompanyB_ID : state.CapitalizationFormData.CompanyB_shareOfJVDebt_id,

            CompanyA_bonds_id: bonds_CompanyA_ID !== "" ? bonds_CompanyA_ID : state.CapitalizationFormData.CompanyA_bonds_id,
            CompanyB_bonds_id: bonds_CompanyB_ID !== "" ? bonds_CompanyB_ID : state.CapitalizationFormData.CompanyB_bonds_id,

            CompanyA_creditFacility_id: facility_CompanyA_ID !== "" ? facility_CompanyA_ID : state.CapitalizationFormData.CompanyA_creditFacility_id,
            CompanyB_creditFacility_id: facility_CompanyB_ID !== "" ? facility_CompanyB_ID : state.CapitalizationFormData.CompanyB_creditFacility_id,

            CompanyA_mezzDebt_id: mezz_CompanyA_ID !== "" ? mezz_CompanyA_ID : state.CapitalizationFormData.CompanyA_mezzDebt_id,
            CompanyB_mezzDebt_id:  mezz_CompanyB_ID !== "" ? mezz_CompanyB_ID : state.CapitalizationFormData.CompanyB_mezzDebt_id,

            CompanyA_preferredEquity_id: pref_CompanyA_ID  !== "" ? pref_CompanyA_ID : state.CapitalizationFormData.CompanyA_preferredEquity_id,
            CompanyB_preferredEquity_id:  pref_CompanyB_ID  !== "" ? pref_CompanyB_ID : state.CapitalizationFormData.CompanyB_preferredEquity_id,
            }
          }

        case "UPDATE_CASHFLOW_DATA":
          return {
            ...state,
            modelData: {...state.modelData,
            cash_flow_info_datum: state.modelData.cash_flow_info_datum.map(item => {
              if(item.id === action.payload.id) {
                return action.payload
              } else {
                return item
              }
            })
            }
          }

      case "SAVE_CASHFLOW_DATA":
          let CFData = action.payload

          let FFO_CompanyA_ID = (CFData.item_name === "FFO_Per_Share" && CFData.company === "A" ) ? CFData.id : ""

          let FFO_CompanyB_ID = (CFData.item_name === "FFO_Per_Share" && CFData.company === "B" ) ? CFData.id : ""

          let AFFO_CompanyA_ID = (CFData.item_name === "AFFO_Per_Share" && CFData.company === "A" ) ? CFData.id : ""

          let AFFO_CompanyB_ID = (CFData.item_name === "AFFO_Per_Share" && CFData.company === "B" ) ? CFData.id : ""

          let revenue_CompanyA_ID = (CFData.item_name === "Revenue" && CFData.company === "A" ) ? CFData.id : ""

          let revenue_CompanyB_ID = (CFData.item_name === "Revenue" && CFData.company === "B" ) ? CFData.id : ""

          let NOI_CompanyA_ID = (CFData.item_name === "NOI" && CFData.company === "A" ) ? CFData.id : ""

          let NOI_CompanyB_ID = (CFData.item_name === "NOI" && CFData.company === "B" ) ? CFData.id : ""

          let GA_CompanyA_ID = (CFData.item_name === "GA" && CFData.company === "A" ) ? CFData.id : ""

          let GA_CompanyB_ID = (CFData.item_name === "GA" && CFData.company === "B" ) ? CFData.id : ""

          let EBITDA_CompanyA_ID = (CFData.item_name === "EBITDA" && CFData.company === "A" ) ? CFData.id : ""

          let EBITDA_CompanyB_ID = (CFData.item_name === "EBITDA" && CFData.company === "B" ) ? CFData.id : ""

        return {
          ...state,
          modelData: {...state.modelData,
           cash_flow_info_datum:[      ...state.modelData.cash_flow_info_datum, {...action.payload}]},
           CashFlowFormData: {...state.CashFlowFormData,

             CompanyA_FFOPerShare_id: FFO_CompanyA_ID !== "" ? FFO_CompanyA_ID : state.CashFlowFormData.CompanyA_FFOPerShare_id,
             CompanyB_FFOPerShare_id: FFO_CompanyB_ID !== "" ? FFO_CompanyB_ID : state.CashFlowFormData.CompanyB_FFOPerShare_id,

             CompanyA_AFFOPerShare_id: AFFO_CompanyA_ID !== "" ? AFFO_CompanyA_ID : state.CashFlowFormData.CompanyA_AFFOPerShare_id,
             CompanyB_AFFOPerShare_id: AFFO_CompanyB_ID !== "" ? AFFO_CompanyB_ID : state.CashFlowFormData.CompanyB_AFFOPerShare_id,

             CompanyA_revenue_id: revenue_CompanyA_ID !== "" ? revenue_CompanyA_ID : state.CashFlowFormData.CompanyA_revenue_id,
             CompanyB_revenue_id:  revenue_CompanyB_ID !== "" ? revenue_CompanyB_ID : state.CashFlowFormData.CompanyB_revenue_id,

             CompanyA_NOI_id: NOI_CompanyA_ID !== "" ? NOI_CompanyA_ID : state.CashFlowFormData.CompanyA_NOI_id,
             CompanyB_NOI_id: NOI_CompanyB_ID !== "" ? NOI_CompanyB_ID : state.CashFlowFormData.CompanyB_NOI_id,

             CompanyA_GA_id: GA_CompanyA_ID !== "" ? GA_CompanyA_ID : state.CashFlowFormData.CompanyA_GA_id,
             CompanyB_GA_id: GA_CompanyB_ID !== "" ? GA_CompanyB_ID : state.CashFlowFormData.CompanyB_GA_id,

             CompanyA_EBITDA_id: EBITDA_CompanyA_ID !== "" ? EBITDA_CompanyA_ID : state.CashFlowFormData.CompanyA_EBITDA_id,
             CompanyB_EBITDA_id: EBITDA_CompanyB_ID !== "" ? EBITDA_CompanyB_ID : state.CashFlowFormData.CompanyB_EBITDA_id,
           }
         }

     case "UPDATE_TRANSACTIONCOSTS_DATA":
       return {
         ...state,
         modelData: {...state.modelData,
         transaction_cost: state.modelData.transaction_cost.map(item => {
           if(item.id === action.payload.id) {
             return action.payload
           } else {
             return item
           }
         })
         }
       }

   case "SAVE_TRANSACTIONCOSTS_DATA":
    let costData = action.payload
    let Deal_costs_ID = (costData.name === "Overall_deal_costs") ? costData.id : ""
    let LAO_CompanyA_costs_ID = (costData.name === "CompanyA_LAO_costs") ? costData.id : ""
    let LAO_CompanyB_costs_ID = (costData.name === "CompanyB_LAO_costs") ? costData.id : ""
    let Swap_Breakage_ID = (costData.name === "swap_breakage_costs") ? costData.id : ""
    let Debt_Prepayment_ID = (costData.name === "debt_prepayment_costs") ? costData.id : ""
    let Debt_Assumption_ID = (costData.name === "debt_assumption_costs") ? costData.id : ""
    let Debt_Issuance_ID = (costData.name === "debt_issuance_costs") ? costData.id : ""
    let Bond_Prepayment_ID = (costData.name === "bond_prepayment_costs") ? costData.id : ""
    let Transfer_Taxes_ID = (costData.name === "transfer_taxes") ? costData.id : ""
    let Employee_Costs_ID = (costData.name === "employee_costs") ? costData.id : ""
    let Other_Costs_ID = (costData.name === "other_costs") ? costData.id : ""


     return {
       ...state,
       modelData: {...state.modelData,
        transaction_cost:[      ...state.modelData.transaction_cost, {...action.payload}]},
        TransactionCostsFormData: {...state.TransactionCostsFormData,

        Deal_costs_id: Deal_costs_ID !== "" ? Deal_costs_ID : state.TransactionCostsFormData.Deal_costs_id,
        CompanyA_LAO_costs_id: LAO_CompanyA_costs_ID !== "" ? LAO_CompanyA_costs_ID : state.TransactionCostsFormData.CompanyA_LAO_costs_id,
        CompanyB_LAO_costs_id: LAO_CompanyB_costs_ID !== "" ? LAO_CompanyB_costs_ID : state.TransactionCostsFormData.CompanyB_LAO_costs_id,

        Swap_Breakage_id: Swap_Breakage_ID !== "" ? Swap_Breakage_ID : state.TransactionCostsFormData.Swap_Breakage_id,
        Debt_Prepayment_id: Debt_Prepayment_ID !== "" ? Debt_Prepayment_ID : state.TransactionCostsFormData.Debt_Prepayment_id,
        Debt_Assumption_id: Debt_Assumption_ID !== "" ? Debt_Assumption_ID : state.TransactionCostsFormData.Debt_Assumption_id,
        Debt_Issuance_id: Debt_Issuance_ID !== "" ? Debt_Issuance_ID : state.TransactionCostsFormData.Debt_Issuance_id,

        Bond_Prepayment_id: Bond_Prepayment_ID !== "" ? Bond_Prepayment_ID : state.TransactionCostsFormData.Bond_Prepayment_id,
        Transfer_Taxes_id: Transfer_Taxes_ID !== "" ? Transfer_Taxes_ID : state.TransactionCostsFormData.Transfer_Taxes_id,
        Employee_Costs_id: Employee_Costs_ID !== "" ? Employee_Costs_ID : state.TransactionCostsFormData.Employee_Costs_id,
        Other_Costs_id: Other_Costs_ID !== "" ? Other_Costs_ID : state.TransactionCostsFormData.Other_Costs_id,
        }
      }

      case "UPDATE_SYNERGIES_DATA":
        return {
          ...state,
          modelData: {...state.modelData,
          synergies_info_datum: state.modelData.synergies_info_datum.map(item => {
            if(item.id === action.payload.id) {
              return action.payload
            } else {
              return item
            }
          })
          }
        }

    case "SAVE_SYNERGIES_DATA":
      let synergiesData = action.payload
      let Synergies_ID = (synergiesData.item_name === "GA_synergies") ? synergiesData.id : ""

      return {
        ...state,
        modelData: {...state.modelData,
         synergies_info_datum:[      ...state.modelData.synergies_info_datum, {...action.payload}]},
        TransactionAdjustmentsFormData: {...state.TransactionAdjustmentsFormData,
         Synergies_id: Synergies_ID !== "" ? Synergies_ID : state.TransactionAdjustmentsFormData.Synergies_id,
       }
      }


     case "UPDATE_NEWFINANCING_DATA":
       return {
         ...state,
         modelData: {...state.modelData,
         new_financing_info_datum: state.modelData.new_financing_info_datum.map(item => {
           if(item.id === action.payload.id) {
             return action.payload
           } else {
             return item
           }
         })
         }
       }

   case "SAVE_NEWFINANCING_DATA":
    let finData = action.payload
    let New_fin_1_ID = (finData.item_name === "New_financing_1") ? finData.id : ""
    let New_fin_2_ID = (finData.item_name === "New_financing_2") ? finData.id : ""
    let New_fin_3_ID = (finData.item_name === "New_financing_3") ? finData.id : ""

     return {
       ...state,
       modelData: {...state.modelData,
        new_financing_info_datum:[      ...state.modelData.new_financing_info_datum, {...action.payload}]},
      TransactionAdjustmentsFormData: {...state.TransactionAdjustmentsFormData,
        New_financing_1_id: New_fin_1_ID !== "" ? New_fin_1_ID : state.TransactionAdjustmentsFormData.New_financing_1_id,
        New_financing_2_id: New_fin_2_ID !== "" ? New_fin_2_ID : state.TransactionAdjustmentsFormData.New_financing_2_id,
        New_financing_3_id: New_fin_3_ID !== "" ? New_fin_3_ID : state.TransactionAdjustmentsFormData.New_financing_3_id,
        }
      }



       case "SET_NEW_MODEL":
        return {
                ...state,
                modelData: action.payload
              };

      case "EDIT_MODEL":
       return {
               ...state,
               modelData: action.payload
             };

       case "RESET_MODEL_DATA":
        return {
                ...state,
                modelData: {},
                allModelsforProject: [],
                selectedProjectData: {}
              };

      case "CLEAR_FORMS":
       return {
            ...state,
            newModelFormData: {
              project_id: '',
              name: '',
              model_type: '',
            },
            BasicInfoFormData: {
              CompanyA_id: "",
              CompanyB_id: "",
              CompanyA_ticker: "",
              CompanyB_ticker: "",
              CompanyA_codename: "",
              CompanyB_codename: "",
              CompanyA_acquiror: false},
            EquityFormData: {
              CompanyA_id: "",
              CompanyB_id: "",
              CompanyA_currentSharePrice: "",
              CompanyB_currentSharePrice: "",
              CompanyA_shares: "",
              CompanyB_shares: "",
              CompanyA_dividend: "",
              CompanyB_dividend: ""},
            OfferFormData: {
              Offer_id: "",
              OfferType: 'SetAmount',
              OfferMetric: '',
              Percentage_Stock: ''},
            CapitalizationFormData: {
              CompanyA_cash_id: "",
              CompanyA_cash: '',
              CompanyA_cash_use: false,
              CompanyA_cash_rate: '',
              CompanyB_cash_id: "",
              CompanyB_cash: '',
              CompanyB_cash_use: false,
              CompanyB_cash_rate: '',

              CompanyA_otherLiquidAssets_id: "",
              CompanyA_otherLiquidAssets: '',
              CompanyA_otherLiquidAssets_use: false,
              CompanyA_otherLiquidAssets_rate: '',
              CompanyB_otherLiquidAssets_id: "",
              CompanyB_otherLiquidAssets: '',
              CompanyB_otherLiquidAssets_use: false,
              CompanyB_otherLiquidAssets_rate: '',

              CompanyA_mortgageDebt_id: "",
              CompanyA_mortgageDebt: '',
              CompanyA_mortgageDebt_repay: false,
              CompanyA_mortgageDebt_rate: '',
              CompanyB_mortgageDebt_id: "",
              CompanyB_mortgageDebt: '',
              CompanyB_mortgageDebt_repay: false,
              CompanyB_mortgageDebt_rate: '',

              CompanyA_shareOfJVDebt_id: "",
              CompanyA_shareOfJVDebt: '',
              CompanyA_shareOfJVDebt_repay: false,
              CompanyA_shareOfJVDebt_rate: '',
              CompanyB_shareOfJVDebt_id: "",
              CompanyB_shareOfJVDebt: '',
              CompanyB_shareOfJVDebt_repay: false,
              CompanyB_shareOfJVDebt_rate: '',

              CompanyA_bonds_id: "",
              CompanyA_bonds: '',
              CompanyA_bonds_repay: false,
              CompanyA_bonds_rate: '',
              CompanyB_bonds_id: "",
              CompanyB_bonds: '',
              CompanyB_bonds_repay: false,
              CompanyB_bonds_rate: '',

              CompanyA_creditFacility_id: "",
              CompanyA_creditFacility: '',
              CompanyA_creditFacility_repay: false,
              CompanyA_creditFacility_rate: '',
              CompanyB_creditFacility_id: "",
              CompanyB_creditFacility: '',
              CompanyB_creditFacility_repay: false,
              CompanyB_creditFacility_rate: '',

              CompanyA_mezzDebt_id: "",
              CompanyA_mezzDebt: '',
              CompanyA_mezzDebt_repay: false,
              CompanyA_mezzDebt_rate: '',
              CompanyB_mezzDebt_id: "",
              CompanyB_mezzDebt: '',
              CompanyB_mezzDebt_repay: false,
              CompanyB_mezzDebt_rate: '',

              CompanyA_preferredEquity_id: "",
              CompanyA_preferredEquity: '',
              CompanyA_preferredEquity_repay: false,
              CompanyA_preferredEquity_rate: '',
              CompanyB_preferredEquity_id: '',
              CompanyB_preferredEquity: '',
              CompanyB_preferredEquity_repay: false,
              CompanyB_preferredEquity_rate: ''
            },
            CashFlowFormData: {
              CompanyA_FFOPerShare_id: "",
              CompanyA_FFOPerShare_1: "",
              CompanyB_FFOPerShare_id: "",
              CompanyB_FFOPerShare_1: "",

              CompanyA_AFFOPerShare_id: "",
              CompanyA_AFFOPerShare_1: "",
              CompanyB_AFFOPerShare_id: "",
              CompanyB_AFFOPerShare_1: "",

              CompanyA_revenue_id: "",
              CompanyA_revenue_1: "",
              CompanyB_revenue_id: "",
              CompanyB_revenue_1: "",

              CompanyA_NOI_id: "",
              CompanyA_NOI_1: "",
              CompanyB_NOI_id: "",
              CompanyB_NOI_1: "",

              CompanyA_GA_id: "",
              CompanyA_GA_1: "",
              CompanyB_GA_id: "",
              CompanyB_GA_1: "",

              CompanyA_EBITDA_id: "",
              CompanyA_EBITDA_1: "",
              CompanyB_EBITDA_id: "",
              CompanyB_EBITDA_1: "",
            },
             TransactionCostsFormData: {
              Deal_costs_id: "",
              Deal_costs_type: "",
              Deal_costs_input: "",
              CompanyA_LAO_costs_id: "",
              CompanyA_LAO_costs_type: "",
              CompanyA_LAO_costs_input: "",
              CompanyB_LAO_costs_id: "",
              CompanyB_LAO_costs_type: "",
              CompanyB_LAO_costs_input: "",

              Swap_Breakage_id: "",
              Swap_Breakage_type: "",
              Swap_Breakage_input: "",
              Debt_Prepayment_id: "",
              Debt_Prepayment_type: "",
              Debt_Prepayment_input: "",
              Debt_Assumption_id: "",
              Debt_Assumption_type: "",
              Debt_Assumption_input: "",
              Debt_Issuance_id: "",
              Debt_Issuance_type: "",
              Debt_Issuance_input: "",

              Bond_Prepayment_id: "",
              Bond_Prepayment_input: "",
              Transfer_Taxes_id: "",
              Transfer_Taxes_input: "",
              Employee_Costs_id: "",
              Employee_Costs_input: "",
              Other_Costs_id: "",
              Other_Costs_input: ""
            },
            TransactionAdjustmentsFormData: {
              Synergies_id: "",
              Synergies_type: "",
              Synergies_input: "",
              New_financing_1_id: "",
              New_financing_1_rate: "",
              New_financing_1_amount: "",
              New_financing_1_type_of: "",
              New_financing_1_plug: false,
              New_financing_2_id: "",
              New_financing_2_rate: "",
              New_financing_2_amount: "",
              New_financing_2_type_of: "",
              New_financing_2_plug: false,
              New_financing_3_id: "",
              New_financing_3_rate: "",
              New_financing_3_amount: "",
              New_financing_3_type_of: "",
              New_financing_3_plug: false,
               },
               FormCompletedStatus:{
                 newModelFormData: false,
                 BasicInfoFormData: false,
                 EquityFormData: false,
                 OfferFormData: false,
                 CapitalizationFormData: false,
                 CashFlowFormData: false,
                 TransactionCostsFormData: false,
                 TransactionAdjustmentsFormData: false,
               },
               tradingData: [],
               showOutputs: false,
               outputsData: {
                 test: true
               }
       }


      //
      // case "SET_COMPANY":
      //   return {
      //     ...state,
      //     modelData: state.modelData.map(company => {
      //       if(company.id === action.payload.id) {
      //         return action.payload
      //       } else {
      //         return company
      //     }
      //   })
      // }
      case "CHANGE_FORM_STATUS":
        return {
          ...state,
          FormCompletedStatus: {...state.FormCompletedStatus,
          [action.payload]: true}
        }

      case "SHOW_OUTPUTS":
       return {
               ...state,
               showOutputs: true
             };

     case "HIDE_OUTPUTS":
      return {
              ...state,
              showOutputs: false
            };


      case "CALCULATE_OUTPUTS":

         return {
           ...state,
           outputsData: action.payload
      }

      case "ADD_TRADING_DATA":
       let input = action.payload ? action.payload : ""
        return {
          ...state,
          tradingData: [...state.tradingData, [...input]]
        }


    default:
      return state;
  }
}
// case "UPDATE_MODELDATA":
//   return {
//     ...state,
//     modelData: {...state.modelData,
//     data:      {...state.modelData.data, ...action.payload}}
//   }

//
// case "UPDATE_BASICINFO_DATA":
//   return {
//     ...state,
//     modelData: {...state.modelData,
//     basic_info_datum:      {...state.modelData.basic_info_datum, ...action.payload}}
//   }


// case "SAVE_BASICINFO_DATA":
//   return {
//     ...state,
//     modelData: {...state.modelData,
//     basic_info_datum:[      {...state.modelData.basic_info_datum {...action.payload}}]}
//    }

//
// let targetInfo = this.props.modelData.basic_info_datum.find(company => company.acquiror === false)
// let targetCompany = targetInfo.company
// let acquirorCompany = targetCompany === "B" ? "A" : "B"
// let targetEquityData = this.props.modelData.equity_info_datum.find(item => item.company === targetCompany)
// let acquirorEquityData = this.props.modelData.equity_info_datum.find(item => item.company === acquirorCompany)
// let targetCurrentPrice = parseFloat(targetEquityData.currentSharePrice)
// let acquirorCurrentPrice = parseFloat(acquirorEquityData.currentSharePrice)
// let offerData = this.props.modelData.offer_info_datum[0]
// let impliedOffer
// if (offerData.offer_type === "SetAmount") {
//   impliedOffer = parseFloat(offerData.offer_metric);
// } else if (offerData.offer_type === "%Premium"){
//   impliedOffer = targetCurrentPrice * (1 + parseFloat(offerData.offer_metric));
// } else {
//   let ratio = targetCurrentPrice / acquirorCurrentPrice
//   let impliedAllInPrice = ratio * acquirorCurrentPrice
//   let cashPercentage = 1 - parseFloat(offerData.percentage_stock)
//   let cashPerShare = impliedAllInPrice * cashPercentage
//   let remainingStockPerShare = impliedAllInPrice - cashPerShare
//   let stockExchangeRatio = remainingStockPerShare / acquirorCurrentPrice
//   let stockPerShare = stockExchangeRatio * acquirorCurrentPrice
//   impliedOffer = (cashPerShare + stockPerShare)
// }
// let premiumToCurrent = (impliedOffer / targetCurrentPrice) - 1
