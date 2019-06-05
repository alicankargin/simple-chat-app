import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MessageForm } from './MessageForm';

const mockFunction = jest.fn();

describe('MessageForm', () => {
  it('should render correctly', () => {
    const component = renderer
      .create(<MessageForm username="" messageSend={mockFunction} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should have the correct passed props', () => {
    const wrapper = mount(<MessageForm username="mockUsername" messageSend={mockFunction} />);

    expect(wrapper.prop('username')).toEqual('mockUsername');
    expect(wrapper.prop('messageSend')).toEqual(mockFunction);
  });

  describe('when button is clicked', () => {
    it('should execute the messageSend function', () => {
      const wrapper = mount(
        <MessageForm username="mockUsername" connectRequested={mockFunction} />,
      );

      wrapper.find('.message-form__button').simulate('click');

      expect(mockFunction.mock.calls.length).toEqual(0);
    });
  });

  describe('when enter is pressed', () => {
    it('should execute the messageSend function', () => {
      const wrapper = mount(
        <MessageForm username="mockUsername" connectRequested={mockFunction} />,
      );

      wrapper.find('.message-form__button').simulate('keypress', { key: 'Enter' });

      expect(mockFunction.mock.calls.length).toEqual(0);
    });
  });
});
