import React from 'react';
import DropDownWidget from '../../widget/dropDown';
import ButtonWidget from '../../widget/button';

const Select=(props)=>{
    let changeTriggered=(selectedValue,selectedOption)=>{
         props.selectedValues(selectedValue,selectedOption);

    }
    console.log('department',props.selectedDepartment==='Select'&& props.selectedEmployee==='Select');
    console.log('employee',props.selectedEmployee);
    return(
        <React.Fragment>
        <div className="item1">
        <label>Departments:</label>
        <DropDownWidget
        dropDownName={'department'}
        options={props.departments}
        changeTriggered={changeTriggered}
        selectedValue={props.selectedDepartment}
        />
        </div>
        <div className="item2">
        <label>Employee ID:</label>
        <fieldset disabled={props.selectedDepartment!=='Select'?false:true}>
        <DropDownWidget
        dropDownName={'employeeIds'}
        options={props.employeeIds}
        changeTriggered={changeTriggered}
        selectedValue={props.selectedEmployee}
        />
        </fieldset>
        </div>
         <div className="item3">
         <ButtonWidget
              color={props.selectedDepartment!=='Select'&& props.selectedEmployee!=='Select'?"primary":"secondary"}
              disabled={props.selectedDepartment!=='Select'&& props.selectedEmployee!=='Select'?false:true}
              buttonAction={()=>props.buttonAction('GetDetails')}
              buttonLabel={'GetDetails'}
              />
              {' '}
              <ButtonWidget
              color={props.enableClearButton?"secondary":"primary"}
              disabled={props.enableClearButton}
              buttonAction={()=>props.buttonAction('Clear')}
              buttonLabel={'Clear'}
              />
              
             
              </div>
              </React.Fragment>
    );
};

export default Select;