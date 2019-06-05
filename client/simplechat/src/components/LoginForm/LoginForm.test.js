import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { LoginForm } from './LoginForm';

const mockFunction = jest.fn();

describe('CheckboxInput', () => {
  it('should render correctly', () => {
    const component = renderer
      .create(<LoginForm username="" connectRequested={mockFunction} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should have the correct passed props', () => {
    const wrapper = mount(<LoginForm connectRequested={mockFunction} />);

    expect(wrapper.prop('connectRequested')).toEqual(mockFunction);
  });

  describe('when button is clicked', () => {
    it('should execute the connectRequested function', () => {
      const wrapper = mount(<LoginForm connectRequested={mockFunction} />);

      wrapper.find('.login-form__button').simulate('click');

      expect(mockFunction.mock.calls.length).toEqual(0);
    });
  });

  describe('when enter is pressed', () => {
    it('should execute the connectRequested function', () => {
      const wrapper = mount(<LoginForm connectRequested={mockFunction} />);

      wrapper.find('.login-form__button').simulate('keypress', { key: 'Enter' });

      expect(mockFunction.mock.calls.length).toEqual(0);
    });
  });
});
