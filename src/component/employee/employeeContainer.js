import React, { Component } from 'react';
import Select from './SelectComponent';
import BasicDetails from './basicDetailsComponent';
import * as actionCreators from '../../action/employeeAction';
import { connect } from 'react-redux';
import Loader from '../loader/loaderComponent';
import '../../assets/styles/component/employee.css'


const departments=['HR','ENGINEERING'];
const hrEmployeeIds=['1','2','3','4','5'];
const engEmployeeIds=['6','7','8','9','10'];
export class EmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            employeeIds:[...hrEmployeeIds , ...engEmployeeIds],
            selectedEmployee:'Select',
            selectedDepartment:'Select',
            enableClearButton:false
        }
    }
    handleDropdown=(selectedValue,selectedOption)=>{
        selectedOption==='department' ? this.setState({
            employeeIds:selectedValue ==='HR'?hrEmployeeIds:engEmployeeIds,
            selectedEmployee:'Select',
            selectedDepartment:selectedValue,

        }): this.setState({
            selectedEmployee:selectedValue,
        })
    }
    handleButtonAction=(buttonName)=>{
       if( buttonName ==='GetDetails' ){ 
            this.props.employeeAction(this.state.selectedEmployee);
           this.setState({
            enableClearButton: true
           })
       }else{
           this.props.clearEmployeeData({});
           this.setState({
            employeeIds:[...hrEmployeeIds , ...engEmployeeIds],
            selectedEmployee:'Select',
            selectedDepartment:'Select',
            enableClearButton:false
           })
       }

    }
  render() {
    return (
      <div className="grid-container">
        <Select
        departments={departments}
        employeeIds={this.state.employeeIds}
        selectedValues={this.handleDropdown}
        selectedEmployee={this.state.selectedEmployee}
        buttonAction={this.handleButtonAction}
        enableClearButton={!this.state.enableClearButton}
        selectedDepartment={this.state.selectedDepartment}
        />
        <div className="item4">
       {Object.keys(this.props.employee.employeeDetails).length>0 ?
       <BasicDetails
        id={this.props.employee.employeeDetails.id}
        name={`${this.props.employee.employeeDetails.first_name} ${this.props.employee.employeeDetails.last_name}`}
        url={this.props.employee.employeeDetails.avatar}
       />:
       this.props.employee.showLoader && <Loader/>
       
       }
       </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
    ...state
   })

export default connect(mapStateToProps,actionCreators)(EmployeeContainer);
