import React from 'react';
import { configure, shallow } from "enzyme";
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Button from './button';

configure({adapter:new Adapter()})


describe('<Button component/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallow(<Button/>);
    })
    it('should render button component',()=>{
        expect(wrapper.find('.btn-widget')).to.have.lengthOf(1);
    })
})