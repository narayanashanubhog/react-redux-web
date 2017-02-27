import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';
import {mount,shallow} from 'enzyme';

function setup(saving){
    let props={
        course: {}, saving:saving, errors:{}, 
        onChange:()=>{},
        onSave:()=>{}
    };
    return shallow(<CourseForm{...props}/>);
}
describe('CourseForm via Enzyme',()=>{
  it('renders from and hi',()=>{
        const wrapper=setup(false);
       expect (wrapper.find('form').length).toBe(1);
        expect (wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" when not saving',()=>{
         const wrapper=setup(false);
           expect(wrapper.find('input').props().value).toBe('Save');
    });

      it('save button is labeled "Saving.." when  saving',()=>{
         const wrapper=setup(true);
         expect(wrapper.find('input').props().value).toBe('Saving..');
    });
});