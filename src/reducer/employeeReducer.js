
const initialState={
    employeeDetails:{},
    showLoader: false,
};

const employeeReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SET_EMPLOYEE_DATA':
        return{
            ...state,
            employeeDetails:action.payload
        }
        case 'CLEAR_EMPLOYEE_DATA':
        return{
            ...state,
            employeeDetails:action.payload
        }
        case 'SHOW_LOADER':
        return{
            ...state,
            showLoader:action.payload
        }
        default:
        return state
    }
};

export default employeeReducer;
