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
      CompanyA_currentSharePrice: "",
      CompanyB_currentSharePrice: "",
      CompanyA_shares: "",
      CompanyB_shares: "",
      CompanyA_dividend: "",
      CompanyB_dividend: ""},
    OfferFormData: {
      OfferType: 'SetAmount',
      OfferMetric: '',
      Percentage_Stock: ''},
    CapitalizationFormData: {
      CompanyA_cash: '',
      CompanyA_cash_use: false,
      CompanyA_cash_rate: '',
      CompanyB_cash: '',
      CompanyB_cash_use: false,
      CompanyB_cash_rate: '',

      CompanyA_otherLiquidAssets: '',
      CompanyA_otherLiquidAssets_use: false,
      CompanyA_otherLiquidAssets_rate: '',
      CompanyB_otherLiquidAssets: '',
      CompanyB_otherLiquidAssets_use: false,
      CompanyB_otherLiquidAssets_rate: '',

      CompanyA_mortgageDebt: '',
      CompanyA_mortgageDebt_repay: false,
      CompanyA_mortgageDebt_rate: '',
      CompanyB_mortgageDebt: '',
      CompanyB_mortgageDebt_repay: false,
      CompanyB_mortgageDebt_rate: '',

      CompanyA_shareOfJVDebt: '',
      CompanyA_shareOfJVDebt_repay: false,
      CompanyA_shareOfJVDebt_rate: '',
      CompanyB_shareOfJVDebt: '',
      CompanyB_shareOfJVDebt_repay: false,
      CompanyB_shareOfJVDebt_rate: '',

      CompanyA_bonds: '',
      CompanyA_bonds_repay: false,
      CompanyA_bonds_rate: '',
      CompanyB_bonds: '',
      CompanyB_bonds_repay: false,
      CompanyB_bonds_rate: '',

      CompanyA_creditFacility: '',
      CompanyA_creditFacility_repay: false,
      CompanyA_creditFacility_rate: '',
      CompanyB_creditFacility: '',
      CompanyB_creditFacility_repay: false,
      CompanyB_creditFacility_rate: '',

      CompanyA_mezzDebt: '',
      CompanyA_mezzDebt_repay: false,
      CompanyA_mezzDebt_rate: '',
      CompanyB_mezzDebt: '',
      CompanyB_mezzDebt_repay: false,
      CompanyB_mezzDebt_rate: '',

      CompanyA_preferredEquity: '',
      CompanyA_preferredEquity_repay: false,
      CompanyA_preferredEquity_rate: '',
      CompanyB_preferredEquity: '',
      CompanyB_preferredEquity_repay: false,
      CompanyB_preferredEquity_rate: ''
    },
    CashFlowFormData: {
      CompanyA_FFOPerShare_1: "",
      CompanyB_FFOPerShare_1: "",
      CompanyA_AFFOPerShare_1: "",
      CompanyB_AFFOPerShare_1: "",
      CompanyA_revenue_1: "",
      CompanyB_revenue_1: "",
      CompanyA_NOI_1: "",
      CompanyB_NOI_1: "",
      CompanyA_GA_1: "",
      CompanyB_GA_1: "",
      CompanyA_EBITDA_1: "",
      CompanyB_EBITDA_1: "",
      GA_synergies_type: "",
      GA_synergies_input: ""
    },
     TransactionCostsFormData: {
      Deal_costs_type: "",
      Deal_costs_input: "",
      CompanyA_LAO_costs_type: "",
      CompanyA_LAO_costs_input: "",
      CompanyB_LAO_costs_type: "",
      CompanyB_LAO_costs_input: "",
      Swap_Breakage_type: "",
      Swap_Breakage_input: "",
      Debt_Prepayment_type: "",
      Debt_Prepayment_input: "",
      Debt_Assumption_type: "",
      Debt_Assumption_input: "",
      Debt_Issuance_type: "",
      Debt_Issuance_input: "",
      Bond_Prepayment_input: "",
      Transfer_Taxes_input: "",
      Employee_Costs_input: "",
      Other_Costs_input: ""
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
   let basic_data = action.payload.basic_info_datum
    return {
            ...state,
            modelData: action.payload,
            BasicInfoFormData: {
              CompanyA_id: basic_data[0].id,
              CompanyB_id: basic_data[1].id,
              CompanyA_ticker: basic_data[0].ticker,
              CompanyB_ticker: basic_data[1].ticker,
              CompanyA_codename: basic_data[0].codename,
              CompanyB_codename: basic_data[1].codename,
              CompanyA_acquiror: basic_data[0].acquiror
        }
      }
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
         return {
           ...state,
           modelData: {...state.modelData,
            basic_info_datum:[      ...state.modelData.basic_info_datum, {...action.payload}]}
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
