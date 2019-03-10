import React from 'react';
import { configure, shallow } from "enzyme";
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import BasicDetails from './basicDetailsComponent'

configure({adapter:new Adapter()})


describe('<BasicDetails componet/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper =shallow(<BasicDetails/>);
    })
    it('should render basic details component',()=>{
        expect(wrapper.find('img').hasClass('img-thumbnail')).to.eq(true);
    })

})