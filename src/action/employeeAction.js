import axios from 'axios';

 export function employeeAction(id){
    return dispatch => {
      dispatch(showLoader(true));
    axios.get(`https://reqres.in/api/users/${id}`)
          .then(response => {
            dispatch(showLoader(false));
            dispatch(setEmployeeData(response.data))
          })
          .catch((error) => {
            console.log("error",error)
          })
}
 //)
 }

 export const showLoader=(data)=>{
  return dispatch=>{dispatch({
       type:"SHOW_LOADER",
       payload:data,

   })}
}

 export const setEmployeeData=(data)=>{
    return dispatch=>{dispatch({
         type:"SET_EMPLOYEE_DATA",
         payload:data.data,

     })}
 }

 export const clearEmployeeData=(data)=>{
    return dispatch=>{dispatch({
         type:"CLEAR_EMPLOYEE_DATA",
         payload:data,

     })}
 }