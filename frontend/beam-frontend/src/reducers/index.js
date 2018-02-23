export default function companyBasicInfoReducer(
  state = {
    allProjects: [],
    selectedProjectData: {
      ProjectId: '',
      ProjectName: '',
      Deal_type: '',
      User_id: ''},
    companiesData: [],
    selectedCompany: null, loading: false,
    formData: {
      CompanyA_ticker: "",
      CompanyB_ticker: "",
      CompanyA_codename: "",
      CompanyB_codename: "",
      CompanyA_acquiror: false} },
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
        companiesData: action.payload,
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

      case "SELECT_COMPANY":
        return {
          ...state,
          formData: action.payload
        };

      case "UPDATE_NEWPROJECT_FORM":
        return {
          ...state,
          formData: {...state.formData, ...action.payload}
        }

        // case "SUBMIT_NEWPROJECT_FORM":
        //   return {
        //     ...state,
        //     selectedProjectData: {...state.selectedProjectData, ...action.payload.selectedProjectData},
        //     companiesData: {...state.companiesData, ...action.payload.companiesData}
        //   }

          case "SELECT_PROJECT":
            return {
              ...state,
              selectedProjectData: state.allProjects.find(project => {
                if (project.id === action.payload.id) {
                  return {
                  ProjectId: project.id,
                  ProjectName: project.name,
                  Deal_type: project.deal_type,
                  User_id: project.user.id
                }
              } else {
                return {
                ...state,
                selectedProjectData: {...state.selectedProjectData}
               }
              }
            })}

          case "SET_NEW_PROJECT":
           return {
                   ...state,
                   selectedProjectData: action.payload
                 };


      case "SET_COMPANY":
        return {
          ...state,
          companiesData: state.companiesData.map(company => {
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
