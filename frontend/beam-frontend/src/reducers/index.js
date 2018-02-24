export default function companyBasicInfoReducer(
  state = {
    allProjects: [],
    selectedProjectData: {
      ProjectId: '',
      ProjectName: '',
      Deal_type: '',
      User_id: ''},
    modelData: [],
    selectedCompany: null, loading: false,
    newProjectFormData: {
      ProjectId: '',
      ProjectName: '',
      Deal_type: '',
      User_id: ''},
    BasicInfoFormData: {
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
      Percentage_Stock: ''}
     },
  action
) {
  switch (action.type) {

    case "COMPANIES_LOADING":
      return {
        ...state,
        loading: true
      }
    case "COMPANY_LOAD":
      return {
        ...state,
        modelData: action.payload,
        loading: false
      };
     case "PROJECTS_LOAD":
      return {
              ...state,
              allProjects: action.payload
            };

    case 'ADD_COMPANY':
      return state.concat(action.company);

    case 'REMOVE_COMPANY':
      return state.filter(company => company.id !== action.companyId);

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

        // case "SUBMIT_NEWPROJECT_FORM":
        //   return {
        //     ...state,
        //     selectedProjectData: {...state.selectedProjectData, ...action.payload.selectedProjectData}
        //   }

          case "SELECT_PROJECT":
           let projectToSet = state.allProjects.find(project => project.id === parseInt(action.payload.id))
            return {
              ...state,
              selectedProjectData: projectToSet
              }

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

      case "SET_COMPANY":
        return {
          ...state,
          modelData: state.modelData.map(company => {
            if(company.id === action.payload.id) {
              return action.payload
            } else {
              return company
          }
        })
      }

    default:
      return state;
  }
}
