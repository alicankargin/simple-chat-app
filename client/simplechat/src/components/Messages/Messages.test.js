import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Messages } from './Messages';

const mockMessages = [
  { id: 1, date: '2019-06-05T18:10:42.954+0000', text: 'mockText', username: 'mockUsername' },
  {
    id: 2,
    date: '2019-06-06T18:10:42.954+0000',
    text: 'anotherMockText',
    username: 'anotherMockUsername',
  },
];

describe('MessageForm', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Messages username="" messages={[]} />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should have the correct passed props', () => {
    const wrapper = mount(<Messages username="mockUsername" messages={mockMessages} />);

    expect(wrapper.prop('username')).toEqual('mockUsername');
    expect(wrapper.prop('messages')).toEqual(mockMessages);
  });

  it('should render correct number of messages', () => {
    const wrapper = mount(<Messages username="mockUsername" messages={mockMessages} />);

    expect(wrapper.find('.messages__message')).toHaveLength(2);
  });

  it('should render username, text and date of a message', () => {
    const wrapper = mount(<Messages username="mockUsername" messages={mockMessages} />);
    const messageWrapper = wrapper.find('.messages__message').first();

    expect(messageWrapper.find('.messages__username')).toHaveLength(1);
    expect(messageWrapper.find('.messages__text')).toHaveLength(1);
    expect(messageWrapper.find('.messages__date')).toHaveLength(1);
  });
});
