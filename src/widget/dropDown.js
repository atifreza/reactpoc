import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../assets/styles/widgets/dropdown/dropdown.css';

export default class DropDownWidget extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedValue: this.props.selectedEmployee || 'Select',
      options:this.props.options,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  changeValue=(e)=>{
    this.setState({selectedValue: e.currentTarget.textContent},
      ()=>this.props.changeTriggered(this.state.selectedValue,this.props.dropDownName)
      )

  }
  shouldComponentUpdate(nextProps){
    if(JSON.stringify(this.state.options)!==JSON.stringify(nextProps.options)){
      this.setState({
        options:nextProps.options
      })
    }
    if( JSON.stringify(this.state.selectedValue)!==JSON.stringify(nextProps.selectedValue)){
      this.setState({
        selectedValue:nextProps.selectedValue
      })
    }
    return true;
  }
  
  render() {
      let dropDownOptions= this.state.options.map((data,index)=>{
        return (
          <DropdownItem  onClick={this.changeValue}>{data}</DropdownItem>
        )
      })
     
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle caret className="dropdown-color">
          {this.state.selectedValue}
        </DropdownToggle>
        <DropdownMenu> 
          { dropDownOptions }
        </DropdownMenu>
      </Dropdown>
    );
  }
}