import React from 'react';
import { configure, shallow } from "enzyme";
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Select from './SelectComponent';
import DropDown from '../../widget/dropDown';
import Button from '../../widget/button';

configure({adapter:new Adapter()})


describe('<Select component/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallow(<Select/>);
    })
    it('should render select component',()=>{
        expect(wrapper.find('.item1')).to.have.lengthOf(1);
    })
    it('should render dropdown component twice',()=>{
        expect(wrapper.find(DropDown)).to.have.length(2);
    })
    it('should render button component twice',()=>{
        expect(wrapper.find(Button)).to.have.length(2);
    })
})